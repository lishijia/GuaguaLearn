/**
 * utils/words.js - 单词数据库
 * Generated from Mahavivo English Wordlists (Primary & Zhongkao)
 */

const GRADE_3 = [
  {
    "id": 1,
    "word": "a (an)",
    "phonetic": "/ə, eɪ(ən)/",
    "meaning": "art. 一（个、件……）",
    "example": ""
  },
  {
    "id": 4,
    "word": "about",
    "phonetic": "/əˈbaʊt/",
    "meaning": "ad. 大约;到处;四处 prep. 关于;在各处;四处",
    "example": ""
  },
  {
    "id": 18,
    "word": "afraid",
    "phonetic": "/əˈfreɪd/",
    "meaning": "a. 害怕的；担心",
    "example": ""
  },
  {
    "id": 20,
    "word": "after",
    "phonetic": "/ˈɑːftə(r)/",
    "meaning": "ad. 在后；后来 prep. 在…之后 conj. 在…以后",
    "example": ""
  },
  {
    "id": 21,
    "word": "afternoon",
    "phonetic": "/ɑːftəˈnuːn/",
    "meaning": "n. 下午，午后",
    "example": ""
  },
  {
    "id": 22,
    "word": "again",
    "phonetic": "/əˈɡeɪn/",
    "meaning": "ad. 再一次；再，又",
    "example": ""
  },
  {
    "id": 34,
    "word": "all",
    "phonetic": "/ɔːl/",
    "meaning": "ad. 全部地 a. 全（部）;所有的;总;整 pron. 全部;全体",
    "example": ""
  },
  {
    "id": 40,
    "word": "also",
    "phonetic": "/ˈɔːlsəʊ/",
    "meaning": "ad. 也",
    "example": ""
  },
  {
    "id": 42,
    "word": "always",
    "phonetic": "/ˈɔːlweɪz/",
    "meaning": "ad. 总是；一直；永远",
    "example": ""
  },
  {
    "id": 48,
    "word": "and",
    "phonetic": "/ənd, ænd/",
    "meaning": "conj. 和；又",
    "example": ""
  },
  {
    "id": 50,
    "word": "angry",
    "phonetic": "/ˈænɡrɪ/",
    "meaning": "a. 生气的，愤怒的",
    "example": ""
  },
  {
    "id": 51,
    "word": "animal",
    "phonetic": "/ˈænɪm(ə)l/",
    "meaning": "n. 动物",
    "example": ""
  },
  {
    "id": 53,
    "word": "answer",
    "phonetic": "/ˈɑːnsə(r); (US) ˈænsər/",
    "meaning": "n. 回答,答复;答案 v. 回答,答复;（作出）答案",
    "example": ""
  },
  {
    "id": 54,
    "word": "any",
    "phonetic": "/ˈenɪ/",
    "meaning": "pron. 任何的;（用于疑问句、否定句）一些；什么",
    "example": ""
  },
  {
    "id": 61,
    "word": "apple",
    "phonetic": "/ˈæp(ə)l/",
    "meaning": "n. 苹果",
    "example": ""
  },
  {
    "id": 65,
    "word": "arm",
    "phonetic": "/ɑːm/",
    "meaning": "n. 臂,支架,（美）武器,武力",
    "example": ""
  },
  {
    "id": 70,
    "word": "art",
    "phonetic": "/ɑːt/",
    "meaning": "n. 艺术，美术；技艺",
    "example": ""
  },
  {
    "id": 76,
    "word": "ask",
    "phonetic": "/ɑːsk/",
    "meaning": "v. 问；请求，要求；邀请",
    "example": ""
  },
  {
    "id": 79,
    "word": "at",
    "phonetic": "/æt/",
    "meaning": "prep. 在（几点钟）;在（某处）",
    "example": ""
  },
  {
    "id": 85,
    "word": "aunt",
    "phonetic": "/ɑːnt; (US) ænt/",
    "meaning": "n. 伯母；舅母；婶；姑；姨",
    "example": ""
  },
  {
    "id": 88,
    "word": "autumn",
    "phonetic": "/ˈɔːtəm/",
    "meaning": "n. 秋天，秋季",
    "example": ""
  },
  {
    "id": 92,
    "word": "baby",
    "phonetic": "/ˈbeɪbɪ/",
    "meaning": "n. 婴儿",
    "example": ""
  },
  {
    "id": 93,
    "word": "back",
    "phonetic": "/bæk/",
    "meaning": "ad. 回（原处）；向后 a. 后面的 n. 背后，后部；背",
    "example": ""
  },
  {
    "id": 94,
    "word": "bad",
    "phonetic": "",
    "meaning": "(worse, worst) [bæd] a. 坏的；有害的，不利的；严重的",
    "example": ""
  },
  {
    "id": 97,
    "word": "ball",
    "phonetic": "/bɔːl/",
    "meaning": "n. 球 n. 舞会",
    "example": ""
  },
  {
    "id": 100,
    "word": "banana",
    "phonetic": "/bəˈnɑːnə; (US) bəˈnænə/",
    "meaning": "n. 香蕉",
    "example": ""
  },
  {
    "id": 107,
    "word": "basketball",
    "phonetic": "/ˈbɑːskɪtbɔːl/",
    "meaning": "n. 篮球",
    "example": ""
  },
  {
    "id": 109,
    "word": "be",
    "phonetic": "/biː/",
    "meaning": "v. 是 (am, is, are, was, were, being, been)；成为",
    "example": ""
  },
  {
    "id": 111,
    "word": "bear",
    "phonetic": "/beə(r)/",
    "meaning": "v. 承受，负担，承担；忍受；容忍 n. 熊",
    "example": ""
  },
  {
    "id": 113,
    "word": "beautiful",
    "phonetic": "/ˈbjuːtɪf(ə)l/",
    "meaning": "a. 美，美丽，美观的",
    "example": ""
  },
  {
    "id": 116,
    "word": "bed",
    "phonetic": "/bed/",
    "meaning": "n. 床",
    "example": ""
  },
  {
    "id": 121,
    "word": "before",
    "phonetic": "/bɪˈfɔː(r)/",
    "meaning": "prep. 在…以前；在…前面 ad. 以前 conj. 在…之前",
    "example": ""
  },
  {
    "id": 124,
    "word": "behind",
    "phonetic": "/bɪˈhaɪnd/",
    "meaning": "prep. (表示位置)在…后面 ad. 在后面；向后",
    "example": ""
  },
  {
    "id": 128,
    "word": "beside",
    "phonetic": "/bɪˈsaɪd/",
    "meaning": "prep. 在…旁边；靠近",
    "example": ""
  },
  {
    "id": 132,
    "word": "bicycle",
    "phonetic": "/ˈbaɪsɪk(ə)l/",
    "meaning": "n. 自行车",
    "example": ""
  },
  {
    "id": 133,
    "word": "big",
    "phonetic": "/bɪɡ/",
    "meaning": "a. 大的",
    "example": ""
  },
  {
    "id": 134,
    "word": "bike",
    "phonetic": "",
    "meaning": "= bicycle [baɪk] n. 自行车",
    "example": ""
  },
  {
    "id": 138,
    "word": "bird",
    "phonetic": "/bəːd/",
    "meaning": "n. 鸟",
    "example": ""
  },
  {
    "id": 140,
    "word": "birthday",
    "phonetic": "/ˈbəːθdeɪ/",
    "meaning": "n. 生日",
    "example": ""
  },
  {
    "id": 142,
    "word": "black",
    "phonetic": "/blæk/",
    "meaning": "n. 黑色 a. 黑色的",
    "example": ""
  },
  {
    "id": 143,
    "word": "blackboard",
    "phonetic": "/ˈblækbɔːd/",
    "meaning": "n. 黑板",
    "example": ""
  },
  {
    "id": 148,
    "word": "blue",
    "phonetic": "/bluː/",
    "meaning": "n. 蓝色 a. 蓝色的 a. 悲伤的；沮丧的",
    "example": ""
  },
  {
    "id": 150,
    "word": "boat",
    "phonetic": "/bəʊt/",
    "meaning": "n. 小船，小舟",
    "example": ""
  },
  {
    "id": 152,
    "word": "body",
    "phonetic": "/bɔːdi/",
    "meaning": "n. 身体",
    "example": ""
  },
  {
    "id": 153,
    "word": "book",
    "phonetic": "/bʊk/",
    "meaning": "n. 书；本子 v. 预定，定（房间、车票等）",
    "example": ""
  },
  {
    "id": 166,
    "word": "box",
    "phonetic": "/bɔks/",
    "meaning": "n. 盒子，箱子",
    "example": ""
  },
  {
    "id": 167,
    "word": "boy",
    "phonetic": "/bɔɪ/",
    "meaning": "n. 男孩",
    "example": ""
  },
  {
    "id": 169,
    "word": "bread",
    "phonetic": "/bred/",
    "meaning": "n. 面包",
    "example": ""
  },
  {
    "id": 171,
    "word": "breakfast",
    "phonetic": "/ˈbrekfəst/",
    "meaning": "n. 早餐",
    "example": ""
  },
  {
    "id": 175,
    "word": "bring",
    "phonetic": "",
    "meaning": "(brought, brought) [brɪŋ] vt. 拿来，带来，取来",
    "example": ""
  },
  {
    "id": 181,
    "word": "brother",
    "phonetic": "/ˈbrʌðə(r)/",
    "meaning": "n. 兄；弟",
    "example": ""
  },
  {
    "id": 183,
    "word": "brown",
    "phonetic": "/braʊn/",
    "meaning": "n. 褐色，棕色 a. 褐色的，棕色的",
    "example": ""
  },
  {
    "id": 189,
    "word": "bus",
    "phonetic": "/bʌs/",
    "meaning": "n. 公共汽车",
    "example": ""
  },
  {
    "id": 192,
    "word": "busy",
    "phonetic": "/ˈbɪzɪ/",
    "meaning": "a. 忙（碌）的",
    "example": ""
  },
  {
    "id": 193,
    "word": "but",
    "phonetic": "/bət, bʌt/",
    "meaning": "conj. 但是，可是 prep. 除了, 除……外",
    "example": ""
  },
  {
    "id": 197,
    "word": "buy",
    "phonetic": "",
    "meaning": "(bought,bought) [baɪ] vt. 买",
    "example": ""
  },
  {
    "id": 198,
    "word": "by",
    "phonetic": "/baɪ/",
    "meaning": "prep. 在…旁；不迟于；被；用；乘（车）",
    "example": ""
  },
  {
    "id": 199,
    "word": "bye",
    "phonetic": "/ˈbaɪbaɪ/",
    "meaning": "int. 再见",
    "example": ""
  },
  {
    "id": 202,
    "word": "cake",
    "phonetic": "/keɪk/",
    "meaning": "n. 蛋糕，糕点；饼",
    "example": ""
  },
  {
    "id": 203,
    "word": "call",
    "phonetic": "/kɔːl/",
    "meaning": "n. 喊，叫；电话，通话 v. 称呼；呼唤；喊，叫",
    "example": ""
  },
  {
    "id": 207,
    "word": "can (could)",
    "phonetic": "/ken, kæn/",
    "meaning": "v. 可能；能够；可以 n.（美）罐头；罐子",
    "example": ""
  },
  {
    "id": 212,
    "word": "candy",
    "phonetic": "/ˈkændɪ/",
    "meaning": "n. 糖果",
    "example": ""
  },
  {
    "id": 215,
    "word": "cap",
    "phonetic": "/kæp/",
    "meaning": "n. 帽子；（瓶子的）盖",
    "example": ""
  },
  {
    "id": 219,
    "word": "car",
    "phonetic": "/kɑː(r)/",
    "meaning": "n. 汽车，小卧车",
    "example": ""
  },
  {
    "id": 220,
    "word": "card",
    "phonetic": "/kɑːd/",
    "meaning": "n.卡片；名片；纸牌",
    "example": ""
  },
  {
    "id": 226,
    "word": "cat",
    "phonetic": "/kæt/",
    "meaning": "n. 猫",
    "example": ""
  },
  {
    "id": 237,
    "word": "chair",
    "phonetic": "/tʃeə(r)/",
    "meaning": "n. 椅子",
    "example": ""
  },
  {
    "id": 252,
    "word": "chicken",
    "phonetic": "/ˈtʃɪkən/",
    "meaning": "n. 鸡；鸡肉",
    "example": ""
  },
  {
    "id": 253,
    "word": "child",
    "phonetic": "",
    "meaning": "(复children) [tʃaɪld] n. 孩子，儿童",
    "example": ""
  },
  {
    "id": 255,
    "word": "China",
    "phonetic": "/ˈtʃaɪnə/",
    "meaning": "n. 中国",
    "example": ""
  },
  {
    "id": 256,
    "word": "Chinese",
    "phonetic": "/tʃaɪˈniːz/",
    "meaning": "a. 中国的；中国人的；汉语的 n. 中国人；汉语，",
    "example": ""
  },
  {
    "id": 261,
    "word": "cinema",
    "phonetic": "/ˈsɪnimə/",
    "meaning": "n. 电影院；电影",
    "example": ""
  },
  {
    "id": 263,
    "word": "city",
    "phonetic": "/ˈsɪtɪ/",
    "meaning": "n. 市，城市，都市",
    "example": ""
  },
  {
    "id": 264,
    "word": "class",
    "phonetic": "/klɑːs; (US) klæs/",
    "meaning": "n.（学校的）班；年级；课",
    "example": ""
  },
  {
    "id": 267,
    "word": "clean",
    "phonetic": "/kliːn/",
    "meaning": "vt. 弄干净，擦干净 a. 清洁的，干净的",
    "example": ""
  },
  {
    "id": 270,
    "word": "clever",
    "phonetic": "/ˈklevə(r)/",
    "meaning": "a. 聪明的，伶俐的",
    "example": ""
  },
  {
    "id": 272,
    "word": "clock",
    "phonetic": "/klɔk/",
    "meaning": "n. 钟",
    "example": ""
  },
  {
    "id": 273,
    "word": "close",
    "phonetic": "/kləʊz/",
    "meaning": "a. 亲密的；近，靠近 ad. 近，靠近 vt. 关，关闭",
    "example": ""
  },
  {
    "id": 275,
    "word": "clothes",
    "phonetic": "/klɔðz; (US) kləʊz/",
    "meaning": "n. 衣服；各种衣物",
    "example": ""
  },
  {
    "id": 277,
    "word": "cloudy",
    "phonetic": "/ˈklaʊdɪ/",
    "meaning": "a. 多云的，阴天的",
    "example": ""
  },
  {
    "id": 280,
    "word": "coat",
    "phonetic": "/kəʊt/",
    "meaning": "n. 外套；涂层；表皮；皮毛",
    "example": ""
  },
  {
    "id": 287,
    "word": "cold",
    "phonetic": "/kəʊld/",
    "meaning": "a. 冷的，寒的 n. 寒冷；感冒，伤风",
    "example": ""
  },
  {
    "id": 290,
    "word": "colour",
    "phonetic": "",
    "meaning": "(美color) ['kʌlə] n. 颜色 vt. 给…着色，涂色",
    "example": ""
  },
  {
    "id": 291,
    "word": "come",
    "phonetic": "",
    "meaning": "(came, come) [kʌm] vi. 来，来到",
    "example": ""
  },
  {
    "id": 299,
    "word": "computer",
    "phonetic": "/kəmˈpjuːtə(r)/",
    "meaning": "n. 电子计算机",
    "example": ""
  },
  {
    "id": 310,
    "word": "cook",
    "phonetic": "/kʊk/",
    "meaning": "n. 炊事员,厨师 v. 烹调,做饭",
    "example": ""
  },
  {
    "id": 312,
    "word": "cool",
    "phonetic": "/kuːl/",
    "meaning": "a. 凉的，凉爽的；酷",
    "example": ""
  },
  {
    "id": 326,
    "word": "cousin",
    "phonetic": "/ˈkʌz(ə)n/",
    "meaning": "n. 堂（表）兄弟，堂（表）姐妹",
    "example": ""
  },
  {
    "id": 328,
    "word": "cow",
    "phonetic": "/kaʊ/",
    "meaning": "n. 母牛，奶牛",
    "example": ""
  },
  {
    "id": 335,
    "word": "cry",
    "phonetic": "/kraɪ/",
    "meaning": "n. 叫喊；哭声 v. 喊叫；哭",
    "example": ""
  },
  {
    "id": 344,
    "word": "dad",
    "phonetic": "",
    "meaning": "= daddy [dæd] n.（口）爸爸，爹爹",
    "example": ""
  },
  {
    "id": 346,
    "word": "dance",
    "phonetic": "/dɑːns; (US) dæns/",
    "meaning": "n.& vi. 跳舞",
    "example": ""
  },
  {
    "id": 352,
    "word": "day",
    "phonetic": "/deɪ/",
    "meaning": "n.（一）天，（一）日；白天",
    "example": ""
  },
  {
    "id": 357,
    "word": "dear",
    "phonetic": "/dɪə(r)/",
    "meaning": "int.（表示惊愕）哎呀！唷！a. 亲爱的；贵的",
    "example": ""
  },
  {
    "id": 374,
    "word": "desk",
    "phonetic": "/desk/",
    "meaning": "n. 书桌，写字台",
    "example": ""
  },
  {
    "id": 387,
    "word": "difficult",
    "phonetic": "/ˈdɪfɪkəlt/",
    "meaning": "a. 难；艰难；不易相处的",
    "example": ""
  },
  {
    "id": 393,
    "word": "dinner",
    "phonetic": "/ˈdɪnə(r)/",
    "meaning": "n. 正餐，宴会",
    "example": ""
  },
  {
    "id": 400,
    "word": "dirty",
    "phonetic": "/ˈdɜːtɪ/",
    "meaning": "a. 脏的",
    "example": ""
  },
  {
    "id": 412,
    "word": "do",
    "phonetic": "",
    "meaning": "(did, done) [dʊ, duː] v. & aux. 做，干",
    "example": ""
  },
  {
    "id": 413,
    "word": "doctor",
    "phonetic": "/ˈdɔktə(r)/",
    "meaning": "n. 医生，大夫；博士",
    "example": ""
  },
  {
    "id": 414,
    "word": "dog",
    "phonetic": "/dɔɡ; (US) dɔːɡ/",
    "meaning": "n. 狗",
    "example": ""
  },
  {
    "id": 417,
    "word": "door",
    "phonetic": "/dɔː(r)/",
    "meaning": "n. 门",
    "example": ""
  },
  {
    "id": 419,
    "word": "down",
    "phonetic": "/daʊn/",
    "meaning": "prep. 沿着，沿…而下 ad. 向下",
    "example": ""
  }
];
const GRADE_4 = [
  {
    "id": 426,
    "word": "draw",
    "phonetic": "",
    "meaning": "(drew, drawn) [drɔː] v. 绘画；绘制；拉，拖；提取（金钱）",
    "example": ""
  },
  {
    "id": 430,
    "word": "dress",
    "phonetic": "/dres/",
    "meaning": "n. 女服，连衣裙；(统指)服装；童装 v. 穿衣",
    "example": ""
  },
  {
    "id": 431,
    "word": "drink",
    "phonetic": "/drɪŋk/",
    "meaning": "n. 饮料；喝酒 ",
    "example": ""
  },
  {
    "id": 436,
    "word": "duck",
    "phonetic": "/dʌk/",
    "meaning": "n. 鸭子",
    "example": ""
  },
  {
    "id": 444,
    "word": "ear",
    "phonetic": "/ɪə(r)/",
    "meaning": "n.耳朵.耳状物；听力，听觉",
    "example": ""
  },
  {
    "id": 445,
    "word": "early",
    "phonetic": "/ɜːlɪ/",
    "meaning": "a. 早的 ad. 早地",
    "example": ""
  },
  {
    "id": 449,
    "word": "easy",
    "phonetic": "/ˈiːzɪ/",
    "meaning": "a. 容易的，不费力的",
    "example": ""
  },
  {
    "id": 450,
    "word": "eat",
    "phonetic": "",
    "meaning": "(ate, eaten) [iːt] v. 吃",
    "example": ""
  },
  {
    "id": 453,
    "word": "egg",
    "phonetic": "/eɡ/",
    "meaning": "n. 蛋；卵",
    "example": ""
  },
  {
    "id": 463,
    "word": "elephant",
    "phonetic": "/ˈelɪfənt/",
    "meaning": "n. 象",
    "example": ""
  },
  {
    "id": 474,
    "word": "English",
    "phonetic": "/ˈɪŋɡlɪʃ/",
    "meaning": "a. 英国的，英国人的，英语的 n. 英语",
    "example": ""
  },
  {
    "id": 498,
    "word": "evening",
    "phonetic": "/ˈiːvnɪŋ/",
    "meaning": "n. 傍晚，晚上",
    "example": ""
  },
  {
    "id": 501,
    "word": "every",
    "phonetic": "/ˈevrɪ/",
    "meaning": "a. 每一，每个的",
    "example": ""
  },
  {
    "id": 516,
    "word": "exercise",
    "phonetic": "/ˈeksəsaɪz/",
    "meaning": "n. 锻炼，做操；练习，习题 vi. 锻炼",
    "example": ""
  },
  {
    "id": 526,
    "word": "eye",
    "phonetic": "/aɪ/",
    "meaning": "n. 眼睛",
    "example": ""
  },
  {
    "id": 527,
    "word": "face",
    "phonetic": "/feɪs/",
    "meaning": "n. 脸 vt. 面向；面对",
    "example": ""
  },
  {
    "id": 532,
    "word": "family",
    "phonetic": "/ˈfæmɪlɪ/",
    "meaning": "n. 家庭；家族；子女",
    "example": ""
  },
  {
    "id": 534,
    "word": "fan",
    "phonetic": "/fæn/",
    "meaning": "n.（电影、运动等的）迷；热心的爱好者（支持者） n. 风扇",
    "example": ""
  },
  {
    "id": 535,
    "word": "far",
    "phonetic": "/fɑː(r)/",
    "meaning": "(farther, farthest 或further , furthest) a.& ad. 远的；远地",
    "example": ""
  },
  {
    "id": 536,
    "word": "farm",
    "phonetic": "/fɑːm/",
    "meaning": "n. 农场；农庄",
    "example": ""
  },
  {
    "id": 537,
    "word": "farmer",
    "phonetic": "/ˈfɑːmə(r)/",
    "meaning": "n. 农民",
    "example": ""
  },
  {
    "id": 542,
    "word": "fast",
    "phonetic": "/ˈfɑːst/",
    "meaning": "a. 快的，迅速的；紧密的 ad. 快地，迅速地；紧密地",
    "example": ""
  },
  {
    "id": 545,
    "word": "father",
    "phonetic": "/ˈfɑːðə(r)/",
    "meaning": "n. 父亲",
    "example": ""
  },
  {
    "id": 547,
    "word": "favourite",
    "phonetic": "/'feivərit/",
    "meaning": "(美 favorite) a. 喜爱的 n. 特别喜爱的人（或物）",
    "example": ""
  },
  {
    "id": 555,
    "word": "feel",
    "phonetic": "",
    "meaning": "(felt, felt) [fiːl] v.& link 感觉，觉得；摸，触",
    "example": ""
  },
  {
    "id": 569,
    "word": "film",
    "phonetic": "/fɪlm/",
    "meaning": "n. 电影；影片；胶卷",
    "example": ""
  },
  {
    "id": 571,
    "word": "find",
    "phonetic": "/faɪnd/",
    "meaning": "(found, found) vt. 找到，发现，感到",
    "example": ""
  },
  {
    "id": 572,
    "word": "fine",
    "phonetic": "/faɪn/",
    "meaning": "a. 晴朗的；美好的；（身体）健康的",
    "example": ""
  },
  {
    "id": 578,
    "word": "fish",
    "phonetic": "/fɪʃ/",
    "meaning": "n. 鱼；鱼肉 vi. 钓鱼；捕鱼",
    "example": ""
  },
  {
    "id": 586,
    "word": "floor",
    "phonetic": "/flɔː(r)/",
    "meaning": "n. 地面，地板.（楼房的）层",
    "example": ""
  },
  {
    "id": 587,
    "word": "flower",
    "phonetic": "/ˈflaʊə(r)/",
    "meaning": "n. 花",
    "example": ""
  },
  {
    "id": 588,
    "word": "fly",
    "phonetic": "",
    "meaning": "(flew, flown) [flaɪ] vi. 飞；飞行；飘动 vt. 放（风筝、飞机模型等）n. 苍蝇",
    "example": ""
  },
  {
    "id": 595,
    "word": "food",
    "phonetic": "/fuːd/",
    "meaning": "n. 食物，食品",
    "example": ""
  },
  {
    "id": 598,
    "word": "foot",
    "phonetic": "",
    "meaning": "(复feet) [fʊt] n. 足，脚；英尺",
    "example": ""
  },
  {
    "id": 599,
    "word": "football",
    "phonetic": "/ˈfutbɔːl/",
    "meaning": "n.（英式）足球；（美式）橄榄球",
    "example": ""
  },
  {
    "id": 600,
    "word": "for",
    "phonetic": "/fə(r), f ɔː (r)/",
    "meaning": "prep. 为了…；因为…；对于…；对…来说 conj. 因为，由于",
    "example": ""
  },
  {
    "id": 626,
    "word": "friend",
    "phonetic": "/frend/",
    "meaning": "n. 朋友",
    "example": ""
  },
  {
    "id": 630,
    "word": "from",
    "phonetic": "/frəm, frɔm/",
    "meaning": "prep. 从,从…起,来自",
    "example": ""
  },
  {
    "id": 632,
    "word": "fruit",
    "phonetic": "/fruːt/",
    "meaning": "n. 水果；果实",
    "example": ""
  },
  {
    "id": 641,
    "word": "game",
    "phonetic": "/ɡeɪm/",
    "meaning": "n. 游戏；运动；比赛",
    "example": ""
  },
  {
    "id": 653,
    "word": "girl",
    "phonetic": "/ɡɜːl/",
    "meaning": "n. 女孩",
    "example": ""
  },
  {
    "id": 654,
    "word": "give",
    "phonetic": "",
    "meaning": "(gave, given) [ɡɪv] vt. 给,递给,付出,给予",
    "example": ""
  },
  {
    "id": 658,
    "word": "go",
    "phonetic": "",
    "meaning": "(went, gone) [ɡəʊ] vi. 去；走；驶；通到；到达 n. 尝试（做某事）",
    "example": ""
  },
  {
    "id": 663,
    "word": "good",
    "phonetic": "",
    "meaning": "(better,best) [ɡʊd] a. 好；良好",
    "example": ""
  },
  {
    "id": 675,
    "word": "grandma",
    "phonetic": "",
    "meaning": "= grandmother [ˈɡrænmɑː, ˈɡrændmʌðə(r)] n. 奶奶；外婆",
    "example": ""
  },
  {
    "id": 676,
    "word": "grandpa",
    "phonetic": "",
    "meaning": "= grandfather [ˈɡrænpɑː, ˈɡrændfɑːðə(r)] n. 爷爷,外公",
    "example": ""
  },
  {
    "id": 681,
    "word": "grass",
    "phonetic": "/ɡrɑːs; (US) ɡræs/",
    "meaning": "n. 草；草场；牧草",
    "example": ""
  },
  {
    "id": 683,
    "word": "great",
    "phonetic": "/ɡreɪt/",
    "meaning": "a. 伟大的,重要的,好极了 ad.（口语）好极了，很好",
    "example": ""
  },
  {
    "id": 685,
    "word": "green",
    "phonetic": "/ɡriːn/",
    "meaning": "a. 绿色的；青的 n. 绿色",
    "example": ""
  },
  {
    "id": 697,
    "word": "hair",
    "phonetic": "/heə(r)/",
    "meaning": "n. 头发",
    "example": ""
  },
  {
    "id": 699,
    "word": "half",
    "phonetic": "/hɑːf; (US) hæf/",
    "meaning": "a.& n. 半，一半，半个",
    "example": ""
  },
  {
    "id": 703,
    "word": "hand",
    "phonetic": "/hænd/",
    "meaning": "n. 手；指针 v. 递;给;交付;交上",
    "example": ""
  },
  {
    "id": 709,
    "word": "happy",
    "phonetic": "/ˈhæpɪ/",
    "meaning": "a. 幸福；快乐的，高兴的",
    "example": ""
  },
  {
    "id": 717,
    "word": "have",
    "phonetic": "",
    "meaning": "(has, had, had) [hæv] vt. 有；吃；喝；进行；经受",
    "example": ""
  },
  {
    "id": 718,
    "word": "he",
    "phonetic": "/heɪ/",
    "meaning": "pron. 他",
    "example": ""
  },
  {
    "id": 719,
    "word": "head",
    "phonetic": "/hed/",
    "meaning": "n. 头；头脑；首脑；标题 a. 头部的；主要的 v. 率领；驶向",
    "example": ""
  },
  {
    "id": 725,
    "word": "healthy",
    "phonetic": "/ˈhelθɪ/",
    "meaning": "a. 健康的，健壮的",
    "example": ""
  },
  {
    "id": 726,
    "word": "hear",
    "phonetic": "",
    "meaning": "(heard, heard) [hɪə(r)] v. 听见；听说",
    "example": ""
  },
  {
    "id": 731,
    "word": "heavy",
    "phonetic": "/ˈhevɪ/",
    "meaning": "a. 重的",
    "example": ""
  },
  {
    "id": 733,
    "word": "hello",
    "phonetic": "/həˈləʊ/",
    "meaning": "int. 喂；你好（表示打招呼，问候或唤起注意）",
    "example": ""
  },
  {
    "id": 734,
    "word": "help",
    "phonetic": "/help/",
    "meaning": "n. & vt. 帮助，帮忙",
    "example": ""
  },
  {
    "id": 737,
    "word": "her",
    "phonetic": "/hɜː(r)/",
    "meaning": "pron. 她(宾格),她的",
    "example": ""
  },
  {
    "id": 738,
    "word": "here",
    "phonetic": "/hɪə(r)/",
    "meaning": "ad. 这里，在这里；向这里",
    "example": ""
  },
  {
    "id": 743,
    "word": "hi",
    "phonetic": "/haɪ/",
    "meaning": "int. 你好（表示打招呼、问候或唤起注意）",
    "example": ""
  },
  {
    "id": 745,
    "word": "high",
    "phonetic": "/haɪ/",
    "meaning": "a. 高的;高度的 ad. 高地",
    "example": ""
  },
  {
    "id": 748,
    "word": "him",
    "phonetic": "/hɪm/",
    "meaning": "pron. 他（宾格）",
    "example": ""
  },
  {
    "id": 750,
    "word": "his",
    "phonetic": "/hɪz/",
    "meaning": "pron. 他的",
    "example": ""
  },
  {
    "id": 756,
    "word": "holiday",
    "phonetic": "/ˈhɔlədi/",
    "meaning": "n. 假日；假期",
    "example": ""
  },
  {
    "id": 757,
    "word": "home",
    "phonetic": "/həʊm/",
    "meaning": "n. 家 ad. 到家；回家",
    "example": ""
  },
  {
    "id": 766,
    "word": "horse",
    "phonetic": "/hɔːs/",
    "meaning": "n. 马",
    "example": ""
  },
  {
    "id": 767,
    "word": "hospital",
    "phonetic": "/ˈhɔspɪt(ə)l/",
    "meaning": "n. 医院",
    "example": ""
  },
  {
    "id": 768,
    "word": "hot",
    "phonetic": "/hɔt,hʌt/",
    "meaning": "a. 热的",
    "example": ""
  },
  {
    "id": 770,
    "word": "hour",
    "phonetic": "/ˈaʊə(r)/",
    "meaning": "n. 小时",
    "example": ""
  },
  {
    "id": 771,
    "word": "house",
    "phonetic": "/haʊs/",
    "meaning": "n. 房子；住宅",
    "example": ""
  },
  {
    "id": 774,
    "word": "how",
    "phonetic": "/haʊ/",
    "meaning": "ad. 怎样,如何；多么",
    "example": ""
  },
  {
    "id": 781,
    "word": "hungry",
    "phonetic": "/ˈhʌŋɡrɪ/",
    "meaning": "a.（饥）饿的",
    "example": ""
  },
  {
    "id": 785,
    "word": "I",
    "phonetic": "/aɪ/",
    "meaning": "pron. 我",
    "example": ""
  },
  {
    "id": 788,
    "word": "idea",
    "phonetic": "/aɪˈdɪə/",
    "meaning": "n. 主意,意见,打算,想法",
    "example": ""
  },
  {
    "id": 791,
    "word": "ill",
    "phonetic": "/ɪl/",
    "meaning": "a. 有病的；不健康的",
    "example": ""
  },
  {
    "id": 798,
    "word": "in",
    "phonetic": "/ɪn/",
    "meaning": "prep. 在…里(内)；在 ad. 在家，在内，向内",
    "example": ""
  },
  {
    "id": 814,
    "word": "interesting",
    "phonetic": "/ˈɪntrɪstɪŋ/",
    "meaning": "a. 有趣的",
    "example": ""
  },
  {
    "id": 823,
    "word": "is",
    "phonetic": "/iz/",
    "meaning": "v. 是",
    "example": ""
  },
  {
    "id": 825,
    "word": "it",
    "phonetic": "/ɪt/",
    "meaning": "pron. 它",
    "example": ""
  },
  {
    "id": 826,
    "word": "its",
    "phonetic": "/ɪts/",
    "meaning": "pron. 它的",
    "example": ""
  },
  {
    "id": 841,
    "word": "juice",
    "phonetic": "/dʒuːs/",
    "meaning": "n. 汁、液",
    "example": ""
  },
  {
    "id": 843,
    "word": "jump",
    "phonetic": "/dʒʌmp/",
    "meaning": "n. 跳跃；跳变 v. 跳跃；惊起；猛扑",
    "example": ""
  },
  {
    "id": 853,
    "word": "kid",
    "phonetic": "/kɪd/",
    "meaning": "n. 小孩",
    "example": ""
  },
  {
    "id": 858,
    "word": "kind",
    "phonetic": "/kaɪnd/",
    "meaning": "n. 种;类 a. 善良,友好的",
    "example": ""
  },
  {
    "id": 863,
    "word": "kitchen",
    "phonetic": "/ˈkɪtʃɪn/",
    "meaning": "n. 厨房",
    "example": ""
  },
  {
    "id": 864,
    "word": "kite",
    "phonetic": "/kaɪt/",
    "meaning": "n. 风筝",
    "example": ""
  },
  {
    "id": 872,
    "word": "lake",
    "phonetic": "/leɪk/",
    "meaning": "n. 湖",
    "example": ""
  },
  {
    "id": 879,
    "word": "late",
    "phonetic": "/leɪt/",
    "meaning": "a. 晚的,迟的 ad. 晚地,迟地",
    "example": ""
  },
  {
    "id": 894,
    "word": "left",
    "phonetic": "/left/",
    "meaning": "a. 左边的 ad. 向左 n. 左,左边",
    "example": ""
  },
  {
    "id": 895,
    "word": "leg",
    "phonetic": "/leɡ/",
    "meaning": "n. 腿；腿脚；支柱",
    "example": ""
  },
  {
    "id": 897,
    "word": "lesson",
    "phonetic": "/[ˈles(ə)n/",
    "meaning": "n. 课；功课；教训",
    "example": ""
  },
  {
    "id": 898,
    "word": "let",
    "phonetic": "",
    "meaning": "(let, let) [let] vt. 让",
    "example": ""
  },
  {
    "id": 901,
    "word": "library",
    "phonetic": "/ˈlaibrəri; (US) ˈlaibreri/",
    "meaning": "n. 图书馆，图书室",
    "example": ""
  },
  {
    "id": 907,
    "word": "light",
    "phonetic": "/laɪt/",
    "meaning": "n. 光，光亮；灯，灯光 vt. 点（火），点燃 a. 明亮的；轻的；浅色的",
    "example": ""
  },
  {
    "id": 908,
    "word": "like",
    "phonetic": "/laɪk/",
    "meaning": "prep. 像，跟…一样 vt. 喜欢，喜爱",
    "example": ""
  },
  {
    "id": 913,
    "word": "listen",
    "phonetic": "/ˈlɪs(ə)n/",
    "meaning": "vi. 听,仔细听",
    "example": ""
  },
  {
    "id": 915,
    "word": "little",
    "phonetic": "",
    "meaning": "(less, least) [ˈlɪt(ə)l] a. 小的,少的 ad. 很少地, 稍许 n. 没有多少",
    "example": ""
  },
  {
    "id": 916,
    "word": "live",
    "phonetic": "/lɪv/",
    "meaning": "vi. 生活;居住;活着 a. 活的,活着的;现场（直播）的",
    "example": ""
  },
  {
    "id": 922,
    "word": "long",
    "phonetic": "/lɔŋ; (US) lɔːŋ/",
    "meaning": "a. 长的，远 ad. 长久",
    "example": ""
  }
];
const GRADE_5 = [
  {
    "id": 923,
    "word": "look",
    "phonetic": "/lʊk/",
    "meaning": "n. 看，瞧 v. 看，观看 v. link 看起来",
    "example": ""
  },
  {
    "id": 929,
    "word": "love",
    "phonetic": "/lʌv/",
    "meaning": "n.& vt. 爱；热爱;很喜欢",
    "example": ""
  },
  {
    "id": 934,
    "word": "lunch",
    "phonetic": "/lʌntʃ/",
    "meaning": "n. 午餐，午饭",
    "example": ""
  },
  {
    "id": 941,
    "word": "make",
    "phonetic": "",
    "meaning": "(made,made) [meɪk] vt. 制造,做;使得",
    "example": ""
  },
  {
    "id": 942,
    "word": "man",
    "phonetic": "",
    "meaning": "(复men) [mæn] n. 成年男人;人类",
    "example": ""
  },
  {
    "id": 946,
    "word": "many",
    "phonetic": "",
    "meaning": "(more, most) [ˈmenɪ] pron. 许多人（或物）a. 许多的",
    "example": ""
  },
  {
    "id": 947,
    "word": "map",
    "phonetic": "/mæp/",
    "meaning": "n. 地图",
    "example": ""
  },
  {
    "id": 957,
    "word": "me",
    "phonetic": "/miː, mɪ/",
    "meaning": "pron. 我（宾格）",
    "example": ""
  },
  {
    "id": 962,
    "word": "meet",
    "phonetic": "",
    "meaning": "(met, met) [miːt] vt./ n. 遇见，见到 会；集会",
    "example": ""
  },
  {
    "id": 981,
    "word": "milk",
    "phonetic": "/mɪlk/",
    "meaning": "n. 牛奶 vt. 挤奶",
    "example": ""
  },
  {
    "id": 987,
    "word": "minute",
    "phonetic": "/ˈmɪnɪt/",
    "meaning": "n. 分钟;一会儿，瞬间",
    "example": ""
  },
  {
    "id": 989,
    "word": "miss",
    "phonetic": "/mɪs/",
    "meaning": "vt. 失去，错过，缺",
    "example": ""
  },
  {
    "id": 996,
    "word": "Mom",
    "phonetic": "",
    "meaning": "=Mum [mɔm] n. 妈妈",
    "example": ""
  },
  {
    "id": 1002,
    "word": "monkey",
    "phonetic": "/ˈmʌŋkɪ/",
    "meaning": "n. 猴子",
    "example": ""
  },
  {
    "id": 1003,
    "word": "month",
    "phonetic": "/mʌnθ/",
    "meaning": "n. 月，月份",
    "example": ""
  },
  {
    "id": 1005,
    "word": "moon",
    "phonetic": "/muːn/",
    "meaning": "n. 月球；月光；月状物",
    "example": ""
  },
  {
    "id": 1007,
    "word": "morning",
    "phonetic": "/ˈmɔːnɪŋ/",
    "meaning": "n. 早晨，上午",
    "example": ""
  },
  {
    "id": 1009,
    "word": "mother",
    "phonetic": "/ˈmʌðə(r)/",
    "meaning": "n. 母亲",
    "example": ""
  },
  {
    "id": 1015,
    "word": "mouth",
    "phonetic": "/maʊθ/",
    "meaning": "n. 嘴，口",
    "example": ""
  },
  {
    "id": 1022,
    "word": "much",
    "phonetic": "",
    "meaning": "(more，most) [mʌtʃ] a./ ad. 许多，大量，非常，更加",
    "example": ""
  },
  {
    "id": 1026,
    "word": "music",
    "phonetic": "/ˈmjuːzɪk/",
    "meaning": "n. 音乐，乐曲",
    "example": ""
  },
  {
    "id": 1029,
    "word": "my",
    "phonetic": "/maɪ/",
    "meaning": "pron. 我的",
    "example": ""
  },
  {
    "id": 1032,
    "word": "name",
    "phonetic": "/neɪm/",
    "meaning": "n. 名字,姓名,名称 vt. 命名,名叫",
    "example": ""
  },
  {
    "id": 1038,
    "word": "near",
    "phonetic": "/nɪə(r)/",
    "meaning": "a. 近的 ad. 附近，邻近 prep. 在…附近，靠近",
    "example": ""
  },
  {
    "id": 1056,
    "word": "new",
    "phonetic": "/njuː; (US) nuː/",
    "meaning": "a. 新的；新鲜的",
    "example": ""
  },
  {
    "id": 1059,
    "word": "next",
    "phonetic": "/nekst/",
    "meaning": "a. 下一个的,紧挨着的，隔壁的 ad. 随后，然后，下一步",
    "example": ""
  },
  {
    "id": 1060,
    "word": "nice",
    "phonetic": "/naɪs/",
    "meaning": "a. 令人愉快;好的,漂亮的",
    "example": ""
  },
  {
    "id": 1062,
    "word": "night",
    "phonetic": "/naɪt/",
    "meaning": "n. 夜；夜间",
    "example": ""
  },
  {
    "id": 1068,
    "word": "no",
    "phonetic": "/nəʊ/",
    "meaning": "ad. 不,不是 a. 没有,无,不",
    "example": ""
  },
  {
    "id": 1075,
    "word": "noodle",
    "phonetic": "/ˈnuːd(ə)l/",
    "meaning": "n. 面条",
    "example": ""
  },
  {
    "id": 1083,
    "word": "nose",
    "phonetic": "/nəʊz/",
    "meaning": "n. 鼻子",
    "example": ""
  },
  {
    "id": 1084,
    "word": "not",
    "phonetic": "/nɔt/",
    "meaning": "ad. 不，没",
    "example": ""
  },
  {
    "id": 1091,
    "word": "now",
    "phonetic": "/naʊ/",
    "meaning": "ad. 现在",
    "example": ""
  },
  {
    "id": 1094,
    "word": "nurse",
    "phonetic": "/nəːs/",
    "meaning": "n. 护士；保姆；保育员",
    "example": ""
  },
  {
    "id": 1100,
    "word": "of",
    "phonetic": "/ɔv, əv; (US) ˈɔf/",
    "meaning": "prep. ….的",
    "example": ""
  },
  {
    "id": 1104,
    "word": "often",
    "phonetic": "/ˈɔf(ə)n; (US) ˈɔːfn/",
    "meaning": "ad. 经常，常常",
    "example": ""
  },
  {
    "id": 1108,
    "word": "old",
    "phonetic": "/əʊld/",
    "meaning": "a. 老的，旧的",
    "example": ""
  },
  {
    "id": 1111,
    "word": "on",
    "phonetic": "/ɔn/",
    "meaning": "prep. 在…上（时），关于 ad. 接通；进行下去；（电灯）开",
    "example": ""
  },
  {
    "id": 1118,
    "word": "open",
    "phonetic": "/ˈəʊpən/",
    "meaning": "a. 开着的,开的 vt. 开,打开",
    "example": ""
  },
  {
    "id": 1122,
    "word": "or",
    "phonetic": "/ə(r), ɔː(r)/",
    "meaning": "conj. 或；就是；否则",
    "example": ""
  },
  {
    "id": 1123,
    "word": "orange",
    "phonetic": "/ˈɔrɪndʒ; (US) ˈɔːr-/",
    "meaning": "n. 橘子，橙子，橘汁 a. 橘色的，橙色的",
    "example": ""
  },
  {
    "id": 1127,
    "word": "our",
    "phonetic": "/ˈaʊə(r)/",
    "meaning": "pron. 我们的",
    "example": ""
  },
  {
    "id": 1151,
    "word": "panda",
    "phonetic": "/ˈpændə/",
    "meaning": "n. 熊猫",
    "example": ""
  },
  {
    "id": 1154,
    "word": "parent",
    "phonetic": "/ˈpeərənt/",
    "meaning": "n. 父(母)，双亲",
    "example": ""
  },
  {
    "id": 1155,
    "word": "park",
    "phonetic": "/pɑːk/",
    "meaning": "n. 公园 vt. 停放（汽车）",
    "example": ""
  },
  {
    "id": 1159,
    "word": "party",
    "phonetic": "/ˈpɑːtɪ/",
    "meaning": "n. 聚会，晚会；党派",
    "example": ""
  },
  {
    "id": 1172,
    "word": "pen",
    "phonetic": "/pen/",
    "meaning": "n. 钢笔，笔",
    "example": ""
  },
  {
    "id": 1173,
    "word": "pencil",
    "phonetic": "/ˈpens(ə)l/",
    "meaning": "n. 铅笔",
    "example": ""
  },
  {
    "id": 1176,
    "word": "people",
    "phonetic": "/ˈpiːp(ə)l/",
    "meaning": "n. 人，人们；人民",
    "example": ""
  },
  {
    "id": 1185,
    "word": "photo",
    "phonetic": "",
    "meaning": "=photograph [ˈfəʊtəʊ] n. 照片",
    "example": ""
  },
  {
    "id": 1194,
    "word": "picture",
    "phonetic": "/ˈpɪktʃə(r)/",
    "meaning": "n. 图片，画片，照片",
    "example": ""
  },
  {
    "id": 1197,
    "word": "pig",
    "phonetic": "/pɪg/",
    "meaning": "n. 猪",
    "example": ""
  },
  {
    "id": 1205,
    "word": "place",
    "phonetic": "/pleɪs/",
    "meaning": "n. 地方，处所 v. 放置，安置，安排",
    "example": ""
  },
  {
    "id": 1207,
    "word": "plane",
    "phonetic": "/pleɪn/",
    "meaning": "n. 飞机",
    "example": ""
  },
  {
    "id": 1209,
    "word": "plant",
    "phonetic": "/plɑːnt; (US) ˈplænt/",
    "meaning": "vt. 种植，播种 n. 植物",
    "example": ""
  },
  {
    "id": 1212,
    "word": "play",
    "phonetic": "/pleɪ/",
    "meaning": "v. 玩；打（球）；游戏；播放 n. 玩耍，戏剧",
    "example": ""
  },
  {
    "id": 1214,
    "word": "playground",
    "phonetic": "/ˈpleɪgraʊnd/",
    "meaning": "n. 操场，运动场",
    "example": ""
  },
  {
    "id": 1216,
    "word": "please",
    "phonetic": "/pliːz/",
    "meaning": "v. 请,使人高兴,使人满意",
    "example": ""
  },
  {
    "id": 1223,
    "word": "police",
    "phonetic": "/pəˈliːs/",
    "meaning": "n. 警察，警务人员",
    "example": ""
  },
  {
    "id": 1243,
    "word": "potato",
    "phonetic": "/pəʊteɪtəʊ/",
    "meaning": "n. 土豆，马铃薯",
    "example": ""
  },
  {
    "id": 1276,
    "word": "pupil",
    "phonetic": "/ˈpjuːpɪl/",
    "meaning": "n.（小）学生",
    "example": ""
  },
  {
    "id": 1280,
    "word": "put",
    "phonetic": "",
    "meaning": "(put, put) [pʊt] vt. 放，摆",
    "example": ""
  },
  {
    "id": 1298,
    "word": "rain",
    "phonetic": "/reɪn/",
    "meaning": "n. 雨，雨水 vi. 下雨",
    "example": ""
  },
  {
    "id": 1305,
    "word": "read",
    "phonetic": "",
    "meaning": "(read, read) [riːd] v. 读；朗读",
    "example": ""
  },
  {
    "id": 1315,
    "word": "red",
    "phonetic": "/red/",
    "meaning": "n. 红色 a. 红色的",
    "example": ""
  },
  {
    "id": 1335,
    "word": "rice",
    "phonetic": "/raɪs/",
    "meaning": "n. 稻米；米饭",
    "example": ""
  },
  {
    "id": 1339,
    "word": "right",
    "phonetic": "/raɪt/",
    "meaning": "n. 权利 a. 对,正确的 ad. 正确地,恰恰,完全地 a. 右,右边的",
    "example": ""
  },
  {
    "id": 1342,
    "word": "river",
    "phonetic": "/ˈrɪvə(r)/",
    "meaning": "n. 江；河；水道；巨流",
    "example": ""
  },
  {
    "id": 1347,
    "word": "room",
    "phonetic": "/rum/",
    "meaning": "n. 房间,室;空间;地方",
    "example": ""
  },
  {
    "id": 1356,
    "word": "ruler",
    "phonetic": "/ˈruːlə(r)/",
    "meaning": "n. 统治者；直尺",
    "example": ""
  },
  {
    "id": 1357,
    "word": "run",
    "phonetic": "",
    "meaning": "(ran, run) [rʌn] vi. 跑，奔跑；（颜色）褪色",
    "example": ""
  },
  {
    "id": 1362,
    "word": "sad",
    "phonetic": "/sæd/",
    "meaning": "a.（使人）悲伤的",
    "example": ""
  },
  {
    "id": 1380,
    "word": "say",
    "phonetic": "",
    "meaning": "(said, said) [seɪ] vt. 说，讲",
    "example": ""
  },
  {
    "id": 1382,
    "word": "school",
    "phonetic": "/skuːl/",
    "meaning": "n. 学校",
    "example": ""
  },
  {
    "id": 1383,
    "word": "schoolbag",
    "phonetic": "/'sku:lbæg/",
    "meaning": "n. 书包",
    "example": ""
  },
  {
    "id": 1385,
    "word": "science",
    "phonetic": "/ˈsaɪəns/",
    "meaning": "n. 科学，自然科学",
    "example": ""
  },
  {
    "id": 1394,
    "word": "season",
    "phonetic": "/ˈsiːz(ə)n/",
    "meaning": "n. 季；季节",
    "example": ""
  },
  {
    "id": 1400,
    "word": "see",
    "phonetic": "",
    "meaning": "(saw, seen) [siː] vt. 看见，看到；领会；拜会",
    "example": ""
  },
  {
    "id": 1424,
    "word": "she",
    "phonetic": "/ʃiː/",
    "meaning": "pron. 她",
    "example": ""
  },
  {
    "id": 1425,
    "word": "sheep",
    "phonetic": "",
    "meaning": "(复sheep) [ʃiːp] n.（绵）羊；羊皮；驯服者",
    "example": ""
  },
  {
    "id": 1430,
    "word": "ship",
    "phonetic": "/ʃɪp/",
    "meaning": "n. 船，轮船 vi. 用船装运",
    "example": ""
  },
  {
    "id": 1431,
    "word": "shirt",
    "phonetic": "/ʃɜːt/",
    "meaning": "n. 男衬衫",
    "example": ""
  },
  {
    "id": 1432,
    "word": "shoe",
    "phonetic": "/ʃuː/",
    "meaning": "n. 鞋",
    "example": ""
  },
  {
    "id": 1434,
    "word": "shop",
    "phonetic": "/ʃɔp/",
    "meaning": "vi. 买东西 n. 商店,车间",
    "example": ""
  },
  {
    "id": 1437,
    "word": "short",
    "phonetic": "/ʃɔːt/",
    "meaning": "a. 短的；矮的",
    "example": ""
  },
  {
    "id": 1454,
    "word": "sing",
    "phonetic": "",
    "meaning": "(sang, sung) [siŋ] v. 唱，唱歌",
    "example": ""
  },
  {
    "id": 1459,
    "word": "sister",
    "phonetic": "/ˈsistə(r)/",
    "meaning": "n. 姐；妹",
    "example": ""
  },
  {
    "id": 1460,
    "word": "sit",
    "phonetic": "",
    "meaning": "(sat, sat) [sɪt] vi. 坐",
    "example": ""
  },
  {
    "id": 1471,
    "word": "skirt",
    "phonetic": "/skɜːt/",
    "meaning": "n. 女裙",
    "example": ""
  },
  {
    "id": 1473,
    "word": "sleep",
    "phonetic": "",
    "meaning": "(slept, slept) [sliːp] vi. 睡觉",
    "example": ""
  },
  {
    "id": 1474,
    "word": "slow",
    "phonetic": "/sləʊ/",
    "meaning": "ad. 慢慢地，缓慢地",
    "example": ""
  },
  {
    "id": 1475,
    "word": "small",
    "phonetic": "/smɔːl/",
    "meaning": "a. 小的，少的",
    "example": ""
  },
  {
    "id": 1481,
    "word": "snow",
    "phonetic": "/snəʊ/",
    "meaning": "n. 雪 vi.下雪",
    "example": ""
  },
  {
    "id": 1485,
    "word": "sock",
    "phonetic": "/sɔk/",
    "meaning": "n. 短袜",
    "example": ""
  },
  {
    "id": 1490,
    "word": "some",
    "phonetic": "/sʌm/",
    "meaning": "a. 一些，若干；有些；某一 pron. 若干，一些",
    "example": ""
  },
  {
    "id": 1494,
    "word": "sometimes",
    "phonetic": "/ˈsʌmtaɪmz/",
    "meaning": "ad. 有时",
    "example": ""
  },
  {
    "id": 1497,
    "word": "song",
    "phonetic": "/sɔŋ/",
    "meaning": "n. 歌唱；歌曲",
    "example": ""
  },
  {
    "id": 1499,
    "word": "sorry",
    "phonetic": "/ˈsɔrɪ/",
    "meaning": "a. 对不起,抱歉;难过的",
    "example": ""
  },
  {
    "id": 1502,
    "word": "soup",
    "phonetic": "/suːp/",
    "meaning": "n. 汤",
    "example": ""
  },
  {
    "id": 1512,
    "word": "speak",
    "phonetic": "",
    "meaning": "(spoke, spoken) [ˈspiːk] v. 说，讲；谈话；发言",
    "example": ""
  },
  {
    "id": 1521,
    "word": "sport",
    "phonetic": "/spɔːt/",
    "meaning": "n. 体育运动，锻炼；(复，英)运动会",
    "example": ""
  },
  {
    "id": 1523,
    "word": "spring",
    "phonetic": "/sprɪŋ/",
    "meaning": "n. 春天,春季 n. 泉水,泉",
    "example": ""
  },
  {
    "id": 1526,
    "word": "stand",
    "phonetic": "/stænd/",
    "meaning": "n. 站；立；停止；立场；地位；台；坛；摊",
    "example": ""
  }
];
const GRADE_6 = [
  {
    "id": 1527,
    "word": "stand",
    "phonetic": "",
    "meaning": "(stood, stood) [stænd] v. 站；立；起立；坐落；经受；持久",
    "example": ""
  },
  {
    "id": 1528,
    "word": "star",
    "phonetic": "/stɑː(r)/",
    "meaning": "n. 星，恒星",
    "example": ""
  },
  {
    "id": 1542,
    "word": "stop",
    "phonetic": "/stɔp/",
    "meaning": "n. 停；（停车）站 v. 停，停止，阻止",
    "example": ""
  },
  {
    "id": 1545,
    "word": "story",
    "phonetic": "/ˈstɔːrɪ/",
    "meaning": "n. 故事，小说",
    "example": ""
  },
  {
    "id": 1548,
    "word": "street",
    "phonetic": "/striːt/",
    "meaning": "n. 街，街道",
    "example": ""
  },
  {
    "id": 1551,
    "word": "strong",
    "phonetic": "/strɔŋ/",
    "meaning": "a. 强(壮)的；坚固的；强烈的；坚强的",
    "example": ""
  },
  {
    "id": 1553,
    "word": "study",
    "phonetic": "/ˈstʌdɪ/",
    "meaning": "v. 学习；研究 n. 书房",
    "example": ""
  },
  {
    "id": 1555,
    "word": "subject",
    "phonetic": "/ˈsʌbdʒɪkt/",
    "meaning": "n. 题目；主题；学科；主语；主体",
    "example": ""
  },
  {
    "id": 1565,
    "word": "summer",
    "phonetic": "/ˈsʌmə(r)/",
    "meaning": "n. 夏天，夏季",
    "example": ""
  },
  {
    "id": 1566,
    "word": "sun",
    "phonetic": "/sʌn/",
    "meaning": "n. 太阳，阳光",
    "example": ""
  },
  {
    "id": 1570,
    "word": "sunny",
    "phonetic": "/ˈsʌnɪ/",
    "meaning": "a. 晴朗的;阳光充足的",
    "example": ""
  },
  {
    "id": 1575,
    "word": "supermarket",
    "phonetic": "/ˈsuːpəmɑːkɪt/",
    "meaning": "n. 超级市场",
    "example": ""
  },
  {
    "id": 1582,
    "word": "sweater",
    "phonetic": "/ˈswetə(r)/",
    "meaning": "n. 厚运动衫，毛衣",
    "example": ""
  },
  {
    "id": 1584,
    "word": "swim",
    "phonetic": "",
    "meaning": "(swam, swum) [swɪm] vi. 游泳,游 n. 游泳，游",
    "example": ""
  },
  {
    "id": 1588,
    "word": "table",
    "phonetic": "/ˈteɪb(ə)l/",
    "meaning": "n. 桌子，表格",
    "example": ""
  },
  {
    "id": 1591,
    "word": "take",
    "phonetic": "",
    "meaning": "(took, taken)  [teɪk] vt. 拿；拿走；做；服用；乘坐；花费",
    "example": ""
  },
  {
    "id": 1593,
    "word": "talk",
    "phonetic": "/tɔːk/",
    "meaning": "n.& v. 谈话,讲话,演讲,交谈",
    "example": ""
  },
  {
    "id": 1594,
    "word": "tall",
    "phonetic": "/tɔːl/",
    "meaning": "a. 高的",
    "example": ""
  },
  {
    "id": 1598,
    "word": "taxi",
    "phonetic": "/ˈtæksɪ/",
    "meaning": "n. 出租汽车",
    "example": ""
  },
  {
    "id": 1599,
    "word": "tea",
    "phonetic": "/tiː/",
    "meaning": "n. 茶；茶叶 ",
    "example": ""
  },
  {
    "id": 1600,
    "word": "teacher",
    "phonetic": "/ˈtiːtʃə(r)/",
    "meaning": "n. 教师，教员",
    "example": ""
  },
  {
    "id": 1611,
    "word": "tell",
    "phonetic": "",
    "meaning": "(told, told) [tel] vt. 告诉,讲述,吩咐",
    "example": ""
  },
  {
    "id": 1622,
    "word": "thank",
    "phonetic": "/θæŋk/",
    "meaning": "vt. 感谢，致谢，道谢 n.（复）感谢，谢意",
    "example": ""
  },
  {
    "id": 1624,
    "word": "that",
    "phonetic": "/ðæt/",
    "meaning": "a.& pron.那，那个 conj. 那，那个 ad. 那么，那样",
    "example": ""
  },
  {
    "id": 1625,
    "word": "the",
    "phonetic": "/ðə, ðɪ, ðiː/",
    "meaning": "art. 这（那）个,这（那）些",
    "example": ""
  },
  {
    "id": 1627,
    "word": "their",
    "phonetic": "/ðeə(r)/",
    "meaning": "pron. 他(她,它)们的",
    "example": ""
  },
  {
    "id": 1629,
    "word": "them",
    "phonetic": "/ð(ə)m, ðem/",
    "meaning": "pron. 他/她/它们（宾格）",
    "example": ""
  },
  {
    "id": 1631,
    "word": "then",
    "phonetic": "/ðen/",
    "meaning": "ad. 当时,那时,然后,那么",
    "example": ""
  },
  {
    "id": 1632,
    "word": "there",
    "phonetic": "/ðeə(r)/",
    "meaning": "int. 那!你瞧! n. 那里,那儿 ad. 在那里,往那里",
    "example": ""
  },
  {
    "id": 1633,
    "word": "these",
    "phonetic": "/ðiːz/",
    "meaning": "a. & pron. 这些",
    "example": ""
  },
  {
    "id": 1634,
    "word": "they",
    "phonetic": "/ðeɪ/",
    "meaning": "pron. 他（她）们；它们",
    "example": ""
  },
  {
    "id": 1637,
    "word": "thin",
    "phonetic": "/θɪn/",
    "meaning": "a. 薄的；瘦的；稀的",
    "example": ""
  },
  {
    "id": 1639,
    "word": "think",
    "phonetic": "",
    "meaning": "(thought, thought) [θɪŋk] v. 想；认为；考虑",
    "example": ""
  },
  {
    "id": 1645,
    "word": "this",
    "phonetic": "/ðɪs/",
    "meaning": "a.& pron.这，这个",
    "example": ""
  },
  {
    "id": 1646,
    "word": "those",
    "phonetic": "/ðəʊz/",
    "meaning": "a.& pron. 那些",
    "example": ""
  },
  {
    "id": 1658,
    "word": "tiger",
    "phonetic": "/ˈtaɪɡə(r)/",
    "meaning": "n. 老虎",
    "example": ""
  },
  {
    "id": 1660,
    "word": "time",
    "phonetic": "/taɪm/",
    "meaning": "n. 时间;时期;钟点,次,回 vt. 测定…的时间,记录…的时间",
    "example": ""
  },
  {
    "id": 1662,
    "word": "tired",
    "phonetic": "/ˈtaɪəd/",
    "meaning": "a. 疲劳的，累的",
    "example": ""
  },
  {
    "id": 1663,
    "word": "to",
    "phonetic": "/tʊ, tuː/",
    "meaning": "prep. 给；对，向，到",
    "example": ""
  },
  {
    "id": 1664,
    "word": "today",
    "phonetic": "/tədei/",
    "meaning": "ad.& n. 今天;现在,当前",
    "example": ""
  },
  {
    "id": 1666,
    "word": "toilet",
    "phonetic": "/ˈtɔɪlɪt/",
    "meaning": "n. 厕所",
    "example": ""
  },
  {
    "id": 1668,
    "word": "tomato",
    "phonetic": "/təˈmɑːtəʊ; (US) təˈmeɪtəʊ/",
    "meaning": "n. 西红柿，番茄",
    "example": ""
  },
  {
    "id": 1670,
    "word": "tomorrow",
    "phonetic": "/təˈmɔrəʊ/",
    "meaning": "ad. & n. 明天",
    "example": ""
  },
  {
    "id": 1674,
    "word": "too",
    "phonetic": "/tuː/",
    "meaning": "ad. 也,还,又,太,非常",
    "example": ""
  },
  {
    "id": 1691,
    "word": "toy",
    "phonetic": "/tɔɪ/",
    "meaning": "n. 玩具, 玩物",
    "example": ""
  },
  {
    "id": 1698,
    "word": "train",
    "phonetic": "/treɪn/",
    "meaning": "n. 火车 v. 培训,训练",
    "example": ""
  },
  {
    "id": 1703,
    "word": "travel",
    "phonetic": "/ˈtræv(ə)l/",
    "meaning": "n.& vi. 旅行",
    "example": ""
  },
  {
    "id": 1706,
    "word": "tree",
    "phonetic": "/triː/",
    "meaning": "n. 树",
    "example": ""
  },
  {
    "id": 1709,
    "word": "trousers",
    "phonetic": "/ˈtraʊzəz/",
    "meaning": "n. 裤子，长裤",
    "example": ""
  },
  {
    "id": 1713,
    "word": "try",
    "phonetic": "/trai/",
    "meaning": "v. 试，试图，努力",
    "example": ""
  },
  {
    "id": 1717,
    "word": "turn",
    "phonetic": "/tɜːn/",
    "meaning": "v. 旋转，翻转，转变，转弯 n. 轮流，顺序",
    "example": ""
  },
  {
    "id": 1730,
    "word": "umbrella",
    "phonetic": "/ʌmˈbrelə/",
    "meaning": "n. 雨伞",
    "example": ""
  },
  {
    "id": 1731,
    "word": "uncle",
    "phonetic": "/ˈʌŋk(ə)l/",
    "meaning": "n. 叔,伯,舅,姑夫,姨父",
    "example": ""
  },
  {
    "id": 1732,
    "word": "under",
    "phonetic": "/ˈʌndə(r)/",
    "meaning": "ad.& prep. 在…下面，向…下面",
    "example": ""
  },
  {
    "id": 1745,
    "word": "up",
    "phonetic": "/ʌp/",
    "meaning": "ad. 向上;在上方 prep. 向(高处);向(在)…上(面)游",
    "example": ""
  },
  {
    "id": 1748,
    "word": "use",
    "phonetic": "/juːz/",
    "meaning": "vt. 利用,使用,应用 n. [juːs] 用法,应用,运用",
    "example": ""
  },
  {
    "id": 1757,
    "word": "vegetable",
    "phonetic": "/ˈvedʒɪtəb(ə)l/",
    "meaning": "n. 蔬菜",
    "example": ""
  },
  {
    "id": 1758,
    "word": "very",
    "phonetic": "/ˈverɪ/",
    "meaning": "ad. 很，非常",
    "example": ""
  },
  {
    "id": 1764,
    "word": "visit",
    "phonetic": "/ˈvizit/",
    "meaning": "n.& vt. 参观，访问，拜访",
    "example": ""
  },
  {
    "id": 1769,
    "word": "wait",
    "phonetic": "/weɪt/",
    "meaning": "vi. 等，等候",
    "example": ""
  },
  {
    "id": 1771,
    "word": "walk",
    "phonetic": "/wɔːk/",
    "meaning": "n.& v. 步行；散步",
    "example": ""
  },
  {
    "id": 1773,
    "word": "want",
    "phonetic": "/wɔnt/",
    "meaning": "vt. 想,想要,需要,必要",
    "example": ""
  },
  {
    "id": 1775,
    "word": "warm",
    "phonetic": "/wɔːm/",
    "meaning": "a. 暖和的,温暖的;热情的",
    "example": ""
  },
  {
    "id": 1779,
    "word": "watch",
    "phonetic": "/wɔtʃ/",
    "meaning": "vt. 观看，注视；当心，注意 n. 手表，表",
    "example": ""
  },
  {
    "id": 1780,
    "word": "water",
    "phonetic": "/ˈwɔːtə(r)/",
    "meaning": "n. 水v. 浇水",
    "example": ""
  },
  {
    "id": 1782,
    "word": "way",
    "phonetic": "/weɪ/",
    "meaning": "n. 路，路线；方式，手段",
    "example": ""
  },
  {
    "id": 1783,
    "word": "we",
    "phonetic": "/wiː, wɪ/",
    "meaning": "pron. 我们",
    "example": ""
  },
  {
    "id": 1785,
    "word": "wear",
    "phonetic": "",
    "meaning": "(wore, worn) [weə(r)] v. 穿，戴",
    "example": ""
  },
  {
    "id": 1786,
    "word": "weather",
    "phonetic": "/weðə(r)/",
    "meaning": "n. 天气",
    "example": ""
  },
  {
    "id": 1788,
    "word": "week",
    "phonetic": "/wiːk/",
    "meaning": "n. 星期，周",
    "example": ""
  },
  {
    "id": 1793,
    "word": "welcome",
    "phonetic": "/ˈwelkəm/",
    "meaning": "int.n. & v. 欢迎 a. 受欢迎的",
    "example": ""
  },
  {
    "id": 1794,
    "word": "well",
    "phonetic": "/wel/",
    "meaning": "(better, best) ad. 好 a.好的,健康的 int. 好吧,那么,哎呀 n. 井",
    "example": ""
  },
  {
    "id": 1801,
    "word": "what",
    "phonetic": "/wɔt; (US) hwɑt/",
    "meaning": "pron. 什么,怎么样 a. 多么，何等；什么",
    "example": ""
  },
  {
    "id": 1805,
    "word": "when",
    "phonetic": "/wen/",
    "meaning": "conj. 当…的时候 ad. 什么时候，何时",
    "example": ""
  },
  {
    "id": 1807,
    "word": "where",
    "phonetic": "/weə(r); (US) hweər/",
    "meaning": "ad. 在哪里；往哪里",
    "example": ""
  },
  {
    "id": 1813,
    "word": "white",
    "phonetic": "/waɪt; (US) hwaɪt/",
    "meaning": "a. 白色的 n. 白色",
    "example": ""
  },
  {
    "id": 1814,
    "word": "who",
    "phonetic": "/huː/",
    "meaning": "pron. 谁",
    "example": ""
  },
  {
    "id": 1817,
    "word": "whose",
    "phonetic": "/huːz/",
    "meaning": "pron. 谁的",
    "example": ""
  },
  {
    "id": 1818,
    "word": "why",
    "phonetic": "/waɪ; (US) hwaɪ/",
    "meaning": "ad./ int. 为什么, 你难道不知道（表示反驳、不耐烦等）",
    "example": ""
  },
  {
    "id": 1825,
    "word": "window",
    "phonetic": "/ˈwɪndəʊ/",
    "meaning": "n. 窗户；计算机的窗",
    "example": ""
  },
  {
    "id": 1826,
    "word": "windy",
    "phonetic": "/ˈwɪndɪ/",
    "meaning": "a. 有风的，多风的",
    "example": ""
  },
  {
    "id": 1829,
    "word": "winter",
    "phonetic": "/ˈwɪntə(r)/",
    "meaning": "n. 冬天，冬季",
    "example": ""
  },
  {
    "id": 1831,
    "word": "with",
    "phonetic": "/wɪð/",
    "meaning": "prep.关于,带有,以,和,用,有",
    "example": ""
  },
  {
    "id": 1833,
    "word": "woman",
    "phonetic": "",
    "meaning": "(复women) [ˈwʊmən] n. 妇女，女人",
    "example": ""
  },
  {
    "id": 1835,
    "word": "wonderful",
    "phonetic": "/ˈwʌndəfʊl/",
    "meaning": "a. 美妙的，精彩的；了不起的；太好了",
    "example": ""
  },
  {
    "id": 1839,
    "word": "word",
    "phonetic": "/wəːd/",
    "meaning": "n. 词，单词；话",
    "example": ""
  },
  {
    "id": 1840,
    "word": "work",
    "phonetic": "/wəːk/",
    "meaning": "n. 工作,劳动,事情 vi. 工作;(机器、器官等)运转,活动",
    "example": ""
  },
  {
    "id": 1841,
    "word": "worker",
    "phonetic": "/wəːkə(r)/",
    "meaning": "n. 工人；工作者",
    "example": ""
  },
  {
    "id": 1847,
    "word": "worry",
    "phonetic": "/wʌrɪ/",
    "meaning": "n.& v. 烦恼,担忧,发怒,困扰",
    "example": ""
  },
  {
    "id": 1854,
    "word": "write",
    "phonetic": "/raɪt/",
    "meaning": "(wrote, written) v. 写，书写；写作，著述",
    "example": ""
  },
  {
    "id": 1855,
    "word": "wrong",
    "phonetic": "/rɔŋ/",
    "meaning": "a. 错误,不正常,有毛病的",
    "example": ""
  },
  {
    "id": 1858,
    "word": "year",
    "phonetic": "/jɪə(r), jəː(r)/",
    "meaning": "n. 年",
    "example": ""
  },
  {
    "id": 1859,
    "word": "yellow",
    "phonetic": "/ˈjeləʊ/",
    "meaning": "a. 黄色的",
    "example": ""
  },
  {
    "id": 1860,
    "word": "yes",
    "phonetic": "/jes/",
    "meaning": "ad. 是，好，同意",
    "example": ""
  },
  {
    "id": 1861,
    "word": "yesterday",
    "phonetic": "/ˈjestədeɪ/",
    "meaning": "n.& ad. 昨天",
    "example": ""
  },
  {
    "id": 1863,
    "word": "you",
    "phonetic": "/juː, jʊ/",
    "meaning": "pron. 你；你们",
    "example": ""
  },
  {
    "id": 1864,
    "word": "young",
    "phonetic": "/jʌŋ/",
    "meaning": "a. 年轻的",
    "example": ""
  },
  {
    "id": 1865,
    "word": "your",
    "phonetic": "/jɔː/",
    "meaning": "pron. 你的；你们的",
    "example": ""
  },
  {
    "id": 1871,
    "word": "zoo",
    "phonetic": "/zuː/",
    "meaning": "n. 动物园",
    "example": ""
  }
];
const GRADE_7 = [
  {
    "id": 2,
    "word": "ability",
    "phonetic": "/əˈbɪlɪtɪ/",
    "meaning": "n. 能力;才能",
    "example": ""
  },
  {
    "id": 3,
    "word": "able",
    "phonetic": "/ˈeɪb(ə)l/",
    "meaning": "a. 能够;有能力的",
    "example": ""
  },
  {
    "id": 5,
    "word": "above",
    "phonetic": "/əˈbʌv/",
    "meaning": "prep. 在…上面 a. 上面的 ad. 在…之上",
    "example": ""
  },
  {
    "id": 6,
    "word": "abroad",
    "phonetic": "/əˈbrɔːd/",
    "meaning": "ad. 到（在）国外",
    "example": ""
  },
  {
    "id": 7,
    "word": "accept",
    "phonetic": "/əkˈsept/",
    "meaning": "vt. 接受",
    "example": ""
  },
  {
    "id": 8,
    "word": "accident",
    "phonetic": "/ˈæksɪdənt/",
    "meaning": "n. 事故,意外",
    "example": ""
  },
  {
    "id": 9,
    "word": "across",
    "phonetic": "/əˈkrɔs/",
    "meaning": "prep./ad. 横过;穿过;另一边,在对面",
    "example": ""
  },
  {
    "id": 10,
    "word": "act",
    "phonetic": "/ækt/",
    "meaning": "n. 法令，条例 v. 行动,（戏）表演,扮演（角色）",
    "example": ""
  },
  {
    "id": 11,
    "word": "action",
    "phonetic": "/ˈækʃ(ə)n/",
    "meaning": "n. 行动,行为,举动",
    "example": ""
  },
  {
    "id": 12,
    "word": "active",
    "phonetic": "/ˈæktɪv/",
    "meaning": "a. 积极的，主动的",
    "example": ""
  },
  {
    "id": 13,
    "word": "activity",
    "phonetic": "/ækˈtɪvɪtɪ/",
    "meaning": "n. 活动",
    "example": ""
  },
  {
    "id": 14,
    "word": "advantage",
    "phonetic": "/ədˈvɑːntɪdʒ/",
    "meaning": "n. 优点；好处,有利条件",
    "example": ""
  },
  {
    "id": 15,
    "word": "advertisement",
    "phonetic": "/ədˈvɜːtɪsmənt/",
    "meaning": "n. 广告",
    "example": ""
  },
  {
    "id": 16,
    "word": "advice",
    "phonetic": "/ədˈvaɪs/",
    "meaning": "n. 忠告，劝告，建议",
    "example": ""
  },
  {
    "id": 17,
    "word": "afford",
    "phonetic": "/əˈfɔːd/",
    "meaning": "vt. 负担得起（…的费用）；抽得出（时间）；提供",
    "example": ""
  },
  {
    "id": 19,
    "word": "Africa",
    "phonetic": "/ˈæfrɪkə/",
    "meaning": "n. 非洲",
    "example": ""
  },
  {
    "id": 23,
    "word": "against",
    "phonetic": "/əˈɡeɪnst/",
    "meaning": "prep. 对着,反对,倚靠",
    "example": ""
  },
  {
    "id": 24,
    "word": "age",
    "phonetic": "/eɪdʒ/",
    "meaning": "n. 年龄；时代",
    "example": ""
  },
  {
    "id": 25,
    "word": "ago",
    "phonetic": "/əˈɡəʊ/",
    "meaning": "ad. 以前",
    "example": ""
  },
  {
    "id": 26,
    "word": "agree",
    "phonetic": "/əˈɡriː/",
    "meaning": "v. 同意",
    "example": ""
  },
  {
    "id": 27,
    "word": "air",
    "phonetic": "/eə(r)/",
    "meaning": "n. 空气；大气",
    "example": ""
  },
  {
    "id": 28,
    "word": "aircraft",
    "phonetic": "/ˈeəkrɑːft/",
    "meaning": "n. 飞机 (单复数同)",
    "example": ""
  },
  {
    "id": 29,
    "word": "airline",
    "phonetic": "/ˈeəlain/",
    "meaning": "n. 航空公司;航空系统;航线",
    "example": ""
  },
  {
    "id": 30,
    "word": "airplane",
    "phonetic": "/ˈeəpleɪn/",
    "meaning": "n. （美）飞机",
    "example": ""
  },
  {
    "id": 31,
    "word": "airport",
    "phonetic": "/ˈeəpɔːt/",
    "meaning": "n. 航空站,飞机场",
    "example": ""
  },
  {
    "id": 32,
    "word": "alike",
    "phonetic": "/əˈlaɪk/",
    "meaning": "ad. 很相似地，同样地",
    "example": ""
  },
  {
    "id": 33,
    "word": "alive",
    "phonetic": "/əˈlaɪv/",
    "meaning": "a. 活着的，存在的",
    "example": ""
  },
  {
    "id": 35,
    "word": "allow",
    "phonetic": "/əˈlaʊ/",
    "meaning": "vt. 允许，准许",
    "example": ""
  },
  {
    "id": 36,
    "word": "almost",
    "phonetic": "/ˈɔːlməʊst/",
    "meaning": "ad. 几乎，差不多",
    "example": ""
  },
  {
    "id": 37,
    "word": "alone",
    "phonetic": "/əˈləʊn/",
    "meaning": "a. 单独的，孤独的",
    "example": ""
  },
  {
    "id": 38,
    "word": "along",
    "phonetic": "/əˈlɔŋ; (US) əˈlɔŋ/",
    "meaning": "ad. 向前；和…一起；一同 prep. 沿着；顺着",
    "example": ""
  },
  {
    "id": 39,
    "word": "already",
    "phonetic": "/ɔːlˈredɪ/",
    "meaning": "ad. 已经",
    "example": ""
  },
  {
    "id": 41,
    "word": "although",
    "phonetic": "/ɔːlˈðəʊ/",
    "meaning": "conj. 虽然，尽管",
    "example": ""
  },
  {
    "id": 43,
    "word": "amaze",
    "phonetic": "/əˈmeɪz/",
    "meaning": "v. 惊奇，惊叹；震惊",
    "example": ""
  },
  {
    "id": 44,
    "word": "amazing",
    "phonetic": "/əˈmeɪzɪŋ/",
    "meaning": "a. 惊叹的;震惊的;令人惊讶的",
    "example": ""
  },
  {
    "id": 45,
    "word": "America",
    "phonetic": "/əˈmerɪkə/",
    "meaning": "n. 美国；美洲",
    "example": ""
  },
  {
    "id": 46,
    "word": "American",
    "phonetic": "/əˈmerɪkən/",
    "meaning": "a. 美国的；美国人的 n. 美国人",
    "example": ""
  },
  {
    "id": 47,
    "word": "among",
    "phonetic": "/əˈmʌŋ/",
    "meaning": "prep. 在…中间；在（三个以上）之间",
    "example": ""
  },
  {
    "id": 49,
    "word": "angel",
    "phonetic": "/ˈeindʒəl/",
    "meaning": "n. 天使,守护神",
    "example": ""
  },
  {
    "id": 52,
    "word": "another",
    "phonetic": "/əˈnʌðə(r)/",
    "meaning": "a. 再一；另一；别的 pron. 另一个",
    "example": ""
  },
  {
    "id": 55,
    "word": "anyhow",
    "phonetic": "/ˈenɪhaʊ/",
    "meaning": "ad. 不管怎样",
    "example": ""
  },
  {
    "id": 56,
    "word": "anyone",
    "phonetic": "/ˈenɪwʌn/",
    "meaning": "pron. 任何人，无论谁",
    "example": ""
  },
  {
    "id": 57,
    "word": "anything",
    "phonetic": "/ˈenɪθɪŋ/",
    "meaning": "pron. 什么事（物）；任何事（物）",
    "example": ""
  },
  {
    "id": 58,
    "word": "anywhere",
    "phonetic": "/ˈenɪweə(r)/",
    "meaning": "ad. 任何地方",
    "example": ""
  },
  {
    "id": 59,
    "word": "apologize",
    "phonetic": "/əˈpɔlədʒaɪz/",
    "meaning": "vi. 道歉，谢罪",
    "example": ""
  },
  {
    "id": 60,
    "word": "apology",
    "phonetic": "/əˈpɔlədʒɪ/",
    "meaning": "n. 道歉；歉意",
    "example": ""
  },
  {
    "id": 62,
    "word": "April",
    "phonetic": "/ˈeɪpr(ə)l/",
    "meaning": "n. 4月",
    "example": ""
  },
  {
    "id": 63,
    "word": "Arab",
    "phonetic": "/ˈærəb/",
    "meaning": "a. 阿拉伯的 n. 阿拉伯人",
    "example": ""
  },
  {
    "id": 64,
    "word": "area",
    "phonetic": "/ˈeərɪə/",
    "meaning": "n. 面积；地域，区域；范围，领域",
    "example": ""
  },
  {
    "id": 66,
    "word": "army",
    "phonetic": "/ˈɑːmɪ/",
    "meaning": "n. 军队",
    "example": ""
  },
  {
    "id": 67,
    "word": "around",
    "phonetic": "/əˈraʊnd/",
    "meaning": "ad. 在周围；在附近 prep. 在…周围；大约",
    "example": ""
  },
  {
    "id": 68,
    "word": "arrive",
    "phonetic": "/əˈraɪv/",
    "meaning": "vi. 到达；达到",
    "example": ""
  },
  {
    "id": 69,
    "word": "arrow",
    "phonetic": "/ˈærəʊ/",
    "meaning": "n. 箭；箭头",
    "example": ""
  },
  {
    "id": 71,
    "word": "artist",
    "phonetic": "/ˈɑːtɪst/",
    "meaning": "n. 艺术家,美术家",
    "example": ""
  },
  {
    "id": 72,
    "word": "article",
    "phonetic": "/ˈɑːtɪk(ə)l/",
    "meaning": "n. 文章;物品;冠词",
    "example": ""
  },
  {
    "id": 73,
    "word": "as",
    "phonetic": "/əz, æz/",
    "meaning": "ad.& conj. 像…一样;当…时；如同；因为 prep. 作为，当做",
    "example": ""
  },
  {
    "id": 74,
    "word": "Asia",
    "phonetic": "/ˈeɪʃə/",
    "meaning": "n. 亚洲",
    "example": ""
  },
  {
    "id": 75,
    "word": "Asian",
    "phonetic": "/ˈeɪʃ(ə)n, ˈeɪʒ(ə)n/",
    "meaning": "a. 亚洲（人）的 n. 亚洲人",
    "example": ""
  },
  {
    "id": 77,
    "word": "asleep",
    "phonetic": "/əˈsliːp/",
    "meaning": "a. 睡着的，熟睡",
    "example": ""
  },
  {
    "id": 78,
    "word": "assistant",
    "phonetic": "/əˈsɪst(ə)nt/",
    "meaning": "n. 助手，助理",
    "example": ""
  },
  {
    "id": 80,
    "word": "attack",
    "phonetic": "/əˈtæk/",
    "meaning": "vt. / n. 攻击，袭击",
    "example": ""
  },
  {
    "id": 81,
    "word": "attend",
    "phonetic": "/əˈtend/",
    "meaning": "v. 看护，照料，服侍；出席，参加",
    "example": ""
  },
  {
    "id": 82,
    "word": "attention",
    "phonetic": "/əˈtenʃ(ə)n/",
    "meaning": "n. 注意，关心",
    "example": ""
  },
  {
    "id": 83,
    "word": "attract",
    "phonetic": "/əˈtrækt/",
    "meaning": "v. 吸引，引起",
    "example": ""
  },
  {
    "id": 84,
    "word": "August",
    "phonetic": "/ˈɔːɡəst/",
    "meaning": "n. 8月",
    "example": ""
  },
  {
    "id": 86,
    "word": "Australia",
    "phonetic": "/ɔˈstreɪljə/",
    "meaning": "n. 澳洲；澳大利亚",
    "example": ""
  },
  {
    "id": 87,
    "word": "Australian",
    "phonetic": "/ɔˈstreɪlɪən/",
    "meaning": "a. 澳洲的，澳大利亚人的 n. 澳大利亚人",
    "example": ""
  },
  {
    "id": 89,
    "word": "awake",
    "phonetic": "",
    "meaning": "(awoke, awoken) [əˈweɪk] v. 唤醒 a. 醒着的",
    "example": ""
  },
  {
    "id": 90,
    "word": "away",
    "phonetic": "/əˈweɪ/",
    "meaning": "ad. 离开；远离",
    "example": ""
  },
  {
    "id": 91,
    "word": "awful",
    "phonetic": "/ɔːfu:l/",
    "meaning": "adj.极坏的、极讨厌的、糟糕的、可怕的",
    "example": ""
  },
  {
    "id": 95,
    "word": "badly",
    "phonetic": "/ˈbædlɪ/",
    "meaning": "ad. 坏，恶劣地",
    "example": ""
  },
  {
    "id": 96,
    "word": "bake",
    "phonetic": "/beɪk/",
    "meaning": "v. 烤； 烘（面包）",
    "example": ""
  },
  {
    "id": 98,
    "word": "balloon",
    "phonetic": "/bəˈluːn/",
    "meaning": "n. 气球",
    "example": ""
  },
  {
    "id": 99,
    "word": "bamboo",
    "phonetic": "/bæmˈbuː/",
    "meaning": "n. 竹子",
    "example": ""
  },
  {
    "id": 101,
    "word": "band",
    "phonetic": "/bænd/",
    "meaning": "n. 乐队,波段,一伙,一帮,带(状物)",
    "example": ""
  },
  {
    "id": 102,
    "word": "bang",
    "phonetic": "/bæŋ/",
    "meaning": "int. 砰",
    "example": ""
  },
  {
    "id": 103,
    "word": "bank",
    "phonetic": "/bæŋk/",
    "meaning": "n.（河海湖的）岸，堤, 银行",
    "example": ""
  },
  {
    "id": 104,
    "word": "base",
    "phonetic": "/beɪs/",
    "meaning": "n. 根据地,基地,（棒球）垒",
    "example": ""
  },
  {
    "id": 105,
    "word": "baseball",
    "phonetic": "/ˈbeɪsbɔːl/",
    "meaning": "n. 棒球",
    "example": ""
  },
  {
    "id": 106,
    "word": "basket",
    "phonetic": "/ˈbɑːskɪt; (US) ˈbæskɪt/",
    "meaning": "n. 篮子",
    "example": ""
  },
  {
    "id": 108,
    "word": "bath",
    "phonetic": "/bɑːθ; (US) bæθ/",
    "meaning": "n. 洗澡；浴室；澡盆",
    "example": ""
  },
  {
    "id": 110,
    "word": "beach",
    "phonetic": "/biːtʃ/",
    "meaning": "n. 海滨，海滩",
    "example": ""
  },
  {
    "id": 112,
    "word": "beat",
    "phonetic": "",
    "meaning": "(beat, beaten) [biːt] v. 敲打；跳动；打赢 n.（音乐）节拍",
    "example": ""
  },
  {
    "id": 114,
    "word": "because",
    "phonetic": "/bɪˈkɔz; (US) bɪˈkɔːz/",
    "meaning": "conj. 因为",
    "example": ""
  },
  {
    "id": 115,
    "word": "become",
    "phonetic": "",
    "meaning": "(became, be come) [bɪˈkʌm] v. 变得；成为",
    "example": ""
  },
  {
    "id": 117,
    "word": "bedroom",
    "phonetic": "/ˈbedruːm/",
    "meaning": "n. 寝室，卧室",
    "example": ""
  },
  {
    "id": 118,
    "word": "bee",
    "phonetic": "/biː/",
    "meaning": "n. 蜜蜂",
    "example": ""
  },
  {
    "id": 119,
    "word": "beef",
    "phonetic": "/biːf/",
    "meaning": "n. 牛肉",
    "example": ""
  },
  {
    "id": 120,
    "word": "beer",
    "phonetic": "/bɪə(r)/",
    "meaning": "n. 啤酒",
    "example": ""
  },
  {
    "id": 122,
    "word": "beg",
    "phonetic": "/beɡ/",
    "meaning": "v. 请求，乞求，乞讨 ",
    "example": ""
  },
  {
    "id": 123,
    "word": "beginning",
    "phonetic": "/bɪˈɡɪnɪŋ/",
    "meaning": "n. 开始，开端",
    "example": ""
  },
  {
    "id": 125,
    "word": "believe",
    "phonetic": "/bɪˈliːv/",
    "meaning": "v. 相信，认为",
    "example": ""
  },
  {
    "id": 126,
    "word": "bell",
    "phonetic": "/bel/",
    "meaning": "n. 钟,铃;钟(铃)声;钟形物",
    "example": ""
  },
  {
    "id": 127,
    "word": "below",
    "phonetic": "/bɪˈləʊ/",
    "meaning": "prep. 在…下面",
    "example": ""
  },
  {
    "id": 129,
    "word": "besides",
    "phonetic": "/bɪˈsaɪdz/",
    "meaning": "prep. 除…以外（还有） ad. 还有，此外",
    "example": ""
  },
  {
    "id": 130,
    "word": "best-seller",
    "phonetic": "/best- ˈselə(r)/",
    "meaning": "n. 畅销书",
    "example": ""
  },
  {
    "id": 131,
    "word": "better",
    "phonetic": "",
    "meaning": "(good, well的比较级) [ˈbetə(r)] a.& ad. 更好的,更好地；更,更多 n. 较好的事物between [bɪˈtwiːn] prep. 在（两者）之间；在…中间",
    "example": ""
  },
  {
    "id": 135,
    "word": "bill",
    "phonetic": "/bɪl/",
    "meaning": "n.账单；法案，议案；（美）钞票，纸币",
    "example": ""
  },
  {
    "id": 136,
    "word": "billion",
    "phonetic": "/ˈbɪljən/",
    "meaning": "num. 十亿",
    "example": ""
  },
  {
    "id": 137,
    "word": "biology",
    "phonetic": "/baiɔlədʒɪ/",
    "meaning": "n. 生物（学）",
    "example": ""
  },
  {
    "id": 139,
    "word": "birth",
    "phonetic": "/bəːθ/",
    "meaning": "n. 出生；诞生",
    "example": ""
  },
  {
    "id": 141,
    "word": "bit",
    "phonetic": "/bɪt/",
    "meaning": "n. 一点，一些，少量的",
    "example": ""
  },
  {
    "id": 144,
    "word": "blank",
    "phonetic": "/blæŋk/",
    "meaning": "n.& a. 空格，空白（处）；空的；茫然无表情的",
    "example": ""
  },
  {
    "id": 145,
    "word": "blind",
    "phonetic": "/blaɪnd/",
    "meaning": "a. 瞎的",
    "example": ""
  },
  {
    "id": 146,
    "word": "blouse",
    "phonetic": "/blaʊz; U.S. blaʊs/",
    "meaning": "n. 宽罩衫；（妇女、儿童穿的）短上衣",
    "example": ""
  },
  {
    "id": 147,
    "word": "blow",
    "phonetic": "",
    "meaning": "(blew, blown) [bləʊ] v. 吹；刮风；吹气 n. 击；打击",
    "example": ""
  },
  {
    "id": 149,
    "word": "board",
    "phonetic": "/bɔːd/",
    "meaning": "n. 木板；布告牌;（政府的）部 v. 上（船、火车、飞机）",
    "example": ""
  },
  {
    "id": 151,
    "word": "boating",
    "phonetic": "/ˈbəʊtɪŋ/",
    "meaning": "n. 划船（游玩），泛舟",
    "example": ""
  },
  {
    "id": 154,
    "word": "bookmark",
    "phonetic": "/ˈbʊkmɑːk/",
    "meaning": "n. 书签",
    "example": ""
  },
  {
    "id": 155,
    "word": "bookshop",
    "phonetic": "/ˈbʊkʃɔp/",
    "meaning": "n.书店",
    "example": ""
  },
  {
    "id": 156,
    "word": "bookstore",
    "phonetic": "/ˈbʊkstɔː(r)/",
    "meaning": "n. 书店",
    "example": ""
  },
  {
    "id": 157,
    "word": "boom",
    "phonetic": "/buːm/",
    "meaning": "n. / v. 繁荣，轰鸣，激增",
    "example": ""
  },
  {
    "id": 158,
    "word": "boot",
    "phonetic": "/buːt/",
    "meaning": "n. 长筒靴；靴",
    "example": ""
  },
  {
    "id": 159,
    "word": "boring",
    "phonetic": "/`bɔrɪŋ/",
    "meaning": "a. 乏味的，无聊的",
    "example": ""
  },
  {
    "id": 160,
    "word": "born",
    "phonetic": "/bɔːn/",
    "meaning": "a. 出生的",
    "example": ""
  },
  {
    "id": 161,
    "word": "borrow",
    "phonetic": "/ˈbɔrəʊ/",
    "meaning": "v.（向别人）借用；借",
    "example": ""
  },
  {
    "id": 162,
    "word": "both",
    "phonetic": "/bəʊθ/",
    "meaning": "a. 两；双 pron. 两者；双方",
    "example": ""
  },
  {
    "id": 163,
    "word": "bottle",
    "phonetic": "/ˈbɔt(ə)l/",
    "meaning": "n. 瓶子",
    "example": ""
  },
  {
    "id": 164,
    "word": "bottom",
    "phonetic": "/ˈbɔtəm/",
    "meaning": "n. 底部；底",
    "example": ""
  },
  {
    "id": 165,
    "word": "bowl",
    "phonetic": "/bəʊl/",
    "meaning": "n. 碗",
    "example": ""
  },
  {
    "id": 168,
    "word": "brain",
    "phonetic": "/breɪn/",
    "meaning": "n. 脑（子）",
    "example": ""
  },
  {
    "id": 170,
    "word": "break",
    "phonetic": "",
    "meaning": "(broke, broken) [breɪk] n. 间隙,中断,暂停 v. 打破（断，碎）",
    "example": ""
  },
  {
    "id": 172,
    "word": "breathe",
    "phonetic": "/briːð/",
    "meaning": "vi. 呼吸",
    "example": ""
  },
  {
    "id": 173,
    "word": "bridge",
    "phonetic": "/brɪdʒ/",
    "meaning": "n. 桥",
    "example": ""
  },
  {
    "id": 174,
    "word": "bright",
    "phonetic": "/braɪt/",
    "meaning": "a. 明亮的；聪明的",
    "example": ""
  },
  {
    "id": 176,
    "word": "Britain",
    "phonetic": "/ˈbrɪtən/",
    "meaning": "n. 英国；不列颠",
    "example": ""
  },
  {
    "id": 177,
    "word": "British",
    "phonetic": "/ˈbrɪtɪʃ/",
    "meaning": "a. 英国的；大不列颠的；英国人的",
    "example": ""
  },
  {
    "id": 178,
    "word": "broadcast",
    "phonetic": "/ˈbrɔːdkɑːst/",
    "meaning": "n. /v. 广播",
    "example": ""
  },
  {
    "id": 179,
    "word": "broken",
    "phonetic": "/ˈbrəʊkən/",
    "meaning": "a. 弄坏了的",
    "example": ""
  },
  {
    "id": 180,
    "word": "broom",
    "phonetic": "/bruːm/",
    "meaning": "n. 扫帚",
    "example": ""
  },
  {
    "id": 182,
    "word": "brotherhood",
    "phonetic": "/ˈbrʌðəhʊd/",
    "meaning": "n. 兄弟般的关系",
    "example": ""
  },
  {
    "id": 184,
    "word": "brush",
    "phonetic": "/brʌʃ/",
    "meaning": "v. 刷；擦 n. 刷子",
    "example": ""
  },
  {
    "id": 185,
    "word": "build",
    "phonetic": "",
    "meaning": "(built, built) [bɪld] v. 建筑；造",
    "example": ""
  },
  {
    "id": 186,
    "word": "building",
    "phonetic": "/ˈbɪldɪŋ/",
    "meaning": "n. 建筑物；房屋；大楼",
    "example": ""
  },
  {
    "id": 187,
    "word": "burn",
    "phonetic": "",
    "meaning": "(-ed, -ed / burnt, burnt) [bɜːn] v. 燃烧,着火;使烧焦;使晒黑 n. 烧伤;晒伤",
    "example": ""
  },
  {
    "id": 188,
    "word": "bury",
    "phonetic": "/ˈberɪ/",
    "meaning": "vt. 埋；葬",
    "example": ""
  },
  {
    "id": 190,
    "word": "business",
    "phonetic": "/ˈbɪznɪs/",
    "meaning": "n.（本分）工作，职业；职责；生意，交易；事业",
    "example": ""
  },
  {
    "id": 191,
    "word": "businessman (pl. businessmen)",
    "phonetic": "/ˈbɪznɪsmæn/",
    "meaning": "n. 商人（男）；男企业家",
    "example": ""
  },
  {
    "id": 194,
    "word": "butter",
    "phonetic": "/ˈbʌtə(r)/",
    "meaning": "n. 黄油，奶油",
    "example": ""
  },
  {
    "id": 195,
    "word": "butterfly",
    "phonetic": "/ˈbʌtəflaɪ/",
    "meaning": "n. 蝴蝶",
    "example": ""
  },
  {
    "id": 196,
    "word": "button",
    "phonetic": "/ˈbʌt(ə)n/",
    "meaning": "n. 纽扣；（电铃等的）按钮 v. 扣（纽扣） ",
    "example": ""
  },
  {
    "id": 200,
    "word": "cabbage",
    "phonetic": "/ˈkæbɪdʒ/",
    "meaning": "n. 卷心菜，洋白菜",
    "example": ""
  },
  {
    "id": 201,
    "word": "cage",
    "phonetic": "/keɪdʒ/",
    "meaning": "n 笼；鸟笼",
    "example": ""
  },
  {
    "id": 204,
    "word": "camel",
    "phonetic": "/ˈkæm(ə)l/",
    "meaning": "n. 骆驼",
    "example": ""
  },
  {
    "id": 205,
    "word": "camera",
    "phonetic": "/ˈkæmərə/",
    "meaning": "n. 照相机；摄像机",
    "example": ""
  },
  {
    "id": 206,
    "word": "camp",
    "phonetic": "/kæmp/",
    "meaning": "n.（夏令）营 vi. 野营,宿营",
    "example": ""
  },
  {
    "id": 208,
    "word": "Canada",
    "phonetic": "/ˈkænədə/",
    "meaning": "n. 加拿大",
    "example": ""
  },
  {
    "id": 209,
    "word": "Canadian",
    "phonetic": "/kəˈneɪdɪən/",
    "meaning": "a. 加拿大的；加拿大人的 n. 加拿大人",
    "example": ""
  },
  {
    "id": 210,
    "word": "cancer",
    "phonetic": "/ˈkænsə/",
    "meaning": "n. 癌,癌症,弊端,社会恶习",
    "example": ""
  },
  {
    "id": 211,
    "word": "candle",
    "phonetic": "/ˈkænd(ə)l/",
    "meaning": "n. 蜡烛",
    "example": ""
  },
  {
    "id": 213,
    "word": "cannon",
    "phonetic": "/kænən/",
    "meaning": "n. 大炮",
    "example": ""
  },
  {
    "id": 214,
    "word": "canoe",
    "phonetic": "/kəˈnuː/",
    "meaning": "n. 独木舟 v. 乘独木舟",
    "example": ""
  },
  {
    "id": 216,
    "word": "capital",
    "phonetic": "/ˈkæpɪt(ə)l/",
    "meaning": "n.首都,省会,大写；资本",
    "example": ""
  },
  {
    "id": 217,
    "word": "captain",
    "phonetic": "/ˈkæptɪn/",
    "meaning": "n.（海军）上校；船长，舰长；队长",
    "example": ""
  },
  {
    "id": 218,
    "word": "caption",
    "phonetic": "/ˈkæpʃ(ə)n/",
    "meaning": "n.（图片，漫画等的）说明文字",
    "example": ""
  },
  {
    "id": 221,
    "word": "care",
    "phonetic": "/keə(r)/",
    "meaning": "n. 照料，保护；小心 v. 介意…，在乎；关心",
    "example": ""
  },
  {
    "id": 222,
    "word": "careful",
    "phonetic": "/ˈkeəfʊl/",
    "meaning": "a. 小心，仔细，谨慎的",
    "example": ""
  },
  {
    "id": 223,
    "word": "careless",
    "phonetic": "/ˈkeəlɪs/",
    "meaning": "a. 粗心的，漫不经心的",
    "example": ""
  },
  {
    "id": 224,
    "word": "carrot",
    "phonetic": "/ˈkærət/",
    "meaning": "n. 胡萝卜",
    "example": ""
  },
  {
    "id": 225,
    "word": "carry",
    "phonetic": "/ˈkærɪ/",
    "meaning": "vt. 拿，搬，带，提，抬，背，抱，运等",
    "example": ""
  },
  {
    "id": 227,
    "word": "cause",
    "phonetic": "/kɔːz/",
    "meaning": "n. 原因，起因 vt. 促使，引起，使发生",
    "example": ""
  },
  {
    "id": 228,
    "word": "CD",
    "phonetic": "/ˌsi:'di:/",
    "meaning": "光盘 (compact disk的缩写)",
    "example": ""
  },
  {
    "id": 229,
    "word": "ceiling",
    "phonetic": "/ˈsiːlɪŋ/",
    "meaning": "n. 天花板，顶棚",
    "example": ""
  },
  {
    "id": 230,
    "word": "celebrate",
    "phonetic": "/ˈselɪbreɪt/",
    "meaning": "v. 庆祝",
    "example": ""
  },
  {
    "id": 231,
    "word": "celebration",
    "phonetic": "/selɪˈbreɪʃ(ə)n/",
    "meaning": "n. 庆祝；庆祝会",
    "example": ""
  },
  {
    "id": 232,
    "word": "cent",
    "phonetic": "/sent/",
    "meaning": "n. 美分（100 cents = 1 dollar）",
    "example": ""
  },
  {
    "id": 233,
    "word": "centre",
    "phonetic": "",
    "meaning": "(美 center ) [ˈsentə] n. 中心，中央",
    "example": ""
  },
  {
    "id": 234,
    "word": "century",
    "phonetic": "/ˈsentʃurɪ/",
    "meaning": "n. 世纪，百年",
    "example": ""
  },
  {
    "id": 235,
    "word": "certain",
    "phonetic": "/ˈsɜːt(ə)n/",
    "meaning": "a. （未指明真实名称的）某…；确定的，无疑的；一定会…",
    "example": ""
  },
  {
    "id": 236,
    "word": "certainly",
    "phonetic": "/ˈsɜːtənlɪ/",
    "meaning": "ad. 当然；一定，无疑",
    "example": ""
  },
  {
    "id": 238,
    "word": "chalk",
    "phonetic": "/tʃɔːk/",
    "meaning": "n. 粉笔",
    "example": ""
  },
  {
    "id": 239,
    "word": "challenge",
    "phonetic": "/ˈtʃælɪndʒ/",
    "meaning": "n.挑战(性)",
    "example": ""
  },
  {
    "id": 240,
    "word": "chance",
    "phonetic": "/tʃɑːns; (US) tʃæns/",
    "meaning": "n. 机会，可能性",
    "example": ""
  },
  {
    "id": 241,
    "word": "change",
    "phonetic": "/tʃeɪndʒ/",
    "meaning": "n. 零钱；找头 v. 改变，变化；更换；兑换",
    "example": ""
  },
  {
    "id": 242,
    "word": "channel",
    "phonetic": "/ˈtʃæn(ə)l/",
    "meaning": "n.频道；通道；水渠",
    "example": ""
  },
  {
    "id": 243,
    "word": "chart",
    "phonetic": "/tʃɑːt/",
    "meaning": "n. 图表；航海图",
    "example": ""
  },
  {
    "id": 244,
    "word": "cheap",
    "phonetic": "/tʃiːp/",
    "meaning": "a. 便宜的，贱",
    "example": ""
  },
  {
    "id": 245,
    "word": "check",
    "phonetic": "/tʃek/",
    "meaning": "n. 检查；批改 vt. 校对，核对；检查；批改",
    "example": ""
  },
  {
    "id": 246,
    "word": "check-out",
    "phonetic": "/tʃekaut/",
    "meaning": "n. 结账台,收银台",
    "example": ""
  },
  {
    "id": 247,
    "word": "cheese",
    "phonetic": "/tʃiːz/",
    "meaning": "n. 奶酪",
    "example": ""
  },
  {
    "id": 248,
    "word": "chemistry",
    "phonetic": "/ˈkemistri/",
    "meaning": "n. 化学",
    "example": ""
  },
  {
    "id": 249,
    "word": "cheque",
    "phonetic": "/tʃek/",
    "meaning": "(美check) n. 支票",
    "example": ""
  },
  {
    "id": 250,
    "word": "chess",
    "phonetic": "/tʃes/",
    "meaning": "n. 国际象棋,棋",
    "example": ""
  },
  {
    "id": 251,
    "word": "chick",
    "phonetic": "/tʃɪk/",
    "meaning": "n. 小鸡",
    "example": ""
  },
  {
    "id": 254,
    "word": "chimney",
    "phonetic": "/ˈtʃɪmnɪ/",
    "meaning": "n. 烟囱，烟筒",
    "example": ""
  },
  {
    "id": 257,
    "word": "chocolate",
    "phonetic": "/ˈtʃɔklit/",
    "meaning": "n. 巧克力",
    "example": ""
  },
  {
    "id": 258,
    "word": "choose",
    "phonetic": "",
    "meaning": "(chose, chosen) [tʃuːz] vt. 选择",
    "example": ""
  },
  {
    "id": 259,
    "word": "Christmas",
    "phonetic": "/ˈkrɪsməs/",
    "meaning": "n. 圣诞节",
    "example": ""
  },
  {
    "id": 260,
    "word": "church",
    "phonetic": "/tʃɜːtʃ/",
    "meaning": "n. 教堂；教会",
    "example": ""
  },
  {
    "id": 262,
    "word": "circle",
    "phonetic": "/ˈsɜːk(ə)l/",
    "meaning": "n. /vt. 圆,环绕",
    "example": ""
  },
  {
    "id": 265,
    "word": "classmate",
    "phonetic": "/ˈklɑːsmeɪt/",
    "meaning": "n. 同班同学",
    "example": ""
  },
  {
    "id": 266,
    "word": "classroom",
    "phonetic": "/ˈklɑːsruːm/",
    "meaning": "n. 教室",
    "example": ""
  },
  {
    "id": 268,
    "word": "clear",
    "phonetic": "/klɪə(r)/",
    "meaning": "a. 清晰；明亮的；清楚的",
    "example": ""
  },
  {
    "id": 269,
    "word": "clearly",
    "phonetic": "/ˈklɪəlɪ/",
    "meaning": "ad. 清楚地，无疑地",
    "example": ""
  },
  {
    "id": 271,
    "word": "climb",
    "phonetic": "/klaɪm/",
    "meaning": "v. 爬，攀登",
    "example": ""
  },
  {
    "id": 274,
    "word": "cloth",
    "phonetic": "/klɔθ; (US) klɔθ/",
    "meaning": "n. 布",
    "example": ""
  },
  {
    "id": 276,
    "word": "cloud",
    "phonetic": "/ˈklaʊd/",
    "meaning": "n. 云；云状物；阴影",
    "example": ""
  },
  {
    "id": 278,
    "word": "club",
    "phonetic": "/klʌb/",
    "meaning": "n. 俱乐部；纸牌中的梅花",
    "example": ""
  },
  {
    "id": 279,
    "word": "coal",
    "phonetic": "/kəʊl/",
    "meaning": "n. 煤；煤块",
    "example": ""
  },
  {
    "id": 281,
    "word": "cock",
    "phonetic": "/kɔk/",
    "meaning": "n. 公鸡",
    "example": ""
  },
  {
    "id": 282,
    "word": "code",
    "phonetic": "/kəʊd/",
    "meaning": "n. 密码,符号,准则",
    "example": ""
  },
  {
    "id": 283,
    "word": "cocoa",
    "phonetic": "/ˈkəʊkəʊ/",
    "meaning": "n. 可可粉",
    "example": ""
  },
  {
    "id": 284,
    "word": "coffee",
    "phonetic": "/ˈkɔfɪ; (US) ˈkɔːfɪ/",
    "meaning": "n. 咖啡",
    "example": ""
  },
  {
    "id": 285,
    "word": "coin",
    "phonetic": "/kɔɪn/",
    "meaning": "n. 硬币",
    "example": ""
  },
  {
    "id": 286,
    "word": "coke",
    "phonetic": "/kəʊk/",
    "meaning": "n. 可口可乐",
    "example": ""
  },
  {
    "id": 288,
    "word": "collect",
    "phonetic": "/kəˈlekt/",
    "meaning": "vt. 收集，搜集",
    "example": ""
  },
  {
    "id": 289,
    "word": "college",
    "phonetic": "/ˈkɔlɪdʒ/",
    "meaning": "n. 学院；专科学校",
    "example": ""
  },
  {
    "id": 292,
    "word": "comfort",
    "phonetic": "/ˈkʌmfət/",
    "meaning": "n. 安慰；慰问",
    "example": ""
  },
  {
    "id": 293,
    "word": "comfortable",
    "phonetic": "/ˈkʌmfətəb(ə)l; (US) ˈkʌmfərtəbl/",
    "meaning": "a. 舒服的；安逸的；舒服自在的",
    "example": ""
  },
  {
    "id": 294,
    "word": "common",
    "phonetic": "/ˈkɔmən/",
    "meaning": "a. 普通，一般；共有的",
    "example": ""
  },
  {
    "id": 295,
    "word": "company",
    "phonetic": "/ˈkʌmpənɪ/",
    "meaning": "n. 公司",
    "example": ""
  },
  {
    "id": 296,
    "word": "competition",
    "phonetic": "/kɔmpəˈtɪʃ(ə)n/",
    "meaning": "n. 比赛，竞赛",
    "example": ""
  },
  {
    "id": 297,
    "word": "complain",
    "phonetic": "/kəmˈplein/",
    "meaning": "v. 抱怨,投诉",
    "example": ""
  },
  {
    "id": 298,
    "word": "composition",
    "phonetic": "/kɔmpəːziʃ(ə)n/",
    "meaning": "n. 作文；作曲",
    "example": ""
  },
  {
    "id": 300,
    "word": "computer game",
    "phonetic": "/kəmˈpjuːtə(r) ɡeim/",
    "meaning": "电子游戏",
    "example": ""
  },
  {
    "id": 301,
    "word": "comrade",
    "phonetic": "/ˈkɔmrid; (US) ˈkɑmræd/",
    "meaning": "n. 同志",
    "example": ""
  },
  {
    "id": 302,
    "word": "concert",
    "phonetic": "/ˈkɔnsət/",
    "meaning": "n. 音乐会；演奏会",
    "example": ""
  },
  {
    "id": 303,
    "word": "conductor",
    "phonetic": "/kənˈdʌktə(r)/",
    "meaning": "n. 指导者;（车上的）售票员，列车员;乐队指挥",
    "example": ""
  },
  {
    "id": 304,
    "word": "confident",
    "phonetic": "/ˈkɔnfɪdənt/",
    "meaning": "a. 自信的",
    "example": ""
  },
  {
    "id": 305,
    "word": "congratulate",
    "phonetic": "/kənˈɡrætjʊleɪt/",
    "meaning": "vt. 祝贺",
    "example": ""
  },
  {
    "id": 306,
    "word": "congratulation",
    "phonetic": "/kənɡrætjʊˈleɪʃ(ə)n/",
    "meaning": "n. 祝贺，庆贺",
    "example": ""
  },
  {
    "id": 307,
    "word": "connect",
    "phonetic": "/kəˈnekt/",
    "meaning": "v. 连接，把…联系起来",
    "example": ""
  },
  {
    "id": 308,
    "word": "continue",
    "phonetic": "/kənˈtɪnjuː/",
    "meaning": "vi. 继续",
    "example": ""
  },
  {
    "id": 309,
    "word": "conversation",
    "phonetic": "/kɔnvəˈseɪʃ(ə)n/",
    "meaning": "n. 谈话，交谈",
    "example": ""
  },
  {
    "id": 311,
    "word": "cookie",
    "phonetic": "/ˈkʊkɪ/",
    "meaning": "n. 小甜饼",
    "example": ""
  },
  {
    "id": 313,
    "word": "copy",
    "phonetic": "/ˈkɔpɪ/",
    "meaning": "n. 抄本，副本；一本（份，册…） v. 抄写,复印,拷贝",
    "example": ""
  },
  {
    "id": 314,
    "word": "corn",
    "phonetic": "/kɔːn/",
    "meaning": "n. 玉米，谷物",
    "example": ""
  },
  {
    "id": 315,
    "word": "corner",
    "phonetic": "/ˈkɔːnə(r)/",
    "meaning": "n. 角；角落；拐角",
    "example": ""
  },
  {
    "id": 316,
    "word": "correct",
    "phonetic": "/kəˈrekt/",
    "meaning": "v. 改正；纠正 a. 正确的，对的；恰当的",
    "example": ""
  },
  {
    "id": 317,
    "word": "cost",
    "phonetic": "",
    "meaning": "(cost, cost) [kɔst; (US) kɔːst] v.值（钱），花费 n. 价格",
    "example": ""
  },
  {
    "id": 318,
    "word": "cotton",
    "phonetic": "/ˈkɔt(ə)n/",
    "meaning": "n. 棉花 a. 棉花的",
    "example": ""
  },
  {
    "id": 319,
    "word": "cough",
    "phonetic": "/kɔf; (US) kɔːf/",
    "meaning": "n.& vi. 咳嗽",
    "example": ""
  },
  {
    "id": 320,
    "word": "could",
    "phonetic": "/kʊdˈ/",
    "meaning": "v.（can的过去式）可以…；（表示许可或请求）可以…，行",
    "example": ""
  },
  {
    "id": 321,
    "word": "count",
    "phonetic": "/kaʊnt/",
    "meaning": "vt. 数，点数",
    "example": ""
  },
  {
    "id": 322,
    "word": "country",
    "phonetic": "/ˈkʌntrɪ/",
    "meaning": "n. 国家；农村，乡下",
    "example": ""
  },
  {
    "id": 323,
    "word": "countryside",
    "phonetic": "/ˈkʌntrɪsaɪd/",
    "meaning": "n. 乡下，农村",
    "example": ""
  },
  {
    "id": 324,
    "word": "couple",
    "phonetic": "/ˈkʌp(ə)l/",
    "meaning": "n. 夫妇，一对",
    "example": ""
  },
  {
    "id": 325,
    "word": "course",
    "phonetic": "/kɔːs/",
    "meaning": "n. 过程；经过；课程",
    "example": ""
  },
  {
    "id": 327,
    "word": "cover",
    "phonetic": "/ˈkʌvə(r)/",
    "meaning": "n. 盖子；罩 v. 覆盖，遮盖；掩盖",
    "example": ""
  },
  {
    "id": 329,
    "word": "crash",
    "phonetic": "/kræʃ/",
    "meaning": "v. / n. 碰撞，撞击",
    "example": ""
  },
  {
    "id": 330,
    "word": "cream",
    "phonetic": "/kriːm/",
    "meaning": "n. 奶油，乳脂",
    "example": ""
  },
  {
    "id": 331,
    "word": "crop",
    "phonetic": "/krɔp/",
    "meaning": "n. 庄稼；收成",
    "example": ""
  },
  {
    "id": 332,
    "word": "cross",
    "phonetic": "/krɔs/",
    "meaning": "a. 脾气不好的，易怒的 n. 十字形的东西 vt. 越过；穿过",
    "example": ""
  },
  {
    "id": 333,
    "word": "crossing",
    "phonetic": "/ˈkrɔsɪŋ/",
    "meaning": "n. 十字路口，人行横道",
    "example": ""
  },
  {
    "id": 334,
    "word": "crowd",
    "phonetic": "/kraʊd/",
    "meaning": "n. 人群 vt. 拥挤，群聚",
    "example": ""
  },
  {
    "id": 336,
    "word": "culture",
    "phonetic": "/ˈkʌltʃə(r)/",
    "meaning": "n. 文化",
    "example": ""
  },
  {
    "id": 337,
    "word": "cup",
    "phonetic": "/kʌp/",
    "meaning": "n. 茶杯",
    "example": ""
  },
  {
    "id": 338,
    "word": "cupboard",
    "phonetic": "/ˈkʌbəd/",
    "meaning": "n. 碗柜；橱柜",
    "example": ""
  },
  {
    "id": 339,
    "word": "curtain",
    "phonetic": "/ˈkɜːt(ə)n/",
    "meaning": "n. 窗帘",
    "example": ""
  },
  {
    "id": 340,
    "word": "cushion",
    "phonetic": "/ˈkʊʃ(ə)n/",
    "meaning": "n. 垫子",
    "example": ""
  },
  {
    "id": 341,
    "word": "customer",
    "phonetic": "/ˈkʌstəmə(r)/",
    "meaning": "n.（商店）顾客，主顾",
    "example": ""
  },
  {
    "id": 342,
    "word": "cut",
    "phonetic": "",
    "meaning": "(cut, cut) [kʌt] v. 切，剪，削，割",
    "example": ""
  },
  {
    "id": 343,
    "word": "cute",
    "phonetic": "/kju:t/",
    "meaning": "adj.可爱的",
    "example": ""
  },
  {
    "id": 345,
    "word": "daily",
    "phonetic": "/ˈdeɪlɪ/",
    "meaning": "a. 每日的；日常的 ad. 每天 n. 日报",
    "example": ""
  },
  {
    "id": 347,
    "word": "dangerous",
    "phonetic": "/ˈdeɪndʒərəs/",
    "meaning": "a. 危险的",
    "example": ""
  },
  {
    "id": 348,
    "word": "dare",
    "phonetic": "/deə(r)/",
    "meaning": "v.& aux. 敢，敢于",
    "example": ""
  },
  {
    "id": 349,
    "word": "dark",
    "phonetic": "/dɑːk/",
    "meaning": "n. 黑暗；暗处；日暮 a. 黑暗的；暗淡的；深色的",
    "example": ""
  },
  {
    "id": 350,
    "word": "date",
    "phonetic": "/deɪt/",
    "meaning": "n. 日期；约会 n.枣",
    "example": ""
  },
  {
    "id": 351,
    "word": "daughter",
    "phonetic": "/ˈdɔːtə(r)/",
    "meaning": "n. 女儿",
    "example": ""
  },
  {
    "id": 353,
    "word": "daytime",
    "phonetic": "/ˈdeɪtaɪm/",
    "meaning": "n. 白天，白昼",
    "example": ""
  },
  {
    "id": 354,
    "word": "dead",
    "phonetic": "/ded/",
    "meaning": "a. 死的；无生命的",
    "example": ""
  },
  {
    "id": 355,
    "word": "deaf",
    "phonetic": "/def/",
    "meaning": "a. 聋的",
    "example": ""
  },
  {
    "id": 356,
    "word": "deal",
    "phonetic": "/diːl/",
    "meaning": "n. 量，数额；交易",
    "example": ""
  },
  {
    "id": 358,
    "word": "death",
    "phonetic": "/deθ/",
    "meaning": "n. 死",
    "example": ""
  },
  {
    "id": 359,
    "word": "December",
    "phonetic": "/dɪˈsembə(r)/",
    "meaning": "n. 12月",
    "example": ""
  },
  {
    "id": 360,
    "word": "decide",
    "phonetic": "/dɪˈsaɪd/",
    "meaning": "v. 决定；下决心",
    "example": ""
  },
  {
    "id": 361,
    "word": "decision",
    "phonetic": "/dɪˈsɪʒ(ə)n/",
    "meaning": "n. 决定；决心",
    "example": ""
  },
  {
    "id": 362,
    "word": "decorate",
    "phonetic": "/ˈdekəreɪt/",
    "meaning": "vt. 装饰，修饰",
    "example": ""
  },
  {
    "id": 363,
    "word": "deep",
    "phonetic": "/diːp/",
    "meaning": "a. 深 ad. 深；深厚",
    "example": ""
  },
  {
    "id": 364,
    "word": "deeply",
    "phonetic": "/ˈdiːplɪ/",
    "meaning": "ad. 深深地",
    "example": ""
  },
  {
    "id": 365,
    "word": "deer",
    "phonetic": "/dɪə(r)/",
    "meaning": "n. 鹿",
    "example": ""
  },
  {
    "id": 366,
    "word": "delicious",
    "phonetic": "/dɪˈlɪʃəs/",
    "meaning": "a. 美味的，可口的",
    "example": ""
  },
  {
    "id": 367,
    "word": "delight",
    "phonetic": "/dɪˈlaɪt/",
    "meaning": "n. 快乐；乐事",
    "example": ""
  },
  {
    "id": 368,
    "word": "demand",
    "phonetic": "/dɪˈmɑːnd; (US) dɪˈmænd/",
    "meaning": "vt. 要求",
    "example": ""
  },
  {
    "id": 369,
    "word": "depend",
    "phonetic": "/dɪˈpend/",
    "meaning": "vi. 依靠，依赖，指望；取决于",
    "example": ""
  },
  {
    "id": 370,
    "word": "describe",
    "phonetic": "/dɪˈskraɪb/",
    "meaning": "vt. 描写，叙述",
    "example": ""
  },
  {
    "id": 371,
    "word": "description",
    "phonetic": "/dɪˈskrɪpʃ(ə)n/",
    "meaning": "n. 描述，描写",
    "example": ""
  },
  {
    "id": 372,
    "word": "desert",
    "phonetic": "/dɪˈzɜːt/",
    "meaning": "n. 沙漠 vt. 舍弃；遗弃",
    "example": ""
  },
  {
    "id": 373,
    "word": "deserve",
    "phonetic": "/dɪˈzɜːv/",
    "meaning": "v.（不用于进行时态）应得，应受",
    "example": ""
  },
  {
    "id": 375,
    "word": "destroy",
    "phonetic": "/dɪˈstrɔɪ/",
    "meaning": "vt. 破坏，毁坏",
    "example": ""
  },
  {
    "id": 376,
    "word": "detective",
    "phonetic": "/dɪˈtektɪv/",
    "meaning": "n. 侦探",
    "example": ""
  },
  {
    "id": 377,
    "word": "develop",
    "phonetic": "/dɪˈveləp/",
    "meaning": "v.（使）发展；开发 vt. 冲洗（照片）",
    "example": ""
  },
  {
    "id": 378,
    "word": "diagram",
    "phonetic": "/ˈdaɪəɡræm/",
    "meaning": "n. 图表，图样",
    "example": ""
  },
  {
    "id": 379,
    "word": "dial",
    "phonetic": "/ˈdaɪ(ə)l/",
    "meaning": "vt. 拨（电话号码）",
    "example": ""
  },
  {
    "id": 380,
    "word": "dialogue",
    "phonetic": "/ˈdaɪəlɔɡ; (US) ˈdaɪəlɔːɡ/",
    "meaning": "n. 对话",
    "example": ""
  },
  {
    "id": 381,
    "word": "diary",
    "phonetic": "/ˈdaɪərɪ/",
    "meaning": "n. 日记；日记簿",
    "example": ""
  },
  {
    "id": 382,
    "word": "dictation",
    "phonetic": "/dɪkˈteɪʃ(ə)n/",
    "meaning": "n. 听写",
    "example": ""
  },
  {
    "id": 383,
    "word": "dictionary",
    "phonetic": "/ˈdɪkʃənərɪ; (US) ˈdɪkʃənerɪ/",
    "meaning": "n. 词典，字典",
    "example": ""
  },
  {
    "id": 384,
    "word": "die",
    "phonetic": "/daɪ/",
    "meaning": "v. 死",
    "example": ""
  },
  {
    "id": 385,
    "word": "difference",
    "phonetic": "/ˈdɪfərəns/",
    "meaning": "n. 不同",
    "example": ""
  },
  {
    "id": 386,
    "word": "different",
    "phonetic": "/ˈdɪfərənt/",
    "meaning": "a. 不同的，有差异的",
    "example": ""
  },
  {
    "id": 388,
    "word": "difficulty",
    "phonetic": "/ˈdɪfɪkəltɪ/",
    "meaning": "n. 困难，费力",
    "example": ""
  },
  {
    "id": 389,
    "word": "dig",
    "phonetic": "",
    "meaning": "(dug, dug) [dɪɡ] v. 挖（洞沟）,掘",
    "example": ""
  },
  {
    "id": 390,
    "word": "digital",
    "phonetic": "/ˈdɪdʒɪt(ə)l/",
    "meaning": "a. .数字的，数码的",
    "example": ""
  },
  {
    "id": 391,
    "word": "dim",
    "phonetic": "/dɪm/",
    "meaning": "a. 昏暗的,暗淡的",
    "example": ""
  },
  {
    "id": 392,
    "word": "dining-room",
    "phonetic": "/'dainiŋ-rʊm/",
    "meaning": "食堂，饭厅",
    "example": ""
  },
  {
    "id": 394,
    "word": "dip",
    "phonetic": "/dɪp/",
    "meaning": "vt. 浸，蘸；把…放入又取出",
    "example": ""
  },
  {
    "id": 395,
    "word": "direct",
    "phonetic": "/dɪˈrekt, daɪˈrekt/",
    "meaning": "a. 直接的；直截了当的 vt. 指挥；指导；导演（电影）",
    "example": ""
  },
  {
    "id": 396,
    "word": "direction",
    "phonetic": "/dɪˈrekʃ(ə)n, daɪˈrekʃ(ə)n/",
    "meaning": "n. 方向；方位",
    "example": ""
  },
  {
    "id": 397,
    "word": "director",
    "phonetic": "/dɪˈrektə(r)/",
    "meaning": "n. 所长，处长，主任；董事；导演",
    "example": ""
  },
  {
    "id": 398,
    "word": "directory",
    "phonetic": "/dɪˈrektərɪ/",
    "meaning": "n. 姓名地址录",
    "example": ""
  },
  {
    "id": 399,
    "word": "dirt",
    "phonetic": "/dɜːt/",
    "meaning": "n. 污物；脏物",
    "example": ""
  },
  {
    "id": 401,
    "word": "disappear",
    "phonetic": "/dɪsəˈpɪə(r)/",
    "meaning": "vi. 消失",
    "example": ""
  },
  {
    "id": 402,
    "word": "discover",
    "phonetic": "/dɪˈskʌvə(r)/",
    "meaning": "vt. 发现",
    "example": ""
  },
  {
    "id": 403,
    "word": "discovery",
    "phonetic": "/dɪˈskʌvərɪ/",
    "meaning": "n. 发现",
    "example": ""
  },
  {
    "id": 404,
    "word": "discuss",
    "phonetic": "/dɪsˈkʌs/",
    "meaning": "vt. 讨论，议论",
    "example": ""
  },
  {
    "id": 405,
    "word": "discussion",
    "phonetic": "/dɪsˈkʌʃ(ə)n/",
    "meaning": "n. 讨论，辩论",
    "example": ""
  },
  {
    "id": 406,
    "word": "disease",
    "phonetic": "/dɪˈziːz/",
    "meaning": "n. 病，疾病",
    "example": ""
  },
  {
    "id": 407,
    "word": "dish",
    "phonetic": "/dɪʃ/",
    "meaning": "n. 盘，碟；盘装菜；盘形物",
    "example": ""
  },
  {
    "id": 408,
    "word": "display",
    "phonetic": "/dɪsˈplei/",
    "meaning": "vt. 陈列,展览;显露,表现  n. 陈列,展览;展览品,展览品",
    "example": ""
  },
  {
    "id": 409,
    "word": "disturb",
    "phonetic": "/dɪˈstɜːb/",
    "meaning": "vt. 扰乱；打扰",
    "example": ""
  },
  {
    "id": 410,
    "word": "dive",
    "phonetic": "/daɪv/",
    "meaning": "vi. 跳水",
    "example": ""
  },
  {
    "id": 411,
    "word": "divide",
    "phonetic": "/dɪˈvaɪd/",
    "meaning": "vt. 分，划分",
    "example": ""
  },
  {
    "id": 415,
    "word": "doll",
    "phonetic": "/dɔl; (US) dɔːl/",
    "meaning": "n. 玩偶，玩具娃娃",
    "example": ""
  },
  {
    "id": 416,
    "word": "dollar",
    "phonetic": "/dɔlə/",
    "meaning": "n. 元（美国、加拿大、澳大利亚等国货币单位）",
    "example": ""
  },
  {
    "id": 418,
    "word": "double",
    "phonetic": "/ˈdʌb(ə)l/",
    "meaning": "a. 两倍.双的 n. 两个.双",
    "example": ""
  },
  {
    "id": 420,
    "word": "download",
    "phonetic": "/'daunləud/",
    "meaning": "n.& v. 下载",
    "example": ""
  },
  {
    "id": 421,
    "word": "downstairs",
    "phonetic": "/ˈdaʊnsteəz/",
    "meaning": "ad. 在楼下；到楼下",
    "example": ""
  },
  {
    "id": 422,
    "word": "downtown",
    "phonetic": "/ˈdaʊntaʊn/",
    "meaning": "n. 城市的商业区，中心区，闹市区 a. 商业区的,闹市区的",
    "example": ""
  },
  {
    "id": 423,
    "word": "dozen",
    "phonetic": "/ˈdʌzn/",
    "meaning": "n. 十二个；几十，许多",
    "example": ""
  },
  {
    "id": 424,
    "word": "drag",
    "phonetic": "/dræɡ/",
    "meaning": "v. 拖；拽",
    "example": ""
  },
  {
    "id": 425,
    "word": "dragon",
    "phonetic": "/ˈdræɡən/",
    "meaning": "n.龙",
    "example": ""
  },
  {
    "id": 427,
    "word": "drawer",
    "phonetic": "/drɔ:ə/",
    "meaning": "n. 抽屉",
    "example": ""
  },
  {
    "id": 428,
    "word": "drawing",
    "phonetic": "/ˈdrɔːɪŋ/",
    "meaning": "n. 图画，素描,绘画",
    "example": ""
  },
  {
    "id": 429,
    "word": "dream",
    "phonetic": "",
    "meaning": "(dreamt, dreamt 或-ed, -ed) [driːm] n.& vt. 梦，梦想",
    "example": ""
  },
  {
    "id": 432,
    "word": "drop",
    "phonetic": "/drɔp/",
    "meaning": "n.滴 v.掉下,落下,投递,放弃",
    "example": ""
  },
  {
    "id": 433,
    "word": "drought",
    "phonetic": "/draut/",
    "meaning": "n. 干旱",
    "example": ""
  },
  {
    "id": 434,
    "word": "drunk",
    "phonetic": "/drʌŋk/",
    "meaning": "a. 醉的",
    "example": ""
  },
  {
    "id": 435,
    "word": "dry",
    "phonetic": "/draɪ/",
    "meaning": "v. 使…干；弄干；擦干 a. 干的；干燥的",
    "example": ""
  },
  {
    "id": 437,
    "word": "dumpling",
    "phonetic": "/ˈdʌmplɪŋ/",
    "meaning": "n. 饺子",
    "example": ""
  },
  {
    "id": 438,
    "word": "during",
    "phonetic": "/ˈdjuərɪŋ; (US) ˈdɪərɪŋ/",
    "meaning": "prep. 在…期间；在…过程中",
    "example": ""
  },
  {
    "id": 439,
    "word": "dusk",
    "phonetic": "/dʌsk/",
    "meaning": "n. 黄昏",
    "example": ""
  },
  {
    "id": 440,
    "word": "dust",
    "phonetic": "/dʌst/",
    "meaning": "n. 灰尘，尘土",
    "example": ""
  },
  {
    "id": 441,
    "word": "dustbin",
    "phonetic": "/ˈdʌstbɪn/",
    "meaning": "n. 垃圾箱",
    "example": ""
  },
  {
    "id": 442,
    "word": "duty",
    "phonetic": "/ˈdjuːtɪ/",
    "meaning": "n. 责任，义务",
    "example": ""
  },
  {
    "id": 443,
    "word": "each",
    "phonetic": "/iːtʃ/",
    "meaning": "a.& pron. 每人,每个,每件",
    "example": ""
  },
  {
    "id": 446,
    "word": "earth",
    "phonetic": "/ɜːθ/",
    "meaning": "n. 地球；土，泥；大地",
    "example": ""
  },
  {
    "id": 447,
    "word": "earthquake",
    "phonetic": "/ˈɜːθkweɪk/",
    "meaning": "n. 地震",
    "example": ""
  },
  {
    "id": 448,
    "word": "east",
    "phonetic": "/iːst/",
    "meaning": "a. 东方；东部的；ad. 在东方；向东方； n. 东，东方；",
    "example": ""
  },
  {
    "id": 451,
    "word": "edge",
    "phonetic": "/edʒ/",
    "meaning": "n. 边缘",
    "example": ""
  },
  {
    "id": 452,
    "word": "education",
    "phonetic": "/edjʊːkeɪʃ (ə)n/",
    "meaning": "n. 教育，培养",
    "example": ""
  },
  {
    "id": 454,
    "word": "Egypt",
    "phonetic": "/ˈiːdʒɪpt/",
    "meaning": "n. 埃及",
    "example": ""
  },
  {
    "id": 455,
    "word": "Egyptian",
    "phonetic": "/ɪˈdʒɪpʃ(ə)n/",
    "meaning": "a. 埃及的；埃及人的；埃及语的 n. 埃及人",
    "example": ""
  },
  {
    "id": 456,
    "word": "eight",
    "phonetic": "/eɪt/",
    "meaning": "num. 八",
    "example": ""
  },
  {
    "id": 457,
    "word": "eighteen",
    "phonetic": "/ˈeɪˈtiːn/",
    "meaning": "num. 十八",
    "example": ""
  },
  {
    "id": 458,
    "word": "eighth",
    "phonetic": "/eɪθ/",
    "meaning": "num. 第八",
    "example": ""
  },
  {
    "id": 459,
    "word": "eighty",
    "phonetic": "/ˈeɪtɪ/",
    "meaning": "num. 八十",
    "example": ""
  },
  {
    "id": 460,
    "word": "either",
    "phonetic": "/ˈaɪðə(r)/",
    "meaning": "a. 两方任一方的；二者之一 conj. 二者之一；要么 ad. 也",
    "example": ""
  },
  {
    "id": 461,
    "word": "elder",
    "phonetic": "/ˈeldə(r)/",
    "meaning": "n. 长者；前辈",
    "example": ""
  },
  {
    "id": 462,
    "word": "electricity",
    "phonetic": "/ɪlekˈtrɪsɪtɪ/",
    "meaning": "n. 电；电流",
    "example": ""
  },
  {
    "id": 464,
    "word": "elevator",
    "phonetic": "/ˈelɪveitə/",
    "meaning": "n. 电梯,升降梯",
    "example": ""
  },
  {
    "id": 465,
    "word": "eleven",
    "phonetic": "/ɪˈlev(ə)n/",
    "meaning": "num. 十一",
    "example": ""
  },
  {
    "id": 466,
    "word": "else",
    "phonetic": "/els/",
    "meaning": "ad. 别的，其他的",
    "example": ""
  },
  {
    "id": 467,
    "word": "e-mail",
    "phonetic": "",
    "meaning": "[iː-meɪl]]n. 电子邮件",
    "example": ""
  },
  {
    "id": 468,
    "word": "empty",
    "phonetic": "/ˈemptɪ/",
    "meaning": "a. 空的",
    "example": ""
  },
  {
    "id": 469,
    "word": "encourage",
    "phonetic": "/ɪnˈkʌrɪdʒ/",
    "meaning": "vt. 鼓励",
    "example": ""
  },
  {
    "id": 470,
    "word": "end",
    "phonetic": "/end/",
    "meaning": "n. 末尾；终点；结束 v. 结束，终止",
    "example": ""
  },
  {
    "id": 471,
    "word": "enemy",
    "phonetic": "/ˈenɪmɪ/",
    "meaning": "n. 敌人；敌军",
    "example": ""
  },
  {
    "id": 472,
    "word": "engineer",
    "phonetic": "/endʒɪˈnɪə(r)/",
    "meaning": "n. 工程师；技师",
    "example": ""
  },
  {
    "id": 473,
    "word": "England",
    "phonetic": "/ˈɪŋɡlənd/",
    "meaning": "n. 英格兰",
    "example": ""
  },
  {
    "id": 475,
    "word": "English-speaking",
    "phonetic": "/ˈɪŋɡlɪʃ-spiːkɪŋ/",
    "meaning": "a.说英语的",
    "example": ""
  },
  {
    "id": 476,
    "word": "enjoy",
    "phonetic": "/ɪnˈdʒɔɪ/",
    "meaning": "vt. 欣赏；享受乐趣；喜欢",
    "example": ""
  },
  {
    "id": 477,
    "word": "enjoyable",
    "phonetic": "/ɪnˈdʒɔɪəb(ə)l/",
    "meaning": "a. 愉快的；有趣的",
    "example": ""
  },
  {
    "id": 478,
    "word": "enough",
    "phonetic": "/ɪˈnʌf/",
    "meaning": "n. 足够；充足 a. 足够；充分的 ad. 足够地；充分地",
    "example": ""
  },
  {
    "id": 479,
    "word": "enter",
    "phonetic": "/ˈentə(r)/",
    "meaning": "vt. 进入",
    "example": ""
  },
  {
    "id": 480,
    "word": "entrance",
    "phonetic": "/ˈentrəns/",
    "meaning": "n. 入口;入场;进入的权利;入学许可",
    "example": ""
  },
  {
    "id": 481,
    "word": "entry",
    "phonetic": "/ˈentrɪ/",
    "meaning": "n. 进入",
    "example": ""
  },
  {
    "id": 482,
    "word": "envelope",
    "phonetic": "/ˈenvələʊp/",
    "meaning": "n. 信封",
    "example": ""
  },
  {
    "id": 483,
    "word": "environment",
    "phonetic": "/ɪnˈvaɪərənmənt/",
    "meaning": "n.环境",
    "example": ""
  },
  {
    "id": 484,
    "word": "envy",
    "phonetic": "/ˈenvɪ/",
    "meaning": "vt.& n. 忌妒； 羡慕",
    "example": ""
  },
  {
    "id": 485,
    "word": "equal",
    "phonetic": "/ˈiːkw(ə)l/",
    "meaning": "a. 平等的 vt. 等于，使等于",
    "example": ""
  },
  {
    "id": 486,
    "word": "equality",
    "phonetic": "/iːˈkwɔlətɪ/",
    "meaning": "n. 平等",
    "example": ""
  },
  {
    "id": 487,
    "word": "equip",
    "phonetic": "/ɪˈkwɪp/",
    "meaning": "vt. 提供设备；装备；配备",
    "example": ""
  },
  {
    "id": 488,
    "word": "equipment",
    "phonetic": "/ɪˈkwɪpmənt/",
    "meaning": "n. 装备，设备",
    "example": ""
  },
  {
    "id": 489,
    "word": "eraser",
    "phonetic": "/ɪˈreɪzə(r)/",
    "meaning": "n. 橡皮擦；黑板擦",
    "example": ""
  },
  {
    "id": 490,
    "word": "error",
    "phonetic": "/ˈerə(r)/",
    "meaning": "n. 错误；差错",
    "example": ""
  },
  {
    "id": 491,
    "word": "escape",
    "phonetic": "/ɪˈskeɪp/",
    "meaning": "n.& vi. 逃跑；逃脱",
    "example": ""
  },
  {
    "id": 492,
    "word": "especially",
    "phonetic": "/ɪˈspeʃəlɪ/",
    "meaning": "ad. 特别，尤其",
    "example": ""
  },
  {
    "id": 493,
    "word": "essay",
    "phonetic": "/ˈeseɪ/",
    "meaning": "n. 散文；文章；随笔",
    "example": ""
  },
  {
    "id": 494,
    "word": "Europe",
    "phonetic": "/ˈjʊərəp/",
    "meaning": "n. 欧洲",
    "example": ""
  },
  {
    "id": 495,
    "word": "European",
    "phonetic": "/jʊərəˈpiːən/",
    "meaning": "a. 欧洲的，欧洲人的 n. 欧洲人",
    "example": ""
  },
  {
    "id": 496,
    "word": "Eve",
    "phonetic": "/i:v/",
    "meaning": "n.前夕",
    "example": ""
  },
  {
    "id": 497,
    "word": "even",
    "phonetic": "/ˈiːv(ə)n/",
    "meaning": "ad. 甚至，连（…都）；更",
    "example": ""
  },
  {
    "id": 499,
    "word": "event",
    "phonetic": "/ɪ'vent/",
    "meaning": "n. 事件，大事",
    "example": ""
  },
  {
    "id": 500,
    "word": "ever",
    "phonetic": "/ˈevə(r)/",
    "meaning": "ad. 曾经；无论何时",
    "example": ""
  },
  {
    "id": 502,
    "word": "everybody",
    "phonetic": "/ˈevrɪbɔdɪ/",
    "meaning": "pron. 每人，人人",
    "example": ""
  },
  {
    "id": 503,
    "word": "everyday",
    "phonetic": "/ˈevrɪdeɪ/",
    "meaning": "a. 每日的；日常的",
    "example": ""
  },
  {
    "id": 504,
    "word": "everyone",
    "phonetic": "/ˈevrɪwʌn/",
    "meaning": "pron. 每人，人人",
    "example": ""
  },
  {
    "id": 505,
    "word": "everything",
    "phonetic": "/ˈevrɪθɪŋ/",
    "meaning": "pron. 每件事，事事",
    "example": ""
  },
  {
    "id": 506,
    "word": "everywhere",
    "phonetic": "/ˈevrɪweə(r)/",
    "meaning": "ad. 到处",
    "example": ""
  },
  {
    "id": 507,
    "word": "exact",
    "phonetic": "/ɪɡˈzækt/",
    "meaning": "a. 精确的；确切的",
    "example": ""
  },
  {
    "id": 508,
    "word": "exactly",
    "phonetic": "/ɪɡˈzæktlɪ/",
    "meaning": "ad. 精确地；确切地",
    "example": ""
  },
  {
    "id": 509,
    "word": "exam",
    "phonetic": "",
    "meaning": "= examination [ɪɡzæmɪˈneɪʃ(ə)n] n. 考试，测试；检查；审查",
    "example": ""
  },
  {
    "id": 510,
    "word": "examine",
    "phonetic": "/ɪɡˈzæmɪn/",
    "meaning": "vt. 检查；诊察",
    "example": ""
  },
  {
    "id": 511,
    "word": "example",
    "phonetic": "/ɪɡˈzɑːmp(ə)l; (US) ɪɡˈzæmpl/",
    "meaning": "n. 例子；榜样",
    "example": ""
  },
  {
    "id": 512,
    "word": "excellent",
    "phonetic": "/ˈeksələnt/",
    "meaning": "a. 极好的，优秀的",
    "example": ""
  },
  {
    "id": 513,
    "word": "except",
    "phonetic": "/ɪkˈsept/",
    "meaning": "prep. 除…之外",
    "example": ""
  },
  {
    "id": 514,
    "word": "excite",
    "phonetic": "/ɪkˈsaɪt/",
    "meaning": "vt. 使兴奋，使激动",
    "example": ""
  },
  {
    "id": 515,
    "word": "excuse",
    "phonetic": "/ɪkˈskjuːz/",
    "meaning": "n. 借口,辩解 vt. 原谅,宽恕",
    "example": ""
  },
  {
    "id": 517,
    "word": "exhibition",
    "phonetic": "/eksɪˈbɪʃ(ə)n/",
    "meaning": "n. 展览；展览会",
    "example": ""
  },
  {
    "id": 518,
    "word": "exist",
    "phonetic": "/ɪg'zɪst/",
    "meaning": "vi. 存在",
    "example": ""
  },
  {
    "id": 519,
    "word": "expect",
    "phonetic": "/ɪkˈspekt/",
    "meaning": "vt. 预料；盼望；认为",
    "example": ""
  },
  {
    "id": 520,
    "word": "expensive",
    "phonetic": "/ɪkˈspensɪv/",
    "meaning": "a. 昂贵的",
    "example": ""
  },
  {
    "id": 521,
    "word": "experience",
    "phonetic": "/ɪkˈspɪərɪəns/",
    "meaning": "n. 经验；经历",
    "example": ""
  },
  {
    "id": 522,
    "word": "experiment",
    "phonetic": "/ɪkˈsperɪmənt/",
    "meaning": "n. 实验",
    "example": ""
  },
  {
    "id": 523,
    "word": "expert",
    "phonetic": "/ˈekspɜːt/",
    "meaning": "n. 专家，能手",
    "example": ""
  },
  {
    "id": 524,
    "word": "explain",
    "phonetic": "/ɪksˈpleɪn/",
    "meaning": "vt. 解释，说明",
    "example": ""
  },
  {
    "id": 525,
    "word": "express",
    "phonetic": "/ɪkˈspres/",
    "meaning": "vt. 表达；表示；表情 n. 快车，特快专递",
    "example": ""
  },
  {
    "id": 528,
    "word": "fact",
    "phonetic": "/fækt/",
    "meaning": "n. 事实，现实",
    "example": ""
  },
  {
    "id": 529,
    "word": "factory",
    "phonetic": "/ˈfæktəri/",
    "meaning": "n. 工厂",
    "example": ""
  },
  {
    "id": 530,
    "word": "fail",
    "phonetic": "/feɪl/",
    "meaning": "v. 失败；不及格；衰退",
    "example": ""
  },
  {
    "id": 531,
    "word": "fame",
    "phonetic": "/feɪm/",
    "meaning": "n. 名声,名望,名誉",
    "example": ""
  },
  {
    "id": 533,
    "word": "famous",
    "phonetic": "/ˈfeɪməs/",
    "meaning": "a. 著名的",
    "example": ""
  },
  {
    "id": 538,
    "word": "farming",
    "phonetic": "/ˈfɑːmiŋ/",
    "meaning": "n. 农业,务农",
    "example": ""
  },
  {
    "id": 539,
    "word": "farmland",
    "phonetic": "/fɑːmlænd/",
    "meaning": "n. 农田",
    "example": ""
  },
  {
    "id": 540,
    "word": "farther",
    "phonetic": "/ˈfɑːðə/",
    "meaning": "a./ad. (far的比较级形式之一)较远,更远",
    "example": ""
  },
  {
    "id": 541,
    "word": "farthest",
    "phonetic": "/ˈfɑːðist/",
    "meaning": "a./ad. (far的最高级形式之一)最远",
    "example": ""
  },
  {
    "id": 543,
    "word": "fasten",
    "phonetic": "/ˈfɑːs(ə)n; (US) fæsn/",
    "meaning": "vt. 扎牢；扣住",
    "example": ""
  },
  {
    "id": 544,
    "word": "fat",
    "phonetic": "/fæt/",
    "meaning": "n. 脂肪 a. 胖的；肥的",
    "example": ""
  },
  {
    "id": 546,
    "word": "favour",
    "phonetic": "/'feivə/",
    "meaning": "(美favor) n. 恩惠；好意；帮助",
    "example": ""
  },
  {
    "id": 548,
    "word": "fax",
    "phonetic": "/fæks/",
    "meaning": "n. 传真",
    "example": ""
  },
  {
    "id": 549,
    "word": "fear",
    "phonetic": "/fiə(r)/",
    "meaning": "n. 害怕；恐惧； 担忧",
    "example": ""
  },
  {
    "id": 550,
    "word": "feather",
    "phonetic": "/'feðə(r)/",
    "meaning": "n. 羽毛",
    "example": ""
  },
  {
    "id": 551,
    "word": "February",
    "phonetic": "/'februəri/",
    "meaning": "n. 2月",
    "example": ""
  },
  {
    "id": 552,
    "word": "federal",
    "phonetic": "/'fedər(ə)l/",
    "meaning": "a. 中央的,（政府）联邦的",
    "example": ""
  },
  {
    "id": 553,
    "word": "fee",
    "phonetic": "/fiː/",
    "meaning": "n. 费，费用",
    "example": ""
  },
  {
    "id": 554,
    "word": "feed",
    "phonetic": "",
    "meaning": "(fed, fed) [fiːd] vt. 喂（养）；饲（养）",
    "example": ""
  },
  {
    "id": 556,
    "word": "feeling",
    "phonetic": "/ˈfiːlɪŋ/",
    "meaning": "n. 感情；感觉",
    "example": ""
  },
  {
    "id": 557,
    "word": "fence",
    "phonetic": "/fens/",
    "meaning": "n. 栅栏；围栏；篱笆",
    "example": ""
  },
  {
    "id": 558,
    "word": "festival",
    "phonetic": "/ˈfestɪvəl/",
    "meaning": "n. 节日",
    "example": ""
  },
  {
    "id": 559,
    "word": "fetch",
    "phonetic": "/fetʃ/",
    "meaning": "vt.（去）取（物）来，（去）带（人）来",
    "example": ""
  },
  {
    "id": 560,
    "word": "fever",
    "phonetic": "/ˈfiːvə(r)/",
    "meaning": "n. 发烧；发热",
    "example": ""
  },
  {
    "id": 561,
    "word": "few",
    "phonetic": "/fjuː/",
    "meaning": "pron. 不多;少数;不多的;少数的",
    "example": ""
  },
  {
    "id": 562,
    "word": "field",
    "phonetic": "/fiːld/",
    "meaning": "n. 田地;牧场;场地",
    "example": ""
  },
  {
    "id": 563,
    "word": "fifteen",
    "phonetic": "/fɪfˈtiːn/",
    "meaning": "num. 十五",
    "example": ""
  },
  {
    "id": 564,
    "word": "fifth",
    "phonetic": "/fɪfθ/",
    "meaning": "num. 第五",
    "example": ""
  },
  {
    "id": 565,
    "word": "fifty",
    "phonetic": "/ˈfɪftɪ/",
    "meaning": "num. 五十",
    "example": ""
  },
  {
    "id": 566,
    "word": "fight",
    "phonetic": "/faɪt/",
    "meaning": "n. 打仗（架），争论",
    "example": ""
  },
  {
    "id": 567,
    "word": "fight",
    "phonetic": "/faɪt/",
    "meaning": "(fought, fought) n./v. 打仗（架），与…打仗（架）",
    "example": ""
  },
  {
    "id": 568,
    "word": "fill",
    "phonetic": "/fɪl/",
    "meaning": "vt. 填空，装满",
    "example": ""
  },
  {
    "id": 570,
    "word": "final",
    "phonetic": "/ˈfaɪn(ə)l/",
    "meaning": "a. 最后的；终极的",
    "example": ""
  },
  {
    "id": 573,
    "word": "finger",
    "phonetic": "/ˈfɪŋɡə(r)/",
    "meaning": "n. 手指",
    "example": ""
  },
  {
    "id": 574,
    "word": "finish",
    "phonetic": "/ˈfɪnɪʃ/",
    "meaning": "v. 结束；做完",
    "example": ""
  },
  {
    "id": 575,
    "word": "fire",
    "phonetic": "/ˈfaɪə(r)/",
    "meaning": "n. 火；火炉；火灾 vi. 开火,射击,解雇",
    "example": ""
  },
  {
    "id": 576,
    "word": "fireplace",
    "phonetic": "/ˈfaɪəpleɪs/",
    "meaning": "n. 壁炉",
    "example": ""
  },
  {
    "id": 577,
    "word": "first",
    "phonetic": "/fɜːst/",
    "meaning": "num. 第一 a.& ad. 第一；首次；最初 n. 开始；开端",
    "example": ""
  },
  {
    "id": 579,
    "word": "fisherman",
    "phonetic": "/ˈfɪʃəmən/",
    "meaning": "n. 渔民；钓鱼健身者",
    "example": ""
  },
  {
    "id": 580,
    "word": "fit",
    "phonetic": "/fɪt/",
    "meaning": "a. 健康的,适合的 v.（使）适合,安装",
    "example": ""
  },
  {
    "id": 581,
    "word": "five",
    "phonetic": "/faɪv/",
    "meaning": "num. 五",
    "example": ""
  },
  {
    "id": 582,
    "word": "fix",
    "phonetic": "/fɪks/",
    "meaning": "vt. 修理；安装；确定，决定",
    "example": ""
  },
  {
    "id": 583,
    "word": "flag",
    "phonetic": "/flæɡ/",
    "meaning": "n. 旗；标志；旗舰",
    "example": ""
  },
  {
    "id": 584,
    "word": "flight",
    "phonetic": "/flait/",
    "meaning": "n. 航班,飞行",
    "example": ""
  },
  {
    "id": 585,
    "word": "flood",
    "phonetic": "/flʌd/",
    "meaning": "n. 洪水 vt. 淹没，使泛滥",
    "example": ""
  },
  {
    "id": 589,
    "word": "focus",
    "phonetic": "/ˈfəʊkəs/",
    "meaning": "v. / n. 集中（注意力，精力）于，焦点，中心点",
    "example": ""
  },
  {
    "id": 590,
    "word": "fog",
    "phonetic": "/fɔɡ/",
    "meaning": "n. 雾",
    "example": ""
  },
  {
    "id": 591,
    "word": "foggy",
    "phonetic": "/ˈfɔɡɪ/",
    "meaning": "a. 多雾的",
    "example": ""
  },
  {
    "id": 592,
    "word": "follow",
    "phonetic": "/ˈfɔləʊ/",
    "meaning": "vt. 跟随；仿效；跟得上",
    "example": ""
  },
  {
    "id": 593,
    "word": "following",
    "phonetic": "/ˈfɔləʊɪŋ/",
    "meaning": "a. 接着的；以下的",
    "example": ""
  },
  {
    "id": 594,
    "word": "fond",
    "phonetic": "/fɔnd/",
    "meaning": "a. 喜爱的，爱好的",
    "example": ""
  },
  {
    "id": 596,
    "word": "fool",
    "phonetic": "/fuːl/",
    "meaning": "n. 傻子，蠢人",
    "example": ""
  },
  {
    "id": 597,
    "word": "foolish",
    "phonetic": "/ˈfuːlɪʃ/",
    "meaning": "a. 愚蠢的，傻的",
    "example": ""
  },
  {
    "id": 601,
    "word": "foreign",
    "phonetic": "/ˈfɔrən; (US) ˈfɔrɪn/",
    "meaning": "a. 外国的",
    "example": ""
  },
  {
    "id": 602,
    "word": "foreigner",
    "phonetic": "/ˈfɔrənə(r)/",
    "meaning": "n. 外国人",
    "example": ""
  },
  {
    "id": 603,
    "word": "forest",
    "phonetic": "/ˈfɔrɪst/",
    "meaning": "n. 森林",
    "example": ""
  },
  {
    "id": 604,
    "word": "forever",
    "phonetic": "/fəˈrevə(r)/",
    "meaning": "ad. 永远；永恒的",
    "example": ""
  },
  {
    "id": 605,
    "word": "forget",
    "phonetic": "",
    "meaning": "(forgot, forgotten) [fəˈɡet] v. 忘记；忘掉",
    "example": ""
  },
  {
    "id": 606,
    "word": "forgetful",
    "phonetic": "/fəˈɡetfʊl/",
    "meaning": "a. 健忘的，不留心的",
    "example": ""
  },
  {
    "id": 607,
    "word": "fork",
    "phonetic": "/fɔːk/",
    "meaning": "n. 叉，餐叉",
    "example": ""
  },
  {
    "id": 608,
    "word": "form",
    "phonetic": "/fɔːm/",
    "meaning": "n. 表格；形式；结构",
    "example": ""
  },
  {
    "id": 609,
    "word": "forth",
    "phonetic": "/fɔːθ/",
    "meaning": "n. 向前,往外",
    "example": ""
  },
  {
    "id": 610,
    "word": "forty",
    "phonetic": "/ˈfɔːtɪ/",
    "meaning": "num. 四十",
    "example": ""
  },
  {
    "id": 611,
    "word": "found",
    "phonetic": "/faʊnd/",
    "meaning": "vt. 成立，建立",
    "example": ""
  },
  {
    "id": 612,
    "word": "foundation",
    "phonetic": "/faʊnˈdeiʃən/",
    "meaning": "n. 基础;基本原理,根据,基金会;建立,创办",
    "example": ""
  },
  {
    "id": 613,
    "word": "fountain",
    "phonetic": "/ˈfaʊntɪn; (US) ˈfaʊntn/",
    "meaning": "n. 喷泉",
    "example": ""
  },
  {
    "id": 614,
    "word": "four",
    "phonetic": "/fɔː(r)/",
    "meaning": "num. 四",
    "example": ""
  },
  {
    "id": 615,
    "word": "fourteen",
    "phonetic": "/ˈfɔːˈtiːn/",
    "meaning": "num. 十四",
    "example": ""
  },
  {
    "id": 616,
    "word": "fourth",
    "phonetic": "/ˈfɔːθ/",
    "meaning": "num. 第四",
    "example": ""
  },
  {
    "id": 617,
    "word": "fox",
    "phonetic": "/fɔks/",
    "meaning": "n. 狐狸",
    "example": ""
  },
  {
    "id": 618,
    "word": "France",
    "phonetic": "/fræns/",
    "meaning": "n. 法国",
    "example": ""
  },
  {
    "id": 619,
    "word": "free",
    "phonetic": "/friː/",
    "meaning": "a. 自由，空闲的；免费的",
    "example": ""
  },
  {
    "id": 620,
    "word": "freeze",
    "phonetic": "/friːz/",
    "meaning": "(froze, frozen) vi. 结冰",
    "example": ""
  },
  {
    "id": 621,
    "word": "French",
    "phonetic": "/frentʃ/",
    "meaning": "n. 法语 a. 法国的；法国人的；法语的",
    "example": ""
  },
  {
    "id": 622,
    "word": "Frenchman",
    "phonetic": "/ˈfrentʃmən/",
    "meaning": "(复 Frenchmen) n. 法国人（男）",
    "example": ""
  },
  {
    "id": 623,
    "word": "fresh",
    "phonetic": "/freʃ/",
    "meaning": "a. 新鲜的",
    "example": ""
  },
  {
    "id": 624,
    "word": "Friday",
    "phonetic": "/ˈfraɪdɪ/",
    "meaning": "n. 星期五",
    "example": ""
  },
  {
    "id": 625,
    "word": "fridge",
    "phonetic": "",
    "meaning": "=refrigerator [rɪˈfrɪdʒəreɪtə(r)] n. 冰箱",
    "example": ""
  },
  {
    "id": 627,
    "word": "friendly",
    "phonetic": "/ˈfrendlɪ/",
    "meaning": "a. 友好的",
    "example": ""
  },
  {
    "id": 628,
    "word": "friendship",
    "phonetic": "/ˈfrendʃɪp/",
    "meaning": "n. 友谊，友情",
    "example": ""
  }
];
const GRADE_8 = [
  {
    "id": 629,
    "word": "frighten",
    "phonetic": "/ˈfraɪt(ə)n/",
    "meaning": "vt. 使惊恐，吓唬",
    "example": ""
  },
  {
    "id": 631,
    "word": "front",
    "phonetic": "/frʌnt/",
    "meaning": "a. 前面的；前部的 n. 前面；前部；前线",
    "example": ""
  },
  {
    "id": 633,
    "word": "fruit juice",
    "phonetic": "/fruːt dʒuːs/",
    "meaning": "n. 果汁",
    "example": ""
  },
  {
    "id": 634,
    "word": "fry",
    "phonetic": "/fraɪ/",
    "meaning": "vt. 用油煎；用油炸",
    "example": ""
  },
  {
    "id": 635,
    "word": "full",
    "phonetic": "/fʊl/",
    "meaning": "a. 满的，充满的；完全的",
    "example": ""
  },
  {
    "id": 636,
    "word": "fun",
    "phonetic": "/fʌn/",
    "meaning": "n. 有趣的事，娱乐，玩笑",
    "example": ""
  },
  {
    "id": 637,
    "word": "funny",
    "phonetic": "/ˈfʌnɪ/",
    "meaning": "a. 有趣的，滑稽可笑的",
    "example": ""
  },
  {
    "id": 638,
    "word": "fur",
    "phonetic": "/fɜː(r)/",
    "meaning": "n. 毛皮；皮子",
    "example": ""
  },
  {
    "id": 639,
    "word": "further",
    "phonetic": "/ˈfəðə/",
    "meaning": "a./ad. (far的比较级形式之一)较远,更远",
    "example": ""
  },
  {
    "id": 640,
    "word": "future",
    "phonetic": "/ˈfjuːtʃə(r)/",
    "meaning": "n. 将来、未来",
    "example": ""
  },
  {
    "id": 642,
    "word": "garden",
    "phonetic": "/ˈɡɑːd(ə)n/",
    "meaning": "n. 花园，果园，菜园",
    "example": ""
  },
  {
    "id": 643,
    "word": "gate",
    "phonetic": "/ɡeɪt/",
    "meaning": "n. 大门",
    "example": ""
  },
  {
    "id": 644,
    "word": "general",
    "phonetic": "/ˈdʒenər(ə)l/",
    "meaning": "a. 大体，笼统的，总的",
    "example": ""
  },
  {
    "id": 645,
    "word": "generation",
    "phonetic": "/dʒenəˈreɪʃ(ə)n/",
    "meaning": "n. 代，一代",
    "example": ""
  },
  {
    "id": 646,
    "word": "generous",
    "phonetic": "/ˈdʒenərəs/",
    "meaning": "a. 慷慨大方的",
    "example": ""
  },
  {
    "id": 647,
    "word": "geography",
    "phonetic": "/dʒɪˈɔɡrəfɪ/",
    "meaning": "n. 地理学",
    "example": ""
  },
  {
    "id": 648,
    "word": "geometry",
    "phonetic": "/dʒɪ'ɑmɪtrɪ/",
    "meaning": "n. 几何学",
    "example": ""
  },
  {
    "id": 649,
    "word": "German",
    "phonetic": "/ˈdʒɜːmən/",
    "meaning": "a. 德国的，德国人的，德语的 n. 德国人，德语",
    "example": ""
  },
  {
    "id": 650,
    "word": "Germany",
    "phonetic": "/ˈdʒɜːmənɪ/",
    "meaning": "n. 德国",
    "example": ""
  },
  {
    "id": 651,
    "word": "get (got",
    "phonetic": "",
    "meaning": ", got) [ɡet] vt. 成为；得到；具有；到达",
    "example": ""
  },
  {
    "id": 652,
    "word": "gift",
    "phonetic": "/ɡɪft/",
    "meaning": "n. 赠品；礼物",
    "example": ""
  },
  {
    "id": 655,
    "word": "glad",
    "phonetic": "/ɡlæd/",
    "meaning": "a. 高兴的；乐意的",
    "example": ""
  },
  {
    "id": 656,
    "word": "glass",
    "phonetic": "/ɡlɑːs; (US) ɡlæs/",
    "meaning": "n. 玻璃杯,玻璃；(复)眼镜",
    "example": ""
  },
  {
    "id": 657,
    "word": "glove",
    "phonetic": "/ɡlʌv/",
    "meaning": "n. 手套",
    "example": ""
  },
  {
    "id": 659,
    "word": "goal",
    "phonetic": "/ɡəʊl/",
    "meaning": "n.（足球）球门，目标",
    "example": ""
  },
  {
    "id": 660,
    "word": "goat",
    "phonetic": "/ɡəʊt/",
    "meaning": "n. 山羊",
    "example": ""
  },
  {
    "id": 661,
    "word": "gold",
    "phonetic": "/ɡəʊld/",
    "meaning": "n. 黄金 a 金的，黄金的",
    "example": ""
  },
  {
    "id": 662,
    "word": "golf",
    "phonetic": "/ɡɔlf/",
    "meaning": "n. 高尔夫球",
    "example": ""
  },
  {
    "id": 664,
    "word": "good-bye",
    "phonetic": "/ɡʊd-baɪ/",
    "meaning": "int. 再见；再会",
    "example": ""
  },
  {
    "id": 665,
    "word": "goodness",
    "phonetic": "/ˈɡʊdnɪs/",
    "meaning": "n. 善良，美德",
    "example": ""
  },
  {
    "id": 666,
    "word": "goose",
    "phonetic": "",
    "meaning": "(复 geese) [ɡuːs] n. 鹅",
    "example": ""
  },
  {
    "id": 667,
    "word": "government",
    "phonetic": "/ˈɡʌvənmənt/",
    "meaning": "n. 政府",
    "example": ""
  },
  {
    "id": 668,
    "word": "grade",
    "phonetic": "/ɡreɪd/",
    "meaning": "n. 等级（中小学的）；学年；成绩，分数",
    "example": ""
  },
  {
    "id": 669,
    "word": "gradually",
    "phonetic": "/ˈɡrædjʊəlɪ/",
    "meaning": "ad. 逐渐地",
    "example": ""
  },
  {
    "id": 670,
    "word": "graduate",
    "phonetic": "/ˈɡrædjʊeit ˈɡrædʒueit/",
    "meaning": "v. 毕业",
    "example": ""
  },
  {
    "id": 671,
    "word": "grammar",
    "phonetic": "/ˈɡræmə(r)/",
    "meaning": "n. 语法",
    "example": ""
  },
  {
    "id": 672,
    "word": "grand",
    "phonetic": "/ɡrænd/",
    "meaning": "a. 宏伟的",
    "example": ""
  },
  {
    "id": 673,
    "word": "grandchild",
    "phonetic": "/'græntʃaɪld/",
    "meaning": "n. (外)孙或孙女,孙辈",
    "example": ""
  },
  {
    "id": 674,
    "word": "granddaughter",
    "phonetic": "/ˈɡrændɔːtə(r)/",
    "meaning": "n.（外）孙女",
    "example": ""
  },
  {
    "id": 677,
    "word": "grandparents",
    "phonetic": "/ˈɡrændpeərənts/",
    "meaning": "n. 祖父母,外祖父母",
    "example": ""
  },
  {
    "id": 678,
    "word": "grandson",
    "phonetic": "/ˈɡrændsʌn/",
    "meaning": "n.（外）孙子",
    "example": ""
  },
  {
    "id": 679,
    "word": "granny",
    "phonetic": "/ˈɡrænɪ/",
    "meaning": "n. 老奶奶；祖母；外婆",
    "example": ""
  },
  {
    "id": 680,
    "word": "grape",
    "phonetic": "/ɡreɪp/",
    "meaning": "n. 葡萄",
    "example": ""
  },
  {
    "id": 682,
    "word": "grateful",
    "phonetic": "/ˈɡreɪtfʊl/",
    "meaning": "a. 感激的，感谢的",
    "example": ""
  },
  {
    "id": 684,
    "word": "Greece",
    "phonetic": "/ɡriːs/",
    "meaning": "n. 希腊",
    "example": ""
  },
  {
    "id": 686,
    "word": "greet",
    "phonetic": "/ɡriːt/",
    "meaning": "vt. 问候；向…致敬",
    "example": ""
  },
  {
    "id": 687,
    "word": "grey",
    "phonetic": "",
    "meaning": "/ gray [ɡreɪ] a. 灰色的；灰白的",
    "example": ""
  },
  {
    "id": 688,
    "word": "group",
    "phonetic": "/ɡruːp/",
    "meaning": "n. 组，群",
    "example": ""
  },
  {
    "id": 689,
    "word": "grow",
    "phonetic": "",
    "meaning": "(grew, grown) [ɡrəʊ] v. 生长；发育；种植；变成",
    "example": ""
  },
  {
    "id": 690,
    "word": "growth",
    "phonetic": "/ɡrəʊθ/",
    "meaning": "n. 生长，增长",
    "example": ""
  },
  {
    "id": 691,
    "word": "guess",
    "phonetic": "/ɡes/",
    "meaning": "vi. 猜",
    "example": ""
  },
  {
    "id": 692,
    "word": "guest",
    "phonetic": "/ɡest/",
    "meaning": "n. 客人，宾客",
    "example": ""
  },
  {
    "id": 693,
    "word": "guide",
    "phonetic": "/ɡaɪd/",
    "meaning": "n. 向导，导游者",
    "example": ""
  },
  {
    "id": 694,
    "word": "guitar",
    "phonetic": "/ɡɪˈtɑː(r)/",
    "meaning": "n. 吉他，六弦琴",
    "example": ""
  },
  {
    "id": 695,
    "word": "gun",
    "phonetic": "/gʌn/",
    "meaning": "n.炮，枪",
    "example": ""
  },
  {
    "id": 696,
    "word": "habit",
    "phonetic": "/ˈhæbɪt/",
    "meaning": "n. 习惯，习性",
    "example": ""
  },
  {
    "id": 698,
    "word": "haircut",
    "phonetic": "/ˈheəkʌt/",
    "meaning": "n.（男子）理发",
    "example": ""
  },
  {
    "id": 700,
    "word": "hall",
    "phonetic": "/hɔːl/",
    "meaning": "n. 大厅,会堂,礼堂;过道",
    "example": ""
  },
  {
    "id": 701,
    "word": "ham",
    "phonetic": "/hæm/",
    "meaning": "n. 火腿",
    "example": ""
  },
  {
    "id": 702,
    "word": "hamburger",
    "phonetic": "/ˈhæmbɜːɡə(r)/",
    "meaning": "n. 汉堡包",
    "example": ""
  },
  {
    "id": 704,
    "word": "handbag",
    "phonetic": "/ˈhændbæɡ/",
    "meaning": "n. 女用皮包，手提包",
    "example": ""
  },
  {
    "id": 705,
    "word": "handwriting",
    "phonetic": "/ˈhændraɪtɪŋ/",
    "meaning": "n. 书法",
    "example": ""
  },
  {
    "id": 706,
    "word": "hang",
    "phonetic": "",
    "meaning": "(hung, hung) [hæŋ] v. 悬挂，吊着；把…吊起  hang (hung, hung) 绞死",
    "example": ""
  },
  {
    "id": 707,
    "word": "happen",
    "phonetic": "/ˈhæpən/",
    "meaning": "vi.（偶然）发生,碰巧",
    "example": ""
  },
  {
    "id": 708,
    "word": "happily",
    "phonetic": "/'hæpɪlɪ/",
    "meaning": "ad. 幸福地，快乐地",
    "example": ""
  },
  {
    "id": 710,
    "word": "hard",
    "phonetic": "/hɑːd/",
    "meaning": "ad. 努力地；猛烈地 a. 硬的；困难的；艰难的",
    "example": ""
  },
  {
    "id": 711,
    "word": "hardly",
    "phonetic": "/ˈhɑːdlɪ/",
    "meaning": "ad. 几乎不",
    "example": ""
  },
  {
    "id": 712,
    "word": "hardworking",
    "phonetic": "/'ha:d'wə:kiŋ/",
    "meaning": "a. 努力工作的",
    "example": ""
  },
  {
    "id": 713,
    "word": "harm",
    "phonetic": "/hɑːm/",
    "meaning": "n.&v. 伤害；损伤",
    "example": ""
  },
  {
    "id": 714,
    "word": "harvest",
    "phonetic": "/ˈhɑːvɪst/",
    "meaning": "n.& vt. 收割，收获（物）",
    "example": ""
  },
  {
    "id": 715,
    "word": "hat",
    "phonetic": "/hæt/",
    "meaning": "n. 帽子(一般指有边的)；礼帽",
    "example": ""
  },
  {
    "id": 716,
    "word": "hate",
    "phonetic": "/heɪt/",
    "meaning": "vt.& n. 恨，讨厌",
    "example": ""
  },
  {
    "id": 720,
    "word": "headache",
    "phonetic": "/ˈhedeɪk/",
    "meaning": "n. 头疼",
    "example": ""
  },
  {
    "id": 721,
    "word": "headmaster",
    "phonetic": "/hedˈmɑːstə(r)/",
    "meaning": "n.（英）中小学校长",
    "example": ""
  },
  {
    "id": 722,
    "word": "headmistress",
    "phonetic": "/'hed'mistrɪs/",
    "meaning": "n. 女校长",
    "example": ""
  },
  {
    "id": 723,
    "word": "headteacher",
    "phonetic": "/'hed'tiːtʃə(r)/",
    "meaning": "n. 中小学班主任",
    "example": ""
  },
  {
    "id": 724,
    "word": "health",
    "phonetic": "/helθ/",
    "meaning": "n. 健康，卫生",
    "example": ""
  },
  {
    "id": 727,
    "word": "hearing",
    "phonetic": "/ˈhɪərɪŋ/",
    "meaning": "n. 听力",
    "example": ""
  },
  {
    "id": 728,
    "word": "heart",
    "phonetic": "/hɑːt/",
    "meaning": "n. 心,心脏,纸牌中的红桃",
    "example": ""
  },
  {
    "id": 729,
    "word": "heat",
    "phonetic": "/hiːt/",
    "meaning": "n. 热 vt. 把…加热",
    "example": ""
  },
  {
    "id": 730,
    "word": "heaven",
    "phonetic": "/ˈhev(ə)n/",
    "meaning": "n. 天，天空",
    "example": ""
  },
  {
    "id": 732,
    "word": "heavily",
    "phonetic": "/ˈhevɪlɪ/",
    "meaning": "ad. 重地，大量地",
    "example": ""
  },
  {
    "id": 735,
    "word": "helpful",
    "phonetic": "/ˈhelpfʊl/",
    "meaning": "a. 有帮助的，有益的",
    "example": ""
  },
  {
    "id": 736,
    "word": "hen",
    "phonetic": "/hen/",
    "meaning": "n. 母鸡",
    "example": ""
  },
  {
    "id": 739,
    "word": "hero",
    "phonetic": "/ˈhɪərəʊ/",
    "meaning": "n. 英雄，勇士，男主角",
    "example": ""
  },
  {
    "id": 740,
    "word": "hers",
    "phonetic": "/hɜːz/",
    "meaning": "pron. 她的",
    "example": ""
  },
  {
    "id": 741,
    "word": "herself",
    "phonetic": "/hɜːˈself/",
    "meaning": "pron. 她自己",
    "example": ""
  },
  {
    "id": 742,
    "word": "hey",
    "phonetic": "/heɪ/",
    "meaning": "int. 嘿！",
    "example": ""
  },
  {
    "id": 744,
    "word": "hide",
    "phonetic": "",
    "meaning": "(hid, hidden) [haɪd] v. 把…藏起来，隐藏",
    "example": ""
  },
  {
    "id": 746,
    "word": "highway",
    "phonetic": "/ˈhaɪweɪ/",
    "meaning": "n. 公路,主要交通道路",
    "example": ""
  },
  {
    "id": 747,
    "word": "hill",
    "phonetic": "/hɪl/",
    "meaning": "n. 小山;丘陵;土堆;斜坡",
    "example": ""
  },
  {
    "id": 749,
    "word": "himself",
    "phonetic": "/hɪmˈself/",
    "meaning": "pron. 他自己",
    "example": ""
  },
  {
    "id": 751,
    "word": "history",
    "phonetic": "/ˈhɪstərɪ/",
    "meaning": "n. 历史，历史学",
    "example": ""
  },
  {
    "id": 752,
    "word": "hit",
    "phonetic": "",
    "meaning": "(hit, hit) [hɪt] n.& vt. 打,撞,击中",
    "example": ""
  },
  {
    "id": 753,
    "word": "hobby",
    "phonetic": "/ˈhɔbi/",
    "meaning": "n. 业余爱好，嗜好",
    "example": ""
  },
  {
    "id": 754,
    "word": "hold",
    "phonetic": "",
    "meaning": "(held, held) [həʊld] vt. 拿；抱；握住；举行；进行",
    "example": ""
  },
  {
    "id": 755,
    "word": "hole",
    "phonetic": "/həʊl/",
    "meaning": "n. 洞，坑",
    "example": ""
  },
  {
    "id": 758,
    "word": "homeland",
    "phonetic": "/ˈhəʊmlænd/",
    "meaning": "n. 祖国",
    "example": ""
  },
  {
    "id": 759,
    "word": "hometown",
    "phonetic": "/ˈhəʊmtaʊn/",
    "meaning": "n. 故乡",
    "example": ""
  },
  {
    "id": 760,
    "word": "homework",
    "phonetic": "/ˈhəʊmwɜːk/",
    "meaning": "n. 家庭作业",
    "example": ""
  },
  {
    "id": 761,
    "word": "honest",
    "phonetic": "/ˈɔnɪst/",
    "meaning": "a. 诚实的，正直的",
    "example": ""
  },
  {
    "id": 762,
    "word": "hope",
    "phonetic": "/həʊp/",
    "meaning": "n.& v. 希望",
    "example": ""
  },
  {
    "id": 763,
    "word": "hopeful",
    "phonetic": "/ˈhəʊpfʊl/",
    "meaning": "a. 有希望的；有前途的",
    "example": ""
  },
  {
    "id": 764,
    "word": "hopeless",
    "phonetic": "/ˈhəʊplis/",
    "meaning": "a. 没有希望的",
    "example": ""
  },
  {
    "id": 765,
    "word": "horrible",
    "phonetic": "/ˈhɔrɪb(ə)l/",
    "meaning": "a. 令人恐惧；恐怖的",
    "example": ""
  },
  {
    "id": 769,
    "word": "hotel",
    "phonetic": "/həʊˈtel/",
    "meaning": "n. 旅馆，饭店，宾馆",
    "example": ""
  },
  {
    "id": 772,
    "word": "housewife",
    "phonetic": "/ˈhaʊswaɪf/",
    "meaning": "n. 家庭主妇",
    "example": ""
  },
  {
    "id": 773,
    "word": "housework",
    "phonetic": "/ˈhaʊswɜːk/",
    "meaning": "n. 家务劳动",
    "example": ""
  },
  {
    "id": 775,
    "word": "however",
    "phonetic": "/haʊˈevə(r)/",
    "meaning": "ad. 可是 conj. 然而，可是，尽管如此",
    "example": ""
  },
  {
    "id": 776,
    "word": "hug",
    "phonetic": "/hʌɡ/",
    "meaning": "v. 拥抱",
    "example": ""
  },
  {
    "id": 777,
    "word": "huge",
    "phonetic": "/hjuːdʒ/",
    "meaning": "a. 巨大的，庞大的",
    "example": ""
  },
  {
    "id": 778,
    "word": "human",
    "phonetic": "/ˈhjuːmən/",
    "meaning": "a. 人的，人类的",
    "example": ""
  },
  {
    "id": 779,
    "word": "hundred",
    "phonetic": "/ˈhʌndrəd/",
    "meaning": "num. 百",
    "example": ""
  },
  {
    "id": 780,
    "word": "hunger",
    "phonetic": "/ˈhʌŋɡə(r)/",
    "meaning": "n. 饥饿",
    "example": ""
  },
  {
    "id": 782,
    "word": "hurry",
    "phonetic": "/ˈhʌrɪ/",
    "meaning": "vi. 赶快；急忙",
    "example": ""
  },
  {
    "id": 783,
    "word": "hurt",
    "phonetic": "",
    "meaning": "(hurt, hurt) [hɜːt] vt. 伤害，受伤；伤人感情",
    "example": ""
  },
  {
    "id": 784,
    "word": "husband",
    "phonetic": "/ˈhʌzbənd/",
    "meaning": "n. 丈夫",
    "example": ""
  },
  {
    "id": 786,
    "word": "ice",
    "phonetic": "/aɪs/",
    "meaning": "n. 冰",
    "example": ""
  },
  {
    "id": 787,
    "word": "ice-cream",
    "phonetic": "/aɪs-kriːm/",
    "meaning": "n. 冰淇淋",
    "example": ""
  },
  {
    "id": 789,
    "word": "idiom",
    "phonetic": "/ˈɪdɪəm/",
    "meaning": "n. 习语，成语",
    "example": ""
  },
  {
    "id": 790,
    "word": "if",
    "phonetic": "/ɪf/",
    "meaning": "conj. 如果,假使,是否,是不是",
    "example": ""
  },
  {
    "id": 792,
    "word": "illness",
    "phonetic": "/ˈɪlnɪs/",
    "meaning": "n. 疾病",
    "example": ""
  },
  {
    "id": 793,
    "word": "imagine",
    "phonetic": "/ɪˈmædʒɪn/",
    "meaning": "vt. 想像，设想",
    "example": ""
  },
  {
    "id": 794,
    "word": "immediately",
    "phonetic": "/ɪˈmiːdɪətlɪ/",
    "meaning": "ad. 立即",
    "example": ""
  },
  {
    "id": 795,
    "word": "important",
    "phonetic": "/ɪmˈpɔːtənt/",
    "meaning": "a. 重要的",
    "example": ""
  },
  {
    "id": 796,
    "word": "impossible",
    "phonetic": "/ɪmˈpɔsɪb(ə)l/",
    "meaning": "a. 不可能的",
    "example": ""
  },
  {
    "id": 797,
    "word": "improve",
    "phonetic": "/ɪmˈpruːv/",
    "meaning": "vt. 改进，更新",
    "example": ""
  },
  {
    "id": 799,
    "word": "inch",
    "phonetic": "/ɪntʃ/",
    "meaning": "n. 英寸",
    "example": ""
  },
  {
    "id": 800,
    "word": "include",
    "phonetic": "/ɪnˈkluːd/",
    "meaning": "vt. 包含，包括",
    "example": ""
  },
  {
    "id": 801,
    "word": "increase",
    "phonetic": "/ɪnˈkriːs/",
    "meaning": "v. & n. 增加，繁殖",
    "example": ""
  },
  {
    "id": 802,
    "word": "indeed",
    "phonetic": "/ɪnˈdiːd/",
    "meaning": "a. 确实；实在",
    "example": ""
  },
  {
    "id": 803,
    "word": "India",
    "phonetic": "/ˈɪndɪə/",
    "meaning": "n. 印度",
    "example": ""
  },
  {
    "id": 804,
    "word": "Indian",
    "phonetic": "/ˈɪndɪən/",
    "meaning": "a.（美洲）印地安人的； 印度人的 n. 印地安人；印度人",
    "example": ""
  },
  {
    "id": 805,
    "word": "information",
    "phonetic": "/ɪnfəˈmeɪʃ(ə)n/",
    "meaning": "n. 信息",
    "example": ""
  },
  {
    "id": 806,
    "word": "ink",
    "phonetic": "/ɪŋk/",
    "meaning": "n. 墨水，油墨",
    "example": ""
  },
  {
    "id": 807,
    "word": "insect",
    "phonetic": "/ˈɪnsekt/",
    "meaning": "n. 昆虫",
    "example": ""
  },
  {
    "id": 808,
    "word": "inside",
    "phonetic": "/ɪnˈsaɪd/",
    "meaning": "prep. 在…里面 ad. 在里面",
    "example": ""
  },
  {
    "id": 809,
    "word": "insist",
    "phonetic": "/ɪnˈsɪst/",
    "meaning": "vi. 坚持；坚决认为",
    "example": ""
  },
  {
    "id": 810,
    "word": "inspect",
    "phonetic": "/ɪnˈspekt/",
    "meaning": "vt. 检查；检验；审视",
    "example": ""
  },
  {
    "id": 811,
    "word": "instruct",
    "phonetic": "/ɪnˈstrʌkt/",
    "meaning": "vt. 通知；指示；教",
    "example": ""
  },
  {
    "id": 812,
    "word": "instruction",
    "phonetic": "/ɪnˈstrʌkʃ(ə)n/",
    "meaning": "n. 说明,须知;教导",
    "example": ""
  },
  {
    "id": 813,
    "word": "interest",
    "phonetic": "/ˈɪntrɪst/",
    "meaning": "n. 兴趣，趣味;利息",
    "example": ""
  },
  {
    "id": 815,
    "word": "international",
    "phonetic": "/ɪntəˈnæʃən(ə)l/",
    "meaning": "a. 国际的",
    "example": ""
  },
  {
    "id": 816,
    "word": "internet",
    "phonetic": "/ˈɪntənet/",
    "meaning": "n. 互联网，英特网",
    "example": ""
  },
  {
    "id": 817,
    "word": "into",
    "phonetic": "/ˈɪntʊ, ˈɪntə/",
    "meaning": "prep. 到…里;向内；变成",
    "example": ""
  },
  {
    "id": 818,
    "word": "introduce",
    "phonetic": "/ɪntrəˈdjuːs; (US) -duːs/",
    "meaning": "vt. 介绍",
    "example": ""
  },
  {
    "id": 819,
    "word": "invent",
    "phonetic": "/ɪnˈvent/",
    "meaning": "vt. 发明，创造",
    "example": ""
  },
  {
    "id": 820,
    "word": "invention",
    "phonetic": "/ɪnˈvenʃ(ə)n/",
    "meaning": "n. 发明，创造",
    "example": ""
  },
  {
    "id": 821,
    "word": "inventor",
    "phonetic": "/ɪnˈventə(r)/",
    "meaning": "n. 发明者，创造者",
    "example": ""
  },
  {
    "id": 822,
    "word": "invite",
    "phonetic": "/ɪnˈvaɪt/",
    "meaning": "vt. 邀请，招待",
    "example": ""
  },
  {
    "id": 824,
    "word": "island",
    "phonetic": "/ˈaɪlənd/",
    "meaning": "n. 岛",
    "example": ""
  },
  {
    "id": 827,
    "word": "itself",
    "phonetic": "/ɪtˈself/",
    "meaning": "pron. 它自己",
    "example": ""
  },
  {
    "id": 828,
    "word": "jacket",
    "phonetic": "/ˈdʒækɪt/",
    "meaning": "n. 短上衣，夹克衫",
    "example": ""
  },
  {
    "id": 829,
    "word": "jam",
    "phonetic": "/dʒæm/",
    "meaning": "n. 果酱；阻塞",
    "example": ""
  },
  {
    "id": 830,
    "word": "January",
    "phonetic": "/ˈdʒænjʊərɪ; (US) ˈdʒænjʊerɪ/",
    "meaning": "n. 1月",
    "example": ""
  },
  {
    "id": 831,
    "word": "Japan",
    "phonetic": "/dʒæˈpæn/",
    "meaning": "n. 日本",
    "example": ""
  },
  {
    "id": 832,
    "word": "Japanese",
    "phonetic": "/dʒæpəˈniːz/",
    "meaning": "a. 日本的，日本人的，日语的 n. 日本人，日语",
    "example": ""
  },
  {
    "id": 833,
    "word": "jeep",
    "phonetic": "/dʒiːp/",
    "meaning": "n. 吉普车",
    "example": ""
  },
  {
    "id": 834,
    "word": "job",
    "phonetic": "/dʒɔb/",
    "meaning": "n. （一份）工作",
    "example": ""
  },
  {
    "id": 835,
    "word": "join",
    "phonetic": "/dʒɔɪn/",
    "meaning": "v. 参加,加入;连接;会合",
    "example": ""
  },
  {
    "id": 836,
    "word": "joke",
    "phonetic": "/dʒəʊk/",
    "meaning": "n. 笑话",
    "example": ""
  },
  {
    "id": 837,
    "word": "journalist",
    "phonetic": "/ˈdʒɜːnəlɪzt/",
    "meaning": "n. 记者，新闻工作者",
    "example": ""
  },
  {
    "id": 838,
    "word": "journey",
    "phonetic": "/ˈdʒɜːnɪ/",
    "meaning": "n. 旅行，路程",
    "example": ""
  },
  {
    "id": 839,
    "word": "joy",
    "phonetic": "/dʒɔɪ/",
    "meaning": "n. 欢乐，高兴，乐趣",
    "example": ""
  },
  {
    "id": 840,
    "word": "judge",
    "phonetic": "/dʒʌdʒ/",
    "meaning": "n. 裁判；审判员；法官 vt. 判断，断定",
    "example": ""
  },
  {
    "id": 842,
    "word": "July",
    "phonetic": "/dʒʊˈlaɪ/",
    "meaning": "n. 7月",
    "example": ""
  },
  {
    "id": 844,
    "word": "June",
    "phonetic": "/dʒuːn/",
    "meaning": "n. 6月",
    "example": ""
  },
  {
    "id": 845,
    "word": "jungle",
    "phonetic": "/ˈdʒʌŋɡ(ə)l/",
    "meaning": "n. 丛林，密林",
    "example": ""
  },
  {
    "id": 846,
    "word": "junior",
    "phonetic": "/ˈdʒuːnɪə(r)/",
    "meaning": "a. 初级的；年少的",
    "example": ""
  },
  {
    "id": 847,
    "word": "just",
    "phonetic": "/dʒʌst/",
    "meaning": "ad. 刚才；恰好；不过；仅 a. 公正的",
    "example": ""
  },
  {
    "id": 848,
    "word": "kangaroo",
    "phonetic": "/kæŋɡəˈruː/",
    "meaning": "n. 大袋鼠",
    "example": ""
  },
  {
    "id": 849,
    "word": "keep",
    "phonetic": "",
    "meaning": "(kept, kept) [kiːp] v. 保持；保存；继续不断 vt. 培育，饲养",
    "example": ""
  },
  {
    "id": 850,
    "word": "key",
    "phonetic": "/kiː/",
    "meaning": "n. 钥匙;答案;键;关键",
    "example": ""
  },
  {
    "id": 851,
    "word": "keyboard",
    "phonetic": "/kiːbɔːd/",
    "meaning": "n. 键盘",
    "example": ""
  },
  {
    "id": 852,
    "word": "kick",
    "phonetic": "/kɪk/",
    "meaning": "v.& n. 踢",
    "example": ""
  },
  {
    "id": 854,
    "word": "kill",
    "phonetic": "/kɪl/",
    "meaning": "v. 杀死，弄死",
    "example": ""
  },
  {
    "id": 855,
    "word": "kilo",
    "phonetic": "/ˈkiːləʊ/",
    "meaning": "n. 千克；千米",
    "example": ""
  },
  {
    "id": 856,
    "word": "kilogram",
    "phonetic": "/ˈkɪləuɡræm/",
    "meaning": "n. 千克",
    "example": ""
  },
  {
    "id": 857,
    "word": "kilometre",
    "phonetic": "/'kiləumi:tə(r)/",
    "meaning": "n. 千米（公里）",
    "example": ""
  },
  {
    "id": 859,
    "word": "kind-hearted",
    "phonetic": "/kaɪnd- 'hɑ:tid/",
    "meaning": "a. 好心的",
    "example": ""
  },
  {
    "id": 860,
    "word": "king",
    "phonetic": "/kɪŋ/",
    "meaning": "n. 国王",
    "example": ""
  },
  {
    "id": 861,
    "word": "kingdom",
    "phonetic": "/ˈkɪŋdəm/",
    "meaning": "n. 王国",
    "example": ""
  },
  {
    "id": 862,
    "word": "kiss",
    "phonetic": "/kɪs/",
    "meaning": "n.& vt. 吻，亲吻",
    "example": ""
  },
  {
    "id": 865,
    "word": "knee",
    "phonetic": "/niː/",
    "meaning": "n. 膝盖",
    "example": ""
  },
  {
    "id": 866,
    "word": "knife",
    "phonetic": "/naɪf/",
    "meaning": "(复 knives) n. 小刀;匕首;刀片",
    "example": ""
  },
  {
    "id": 867,
    "word": "knock",
    "phonetic": "/nɔk/",
    "meaning": "n.& v. 敲；打；击 ",
    "example": ""
  },
  {
    "id": 868,
    "word": "knowledge",
    "phonetic": "/ˈnɔlɪdʒ/",
    "meaning": "n. 知识，学问",
    "example": ""
  },
  {
    "id": 869,
    "word": "lab",
    "phonetic": "/læb/",
    "meaning": "= laboratory n. 实验室",
    "example": ""
  },
  {
    "id": 870,
    "word": "ladder",
    "phonetic": "/ˈlædə(r)/",
    "meaning": "n. 梯子",
    "example": ""
  },
  {
    "id": 871,
    "word": "lady",
    "phonetic": "/ˈleɪdɪ/",
    "meaning": "n. 女士，夫人",
    "example": ""
  },
  {
    "id": 873,
    "word": "lamp",
    "phonetic": "/læmp/",
    "meaning": "n. 灯，油灯；光源",
    "example": ""
  },
  {
    "id": 874,
    "word": "land",
    "phonetic": "/lænd/",
    "meaning": "n. 陆地,土地 v. 登岸(陆)降落",
    "example": ""
  },
  {
    "id": 875,
    "word": "language",
    "phonetic": "/ˈlæŋɡwɪdʒ/",
    "meaning": "n. 语言",
    "example": ""
  },
  {
    "id": 876,
    "word": "lap",
    "phonetic": "/læp/",
    "meaning": "n. (人坐时)膝部,(跑道的)一圈",
    "example": ""
  },
  {
    "id": 877,
    "word": "large",
    "phonetic": "/lɑːdʒ/",
    "meaning": "a. 大的；巨大的",
    "example": ""
  },
  {
    "id": 878,
    "word": "last",
    "phonetic": "/lɑːst; (US) læst/",
    "meaning": "a. 最后的 ad. 最后地 n. 最后 v. 持续",
    "example": ""
  },
  {
    "id": 880,
    "word": "lately",
    "phonetic": "/ˈleɪtlɪ/",
    "meaning": "ad. 最近，不久前",
    "example": ""
  },
  {
    "id": 881,
    "word": "later",
    "phonetic": "/ˈleɪtə(r)/",
    "meaning": "a. 晚些的，迟些的",
    "example": ""
  },
  {
    "id": 882,
    "word": "laugh",
    "phonetic": "/lɑːf/",
    "meaning": "n.& v. 笑，大笑；嘲笑",
    "example": ""
  },
  {
    "id": 883,
    "word": "law",
    "phonetic": "/lɔː/",
    "meaning": "n. 法律，法令；定律",
    "example": ""
  },
  {
    "id": 884,
    "word": "lay",
    "phonetic": "",
    "meaning": "(laid, laid) [leɪ] vt. 放，搁",
    "example": ""
  },
  {
    "id": 885,
    "word": "lazy",
    "phonetic": "/ˈleɪzɪ/",
    "meaning": "a. 懒惰的",
    "example": ""
  },
  {
    "id": 886,
    "word": "lead",
    "phonetic": "",
    "meaning": "(led, led) [liːd] v. 领导，带领 n. 铅",
    "example": ""
  },
  {
    "id": 887,
    "word": "leader",
    "phonetic": "/ˈliːdə(r)/",
    "meaning": "n. 领袖，领导人",
    "example": ""
  },
  {
    "id": 888,
    "word": "leaf",
    "phonetic": "",
    "meaning": "(复 leaves) [liːf] n. （树，菜）叶",
    "example": ""
  },
  {
    "id": 889,
    "word": "league",
    "phonetic": "/liːɡ/",
    "meaning": "n. 联盟，社团",
    "example": ""
  },
  {
    "id": 890,
    "word": "learn",
    "phonetic": "",
    "meaning": "(learnt, learnt；-ed -ed) [lɜːn] vt. 学，学习，学会",
    "example": ""
  },
  {
    "id": 891,
    "word": "least",
    "phonetic": "/liːst/",
    "meaning": "n. 最少，最少量",
    "example": ""
  },
  {
    "id": 892,
    "word": "leather",
    "phonetic": "/ˈleðə(r)/",
    "meaning": "n. 皮革",
    "example": ""
  },
  {
    "id": 893,
    "word": "leave",
    "phonetic": "",
    "meaning": "(left, left) [liːv] v. 离开;把…留下，剩下",
    "example": ""
  },
  {
    "id": 896,
    "word": "lend",
    "phonetic": "",
    "meaning": "(lent, lent) [lend] vt. 借(出),把…借给",
    "example": ""
  },
  {
    "id": 899,
    "word": "letter",
    "phonetic": "/ˈletə(r)/",
    "meaning": "n. 信；字母",
    "example": ""
  },
  {
    "id": 900,
    "word": "librarian",
    "phonetic": "/laiˈbreəriən/",
    "meaning": "n. 图书管理员；（西方的）图书馆馆长",
    "example": ""
  },
  {
    "id": 902,
    "word": "license",
    "phonetic": "/ˈlaisəns/",
    "meaning": "n. 执照，许可证",
    "example": ""
  },
  {
    "id": 903,
    "word": "lie",
    "phonetic": "",
    "meaning": "(lay, lain) [lai] v. 躺;卧;平放;位于n.& vi.(lied,lied) 说谎",
    "example": ""
  },
  {
    "id": 904,
    "word": "life",
    "phonetic": "",
    "meaning": "(复lives) [laif] n. 生命；生涯；生活；人生；生物",
    "example": ""
  },
  {
    "id": 905,
    "word": "lifetime",
    "phonetic": "/ˈlaiftaim/",
    "meaning": "n. 一生，终生",
    "example": ""
  },
  {
    "id": 906,
    "word": "lift",
    "phonetic": "/lift/",
    "meaning": "v. 举起，抬起；（云、烟等）消散 n. （英）电梯",
    "example": ""
  },
  {
    "id": 909,
    "word": "line",
    "phonetic": "/laɪn/",
    "meaning": "n. 绳索，线，排，行，线路 v. 画线于，（使）成行",
    "example": ""
  },
  {
    "id": 910,
    "word": "lion",
    "phonetic": "/ˈlaɪən/",
    "meaning": "n. 狮子",
    "example": ""
  },
  {
    "id": 911,
    "word": "lip",
    "phonetic": "/lɪp/",
    "meaning": "n. 嘴唇",
    "example": ""
  },
  {
    "id": 912,
    "word": "list",
    "phonetic": "/lɪst/",
    "meaning": "n. 一览表，清单",
    "example": ""
  },
  {
    "id": 914,
    "word": "litter",
    "phonetic": "/ˈlɪtə(r)/",
    "meaning": "v. 乱丢杂物",
    "example": ""
  },
  {
    "id": 917,
    "word": "lively",
    "phonetic": "/ˈlaɪvlɪ/",
    "meaning": "a. 活泼的;充满生气的",
    "example": ""
  },
  {
    "id": 918,
    "word": "living",
    "phonetic": "/ˈlɪvɪŋ/",
    "meaning": "a. 活着的 n. 生计",
    "example": ""
  },
  {
    "id": 919,
    "word": "lock",
    "phonetic": "/lɔk/",
    "meaning": "n. 锁 vt. 锁，锁上",
    "example": ""
  },
  {
    "id": 920,
    "word": "London",
    "phonetic": "/ˈlʌnd(ə)n/",
    "meaning": "n. 伦敦",
    "example": ""
  },
  {
    "id": 921,
    "word": "lonely",
    "phonetic": "/ˈləʊnlɪ/",
    "meaning": "a. 孤独的，寂寞的",
    "example": ""
  },
  {
    "id": 924,
    "word": "lose",
    "phonetic": "",
    "meaning": "(lost, lost) [luːz] vt. 失去，丢失",
    "example": ""
  },
  {
    "id": 925,
    "word": "lot",
    "phonetic": "/lɔt/",
    "meaning": "n. 许多，好些",
    "example": ""
  },
  {
    "id": 926,
    "word": "loud",
    "phonetic": "/laʊd/",
    "meaning": "a. 大声的",
    "example": ""
  },
  {
    "id": 927,
    "word": "loudly",
    "phonetic": "/laʊdlɪ/",
    "meaning": "ad. 大声地",
    "example": ""
  },
  {
    "id": 928,
    "word": "loudspeaker",
    "phonetic": "/laʊdˈspiːkə(r)/",
    "meaning": "n. 扬声器，喇叭",
    "example": ""
  },
  {
    "id": 930,
    "word": "lovely",
    "phonetic": "/ˈlʌvlɪ/",
    "meaning": "a. 美好的，可爱的",
    "example": ""
  },
  {
    "id": 931,
    "word": "low",
    "phonetic": "/ləʊ/",
    "meaning": "a.& ad. 低；矮",
    "example": ""
  },
  {
    "id": 932,
    "word": "luck",
    "phonetic": "/lʌk/",
    "meaning": "n. 运气，好运",
    "example": ""
  },
  {
    "id": 933,
    "word": "lucky",
    "phonetic": "/ˈlʌkɪ/",
    "meaning": "a. 运气好，侥幸",
    "example": ""
  },
  {
    "id": 935,
    "word": "machine",
    "phonetic": "/məˈʃiːn/",
    "meaning": "n. 机器",
    "example": ""
  },
  {
    "id": 936,
    "word": "magazine",
    "phonetic": "/mæɡəˈziːn/",
    "meaning": "n. 杂志",
    "example": ""
  },
  {
    "id": 937,
    "word": "magic",
    "phonetic": "/ˈmædʒɪk/",
    "meaning": "a. 有魔力的",
    "example": ""
  },
  {
    "id": 938,
    "word": "mail",
    "phonetic": "/meɪl/",
    "meaning": "n. 邮政,邮递 v. (美)邮寄",
    "example": ""
  },
  {
    "id": 939,
    "word": "main",
    "phonetic": "/meɪn/",
    "meaning": "a. 主要的",
    "example": ""
  },
  {
    "id": 940,
    "word": "mainland",
    "phonetic": "/ˈmeɪnlənd/",
    "meaning": "n. 大陆",
    "example": ""
  },
  {
    "id": 943,
    "word": "manage",
    "phonetic": "/ˈmænɪdʒ/",
    "meaning": "v. 管理；设法对付",
    "example": ""
  },
  {
    "id": 944,
    "word": "manager",
    "phonetic": "/ˈmænɪdʒə(r)/",
    "meaning": "n. 经理",
    "example": ""
  },
  {
    "id": 945,
    "word": "man-made",
    "phonetic": "/mæn- meɪd/",
    "meaning": "a. 人造的，人工的",
    "example": ""
  },
  {
    "id": 948,
    "word": "March",
    "phonetic": "/mɑːtʃ/",
    "meaning": "n. 3月",
    "example": ""
  },
  {
    "id": 949,
    "word": "mark",
    "phonetic": "/mɑːk/",
    "meaning": "n. 标记 vt. 标明,作记号于",
    "example": ""
  },
  {
    "id": 950,
    "word": "market",
    "phonetic": "/ˈmɑːkɪt/",
    "meaning": "n. 市场，集市",
    "example": ""
  },
  {
    "id": 951,
    "word": "marry",
    "phonetic": "/ˈmærɪ/",
    "meaning": "v.（使）成婚，结婚",
    "example": ""
  },
  {
    "id": 952,
    "word": "match",
    "phonetic": "/mætʃ/",
    "meaning": "vt. 使相配，使成对 n. 比赛，竞赛 n. 火柴",
    "example": ""
  },
  {
    "id": 953,
    "word": "mathematics",
    "phonetic": "",
    "meaning": "=math / maths [mæθəˈmætɪks] n.（常作单数用）数学, (英美口语) 数学",
    "example": ""
  },
  {
    "id": 954,
    "word": "matter",
    "phonetic": "/ˈmætə(r)/",
    "meaning": "n. 要紧事，要紧, 事情；问题 vi. 要紧，有重大关系",
    "example": ""
  },
  {
    "id": 955,
    "word": "May",
    "phonetic": "/meɪ/",
    "meaning": "n. 5月",
    "example": ""
  },
  {
    "id": 956,
    "word": "maybe",
    "phonetic": "/ˈmeɪbiː/",
    "meaning": "ad. 可能，大概，也许",
    "example": ""
  },
  {
    "id": 958,
    "word": "meal",
    "phonetic": "/miːl/",
    "meaning": "n. 一餐（饭） ",
    "example": ""
  },
  {
    "id": 959,
    "word": "meaning",
    "phonetic": "/ˈmiːnɪŋ/",
    "meaning": "n. 意思，含意",
    "example": ""
  },
  {
    "id": 960,
    "word": "means",
    "phonetic": "/miːnz/",
    "meaning": "n. 方法，手段；财产",
    "example": ""
  },
  {
    "id": 961,
    "word": "meat",
    "phonetic": "/miːt/",
    "meaning": "n.（猪、牛、羊等的）肉",
    "example": ""
  },
  {
    "id": 963,
    "word": "meeting",
    "phonetic": "/ˈmiːtɪŋ/",
    "meaning": "n. 会,集会,会见,汇合点",
    "example": ""
  },
  {
    "id": 964,
    "word": "melon",
    "phonetic": "/ˈmelən/",
    "meaning": "n.（甜）瓜；瓜状物",
    "example": ""
  },
  {
    "id": 965,
    "word": "member",
    "phonetic": "/ˈmembə(r)/",
    "meaning": "n. 成员，会员",
    "example": ""
  },
  {
    "id": 966,
    "word": "memory",
    "phonetic": "/ˈmemərɪ/",
    "meaning": "n. 回忆，记忆",
    "example": ""
  },
  {
    "id": 967,
    "word": "mend",
    "phonetic": "/mend/",
    "meaning": "v. 修理，修补",
    "example": ""
  },
  {
    "id": 968,
    "word": "mention",
    "phonetic": "/ˈmenʃ(ə)n/",
    "meaning": "n. 提及；记载 vt. 提到，说起",
    "example": ""
  },
  {
    "id": 969,
    "word": "menu",
    "phonetic": "/ˈmenjuː/",
    "meaning": "n. 菜单",
    "example": ""
  },
  {
    "id": 970,
    "word": "merry",
    "phonetic": "/ˈmerɪ/",
    "meaning": "a. 高兴的，愉快的",
    "example": ""
  },
  {
    "id": 971,
    "word": "message",
    "phonetic": "/ˈmesɪdʒ/",
    "meaning": "n. 消息，音信",
    "example": ""
  },
  {
    "id": 972,
    "word": "metal",
    "phonetic": "/ˈmet(ə)l/",
    "meaning": "n. 金属 a. 金属制成的",
    "example": ""
  },
  {
    "id": 973,
    "word": "metre",
    "phonetic": "",
    "meaning": "(美meter) ['mi:tə] n. 米，公尺",
    "example": ""
  },
  {
    "id": 974,
    "word": "mid-autumn",
    "phonetic": "/mɪd- ˈɔːtəm/",
    "meaning": "n. 中秋",
    "example": ""
  },
  {
    "id": 975,
    "word": "middle",
    "phonetic": "/ˈmɪd(ə)l/",
    "meaning": "n. 中间;当中;中级的",
    "example": ""
  },
  {
    "id": 976,
    "word": "Middle East",
    "phonetic": "/ˈmɪd(ə)liːst/",
    "meaning": "n. 中东",
    "example": ""
  },
  {
    "id": 977,
    "word": "midnight",
    "phonetic": "/ˈmɪdnaɪt/",
    "meaning": "n. 午夜",
    "example": ""
  },
  {
    "id": 978,
    "word": "might",
    "phonetic": "/maɪt/",
    "meaning": "v. aux. (may的过去式，助动词) 可能，也许，或许",
    "example": ""
  },
  {
    "id": 979,
    "word": "mild",
    "phonetic": "/maɪld/",
    "meaning": "a. 温和,暖和的,凉爽的",
    "example": ""
  },
  {
    "id": 980,
    "word": "mile",
    "phonetic": "/maɪl/",
    "meaning": "n. 英里",
    "example": ""
  },
  {
    "id": 982,
    "word": "million",
    "phonetic": "/ˈmɪlɪən/",
    "meaning": "num. 百万 n. 百万个（人或物）",
    "example": ""
  },
  {
    "id": 983,
    "word": "mind",
    "phonetic": "/maɪnd/",
    "meaning": "n. 思想,想法 v.介意,关心",
    "example": ""
  },
  {
    "id": 984,
    "word": "mine",
    "phonetic": "/maɪn/",
    "meaning": "n. 矿藏,矿山 vt. 开采(矿物)  pron. 我的",
    "example": ""
  },
  {
    "id": 985,
    "word": "minibus",
    "phonetic": "/ˈmɪnɪbʌs/",
    "meaning": "n. 小型公共汽车",
    "example": ""
  },
  {
    "id": 986,
    "word": "minus",
    "phonetic": "/ˈmaɪnəs/",
    "meaning": "prep. & a.负的，减去的",
    "example": ""
  },
  {
    "id": 988,
    "word": "mirror",
    "phonetic": "/ˈmɪrə(r)/",
    "meaning": "n. 镜子",
    "example": ""
  },
  {
    "id": 990,
    "word": "Miss.",
    "phonetic": "/mɪs/",
    "meaning": "n. 小姐,女士(称呼未婚妇女)",
    "example": ""
  },
  {
    "id": 991,
    "word": "mist",
    "phonetic": "/mɪst/",
    "meaning": "n. 雾",
    "example": ""
  },
  {
    "id": 992,
    "word": "mistake",
    "phonetic": "",
    "meaning": "(mistook, mistaken) [mɪsˈteɪk] n. 错误 vt. 弄错",
    "example": ""
  },
  {
    "id": 993,
    "word": "mobile",
    "phonetic": "/ˈməubaɪl; (US) məubl/",
    "meaning": "a. 活动的，可移动的",
    "example": ""
  },
  {
    "id": 994,
    "word": "model",
    "phonetic": "/ˈmɔd(ə)l/",
    "meaning": "n. 模型,原形,范例,模范",
    "example": ""
  },
  {
    "id": 995,
    "word": "modern",
    "phonetic": "/ˈmɔd(ə)n/",
    "meaning": "a. 现代的",
    "example": ""
  },
  {
    "id": 997,
    "word": "moment",
    "phonetic": "/ˈməumənt/",
    "meaning": "n. 片刻，瞬间",
    "example": ""
  },
  {
    "id": 998,
    "word": "mommy",
    "phonetic": "",
    "meaning": "= mummy [ˈmʌmɪ] n. 妈妈（美）",
    "example": ""
  },
  {
    "id": 999,
    "word": "Monday",
    "phonetic": "/ˈmʌndeɪ, ˈmʌndɪ/",
    "meaning": "n. 星期一",
    "example": ""
  },
  {
    "id": 1000,
    "word": "money",
    "phonetic": "/ˈmʌnɪ/",
    "meaning": "n. 钱；货币",
    "example": ""
  },
  {
    "id": 1001,
    "word": "monitor",
    "phonetic": "/ˈmɔnɪtə(r)/",
    "meaning": "n.（班级内的）班长；纠察生；监视器",
    "example": ""
  },
  {
    "id": 1004,
    "word": "monument",
    "phonetic": "/ˈmɔnjumənt/",
    "meaning": "n. 纪念碑，纪念物",
    "example": ""
  },
  {
    "id": 1006,
    "word": "mooncake",
    "phonetic": "/muːnkeɪk/",
    "meaning": "n. 月饼",
    "example": ""
  },
  {
    "id": 1008,
    "word": "most",
    "phonetic": "",
    "meaning": "(much或many的最高级) [məʊst; (US) mɔːst] a. & ad. 最多 n. 大部分,大多数",
    "example": ""
  },
  {
    "id": 1010,
    "word": "motor",
    "phonetic": "/ˈməʊtə(r)/",
    "meaning": "n. 发动机，马达",
    "example": ""
  },
  {
    "id": 1011,
    "word": "motorbike",
    "phonetic": "/ˈməʊtəbaɪk/",
    "meaning": "n. 摩托车",
    "example": ""
  },
  {
    "id": 1012,
    "word": "motorcycle",
    "phonetic": "/'məʊtəsaikl/",
    "meaning": "n. 摩托车",
    "example": ""
  },
  {
    "id": 1013,
    "word": "mountain(s)",
    "phonetic": "/ˈmaʊntɪn(z)/",
    "meaning": "n. 山，山脉",
    "example": ""
  },
  {
    "id": 1014,
    "word": "mouse",
    "phonetic": "",
    "meaning": "(复mice) [maʊs] n. 鼠，耗子；（计算机）鼠标",
    "example": ""
  },
  {
    "id": 1016,
    "word": "move",
    "phonetic": "/muːv/",
    "meaning": "v. 移动，搬动，搬家",
    "example": ""
  },
  {
    "id": 1017,
    "word": "movement",
    "phonetic": "/ˈmuːvmənt/",
    "meaning": "n. 运动，活动",
    "example": ""
  },
  {
    "id": 1018,
    "word": "movie",
    "phonetic": "/ˈmuːvɪ/",
    "meaning": "n.（口语）电影",
    "example": ""
  },
  {
    "id": 1019,
    "word": "Mr. (mister)",
    "phonetic": "/ˈmɪstə(r)/",
    "meaning": "n. 先生（用于姓名前）",
    "example": ""
  },
  {
    "id": 1020,
    "word": "Mrs. (mistress)",
    "phonetic": "/ˈmɪsɪz/",
    "meaning": "n. 夫人, 太太（称呼已婚妇女）",
    "example": ""
  },
  {
    "id": 1021,
    "word": "Ms.",
    "phonetic": "/mɪz/",
    "meaning": "n. 女士(用在婚姻状况不明的女子姓名前)",
    "example": ""
  },
  {
    "id": 1023,
    "word": "multiply",
    "phonetic": "/ˈmʌltɪplaɪ/",
    "meaning": "vt. 乘；使相乘",
    "example": ""
  },
  {
    "id": 1024,
    "word": "murder",
    "phonetic": "/ˈmɜːdə(r)/",
    "meaning": "vt. 谋杀",
    "example": ""
  },
  {
    "id": 1025,
    "word": "museum",
    "phonetic": "/mjuːˈzɪəm/",
    "meaning": "n. 博物馆，博物院",
    "example": ""
  },
  {
    "id": 1027,
    "word": "must",
    "phonetic": "/mʌst/",
    "meaning": "v. 必须,应当;必定是",
    "example": ""
  },
  {
    "id": 1028,
    "word": "mutton",
    "phonetic": "/ˈmʌt(ə)n/",
    "meaning": "n. 羊肉",
    "example": ""
  },
  {
    "id": 1030,
    "word": "myself",
    "phonetic": "/maɪˈself/",
    "meaning": "pron. 我自己",
    "example": ""
  },
  {
    "id": 1031,
    "word": "nail",
    "phonetic": "/neɪl/",
    "meaning": "n. 钉，钉子",
    "example": ""
  },
  {
    "id": 1033,
    "word": "narrow",
    "phonetic": "/ˈnærəʊ/",
    "meaning": "a. 狭窄的",
    "example": ""
  },
  {
    "id": 1034,
    "word": "nation",
    "phonetic": "/ˈneɪʃ(ə)n/",
    "meaning": "n. 民族，国家",
    "example": ""
  },
  {
    "id": 1035,
    "word": "national",
    "phonetic": "/ˈnæʃən(ə)l/",
    "meaning": "a. 国家的,全国性的，民族的",
    "example": ""
  },
  {
    "id": 1036,
    "word": "natural",
    "phonetic": "/ˈnætʃər(ə)l/",
    "meaning": "a. 自然的",
    "example": ""
  },
  {
    "id": 1037,
    "word": "nature",
    "phonetic": "/ˈneɪtʃə(r)/",
    "meaning": "n. 自然, 性质，种类",
    "example": ""
  },
  {
    "id": 1039,
    "word": "nearby",
    "phonetic": "/ˈnɪəbaɪ/",
    "meaning": "a. 附近的",
    "example": ""
  },
  {
    "id": 1040,
    "word": "nearly",
    "phonetic": "/ˈnɪəlɪ/",
    "meaning": "ad. 将近，几乎",
    "example": ""
  },
  {
    "id": 1041,
    "word": "neat",
    "phonetic": "/niːt/",
    "meaning": "a. 整洁的；灵巧的",
    "example": ""
  },
  {
    "id": 1042,
    "word": "necessary",
    "phonetic": "/ˈnesisərɪ; (US) ˈnesəserɪ/",
    "meaning": "a. 必需的，必要的",
    "example": ""
  },
  {
    "id": 1043,
    "word": "neck",
    "phonetic": "/nek/",
    "meaning": "n. 颈，脖子",
    "example": ""
  },
  {
    "id": 1044,
    "word": "necklace",
    "phonetic": "/ˈneklɪs/",
    "meaning": "n. 项链",
    "example": ""
  },
  {
    "id": 1045,
    "word": "necktie",
    "phonetic": "/ˈnektaɪ/",
    "meaning": "n. 领带，领花",
    "example": ""
  },
  {
    "id": 1046,
    "word": "need",
    "phonetic": "/niːd/",
    "meaning": "n. 需要,需求 aux.& v. 需要,必须",
    "example": ""
  },
  {
    "id": 1047,
    "word": "needle",
    "phonetic": "/niːd(ə)l/",
    "meaning": "n. 针",
    "example": ""
  },
  {
    "id": 1048,
    "word": "neighbour",
    "phonetic": "",
    "meaning": "(美neighbor) [ˈneibə(r)] n. 邻居，邻人",
    "example": ""
  },
  {
    "id": 1049,
    "word": "neighbourhood",
    "phonetic": "",
    "meaning": "(美neighborhood) ['neibəhud] n. 四邻；邻近地区",
    "example": ""
  },
  {
    "id": 1050,
    "word": "neither",
    "phonetic": "/ˈnaɪðə(r), ˈniːðə(r)/",
    "meaning": "a.（两者）都不;也不",
    "example": ""
  },
  {
    "id": 1051,
    "word": "nervous",
    "phonetic": "/ˈnəːvəs/",
    "meaning": "a. 紧张不安的",
    "example": ""
  },
  {
    "id": 1052,
    "word": "nest",
    "phonetic": "/nest/",
    "meaning": "n. 巢；窝",
    "example": ""
  },
  {
    "id": 1053,
    "word": "net",
    "phonetic": "/net/",
    "meaning": "n. 网",
    "example": ""
  },
  {
    "id": 1054,
    "word": "network",
    "phonetic": "/ˈnetwəːk/",
    "meaning": "n. 网络，网状系统",
    "example": ""
  },
  {
    "id": 1055,
    "word": "never",
    "phonetic": "/ˈnevə(r)/",
    "meaning": "ad. 决不，从来没有",
    "example": ""
  },
  {
    "id": 1057,
    "word": "news",
    "phonetic": "/njuːz; (US) nuːz/",
    "meaning": "n. 新闻，消息",
    "example": ""
  },
  {
    "id": 1058,
    "word": "newspaper",
    "phonetic": "/njuːzˈpeɪpə(r); (US) nuːzˈpeɪpə(r)/",
    "meaning": "n. 报纸",
    "example": ""
  },
  {
    "id": 1061,
    "word": "niece",
    "phonetic": "/niːs/",
    "meaning": "n. 侄女，甥女",
    "example": ""
  },
  {
    "id": 1063,
    "word": "night-club",
    "phonetic": "/naɪt-klʌb/",
    "meaning": "n. 夜总会",
    "example": ""
  },
  {
    "id": 1064,
    "word": "nine",
    "phonetic": "/naɪn/",
    "meaning": "num. 九",
    "example": ""
  },
  {
    "id": 1065,
    "word": "nineteen",
    "phonetic": "/naɪnˈtiːn/",
    "meaning": "num. 十九",
    "example": ""
  },
  {
    "id": 1066,
    "word": "ninety",
    "phonetic": "/ˈnaɪntɪ/",
    "meaning": "num. 九十",
    "example": ""
  },
  {
    "id": 1067,
    "word": "ninth",
    "phonetic": "/naɪnθ/",
    "meaning": "num. 第九",
    "example": ""
  },
  {
    "id": 1069,
    "word": "nobody",
    "phonetic": "/ˈnəʊbədɪ/",
    "meaning": "n. 渺小人物 pron. 没有人，谁也不",
    "example": ""
  },
  {
    "id": 1070,
    "word": "nod",
    "phonetic": "/nɔd/",
    "meaning": "vi. 点头",
    "example": ""
  },
  {
    "id": 1071,
    "word": "noise",
    "phonetic": "/nɔɪz/",
    "meaning": "n. 声音，噪声，喧闹声",
    "example": ""
  },
  {
    "id": 1072,
    "word": "noisily",
    "phonetic": "/'nɔɪzɪlɪ/",
    "meaning": "ad. 喧闹地",
    "example": ""
  },
  {
    "id": 1073,
    "word": "noisy",
    "phonetic": "/ˈnɔɪzɪ/",
    "meaning": "a. 喧闹的，嘈杂的",
    "example": ""
  },
  {
    "id": 1074,
    "word": "none",
    "phonetic": "/nʌn/",
    "meaning": "pron. 无任何东西, 无一人",
    "example": ""
  },
  {
    "id": 1076,
    "word": "noon",
    "phonetic": "/nuːn/",
    "meaning": "n. 中午，正午",
    "example": ""
  },
  {
    "id": 1077,
    "word": "nor",
    "phonetic": "/nɔː(r)/",
    "meaning": "conj. 也不",
    "example": ""
  },
  {
    "id": 1078,
    "word": "normal",
    "phonetic": "/ˈnɔːm(ə)l/",
    "meaning": "n.& a. 正常的（状态）",
    "example": ""
  },
  {
    "id": 1079,
    "word": "north",
    "phonetic": "/nɔːθ/",
    "meaning": "a. 北的;朝北的 ad. 向（在,从）北方 n. 北;北方;北部",
    "example": ""
  },
  {
    "id": 1080,
    "word": "northeast",
    "phonetic": "/nɔ:θ'i:st/",
    "meaning": "n. 东北（部）",
    "example": ""
  },
  {
    "id": 1081,
    "word": "northern",
    "phonetic": "/ˈnɔːð(ə)n/",
    "meaning": "a. 北方的，北部的",
    "example": ""
  },
  {
    "id": 1082,
    "word": "northwest",
    "phonetic": "/nɔ:θ'west/",
    "meaning": "n. 西北",
    "example": ""
  },
  {
    "id": 1085,
    "word": "note",
    "phonetic": "/nəʊt/",
    "meaning": "n. 便条，笔记，注释；钞票，音调",
    "example": ""
  },
  {
    "id": 1086,
    "word": "notebook",
    "phonetic": "/ˈnəʊtbʊk/",
    "meaning": "n. 笔记簿",
    "example": ""
  },
  {
    "id": 1087,
    "word": "nothing",
    "phonetic": "/ˈnʌθɪŋ/",
    "meaning": "n. 没有东西,没有什么",
    "example": ""
  },
  {
    "id": 1088,
    "word": "notice",
    "phonetic": "/ˈnəʊtɪs/",
    "meaning": "n. 布告，通告；注意 vt. 注意，注意到",
    "example": ""
  },
  {
    "id": 1089,
    "word": "novel",
    "phonetic": "/ˈnɔv(ə)l/",
    "meaning": "n.（长篇）小说",
    "example": ""
  },
  {
    "id": 1090,
    "word": "November",
    "phonetic": "/nəʊˈvembə(r)/",
    "meaning": "n. 11月",
    "example": ""
  },
  {
    "id": 1092,
    "word": "nowhere",
    "phonetic": "/ˈnəʊweə(r); (US) ˈnəʊhweər/",
    "meaning": "ad. 任何地方都不,无处",
    "example": ""
  },
  {
    "id": 1093,
    "word": "number",
    "phonetic": "/ˈnʌmbə(r)/",
    "meaning": "n. 数,数字,号码,数量",
    "example": ""
  },
  {
    "id": 1095,
    "word": "obey",
    "phonetic": "/əˈbeɪ/",
    "meaning": "v. 服从，顺从，听从",
    "example": ""
  },
  {
    "id": 1096,
    "word": "object",
    "phonetic": "/ˈɔbdʒɪkt/",
    "meaning": "n. 物，物体；宾语",
    "example": ""
  },
  {
    "id": 1097,
    "word": "ocean",
    "phonetic": "/ˈəʊʃ(ə)n/",
    "meaning": "n. 海洋",
    "example": ""
  },
  {
    "id": 1098,
    "word": "Oceania n.",
    "phonetic": "",
    "meaning": "大洋洲",
    "example": ""
  },
  {
    "id": 1099,
    "word": "October",
    "phonetic": "/ɔkˈtəʊbə(r)/",
    "meaning": "n. 10月",
    "example": ""
  },
  {
    "id": 1101,
    "word": "off",
    "phonetic": "/ɔːf/",
    "meaning": "prep. 离开,脱离,（走）开",
    "example": ""
  },
  {
    "id": 1102,
    "word": "offer",
    "phonetic": "/ˈɔfə(r)/",
    "meaning": "n.& vt. 提供；建议",
    "example": ""
  },
  {
    "id": 1103,
    "word": "office",
    "phonetic": "/ˈɔfɪs/",
    "meaning": "n. 办公室",
    "example": ""
  },
  {
    "id": 1105,
    "word": "oh",
    "phonetic": "/əʊ/",
    "meaning": "int. 哦！啊！",
    "example": ""
  },
  {
    "id": 1106,
    "word": "oil",
    "phonetic": "/ɔɪl/",
    "meaning": "n. 油",
    "example": ""
  },
  {
    "id": 1107,
    "word": "OK",
    "phonetic": "/əʊˈkeɪ/",
    "meaning": "ad.（口语）好,对,不错",
    "example": ""
  },
  {
    "id": 1109,
    "word": "Olympic(s)",
    "phonetic": "/əʊˈlɪmpɪk/",
    "meaning": "a. & n. 奥林匹克",
    "example": ""
  },
  {
    "id": 1110,
    "word": "Olympic Games",
    "phonetic": "/əʊˈlɪmpɪk ɡeɪms/",
    "meaning": "n. 奥运会",
    "example": ""
  },
  {
    "id": 1112,
    "word": "once",
    "phonetic": "/wʌns/",
    "meaning": "n.& ad. 一次,一度,从前 conj. 一旦",
    "example": ""
  },
  {
    "id": 1113,
    "word": "one",
    "phonetic": "/wʌn/",
    "meaning": "pron. 一（个，只…）",
    "example": ""
  },
  {
    "id": 1114,
    "word": "oneself",
    "phonetic": "/wʌnˈself/",
    "meaning": "pron. 自己；自身",
    "example": ""
  },
  {
    "id": 1115,
    "word": "onion",
    "phonetic": "/ˈʌnjən/",
    "meaning": "n. 洋葱；洋葱头",
    "example": ""
  },
  {
    "id": 1116,
    "word": "only",
    "phonetic": "/ˈəʊnlɪ/",
    "meaning": "a. 惟一的，仅有的 ad. 仅仅，只，才",
    "example": ""
  },
  {
    "id": 1117,
    "word": "onto",
    "phonetic": "/ˈɔntʊ/",
    "meaning": "prep. 到…的上面",
    "example": ""
  },
  {
    "id": 1119,
    "word": "opera",
    "phonetic": "/ˈɔpərə/",
    "meaning": "n. 歌剧",
    "example": ""
  },
  {
    "id": 1120,
    "word": "operate",
    "phonetic": "/ˈɔpəreɪt/",
    "meaning": "v. 做手术，运转；实施，负责, 经营，管理",
    "example": ""
  },
  {
    "id": 1121,
    "word": "opinion",
    "phonetic": "/əˈpɪnjən/",
    "meaning": "n. 看法，见解",
    "example": ""
  },
  {
    "id": 1124,
    "word": "order",
    "phonetic": "/ˈɔːdə(r)/",
    "meaning": "vt. 定购，定货；点菜n. 顺序",
    "example": ""
  },
  {
    "id": 1125,
    "word": "ordinary",
    "phonetic": "/ˈɔːdɪnərɪ; (US) ˈɔːrdənerɪ/",
    "meaning": "a. 普通的，平常的",
    "example": ""
  },
  {
    "id": 1126,
    "word": "other",
    "phonetic": "/ˈʌðə(r)/",
    "meaning": "pron. 别人，别的东西 a. 别的,另外的",
    "example": ""
  },
  {
    "id": 1128,
    "word": "ours",
    "phonetic": "/ˈaʊəz/",
    "meaning": "pron. 我们的",
    "example": ""
  },
  {
    "id": 1129,
    "word": "ourselves",
    "phonetic": "/aʊəˈselvz/",
    "meaning": "pron. 我们自己",
    "example": ""
  },
  {
    "id": 1130,
    "word": "out",
    "phonetic": "/aʊt/",
    "meaning": "ad. 出外;在外,向外;熄",
    "example": ""
  },
  {
    "id": 1131,
    "word": "outdoors",
    "phonetic": "/aʊtˈdɔːz/",
    "meaning": "ad. 在户外, 在野外",
    "example": ""
  },
  {
    "id": 1132,
    "word": "outside",
    "phonetic": "/aʊtˈsaɪd/",
    "meaning": "n. 外面 ad. 在外面；向外面 prep. 在…外面",
    "example": ""
  },
  {
    "id": 1133,
    "word": "over",
    "phonetic": "/ˈəʊvə(r)/",
    "meaning": "prep. 在…上方,越过,遍及 ad. 翻倒,遍布,越过,结束",
    "example": ""
  },
  {
    "id": 1134,
    "word": "overcoat",
    "phonetic": "/ˈəʊvəkəʊt/",
    "meaning": "n. 大衣",
    "example": ""
  },
  {
    "id": 1135,
    "word": "own",
    "phonetic": "/əʊn/",
    "meaning": "a. 自己的 v. 拥有,所有",
    "example": ""
  },
  {
    "id": 1136,
    "word": "owner",
    "phonetic": "/ˈəʊnə(r)/",
    "meaning": "n. 物主，所有人",
    "example": ""
  },
  {
    "id": 1137,
    "word": "Pacific",
    "phonetic": "/pəˈsɪfɪk/",
    "meaning": "a. 太平洋的",
    "example": ""
  },
  {
    "id": 1138,
    "word": "the Pacific Ocean",
    "phonetic": "/ðə pəˈsɪfɪkˈəʊʃ (ə)n/",
    "meaning": "太平洋",
    "example": ""
  },
  {
    "id": 1139,
    "word": "pack",
    "phonetic": "/pæk/",
    "meaning": "n. 包,捆;（猎犬、野兽的）一群 v. (为运输或储存而)打包",
    "example": ""
  },
  {
    "id": 1140,
    "word": "packet",
    "phonetic": "/ˈpækɪt/",
    "meaning": "n. 小包裹，袋",
    "example": ""
  },
  {
    "id": 1141,
    "word": "page",
    "phonetic": "/peɪdʒ/",
    "meaning": "n. 页，页码",
    "example": ""
  },
  {
    "id": 1142,
    "word": "pain",
    "phonetic": "/peɪn/",
    "meaning": "n. 疼痛，疼",
    "example": ""
  },
  {
    "id": 1143,
    "word": "painful",
    "phonetic": "/ˈpeɪnfʊl/",
    "meaning": "a. 使痛的，使痛苦的",
    "example": ""
  },
  {
    "id": 1144,
    "word": "paint",
    "phonetic": "/peɪnt/",
    "meaning": "n. 油漆 vt. 油漆,粉刷,绘画",
    "example": ""
  },
  {
    "id": 1145,
    "word": "painter",
    "phonetic": "/ˈpeɪntə(r)/",
    "meaning": "n. 绘画者,（油）画家",
    "example": ""
  },
  {
    "id": 1146,
    "word": "painting",
    "phonetic": "/ˈpeɪntɪŋ/",
    "meaning": "n. 油画，水彩画",
    "example": ""
  },
  {
    "id": 1147,
    "word": "pair",
    "phonetic": "/peə(r)/",
    "meaning": "n. 一双，一对",
    "example": ""
  },
  {
    "id": 1148,
    "word": "palace",
    "phonetic": "/ˈpælɪs/",
    "meaning": "n. 宫，宫殿",
    "example": ""
  },
  {
    "id": 1149,
    "word": "pale",
    "phonetic": "/peɪl/",
    "meaning": "a. 苍白的，灰白的",
    "example": ""
  },
  {
    "id": 1150,
    "word": "pan",
    "phonetic": "/pæn/",
    "meaning": "n. 平底锅",
    "example": ""
  },
  {
    "id": 1152,
    "word": "paper",
    "phonetic": "/ˈpeɪpə(r)/",
    "meaning": "n. 纸；报纸",
    "example": ""
  },
  {
    "id": 1153,
    "word": "pardon",
    "phonetic": "/ˈpɑːd(ə)n/",
    "meaning": "n. 原谅,宽恕,对不起",
    "example": ""
  },
  {
    "id": 1156,
    "word": "parking",
    "phonetic": "/ˈpɑːkɪŋ/",
    "meaning": "n. 停车",
    "example": ""
  },
  {
    "id": 1157,
    "word": "parrot",
    "phonetic": "/ˈpærət/",
    "meaning": "n. 鹦鹉",
    "example": ""
  },
  {
    "id": 1158,
    "word": "part",
    "phonetic": "/pɑːt/",
    "meaning": "n. 部分；角色；部件；零件 a. 局部的；部分的",
    "example": ""
  },
  {
    "id": 1160,
    "word": "pass",
    "phonetic": "/pɑːs; (US) pæs/",
    "meaning": "vt. 传，递；经过；通过",
    "example": ""
  },
  {
    "id": 1161,
    "word": "passage",
    "phonetic": "/ˈpæsɪdʒ/",
    "meaning": "n.（文章等的）一节，一段；通道；走廊",
    "example": ""
  },
  {
    "id": 1162,
    "word": "passenger",
    "phonetic": "/ˈpæsɪndʒə(r)/",
    "meaning": "n. 乘客，旅客",
    "example": ""
  },
  {
    "id": 1163,
    "word": "passport",
    "phonetic": "/ˈpɑːspɔːt; (US) ˈpæspɔːt/",
    "meaning": "n. 护照",
    "example": ""
  },
  {
    "id": 1164,
    "word": "past",
    "phonetic": "/pɑːst; (US) pæst/",
    "meaning": "ad. 过 n. 过去，昔日，往事 prep. 过…，走过某处",
    "example": ""
  },
  {
    "id": 1165,
    "word": "path",
    "phonetic": "/pɑːθ; (US) pæθ/",
    "meaning": "n. 小道，小径",
    "example": ""
  },
  {
    "id": 1166,
    "word": "patient",
    "phonetic": "/ˈpeɪʃ(ə)nt/",
    "meaning": "n. 病人",
    "example": ""
  },
  {
    "id": 1167,
    "word": "pause",
    "phonetic": "/pɔːz/",
    "meaning": "n.& vi. 中止，暂停；停止",
    "example": ""
  },
  {
    "id": 1168,
    "word": "pay",
    "phonetic": "/peɪ/",
    "meaning": "(paid, paid) v. 付钱，给…报酬 n. 工资",
    "example": ""
  },
  {
    "id": 1169,
    "word": "pea",
    "phonetic": "/piː/",
    "meaning": "n. 豌豆",
    "example": ""
  },
  {
    "id": 1170,
    "word": "peace",
    "phonetic": "/piːs/",
    "meaning": "n. 和平",
    "example": ""
  },
  {
    "id": 1171,
    "word": "pear",
    "phonetic": "/peə(r)/",
    "meaning": "n. 梨子，梨树",
    "example": ""
  },
  {
    "id": 1174,
    "word": "pencil-box",
    "phonetic": "/ˈpens(ə)l -bɔks/",
    "meaning": "n. 铅笔盒",
    "example": ""
  },
  {
    "id": 1175,
    "word": "penny",
    "phonetic": "/ˈpenɪ/",
    "meaning": "(英复pence) n.（英）便士；美分",
    "example": ""
  },
  {
    "id": 1177,
    "word": "pepper",
    "phonetic": "/ˈpepə(r)/",
    "meaning": "n. 胡椒粉",
    "example": ""
  },
  {
    "id": 1178,
    "word": "performance",
    "phonetic": "/pəˈfɔːməns/",
    "meaning": "n. 演出，表演",
    "example": ""
  },
  {
    "id": 1179,
    "word": "perhaps",
    "phonetic": "/pəˈhæps/",
    "meaning": "ad. 可能，或",
    "example": ""
  },
  {
    "id": 1180,
    "word": "permit",
    "phonetic": "/pəˈmɪt/",
    "meaning": "vt. 许可,允许;执照 n. 许可证",
    "example": ""
  },
  {
    "id": 1181,
    "word": "person",
    "phonetic": "/ˈpɜːs(ə)n/",
    "meaning": "n. 人",
    "example": ""
  },
  {
    "id": 1182,
    "word": "personal",
    "phonetic": "/ˈpɜːsən(ə)l/",
    "meaning": "a. 个人的，私人的",
    "example": ""
  },
  {
    "id": 1183,
    "word": "pet",
    "phonetic": "/pet/",
    "meaning": "n. 宠物，爱畜",
    "example": ""
  },
  {
    "id": 1184,
    "word": "phone",
    "phonetic": "",
    "meaning": "= telephone [fəʊn] v. 打电话 n. 电话，电话机",
    "example": ""
  },
  {
    "id": 1186,
    "word": "photograph",
    "phonetic": "/ˈfəʊtəʊɡrɑːf; (US) -ɡræf/",
    "meaning": "n. 照片",
    "example": ""
  },
  {
    "id": 1187,
    "word": "phrase",
    "phonetic": "/freɪz/",
    "meaning": "n. 短语；习惯用语",
    "example": ""
  },
  {
    "id": 1188,
    "word": "physicist",
    "phonetic": "/ˈfɪzɪsɪst/",
    "meaning": "n. 物理学家",
    "example": ""
  },
  {
    "id": 1189,
    "word": "physics",
    "phonetic": "/ˈfɪzɪks/",
    "meaning": "n. 物理（学）",
    "example": ""
  },
  {
    "id": 1190,
    "word": "pianist",
    "phonetic": "/ˈpɪənist/",
    "meaning": "n. 钢琴家",
    "example": ""
  },
  {
    "id": 1191,
    "word": "piano",
    "phonetic": "/pɪˈænəʊ/",
    "meaning": "n. 钢琴",
    "example": ""
  },
  {
    "id": 1192,
    "word": "pick",
    "phonetic": "/pɪk/",
    "meaning": "v. 拾起，采集；挑选",
    "example": ""
  },
  {
    "id": 1193,
    "word": "picnic",
    "phonetic": "/ˈpɪknɪk/",
    "meaning": "n.& v. 野餐",
    "example": ""
  },
  {
    "id": 1195,
    "word": "pie",
    "phonetic": "/paɪ/",
    "meaning": "n. 甜馅饼",
    "example": ""
  },
  {
    "id": 1196,
    "word": "piece",
    "phonetic": "/pɪs/",
    "meaning": "n. 一块（片，张，件…）",
    "example": ""
  },
  {
    "id": 1198,
    "word": "pile",
    "phonetic": "/paɪl/",
    "meaning": "n./v. 堆",
    "example": ""
  },
  {
    "id": 1199,
    "word": "pill",
    "phonetic": "/pɪl/",
    "meaning": "n. 药丸，药片",
    "example": ""
  },
  {
    "id": 1200,
    "word": "pilot",
    "phonetic": "/ˈpaɪlət/",
    "meaning": "n. 飞行员",
    "example": ""
  },
  {
    "id": 1201,
    "word": "ping-pong",
    "phonetic": "/pɪŋ-pɔɡ/",
    "meaning": "n. 乒乓球",
    "example": ""
  },
  {
    "id": 1202,
    "word": "pink",
    "phonetic": "/pɪŋk/",
    "meaning": "a. 粉红色的",
    "example": ""
  },
  {
    "id": 1203,
    "word": "pioneer",
    "phonetic": "/paɪəˈnɪə(r)/",
    "meaning": "n. 先锋，开拓者",
    "example": ""
  },
  {
    "id": 1204,
    "word": "pity",
    "phonetic": "/ˈpɪtɪ/",
    "meaning": "n. 怜悯，同情",
    "example": ""
  },
  {
    "id": 1206,
    "word": "plan",
    "phonetic": "/plæn/",
    "meaning": "n.& v. 计划，打算",
    "example": ""
  },
  {
    "id": 1208,
    "word": "planet",
    "phonetic": "/ˈplænɪt/",
    "meaning": "n. 行星",
    "example": ""
  },
  {
    "id": 1210,
    "word": "plastic",
    "phonetic": "/ˈplæstɪk/",
    "meaning": "a. 塑料的",
    "example": ""
  },
  {
    "id": 1211,
    "word": "plate",
    "phonetic": "/pleɪt/",
    "meaning": "n. 板；片；牌；盘子；盆子",
    "example": ""
  },
  {
    "id": 1213,
    "word": "player",
    "phonetic": "/ˈpleɪə(r)/",
    "meaning": "n. 比赛者，选手",
    "example": ""
  },
  {
    "id": 1215,
    "word": "pleasant",
    "phonetic": "/ˈplezənt/",
    "meaning": "a. 令人愉快的，舒适的",
    "example": ""
  },
  {
    "id": 1217,
    "word": "pleased",
    "phonetic": "/pliːzd/",
    "meaning": "a. 高兴的",
    "example": ""
  },
  {
    "id": 1218,
    "word": "pleasure",
    "phonetic": "/ˈpleʒə/",
    "meaning": "n. 高兴，愉快",
    "example": ""
  },
  {
    "id": 1219,
    "word": "plenty",
    "phonetic": "/plenti/",
    "meaning": "n. 充足，大量",
    "example": ""
  },
  {
    "id": 1220,
    "word": "plus",
    "phonetic": "/plʌs/",
    "meaning": "prep. 加，加上",
    "example": ""
  },
  {
    "id": 1221,
    "word": "pocket",
    "phonetic": "/ˈpɔkɪt/",
    "meaning": "n.（衣服的）口袋",
    "example": ""
  },
  {
    "id": 1222,
    "word": "point",
    "phonetic": "/pɔɪnt/",
    "meaning": "v. 指，指向 n. 点；分数",
    "example": ""
  },
  {
    "id": 1224,
    "word": "policeman",
    "phonetic": "",
    "meaning": "(复-men) [pəˈliːsmən] n. 警察,巡警 policewoman ( -women) n. 女警察",
    "example": ""
  },
  {
    "id": 1225,
    "word": "polite",
    "phonetic": "/pəˈlaɪt/",
    "meaning": "a. 有礼貌的,有教养的",
    "example": ""
  },
  {
    "id": 1226,
    "word": "politics",
    "phonetic": "/ˈpɔlɪtɪks/",
    "meaning": "n. 政治",
    "example": ""
  },
  {
    "id": 1227,
    "word": "pollute",
    "phonetic": "/pəˈluːt/",
    "meaning": "vt. 污染",
    "example": ""
  },
  {
    "id": 1228,
    "word": "pool",
    "phonetic": "/puːl/",
    "meaning": "n. 水塘，水池",
    "example": ""
  },
  {
    "id": 1229,
    "word": "poor",
    "phonetic": "/pʊə(r)/",
    "meaning": "a. 贫穷；可怜；不好的,差的",
    "example": ""
  },
  {
    "id": 1230,
    "word": "pop",
    "phonetic": "",
    "meaning": "= popular [pɔp] a. (口语) （音乐、艺术等）大众的，通俗的",
    "example": ""
  },
  {
    "id": 1231,
    "word": "popular",
    "phonetic": "/ˈpɔpjʊlə(r)/",
    "meaning": "a. 流行,大众,受欢迎的",
    "example": ""
  },
  {
    "id": 1232,
    "word": "population",
    "phonetic": "/pɔpjʊˈleɪʃ(ə)n/",
    "meaning": "n. 人口，人数",
    "example": ""
  },
  {
    "id": 1233,
    "word": "pork",
    "phonetic": "/pɔːk/",
    "meaning": "n. 猪肉",
    "example": ""
  },
  {
    "id": 1234,
    "word": "porridge",
    "phonetic": "/ˈpɔrɪdʒ; (US) ˈpɔːrɪdʒ/",
    "meaning": "n. 稀饭，粥",
    "example": ""
  },
  {
    "id": 1235,
    "word": "port",
    "phonetic": "/pɔːt/",
    "meaning": "n. 港口，码头",
    "example": ""
  },
  {
    "id": 1236,
    "word": "possible",
    "phonetic": "/ˈpɔsɪb(ə)l/",
    "meaning": "a. 可能的",
    "example": ""
  },
  {
    "id": 1237,
    "word": "post",
    "phonetic": "/pəʊst/",
    "meaning": "n. 邮政，邮寄，邮件 v. 投寄；邮寄",
    "example": ""
  },
  {
    "id": 1238,
    "word": "postage",
    "phonetic": "/ˈpəʊstɪdʒ/",
    "meaning": "n. 邮费",
    "example": ""
  },
  {
    "id": 1239,
    "word": "postbox",
    "phonetic": "/ˈpəʊstbɔks/",
    "meaning": "n. 邮箱",
    "example": ""
  },
  {
    "id": 1240,
    "word": "postcard",
    "phonetic": "/ˈpəʊstkɑːd/",
    "meaning": "n. 明信片",
    "example": ""
  },
  {
    "id": 1241,
    "word": "postcode",
    "phonetic": "/ˈpəʊstkəʊd/",
    "meaning": "n. （英）邮政编码",
    "example": ""
  }
];
const GRADE_9 = [
  {
    "id": 1242,
    "word": "postman",
    "phonetic": "/ˈpəʊstmən/",
    "meaning": "n. 邮递员",
    "example": ""
  },
  {
    "id": 1244,
    "word": "potential",
    "phonetic": "/pəʊtenʃ (ə)l/",
    "meaning": "a. 潜在的，可能的",
    "example": ""
  },
  {
    "id": 1245,
    "word": "pound",
    "phonetic": "/paund/",
    "meaning": "n. 磅；英镑",
    "example": ""
  },
  {
    "id": 1246,
    "word": "pour",
    "phonetic": "/paʊ(r)/",
    "meaning": "vi. 倾泻，不断流出",
    "example": ""
  },
  {
    "id": 1247,
    "word": "practice(s)e",
    "phonetic": "/ˈpræktɪs/",
    "meaning": "n. 练习",
    "example": ""
  },
  {
    "id": 1248,
    "word": "praise",
    "phonetic": "/preɪz/",
    "meaning": "n.& vt. 赞扬，表扬",
    "example": ""
  },
  {
    "id": 1249,
    "word": "prefer",
    "phonetic": "/prɪˈfəː (r)/",
    "meaning": "vt.宁愿（选择）,更喜欢",
    "example": ""
  },
  {
    "id": 1250,
    "word": "prepare",
    "phonetic": "/prɪˈpeə(r)/",
    "meaning": "vt. 准备,预备,调制,配制",
    "example": ""
  },
  {
    "id": 1251,
    "word": "present",
    "phonetic": "/ˈprez(ə)nt/",
    "meaning": "a. 出现的，出席的 n. 礼物，赠品 vt. 呈奉，奉送",
    "example": ""
  },
  {
    "id": 1252,
    "word": "press",
    "phonetic": "/pres/",
    "meaning": "vt. 压,按 n. 新闻界,出版社",
    "example": ""
  },
  {
    "id": 1253,
    "word": "pretty",
    "phonetic": "/ˈprɪtɪ/",
    "meaning": "a. 漂亮的，俊俏的",
    "example": ""
  },
  {
    "id": 1254,
    "word": "prevent",
    "phonetic": "/prɪˈvent/",
    "meaning": "vt. 防止, 预防",
    "example": ""
  },
  {
    "id": 1255,
    "word": "price",
    "phonetic": "/praɪs/",
    "meaning": "n. 价格，价钱",
    "example": ""
  },
  {
    "id": 1256,
    "word": "pride",
    "phonetic": "/praɪd/",
    "meaning": "n. 自豪，骄傲",
    "example": ""
  },
  {
    "id": 1257,
    "word": "print",
    "phonetic": "/prɪnt/",
    "meaning": "vt. 印刷",
    "example": ""
  },
  {
    "id": 1258,
    "word": "prize",
    "phonetic": "/praɪz/",
    "meaning": "n. 奖赏，奖品",
    "example": ""
  },
  {
    "id": 1259,
    "word": "probable",
    "phonetic": "/ˈprɔbəb(ə)l/",
    "meaning": "a. 很可能,很有希望的",
    "example": ""
  },
  {
    "id": 1260,
    "word": "probably",
    "phonetic": "/ˈprɔbəb(ə)lɪ/",
    "meaning": "ad. 很可能，大概",
    "example": ""
  },
  {
    "id": 1261,
    "word": "problem",
    "phonetic": "/ˈprɔbləm/",
    "meaning": "n. 问题，难题",
    "example": ""
  },
  {
    "id": 1262,
    "word": "produce",
    "phonetic": "/prəˈdjuːs; (US) -ˈduːs/",
    "meaning": "vt. 生产；制造",
    "example": ""
  },
  {
    "id": 1263,
    "word": "professor",
    "phonetic": "/prəˈfesə(r)/",
    "meaning": "n. 教授",
    "example": ""
  },
  {
    "id": 1264,
    "word": "programme",
    "phonetic": "",
    "meaning": "(美program) [ˈprəʊɡræm] n. 节目；项目",
    "example": ""
  },
  {
    "id": 1265,
    "word": "progress",
    "phonetic": "/ˈprəʊɡres; (US) ˈprɔɡres/",
    "meaning": "n. 进步,上进 vi. 进展,进行",
    "example": ""
  },
  {
    "id": 1266,
    "word": "promise",
    "phonetic": "/ˈprɔmɪs/",
    "meaning": "n.& vi. 答应，允诺",
    "example": ""
  },
  {
    "id": 1267,
    "word": "pronounce",
    "phonetic": "/prəˈnaʊns/",
    "meaning": "vt. 发音",
    "example": ""
  },
  {
    "id": 1268,
    "word": "pronunciation",
    "phonetic": "/prənʌnsɪˈeɪʃ(ə)n/",
    "meaning": "n. 发音",
    "example": ""
  },
  {
    "id": 1269,
    "word": "proper",
    "phonetic": "/ˈprɔpə(r)/",
    "meaning": "a. 恰当的，合适的",
    "example": ""
  },
  {
    "id": 1270,
    "word": "protect",
    "phonetic": "/prəˈtekt/",
    "meaning": "vt. 保护",
    "example": ""
  },
  {
    "id": 1271,
    "word": "proud",
    "phonetic": "/praʊd/",
    "meaning": "a. 自豪的；骄傲的",
    "example": ""
  },
  {
    "id": 1272,
    "word": "provide",
    "phonetic": "/prəˈvaɪd/",
    "meaning": "vt. 提供",
    "example": ""
  },
  {
    "id": 1273,
    "word": "province",
    "phonetic": "/ˈprɔvɪns/",
    "meaning": "n. 省",
    "example": ""
  },
  {
    "id": 1274,
    "word": "public",
    "phonetic": "/ˈpʌblɪk/",
    "meaning": "a. 公共,公众的 n. 公众",
    "example": ""
  },
  {
    "id": 1275,
    "word": "pull",
    "phonetic": "/pʊl/",
    "meaning": "拉，拖 n. 拉力，引力",
    "example": ""
  },
  {
    "id": 1277,
    "word": "purple",
    "phonetic": "/ˈpɜːp(ə)l/",
    "meaning": "n. / a. 紫色",
    "example": ""
  },
  {
    "id": 1278,
    "word": "purse",
    "phonetic": "/pɜːs/",
    "meaning": "n. 钱包",
    "example": ""
  },
  {
    "id": 1279,
    "word": "push",
    "phonetic": "/pʊʃ/",
    "meaning": "n.& v. 推",
    "example": ""
  },
  {
    "id": 1281,
    "word": "pyramid",
    "phonetic": "/pɪrəmɪd/",
    "meaning": "n.(古埃及)金字塔",
    "example": ""
  },
  {
    "id": 1282,
    "word": "quarrel",
    "phonetic": "/ˈkwɔrəl; (US) ˈkwɔːrəl/",
    "meaning": "vi. 争吵，吵架",
    "example": ""
  },
  {
    "id": 1283,
    "word": "quarter",
    "phonetic": "/ˈkwɔːtə(r)/",
    "meaning": "n. 四分之一，一刻钟",
    "example": ""
  },
  {
    "id": 1284,
    "word": "queen",
    "phonetic": "/kwiːn/",
    "meaning": "n. 皇后，女王",
    "example": ""
  },
  {
    "id": 1285,
    "word": "question",
    "phonetic": "/ˈkwestʃ(ə)n/",
    "meaning": "vt. 询问 n. 问题",
    "example": ""
  },
  {
    "id": 1286,
    "word": "queue",
    "phonetic": "/kjuː/",
    "meaning": "n. 行列，长队",
    "example": ""
  },
  {
    "id": 1287,
    "word": "quick",
    "phonetic": "/kwɪk/",
    "meaning": "a. 快；敏捷的；急剧的",
    "example": ""
  },
  {
    "id": 1288,
    "word": "quiet",
    "phonetic": "/ˈkwaɪət/",
    "meaning": "a. 安静的；寂静的",
    "example": ""
  },
  {
    "id": 1289,
    "word": "quilt",
    "phonetic": "/kwɪlt/",
    "meaning": "n. 被子；被状物",
    "example": ""
  },
  {
    "id": 1290,
    "word": "quit",
    "phonetic": "/kwɪt/",
    "meaning": "v. 离任，离校，戒掉",
    "example": ""
  },
  {
    "id": 1291,
    "word": "quite",
    "phonetic": "/kwaɪt/",
    "meaning": "ad. 完全，十分",
    "example": ""
  },
  {
    "id": 1292,
    "word": "quiz",
    "phonetic": "/kwɪz/",
    "meaning": "n. 测验，小型考试",
    "example": ""
  },
  {
    "id": 1293,
    "word": "rabbit",
    "phonetic": "/ˈræbɪt/",
    "meaning": "n. 兔，家兔",
    "example": ""
  },
  {
    "id": 1294,
    "word": "race",
    "phonetic": "/reɪs/",
    "meaning": "n. 种族，民族 v.（速度）竞赛，比赛 n. 赛跑，竞赛",
    "example": ""
  },
  {
    "id": 1295,
    "word": "radio",
    "phonetic": "/reɪdɪəʊ/",
    "meaning": "n. 无线电，收音机",
    "example": ""
  },
  {
    "id": 1296,
    "word": "rail",
    "phonetic": "/reɪl/",
    "meaning": "n. 铁路",
    "example": ""
  },
  {
    "id": 1297,
    "word": "railway",
    "phonetic": "/ˈreɪlweɪ/",
    "meaning": "n. 铁路；铁道",
    "example": ""
  },
  {
    "id": 1299,
    "word": "raincoat",
    "phonetic": "/ˈreɪnkəʊt/",
    "meaning": "n. 雨衣",
    "example": ""
  },
  {
    "id": 1300,
    "word": "rainy",
    "phonetic": "/ˈreɪnɪ/",
    "meaning": "a. 下雨的；多雨的",
    "example": ""
  },
  {
    "id": 1301,
    "word": "raise",
    "phonetic": "/reɪz/",
    "meaning": "vt. 使升高；饲养",
    "example": ""
  },
  {
    "id": 1302,
    "word": "rat",
    "phonetic": "/ræt/",
    "meaning": "n. 老鼠",
    "example": ""
  },
  {
    "id": 1303,
    "word": "rather",
    "phonetic": "/ˈrɑːðə; (US) ˈræðər/",
    "meaning": "ad. 相当，宁可",
    "example": ""
  },
  {
    "id": 1304,
    "word": "reach",
    "phonetic": "/riːtʃ/",
    "meaning": "v. 到达,伸手(脚)够到",
    "example": ""
  },
  {
    "id": 1306,
    "word": "ready",
    "phonetic": "/ˈredɪ/",
    "meaning": "a. 准备好的",
    "example": ""
  },
  {
    "id": 1307,
    "word": "real",
    "phonetic": "/riːl/",
    "meaning": "a. 真实的，确实的",
    "example": ""
  },
  {
    "id": 1308,
    "word": "realise",
    "phonetic": "",
    "meaning": "(美realize) [ˈrɪəlaɪz] vt. 认识到,实现",
    "example": ""
  },
  {
    "id": 1309,
    "word": "really v",
    "phonetic": "/ˈrɪəlɪ/",
    "meaning": "ad. 真正地；到底；确实",
    "example": ""
  },
  {
    "id": 1310,
    "word": "reason",
    "phonetic": "/ˈriːz(ə)n/",
    "meaning": "n. 理由,原因",
    "example": ""
  },
  {
    "id": 1311,
    "word": "receive",
    "phonetic": "/rɪˈsiːv/",
    "meaning": "v. 收到，得到",
    "example": ""
  },
  {
    "id": 1312,
    "word": "recent",
    "phonetic": "/ˈriːsənt/",
    "meaning": "a. 近来的，最近的",
    "example": ""
  },
  {
    "id": 1313,
    "word": "record",
    "phonetic": "/ˈrekɔːd; (US) ˈrekərd/",
    "meaning": "n. 记录；唱片",
    "example": ""
  },
  {
    "id": 1314,
    "word": "recycle",
    "phonetic": "/riːˈsaɪk(ə)l/",
    "meaning": "vt. 回收；再循环",
    "example": ""
  },
  {
    "id": 1316,
    "word": "refuse",
    "phonetic": "/rɪˈfjuːz/",
    "meaning": "vi. 拒绝，不愿",
    "example": ""
  },
  {
    "id": 1317,
    "word": "regard",
    "phonetic": "/rɪˈɡɑːd/",
    "meaning": "v. 把…看作",
    "example": ""
  },
  {
    "id": 1318,
    "word": "regret",
    "phonetic": "/rɪˈɡret/",
    "meaning": "n./ vt. 可惜,遗憾;痛惜;哀悼",
    "example": ""
  },
  {
    "id": 1319,
    "word": "regulation",
    "phonetic": "/reɡjʊˈleɪʃ(ə)n/",
    "meaning": "n. 规则，规章",
    "example": ""
  },
  {
    "id": 1320,
    "word": "relax",
    "phonetic": "/rɪˈlæks/",
    "meaning": "v.（使）放松，轻松",
    "example": ""
  },
  {
    "id": 1321,
    "word": "relay",
    "phonetic": "/ˈriːleɪ/",
    "meaning": "n. 接力，接替人，中转 v. 接替，补充；转运",
    "example": ""
  },
  {
    "id": 1322,
    "word": "remain",
    "phonetic": "/rɪˈmeɪn/",
    "meaning": "vt. 余下,留下 vi. 保持,仍是",
    "example": ""
  },
  {
    "id": 1323,
    "word": "remember",
    "phonetic": "/rɪˈmembə(r)/",
    "meaning": "v. 记得，想起",
    "example": ""
  },
  {
    "id": 1324,
    "word": "rent",
    "phonetic": "/rent/",
    "meaning": "n.& v. 租金",
    "example": ""
  },
  {
    "id": 1325,
    "word": "repair",
    "phonetic": "/rɪˈpeə(r)/",
    "meaning": "n.& vt. 修理；修补",
    "example": ""
  },
  {
    "id": 1326,
    "word": "repeat",
    "phonetic": "/rɪˈpiːt/",
    "meaning": "vt. 重说，重做",
    "example": ""
  },
  {
    "id": 1327,
    "word": "reply",
    "phonetic": "/rɪˈplaɪ/",
    "meaning": "n. 回答，答复",
    "example": ""
  },
  {
    "id": 1328,
    "word": "report",
    "phonetic": "/rɪˈpɔːt/",
    "meaning": "n.& v. 报道，报告",
    "example": ""
  },
  {
    "id": 1329,
    "word": "research",
    "phonetic": "/rɪˈsɜːtʃ/",
    "meaning": "n. 研究，调查",
    "example": ""
  },
  {
    "id": 1330,
    "word": "rest",
    "phonetic": "/rest/",
    "meaning": "n. 休息；剩余的部分，其余的人（物） vi. 休息，歇息",
    "example": ""
  },
  {
    "id": 1331,
    "word": "restaurant",
    "phonetic": "/ˈrestərɔnt; (US) ˈrestərənt/",
    "meaning": "n. 饭馆, 饭店",
    "example": ""
  },
  {
    "id": 1332,
    "word": "result",
    "phonetic": "/rɪˈzʌlt/",
    "meaning": "n. 结果，效果",
    "example": ""
  },
  {
    "id": 1333,
    "word": "return",
    "phonetic": "/rɪˈtɜːn/",
    "meaning": "v. 归还",
    "example": ""
  },
  {
    "id": 1334,
    "word": "review",
    "phonetic": "/rɪˈvjuː/",
    "meaning": "vt. 重新调查；回顾；复习 n. 复查；复习；评论",
    "example": ""
  },
  {
    "id": 1336,
    "word": "rich",
    "phonetic": "/rɪtʃ/",
    "meaning": "a. 富裕的，有钱的",
    "example": ""
  },
  {
    "id": 1337,
    "word": "riddle",
    "phonetic": "/ˈrɪd(ə)l/",
    "meaning": "n. 谜(语)",
    "example": ""
  },
  {
    "id": 1338,
    "word": "ride",
    "phonetic": "",
    "meaning": "(rode, ridden) [raɪd] v. 骑（马、自行车）；乘车 n. 乘车旅行",
    "example": ""
  },
  {
    "id": 1340,
    "word": "ring",
    "phonetic": "",
    "meaning": "(rang, rung) [rɪŋ] v.（钟、铃等）响；打电话 n. 铃声 n. 环形物（如环、圈、戒指等）",
    "example": ""
  },
  {
    "id": 1341,
    "word": "rise",
    "phonetic": "",
    "meaning": "(rose, risen) [raɪz] vi. 上升，上涨",
    "example": ""
  },
  {
    "id": 1343,
    "word": "road",
    "phonetic": "/rəud/",
    "meaning": "n. 路，道路",
    "example": ""
  },
  {
    "id": 1344,
    "word": "rob",
    "phonetic": "/rɔb/",
    "meaning": "v. 抢夺，抢劫",
    "example": ""
  },
  {
    "id": 1345,
    "word": "robot",
    "phonetic": "/ˈrəubɔt/",
    "meaning": "n. 机器人",
    "example": ""
  },
  {
    "id": 1346,
    "word": "rock",
    "phonetic": "/rɔk/",
    "meaning": "n. 岩石,大石头 vt. 摇,摇晃",
    "example": ""
  },
  {
    "id": 1348,
    "word": "rose",
    "phonetic": "/rəuz/",
    "meaning": "n. 玫瑰花",
    "example": ""
  },
  {
    "id": 1349,
    "word": "rough",
    "phonetic": "/rʌf/",
    "meaning": "a. 粗糙的，粗略的",
    "example": ""
  },
  {
    "id": 1350,
    "word": "round",
    "phonetic": "/raund/",
    "meaning": "ad. 转过来 prep. 环绕一周，围着 a. 圆的；球形的",
    "example": ""
  },
  {
    "id": 1351,
    "word": "row",
    "phonetic": "/rəu/",
    "meaning": "n.（一）排,（一）行 v. 划船",
    "example": ""
  },
  {
    "id": 1352,
    "word": "rubber",
    "phonetic": "/ˈrʌbə(r)/",
    "meaning": "n. 橡胶；合成橡胶",
    "example": ""
  },
  {
    "id": 1353,
    "word": "rubbish",
    "phonetic": "/ˈrʌbiːʃ/",
    "meaning": "n. 垃圾；废物",
    "example": ""
  },
  {
    "id": 1354,
    "word": "rude",
    "phonetic": "/ruːd/",
    "meaning": "a. 无理的, 粗鲁的",
    "example": ""
  },
  {
    "id": 1355,
    "word": "rule",
    "phonetic": "/ruːl/",
    "meaning": "n. 规则,规定 vt. 统治,支配",
    "example": ""
  },
  {
    "id": 1358,
    "word": "runner",
    "phonetic": "/ˈrʌnə(r)/",
    "meaning": "n. 赛跑者；操作者；滑行装置",
    "example": ""
  },
  {
    "id": 1359,
    "word": "rush",
    "phonetic": "/rʌʃ/",
    "meaning": "vi. 冲，奔跑",
    "example": ""
  },
  {
    "id": 1360,
    "word": "Russia",
    "phonetic": "/ˈrʌʃə/",
    "meaning": "n. 俄罗斯，俄国",
    "example": ""
  },
  {
    "id": 1361,
    "word": "Russian",
    "phonetic": "/ˈrʌʃ(ə)n/",
    "meaning": "a. 俄国人的，俄语的 n. 俄国人，俄语",
    "example": ""
  },
  {
    "id": 1363,
    "word": "safe",
    "phonetic": "/seɪf/",
    "meaning": "a. 安全的 n. 保险柜",
    "example": ""
  },
  {
    "id": 1364,
    "word": "safety",
    "phonetic": "/ˈseɪftɪ/",
    "meaning": "n. 安全，保险",
    "example": ""
  },
  {
    "id": 1365,
    "word": "sail",
    "phonetic": "/seɪl/",
    "meaning": "n. 航行 v. 航行，开航",
    "example": ""
  },
  {
    "id": 1366,
    "word": "salad",
    "phonetic": "/ˈsæləd/",
    "meaning": "n. 色拉",
    "example": ""
  },
  {
    "id": 1367,
    "word": "sale",
    "phonetic": "/seɪl/",
    "meaning": "n. 卖，出售",
    "example": ""
  },
  {
    "id": 1368,
    "word": "salesgirl",
    "phonetic": "/ˈseɪlzɡɜːl/",
    "meaning": "n. 女售货员",
    "example": ""
  },
  {
    "id": 1369,
    "word": "salesman",
    "phonetic": "/ˈseɪlzmən/",
    "meaning": "n. 男售货员",
    "example": ""
  },
  {
    "id": 1370,
    "word": "saleswoman",
    "phonetic": "/seɪlzwʊmən/",
    "meaning": "n. 女售货员",
    "example": ""
  },
  {
    "id": 1371,
    "word": "salt",
    "phonetic": "/sɔːlt, sɔlt/",
    "meaning": "n. 盐",
    "example": ""
  },
  {
    "id": 1372,
    "word": "same",
    "phonetic": "/seɪm/",
    "meaning": "n. 同样的事 a. 同样的,同一",
    "example": ""
  },
  {
    "id": 1373,
    "word": "sand",
    "phonetic": "/sænd/",
    "meaning": "n. 沙，沙子",
    "example": ""
  },
  {
    "id": 1374,
    "word": "sandwich",
    "phonetic": "/ˈsænwɪdʒ/",
    "meaning": "n. 三明治（夹心面包片）",
    "example": ""
  },
  {
    "id": 1375,
    "word": "satellite",
    "phonetic": "/ˈsætəlaɪt/",
    "meaning": "n. 卫星",
    "example": ""
  },
  {
    "id": 1376,
    "word": "satisfaction",
    "phonetic": "/sætɪsˈfækʃ(ə)n/",
    "meaning": "n. 满意",
    "example": ""
  },
  {
    "id": 1377,
    "word": "satisfy",
    "phonetic": "/ˈsætɪsfaɪ/",
    "meaning": "vt. 满足，使满意",
    "example": ""
  },
  {
    "id": 1378,
    "word": "Saturday",
    "phonetic": "/ˈsætədɪ/",
    "meaning": "n. 星期六",
    "example": ""
  },
  {
    "id": 1379,
    "word": "save",
    "phonetic": "/seɪv/",
    "meaning": "vt. 救，挽救，节省",
    "example": ""
  },
  {
    "id": 1381,
    "word": "scenery",
    "phonetic": "/ˈsiːnərɪ/",
    "meaning": "n. 风景，景色，风光",
    "example": ""
  },
  {
    "id": 1384,
    "word": "schoolmate",
    "phonetic": "/ˈskuːlmeɪt/",
    "meaning": "n. 同校同学",
    "example": ""
  },
  {
    "id": 1386,
    "word": "scientific",
    "phonetic": "/saɪənˈtɪfɪk/",
    "meaning": "a. 科学的",
    "example": ""
  },
  {
    "id": 1387,
    "word": "scientist",
    "phonetic": "/ˈsaɪəntɪst/",
    "meaning": "n. 科学家",
    "example": ""
  },
  {
    "id": 1388,
    "word": "scissors",
    "phonetic": "/ˈsɪzəz/",
    "meaning": "n. 剪刀，剪子",
    "example": ""
  },
  {
    "id": 1389,
    "word": "score",
    "phonetic": "/skɔː(r)/",
    "meaning": "n.& v. 得分，分数,二十",
    "example": ""
  },
  {
    "id": 1390,
    "word": "screen",
    "phonetic": "/skriːn/",
    "meaning": "n. 幕，荧光屏",
    "example": ""
  },
  {
    "id": 1391,
    "word": "sea",
    "phonetic": "/siː/",
    "meaning": "n. 海，海洋",
    "example": ""
  },
  {
    "id": 1392,
    "word": "seagull",
    "phonetic": "/ˈsiːɡʌl/",
    "meaning": "n. 海鸥",
    "example": ""
  },
  {
    "id": 1393,
    "word": "search",
    "phonetic": "/sɜːtʃ/",
    "meaning": "n.& v. 搜寻，搜查",
    "example": ""
  },
  {
    "id": 1395,
    "word": "seat",
    "phonetic": "/siːt/",
    "meaning": "n. 座位，座",
    "example": ""
  },
  {
    "id": 1396,
    "word": "second",
    "phonetic": "/ˈsekənd/",
    "meaning": "n. 秒 num. 第二 a. 第二的",
    "example": ""
  },
  {
    "id": 1397,
    "word": "secondhand",
    "phonetic": "/'sekənd'hænd/",
    "meaning": "n. 二手货; 旧货",
    "example": ""
  },
  {
    "id": 1398,
    "word": "secret",
    "phonetic": "/ˈsiːkrɪt/",
    "meaning": "n. 秘密，内情",
    "example": ""
  },
  {
    "id": 1399,
    "word": "secretary",
    "phonetic": "/ˈsekrətərɪ/",
    "meaning": "n. 秘书；书记",
    "example": ""
  },
  {
    "id": 1401,
    "word": "seem",
    "phonetic": "/siːm/",
    "meaning": "v. 似乎，好像",
    "example": ""
  },
  {
    "id": 1402,
    "word": "seldom",
    "phonetic": "/ˈseldəm/",
    "meaning": "ad. 很少，不常",
    "example": ""
  },
  {
    "id": 1403,
    "word": "sell",
    "phonetic": "",
    "meaning": "(sold, sold) [sel] v. 卖，售",
    "example": ""
  },
  {
    "id": 1404,
    "word": "send",
    "phonetic": "",
    "meaning": "(sent, sent) [send] v. 打发，派遣；送，邮寄",
    "example": ""
  },
  {
    "id": 1405,
    "word": "sentence",
    "phonetic": "/ˈsent(ə)ns/",
    "meaning": "n. 句子",
    "example": ""
  },
  {
    "id": 1406,
    "word": "separate",
    "phonetic": "/ˈsepərət/",
    "meaning": "v. 使分开，使分离 a. 单独的，分开的",
    "example": ""
  },
  {
    "id": 1407,
    "word": "September",
    "phonetic": "/səpˈtembə(r)/",
    "meaning": "n. 9月",
    "example": ""
  },
  {
    "id": 1408,
    "word": "serious",
    "phonetic": "/ˈsɪərɪəs/",
    "meaning": "a. 严肃的,严重的,认真的",
    "example": ""
  },
  {
    "id": 1409,
    "word": "servant",
    "phonetic": "/ˈsɜːvənt/",
    "meaning": "n. 仆人，佣人",
    "example": ""
  },
  {
    "id": 1410,
    "word": "serve",
    "phonetic": "/sɜːv/",
    "meaning": "vt. 招待（顾客等）,服务",
    "example": ""
  },
  {
    "id": 1411,
    "word": "set",
    "phonetic": "",
    "meaning": "(set, set) [set] vt. 释放，安置 n. 装备，设备",
    "example": ""
  },
  {
    "id": 1412,
    "word": "seven",
    "phonetic": "/ˈsev(ə)n/",
    "meaning": "num. 七",
    "example": ""
  },
  {
    "id": 1413,
    "word": "seventeen",
    "phonetic": "/sevənˈtiːn/",
    "meaning": "num. 十七",
    "example": ""
  },
  {
    "id": 1414,
    "word": "seventh",
    "phonetic": "/ˈsevənθ/",
    "meaning": "num. 第七",
    "example": ""
  },
  {
    "id": 1415,
    "word": "seventy",
    "phonetic": "/ˈsevəntɪ/",
    "meaning": "num. 七十",
    "example": ""
  },
  {
    "id": 1416,
    "word": "several",
    "phonetic": "/ˈsevr(ə)l/",
    "meaning": "pron. 几个,数个 a. 若干",
    "example": ""
  },
  {
    "id": 1417,
    "word": "severe",
    "phonetic": "/sɪˈvɪə(r)/",
    "meaning": "a. 极为恶劣,十分严重的",
    "example": ""
  },
  {
    "id": 1418,
    "word": "shall (should)",
    "phonetic": "/ʃæl, ʃ(ə)l/",
    "meaning": "v. aux.（表示将来）将要，会；…好吗",
    "example": ""
  },
  {
    "id": 1419,
    "word": "shape",
    "phonetic": "/ʃeɪp/",
    "meaning": "n. 形状，外形 v. 使成型，制造，塑造",
    "example": ""
  },
  {
    "id": 1420,
    "word": "share",
    "phonetic": "/ʃeə(r)/",
    "meaning": "vt. 分享，共同使用",
    "example": ""
  },
  {
    "id": 1421,
    "word": "sharp",
    "phonetic": "/ʃɑːp/",
    "meaning": "a. 锋利的，尖的",
    "example": ""
  },
  {
    "id": 1422,
    "word": "sharpen",
    "phonetic": "/ˈʃɑːpən/",
    "meaning": "v.（使）变锐利，削尖",
    "example": ""
  },
  {
    "id": 1423,
    "word": "sharpener",
    "phonetic": "/ˈʃɑːpənə(r)/",
    "meaning": "n. 削尖用的器具",
    "example": ""
  },
  {
    "id": 1426,
    "word": "sheet",
    "phonetic": "/ʃiːt/",
    "meaning": "n. 成幅的薄片，薄板",
    "example": ""
  },
  {
    "id": 1427,
    "word": "shelf",
    "phonetic": "",
    "meaning": "(复 shelves) [ʃelf] n. 架子；搁板；格层；礁；陆架",
    "example": ""
  },
  {
    "id": 1428,
    "word": "shine",
    "phonetic": "/ʃaɪn/",
    "meaning": "n. 光泽；光彩；阳光；晴天；光(亮)",
    "example": ""
  },
  {
    "id": 1429,
    "word": "shine",
    "phonetic": "",
    "meaning": "(shone, shone或-d, -d) [ʃaɪn] v. 发光；照耀；杰出；擦亮",
    "example": ""
  },
  {
    "id": 1433,
    "word": "shoot",
    "phonetic": "/ʃuːt/",
    "meaning": "(shot, shot) vt. 射击，射中，发射",
    "example": ""
  },
  {
    "id": 1435,
    "word": "shopping",
    "phonetic": "/ˈʃɔpɪŋ/",
    "meaning": "n. 买东西",
    "example": ""
  },
  {
    "id": 1436,
    "word": "shore",
    "phonetic": "/ʃɔː(r)/",
    "meaning": "n. 滨，岸",
    "example": ""
  },
  {
    "id": 1438,
    "word": "shot",
    "phonetic": "/ʃɔt/",
    "meaning": "n. 射击，开枪，开炮，射击声；子弹",
    "example": ""
  },
  {
    "id": 1439,
    "word": "should",
    "phonetic": "/ʃud/",
    "meaning": "v. mod. 应当，应该，会 v. aux. 会,应该（shall的过去时态）",
    "example": ""
  },
  {
    "id": 1440,
    "word": "shout",
    "phonetic": "/ˈʃaut/",
    "meaning": "n.& v. 喊，高声呼喊",
    "example": ""
  },
  {
    "id": 1441,
    "word": "show",
    "phonetic": "/ʃəʊ/",
    "meaning": "n. 展示,展览（会）;演出",
    "example": ""
  },
  {
    "id": 1442,
    "word": "show",
    "phonetic": "/ʃəʊ/",
    "meaning": "(showed, shown 或 showed)  v. 给…看,出示,显示",
    "example": ""
  },
  {
    "id": 1443,
    "word": "shower",
    "phonetic": "/ˈʃaʊə(r)/",
    "meaning": "n. 阵雨；淋浴",
    "example": ""
  },
  {
    "id": 1444,
    "word": "shut",
    "phonetic": "",
    "meaning": "(shut, shut) [ʃʌt] v. / n. 关上，封闭；禁闭；",
    "example": ""
  },
  {
    "id": 1445,
    "word": "shy",
    "phonetic": "/ʃaɪ/",
    "meaning": "a. 害羞的",
    "example": ""
  },
  {
    "id": 1446,
    "word": "sick",
    "phonetic": "/sɪk/",
    "meaning": "a. 有病,患病的,（想）呕吐",
    "example": ""
  },
  {
    "id": 1447,
    "word": "side",
    "phonetic": "/said/",
    "meaning": "n. 边，旁边，面，侧面",
    "example": ""
  },
  {
    "id": 1448,
    "word": "sign",
    "phonetic": "/sain/",
    "meaning": "n. 符号，标记",
    "example": ""
  },
  {
    "id": 1449,
    "word": "silence",
    "phonetic": "/ˈsailəns/",
    "meaning": "n. 安静，沉默",
    "example": ""
  },
  {
    "id": 1450,
    "word": "silk",
    "phonetic": "/silk/",
    "meaning": "n.（蚕）丝，丝织品",
    "example": ""
  },
  {
    "id": 1451,
    "word": "silly",
    "phonetic": "/ˈsili/",
    "meaning": "a. 傻的，愚蠢的",
    "example": ""
  },
  {
    "id": 1452,
    "word": "simple",
    "phonetic": "/ˈsimp(ə)l/",
    "meaning": "a. 简单的，简易的",
    "example": ""
  },
  {
    "id": 1453,
    "word": "since",
    "phonetic": "/sins/",
    "meaning": "ad. 从那时以来 conj. 从…以来，…以后，由于 prep. 从…以来",
    "example": ""
  },
  {
    "id": 1455,
    "word": "singer",
    "phonetic": "/siŋə/",
    "meaning": "n. 歌唱家，歌手",
    "example": ""
  },
  {
    "id": 1456,
    "word": "single",
    "phonetic": "/ˈsiŋɡ(ə)l/",
    "meaning": "a. 单一的，单个的",
    "example": ""
  },
  {
    "id": 1457,
    "word": "sink",
    "phonetic": "",
    "meaning": "(sank, sunk) [siŋk] vi. 下沉；消沉  n. 洗涤槽；污水槽",
    "example": ""
  },
  {
    "id": 1458,
    "word": "sir",
    "phonetic": "/səː (r)/",
    "meaning": "n. 先生；阁下",
    "example": ""
  },
  {
    "id": 1461,
    "word": "situation",
    "phonetic": "/sɪtjʊˈeɪʃ(ə)n/",
    "meaning": "n. 形势，情况",
    "example": ""
  },
  {
    "id": 1462,
    "word": "six",
    "phonetic": "/sɪks/",
    "meaning": "num. 六",
    "example": ""
  },
  {
    "id": 1463,
    "word": "sixth",
    "phonetic": "/sɪksθ/",
    "meaning": "num. 第六",
    "example": ""
  },
  {
    "id": 1464,
    "word": "sixty",
    "phonetic": "/ˈsɪkstɪ/",
    "meaning": "num. 六十",
    "example": ""
  },
  {
    "id": 1465,
    "word": "sixteen",
    "phonetic": "/ˈsɪkstiːn/",
    "meaning": "num. 十六",
    "example": ""
  },
  {
    "id": 1466,
    "word": "sixteenth",
    "phonetic": "/sɪksˈtiːnθ/",
    "meaning": "num. 第十六",
    "example": ""
  },
  {
    "id": 1467,
    "word": "size",
    "phonetic": "/saiz/",
    "meaning": "n. 尺寸，大小",
    "example": ""
  },
  {
    "id": 1468,
    "word": "skate",
    "phonetic": "/skeɪt/",
    "meaning": "vi. 溜冰，滑冰",
    "example": ""
  },
  {
    "id": 1469,
    "word": "skateboard",
    "phonetic": "/ˈskeɪtbɔːd/",
    "meaning": "n. 冰鞋，滑板",
    "example": ""
  },
  {
    "id": 1470,
    "word": "ski",
    "phonetic": "/skiː/",
    "meaning": "n.& vi. 滑雪板；滑雪",
    "example": ""
  },
  {
    "id": 1472,
    "word": "sky",
    "phonetic": "/skaɪ/",
    "meaning": "n. 天；天空",
    "example": ""
  },
  {
    "id": 1476,
    "word": "smell",
    "phonetic": "",
    "meaning": "(smelt, smelt / -ed,-ed) [smel] v. 嗅，闻到；发气味 n. 气味",
    "example": ""
  },
  {
    "id": 1477,
    "word": "smile",
    "phonetic": "/smaɪl/",
    "meaning": "n.& v. 微笑",
    "example": ""
  },
  {
    "id": 1478,
    "word": "smoke",
    "phonetic": "/sməʊk/",
    "meaning": "n. 烟 v. 冒烟；吸烟",
    "example": ""
  },
  {
    "id": 1479,
    "word": "smoking",
    "phonetic": "/ˈsməʊkɪŋ/",
    "meaning": "n. 吸烟,抽烟;冒烟",
    "example": ""
  },
  {
    "id": 1480,
    "word": "snake",
    "phonetic": "/sneɪk/",
    "meaning": "n. 蛇 v. 蛇般爬行;蜿蜒行进",
    "example": ""
  },
  {
    "id": 1482,
    "word": "so",
    "phonetic": "/səʊ/",
    "meaning": "ad. 如此，这么；非常；同样 conj. 因此，所以",
    "example": ""
  },
  {
    "id": 1483,
    "word": "soap",
    "phonetic": "/səʊp/",
    "meaning": "n. 肥皂",
    "example": ""
  },
  {
    "id": 1484,
    "word": "society",
    "phonetic": "/səˈsaɪətɪ/",
    "meaning": "n. 社会",
    "example": ""
  },
  {
    "id": 1486,
    "word": "sofa",
    "phonetic": "/səʊfə/",
    "meaning": "n.（长）沙发",
    "example": ""
  },
  {
    "id": 1487,
    "word": "soft",
    "phonetic": "/sɔft; (US) sɔːft/",
    "meaning": "a. 软的，柔和的",
    "example": ""
  },
  {
    "id": 1488,
    "word": "soil",
    "phonetic": "/sɔɪl/",
    "meaning": "n. 土壤，土地",
    "example": ""
  },
  {
    "id": 1489,
    "word": "soldier",
    "phonetic": "/ˈsəʊldʒə(r)/",
    "meaning": "n. 士兵，战士",
    "example": ""
  },
  {
    "id": 1491,
    "word": "somebody",
    "phonetic": "/ˈsʌmbɔdɪ/",
    "meaning": "pron. 某人；有人；有名气的人",
    "example": ""
  },
  {
    "id": 1492,
    "word": "someone",
    "phonetic": "/ˈsʌmwʌn/",
    "meaning": "pron. 某一个人",
    "example": ""
  },
  {
    "id": 1493,
    "word": "something",
    "phonetic": "/ˈsʌmθɪŋ/",
    "meaning": "pron. 某事；某物",
    "example": ""
  },
  {
    "id": 1495,
    "word": "somewhere",
    "phonetic": "/ˈsʌmweə/",
    "meaning": "ad. 在某处",
    "example": ""
  },
  {
    "id": 1496,
    "word": "son",
    "phonetic": "/sʌn/",
    "meaning": "n. 儿子",
    "example": ""
  },
  {
    "id": 1498,
    "word": "soon",
    "phonetic": "/suːn/",
    "meaning": "ad. 不久,很快,一会儿",
    "example": ""
  },
  {
    "id": 1500,
    "word": "so-so",
    "phonetic": "/səʊ-səʊ/",
    "meaning": "a. 一般；不怎么样；凑合",
    "example": ""
  },
  {
    "id": 1501,
    "word": "sound",
    "phonetic": "/saʊnd/",
    "meaning": "vi. 听起来,发出声音 n. 声音",
    "example": ""
  },
  {
    "id": 1503,
    "word": "sour",
    "phonetic": "/ˈsauə(r)/",
    "meaning": "a. 酸的，馊的",
    "example": ""
  },
  {
    "id": 1504,
    "word": "south",
    "phonetic": "/ˈsauθ/",
    "meaning": "a. 南(方)的 ad. 在南方；向南方 n. 南；南方；南部",
    "example": ""
  },
  {
    "id": 1505,
    "word": "southeast",
    "phonetic": "/‚sauθ'iːst/",
    "meaning": "n. 东南",
    "example": ""
  },
  {
    "id": 1506,
    "word": "southern",
    "phonetic": "/'sʌð(ə)n/",
    "meaning": "a. 南部的，南方的",
    "example": ""
  },
  {
    "id": 1507,
    "word": "southwest",
    "phonetic": "/sauθ'west/",
    "meaning": "n. 西南",
    "example": ""
  },
  {
    "id": 1508,
    "word": "sow",
    "phonetic": "",
    "meaning": "(sowed, sown或-ed) [səu] vt. 播种",
    "example": ""
  },
  {
    "id": 1509,
    "word": "space",
    "phonetic": "/speɪs/",
    "meaning": "n. 空间",
    "example": ""
  },
  {
    "id": 1510,
    "word": "spaceship",
    "phonetic": "/ˈspeɪsʃɪp/",
    "meaning": "n. 宇宙飞船",
    "example": ""
  },
  {
    "id": 1511,
    "word": "Spanish",
    "phonetic": "/ˈspænɪʃ/",
    "meaning": "a. 西班牙人的，西班牙的，西班牙语的 n. 西班牙语",
    "example": ""
  },
  {
    "id": 1513,
    "word": "special",
    "phonetic": "/ˈspeʃ(ə)l/",
    "meaning": "a. 特别的，专门的",
    "example": ""
  },
  {
    "id": 1514,
    "word": "speech",
    "phonetic": "/spiːtʃ/",
    "meaning": "n. 演讲",
    "example": ""
  },
  {
    "id": 1515,
    "word": "speed",
    "phonetic": "/spiːd/",
    "meaning": "n. 速度 v.（使）加速",
    "example": ""
  },
  {
    "id": 1516,
    "word": "spell",
    "phonetic": "/spel/",
    "meaning": "vt. 拼写",
    "example": ""
  },
  {
    "id": 1517,
    "word": "spirit",
    "phonetic": "/ˈspɪrɪt/",
    "meaning": "n. 精神",
    "example": ""
  },
  {
    "id": 1518,
    "word": "spit",
    "phonetic": "/spɪt/",
    "meaning": "v. 吐唾沫；吐痰",
    "example": ""
  },
  {
    "id": 1519,
    "word": "splendid",
    "phonetic": "/ˈsplendɪd/",
    "meaning": "a. 灿烂的，辉煌的；（口语）极好的",
    "example": ""
  },
  {
    "id": 1520,
    "word": "spoon",
    "phonetic": "/spuːn/",
    "meaning": "n. 匙, 调羹",
    "example": ""
  },
  {
    "id": 1522,
    "word": "spot",
    "phonetic": "/spɔt/",
    "meaning": "n. 斑点，污点；场所，地点 v. 沾上污渍，弄脏",
    "example": ""
  },
  {
    "id": 1524,
    "word": "square",
    "phonetic": "/skweə(r)/",
    "meaning": "n. 广场 a. 平方的；方形的，宽而结实的（体格，肩膀）",
    "example": ""
  },
  {
    "id": 1525,
    "word": "stamp",
    "phonetic": "/stæmp/",
    "meaning": "n. 邮票",
    "example": ""
  },
  {
    "id": 1529,
    "word": "start",
    "phonetic": "/stɑːt/",
    "meaning": "v. 开始，着手；出发",
    "example": ""
  },
  {
    "id": 1530,
    "word": "state",
    "phonetic": "/steɪt/",
    "meaning": "n. 状态；情形；国家，（美国的）州",
    "example": ""
  },
  {
    "id": 1531,
    "word": "station",
    "phonetic": "/ˈsteɪʃ(ə)n/",
    "meaning": "n. 站，所，车站；电台",
    "example": ""
  },
  {
    "id": 1532,
    "word": "stay",
    "phonetic": "/steɪ/",
    "meaning": "n.& vi. 停留，逗留，呆",
    "example": ""
  },
  {
    "id": 1533,
    "word": "steal",
    "phonetic": "",
    "meaning": "(stole, stolen)  [stiːl] vt. 偷, 窃取",
    "example": ""
  },
  {
    "id": 1534,
    "word": "steep",
    "phonetic": "/stiːp/",
    "meaning": "a. 险峻的；陡峭的",
    "example": ""
  },
  {
    "id": 1535,
    "word": "step",
    "phonetic": "/step/",
    "meaning": "n. 脚步,台阶,梯级 vi. 走,跨步",
    "example": ""
  },
  {
    "id": 1536,
    "word": "stick",
    "phonetic": "",
    "meaning": "(stuck, stuck) [stɪk] vi. 粘住，钉住；坚持 n. 木棒（棍）,枝条",
    "example": ""
  },
  {
    "id": 1537,
    "word": "still",
    "phonetic": "/stɪl/",
    "meaning": "a. 不动的,平静的 ad. 仍然,还",
    "example": ""
  },
  {
    "id": 1538,
    "word": "stocking",
    "phonetic": "/ˈstɔkɪŋ/",
    "meaning": "n. 长统袜",
    "example": ""
  },
  {
    "id": 1539,
    "word": "stomach",
    "phonetic": "/ˈstʌmək/",
    "meaning": "n. 胃，胃部",
    "example": ""
  },
  {
    "id": 1540,
    "word": "stomachache",
    "phonetic": "/ˈstʌməkeɪk/",
    "meaning": "n. 胃疼",
    "example": ""
  },
  {
    "id": 1541,
    "word": "stone",
    "phonetic": "/stəʊn/",
    "meaning": "n. 石头，石料",
    "example": ""
  },
  {
    "id": 1543,
    "word": "store",
    "phonetic": "/stɔː(r)/",
    "meaning": "n. 商店 vt. 储藏，存储",
    "example": ""
  },
  {
    "id": 1544,
    "word": "storm",
    "phonetic": "/stɔːm/",
    "meaning": "n. 风暴，暴（风）雨",
    "example": ""
  },
  {
    "id": 1546,
    "word": "straight",
    "phonetic": "/streɪt/",
    "meaning": "a. 一直的，直的 ad. 一直地，直地",
    "example": ""
  },
  {
    "id": 1547,
    "word": "strange",
    "phonetic": "/streɪndʒ/",
    "meaning": "a. 奇怪,奇特的,陌生的",
    "example": ""
  },
  {
    "id": 1549,
    "word": "strict",
    "phonetic": "/strɪkt/",
    "meaning": "a. 严格的，严密的",
    "example": ""
  },
  {
    "id": 1550,
    "word": "strike",
    "phonetic": "",
    "meaning": "(struck, struck或stricken) [straɪk] v.（钟）鸣;敲（响）,罢工,擦（打）火, 侵袭",
    "example": ""
  },
  {
    "id": 1552,
    "word": "student",
    "phonetic": "/ˈstjuːdənt/",
    "meaning": "n. 学生",
    "example": ""
  },
  {
    "id": 1554,
    "word": "stupid",
    "phonetic": "/ˈstjuːpɪd/",
    "meaning": "a. 愚蠢的，笨的",
    "example": ""
  },
  {
    "id": 1556,
    "word": "succeed",
    "phonetic": "/səkˈsiːd/",
    "meaning": "vi. 成功",
    "example": ""
  },
  {
    "id": 1557,
    "word": "success",
    "phonetic": "/səkˈses/",
    "meaning": "n. 成功",
    "example": ""
  },
  {
    "id": 1558,
    "word": "successful",
    "phonetic": "/səkˈsesfʊl/",
    "meaning": "a. 成功的,有成就的",
    "example": ""
  },
  {
    "id": 1559,
    "word": "such",
    "phonetic": "",
    "meaning": "[sʌtʃ]] ad. 那么 pron.（泛指）人，事物 a. 这样的，那样的",
    "example": ""
  },
  {
    "id": 1560,
    "word": "sudden",
    "phonetic": "/ˈsʌd(ə)n/",
    "meaning": "a. 突然的",
    "example": ""
  },
  {
    "id": 1561,
    "word": "sugar",
    "phonetic": "/ˈʃʊɡə(r)/",
    "meaning": "n. 糖",
    "example": ""
  },
  {
    "id": 1562,
    "word": "suggest",
    "phonetic": "/səˈdʒest; (US) sə ˈdʒest/",
    "meaning": "vt. 建议，提议",
    "example": ""
  },
  {
    "id": 1563,
    "word": "suggestion",
    "phonetic": "/səˈdʒestʃ(ə)n/",
    "meaning": "n. 建议",
    "example": ""
  },
  {
    "id": 1564,
    "word": "suit",
    "phonetic": "/suːt, sjuːt/",
    "meaning": "vt. 适合 n. 一套（衣服）",
    "example": ""
  },
  {
    "id": 1567,
    "word": "Sunday",
    "phonetic": "/ˈsʌndeɪ/",
    "meaning": "n. 星期日",
    "example": ""
  },
  {
    "id": 1568,
    "word": "sunglasses",
    "phonetic": "/ˈsʌnɡlɑːsɪs/",
    "meaning": "n. 太阳眼镜，墨镜",
    "example": ""
  },
  {
    "id": 1569,
    "word": "sunlight",
    "phonetic": "/ˈsʌnlaɪt/",
    "meaning": "n. 日光，阳光",
    "example": ""
  },
  {
    "id": 1571,
    "word": "sunrise",
    "phonetic": "/ˈsʌnraɪs/",
    "meaning": "n. 黎明，拂晓",
    "example": ""
  },
  {
    "id": 1572,
    "word": "sunset",
    "phonetic": "/ˈsʌnset/",
    "meaning": "n. 日落(时分)",
    "example": ""
  },
  {
    "id": 1573,
    "word": "sunshine",
    "phonetic": "/ˈsʌnʃaɪn/",
    "meaning": "n. 阳光",
    "example": ""
  },
  {
    "id": 1574,
    "word": "super",
    "phonetic": "/ˈsuːpə(r), ˈsjuːpə(r)/",
    "meaning": "a. 顶好的，超级的",
    "example": ""
  },
  {
    "id": 1576,
    "word": "supper",
    "phonetic": "/ˈsʌpə(r)/",
    "meaning": "n. 晚餐，晚饭",
    "example": ""
  },
  {
    "id": 1577,
    "word": "supply",
    "phonetic": "/səˈplaɪ/",
    "meaning": "vt.& n. 供给，供应",
    "example": ""
  },
  {
    "id": 1578,
    "word": "suppose",
    "phonetic": "/səˈpəʊz/",
    "meaning": "vt. 猜想,假定,料想",
    "example": ""
  },
  {
    "id": 1579,
    "word": "sure",
    "phonetic": "/ʃʊə(r), ʃɔː(r)/",
    "meaning": "a. 确信，肯定 ad. (口语)的确，一定，当然",
    "example": ""
  },
  {
    "id": 1580,
    "word": "surf",
    "phonetic": "/ˈsɜːf/",
    "meaning": "v. 冲浪",
    "example": ""
  },
  {
    "id": 1581,
    "word": "surprise",
    "phonetic": "/səˈpraɪz/",
    "meaning": "vt. 使惊奇,使诧异 n. 惊奇,诧异",
    "example": ""
  },
  {
    "id": 1583,
    "word": "sweet",
    "phonetic": "/swiːt/",
    "meaning": "n. 甜食;蜜饯;甜点;糖果;芳香 a. 甜的;可爱的;亲切的",
    "example": ""
  },
  {
    "id": 1585,
    "word": "swimming",
    "phonetic": "/ˈswɪmɪŋ/",
    "meaning": "n. 游泳",
    "example": ""
  },
  {
    "id": 1586,
    "word": "swimming pool",
    "phonetic": "/ˈswɪmɪŋ puːl/",
    "meaning": "n. 游泳池",
    "example": ""
  },
  {
    "id": 1587,
    "word": "swing",
    "phonetic": "/swɪŋ/",
    "meaning": "vt. 挥舞，摆动 n. 秋千",
    "example": ""
  },
  {
    "id": 1589,
    "word": "tail",
    "phonetic": "/teɪl/",
    "meaning": "n. (动物的)尾巴",
    "example": ""
  },
  {
    "id": 1590,
    "word": "tailor",
    "phonetic": "/ˈteɪlə(r)/",
    "meaning": "n. 裁缝",
    "example": ""
  },
  {
    "id": 1592,
    "word": "tale",
    "phonetic": "/teɪl/",
    "meaning": "n. 故事, 传说",
    "example": ""
  },
  {
    "id": 1595,
    "word": "tape",
    "phonetic": "/teɪp/",
    "meaning": "n. 磁带；录音带",
    "example": ""
  },
  {
    "id": 1596,
    "word": "task",
    "phonetic": "/tɑːsk; (US) tæsk/",
    "meaning": "n. 任务, 工作",
    "example": ""
  },
  {
    "id": 1597,
    "word": "taste",
    "phonetic": "/teɪst/",
    "meaning": "n. 品尝, 尝味；味道 vt. 品尝, 尝味",
    "example": ""
  },
  {
    "id": 1601,
    "word": "team",
    "phonetic": "/tiːm/",
    "meaning": "n. 队，组",
    "example": ""
  },
  {
    "id": 1602,
    "word": "teamwork",
    "phonetic": "/ˈtiːmwəːk/",
    "meaning": "n. 合作，协同工作",
    "example": ""
  },
  {
    "id": 1603,
    "word": "teapot",
    "phonetic": "/ˈtiːpɔt/",
    "meaning": "n. 茶壶",
    "example": ""
  },
  {
    "id": 1604,
    "word": "tear",
    "phonetic": "/teə(r)/",
    "meaning": "n. 眼泪 v. 扯破, 撕开",
    "example": ""
  },
  {
    "id": 1605,
    "word": "technology",
    "phonetic": "/tekˈnɔlədʒɪ/",
    "meaning": "n. 技术",
    "example": ""
  },
  {
    "id": 1606,
    "word": "teenager",
    "phonetic": "/ˈtiːneɪdʒə(r)/",
    "meaning": "n.（13～19岁的）青少年，十几岁的少年",
    "example": ""
  },
  {
    "id": 1607,
    "word": "telegram",
    "phonetic": "/ˈtelɪɡræm/",
    "meaning": "n. 电报",
    "example": ""
  },
  {
    "id": 1608,
    "word": "telegraph",
    "phonetic": "/ˈtelɪɡrɑːf; (US) -ɡræf/",
    "meaning": "v. (拍) 电报",
    "example": ""
  },
  {
    "id": 1609,
    "word": "telephone",
    "phonetic": "/ˈtelɪfəun/",
    "meaning": "v. 打电话 n. 电话",
    "example": ""
  },
  {
    "id": 1610,
    "word": "television",
    "phonetic": "/ˈtelɪviʒən/",
    "meaning": "n. 电视",
    "example": ""
  },
  {
    "id": 1612,
    "word": "temperature",
    "phonetic": "/ˈtemprɪtʃə(r)/",
    "meaning": "n. 温度",
    "example": ""
  },
  {
    "id": 1613,
    "word": "ten",
    "phonetic": "/ten/",
    "meaning": "num. 十",
    "example": ""
  },
  {
    "id": 1614,
    "word": "tent",
    "phonetic": "/tent/",
    "meaning": "n. 帐篷",
    "example": ""
  },
  {
    "id": 1615,
    "word": "term",
    "phonetic": "/tɜːm/",
    "meaning": "n. 学期;术语;条款;项",
    "example": ""
  },
  {
    "id": 1616,
    "word": "terrible",
    "phonetic": "/ˈterɪb(ə)l/",
    "meaning": "a. 可怕的；糟糕的",
    "example": ""
  },
  {
    "id": 1617,
    "word": "terrify",
    "phonetic": "/ˈterɪfaɪ/",
    "meaning": "vt. 使人感到恐怖",
    "example": ""
  },
  {
    "id": 1618,
    "word": "test",
    "phonetic": "/test/",
    "meaning": "vt.& n. 测试, 考查，试验",
    "example": ""
  },
  {
    "id": 1619,
    "word": "text",
    "phonetic": "/tekst/",
    "meaning": "n. 文本，课文",
    "example": ""
  },
  {
    "id": 1620,
    "word": "textbook",
    "phonetic": "/ˈtekstbʊk/",
    "meaning": "n. 课本，教科书",
    "example": ""
  },
  {
    "id": 1621,
    "word": "than",
    "phonetic": "/ðen, ðæn/",
    "meaning": "conj. 比",
    "example": ""
  },
  {
    "id": 1623,
    "word": "thankful",
    "phonetic": "/ˈθæŋkfʊl/",
    "meaning": "a. 感谢的，感激的",
    "example": ""
  },
  {
    "id": 1626,
    "word": "theatre",
    "phonetic": "",
    "meaning": "(美theater) ['θiətə] n. 剧场，戏院",
    "example": ""
  },
  {
    "id": 1628,
    "word": "theirs",
    "phonetic": "/ðeəz/",
    "meaning": "pron. 他（她,它）们的",
    "example": ""
  },
  {
    "id": 1630,
    "word": "themselves",
    "phonetic": "/ðəmˈselvz/",
    "meaning": "pron. 他/她/它们自己",
    "example": ""
  },
  {
    "id": 1635,
    "word": "thick",
    "phonetic": "/θɪk/",
    "meaning": "a. 厚的",
    "example": ""
  },
  {
    "id": 1636,
    "word": "thief",
    "phonetic": "",
    "meaning": "(复thieves) [θiːf] n. 窃贼, 小偷",
    "example": ""
  },
  {
    "id": 1638,
    "word": "thing",
    "phonetic": "/θɪŋ/",
    "meaning": "n. 东西；(复)物品，用品；事情，事件",
    "example": ""
  },
  {
    "id": 1640,
    "word": "third",
    "phonetic": "/θəːd/",
    "meaning": "num. 第三",
    "example": ""
  },
  {
    "id": 1641,
    "word": "thirst",
    "phonetic": "/θəːst/",
    "meaning": "n. 渴；口渴",
    "example": ""
  },
  {
    "id": 1642,
    "word": "thirsty",
    "phonetic": "/ˈθəːstɪ/",
    "meaning": "a. 渴",
    "example": ""
  },
  {
    "id": 1643,
    "word": "thirteen",
    "phonetic": "/θəːtiːn/",
    "meaning": "num. 十三",
    "example": ""
  },
  {
    "id": 1644,
    "word": "thirty",
    "phonetic": "/ˈθəːtɪ/",
    "meaning": "num. 三十",
    "example": ""
  },
  {
    "id": 1647,
    "word": "though",
    "phonetic": "/ðəʊ/",
    "meaning": "conj. 虽然，可是",
    "example": ""
  },
  {
    "id": 1648,
    "word": "thought",
    "phonetic": "/θɔːt/",
    "meaning": "n. 思考,思想;念头",
    "example": ""
  },
  {
    "id": 1649,
    "word": "thousand",
    "phonetic": "/ˈθaʊzənd/",
    "meaning": "num. 千",
    "example": ""
  },
  {
    "id": 1650,
    "word": "three",
    "phonetic": "/θriː/",
    "meaning": "num. 三",
    "example": ""
  },
  {
    "id": 1651,
    "word": "through",
    "phonetic": "/θruː/",
    "meaning": "prep. 穿（通）过;从始至终 ad. 穿(通)过;自始至终,全部",
    "example": ""
  },
  {
    "id": 1652,
    "word": "Thursday",
    "phonetic": "/ˈθəːzdeɪ/",
    "meaning": "n. 星期四",
    "example": ""
  },
  {
    "id": 1653,
    "word": "thus",
    "phonetic": "/ðʌs/",
    "meaning": "ad. 这样；因而",
    "example": ""
  },
  {
    "id": 1654,
    "word": "tick",
    "phonetic": "/tɪk/",
    "meaning": "vt. 作记号 n. 记号,符号,滴答声",
    "example": ""
  },
  {
    "id": 1655,
    "word": "ticket",
    "phonetic": "/ˈtɪkɪt/",
    "meaning": "n. 票；卷",
    "example": ""
  },
  {
    "id": 1656,
    "word": "tidy",
    "phonetic": "/ˈtaidi/",
    "meaning": "a. 整洁的，干净的 vt. 弄整洁，弄干净",
    "example": ""
  },
  {
    "id": 1657,
    "word": "tie",
    "phonetic": "/taɪ/",
    "meaning": "vt.（用绳，线）系，拴，扎 n. 领带，绳子，结；关系",
    "example": ""
  },
  {
    "id": 1659,
    "word": "till",
    "phonetic": "/tɪl/",
    "meaning": "conj.& prep. 直到,直到…为止",
    "example": ""
  },
  {
    "id": 1661,
    "word": "tire",
    "phonetic": "/ˈtaɪə(r)/",
    "meaning": "vi. 使疲劳",
    "example": ""
  },
  {
    "id": 1665,
    "word": "together",
    "phonetic": "/təˈgeðə/",
    "meaning": "ad. 一起，共同",
    "example": ""
  },
  {
    "id": 1667,
    "word": "Tokyo",
    "phonetic": "/ˈtəʊkjəʊ/",
    "meaning": "n. 东京",
    "example": ""
  },
  {
    "id": 1669,
    "word": "tomb",
    "phonetic": "/tuːm/",
    "meaning": "n. 坟墓",
    "example": ""
  },
  {
    "id": 1671,
    "word": "ton",
    "phonetic": "/tʌn/",
    "meaning": "n.（重量单位）吨",
    "example": ""
  },
  {
    "id": 1672,
    "word": "tongue",
    "phonetic": "/tʌŋ/",
    "meaning": "n. 舌，舌头",
    "example": ""
  },
  {
    "id": 1673,
    "word": "tonight",
    "phonetic": "/təˈnaɪt/",
    "meaning": "ad.& n. 今晚，今夜",
    "example": ""
  },
  {
    "id": 1675,
    "word": "tool",
    "phonetic": "/tuːl/",
    "meaning": "n. 工具，器具",
    "example": ""
  },
  {
    "id": 1676,
    "word": "tooth",
    "phonetic": "",
    "meaning": "(复 teeth) [tuːθ] n. 牙齿",
    "example": ""
  },
  {
    "id": 1677,
    "word": "toothache",
    "phonetic": "/ˈtuːθeɪk/",
    "meaning": "n. 牙痛",
    "example": ""
  },
  {
    "id": 1678,
    "word": "toothbrush",
    "phonetic": "/ˈtuːθbrʌʃ/",
    "meaning": "n. 牙刷",
    "example": ""
  },
  {
    "id": 1679,
    "word": "toothpaste",
    "phonetic": "/ˈtuːθpeɪst/",
    "meaning": "n. 牙膏",
    "example": ""
  },
  {
    "id": 1680,
    "word": "top",
    "phonetic": "/tɔp/",
    "meaning": "n. 顶部,（物体的）上面",
    "example": ""
  },
  {
    "id": 1681,
    "word": "total",
    "phonetic": "/ˈtəʊt(ə)l/",
    "meaning": "a. 总数的;完全的 n./ v. 合计,总计",
    "example": ""
  },
  {
    "id": 1682,
    "word": "touch",
    "phonetic": "/tʌtʃ/",
    "meaning": "vt. 触摸，接触",
    "example": ""
  },
  {
    "id": 1683,
    "word": "tough",
    "phonetic": "/tʌf/",
    "meaning": "a. 坚硬的；结实的；棘手的，难解的",
    "example": ""
  },
  {
    "id": 1684,
    "word": "tour",
    "phonetic": "/tʊə(r)/",
    "meaning": "n. 参观, 观光, 旅行",
    "example": ""
  },
  {
    "id": 1685,
    "word": "tourism",
    "phonetic": "/ˈtʊərɪz(ə)m/",
    "meaning": "n. 旅游业；观光",
    "example": ""
  },
  {
    "id": 1686,
    "word": "tourist",
    "phonetic": "/ˈtʊərɪst/",
    "meaning": "vn. 旅行者，观光者",
    "example": ""
  },
  {
    "id": 1687,
    "word": "toward(s)",
    "phonetic": "/təˈwɔːd(z)/",
    "meaning": "prep. 向，朝，对于",
    "example": ""
  },
  {
    "id": 1688,
    "word": "towel",
    "phonetic": "/ˈtaʊəl/",
    "meaning": "n. 毛巾",
    "example": ""
  },
  {
    "id": 1689,
    "word": "tower",
    "phonetic": "/ˈtaʊə(r)/",
    "meaning": "n. 塔",
    "example": ""
  },
  {
    "id": 1690,
    "word": "town",
    "phonetic": "/taʊn/",
    "meaning": "n. 城镇，城",
    "example": ""
  },
  {
    "id": 1692,
    "word": "track",
    "phonetic": "/træk/",
    "meaning": "n. 轨道；田径",
    "example": ""
  },
  {
    "id": 1693,
    "word": "tractor",
    "phonetic": "/ˈtræktə(r)/",
    "meaning": "n. 拖拉机",
    "example": ""
  },
  {
    "id": 1694,
    "word": "trade",
    "phonetic": "/treɪd/",
    "meaning": "n. 商业,贸易 vt. 交易",
    "example": ""
  },
  {
    "id": 1695,
    "word": "tradition",
    "phonetic": "/trəˈdɪʃ (ə)n/",
    "meaning": "n. 传统，风俗",
    "example": ""
  },
  {
    "id": 1696,
    "word": "traditional",
    "phonetic": "/trəˈdɪʃ(ə)n(ə)l/",
    "meaning": "a. 传统的，风俗的，惯例的",
    "example": ""
  },
  {
    "id": 1697,
    "word": "traffic",
    "phonetic": "/ˈtræfɪk/",
    "meaning": "n. 交通，来往车辆",
    "example": ""
  },
  {
    "id": 1699,
    "word": "trainer",
    "phonetic": "/treɪnə(r)/",
    "meaning": "n. 训练人；教练",
    "example": ""
  },
  {
    "id": 1700,
    "word": "training",
    "phonetic": "/ˈtreɪnɪŋ/",
    "meaning": "n. 培训",
    "example": ""
  },
  {
    "id": 1701,
    "word": "translate",
    "phonetic": "/trænsˈleɪt/",
    "meaning": "vt. 翻译",
    "example": ""
  },
  {
    "id": 1702,
    "word": "trap",
    "phonetic": "/træp/",
    "meaning": "n. 陷阱 vt. 使陷入困境",
    "example": ""
  },
  {
    "id": 1704,
    "word": "traveler",
    "phonetic": "/ˈtrævələ(r)/",
    "meaning": "n. 旅行者",
    "example": ""
  },
  {
    "id": 1705,
    "word": "treat",
    "phonetic": "/triːt/",
    "meaning": "vt. 对待，看待",
    "example": ""
  },
  {
    "id": 1707,
    "word": "trip",
    "phonetic": "/trɪp/",
    "meaning": "n. 旅行，旅程",
    "example": ""
  },
  {
    "id": 1708,
    "word": "trouble",
    "phonetic": "/ˈtrʌb(ə)l/",
    "meaning": "vt. 使苦恼,使忧虑,使麻烦 n. 问题,疾病,烦恼,麻烦",
    "example": ""
  },
  {
    "id": 1710,
    "word": "truck",
    "phonetic": "/trʌk/",
    "meaning": "n. 卡车, 运货车；车皮",
    "example": ""
  },
  {
    "id": 1711,
    "word": "true",
    "phonetic": "/truː/",
    "meaning": "a. 真的，真实的；忠诚的",
    "example": ""
  },
  {
    "id": 1712,
    "word": "truth",
    "phonetic": "/truːθ/",
    "meaning": "n. 真理,事实,真相,实际",
    "example": ""
  },
  {
    "id": 1714,
    "word": "T-shirt",
    "phonetic": "/tiː-ʃɜːt/",
    "meaning": "n. T恤衫",
    "example": ""
  },
  {
    "id": 1715,
    "word": "Tuesday",
    "phonetic": "/ˈtjuːzdeɪ/",
    "meaning": "n. 星期二",
    "example": ""
  },
  {
    "id": 1716,
    "word": "turkey",
    "phonetic": "/ˈtɜːkɪ/",
    "meaning": "n. 火鸡",
    "example": ""
  },
  {
    "id": 1718,
    "word": "turning",
    "phonetic": "/ˈtɜːnɪŋ/",
    "meaning": "n. 拐弯处，拐角处",
    "example": ""
  },
  {
    "id": 1719,
    "word": "twelfth",
    "phonetic": "/twelfθ/",
    "meaning": "num. 第十二",
    "example": ""
  },
  {
    "id": 1720,
    "word": "twelve",
    "phonetic": "/twelv/",
    "meaning": "num. 十二",
    "example": ""
  },
  {
    "id": 1721,
    "word": "twentieth",
    "phonetic": "/ˈtwentɪɪθ/",
    "meaning": "vnum. 第二十",
    "example": ""
  },
  {
    "id": 1722,
    "word": "twenty",
    "phonetic": "/ˈtwentɪ/",
    "meaning": "num. 二十",
    "example": ""
  },
  {
    "id": 1723,
    "word": "twenty-first",
    "phonetic": "/ˈtwentɪ-fɜːst/",
    "meaning": "num. 第二十一",
    "example": ""
  },
  {
    "id": 1724,
    "word": "twenty-one",
    "phonetic": "/ˈtwentɪ- wʌn/",
    "meaning": "num. 二十一",
    "example": ""
  },
  {
    "id": 1725,
    "word": "twice",
    "phonetic": "/twaɪs/",
    "meaning": "ad. 两次；两倍",
    "example": ""
  },
  {
    "id": 1726,
    "word": "twin",
    "phonetic": "/twɪn/",
    "meaning": "n. 双胞胎之一",
    "example": ""
  },
  {
    "id": 1727,
    "word": "two",
    "phonetic": "/tuː/",
    "meaning": "num. 二",
    "example": ""
  },
  {
    "id": 1728,
    "word": "type",
    "phonetic": "/ˈtaɪp/",
    "meaning": "vt. 打字 n. 种类,类型",
    "example": ""
  },
  {
    "id": 1729,
    "word": "typical",
    "phonetic": "/taɪpɪkəl/",
    "meaning": "adj,典型的，有代表性的",
    "example": ""
  },
  {
    "id": 1733,
    "word": "underground",
    "phonetic": "/ʌndəˈɡraʊnd/",
    "meaning": "a. 地下的 n. 地铁",
    "example": ""
  },
  {
    "id": 1734,
    "word": "understand",
    "phonetic": "",
    "meaning": "(understood, understood) [ʌndəˈstænd] v. 懂得;明白;理解",
    "example": ""
  },
  {
    "id": 1735,
    "word": "understanding",
    "phonetic": "/ʌndəˈstændɪŋ/",
    "meaning": "n. 领会;理解",
    "example": ""
  },
  {
    "id": 1736,
    "word": "unfair",
    "phonetic": "/ʌnˈfeə(r)/",
    "meaning": "a. 不公平的，不公正的",
    "example": ""
  },
  {
    "id": 1737,
    "word": "unit",
    "phonetic": "/ˈjuːnɪt/",
    "meaning": "n. 单元，单位",
    "example": ""
  },
  {
    "id": 1738,
    "word": "universe",
    "phonetic": "/ˈjuːnɪvɜːs/",
    "meaning": "n. 宇宙",
    "example": ""
  },
  {
    "id": 1739,
    "word": "university",
    "phonetic": "/juːnɪˈvɜːsɪtɪ/",
    "meaning": "n. 大学",
    "example": ""
  },
  {
    "id": 1740,
    "word": "unknown",
    "phonetic": "/ʌnnəun/",
    "meaning": "a. 不知道的",
    "example": ""
  },
  {
    "id": 1741,
    "word": "unless",
    "phonetic": "/ʌnˈles/",
    "meaning": "conj. 如果不，除非",
    "example": ""
  },
  {
    "id": 1742,
    "word": "unlike",
    "phonetic": "/ʌnˈlaɪk/",
    "meaning": "prep. 不像，和…不同",
    "example": ""
  },
  {
    "id": 1743,
    "word": "until",
    "phonetic": "/ʌnˈtɪl/",
    "meaning": "prep.& conj. 直到…为止",
    "example": ""
  },
  {
    "id": 1744,
    "word": "unusual",
    "phonetic": "/ʌnˈjuːʒuəl/",
    "meaning": "a. 不平常的，异常的",
    "example": ""
  },
  {
    "id": 1746,
    "word": "upon",
    "phonetic": "/əˈpɔn/",
    "meaning": "prep. 在…上面",
    "example": ""
  },
  {
    "id": 1747,
    "word": "upstairs",
    "phonetic": "/ʌpˈsteəz/",
    "meaning": "ad. 在楼上，到楼上",
    "example": ""
  },
  {
    "id": 1749,
    "word": "used",
    "phonetic": "/juːzd/",
    "meaning": "a. 用过的;旧的;二手的",
    "example": ""
  },
  {
    "id": 1750,
    "word": "useful",
    "phonetic": "/ˈjuːsful/",
    "meaning": "a. 有用的，有益的",
    "example": ""
  },
  {
    "id": 1751,
    "word": "useless",
    "phonetic": "/ˈjuːslɪs/",
    "meaning": "a. 无用的",
    "example": ""
  },
  {
    "id": 1752,
    "word": "user",
    "phonetic": "/ˈjuːzə/",
    "meaning": "n. 使用者；用户",
    "example": ""
  },
  {
    "id": 1753,
    "word": "usual",
    "phonetic": "/ˈjuːʒʊəl/",
    "meaning": "a. 通常的，平常的",
    "example": ""
  },
  {
    "id": 1754,
    "word": "usually",
    "phonetic": "/ˈjuːʒʊəlɪ/",
    "meaning": "ad. 通常，经常",
    "example": ""
  },
  {
    "id": 1755,
    "word": "valley",
    "phonetic": "/ˈvælɪ/",
    "meaning": "n. 山谷, 溪谷",
    "example": ""
  },
  {
    "id": 1756,
    "word": "VCD",
    "phonetic": "",
    "meaning": "= versatile compact disk n. 影碟光盘",
    "example": ""
  },
  {
    "id": 1759,
    "word": "victim",
    "phonetic": "/ˈvɪktɪm/",
    "meaning": "n. 受害者，牺牲品",
    "example": ""
  },
  {
    "id": 1760,
    "word": "video",
    "phonetic": "/ˈvɪdɪəʊ/",
    "meaning": "n. 录像，视频",
    "example": ""
  },
  {
    "id": 1761,
    "word": "village",
    "phonetic": "/ˈvɪlɪdʒ/",
    "meaning": "n. 村庄，乡村",
    "example": ""
  },
  {
    "id": 1762,
    "word": "villager",
    "phonetic": "/'vilidʒə/",
    "meaning": "n. 村民",
    "example": ""
  },
  {
    "id": 1763,
    "word": "violin",
    "phonetic": "/vaɪəˈlɪn/",
    "meaning": "n. 小提琴",
    "example": ""
  },
  {
    "id": 1765,
    "word": "visitor",
    "phonetic": "/ˈvɪzɪtə(r)/",
    "meaning": "n. 访问者，参观者",
    "example": ""
  },
  {
    "id": 1766,
    "word": "voice",
    "phonetic": "/vɔɪs/",
    "meaning": "n. 说话声; 语态",
    "example": ""
  },
  {
    "id": 1767,
    "word": "volleyball",
    "phonetic": "/vɔlibɔːl/",
    "meaning": "n. 排球",
    "example": ""
  },
  {
    "id": 1768,
    "word": "volunteer",
    "phonetic": "/valən’tɪə/",
    "meaning": "n.志愿者 v. 自愿做某事",
    "example": ""
  },
  {
    "id": 1770,
    "word": "wake",
    "phonetic": "",
    "meaning": "(woke, woken) [weɪk] v. 醒来,叫醒",
    "example": ""
  },
  {
    "id": 1772,
    "word": "wallet",
    "phonetic": "/ˈwɔlɪt/",
    "meaning": "n. (放钱,证件等的)皮夹",
    "example": ""
  },
  {
    "id": 1774,
    "word": "war",
    "phonetic": "/wɔː(r)/",
    "meaning": "n. 战争",
    "example": ""
  },
  {
    "id": 1776,
    "word": "warning",
    "phonetic": "/ˈwɔːnɪŋ/",
    "meaning": "n. 警报",
    "example": ""
  },
  {
    "id": 1777,
    "word": "washroom",
    "phonetic": "/ˈwɔʃrʊm/",
    "meaning": "n. 盥洗室",
    "example": ""
  },
  {
    "id": 1778,
    "word": "waste",
    "phonetic": "/weɪst/",
    "meaning": "n.& vt. 浪费",
    "example": ""
  },
  {
    "id": 1781,
    "word": "wave",
    "phonetic": "/weɪv/",
    "meaning": "n.（热、光、声等的）波，波浪 v. 挥手，挥动，波动",
    "example": ""
  },
  {
    "id": 1784,
    "word": "weak",
    "phonetic": "/wiːk/",
    "meaning": "a. 差的，弱的，淡的",
    "example": ""
  },
  {
    "id": 1787,
    "word": "Wednesday",
    "phonetic": "/ˈwenzdeɪ/",
    "meaning": "n. 星期三",
    "example": ""
  },
  {
    "id": 1789,
    "word": "weekday",
    "phonetic": "/ˈwiːkdeɪ/",
    "meaning": "n. 平日,工作日",
    "example": ""
  },
  {
    "id": 1790,
    "word": "weekend",
    "phonetic": "/wiːkˈend, ˈwiːkend/",
    "meaning": "n. 周末",
    "example": ""
  },
  {
    "id": 1791,
    "word": "weigh",
    "phonetic": "/weɪ/",
    "meaning": "vt. 称…的重量，重（若干）",
    "example": ""
  },
  {
    "id": 1792,
    "word": "weight",
    "phonetic": "/weɪt/",
    "meaning": "n. 重，重量",
    "example": ""
  },
  {
    "id": 1795,
    "word": "well-known",
    "phonetic": "/wel- nəʊn/",
    "meaning": "a. 出名,众所周知的",
    "example": ""
  },
  {
    "id": 1796,
    "word": "west",
    "phonetic": "/west/",
    "meaning": "a. (在)西；向西,从西来的 ad. 在西方,向西方 n. 西部；西方",
    "example": ""
  },
  {
    "id": 1797,
    "word": "western",
    "phonetic": "/ˈwest(ə)n/",
    "meaning": "a. 西方的，西部的",
    "example": ""
  },
  {
    "id": 1798,
    "word": "westerner",
    "phonetic": "/'westənə/",
    "meaning": "n. 西方人",
    "example": ""
  },
  {
    "id": 1799,
    "word": "westwards",
    "phonetic": "/ˈwestwədz/",
    "meaning": "ad. 向西",
    "example": ""
  },
  {
    "id": 1800,
    "word": "wet",
    "phonetic": "/wet/",
    "meaning": "a. 湿的,潮的,多雨的",
    "example": ""
  },
  {
    "id": 1802,
    "word": "whatever",
    "phonetic": "/wɔtˈevə(r)/",
    "meaning": "conj. & pron. 无论什么，不管什么",
    "example": ""
  },
  {
    "id": 1803,
    "word": "wheat",
    "phonetic": "/wiːt; (US) hwiːt/",
    "meaning": "n. 小麦",
    "example": ""
  },
  {
    "id": 1804,
    "word": "wheel",
    "phonetic": "/wiːl; (US) hwiːl/",
    "meaning": "n. 轮，机轮",
    "example": ""
  },
  {
    "id": 1806,
    "word": "whenever",
    "phonetic": "/wenˈevə(r)/",
    "meaning": "conj. 每当，无论何时",
    "example": ""
  },
  {
    "id": 1808,
    "word": "wherever",
    "phonetic": "/weərˈevə(r)/",
    "meaning": "conj. 无论在哪里",
    "example": ""
  },
  {
    "id": 1809,
    "word": "whether",
    "phonetic": "/ˈweðə(r); (US) ˈhweðər/",
    "meaning": "conj. 是否",
    "example": ""
  },
  {
    "id": 1810,
    "word": "which",
    "phonetic": "/wɪtʃ; (US) hwɪtʃ/",
    "meaning": "pron. 哪一个；哪些",
    "example": ""
  },
  {
    "id": 1811,
    "word": "whichever",
    "phonetic": "/wɪtʃˈevə(r)/",
    "meaning": "pron. 无论哪个;无论哪些",
    "example": ""
  },
  {
    "id": 1812,
    "word": "while",
    "phonetic": "/waɪl; (US) hwaɪl/",
    "meaning": "conj. 在…的时候,和…同时 n. 一会儿，一段时间",
    "example": ""
  },
  {
    "id": 1815,
    "word": "whole",
    "phonetic": "/həʊl/",
    "meaning": "a. 整个的",
    "example": ""
  },
  {
    "id": 1816,
    "word": "whom",
    "phonetic": "/huːm/",
    "meaning": "pron. (who的宾格 )",
    "example": ""
  },
  {
    "id": 1819,
    "word": "wide",
    "phonetic": "/waid/",
    "meaning": "a. 宽阔的",
    "example": ""
  },
  {
    "id": 1820,
    "word": "wife",
    "phonetic": "/waɪf/",
    "meaning": "n. 妻子",
    "example": ""
  },
  {
    "id": 1821,
    "word": "will",
    "phonetic": "/wɪl/",
    "meaning": "n. 意志, 遗嘱",
    "example": ""
  },
  {
    "id": 1822,
    "word": "will (would)",
    "phonetic": "/wɪl/",
    "meaning": "v. 将,会(表示将来)；愿意，要",
    "example": ""
  },
  {
    "id": 1823,
    "word": "win",
    "phonetic": "",
    "meaning": "(won, won) [wɪn] n. 获胜，赢得 ",
    "example": ""
  },
  {
    "id": 1824,
    "word": "wind",
    "phonetic": "",
    "meaning": "(wound,wound) [wɪnd] vt. 缠，连带；蜿蜒，弯曲 n. 风",
    "example": ""
  },
  {
    "id": 1827,
    "word": "wine",
    "phonetic": "/waɪn/",
    "meaning": "n. 酒",
    "example": ""
  },
  {
    "id": 1828,
    "word": "winner",
    "phonetic": "/ˈwɪnə(r)/",
    "meaning": "n. 获胜者",
    "example": ""
  },
  {
    "id": 1830,
    "word": "wish",
    "phonetic": "/wɪʃ/",
    "meaning": "n. 愿望，祝愿 vt. 希望，想要，祝愿",
    "example": ""
  },
  {
    "id": 1832,
    "word": "without",
    "phonetic": "/wɪðaʊt/",
    "meaning": "prep. 没有",
    "example": ""
  },
  {
    "id": 1834,
    "word": "wonder",
    "phonetic": "/ˈwʌndə(r)/",
    "meaning": "v. 对…疑惑，感到惊奇,想知道 n. 惊讶,惊叹;奇迹",
    "example": ""
  },
  {
    "id": 1836,
    "word": "wood",
    "phonetic": "/wud/",
    "meaning": "n.木头,木材,(复)树木,森林",
    "example": ""
  },
  {
    "id": 1837,
    "word": "wool",
    "phonetic": "/wul/",
    "meaning": "l n. 羊毛，羊绒",
    "example": ""
  },
  {
    "id": 1838,
    "word": "woolen",
    "phonetic": "/'wulin/",
    "meaning": "a. 羊毛的，羊毛制的",
    "example": ""
  },
  {
    "id": 1842,
    "word": "workplace",
    "phonetic": "/wəːkpleɪs/",
    "meaning": "n. 工作场所，车间",
    "example": ""
  },
  {
    "id": 1843,
    "word": "works",
    "phonetic": "/wəːks/",
    "meaning": "n. 著作，作品",
    "example": ""
  },
  {
    "id": 1844,
    "word": "world",
    "phonetic": "/wəːld/",
    "meaning": "n. 世界",
    "example": ""
  },
  {
    "id": 1845,
    "word": "worm",
    "phonetic": "/wəːm/",
    "meaning": "n. 软体虫,蠕虫(尤指蚯蚓)",
    "example": ""
  },
  {
    "id": 1846,
    "word": "worried",
    "phonetic": "/'wʌrɪd/",
    "meaning": "a. 担心的，烦恼的",
    "example": ""
  },
  {
    "id": 1848,
    "word": "worse",
    "phonetic": "/wə:s/",
    "meaning": "a. (bad的比较级)更坏的",
    "example": ""
  },
  {
    "id": 1849,
    "word": "worst",
    "phonetic": "/wə:st/",
    "meaning": "a. (bad的最高级)最坏的",
    "example": ""
  },
  {
    "id": 1850,
    "word": "worth",
    "phonetic": "/wə:θ/",
    "meaning": "a. 有…的价值,值得…的",
    "example": ""
  },
  {
    "id": 1851,
    "word": "would",
    "phonetic": "/wəd, wud/",
    "meaning": "modal v.（will的过去时）将会,打算,想要,过去常常",
    "example": ""
  },
  {
    "id": 1852,
    "word": "wound",
    "phonetic": "/wu:nd/",
    "meaning": "vt.伤,伤害 n. 创伤,伤口",
    "example": ""
  },
  {
    "id": 1853,
    "word": "wounded",
    "phonetic": "/wu:ndɪd/",
    "meaning": "a. 受伤的",
    "example": ""
  },
  {
    "id": 1856,
    "word": "X-ray",
    "phonetic": "/eks-reɪ/",
    "meaning": "n. X射线；X光",
    "example": ""
  },
  {
    "id": 1857,
    "word": "yard",
    "phonetic": "/jɑːd/",
    "meaning": "n. 码；院子；场地",
    "example": ""
  },
  {
    "id": 1862,
    "word": "yet",
    "phonetic": "/jet/",
    "meaning": "ad. 尚，还，仍然",
    "example": ""
  },
  {
    "id": 1866,
    "word": "yours",
    "phonetic": "/jɔːz, jʊəz/",
    "meaning": "pron. 你的；你们的",
    "example": ""
  },
  {
    "id": 1867,
    "word": "yourself",
    "phonetic": "/jɔːˈself; (US) jʊərˈself/",
    "meaning": "pron. 你自己",
    "example": ""
  },
  {
    "id": 1868,
    "word": "yourselves",
    "phonetic": "/jɔːˈselvz; (US) jʊərˈselvz/",
    "meaning": "pron. 你们自己",
    "example": ""
  },
  {
    "id": 1869,
    "word": "youth",
    "phonetic": "/juːθ/",
    "meaning": "n. 青春；青年",
    "example": ""
  },
  {
    "id": 1870,
    "word": "zero",
    "phonetic": "/ˈzɪərəʊ/",
    "meaning": "n. & num. 零,零度,零点",
    "example": ""
  }
];

const ALL_WORDS = [...GRADE_3, ...GRADE_4, ...GRADE_5, ...GRADE_6, ...GRADE_7, ...GRADE_8, ...GRADE_9];

const WORDS_BY_GRADE = {
    3: GRADE_3,
    4: GRADE_4,
    5: GRADE_5,
    6: GRADE_6,
    7: GRADE_7,
    8: GRADE_8,
    9: GRADE_9,
};

/**
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
