import urllib.request
import re
import json
import os

# URLs
PRIMARY_URL = "https://raw.githubusercontent.com/mahavivo/english-wordlists/master/%E5%B0%8F%E5%AD%A6%E8%8B%B1%E8%AF%AD%E5%A4%A7%E7%BA%B2%E8%AF%8D%E6%B1%87.txt"
ZHONGKAO_URL = "https://raw.githubusercontent.com/mahavivo/english-wordlists/master/%E4%B8%AD%E8%80%83%E8%8B%B1%E8%AF%AD%E8%AF%8D%E6%B1%87%E8%A1%A8.txt"

def download_content(url):
    print(f"Downloading {url}...")
    try:
        # User Agent to avoid some blocks
        req = urllib.request.Request(
            url, 
            data=None, 
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        )
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return ""

def parse_zhongkao(content):
    words = []
    # Format: ability [əˈbɪlɪtɪ] n. 能力;才能
    
    # Clean BOM
    content = content.replace('\ufeff', '')
    
    lines = content.split('\n')
    current_id = 1
    
    for line in lines:
        line = line.strip()
        if not line or len(line) < 2:
            continue
            
        # Regex: Start with word (letters, maybe space, hyphens), then maybe [phonetic], then meaning
        # Enhanced regex to capture cases like "a (an)"
        match = re.search(r'^([a-zA-Z\s\(\)\-\.]+)\s*(?:\[([^\]]+)\])?\s+(.*)$', line)
        if match:
            word_text = match.group(1).strip()
            if not word_text or len(word_text) < 1: continue

            phonetic_text = match.group(2).strip() if match.group(2) else ""
            meaning_text = match.group(3).strip()
            
            if not phonetic_text:
                phonetic_text = "" 
            else:
                phonetic_text = f"/{phonetic_text}/"

            words.append({
                "id": current_id,
                "word": word_text,
                "phonetic": phonetic_text,
                "meaning": meaning_text,
                "example": "" 
            })
            current_id += 1
            
    return words

def parse_primary_list(content):
    words = set()
    lines = content.split('\n')
    for line in lines:
        w = line.strip()
        if w and w.replace('-', '').isalpha():
            words.add(w.lower())
    return words

def generate_js(all_words, primary_set):
    primary_words = []
    junior_words = []
    
    for w in all_words:
        # Check clean word (remove content in parens for matching)
        clean_w = re.sub(r'\(.*?\)', '', w['word']).strip().lower()
        if clean_w in primary_set or w['word'].lower() in primary_set:
            primary_words.append(w)
        else:
            junior_words.append(w)
            
    # Distribute Primary into 3,4,5,6
    def distribute(source, buckets):
        result = {b: [] for b in buckets}
        if not source: return result
        
        chunk_size = (len(source) // len(buckets)) + 1
        for i, word in enumerate(source):
            bucket_idx = i // chunk_size
            if bucket_idx >= len(buckets):
                bucket_idx = len(buckets) - 1
            result[buckets[bucket_idx]].append(word)
        return result

    primary_distributed = distribute(primary_words, [3,4,5,6])
    junior_distributed = distribute(junior_words, [7,8,9])
    
    js_content = """/**
 * utils/words.js - 单词数据库
 * Generated from Mahavivo English Wordlists (Primary & Zhongkao)
 */

"""
    all_grade_vars = []
    
    # Process Primary
    for grade in [3,4,5,6]:
        w_list = primary_distributed[grade]
        var_name = f"GRADE_{grade}"
        all_grade_vars.append(var_name)
        js_content += f"const {var_name} = " + json.dumps(w_list, ensure_ascii=False, indent=2) + ";\n"

    # Process Junior
    for grade in [7,8,9]:
        w_list = junior_distributed[grade]
        var_name = f"GRADE_{grade}"
        all_grade_vars.append(var_name)
        js_content += f"const {var_name} = " + json.dumps(w_list, ensure_ascii=False, indent=2) + ";\n"

    js_content += "\nconst ALL_WORDS = [..." + ", ...".join(all_grade_vars) + "];\n\n"
    
    js_content += "const WORDS_BY_GRADE = {\n"
    for grade in [3,4,5,6,7,8,9]:
        js_content += f"    {grade}: GRADE_{grade},\n"
    js_content += "};\n\n"
    
    # Common helper functions
    helpers = """/**
 * 获取所有单词
 */
function getAllWords() {
    return ALL_WORDS;
}

/**
 * 根据年级获取单词
 */
function getWordsByGrade(grade) {
    return WORDS_BY_GRADE[grade] || [];
}

/**
 * 根据ID获取单词
 */
function getWordById(id) {
    return ALL_WORDS.find(w => w.id === id) || null;
}

/**
 * 根据ID数组获取单词列表
 */
function getWordsByIds(ids) {
    return ids.map(id => getWordById(id)).filter(w => w !== null);
}

/**
 * 获取随机单词
 */
function getRandomWords(count = 10, grade = null) {
    const source = grade ? getWordsByGrade(grade) : ALL_WORDS;
    const shuffled = source.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

/**
 * 搜索单词
 */
function searchWords(keyword) {
    const lower = keyword.toLowerCase();
    return ALL_WORDS.filter(w =>
        w.word.toLowerCase().includes(lower) ||
        w.meaning.includes(keyword)
    );
}

/**
 * 获取单词总数
 */
function getTotalCount() {
    return ALL_WORDS.length;
}

/**
 * 获取年级信息
 */
function getGradeInfo() {
    return [
        { grade: 3, name: '三年级', count: GRADE_3.length },
        { grade: 4, name: '四年级', count: GRADE_4.length },
        { grade: 5, name: '五年级', count: GRADE_5.length },
        { grade: 6, name: '六年级', count: GRADE_6.length },
        { grade: 7, name: '初一 (扩展)', count: GRADE_7.length },
        { grade: 8, name: '初二 (扩展)', count: GRADE_8.length },
        { grade: 9, name: '初三 (扩展)', count: GRADE_9.length }
    ];
}

module.exports = {
    getAllWords,
    getWordsByGrade,
    getWordById,
    getWordsByIds,
    getRandomWords,
    searchWords,
    getTotalCount,
    getGradeInfo,
    WORDS_BY_GRADE,
    ALL_WORDS
};
"""
    js_content += helpers
    return js_content

def main():
    print("Fetching Primary list...")
    p_content = download_content(PRIMARY_URL)
    primary_set = parse_primary_list(p_content)
    print(f"Loaded {len(primary_set)} primary words.")
    
    print("Fetching Zhongkao list...")
    z_content = download_content(ZHONGKAO_URL)
    all_words_list = parse_zhongkao(z_content)
    print(f"Loaded {len(all_words_list)} total words from Zhongkao list.")
    
    if len(all_words_list) < 100:
        print("Error: Too few words loaded. Check format/download.")
        return

    js_out = generate_js(all_words_list, primary_set)
    
    output_path = "utils/words.js" # Assumes running from root e:\code_self\GuaguaLearn
    if not os.path.exists("utils"):
        os.makedirs("utils")

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_out)
    print("utils/words.js has been updated.")

if __name__ == "__main__":
    main()
