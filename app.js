const CATALOG_URL = "./api/figures";
function apiEndpoint(path) {
  const configuredOrigin = String(
    window.NEKOPRICE_API_ORIGIN
    || (window.location.hostname.toLowerCase() === "diogoss0.github.io"
      ? "https://diogosasa.pythonanywhere.com"
      : "")
  );
  const apiOrigin = configuredOrigin.endsWith("/") ? configuredOrigin.slice(0, -1) : configuredOrigin;
  const normalizedPath = "/" + String(path || "").replace(/^\.?\/+/, "");
  return apiOrigin ? apiOrigin + normalizedPath : "." + normalizedPath;
}

const FIGURE_IMAGES_API_URL = apiEndpoint("/api/figure-images");
const TAXONOMY_API_URL = apiEndpoint("/api/taxonomy");
const TAXONOMY_FALLBACK_URL = "./data/taxonomy_index.json?v=20260627-fast-dark-index";
const DATABASE_STATUS_URL = apiEndpoint("/api/database-status");
const COMMENTS_API_URL = apiEndpoint("/api/comments");
const COMMUNITY_CONFIG_URL = apiEndpoint("/api/community/config");
const COMMUNITY_REGISTER_URL = apiEndpoint("/api/community/register");
const COMMUNITY_POSTS_URL = apiEndpoint("/api/community/posts");
const AUTH_REGISTER_URL = apiEndpoint("/api/auth/register");
const AUTH_LOGIN_URL = apiEndpoint("/api/auth/login");
const AUTH_SESSION_URL = apiEndpoint("/api/auth/session");
const AUTH_LOGOUT_URL = apiEndpoint("/api/auth/logout");
const AUTH_FORGOT_PASSWORD_URL = apiEndpoint("/api/auth/forgot-password");
const AUTH_RESET_PASSWORD_URL = apiEndpoint("/api/auth/reset-password");
const CATALOG_FALLBACK_URL = "./data/figures.js";
const PROMOTIONS_API_URL = apiEndpoint("/api/promotions");
const PROMOTIONS_URL = "./data/promotions.json";
const HIGHLIGHTS_URL = "./data/highlights.json";
const TRENDING_PRODUCTS_URL = "./data/trending_products.json";
const CATEGORY_RANKINGS_URL = "./data/category_rankings.json";
const HIGHLIGHTS_LIMIT = 15;
const PLACEHOLDER_YEAR_MARGIN = 2;
const NEW_ARRIVAL_PAST_MONTHS = 3;
const NEW_ARRIVAL_FUTURE_MONTHS = 6;
const FIGURE_PLACEHOLDER_IMAGE = "./assets/figure-placeholder.svg";
const NEKO_LOADING_IMAGE = "./assets/loading/neko-loader.gif";
const NEKO_LOADING_FALLBACK_IMAGE = "./assets/loading/neko-loader.png";
const PROMO_IMAGE_VERSION = "20260705-manga-popup-symmetry";
const POPULAR_SERIES_IMAGE_VERSION = "20260710-series-vertical-frame";
const PROMO_POP_TILES = [
  {
    label: "Figures",
    category: "trending",
    src: `./assets/promo-banners/promo-figures.png?v=${PROMO_IMAGE_VERSION}`,
    alt: "NekoPrice figures"
  },
  {
    label: "Best Offers",
    advisor: "best-offers",
    src: `./assets/promo-banners/promo-best-offers.png?v=${PROMO_IMAGE_VERSION}`,
    alt: "NekoPrice best offers"
  },
  {
    label: "Community",
    section: "community",
    src: `./assets/promo-banners/promo-community.png?v=${PROMO_IMAGE_VERSION}`,
    alt: "NekoPrice community"
  },
  {
    label: "Manga",
    query: "Manga",
    src: `./assets/promo-banners/promo-manga.png?v=${PROMO_IMAGE_VERSION}`,
    alt: "NekoPrice mangas"
  },
  {
    label: "Sales",
    section: "sales",
    src: `./assets/promo-banners/promo-sales.png?v=${PROMO_IMAGE_VERSION}`,
    alt: "NekoPrice sales"
  },
  {
    label: "New Arrivals",
    category: "new",
    src: `./assets/promo-banners/promo-new-arrivals.png?v=${PROMO_IMAGE_VERSION}`,
    alt: "NekoPrice new arrivals"
  }
];
const POPULAR_SERIES_TILES = [
  {
    id: "one-piece",
    label: "One Piece",
    query: "One Piece",
    image: `./assets/series-covers/one-piece.jpg?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["one piece"],
    characters: [
      ["Monkey D. Luffy", "monkey d luffy", "luffy"],
      ["Roronoa Zoro", "roronoa zoro", "zoro"],
      ["Nami", "nami"],
      ["Usopp", "usopp", "sogeking"],
      ["Sanji", "sanji"],
      ["Tony Tony Chopper", "tony tony chopper", "chopper"],
      ["Nico Robin", "nico robin"],
      ["Franky", "cutty flam", "franky"],
      ["Brook", "soul king brook", "brook"],
      ["Jinbe", "jinbe", "jimbei"],
      ["Portgas D. Ace", "portgas d ace", "portgas ace"],
      ["Sabo", "revolutionary sabo", "sabo"],
      ["Shanks", "red haired shanks", "red hair shanks", "shanks"],
      ["Boa Hancock", "boa hancock", "hancock"],
      ["Trafalgar Law", "trafalgar d water law", "trafalgar law", "trafalgar"],
      ["Eustass Kid", "eustass captain kid", "eustass kid"],
      ["Yamato", "yamato"],
      ["Kaido", "kaido of the beasts", "kaido"],
      ["Charlotte Linlin", "charlotte linlin", "big mom"],
      ["Donquixote Doflamingo", "donquixote doflamingo", "doflamingo"],
      ["Crocodile", "sir crocodile", "crocodile"],
      ["Dracule Mihawk", "dracule mihawk", "mihawk"],
      ["Buggy", "buggy the clown", "buggy"],
      ["Gol D. Roger", "gol d roger", "gold roger"],
      ["Edward Newgate", "edward newgate", "whitebeard", "shirohige"],
      ["Marco", "marco the phoenix", "marco"],
      ["Perona", "perona"],
      ["Nefertari Vivi", "nefertari vivi", "vivi"],
      ["Carrot", "mink carrot", "carrot"],
      ["Charlotte Katakuri", "charlotte katakuri", "katakuri"],
      ["Kozuki Oden", "kozuki oden", "kouzuki oden", "oden"],
      ["Uta", "one piece film red uta", "uta"],
      ["Rob Lucci", "rob lucci", "lucci"],
      ["Enel", "god enel", "eneru", "enel"],
      ["Shirahoshi", "princess shirahoshi", "shirahoshi"],
      ["Koby", "captain koby", "coby", "koby"],
      ["Rebecca", "dressrosa rebecca", "rebecca"],
      ["Kozuki Hiyori", "kozuki hiyori", "hiyori"],
      ["Silvers Rayleigh", "silvers rayleigh", "dark king rayleigh", "rayleigh"],
      ["Emporio Ivankov", "emporio ivankov", "ivankov"],
      ["Yasopp", "yasoppu", "yasopp"],
      ["Urouge", "mad monk urouge", "urouge"],
      ["Borsalino", "admiral borsalino", "kizaru", "borsalino"],
      ["Sakazuki", "fleet admiral sakazuki", "akainu", "sakazuki"],
      ["Kuzan", "admiral aokiji", "aokiji", "kuzan"],
      ["Smoker", "captain smoker", "smoker"],
      ["Tashigi", "tashigi"],
      ["Bartolomeo", "bartolomeo"],
      ["Bon Clay", "bentham", "bon clay"],
      ["Gecko Moria", "gecko moria", "moria"],
      ["Marshall D. Teach", "marshall d teach", "blackbeard"],
      ["Killer", "massacre soldier killer", "eustass crew killer"],
      ["Basil Hawkins", "basil hawkins", "hawkins"],
      ["Jewelry Bonney", "jewelry bonney", "bonney"]
    ],
    accent: "#00d4ff"
  },
  {
    id: "solo-leveling",
    label: "Solo Leveling",
    query: "Solo Leveling",
    image: `./assets/series-covers/solo-leveling.png?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["solo leveling", "ore dake level up"],
    characters: [
      ["Sung Jinwoo", "sung jinwoo", "sung jin woo", "jinwoo", "jin-woo"],
      ["Cha Hae-In", "cha hae in", "cha hae-in", "hae-in"],
      ["Igris", "igris"],
      ["Beru", "beru"],
      ["Sung Jinah", "sung jinah", "sung jin ah"],
      ["Yoo Jinho", "yoo jinho", "yoo jin ho"],
      ["Go Gunhee", "go gunhee", "go gun hee"],
      ["Choi Jong-In", "choi jong in", "choi jong-in"],
      ["Baek Yoonho", "baek yoonho", "baek yoon ho"],
      ["Thomas Andre", "thomas andre"],
      ["Liu Zhigang", "liu zhigang"],
      ["Iron", "shadow iron", "kim chul"],
      ["Bellion", "bellion"],
      ["Antares", "monarch of destruction", "antares"],
      ["Esil Radiru", "esil radiru", "esil"],
      ["Woo Jinchul", "woo jinchul", "woo jin chul"],
      ["Hwang Dongsoo", "hwang dongsoo", "hwang dong su"],
      ["Goto Ryuji", "goto ryuji"]
    ],
    accent: "#35d7ff"
  },
  {
    id: "jujutsu-kaisen",
    label: "Jujutsu Kaisen",
    query: "Jujutsu Kaisen",
    image: `./assets/series-covers/jujutsu-kaisen.jpg?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["jujutsu kaisen"],
    characters: [
      ["Satoru Gojo", "satoru gojo", "gojo satoru", "gojo"],
      ["Yuji Itadori", "yuji itadori", "itadori yuji", "itadori"],
      ["Megumi Fushiguro", "megumi fushiguro", "fushiguro megumi"],
      ["Nobara Kugisaki", "nobara kugisaki", "kugisaki nobara"],
      ["Ryomen Sukuna", "ryomen sukuna", "sukuna"],
      ["Suguru Geto", "suguru geto", "geto suguru"],
      ["Yuta Okkotsu", "yuta okkotsu", "yuuta okkotsu", "okkotsu yuta"],
      ["Maki Zenin", "maki zenin", "maki zen'in"],
      ["Toge Inumaki", "toge inumaki", "inumaki toge"],
      ["Panda", "jujutsu kaisen panda"],
      ["Kento Nanami", "kento nanami", "nanami kento"],
      ["Toji Fushiguro", "toji fushiguro", "fushiguro toji"],
      ["Mahito", "jujutsu kaisen mahito", "mahito"],
      ["Choso", "jujutsu kaisen choso", "choso"],
      ["Riko Amanai", "riko amanai", "amanai riko"],
      ["Shoko Ieiri", "shoko ieiri", "ieiri shoko"],
      ["Mei Mei", "jujutsu kaisen mei mei"],
      ["Utahime Iori", "utahime iori", "iori utahime"],
      ["Jogo", "jujutsu kaisen jogo"],
      ["Hanami", "jujutsu kaisen hanami"],
      ["Kasumi Miwa", "kasumi miwa", "miwa kasumi"],
      ["Aoi Todo", "aoi todo", "todo aoi"],
      ["Mai Zenin", "mai zenin", "mai zen'in"],
      ["Noritoshi Kamo", "noritoshi kamo", "kamo noritoshi"],
      ["Kinji Hakari", "kinji hakari", "hakari kinji"],
      ["Kirara Hoshi", "kirara hoshi", "hoshi kirara"],
      ["Naoya Zenin", "naoya zenin", "naoya zen'in"]
    ],
    accent: "#7b2cff"
  },
  {
    id: "chainsaw-man",
    label: "Chainsaw Man",
    query: "Chainsaw Man",
    image: `./assets/series-covers/chainsaw-man.png?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["chainsaw man"],
    characters: [
      ["Denji", "chainsaw man denji", "denji"],
      ["Makima", "makima"],
      ["Power", "power"],
      ["Aki Hayakawa", "aki hayakawa"],
      ["Pochita", "pochita"],
      ["Kobeni Higashiyama", "kobeni higashiyama", "kobeni"],
      ["Himeno", "chainsaw man himeno", "himeno"],
      ["Kishibe", "chainsaw man kishibe", "kishibe"],
      ["Angel Devil", "angel devil"],
      ["Reze", "chainsaw man reze", "reze"],
      ["Quanxi", "chainsaw man quanxi", "quanxi"],
      ["Katana Man", "samurai sword", "katana man"],
      ["Beam", "shark fiend beam", "beam"],
      ["Violence Fiend", "violence fiend", "galgali"],
      ["Asa Mitaka", "asa mitaka"],
      ["Yoru", "war devil yoru", "yoru"],
      ["Nayuta", "chainsaw man nayuta", "nayuta"],
      ["Fami", "famine devil fami", "fami"],
      ["Santa Claus", "chainsaw man santa claus"],
      ["Cosmo", "cosmos fiend", "chainsaw man cosmo"]
    ],
    accent: "#ff4fd8"
  },
  {
    id: "demon-slayer",
    label: "Demon Slayer",
    query: "Demon Slayer",
    image: `./assets/series-covers/demon-slayer.jpg?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["demon slayer", "kimetsu no yaiba"],
    characters: [
      ["Tanjiro Kamado", "tanjiro kamado", "kamado tanjiro", "tanjiro"],
      ["Nezuko Kamado", "nezuko kamado", "kamado nezuko", "nezuko"],
      ["Zenitsu Agatsuma", "zenitsu agatsuma", "agatsuma zenitsu", "zenitsu"],
      ["Inosuke Hashibira", "inosuke hashibira", "hashibira inosuke", "inosuke"],
      ["Giyu Tomioka", "giyu tomioka", "tomioka giyu"],
      ["Kyojuro Rengoku", "kyojuro rengoku", "rengoku kyojuro", "rengoku"],
      ["Shinobu Kocho", "shinobu kocho", "kochou shinobu"],
      ["Mitsuri Kanroji", "mitsuri kanroji", "kanroji mitsuri"],
      ["Muichiro Tokito", "muichiro tokito", "tokito muichiro"],
      ["Tengen Uzui", "tengen uzui", "uzui tengen"],
      ["Sanemi Shinazugawa", "sanemi shinazugawa", "shinazugawa sanemi"],
      ["Obanai Iguro", "obanai iguro", "iguro obanai"],
      ["Gyomei Himejima", "gyomei himejima", "himejima gyomei"],
      ["Kanao Tsuyuri", "kanao tsuyuri", "tsuyuri kanao"],
      ["Genya Shinazugawa", "genya shinazugawa", "shinazugawa genya"],
      ["Muzan Kibutsuji", "muzan kibutsuji", "kibutsuji muzan"],
      ["Akaza", "demon slayer akaza", "kimetsu akaza"],
      ["Doma", "douma", "demon slayer doma"],
      ["Kokushibo", "kokushibo"],
      ["Tamayo", "demon slayer tamayo"],
      ["Yushiro", "demon slayer yushiro"],
      ["Rui", "demon slayer rui"],
      ["Enmu", "demon slayer enmu"],
      ["Daki", "demon slayer daki"],
      ["Gyutaro", "demon slayer gyutaro"],
      ["Sabito", "demon slayer sabito"],
      ["Makomo", "demon slayer makomo"],
      ["Aoi Kanzaki", "aoi kanzaki", "kanzaki aoi"],
      ["Kagaya Ubuyashiki", "kagaya ubuyashiki", "ubuyashiki kagaya"]
    ],
    accent: "#c77dff"
  },
  {
    id: "dragon-ball",
    label: "Dragon Ball",
    query: "Dragon Ball",
    image: `./assets/series-covers/dragon-ball.png?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["dragon ball"],
    characters: [
      ["Goku Black", "goku black"],
      ["Ultra Instinct Goku", "ultra instinct goku", "goku ultra instinct"],
      ["Super Saiyan 4 Goku", "super saiyan 4 goku", "ss4 goku"],
      ["Goku", "son goku", "goku"],
      ["Majin Vegeta", "majin vegeta"],
      ["Vegeta", "vegeta"],
      ["Future Gohan", "future gohan"],
      ["Gohan", "gohan"],
      ["Piccolo", "piccolo"],
      ["Frieza", "frieza", "freeza"],
      ["Bulma", "bulma"],
      ["Future Trunks", "future trunks"],
      ["Trunks", "trunks"],
      ["Goten", "goten"],
      ["Krillin", "krillin", "kuririn"],
      ["Android 18", "android no 18", "android 18", "c18"],
      ["Android 17", "android no 17", "android 17", "c17"],
      ["Android 16", "android no 16", "android 16", "c16"],
      ["Cell", "perfect cell", "cell"],
      ["Majin Buu", "majin buu", "majin boo"],
      ["Kid Buu", "kid buu", "pure buu"],
      ["Broly", "dragon ball broly", "broly"],
      ["Beerus", "beerus", "bills"],
      ["Whis", "dragon ball whis"],
      ["Gogeta", "super gogeta", "gogeta"],
      ["Vegito", "vegetto", "vegito"],
      ["Master Roshi", "master roshi", "kame sennin"],
      ["Chi-Chi", "chi chi", "chichi"],
      ["Videl", "videl"],
      ["Pan", "dragon ball pan"],
      ["Jiren", "jiren"],
      ["Bardock", "bardock", "barduck"],
      ["Raditz", "raditz"],
      ["Nappa", "nappa"],
      ["Zamasu", "fused zamasu", "zamasu"],
      ["Shenron", "super shenron", "shenron", "shenlong"],
      ["Tien Shinhan", "tien shinhan", "tenshinhan"],
      ["Yamcha", "yamcha"],
      ["Chiaotzu", "chiaotzu", "chaos"],
      ["Mr. Satan", "mr satan", "hercule"],
      ["Caulifla", "caulifla"],
      ["Kale", "dragon ball kale"],
      ["Kefla", "kefla"],
      ["Hit", "dragon ball super hit"],
      ["Gamma 1", "gamma 1"],
      ["Gamma 2", "gamma 2"],
      ["Orange Piccolo", "orange piccolo"],
      ["Beast Gohan", "beast gohan", "gohan beast"]
    ],
    accent: "#ffb000"
  },
  {
    id: "naruto",
    label: "Naruto",
    query: "Naruto",
    image: `./assets/series-covers/naruto.jpg?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["naruto"],
    characters: [
      ["Naruto Uzumaki", "naruto uzumaki", "uzumaki naruto"],
      ["Sasuke Uchiha", "sasuke uchiha", "uchiha sasuke"],
      ["Sakura Haruno", "sakura haruno", "haruno sakura"],
      ["Kakashi Hatake", "kakashi hatake", "hatake kakashi"],
      ["Itachi Uchiha", "itachi uchiha", "uchiha itachi"],
      ["Hinata Hyuga", "hinata hyuga", "hyuga hinata", "hyuuga hinata"],
      ["Gaara", "gaara of the sand", "sabaku no gaara", "gaara"],
      ["Madara Uchiha", "madara uchiha", "uchiha madara"],
      ["Obito Uchiha", "obito uchiha", "uchiha obito", "tobi"],
      ["Minato Namikaze", "minato namikaze", "namikaze minato"],
      ["Kushina Uzumaki", "kushina uzumaki", "uzumaki kushina"],
      ["Jiraiya", "jiraiya"],
      ["Tsunade", "senju tsunade", "tsunade"],
      ["Orochimaru", "orochimaru"],
      ["Shikamaru Nara", "shikamaru nara", "nara shikamaru"],
      ["Neji Hyuga", "neji hyuga", "hyuga neji", "hyuuga neji"],
      ["Rock Lee", "rock lee"],
      ["Might Guy", "might guy", "maito gai"],
      ["Pain", "pain tendo", "pain naruto"],
      ["Nagato", "uzumaki nagato", "nagato"],
      ["Konan", "akatsuki konan", "konan"],
      ["Deidara", "deidara"],
      ["Sasori", "sasori of the red sand", "sasori"],
      ["Kisame Hoshigaki", "kisame hoshigaki", "hoshigaki kisame"],
      ["Temari", "sand village temari", "temari"],
      ["Killer Bee", "killer bee", "killer b"],
      ["Boruto Uzumaki", "boruto uzumaki", "uzumaki boruto"],
      ["Sarada Uchiha", "sarada uchiha", "uchiha sarada"],
      ["Mitsuki", "boruto mitsuki"],
      ["Kurama", "nine tails kurama", "kyuubi kurama", "kurama"],
      ["Hashirama Senju", "hashirama senju", "senju hashirama"],
      ["Tobirama Senju", "tobirama senju", "senju tobirama"],
      ["Hiruzen Sarutobi", "hiruzen sarutobi", "sarutobi hiruzen"],
      ["Kabuto Yakushi", "kabuto yakushi", "yakushi kabuto"],
      ["Sai", "naruto shippuden sai"],
      ["Ino Yamanaka", "ino yamanaka", "yamanaka ino"],
      ["Choji Akimichi", "choji akimichi", "chouji akimichi"],
      ["Kiba Inuzuka", "kiba inuzuka", "inuzuka kiba"],
      ["Shino Aburame", "shino aburame", "aburame shino"],
      ["Zabuza Momochi", "zabuza momochi", "momochi zabuza"],
      ["Haku", "naruto haku"],
      ["Kaguya Otsutsuki", "kaguya otsutsuki", "ootsutsuki kaguya"],
      ["Shisui Uchiha", "shisui uchiha", "uchiha shisui"]
    ],
    accent: "#ff7a1a"
  },
  {
    id: "oshi-no-ko",
    label: "Oshi no Ko",
    query: "Oshi no Ko",
    image: `./assets/series-covers/oshi-no-ko.png?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["oshi no ko"],
    characters: [
      ["Ai Hoshino", "ai hoshino"],
      ["Aqua Hoshino", "aquamarine hoshino", "aqua hoshino", "lookup aqua"],
      ["Ruby Hoshino", "ruby hoshino", "lookup ruby"],
      ["Kana Arima", "kana arima", "arima kana"],
      ["Akane Kurokawa", "akane kurokawa", "kurokawa akane"],
      ["Mem-Cho", "mem cho", "mem-cho"],
      ["Miyako Saito", "miyako saito", "saitou miyako"],
      ["Ichigo Saito", "ichigo saito", "saitou ichigo"],
      ["Gorou Amamiya", "gorou amamiya", "goro amemiya"],
      ["Sarina Tendouji", "sarina tendouji", "tendoji sarina"],
      ["Pieyon", "pieyon"],
      ["Frill Shiranui", "frill shiranui", "shiranui frill"],
      ["Minami Kotobuki", "minami kotobuki", "kotobuki minami"],
      ["Taiki Himekawa", "taiki himekawa", "himekawa taiki"],
      ["Melt Narushima", "melt narushima", "narushima melt"]
    ],
    accent: "#ff5bdc"
  },
  {
    id: "rezero",
    label: "Re:Zero",
    query: "Re:Zero",
    image: `./assets/series-covers/rezero.jpg?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["re zero", "re:zero", "rezero"],
    characters: [
      ["Rem", "rem"],
      ["Ram", "ram"],
      ["Emilia", "emilia"],
      ["Subaru Natsuki", "subaru natsuki", "natsuki subaru"],
      ["Beatrice", "beatrice"],
      ["Echidna", "witch of greed echidna", "echidna"],
      ["Elsa Granhiert", "elsa granhiert", "granhiert elsa"],
      ["Felt", "re zero felt"],
      ["Crusch Karsten", "crusch karsten", "karsten crusch"],
      ["Ferris", "felix argyle", "ferris argyle", "ferris"],
      ["Anastasia Hoshin", "anastasia hoshin", "hoshin anastasia"],
      ["Priscilla Barielle", "priscilla barielle", "barielle priscilla"],
      ["Reinhard van Astrea", "reinhard van astrea", "reinhard"],
      ["Julius Juukulius", "julius juukulius", "julius"],
      ["Roswaal L. Mathers", "roswaal l mathers", "roswaal"],
      ["Otto Suwen", "otto suwen"],
      ["Garfiel Tinsel", "garfiel tinsel", "garfiel"],
      ["Petra Leyte", "petra leyte"],
      ["Puck", "re zero puck"],
      ["Satella", "witch of envy satella", "satella"],
      ["Pandora", "re zero pandora"],
      ["Frederica Baumann", "frederica baumann", "baumann frederica"],
      ["Ryuzu Meyer", "ryuzu meyer", "ryuzu"],
      ["Carmilla", "re zero carmilla"],
      ["Minerva", "re zero minerva"],
      ["Sekhmet", "re zero sekhmet"],
      ["Typhon", "re zero typhon"],
      ["Daphne", "re zero daphne"]
    ],
    accent: "#8d7cff"
  },
  {
    id: "pokemon",
    label: "Pokémon",
    query: "Pokemon",
    image: `./assets/series-covers/pokemon.png?v=${POPULAR_SERIES_IMAGE_VERSION}`,
    terms: ["pokemon", "pokémon"],
    characters: [
      ["Pikachu", "pikachu"],
      ["Charizard", "charizard"],
      ["Eevee", "eevee"],
      ["Mewtwo", "mewtwo"],
      ["Lucario", "lucario"],
      ["Ash Ketchum", "ash ketchum", "satoshi"],
      ["Misty", "pokemon misty", "kasumi"],
      ["Brock", "pokemon brock", "takeshi"],
      ["Jessie", "team rocket jessie", "musashi"],
      ["James", "team rocket james", "kojiro"],
      ["Meowth", "team rocket meowth", "meowth", "nyarth"],
      ["Gengar", "gengar"],
      ["Greninja", "greninja"],
      ["Bulbasaur", "bulbasaur"],
      ["Squirtle", "squirtle"],
      ["Charmander", "charmander"],
      ["Snorlax", "snorlax"],
      ["Gardevoir", "gardevoir"],
      ["Rayquaza", "rayquaza"],
      ["Mew", "pokemon mew"],
      ["Lugia", "lugia"],
      ["Ho-Oh", "ho oh", "ho-oh"],
      ["Cynthia", "pokemon cynthia", "shirona"],
      ["Lillie", "pokemon lillie", "lilie"],
      ["N", "pokemon trainer n", "n harmonia"],
      ["Red", "pokemon trainer red"],
      ["Blue", "pokemon trainer blue", "green oak"],
      ["Dawn", "pokemon dawn", "hikari"],
      ["Serena", "pokemon serena"],
      ["Jigglypuff", "jigglypuff"],
      ["Psyduck", "psyduck"],
      ["Vulpix", "vulpix"],
      ["Sylveon", "sylveon"],
      ["Umbreon", "umbreon"],
      ["Espeon", "espeon"],
      ["Dragonite", "dragonite"],
      ["Garchomp", "garchomp"],
      ["Arceus", "arceus"],
      ["Giratina", "giratina"],
      ["Darkrai", "darkrai"],
      ["Celebi", "celebi"],
      ["Jirachi", "jirachi"],
      ["Nessa", "pokemon nessa", "rurina"],
      ["Marnie", "pokemon marnie", "mary trainer"],
      ["Rosa", "pokemon trainer rosa", "mei trainer"]
    ],
    accent: "#ffe66d"
  }
];
const WISHLIST_STORAGE_KEY = "nekopriceWishlist";
const WISHLIST_QUANTITY_STORAGE_KEY = "nekopriceWishlistQuantities";
const CART_STORAGE_KEY = "nekopriceCart";
const USER_PROFILE_STORAGE_KEY = "nekopriceUserProfile";
const COMMUNITY_PROFILE_STORAGE_KEY = "nekopriceCommunityProfile";
const FIGURE_COMMENTS_STORAGE_KEY = "nekopriceFigureComments";
const MARKET_ONBOARDING_STORAGE_KEY = "nekopriceMarketOnboardingV1";
const GAME_CURRENCY_STORAGE_KEY = "nekopriceGameCurrency";
const GAME_HIGHSCORE_STORAGE_KEY = "nekoprice_highscore";
const METADATA_FALLBACK = "Official product";
const PRICE_FALLBACK = "Add price";
const STORE_ACTION_FALLBACK = "View offer";
const SUPPORT_EMAIL = "hello@nekoprice.com";
const STORE_LOGO_VERSION = "20260714-professional-symbols";
const INITIAL_CARD_LIMIT = 48;
const CARD_LIMIT_INCREMENT = 96;
const FIGURE_PAGE_SIZE = 20;
const CATALOGUE_PAGE_LIMIT = 20;
const SERIES_CHARACTER_DISCOVERY_LIMIT = 100;
const SERIES_CHARACTER_DISCOVERY_PAGES = Math.ceil(SERIES_CHARACTER_DISCOVERY_LIMIT / CATALOGUE_PAGE_LIMIT);
const FIGURE_CATALOGUE_AUTOLOAD_MAX_PAGES = 1;
const FIGURE_CATALOGUE_VISIBLE_LIMIT = CATALOGUE_PAGE_LIMIT;
const FIGURE_TAB_PRICE_MAX_EUR = 1000;
const SALES_PRICE_MAX_EUR = 1000;
const PRICE_RANGE_MIN_GAP_EUR = 5;
const DATABASE_AUTO_REFRESH_MS = 30000;
const FIGURE_TYPE_FILTER_GROUPS = [
  {
    label: "Figure format",
    options: [
      { key: "figure", label: "Figures", query: "" },
      { key: "scale_figure", label: "Scale figures", query: "scale figure" },
      { key: "non_scale", label: "Non-scale figures", query: "" },
      { key: "scale_1_3", label: "1/3 scale", query: "1/3 scale" },
      { key: "scale_1_4", label: "1/4 scale", query: "1/4 scale" },
      { key: "scale_1_5", label: "1/5 scale", query: "1/5 scale" },
      { key: "scale_1_6", label: "1/6 scale", query: "1/6 scale" },
      { key: "scale_1_7", label: "1/7 scale", query: "1/7 scale" },
      { key: "scale_1_8", label: "1/8 scale", query: "1/8 scale" },
      { key: "scale_1_9", label: "1/9 scale", query: "1/9 scale" },
      { key: "scale_1_10", label: "1/10 scale", query: "1/10 scale" },
      { key: "scale_1_12", label: "1/12 scale", query: "1/12 scale" },
      { key: "scale_1_18", label: "1/18 scale", query: "1/18 scale" },
      { key: "complete_figure", label: "Complete figures", query: "complete figure" }
    ]
  },
  {
    label: "Popular lines",
    options: [
      { key: "nendoroid", label: "Nendoroids", query: "nendoroid" },
      { key: "nendoroid_doll", label: "Nendoroid Dolls", query: "nendoroid doll" },
      { key: "figma", label: "Figma", query: "figma" },
      { key: "sh_figuarts", label: "S.H.Figuarts", query: "S.H.Figuarts" },
      { key: "figuarts_zero", label: "Figuarts ZERO", query: "Figuarts ZERO" },
      { key: "figuarts_mini", label: "Figuarts Mini", query: "Figuarts Mini" },
      { key: "pop_up_parade", label: "Pop Up Parade", query: "Pop Up Parade" },
      { key: "pop_up_parade_l", label: "Pop Up Parade L", query: "Pop Up Parade L" },
      { key: "look_up", label: "Look Up figures", query: "Look Up" },
      { key: "q_posket", label: "Q Posket", query: "Q Posket" },
      { key: "tenitol", label: "TENITOL", query: "TENITOL" },
      { key: "portrait_of_pirates", label: "Portrait.Of.Pirates", query: "Portrait Of Pirates" },
      { key: "gem_series", label: "G.E.M. Series", query: "G.E.M. Series" },
      { key: "artfx_j", label: "ARTFX J", query: "ARTFX J" },
      { key: "bishoujo", label: "BISHOUJO Series", query: "Bishoujo figure" },
      { key: "variable_action_heroes", label: "Variable Action Heroes", query: "Variable Action Heroes" }
    ]
  },
  {
    label: "Prize and small figures",
    options: [
      { key: "prize_figure", label: "Prize figures", query: "prize figure" },
      { key: "ichiban_kuji", label: "Ichiban Kuji", query: "Ichiban Kuji" },
      { key: "luminasta", label: "Luminasta", query: "Luminasta" },
      { key: "noodle_stopper", label: "Noodle Stopper", query: "Noodle Stopper" },
      { key: "bicute_bunnies", label: "BiCute Bunnies", query: "BiCute Bunnies" },
      { key: "desktop_cute", label: "Desktop Cute", query: "Desktop Cute" },
      { key: "coreful", label: "Coreful", query: "Coreful" },
      { key: "trio_try_it", label: "Trio-Try-iT", query: "Trio Try iT" },
      { key: "relax_time", label: "Relax Time", query: "Relax Time figure" },
      { key: "vibration_stars", label: "Vibration Stars", query: "Vibration Stars" },
      { key: "maximatic", label: "Maximatic", query: "Maximatic figure" },
      { key: "glitter_glamours", label: "Glitter & Glamours", query: "Glitter Glamours" },
      { key: "king_of_artist", label: "King of Artist", query: "King of Artist figure" },
      { key: "grandista", label: "Grandista", query: "Grandista figure" },
      { key: "dxf", label: "DXF", query: "DXF figure" },
      { key: "super_premium", label: "Super Premium (SPM)", query: "Super Premium figure" },
      { key: "perching", label: "Perching figures", query: "Perching figure" },
      { key: "fluffy_puffy", label: "Fluffy Puffy", query: "Fluffy Puffy" },
      { key: "world_collectable", label: "World Collectable Figure", query: "World Collectable Figure" },
      { key: "break_time", label: "Break Time Collection", query: "Break Time Collection" },
      { key: "elcoco", label: "elCOCO figures", query: "elCOCO figure" },
      { key: "trading_figure", label: "Trading figures", query: "trading figure" },
      { key: "mini_chibi", label: "Mini and chibi figures", query: "chibi figure" }
    ]
  },
  {
    label: "Other collectibles",
    options: [
      { key: "action_figure", label: "Action figures", query: "action figure" },
      { key: "poseable", label: "Articulated / poseable", query: "poseable figure" },
      { key: "mafex", label: "MAFEX", query: "MAFEX figure" },
      { key: "revoltech", label: "Revoltech", query: "Revoltech figure" },
      { key: "amazing_yamaguchi", label: "Amazing Yamaguchi", query: "Amazing Yamaguchi" },
      { key: "buzzmod", label: "BUZZmod.", query: "BUZZmod figure" },
      { key: "real_action_heroes", label: "Real Action Heroes", query: "Real Action Heroes" },
      { key: "statue", label: "Statues", query: "statue" },
      { key: "resin_statue", label: "Resin statues", query: "resin statue" },
      { key: "bust", label: "Busts", query: "bust" },
      { key: "diorama", label: "Dioramas", query: "diorama" },
      { key: "model_kit", label: "Model kits", query: "model kit" },
      { key: "gunpla", label: "Gunpla / Gundam models", query: "Gundam model" },
      { key: "metal_build", label: "Metal Build", query: "Metal Build figure" },
      { key: "chogokin", label: "Chogokin", query: "Chogokin figure" },
      { key: "robot_spirits", label: "Robot Spirits", query: "Robot Spirits figure" },
      { key: "garage_kit", label: "Garage kits", query: "garage kit" },
      { key: "vinyl_sofubi", label: "Vinyl / Sofubi", query: "sofubi" },
      { key: "doll", label: "Dolls", query: "doll" },
      { key: "bunny", label: "Bunny figures", query: "bunny figure" },
      { key: "swimsuit", label: "Swimsuit figures", query: "swimsuit figure" },
      { key: "original_character", label: "Original characters", query: "original character" },
      { key: "castoff_adult", label: "Cast-off / 18+", query: "cast off figure" }
    ]
  }
];
const FIGURE_TYPE_FILTER_OPTIONS = FIGURE_TYPE_FILTER_GROUPS.flatMap((group) => group.options);
const FIGURE_PRODUCT_IDENTITY_REPLACEMENTS = [
  ["sung jinwoo mizushino shun", "sung jinwoo"],
  ["mizushino shun", "sung jinwoo"],
  ["shun mizushino", "sung jinwoo"],
  ["sung jin woo", "sung jinwoo"],
  ["trio try it", "triotryit"],
  ["trio try i t", "triotryit"],
  ["xross link", "xrosslink"],
  ["pop up parade", "popupparade"],
  ["s h figuarts", "shfiguarts"],
  ["figuarts zero", "figuartszero"],
  ["noodle stopper", "noodlestopper"],
  ["q posket", "qposket"],
  ["ichiban kuji", "ichibankuji"],
  ["bi cute bunnies", "bicutebunnies"],
  ["nendoroid doll", "nendoroiddoll"]
];
const FIGURE_PRODUCT_IDENTITY_STOP_WORDS = new Set([
  "figure", "figures", "figurine", "figurines", "statue", "statues",
  "official", "licensed", "authentic", "japan", "japanese", "product",
  "collectible", "collection", "complete", "painted", "pvc", "abs",
  "preorder", "pre", "order", "release", "released", "rerelease",
  "rerun", "reissue", "edition", "new", "the", "a", "an", "of",
  "for", "from", "by", "and", "with", "furyu", "fu", "ryu"
]);
const FIGURE_STRONG_PRODUCT_LINE_TOKENS = new Set([
  "triotryit", "xrosslink", "popupparade", "nendoroid", "nendoroiddoll",
  "figma", "shfiguarts", "figuartszero", "noodlestopper", "qposket",
  "ichibankuji", "bicutebunnies", "luminasta", "tenitol", "coreful",
  "bicute", "lookup", "revoltech", "mafex", "espresto"
]);
const FIGURE_LOGO_PRODUCT_RE = /\bthe\s+gi(?:ant|gant)\s+name\b|\b(?:series|franchise|title)\s+logos?\b|\b(?:logos?\s+(?:display|figure|statue|ornament|plaque|plate|block|replica)|(?:display|statue|ornament|plaque|plate|block|replica)\s+logos?)\b/i;
const FIGURE_SERIES_ART_IMAGE_RE = /(?:^|[_\-.])the[_\-.]?gi(?:ant|gant)[_\-.]?name(?:[_\-.]|$)|(?:^|[/_\-.])(?:series|franchise|category|collection)[_\-.]?(?:logo|banner)(?:[/_\-.]|$)/i;
const FIGURE_NON_PRODUCT_IDENTITY_TERMS = [
  "nendoroid plus", "nendoroid more", "outfit set", "customizable face",
  "acrylic stand", "acrylic key", "keychain", "key chain", "rubber strap",
  "rubber charm", "plush", "plushie", "towel", "badge", "pin badge", "pouch",
  "clear file", "mug", "shirt", "shoe", "shoes", "hat", "bag", "dakimakura", "wall scroll"
];
const PREMIUM_FIGURE_FALLBACK_IMAGES = [
  "https://static.myfigurecollection.net/upload/items/1/121-7b7b8.jpg",
  "https://static.myfigurecollection.net/upload/items/1/141-130d9.jpg",
  "https://static.myfigurecollection.net/upload/items/1/2780665-0b008.jpg",
  "https://static.myfigurecollection.net/upload/items/1/120-37149.jpg",
  "https://static.myfigurecollection.net/upload/items/1/107-07e48.jpg",
  "https://static.myfigurecollection.net/upload/items/1/1662083-b8430.jpg",
  "https://static.myfigurecollection.net/upload/items/1/2164263-52edd.jpg",
  "https://static.myfigurecollection.net/upload/items/1/1224608-5edd4.jpg",
  "https://static.myfigurecollection.net/upload/items/1/2780665-0b008.jpg",
  "https://static.myfigurecollection.net/upload/items/1/123-94a96.jpg"
];
const LOW_QUALITY_IMAGE_RE = /(figure-placeholder|placeholder|noimage|no-image|sp_header|sitecontents\/header|logo|banner|sprite|loading|blank|thumbsup|image[-_ ]?coming[-_ ]?soon|coming[-_ ]?soon|awaiting[-_ ]?image|no[-_ ]?photo|(?:instagram|facebook|twitter|pinterest)[-_]?icon|social[-_]?icon|favicon|\/icons?\/|[_-](?:16|24|32|40|48|64)x(?:[._?]|$))/i;
const EMPTY_EXCHANGE_RATES = { EUR: 1 };
const CURRENCY_OPTIONS = {
  EUR: "Euro",
  JPY: "Japanese yen",
  USD: "US dollar",
  GBP: "British pound",
  BRL: "Brazilian real",
  AUD: "Australian dollar",
  CAD: "Canadian dollar",
  MXN: "Mexican peso",
  PHP: "Philippine peso",
  SGD: "Singapore dollar",
  NZD: "New Zealand dollar",
  CHF: "Swiss franc",
  PLN: "Polish zloty",
  CZK: "Czech koruna",
  SEK: "Swedish krona",
  NOK: "Norwegian krone",
  DKK: "Danish krone"
};
const GAME_CURRENCIES = ["EUR", "BRL", "USD", "JPY", "GBP"];
const CURRENCY_SYMBOLS = {
  EUR: "€",
  BRL: "R$",
  USD: "US$",
  JPY: "¥",
  GBP: "£",
  AUD: "A$",
  CAD: "C$",
  MXN: "MX$",
  PHP: "₱",
  SGD: "S$",
  NZD: "NZ$",
  CHF: "CHF",
  PLN: "zł",
  CZK: "Kč",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr"
};
const MIN_STORE_PRICE_BY_CURRENCY = {
  ninningame: {
    JPY: 1000,
    EUR: 5,
    USD: 5,
    GBP: 5
  }
};
const BLOCKED_OFFER_VALIDATION_STATUSES = new Set(["rejected", "fake", "suspicious", "gone", "blocked"]);
const WARNING_OFFER_VALIDATION_STATUSES = new Set(["currency_unverified", "price_unverified", "stale", "unverified"]);
const SECOND_HAND_PROVIDER_IDS = new Set(["amiami_preowned", "mandarake", "solaris_preowned", "surugaya_preowned"]);
const OFFER_PUBLIC_MIN_EUR = 1;
const OFFER_PUBLIC_MAX_EUR = 2500;

const LOCAL_PROVIDERS = [
  { id: "mfc", name: "MyFigureCollection", country: "Global", trust: "Figure database reference", url: "https://myfigurecollection.net/" },
  { id: "amiami", name: "AmiAmi", country: "Japan", trust: "Leading Japanese retailer", url: "https://www.amiami.com/" },
  { id: "amiami_preowned", name: "AmiAmi Pre-owned", country: "Japan", trust: "Official AmiAmi pre-owned catalogue", url: "https://www.amiami.com/eng/search/list/?s_st_condition_flg=1" },
  { id: "solaris", name: "Solaris Japan", country: "Japan", trust: "Worldwide anime figure store", url: "https://solarisjapan.com/" },
  { id: "solaris_preowned", name: "Solaris Pre-owned", country: "Japan", trust: "Official Solaris pre-owned variants", url: "https://solarisjapan.com/collections/figures" },
  { id: "surugaya_preowned", name: "Suruga-ya Used", country: "Japan", trust: "Official in-stock Suruga-ya used catalogue", url: "https://www.suruga-ya.com/en/products?category=50102" },
  { id: "goodsmile", name: "Good Smile Company", country: "Japan", trust: "Official store", url: "https://www.goodsmile.info/" },
  { id: "hobbygenki", name: "Hobby Genki", country: "Japan", trust: "Japanese hobby retailer", url: "https://hobby-genki.com/" },
  { id: "kappahobby", name: "Kappa Hobby", country: "United States", trust: "US anime figure retailer", url: "https://www.kappahobby.com/" },
  { id: "hypertoys", name: "Hyper Toys", country: "Europe", trust: "Anime and hobby figure store", url: "https://hyper-toys.com/" },
  { id: "ninningame", name: "Nin-Nin Game", country: "Japan", trust: "Japanese anime figure retailer", url: "https://www.nin-nin-game.com/" },
  { id: "ninoma", name: "Ninoma", country: "Japan", trust: "Japanese anime figure proxy store", url: "https://ninoma.com/" },
  { id: "otaku_owlet", name: "Otaku Owlet", country: "United States", trust: "US anime figure retailer", url: "https://otakuowlet.com/" },
  { id: "hobby_bee", name: "Hobby Bee", country: "Canada", trust: "Canadian anime figure retailer", url: "https://hobby-bee.com/" },
  { id: "gundam_planet", name: "Gundam Planet", country: "United States", trust: "US figure and hobby retailer", url: "https://www.gundamplanet.com/" },
  { id: "japan_figure", name: "Japan Figure", country: "Japan", trust: "Japanese collectibles retailer", url: "https://japan-figure.com/" },
  { id: "mandarake", name: "Mandarake", country: "Japan", trust: "Japanese collectible marketplace", url: "https://order.mandarake.co.jp/" },
  { id: "lunar_toy_store", name: "Lunar Toy Store", country: "United States", trust: "Anime figure retailer", url: "https://www.lunartoystore.com/" },
  { id: "meccha_japan", name: "Meccha Japan", country: "Japan", trust: "Japanese anime figure retailer", url: "https://meccha-japan.com/" },
  { id: "navito_world", name: "Navito World", country: "Canada", trust: "Anime figure and collectible store", url: "https://www.navitoworld.com/" },
  { id: "pixelatoy", name: "Pixelatoy", country: "Spain", trust: "Spanish figure and collectible store", url: "https://www.pixelatoy.com/" },
  { id: "sugo_toys", name: "Sugo Toys", country: "Australia", trust: "Anime figure and statue store", url: "https://sugotoys.com.au/" },
  { id: "crunchyroll", name: "Crunchyroll Store", country: "United States", trust: "Official store", url: "https://store.crunchyroll.com/" },
  { id: "bbts", name: "BigBadToyStore", country: "United States", trust: "Major US retailer", url: "https://www.bigbadtoystore.com/" },
  { id: "anixways", name: "AniWays", country: "Portugal", trust: "Portuguese anime collectibles store", url: "https://anixways.com/shop/" },
  { id: "tamashiinations_es", name: "Tamashii Nations España", country: "Spain", trust: "Official Tamashii Nations Spain store", url: "https://tamashiinations.es/" },
  { id: "kurogami", name: "Kurogami", country: "Spain", trust: "Spanish anime figure and manga store", url: "https://kurogami.com/en" },
  { id: "momostore", name: "Momo Store", country: "Spain", trust: "Barcelona Asian culture and collectibles store", url: "https://www.momostore.es/en" },
  { id: "ichibantoys", name: "Ichiban Toys", country: "Spain", trust: "Barcelona manga and anime figure store", url: "https://ichibantoys.es/" },
  { id: "otakujapanstore", name: "Otaku Japan Store", country: "Spain", trust: "Spanish official anime figure store", url: "https://otakujpstore.com/tienda/" },
  { id: "mangatori", name: "Mangatori", country: "France", trust: "French official manga and anime figure store", url: "https://www.mangatori.fr/" },
  { id: "ninpon", name: "Ninpon", country: "Europe", trust: "Official anime and gaming figure store", url: "https://ninpon.com/" },
  { id: "otakufigur", name: "Otakufiguren", country: "Germany", trust: "German licensed anime figure store", url: "https://otakufigur.de/" },
  { id: "kyojin", name: "Kyojin", country: "Germany", trust: "German original anime figure store", url: "https://kyojin.de/" },
  { id: "hanamiflower", name: "Hanamiflower", country: "Germany", trust: "German anime and game figure store", url: "https://www.hanamiflower.de/" },
  { id: "kitsuystore", name: "Kitsuy Store", country: "Brazil", trust: "Brazilian anime and Japanese culture store", url: "https://kitsuystore.com.br/" },
  { id: "nyanaction", name: "Nyan Action Figures", country: "Brazil", trust: "Brazilian action figure store", url: "https://nyanactionfigures.com.br/" },
  { id: "unfoldstore", name: "Unfold Store", country: "Brazil", trust: "Brazilian original action figure store", url: "https://www.unfoldstore.com.br/" },
  { id: "gaijinstore", name: "Gaijin Store", country: "Brazil", trust: "Brazilian anime collectibles store", url: "https://www.gaijinstore.com.br/" },
  { id: "super_anime_store", name: "Super Anime Store", country: "United States", trust: "US anime figure retailer", url: "https://superanimestore.com/" },
  { id: "animeworks", name: "Animeworks", country: "Australia", trust: "Australian anime figure retailer", url: "https://animeworks.com.au/" },
  { id: "shumi_shop", name: "Shumi Shop", country: "Australia", trust: "Australian anime figure retailer", url: "https://www.shumishop.com.au/" },
  { id: "mega_culture", name: "Mega Culture", country: "Australia", trust: "Good Smile partner shop", url: "https://www.megaculture.com.au/" },
  { id: "ctbox_manila", name: "Collector's Toy Box", country: "Philippines", trust: "Good Smile partner shop", url: "https://www.ctboxmanila.com/" },
  { id: "toycoin_sg", name: "ToyCoin", country: "Singapore", trust: "Good Smile partner shop", url: "https://www.toycoin.com.sg/" },
  { id: "geeklove_ph", name: "GeekLove PH", country: "Philippines", trust: "Good Smile partner shop", url: "https://geekloveph.com/" },
  { id: "akibara_xpress", name: "Akibara Xpress", country: "Mexico", trust: "Good Smile partner shop", url: "https://www.akibaraxpress.com/" }
];

const STORE_SITE_LOGOS = {
  amiami: "./assets/store-logos/amiami.png",
  amiami_preowned: "./assets/store-logos/amiami.png",
  anixways: "./assets/store-logos/anixways.png",
  bbts: "./assets/store-logos/bbts.png",
  crunchyroll: "./assets/store-logos/crunchyroll.png",
  gaijinstore: "./assets/store-logos/gaijinstore.png",
  goodsmile: "./assets/store-logos/goodsmile.png",
  hanamiflower: "./assets/store-logos/hanamiflower.png",
  hobbygenki: "./assets/store-logos/hobbygenki.png",
  kappahobby: "./assets/store-logos/kappahobby.png",
  hypertoys: "./assets/store-logos/hypertoys.png",
  ichibantoys: "./assets/store-logos/ichibantoys.png",
  kitsuystore: "./assets/store-logos/kitsuystore.png",
  kurogami: "./assets/store-logos/kurogami.png",
  kyojin: "./assets/store-logos/kyojin.png",
  lunar_toy_store: "./assets/store-logos/lunar_toy_store.png",
  mandarake: "./assets/store-logos/mandarake.png",
  mangatori: "./assets/store-logos/mangatori.png",
  mfc: "./assets/store-logos/mfc.png",
  momostore: "./assets/store-logos/momostore.png",
  navito_world: "./assets/store-logos/navito_world.png",
  ninningame: "./assets/store-logos/ninningame.png",
  ninoma: "./assets/store-logos/ninoma.png",
  ninpon: "./assets/store-logos/ninpon.png",
  nyanaction: "./assets/store-logos/nyanaction.png",
  otakufigur: "./assets/store-logos/otakufigur.png",
  otakujapanstore: "./assets/store-logos/otakujapanstore.png",
  pixelatoy: "./assets/store-logos/pixelatoy.png",
  solaris: "./assets/store-logos/solaris.png",
  solaris_preowned: "./assets/store-logos/solaris.png",
  sugo_toys: "./assets/store-logos/sugo_toys.png",
  tamashiinations_es: "./assets/store-logos/tamashiinations_es.png",
  unfoldstore: "./assets/store-logos/unfoldstore.png"
};

const STORE_SITE_LOGO_ALIASES = {
  "bigbadtoystore": "bbts",
  "bigbadtoystore_store": "bbts",
  "good_smile": "goodsmile",
  "good_smile_company": "goodsmile",
  "hyper_toys": "hypertoys",
  "kappa_hobby": "kappahobby",
  "lunar": "lunar_toy_store",
  "lunar_toy_store": "lunar_toy_store",
  "meccha": "meccha_japan",
  "meccha_japan": "meccha_japan",
  "meccha_japan_store": "meccha_japan",
  "navito": "navito_world",
  "navito_world": "navito_world",
  "nin_nin": "ninningame",
  "nin_nin_game": "ninningame",
  "solaris_japan": "solaris",
  "sugo_toys": "sugo_toys",
  "tamashii_nations_espana": "tamashiinations_es",
  "tamashii_nations_espa_a": "tamashiinations_es"
};

const STORE_CAROUSEL_LOGO_KEYS = new Set([
  "crunchyroll",
  "goodsmile",
  "hanamiflower",
  "kappahobby",
  "lunar_toy_store",
  "mandarake",
  "navito_world",
  "ninningame",
  "ninoma",
  "pixelatoy",
  "solaris",
  "sugo_toys"
]);

const COUNTRY_PROFILES = {
  PT: {
    label: "Portugal",
    currency: "EUR",
    taxRate: 0.23,
    providerIds: ["anixways", "hobbygenki", "ninningame", "amiami", "solaris", "goodsmile", "mandarake", "crunchyroll"],
    localProviderIds: ["anixways"],
    shipping: { anixways: 4.95, hobbygenki: 11.7, ninningame: 13.4, amiami: 12.9, solaris: 14.4, goodsmile: 16.9, mandarake: 14.9, crunchyroll: 9.9 },
    priceFactor: { anixways: 1.12 }
  },
  ES: {
    label: "Spain",
    currency: "EUR",
    taxRate: 0.21,
    providerIds: ["tamashiinations_es", "kurogami", "momostore", "ichibantoys", "otakujapanstore", "hobbygenki", "ninningame", "amiami", "solaris", "goodsmile", "mandarake"],
    localProviderIds: ["tamashiinations_es", "kurogami", "momostore", "ichibantoys", "otakujapanstore"],
    shipping: { tamashiinations_es: 4.95, kurogami: 5.5, momostore: 5.9, ichibantoys: 5.5, otakujapanstore: 4.9, hobbygenki: 12.9, ninningame: 14.2, amiami: 13.9, solaris: 14.9, goodsmile: 17.4, mandarake: 15.4 },
    priceFactor: { tamashiinations_es: 1.15, kurogami: 1.13, momostore: 1.12, ichibantoys: 1.12, otakujapanstore: 1.1 }
  },
  FR: {
    label: "France",
    currency: "EUR",
    taxRate: 0.2,
    providerIds: ["mangatori", "ninpon", "crunchyroll", "hobbygenki", "ninningame", "amiami", "solaris", "goodsmile", "mandarake"],
    localProviderIds: ["mangatori", "ninpon"],
    shipping: { mangatori: 5.9, ninpon: 6.5, crunchyroll: 8.9, hobbygenki: 12.8, ninningame: 14.1, amiami: 13.9, solaris: 14.9, goodsmile: 17.4, mandarake: 15.4 },
    priceFactor: { mangatori: 1.13, ninpon: 1.12 }
  },
  DE: {
    label: "Germany",
    currency: "EUR",
    taxRate: 0.19,
    providerIds: ["otakufigur", "kyojin", "hanamiflower", "crunchyroll", "hobbygenki", "ninningame", "amiami", "solaris", "goodsmile", "mandarake"],
    localProviderIds: ["otakufigur", "kyojin", "hanamiflower", "figuya"],
    shipping: { otakufigur: 4.95, kyojin: 5.9, hanamiflower: 5.9, crunchyroll: 8.9, hobbygenki: 12.8, ninningame: 14.1, amiami: 13.9, solaris: 14.9, goodsmile: 17.4, mandarake: 15.4 },
    priceFactor: { otakufigur: 1.11, kyojin: 1.1, hanamiflower: 1.12 }
  },
  UK: {
    label: "United Kingdom",
    currency: "GBP",
    taxRate: 0.2,
    providerIds: ["ninpon", "crunchyroll", "goodsmile", "amiami", "solaris", "hobbygenki", "ninningame", "mandarake"],
    localProviderIds: ["ninpon", "hobbyfigures", "curibo"],
    shipping: { ninpon: 7.9, crunchyroll: 9.9, goodsmile: 18.5, amiami: 15.9, solaris: 16.9, hobbygenki: 14.9, ninningame: 15.8, mandarake: 16.4 },
    priceFactor: { ninpon: 1.13 }
  },
  US: {
    label: "United States",
    currency: "USD",
    taxRate: 0.08,
    providerIds: ["crunchyroll", "bbts", "goodsmile", "amiami", "solaris", "hobbygenki", "ninningame", "mandarake"],
    localProviderIds: ["crunchyroll", "bbts", "goodsmile_us", "kappahobby", "gundam_planet", "lunar_toy_store", "otaku_owlet", "tokullectibles", "super_anime_store"],
    shipping: { crunchyroll: 7.9, bbts: 8.9, goodsmile: 9.9, amiami: 18.9, solaris: 17.9, hobbygenki: 16.9, ninningame: 17.5, mandarake: 18.2 },
    priceFactor: { crunchyroll: 1.12, bbts: 1.08, goodsmile: 1 }
  },
  BR: {
    label: "Brazil",
    currency: "BRL",
    taxRate: 0.17,
    providerIds: ["kitsuystore", "nyanaction", "unfoldstore", "gaijinstore", "amiami", "solaris", "goodsmile", "hobbygenki", "ninningame", "mandarake"],
    localProviderIds: ["kitsuystore", "nyanaction", "unfoldstore", "gaijinstore"],
    shipping: { kitsuystore: 6.9, nyanaction: 7.9, unfoldstore: 7.5, gaijinstore: 6.5, amiami: 22.9, solaris: 21.9, goodsmile: 24.9, hobbygenki: 22.4, ninningame: 23.1, mandarake: 23.8 },
    priceFactor: { kitsuystore: 1.24, nyanaction: 1.2, unfoldstore: 1.22, gaijinstore: 1.19 }
  },
  JP: {
    label: "Japan",
    currency: "JPY",
    taxRate: 0.1,
    providerIds: ["amiami", "goodsmile", "hobbygenki", "ninningame", "solaris", "mandarake"],
    localProviderIds: ["amiami", "goodsmile", "hobbygenki", "ninningame", "solaris", "mandarake", "ninoma", "animota", "japan_figure", "hlj", "plazajapan", "nipponfigures"],
    shipping: { amiami: 4.8, goodsmile: 5.5, hobbygenki: 5.2, ninningame: 5.8, solaris: 5.9, mandarake: 5.4 },
    priceFactor: { amiami: 0.92, goodsmile: 1, hobbygenki: 0.98, solaris: 1.03 }
  },
  CA: {
    label: "Canada",
    currency: "CAD",
    localProviderIds: ["hobby_bee", "navito_world"],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  AU: {
    label: "Australia",
    currency: "AUD",
    localProviderIds: ["sugo_toys", "animeworks", "shumi_shop", "mega_culture"],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  NZ: {
    label: "New Zealand",
    currency: "NZD",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  SG: {
    label: "Singapore",
    currency: "SGD",
    localProviderIds: ["toycoin_sg"],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  PH: {
    label: "Philippines",
    currency: "PHP",
    localProviderIds: ["ctbox_manila", "geeklove_ph"],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  MX: {
    label: "Mexico",
    currency: "MXN",
    localProviderIds: ["akibara_xpress"],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  IT: {
    label: "Italy",
    currency: "EUR",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  FI: {
    label: "Finland",
    currency: "EUR",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  BE: {
    label: "Belgium",
    currency: "EUR",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  NL: {
    label: "Netherlands",
    currency: "EUR",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  IE: {
    label: "Ireland",
    currency: "EUR",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  AT: {
    label: "Austria",
    currency: "EUR",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  CH: {
    label: "Switzerland",
    currency: "CHF",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  PL: {
    label: "Poland",
    currency: "PLN",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  CZ: {
    label: "Czechia",
    currency: "CZK",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  SE: {
    label: "Sweden",
    currency: "SEK",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  NO: {
    label: "Norway",
    currency: "NOK",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  DK: {
    label: "Denmark",
    currency: "DKK",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  },
  INTL: {
    label: "Other / International",
    currency: "USD",
    localProviderIds: [],
    providerIds: [],
    shipping: {},
    priceFactor: {}
  }
};

const HEADER_MARKET_COUNTRY_ORDER = [
  "US",
  "UK",
  "PT",
  "ES",
  "FR",
  "DE",
  "IT",
  "NL",
  "BE",
  "CH",
  "JP",
  "CA",
  "AU",
  "BR",
  "MX",
  "SG",
  "PH",
  "INTL"
];

const CATEGORY_LABELS = {
  trending: "All figures",
  new: "New releases",
  nendoroids: "Nendoroids",
  scale: "Scale figures",
  prize: "Prize figures",
  figma: "Figma",
  pop: "Pop Up Parade",
  action: "Action figures",
  castoff: "Cast-Off (18+)",
  figuarts: "Figuarts",
  bunny: "Bunny / 1/4 figures",
  mecha: "Mecha figures",
  model: "Model kits",
  statue: "Statues",
  preorder: "Pre-orders"
};

const FIGURE_QUICK_FILTER_LABELS = {
  in_stock_alt: "In-Stock",
  ecchi: "Ecchi",
  adult_18: "+18",
  sales: "Sales",
  new: "New",
  poseable: "Poseable Figure",
  preorder: "Pre-order"
};

const SALES_QUICK_FILTER_LABELS = {
  price_drop: "Price drop",
  store_sale: "Store sale",
  discount_20: "20%+ off",
  discount_40: "40%+ off",
  local_store: "Local store",
  recent: "Recently checked"
};

const TAXONOMY_BROWSER_CONFIG = {
  franchises: {
    title: "All Franchises",
    eyebrow: "Figure index",
    subtitle: "Series and franchises found in the NekoPrice figure catalogue, grouped by letter.",
    field: "series",
    hash: "#franchises",
    itemLabel: "franchise"
  },
  characters: {
    title: "All Characters",
    eyebrow: "Figure index",
    subtitle: "Character names found in the NekoPrice figure catalogue, grouped by letter.",
    field: "character",
    hash: "#characters",
    itemLabel: "character"
  }
};

const OFFER_DONUT_BORDER = "#1a1a2e";
const OFFER_DONUT_LABEL = "#f8f9fa";
const OFFER_DONUT_COLORS = [
  "#c4b5fd",
  "#fff0b8",
  "#a7f3d0",
  "#f9a8d4",
  "#93c5fd",
  "#fca5a5",
  "#fde68a",
  "#5eead4",
  "#f0abfc",
  "#bfdbfe"
];

const TRENDING_SEARCH_TERMS = [
  "Frieren",
  "Hatsune Miku",
  "Satoru Gojo",
  "Makima Chainsaw Man",
  "Power Chainsaw Man",
  "Asuka Shikinami",
  "Saber Altria",
  "Marin Kitagawa",
  "Naruto Uzumaki",
  "Sakura Miku",
  "Madoka Kaname",
  "Anya Forger",
  "Megumin",
  "Bocchi",
  "Demon Slayer",
  "Jujutsu Kaisen",
  "Evangelion",
  "Re:ZERO",
  "Hololive",
  "POP UP PARADE",
  "Bunny Ver"
];

const NON_FIGURE_PRODUCT_TERMS = [
  "acrylic",
  "apparel",
  "badge",
  "bag",
  "blanket",
  "blu ray",
  "blu-ray",
  "bluray",
  "book",
  "booster",
  "card",
  "cards",
  "charm",
  "clear file",
  "clothing",
  "cap",
  "comic",
  "cd",
  "disc",
  "drama cd",
  "dvd",
  "game",
  "glass",
  "goods",
  "hat",
  "hoodie",
  "jacket",
  "keychain",
  "key chain",
  "key holder",
  "magnet",
  "manga",
  "mangas",
  "mascot",
  "model kit",
  "mug",
  "outfit set",
  "paint",
  "pin",
  "plastic model",
  "playstation",
  "ps2",
  "ps3",
  "ps4",
  "ps5",
  "plush",
  "poster",
  "puzzle",
  "rubber",
  "scarf",
  "shirt",
  "socks",
  "soundtrack",
  "sticker",
  "strap",
  "sweatshirt",
  "sleeve",
  "sleeves",
  "switch",
  "tenugui",
  "towel",
  "t shirt",
  "trading card",
  "video game",
  "wall scroll",
  "wallet",
  "xbox"
].map(normalizeText);

const MANGA_PRODUCT_TERMS = [
  "manga",
  "mangas",
  "comic book",
  "graphic novel",
  "doujin",
  "doujinshi",
  "light novel",
  "omnibus",
  "tankobon",
  "tankoubon"
].map(normalizeText);

const MANGA_FALSE_POSITIVE_RE =
  /\b(?:manga|comic|novel|light novel)\s+ver(?:sion)?\.?\b|\bver(?:sion)?\.?\b|\billustration by\b|\bero manga sensei\b|\blearning with manga\b|\btoei manga matsuri\b|\bgame book\b|\bguide book\b|\bbook of capture\b/i;

const MANGA_VOLUME_SIGNAL_RE = /\b(?:vol|volume|chapter|chapters|part|hen)\b|\bvol\.\s*\d+/i;

const MANGA_EXCLUDED_PRODUCT_TERMS = [
  "acrylic",
  "badge",
  "blu ray",
  "blu-ray",
  "bluray",
  "booster",
  "booster pack",
  "bunny",
  "card",
  "cards",
  "cd",
  "collectible",
  "cover girl",
  "cushion",
  "dvd",
  "drawing set",
  "figure",
  "figures",
  "figurine",
  "game",
  "good smile company",
  "hasbro",
  "kadokawa",
  "keychain",
  "key holder",
  "kit",
  "metal",
  "mini metal",
  "model kit",
  "play mat",
  "playmat",
  "play arts",
  "playstation",
  "plastic model",
  "plush",
  "poster",
  "puzzle",
  "replica",
  "rubber",
  "scale",
  "sleeve",
  "sleeves",
  "soundtrack",
  "statue",
  "sticker",
  "strap",
  "switch",
  "trading card",
  "video game",
  "wall scroll",
  "xbox"
].map(normalizeText);

const FIGURE_PRODUCT_TERMS = [
  "action figure",
  "anime figure",
  "artfx",
  "artfx j",
  "b style",
  "bicute bunnies",
  "capsule figure",
  "chokonose",
  "chimi mega",
  "chimimega",
  "complete figure",
  "coreful",
  "desktop cute",
  "exq figure",
  "figure",
  "figures",
  "figma",
  "figuarts",
  "figuarts mini",
  "figuartszero",
  "figure collection",
  "figure complex",
  "figura",
  "figurine",
  "f nex",
  "furyu",
  "g e m series",
  "gem series",
  "glitter glamours",
  "grandista",
  "hello good smile",
  "ichiban kuji",
  "ichibankuji",
  "ichibansho",
  "kdcolle",
  "king of artist",
  "kyunties",
  "look up",
  "lookup",
  "luminasta",
  "mafex",
  "master stars piece",
  "minissimo",
  "nendoroid",
  "noodle stopper",
  "palv",
  "palverse",
  "pop up parade",
  "popup parade",
  "portrait of pirates",
  "prize figure",
  "q posket",
  "rah",
  "real action heroes",
  "revoltech",
  "scale figure",
  "scultures",
  "sh figuarts",
  "s h figuarts",
  "statue",
  "statue legend",
  "super action statue",
  "super figure",
  "super master stars piece",
  "tenitol",
  "vibration stars",
  "world figure colosseum",
  "world collectible figure"
].map(normalizeText);

const MERCHANDISE_SEARCH_TERMS = [
  "manga",
  "mangas",
  "plush",
  "plushie",
  "plushies",
  "goods",
  "sale"
].map(normalizeText);

const SENSITIVE_VISUAL_KEYWORDS = [
  "Bikini",
  "Swimsuit",
  "Swimwear",
  "Beach",
  "Summer Ver",
  "Bunny Ver",
  "Bunny Version",
  "Bunny Girl",
  "B-style",
  "Cast-Off",
  "Native",
  "Bare leg",
  "Bare Leg Bunny",
  "Lingerie",
  "Underwear",
  "Fishnet",
  "Fishnets",
  "Leotard",
  "Skimpy",
  "Sexy",
  "Succubus",
  "Dakimakura",
  "R18",
  "18+",
  "Bathing Suit",
  "Gravure",
  "NSFW"
];
const SENSITIVE_VISUAL_TERMS = SENSITIVE_VISUAL_KEYWORDS.map(normalizeText);
const HIGH_CONFIDENCE_SENSITIVE_TERMS = [
  "cast off",
  "native",
  "nsfw",
  "r18",
  "18",
  "lingerie",
  "underwear",
  "bikini",
  "swimsuit",
  "bathing suit",
  "bunny girl",
  "b style",
  "bare leg bunny"
].map(normalizeText);

let catalogueReady = false;
let catalogue = {
  resultLimit: 30,
  providers: [],
  figures: []
};
let providers = [];
let figures = [];
let highlightFigures = [];
let trendingProducts = [];
let hotPreorders = [];
let categoryRankings = { generatedAt: "", categories: {} };
const categoryRankingIndexCache = new Map();
let promotionsCache = [];
let promotionFigureKeys = new Set();
let promotionsLoaded = false;
let promotionsLoadingPromise = null;
let selectedFigureId = null;
let productGalleryState = {
  figureId: null,
  images: [],
  index: 0,
  requestId: 0,
  failedUrls: new Set()
};
let hasSearched = false;
let sortAscending = true;
let wishlist = loadWishlist();
let wishlistQuantities = loadWishlistQuantities();
let wishlistViewMode = "single";
let cart = loadCart();
let userProfile = loadUserProfile();
let searchDebounceId = null;
let visibleCardLimit = INITIAL_CARD_LIMIT;
let figureCurrentPage = 1;
let cataloguePagination = {
  enabled: false,
  page: 0,
  limit: CATALOGUE_PAGE_LIMIT,
  total: 0,
  hasMore: false,
  nextPage: 1,
  loading: false,
  query: "",
  kind: ""
};
let catalogueSearchPending = null;
let figureFilterRefreshPending = null;
let figureFilterRefreshSequence = 0;
let trendingFigureIds = null;
let apiSearchRunId = 0;
let figureCatalogueAutoLoadId = 0;
let seriesCatalogueHydrationId = 0;
let activeMfcFigureId = null;
let priceHistoryChartInstance = null;
let offerDonutChartInstance = null;
let heroShowcaseAutoScrollId = null;
let heroShowcasePaused = false;
let figureStoreCarouselAnimationFrame = null;
let figureStoreCarouselPreviousTimestamp = 0;
let figureStoreCarouselRunId = 0;
let figureStoreCarouselOffset = 0;
let figureStoreCarouselPaused = false;
let figureStoreCarouselVelocity = 0;
let figureStoreCarouselSuppressClickUntil = 0;
const figureStoreCarouselDrag = {
  active: false,
  pointerId: null,
  startX: 0,
  startOffset: 0,
  lastX: 0,
  lastTimestamp: 0,
  moved: false
};
let exchangeRates = { ...EMPTY_EXCHANGE_RATES };
let exchangeRateMeta = { source: "unavailable", date: "", snapshotId: "", stale: true };
let databaseRefreshTimer = null;
let databaseRefreshInFlight = false;
let latestDatabaseStatus = null;
let showMoreScrollTicking = false;
let activeView = "home";
let catalogueLoadPromise = null;
let catalogueLoadTimeoutId = null;
let catalogueLoadIdleId = null;
let catalogueSearchAbortController = null;
const localizedOfferCache = new Map();
const figurePriceCache = new Map();
const pricedStoreCountCache = new Map();
let supplierCoverageCache = {
  key: "",
  stats: new Map()
};
let discoveryFigures = [];
let figureComments = loadFigureComments();
let gameState = {
  currency: "EUR",
  target: null,
  actualPrice: null,
  round: 0,
  currentScore: 0,
  highScore: 0,
  inProgress: false,
  completed: false,
  usedPowerups: {}
};
let communityState = {
  initialized: false,
  configLoaded: false,
  loadingPosts: false,
  filter: "all",
  search: "",
  posts: [],
  profile: loadCommunityProfile(),
  recaptchaWidgetId: null,
  recaptchaScriptPromise: null
};
let nekoAdvisorState = {
  productKind: "",
  budget: null,
  category: "",
  character: "",
  store: "all",
  loading: false,
  rerollOffset: 0,
  lastResult: null,
  cache: new Map()
};
let nekoAdvisorTypeTimer = null;

const state = {
  query: "",
  category: "trending",
  manufacturer: "all",
  type: "all",
  status: "all",
  provider: "all",
  sort: "catalogue",
  gridQuery: "",
  gridSort: "catalogue",
  brandFilter: "",
  brandLabel: "",
  seriesFilter: null,
  seriesCharacter: "",
  catalogStandalone: false,
  figuresOnly: false,
  catalogKind: "all",
  figureCatalogLabel: "",
  minPrice: 0,
  maxPrice: FIGURE_TAB_PRICE_MAX_EUR,
  quickFilters: [],
  confirmedOnly: false,
  shipsToPortugal: false,
  antiEcchi: false,
  multiStoreOnly: false,
  marketplaceLens: "all",
  strictCategory: false
};

const salesState = {
  query: "",
  store: "all",
  category: "all",
  minPrice: 0,
  maxPrice: SALES_PRICE_MAX_EUR,
  quickFilters: [],
  sort: "score"
};

const OFFER_COMPARISON_FILTERS = new Set(["all", "local", "checked", "stock", "warnings"]);
const OFFER_COMPARISON_SORTS = new Set(["best", "price", "freshness", "local"]);
const offerComparisonState = {
  filter: "all",
  sort: "best"
};
const MARKETPLACE_LENS_LABELS = {
  all: "All offers",
  bestPrice: "Best prices",
  multiStore: "2+ stores",
  local: "Local stores",
  preorder: "Pre-orders",
  needsCheck: "Needs check"
};
const MARKETPLACE_LENSES = new Set(Object.keys(MARKETPLACE_LENS_LABELS));

const taxonomyState = {
  type: "franchises",
  query: ""
};
let taxonomyEntryCache = {
  sourceSize: 0,
  franchises: null,
  characters: null
};
const taxonomyRemoteCache = {
  franchises: null,
  characters: null
};
const taxonomyRemotePromises = {
  franchises: null,
  characters: null
};

const els = {
  promotionsSection: document.querySelector("#promotions-carousel"),
  homeSection: document.querySelector("#home"),
  newArrivalsSection: document.querySelector("#new-arrivals"),
  trendingNowSection: document.querySelector("#trending-now"),
  categorySection: document.querySelector("#categories"),
  searchForm: document.querySelector("#searchForm"),
  searchInput: document.querySelector("#searchInput"),
  headerSearchForm: document.querySelector("#headerSearchForm"),
  headerSearchInput: document.querySelector("#headerSearchInput"),
  manufacturerFilter: document.querySelector("#manufacturerFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  providerFilter: document.querySelector("#providerFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  gridSearchInput: document.querySelector("#gridSearchInput"),
  gridSortSelect: document.querySelector("#gridSortSelect"),
  priceRangeMin: document.querySelector("#priceRangeMin"),
  priceRange: document.querySelector("#priceRange"),
  priceRangeValue: document.querySelector("#priceRangeValue"),
  figurePriceRangeControl: document.querySelector("#figurePriceRangeControl"),
  figureQuickFilters: document.querySelector("#figureFilterOptions"),
  figurePriceSortFilters: document.querySelector("#figureFilterOptions"),
  confirmedOnly: document.querySelector("#confirmedOnly"),
  shipsToPortugal: document.querySelector("#shipsToPortugal"),
  antiEcchiToggle: document.querySelector("#antiEcchiToggle"),
  resultsSection: document.querySelector("#results"),
  resultsTitle: document.querySelector("#resultsTitle"),
  resultsSubtitle: document.querySelector("#resultsSubtitle"),
  catalogHomeButton: document.querySelector("#catalogHomeButton"),
  figureSection: document.querySelector("#figure"),
  providersSection: document.querySelector("#providers"),
  contactSection: document.querySelector("#contact"),
  productGrid: document.querySelector("#productGrid"),
  resultMeta: document.querySelector("#resultMeta"),
  resultQuery: document.querySelector("#resultQuery"),
  categoryChips: document.querySelector("#categoryChips"),
  marketplaceLensBar: document.querySelector("#marketplaceLensBar"),
  marketplaceLensSummary: document.querySelector("#marketplaceLensSummary"),
  comparisonGuide: document.querySelector("#comparisonGuide"),
  comparisonGuideTitle: document.querySelector("#comparisonGuideTitle"),
  comparisonGuideCopy: document.querySelector("#comparisonGuideCopy"),
  comparisonGuideTips: document.querySelector("#comparisonGuideTips"),
  activeFilterBar: document.querySelector("#activeFilterBar"),
  activeFilterSummary: document.querySelector("#activeFilterSummary"),
  activeFilterChips: document.querySelector("#activeFilterChips"),
  clearFigureFilters: document.querySelector("#clearFigureFilters"),
  figurePagination: document.querySelector("#figurePagination"),
  showMoreButton: document.querySelector("#showMoreButton"),
  salesSection: document.querySelector("#sales"),
  salesMeta: document.querySelector("#salesMeta"),
  salesHomeButton: document.querySelector("#salesHomeButton"),
  salesSearchInput: document.querySelector("#salesSearchInput"),
  salesStoreFilter: document.querySelector("#salesStoreFilter"),
  salesCategoryFilter: document.querySelector("#salesCategoryFilter"),
  salesPriceRangeMin: document.querySelector("#salesPriceRangeMin"),
  salesPriceRange: document.querySelector("#salesPriceRange"),
  salesPriceValue: document.querySelector("#salesPriceValue"),
  salesPriceRangeControl: document.querySelector("#salesPriceRangeControl"),
  salesQuickFilters: document.querySelector("#salesQuickFilters"),
  salesSortFilter: document.querySelector("#salesSortFilter"),
  salesStatus: document.querySelector("#salesStatus"),
  salesGrid: document.querySelector("#salesGrid"),
  taxonomySection: document.querySelector("#taxonomy-browser"),
  taxonomyEyebrow: document.querySelector("#taxonomyEyebrow"),
  taxonomyTitle: document.querySelector("#taxonomyTitle"),
  taxonomySubtitle: document.querySelector("#taxonomySubtitle"),
  taxonomyMeta: document.querySelector("#taxonomyMeta"),
  taxonomyHomeButton: document.querySelector("#taxonomyHomeButton"),
  taxonomySearchForm: document.querySelector("#taxonomySearchForm"),
  taxonomySearchInput: document.querySelector("#taxonomySearchInput"),
  taxonomyAlphaNav: document.querySelector("#taxonomyAlphaNav"),
  taxonomyGrid: document.querySelector("#taxonomyGrid"),
  productTitle: document.querySelector("#productTitle"),
  productDescription: document.querySelector("#productDescription"),
  productImageFrame: document.querySelector("#productImageFrame"),
  productImage: document.querySelector("#productImage"),
  productGallery: document.querySelector("#productGallery"),
  productGalleryStatus: document.querySelector("#productGalleryStatus"),
  productImageThumbnails: document.querySelector("#productImageThumbnails"),
  productImagePrevious: document.querySelector("#productImagePrevious"),
  productImageNext: document.querySelector("#productImageNext"),
  productImageExpand: document.querySelector("#productImageExpand"),
  productImageLightbox: document.querySelector("#productImageLightbox"),
  productImageLightboxImage: document.querySelector("#productImageLightboxImage"),
  productImageLightboxCaption: document.querySelector("#productImageLightboxCaption"),
  productImageLightboxClose: document.querySelector("#productImageLightboxClose"),
  productImageLightboxPrevious: document.querySelector("#productImageLightboxPrevious"),
  productImageLightboxNext: document.querySelector("#productImageLightboxNext"),
  backToResultsButton: document.querySelector("#backToResultsButton"),
  specGrid: document.querySelector("#specGrid"),
  offerTable: document.querySelector("#offerTable"),
  directOfferTable: document.querySelector("#directOfferTable"),
  offerListStatus: document.querySelector("#offerListStatus"),
  offerInsightPanel: document.querySelector("#offerInsightPanel"),
  offerInsightSummary: document.querySelector("#offerInsightSummary"),
  offerInsightNote: document.querySelector("#offerInsightNote"),
  offerInsightStats: document.querySelector("#offerInsightStats"),
  offerCompareToolbar: document.querySelector("#offerCompareToolbar"),
  offerCompareSummary: document.querySelector("#offerCompareSummary"),
  offerCompareControls: document.querySelector("#offerCompareToolbar .offer-compare-controls"),
  offerCompareSort: document.querySelector("#offerCompareSort"),
  offerRefreshAllButton: document.querySelector("#offerRefreshAllButton"),
  bestDealTotal: document.querySelector("#bestDealTotal"),
  bestDealStore: document.querySelector("#bestDealStore"),
  bestDealLink: document.querySelector("#bestDealLink"),
  bestDealNote: document.querySelector("#bestDealNote"),
  sortToggle: document.querySelector("#sortToggle"),
  offerDonutChart: document.querySelector("#offerDonutChart"),
  offerDonutStatus: document.querySelector("#offerDonutStatus"),
  exclusiveOfferPanel: document.querySelector("#exclusiveOfferPanel"),
  figureCommentForm: document.querySelector("#figureCommentForm"),
  figureCommentName: document.querySelector("#figureCommentName"),
  figureCommentText: document.querySelector("#figureCommentText"),
  figureCommentList: document.querySelector("#figureCommentList"),
  chart: document.querySelector("#priceChart"),
  priceHistoryChart: document.querySelector("#priceHistoryChart"),
  chartDelta: document.querySelector("#chartDelta"),
  chartCaption: document.querySelector("#chartCaption"),
  normalizationList: document.querySelector("#normalizationList"),
  validationList: document.querySelector("#validationList"),
  supplierGrid: document.querySelector("#supplierGrid"),
  validationQueue: document.querySelector("#validationQueue"),
  sidebarSearchButton: document.querySelector("#sidebarSearchButton"),
  sidebarDatabaseButton: document.querySelector("#sidebarDatabaseButton"),
  sidebarMultiStoreButton: document.querySelector("#sidebarMultiStoreButton"),
  sidebarMultiStoreCount: document.querySelector("#sidebarMultiStoreCount"),
  sidebarCommunityButton: document.querySelector("#sidebarCommunityButton"),
  sidebarGameButton: document.querySelector("#sidebarGameButton"),
  sidebarWishlistButton: document.querySelector("#sidebarWishlistButton"),
  sidebarSettingsButton: document.querySelector("#sidebarSettingsButton"),
  communitySection: document.querySelector("#community"),
  communityHomeButton: document.querySelector("#communityHomeButton"),
  communityCreateAccountButton: document.querySelector("#communityCreateAccountButton"),
  communitySearchInput: document.querySelector(".community-search-bar input"),
  communityTabs: document.querySelector(".community-tabs"),
  communityGuestPrompt: document.querySelector("#communityGuestPrompt"),
  communityPostForm: document.querySelector("#communityPostForm"),
  communityPostBody: document.querySelector("#communityPostBody"),
  communityPostType: document.querySelector("#communityPostType"),
  communityPostStore: document.querySelector("#communityPostStore"),
  communityPostPrice: document.querySelector("#communityPostPrice"),
  communityPostTitle: document.querySelector("#communityPostTitle"),
  communityPostUrl: document.querySelector("#communityPostUrl"),
  communityPostImage: document.querySelector("#communityPostImage"),
  communityPostStatus: document.querySelector("#communityPostStatus"),
  communityFeed: document.querySelector("#communityFeed"),
  communityViewerAvatar: document.querySelector("#communityViewerAvatar"),
  communityViewerName: document.querySelector("#communityViewerName"),
  communityViewerEmail: document.querySelector("#communityViewerEmail"),
  communitySignupDialog: document.querySelector("#communitySignupDialog"),
  communitySignupForm: document.querySelector("#communitySignupForm"),
  communitySignupClose: document.querySelector("#communitySignupClose"),
  communitySignupName: document.querySelector("#communitySignupName"),
  communitySignupHandle: document.querySelector("#communitySignupHandle"),
  communitySignupEmail: document.querySelector("#communitySignupEmail"),
  communitySignupBio: document.querySelector("#communitySignupBio"),
  communitySignupStatus: document.querySelector("#communitySignupStatus"),
  communityRecaptcha: document.querySelector("#communityRecaptcha"),
  nekoAdvisorSection: document.querySelector("#neko-advisor"),
  nekoAdvisorDialogue: document.querySelector("#nekoAdvisorDialogue"),
  nekoAdvisorKindStep: document.querySelector("#nekoAdvisorKindStep"),
  nekoAdvisorBudgetForm: document.querySelector("#nekoAdvisorBudgetForm"),
  nekoAdvisorBudget: document.querySelector("#nekoAdvisorBudget"),
  nekoAdvisorCurrency: document.querySelector("#nekoAdvisorCurrency"),
  nekoAdvisorCategoryStep: document.querySelector("#nekoAdvisorCategoryStep"),
  nekoAdvisorCharacterForm: document.querySelector("#nekoAdvisorCharacterForm"),
  nekoAdvisorCharacter: document.querySelector("#nekoAdvisorCharacter"),
  nekoAdvisorStoreForm: document.querySelector("#nekoAdvisorStoreForm"),
  nekoAdvisorStore: document.querySelector("#nekoAdvisorStore"),
  nekoAdvisorResults: document.querySelector("#nekoAdvisorResults"),
  nekoAdvisorHud: document.querySelector("#nekoAdvisorHud"),
  nekoAdvisorResultActions: document.querySelector("#nekoAdvisorResultActions"),
  nekoAdvisorReroll: document.querySelector("#nekoAdvisorReroll"),
  nekoAdvisorRefine: document.querySelector("#nekoAdvisorRefine"),
  nekoAdvisorRestart: document.querySelector("#nekoAdvisorRestart"),
  nekoAdvisorHome: document.querySelector("#nekoAdvisorHome"),
  gameSection: document.querySelector("#game"),
  gameLobby: document.querySelector("#gameLobby"),
  gamePlay: document.querySelector("#gamePlay"),
  gameCurrencySelect: document.querySelector("#gameCurrencySelect"),
  gameStartButton: document.querySelector("#gameStartButton"),
  gameLobbyStatus: document.querySelector("#gameLobbyStatus"),
  gameHighScore: document.querySelector("#gameHighScore"),
  gameRoundLabel: document.querySelector("#gameRoundLabel"),
  gameCurrentScore: document.querySelector("#gameCurrentScore"),
  gameHighScorePlay: document.querySelector("#gameHighScorePlay"),
  gameFigureName: document.querySelector("#gameFigureName"),
  gameFigureMaker: document.querySelector("#gameFigureMaker"),
  gameFigureImage: document.querySelector("#gameFigureImage"),
  gameNewRoundButton: document.querySelector("#gameNewRoundButton"),
  gameEndButton: document.querySelector("#gameEndButton"),
  gameGuessPanel: document.querySelector("#gameGuessPanel"),
  gameGuessInput: document.querySelector("#gameGuessInput"),
  gameCurrencySymbol: document.querySelector("#gameCurrencySymbol"),
  gameSubmitGuessButton: document.querySelector("#gameSubmitGuessButton"),
  gameChoicePanel: document.querySelector("#gameChoicePanel"),
  gameHintPanel: document.querySelector("#gameHintPanel"),
  gameFeedback: document.querySelector("#gameFeedback"),
  databaseSection: document.querySelector("#data"),
  databaseStatus: document.querySelector("#databaseStatus"),
  databaseFigureCount: document.querySelector("#databaseFigureCount"),
  floatingDatabaseCount: document.querySelector("#floatingDatabaseCount"),
  databaseProcessedCount: document.querySelector("#databaseProcessedCount"),
  databasePendingCount: document.querySelector("#databasePendingCount"),
  databaseOfferCount: document.querySelector("#databaseOfferCount"),
  databaseVerifiedFigureCount: document.querySelector("#databaseVerifiedFigureCount"),
  databaseAverageStores: document.querySelector("#databaseAverageStores"),
  databaseCoverageZero: document.querySelector("#databaseCoverageZero"),
  databaseCoverageOne: document.querySelector("#databaseCoverageOne"),
  databaseCoverageTwo: document.querySelector("#databaseCoverageTwo"),
  databaseCoverageThreePlus: document.querySelector("#databaseCoverageThreePlus"),
  databaseExpiredOfferCount: document.querySelector("#databaseExpiredOfferCount"),
  databaseQuarantineCount: document.querySelector("#databaseQuarantineCount"),
  databaseTerminalQuarantineCount: document.querySelector("#databaseTerminalQuarantineCount"),
  databaseDiscoveryCandidateCount: document.querySelector("#databaseDiscoveryCandidateCount"),
  databaseRecoveryQueueCount: document.querySelector("#databaseRecoveryQueueCount"),
  databaseRecovered24h: document.querySelector("#databaseRecovered24h"),
  databaseCoverageGains24h: document.querySelector("#databaseCoverageGains24h"),
  databaseEligibleTwoToThree: document.querySelector("#databaseEligibleTwoToThree"),
  databaseEligibleTwoToThreePairs: document.querySelector("#databaseEligibleTwoToThreePairs"),
  databaseTwoToThreeEta: document.querySelector("#databaseTwoToThreeEta"),
  databaseTopRecoveryStore: document.querySelector("#databaseTopRecoveryStore"),
  databaseRecoverySuccessRate: document.querySelector("#databaseRecoverySuccessRate"),
  databaseRecoveryBlocked24h: document.querySelector("#databaseRecoveryBlocked24h"),
  databaseSourceVariantCount: document.querySelector("#databaseSourceVariantCount"),
  databaseExchangeRateAge: document.querySelector("#databaseExchangeRateAge"),
  databaseObservationMismatchCount: document.querySelector("#databaseObservationMismatchCount"),
  databaseUnknownPackageCount: document.querySelector("#databaseUnknownPackageCount"),
  databaseOutlierOfferCount: document.querySelector("#databaseOutlierOfferCount"),
  databaseRefreshButton: document.querySelector("#databaseRefreshButton"),
  databaseNamesButton: document.querySelector("#databaseNamesButton"),
  databaseNamesPanel: document.querySelector("#databaseNamesPanel"),
  databaseNameList: document.querySelector("#databaseNameList"),
  trackProduct: document.querySelector("#trackProduct"),
  addToCartProduct: document.querySelector("#addToCartProduct"),
  alertProduct: document.querySelector("#alertProduct"),
  headerMarketButton: document.querySelector("#headerMarketButton"),
  headerMarketMenu: document.querySelector("#headerMarketMenu"),
  headerCountryFlag: document.querySelector("#headerCountryFlag"),
  headerCurrencyText: document.querySelector("#headerCurrencyText"),
  wishlistButton: document.querySelector("#wishlistButton"),
  wishlistCount: document.querySelector("#wishlistCount"),
  wishlistDialog: document.querySelector("#wishlistDialog"),
  wishlistItems: document.querySelector("#wishlistItems"),
  cartButton: document.querySelector("#cartButton"),
  cartCount: document.querySelector("#cartCount"),
  cartDialog: document.querySelector("#cartDialog"),
  cartItems: document.querySelector("#cartItems"),
  cartClearButton: document.querySelector("#cartClearButton"),
  alertDialog: document.querySelector("#alertDialog"),
  alertForm: document.querySelector("#alertForm"),
  alertEmail: document.querySelector("#alertEmail"),
  alertPrice: document.querySelector("#alertPrice"),
  alertStatus: document.querySelector("#alertStatus"),
  loginButton: document.querySelector("#loginButton"),
  accountMenu: document.querySelector("#accountMenu"),
  accountGuestMenu: document.querySelector("#accountGuestMenu"),
  accountSessionMenu: document.querySelector("#accountSessionMenu"),
  accountAvatar: document.querySelector("#accountAvatar"),
  accountDisplayName: document.querySelector("#accountDisplayName"),
  accountDisplayEmail: document.querySelector("#accountDisplayEmail"),
  accountPreferencesButton: document.querySelector("#accountPreferencesButton"),
  accountLogoutButton: document.querySelector("#accountLogoutButton"),
  authDialog: document.querySelector("#authDialog"),
  authDialogClose: document.querySelector("#authDialogClose"),
  authLoginForm: document.querySelector("#authLoginForm"),
  authLoginEmail: document.querySelector("#authLoginEmail"),
  authLoginPassword: document.querySelector("#authLoginPassword"),
  authLoginStatus: document.querySelector("#authLoginStatus"),
  authForgotButton: document.querySelector("#authForgotButton"),
  authCreateForm: document.querySelector("#authCreateForm"),
  authCreateFirstName: document.querySelector("#authCreateFirstName"),
  authCreateLastName: document.querySelector("#authCreateLastName"),
  authCreateEmail: document.querySelector("#authCreateEmail"),
  authCreatePassword: document.querySelector("#authCreatePassword"),
  authCreateStatus: document.querySelector("#authCreateStatus"),
  authResetForm: document.querySelector("#authResetForm"),
  authResetPassword: document.querySelector("#authResetPassword"),
  authResetStatus: document.querySelector("#authResetStatus"),
  loginDialog: document.querySelector("#loginDialog"),
  marketOnboardingDialog: document.querySelector("#marketOnboardingDialog"),
  marketOnboardingForm: document.querySelector("#marketOnboardingForm"),
  marketOnboardingClose: document.querySelector("#marketOnboardingClose"),
  marketCountry: document.querySelector("#marketCountry"),
  marketCurrency: document.querySelector("#marketCurrency"),
  marketPreviewLocalCount: document.querySelector("#marketPreviewLocalCount"),
  marketPreviewLocalCopy: document.querySelector("#marketPreviewLocalCopy"),
  marketPreviewCurrency: document.querySelector("#marketPreviewCurrency"),
  marketPreviewInternational: document.querySelector("#marketPreviewInternational"),
  marketOnboardingHint: document.querySelector("#marketOnboardingHint"),
  loginClose: document.querySelector("#loginClose"),
  loginForm: document.querySelector("#loginForm"),
  profileName: document.querySelector("#profileName"),
  profileEmail: document.querySelector("#profileEmail"),
  profileCountry: document.querySelector("#profileCountry"),
  profileCurrency: document.querySelector("#profileCurrency"),
  profileStatus: document.querySelector("#profileStatus"),
  userCountryPill: document.querySelector("#userCountryPill"),
  alertCurrencyLabel: document.querySelector("#alertCurrencyLabel"),
  heroCharacterBg: document.querySelector("#heroCharacterBg"),
  heroShowcase: document.querySelector("#heroShowcase"),
  newArrivalsGrid: document.querySelector("#newArrivalsGrid"),
  newArrivalsStatus: document.querySelector("#newArrivalsStatus"),
  trendingNowTitle: document.querySelector("#trendingNowTitle"),
  trendingNowGrid: document.querySelector("#trendingNowGrid"),
  trendingNowStatus: document.querySelector("#trendingNowStatus"),
  trendingNowUpdated: document.querySelector("#trendingNowUpdated"),
  promotionsTrack: document.querySelector("#promotionsTrack"),
  popularSeriesPrev: document.querySelector("#popularSeriesPrev"),
  popularSeriesNext: document.querySelector("#popularSeriesNext"),
  seriesFilterSection: document.querySelector("#seriesFilterSection"),
  seriesFilterTitle: document.querySelector("#seriesFilterTitle"),
  seriesFilterCount: document.querySelector("#seriesFilterCount"),
  seriesCharacterDisclosure: document.querySelector(".series-character-disclosure"),
  seriesCharacterFilters: document.querySelector("#seriesCharacterFilters"),
  promoRanking: document.querySelector("#promoRanking")
};

function loadWishlist() {
  const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
  const source = saved || "[]";

  try {
    const parsed = JSON.parse(source);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch (error) {
    return [];
  }
}

function loadWishlistQuantities() {
  const saved = localStorage.getItem(WISHLIST_QUANTITY_STORAGE_KEY);
  const source = saved || "{}";

  try {
    const parsed = JSON.parse(source);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed)
        .map(([id, quantity]) => [id, Math.max(1, Math.min(99, Number.parseInt(quantity, 10) || 1))])
        .filter(([id]) => Boolean(id))
    );
  } catch (error) {
    return {};
  }
}

function saveWishlist() {
  wishlist = [...new Set(wishlist.filter(Boolean))];
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
}

function saveWishlistQuantities() {
  const nextQuantities = {};
  wishlist.forEach((id) => {
    nextQuantities[id] = Math.max(1, Math.min(99, Number.parseInt(wishlistQuantities[id], 10) || 1));
  });
  wishlistQuantities = nextQuantities;
  localStorage.setItem(WISHLIST_QUANTITY_STORAGE_KEY, JSON.stringify(wishlistQuantities));
}

function loadCart() {
  const saved = localStorage.getItem(CART_STORAGE_KEY);
  const source = saved || "[]";

  try {
    const parsed = JSON.parse(source);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  cart = [...new Set(cart.filter(Boolean))];
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadFigureComments() {
  try {
    const parsed = JSON.parse(localStorage.getItem(FIGURE_COMMENTS_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveFigureComments() {
  localStorage.setItem(FIGURE_COMMENTS_STORAGE_KEY, JSON.stringify(figureComments));
}

function loadCommunityProfile() {
  try {
    const parsed = JSON.parse(localStorage.getItem(COMMUNITY_PROFILE_STORAGE_KEY) || "{}");
    if (!parsed || typeof parsed !== "object") return { name: "", handle: "", email: "", bio: "", avatarColor: "", token: "" };
    return {
      name: String(parsed.name || ""),
      handle: String(parsed.handle || ""),
      email: String(parsed.email || ""),
      bio: String(parsed.bio || ""),
      avatarColor: String(parsed.avatarColor || parsed.avatar_color || ""),
      token: String(parsed.token || "")
    };
  } catch (error) {
    return { name: "", handle: "", email: "", bio: "", avatarColor: "", token: "" };
  }
}

function saveCommunityProfile(profile) {
  communityState.profile = {
    name: String(profile?.name || ""),
    handle: String(profile?.handle || ""),
    email: String(profile?.email || ""),
    bio: String(profile?.bio || ""),
    avatarColor: String(profile?.avatarColor || profile?.avatar_color || ""),
    token: String(profile?.token || "")
  };
  localStorage.setItem(COMMUNITY_PROFILE_STORAGE_KEY, JSON.stringify(communityState.profile));
}

function authPasswordIsStrong(password) {
  const value = String(password || "");
  return value.length >= 8 && /[A-Za-z]/.test(value) && /\d/.test(value);
}

function authenticatedAccountProfile(payload = {}) {
  const user = payload?.user && typeof payload.user === "object" ? payload.user : payload;
  return {
    name: String(user?.name || "").trim(),
    handle: normalizeCommunityHandle(user?.handle || ""),
    email: String(user?.email || "").trim().toLowerCase(),
    bio: String(user?.bio || ""),
    avatarColor: String(user?.avatar_color || user?.avatarColor || ""),
    token: String(payload?.token || user?.token || "")
  };
}

function persistAuthenticatedAccount(payload) {
  const profile = authenticatedAccountProfile(payload);
  if (!profile.token || !profile.email) throw new Error("The account session was not returned by the server.");
  saveCommunityProfile(profile);
  userProfile = {
    ...userProfile,
    name: profile.name || userProfile.name,
    email: profile.email
  };
  saveUserProfile();
  renderCommunitySession();
  renderHeaderUtilities();
  return profile;
}

function clearAuthenticatedAccount() {
  saveCommunityProfile({ name: "", handle: "", email: "", bio: "", avatarColor: "", token: "" });
  renderCommunitySession();
  renderHeaderUtilities();
}

function renderAccountSession() {
  const profile = communityState.profile || {};
  const signedIn = Boolean(profile.token && profile.email);
  if (els.accountGuestMenu) els.accountGuestMenu.hidden = signedIn;
  if (els.accountSessionMenu) els.accountSessionMenu.hidden = !signedIn;
  if (els.loginButton) {
    els.loginButton.classList.toggle("is-signed-in", signedIn);
    els.loginButton.setAttribute("aria-label", signedIn ? `Open account menu for ${profile.name || profile.email}` : "Open account menu");
  }
  if (!signedIn) return;
  if (els.accountAvatar) els.accountAvatar.textContent = communityInitials(profile.name || profile.email);
  if (els.accountDisplayName) els.accountDisplayName.textContent = profile.name || "NekoPrice collector";
  if (els.accountDisplayEmail) els.accountDisplayEmail.textContent = profile.email;
}

function closeAccountMenu({ restoreFocus = false } = {}) {
  if (!els.accountMenu) return;
  els.accountMenu.hidden = true;
  els.loginButton?.setAttribute("aria-expanded", "false");
  if (restoreFocus) els.loginButton?.focus();
}

function openAccountMenu() {
  if (!els.accountMenu) return;
  renderAccountSession();
  closeHeaderMarketMenu();
  els.accountMenu.hidden = false;
  els.loginButton?.setAttribute("aria-expanded", "true");
}

function toggleAccountMenu() {
  if (!els.accountMenu) return;
  if (els.accountMenu.hidden) openAccountMenu();
  else closeAccountMenu();
}

function setAuthStatus(element, message = "", tone = "") {
  if (!element) return;
  element.textContent = message;
  if (tone) element.dataset.tone = tone;
  else delete element.dataset.tone;
}

function setAuthFormBusy(form, busy) {
  if (!form) return;
  form.setAttribute("aria-busy", String(Boolean(busy)));
  form.querySelectorAll("input, button").forEach((control) => {
    control.disabled = Boolean(busy);
  });
}

function setAuthView(view = "login") {
  if (!els.authDialog) return;
  const normalized = ["login", "create", "reset"].includes(view) ? view : "login";
  els.authDialog.dataset.authView = normalized;
  els.authDialog.querySelectorAll("[data-auth-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.authPanel !== normalized;
  });
  const labels = {
    login: "Login to NekoPrice",
    create: "Create a NekoPrice account",
    reset: "Reset your NekoPrice password"
  };
  els.authDialog.setAttribute("aria-label", labels[normalized]);
  if (normalized === "login") setAuthStatus(els.authLoginStatus);
  if (normalized === "create") setAuthStatus(els.authCreateStatus);
  if (normalized === "reset") setAuthStatus(els.authResetStatus);
}

function openAuthDialog(view = "login") {
  if (!els.authDialog) return;
  closeAccountMenu();
  setAuthView(view);
  const profile = communityState.profile || {};
  if (view === "login" && els.authLoginEmail && !els.authLoginEmail.value) {
    els.authLoginEmail.value = profile.email || userProfile.email || "";
  }
  if (view === "create") {
    const nameParts = String(profile.name || userProfile.name || "").trim().split(/\s+/).filter(Boolean);
    if (els.authCreateFirstName && !els.authCreateFirstName.value) els.authCreateFirstName.value = nameParts.shift() || "";
    if (els.authCreateLastName && !els.authCreateLastName.value) els.authCreateLastName.value = nameParts.join(" ");
    if (els.authCreateEmail && !els.authCreateEmail.value) els.authCreateEmail.value = profile.email || userProfile.email || "";
  }
  if (typeof els.authDialog.showModal === "function") els.authDialog.showModal();
  else els.authDialog.setAttribute("open", "");
  requestAnimationFrame(() => {
    const target = view === "create"
      ? els.authCreateFirstName
      : view === "reset"
        ? els.authResetPassword
        : els.authLoginEmail;
    target?.focus();
  });
}

function closeAuthDialog() {
  if (!els.authDialog) return;
  if (typeof els.authDialog.close === "function" && els.authDialog.open) els.authDialog.close();
  else els.authDialog.removeAttribute("open");
}

async function authJsonRequest(url, { method = "POST", payload = null, token = "" } = {}) {
  const headers = { "Accept": "application/json" };
  if (payload !== null) headers["Content-Type"] = "application/json";
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(url, {
    method,
    headers,
    body: payload === null ? undefined : JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.success) {
    throw new Error(data.error || "The account request could not be completed.");
  }
  return data;
}

async function submitAuthLogin(event) {
  event.preventDefault();
  if (!els.authLoginForm?.reportValidity()) return;
  const email = (els.authLoginEmail?.value || "").trim().toLowerCase();
  const password = els.authLoginPassword?.value || "";
  setAuthFormBusy(els.authLoginForm, true);
  setAuthStatus(els.authLoginStatus, "Signing in...");
  try {
    const data = await authJsonRequest(AUTH_LOGIN_URL, { payload: { email, password } });
    persistAuthenticatedAccount(data);
    if (els.authLoginPassword) els.authLoginPassword.value = "";
    setAuthStatus(els.authLoginStatus, "Signed in.", "success");
    closeAuthDialog();
  } catch (error) {
    setAuthStatus(els.authLoginStatus, error.message || "Login failed.", "error");
  } finally {
    setAuthFormBusy(els.authLoginForm, false);
  }
}

async function submitAuthCreate(event) {
  event.preventDefault();
  if (!els.authCreateForm?.reportValidity()) return;
  const firstName = (els.authCreateFirstName?.value || "").trim();
  const lastName = (els.authCreateLastName?.value || "").trim();
  const email = (els.authCreateEmail?.value || "").trim().toLowerCase();
  const password = els.authCreatePassword?.value || "";
  if (!authPasswordIsStrong(password)) {
    setAuthStatus(els.authCreateStatus, "Use at least 8 characters, including a letter and a number.", "error");
    els.authCreatePassword?.focus();
    return;
  }
  setAuthFormBusy(els.authCreateForm, true);
  setAuthStatus(els.authCreateStatus, "Creating your account...");
  try {
    const data = await authJsonRequest(AUTH_REGISTER_URL, { payload: { first_name: firstName, last_name: lastName, email, password } });
    persistAuthenticatedAccount(data);
    if (els.authCreatePassword) els.authCreatePassword.value = "";
    setAuthStatus(els.authCreateStatus, "Account created.", "success");
    closeAuthDialog();
  } catch (error) {
    setAuthStatus(els.authCreateStatus, error.message || "The account could not be created.", "error");
  } finally {
    setAuthFormBusy(els.authCreateForm, false);
  }
}

async function requestAuthPasswordReset() {
  const email = (els.authLoginEmail?.value || "").trim().toLowerCase();
  if (!email || !els.authLoginEmail?.checkValidity()) {
    setAuthStatus(els.authLoginStatus, "Enter your account e-mail first.", "error");
    els.authLoginEmail?.focus();
    return;
  }
  setAuthFormBusy(els.authLoginForm, true);
  setAuthStatus(els.authLoginStatus, "Sending recovery instructions...");
  try {
    const data = await authJsonRequest(AUTH_FORGOT_PASSWORD_URL, { payload: { email } });
    setAuthStatus(els.authLoginStatus, data.message || "If the account exists, recovery instructions have been sent.", "success");
  } catch (error) {
    setAuthStatus(els.authLoginStatus, error.message || "Recovery instructions could not be sent.", "error");
  } finally {
    setAuthFormBusy(els.authLoginForm, false);
  }
}

function passwordResetTokenFromUrl() {
  try {
    return new URL(window.location.href).searchParams.get("reset_token") || "";
  } catch (error) {
    return "";
  }
}

function removePasswordResetTokenFromUrl() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete("reset_token");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  } catch (error) {
    // URL cleanup is best effort after a successful reset.
  }
}

async function submitAuthPasswordReset(event) {
  event.preventDefault();
  if (!els.authResetForm?.reportValidity()) return;
  const resetToken = passwordResetTokenFromUrl();
  const password = els.authResetPassword?.value || "";
  if (!resetToken) {
    setAuthStatus(els.authResetStatus, "This recovery link is missing or invalid.", "error");
    return;
  }
  if (!authPasswordIsStrong(password)) {
    setAuthStatus(els.authResetStatus, "Use at least 8 characters, including a letter and a number.", "error");
    return;
  }
  setAuthFormBusy(els.authResetForm, true);
  setAuthStatus(els.authResetStatus, "Updating your password...");
  try {
    const data = await authJsonRequest(AUTH_RESET_PASSWORD_URL, { payload: { reset_token: resetToken, password } });
    persistAuthenticatedAccount(data);
    removePasswordResetTokenFromUrl();
    if (els.authResetPassword) els.authResetPassword.value = "";
    setAuthStatus(els.authResetStatus, "Password updated.", "success");
    closeAuthDialog();
  } catch (error) {
    setAuthStatus(els.authResetStatus, error.message || "The password could not be reset.", "error");
  } finally {
    setAuthFormBusy(els.authResetForm, false);
  }
}

async function validateStoredAccountSession() {
  const token = communityState.profile?.token || "";
  if (!token) {
    renderAccountSession();
    return;
  }
  try {
    const data = await authJsonRequest(AUTH_SESSION_URL, { method: "GET", token });
    persistAuthenticatedAccount({ ...data, token });
  } catch (error) {
    if (/expired|invalid|sign in|unauthor/i.test(String(error.message || ""))) clearAuthenticatedAccount();
  }
}

async function logoutAuthenticatedAccount() {
  const token = communityState.profile?.token || "";
  closeAccountMenu();
  try {
    if (token) await authJsonRequest(AUTH_LOGOUT_URL, { token });
  } catch (error) {
    // Local logout still completes if the network is unavailable.
  } finally {
    clearAuthenticatedAccount();
  }
}

function commentsForFigure(figureId) {
  const comments = figureComments?.[figureId];
  return Array.isArray(comments) ? comments : [];
}

function loadUserProfile() {
  const fallback = { name: "", email: "", country: "PT", currency: "EUR" };
  const saved = localStorage.getItem(USER_PROFILE_STORAGE_KEY);
  if (!saved) return fallback;

  try {
    const parsed = JSON.parse(saved);
    const savedCountry = parsed.country === "GB" ? "UK" : parsed.country;
    const country = COUNTRY_PROFILES[savedCountry] ? savedCountry : "PT";
    const currency = CURRENCY_OPTIONS[parsed.currency] ? parsed.currency : COUNTRY_PROFILES[country].currency;
    return {
      name: parsed.name || "",
      email: parsed.email || "",
      country,
      currency
    };
  } catch (error) {
    return fallback;
  }
}

function loadGameCurrency() {
  const savedCurrency = localStorage.getItem(GAME_CURRENCY_STORAGE_KEY);
  return GAME_CURRENCIES.includes(savedCurrency) ? savedCurrency : preferredCurrency();
}

function loadGameHighScore() {
  const value = Number(localStorage.getItem(GAME_HIGHSCORE_STORAGE_KEY));
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
}

function saveGameHighScore(score) {
  const normalizedScore = Math.max(0, Math.floor(Number(score) || 0));
  gameState.highScore = normalizedScore;
  localStorage.setItem(GAME_HIGHSCORE_STORAGE_KEY, String(normalizedScore));
}

function saveGameCurrency(currency) {
  const normalizedCurrency = GAME_CURRENCIES.includes(currency) ? currency : "EUR";
  gameState.currency = normalizedCurrency;
  localStorage.setItem(GAME_CURRENCY_STORAGE_KEY, normalizedCurrency);
  if (els.gameCurrencySelect) els.gameCurrencySelect.value = normalizedCurrency;
  if (els.gameCurrencySymbol) els.gameCurrencySymbol.textContent = CURRENCY_SYMBOLS[normalizedCurrency] || normalizedCurrency;
}

function saveUserProfile() {
  localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(userProfile));
}

function applyTheme() {
  document.documentElement.dataset.theme = "dark";
  try {
    localStorage.removeItem("nekopriceTheme");
  } catch (error) {
    // Dark mode is the only supported theme; storage cleanup is best effort.
  }
}

function initializeTheme() {
  applyTheme();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .filter(Boolean);
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function figureSensitivityText(figure) {
  const safeFigure = figure ?? {};
  const tags = Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : "";
  return normalizeText(
    [
      safeFigure?.name,
      safeFigure?.title,
      safeFigure?.character,
      safeFigure?.series,
      safeFigure?.manufacturer,
      safeFigure?.type,
      safeFigure?.scale,
      safeFigure?.version,
      safeFigure?.line,
      tags
    ].join(" ")
  );
}

function figureHasSensitiveVisual(figure) {
  const text = figureSensitivityText(figure);
  if (!text) return false;
  if (HIGH_CONFIDENCE_SENSITIVE_TERMS.some((term) => term && text.includes(term))) return true;
  const matchedTerms = SENSITIVE_VISUAL_TERMS.filter((term) => term && text.includes(term));
  const contextTerms = ["figure", "ver", "version", "scale", "girl", "body", "summer", "beach", "bunny"].map(normalizeText);
  const hasVisualContext = contextTerms.some((term) => term && text.includes(term));
  return matchedTerms.length >= 2 || (matchedTerms.length >= 1 && hasVisualContext);
}

function shouldBlurFigureImage(figure) {
  return state.antiEcchi && figureHasSensitiveVisual(figure);
}

function providerById(providerId) {
  const normalizedProvider = normalizeText(providerId);
  return providers.find(
    (provider) =>
      provider.id === providerId ||
      normalizeText(provider.id) === normalizedProvider ||
      normalizeText(provider.name) === normalizedProvider
  );
}

function providerName(providerId) {
  return providerById(providerId)?.name || providerId || "Provider";
}

function providerIdForOffer(rawProvider, productUrl = "") {
  const aliasMap = {
    "amiami": "amiami",
    "amiami preowned": "amiami_preowned",
    "amiami pre-owned": "amiami_preowned",
    "amiami_preowned": "amiami_preowned",
    "solaris": "solaris",
    "solaris preowned": "solaris_preowned",
    "solaris pre-owned": "solaris_preowned",
    "solaris_preowned": "solaris_preowned",
    "surugaya": "surugaya_preowned",
    "suruga ya": "surugaya_preowned",
    "suruga-ya": "surugaya_preowned",
    "surugaya preowned": "surugaya_preowned",
    "surugaya_preowned": "surugaya_preowned",
    "solaris_japan": "solaris",
    "solaris japan": "solaris",
    "hobby genki": "hobbygenki",
    "hobbygenki": "hobbygenki",
    "kappa hobby": "kappahobby",
    "kappahobby": "kappahobby",
    "nin nin game": "ninningame",
    "nin_nin_game": "ninningame",
    "ninningame": "ninningame",
    "nin nin": "ninningame",
    "good smile": "goodsmile",
    "good smile company": "goodsmile",
    "goodsmile": "goodsmile",
    "hanami flower": "hanamiflower",
    "hanamiflower": "hanamiflower",
    "hyper toys": "hypertoys",
    "hypertoys": "hypertoys",
    "lunar toy store": "lunar_toy_store",
    "meccha": "meccha_japan",
    "meccha japan": "meccha_japan",
    "meccha_japan": "meccha_japan",
    "navito world": "navito_world",
    "ninoma": "ninoma",
    "pixelatoy": "pixelatoy",
    "sugo toys": "sugo_toys",
    "mandarake": "mandarake"
  };
  const cleanRaw = normalizeText(rawProvider);
  const mappedRaw = aliasMap[cleanRaw] || rawProvider;
  const knownProvider = providerById(mappedRaw);
  if (knownProvider) return knownProvider.id;
  if (!mappedRaw) return "";
  return ensureDynamicProvider(mappedRaw, productUrl);
}

function offerProviderId(offer) {
  return providerIdForOffer(offer?.provider || offer?.providerId || offer?.store || "", offer?.productUrl || offer?.url || "");
}

function offerLooksPlausible(offer) {
  if (!offer) return false;

  const provider = offerProviderId(offer);
  const validationStatus = String(offer.validationStatus || offer.validation_status || "").toLowerCase();
  if (BLOCKED_OFFER_VALIDATION_STATUSES.has(validationStatus)) return false;
  const currency = String(offer.currency || offer.priceCurrency || "EUR").toUpperCase();
  const priceEur = numberOrNull(offer.priceEur);
  if (priceEur !== null && (priceEur < OFFER_PUBLIC_MIN_EUR || priceEur > OFFER_PUBLIC_MAX_EUR)) return false;
  const minimum = MIN_STORE_PRICE_BY_CURRENCY[provider]?.[currency];
  if (!minimum) return true;

  const productPrice = numberOrNull(offer.productPrice ?? offer.priceAmount ?? offer.price);
  const estimatedTotal = numberOrNull(offer.estimatedTotal);
  const priceToCheck = productPrice ?? estimatedTotal;
  return priceToCheck === null || priceToCheck >= minimum;
}

function currentCountryProfile() {
  return COUNTRY_PROFILES[userProfile.country] || COUNTRY_PROFILES.PT;
}

function localizedUiText(value, variables = {}) {
  return window.NekoI18n?.t(String(value ?? ""), variables) || String(value ?? "");
}

function localizedCountryName(countryCode = userProfile.country, fallback = "") {
  const normalized = COUNTRY_PROFILES[countryCode] ? countryCode : "PT";
  const defaultLabel = fallback || COUNTRY_PROFILES[normalized]?.label || normalized;
  return window.NekoI18n?.countryName(normalized, defaultLabel) || defaultLabel;
}

function currentCountryLabel() {
  return localizedCountryName(userProfile.country, currentCountryProfile().label);
}

function localProviderIds() {
  return currentCountryProfile().localProviderIds || [];
}

function isLocalProvider(providerId) {
  const normalizedId = offerProviderId({ provider: providerId });
  return localProviderIds().includes(normalizedId);
}

function preferredCurrency() {
  return CURRENCY_OPTIONS[userProfile.currency] ? userProfile.currency : currentCountryProfile().currency || "EUR";
}

function exchangeRateFor(currency) {
  const code = String(currency || "EUR").toUpperCase();
  return typeof exchangeRates[code] === "number" && exchangeRates[code] > 0 ? exchangeRates[code] : null;
}

function convertMoney(amount, fromCurrency = "EUR", toCurrency = preferredCurrency()) {
  const numericAmount = numberOrNull(amount);
  if (numericAmount === null) return null;

  const source = String(fromCurrency || "EUR").toUpperCase();
  const target = String(toCurrency || "EUR").toUpperCase();
  if (source === target) return roundMoney(numericAmount);

  const sourceRate = exchangeRateFor(source);
  const targetRate = exchangeRateFor(target);
  if (!sourceRate || !targetRate) return null;

  return roundMoney((numericAmount / sourceRate) * targetRate);
}

function offerDisplayCurrency() {
  return preferredCurrency();
}

function displayPriceRangeLabel() {
  const currency = offerDisplayCurrency();
  const displayMin = convertMoney(state.minPrice, "EUR", currency) ?? state.minPrice;
  const displayMax = convertMoney(state.maxPrice, "EUR", currency) ?? state.maxPrice;
  return `${formatMoney(displayMin, currency)} – ${formatMoney(displayMax, currency)}`;
}

function normalizeDualPriceRangeValues(minValue, maxValue, limit, changed = "max") {
  const safeLimit = Math.max(PRICE_RANGE_MIN_GAP_EUR, Number(limit) || PRICE_RANGE_MIN_GAP_EUR);
  const numericMin = Number(minValue);
  const numericMax = Number(maxValue);
  let min = Math.max(0, Math.min(
    safeLimit - PRICE_RANGE_MIN_GAP_EUR,
    Number.isFinite(numericMin) ? numericMin : 0
  ));
  let max = Math.max(PRICE_RANGE_MIN_GAP_EUR, Math.min(
    safeLimit,
    Number.isFinite(numericMax) ? numericMax : safeLimit
  ));
  if (max - min < PRICE_RANGE_MIN_GAP_EUR) {
    if (changed === "min") min = Math.max(0, max - PRICE_RANGE_MIN_GAP_EUR);
    else max = Math.min(safeLimit, min + PRICE_RANGE_MIN_GAP_EUR);
  }
  return { min: Math.round(min), max: Math.round(max) };
}

function syncDualPriceRangeControl(control, minInput, maxInput, minValue, maxValue, limit) {
  if (!control || !minInput || !maxInput) return;
  const range = normalizeDualPriceRangeValues(minValue, maxValue, limit);
  minInput.min = "0";
  minInput.max = String(limit);
  minInput.value = String(range.min);
  maxInput.min = "0";
  maxInput.max = String(limit);
  maxInput.value = String(range.max);
  control.style.setProperty("--price-range-start", `${(range.min / limit) * 100}%`);
  control.style.setProperty("--price-range-end", `${(range.max / limit) * 100}%`);
}

function activeFigureQuickFilters() {
  return Array.isArray(state.quickFilters)
    ? state.quickFilters.filter((key) => Object.prototype.hasOwnProperty.call(FIGURE_QUICK_FILTER_LABELS, key))
    : [];
}

function syncFigureQuickFilterControls() {
  const activeQuickFilters = new Set(activeFigureQuickFilters());
  els.figureQuickFilters?.querySelectorAll("[data-quick-filter]").forEach((input) => {
    input.checked = activeQuickFilters.has(input.dataset.quickFilter);
  });
}

function syncFigurePriceSortControls() {
  els.figurePriceSortFilters?.querySelectorAll("[data-figure-price-sort]").forEach((input) => {
    input.checked = input.value === state.gridSort;
  });
}

function availableProviderIds() {
  const localIds = new Set(localProviderIds());
  return [...providers]
    .sort((left, right) => {
      const localDifference = Number(localIds.has(right.id)) - Number(localIds.has(left.id));
      if (localDifference) return localDifference;
      return String(left.name || left.id).localeCompare(String(right.name || right.id));
    })
    .map((provider) => provider.id);
}

function availableProviders() {
  return availableProviderIds()
    .map((providerId) => providerById(providerId))
    .filter(Boolean);
}

function mergeProviders(sourceProviders) {
  const byId = new Map();
  [...sourceProviders, ...LOCAL_PROVIDERS].forEach((provider) => {
    if (provider && provider.id && !byId.has(provider.id)) {
      byId.set(provider.id, provider);
    }
  });
  return [...byId.values()];
}

function isValidProviderUrl(url) {
  if (!url || url === "#" || String(url).startsWith("#")) return false;

  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch (error) {
    return false;
  }
}

function normalizedUrl(url) {
  if (!isValidProviderUrl(url)) return "";

  try {
    const parsed = new URL(url);
    parsed.hash = "";
    return parsed.href.replace(/\/+$/, "");
  } catch (error) {
    return "";
  }
}

function isProviderHomepage(providerId, url) {
  const providerHome = normalizedUrl(providerById(providerId)?.url);
  const candidate = normalizedUrl(url);
  return Boolean(providerHome && candidate && providerHome === candidate);
}

function isDirectProductUrl(providerId, url) {
  if (!isValidProviderUrl(url)) return false;

  const candidate = normalizedUrl(url);
  if (!candidate || isProviderHomepage(providerId, url)) return false;

  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/+$/, "");
    if (!path || path === "/") return false;
    if (/\/(?:sale|sales|sales-item|clearance|outlet|discount|promotions?|rebajas|soldes)$/i.test(path)) return false;
    return !/search|s_keywords|query=|controller=search|searchtext=/i.test(parsed.href);
  } catch (error) {
    return false;
  }
}

function cleanProviderUrl(providerId, url) {
  return isDirectProductUrl(providerId, url) ? url : "";
}

const AFFILIATE_TAGS = {
  amiami: "?aff=NEKOPRICE",
  amiami_preowned: "?aff=NEKOPRICE",
  bbts: "?utm_source=nekoprice&utm_medium=affiliate",
  crunchyroll: "?ref=NEKOPRICE",
  goodsmile: "?ref=NEKOPRICE",
  hanamiflower: "?ref=NEKOPRICE",
  hobbygenki: "?ref=NEKOPRICE",
  hypertoys: "?ref=NEKOPRICE",
  kurogami: "?ref=NEKOPRICE",
  lunar_toy_store: "?tracking=neko",
  meccha_japan: "?ref=NEKOPRICE",
  navito_world: "?ref=NEKOPRICE",
  nin_nin_game: "?refs=12345",
  ninningame: "?refs=12345",
  ninoma: "?ref=NEKOPRICE",
  pixelatoy: "?ref=neko_pt",
  solaris: "?aff=NEKOPRICE",
  solaris_preowned: "?aff=NEKOPRICE",
  solaris_japan: "?aff=NEKOPRICE",
  sugo_toys: "?ref=NEKOPRICE"
};

function normalizedAffiliateProviderKey(providerId) {
  return String(providerId || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
}

function injectAffiliateLink(url, providerId) {
  const rawUrl = String(url || "").trim();
  if (!rawUrl) return rawUrl;

  const tag = AFFILIATE_TAGS[normalizedAffiliateProviderKey(providerId)] || "";
  const suffix = tag.replace(/^[?&]/, "");
  if (!suffix) return rawUrl;

  try {
    const parsed = new URL(rawUrl);
    const incomingParams = new URLSearchParams(suffix);
    let changed = false;
    incomingParams.forEach((value, key) => {
      if (!parsed.searchParams.has(key)) {
        parsed.searchParams.append(key, value);
        changed = true;
      }
    });
    return changed ? parsed.toString() : rawUrl;
  } catch (error) {
    const hashIndex = rawUrl.indexOf("#");
    const baseUrl = hashIndex >= 0 ? rawUrl.slice(0, hashIndex) : rawUrl;
    const hash = hashIndex >= 0 ? rawUrl.slice(hashIndex) : "";
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}${suffix}${hash}`;
  }
}

function safeExternalOfferUrl(offer) {
  const cleanUrl = cleanProviderUrl(offer.provider, offer.productUrl);
  return injectAffiliateLink(cleanUrl, offer.provider);
}

function offerHasDisplayableData(offer) {
  return Boolean(
    offer
    && offerLooksPlausible(offer)
    && (typeof offer.productPrice === "number" || typeof getOfferTotal(offer) === "number" || safeExternalOfferUrl(offer))
  );
}

function offerHasVerifiedProductPrice(offer) {
  return Boolean(
    offer
    && offerLooksPlausible(offer)
    && typeof offer.productPrice === "number"
    && offer.productPrice > 0
    && providerById(offer.provider)
    && safeExternalOfferUrl(offer)
  );
}

function directProductUrlFromRawOffer(rawOffer) {
  const provider = rawOffer.provider || rawOffer.providerId || "";
  const url = rawOffer.productUrl || rawOffer.url || "";
  return isDirectProductUrl(provider, url) ? url : "";
}

function figureProductUrl(rawFigure, offers) {
  const rawOffers = Array.isArray(rawFigure?.offers) ? rawFigure.offers : [];
  const officialUrl = rawOffers
    .map(directProductUrlFromRawOffer)
    .find(Boolean);
  return officialUrl || offers.find((offer) => offer.linkType === "product")?.productUrl || "";
}

function roundMoney(value) {
  return Math.round(Number(value) * 100) / 100;
}

function resetLocalizedOfferCache() {
  localizedOfferCache.clear();
  figurePriceCache.clear();
  pricedStoreCountCache.clear();
  cachedMatches = null;
  lastMatchesState = null;
}

function normalizeOffer(offer) {
  const rawProvider = offer.provider || offer.providerId || offer.store || "";
  const rawProductUrl = offer.productUrl || offer.url || offer.product_url || offer.link || "";
  const provider = providerIdForOffer(rawProvider, rawProductUrl);
  const productPrice = numberOrNull(offer.displayPrice ?? offer.productPrice ?? offer.priceAmount ?? offer.price);
  const sourcePrice = numberOrNull(offer.sourcePrice ?? offer.original_price ?? offer.originalPrice ?? offer.productPrice ?? offer.price);
  const shipping = numberOrNull(offer.shipping ?? offer.shippingAmount);
  const taxes = numberOrNull(offer.taxes ?? offer.feesAmount);
  const estimatedTotal = numberOrNull(offer.estimatedTotal);
  const currency = String(offer.displayCurrency || offer.currency || offer.priceCurrency || "EUR").toUpperCase();
  const sourceCurrency = String(offer.sourceCurrency || offer.original_currency || offer.originalCurrency || currency).toUpperCase();
  const productUrl = rawProductUrl; // Keep the real provider URL

  return {
    jan: String(offer.jan || offer.sku || "").trim(),
    store: offer.store || rawProvider,
    provider,
    productUrl,
    availability: offer.availability || "In stock",
    productPrice,
    shipping,
    taxes,
    currency,
    estimatedTotal,
    condition: offer.condition || "New",
    lastUpdated: offer.lastUpdated || new Date().toISOString().slice(0, 10),
    lastCheckedAt: offer.lastCheckedAt || offer.last_checked || "",
    confidence: offer.confidence || "Medium",
    validationStatus: offer.validationStatus || offer.validation_status || "",
    validationReason: offer.validationReason || offer.validation_reason || "",
    priceWarning: offer.priceWarning || offer.price_warning || "",
    canRefresh: offer.canRefresh !== false,
    currencyConfidence: offer.currencyConfidence || "",
    originalPrice: sourcePrice,
    sourceProductPrice: sourcePrice,
    sourcePrice,
    previousPrice: numberOrNull(offer.previousPrice ?? offer.previous_price),
    originalCurrency: sourceCurrency,
    sourceCurrency,
    displayPrice: productPrice,
    displayCurrency: currency,
    displayPriceKind: offer.displayPriceKind || "",
    displayPriceIsEstimate: offer.displayPriceIsEstimate === true,
    hasServerDisplayPrice: offer.displayPrice !== undefined || Boolean(offer.displayPriceKind || offer.exchangeRateSnapshotId),
    exchangeRate: numberOrNull(offer.exchangeRate),
    exchangeRateDate: offer.exchangeRateDate || "",
    exchangeRateSource: offer.exchangeRateSource || "",
    exchangeRateSnapshotId: offer.exchangeRateSnapshotId || "",
    exchangeRateStale: offer.exchangeRateStale === true,
    marketPrice: numberOrNull(offer.marketPrice),
    marketCurrency: offer.marketCurrency || "",
    marketCountry: offer.marketCountry || "",
    sourceVariantId: offer.sourceVariantId || "",
    packageType: offer.packageType || "unknown",
    packageQuantity: numberOrNull(offer.packageQuantity),
    packageStatus: offer.packageStatus || "unknown",
    priceEur: numberOrNull(offer.priceEur),
    storeCountry: offer.storeCountry || "",
    isLocal: offer.isLocal === true || isLocalProvider(provider),
    shipsToCountry: offer.shipsToCountry !== false,
    linkType: offer.linkType || (isDirectProductUrl(provider, productUrl) ? "product" : "provider")
  };
}

function offerIsSecondHand(offer) {
  const condition = normalizeText(offer?.condition || "").replace(/\s+/g, " ");
  return SECOND_HAND_PROVIDER_IDS.has(offer?.provider)
    || ["used", "pre owned", "preowned", "second hand"].includes(condition);
}

function catalogueRequestUrl(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}t=${Date.now()}`;
}

function catalogueApiUrl({
  page = 1,
  limit = CATALOGUE_PAGE_LIMIT,
  query = "",
  kind = "",
  forceReload = false,
  includeTotal = false,
  quickFilters = activeFigureQuickFilters()
} = {}) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    country: userProfile.country,
    currency: preferredCurrency()
  });
  if (query) params.set("q", query);
  if (kind) params.set("kind", kind);
  const remoteQuickFilters = [...new Set(Array.isArray(quickFilters) ? quickFilters : [])]
    .filter((key) => Object.prototype.hasOwnProperty.call(FIGURE_QUICK_FILTER_LABELS, key));
  if (remoteQuickFilters.length) params.set("quick_filters", remoteQuickFilters.join(","));
  if (forceReload) params.set("t", String(Date.now()));
  if (includeTotal) params.set("include_total", "1");
  return apiEndpoint(CATALOG_URL) + "?" + params.toString();
}

function categoryApiSeedQuery(category = state.category) {
  const seeds = {
    nendoroids: "Nendoroid",
    scale: "Scale Figure",
    prize: "Prize Figure",
    figma: "figma",
    pop: "Pop Up Parade",
    action: "Action Figure",
    castoff: "lingerie",
    figuarts: "Figuarts",
    bunny: "Bunny",
    mecha: "Gundam",
    model: "Model Kit",
    statue: "Statue",
    preorder: "Pre-order"
  };
  return seeds[category] || "";
}

function stableImageIndex(value, length = PREMIUM_FIGURE_FALLBACK_IMAGES.length) {
  const text = String(value || "nekoprice");
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }
  return length ? hash % length : 0;
}

function fallbackFigureImageForKey(key) {
  return PREMIUM_FIGURE_FALLBACK_IMAGES[stableImageIndex(key)] || FIGURE_PLACEHOLDER_IMAGE;
}

function rawFigureImage(rawFigure) {
  const raw = rawFigure ?? {};
  return raw?.image || raw?.image_url || raw?.imageUrl || raw?.thumbnail || raw?.picture || "";
}

function isUsableFigureImage(url) {
  const value = String(url || "").trim();
  if (!value) return false;
  if (value === FIGURE_PLACEHOLDER_IMAGE) return false;
  if (LOW_QUALITY_IMAGE_RE.test(value) || FIGURE_SERIES_ART_IMAGE_RE.test(value)) return false;
  return /\.(?:png|jpe?g|webp|avif)(?:[?#].*)?$/i.test(value) || value.includes("static.myfigurecollection.net");
}

function premiumFigureImageFor(rawFigure) {
  const raw = rawFigure ?? {};
  const image = rawFigureImage(raw);
  if (isUsableFigureImage(image)) return image;
  return FIGURE_PLACEHOLDER_IMAGE;
}

function isUsableGalleryImage(url) {
  const value = String(url || "").trim();
  if (!value || value === FIGURE_PLACEHOLDER_IMAGE || LOW_QUALITY_IMAGE_RE.test(value) || FIGURE_SERIES_ART_IMAGE_RE.test(value)) return false;
  if (/^(?:data|blob|javascript|about):/i.test(value)) return false;
  return /^(?:https?:)?\/\//i.test(value) || isUsableFigureImage(value);
}

function normalizeFigureGalleryImages(rawFigure, explicitImages = null) {
  const figure = rawFigure ?? {};
  const rawImages = Array.isArray(explicitImages)
    ? explicitImages
    : Array.isArray(figure?.images)
      ? figure.images
      : [];
  const values = [
    ...rawImages,
    {
      url: rawFigureImage(figure),
      role: "main",
      position: 0,
      alt: figure?.name || figure?.title || "Selected figure image",
      isPrimary: true
    }
  ];
  const seen = new Set();
  const normalized = [];
  values.forEach((rawImage, index) => {
    const item = typeof rawImage === "string" ? { url: rawImage } : rawImage ?? {};
    const url = String(item.url || item.image_url || item.imageUrl || item.src || item.image || "").trim();
    if (!isUsableGalleryImage(url)) return;
    const key = canonicalFigureImageKey(url);
    if (!key || seen.has(key)) return;
    seen.add(key);
    const thumbnailUrl = String(item.thumbnailUrl || item.thumbnail_url || item.thumbUrl || item.thumb_url || "").trim();
    const width = Number.parseInt(item.width, 10);
    const height = Number.parseInt(item.height, 10);
    normalized.push({
      url,
      thumbnailUrl: isUsableGalleryImage(thumbnailUrl) || /^https?:\/\//i.test(thumbnailUrl) ? thumbnailUrl : "",
      role: String(item.role || (index === 0 ? "main" : "angle")),
      position: Number.isFinite(Number(item.position)) ? Number(item.position) : index,
      width: Number.isFinite(width) && width > 0 ? width : null,
      height: Number.isFinite(height) && height > 0 ? height : null,
      alt: String(item.alt || item.altText || figure?.name || figure?.title || "Selected figure image"),
      source: String(item.source || item.sourceStore || ""),
      isPrimary: Boolean(item.isPrimary || item.is_primary)
    });
  });
  normalized.sort((left, right) => {
    if (left.isPrimary !== right.isPrimary) return left.isPrimary ? -1 : 1;
    return left.position - right.position;
  });
  if (normalized.length) normalized[0].isPrimary = true;
  return normalized;
}

function productCardImageFitClass(rawFigure, imageUrl = "") {
  const image = String(imageUrl || rawFigureImage(rawFigure) || "").toLowerCase();
  if (!image || image === FIGURE_PLACEHOLDER_IMAGE) return "";
  if (image.includes("pixelatoy.com/") || image.includes("thickbox_default")) {
    return "product-card__image--boxed-source";
  }
  return "";
}

const GUARDED_FIGURE_IMAGE_SELECTOR = [
  ".trending-card-media img",
  ".product-card__image-wrap img",
  ".product-thumb img",
  ".new-arrival-image img",
  ".sales-card-image img",
  ".neko-offer-image img",
  ".wishlist-related-image img",
  ".wishlist-product-image img",
  "#productImage"
].join(",");

const GUARDED_FIGURE_FRAME_SELECTOR = [
  ".trending-card-media",
  ".product-card__image-wrap",
  ".product-thumb",
  ".new-arrival-image",
  ".sales-card-image",
  ".neko-offer-image",
  ".wishlist-related-image",
  ".wishlist-product-image",
  ".product-image-frame"
].join(",");

function guardFigureImage(image) {
  if (!(image instanceof HTMLImageElement)) return;
  image.classList.add("figure-image-guard");
  const frame = image.closest(GUARDED_FIGURE_FRAME_SELECTOR);
  if (frame) frame.classList.add("figure-image-guard-frame");

  const recordComposition = () => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    image.dataset.sourceAspect = (image.naturalWidth / image.naturalHeight).toFixed(4);
    if (!frame) return;
    const imageBox = image.getBoundingClientRect();
    const frameBox = frame.getBoundingClientRect();
    const overflowed = imageBox.width > frameBox.width + 1 || imageBox.height > frameBox.height + 1;
    frame.classList.toggle("had-overflowing-figure-image", overflowed);
  };

  if (image.complete) {
    requestAnimationFrame(recordComposition);
  } else {
    image.addEventListener("load", () => requestAnimationFrame(recordComposition), { once: true });
  }
}

function scanFigureImages(root = document) {
  if (root instanceof HTMLImageElement && root.matches(GUARDED_FIGURE_IMAGE_SELECTOR)) {
    guardFigureImage(root);
  }
  root.querySelectorAll?.(GUARDED_FIGURE_IMAGE_SELECTOR).forEach(guardFigureImage);
}

function installFigureImageGuard() {
  scanFigureImages(document);
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) scanFigureImages(node);
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function figureFallbackId(rawFigure) {
  const raw = rawFigure ?? {};
  const rawCode = String(raw?.jan || raw?.sku || raw?.jancode || raw?.ean || "");
  if (/^src[-:]/i.test(rawCode.trim())) {
    return `source-${rawCode.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "figure"}`;
  }
  const jan = rawCode.replace(/\D/g, "");
  if (jan) return `jan-${jan}`;
  const title = normalizeText(raw?.name || raw?.title || "untitled-figure").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `catalogue-${title || "untitled-figure"}`;
}

function figureJan(rawFigure) {
  const raw = rawFigure ?? {};
  const rawCode = String(raw?.jan || raw?.sku || raw?.jancode || raw?.ean || "");
  if (/^src[-:]/i.test(rawCode.trim())) return "";
  const jan = rawCode.replace(/\D/g, "");
  return jan.length === 12 || jan.length === 13 ? jan : "";
}

function isPendingFigureTitle(value) {
  return normalizeText(value).includes("aguardar processamento");
}

function isPendingFigure(rawFigure) {
  const raw = rawFigure ?? {};
  const title = raw?.name || raw?.title || "";
  return !String(title || "").trim() || isPendingFigureTitle(title);
}

function figureDisplayName(rawFigure) {
  const raw = rawFigure ?? {};
  const jan = figureJan(raw);
  const title = localizedFigureTitle(raw);
  if ((!title || isPendingFigureTitle(title)) && jan) {
    return `JAN ${jan} - pending enrichment`;
  }
  return title || "Untitled";
}

function isUsefulCharacterName(value) {
  const text = String(value || "").trim();
  if (!text) return false;
  const normalized = normalizeText(text);
  return ![
    "official product",
    "unknown",
    "undefined",
    "null",
    "sem titulo",
    "untitled",
    "a aguardar processamento",
    "pending enrichment"
  ].some((token) => normalized.includes(token));
}

function containsJapaneseScript(value) {
  return /[\u3041-\u3096\u30a1-\u30fa\u3400-\u9fff]/u.test(String(value || ""));
}

function titleIsPredominantlyJapanese(value) {
  const text = String(value || "");
  const japaneseCount = (text.match(/[\u3041-\u3096\u30a1-\u30fa\u3400-\u9fff]/gu) || []).length;
  const letterCount = (text.match(/\p{L}/gu) || []).length;
  return japaneseCount >= 4 && (japaneseCount >= 12 || japaneseCount / Math.max(letterCount, 1) >= 0.2);
}

function stripJapaneseTitleFragments(value) {
  return String(value || "")
    .replace(/[\(\[（【][^\)\]）】]*[\u3041-\u3096\u30a1-\u30fa\u3400-\u9fff][^\)\]）】]*[\)\]）】]/gu, " ")
    .replace(/[\u3041-\u3096\u30a1-\u30fa\u3400-\u9fff]/gu, " ")
    .replace(/\s+/g, " ")
    .replace(/^[-–—:|/\s]+|[-–—:|/\s]+$/g, "")
    .trim();
}

function figureCanonicalTitle(rawFigure) {
  const raw = rawFigure ?? {};
  const explicit = cleanFigureTitleText(raw?.canonicalName || raw?.englishTitle || raw?.english_name || "");
  if (explicit && !titleIsPredominantlyJapanese(explicit)) return stripJapaneseTitleFragments(explicit) || explicit;
  for (const candidate of [raw?.name, raw?.title]) {
    const clean = cleanFigureTitleText(candidate || "");
    if (clean && !titleIsPredominantlyJapanese(clean)) {
      const stripped = stripJapaneseTitleFragments(clean);
      if (stripped) return stripped;
    }
  }
  const slug = String(raw?.slug || "")
    .replace(/\b\d{12,13}\b/g, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return slug || (figureJan(raw) ? `Japanese figure ${figureJan(raw)}` : "Untitled");
}

function localizedFigureTitle(rawFigure) {
  const raw = rawFigure ?? {};
  if (userProfile?.country === "JP") {
    const japanese = [raw?.rawTitle, raw?.originalTitle, raw?.title, raw?.name]
      .map((value) => cleanFigureTitleText(value || ""))
      .find((value) => containsJapaneseScript(value));
    if (japanese) return japanese;
  }
  return figureCanonicalTitle(raw);
}

function relocalizeLoadedFigureTitles() {
  figures.forEach((figure) => {
    if (!figure || typeof figure !== "object") return;
    const title = localizedFigureTitle(figure);
    figure.name = title;
    figure.title = title;
  });
}

function cleanFigureTitleText(value) {
  return String(value || "")
    .replace(/\s*\[[^\]]+\]\s*/g, " ")
    .replace(/\s*\([^)]*(good smile|kotobukiya|max factory|alter|freeing|furyu|bandai|sega|taito|amiami|aniplex)[^)]*\)\s*/gi, " ")
    .replace(/\bJAN\s*\d{12,13}\b/gi, " ")
    .replace(/\b\d{12,13}\s*\.?\s*html?\b/gi, " ")
    .replace(/\b\d{12,13}\b/g, " ")
    .replace(/\s*\.?\s*html?\b/gi, " ")
    .replace(/^(?:\d{4,8}[\s_-]+){1,4}(?=[A-Za-z"“”])/u, " ")
    .replace(/\b\d+\s*\/\s*\d+\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanCardTitleNoise(value) {
  return cleanFigureTitleText(value)
    .replace(/^[“”"']([^“”"']{2,80})[“”"']\s+/u, " ")
    .replace(/\b(?:buy|figura)\b/gi, " ")
    .replace(/\b(?:pre[-\s]?order|brand\s+new|new|official\s+product)\b/gi, " ")
    .replace(/\b(?:nendoroid(?:\s+(?:doll|more|plus|surprise))?|figma|figuarts(?:\s+(?:zero|mini))?|s\.?\s*h\.?\s*figuarts|pop\s+up\s+parade|artfx\s*j?|artfx\+|b-style|f:nex|tenitol|g\.?\s*e\.?\s*m\.?\s*series|bishoujo\s+statue|super\s+action\s+statue|ultra\s+detail\s+figure|udf|metal\s+robot\s+spirits|robot\s+spirits|figure-rise\s+standard|scale\s+figure|complete\s+figure|pvc\s+figure|action\s+figure|soft\s+vinyl\s+figure|licensed\s+statue|statue|figure|ichibansho|ichiban\s+kuji|grandista)\b/gi, " ")
    .replace(/\b(?:banpresto|bandai\s+spirits|bandai|good\s+smile\s+company|good\s+smile|megahouse|sega|taito|furyu)\b/gi, " ")
    .replace(/\b(?:no\.?|#)\s*[a-z]*-?\d+[a-z-]*\b/gi, " ")
    .replace(/#\s*\d+[a-z-]*/gi, " ")
    .replace(/\b\d+\s*\/\s*\d+\s*(?:scale)?\b/gi, " ")
    .replace(/\b\d+(?:\.\d+)?\s*cm\b/gi, " ")
    .replace(/\b(?:set\s+of\s+\d+|limited\s+edition|standard\s+release|standard\s+ver\.?|re[-\s]?release|rerelease|resale|re-run)\b/gi, " ")
    .replace(/\b(?:ver|version)\.?\b/gi, " ")
    .replace(/\s*[.。]+\s*$/g, " ")
    .replace(/\s*[-–—]\s*$/g, " ")
    .replace(/\s*[-–—]\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleLooksLikeFigureLine(value) {
  const normalized = normalizeText(value);
  return /^(?:nendoroid|figma|pop up parade|figuarts|s h figuarts|artfx|b style|scale figure|complete figure|pvc figure|action figure|figure)$/i.test(normalized);
}

function titleLooksLikeVariantOnly(value) {
  const normalized = normalizeText(value);
  return /^(?:ordinal|ordinal scale|extra battle|dx|dx edition|edition|limited|limited edition|standard|standard ver|school uniform|lab coat|armor|full face|bunny|swimsuit|casual outfit|racing|re re|re release|rerelease|resale|re run|pre order|preorder|\d{4})$/i.test(normalized);
}

function importantFigureNameFromTitle(value) {
  const title = cleanFigureTitleText(value);
  if (!title) return "";

  const quotedLead = title.match(/^[“”"']([^“”"']{2,80})[“”"']\s*(.*)$/u);
  if (quotedLead) {
    const quotedName = cleanFigureTitleText(quotedLead[1]);
    const restName = cleanCardTitleNoise(quotedLead[2]);
    if (restName.length >= 3 && !/^[a-z0-9._-]{1,8}$/i.test(restName)) return restName;
    if (restName) return cleanFigureTitleText(`${quotedName} ${restName}`);
    return quotedName;
  }

  const rawParts = title.split(/\s+-\s+|\s+:\s+|\s+~\s+/);
  const firstRawPart = cleanCardTitleNoise(rawParts[0] || "");
  const parts = rawParts.map((part) => cleanCardTitleNoise(part)).filter(Boolean);
  const startsWithFigureLine = !firstRawPart || titleLooksLikeFigureLine(firstRawPart);
  const preferredParts = startsWithFigureLine ? parts : parts.slice(1);
  const usefulLaterPart = preferredParts.find((part) => part.length >= 3 && !titleLooksLikeFigureLine(part) && !titleLooksLikeVariantOnly(part));
  if (usefulLaterPart) return usefulLaterPart;

  const usefulPart = parts.find((part) => part.length >= 3 && !titleLooksLikeFigureLine(part) && !titleLooksLikeVariantOnly(part));
  const compacted = cleanCardTitleNoise(usefulPart || title);
  if (compacted.length >= 3) return compacted;

  const quotedPrefix = title.match(/^[“”"']([^“”"']{2,80})[“”"']/u);
  return quotedPrefix ? cleanFigureTitleText(quotedPrefix[1]) : title;
}

function compactFigureName(rawFigureOrTitle) {
  if (typeof rawFigureOrTitle === "string") {
    return importantFigureNameFromTitle(rawFigureOrTitle) || "Untitled";
  }

  const raw = rawFigureOrTitle ?? {};
  if (isUsefulCharacterName(raw?.character)) {
    return cleanFigureTitleText(raw.character);
  }

  const titleSource = localizedFigureTitle(raw);
  const title = cleanFigureTitleText(titleSource);
  if (!title || isPendingFigureTitle(title)) {
    const jan = figureJan(raw);
    return jan ? `JAN ${jan}` : "Pending";
  }

  let compact = importantFigureNameFromTitle(title) || title;
  const compactNormalized = normalizeText(compact);
  if (compactNormalized.includes("yusuke urameshi") && compactNormalized.includes("one piece")) {
    compact = compact.replace(/\bone\s+piece\b/gi, " ").replace(/\s+/g, " ").trim();
  }
  return compact;
}

function compactFigureNameForCard(rawFigureOrTitle, maxLength = 34) {
  const name = compactFigureName(rawFigureOrTitle);
  if (name.length <= maxLength) return name;

  // Preserve the edition because it can be the only visible difference
  // between two valid JANs returned by an explicit search.
  const rawTitle = typeof rawFigureOrTitle === "object"
    ? String(rawFigureOrTitle?.rawTitle || rawFigureOrTitle?.title || rawFigureOrTitle?.name || name)
    : String(rawFigureOrTitle || name);
  const variantMatch = rawTitle.match(/\b(normal|standard|regular|deluxe|dx)\s*(?:edition|ver(?:sion)?\.?)?/i);
  if (variantMatch) {
    const variant = variantMatch[1].toLowerCase() === "dx"
      ? "DX"
      : `${variantMatch[1][0].toUpperCase()}${variantMatch[1].slice(1).toLowerCase()}`;
    const suffix = ` · ${variant}`;
    const prefixLength = Math.max(8, maxLength - suffix.length - 1);
    return `${name.slice(0, prefixLength).trim()}…${suffix}`;
  }
  return `${name.slice(0, Math.max(0, maxLength - 3)).trim()}...`;
}

function searchableFigureTitleText(figure) {
  const compact = compactFigureName(figure);
  const raw = cleanFigureTitleText(figure?.rawTitle || figure?.title || figure?.name || "");
  const compactNormalized = normalizeText(compact);
  const rawNormalized = normalizeText(raw);
  if (compactNormalized.includes("yusuke urameshi") && rawNormalized.includes("one piece")) {
    return compact;
  }
  return [compact, raw].filter(Boolean).join(" ");
}

function canonicalFigureImageKey(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const clean = raw.split("#", 1)[0].split("?", 1)[0].replace(/\/+$/, "");
  try {
    const parsed = new URL(clean, window.location.href);
    const host = ["http:", "https:"].includes(parsed.protocol) ? parsed.host.toLowerCase() : "";
    const path = parsed.pathname.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
    return `${host}${path}`.toLowerCase();
  } catch (error) {
    return clean.toLowerCase();
  }
}

function canonicalFigureProductIdentity(value) {
  let text = normalizeText(value);
  if (!text) return "";
  if (FIGURE_NON_PRODUCT_IDENTITY_TERMS.some((term) => text.includes(term))) return "";
  text = ` ${text} `;
  FIGURE_PRODUCT_IDENTITY_REPLACEMENTS.forEach(([source, replacement]) => {
    text = text.replaceAll(` ${source} `, ` ${replacement} `);
  });
  const tokens = text
    .trim()
    .split(/\s+/)
    .filter((token) => token && !FIGURE_PRODUCT_IDENTITY_STOP_WORDS.has(token))
    .filter((token) => !/^\d+(?:cm|mm|in|inch|inches)$/.test(token));
  const identityTokens = [...tokens].sort();
  const hasStrongLine = identityTokens.some((token) => FIGURE_STRONG_PRODUCT_LINE_TOKENS.has(token));
  if (!(hasStrongLine && identityTokens.length >= 3)) return "";
  return identityTokens.join(" ");
}

function normalizedFigureDedupeKeys(figure) {
  const safeFigure = figure ?? {};
  const keys = [];
  const jan = figureJan(safeFigure);
  if (jan) keys.push(`jan:${jan}`);

  const mfc = String(safeFigure.mfc_id || safeFigure.mfcId || "").trim();
  if (mfc) keys.push(`mfc:${mfc}`);

  if (!isPendingFigureTitle(safeFigure.name || safeFigure.title)) {
    const rawTitle = safeFigure.rawTitle || safeFigure.title || safeFigure.name || "";
    const identity = canonicalFigureProductIdentity(rawTitle);
    if (identity) keys.push(`product:${identity}`);

    const exactTitle = normalizeText(rawTitle);
    const rawImage = String(safeFigure.rawImage || rawFigureImage(safeFigure) || safeFigure.image || "").trim();
    const imageKey = canonicalFigureImageKey(rawImage);
    if (exactTitle && imageKey && isUsableFigureImage(rawImage)) {
      keys.push(`image-title:${imageKey}:${exactTitle}`);
    }
  }

  return [...new Set(keys)];
}

function normalizedFigureDedupeKey(figure) {
  return normalizedFigureDedupeKeys(figure)[0] || "";
}

const FIGURE_VISUAL_VARIANT_WORDS = new Set([
  "bonus", "complete", "figure", "figures", "figurine", "figurines",
  "statue", "statues", "painted", "pvc", "abs", "dx", "deluxe",
  "normal", "standard", "regular", "ver", "version", "edition",
  "limited", "exclusive", "rerelease", "reissue", "preorder", "pre",
  "order"
]);

function figureVisualTitleFamily(value) {
  const normalized = normalizeText(String(value || "")
    .replace(/\b\d+\s*(?:\/|:|x)\s*\d+\b/g, " ")
    .replace(/\b\d+(?:\.\d+)?\s*(?:cm|mm|in|inch|inches)\b/g, " "));
  const tokens = normalized
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => !FIGURE_VISUAL_VARIANT_WORDS.has(token));
  const family = tokens.join(" ");
  return tokens.length >= 4 && family.length >= 16 ? family : "";
}

function figureVisualSuppressionKeys(figure, { includeVariantFamily = true } = {}) {
  if (!figure || isPendingFigure(figure)) return [];
  const keys = [];
  const rawTitle = figure.rawTitle || figure.title || figure.name || "";
  const family = figureVisualTitleFamily(rawTitle);
  const rawVariantText = String(rawTitle).toLowerCase();
  const hasVariantSignal = /\b\d+\s*(?:\/|:|x)\s*\d+\b/.test(rawVariantText)
    || /\b(?:normal|standard|regular|dx|deluxe|ver(?:sion)?|limited|exclusive|rerelease|reissue)\b/.test(rawVariantText);
  const rawImage = String(figure.rawImage || rawFigureImage(figure) || figure.image || "").trim();
  const imageKey = isUsableFigureImage(rawImage) ? canonicalFigureImageKey(rawImage) : "";
  if (imageKey) keys.push(`visual-image:${imageKey}`);
  if (includeVariantFamily && family && hasVariantSignal) keys.push(`visual-family:${family}`);

  const contentHash = String(figure.imageContentSha256 || figure.image_content_sha256 || "").toLowerCase();
  const pixelHash = String(figure.imagePixelSha256 || figure.image_pixel_sha256 || "").toLowerCase();
  const dhash = String(figure.imageDhash64 || figure.image_dhash64 || "").toLowerCase();
  if (/^[a-f0-9]{64}$/.test(contentHash)) keys.push(`visual-content:${contentHash}`);
  if (/^[a-f0-9]{64}$/.test(pixelHash)) keys.push(`visual-pixels:${pixelHash}`);
  if (family && /^[a-f0-9]{16}$/.test(dhash)) keys.push(`visual-dhash:${dhash}:${family}`);
  return [...new Set(keys)];
}

function normalizedFigureScore(figure) {
  const offers = Array.isArray(figure?.offers) ? figure.offers : [];
  return (
    (!isPendingFigureTitle(figure?.name || figure?.title) ? 120 : 0)
    + (isUsableFigureImage(figure?.image) ? 45 : 0)
    + Math.min(offers.length, 8) * 12
    + (figureJan(figure) ? 20 : 0)
    + String(figure?.name || figure?.title || "").length
  );
}

function figureOfferDedupeKey(offer) {
  const provider = normalizeText(offer?.provider || offer?.store);
  if (provider) return `store:${provider}`;
  const url = canonicalFigureImageKey(offer?.productUrl || offer?.url);
  return url ? `url:${url}` : "";
}

function figureOfferDedupeScore(offer) {
  const status = normalizeText(offer?.validationStatus || offer?.validation_status || "ok");
  const accepted = !["rejected", "fake", "suspicious", "gone", "blocked"].includes(status);
  const inStock = offer?.in_stock !== false && offer?.inStock !== false;
  const price = numberOrNull(offer?.productPrice ?? offer?.price);
  const freshness = Date.parse(offer?.lastCheckedAt || offer?.last_checked || offer?.lastUpdated || offer?.last_updated || "") || 0;
  return (accepted ? 100000 : 0) + (inStock ? 30000 : 0) + (price && price > 0 ? 10000 : 0) + Math.min(freshness / 1e10, 9999);
}

function mergeFigureOffersForDedupe(left, right) {
  const merged = new Map();
  [...(Array.isArray(left) ? left : []), ...(Array.isArray(right) ? right : [])].forEach((offer, index) => {
    if (!offer || typeof offer !== "object") return;
    const key = figureOfferDedupeKey(offer) || `anonymous:${index}:${JSON.stringify(offer)}`;
    const previous = merged.get(key);
    if (!previous || figureOfferDedupeScore(offer) > figureOfferDedupeScore(previous)) merged.set(key, offer);
  });
  return [...merged.values()];
}

function mergeFigureRecordsForDedupe(left, right) {
  const winnerIsRight = normalizedFigureScore(right) > normalizedFigureScore(left);
  const winner = winnerIsRight ? right : left;
  const loser = winnerIsRight ? left : right;
  const merged = { ...winner };
  const fillFields = [
    "character", "series", "manufacturer", "type", "line", "scale", "version",
    "releaseDate", "release_date", "mfc_id", "mfcId", "productUrl", "product_url",
    "figureKey", "productId"
  ];
  fillFields.forEach((field) => {
    if ((merged[field] === undefined || merged[field] === null || merged[field] === "") && loser?.[field]) {
      merged[field] = loser[field];
    }
  });
  if (!isUsableFigureImage(rawFigureImage(merged)) && isUsableFigureImage(rawFigureImage(loser))) {
    merged.image = rawFigureImage(loser);
    merged.rawImage = rawFigureImage(loser);
  }
  merged.images = normalizeFigureGalleryImages(merged, [
    ...(Array.isArray(winner?.images) ? winner.images : []),
    ...(Array.isArray(loser?.images) ? loser.images : [])
  ]);
  merged.galleryLoaded = Boolean(winner?.galleryLoaded || loser?.galleryLoaded);
  merged.offers = mergeFigureOffersForDedupe(winner?.offers, loser?.offers);
  const earliestPage = Math.min(Number(left?.cataloguePage) || Infinity, Number(right?.cataloguePage) || Infinity);
  if (Number.isFinite(earliestPage)) merged.cataloguePage = earliestPage;
  return merged;
}

function createFigureDedupeState() {
  return { result: [], indexByKey: new Map(), keysByIndex: new Map(), removed: 0 };
}

function addFigureToDedupeState(dedupeState, figure) {
  const keys = normalizedFigureDedupeKeys(figure);
  const matchedIndexes = [...new Set(keys.map((key) => dedupeState.indexByKey.get(key)).filter(Number.isInteger))]
    .filter((index) => dedupeState.result[index])
    .sort((left, right) => left - right);

  if (!matchedIndexes.length) {
    const index = dedupeState.result.length;
    dedupeState.result.push(figure);
    const storedKeys = new Set(keys);
    dedupeState.keysByIndex.set(index, storedKeys);
    storedKeys.forEach((key) => dedupeState.indexByKey.set(key, index));
    return;
  }

  const targetIndex = matchedIndexes[0];
  let merged = dedupeState.result[targetIndex];
  const mergedKeys = new Set(dedupeState.keysByIndex.get(targetIndex) || []);

  matchedIndexes.slice(1).forEach((duplicateIndex) => {
    const duplicate = dedupeState.result[duplicateIndex];
    if (!duplicate) return;
    merged = mergeFigureRecordsForDedupe(merged, duplicate);
    (dedupeState.keysByIndex.get(duplicateIndex) || []).forEach((key) => mergedKeys.add(key));
    dedupeState.result[duplicateIndex] = null;
    dedupeState.keysByIndex.delete(duplicateIndex);
    dedupeState.removed += 1;
  });

  merged = mergeFigureRecordsForDedupe(merged, figure);
  dedupeState.removed += 1;
  keys.forEach((key) => mergedKeys.add(key));
  normalizedFigureDedupeKeys(merged).forEach((key) => mergedKeys.add(key));
  dedupeState.result[targetIndex] = merged;
  dedupeState.keysByIndex.set(targetIndex, mergedKeys);
  mergedKeys.forEach((key) => dedupeState.indexByKey.set(key, targetIndex));
}

function dedupedFigureStateResult(dedupeState) {
  return dedupeState.result.filter(Boolean);
}

function dedupeNormalizedFigures(items) {
  const dedupeState = createFigureDedupeState();
  items.forEach((figure) => addFigureToDedupeState(dedupeState, figure));
  if (dedupeState.removed) console.warn(`NekoPrice dedupe: ${dedupeState.removed} duplicate figures hidden on the frontend.`);
  return dedupedFigureStateResult(dedupeState);
}

async function dedupeNormalizedFiguresInChunks(items) {
  const dedupeState = createFigureDedupeState();
  const chunkSize = 1500;

  for (let start = 0; start < items.length; start += chunkSize) {
    items.slice(start, start + chunkSize).forEach((figure) => addFigureToDedupeState(dedupeState, figure));

    if (start + chunkSize < items.length) await yieldToBrowser();
  }

  if (dedupeState.removed) console.warn(`NekoPrice dedupe: ${dedupeState.removed} duplicate figures hidden on the frontend.`);
  return dedupedFigureStateResult(dedupeState);
}

function normalizeFigure(rawFigure) {
  const raw = rawFigure ?? {};
  const rawOffers = Array.isArray(raw?.offers) ? raw.offers : [];
  const normalizedOffers = rawOffers.map(normalizeOffer).filter(offerLooksPlausible);
  const productUrl = figureProductUrl(rawFigure, normalizedOffers);
  const offers = normalizedOffers;
  const sourceImage = rawFigureImage(raw);
  const hasRealImage = isUsableFigureImage(sourceImage);
  const rawTitle = raw?.rawTitle || raw?.originalTitle || raw?.title || raw?.name || "";
  const canonicalName = figureCanonicalTitle(raw);
  const localizedName = localizedFigureTitle({ ...raw, rawTitle, canonicalName });
  const galleryImages = normalizeFigureGalleryImages(raw);
  const figure = {
    id: raw?.id || figureFallbackId(raw),
    figureKey: raw?.figureKey || raw?.figure_key || raw?.jan || raw?.sku || "",
    productId: raw?.productId || raw?.product_id || "",
    name: localizedName,
    title: localizedName,
    rawTitle,
    canonicalName,
    character: raw?.character || METADATA_FALLBACK,
    series: raw?.series || METADATA_FALLBACK,
    manufacturer: raw?.manufacturer || "Unknown manufacturer",
    type: raw?.type || "Figure",
    scale: raw?.scale || "Non-scale",
    version: raw?.version || "Standard",
    releaseDate: raw?.releaseDate || raw?.release_date || raw?.release || "Unknown",
    availability: raw?.availability || availabilityFromOffers(offers),
    line: raw?.line || raw?.type || "Figure",
    sku: raw?.sku || raw?.jan || "No JAN yet",
    source: raw?.source || "catalogue",
    image: premiumFigureImageFor(raw),
    rawImage: sourceImage,
    images: galleryImages,
    galleryLoaded: Array.isArray(raw?.images),
    hasRealImage,
    pending: isPendingFigure(raw),
    productUrl,
    tags: Array.isArray(raw?.tags) ? raw.tags : [],
    maturityStatus: String(raw?.maturityStatus || raw?.maturity_status || "uncertain").trim().toLowerCase(),
    maturityLevel: String(raw?.maturityLevel || raw?.maturity_level || "").trim().toLowerCase(),
    maturityVisualScore: numberOrNull(raw?.maturityVisualScore ?? raw?.maturity_visual_score),
    maturityTextScore: numberOrNull(raw?.maturityTextScore ?? raw?.maturity_text_score),
    maturityCheckedAt: raw?.maturityCheckedAt || raw?.maturity_checked_at || "",
    imageContentSha256: raw?.imageContentSha256 || raw?.image_content_sha256 || "",
    imagePixelSha256: raw?.imagePixelSha256 || raw?.image_pixel_sha256 || "",
    imageDhash64: raw?.imageDhash64 || raw?.image_dhash64 || "",
    matchNotes: Array.isArray(raw?.matchNotes) ? raw.matchNotes : [],
    history: Array.isArray(raw?.history) ? raw.history : [],
    offers
  };

  figure.searchIndex = buildSearchIndex(figure);
  figure.searchTokens = tokenize(figure.searchIndex);
  figure.categoryText = figureCategoryText(figure);
  figure.brandText = figureBrandText(figure);
  figure.isMangaProduct = isMangaProduct(figure);
  figure.isDisplayFigure = isDisplayFigure(figure);
  figure.catalogueReady = Boolean(figure && !isPendingFigure(figure) && figureHasRealImage(figure));
  figure.blockedPlaceholderRelease = hasBlockedPlaceholderRelease(figure);
  figure.releaseTimestamp = releaseTime(figure);
  figure.newArrivalTimestamp = newArrivalSortTime(figure);
  return figure;
}

function availabilityFromOffers(offers) {
  if (offers.some((offer) => offer.availability === "In stock")) return "In stock";
  if (offers.some((offer) => offer.availability === "Pre-order")) return "Pre-order";
  if (offers.some((offer) => offer.availability === "Released")) return "Released";
  if (offers.some((offer) => offer.availability === "Sold out")) return "Sold out";
  return offers[0]?.availability || "In stock";
}

function buildSearchIndex(figure) {
  const offerProviders = figure.offers.map((offer) => providerName(offer.provider)).join(" ");
  return normalizeText(
    [
      searchableFigureTitleText(figure),
      figure.character,
      figure.series,
      figure.manufacturer,
      figure.type,
      figure.scale,
      figure.version,
      figure.line,
      figure.sku,
      figure.availability,
      figure.tags.join(" "),
      offerProviders
    ].join(" ")
  );
}

function isJanQuery(value) {
  return /^\d{12,13}$/.test(String(value || "").replace(/\D/g, ""));
}

function currentJanQuery() {
  const jan = state.query.replace(/\D/g, "");
  return isJanQuery(jan) ? jan : "";
}

function activeMfcSearchFigure() {
  const jan = currentJanQuery();
  if (!jan || !activeMfcFigureId) return null;
  return figures.find((figure) => figure.id === activeMfcFigureId) || null;
}

function providerIdFromStoreName(storeName) {
  return `mfc_${normalizeText(storeName).replace(/\s+/g, "_") || "store"}`;
}

function ensureMfcProvider() {
  if (!providers.some((provider) => provider.id === "mfc")) {
    providers.push({
      id: "mfc",
      name: "MyFigureCollection",
      country: "Global",
      trust: "Figure database reference",
      url: "https://myfigurecollection.net/"
    });
  }
  return "mfc";
}

function ensureDynamicProvider(storeName, productUrl) {
  const providerId = providerIdFromStoreName(storeName);
  if (!providers.some((provider) => provider.id === providerId)) {
    let origin = "";
    try {
      origin = new URL(productUrl).origin;
    } catch (error) {
      origin = productUrl;
    }
    providers.push({
      id: providerId,
      name: storeName,
      country: "MFC",
      trust: "Direct product link from MyFigureCollection",
      url: origin
    });
  }
  return providerId;
}

function apiFigureFromMapping(mapping) {
  ensureMfcProvider();
  const jan = String(mapping.jan || "").replace(/\D/g, "");
  const today = new Date().toISOString().slice(0, 10);
  const mfcUrl = mapping.productUrl || mapping.mfc_url || mapping.url || "";
  const title = mapping.name || mapping.title || `MFC item ${jan || mapping.mfc_id || ""}`.trim();
  const image = premiumFigureImageFor(mapping);
  const storeLinks = mapping.store_links || {};
  const priceRows = Array.isArray(mapping.prices) ? mapping.prices : [];
  const mappedOffers = Array.isArray(mapping.offers) ? mapping.offers : [];
  const sourceEntries = Object.keys(storeLinks).length
    ? Object.entries(storeLinks)
    : priceRows.map((row) => [row.store || "Store", row]);
  const storeOffers = mappedOffers.length
    ? mappedOffers.map((offer) => {
        const storeName = offer.provider || offer.store || "Store";
        const productUrl = offer.productUrl || offer.url || "";
        const knownProvider = providers.find((provider) => provider.id === storeName || normalizeText(provider.name) === normalizeText(storeName));
        const provider = knownProvider?.id || ensureDynamicProvider(storeName, productUrl);
        return {
          provider,
          productUrl,
          availability: offer.availability || "Direct link",
          productPrice: numberOrNull(offer.productPrice ?? offer.product_price),
          shipping: numberOrNull(offer.shipping),
          taxes: numberOrNull(offer.taxes),
          currency: offer.currency || "EUR",
          estimatedTotal: numberOrNull(offer.estimatedTotal ?? offer.estimated_total),
          condition: offer.condition || "New",
          lastUpdated: offer.lastUpdated || today,
          confidence: offer.confidence || "MFC",
          shipsToCountry: true,
          linkType: offer.linkType || "product"
        };
      })
    : sourceEntries.map(([storeName, link]) => {
    const productUrl = typeof link === "string" ? link : link?.url || "";
    const referenceId = typeof link === "object" ? link.reference_id || "" : "";
    const productPrice = typeof link === "object" ? numberOrNull(link.product_price) : null;
    const currency = typeof link === "object" ? link.currency || "EUR" : "EUR";
    const priceText = typeof link === "object" ? link.price || "" : "";
    const provider = ensureDynamicProvider(storeName, productUrl);
    return {
      provider,
      productUrl,
      availability: "Direct link",
      productPrice,
      shipping: null,
      taxes: null,
      currency,
      estimatedTotal: null,
      condition: priceText ? `MFC visible price: ${priceText}` : "Check product page",
      lastUpdated: today,
      confidence: referenceId ? "MFC direct" : "MFC",
      shipsToCountry: true,
      linkType: "product"
    };
  });
  const offers = [
    {
      provider: "mfc",
      productUrl: mfcUrl,
      availability: "Unknown",
      productPrice: null,
      shipping: null,
      taxes: null,
      currency: "EUR",
      estimatedTotal: null,
      condition: "Unknown",
      lastUpdated: today,
      confidence: "MFC",
      shipsToCountry: true,
      linkType: "product"
    },
    ...storeOffers
  ].filter((offer) => offer.productUrl);

  return {
    id: `mfc-${jan || mapping.mfc_id || "item"}`,
    name: title,
    character: mapping.character || "Unknown",
    series: mapping.series || "Unknown",
    manufacturer: mapping.manufacturer || "Unknown",
    type: mapping.type || "Figure",
    scale: mapping.scale || "Unknown",
    version: mapping.version || "Unknown",
    releaseDate: mapping.releaseDate || "Unknown",
    availability: mapping.availability || "Unknown",
    line: mapping.line || "MyFigureCollection",
    sku: jan || mapping.mfc_id || "MFC",
    source: "mfc",
    image,
    productUrl: mfcUrl,
    tags: Array.isArray(mapping.tags) ? mapping.tags : ["MFC", "JAN", jan].filter(Boolean),
    matchNotes: Array.isArray(mapping.matchNotes) ? mapping.matchNotes : ["Imported from MyFigureCollection JAN lookup"],
    history: Array.isArray(mapping.history) ? mapping.history : [],
    offers
  };
}

function upsertApiFigure(rawFigure) {
  const figure = normalizeFigure(rawFigure);
  figures = [figure, ...figures.filter((item) => item.id !== figure.id)];
  discoveryFigures = figures.filter((item) => isDisplayFigure(item) && figureIsCatalogueReady(item));
  resetLocalizedOfferCache();
  taxonomyEntryCache = { sourceSize: 0, franchises: null, characters: null };
  return figure;
}

async function loadCatalogue() {
  const requestRunId = apiSearchRunId;
  showCatalogueLoading();

  try {
    const data = await loadCatalogueData();
    if (requestRunId !== apiSearchRunId && state.catalogStandalone && !isUnfilteredBaseFigureCatalogueState()) {
      return false;
    }
    await installCatalogueData(data);
    populateFilters();
    renderSuppliers();
    renderWishlist();
    renderCart();
    renderDatabaseStats();
    updateReadyCopy();
    resetVisibleCards();
    renderCategoryChips();
    renderHeroCharacters();
    renderHeroShowcase();
    renderPromotionsCarousel(promotionsCache);
    renderNewArrivals();
    renderPromotionRanking();
    renderProductCards();
    const shouldRestoreHashRoute = activeView === "home" || (
      window.location.hash &&
      window.location.hash !== "#home" &&
      !state.catalogStandalone &&
      !usesPagedCatalogueLayout()
    );
    if (shouldRestoreHashRoute && !restoreSelectedFigureFromHash()) {
      scrollToVisibleHashTarget();
    }
    return true;
  } catch (error) {
    if (requestRunId !== apiSearchRunId && state.catalogStandalone && !isUnfilteredBaseFigureCatalogueState()) {
      return false;
    }
    catalogueReady = false;
    showCatalogueError(error);
    return false;
  }
}

function ensureCatalogueLoadStarted() {
  if (catalogueLoadPromise) return catalogueLoadPromise;

  if (catalogueLoadTimeoutId) {
    window.clearTimeout(catalogueLoadTimeoutId);
    catalogueLoadTimeoutId = null;
  }
  if (catalogueLoadIdleId && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(catalogueLoadIdleId);
    catalogueLoadIdleId = null;
  }

  catalogueLoadPromise = loadCatalogue();
  return catalogueLoadPromise;
}

function isUnfilteredBaseFigureCatalogueState() {
  return activeView === "catalog"
    && state.figuresOnly
    && state.catalogKind === "figures"
    && !state.query.trim()
    && state.category === "trending"
    && state.type === "all"
    && state.provider === "all"
    && activeFigureQuickFilters().length === 0;
}

function scheduleCatalogueLoad() {
  if (catalogueLoadPromise || catalogueLoadTimeoutId || catalogueLoadIdleId) return;

  const start = () => {
    catalogueLoadTimeoutId = null;
    catalogueLoadIdleId = null;
    ensureCatalogueLoadStarted();
  };

  if (window.location.hash && window.location.hash !== "#home") {
    start();
    return;
  }

  // Warm the first catalogue page immediately so opening Figures does not
  // start a second request after the user has already clicked the navigation.
  catalogueLoadTimeoutId = window.setTimeout(start, 80);
}

async function loadCatalogueData(options = {}) {
  const forceReload = options?.forceReload === true;
  if (window.location.protocol !== "file:") {
    try {
      const catalogueUrl = catalogueApiUrl({ page: 1, limit: CATALOGUE_PAGE_LIMIT, forceReload });
      const response = await fetch(catalogueUrl, { cache: forceReload ? "no-store" : "default" });
      if (!response.ok) {
        throw new Error(`Could not load ${CATALOG_URL} (${response.status})`);
      }

      const data = await response.json();
      const figureCount = Array.isArray(data) ? data.length : data?.figures?.length ?? 0;
      console.log("📦 Total figures received from API:", figureCount);
      return data;
    } catch (error) {
      const fallback = await loadCatalogueFallback();
      if (fallback) return fallback;
      throw error;
    }
  }

  const fallback = await loadCatalogueFallback();
  if (fallback) return fallback;
  throw new Error(`Could not load ${CATALOG_URL} or ${CATALOG_FALLBACK_URL}`);
}

async function loadExchangeRates() {
  try {
    const symbols = Object.keys(CURRENCY_OPTIONS).join(",");
    const response = await fetch(apiEndpoint("/api/rates") + "?symbols=" + encodeURIComponent(symbols), { cache: "no-store" });
    if (!response.ok) throw new Error(`Rate request failed (${response.status})`);
    const data = await response.json();
    if (!data || !data.rates || typeof data.rates !== "object") throw new Error("Rate response was empty");
    if (data.stale === true) throw new Error("The ECB rate snapshot is older than 96 hours");

    exchangeRates = {
      ...Object.fromEntries(
        Object.entries(data.rates)
          .map(([currency, rate]) => [String(currency).toUpperCase(), Number(rate)])
          .filter(([, rate]) => Number.isFinite(rate) && rate > 0)
      ),
      EUR: 1
    };
    exchangeRateMeta = {
      source: data.source || "ECB",
      date: data.date || "",
      snapshotId: data.snapshotId || "",
      stale: false
    };
    resetLocalizedOfferCache();
    updateProfileSummary();
    if (catalogueReady) {
      populateFilters();
      renderHeroShowcase();
      renderPromotionRanking();
      renderPromotionsCarousel(promotionsCache);
      renderNewArrivals();
      renderProductCards();
      if (activeView === "sales") renderSalesSection();
      renderGameLobbyStatus();
      if (activeView === "game" && gameState.target && !gameState.completed) {
        gameState.actualPrice = roundGamePrice(gameFigurePrice(gameState.target, gameState.currency) || gameState.actualPrice || 0);
      }
      if (selectedFigureId) renderProductDetail(selectedFigureId, false);
    }
    console.info("NekoPrice exchange rates loaded", exchangeRateMeta, exchangeRates);
    return exchangeRates;
  } catch (error) {
    exchangeRates = { ...EMPTY_EXCHANGE_RATES };
    exchangeRateMeta = { source: "unavailable", date: "", snapshotId: "", stale: true };
    console.info("NekoPrice will show original store currencies until ECB rates are current", error);
    resetLocalizedOfferCache();
    updateProfileSummary();
    return exchangeRates;
  }
}

function loadCatalogueFallback() {
  if (window.NEKOPRICE_CATALOG) {
    return Promise.resolve(window.NEKOPRICE_CATALOG);
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = catalogueRequestUrl(CATALOG_FALLBACK_URL);
    script.onload = () => resolve(window.NEKOPRICE_CATALOG || null);
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
}

function yieldToBrowser() {
  return new Promise((resolve) => {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(resolve, { timeout: 120 });
      return;
    }
    window.setTimeout(resolve, 0);
  });
}

async function normalizeFiguresInChunks(rawFigures) {
  const normalized = [];
  const chunkSize = 650;

  for (let index = 0; index < rawFigures.length; index += chunkSize) {
    const chunk = rawFigures.slice(index, index + chunkSize);
    chunk.forEach((rawFigure) => {
      const figure = normalizeFigure(rawFigure);
      if (figure.id) normalized.push(figure);
    });

    if (els.resultMeta && index + chunkSize < rawFigures.length) {
      els.resultMeta.textContent = `Preparing catalogue ${formatDatabaseNumber(Math.min(index + chunkSize, rawFigures.length))}/${formatDatabaseNumber(rawFigures.length)}...`;
    }
    await yieldToBrowser();
  }

  return normalized;
}

async function installCatalogueData(data, { append = false } = {}) {
  const rawFigures = Array.isArray(data)
    ? data
    : Array.isArray(data?.figures)
      ? data.figures
      : data?.figures && typeof data.figures === "object"
        ? Object.values(data.figures)
        : data && typeof data === "object" && Object.values(data).every((value) => value && typeof value === "object")
          ? Object.values(data)
          : [];

  if (data?.paginated) {
    const totalFigures = Number(data.total);
    const previousTotal = append ? Number(cataloguePagination.total) || 0 : 0;
    cataloguePagination = {
      enabled: true,
      page: Number(data.page) || 1,
      limit: Number(data.limit) || CATALOGUE_PAGE_LIMIT,
      total: Number.isFinite(totalFigures) && totalFigures > 0 ? totalFigures : previousTotal,
      hasMore: Boolean(data.has_more),
      nextPage: Number(data.next_page) || (Boolean(data.has_more) ? (Number(data.page) || 1) + 1 : null),
      loading: false,
      query: data.query || "",
      kind: data.kind || ""
    };
  } else if (!append) {
    cataloguePagination = {
      enabled: false,
      page: 0,
      limit: CATALOGUE_PAGE_LIMIT,
      total: rawFigures.length,
      hasMore: false,
      nextPage: null,
      loading: false,
      query: "",
      kind: ""
    };
  }

  catalogue = {
    resultLimit: Number(data?.resultLimit) || INITIAL_CARD_LIMIT,
    providers: append ? mergeProviders([...(catalogue.providers || []), ...(Array.isArray(data?.providers) ? data.providers : [])]) : Array.isArray(data?.providers) ? data.providers : [],
    figures: append ? [...(catalogue.figures || []), ...rawFigures] : rawFigures
  };
  providers = mergeProviders(catalogue.providers);
  const cataloguePage = data?.paginated ? Math.max(1, Number(data.page) || 1) : 0;
  const normalizedFigures = await normalizeFiguresInChunks(append ? rawFigures : catalogue.figures);
  if (cataloguePage) {
    normalizedFigures.forEach((figure) => {
      figure.cataloguePage = cataloguePage;
    });
  }
  figures = await dedupeNormalizedFiguresInChunks(append ? [...figures, ...normalizedFigures] : normalizedFigures);
  discoveryFigures = figures.filter((figure) => isDisplayFigure(figure) && figureIsCatalogueReady(figure));
  resetLocalizedOfferCache();
  trendingFigureIds = null;
  taxonomyEntryCache = { sourceSize: 0, franchises: null, characters: null };
  catalogueReady = true;
  renderGameLobbyStatus();
  updateSidebarMultiStoreCount();
  if (activeView === "taxonomy") renderTaxonomyBrowser();
}

async function loadNextCataloguePage(options = {}) {
  if (!cataloguePagination.enabled || !cataloguePagination.hasMore || cataloguePagination.loading) return false;
  const renderAfterLoad = options?.render !== false;

  const nextPage = cataloguePagination.nextPage || cataloguePagination.page + 1;
  cataloguePagination.loading = true;
  if (els.showMoreButton && renderAfterLoad) {
    els.showMoreButton.disabled = true;
    els.showMoreButton.textContent = "Loading more...";
  }

  try {
    const response = await fetch(catalogueApiUrl({
      page: nextPage,
      limit: cataloguePagination.limit || CATALOGUE_PAGE_LIMIT,
      query: cataloguePagination.query || "",
      kind: cataloguePagination.kind || (isMangaCatalogue() ? "manga" : ""),
      forceReload: false
    }), { cache: "default" });
    if (!response.ok) throw new Error(`Could not load page ${nextPage} (${response.status})`);
    const data = await response.json();
    await installCatalogueData(data, { append: true });
    resetVisibleCards();
    visibleCardLimit = Math.max(visibleCardLimit, figures.length);
    if (renderAfterLoad) {
      renderNewArrivals();
      renderProductCards();
    }
    return true;
  } catch (error) {
    console.warn("Could not load next catalogue page", error);
    if (els.resultMeta) els.resultMeta.textContent = error.message || "Could not load more figures.";
    cataloguePagination.loading = false;
    return false;
  } finally {
    if (els.showMoreButton && renderAfterLoad) {
      els.showMoreButton.disabled = false;
    }
  }
}

async function autoLoadFigureCataloguePages(runId, query) {
  const trimmedQuery = String(query || "").trim();
  const shouldAutoload = Boolean(trimmedQuery) || (state.figuresOnly && state.category !== "trending");
  if (!shouldAutoload || window.location.protocol === "file:") return;

  const autoLoadId = ++figureCatalogueAutoLoadId;
  let loadedPages = 1;

  while (
    autoLoadId === figureCatalogueAutoLoadId
    && runId === apiSearchRunId
    && state.figuresOnly
    && state.query.trim() === trimmedQuery
    && cataloguePagination.enabled
    && cataloguePagination.hasMore
    && loadedPages < FIGURE_CATALOGUE_AUTOLOAD_MAX_PAGES
  ) {
    if (els.resultMeta) {
      els.resultMeta.textContent = "Loading figures...";
    }
    const loaded = await loadNextCataloguePage({ render: false });
    if (!loaded) break;
    loadedPages += 1;
    resetVisibleCards({ resetFigurePage: false });
    renderProductCards();
    await yieldToBrowser();
  }

  if (
    autoLoadId === figureCatalogueAutoLoadId
    && runId === apiSearchRunId
    && state.figuresOnly
    && state.query.trim() === trimmedQuery
  ) {
    renderProductCards();
  }
}

function formatDatabaseNumber(value) {
  return new Intl.NumberFormat("pt-PT").format(Number(value) || 0);
}

function rawFigureIsPending(figure) {
  const title = String(figure?.title || figure?.name || "").trim().toLowerCase();
  const image = String(figure?.image || "").trim();
  return !title || title.includes("aguardar processamento") || !image;
}

function databaseStatusFromPayload(payload, sourcePath = "frontend catalogue", modifiedAt = "") {
  const rawFigures = Array.isArray(payload?.figures) ? payload.figures : Array.isArray(payload) ? payload : [];
  const totalFigures = rawFigures.length || figures.length;
  const pendingFigures = rawFigures.filter(rawFigureIsPending).length;
  const processedFigures = Math.max(0, totalFigures - pendingFigures);
  const offerCount = rawFigures.reduce(
    (total, figure) => total + (Array.isArray(figure?.offers) ? figure.offers.length : 0),
    0
  );
  const names = rawFigures
    .map((figure, index) => ({
      index: index + 1,
      name: String(figure?.title || figure?.name || "").trim() || "Pending enrichment",
      jan: figure?.jan || figure?.sku || "",
      pending: rawFigureIsPending(figure)
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "pt", { sensitivity: "base" }));

  return {
    success: true,
    generatedAt: new Date().toISOString(),
    modifiedAt,
    sourcePath,
    totalFigures,
    processedFigures,
    pendingFigures,
    offerCount,
    verifiedOfferCount: offerCount,
    verifiedFigureCount: rawFigures.filter((figure) => Array.isArray(figure?.offers) && figure.offers.length).length,
    averageStoresPerVerifiedFigure: 0,
    verifiedCoverage: {},
    expiredOfferCount: 0,
    quarantinedOfferCount: 0,
    terminalQuarantineCount: 0,
    discoveryCandidateCount: 0,
    recoveryQueueCount: 0,
    recovered24h: 0,
    zeroToOne24h: 0,
    oneToTwo24h: 0,
    twoToThree24h: 0,
    eligibleTwoToThreeFigures: 0,
    eligibleTwoToThreePairs: 0,
    twoToThreeEtaDays: 0,
    recoveryYieldByStore: {},
    recoverySuccessRate24h: 0,
    recoveryBlocked24h: 0,
    sourceCatalogVariantCount: 0,
    names
  };
}

function databaseStatusFromCatalogue() {
  return databaseStatusFromPayload(catalogue, "frontend catalogue", "");
}

function formatDatabaseTimestamp(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function applyDatabaseStatus(status) {
  if (!els.databaseFigureCount || !status) return;
  latestDatabaseStatus = status;

  els.databaseFigureCount.textContent = formatDatabaseNumber(status.totalFigures);
  if (els.floatingDatabaseCount) {
    els.floatingDatabaseCount.textContent = formatDatabaseNumber(status.totalFigures);
  }
  els.databaseProcessedCount.textContent = formatDatabaseNumber(status.processedFigures);
  els.databasePendingCount.textContent = formatDatabaseNumber(status.pendingFigures);
  els.databaseOfferCount.textContent = formatDatabaseNumber(status.verifiedOfferCount ?? status.offerCount);
  const coverage = status.verifiedCoverage && typeof status.verifiedCoverage === "object"
    ? status.verifiedCoverage
    : {};
  if (els.databaseVerifiedFigureCount) {
    els.databaseVerifiedFigureCount.textContent = formatDatabaseNumber(status.verifiedFigureCount);
  }
  if (els.databaseAverageStores) {
    els.databaseAverageStores.textContent = Number(status.averageStoresPerVerifiedFigure || 0).toLocaleString("en-GB", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }
  if (els.databaseCoverageZero) els.databaseCoverageZero.textContent = formatDatabaseNumber(coverage["0"]);
  if (els.databaseCoverageOne) els.databaseCoverageOne.textContent = formatDatabaseNumber(coverage["1"]);
  if (els.databaseCoverageTwo) els.databaseCoverageTwo.textContent = formatDatabaseNumber(coverage["2"]);
  if (els.databaseCoverageThreePlus) els.databaseCoverageThreePlus.textContent = formatDatabaseNumber(coverage["3+"]);
  if (els.databaseExpiredOfferCount) {
    els.databaseExpiredOfferCount.textContent = formatDatabaseNumber(status.expiredOfferCount);
  }
  if (els.databaseQuarantineCount) {
    els.databaseQuarantineCount.textContent = formatDatabaseNumber(status.quarantinedOfferCount);
  }
  if (els.databaseTerminalQuarantineCount) {
    els.databaseTerminalQuarantineCount.textContent = formatDatabaseNumber(status.terminalQuarantineCount);
  }
  if (els.databaseDiscoveryCandidateCount) {
    els.databaseDiscoveryCandidateCount.textContent = formatDatabaseNumber(status.discoveryCandidateCount);
  }
  if (els.databaseRecoveryQueueCount) {
    els.databaseRecoveryQueueCount.textContent = formatDatabaseNumber(status.recoveryQueueCount);
  }
  if (els.databaseRecovered24h) {
    els.databaseRecovered24h.textContent = formatDatabaseNumber(status.recovered24h);
  }
  if (els.databaseCoverageGains24h) {
    els.databaseCoverageGains24h.textContent = `${formatDatabaseNumber(status.zeroToOne24h)} / ${formatDatabaseNumber(status.oneToTwo24h)} / ${formatDatabaseNumber(status.twoToThree24h)}`;
  }
  if (els.databaseEligibleTwoToThree) {
    els.databaseEligibleTwoToThree.textContent = formatDatabaseNumber(status.eligibleTwoToThreeFigures);
  }
  if (els.databaseEligibleTwoToThreePairs) {
    els.databaseEligibleTwoToThreePairs.textContent = formatDatabaseNumber(status.eligibleTwoToThreePairs);
  }
  if (els.databaseTwoToThreeEta) {
    const etaDays = Number(status.twoToThreeEtaDays || 0);
    els.databaseTwoToThreeEta.textContent = etaDays > 0 ? `${etaDays.toLocaleString("en-GB", { maximumFractionDigits: 1 })}d` : "—";
  }
  if (els.databaseTopRecoveryStore) {
    const stores = status.recoveryYieldByStore && typeof status.recoveryYieldByStore === "object"
      ? Object.entries(status.recoveryYieldByStore)
      : [];
    stores.sort(([, left], [, right]) => Number(right?.twoToThree || 0) - Number(left?.twoToThree || 0));
    const top = stores[0];
    els.databaseTopRecoveryStore.textContent = top
      ? `${top[0]} · ${formatDatabaseNumber(top[1]?.twoToThree || 0)} promotions`
      : "No 2→3 promotions yet";
  }
  if (els.databaseRecoverySuccessRate) {
    const successRate = Number(status.recoverySuccessRate24h || 0);
    els.databaseRecoverySuccessRate.textContent = `${successRate.toFixed(successRate < 10 ? 1 : 0)}%`;
  }
  if (els.databaseRecoveryBlocked24h) {
    els.databaseRecoveryBlocked24h.textContent = formatDatabaseNumber(status.recoveryBlocked24h);
  }
  if (els.databaseSourceVariantCount) {
    els.databaseSourceVariantCount.textContent = formatDatabaseNumber(status.sourceCatalogVariantCount);
  }
  if (els.databaseExchangeRateAge) {
    const rateAge = Number(status.exchangeRateAgeHours);
    els.databaseExchangeRateAge.textContent = Number.isFinite(rateAge) ? `${rateAge.toFixed(1)}h` : "—";
  }
  if (els.databaseObservationMismatchCount) {
    els.databaseObservationMismatchCount.textContent = formatDatabaseNumber(status.observationOfferMismatchCount);
  }
  if (els.databaseUnknownPackageCount) {
    els.databaseUnknownPackageCount.textContent = formatDatabaseNumber(status.unknownPackageCount);
  }
  if (els.databaseOutlierOfferCount) {
    els.databaseOutlierOfferCount.textContent = formatDatabaseNumber(status.outlierOfferCount);
  }

  if (els.databaseStatus) {
    const apiRead = formatDatabaseTimestamp(status.generatedAt);
    const dataRead = formatDatabaseTimestamp(status.modifiedAt);
    const sourceLabel = status.sourceKind === "sqlite" ? "SQLite" : "JSON";
    const source = status.sourcePath ? ` · source ${status.sourcePath}` : "";
    els.databaseStatus.textContent = `Auto-refresh active · API ${apiRead || "now"}${dataRead ? ` · ${sourceLabel} ${dataRead}` : ""}${source}`;
  }

  if (els.validationQueue) {
    const pendingItems = (status.names || []).filter((figure) => figure.pending).slice(0, 6);
    els.validationQueue.innerHTML = pendingItems.length
      ? pendingItems
          .map((figure) => {
            const jan = figure?.jan || figure?.sku || "No JAN";
            const title = compactFigureNameForCard(figure?.title || figure?.name || "Pending enrichment", 42);
            return `
              <article class="queue-card">
                <strong>${escapeHtml(jan)}</strong>
                <p>${escapeHtml(title)}</p>
                <small>Waiting for update_catalog.py enrichment</small>
              </article>
            `;
          })
          .join("")
      : `
        <article class="queue-card">
          <strong>Queue clear</strong>
          <p>No pending figures in the loaded catalogue.</p>
          <small>The visible pipeline queue is clean.</small>
        </article>
      `;
  }

  if (els.databaseNamesPanel && !els.databaseNamesPanel.hidden) {
    renderDatabaseNameList();
  }
}

function renderDatabaseStats() {
  applyDatabaseStatus(databaseStatusFromCatalogue());
}

function databaseFigureNameRows() {
  if (latestDatabaseStatus?.names?.length) {
    return [...latestDatabaseStatus.names]
      .map((row) => ({ ...row, name: compactFigureNameForCard(row?.name || row?.title || "Pending", 46) }))
      .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
  }

  const rawFigures = Array.isArray(catalogue.figures) ? catalogue.figures : [];
  return rawFigures
    .map((figure, index) => {
      const name = compactFigureNameForCard(figure, 46);
      const jan = figure?.jan || figure?.sku || "";
      return {
        index: index + 1,
        name,
        jan,
        pending: rawFigureIsPending(figure)
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}

function renderDatabaseNameList() {
  if (!els.databaseNameList) return;
  const rows = databaseFigureNameRows();

  els.databaseNameList.innerHTML = rows.length
    ? rows
        .map(
          (row) => `
            <li>
              <code>${String(row.index).padStart(4, "0")}</code>
              <span>${escapeHtml(row.name)}</span>
              ${row.pending ? '<em>pending</em>' : ""}
            </li>
          `
        )
        .join("")
    : `<li><code>0000</code><span>No figures loaded.</span></li>`;
}

function setDatabaseNamesVisible(isVisible) {
  if (!els.databaseNamesPanel || !els.databaseNamesButton) return;
  els.databaseNamesPanel.hidden = !isVisible;
  els.databaseNamesButton.setAttribute("aria-expanded", String(isVisible));
  els.databaseNamesButton.textContent = isVisible ? "hide figures --names" : "ls figures --names";
  if (isVisible) renderDatabaseNameList();
}

async function loadDatabaseStatus() {
  try {
    const response = await fetch(catalogueRequestUrl(DATABASE_STATUS_URL), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Database status failed (${response.status})`);
    }

    const status = await response.json();
    if (!status?.success) {
      throw new Error(status?.error || "Database status response was invalid");
    }
    return status;
  } catch (apiError) {
    const response = await fetch(catalogueRequestUrl("./data/figures.json"), { cache: "no-store" });
    if (!response.ok) {
      throw apiError;
    }
    const payload = await response.json();
    const lastModified = response.headers.get("last-modified");
    const modifiedAt = lastModified ? new Date(lastModified).toISOString() : "";
    return databaseStatusFromPayload(payload, "data/figures.json", modifiedAt);
  }
}

function showDatabaseSection(shouldScroll = true) {
  if (!els.databaseSection) return;
  activeView = "database";
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  setDiscoverySectionsVisible(false);
  if (els.resultsSection) els.resultsSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  els.databaseSection.hidden = false;
  renderDatabaseStats();
  startDatabaseAutoRefresh();
  if (shouldScroll) {
    els.databaseSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function hideDatabaseSection() {
  if (!els.databaseSection) return;
  els.databaseSection.hidden = true;
  stopDatabaseAutoRefresh();
  setDatabaseNamesVisible(false);
}

function hideGameSection() {
  if (els.gameSection) els.gameSection.hidden = true;
}

function hideNekoAdvisorSection() {
  if (els.nekoAdvisorSection) els.nekoAdvisorSection.hidden = true;
  els.nekoAdvisorSection?.classList.remove("is-results-mode", "is-scanning");
  document.body.classList.remove("neko-advisor-open");
  if (nekoAdvisorTypeTimer) {
    window.clearInterval(nekoAdvisorTypeTimer);
    nekoAdvisorTypeTimer = null;
  }
  els.nekoAdvisorDialogue?.classList.remove("is-typing");
}

function updateNekoAdvisorStage(stage = "kind") {
  if (!els.nekoAdvisorHud) return;
  els.nekoAdvisorHud.querySelectorAll("[data-neko-stage]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.nekoStage === stage);
    item.classList.toggle("is-complete", ["kind", "budget", "filters", "scan", "results"].indexOf(item.dataset.nekoStage) < ["kind", "budget", "filters", "scan", "results"].indexOf(stage));
  });
}

function startDatabaseAutoRefresh() {
  if (databaseRefreshTimer) return;
  refreshDatabaseSection({ silent: true });
  databaseRefreshTimer = window.setInterval(() => {
    if (document.hidden || els.databaseSection?.hidden) return;
    refreshDatabaseSection({ silent: true });
  }, DATABASE_AUTO_REFRESH_MS);
}

function stopDatabaseAutoRefresh() {
  if (!databaseRefreshTimer) return;
  window.clearInterval(databaseRefreshTimer);
  databaseRefreshTimer = null;
}

async function refreshDatabaseSection(options = {}) {
  if (databaseRefreshInFlight) return;
  const silent = options?.silent === true;
  const forceCatalogueReload = options?.forceCatalogueReload === true;
  const previousLabel = els.databaseRefreshButton?.textContent || "./refresh";
  databaseRefreshInFlight = true;
  if (!silent && els.databaseRefreshButton) {
    els.databaseRefreshButton.disabled = true;
    els.databaseRefreshButton.textContent = "./refresh --running";
  }

  try {
    const previousModifiedAt = latestDatabaseStatus?.modifiedAt || "";
    const status = await loadDatabaseStatus();
    const catalogueChanged = forceCatalogueReload || (status.modifiedAt && status.modifiedAt !== previousModifiedAt);
    applyDatabaseStatus(status);

    if (catalogueChanged) {
      const data = await loadCatalogueData({ forceReload: true });
      await installCatalogueData(data);
      populateFilters();
      renderSuppliers();
      renderWishlist();
      renderCategoryChips();
      renderProductCards();
      applyDatabaseStatus(status);
    }
  } catch (error) {
    if (els.databaseStatus) {
      els.databaseStatus.textContent = `Erro ao atualizar leitura: ${error.message || error}`;
    }
  } finally {
    databaseRefreshInFlight = false;
    if (!silent && els.databaseRefreshButton) {
      els.databaseRefreshButton.disabled = false;
      els.databaseRefreshButton.textContent = previousLabel;
    }
  }
}

function showCompactCataloguePending(label = "Loading catalogue...") {
  if (!els.productGrid) return;
  const hasCards = Boolean(els.productGrid.querySelector(".product-card--marketplace"));
  els.productGrid.classList.add("is-catalogue-loading");
  els.productGrid.setAttribute("aria-busy", "true");
  if (!hasCards) els.productGrid.replaceChildren();
  if (!els.productGrid.querySelector(".catalogue-load-status")) {
    els.productGrid.insertAdjacentHTML("afterbegin", `
      <div class="catalogue-load-status" role="status">
        <span class="figure-filter-refresh-spinner" aria-hidden="true"></span>
        <span>${escapeHtml(localizedUiText(label))}</span>
      </div>
    `);
  }
}

function showCatalogueLoading() {
  if (activeView !== "catalog") {
    els.resultsSection.hidden = true;
    return;
  }

  setResultsDisplayMode(usesPagedCatalogueLayout() ? "figures" : "");
  setDiscoverySectionsVisible(!usesPagedCatalogueLayout());
  els.resultsSection.hidden = false;
  els.figureSection.hidden = true;
  if (els.resultMeta) els.resultMeta.textContent = "Loading catalogue...";
  if (els.resultQuery) {
    els.resultQuery.hidden = true;
    els.resultQuery.textContent = "";
  }
  if (els.showMoreButton) els.showMoreButton.hidden = true;
  if (els.figurePagination) els.figurePagination.hidden = true;
  showCompactCataloguePending("Loading catalogue...");
}

function updateReadyCopy() {
  if (els.resultMeta) els.resultMeta.textContent = `Prices set for ${currentCountryLabel()}.`;
  if (els.resultQuery) els.resultQuery.hidden = !hasSearched;
}

function showCatalogueError(error) {
  if (activeView !== "catalog") {
    els.resultsSection.hidden = true;
    return;
  }

  setResultsDisplayMode(usesPagedCatalogueLayout() ? "figures" : "");
  setDiscoverySectionsVisible(!usesPagedCatalogueLayout());
  els.resultsSection.hidden = false;
  els.figureSection.hidden = true;
  if (els.resultMeta) els.resultMeta.textContent = "Catalogue could not be loaded.";
  if (els.resultQuery) {
    els.resultQuery.hidden = false;
    els.resultQuery.textContent = "Open this page through GitHub Pages or a local web server so the JSON file can load.";
  }
  if (els.showMoreButton) els.showMoreButton.hidden = true;
  if (els.figurePagination) els.figurePagination.hidden = true;
  els.productGrid?.classList.remove("is-catalogue-loading", "is-filter-refreshing");
  els.productGrid?.setAttribute("aria-busy", "false");
  els.productGrid.innerHTML = `
    <article class="product-card empty-card empty-state" role="status">
      <div class="product-thumb"><div class="figure-placeholder" aria-hidden="true"></div></div>
      <div>
        <h3>Catalogue loading failed</h3>
        <p class="muted">${escapeHtml(error.message)}</p>
        <p class="muted">The last catalogue was kept safe. Please retry in a moment.</p>
      </div>
    </article>
  `;
}

function scrollToVisibleHashTarget() {
  const targetId = window.location.hash.replace("#", "");
  if (!targetId) return;
  if (targetId === "home") {
    showHomeView(false);
    return;
  }
  if (targetId === "results") {
    activeView = "catalog";
    hideDatabaseSection();
    hideGameSection();
    hideSalesSection();
    hideTaxonomySection();
    hideCommunitySection();
    setDiscoverySectionsVisible(true);
    if (els.figureSection) els.figureSection.hidden = true;
    if (els.resultsSection) els.resultsSection.hidden = false;
    renderProductCards();
  }
  if (targetId === "data" && els.databaseSection) {
    showDatabaseSection(false);
  }
  if (targetId === "community" && els.communitySection) {
    showCommunitySection(false);
  }
  if (targetId === "sales" && els.salesSection) {
    showSalesSection(false);
    return;
  }
  if (targetId === "game" && els.gameSection) {
    showGameSection(false);
  }
  if (targetId === "neko-advisor" && els.nekoAdvisorSection) {
    showNekoAdvisorSection(true);
    return;
  }
  if (targetId === "franchises" || targetId === "characters") {
    showTaxonomyBrowser(targetId, false);
    return;
  }
  const target = document.getElementById(targetId);
  if (!target || target.hidden) return;

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "auto", block: "start" });
  });
}

function selectedFigureHash(figureId) {
  return `#figure-${encodeURIComponent(figureId)}`;
}

function figureIdFromHash() {
  const prefix = "#figure-";
  if (!window.location.hash.startsWith(prefix)) return "";

  try {
    return decodeURIComponent(window.location.hash.slice(prefix.length));
  } catch (error) {
    return "";
  }
}

function updateSelectedFigureHash(figureId, mode = "push") {
  if (!figureId) return;
  const hash = selectedFigureHash(figureId);
  if (window.location.hash === hash) return;

  const url = `${window.location.pathname}${window.location.search}${hash}`;
  if (mode === "replace") {
    window.history.replaceState(null, "", url);
  } else {
    window.history.pushState(null, "", url);
  }
}

function clearSelectedFigureHash() {
  if (!window.location.hash.startsWith("#figure-")) return;
  const url = `${window.location.pathname}${window.location.search}#results`;
  window.history.replaceState(null, "", url);
}

function setDiscoverySectionsVisible(isVisible) {
  [els.promotionsSection, els.homeSection, els.newArrivalsSection, els.trendingNowSection, els.categorySection].forEach((section) => {
    if (!section) return;
    section.hidden = !isVisible;
    if (isVisible) {
      section.style.removeProperty("display");
    } else {
      section.style.setProperty("display", "none", "important");
    }
  });
}

function hideSalesSection() {
  if (els.salesSection) els.salesSection.hidden = true;
  document.body.classList.remove("sales-open");
}

function hideTaxonomySection() {
  if (els.taxonomySection) els.taxonomySection.hidden = true;
  document.body.classList.remove("taxonomy-open");
}

function hideCommunitySection() {
  if (els.communitySection) els.communitySection.hidden = true;
  document.body.classList.remove("community-open");
}

async function hydratePopularSeriesCataloguePages(runId, query, seriesId) {
  const hydrationId = ++seriesCatalogueHydrationId;
  let loadedPages = 1;
  await yieldToBrowser();

  while (
    hydrationId === seriesCatalogueHydrationId
    && runId === apiSearchRunId
    && state.figuresOnly
    && activePopularSeriesFilter()?.id === seriesId
    && state.query.trim() === String(query || "").trim()
    && cataloguePagination.enabled
    && cataloguePagination.hasMore
    && loadedPages < SERIES_CHARACTER_DISCOVERY_PAGES
  ) {
    const loaded = await loadNextCataloguePage({ render: false });
    if (!loaded) break;
    loadedPages += 1;
    resetVisibleCards({ resetFigurePage: false });
    renderProductCards();
    await yieldToBrowser();
  }
}

function catalogueSearchIsPending() {
  const pending = catalogueSearchPending;
  return Boolean(
    pending
    && pending.runId === apiSearchRunId
    && pending.query === state.query.trim()
    && pending.kind === (state.catalogKind || "all")
  );
}

function beginCatalogueSearch(query, runId, kind = state.catalogKind || "all") {
  catalogueSearchPending = {
    runId,
    query: String(query || "").trim(),
    kind: kind || "all"
  };
  cataloguePagination.loading = true;
}

function finishCatalogueSearch(query, runId, kind = state.catalogKind || "all") {
  const pending = catalogueSearchPending;
  if (
    !pending
    || pending.runId !== runId
    || pending.query !== String(query || "").trim()
    || pending.kind !== (kind || "all")
  ) {
    return false;
  }
  catalogueSearchPending = null;
  return true;
}

function showCatalogueSearchPending() {
  els.productGrid?.classList.remove("is-filter-refreshing");
  if (els.activeFilterBar) els.activeFilterBar.hidden = true;
  if (els.comparisonGuide) els.comparisonGuide.hidden = true;
  if (els.seriesFilterSection) els.seriesFilterSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.resultQuery) {
    els.resultQuery.hidden = false;
    els.resultQuery.textContent = state.query.trim()
      ? `Searching for "${state.query.trim()}"...`
      : "Loading catalogue...";
  }
  if (els.resultMeta) {
    els.resultMeta.textContent = state.query.trim() ? "Searching catalogue..." : "Loading catalogue...";
  }
  if (els.showMoreButton) els.showMoreButton.hidden = true;
  if (els.figurePagination) {
    els.figurePagination.hidden = true;
    els.figurePagination.innerHTML = "";
  }
  showCompactCataloguePending(state.query.trim() ? "Searching catalogue..." : "Loading catalogue...");
}

function forceHideResultsSection() {
  if (!els.resultsSection) return;
  els.resultsSection.hidden = true;
  els.resultsSection.removeAttribute("data-mode");
  els.resultsSection.setAttribute("aria-hidden", "true");
  els.resultsSection.style.setProperty("display", "none", "important");
  els.resultsSection.style.setProperty("visibility", "hidden", "important");
  els.resultsSection.style.setProperty("pointer-events", "none", "important");
  document.body.classList.remove("figure-catalog-open");
}

function releaseResultsSection() {
  if (!els.resultsSection) return;
  els.resultsSection.removeAttribute("aria-hidden");
  els.resultsSection.style.removeProperty("display");
  els.resultsSection.style.removeProperty("visibility");
  els.resultsSection.style.removeProperty("pointer-events");
}

function setResultsDisplayMode(mode = "") {
  if (!els.resultsSection) return;
  if (activeView !== "detail") document.body.classList.remove("product-detail-open");
  document.body.classList.toggle("series-catalog-open", Boolean(state.seriesFilter));
  if (mode) {
    releaseResultsSection();
    els.resultsSection.dataset.mode = mode;
    document.body.classList.toggle("figure-catalog-open", mode === "figures");
  } else {
    els.resultsSection.removeAttribute("data-mode");
    document.body.classList.remove("figure-catalog-open");
    if (activeView !== "detail") releaseResultsSection();
  }
}

function syncFigureFilterControls() {
  if (els.manufacturerFilter) els.manufacturerFilter.value = state.manufacturer;
  if (els.typeFilter) els.typeFilter.value = state.type;
  if (els.statusFilter) els.statusFilter.value = state.status;
  if (els.providerFilter) els.providerFilter.value = state.provider;
  if (els.sortFilter) els.sortFilter.value = state.sort;
  if (els.gridSortSelect) els.gridSortSelect.value = state.gridSort;
  if (els.gridSearchInput) els.gridSearchInput.value = state.gridQuery;
  const priceRange = normalizeDualPriceRangeValues(state.minPrice, state.maxPrice, FIGURE_TAB_PRICE_MAX_EUR);
  state.minPrice = priceRange.min;
  state.maxPrice = priceRange.max;
  syncDualPriceRangeControl(
    els.figurePriceRangeControl,
    els.priceRangeMin,
    els.priceRange,
    state.minPrice,
    state.maxPrice,
    FIGURE_TAB_PRICE_MAX_EUR
  );
  if (els.priceRangeValue) els.priceRangeValue.textContent = displayPriceRangeLabel();
  syncFigureQuickFilterControls();
  syncFigurePriceSortControls();
  if (els.confirmedOnly) els.confirmedOnly.checked = state.confirmedOnly;
  if (els.shipsToPortugal) els.shipsToPortugal.checked = state.shipsToPortugal;
  renderMarketplaceLensBar();
}

function resetFigureTabFilters() {
  state.manufacturer = "all";
  state.type = "all";
  state.status = "all";
  state.provider = "all";
  state.sort = "catalogue";
  state.gridSort = "catalogue";
  state.gridQuery = "";
  state.minPrice = 0;
  state.maxPrice = FIGURE_TAB_PRICE_MAX_EUR;
  state.quickFilters = [];
  state.seriesFilter = null;
  state.seriesCharacter = "";
  state.confirmedOnly = false;
  state.shipsToPortugal = false;
  state.marketplaceLens = "all";
  state.strictCategory = false;
  syncFigureFilterControls();
}

function resetPrimarySearchFilters() {
  state.category = "trending";
  state.brandFilter = "";
  state.brandLabel = "";
  state.seriesFilter = null;
  state.seriesCharacter = "";
  resetFigureTabFilters();
}

function showHomeView(shouldScroll = true) {
  if (els.productImageLightbox?.open) closeProductGalleryLightbox();
  activeView = "home";
  document.body.classList.remove("product-detail-open");
  state.multiStoreOnly = false;
  state.catalogStandalone = false;
  state.figuresOnly = false;
  state.catalogKind = "all";
  state.figureCatalogLabel = "";
  state.strictCategory = false;
  state.seriesFilter = null;
  state.seriesCharacter = "";
  setResultsDisplayMode("");
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  setDiscoverySectionsVisible(true);
  if (els.resultsSection) els.resultsSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  selectedFigureId = null;
  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.promotionsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function enterProductDetailView() {
  activeView = "detail";
  document.body.classList.add("product-detail-open");
  setResultsDisplayMode("");
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  setDiscoverySectionsVisible(false);
  forceHideResultsSection();
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = false;
}

function returnToResultsView(shouldScroll = true) {
  if (els.productImageLightbox?.open) closeProductGalleryLightbox();
  activeView = "catalog";
  document.body.classList.remove("product-detail-open");
  setResultsDisplayMode(usesPagedCatalogueLayout() ? "figures" : "");
  clearSelectedFigureHash();
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  setDiscoverySectionsVisible(!state.catalogStandalone && !usesPagedCatalogueLayout());
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.resultsSection) els.resultsSection.hidden = false;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  renderProductCardsCurrentSelection();
  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function showCommunitySection(shouldScroll = true) {
  activeView = "community";
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  document.body.classList.add("community-open");
  setDiscoverySectionsVisible(false);
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.resultsSection) els.resultsSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  if (els.communitySection) els.communitySection.hidden = false;
  ensureCommunityReady();
  if (shouldScroll) {
    els.communitySection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (window.location.hash !== "#community") {
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}#community`);
  }
}

function showGameSection(shouldScroll = true) {
  if (!els.gameSection) return;
  activeView = "game";
  hideDatabaseSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  setDiscoverySectionsVisible(false);
  if (els.resultsSection) els.resultsSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  els.gameSection.hidden = false;
  renderGameLobbyStatus();
  if (shouldScroll) {
    els.gameSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function nekoAdvisorSpeak(message) {
  if (!els.nekoAdvisorDialogue) return;
  const finalText = String(message || "").trim();
  if (nekoAdvisorTypeTimer) {
    window.clearInterval(nekoAdvisorTypeTimer);
    nekoAdvisorTypeTimer = null;
  }

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (prefersReducedMotion || finalText.length <= 2) {
    els.nekoAdvisorDialogue.textContent = finalText;
    els.nekoAdvisorDialogue.classList.remove("is-typing");
    return;
  }

  let index = 0;
  els.nekoAdvisorDialogue.textContent = "";
  els.nekoAdvisorDialogue.classList.add("is-typing");
  nekoAdvisorTypeTimer = window.setInterval(() => {
    index += 1;
    els.nekoAdvisorDialogue.textContent = finalText.slice(0, index);
    if (index >= finalText.length) {
      window.clearInterval(nekoAdvisorTypeTimer);
      nekoAdvisorTypeTimer = null;
      els.nekoAdvisorDialogue.classList.remove("is-typing");
    }
  }, 24);
}

function resetNekoAdvisorQuest() {
  nekoAdvisorState = {
    ...nekoAdvisorState,
    productKind: "",
    budget: null,
    category: "",
    character: "",
    store: "all",
    loading: false,
    rerollOffset: 0,
    lastResult: null
  };
  els.nekoAdvisorSection?.classList.remove("is-results-mode", "is-scanning");
  if (els.nekoAdvisorKindStep) els.nekoAdvisorKindStep.hidden = false;
  if (els.nekoAdvisorBudgetForm) els.nekoAdvisorBudgetForm.hidden = true;
  if (els.nekoAdvisorCategoryStep) els.nekoAdvisorCategoryStep.hidden = true;
  if (els.nekoAdvisorCharacterForm) els.nekoAdvisorCharacterForm.hidden = true;
  if (els.nekoAdvisorStoreForm) els.nekoAdvisorStoreForm.hidden = true;
  if (els.nekoAdvisorResults) {
    els.nekoAdvisorResults.hidden = true;
    els.nekoAdvisorResults.innerHTML = "";
  }
  if (els.nekoAdvisorResultActions) els.nekoAdvisorResultActions.hidden = true;
  if (els.nekoAdvisorBudget) els.nekoAdvisorBudget.value = "";
  if (els.nekoAdvisorCharacter) els.nekoAdvisorCharacter.value = "";
  if (els.nekoAdvisorStore) els.nekoAdvisorStore.value = "all";
  if (els.nekoAdvisorCurrency) els.nekoAdvisorCurrency.textContent = preferredCurrency();
  updateNekoAdvisorStage("kind");
  nekoAdvisorSpeak("Tell us what you want to compare. We will filter verified offers by budget, type, category and store.");
}

function populateNekoAdvisorStoreOptions() {
  if (!els.nekoAdvisorStore) return;
  const current = nekoAdvisorState.store || els.nekoAdvisorStore.value || "all";
  const options = availableProviders()
    .map((provider) => ({ id: provider.id, name: provider.name || providerName(provider.id) }))
    .filter((provider) => provider.id)
    .sort((a, b) => a.name.localeCompare(b.name));
  els.nekoAdvisorStore.innerHTML = [
    `<option value="all">Any store</option>`,
    ...options.map((provider) => `<option value="${escapeHtml(provider.id)}">${escapeHtml(provider.name)}</option>`)
  ].join("");
  els.nekoAdvisorStore.value = options.some((provider) => provider.id === current) ? current : "all";
}

function showNekoAdvisorStoreStep() {
  if (els.nekoAdvisorCharacterForm) els.nekoAdvisorCharacterForm.hidden = true;
  populateNekoAdvisorStoreOptions();
  if (els.nekoAdvisorStoreForm) els.nekoAdvisorStoreForm.hidden = false;
  updateNekoAdvisorStage("filters");
  nekoAdvisorSpeak("Choose a preferred store, or keep all stores enabled for a wider comparison.");
  window.setTimeout(() => els.nekoAdvisorStore?.focus(), 80);
}

function showNekoAdvisorSection(shouldScroll = true) {
  if (!els.nekoAdvisorSection) return;
  activeView = "advisor";
  hideDatabaseSection();
  hideGameSection();
  setDiscoverySectionsVisible(false);
  if (els.resultsSection) els.resultsSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  els.nekoAdvisorSection.hidden = false;
  document.body.classList.add("neko-advisor-open");
  els.nekoAdvisorSection.scrollTop = 0;
  resetNekoAdvisorQuest();
  ensureCatalogueLoadStarted();
  if (shouldScroll && window.location.hash !== "#neko-advisor") {
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}#neko-advisor`);
  }
}

function parseNekoAdvisorBudget(value) {
  const parsed = Number(String(value || "").replace(",", "."));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function nekoAdvisorCategoryLabel(category) {
  if (category === "scale") return "scale figures";
  if (category === "prize") return "prize figures";
  if (category === "pop") return "Pop Up Parade";
  if (category === "nendoroid") return "nendoroids";
  if (category === "figma") return "figma";
  if (category === "action") return "action figures";
  if (category === "figuarts") return "Figuarts";
  if (category === "bunny") return "bunny or 1/4 figures";
  if (category === "mecha") return "mecha figures";
  if (category === "model") return "model kits";
  if (category === "statue") return "statues";
  return "any category";
}

function nekoAdvisorKindLabel(kind = nekoAdvisorState.productKind) {
  if (kind === "mangas") return "mangas";
  if (kind === "plushies" || kind === "peluches") return "plushies";
  if (kind === "figures") return "figures";
  return "offers";
}

function nekoAdvisorBaseQuery() {
  if (nekoAdvisorState.character) return nekoAdvisorState.character;
  if (nekoAdvisorState.productKind === "mangas") return "manga";
  if (nekoAdvisorState.productKind === "plushies" || nekoAdvisorState.productKind === "peluches") return "plush";
  if (nekoAdvisorState.category === "scale") return "scale";
  if (nekoAdvisorState.category === "prize") return "prize";
  if (nekoAdvisorState.category === "pop") return "pop up parade";
  if (nekoAdvisorState.category === "nendoroid") return "nendoroid";
  if (nekoAdvisorState.category === "figma") return "figma";
  if (nekoAdvisorState.category === "action") return "action figure";
  if (nekoAdvisorState.category === "figuarts") return "figuarts";
  if (nekoAdvisorState.category === "bunny") return "bunny 1/4";
  if (nekoAdvisorState.category === "mecha") return "mecha";
  if (nekoAdvisorState.category === "model") return "model kit";
  if (nekoAdvisorState.category === "statue") return "statue";
  return "";
}

function nekoAdvisorCatalogueCategory() {
  const directMap = {
    scale: "scale",
    prize: "prize",
    pop: "pop",
    nendoroid: "nendoroids",
    figma: "figma",
    action: "action",
    figuarts: "figuarts",
    bunny: "bunny",
    mecha: "mecha",
    model: "model",
    statue: "statue"
  };
  return directMap[nekoAdvisorState.category] || "trending";
}

function nekoAdvisorCatalogueQuery() {
  const character = String(nekoAdvisorState.character || "").trim();
  if (character) return character;
  if (nekoAdvisorState.productKind === "mangas" || nekoAdvisorState.productKind === "plushies") {
    return nekoAdvisorKindQuery();
  }
  return "";
}

function nekoAdvisorBudgetMaxEur() {
  const budget = Number(nekoAdvisorState.budget || 0);
  if (!Number.isFinite(budget) || budget <= 0) return FIGURE_TAB_PRICE_MAX_EUR;
  return Math.max(1, Math.min(FIGURE_TAB_PRICE_MAX_EUR, convertMoney(budget, preferredCurrency(), "EUR") ?? budget));
}

function nekoAdvisorCatalogueLabel() {
  const budget = formatMoney(nekoAdvisorState.budget || 0, preferredCurrency());
  const category = nekoAdvisorCategoryLabel(nekoAdvisorState.category);
  const target = nekoAdvisorState.character || "anything";
  const store = nekoAdvisorState.store && nekoAdvisorState.store !== "all" ? ` at ${providerName(nekoAdvisorState.store)}` : "";
  return `Offer finder: ${category}, ${target}, under ${budget}${store}`;
}

function nekoAdvisorKindQuery() {
  if (nekoAdvisorState.productKind === "mangas") return "manga";
  if (nekoAdvisorState.productKind === "plushies" || nekoAdvisorState.productKind === "peluches") return "plush";
  if (nekoAdvisorState.productKind === "figures") return "figure";
  return "";
}

function nekoAdvisorFigureMatchesKind(figure) {
  if (!nekoAdvisorState.productKind) return true;
  const text = figureCategoryText(figure);
  if (nekoAdvisorState.productKind === "mangas") {
    return text.includes("manga") || text.includes("book") || text.includes("comic");
  }
  if (nekoAdvisorState.productKind === "plushies" || nekoAdvisorState.productKind === "peluches") {
    return text.includes("plush") || text.includes("plushie") || text.includes("peluche");
  }
  return isDisplayFigure(figure);
}

function nekoAdvisorFigureMatchesCategory(figure, category) {
  if (!category) return true;
  if (nekoAdvisorState.productKind && nekoAdvisorState.productKind !== "figures") return true;
  const text = figureCategoryText(figure);
  if (category === "scale") {
    return text.includes("scale figure") || /1\/\d+/.test(figure?.scale || "") || (figure?.scale && figure.scale !== "Non-scale");
  }
  if (category === "prize") {
    return text.includes("prize") || text.includes("kuji") || text.includes("lottery");
  }
  if (category === "pop") {
    return text.includes("pop up parade") || text.includes("pop figure") || text.includes("pop! figure");
  }
  if (category === "nendoroid") {
    return text.includes("nendoroid");
  }
  if (category === "figma") {
    return text.includes("figma");
  }
  if (category === "action") {
    return text.includes("action figure") || text.includes("figuarts") || text.includes("revoltech");
  }
  if (category === "figuarts") {
    return text.includes("figuarts") || text.includes("s.h.figuarts") || text.includes("sh figuarts");
  }
  if (category === "bunny") {
    return text.includes("bunny") || text.includes("1/4") || text.includes("1 4") || text.includes("freeing");
  }
  if (category === "mecha") {
    return text.includes("mecha") || text.includes("robot") || text.includes("gundam") || text.includes("model kit");
  }
  if (category === "model") {
    return text.includes("model kit") || text.includes("plastic model") || text.includes("pla model") || text.includes("gunpla");
  }
  if (category === "statue") {
    return text.includes("statue") || text.includes("resin");
  }
  return true;
}

function nekoAdvisorFigureMatchesCharacter(figure, character) {
  const term = String(character || "").trim();
  if (!term) return true;
  return figureMatchesTerm(figure, term);
}

function nekoAdvisorSearchText(figure) {
  const safeFigure = figure ?? {};
  const tags = Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : "";
  return normalizeText([
    safeFigure?.name,
    safeFigure?.title,
    safeFigure?.character,
    safeFigure?.series,
    safeFigure?.manufacturer,
    safeFigure?.type,
    safeFigure?.scale,
    safeFigure?.version,
    tags,
    safeFigure?.searchIndex
  ].join(" "));
}

function nekoAdvisorTermStrength(figure, term) {
  const tokens = tokenize(term);
  if (!tokens.length) return 0;
  const text = nekoAdvisorSearchText(figure);
  const searchTokens = Array.isArray(figure?.searchTokens) ? figure.searchTokens : tokenize(text);
  const matched = tokens.filter((token) =>
    text.includes(token) ||
    searchTokens.some((candidate) => candidate === token || (token.length >= 4 && candidate.startsWith(token)))
  ).length;
  const base = matched / tokens.length;
  const exactFields = [figure?.character, figure?.series, figure?.name, figure?.title]
    .map((value) => normalizeText(value))
    .filter(Boolean);
  const exactBonus = exactFields.some((value) => value.includes(normalizeText(term))) ? 0.25 : 0;
  return Math.min(1.25, base + exactBonus);
}

function nekoAdvisorCategoryStrength(figure, category) {
  if (!category) return 0.75;
  return nekoAdvisorFigureMatchesCategory(figure, category) ? 1 : 0;
}

function nekoAdvisorMinimumPlausiblePrice(figure) {
  const text = figureCategoryText(figure);
  const kind = nekoAdvisorState.productKind;
  const category = nekoAdvisorState.category;
  if (kind === "mangas" || text.includes("manga") || text.includes("book")) return 2;
  if (kind === "plushies" || text.includes("plush") || text.includes("plushie")) return 5;
  if (category === "bunny" || text.includes("1/4") || text.includes("bunny")) return 32;
  if (category === "scale" || text.includes("scale figure") || /1\/\d+/.test(String(figure?.scale || ""))) return 18;
  if (category === "figma" || text.includes("figma")) return 12;
  if (category === "nendoroid" || text.includes("nendoroid")) return 10;
  if (category === "figuarts" || text.includes("figuarts")) return 12;
  if (category === "action" || text.includes("action figure") || text.includes("revoltech")) return 10;
  if (category === "pop" || text.includes("pop up parade")) return 8;
  if (category === "model" || category === "mecha" || text.includes("model kit") || text.includes("mecha")) return 6;
  if (category === "prize" || text.includes("prize")) return 5;
  return 4;
}

function nekoAdvisorOfferFreshnessPenalty(offer) {
  const raw = offer?.lastUpdated || offer?.last_checked || offer?.updatedAt || "";
  const parsed = Date.parse(raw);
  if (!Number.isFinite(parsed)) return 10;
  const ageDays = Math.max(0, (Date.now() - parsed) / 86400000);
  if (ageDays <= 7) return 0;
  if (ageDays <= 30) return 5;
  if (ageDays <= 90) return 14;
  return 28;
}

function nekoAdvisorOfferIsQualified(figure, offer) {
  const price = offerProductPriceValue(offer);
  if (price === null) return false;
  if (!safeExternalOfferUrl(offer)) return false;
  if (!offerLooksPlausible(offer)) return false;
  if (price < nekoAdvisorMinimumPlausiblePrice(figure)) return false;
  const availability = nekoAdvisorOfferAvailabilityRank(offer, figure);
  if (availability >= 6) return false;
  const budget = nekoAdvisorState.budget || 0;
  const maxUsefulPrice = Math.max(budget + 80, budget * 1.55, 60);
  return !budget || price <= maxUsefulPrice;
}

function nekoAdvisorBestPricedOffer(figure) {
  const offers = sortedOffers(offersForCountry(figure))
    .filter((offer) => nekoAdvisorOfferIsQualified(figure, offer))
    .sort((a, b) => {
      const priceA = offerProductPriceValue(a);
      const priceB = offerProductPriceValue(b);
      if (priceA !== priceB) return priceA - priceB;
      return nekoAdvisorOfferAvailabilityRank(a, figure) - nekoAdvisorOfferAvailabilityRank(b, figure);
    });
  const offer = offers[0] || null;
  const price = offerProductPriceValue(offer);
  return offer && price !== null ? { offer, price } : null;
}

function nekoAdvisorOfferAvailabilityRank(offer, figure) {
  const status = offer?.availability || figure?.availability || "";
  const ranks = {
    "In stock": 0,
    Available: 0,
    Released: 1,
    "Pre-order": 2,
    Archive: 4,
    "Sold out": 6
  };
  return ranks[status] ?? availabilityRank(figure);
}

function nekoAdvisorConfidenceRank(offer) {
  const confidence = String(offer?.confidence || "").toLowerCase();
  if (confidence.includes("confirmed") || confidence.includes("high") || confidence.includes("local")) return 0;
  if (confidence.includes("medium")) return 1;
  if (confidence.includes("low")) return 3;
  return 2;
}

function nekoAdvisorRecommendationScore(item) {
  const budget = nekoAdvisorState.budget || 0;
  const price = item.price || 0;
  const underBudget = price <= budget;
  const ratio = budget ? price / budget : 1;
  const sweetSpot = budget < 80 ? 0.72 : 0.84;
  const underBudgetScore = underBudget
    ? Math.abs(ratio - sweetSpot) * 58 + (ratio < 0.22 ? 55 : 0)
    : 185 + Math.abs(budget - price) * 2.3;
  const stockPenalty = nekoAdvisorOfferAvailabilityRank(item.offer, item.figure) * 34;
  const confidencePenalty = nekoAdvisorConfidenceRank(item.offer) * 16;
  const freshnessPenalty = nekoAdvisorOfferFreshnessPenalty(item.offer);
  const multiStoreBonus = figureHasMultiplePricedStores(item.figure) ? -12 : 0;
  const imageBonus = figureHasRealImage(item.figure) ? -10 : 30;
  const categoryStrength = nekoAdvisorCategoryStrength(item.figure, nekoAdvisorState.category);
  const categoryPenalty = nekoAdvisorState.category ? (1 - categoryStrength) * 45 : 0;
  const preferenceStrength = nekoAdvisorTermStrength(item.figure, nekoAdvisorState.character || nekoAdvisorBaseQuery());
  const preferencePenalty = (nekoAdvisorState.character || nekoAdvisorBaseQuery()) ? Math.max(0, 1 - preferenceStrength) * 82 : 0;
  const suspiciousPricePenalty = price < nekoAdvisorMinimumPlausiblePrice(item.figure) * 1.25 ? 80 : 0;
  return underBudgetScore + stockPenalty + confidencePenalty + freshnessPenalty + categoryPenalty + preferencePenalty + suspiciousPricePenalty + imageBonus + multiStoreBonus;
}

function nekoAdvisorRecommendationReasons(item, relaxedFields = []) {
  const reasons = [];
  if (item.price <= (nekoAdvisorState.budget || 0)) reasons.push("Under budget");
  else reasons.push("Closest price");
  if (nekoAdvisorOfferAvailabilityRank(item.offer, item.figure) <= 1) reasons.push("In stock");
  if (nekoAdvisorConfidenceRank(item.offer) <= 1) reasons.push("Validated");
  if (nekoAdvisorOfferFreshnessPenalty(item.offer) <= 5) reasons.push("Fresh check");
  if (figureHasMultiplePricedStores(item.figure)) reasons.push("Multi-store");
  if (nekoAdvisorState.category && !relaxedFields.includes("category")) reasons.push(nekoAdvisorCategoryLabel(nekoAdvisorState.category));
  if (nekoAdvisorState.character && !relaxedFields.includes("character")) reasons.push("Preference match");
  return reasons.slice(0, 4);
}

function nekoAdvisorCandidateFigures(pool, { relaxCategory = false, relaxCharacter = false } = {}) {
  return pool.filter((figure) =>
    nekoAdvisorFigureMatchesKind(figure)
    && figureIsCatalogueReady(figure)
    && (relaxCategory || nekoAdvisorFigureMatchesCategory(figure, nekoAdvisorState.category))
    && (relaxCharacter || nekoAdvisorFigureMatchesCharacter(figure, nekoAdvisorState.character))
  );
}

function nekoAdvisorDecorateMatches(matches) {
  return matches.map((item, index) => {
    const matchScore = Math.max(52, Math.min(99, Math.round(100 - Math.min(46, item.score / 4.2) - index * 1.2)));
    const rank = index === 0 ? "Best match" : matchScore >= 88 ? "Strong match" : matchScore >= 76 ? "Good match" : "Alternative";
    return { ...item, matchScore, rank };
  });
}

function nekoAdvisorPickWindow(ranked, offset = 0, size = 10) {
  if (!ranked.length) return [];
  const best = ranked[0];
  const rest = ranked.slice(1);
  if (!rest.length || offset <= 0) return ranked.slice(0, size);
  const start = offset % rest.length;
  const rotated = [...rest.slice(start), ...rest.slice(0, start)];
  return [best, ...rotated].slice(0, size);
}

async function fetchNekoAdvisorPool(query = "") {
  const key = normalizeText(query || "all");
  if (nekoAdvisorState.cache.has(key)) return nekoAdvisorState.cache.get(key);

  const rawFigures = [];
  if (window.location.protocol !== "file:") {
    const pagesToFetch = query ? 4 : 5;
    for (let page = 1; page <= pagesToFetch; page += 1) {
      try {
        const response = await fetch(catalogueApiUrl({
          page,
          limit: 100,
          query,
          forceReload: false
        }), { cache: "default" });
        if (!response.ok) break;
        const data = await response.json().catch(() => ({}));
        if (Array.isArray(data?.figures)) rawFigures.push(...data.figures);
        if (!data?.has_more) break;
      } catch (error) {
        console.debug("Neko advisor catalogue page unavailable", error);
        break;
      }
    }
  }

  const normalized = rawFigures.length
    ? await dedupeNormalizedFiguresInChunks(await normalizeFiguresInChunks(rawFigures))
    : [];
  const combined = dedupeNormalizedFigures([...figures, ...normalized]);
  nekoAdvisorState.cache.set(key, combined);
  return combined;
}

async function buildNekoAdvisorRecommendations() {
  const budget = nekoAdvisorState.budget;
  const category = nekoAdvisorState.category;
  const character = nekoAdvisorState.character;
  const seeds = [...new Set([character, nekoAdvisorBaseQuery(), nekoAdvisorKindQuery(), ""].map((seed) => String(seed || "").trim()).filter((seed, index, list) => seed || index === list.length - 1))];
  const pools = await Promise.all(seeds.map((seed) => fetchNekoAdvisorPool(seed)));
  const pool = dedupeNormalizedFigures(pools.flat());
  let relaxedFields = [];
  let candidateFigures = nekoAdvisorCandidateFigures(pool);

  if (!candidateFigures.length && character) {
    relaxedFields = ["character"];
    candidateFigures = nekoAdvisorCandidateFigures(pool, { relaxCharacter: true });
  }
  if (!candidateFigures.length && category) {
    relaxedFields = [...new Set([...relaxedFields, "category"])];
    candidateFigures = nekoAdvisorCandidateFigures(pool, { relaxCategory: true, relaxCharacter: relaxedFields.includes("character") });
  }
  if (!candidateFigures.length && (category || character)) {
    relaxedFields = ["category", "character"].filter((field) => (field === "category" ? category : character));
    candidateFigures = nekoAdvisorCandidateFigures(pool, { relaxCategory: true, relaxCharacter: true });
  }

  const scored = candidateFigures
    .map((figure) => {
      const best = nekoAdvisorBestPricedOffer(figure);
      if (!best) return null;
      const item = { figure, ...best };
      return {
        ...item,
        score: nekoAdvisorRecommendationScore(item),
        reasons: nekoAdvisorRecommendationReasons(item, relaxedFields)
      };
    })
    .filter(Boolean);

  const underBudget = scored
    .filter((item) => item.price <= budget)
    .sort((a, b) => a.score - b.score || b.price - a.price || availabilityRank(a.figure) - availabilityRank(b.figure));

  if (underBudget.length) {
    const ranked = nekoAdvisorDecorateMatches(underBudget.slice(0, 36));
    return {
      ranked,
      matches: nekoAdvisorPickWindow(ranked, nekoAdvisorState.rerollOffset, 10),
      relaxed: false,
      relaxedFields
    };
  }

  const closest = nekoAdvisorDecorateMatches(scored
    .sort((a, b) => a.score - b.score || Math.abs(a.price - budget) - Math.abs(b.price - budget) || a.price - b.price)
    .slice(0, 36));
  return {
    ranked: closest,
    matches: nekoAdvisorPickWindow(closest, nekoAdvisorState.rerollOffset, 10),
    relaxed: true,
    relaxedFields
  };
}

function renderNekoAdvisorResults(matches, relaxed = false, relaxedFields = []) {
  if (!els.nekoAdvisorResults) return;
  els.nekoAdvisorSection?.classList.add("is-results-mode");
  els.nekoAdvisorSection?.classList.remove("is-scanning");
  if (els.nekoAdvisorResultActions) els.nekoAdvisorResultActions.hidden = false;
  updateNekoAdvisorStage("results");
  els.nekoAdvisorResults.hidden = false;

  if (!matches.length) {
    els.nekoAdvisorResults.innerHTML = `
      <div class="neko-empty-result" role="status">
        <strong>No verified offers found for this request.</strong>
        <span>Raise the budget, widen the category, or keep the store filter open.</span>
      </div>
    `;
    return;
  }

  const currency = preferredCurrency();
  const requestSummary = [
    ["Budget", formatMoney(nekoAdvisorState.budget || 0, currency)],
    ["Type", nekoAdvisorKindLabel()],
    ["Category", nekoAdvisorCategoryLabel(nekoAdvisorState.category)],
    ["Target", nekoAdvisorState.character || "Anything"]
  ];
  const top = matches[0];
  const topTitle = compactFigureNameForCard(top.figure, 44);
  const relaxedCopy = relaxedFields.length
    ? `We widened ${relaxedFields.join(" and ")} because the request was too narrow.`
    : "Ranked by request match, budget fit, real image, stock, store link, price sanity, and freshness.";
  const note = relaxed
    ? `No exact ${nekoAdvisorKindLabel()} match under budget. Showing the closest verified alternatives.`
    : `Found verified ${nekoAdvisorKindLabel()} inside your budget.`;

  els.nekoAdvisorResults.innerHTML = `
    <div class="neko-result-hero">
      <p>Search complete</p>
      <h3>${escapeHtml(top.rank || "Best match")}: ${escapeHtml(topTitle)}</h3>
      <div class="neko-result-loadout">
        ${requestSummary.map(([label, value]) => `
          <span><strong>${escapeHtml(label)}</strong>${escapeHtml(value)}</span>
        `).join("")}
      </div>
    </div>
    <div class="neko-result-note">
      <strong>${escapeHtml(note)}</strong>
      <small>${escapeHtml(relaxedCopy)}</small>
    </div>
    <div class="neko-offer-grid">
      ${matches.map(({ figure, offer, price, reasons, rank, matchScore }, index) => {
        const url = safeExternalOfferUrl(offer);
        const provider = providerName(offer.provider);
        const title = compactFigureNameForCard(figure, 42);
        const reasonBadges = (Array.isArray(reasons) ? reasons : []).map((reason) => `<em>${escapeHtml(reason)}</em>`).join("");
        const safeScore = Math.max(0, Math.min(100, Number(matchScore) || 0));
        return `
          <article class="neko-offer-card${index === 0 ? " is-top-pick" : ""}">
            <span class="neko-rank-badge">${escapeHtml(rank || (index === 0 ? "Best match" : "Strong match"))}</span>
            <button type="button" class="neko-offer-image" data-neko-figure="${escapeHtml(figure.id)}" aria-label="Open ${escapeHtml(title)}">
              <img class="${shouldBlurFigureImage(figure) ? "ecchi-blur" : ""}" src="${escapeHtml(premiumFigureImageFor(figure))}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" />
            </button>
            <div>
              <strong>${escapeHtml(title)}</strong>
              <span>${escapeHtml(provider)} / ${escapeHtml(formatMoney(price, currency))}</span>
              <div class="neko-match-meter" aria-label="${safeScore}% request match"><i style="width: ${safeScore}%"></i><b>${safeScore}% match</b></div>
              <div class="neko-offer-reasons">${reasonBadges}</div>
            </div>
            <div class="neko-offer-actions">
              <button type="button" data-neko-figure="${escapeHtml(figure.id)}">Details</button>
              <a href="${escapeHtml(url)}" target="_blank" rel="sponsored nofollow noopener noreferrer">View offer</a>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

async function finishNekoAdvisorQuest() {
  if (nekoAdvisorState.loading) return;
  nekoAdvisorState.loading = true;
  els.nekoAdvisorSection?.classList.add("is-scanning");
  els.nekoAdvisorSection?.classList.remove("is-results-mode");
  updateNekoAdvisorStage("scan");
  if (els.nekoAdvisorResultActions) els.nekoAdvisorResultActions.hidden = true;
  if (els.nekoAdvisorCharacterForm) els.nekoAdvisorCharacterForm.hidden = true;
  if (els.nekoAdvisorStoreForm) els.nekoAdvisorStoreForm.hidden = true;
  if (els.nekoAdvisorResults) {
    els.nekoAdvisorResults.hidden = false;
    els.nekoAdvisorResults.innerHTML = `<div class="neko-empty-result" role="status">Opening the filtered catalogue...</div>`;
  }
  nekoAdvisorSpeak("Opening the live catalogue with your filters applied.");

  try {
    const category = nekoAdvisorCatalogueCategory();
    const query = nekoAdvisorCatalogueQuery();
    await openFigureCatalogue({
      query,
      category,
      label: nekoAdvisorCatalogueLabel(),
      provider: nekoAdvisorState.store || "all",
      maxPrice: nekoAdvisorBudgetMaxEur(),
      confirmedOnly: true,
      strictCategory: true
    }, true);
  } catch (error) {
    console.warn("Neko advisor failed", error);
    if (els.nekoAdvisorResults) {
      els.nekoAdvisorResults.innerHTML = `<div class="neko-empty-result" role="status">The offer finder could not finish this search. Try again.</div>`;
    }
    nekoAdvisorSpeak("The catalogue could not complete the request. Try again.");
  } finally {
    nekoAdvisorState.loading = false;
  }
}

function restoreSelectedFigureFromHash() {
  const figureId = figureIdFromHash();
  if (!figureId || !figures.some((figure) => figure.id === figureId)) return false;
  renderProductDetail(figureId, false, false);

  requestAnimationFrame(() => {
    els.figureSection.scrollIntoView({ behavior: "auto", block: "start" });
  });

  return true;
}

function populateSelect(select, values, label) {
  const current = select.value || "all";
  select.innerHTML = [`<option value="all">${escapeHtml(label)}</option>`]
    .concat(values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`))
    .join("");
  select.value = values.includes(current) ? current : "all";
}

function populateFigureCategorySelect(select) {
  if (!select) return;
  const current = select.value || "all";
  const groups = FIGURE_TYPE_FILTER_GROUPS.map((group) => `
    <optgroup label="${escapeHtml(group.label)}">
      ${group.options.map((option) => `<option value="${escapeHtml(option.key)}">${escapeHtml(option.label)}</option>`).join("")}
    </optgroup>
  `);
  select.innerHTML = [`<option value="all">All categories</option>`, ...groups].join("");
  select.value = current === "all" || FIGURE_TYPE_FILTER_OPTIONS.some((option) => option.key === current)
    ? current
    : "all";
}

function populateFilters() {
  const filterFigures = figures.filter((figure) => isDisplayFigure(figure) && figureIsCatalogueReady(figure));
  populateSelect(els.manufacturerFilter, [...new Set(filterFigures.map((figure) => figure.manufacturer))].sort(), "All manufacturers");
  populateFigureCategorySelect(els.typeFilter);
  populateSelect(els.statusFilter, [...new Set(filterFigures.map((figure) => figure.availability))].sort(), "Any availability");
  populateSelect(els.providerFilter, availableProviders().map((provider) => provider.id), "All stores");

  [...els.providerFilter.options].forEach((option) => {
    if (option.value !== "all") option.textContent = providerName(option.value);
  });

  if (els.priceRangeValue) els.priceRangeValue.textContent = displayPriceRangeLabel();
  els.shipsToPortugal.closest("label").lastChild.textContent = ` Ships to ${currentCountryLabel()}`;
  populateNekoAdvisorStoreOptions();
}

function formatMoney(amount, currency = "EUR", fallback = PRICE_FALLBACK) {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
    return fallback;
  }

  try {
    const code = String(currency || "EUR").toUpperCase();
    if (["USD", "AUD", "CAD", "NZD", "SGD", "MXN"].includes(code)) {
      const formattedNumber = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(Number(amount));
      return `${CURRENCY_SYMBOLS[code] || `${code} `}${formattedNumber}`;
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
      maximumFractionDigits: code === "JPY" ? 0 : 2
    }).format(Number(amount));
  } catch (error) {
    return `${Number(amount).toFixed(2)} ${currency}`;
  }
}

function getOfferTotal(offer) {
  if (typeof offer.estimatedTotal === "number") return offer.estimatedTotal;
  if ([offer.productPrice, offer.shipping, offer.taxes].every((value) => typeof value === "number")) {
    return offer.productPrice + offer.shipping + offer.taxes;
  }
  return null;
}

function offerHasKnownTotal(offer) {
  return typeof getOfferTotal(offer) === "number";
}

function offerProductPriceValue(offer) {
  const productPrice = numberOrNull(offer?.productPrice);
  return productPrice !== null && productPrice > 0 ? productPrice : null;
}

function offerIsDirectPricedProduct(offer) {
  return Boolean(
    offer
    && offerLooksPlausible(offer)
    && offerProductPriceValue(offer) !== null
    && safeExternalOfferUrl(offer)
  );
}

function lowestProductPriceOffer(offers) {
  return [...offers]
    .filter(offerIsDirectPricedProduct)
    .sort((a, b) => {
      const priceA = offerProductPriceValue(a);
      const priceB = offerProductPriceValue(b);
      if (priceA !== priceB) return priceA - priceB;
      return providerName(a.provider).localeCompare(providerName(b.provider));
    })[0] || null;
}

function localizeOffer(offer) {
  const requestedCurrency = offerDisplayCurrency();
  const sourceCurrency = String(offer.sourceCurrency || offer.originalCurrency || offer.currency || "EUR").toUpperCase();
  const sourcePrice = numberOrNull(offer.sourcePrice ?? offer.sourceProductPrice ?? offer.originalPrice ?? offer.productPrice);
  const serverCurrency = String(offer.displayCurrency || offer.currency || "").toUpperCase();
  const useServerDisplay = offer.hasServerDisplayPrice === true
    && serverCurrency === requestedCurrency
    && offerProductPriceValue(offer) !== null;
  const snapshotMatches = !offer.exchangeRateSnapshotId
    || !exchangeRateMeta.snapshotId
    || offer.exchangeRateSnapshotId === exchangeRateMeta.snapshotId;
  const canConvertLocally = exchangeRateMeta.stale !== true && snapshotMatches;
  let currency = requestedCurrency;
  let productPrice = useServerDisplay ? offerProductPriceValue(offer) : null;
  let displayPriceKind = useServerDisplay ? offer.displayPriceKind : "";
  let displayPriceIsEstimate = useServerDisplay ? offer.displayPriceIsEstimate === true : false;
  if (productPrice === null && canConvertLocally) {
    productPrice = convertMoney(sourcePrice, sourceCurrency, requestedCurrency);
    if (productPrice !== null) {
      displayPriceKind = sourceCurrency === requestedCurrency ? "source" : "reference_conversion";
      displayPriceIsEstimate = sourceCurrency !== requestedCurrency;
    }
  }
  if (productPrice === null) {
    productPrice = sourcePrice;
    currency = sourceCurrency;
    displayPriceKind = "source";
    displayPriceIsEstimate = false;
  }
  const auxiliarySourceCurrency = useServerDisplay ? serverCurrency : sourceCurrency;
  const shipping = canConvertLocally ? convertMoney(offer.shipping, auxiliarySourceCurrency, currency) : numberOrNull(offer.shipping);
  const taxes = canConvertLocally ? convertMoney(offer.taxes, auxiliarySourceCurrency, currency) : numberOrNull(offer.taxes);
  const sourceEstimatedTotal = numberOrNull(offer.estimatedTotal);
  const estimatedTotal = sourceEstimatedTotal !== null
    ? (canConvertLocally ? convertMoney(sourceEstimatedTotal, auxiliarySourceCurrency, currency) : sourceEstimatedTotal)
    : [productPrice, shipping, taxes].every((value) => typeof value === "number")
      ? roundMoney(productPrice + shipping + taxes)
      : null;
  const productUrl = cleanProviderUrl(offer.provider, offer.productUrl);

  return {
    ...offer,
    productUrl,
    sourceProductPrice: sourcePrice,
    sourcePrice,
    sourceCurrency,
    productPrice,
    displayPrice: productPrice,
    displayCurrency: currency,
    displayPriceKind,
    displayPriceIsEstimate,
    shipping,
    taxes,
    currency,
    estimatedTotal,
    isLocal: offer.isLocal === true || isLocalProvider(offer.provider),
    shipsToCountry: offer.shipsToCountry !== false,
    linkType: productUrl ? "product" : "provider"
  };
}

function offersForCountry(figure) {
  const safeFigure = figure ?? {};
  const figureOffers = Array.isArray(safeFigure?.offers) ? safeFigure.offers : [];
  const figureId = safeFigure?.id || figureFallbackId(safeFigure);
  const cacheKey = `${userProfile.country}:${preferredCurrency()}:${exchangeRateMeta.date || "fallback"}:${figureId}`;
  if (localizedOfferCache.has(cacheKey)) return localizedOfferCache.get(cacheKey);

  if (safeFigure.source === "mfc") {
    const directOffers = figureOffers
      .map((offer) => localizeOffer(offer))
      .filter((offer) => providerById(offer.provider) && offerHasDisplayableData(offer));
    localizedOfferCache.set(cacheKey, directOffers);
    return directOffers;
  }

  const realOffers = figureOffers
    .map((offer) => localizeOffer(offer))
    .filter((offer) => providerById(offer.provider) && offerHasDisplayableData(offer));

  // If the price bot sent real offers, use only those.
  if (realOffers.length > 0) {
    localizedOfferCache.set(cacheKey, realOffers);
    return realOffers;
  }

  localizedOfferCache.set(cacheKey, []);
  return [];
}

function pricedStoreProviderIds(figure) {
  const ids = new Set();
  const offers = Array.isArray(figure?.offers) ? figure.offers : [];
  offers.forEach((offer) => {
    if (!offerHasVerifiedProductPrice(offer)) return;
    const providerId = offerProviderId(offer);
    if (providerId) ids.add(providerId);
  });
  return ids;
}

function figureHasMultiplePricedStores(figure) {
  const cacheKey = figure?.id || figureFallbackId(figure);
  if (pricedStoreCountCache.has(cacheKey)) return pricedStoreCountCache.get(cacheKey) > 1;
  const count = pricedStoreProviderIds(figure).size;
  pricedStoreCountCache.set(cacheKey, count);
  return count > 1;
}

function multiStoreFigures() {
  return figures.filter((figure) => isDisplayFigure(figure) && figureHasMultiplePricedStores(figure));
}

function updateSidebarMultiStoreCount() {
  if (!els.sidebarMultiStoreCount) return;
  els.sidebarMultiStoreCount.textContent = formatDatabaseNumber(multiStoreFigures().length);
}

function sortedOffers(offers) {
  return [...offers].sort((a, b) => {
    const totalA = getOfferTotal(a) ?? offerProductPriceValue(a);
    const totalB = getOfferTotal(b) ?? offerProductPriceValue(b);
    const knownA = typeof totalA === "number";
    const knownB = typeof totalB === "number";

    if (knownA !== knownB) return knownA ? -1 : 1;
    if (!knownA && !knownB) return providerName(a.provider).localeCompare(providerName(b.provider));
    return sortAscending ? totalA - totalB : totalB - totalA;
  });
}

function bestOffer(figure, offers = offersForCountry(figure)) {
  return lowestProductPriceOffer(offers);
}

function lowestKnownTotal(figure) {
  const offer = bestOffer(figure);
  const productPrice = offerProductPriceValue(offer);
  return productPrice !== null ? productPrice : Infinity;
}

function productMatchesQuery(figure) {
  const safeFigure = figure ?? {};
  const queryTokens = tokenize(cleanFigureTitleText(state.query));
  if (!queryTokens.length) return false;
  const searchTokens = Array.isArray(safeFigure?.searchTokens) ? safeFigure.searchTokens : tokenize(safeFigure?.searchIndex || "");
  return queryTokens.every((queryToken) =>
    searchTokens.some((searchToken) => searchToken === queryToken || (queryToken.length >= 4 && searchToken.startsWith(queryToken)))
  );
}

function productMatchesGridQuery(figure) {
  const safeFigure = figure ?? {};
  const query = normalizeText(state.gridQuery);
  if (!query) return true;

  const jan = janForFigure(safeFigure);
  const text = normalizeText([
    safeFigure?.name,
    safeFigure?.character,
    safeFigure?.series,
    safeFigure?.manufacturer,
    safeFigure?.type,
    safeFigure?.line,
    safeFigure?.scale,
    safeFigure?.sku,
    jan
  ].join(" "));
  const queryDigits = state.gridQuery.replace(/\D/g, "");
  return text.includes(query) || Boolean(queryDigits && jan.includes(queryDigits));
}

function figureMatchesBrandFilter(figure) {
  const safeFigure = figure ?? {};
  const filter = normalizeText(state.brandFilter);
  if (!filter) return true;

  const text = figureBrandText(safeFigure);

  if (filter === "scale figure") {
    return text.includes("scale figure") || /1\/\d+/.test(safeFigure?.scale || "") || (safeFigure?.scale && safeFigure.scale !== "Non-scale");
  }

  return text.includes(filter);
}

function resetVisibleCards(options = {}) {
  const resetFigurePage = options?.resetFigurePage !== false;
  if (resetFigurePage) figureCurrentPage = 1;
  visibleCardLimit = usesPagedCatalogueLayout()
    ? FIGURE_CATALOGUE_VISIBLE_LIMIT
    : Math.max(INITIAL_CARD_LIMIT, Number(catalogue.resultLimit) || INITIAL_CARD_LIMIT);
}

function renderCategoryChips() {
  if (!els.categoryChips) return;
  els.categoryChips.hidden = isMangaCatalogue();
  els.categoryChips.querySelectorAll("[data-category]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.category === state.category));
  });
}

function figureHasRealImage(figure) {
  return Boolean(figure?.hasRealImage || isUsableFigureImage(rawFigureImage(figure)));
}

function figureIsCatalogueReady(figure) {
  if (typeof figure?.catalogueReady === "boolean") return figure.catalogueReady;
  return Boolean(figure && !isPendingFigure(figure) && figureHasRealImage(figure));
}

function figureCategoryText(figure) {
  if (figure?.categoryText) return figure.categoryText;
  const safeFigure = figure ?? {};
  const tags = Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : "";
  return normalizeText([
    safeFigure?.name,
    safeFigure?.title,
    safeFigure?.character,
    safeFigure?.series,
    safeFigure?.manufacturer,
    safeFigure?.type,
    safeFigure?.line,
    safeFigure?.scale,
    safeFigure?.version,
    tags
  ].join(" "));
}

function figureBrandText(figure) {
  if (figure?.brandText) return figure.brandText;
  const safeFigure = figure ?? {};
  const tags = Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : "";
  return normalizeText([
    safeFigure?.name,
    safeFigure?.character,
    safeFigure?.series,
    safeFigure?.manufacturer,
    safeFigure?.type,
    safeFigure?.line,
    safeFigure?.scale,
    safeFigure?.version,
    tags
  ].join(" "));
}

function formatOfferPrice(offer, amount = offerProductPriceValue(offer), fallback = PRICE_FALLBACK) {
  if (amount === null || amount === undefined) return fallback;
  const formatted = formatMoney(amount, offer?.currency || offerDisplayCurrency(), fallback);
  return offer?.displayPriceIsEstimate === true ? `≈ ${formatted}` : formatted;
}

function popularSeriesById(seriesId) {
  const id = String(seriesId || "").trim();
  return POPULAR_SERIES_TILES.find((series) => series.id === id) || null;
}

function normalizePopularSeriesFilter(value) {
  const rawSeries = typeof value === "string" ? popularSeriesById(value) : value;
  if (!rawSeries) return null;
  const label = String(rawSeries.label || rawSeries.query || "").trim();
  const query = String(rawSeries.query || label).trim();
  if (!label && !query) return null;
  const terms = [
    query,
    label,
    ...(Array.isArray(rawSeries.terms) ? rawSeries.terms : [])
  ]
    .map((term) => normalizeText(term))
    .filter(Boolean);
  return {
    id: rawSeries.id || slugifyCategory(query || label),
    label: label || query,
    query: query || label,
    terms: [...new Set(terms)],
    characters: Array.isArray(rawSeries.characters) ? rawSeries.characters : [],
    image: String(rawSeries.image || "").trim(),
    accent: rawSeries.accent || "#c77dff"
  };
}

function activePopularSeriesFilter() {
  return normalizePopularSeriesFilter(state.seriesFilter);
}

function figureSeriesSearchText(figure) {
  const safeFigure = figure ?? {};
  return normalizeText([
    safeFigure?.series,
    safeFigure?.title,
    safeFigure?.name,
    safeFigure?.character,
    safeFigure?.line,
    safeFigure?.version,
    Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : ""
  ].join(" "));
}

function figureMatchesPopularSeries(figure, seriesFilter) {
  const series = normalizePopularSeriesFilter(seriesFilter);
  if (!series) return true;
  const text = figureSeriesSearchText(figure);
  if (series.id === "one-piece" && /\bone piece\s*(?:ver|version)\b/.test(text)) {
    const onePieceFranchiseCue = /\b(?:ichiban kuji|monkey|luffy|zoro|nami|sanji|chopper|robin|franky|brook|usopp|trafalgar|law|yamato|kaido|hancock|portgas|ace|sabo|shanks|roger|straw hat|wano|wanokuni|grandline|grand line|pirates?)\b/.test(text);
    if (!onePieceFranchiseCue) return false;
  }
  return series.terms.some((term) => text.includes(term));
}

function figureMatchesSeriesFilter(figure) {
  const series = activePopularSeriesFilter();
  return !series || figureMatchesPopularSeries(figure, series);
}

function seriesCharacterLabel(figure) {
  const label = cleanFigureTitleText(String(figure?.character || "").trim());
  const normalized = normalizeText(label);
  if (!isUsefulCharacterName(label)) return "";
  if (["unknown", "official product", "original character", "various", "multiple characters"].includes(normalized)) return "";
  return label.length > 34 ? `${label.slice(0, 31).trim()}...` : label;
}

function popularSeriesCharacterRules(seriesFilter = activePopularSeriesFilter()) {
  const series = normalizePopularSeriesFilter(seriesFilter);
  if (!series?.characters?.length) return [];
  return series.characters
    .map((entry) => {
      const values = Array.isArray(entry) ? entry : [entry];
      const label = String(values[0] || "").trim();
      const aliases = values.slice(1).length ? values.slice(1) : [label];
      const key = normalizeText(label);
      if (!label || !key) return null;
      return {
        key,
        label,
        aliases: [...new Set(aliases.map((alias) => normalizeText(alias)).filter(Boolean))]
      };
    })
    .filter(Boolean);
}

function inferPopularSeriesCharacter(figure, seriesFilter = activePopularSeriesFilter()) {
  const text = figureSeriesSearchText(figure);
  const matches = popularSeriesCharacterRules(seriesFilter)
    .map((rule) => {
      const matchedAliases = rule.aliases.filter((alias) => normalizedTextHasTerm(text, alias) || text.includes(alias));
      return matchedAliases.length
        ? { rule, specificity: Math.max(...matchedAliases.map((alias) => alias.length)) }
        : null;
    })
    .filter(Boolean)
    .sort((left, right) => right.specificity - left.specificity || right.rule.label.length - left.rule.label.length);
  return matches[0]?.rule || null;
}

function figureMatchesSeriesCharacterFilter(figure) {
  const selected = normalizeText(state.seriesCharacter);
  if (!selected) return true;
  const activeSeries = activePopularSeriesFilter();
  const rule = popularSeriesCharacterRules(activeSeries).find((item) => item.key === selected);
  if (rule) {
    const text = figureSeriesSearchText(figure);
    return rule.aliases.some((alias) => normalizedTextHasTerm(text, alias) || text.includes(alias));
  }
  const text = normalizeText([
    figure?.character,
    figure?.name,
    figure?.title
  ].join(" "));
  return text.includes(selected);
}

function seriesFilterSourceFigures(seriesFilter = activePopularSeriesFilter()) {
  const source = discoverySourceFigures().length ? discoverySourceFigures() : figures;
  return source.filter((figure) =>
    isDisplayFigure(figure)
    && figureIsCatalogueReady(figure)
    && figureMatchesPopularSeries(figure, seriesFilter)
  );
}

function seriesCharacterOptions(seriesFilter = activePopularSeriesFilter()) {
  if (!seriesFilter) return [];
  const byCharacter = new Map();
  seriesFilterSourceFigures(seriesFilter).forEach((figure) => {
    const inferred = inferPopularSeriesCharacter(figure, seriesFilter);
    const label = inferred?.label || seriesCharacterLabel(figure) || "";
    if (!label) return;
    const key = normalizeText(label);
    if (!key) return;
    const current = byCharacter.get(key);
    if (current) {
      current.count += 1;
    } else {
      byCharacter.set(key, { key, label, count: 1 });
    }
  });
  return [...byCharacter.values()]
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "en", { sensitivity: "base" }));
}

function normalizedTextHasTerm(text, term) {
  const haystack = ` ${normalizeText(text)} `;
  const needle = ` ${normalizeText(term)} `;
  return needle.trim() ? haystack.includes(needle) : false;
}

function figureProductIdentityText(figure) {
  const safeFigure = figure ?? {};
  const tags = Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : "";
  const rawType = String(safeFigure?.type || "").trim();
  const rawLine = String(safeFigure?.line || "").trim();
  const rawScale = String(safeFigure?.scale || "").trim();
  const explicitType = rawType && rawType.toLowerCase() !== "figure" ? rawType : "";
  const explicitLine = rawLine && rawLine.toLowerCase() !== "figure" ? rawLine : "";
  const explicitScale = rawScale && rawScale.toLowerCase() !== "non-scale" ? rawScale : "";

  return normalizeText([
    safeFigure?.title,
    safeFigure?.rawTitle,
    safeFigure?.name,
    safeFigure?.character,
    safeFigure?.series,
    safeFigure?.manufacturer,
    explicitType,
    explicitLine,
    explicitScale,
    safeFigure?.version,
    tags
  ].join(" "));
}

function figureHasNonFigureSignal(figure) {
  const text = figureProductIdentityText(figure);
  if (FIGURE_LOGO_PRODUCT_RE.test(text)) return true;
  return NON_FIGURE_PRODUCT_TERMS.some((term) => normalizedTextHasTerm(text, term));
}

function figureHasFigureSignal(figure) {
  const safeFigure = figure ?? {};
  if (safeFigure?.source === "mfc") return true;
  const text = figureProductIdentityText(safeFigure);
  return (
    FIGURE_PRODUCT_TERMS.some((term) => normalizedTextHasTerm(text, term))
    || /\b1\s+(?:4|6|7|8|10|12)\b/.test(text)
  );
}

function isStrictDisplayFigure(figure) {
  const safeFigure = figure ?? {};
  if (!safeFigure) return false;
  if (figureHasNonFigureSignal(safeFigure)) return false;
  return figureHasFigureSignal(safeFigure);
}

function isMangaCatalogue() {
  return state.catalogKind === "mangas";
}

function usesPagedCatalogueLayout() {
  return state.figuresOnly || isMangaCatalogue();
}

function usesRemoteCataloguePages() {
  return usesPagedCatalogueLayout() && cataloguePagination.enabled;
}

function reloadFigureCatalogueForActiveFilters({ rollbackState = null } = {}) {
  if (!usesPagedCatalogueLayout() || window.location.protocol === "file:") return false;
  const runId = ++apiSearchRunId;
  const refreshId = ++figureFilterRefreshSequence;
  figureFilterRefreshPending = { refreshId, runId };
  showFigureFilterRefreshPending();
  let loaded = false;
  reloadCataloguePageForQuery(state.query, runId)
    .then((result) => {
      loaded = result === true;
    })
    .catch((error) => {
      console.warn("Could not refresh the figure filters", error);
    })
    .finally(() => {
      if (figureFilterRefreshPending?.refreshId !== refreshId) return;
      figureFilterRefreshPending = null;
      if (!loaded && rollbackState) {
        restoreFigureFilterRequestState(rollbackState);
      }
      renderProductCards();
    });
  return true;
}

function figureFilterRefreshIsPending() {
  return Boolean(
    figureFilterRefreshPending
    && figureFilterRefreshPending.runId === apiSearchRunId
  );
}

function showFigureFilterRefreshPending() {
  if (!els.productGrid) return;
  els.resultsSection.hidden = false;
  els.productGrid.setAttribute("aria-busy", "true");
  els.productGrid.classList.add("is-filter-refreshing");
  if (els.resultMeta) els.resultMeta.textContent = localizedUiText("Loading figures...");
  if (els.showMoreButton) els.showMoreButton.hidden = true;
  if (els.figurePagination) els.figurePagination.hidden = true;

  if (!els.productGrid.querySelector(".figure-filter-refresh-status")) {
    els.productGrid.insertAdjacentHTML("afterbegin", `
      <div class="figure-filter-refresh-status" role="status">
        <span class="figure-filter-refresh-spinner" aria-hidden="true"></span>
        <span>${escapeHtml(localizedUiText("Loading figures..."))}</span>
      </div>
    `);
  }
}

function mangaProductIdentityText(figure) {
  const safeFigure = figure ?? {};
  const tags = Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : "";
  const offerUrls = Array.isArray(safeFigure?.offers)
    ? safeFigure.offers.map((offer) => offer?.productUrl || "").join(" ")
    : "";
  return normalizeText([
    safeFigure?.title,
    safeFigure?.rawTitle,
    safeFigure?.name,
    safeFigure?.character,
    safeFigure?.series,
    safeFigure?.manufacturer,
    safeFigure?.type,
    safeFigure?.line,
    safeFigure?.version,
    safeFigure?.sku,
    tags,
    offerUrls
  ].join(" "));
}

function isMangaProduct(figure) {
  const safeFigure = figure ?? {};
  if (typeof safeFigure?.isMangaProduct === "boolean") return safeFigure.isMangaProduct;
  const text = mangaProductIdentityText(safeFigure);
  if (!text || MANGA_FALSE_POSITIVE_RE.test(text)) return false;
  if (MANGA_EXCLUDED_PRODUCT_TERMS.some((term) => normalizedTextHasTerm(text, term))) return false;
  if (figureHasFigureSignal(safeFigure)) return false;
  const hasStrongMangaSignal = MANGA_PRODUCT_TERMS
    .filter((term) => !["manga", "mangas"].includes(term))
    .some((term) => normalizedTextHasTerm(text, term));
  if (hasStrongMangaSignal) return true;
  const hasPlainMangaSignal = ["manga", "mangas"].some((term) => normalizedTextHasTerm(text, term));
  return hasPlainMangaSignal && MANGA_VOLUME_SIGNAL_RE.test(text);
}

function shouldAllowMerchandiseQuery(query) {
  const text = normalizeText(query);
  return MERCHANDISE_SEARCH_TERMS.some((term) => term && text.includes(term));
}

function isDisplayFigure(figure) {
  const safeFigure = figure ?? {};
  if (typeof safeFigure?.isDisplayFigure === "boolean") return safeFigure.isDisplayFigure;
  return isStrictDisplayFigure(safeFigure);
}

function figureMatchesTerm(figure, term) {
  const queryTokens = tokenize(term);
  return queryTokens.every((queryToken) =>
    figure.searchTokens.some((searchToken) => searchToken === queryToken || (queryToken.length >= 4 && searchToken.startsWith(queryToken)))
  );
}

function daysInUtcMonth(year, monthIndex) {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

function addUtcMonths(date, months) {
  const year = date.getUTCFullYear();
  const monthIndex = date.getUTCMonth() + months;
  const targetYear = year + Math.floor(monthIndex / 12);
  const targetMonthIndex = ((monthIndex % 12) + 12) % 12;
  const day = Math.min(date.getUTCDate(), daysInUtcMonth(targetYear, targetMonthIndex));
  return new Date(Date.UTC(targetYear, targetMonthIndex, day));
}

function parseCatalogueDate(value) {
  const text = String(value || "").trim();
  if (!text || /^(unknown|none|null|undefined|tba|n\/a)$/i.test(text)) return null;

  const match = text.match(/(\d{4})(?:\D+(\d{1,2})(?:\D+(\d{1,2}))?)?/);
  if (!match) return null;

  const year = Number(match[1]);
  const month = match[2] ? Number(match[2]) : 1;
  const day = match[3] ? Number(match[3]) : 1;
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return null;
  if (month < 1 || month > 12) return null;
  const monthIndex = month - 1;
  const maxDay = daysInUtcMonth(year, monthIndex);
  if (day < 1 || day > maxDay) return null;

  return {
    date: new Date(Date.UTC(year, monthIndex, day)),
    year,
    precision: match[3] ? "day" : match[2] ? "month" : "year"
  };
}

function firstCatalogueDate(figure, keys) {
  for (const key of keys) {
    const parsed = parseCatalogueDate(figure?.[key]);
    if (parsed) return parsed;
  }
  return null;
}

function figureReleaseDateInfo(figure) {
  return firstCatalogueDate(figure, ["releaseDate", "release_date", "release", "releasedAt"]);
}

function figureAddedDateInfo(figure) {
  return firstCatalogueDate(figure, ["addedAt", "createdAt", "insertedAt", "importedAt", "firstSeenAt", "discoveredAt"]);
}

function hasBlockedPlaceholderRelease(figure) {
  if (typeof figure?.blockedPlaceholderRelease === "boolean") return figure.blockedPlaceholderRelease;
  const release = figureReleaseDateInfo(figure);
  const currentYear = new Date().getUTCFullYear();
  return Boolean(release && release.year > currentYear + PLACEHOLDER_YEAR_MARGIN);
}

function newArrivalSortTime(figure) {
  if (typeof figure?.newArrivalTimestamp === "number") return figure.newArrivalTimestamp;
  if (hasBlockedPlaceholderRelease(figure)) return 0;

  const today = new Date();
  const utcToday = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  const windowStart = addUtcMonths(utcToday, -NEW_ARRIVAL_PAST_MONTHS).getTime();
  const windowEnd = addUtcMonths(utcToday, NEW_ARRIVAL_FUTURE_MONTHS).getTime();
  const release = figureReleaseDateInfo(figure);
  const added = figureAddedDateInfo(figure);

  if (release && ["month", "day"].includes(release.precision)) {
    const releaseTimeValue = release.date.getTime();
    return releaseTimeValue >= windowStart && releaseTimeValue <= windowEnd ? releaseTimeValue : 0;
  }

  if (added) {
    const addedTimeValue = added.date.getTime();
    return addedTimeValue >= windowStart && addedTimeValue <= windowEnd ? addedTimeValue : 0;
  }

  const latestOfferTime = Array.isArray(figure?.offers)
    ? figure.offers.reduce((latest, offer) => {
      const parsed = Date.parse(offer?.lastUpdated || offer?.last_updated || offer?.updatedAt || offer?.checkedAt || "");
      return Number.isFinite(parsed) ? Math.max(latest, parsed) : latest;
    }, 0)
    : 0;
  if (latestOfferTime >= windowStart && latestOfferTime <= windowEnd) {
    return latestOfferTime;
  }

  return 0;
}

function releaseTime(figure) {
  if (typeof figure?.releaseTimestamp === "number") return figure.releaseTimestamp;
  if (hasBlockedPlaceholderRelease(figure)) return 0;
  const release = figureReleaseDateInfo(figure);
  return release ? release.date.getTime() : 0;
}

function verifiedPriceOffers(figure) {
  const offers = Array.isArray(figure?.offers) ? figure.offers : [];
  return offers.filter(offerHasVerifiedProductPrice);
}

function figureMetricCacheKey(figure) {
  return `${offerDisplayCurrency()}:${exchangeRateMeta.date || "fallback"}:${figure?.id || figureFallbackId(figure)}`;
}

function figureHasVerifiedPrice(figure) {
  return Number.isFinite(lowestVerifiedProductPrice(figure));
}

function lowestVerifiedProductPrice(figure) {
  const cacheKey = figureMetricCacheKey(figure);
  if (figurePriceCache.has(cacheKey)) return figurePriceCache.get(cacheKey);

  let lowestPrice = Infinity;
  const offers = Array.isArray(figure?.offers) ? figure.offers : [];
  offers.forEach((offer) => {
    if (!offerHasVerifiedProductPrice(offer)) return;
    const price = convertMoney(offer.productPrice, offer.currency || "EUR", offerDisplayCurrency());
    if (typeof price === "number" && Number.isFinite(price) && price < lowestPrice) {
      lowestPrice = price;
    }
  });

  figurePriceCache.set(cacheKey, lowestPrice);
  return lowestPrice;
}

function compareVerifiedProductPrice(a, b, direction = 1) {
  const priceA = lowestVerifiedProductPrice(a);
  const priceB = lowestVerifiedProductPrice(b);
  const knownA = Number.isFinite(priceA);
  const knownB = Number.isFinite(priceB);
  if (knownA !== knownB) return knownA ? -1 : 1;
  if (!knownA && !knownB) return 0;
  return (priceA - priceB) * direction;
}

function completeFigureRank(figure) {
  return figureHasVerifiedPrice(figure) ? 0 : 1;
}

function compareCompleteFigures(a, b) {
  return completeFigureRank(a) - completeFigureRank(b);
}

function curatedTrendingFigures() {
  if (trendingFigureIds) {
    const byId = new Map(figures.map((figure) => [figure.id, figure]));
    return trendingFigureIds.map((id) => byId.get(id)).filter(Boolean);
  }

  const picked = [];
  const seen = new Set();
  const source = discoverySourceFigures();

  TRENDING_SEARCH_TERMS.forEach((term) => {
    const matches = source
      .filter((figure) => !hasBlockedPlaceholderRelease(figure) && figureMatchesTerm(figure, term))
      .sort((a, b) => availabilityRank(a) - availabilityRank(b) || releaseTime(b) - releaseTime(a))
      .slice(0, 2);

    matches.forEach((figure) => {
      if (!seen.has(figure.id)) {
        seen.add(figure.id);
        picked.push(figure);
      }
    });
  });

  if (picked.length < INITIAL_CARD_LIMIT) {
    source
      .filter((figure) => !hasBlockedPlaceholderRelease(figure) && !seen.has(figure.id))
      .sort((a, b) => availabilityRank(a) - availabilityRank(b) || releaseTime(b) - releaseTime(a))
      .slice(0, INITIAL_CARD_LIMIT * 2)
      .forEach((figure) => {
        if (!seen.has(figure.id)) {
          seen.add(figure.id);
          picked.push(figure);
        }
      });
  }

  trendingFigureIds = picked.slice(0, INITIAL_CARD_LIMIT * 2).map((figure) => figure.id);
  return picked.slice(0, INITIAL_CARD_LIMIT * 2);
}

function categoryMatchesFigure(figure, isSearching) {
  const safeFigure = figure ?? {};
  if (isMangaCatalogue()) return true;
  if (isSearching && !state.strictCategory) return true;
  if (state.category === "trending") return true;

  const text = figureCategoryText(safeFigure);

  if (state.category === "new") {
    return newArrivalSortTime(safeFigure) > 0;
  }

  if (state.category === "nendoroids") {
    return text.includes("nendoroid");
  }

  if (state.category === "scale") {
    return text.includes("scale figure") || /1\/\d+/.test(safeFigure?.scale || "") || (safeFigure?.scale && safeFigure.scale !== "Non-scale");
  }

  if (state.category === "prize") {
    return text.includes("prize") || text.includes("kuji") || text.includes("lottery");
  }

  if (state.category === "figma") {
    return text.includes("figma");
  }

  if (state.category === "pop") {
    return text.includes("pop up parade") || text.includes("pop figure") || text.includes("pop! figure");
  }

  if (state.category === "action") {
    return text.includes("action figure") || text.includes("figuarts") || text.includes("revoltech");
  }

  if (state.category === "castoff") {
    return figurePublicMaturityLevel(safeFigure) === "adult_18";
  }

  if (state.category === "figuarts") {
    return text.includes("figuarts") || text.includes("s.h.figuarts") || text.includes("sh figuarts");
  }

  if (state.category === "bunny") {
    return text.includes("bunny") || text.includes("1/4") || text.includes("1 4") || text.includes("freeing");
  }

  if (state.category === "mecha") {
    return text.includes("mecha") || text.includes("robot") || text.includes("gundam");
  }

  if (state.category === "model") {
    return text.includes("model kit") || text.includes("plastic model") || text.includes("pla model") || text.includes("gunpla");
  }

  if (state.category === "statue") {
    return text.includes("statue") || text.includes("resin");
  }

  if (state.category === "preorder") {
    const availability = normalizeText(safeFigure?.availability);
    return availability.includes("pre order")
      || availability.includes("preorder")
      || text.includes("pre order")
      || text.includes("preorder")
      || text.includes("provisional pre order")
      || text.includes("tentative pre order");
  }

  return true;
}

function discoverySourceFigures() {
  return discoveryFigures.length
    ? discoveryFigures
    : figures.filter((figure) => isDisplayFigure(figure) && figureIsCatalogueReady(figure));
}

function promotionalFigures(limit = 10) {
  return discoverySourceFigures()
    .filter(isDisplayFigure)
    .map((figure) => ({ figure, total: lowestVerifiedProductPrice(figure) }))
    .filter((item) => Number.isFinite(item.total))
    .sort((a, b) => {
      return a.total - b.total || availabilityRank(a.figure) - availabilityRank(b.figure) || releaseTime(b.figure) - releaseTime(a.figure);
    })
    .map((item) => item.figure)
    .slice(0, limit);
}

function heroCharacterFigures() {
  const picked = [];
  const seen = new Set();
  const heroTerms = ["Miku", "Frieren", "Saber", "Makima", "Marin", "Asuka", "Power", "Gojo", "Madoka"];

  heroTerms.forEach((term) => {
    const match = figures
      .filter((figure) => isDisplayFigure(figure) && figureMatchesTerm(figure, term) && !seen.has(figure.id))
      .sort((a, b) => availabilityRank(a) - availabilityRank(b) || releaseTime(b) - releaseTime(a))[0];

    if (match) {
      seen.add(match.id);
      picked.push(match);
    }
  });

  if (picked.length < 8) {
    curatedTrendingFigures().forEach((figure) => {
      if (picked.length < 8 && !seen.has(figure.id)) {
        seen.add(figure.id);
        picked.push(figure);
      }
    });
  }

  return picked.slice(0, 8);
}

function renderHeroCharacters() {
  if (!els.heroCharacterBg || !catalogueReady) return;

  const characters = heroCharacterFigures();
  els.heroCharacterBg.innerHTML = characters
    .map(
      (figure) => `
        <figure class="hero-character">
          <img src="${escapeHtml(figure.image)}" alt="">
        </figure>
      `
    )
    .join("");
  els.heroCharacterBg.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => image.closest(".hero-character")?.remove(), { once: true });
  });
}

function renderHeroShowcase() {
  if (!els.heroShowcase || !catalogueReady) return;

  const featured = promotionalFigures(8);
  const loopedFeatured = featured.length > 3 ? [...featured, ...featured] : featured;
  els.heroShowcase.innerHTML = loopedFeatured.length
    ? loopedFeatured.map(renderHeroShowcaseCard).join("")
    : `
        <article class="storefront-slide storefront-slide-fallback">
          <div>
            <p class="eyebrow">NekoPrice</p>
            <h1>Search by figure</h1>
          </div>
        </article>
      `;

  els.heroShowcase.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => image.closest(".storefront-slide")?.remove(), { once: true });
  });
  startHeroShowcaseAutoscroll();
}

function renderHeroShowcaseCard(figure) {
  const best = bestOffer(figure);
  const total = best && typeof getOfferTotal(best) === "number" ? formatMoney(getOfferTotal(best), best.currency) : PRICE_FALLBACK;
  const productPrice = best ? formatOfferPrice(best) : PRICE_FALLBACK;
  const store = best ? providerName(best.provider) : STORE_ACTION_FALLBACK;
  const series = figure.series || figure.character || figure.manufacturer || "Anime figure";
  const name = compactFigureNameForCard(figure, 32);

  return `
    <button class="storefront-slide" type="button" data-hero-select="${escapeHtml(figure.id)}" aria-label="Open ${escapeHtml(figure.name)} offers">
      <span class="storefront-promo-badge">Deal</span>
      <span class="storefront-slide-image">
        <img src="${escapeHtml(premiumFigureImageFor(figure))}" alt="${escapeHtml(figure.name)}" loading="lazy">
      </span>
      <span class="storefront-slide-copy">
        <span class="storefront-slide-kicker">${escapeHtml(series)}</span>
        <strong>${escapeHtml(name)}</strong>
        <span class="storefront-slide-store">${escapeHtml(store)}</span>
        <span class="storefront-slide-meta">
          <span>
            <small>Product price</small>
            <b>${escapeHtml(productPrice)}</b>
          </span>
          <span>
            <small>Known total</small>
            <b>${escapeHtml(total)}</b>
          </span>
        </span>
        <span class="storefront-slide-action">View offer</span>
      </span>
    </button>
  `;
}

function startHeroShowcaseAutoscroll() {
  if (!els.heroShowcase) return;
  if (heroShowcaseAutoScrollId) {
    window.cancelAnimationFrame(heroShowcaseAutoScrollId);
    heroShowcaseAutoScrollId = null;
  }
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  let previousTimestamp = 0;
  const speed = 0.018;

  const tick = (timestamp) => {
    const track = els.heroShowcase;
    if (!track) return;
    if (!previousTimestamp) previousTimestamp = timestamp;
    const delta = Math.min(timestamp - previousTimestamp, 48);
    previousTimestamp = timestamp;

    if (!heroShowcasePaused && track.scrollWidth > track.clientWidth + 4) {
      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollLeft += delta * speed;
      if (track.scrollLeft >= maxScroll - 2) {
        track.scrollTo({ left: 0, behavior: "auto" });
      }
    }

    heroShowcaseAutoScrollId = window.requestAnimationFrame(tick);
  };

  heroShowcaseAutoScrollId = window.requestAnimationFrame(tick);
}

async function loadPromotionsCarousel() {
  if (!els.promotionsTrack) return;
  renderPromotionsCarousel();
}

function renderPromotionsCarousel() {
  if (!els.promotionsTrack) return;
  els.promotionsTrack.innerHTML = POPULAR_SERIES_TILES.map(renderPopularSeriesCard).join("");
  els.promotionsTrack.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest(".popular-series-image")?.classList.add("is-empty");
      image.remove();
    }, { once: true });
  });
  window.requestAnimationFrame(updatePopularSeriesControls);
}

function popularSeriesCandidates(series, limit = 3) {
  const normalizedSeries = normalizePopularSeriesFilter(series);
  if (!normalizedSeries || !catalogueReady) return [];
  return seriesFilterSourceFigures(normalizedSeries)
    .sort((a, b) =>
      compareCompleteFigures(a, b)
      || availabilityRank(a) - availabilityRank(b)
      || releaseTime(b) - releaseTime(a)
    )
    .slice(0, limit);
}

function renderPopularSeriesCard(series) {
  const normalizedSeries = normalizePopularSeriesFilter(series);
  const count = catalogueReady ? seriesFilterSourceFigures(normalizedSeries).length : 0;
  const imageMarkup = normalizedSeries.image
    ? `
      <span class="popular-series-image popular-series-image-main popular-series-image-cover">
        <img class="popular-series-backdrop" src="${escapeHtml(normalizedSeries.image)}" alt="" loading="lazy" decoding="async" aria-hidden="true">
        <img class="popular-series-foreground" src="${escapeHtml(normalizedSeries.image)}" alt="${escapeHtml(normalizedSeries.label)} series key art" loading="lazy" decoding="async">
      </span>
    `
    : `<span class="popular-series-image popular-series-image-main is-empty" aria-hidden="true"><b>${escapeHtml(normalizedSeries.label)}</b></span>`;
  const countLabel = catalogueReady
    ? count > 0
      ? `${formatDatabaseNumber(count)} figure${count === 1 ? "" : "s"} ready`
      : "Explore series"
    : "Loading figures";

  return `
    <button
      type="button"
      class="popular-series-card"
      data-popular-series="${escapeHtml(normalizedSeries.id)}"
      style="--series-accent: ${escapeHtml(normalizedSeries.accent)}"
      aria-label="Compare ${escapeHtml(normalizedSeries.label)} figures"
    >
      <span class="popular-series-art" aria-hidden="true">
        ${imageMarkup}
      </span>
      <span class="popular-series-copy">
        <small>Compare figures</small>
        <strong>${escapeHtml(normalizedSeries.label)}</strong>
        <span>${escapeHtml(countLabel)}</span>
      </span>
    </button>
  `;
}

function renderPromoPopTile(tile) {
  const layoutClass = tile.layout === "tall" ? " promo-pop-card-tall" : "";
  const action = tile.section
    ? `data-promo-section="${escapeHtml(tile.section)}"`
    : tile.advisor
      ? `data-promo-advisor="${escapeHtml(tile.advisor)}"`
      : tile.category
        ? `data-promo-category="${escapeHtml(tile.category)}"`
        : `data-promo-query="${escapeHtml(tile.query || tile.label)}"`;
  return `
    <button type="button" class="promo-pop-card${layoutClass}" ${action} aria-label="${escapeHtml(tile.label)}">
      <span class="promo-pop-media" aria-hidden="true">
        <img class="promo-pop-image" src="${escapeHtml(tile.src)}" alt="" loading="lazy" decoding="async">
      </span>
    </button>
  `;
}

function promotionFigureById(promotionId) {
  if (!promotionId) return null;
  return figures.find((figure) => figure.id === promotionId || janForFigure(figure) === promotionId || figure.sku === promotionId || figure.jan === promotionId) || null;
}

function renderPromotionsCarouselCard(promotion) {
  const discount = Math.round(Number(promotion.discountPercentage) || 0);
  const discountLabel = promotion.discountLabel || (discount > 0 ? `-${discount}%` : "SALE");
  const title = String(promotion.title || "NekoPrice deal");
  const relatedFigure = promotionFigureById(promotion.id || promotion.jan || "");
  const shortTitle = compactFigureNameForCard(relatedFigure?.name || title, 26);
  const sourceCurrency = promotion.currency || "JPY";
  const displayCurrency = offerDisplayCurrency();
  const displayPrice = convertMoney(promotion.productPrice, sourceCurrency, displayCurrency) ?? promotion.productPrice;
  const displayPrevious = promotion.previousPrice
    ? convertMoney(promotion.previousPrice, sourceCurrency, displayCurrency) ?? promotion.previousPrice
    : null;
  const price = formatMoney(displayPrice, displayCurrency, PRICE_FALLBACK);
  const previous = displayPrevious ? formatMoney(displayPrevious, displayCurrency, "") : "";
  const subtitle = [promotion.series, promotion.manufacturer].filter(Boolean).join(" / ") || "Figure deal";
  const provider = promotion.provider || "Trusted store";
  const targetId = promotion.id || promotion.jan || "";
  const url = promotion.productUrl || "#";

  return `
    <article class="deal-carousel-card">
      <button type="button" class="deal-carousel-open" data-promotion-id="${escapeHtml(targetId)}" data-promotion-url="${escapeHtml(url)}" aria-label="Open deal for ${escapeHtml(title)}">
        <span class="deal-discount-badge">${escapeHtml(discountLabel)}</span>
        <span class="deal-goodsmile-strip">Good Smile Company Bonus</span>
        <span class="deal-image-wrap">
          <img src="${escapeHtml(promotion.image)}" alt="${escapeHtml(title)}" loading="lazy">
        </span>
        <span class="deal-carousel-copy">
          <span class="deal-carousel-kicker">${escapeHtml(provider)}</span>
          <strong>${escapeHtml(shortTitle)}</strong>
          <span>${escapeHtml(subtitle)}</span>
          <span class="deal-price-row">
            ${previous ? `<del>${escapeHtml(previous)}</del>` : ""}
            <b>${escapeHtml(price)}</b>
          </span>
          <span class="deal-carousel-cta">View offer</span>
        </span>
      </button>
    </article>
  `;
}

function promotionPriceEur(rawPromotion) {
  const direct = numberOrNull(rawPromotion?.priceEur);
  if (direct !== null) return direct;
  const productPrice = numberOrNull(rawPromotion?.productPrice);
  if (productPrice === null) return null;
  return convertMoney(productPrice, rawPromotion?.currency || "EUR", "EUR") ?? productPrice;
}

function normalizePromotion(rawPromotion) {
  const raw = rawPromotion ?? {};
  const provider = offerProviderId(raw) || providerIdForOffer(raw.provider || raw.store || "", raw.productUrl || raw.url || "");
  const productUrl = raw.productUrl || raw.url || raw.rawUrl || "";
  const priceEur = promotionPriceEur(raw);
  const previousEur = raw.previousPrice !== null && raw.previousPrice !== undefined
    ? convertMoney(raw.previousPrice, raw.currency || "EUR", "EUR") ?? numberOrNull(raw.previousPrice)
    : null;
  const title = String(raw.title || raw.name || "NekoPrice deal").trim();
  const category = String(raw.category || salesCategoryForPromotion({ ...raw, title })).trim().toLowerCase() || "figures";
  const id = raw.id || `${raw.jan || title}-${provider || "store"}`;
  return {
    id: String(id),
    jan: String(raw.jan || "").replace(/\D/g, ""),
    title,
    image: raw.image || raw.image_url || raw.imageUrl || "",
    provider,
    store: provider,
    storeName: raw.storeName || providerName(provider),
    productUrl,
    affiliateUrl: raw.affiliateUrl || injectAffiliateLink(productUrl, provider),
    priceEur,
    previousEur,
    currency: "EUR",
    discountPercentage: numberOrNull(raw.discountPercentage) || 0,
    discountExact: numberOrNull(raw.discountExact) || numberOrNull(raw.discountPercentage) || 0,
    discountLabel: raw.discountLabel || "",
    source: raw.source || "promotion",
    reason: raw.reason || "",
    verificationStatus: raw.verificationStatus || "",
    isVerifiedPromotion: raw.isVerifiedPromotion === true,
    validationStatus: raw.validationStatus || "",
    category,
    storesCompared: numberOrNull(raw.storesCompared) || 1,
    score: numberOrNull(raw.score) || 0,
    lastUpdated: raw.lastUpdated || raw.generatedAt || "",
    searchText: normalizeText([
      title,
      raw.jan,
      raw.storeName,
      providerName(provider),
      raw.provider,
      raw.store,
      raw.category,
      raw.reason,
      raw.source
    ].join(" "))
  };
}

function salesCategoryForPromotion(promotion) {
  const text = normalizeText([promotion?.title, promotion?.category, promotion?.source].join(" "));
  if (text.includes("nendoroid")) return "nendoroids";
  if (text.includes("figma")) return "figma";
  if (text.includes("pop up parade") || text.includes("pop")) return "pop-up parade";
  if (text.includes("prize") || text.includes("kuji") || text.includes("lottery")) return "prize figures";
  if (text.includes("scale") || /\b1\s*\d+\b/.test(text)) return "scale figures";
  if (text.includes("action") || text.includes("figuarts") || text.includes("revoltech")) return "action figures";
  if (text.includes("statue") || text.includes("resin")) return "statues";
  return "figures";
}

async function fetchPromotionsJson(url) {
  const response = await fetch(catalogueRequestUrl(url), { cache: "no-store" });
  if (!response.ok) throw new Error(`Promotions failed (${response.status}) at ${url}`);
  return response.json();
}

async function loadPromotionsFeed(forceReload = false) {
  if (promotionsLoaded && !forceReload) return promotionsCache;
  if (promotionsLoadingPromise && !forceReload) return promotionsLoadingPromise;

  promotionsLoadingPromise = (async () => {
    let data = null;
    try {
      data = window.location.protocol !== "file:"
        ? await fetchPromotionsJson(PROMOTIONS_API_URL)
        : await fetchPromotionsJson(PROMOTIONS_URL);
    } catch (apiError) {
      try {
        data = await fetchPromotionsJson(PROMOTIONS_URL);
      } catch (fallbackError) {
        console.warn("NekoPrice promotions feed unavailable", apiError, fallbackError);
        data = { promotions: [] };
      }
    }

    const rawPromotions = Array.isArray(data)
      ? data
      : Array.isArray(data?.promotions)
        ? data.promotions
        : [];
    promotionsCache = rawPromotions
      .map(normalizePromotion)
      .filter((promotion) =>
        promotion.title
        && isUsableFigureImage(promotion.image)
        && isDirectProductUrl(promotion.provider, promotion.affiliateUrl || promotion.productUrl)
        && promotion.priceEur !== null
        && promotion.isVerifiedPromotion
        && promotion.source !== "market_gap"
        && !["rejected", "fake", "suspicious", "gone"].includes(String(promotion.validationStatus || "").toLowerCase())
        && (
          ["price_drop", "store_sale"].includes(promotion.source)
          || (promotion.previousEur && promotion.previousEur > promotion.priceEur)
        )
      );
    promotionFigureKeys = new Set(
      promotionsCache
        .flatMap((promotion) => [promotion.id, promotion.jan])
        .map((value) => String(value || "").trim())
        .filter(Boolean)
    );
    promotionsLoaded = true;
    populateSalesFilters();
    if (activeView === "sales") renderSalesSection();
    return promotionsCache;
  })();

  try {
    return await promotionsLoadingPromise;
  } finally {
    promotionsLoadingPromise = null;
  }
}

function salesPriceLabel() {
  const currency = offerDisplayCurrency();
  const displayMin = convertMoney(salesState.minPrice, "EUR", currency) ?? salesState.minPrice;
  const displayMax = convertMoney(salesState.maxPrice, "EUR", currency) ?? salesState.maxPrice;
  return `${formatMoney(displayMin, currency)} – ${formatMoney(displayMax, currency)}`;
}

function salesCategoryLabel(category) {
  const normalized = String(category || "").trim().toLowerCase();
  const labels = {
    figma: "Figma",
    figures: "Figures",
    nendoroids: "Nendoroids",
    "pop-up parade": "Pop Up Parade"
  };
  return labels[normalized] || normalized.replace(/\b\w/g, (character) => character.toUpperCase());
}

function syncSalesFilterControls() {
  if (els.salesSearchInput) els.salesSearchInput.value = salesState.query;
  if (els.salesStoreFilter) els.salesStoreFilter.value = salesState.store;
  if (els.salesCategoryFilter) els.salesCategoryFilter.value = salesState.category;
  const activeQuickFilters = new Set(
    (Array.isArray(salesState.quickFilters) ? salesState.quickFilters : [])
      .filter((key) => Object.prototype.hasOwnProperty.call(SALES_QUICK_FILTER_LABELS, key))
  );
  els.salesQuickFilters?.querySelectorAll("[data-sales-quick-filter]").forEach((input) => {
    input.checked = activeQuickFilters.has(input.dataset.salesQuickFilter);
  });
  const priceRange = normalizeDualPriceRangeValues(salesState.minPrice, salesState.maxPrice, SALES_PRICE_MAX_EUR);
  salesState.minPrice = priceRange.min;
  salesState.maxPrice = priceRange.max;
  syncDualPriceRangeControl(
    els.salesPriceRangeControl,
    els.salesPriceRangeMin,
    els.salesPriceRange,
    salesState.minPrice,
    salesState.maxPrice,
    SALES_PRICE_MAX_EUR
  );
  if (els.salesPriceValue) els.salesPriceValue.textContent = salesPriceLabel();
  if (els.salesSortFilter) els.salesSortFilter.value = salesState.sort;
}

function populateSalesFilters() {
  const currentStore = salesState.store;
  const currentCategory = salesState.category;
  const stores = [...new Map(promotionsCache.map((promotion) => [promotion.provider, promotion.storeName || providerName(promotion.provider)])).entries()]
    .filter(([id]) => id)
    .sort((a, b) => a[1].localeCompare(b[1], "en", { sensitivity: "base" }));
  const categories = [...new Set(promotionsCache.map((promotion) => promotion.category).filter(Boolean))]
    .sort((left, right) => salesCategoryLabel(left).localeCompare(salesCategoryLabel(right), "en", { sensitivity: "base" }));

  if (els.salesStoreFilter) {
    els.salesStoreFilter.innerHTML = [
      `<option value="all">All stores</option>`,
      ...stores.map(([id, name]) => `<option value="${escapeHtml(id)}" data-i18n-skip>${escapeHtml(name)}</option>`)
    ].join("");
  }
  if (els.salesCategoryFilter) {
    els.salesCategoryFilter.innerHTML = [
      `<option value="all">All categories</option>`,
      ...categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(salesCategoryLabel(category))}</option>`)
    ].join("");
  }
  salesState.store = stores.some(([id]) => id === currentStore) ? currentStore : "all";
  salesState.category = categories.includes(currentCategory) ? currentCategory : "all";
  syncSalesFilterControls();
}

function promotionMatchesSalesQuickFilter(promotion, filterKey) {
  const discount = Number(promotion?.discountExact || promotion?.discountPercentage || 0);
  if (filterKey === "price_drop") {
    return promotion?.source === "price_drop"
      || (Number.isFinite(promotion?.previousEur) && promotion.previousEur > promotion.priceEur);
  }
  if (filterKey === "store_sale") return promotion?.source === "store_sale";
  if (filterKey === "discount_20") return discount >= 20;
  if (filterKey === "discount_40") return discount >= 40;
  if (filterKey === "local_store") return isLocalProvider(promotion?.provider);
  if (filterKey === "recent") {
    const checkedAt = parseOfferTimestamp(promotion?.lastUpdated || "");
    const age = checkedAt ? Date.now() - checkedAt : Number.POSITIVE_INFINITY;
    return age >= 0 && age <= 30 * 86400000;
  }
  return false;
}

function promotionMatchesSalesQuickFilters(promotion) {
  const activeQuickFilters = (Array.isArray(salesState.quickFilters) ? salesState.quickFilters : [])
    .filter((key) => Object.prototype.hasOwnProperty.call(SALES_QUICK_FILTER_LABELS, key));
  return !activeQuickFilters.length
    || activeQuickFilters.some((filterKey) => promotionMatchesSalesQuickFilter(promotion, filterKey));
}

function promotionMatchesSalesFilters(promotion) {
  if (!promotion) return false;
  const queryTokens = tokenize(salesState.query);
  const queryMatch = !queryTokens.length || queryTokens.every((token) => promotion.searchText.includes(token));
  const storeMatch = salesState.store === "all" || promotion.provider === salesState.store;
  const categoryMatch = salesState.category === "all" || promotion.category === salesState.category;
  const priceMatch = promotion.priceEur === null
    || (promotion.priceEur >= salesState.minPrice && promotion.priceEur <= salesState.maxPrice);
  return queryMatch && storeMatch && categoryMatch && priceMatch && promotionMatchesSalesQuickFilters(promotion);
}

function sortedSalesPromotions(items) {
  return [...items].sort((a, b) => {
    if (salesState.sort === "discount") {
      return (b.discountExact - a.discountExact) || (b.score - a.score) || (a.priceEur - b.priceEur);
    }
    if (salesState.sort === "price") {
      return (a.priceEur - b.priceEur) || (b.score - a.score);
    }
    if (salesState.sort === "newest") {
      return String(b.lastUpdated || "").localeCompare(String(a.lastUpdated || "")) || (b.score - a.score);
    }
    return (b.score - a.score) || (b.discountExact - a.discountExact) || (a.priceEur - b.priceEur);
  });
}

function salesSourceLabel(source) {
  if (source === "price_drop") return "Price drop";
  if (source === "store_sale") return "Store sale";
  return "Promo";
}

function renderSalesPromotionCard(promotion) {
  const displayCurrency = offerDisplayCurrency();
  const price = convertMoney(promotion.priceEur, "EUR", displayCurrency) ?? promotion.priceEur;
  const previous = promotion.previousEur
    ? convertMoney(promotion.previousEur, "EUR", displayCurrency) ?? promotion.previousEur
    : null;
  const title = compactFigureNameForCard(promotion.title, 78);
  const discount = Math.round(promotion.discountPercentage || promotion.discountExact || 0);
  const discountLabel = promotion.discountLabel || (discount > 0 ? `-${discount}%` : "SALE");
  const reason = promotion.reason || salesSourceLabel(promotion.source);
  const url = promotion.affiliateUrl || promotion.productUrl;
  const relatedFigure = promotionFigureById(promotion.jan || promotion.id);

  return `
    <article class="sales-card" role="link" tabindex="0" data-sales-url="${escapeHtml(url)}" aria-label="Open offer ${escapeHtml(promotion.title)}">
      <div class="sales-card-image">
        <img src="${escapeHtml(promotion.image)}" alt="${escapeHtml(promotion.title)}" loading="lazy" decoding="async">
        <span class="sales-discount-badge">${escapeHtml(discountLabel)}</span>
      </div>
      <div class="sales-card-copy">
        <div class="sales-card-topline">
          <span>${escapeHtml(salesSourceLabel(promotion.source))}</span>
          <small data-i18n-skip>${escapeHtml(promotion.storeName || providerName(promotion.provider))}</small>
        </div>
        <h3 data-i18n-skip>${escapeHtml(title)}</h3>
        <p>${escapeHtml(reason)}</p>
        <div class="sales-price-row">
          ${previous ? `<del>${escapeHtml(formatMoney(previous, displayCurrency))}</del>` : ""}
          <strong>${escapeHtml(formatMoney(price, displayCurrency))}</strong>
        </div>
        <div class="sales-card-actions">
          ${relatedFigure ? `<button type="button" class="secondary-button" data-sales-figure="${escapeHtml(relatedFigure.id)}">Compare</button>` : ""}
          <a href="${escapeHtml(url)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-offer-link="external">View offer</a>
        </div>
      </div>
    </article>
  `;
}

function renderSalesSection() {
  if (!els.salesSection || !els.salesGrid) return;
  syncSalesFilterControls();

  if (!promotionsLoaded) {
    if (els.salesMeta) els.salesMeta.textContent = "Loading promotions...";
    if (els.salesStatus) els.salesStatus.textContent = "Loading promotions...";
    els.salesGrid.innerHTML = emptyState("Loading sales", "Checking in-stock promotions.");
    return;
  }

  const matches = sortedSalesPromotions(promotionsCache.filter(promotionMatchesSalesFilters));
  if (els.salesMeta) {
    els.salesMeta.textContent = `${matches.length} promotion${matches.length === 1 ? "" : "s"}`;
  }
  if (els.salesStatus) {
    const query = salesState.query ? ` matching "${salesState.query}"` : "";
    els.salesStatus.textContent = matches.length
      ? `Showing ${matches.length} real store promo${matches.length === 1 ? "" : "s"}${query}.`
      : "No sales match these filters.";
  }

  els.salesGrid.innerHTML = matches.length
    ? matches.map(renderSalesPromotionCard).join("")
    : emptyState("No sales found", "Try another store, category, or price.");
  els.salesGrid.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => image.closest(".sales-card")?.remove(), { once: true });
  });
}

function showSalesSection(shouldScroll = true) {
  activeView = "sales";
  document.body.classList.add("sales-open");
  document.body.classList.remove("figure-catalog-open");
  state.catalogStandalone = false;
  state.figuresOnly = false;
  state.catalogKind = "all";
  state.figureCatalogLabel = "";
  state.multiStoreOnly = false;
  setResultsDisplayMode("");
  setDiscoverySectionsVisible(false);
  if (els.promotionsSection) els.promotionsSection.hidden = true;
  if (els.homeSection) els.homeSection.hidden = true;
  if (els.newArrivalsSection) els.newArrivalsSection.hidden = true;
  if (els.categorySection) els.categorySection.hidden = true;
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideTaxonomySection();
  hideCommunitySection();
  if (els.resultsSection) els.resultsSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  if (els.salesSection) els.salesSection.hidden = false;
  renderSalesSection();
  loadPromotionsFeed();
  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.salesSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function taxonomyConfig(type = taxonomyState.type) {
  return TAXONOMY_BROWSER_CONFIG[type] || TAXONOMY_BROWSER_CONFIG.franchises;
}

function taxonomyDisplayValue(value) {
  return cleanFigureTitleText(String(value || ""))
    .replace(/\s+/g, " ")
    .trim();
}

function taxonomyValueIsUseful(value) {
  const text = taxonomyDisplayValue(value);
  if (!text || text.length < 2 || text.length > 80) return false;
  if (/^jan\s*\d+$/i.test(text) || /^\d{12,13}$/.test(text)) return false;
  return isUsefulCharacterName(text);
}

function taxonomyInitial(value) {
  const first = String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .charAt(0)
    .toUpperCase();
  return /^[A-Z]$/.test(first) ? first : "#";
}

function taxonomySourceFigures() {
  const source = discoveryFigures.length ? discoveryFigures : figures;
  return source.filter((figure) => isDisplayFigure(figure) && figureIsCatalogueReady(figure));
}

function taxonomyEntries(type = taxonomyState.type) {
  const source = taxonomySourceFigures();
  if (taxonomyEntryCache.sourceSize === source.length && Array.isArray(taxonomyEntryCache[type])) {
    return taxonomyEntryCache[type];
  }

  const config = taxonomyConfig(type);
  const byKey = new Map();
  source.forEach((figure) => {
    const rawValue = figure?.[config.field];
    const values = Array.isArray(rawValue) ? rawValue : [rawValue];
    values.forEach((value) => {
      const label = taxonomyDisplayValue(value);
      if (!taxonomyValueIsUseful(label)) return;
      const key = normalizeText(label);
      if (!key) return;
      const current = byKey.get(key);
      if (current) {
        current.count += 1;
      } else {
        byKey.set(key, { label, count: 1, letter: taxonomyInitial(label) });
      }
    });
  });
  const entries = [...byKey.values()].sort((a, b) =>
    a.letter.localeCompare(b.letter, "en", { numeric: true })
    || a.label.localeCompare(b.label, "en", { sensitivity: "base", numeric: true })
  );
  taxonomyEntryCache = {
    ...taxonomyEntryCache,
    sourceSize: source.length,
    [type]: entries
  };
  return entries;
}

function taxonomyApiUrl(type = taxonomyState.type) {
  const params = new URLSearchParams({ type });
  return `${TAXONOMY_API_URL}?${params.toString()}`;
}

function normalizeRemoteTaxonomyEntry(entry) {
  const label = taxonomyDisplayValue(entry?.label || entry?.name || entry?.value || "");
  if (!taxonomyValueIsUseful(label)) return null;
  const count = Number(entry?.count);
  return {
    label,
    count: Number.isFinite(count) && count > 0 ? Math.floor(count) : 1,
    letter: /^[A-Z#]$/.test(String(entry?.letter || "")) ? String(entry.letter) : taxonomyInitial(label)
  };
}

function requestTaxonomyEntries(type = taxonomyState.type) {
  if (window.location.protocol === "file:") return;
  if (Array.isArray(taxonomyRemoteCache[type]) || taxonomyRemotePromises[type]) return;

  const installTaxonomyPayload = (payload) => {
    const rawEntries = Array.isArray(payload?.entries)
      ? payload.entries
      : Array.isArray(payload?.[type])
        ? payload[type]
        : [];
    const entries = rawEntries.map(normalizeRemoteTaxonomyEntry).filter(Boolean);
    taxonomyRemoteCache[type] = entries.sort((a, b) =>
      a.letter.localeCompare(b.letter, "en", { numeric: true })
      || a.label.localeCompare(b.label, "en", { sensitivity: "base", numeric: true })
    );
    if (activeView === "taxonomy" && taxonomyState.type === type) {
      renderTaxonomyBrowser();
    }
  };

  taxonomyRemotePromises[type] = fetch(catalogueRequestUrl(TAXONOMY_FALLBACK_URL), { cache: "force-cache" })
    .then((response) => {
      if (!response.ok) throw new Error(`Could not load taxonomy fallback (${response.status})`);
      return response.json();
    })
    .then(installTaxonomyPayload)
    .catch((error) => {
      console.warn("NekoPrice taxonomy static fallback failed", error);
      return fetch(catalogueRequestUrl(taxonomyApiUrl(type)), { cache: "force-cache" })
        .then((response) => {
          if (!response.ok) throw new Error(`Could not load taxonomy (${response.status})`);
          return response.json();
        })
        .then(installTaxonomyPayload)
        .catch((apiError) => {
          console.warn("NekoPrice taxonomy API fallback failed", apiError);
        });
    })
    .finally(() => {
      taxonomyRemotePromises[type] = null;
    });
}

function taxonomyEntriesForRender(type = taxonomyState.type) {
  const remoteEntries = taxonomyRemoteCache[type];
  if (Array.isArray(remoteEntries)) {
    return { entries: remoteEntries, source: "remote", loading: false };
  }

  requestTaxonomyEntries(type);
  return {
    entries: catalogueReady ? taxonomyEntries(type) : [],
    source: "local",
    loading: Boolean(taxonomyRemotePromises[type])
  };
}

function groupedTaxonomyEntries(entries) {
  const groups = new Map();
  entries.forEach((entry) => {
    if (!groups.has(entry.letter)) groups.set(entry.letter, []);
    groups.get(entry.letter).push(entry);
  });
  return [...groups.entries()].sort(([a], [b]) => {
    if (a === "#") return -1;
    if (b === "#") return 1;
    return a.localeCompare(b, "en");
  });
}

function renderTaxonomyBrowser() {
  if (!els.taxonomySection || !els.taxonomyGrid) return;
  const config = taxonomyConfig();
  const query = taxonomyState.query.trim();
  const queryTokens = tokenize(query);

  if (els.taxonomyEyebrow) els.taxonomyEyebrow.textContent = config.eyebrow;
  if (els.taxonomyTitle) els.taxonomyTitle.textContent = config.title;
  if (els.taxonomySubtitle) els.taxonomySubtitle.textContent = config.subtitle;
  if (els.taxonomySearchInput && els.taxonomySearchInput.value !== taxonomyState.query) {
    els.taxonomySearchInput.value = taxonomyState.query;
  }

  const taxonomyResult = taxonomyEntriesForRender(taxonomyState.type);
  if (taxonomyResult.loading && !taxonomyResult.entries.length) {
    if (els.taxonomyMeta) els.taxonomyMeta.textContent = "Loading index...";
    if (els.taxonomyAlphaNav) els.taxonomyAlphaNav.innerHTML = "";
    els.taxonomyGrid.innerHTML = emptyState("Loading index", "Loading index");
    return;
  }

  if (!catalogueReady && taxonomyResult.source !== "remote") {
    if (els.taxonomyMeta) els.taxonomyMeta.textContent = "Loading index...";
    if (els.taxonomyAlphaNav) els.taxonomyAlphaNav.innerHTML = "";
    els.taxonomyGrid.innerHTML = emptyState("Loading index", "Loading index");
    return;
  }

  const allEntries = taxonomyResult.entries;
  const filteredEntries = queryTokens.length
    ? allEntries.filter((entry) => queryTokens.every((token) => normalizeText(entry.label).includes(token)))
    : allEntries;
  const groups = groupedTaxonomyEntries(filteredEntries);
  const itemWord = config.itemLabel;
  if (els.taxonomyMeta) {
    els.taxonomyMeta.textContent = `${filteredEntries.length} ${itemWord}${filteredEntries.length === 1 ? "" : "s"}`;
  }

  if (els.taxonomyAlphaNav) {
    els.taxonomyAlphaNav.innerHTML = groups.map(([letter]) =>
      `<button type="button" data-taxonomy-letter="${escapeHtml(letter)}">${escapeHtml(letter)}</button>`
    ).join("");
  }

  if (!groups.length) {
    els.taxonomyGrid.innerHTML = emptyState("No entries found", "Try another name.");
    return;
  }

  els.taxonomyGrid.innerHTML = groups.map(([letter, entries]) => `
    <section class="taxonomy-letter-group" id="taxonomy-letter-${escapeHtml(letter === "#" ? "number" : letter)}">
      <h3>${escapeHtml(letter)}</h3>
      <ul>
        ${entries.map((entry) => `
          <li>
            <button type="button" data-taxonomy-query="${escapeHtml(entry.label)}" title="${escapeHtml(`${entry.count} figure${entry.count === 1 ? "" : "s"}`)}">
              ${escapeHtml(entry.label)}
            </button>
          </li>
        `).join("")}
      </ul>
    </section>
  `).join("");
}

async function showTaxonomyBrowser(type = "franchises", shouldScroll = true) {
  taxonomyState.type = TAXONOMY_BROWSER_CONFIG[type] ? type : "franchises";
  taxonomyState.query = "";
  activeView = "taxonomy";
  document.body.classList.add("taxonomy-open");
  document.body.classList.remove("figure-catalog-open");
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideCommunitySection();
  setDiscoverySectionsVisible(false);
  setResultsDisplayMode("");
  if (els.resultsSection) els.resultsSection.hidden = true;
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  if (els.taxonomySection) els.taxonomySection.hidden = false;
  renderTaxonomyBrowser();
  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.taxonomySection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  const hash = taxonomyConfig().hash;
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}${hash}`);
  }
}

function openTaxonomyEntry(label) {
  const query = String(label || "").trim();
  if (!query) return;
  const suffix = taxonomyState.type === "characters" ? "character figures" : "franchise figures";
  openFigureCatalogue({
    query,
    category: figureCategoryForHeaderQuery(query),
    label: `${query} ${suffix}`
  }, true);
}

function flattenedHighlightOffer(rawHighlight) {
  const raw = rawHighlight ?? {};
  const provider = raw.store || raw.provider || raw.providerId || "";
  const productUrl = raw.productUrl || raw.url || raw.product_url || raw.link || "";
  const productPrice = raw.priceEur ?? raw.productPrice ?? raw.priceAmount ?? raw.price;
  if (!provider && !productUrl && (productPrice === null || productPrice === undefined || productPrice === "")) return null;

  return {
    provider,
    productUrl,
    productPrice,
    price: productPrice,
    currency: raw.priceEur !== undefined ? "EUR" : raw.currency || raw.priceCurrency || "JPY",
    availability: raw.availability || "Available",
    condition: raw.condition || "New",
    confidence: raw.confidence || "High",
    shipsToCountry: raw.shipsToCountry !== false,
    linkType: raw.linkType || "product"
  };
}

function normalizeHighlightFigure(rawHighlight) {
  const raw = rawHighlight ?? {};
  const rawOffers = Array.isArray(raw.offers) ? raw.offers : [];
  const flattenedOffer = flattenedHighlightOffer(raw);
  const offers = rawOffers.length ? rawOffers : flattenedOffer ? [flattenedOffer] : [];
  const patchedFigure = {
    ...raw,
    id: raw.id || raw.jan || raw.sku || undefined,
    sku: raw.sku || raw.jan || raw.id || "",
    name: raw.name || raw.title || raw.jan || "Untitled figure",
    title: raw.title || raw.name || raw.jan || "Untitled figure",
    image: raw.image || raw.image_url || raw.imageUrl || raw.thumbnail || "",
    productUrl: raw.productUrl || raw.url || raw.product_url || "",
    offers
  };
  const figure = normalizeFigure(patchedFigure);
  const hasRenderableHighlightOffer = figure.offers.some(
    (offer) => ["amiami", "goodsmile"].includes(offer.provider) && offerHasVerifiedProductPrice(offer)
  );

  if (!hasRenderableHighlightOffer && flattenedOffer) {
    const normalizedFlattenedOffer = normalizeOffer(flattenedOffer);
    if (offerHasVerifiedProductPrice(normalizedFlattenedOffer)) {
      figure.offers = [normalizedFlattenedOffer, ...figure.offers];
    }
  }

  figure.store = raw.store || flattenedOffer?.provider || "";
  figure.price = numberOrNull(raw.price ?? raw.productPrice ?? flattenedOffer?.productPrice);
  figure.highlightTag = String(raw.tag || "").toUpperCase() === "TRENDING" ? "TRENDING" : "NEW";
  figure.highlightPriceEur = numberOrNull(raw.priceEur);
  figure.highlightDiscountPercentage = numberOrNull(raw.discountPercentage);
  figure.currency = raw.currency || flattenedOffer?.currency || "JPY";
  figure.image_url = raw.image_url || raw.image || raw.imageUrl || raw.thumbnail || figure.image || "";
  figure.product_url = raw.product_url || raw.productUrl || raw.url || flattenedOffer?.productUrl || figure.productUrl || "";

  return figure;
}

function catalogueHighlightFallback() {
  return figures
    .map((figure, index) => ({ figure, index }))
    .filter((item) => highlightOffer(item.figure) && newArrivalSortTime(item.figure) > 0)
    .sort((a, b) => (newArrivalSortTime(b.figure) - newArrivalSortTime(a.figure)) || (releaseTime(b.figure) - releaseTime(a.figure)) || (b.index - a.index))
    .slice(0, HIGHLIGHTS_LIMIT)
    .map((item) => item.figure);
}

async function loadHighlights() {
  if (!els.newArrivalsGrid) return;
  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeoutId = controller ? window.setTimeout(() => controller.abort(), 6000) : null;

  try {
    const highlightsUrl = catalogueRequestUrl(HIGHLIGHTS_URL);
    console.log("NekoPrice highlights fetch", highlightsUrl);
    const response = await fetch(highlightsUrl, { cache: "no-store", signal: controller?.signal });
    if (!response.ok) throw new Error(`Highlights failed (${response.status}) at ${highlightsUrl}`);
    const data = await response.json();
    const rawHighlights = Array.isArray(data) ? data : Array.isArray(data?.highlights) ? data.highlights : [];
    if (!rawHighlights.length) {
      console.log("NekoPrice highlights feed vazio ou schema invalido", data);
    }
    const normalizedHighlights = rawHighlights.map(normalizeHighlightFigure).filter((figure) => figure.id);
    const renderableCount = normalizedHighlights.filter((figure) => highlightOffer(figure)).length;
    if (!renderableCount) {
      console.log("NekoPrice highlights feed sem cards renderizaveis", {
        rawCount: rawHighlights.length,
        renderableCount,
        data
      });
    }
    highlightFigures = normalizedHighlights;
    renderNewArrivals();
  } catch (error) {
    console.error("Erro ao carregar destaques:", error);
    highlightFigures = [];
    renderNewArrivals();
  } finally {
    if (timeoutId) window.clearTimeout(timeoutId);
  }
}

function highlightOffer(figure) {
  const offers = Array.isArray(figure?.offers) ? figure.offers : [];
  const verifiedOffer = offers
    .filter((offer) => providerById(offer.provider) && offerLooksPlausible(offer) && offerProductPriceValue(offer) !== null)
    .sort((a, b) => Number(a.productPrice) - Number(b.productPrice))[0] || null;
  if (verifiedOffer) return verifiedOffer;

  const fallbackOffer = normalizeOffer({
    provider: figure?.store || figure?.provider || "",
    productUrl: figure?.productUrl || figure?.product_url || figure?.url || "",
    productPrice: figure?.highlightPriceEur ?? figure?.price ?? figure?.productPrice,
    currency: figure?.highlightPriceEur !== null && figure?.highlightPriceEur !== undefined ? "EUR" : figure?.currency || "JPY",
    availability: figure?.availability || "Available",
    linkType: "product"
  });
  return providerById(fallbackOffer.provider) && offerProductPriceValue(fallbackOffer) !== null ? fallbackOffer : null;
}

function renderHighlights() {
  renderFigureStoreCarousel();
}

function renderNewArrivals() {
  renderFigureStoreCarousel();
}

function storeSiteProviders() {
  const byId = new Map();
  [...LOCAL_PROVIDERS, ...providers].forEach((provider) => {
    if (!provider?.id || !provider?.url) return;
    if (!byId.has(provider.id)) byId.set(provider.id, provider);
  });

  return [...byId.values()].sort((a, b) => {
    const countryRank = String(a.country || "").localeCompare(String(b.country || ""), "en", { sensitivity: "base" });
    return countryRank || String(a.name || "").localeCompare(String(b.name || ""), "en", { sensitivity: "base" });
  });
}

function storeSiteDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return String(url || "").replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  }
}

function storeSiteInitials(name) {
  const words = String(name || "Store").replace(/[^a-z0-9\s-]/gi, " ").split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "NP";
}

function storeSiteLogoKey(value) {
  const key = normalizeText(value).replace(/\s+/g, "_");
  return STORE_SITE_LOGO_ALIASES[key] || key;
}

function storeSiteLogo(provider) {
  const keys = [provider?.id, provider?.name].map(storeSiteLogoKey).filter(Boolean);
  for (const key of keys) {
    if (STORE_SITE_LOGOS[key]) return STORE_SITE_LOGOS[key];
  }
  return "";
}

function storeSiteCardLogo(provider) {
  const logo = storeSiteLogo(provider);
  return logo ? logo.replace("./assets/store-logos/", "./assets/store-logos-card/") : "";
}

function storeSiteCarouselLogo(provider) {
  const keys = [provider?.id, provider?.name].map(storeSiteLogoKey).filter(Boolean);
  const key = keys.find((candidate) => STORE_CAROUSEL_LOGO_KEYS.has(candidate));
  return key ? `./assets/store-logo-squares/${key}.png` : "";
}

function renderFigureStoreCarousel() {
  if (!els.newArrivalsGrid) return;

  const seenLogos = new Set();
  const stores = storeSiteProviders().filter((provider) => {
    const logo = storeSiteCarouselLogo(provider);
    if (!logo || seenLogos.has(logo)) return false;
    seenLogos.add(logo);
    return true;
  });
  if (els.newArrivalsStatus) {
    els.newArrivalsStatus.textContent = "";
    els.newArrivalsStatus.hidden = true;
  }

  els.newArrivalsSection?.classList.add("store-logo-marquee-band");
  els.newArrivalsGrid.classList.add("store-sites-carousel");
  const logoItems = stores.map(renderFigureStoreLogo).join("");
  els.newArrivalsGrid.innerHTML = `<div class="store-logo-track">${logoItems}${logoItems}</div>`;
  els.newArrivalsGrid.scrollTo({ left: 0, behavior: "auto" });
  bindFigureStoreCarouselPauseEvents();
  scheduleFigureStoreCarousel();
}

function figureStoreCarouselStep() {
  const track = els.newArrivalsGrid?.querySelector(".store-logo-track");
  const card = track?.querySelector(".store-logo-link");
  if (!track || !card) return 0;
  const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
  return card.getBoundingClientRect().width + gap;
}

function scheduleFigureStoreCarousel() {
  figureStoreCarouselRunId += 1;
  const runId = figureStoreCarouselRunId;
  if (figureStoreCarouselAnimationFrame) {
    window.cancelAnimationFrame(figureStoreCarouselAnimationFrame);
    figureStoreCarouselAnimationFrame = null;
  }
  figureStoreCarouselPreviousTimestamp = 0;
  if (!els.newArrivalsGrid) return;
  figureStoreCarouselOffset = Number(els.newArrivalsGrid.scrollLeft) || 0;

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const pixelsPerSecond = reducedMotion ? 24 : 60;
  const track = els.newArrivalsGrid.querySelector(".store-logo-track");
  const step = figureStoreCarouselStep();
  const uniqueCards = Math.floor((track?.querySelectorAll(".store-logo-link").length || 0) / 2);
  const loopWidth = step * uniqueCards;
  figureStoreCarouselVelocity = pixelsPerSecond;

  const tick = (timestamp) => {
    if (runId !== figureStoreCarouselRunId) return;
    if (!figureStoreCarouselPreviousTimestamp) figureStoreCarouselPreviousTimestamp = timestamp;
    const elapsed = Math.min(40, Math.max(0, timestamp - figureStoreCarouselPreviousTimestamp));
    figureStoreCarouselPreviousTimestamp = timestamp;

    if (!figureStoreCarouselPaused && document.visibilityState === "visible" && loopWidth > 0) {
      const elapsedSeconds = elapsed / 1000;
      const easing = 1 - Math.exp(-4.2 * elapsedSeconds);
      figureStoreCarouselVelocity += (pixelsPerSecond - figureStoreCarouselVelocity) * easing;
      figureStoreCarouselOffset = (
        (figureStoreCarouselOffset + figureStoreCarouselVelocity * elapsedSeconds) % loopWidth
        + loopWidth
      ) % loopWidth;
      els.newArrivalsGrid.scrollLeft = figureStoreCarouselOffset;
    }
    if (runId === figureStoreCarouselRunId) {
      figureStoreCarouselAnimationFrame = window.requestAnimationFrame(tick);
    }
  };
  figureStoreCarouselAnimationFrame = window.requestAnimationFrame(tick);
}

function bindFigureStoreCarouselPauseEvents() {
  if (!els.newArrivalsGrid || els.newArrivalsGrid.dataset.carouselBound === "true") return;
  const carousel = els.newArrivalsGrid;
  carousel.dataset.carouselBound = "true";

  const finishDrag = (event, cancelled = false) => {
    if (!figureStoreCarouselDrag.active) return;
    if (event?.pointerId != null && event.pointerId !== figureStoreCarouselDrag.pointerId) return;
    const moved = figureStoreCarouselDrag.moved;
    const pointerId = figureStoreCarouselDrag.pointerId;
    figureStoreCarouselDrag.active = false;
    figureStoreCarouselDrag.pointerId = null;
    carousel.classList.remove("is-dragging");
    if (pointerId != null && carousel.hasPointerCapture?.(pointerId)) {
      carousel.releasePointerCapture(pointerId);
    }
    if (moved && !cancelled) {
      figureStoreCarouselSuppressClickUntil = Date.now() + 350;
      if (document.activeElement instanceof HTMLElement && carousel.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }
    figureStoreCarouselPaused = carousel.contains(document.activeElement) && !moved;
    figureStoreCarouselPreviousTimestamp = performance.now();
  };

  carousel.addEventListener("focusin", () => {
    figureStoreCarouselPaused = true;
  });
  carousel.addEventListener("focusout", () => {
    if (!carousel.contains(document.activeElement) && !figureStoreCarouselDrag.active) {
      figureStoreCarouselPaused = false;
    }
  });

  carousel.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    figureStoreCarouselDrag.active = true;
    figureStoreCarouselDrag.pointerId = event.pointerId;
    figureStoreCarouselDrag.startX = event.clientX;
    figureStoreCarouselDrag.startOffset = Number(carousel.scrollLeft) || 0;
    figureStoreCarouselDrag.lastX = event.clientX;
    figureStoreCarouselDrag.lastTimestamp = event.timeStamp;
    figureStoreCarouselDrag.moved = false;
    figureStoreCarouselPaused = true;
    figureStoreCarouselVelocity = 0;
    carousel.setPointerCapture?.(event.pointerId);
  });

  carousel.addEventListener("pointermove", (event) => {
    if (!figureStoreCarouselDrag.active || event.pointerId !== figureStoreCarouselDrag.pointerId) return;
    const distance = event.clientX - figureStoreCarouselDrag.startX;
    if (!figureStoreCarouselDrag.moved && Math.abs(distance) >= 4) {
      figureStoreCarouselDrag.moved = true;
      carousel.classList.add("is-dragging");
    }
    if (!figureStoreCarouselDrag.moved) return;

    event.preventDefault();
    const track = carousel.querySelector(".store-logo-track");
    const step = figureStoreCarouselStep();
    const uniqueCards = Math.floor((track?.querySelectorAll(".store-logo-link").length || 0) / 2);
    const loopWidth = step * uniqueCards;
    const nextOffset = figureStoreCarouselDrag.startOffset - distance;
    figureStoreCarouselOffset = loopWidth > 0
      ? ((nextOffset % loopWidth) + loopWidth) % loopWidth
      : Math.max(0, nextOffset);
    carousel.scrollLeft = figureStoreCarouselOffset;

    const elapsed = Math.max(8, event.timeStamp - figureStoreCarouselDrag.lastTimestamp);
    const instantaneousVelocity = -(event.clientX - figureStoreCarouselDrag.lastX) / (elapsed / 1000);
    figureStoreCarouselVelocity = figureStoreCarouselVelocity * 0.58 + instantaneousVelocity * 0.42;
    figureStoreCarouselDrag.lastX = event.clientX;
    figureStoreCarouselDrag.lastTimestamp = event.timeStamp;
  });

  carousel.addEventListener("pointerup", (event) => finishDrag(event));
  carousel.addEventListener("pointercancel", (event) => finishDrag(event, true));
  carousel.addEventListener("lostpointercapture", (event) => finishDrag(event, true));
  carousel.addEventListener("dragstart", (event) => event.preventDefault());
  carousel.addEventListener("click", (event) => {
    if (Date.now() >= figureStoreCarouselSuppressClickUntil) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);

  let resizeFrame = null;
  window.addEventListener("resize", () => {
    if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(() => {
      resizeFrame = null;
      if (!figureStoreCarouselDrag.active) scheduleFigureStoreCarousel();
    });
  }, { passive: true });
  window.addEventListener("blur", () => finishDrag(null, true));
}

function renderFigureStoreLogo(provider) {
  const name = provider.name || providerName(provider.id);
  const url = injectAffiliateLink(provider.url || "#", provider.id);
  const logo = storeSiteCarouselLogo(provider);

  return `
    <a class="store-logo-link store-logo-only" href="${escapeHtml(url)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-offer-link="external" aria-label="Open ${escapeHtml(name)}" title="${escapeHtml(name)}">
      <img class="store-logo-image" src="${escapeHtml(logo)}?v=${STORE_LOGO_VERSION}" alt="${escapeHtml(name)}" loading="eager" decoding="async" draggable="false" />
    </a>
  `;
}

function normalizeTrendingProduct(raw) {
  const item = raw || {};
  const providerId = item.providerId || item.provider || item.store || "";
  const providerDisplayName = item.providerName || providerName(providerId);
  const priceEUR = numberOrNull(item.priceEUR ?? item.priceEur);
  const price = numberOrNull(item.price);

  return {
    id: String(item.id || `${providerId}-${item.productUrl || item.title || Math.random()}`),
    jan: String(item.jan || item.janCode || item.sku || "").replace(/\D/g, ""),
    title: String(item.title || item.name || "Trending product").trim(),
    category: String(item.category || "Figure").trim(),
    providerId,
    providerName: providerDisplayName,
    productUrl: String(item.productUrl || item.product_url || item.url || "").trim(),
    imageUrl: String(item.imageUrl || item.image_url || item.image || "").trim(),
    price,
    currency: String(item.currency || "").trim(),
    priceEUR,
    priceConfidence: String(item.priceConfidence || "").trim(),
    isFigure: item.isFigure === true || normalizeText(item.category || "").includes("figure"),
    availability: String(item.availability || "").trim(),
    trendSource: String(item.trendSource || "manual_candidate").trim(),
    trendScore: Number.isFinite(Number(item.trendScore)) ? Number(item.trendScore) : 0,
    offerCount: Number.isFinite(Number(item.offerCount)) ? Number(item.offerCount) : 0,
    detectedAt: String(item.detectedAt || "").trim(),
    lastCheckedAt: String(item.lastCheckedAt || "").trim(),
    confidence: String(item.confidence || "Candidate").trim(),
    requiresHumanReview: item.requiresHumanReview !== false
  };
}

function trendingSourceLabel(source) {
  const labels = {
    api: "API",
    best_sellers: "Best seller",
    local_sqlite: "Verified",
    manual_candidate: "Candidate",
    new_arrivals: "New arrival",
    popular: "Popular now",
    preorder: "Pre-order",
    sale: "Sale",
    sitemap: "Sitemap"
  };
  return labels[source] || String(source || "Trend").replace(/_/g, " ");
}

function trendingPriceLabel(item) {
  if (item.priceConfidence && item.priceConfidence !== "Confirmed") {
    return "Price checking";
  }
  if (item.priceEUR !== null && item.priceEUR !== undefined) {
    return formatMoney(item.priceEUR, "EUR", PRICE_FALLBACK);
  }
  if (item.price !== null && item.currency) {
    return formatMoney(item.price, item.currency, PRICE_FALLBACK);
  }
  return "Price checking";
}

function trendingModeLabel() {
  return "Trending Now";
}

function trendingModeItems() {
  return trendingProducts;
}

function syncTrendingNowTitle() {
  if (!els.trendingNowTitle) return;
  const nextTitle = trendingModeLabel();
  if (els.trendingNowTitle.textContent === nextTitle) return;
  els.trendingNowTitle.textContent = nextTitle;
  els.trendingNowTitle.dataset.title = nextTitle;
  els.trendingNowTitle.classList.remove("is-glitching");
  void els.trendingNowTitle.offsetWidth;
  els.trendingNowTitle.classList.add("is-glitching");
  window.setTimeout(() => {
    els.trendingNowTitle?.classList.remove("is-glitching");
  }, 720);
}

function isDisplayableTrendingFigure(item) {
  if (!item?.title || !item?.imageUrl) return false;
  const text = normalizeText(item.title).toLowerCase();
  if (/\b(plush|acrylic|keychain|key holder|model kit|plastic model|optional parts|trading card|booster|mug|poster|sticker)\b/i.test(text)) {
    return false;
  }
  return item.isFigure === true
    || /\b(figure|figma|figuarts|nendoroid|statue|b-style|pop up parade|scale)\b/i.test(text);
}

function selectTrendingFigures(items, limit = 8) {
  const verified = items.filter((item) => !item.requiresHumanReview && isDisplayableTrendingFigure(item));
  const source = verified.length ? verified : items.filter(isDisplayableTrendingFigure);
  const unique = [];
  const seen = new Set();
  source.forEach((item) => {
    const key = normalizeText(item.title).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    unique.push(item);
  });

  const selected = [];
  const selectedIds = new Set();
  const providerCounts = new Map();
  const matches = {
    spotlight: (item) => {
      const title = normalizeText(item.title).toLowerCase();
      return title.includes("hatsune miku") && (title.includes("bunny") || title.includes("b-style"));
    },
    preorder: (item) => item.trendSource === "preorder" || normalizeText(item.category).toLowerCase() === "pre-order",
    popular: (item) => ["popular", "best_sellers"].includes(item.trendSource),
    new: (item) => item.trendSource === "new_arrivals",
    other: () => true
  };

  const take = (bucket) => {
    for (const allowProviderRepeat of [false, true]) {
      const candidate = unique.find((item) => {
        if (selectedIds.has(item.id) || !matches[bucket](item)) return false;
        const isMiku = normalizeText(item.title).toLowerCase().includes("hatsune miku");
        if (isMiku && selected.some((chosen) => normalizeText(chosen.title).toLowerCase().includes("hatsune miku"))) return false;
        return allowProviderRepeat || (providerCounts.get(item.providerId) || 0) < 2;
      });
      if (!candidate) continue;
      selected.push(candidate);
      selectedIds.add(candidate.id);
      providerCounts.set(candidate.providerId, (providerCounts.get(candidate.providerId) || 0) + 1);
      return true;
    }
    return false;
  };

  ["spotlight", "popular", "preorder", "popular", "new", "preorder", "popular", "new"].forEach((bucket) => {
    if (selected.length < limit) take(bucket);
  });
  while (selected.length < Math.min(limit, unique.length)) {
    if (!take("other")) break;
  }
  return selected;
}

function isLikelyTrendingProductUrl(url) {
  if (!isValidProviderUrl(url)) return false;

  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/+$/, "").toLowerCase();
    if (!path || path === "/") return false;
    if (/\/(?:cart|account|login|wishlist|blog|blogs|news|pages|search)(?:\/|$)/i.test(path)) return false;
    if (/\/(?:collections?|categories?|catalog|sale|sales|new-arrivals|pre-orders?|ranking|bestsellers?)(?:\/)?$/i.test(path)) return false;
    return true;
  } catch (error) {
    return false;
  }
}

function trendingProductUrl(item) {
  if (!isLikelyTrendingProductUrl(item.productUrl)) return "";
  return injectAffiliateLink(item.productUrl, item.providerId);
}

function trendingImageUrl(item) {
  return item.imageUrl || FIGURE_PLACEHOLDER_IMAGE;
}

function renderTrendingNowCard(item) {
  const tag = trendingSourceLabel(item.trendSource);
  const price = trendingPriceLabel(item);
  const availability = item.availability || item.confidence || "Trend watch";
  const offerCount = Math.max(1, Number(item.offerCount) || 1);
  const comparisonLabel = `Compare ${offerCount} ${offerCount === 1 ? "offer" : "offers"}`;
  const content = `
    <div class="trending-card-media">
      <img src="${escapeHtml(trendingImageUrl(item))}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async" />
      <span class="trending-source">${escapeHtml(tag)}</span>
    </div>
    <div class="trending-card-body">
      <div class="trending-card-meta">
        <span>${escapeHtml(item.category || "Anime")}</span>
        <span data-i18n-skip>${escapeHtml(item.providerName || providerName(item.providerId))}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <div class="trending-card-footer">
        <strong>${escapeHtml(price)}</strong>
        <span class="trending-compare-label" data-i18n-skip>${escapeHtml(comparisonLabel)}</span>
      </div>
      <p>${escapeHtml(availability)}</p>
    </div>
  `;

  return `
    <button class="trending-card" type="button" data-trending-compare="${escapeHtml(item.id)}" data-trending-jan="${escapeHtml(item.jan)}" aria-label="Compare offers for ${escapeHtml(item.title)}">
      ${content}
    </button>
  `;
}

async function openTrendingComparison(item) {
  if (!item) return;
  const jan = String(item.jan || "").replace(/\D/g, "");
  const loadedFigure = jan
    ? figures.find((figure) => janForFigure(figure) === jan)
    : null;
  if (loadedFigure) {
    renderProductDetail(loadedFigure.id, true);
    return;
  }
  if (jan.length === 12 || jan.length === 13) {
    const runId = (apiSearchRunId += 1);
    prepareFigureCatalogueView({
      query: "",
      category: "trending",
      label: item.title,
      strictCategory: false
    });
    requestAnimationFrame(() => {
      els.resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    try {
      const response = await fetch(catalogueApiUrl({
        page: 1,
        limit: 4,
        query: jan,
        kind: "",
        forceReload: true,
        includeTotal: false,
        quickFilters: []
      }), { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (runId !== apiSearchRunId) return;
      if (!response.ok) throw new Error(data.error || `Could not load comparison (${response.status})`);
      await installCatalogueData(data);
      if (runId !== apiSearchRunId) return;
      const matchedFigure = figures.find((figure) => janForFigure(figure) === jan);
      if (!matchedFigure) throw new Error(`Catalogue did not return JAN ${jan}`);
      populateFilters();
      resetVisibleCards();
      renderProductDetail(matchedFigure.id, true);
      return;
    } catch (error) {
      if (runId !== apiSearchRunId) return;
      console.warn("Trending comparison lookup failed", error);
    }
  }
  applySearch(item.title, true);
}

function renderTrendingNow() {
  if (!els.trendingNowGrid) return;

  syncTrendingNowTitle();
  const activeItems = trendingModeItems();
  const confirmed = activeItems.filter((item) => !item.requiresHumanReview && isDisplayableTrendingFigure(item));
  const displayItems = selectTrendingFigures(activeItems);

  if (!displayItems.length) {
    els.trendingNowGrid.innerHTML = "";
    if (els.trendingNowStatus) {
      els.trendingNowStatus.textContent = `${trendingModeLabel()} scan is warming up. Products will appear after the next scheduled check.`;
      els.trendingNowStatus.hidden = false;
    }
    return;
  }

  els.trendingNowGrid.innerHTML = displayItems.map(renderTrendingNowCard).join("");
  els.trendingNowGrid.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = FIGURE_PLACEHOLDER_IMAGE;
    }, { once: true });
  });

  if (els.trendingNowStatus) {
    els.trendingNowStatus.textContent = confirmed.length ? "" : `Showing candidate ${trendingModeLabel().toLowerCase()} while the next verified scan runs.`;
    els.trendingNowStatus.hidden = Boolean(confirmed.length);
  }
}

async function loadTrendingProducts() {
  if (!els.trendingNowGrid) return;
  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeoutId = controller ? window.setTimeout(() => controller.abort(), 6000) : null;

  try {
    const response = await fetch(catalogueRequestUrl(TRENDING_PRODUCTS_URL), { cache: "no-store", signal: controller?.signal });
    if (!response.ok) throw new Error(`Trending feed failed (${response.status})`);
    const data = await response.json();
    const rawItems = Array.isArray(data) ? data : Array.isArray(data?.items) ? data.items : [];
    trendingProducts = rawItems.map(normalizeTrendingProduct).filter((item) => item.title);

    hotPreorders = trendingProducts.filter((item) => item.trendSource === "preorder" || normalizeText(item.category).includes("pre-order"));

    if (els.trendingNowUpdated) {
      const generatedAt = data?.generatedAt || trendingProducts[0]?.lastCheckedAt || "";
      els.trendingNowUpdated.textContent = generatedAt ? `Updated ${new Date(generatedAt).toLocaleString("en-GB")} · figures only` : "Scheduled every 6h";
    }

    renderTrendingNow();
  } catch (error) {
    console.error("Error loading trending products:", error);
    trendingProducts = [];
    hotPreorders = [];
    if (els.trendingNowUpdated) els.trendingNowUpdated.textContent = "Waiting for first scan";
    renderTrendingNow();
  } finally {
    if (timeoutId) window.clearTimeout(timeoutId);
  }
}

function slugifyCategory(value) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "all-figures";
}

function categorySlugForState() {
  const map = {
    trending: "all-figures",
    new: "new-arrivals",
    nendoroids: "nendoroids",
    scale: "scale-figures",
    prize: "prize-figures",
    figma: "figma",
    pop: "pop-up-parade",
    action: "action-figures",
    preorder: "pre-orders"
  };
  if (state.category && state.category !== "trending" && map[state.category]) return map[state.category];
  const query = String(state.query || "").trim();
  if (query) return slugifyCategory(query);
  return map[state.category] || slugifyCategory(CATEGORY_LABELS[state.category] || state.category || "all-figures");
}

function activeCategoryRanking() {
  const categories = categoryRankings?.categories || {};
  const slug = categorySlugForState();
  return categories[slug] || null;
}

function rankingTitleKey(value) {
  const title = normalizeText(value || "");
  return title ? `title:${title}` : "";
}

function buildCategoryRankingIndex(slug, ranking) {
  const cached = categoryRankingIndexCache.get(slug);
  if (cached && cached.source === ranking) return cached;

  const byKey = new Map();
  const items = Array.isArray(ranking?.items) ? ranking.items : [];
  items.forEach((item, index) => {
    const keys = [
      item.figureId,
      item.jan,
      item.jan ? `jan-${item.jan}` : "",
      rankingTitleKey(item.title)
    ].filter(Boolean);
    keys.forEach((key) => {
      if (!byKey.has(key)) byKey.set(key, { item, index });
    });
  });

  const index = { source: ranking, byKey };
  categoryRankingIndexCache.set(slug, index);
  return index;
}

function categoryRankingItemForFigure(figure) {
  const ranking = activeCategoryRanking();
  if (!ranking) return null;
  const slug = categorySlugForState();
  const index = buildCategoryRankingIndex(slug, ranking);
  const jan = janForFigure(figure);
  const keys = [
    figure?.id,
    jan,
    jan ? `jan-${jan}` : "",
    rankingTitleKey(figure?.name || figure?.title)
  ].filter(Boolean);
  for (const key of keys) {
    const match = index.byKey.get(key);
    if (match) return match;
  }
  return null;
}

function applyCategoryRankingToMatches(items) {
  const ranking = activeCategoryRanking();
  if (!ranking || !Array.isArray(ranking.items) || !ranking.items.length) return items;
  return [...items].sort((a, b) => {
    const rankA = categoryRankingItemForFigure(a);
    const rankB = categoryRankingItemForFigure(b);
    if (rankA && rankB) return rankA.index - rankB.index;
    if (rankA !== rankB) return rankA ? -1 : 1;
    return 0;
  });
}

function categoryRankingBadges(item) {
  if (!item) return [];
  const badges = [];
  if (item.isTrending) badges.push("Trending");
  if (item.isPromotion) badges.push("Sale");
  if (item.isNewArrival) badges.push("New");
  if (item.bestPriceEUR !== null && item.bestPriceEUR !== undefined && item.confirmedOfferCount > 0) {
    badges.push("Best offer");
  }
  return badges.slice(0, 2);
}

async function loadCategoryRankings() {
  try {
    const response = await fetch(catalogueRequestUrl(CATEGORY_RANKINGS_URL), { cache: "no-store" });
    if (!response.ok) throw new Error(`Category rankings failed (${response.status})`);
    const data = await response.json();
    categoryRankings = {
      generatedAt: data?.generatedAt || "",
      categories: data?.categories && typeof data.categories === "object" ? data.categories : {}
    };
    categoryRankingIndexCache.clear();
    if (activeView === "catalog") renderProductCards();
  } catch (error) {
    console.debug("Category rankings unavailable", error);
    categoryRankings = { generatedAt: "", categories: {} };
    categoryRankingIndexCache.clear();
  }
}

function renderNewArrivalCard(figure) {
  const offer = highlightOffer(figure);
  const provider = providerName(offer.provider);
  const title = compactFigureNameForCard(figure, 34);
  const fullTitle = figure.name || figure.title || title;
  const price = figure.highlightPriceEur !== null && figure.highlightPriceEur !== undefined
    ? formatMoney(figure.highlightPriceEur, "EUR", PRICE_FALLBACK)
    : formatOfferPrice(offer, offer.productPrice, PRICE_FALLBACK);
  const imageClass = shouldBlurFigureImage(figure) ? "ecchi-blur" : "";
  const badge = figure.highlightTag === "TRENDING" ? "TRENDING" : "NEW";
  const badgeClass = figure.highlightTag === "TRENDING" ? "is-trending" : "is-new";
  const release = figure.releaseDate && figure.releaseDate !== "Unknown" ? figure.releaseDate : "Latest catalogue";
  const subtitle = [figure.series, figure.manufacturer].filter(Boolean).join(" / ") || "Premium figure";

  return `
    <article class="new-arrival-card">
      <button type="button" class="new-arrival-open" data-highlight-select="${escapeHtml(figure.id)}" data-highlight-url="${escapeHtml(safeExternalOfferUrl(offer) || "")}" aria-label="Open highlight ${escapeHtml(fullTitle)}">
        <span class="new-arrival-image">
          <img class="${escapeHtml(imageClass)}" src="${escapeHtml(premiumFigureImageFor(figure))}" alt="${escapeHtml(fullTitle)}" loading="lazy">
          <span class="new-arrival-badge ${escapeHtml(badgeClass)}">${escapeHtml(badge)}</span>
        </span>
        <span class="new-arrival-copy">
          <span class="new-arrival-provider">${escapeHtml(provider)}</span>
          <strong>${escapeHtml(title)}</strong>
          <span class="new-arrival-subtitle">${escapeHtml(subtitle)}</span>
          <span class="new-arrival-release">${escapeHtml(release)}</span>
          <b>${escapeHtml(price)}</b>
        </span>
      </button>
    </article>
  `;
}

function renderPromotionRanking() {
  if (!els.promoRanking) return;

  if (!catalogueReady) {
    els.promoRanking.innerHTML = `<div class="promo-skeleton">Loading promotions...</div>`;
    return;
  }

  const promotions = promotionalFigures(10);
  els.promoRanking.innerHTML = promotions.length
    ? promotions.map(renderPromotionCard).join("")
    : `<div class="promo-skeleton">Promotions will appear after the catalogue loads.</div>`;
  els.promoRanking.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => image.closest(".promo-hero-banner, .promo-banner, .promo-card")?.remove(), { once: true });
  });
}

function renderPromotionCard(figure) {
  const best = bestOffer(figure, offersForCountry(figure));
  const total = best ? getOfferTotal(best) : null;
  const price =
    best && typeof best.productPrice === "number"
      ? formatMoney(best.productPrice, best.currency)
      : typeof total === "number"
        ? formatMoney(total, best.currency)
        : PRICE_FALLBACK;
  const title = compactFigureNameForCard(figure, 28);
  const subtitle = [figure.series, figure.manufacturer].filter(Boolean).join(" / ") || "Verified figure offer";

  return `
    <button class="promo-hero-banner" type="button" data-promo-select="${escapeHtml(figure.id)}" aria-label="Open ${escapeHtml(figure.name)} campaign">
      <img src="${escapeHtml(premiumFigureImageFor(figure))}" alt="${escapeHtml(figure.name)}" loading="lazy">
      <span class="promo-hero-overlay" aria-hidden="true">
        <span class="promo-hero-copy">
          <strong>${escapeHtml(title.toUpperCase())}</strong>
          <span>${escapeHtml(subtitle)}</span>
          <b>${escapeHtml(price)}</b>
          <span class="promo-hero-cta">View offer</span>
        </span>
      </span>
    </button>
  `;
}

function normalizedMarketplaceLens() {
  return MARKETPLACE_LENSES.has(state.marketplaceLens) ? state.marketplaceLens : "all";
}

function marketplaceLensLabel(lens = normalizedMarketplaceLens()) {
  return MARKETPLACE_LENS_LABELS[lens] || MARKETPLACE_LENS_LABELS.all;
}

function figureHasVerifiedDirectPrice(figure) {
  return Boolean(lowestProductPriceOffer(verifiedProductOffersForCard(figure)));
}

function figureHasLocalVerifiedOffer(figure) {
  return verifiedProductOffersForCard(figure).some(offerIsLocalToUser);
}

function figureIsPreorderMarketItem(figure) {
  const safeFigure = figure ?? {};
  const figureAvailability = normalizeText(safeFigure.availability);
  if (figureAvailability.includes("pre-order") || figureAvailability.includes("preorder")) return true;
  const identityText = figureQuickFilterText(safeFigure);
  if (["pre-order", "preorder", "pre order", "reservation"].some((term) => identityText.includes(term))) return true;
  return verifiedProductOffersForCard(safeFigure).some((offer) => {
    const availability = normalizeText(offer?.availability);
    return availability.includes("pre-order") || availability.includes("preorder");
  });
}

function figureNeedsComparisonCheck(figure) {
  const verifiedOffers = verifiedProductOffersForCard(figure);
  if (!verifiedOffers.length) return false;
  return verifiedOffers.some((offer) => offerTrustSummary(offer).hasGuardWarning || !offerIsFreshlyChecked(offer));
}

function productMatchesMarketplaceLens(figure) {
  const lens = normalizedMarketplaceLens();
  if (lens === "bestPrice") return figureHasVerifiedDirectPrice(figure);
  if (lens === "multiStore") return figureHasMultiplePricedStores(figure);
  if (lens === "local") return figureHasLocalVerifiedOffer(figure);
  if (lens === "preorder") return figureIsPreorderMarketItem(figure);
  if (lens === "needsCheck") return figureNeedsComparisonCheck(figure);
  return true;
}

function figureQuickFilterText(figure) {
  const safeFigure = figure ?? {};
  return normalizeText([
    safeFigure?.name,
    safeFigure?.title,
    safeFigure?.character,
    safeFigure?.series,
    safeFigure?.manufacturer,
    safeFigure?.type,
    safeFigure?.line,
    safeFigure?.scale,
    safeFigure?.version,
    safeFigure?.availability,
    Array.isArray(safeFigure?.tags) ? safeFigure.tags.join(" ") : "",
    figureCategoryText(safeFigure)
  ].join(" "));
}

function figureHasStockAvailability(figure) {
  const safeFigure = figure ?? {};
  const ownAvailability = normalizeText(safeFigure?.availability);
  if (ownAvailability.includes("in stock") || ownAvailability === "available") return true;
  return offersForCountry(safeFigure).some((offer) => {
    const availability = normalizeText(offer?.availability);
    return availability.includes("in stock") || availability === "available";
  });
}

function figureHasSaleOffer(figure) {
  const safeFigure = figure ?? {};
  const promotionMatch = [safeFigure.id, safeFigure.jan, safeFigure.sku, janForFigure(safeFigure)]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .some((key) => promotionFigureKeys.has(key));
  if (promotionMatch || Number(safeFigure.highlightDiscountPercentage || 0) > 0) return true;
  return offersForCountry(safeFigure).some((offer) => {
    const current = numberOrNull(offer?.productPrice ?? offer?.price);
    const explicitPrevious = numberOrNull(offer?.previousPrice ?? offer?.previous_price);
    const sameCurrencyOriginal = normalizeText(offer?.originalCurrency) === normalizeText(offer?.currency)
      ? numberOrNull(offer?.originalPrice ?? offer?.original_price)
      : null;
    const previous = explicitPrevious ?? sameCurrencyOriginal;
    return current !== null && previous !== null && previous > current;
  });
}

function figurePublicMaturityLevel(figure) {
  const level = String(figure?.maturityLevel || figure?.maturity_level || "").trim().toLowerCase();
  if (level === "ecchi" || level === "adult_18") return level;
  const status = String(figure?.maturityStatus || figure?.maturity_status || "").trim().toLowerCase();
  if (status !== "adult") return status || "uncertain";

  // Compatibility for a cached response created before maturityLevel existed.
  // Fresh API responses always carry the server's evidence-based decision.
  const visualScore = numberOrNull(figure?.maturityVisualScore ?? figure?.maturity_visual_score);
  return visualScore !== null && visualScore >= 0.9 ? "adult_18" : "ecchi";
}

function figureMatchesQuickFilter(figure, filterKey) {
  const text = figureQuickFilterText(figure);
  switch (filterKey) {
    case "in_stock_alt":
      return figureHasStockAvailability(figure);
    case "ecchi":
      return figurePublicMaturityLevel(figure) === "ecchi";
    case "adult_18":
      return figurePublicMaturityLevel(figure) === "adult_18";
    case "mature":
      return ["ecchi", "adult_18"].includes(figurePublicMaturityLevel(figure));
    case "sales":
      return figureHasSaleOffer(figure);
    case "new":
      return newArrivalSortTime(figure) > 0;
    case "poseable":
      return text.includes("poseable")
        || text.includes("posable")
        || text.includes("posability")
        || text.includes("articulated")
        || text.includes("action figure")
        || text.includes("figma")
        || text.includes("figuarts")
        || text.includes("revoltech")
        || text.includes("mafex");
    case "preorder":
      return figureIsPreorderMarketItem(figure);
    default:
      return true;
  }
}

function productMatchesQuickFilters(figure) {
  const filters = activeFigureQuickFilters();
  if (!filters.length) return true;
  return filters.some((filterKey) => figureMatchesQuickFilter(figure, filterKey));
}

function figureMatchesScaleDenominator(figure, denominator) {
  const text = figureCategoryText(figure);
  const scale = normalizeText(figure?.scale);
  const pattern = new RegExp(`\\b1 ${denominator}\\b`);
  return pattern.test(scale) || pattern.test(text);
}

function figureMatchesTypeFilter(figure, filterKey = state.type) {
  const key = String(filterKey || "all");
  if (key === "all") return true;
  if (key === "figure") return isDisplayFigure(figure);

  const text = figureCategoryText(figure);
  const hasAny = (...terms) => terms.some((term) => text.includes(normalizeText(term)));

  switch (key) {
    case "scale_figure":
      return hasAny("scale figure") || /\b1 (?:3|4|5|6|7|8|9|10|12|18)\b/.test(text);
    case "non_scale":
      return hasAny("non scale") || normalizeText(figure?.scale) === "non scale";
    case "scale_1_3": return figureMatchesScaleDenominator(figure, 3);
    case "scale_1_4": return figureMatchesScaleDenominator(figure, 4);
    case "scale_1_5": return figureMatchesScaleDenominator(figure, 5);
    case "scale_1_6": return figureMatchesScaleDenominator(figure, 6);
    case "scale_1_7": return figureMatchesScaleDenominator(figure, 7);
    case "scale_1_8": return figureMatchesScaleDenominator(figure, 8);
    case "scale_1_9": return figureMatchesScaleDenominator(figure, 9);
    case "scale_1_10": return figureMatchesScaleDenominator(figure, 10);
    case "scale_1_12": return figureMatchesScaleDenominator(figure, 12);
    case "scale_1_18": return figureMatchesScaleDenominator(figure, 18);
    case "complete_figure": return hasAny("complete figure", "pre painted", "painted finished");
    case "nendoroid": return hasAny("nendoroid");
    case "nendoroid_doll": return hasAny("nendoroid doll");
    case "figma": return /\bfigma\b/.test(text);
    case "sh_figuarts": return hasAny("s h figuarts", "sh figuarts") && !hasAny("figuarts zero");
    case "figuarts_zero": return hasAny("figuarts zero");
    case "figuarts_mini": return hasAny("figuarts mini");
    case "pop_up_parade": return hasAny("pop up parade");
    case "pop_up_parade_l": return hasAny("pop up parade l", "pop up parade large");
    case "look_up": return hasAny("look up", "lookup") && hasAny("figure", "megahouse");
    case "q_posket": return hasAny("q posket");
    case "tenitol": return hasAny("tenitol");
    case "portrait_of_pirates": return hasAny("portrait of pirates", "portrait of pirate", "p o p megahouse");
    case "gem_series": return hasAny("g e m series", "gem series") && hasAny("figure", "megahouse");
    case "artfx_j": return hasAny("artfx j");
    case "bishoujo": return hasAny("bishoujo", "bishojo") && hasAny("figure", "kotobukiya");
    case "variable_action_heroes": return hasAny("variable action heroes");
    case "prize_figure":
      return hasAny("prize figure", "ichiban kuji", "luminasta", "noodle stopper", "bicute", "desktop cute", "coreful", "q posket");
    case "ichiban_kuji": return hasAny("ichiban kuji", "ichibansho", "kuji prize");
    case "luminasta": return hasAny("luminasta");
    case "noodle_stopper": return hasAny("noodle stopper");
    case "bicute_bunnies": return hasAny("bicute bunnies", "bi cute bunnies");
    case "desktop_cute": return hasAny("desktop cute");
    case "coreful": return hasAny("coreful");
    case "trio_try_it": return hasAny("trio try it", "trio try i t");
    case "relax_time": return hasAny("relax time");
    case "vibration_stars": return hasAny("vibration stars");
    case "maximatic": return hasAny("maximatic");
    case "glitter_glamours": return hasAny("glitter glamours", "glitter glamorous");
    case "king_of_artist": return hasAny("king of artist");
    case "grandista": return hasAny("grandista");
    case "dxf": return /\bdxf\b/.test(text);
    case "super_premium": return hasAny("super premium", "spm figure");
    case "perching": return hasAny("perching figure", "perching series");
    case "fluffy_puffy": return hasAny("fluffy puffy");
    case "world_collectable": return hasAny("world collectable figure", "world collectible figure", "wcf figure");
    case "break_time": return hasAny("break time collection");
    case "elcoco": return hasAny("elcoco");
    case "trading_figure": return hasAny("trading figure", "collection figure", "blind box");
    case "mini_chibi": return hasAny("mini figure", "chibi", "super deformed", "gashapon", "capsule figure", "petit");
    case "action_figure": return hasAny("action figure", "figma", "figuarts", "revoltech", "mafex", "buzzmod", "variable action heroes");
    case "poseable": return hasAny("poseable", "posable", "articulated", "action figure", "figma", "figuarts", "revoltech", "mafex");
    case "mafex": return /\bmafex\b/.test(text);
    case "revoltech": return hasAny("revoltech") && !hasAny("amazing yamaguchi");
    case "amazing_yamaguchi": return hasAny("amazing yamaguchi");
    case "buzzmod": return hasAny("buzzmod", "buzz mod");
    case "real_action_heroes": return hasAny("real action heroes", "rah figure");
    case "statue": return hasAny("statue", "sculpture", "polystone");
    case "resin_statue": return hasAny("resin statue", "resin figure", "polystone statue");
    case "bust": return /\bbust\b/.test(text);
    case "diorama": return hasAny("diorama");
    case "model_kit": return hasAny("model kit", "plastic model", "pla model", "plamax", "assembly kit", "gunpla");
    case "gunpla": return hasAny("gunpla", "gundam model", "high grade gundam", "real grade gundam", "master grade gundam", "perfect grade gundam");
    case "metal_build": return hasAny("metal build");
    case "chogokin": return hasAny("chogokin");
    case "robot_spirits": return hasAny("robot spirits", "robot damashii");
    case "garage_kit": return hasAny("garage kit", "resin kit", "unpainted kit");
    case "vinyl_sofubi": return hasAny("sofubi", "soft vinyl", "vinyl figure");
    case "doll": return hasAny("doll", "dollfie", "pullip", "azone");
    case "bunny": return hasAny("bunny", "rabbit ver", "b style");
    case "swimsuit": return hasAny("swimsuit", "swimwear", "bikini", "beach ver", "bathing suit");
    case "original_character": return hasAny("original character", "original illustration", "creator s collection", "native creator");
    case "castoff_adult": return figureMatchesQuickFilter(figure, "adult_18");
    default:
      return normalizeText(figure?.type) === normalizeText(key) || normalizeText(figure?.scale) === normalizeText(key);
  }
}

function figureTypeFilterApiQuery(filterKey = state.type) {
  if (!filterKey || filterKey === "all") return "";
  return FIGURE_TYPE_FILTER_OPTIONS.find((option) => option.key === filterKey)?.query || "";
}

function productMatchesFilters(figure, includeQuery = true) {
  const safeFigure = figure ?? {};
  if (isMangaCatalogue()) {
    if (!isMangaProduct(safeFigure) || isPendingFigure(safeFigure)) return false;
  } else if (state.figuresOnly && (!isDisplayFigure(safeFigure) || !figureIsCatalogueReady(safeFigure))) {
    return false;
  }

  const allowMerchandiseSearch = includeQuery && hasSearched && !state.figuresOnly && shouldAllowMerchandiseQuery(state.query);
  if (!isMangaCatalogue() && !allowMerchandiseSearch && !isDisplayFigure(safeFigure)) return false;
  if (state.multiStoreOnly && !figureHasMultiplePricedStores(safeFigure)) return false;
  if (includeQuery && !productMatchesQuery(safeFigure)) return false;
  if (!productMatchesMarketplaceLens(safeFigure)) return false;
  const offerFiltersActive = state.provider !== "all" || state.confirmedOnly || state.shipsToPortugal;
  const allOffers = offersForCountry(safeFigure);
  const scopedOffers = allOffers.filter((offer) => {
    if (state.provider !== "all" && offer.provider !== state.provider) return false;
    if (state.confirmedOnly && !["Confirmed", "High", "Local"].includes(offer.confidence)) return false;
    if (state.shipsToPortugal && offer.shipsToCountry !== true) return false;
    return offerProductPriceValue(offer) !== null;
  });
  if (offerFiltersActive && !scopedOffers.length) return false;

  const pricePool = scopedOffers.length ? scopedOffers : allOffers;
  const scopedPrices = pricePool
    .map((offer) => convertMoney(offerProductPriceValue(offer), offer.currency || "EUR", offerDisplayCurrency()))
    .filter((price) => typeof price === "number" && Number.isFinite(price));
  const knownTotal = scopedPrices.length ? Math.min(...scopedPrices) : lowestVerifiedProductPrice(safeFigure);
  const knownTotalEur = Number.isFinite(knownTotal) ? convertMoney(knownTotal, offerDisplayCurrency(), "EUR") : null;
  const priceRangeIsActive = state.minPrice > 0 || state.maxPrice < FIGURE_TAB_PRICE_MAX_EUR;
  const priceMatch = Number.isFinite(knownTotalEur)
    ? knownTotalEur >= state.minPrice && knownTotalEur <= state.maxPrice
    : !priceRangeIsActive;

  return (
    (state.manufacturer === "all" || safeFigure?.manufacturer === state.manufacturer) &&
    figureMatchesTypeFilter(safeFigure) &&
    (state.status === "all" || safeFigure?.availability === state.status) &&
    priceMatch &&
    productMatchesQuickFilters(safeFigure)
  );
}

function availabilityRank(figure) {
  const ranks = {
    "In stock": 0,
    "Pre-order": 1,
    Available: 2,
    Released: 3,
    Archive: 4,
    "Sold out": 5
  };
  return ranks[figure.availability] ?? 6;
}

function sortProducts(items) {
  const sortMode = state.gridSort || state.sort;
  if (sortMode === "catalogue") return [...items];
  return [...items].sort((a, b) => {
    const completeRank = compareCompleteFigures(a, b);
    if (completeRank !== 0) return completeRank;

    if (sortMode === "newest") {
      return releaseTime(b) - releaseTime(a) || compareVerifiedProductPrice(a, b);
    }
    if (sortMode === "highestTotal") {
      return compareVerifiedProductPrice(a, b, -1) || releaseTime(b) - releaseTime(a);
    }
    if (sortMode === "availability") {
      return availabilityRank(a) - availabilityRank(b) || compareVerifiedProductPrice(a, b);
    }
    return compareVerifiedProductPrice(a, b) || releaseTime(b) - releaseTime(a);
  });
}

function sortVisibleProducts(items, isSearching) {
  if (!state.gridQuery && state.gridSort === "newest" && !isSearching && (state.category === "new" || state.category === "preorder")) {
    return [...items].sort((a, b) => compareCompleteFigures(a, b) || releaseTime(b) - releaseTime(a) || compareVerifiedProductPrice(a, b));
  }
  return sortProducts(items);
}

function selectDisplayLabel(select, value, fallback = value) {
  if (!select) return fallback;
  const option = [...select.options].find((item) => item.value === value);
  return option?.textContent?.trim() || fallback;
}

function currentCategoryLabel() {
  if (isMangaCatalogue()) return "Mangas";
  return CATEGORY_LABELS[state.category] || state.figureCatalogLabel || state.category || "Anime figures";
}

function activeFigureFilterChips() {
  const chips = [];
  const addChip = (key, label, value) => {
    const cleanValue = String(value || "").trim();
    if (!cleanValue) return;
    chips.push({ key, label, value: cleanValue });
  };

  const activeSeries = activePopularSeriesFilter();
  if (activeSeries) {
    addChip("seriesFilter", "Series", activeSeries.label);
  } else if (hasSearched && state.query.trim()) {
    addChip("query", "Search", state.query.trim());
  }
  if (activeSeries && state.seriesCharacter) {
    const option = seriesCharacterOptions(activeSeries).find((item) => item.key === normalizeText(state.seriesCharacter));
    addChip("seriesCharacter", "Character", option?.label || state.seriesCharacter);
  }
  if (state.gridQuery.trim()) addChip("gridQuery", "Within results", state.gridQuery.trim());
  if (state.brandFilter) addChip("brandFilter", "Brand", state.brandLabel || state.brandFilter);
  if (!isMangaCatalogue() && state.category !== "trending") addChip("category", "Category", currentCategoryLabel());
  if (state.manufacturer !== "all") addChip("manufacturer", "Manufacturer", selectDisplayLabel(els.manufacturerFilter, state.manufacturer));
  if (state.type !== "all") addChip("type", "Type", selectDisplayLabel(els.typeFilter, state.type));
  if (state.status !== "all") addChip("status", "Availability", selectDisplayLabel(els.statusFilter, state.status));
  activeFigureQuickFilters().forEach((filterKey) => {
    addChip(`quickFilter:${filterKey}`, "Filter", FIGURE_QUICK_FILTER_LABELS[filterKey]);
  });
  if (state.provider !== "all") addChip("provider", "Store", providerName(state.provider));
  if (Number(state.minPrice) > 0 || Number(state.maxPrice) < FIGURE_TAB_PRICE_MAX_EUR) {
    addChip("priceRange", "Price", displayPriceRangeLabel());
  }
  if (state.confirmedOnly) addChip("confirmedOnly", "Trust", "Checked stores only");
  if (state.shipsToPortugal) addChip("shipsToPortugal", "Delivery", `Ships to ${currentCountryLabel()}`);
  if (state.multiStoreOnly && normalizedMarketplaceLens() !== "multiStore") addChip("multiStoreOnly", "Comparison", "2+ stores");
  if (normalizedMarketplaceLens() !== "all") addChip("marketplaceLens", "Quick view", marketplaceLensLabel());

  return chips;
}

function renderMarketplaceLensBar(totalMatches = null, visibleMatches = null) {
  if (!els.marketplaceLensBar) return;
  const lens = normalizedMarketplaceLens();
  els.marketplaceLensBar.querySelectorAll("[data-marketplace-lens]").forEach((button) => {
    const active = button.dataset.marketplaceLens === lens;
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  if (!els.marketplaceLensSummary) return;
  const market = `${currentCountryLabel()} · ${offerDisplayCurrency()}`;
  if (Number.isFinite(totalMatches) && Number.isFinite(visibleMatches)) {
    els.marketplaceLensSummary.textContent = `${marketplaceLensLabel(lens)} · ${formatDatabaseNumber(visibleMatches)} shown from ${formatDatabaseNumber(totalMatches)} matches · ${market}`;
  } else {
    els.marketplaceLensSummary.textContent = `${marketplaceLensLabel(lens)} · ${market}`;
  }
}

function renderActiveFilterBar(totalMatches = 0, visibleMatches = 0) {
  if (!els.activeFilterBar || !els.activeFilterSummary || !els.activeFilterChips) return;
  if (activeView !== "catalog" || !catalogueReady) {
    els.activeFilterBar.hidden = true;
    return;
  }

  const chips = activeFigureFilterChips();
  const noun = isMangaCatalogue() ? "mangas" : "figures";
  const shown = Math.min(Number(visibleMatches) || 0, Number(totalMatches) || 0);
  const market = `${currentCountryLabel()} · ${offerDisplayCurrency()}`;
  els.activeFilterSummary.textContent = `${formatDatabaseNumber(shown)} shown · ${formatDatabaseNumber(totalMatches)} ${noun} matching · ${market}`;
  els.activeFilterChips.innerHTML = chips
    .map((chip) => `
      <button
        type="button"
        class="active-filter-chip"
        data-clear-figure-filter="${escapeHtml(chip.key)}"
        aria-label="Remove ${escapeHtml(chip.label)} filter ${escapeHtml(chip.value)}"
      >
        <span>${escapeHtml(chip.label)}</span>
        ${escapeHtml(chip.value)}
        <b aria-hidden="true">×</b>
      </button>
    `)
    .join("");

  els.activeFilterBar.hidden = false;
  els.activeFilterBar.dataset.hasFilters = chips.length ? "true" : "false";
  if (els.clearFigureFilters) els.clearFigureFilters.hidden = chips.length === 0;
}

function renderSeriesFilterPanel(totalMatches = 0) {
  if (!els.seriesFilterSection) return;
  const activeSeries = activePopularSeriesFilter();
  if (!activeSeries || isMangaCatalogue()) {
    els.seriesFilterSection.hidden = true;
    return;
  }

  const options = seriesCharacterOptions(activeSeries);
  const activeCharacter = normalizeText(state.seriesCharacter);
  if (activeCharacter && !options.some((item) => item.key === activeCharacter)) {
    state.seriesCharacter = "";
  }

  els.seriesFilterSection.hidden = false;
  if (els.seriesFilterTitle) els.seriesFilterTitle.textContent = activeSeries.label;
  if (els.seriesFilterCount) {
    els.seriesFilterCount.textContent = `${formatDatabaseNumber(totalMatches)} matching figure${totalMatches === 1 ? "" : "s"}`;
  }
  if (els.seriesCharacterFilters) {
    els.seriesCharacterFilters.innerHTML = [
      `
        <label class="figure-filter-check">
          <input type="radio" name="seriesCharacter" value="" data-series-character="" ${!normalizeText(state.seriesCharacter) ? "checked" : ""} />
          <span>All characters</span>
        </label>
      `,
      ...options.map((item) => `
        <label class="figure-filter-check">
          <input type="radio" name="seriesCharacter" value="${escapeHtml(item.key)}" data-series-character="${escapeHtml(item.key)}" ${normalizeText(state.seriesCharacter) === item.key ? "checked" : ""} />
          <span>${escapeHtml(item.label)} (${formatDatabaseNumber(item.count)})</span>
        </label>
      `)
    ].join("");
  }
}

function clearPrimaryCatalogueQuery() {
  state.query = "";
  hasSearched = false;
  activeMfcFigureId = null;
  selectedFigureId = null;
  if (els.searchInput) els.searchInput.value = "";
  if (els.headerSearchInput) els.headerSearchInput.value = "";
  if (state.figuresOnly) {
    state.figureCatalogLabel = CATEGORY_LABELS[state.category] || "Anime figures";
  } else if (isMangaCatalogue()) {
    state.figureCatalogLabel = "Mangas";
  }
}

function figureFilterRequestStateSnapshot() {
  return {
    query: state.query,
    hasSearched,
    category: state.category,
    figureCatalogLabel: state.figureCatalogLabel,
    seriesFilter: state.seriesFilter,
    seriesCharacter: state.seriesCharacter,
    gridQuery: state.gridQuery,
    strictCategory: state.strictCategory,
    quickFilters: [...activeFigureQuickFilters()]
  };
}

function restoreFigureFilterRequestState(snapshot) {
  if (!snapshot) return;
  state.query = String(snapshot.query || "");
  hasSearched = Boolean(snapshot.hasSearched);
  state.category = snapshot.category || "trending";
  state.figureCatalogLabel = snapshot.figureCatalogLabel || "Anime figures";
  state.seriesFilter = snapshot.seriesFilter || null;
  state.seriesCharacter = snapshot.seriesCharacter || "";
  state.gridQuery = snapshot.gridQuery || "";
  state.strictCategory = Boolean(snapshot.strictCategory);
  state.quickFilters = Array.isArray(snapshot.quickFilters) ? [...snapshot.quickFilters] : [];
  if (els.searchInput) els.searchInput.value = state.query;
  if (els.headerSearchInput) els.headerSearchInput.value = state.query;
  if (els.gridSearchInput) els.gridSearchInput.value = state.gridQuery;
  syncFigureFilterControls();
}

function prepareGlobalMaturityFilter() {
  state.category = "trending";
  state.strictCategory = false;
  state.seriesFilter = null;
  state.seriesCharacter = "";
  state.gridQuery = "";
  if (els.gridSearchInput) els.gridSearchInput.value = "";
  clearPrimaryCatalogueQuery();
  if (els.seriesFilterSection) els.seriesFilterSection.hidden = true;
}

function clearSingleFigureFilter(key) {
  if (String(key || "").startsWith("quickFilter:")) {
    const filterKey = String(key).replace("quickFilter:", "");
    state.quickFilters = activeFigureQuickFilters().filter((item) => item !== filterKey);
    state.catalogStandalone = true;
    syncFigureFilterControls();
    if (reloadFigureCatalogueForActiveFilters()) return;
    resetVisibleCards();
    renderCategoryChips();
    renderProductCards();
    return;
  }

  switch (key) {
    case "query":
      clearPrimaryCatalogueQuery();
      break;
    case "seriesFilter":
      state.seriesFilter = null;
      state.seriesCharacter = "";
      clearPrimaryCatalogueQuery();
      break;
    case "seriesCharacter":
      state.seriesCharacter = "";
      break;
    case "gridQuery":
      state.gridQuery = "";
      if (els.gridSearchInput) els.gridSearchInput.value = "";
      break;
    case "brandFilter":
      state.brandFilter = "";
      state.brandLabel = "";
      break;
    case "category":
      state.category = "trending";
      state.strictCategory = false;
      if (state.figuresOnly) state.figureCatalogLabel = "Anime figures";
      break;
    case "manufacturer":
      state.manufacturer = "all";
      break;
    case "type":
      state.type = "all";
      break;
    case "status":
      state.status = "all";
      break;
    case "provider":
      state.provider = "all";
      break;
    case "maxPrice":
    case "priceRange":
      state.minPrice = 0;
      state.maxPrice = FIGURE_TAB_PRICE_MAX_EUR;
      break;
    case "confirmedOnly":
      state.confirmedOnly = false;
      break;
    case "shipsToPortugal":
      state.shipsToPortugal = false;
      break;
    case "multiStoreOnly":
      state.multiStoreOnly = false;
      if (normalizedMarketplaceLens() === "multiStore") state.marketplaceLens = "all";
      break;
    case "marketplaceLens":
      state.marketplaceLens = "all";
      state.multiStoreOnly = false;
      break;
    default:
      return;
  }

  state.catalogStandalone = true;
  syncFigureFilterControls();
  if (reloadFigureCatalogueForActiveFilters()) return;
  resetVisibleCards();
  renderCategoryChips();
  renderProductCards();
}

function clearAllFigureFilters() {
  clearPrimaryCatalogueQuery();
  state.category = "trending";
  state.brandFilter = "";
  state.brandLabel = "";
  state.seriesFilter = null;
  state.seriesCharacter = "";
  state.multiStoreOnly = false;
  state.marketplaceLens = "all";
  state.strictCategory = false;
  resetFigureTabFilters();
  if (state.figuresOnly) state.figureCatalogLabel = "Anime figures";
  if (isMangaCatalogue()) state.figureCatalogLabel = "Mangas";
  state.catalogStandalone = true;
  syncFigureFilterControls();
  if (reloadFigureCatalogueForActiveFilters()) return;
  resetVisibleCards();
  renderCategoryChips();
  renderProductCards();
}

function dedupeVisibleFigureCards(items, { includeVariantFamily = true } = {}) {
  const dedupeState = createFigureDedupeState();
  items.forEach((figure) => {
    if (isPendingFigure(figure)) {
      const index = dedupeState.result.length;
      dedupeState.result.push(figure);
      dedupeState.keysByIndex.set(index, new Set());
      return;
    }
    addFigureToDedupeState(dedupeState, figure);
  });
  const canonicalItems = dedupedFigureStateResult(dedupeState);
  const acceptedIndexes = new Set();
  const occupiedKeys = new Set();
  let repeatedImages = 0;
  canonicalItems
    .map((figure, index) => ({ figure, index }))
    .sort((left, right) => normalizedFigureScore(right.figure) - normalizedFigureScore(left.figure) || left.index - right.index)
    .forEach(({ figure, index }) => {
      const keys = figureVisualSuppressionKeys(figure, { includeVariantFamily });
      if (keys.length && keys.some((key) => occupiedKeys.has(key))) {
        repeatedImages += 1;
        return;
      }
      acceptedIndexes.add(index);
      keys.forEach((key) => occupiedKeys.add(key));
    });
  const visibleItems = canonicalItems.filter((_, index) => acceptedIndexes.has(index));

  const totalRemoved = dedupeState.removed + repeatedImages;
  if (totalRemoved) {
    console.warn(`NekoPrice visual dedupe: ${totalRemoved} cards do mesmo produto/imagem foram escondidos.`);
  }
  return visibleItems;
}

let cachedMatches = null;
let lastMatchesState = null;

function getCurrentMatchesState() {
  return JSON.stringify({
    query: state.query.trim(),
    category: state.category,
    manufacturer: state.manufacturer,
    type: state.type,
    status: state.status,
    provider: state.provider,
    sort: state.sort,
    gridQuery: state.gridQuery.trim(),
    gridSort: state.gridSort,
    brandFilter: state.brandFilter,
    seriesFilter: activePopularSeriesFilter()?.id || "",
    seriesCharacter: normalizeText(state.seriesCharacter),
    figuresOnly: state.figuresOnly,
    catalogKind: state.catalogKind,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    quickFilters: activeFigureQuickFilters(),
    confirmedOnly: state.confirmedOnly,
    shipsToPortugal: state.shipsToPortugal,
    antiEcchi: state.antiEcchi,
    multiStoreOnly: state.multiStoreOnly,
    marketplaceLens: normalizedMarketplaceLens(),
    strictCategory: state.strictCategory,
    hasSearched,
    activeMfcSearchFigureId: activeMfcFigureId,
    currency: offerDisplayCurrency(),
    exchangeRateDate: exchangeRateMeta.date || "fallback",
    categoryRankingsGeneratedAt: categoryRankings.generatedAt || "",
    figuresLength: figures.length
  });
}

function currentFigureMatches() {
  const currentState = getCurrentMatchesState();
  if (cachedMatches && lastMatchesState === currentState) {
    return cachedMatches;
  }

  const isSearching = hasSearched && Boolean(state.query.trim());
  const mfcFigure = activeMfcSearchFigure();
  if (isSearching && mfcFigure) {
    cachedMatches = [mfcFigure];
    lastMatchesState = currentState;
    return cachedMatches;
  }

  const source = state.multiStoreOnly || normalizedMarketplaceLens() !== "all" || isMangaCatalogue() ? figures : isSearching ? figures : discoverySourceFigures();
  const matches = source.filter(
    (figure) =>
      categoryMatchesFigure(figure, isSearching)
      && figureMatchesBrandFilter(figure)
      && figureMatchesSeriesFilter(figure)
      && figureMatchesSeriesCharacterFilter(figure)
      && productMatchesFilters(figure, isSearching)
      && productMatchesGridQuery(figure)
  );
  const sortedMatches = sortVisibleProducts(matches, isSearching);
  const priceSortIsActive = ["lowestTotal", "highestTotal"].includes(state.gridSort || state.sort);
  const orderedMatches = priceSortIsActive ? sortedMatches : applyCategoryRankingToMatches(sortedMatches);
  cachedMatches = dedupeVisibleFigureCards(orderedMatches, {
    includeVariantFamily: !isSearching
  });
  lastMatchesState = currentState;
  return cachedMatches;
}

function renderShowMoreButton(totalMatches, visibleMatches) {
  if (!els.showMoreButton) return;
  if (usesPagedCatalogueLayout()) {
    els.showMoreButton.hidden = true;
    return;
  }
  const remaining = totalMatches - visibleMatches;
  const hasRemoteMore = cataloguePagination.enabled && cataloguePagination.hasMore;
  els.showMoreButton.hidden = remaining <= 0 && !hasRemoteMore;
  if (remaining > 0) {
    els.showMoreButton.textContent = `Show more (${remaining})`;
  } else if (hasRemoteMore) {
    const loaded = formatDatabaseNumber(figures.length);
    const total = cataloguePagination.total ? formatDatabaseNumber(cataloguePagination.total) : "";
    els.showMoreButton.textContent = total ? `Load more (${loaded}/${total})` : "Load more";
  } else {
    els.showMoreButton.textContent = "Show more";
  }
}

function figureTotalPages(totalMatches) {
  return Math.max(1, Math.ceil(Math.max(0, totalMatches) / FIGURE_PAGE_SIZE));
}

function figureRemotePageNumber(figure) {
  const page = Number(figure?.cataloguePage || figure?.catalogue_page || 1);
  return Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
}

function catalogueTotalLabel(totalMatches) {
  const knownTotal = Number(cataloguePagination.total) || 0;
  if (knownTotal > 0) return formatDatabaseNumber(knownTotal);
  return cataloguePagination.enabled && cataloguePagination.hasMore
    ? `${formatDatabaseNumber(totalMatches)}+`
    : formatDatabaseNumber(totalMatches);
}

function remoteFigurePageData(matches) {
  const pageCounts = new Map();
  matches.forEach((figure) => {
    const page = figureRemotePageNumber(figure);
    pageCounts.set(page, (pageCounts.get(page) || 0) + 1);
  });

  const loadedPages = [...pageCounts.keys()];
  const maxLoadedPage = Math.max(1, Number(cataloguePagination.page) || 1, ...loadedPages);
  figureCurrentPage = Math.min(Math.max(1, Number(figureCurrentPage) || 1), maxLoadedPage);

  const currentPageMatches = matches.filter((figure) => figureRemotePageNumber(figure) === figureCurrentPage);
  let start = 0;
  for (const [page, count] of pageCounts.entries()) {
    if (page < figureCurrentPage) start += count;
  }

  return {
    remote: true,
    totalPages: maxLoadedPage,
    start,
    end: start + currentPageMatches.length,
    matches: currentPageMatches,
    loadedTotal: matches.length,
    totalLabel: catalogueTotalLabel(matches.length)
  };
}

function clampFigureCurrentPage(totalMatches) {
  const totalPages = figureTotalPages(totalMatches);
  figureCurrentPage = Math.min(Math.max(1, Number(figureCurrentPage) || 1), totalPages);
  return totalPages;
}

function figurePageSlice(matches) {
  if (usesRemoteCataloguePages()) {
    return remoteFigurePageData(matches);
  }

  const totalPages = clampFigureCurrentPage(matches.length);
  const start = (figureCurrentPage - 1) * FIGURE_PAGE_SIZE;
  return {
    remote: false,
    totalPages,
    start,
    end: Math.min(start + FIGURE_PAGE_SIZE, matches.length),
    matches: matches.slice(start, start + FIGURE_PAGE_SIZE),
    loadedTotal: matches.length,
    totalLabel: formatDatabaseNumber(matches.length)
  };
}

function renderFigurePagination(totalMatches) {
  if (!els.figurePagination) return;
  const hasRemoteMore = cataloguePagination.enabled && cataloguePagination.hasMore;
  if (!usesPagedCatalogueLayout() || (totalMatches <= FIGURE_PAGE_SIZE && !hasRemoteMore)) {
    els.figurePagination.hidden = true;
    els.figurePagination.innerHTML = "";
    return;
  }

  const pageData = figurePageSlice(currentFigureMatches());
  const totalPages = pageData.totalPages;
  const pages = new Set([1, totalPages, figureCurrentPage - 1, figureCurrentPage, figureCurrentPage + 1]);
  const orderedPages = [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const pageButtons = [];
  let previousPage = 0;
  orderedPages.forEach((page) => {
    if (previousPage && page - previousPage > 1) {
      pageButtons.push(`<span class="figure-pagination-gap" aria-hidden="true">...</span>`);
    }
    pageButtons.push(`
      <button type="button" data-figure-page="${page}" aria-current="${page === figureCurrentPage ? "page" : "false"}">
        ${page}
      </button>
    `);
    previousPage = page;
  });

  const start = pageData.matches.length ? pageData.start + 1 : pageData.start;
  const end = pageData.end;
  const loadingMore = cataloguePagination.enabled && cataloguePagination.loading;
  const canGoNext = figureCurrentPage < totalPages || hasRemoteMore || loadingMore;
  const totalLabel = pageData.remote ? pageData.totalLabel : formatDatabaseNumber(totalMatches);

  els.figurePagination.hidden = false;
  els.figurePagination.innerHTML = `
    <p class="figure-pagination-status">
      ${formatDatabaseNumber(start)}-${formatDatabaseNumber(end)} / ${totalLabel}
      ${loadingMore ? "<span>loading...</span>" : ""}
    </p>
    <div class="figure-pagination-controls">
      <button type="button" data-figure-page="${figureCurrentPage - 1}" ${figureCurrentPage <= 1 ? "disabled" : ""}>Previous</button>
      ${pageButtons.join("")}
      <button type="button" data-figure-page="${figureCurrentPage + 1}" ${canGoNext ? "" : "disabled"}>Next</button>
    </div>
  `;
}

async function setFigurePage(page) {
  let matches = currentFigureMatches();
  const requestedPage = Math.max(1, Number(page) || 1);

  if (usesRemoteCataloguePages()) {
    let pageData = remoteFigurePageData(matches);
    while (requestedPage > pageData.totalPages && cataloguePagination.enabled && cataloguePagination.hasMore) {
      if (els.resultMeta) els.resultMeta.textContent = "Loading next page...";
      const loaded = await loadNextCataloguePage({ render: false });
      if (!loaded) break;
      matches = currentFigureMatches();
      pageData = remoteFigurePageData(matches);
    }

    const nextPage = Math.min(requestedPage, pageData.totalPages);
    if (nextPage === figureCurrentPage) return;
    figureCurrentPage = nextPage;
    renderProductCards();
    requestAnimationFrame(() => {
      els.resultsSection?.scrollTo({ top: 0, behavior: "smooth" });
    });
    return;
  }

  let totalPages = figureTotalPages(matches.length);

  if (requestedPage > totalPages && cataloguePagination.enabled && cataloguePagination.hasMore) {
    if (els.resultMeta) els.resultMeta.textContent = "Loading next page...";
    const loaded = await loadNextCataloguePage({ render: false });
    if (loaded) {
      matches = currentFigureMatches();
      totalPages = figureTotalPages(matches.length);
    }
  }

  const nextPage = Math.min(requestedPage, totalPages);
  if (nextPage === figureCurrentPage) return;
  figureCurrentPage = nextPage;
  renderProductCards();
  requestAnimationFrame(() => {
    els.resultsSection?.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function updateResultsHeading(isSearching, totalMatches, visibleMatches) {
  if (!els.resultsTitle || !els.resultsSubtitle) return;

  if (isMangaCatalogue()) {
    els.resultsTitle.textContent = state.figureCatalogLabel || (isSearching ? `${state.query.trim()} mangas` : "Mangas");
    els.resultsSubtitle.textContent = "Independent manga catalogue: only manga products, with price and store filters.";
    return;
  }

  const activeSeries = activePopularSeriesFilter();
  if (activeSeries) {
    els.resultsTitle.textContent = `${activeSeries.label} figures`;
    els.resultsSubtitle.textContent = "Series view: compare figure prices, stores, availability, characters, and trusted offers for this franchise.";
    return;
  }

  if (state.figuresOnly) {
    const label = state.figureCatalogLabel || (isSearching ? `${state.query.trim()} figures` : CATEGORY_LABELS[state.category] || "Anime figures");
    els.resultsTitle.textContent = label;
    els.resultsSubtitle.textContent = "Independent figure catalogue: only figures with real images, price filters, category filters, and store filters.";
    return;
  }

  if (isSearching) {
    els.resultsTitle.textContent = "Search results";
    els.resultsSubtitle.textContent = "Complete figures with verified prices are shown first.";
    return;
  }

  if (state.brandFilter) {
    const label = state.brandLabel || state.brandFilter;
    els.resultsTitle.textContent = `Search by brand: ${label}`;
    els.resultsSubtitle.textContent = `Showing all ${label} catalogue matches. Priced store offers stay first.`;
    return;
  }

  if (state.multiStoreOnly) {
    els.resultsTitle.textContent = "Figures with 2+ stores";
    els.resultsSubtitle.textContent = "Live robot coverage: only figures with real prices from multiple providers.";
    return;
  }

  if (normalizedMarketplaceLens() !== "all") {
    const label = marketplaceLensLabel();
    els.resultsTitle.textContent = label;
    els.resultsSubtitle.textContent = "Quick comparison view using verified direct product offers and store trust signals.";
    return;
  }

  const category = CATEGORY_LABELS[state.category] || "Figures";
  els.resultsTitle.textContent = category === "All figures" ? "All anime figures" : category;
  els.resultsSubtitle.textContent = totalMatches > visibleMatches
    ? `Browse the full database. ${totalMatches - visibleMatches} more figures are ready to load.`
    : "Browse the full database with verified priced offers first.";
}

function comparisonGuideModel(isSearching, totalMatches, visibleMatches) {
  const market = `${currentCountryLabel()} · ${offerDisplayCurrency()}`;
  const lens = normalizedMarketplaceLens();
  const noMatches = Number(totalMatches) === 0;

  if (noMatches) {
    return {
      title: "No matching comparison yet.",
      copy: "Try a broader franchise, character, JAN, or clear strict filters. The catalogue only promotes figures with real image/description data.",
      tips: [
        ["Try", "Character, series, JAN"],
        ["Check", "Quick view set to All"],
        ["Market", market]
      ]
    };
  }

  const activeSeries = activePopularSeriesFilter();
  if (activeSeries) {
    return {
      title: `Comparing ${activeSeries.label} figures.`,
      copy: "This series view keeps the catalogue figure-only and lets you narrow by character, category, price, store, and availability.",
      tips: [
        ["Series", activeSeries.label],
        ["Shown", `${formatDatabaseNumber(visibleMatches)} cards`],
        ["Market", market]
      ]
    };
  }

  if (isSearching) {
    return {
      title: `Search is comparing ${formatDatabaseNumber(totalMatches)} result${totalMatches === 1 ? "" : "s"}.`,
      copy: "Exact product matches and verified store prices are ranked first. JAN searches keep versions separate whenever possible.",
      tips: [
        ["Exactness", currentJanQuery() ? "JAN mode" : "Name/series mode"],
        ["Shown", `${formatDatabaseNumber(visibleMatches)} cards`],
        ["Market", market]
      ]
    };
  }

  if (lens === "local") {
    return {
      title: "Local-store view is active.",
      copy: `These cards have verified offers from stores marked local for ${currentCountryLabel()}. International deals stay available in All.`,
      tips: [
        ["Local market", currentCountryLabel()],
        ["Currency", offerDisplayCurrency()],
        ["Tip", "Compare shipping too"]
      ]
    };
  }

  if (lens === "multiStore" || state.multiStoreOnly) {
    return {
      title: "Only figures with 2+ priced stores are shown.",
      copy: "This is the strongest comparison view: multiple verified direct offers make price differences easier to trust.",
      tips: [
        ["Coverage", "2+ stores"],
        ["Sort", selectDisplayLabel(els.gridSortSelect, state.gridSort)],
        ["Shown", formatDatabaseNumber(visibleMatches)]
      ]
    };
  }

  if (lens === "needsCheck") {
    return {
      title: "Review-needed offers are highlighted.",
      copy: "Use this view to find stale, inferred-currency, or guard-warning offers. Refresh or report anything that looks wrong.",
      tips: [
        ["Purpose", "Quality audit"],
        ["Action", "Refresh / report"],
        ["Warning", "Do not trust blindly"]
      ]
    };
  }

  if (lens === "preorder") {
    return {
      title: "Pre-orders are grouped for early comparison.",
      copy: "Use local and international store signals to compare availability before release. Prices can change, so freshness matters.",
      tips: [
        ["Status", "Pre-order"],
        ["Check", "Freshness badge"],
        ["Market", market]
      ]
    };
  }

  if (lens === "bestPrice") {
    return {
      title: "Best-price view is sorted for deal hunting.",
      copy: "Cards show the lowest verified direct product prices first, plus store count and guard state before you open a product.",
      tips: [
        ["Sort", "Lowest verified"],
        ["Trust", "Guard state on cards"],
        ["Currency", offerDisplayCurrency()]
      ]
    };
  }

  return {
    title: "Compare by price, store coverage, and trust.",
    copy: "Cards show verified store count, local/international signal, guard state, and best store. Open Compare for the full offer table.",
    tips: [
      ["Shown", `${formatDatabaseNumber(visibleMatches)} / ${formatDatabaseNumber(totalMatches)}`],
      ["Market", market],
      ["Use", "Quick views above"]
    ]
  };
}

function renderComparisonGuide(isSearching, totalMatches, visibleMatches) {
  if (!els.comparisonGuide || !els.comparisonGuideTitle || !els.comparisonGuideCopy || !els.comparisonGuideTips) return;
  if (activeView !== "catalog" || !catalogueReady) {
    els.comparisonGuide.hidden = true;
    return;
  }

  const guide = comparisonGuideModel(isSearching, totalMatches, visibleMatches);
  els.comparisonGuide.hidden = false;
  els.comparisonGuideTitle.textContent = guide.title;
  els.comparisonGuideCopy.textContent = guide.copy;
  els.comparisonGuideTips.innerHTML = guide.tips
    .map(([label, value]) => `
      <span>
        <b>${escapeHtml(label)}</b>
        ${escapeHtml(value)}
      </span>
    `)
    .join("");
}

function renderProductCards() {
  if (activeView !== "catalog") return;

  const isSearching = hasSearched && Boolean(state.query.trim());
  const pagedCatalogue = usesPagedCatalogueLayout();
  setResultsDisplayMode(pagedCatalogue ? "figures" : "");
  setDiscoverySectionsVisible(!pagedCatalogue && !state.multiStoreOnly && !isSearching && !state.catalogStandalone);
  els.resultsSection.hidden = false;
  renderCategoryChips();

  if (!catalogueReady) {
    ensureCatalogueLoadStarted();
    if (els.activeFilterBar) els.activeFilterBar.hidden = true;
    if (els.comparisonGuide) els.comparisonGuide.hidden = true;
    if (els.seriesFilterSection) els.seriesFilterSection.hidden = true;
    showCatalogueLoading();
    return;
  }

  if (figureFilterRefreshIsPending()) {
    showFigureFilterRefreshPending();
    return;
  }

  if (catalogueSearchIsPending()) {
    showCatalogueSearchPending();
    return;
  }

  els.productGrid?.classList.remove("is-filter-refreshing", "is-catalogue-loading");
  els.productGrid?.querySelector(".catalogue-load-status")?.remove();
  els.productGrid?.setAttribute("aria-busy", "false");

  const mfcFigure = activeMfcSearchFigure();
  const jan = currentJanQuery();
  const matches = currentFigureMatches();
  const pageData = pagedCatalogue ? figurePageSlice(matches) : null;
  const visibleMatches = pageData ? pageData.matches : matches.slice(0, visibleCardLimit);
  const activeSeries = activePopularSeriesFilter();
  const localizedFigures = localizedUiText("Figures");
  const localizedMangas = localizedUiText("Mangas");
  const localizedResultKind = activeSeries
    ? `${activeSeries.label} ${localizedFigures}`
    : isMangaCatalogue()
      ? localizedMangas
      : localizedFigures;
  updateResultsHeading(isSearching, matches.length, visibleMatches.length);
  renderMarketplaceLensBar(matches.length, visibleMatches.length);
  renderComparisonGuide(isSearching, matches.length, visibleMatches.length);
  renderActiveFilterBar(matches.length, visibleMatches.length);
  renderSeriesFilterPanel(matches.length);

  if (els.resultQuery) {
    els.resultQuery.hidden = !isSearching || Boolean(activeSeries);
    els.resultQuery.textContent = mfcFigure
      ? `Showing MFC result for JAN "${jan}".`
      : isSearching && !activeSeries
        ? `Showing results for "${state.query.trim()}".`
        : "";
  }

  if (isSearching) {
    const remoteSearchTotal = cataloguePagination.enabled && cataloguePagination.query === state.query.trim()
      ? cataloguePagination.total
      : 0;
    if (els.resultMeta) {
      els.resultMeta.textContent = mfcFigure
        ? "1 match"
        : pagedCatalogue
          ? cataloguePagination.enabled && cataloguePagination.hasMore
            ? `Page ${figureCurrentPage}: ${formatDatabaseNumber(pageData.start + 1)}-${formatDatabaseNumber(pageData.end)} of ${activeSeries ? formatDatabaseNumber(matches.length) : pageData.remote ? pageData.totalLabel : formatDatabaseNumber(matches.length)} ${localizedResultKind}.`
            : `Page ${figureCurrentPage} of ${pageData.totalPages}: ${formatDatabaseNumber(pageData.start + 1)}-${formatDatabaseNumber(pageData.end)} of ${formatDatabaseNumber(matches.length)} ${localizedResultKind}.`
        : remoteSearchTotal > visibleMatches.length
          ? `Showing ${visibleMatches.length} of ${remoteSearchTotal}.`
          : matches.length > visibleMatches.length
            ? `Showing ${visibleMatches.length} of ${matches.length}.`
            : `${matches.length} match${matches.length === 1 ? "" : "es"}.`;
    }
  } else {
    const category = CATEGORY_LABELS[state.category] || "Figures";
    const localizedCategory = (isMangaCatalogue()
      ? localizedMangas
      : state.category === "trending"
        ? localizedFigures
        : localizedUiText(category))
      .toLocaleLowerCase(window.NekoI18n?.getLocale() || "en");
    const filterNote = state.gridQuery ? ` matching "${state.gridQuery.trim()}"` : state.brandFilter ? ` in ${state.brandLabel || state.brandFilter}` : "";
    const remoteTotal = cataloguePagination.enabled && cataloguePagination.total && !filterNote && state.category === "trending"
      ? cataloguePagination.total
      : matches.length;
    if (els.resultMeta) {
      els.resultMeta.textContent = pagedCatalogue
        ? cataloguePagination.enabled && cataloguePagination.hasMore
          ? `Page ${figureCurrentPage}: ${formatDatabaseNumber(pageData.start + 1)}-${formatDatabaseNumber(pageData.end)} of ${pageData.remote ? pageData.totalLabel : formatDatabaseNumber(matches.length)} ${localizedCategory}${filterNote}.`
          : `Page ${figureCurrentPage} of ${pageData.totalPages}: ${formatDatabaseNumber(pageData.start + 1)}-${formatDatabaseNumber(pageData.end)} of ${formatDatabaseNumber(matches.length)} ${localizedCategory}${filterNote}.`
        : remoteTotal > visibleMatches.length
        ? `Showing ${visibleMatches.length} of ${remoteTotal} ${localizedCategory}${filterNote}.`
        : `${matches.length} ${localizedCategory}${filterNote}.`;
    }
  }

  if (!matches.length) {
    const rankingMissing = state.figuresOnly && !activeCategoryRanking();
    if (els.resultMeta) {
      els.resultMeta.textContent = isSearching
        ? `0 matches for "${state.query.trim()}".`
        : isMangaCatalogue()
          ? "0 mangas found with these filters."
          : "0 figures found with these filters.";
    }
    if (activeView !== "detail") {
      selectedFigureId = null;
      els.figureSection.hidden = true;
    }
    renderActiveFilterBar(0, 0);
    renderShowMoreButton(0, 0);
    renderFigurePagination(0);
    els.productGrid.innerHTML = emptyState(
      rankingMissing
        ? "This category is still being updated."
        : isMangaCatalogue()
          ? "No mangas found"
          : isSearching
            ? "No figures found"
            : "No figures in this category",
      rankingMissing
        ? "Try again after the next automatic refresh."
        : isSearching
        ? isMangaCatalogue()
          ? "Try a manga title, series, JAN, or store."
          : "Try a character, series, manufacturer, figure line, or version name."
        : isMangaCatalogue()
          ? "Try another store or loosen the optional filters."
          : "Try another category or loosen the optional filters."
    );
    return;
  }

  if (selectedFigureId && !matches.some((figure) => figure.id === selectedFigureId)) {
    if (activeView !== "detail") {
      selectedFigureId = null;
      els.figureSection.hidden = true;
    }
  }

  const renderedCards = [];
  visibleMatches.forEach((figure, index) => {
    try {
      renderedCards.push(renderProductCard(figure, index));
    } catch (error) {
      console.warn("Error rendering figure:", figure, error);
    }
  });

  if (!renderedCards.length) {
    els.productGrid.innerHTML = emptyState(
      "Some figures could not be rendered",
      "Open the browser console for the malformed catalogue rows that were skipped."
    );
    renderShowMoreButton(matches.length, 0);
    renderFigurePagination(matches.length);
    return;
  }

  els.productGrid.innerHTML = renderedCards.join("");
  renderShowMoreButton(matches.length, visibleMatches.length);
  renderFigurePagination(matches.length);
  bindCardImageFallbacks();
  if (selectedFigureId) renderProductCardsCurrentSelection();
}

function loadMoreProductCards() {
  if (!catalogueReady || !els.showMoreButton || els.showMoreButton.hidden) return;
  const matches = currentFigureMatches();
  if (visibleCardLimit >= matches.length && cataloguePagination.enabled && cataloguePagination.hasMore) {
    loadNextCataloguePage();
    return;
  }
  visibleCardLimit += CARD_LIMIT_INCREMENT;
  renderProductCards();
}

function maybeAutoLoadMoreCards() {
  if (activeView !== "catalog" || els.resultsSection?.hidden) return;
  if (usesPagedCatalogueLayout()) {
    return;
  }
  if (!els.showMoreButton || els.showMoreButton.hidden) return;
  const rect = els.showMoreButton.getBoundingClientRect();
  const preloadOffset = Math.max(360, window.innerHeight * 0.65);
  if (rect.top <= window.innerHeight + preloadOffset) {
    loadMoreProductCards();
  }
}

function applyBrandFilter(filter, label = filter) {
  activeView = "catalog";
  state.multiStoreOnly = false;
  state.catalogStandalone = true;
  state.figuresOnly = false;
  state.catalogKind = "all";
  state.figureCatalogLabel = "";
  setResultsDisplayMode("");
  setDiscoverySectionsVisible(false);
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  state.brandFilter = filter || "";
  state.brandLabel = label || filter || "";
  state.seriesFilter = null;
  state.seriesCharacter = "";
  document.body.classList.remove("series-catalog-open");
  state.category = "trending";
  state.gridQuery = "";
  state.query = "";
  hasSearched = false;
  activeMfcFigureId = null;
  selectedFigureId = null;
  if (els.searchInput) els.searchInput.value = "";
  if (els.gridSearchInput) els.gridSearchInput.value = "";
  resetVisibleCards();
  renderCategoryChips();
  renderProductCards();
  hideDatabaseSection();
  els.resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showMultiStoreFigures(shouldScroll = true) {
  activeView = "catalog";
  state.multiStoreOnly = true;
  state.catalogStandalone = true;
  state.figuresOnly = false;
  state.catalogKind = "all";
  state.figureCatalogLabel = "";
  setResultsDisplayMode("");
  state.brandFilter = "";
  state.brandLabel = "";
  state.seriesFilter = null;
  state.seriesCharacter = "";
  document.body.classList.remove("series-catalog-open");
  state.category = "trending";
  state.query = "";
  state.gridQuery = "";
  hasSearched = false;
  activeMfcFigureId = null;
  selectedFigureId = null;
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  setDiscoverySectionsVisible(false);
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  if (els.searchInput) els.searchInput.value = "";
  if (els.gridSearchInput) els.gridSearchInput.value = "";
  resetVisibleCards();
  renderCategoryChips();
  renderProductCards();
  updateSidebarMultiStoreCount();
  if (shouldScroll) {
    els.resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function emptyState(title, body) {
  const isLoading = /loading|carregar|preparar/i.test(`${title} ${body}`);
  const loadingImage = escapeHtml(NEKO_LOADING_IMAGE);
  const loadingFallbackImage = escapeHtml(NEKO_LOADING_FALLBACK_IMAGE);
  return `
    <article class="product-card empty-card empty-state ${isLoading ? "neko-loading-card" : ""}" role="status">
      <div class="product-thumb">
        ${isLoading
          ? `<img class="neko-loading-image" src="${loadingImage}" alt="" aria-hidden="true" decoding="async" loading="eager" onerror="this.onerror=null; this.src='${loadingFallbackImage}';">`
          : `<div class="figure-placeholder" aria-hidden="true"></div>`}
      </div>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p class="muted">${escapeHtml(body)}</p>
        ${isLoading ? `<p class="neko-loading-dots" aria-hidden="true"><span></span><span></span><span></span></p>` : `<button type="button" class="secondary-button" data-query="Miku">Try Miku</button>`}
      </div>
    </article>
  `;
}

function productCardUsefulMeta(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const normalized = normalizeText(text);
  if ([
    "official product",
    "unknown",
    "unknown manufacturer",
    "undefined",
    "null",
    "figure",
    "manga",
    "standard",
    "non scale",
    "no jan yet"
  ].includes(normalized)) {
    return "";
  }
  return text;
}

function productCardMetaText(figure) {
  const safeFigure = figure ?? {};
  return [
    productCardUsefulMeta(safeFigure.manufacturer),
    productCardUsefulMeta(safeFigure.series)
  ]
    .filter(Boolean)
    .slice(0, 2)
    .join(" / ");
}

function offerConditionBucket(offer) {
  const text = normalizeText([offer?.condition, offer?.availability].join(" "));
  if (/(pre owned|preowned|used|second hand|opened|b grade|b condition|damaged|defect|pre owned)/.test(text)) {
    return "used";
  }
  return "new";
}

function verifiedProductOffersForCard(figure) {
  return offersForCountry(figure).filter(offerHasVerifiedProductPrice);
}

function lowestVerifiedOfferForBucket(figure, bucket, verifiedOffers = verifiedProductOffersForCard(figure)) {
  return verifiedOffers
    .filter(offerHasVerifiedProductPrice)
    .filter((offer) => offerConditionBucket(offer) === bucket)
    .sort((a, b) => {
      const priceA = offerProductPriceValue(a);
      const priceB = offerProductPriceValue(b);
      if (priceA !== priceB) return priceA - priceB;
      return providerName(a.provider).localeCompare(providerName(b.provider));
    })[0] || null;
}

function distinctProviderCount(offers) {
  return new Set(offers.map((offer) => offerProviderId(offer)).filter(Boolean)).size;
}

function providerBestPricePoints(offers) {
  const byProvider = new Map();
  (Array.isArray(offers) ? offers : []).forEach((offer) => {
    if (!offerIsDirectPricedProduct(offer)) return;
    const price = offerProductPriceValue(offer);
    if (price === null) return;
    const providerId = offerProviderId(offer) || providerName(offer?.provider);
    if (!providerId) return;
    const current = byProvider.get(providerId);
    if (!current || price < current.price) {
      byProvider.set(providerId, {
        providerId,
        providerName: providerName(offer?.provider),
        price,
        currency: String(offer?.currency || offerDisplayCurrency()).toUpperCase(),
        offer
      });
    }
  });

  return [...byProvider.values()].sort((left, right) =>
    left.price - right.price || left.providerName.localeCompare(right.providerName)
  );
}

function priceSpreadSummary(offers) {
  const points = providerBestPricePoints(offers);
  const currency = offerDisplayCurrency();
  if (points.length < 2) {
    return {
      storeCount: points.length,
      hasComparison: false,
      hasSaving: false,
      currency,
      minPrice: points[0]?.price ?? null,
      maxPrice: points[0]?.price ?? null,
      saving: 0,
      savingPercent: 0,
      lowestProvider: points[0]?.providerName || "",
      highestProvider: points[0]?.providerName || ""
    };
  }

  const lowest = points[0];
  const highest = points[points.length - 1];
  const saving = roundMoney(Math.max(0, highest.price - lowest.price));
  const savingPercent = highest.price > 0 ? Math.round((saving / highest.price) * 100) : 0;

  return {
    storeCount: points.length,
    hasComparison: true,
    hasSaving: saving > 0.01,
    currency: lowest.currency || currency,
    minPrice: lowest.price,
    maxPrice: highest.price,
    saving,
    savingPercent,
    lowestProvider: lowest.providerName,
    highestProvider: highest.providerName
  };
}

function productCardComparisonStats(figure, verifiedOffers = verifiedProductOffersForCard(figure)) {
  const safeOffers = Array.isArray(verifiedOffers) ? verifiedOffers : [];
  const localProviderIds = new Set(safeOffers.filter(offerIsLocalToUser).map((offer) => offerProviderId(offer)).filter(Boolean));
  const checkedOffers = safeOffers.filter(offerIsFreshlyChecked);
  const warningOffers = safeOffers.filter((offer) => offerTrustSummary(offer).hasGuardWarning);
  const best = lowestProductPriceOffer(safeOffers);
  const bestTrust = best ? offerTrustSummary(best) : null;
  const bestFreshness = best ? offerFreshnessInfo(best) : null;

  return {
    best,
    bestFreshness,
    bestTrust,
    offerCount: safeOffers.length,
    storeCount: distinctProviderCount(safeOffers),
    localStoreCount: localProviderIds.size,
    checkedCount: checkedOffers.length,
    warningCount: warningOffers.length,
    priceSpread: priceSpreadSummary(safeOffers)
  };
}

function directProductCardPrice(figure, bucket) {
  const safeFigure = figure ?? {};
  const price = bucket === "used"
    ? numberOrNull(safeFigure.preOwnedPrice ?? safeFigure.preownedPrice ?? safeFigure.usedPrice)
    : numberOrNull(safeFigure.brandNewPrice ?? safeFigure.newPrice);
  if (price === null || price <= 0) return null;
  return {
    productPrice: price,
    currency: safeFigure.currency || offerDisplayCurrency()
  };
}

function productCardBadge(figure, ranking) {
  const rankedBadge = categoryRankingBadges(ranking).find((badge) => ["New", "Sale", "Trending"].includes(badge));
  if (rankedBadge) return rankedBadge;
  if (figure?.availability === "Pre-order") return "Pre-order";
  return "";
}

function renderProductCardPriceButton(figureId, bucket, offer) {
  if (!offer) return "";
  const price = offerProductPriceValue(offer);
  if (price === null) return "";
  if (bucket === "new") {
    return `
      <div class="product-card__price-display product-card__price-display--new" aria-label="${escapeHtml(`New price from ${formatOfferPrice(offer, price)}`)}">
        <strong>${escapeHtml(formatOfferPrice(offer, price, PRICE_FALLBACK))}</strong>
      </div>
    `;
  }
  const label = "Pre-Owned";
  return `
    <button class="product-card__price-button product-card__price-button--used" type="button" data-select="${escapeHtml(figureId)}" aria-label="${escapeHtml(`${label} from ${formatOfferPrice(offer, price)}`)}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(formatOfferPrice(offer, price, PRICE_FALLBACK))}</strong>
    </button>
  `;
}

function renderProductCardPriceSpread(spread) {
  if (!spread?.hasComparison) return "";
  const range = `${formatMoney(spread.minPrice, spread.currency)}–${formatMoney(spread.maxPrice, spread.currency)}`;
  if (spread.hasSaving) {
    const title = `Lowest at ${spread.lowestProvider}; highest at ${spread.highestProvider}. Range ${range}.`;
    return `
      <p class="product-card__spread product-card__spread--saving" title="${escapeHtml(title)}">
        <span>Save up to</span>
        <strong>${escapeHtml(formatMoney(spread.saving, spread.currency))}</strong>
        <small>${escapeHtml(`${range} · ${spread.savingPercent}% gap`)}</small>
      </p>
    `;
  }

  return `
    <p class="product-card__spread" title="${escapeHtml(`Same product price across ${spread.storeCount} stores. Compare shipping and stock.`)}">
      <span>Stores aligned</span>
      <strong>${escapeHtml(range)}</strong>
      <small>Compare shipping + stock</small>
    </p>
  `;
}

function renderProductCardComparisonSummary(stats) {
  if (!stats.offerCount) {
    return `
      <div class="product-card__market product-card__market--empty" aria-label="No verified stores yet">
        <span>No verified stores yet</span>
        <small>Waiting for direct product offers</small>
      </div>
    `;
  }

  const trustLabel = stats.warningCount ? `${stats.warningCount} needs check` : "Guard clean";
  const localLabel = stats.localStoreCount
    ? `${stats.localStoreCount} local`
    : "International";
  const checkedLabel = stats.checkedCount
    ? `${stats.checkedCount} checked`
    : "Refresh pending";

  return `
    <div class="product-card__market" aria-label="${escapeHtml(`${stats.storeCount} verified stores, ${checkedLabel}, ${trustLabel}`)}">
      <span><b>${escapeHtml(String(stats.storeCount))}</b>${escapeHtml(stats.storeCount === 1 ? " store" : " stores")}</span>
      <span>${escapeHtml(localLabel)}</span>
      <span class="${stats.warningCount ? "needs-check" : "is-clean"}">${escapeHtml(trustLabel)}</span>
    </div>
  `;
}

function productCardCompareLabel(stats) {
  if (stats.offerCount > 1) return `Compare ${stats.offerCount} offers`;
  if (stats.offerCount === 1) return "Compare 1 offer";
  return "Compare";
}

function renderProductCard(figure, index = 0) {
  const safeFigure = figure ?? {};
  const figureId = safeFigure?.id || figureFallbackId(safeFigure);
  const fullTitle = localizedFigureTitle(safeFigure) || "Untitled";
  const title = compactFigureNameForCard(safeFigure, 34);
  const pending = isPendingFigure(safeFigure);
  const imageUrl = pending && !figureHasRealImage(safeFigure) ? FIGURE_PLACEHOLDER_IMAGE : premiumFigureImageFor(safeFigure);
  const imageClasses = [
    "product-card__image",
    shouldBlurFigureImage(safeFigure) ? "ecchi-blur" : "",
    productCardImageFitClass(safeFigure, imageUrl)
  ].filter(Boolean).join(" ");
  const rankingMatch = categoryRankingItemForFigure(safeFigure);
  const ranking = rankingMatch?.item || null;
  const badge = productCardBadge(safeFigure, ranking);
  const meta = productCardMetaText(safeFigure);
  const verifiedOffers = verifiedProductOffersForCard(safeFigure);
  const comparisonStats = productCardComparisonStats(safeFigure, verifiedOffers);
  const brandNewOffer = lowestVerifiedOfferForBucket(safeFigure, "new", verifiedOffers) || directProductCardPrice(safeFigure, "new");
  const preOwnedOffer = lowestVerifiedOfferForBucket(safeFigure, "used", verifiedOffers) || directProductCardPrice(safeFigure, "used");
  const priceButtons = [
    renderProductCardPriceButton(figureId, "new", brandNewOffer),
    renderProductCardPriceButton(figureId, "used", preOwnedOffer)
  ].filter(Boolean).join("");
  const isWishlisted = wishlist.includes(figureId);

  return `
    <article class="product-card product-card--marketplace${pending ? " is-pending-card" : ""}" aria-current="${figureId === selectedFigureId}">
      <div class="product-card__image-wrap">
        <button class="product-card__image-button" type="button" data-select="${escapeHtml(figureId)}" aria-label="Compare prices for ${escapeHtml(fullTitle)}">
          <img class="${escapeHtml(imageClasses)}" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(fullTitle)}" loading="lazy" decoding="async" data-figure-image-key="${escapeHtml(figureId)}">
        </button>
        ${badge ? `<span class="product-card__badge">${escapeHtml(badge)}</span>` : ""}
        <button class="product-card__wishlist" type="button" data-wish="${escapeHtml(figureId)}" aria-pressed="${isWishlisted}" aria-label="${isWishlisted ? "Remove from wishlist" : "Add to wishlist"}">
          <span aria-hidden="true">♥</span>
        </button>
      </div>
      <div class="product-card__body">
        <h3 class="product-card__title">
          <button type="button" data-select="${escapeHtml(figureId)}" title="${escapeHtml(fullTitle)}">${escapeHtml(title)}</button>
        </h3>
        ${meta ? `<p class="product-card__meta">${escapeHtml(meta)}</p>` : ""}
        ${renderProductCardComparisonSummary(comparisonStats)}
        <div class="product-card__prices">
          ${priceButtons || `<span class="product-card__price-unavailable">Price unavailable</span>`}
        </div>
        <button class="product-card__compare" type="button" data-select="${escapeHtml(figureId)}">${escapeHtml(productCardCompareLabel(comparisonStats))}</button>
      </div>
    </article>
  `;
}

function variationSignature(figure) {
  return [figure.character, figure.series, figure.scale, figure.version]
    .filter(Boolean)
    .join(" / ");
}

function buyerFacingDescription(figure) {
  const safeFigure = figure ?? {};
  const name = compactFigureNameForCard(safeFigure, 48);
  const manufacturer = safeFigure?.manufacturer || "Unknown manufacturer";
  const displayManufacturer = manufacturer === "Unknown manufacturer"
    ? localizedUiText(manufacturer)
    : manufacturer;
  return `${name} by ${displayManufacturer}.`;
}

function statusBadgeClass(status) {
  if (status === "In stock" || status === "Available") return "mint";
  if (status === "Pre-order") return "blue";
  if (status === "Sold out" || status === "Archive") return "gray";
  return "pink";
}

function confidenceBadgeClass(confidence) {
  if (confidence === "Confirmed") return "mint";
  if (confidence === "Local") return "mint";
  if (confidence === "High") return "blue";
  if (confidence === "Medium") return "yellow";
  return "gray";
}

function parseOfferTimestamp(rawValue) {
  const raw = String(rawValue || "").trim();
  if (!raw) return null;
  const normalized = raw.includes("T") ? raw : raw.replace(" ", "T");
  const parsed = Date.parse(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function offerFreshnessInfo(offer) {
  const raw = offer?.lastCheckedAt || offer?.last_checked || offer?.updatedAt || offer?.lastUpdated || "";
  const parsed = parseOfferTimestamp(raw);
  if (!parsed) {
    return {
      label: "Not refreshed yet",
      className: "yellow",
      warning: true,
      title: "No direct store refresh has been recorded for this offer yet."
    };
  }

  const ageHours = Math.max(0, (Date.now() - parsed) / 36e5);
  const exact = String(raw).slice(0, 19).replace("T", " ");
  if (ageHours < 1) {
    return { label: "Checked now", className: "mint", warning: false, title: `Last direct check: ${exact}` };
  }
  if (ageHours < 24) {
    return { label: `Checked ${Math.floor(ageHours)}h ago`, className: "mint", warning: false, title: `Last direct check: ${exact}` };
  }

  const ageDays = Math.floor(ageHours / 24);
  if (ageDays <= 7) {
    return { label: `Checked ${ageDays}d ago`, className: "mint", warning: false, title: `Last direct check: ${exact}` };
  }
  if (ageDays <= 30) {
    return { label: `Checked ${ageDays}d ago`, className: "yellow", warning: true, title: `Last direct check: ${exact}` };
  }
  return { label: `Stale ${ageDays}d`, className: "amber", warning: true, title: `Last direct check: ${exact}` };
}

function offerCurrencyInfo(offer) {
  const confidence = String(offer?.currencyConfidence || "").toLowerCase();
  const originalCurrency = String(offer?.originalCurrency || offer?.sourceCurrency || "").toUpperCase();
  const displayCurrency = String(offer?.currency || offerDisplayCurrency()).toUpperCase();
  const originalPrice = numberOrNull(offer?.originalPrice ?? offer?.sourceProductPrice);

  if (confidence === "explicit") {
    return {
      label: originalCurrency && originalCurrency !== displayCurrency ? `Converted from ${originalCurrency}` : `${displayCurrency} price`,
      className: originalCurrency && originalCurrency !== displayCurrency ? "blue" : "mint",
      warning: false,
      title: "The source currency was explicit in the store data."
    };
  }

  if (confidence === "inferred_jpy" || confidence.startsWith("store_default_")) {
    return {
      label: `Currency inferred${originalCurrency ? `: ${originalCurrency}` : ""}`,
      className: "yellow",
      warning: true,
      title: "The source currency was missing and NekoPrice inferred it from the store/default rules."
    };
  }

  if (confidence === "missing_assumed_eur") {
    return {
      label: "Currency assumed",
      className: "amber",
      warning: true,
      title: "The source currency was missing and needs another direct refresh."
    };
  }

  if (originalPrice !== null && originalCurrency && originalCurrency !== displayCurrency) {
    return {
      label: `Converted from ${originalCurrency}`,
      className: "blue",
      warning: false,
      title: "Shown in your selected currency; original store price is preserved below."
    };
  }

  return {
    label: `${displayCurrency} display`,
    className: "gray",
    warning: false,
    title: "Shown in your selected display currency."
  };
}

function offerValidationInfo(offer) {
  const validationStatus = String(offer?.validationStatus || "").toLowerCase();
  const blocked = BLOCKED_OFFER_VALIDATION_STATUSES.has(validationStatus);
  const warning = WARNING_OFFER_VALIDATION_STATUSES.has(validationStatus);
  if (blocked) {
    return {
      label: "Blocked by guard",
      className: "amber",
      warning: true,
      title: offer?.validationReason || "This offer failed the public price guard."
    };
  }
  if (warning) {
    return {
      label: "Check required",
      className: "yellow",
      warning: true,
      title: offer?.validationReason || "This offer needs another validation pass."
    };
  }
  if (validationStatus === "ok") {
    return {
      label: "Guard passed",
      className: "mint",
      warning: false,
      title: "The backend price guard accepted this offer."
    };
  }
  return {
    label: "Guard pending",
    className: "gray",
    warning: true,
    title: "No explicit validation status was supplied."
  };
}

function offerOriginalPriceNote(offer) {
  const originalPrice = numberOrNull(offer?.originalPrice ?? offer?.sourceProductPrice);
  const originalCurrency = String(offer?.originalCurrency || offer?.sourceCurrency || "").toUpperCase();
  const displayCurrency = String(offer?.currency || offerDisplayCurrency()).toUpperCase();
  if (originalPrice === null || !originalCurrency || originalCurrency === displayCurrency) return "";
  return `Store price: ${formatMoney(originalPrice, originalCurrency)}`;
}

function offerTrustSummary(offer) {
  const directUrl = Boolean(safeExternalOfferUrl(offer));
  const validation = offerValidationInfo(offer);
  const freshness = offerFreshnessInfo(offer);
  const currency = offerCurrencyInfo(offer);
  const priceWarning = String(offer?.priceWarning || "").trim();
  const hasGuardWarning = validation.warning || currency.warning || freshness.warning || Boolean(priceWarning);

  return {
    directUrl,
    validation,
    freshness,
    currency,
    priceWarning,
    hasGuardWarning
  };
}

function offerComparablePrice(offer) {
  const total = getOfferTotal(offer);
  if (typeof total === "number" && Number.isFinite(total)) return total;
  const productPrice = offerProductPriceValue(offer);
  return typeof productPrice === "number" && Number.isFinite(productPrice) ? productPrice : null;
}

function offerLastCheckedMs(offer) {
  return parseOfferTimestamp(offer?.lastCheckedAt || offer?.last_checked || offer?.checkedAt || offer?.updatedAt || offer?.lastUpdated || "");
}

function offerIsLocalToUser(offer) {
  return offer?.isLocal === true || isLocalProvider(offer?.provider);
}

function offerIsFreshlyChecked(offer) {
  return Boolean(offerLastCheckedMs(offer));
}

function offerIsAvailableNow(offer) {
  const availability = normalizeText(offer?.availability);
  return availability.includes("in stock") || availability.includes("available");
}

function offerMatchesComparisonFilter(offer) {
  const filter = OFFER_COMPARISON_FILTERS.has(offerComparisonState.filter) ? offerComparisonState.filter : "all";
  if (filter === "local") return offerIsLocalToUser(offer);
  if (filter === "checked") return offerIsFreshlyChecked(offer);
  if (filter === "stock") return offerIsAvailableNow(offer);
  if (filter === "warnings") return offerTrustSummary(offer).hasGuardWarning;
  return true;
}

function compareOfferPrice(left, right) {
  const priceLeft = offerComparablePrice(left);
  const priceRight = offerComparablePrice(right);
  const knownLeft = typeof priceLeft === "number";
  const knownRight = typeof priceRight === "number";
  if (knownLeft !== knownRight) return knownLeft ? -1 : 1;
  if (knownLeft && knownRight && priceLeft !== priceRight) return priceLeft - priceRight;
  return providerName(left?.provider).localeCompare(providerName(right?.provider));
}

function comparisonOfferSortWeight(offer, best) {
  const trust = offerTrustSummary(offer);
  let weight = 0;
  if (best && offer === best) weight -= 1000;
  if (trust.hasGuardWarning) weight += 120;
  if (!trust.directUrl) weight += 90;
  if (!offerIsFreshlyChecked(offer)) weight += 65;
  if (!offerIsLocalToUser(offer)) weight += 12;
  if (!offerIsAvailableNow(offer)) weight += 8;
  return weight;
}

function sortComparisonOffers(offers, best) {
  const sort = OFFER_COMPARISON_SORTS.has(offerComparisonState.sort) ? offerComparisonState.sort : "best";
  return [...offers].sort((left, right) => {
    if (sort === "price") return compareOfferPrice(left, right);
    if (sort === "freshness") {
      const freshnessDelta = (offerLastCheckedMs(right) || 0) - (offerLastCheckedMs(left) || 0);
      return freshnessDelta || compareOfferPrice(left, right);
    }
    if (sort === "local") {
      const localDelta = Number(offerIsLocalToUser(right)) - Number(offerIsLocalToUser(left));
      return localDelta || compareOfferPrice(left, right);
    }

    const weightDelta = comparisonOfferSortWeight(left, best) - comparisonOfferSortWeight(right, best);
    return weightDelta || compareOfferPrice(left, right);
  });
}

function comparisonVisibleOffers(offers, best) {
  return sortComparisonOffers(offers, best);
}

function offerComparisonFilterLabel() {
  const labels = {
    all: "all offers",
    local: "local stores",
    checked: "checked offers",
    stock: "in-stock offers",
    warnings: "offers needing review"
  };
  return labels[offerComparisonState.filter] || labels.all;
}

function renderOfferComparisonToolbar(allOffers, visibleOffers) {
  if (els.offerCompareToolbar) {
    els.offerCompareToolbar.hidden = allOffers.length === 0;
  }
  if (els.offerCompareSummary) {
    const hiddenCount = Math.max(0, allOffers.length - visibleOffers.length);
    const filterLabel = offerComparisonFilterLabel();
    els.offerCompareSummary.textContent = hiddenCount
      ? `${visibleOffers.length}/${allOffers.length} ${filterLabel}; ${hiddenCount} hidden by filters.`
      : `${visibleOffers.length}/${allOffers.length} ${filterLabel}.`;
  }
  if (els.offerCompareControls) {
    els.offerCompareControls.querySelectorAll("[data-offer-filter]").forEach((button) => {
      const active = button.dataset.offerFilter === offerComparisonState.filter;
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }
  if (els.offerCompareSort) {
    els.offerCompareSort.value = OFFER_COMPARISON_SORTS.has(offerComparisonState.sort) ? offerComparisonState.sort : "best";
  }
}

function offerReportMailto(offer) {
  const figure = selectedFigure();
  const provider = providerName(offer?.provider);
  const offerUrl = safeExternalOfferUrl(offer) || offer?.productUrl || "";
  const productPrice = offerProductPriceValue(offer);
  const trust = offerTrustSummary(offer);
  const subject = `NekoPrice report: ${provider} offer may be wrong`;
  const body = [
    "Hi NekoPrice,",
    "",
    "I want to report a possible issue with this offer:",
    "",
    `Figure: ${figure?.name || figure?.title || "Unknown figure"}`,
    `JAN/SKU: ${janForFigure(figure) || figure?.sku || "Unknown"}`,
    `Store: ${provider}`,
    `Displayed price: ${productPrice !== null ? formatOfferPrice(offer, productPrice) : PRICE_FALLBACK}`,
    `Offer URL: ${offerUrl || "No direct URL"}`,
    `Validation: ${trust.validation.label}`,
    `Freshness: ${trust.freshness.label}`,
    `Currency: ${trust.currency.label}`,
    trust.priceWarning ? `Warning: ${trust.priceWarning}` : "",
    "",
    "What looks wrong?",
    "- ",
    "",
    `NekoPrice page: ${window.location.href}`
  ].filter((line) => line !== "");

  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join("\n"))}`;
}

function latestOfferCheckLabel(offers) {
  const latest = Math.max(...offers.map(offerLastCheckedMs).filter(Boolean));
  if (!Number.isFinite(latest) || latest <= 0) return "No direct refresh yet";

  const ageHours = Math.max(0, (Date.now() - latest) / 36e5);
  if (ageHours < 1) return "Checked now";
  if (ageHours < 24) return `Latest check ${Math.floor(ageHours)}h ago`;
  const ageDays = Math.floor(ageHours / 24);
  return `Latest check ${ageDays}d ago`;
}

function offerProviderCount(offers, predicate = () => true) {
  return distinctProviderCount(offers.filter(predicate));
}

function renderOfferInsightPanel(offers, best) {
  if (!els.offerInsightPanel || !els.offerInsightSummary || !els.offerInsightStats) return;
  if (!offers.length) {
    els.offerInsightPanel.hidden = true;
    return;
  }

  const storeCount = distinctProviderCount(offers);
  const localStoreCount = offerProviderCount(offers, offerIsLocalToUser);
  const checkedCount = offers.filter(offerIsFreshlyChecked).length;
  const warningCount = offers.filter((offer) => offerTrustSummary(offer).hasGuardWarning).length;
  const inStockCount = offers.filter(offerIsAvailableNow).length;
  const spread = priceSpreadSummary(offers);
  const bestProvider = best ? providerName(best.provider) : "";
  const bestPrice = best ? offerProductPriceValue(best) : null;
  const bestCopy = best && bestPrice !== null
    ? spread.hasSaving
      ? `Best direct price: ${formatMoney(bestPrice, best.currency)} at ${bestProvider}. Potential saving ${formatMoney(spread.saving, spread.currency)} vs the highest listed store.`
      : `Best direct price: ${formatMoney(bestPrice, best.currency)} at ${bestProvider}.`
    : `${storeCount} ${storeCount === 1 ? "store is" : "stores are"} ready to compare.`;
  const warningCopy = warningCount
    ? `${warningCount} ${warningCount === 1 ? "offer needs" : "offers need"} another check before trusting blindly.`
    : "No guard or freshness warnings in the visible offer set.";

  els.offerInsightPanel.hidden = false;
  els.offerInsightSummary.textContent = bestCopy;
  if (els.offerInsightNote) {
    els.offerInsightNote.textContent = `${warningCopy} Prices shown in ${offerDisplayCurrency()} for ${currentCountryLabel()}.`;
  }
  els.offerInsightStats.innerHTML = [
    {
      label: "Stores compared",
      value: storeCount,
      detail: `${offers.length} ${offers.length === 1 ? "offer" : "offers"} loaded`,
      tone: "neutral"
    },
    {
      label: "Potential saving",
      value: spread.hasComparison ? spread.hasSaving ? formatMoney(spread.saving, spread.currency) : formatMoney(0, spread.currency) : "—",
      detail: spread.hasComparison
        ? spread.hasSaving
          ? `${spread.lowestProvider} vs ${spread.highestProvider}`
          : "Same product price"
        : "Need 2+ stores",
      tone: spread.hasSaving ? "good" : "neutral"
    },
    {
      label: "Local options",
      value: localStoreCount,
      detail: localStoreCount ? `Local to ${currentCountryLabel()}` : "International only",
      tone: localStoreCount ? "good" : "neutral"
    },
    {
      label: "Direct checks",
      value: `${checkedCount}/${offers.length}`,
      detail: latestOfferCheckLabel(offers),
      tone: checkedCount ? "good" : "warn"
    },
    {
      label: "Stock signal",
      value: inStockCount,
      detail: inStockCount ? "Available now" : "Confirm availability",
      tone: inStockCount ? "good" : "neutral"
    },
    {
      label: "Review needed",
      value: warningCount,
      detail: warningCount ? "Guard/freshness warning" : "Guard clean",
      tone: warningCount ? "warn" : "good"
    }
  ]
    .map((item) => `
      <span class="offer-insight-stat offer-insight-stat--${escapeHtml(item.tone)}">
        <b>${escapeHtml(item.label)}</b>
        <strong>${escapeHtml(String(item.value))}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </span>
    `)
    .join("");
}

function productDetailUsefulValue(value, fallback = "Unknown") {
  return productCardUsefulMeta(value) || fallback;
}

function productDetailRetailPriceLabel(best) {
  if (!best) return "No verified price yet";
  const productPrice = offerProductPriceValue(best);
  if (productPrice !== null) return formatOfferPrice(best, productPrice);
  const total = getOfferTotal(best);
  if (typeof total === "number") return formatMoney(total, best.currency);
  return PRICE_FALLBACK;
}

function productDetailAvailabilityLabel(figure, best) {
  return productDetailUsefulValue(best?.availability || figure?.availability, "Check store availability");
}

function productDetailAvailabilityTone(label) {
  const text = normalizeText(label);
  if (/(in stock|available|released)/.test(text)) return "stock";
  if (/(pre order|pre-order|preorder)/.test(text)) return "preorder";
  if (/(sold out|out of stock|unavailable)/.test(text)) return "soldout";
  return "neutral";
}

function productDetailCategories(figure) {
  const rawText = [
    figure?.name,
    figure?.title,
    figure?.line,
    figure?.type,
    figure?.version
  ].join(" ");
  const text = normalizeText(rawText);
  const scaleText = normalizeText(figure?.scale);
  const categories = [];
  if (text.includes("nendoroid")) categories.push("Nendoroids");
  if (text.includes("figma")) categories.push("Figma");
  if (text.includes("pop up parade")) categories.push("Pop Up Parade");
  if (text.includes("prize") || text.includes("kuji") || text.includes("ichibansho")) categories.push("Prize figures");
  if ((scaleText && scaleText !== "non scale") || /\b1\s*\/\s*\d+\b/.test(rawText)) categories.push("Scale figures");
  if (text.includes("figuarts") || text.includes("revoltech") || text.includes("action figure")) categories.push("Action figures");
  if (text.includes("statue") || text.includes("resin")) categories.push("Statues");
  if (text.includes("bunny") || text.includes("1/4")) categories.push("Bunny figures");
  const line = productCardUsefulMeta(figure?.line);
  if (line && !/^figure$/i.test(line)) categories.push(line);
  return [...new Set(categories)].slice(0, 3).join(", ") || "Figures";
}

function productDetailSummaryRows(figure, offers) {
  const directOfferCount = Array.isArray(offers)
    ? offers.filter((offer) => safeExternalOfferUrl(offer)).length
    : 0;
  const listingLabel = directOfferCount
    ? "Verified store listing"
    : "Catalogue product identity";

  return [
    ["Listing", listingLabel],
    ["Scale/size", productDetailUsefulValue(figure?.scale, "Non-scale")],
    ["Brand", productDetailUsefulValue(figure?.manufacturer, "Unknown manufacturer")],
    ["Line", productDetailUsefulValue(figure?.line || figure?.type, "Figure")],
    ["Anime/Game", productDetailUsefulValue(figure?.series, "Unknown")],
    ["Character", productDetailUsefulValue(figure?.character, "Official product")],
    ["Release", productDetailUsefulValue(figure?.releaseDate, "Unknown release")],
    ["JAN/SKU", productDetailUsefulValue(figure?.sku, "No JAN/SKU yet")]
  ];
}

function renderProductRetailSummary(figure, best, offers) {
  const availability = productDetailAvailabilityLabel(figure, best);
  const availabilityTone = productDetailAvailabilityTone(availability);
  const categories = productDetailCategories(figure);
  const rows = productDetailSummaryRows(figure, offers)
    .map(([label, value]) => `
      <span>
        <b>${escapeHtml(label)}:</b>
        ${escapeHtml(value)}
      </span>
    `)
    .join("");

  return `
    <div class="product-retail-summary-block product-retail-summary-block--main">
      <dt>Summary</dt>
      <dd>${rows}</dd>
    </div>
    <div class="product-retail-summary-block product-retail-summary-block--availability">
      <dt>Availability:</dt>
      <dd><strong class="product-retail-availability product-retail-availability--${escapeHtml(availabilityTone)}">${escapeHtml(availability)}</strong></dd>
    </div>
    <div class="product-retail-summary-block product-retail-summary-block--categories">
      <dt>Categories:</dt>
      <dd>${escapeHtml(categories)}</dd>
    </div>
  `;
}

function productGalleryRequestIdentity(figure) {
  return {
    figureKey: String(figure?.figureKey || figure?.sku || figure?.jan || "").trim(),
    productId: String(figure?.productId || "").trim()
  };
}

function currentProductGalleryImage() {
  return productGalleryState.images[productGalleryState.index] || null;
}

function productGalleryCaption(image, index = productGalleryState.index) {
  const count = productGalleryState.images.length;
  const source = String(image?.source || "").trim();
  const role = String(image?.role || "official product image").replace(/_/g, " ");
  return [`Image ${index + 1} of ${Math.max(1, count)}`, role, source].filter(Boolean).join(" · ");
}

function updateProductGalleryLightbox() {
  const image = currentProductGalleryImage();
  if (!image || !els.productImageLightboxImage) return;
  els.productImageLightboxImage.src = image.url;
  els.productImageLightboxImage.alt = image.alt || els.productTitle?.textContent || "Full-size product image";
  els.productImageLightboxImage.classList.toggle("ecchi-blur", shouldBlurFigureImage(selectedFigure()));
  if (els.productImageLightboxCaption) {
    els.productImageLightboxCaption.textContent = productGalleryCaption(image);
  }
  const multiple = productGalleryState.images.length > 1;
  if (els.productImageLightboxPrevious) els.productImageLightboxPrevious.hidden = !multiple;
  if (els.productImageLightboxNext) els.productImageLightboxNext.hidden = !multiple;
}

function selectProductGalleryImage(index, { scrollThumbnail = true } = {}) {
  const images = productGalleryState.images;
  if (!images.length || !els.productImage) return;
  const length = images.length;
  let nextIndex = ((Number(index) || 0) % length + length) % length;
  for (let attempts = 0; attempts < length; attempts += 1) {
    const candidate = images[nextIndex];
    if (!productGalleryState.failedUrls.has(candidate.url)) break;
    nextIndex = (nextIndex + 1) % length;
  }
  const image = images[nextIndex];
  productGalleryState.index = nextIndex;
  els.productImageFrame?.classList.remove("has-image-error");
  els.productImage.dataset.fallbackApplied = "";
  els.productImage.src = image.url;
  els.productImage.alt = image.alt || els.productTitle?.textContent || "Selected figure image";
  els.productImage.fetchPriority = nextIndex === 0 ? "high" : "auto";
  els.productImage.classList.toggle("ecchi-blur", shouldBlurFigureImage(selectedFigure()));
  if (els.productGalleryStatus) {
    els.productGalleryStatus.textContent = productGalleryCaption(image, nextIndex);
  }
  els.productImageThumbnails?.querySelectorAll("[data-gallery-index]").forEach((button) => {
    const selected = Number(button.dataset.galleryIndex) === nextIndex;
    button.setAttribute("aria-selected", selected ? "true" : "false");
    button.tabIndex = selected ? 0 : -1;
    if (selected && scrollThumbnail) {
      button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  });
  updateProductGalleryLightbox();
}

function renderProductGallery(figure, images = null, { preserveIndex = false, loading = false } = {}) {
  if (!figure || !els.productImage) return;
  const normalized = normalizeFigureGalleryImages(figure, images || figure.images);
  const safeImages = normalized.length
    ? normalized
    : [{
        url: premiumFigureImageFor(figure),
        thumbnailUrl: "",
        role: "main",
        position: 0,
        width: null,
        height: null,
        alt: figure?.name || figure?.title || "Selected figure image",
        source: "catalogue",
        isPrimary: true
      }];
  const previousUrl = preserveIndex ? currentProductGalleryImage()?.url : "";
  productGalleryState.figureId = figure.id;
  productGalleryState.images = safeImages;
  productGalleryState.failedUrls = new Set();
  productGalleryState.index = Math.max(0, safeImages.findIndex((item) => item.url === previousUrl));

  const multiple = safeImages.length > 1;
  if (els.productImagePrevious) els.productImagePrevious.hidden = !multiple;
  if (els.productImageNext) els.productImageNext.hidden = !multiple;
  if (els.productImageThumbnails) {
    els.productImageThumbnails.hidden = !multiple;
    els.productImageThumbnails.innerHTML = multiple
      ? safeImages.map((image, index) => `
          <button
            class="product-gallery-thumbnail"
            type="button"
            role="option"
            data-gallery-index="${index}"
            aria-label="View image ${index + 1} of ${safeImages.length}"
            aria-selected="${index === productGalleryState.index ? "true" : "false"}"
            tabindex="${index === productGalleryState.index ? "0" : "-1"}"
          >
            <img
              src="${escapeHtml(image.thumbnailUrl || image.url)}"
              data-full-image="${escapeHtml(image.url)}"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </button>
        `).join("")
      : "";
  }
  selectProductGalleryImage(productGalleryState.index, { scrollThumbnail: false });
  if (loading && els.productGalleryStatus) {
    els.productGalleryStatus.textContent = "Loading official product angles…";
  }
}

async function loadProductGallery(figure) {
  if (!figure || window.location.protocol === "file:") return;
  if (figure.galleryLoaded) return;
  if (figure.galleryLoadingPromise) return figure.galleryLoadingPromise;
  const identity = productGalleryRequestIdentity(figure);
  if (!identity.figureKey && !identity.productId) return;
  const requestId = productGalleryState.requestId + 1;
  productGalleryState.requestId = requestId;
  renderProductGallery(figure, figure.images, { preserveIndex: true, loading: true });
  const params = new URLSearchParams({ limit: "12" });
  if (identity.figureKey) params.set("figure_key", identity.figureKey);
  if (identity.productId) params.set("product_id", identity.productId);
  figure.galleryLoadingPromise = fetch(`${FIGURE_IMAGES_API_URL}?${params.toString()}`, {
    headers: { Accept: "application/json" }
  })
    .then(async (response) => {
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload?.success) throw new Error(payload?.error || `Gallery HTTP ${response.status}`);
      const images = normalizeFigureGalleryImages(figure, payload.images);
      if (images.length) {
        figure.images = images;
        figure.galleryLoaded = true;
      }
      if (requestId === productGalleryState.requestId && selectedFigureId === figure.id) {
        renderProductGallery(figure, figure.images, { preserveIndex: true });
      }
      return images;
    })
    .catch(() => {
      if (requestId === productGalleryState.requestId && selectedFigureId === figure.id) {
        renderProductGallery(figure, figure.images, { preserveIndex: true });
      }
      return [];
    })
    .finally(() => {
      figure.galleryLoadingPromise = null;
    });
  return figure.galleryLoadingPromise;
}

function moveProductGallery(step) {
  if (productGalleryState.images.length < 2) return;
  selectProductGalleryImage(productGalleryState.index + step);
}

function openProductGalleryLightbox() {
  if (!currentProductGalleryImage() || !els.productImageLightbox) return;
  updateProductGalleryLightbox();
  if (typeof els.productImageLightbox.showModal === "function") {
    if (!els.productImageLightbox.open) els.productImageLightbox.showModal();
  } else {
    els.productImageLightbox.setAttribute("open", "");
  }
  document.body.classList.add("product-lightbox-open");
  els.productImageLightboxClose?.focus({ preventScroll: true });
}

function closeProductGalleryLightbox() {
  if (!els.productImageLightbox) return;
  if (typeof els.productImageLightbox.close === "function" && els.productImageLightbox.open) {
    els.productImageLightbox.close();
  } else {
    els.productImageLightbox.removeAttribute("open");
  }
  document.body.classList.remove("product-lightbox-open");
  els.productImageExpand?.focus({ preventScroll: true });
}

function handleProductGalleryImageError() {
  const failed = currentProductGalleryImage();
  if (failed?.url) productGalleryState.failedUrls.add(failed.url);
  const remaining = productGalleryState.images.filter((item) => !productGalleryState.failedUrls.has(item.url));
  if (remaining.length) {
    moveProductGallery(1);
    return;
  }
  els.productImageFrame?.classList.add("has-image-error");
  if (els.productImage.dataset.fallbackApplied === "final") return;
  els.productImage.dataset.fallbackApplied = "final";
  els.productImage.src = FIGURE_PLACEHOLDER_IMAGE;
  if (els.productGalleryStatus) els.productGalleryStatus.textContent = "Product image temporarily unavailable";
}

function renderProductDetail(figureId, shouldScroll = true, shouldUpdateHash = shouldScroll) {
  const figure = figures.find((item) => item.id === figureId);
  if (!figure) return;

  const offers = sortedOffers(offersForCountry(figure));
  const best = bestOffer(figure, offers);
  const visibleOffers = comparisonVisibleOffers(offers, best);

  selectedFigureId = figure.id;
  enterProductDetailView();
  if (shouldUpdateHash) updateSelectedFigureHash(figure.id);
  els.productTitle.textContent = compactFigureNameForCard(figure, 46);
  els.productDescription.textContent = buyerFacingDescription(figure);
  renderProductGallery(figure);
  void loadProductGallery(figure);
  els.trackProduct.textContent = wishlist.includes(figure.id) ? "Saved" : "Save to wishlist";
  if (els.addToCartProduct) els.addToCartProduct.textContent = cart.includes(figure.id) ? "In cart" : "Add to cart";
  els.alertPrice.value = Number.isFinite(lowestKnownTotal(figure)) ? Math.max(1, Math.ceil(lowestKnownTotal(figure) - 1)) : 40;

  els.specGrid.classList.add("product-retail-summary");
  els.specGrid.innerHTML = renderProductRetailSummary(figure, best, offers);

  if (best) {
    const total = getOfferTotal(best);
    const bestUrl = safeExternalOfferUrl(best);
    const bestProvider = providerName(best.provider);
    const productPrice = offerProductPriceValue(best);
    const hasProductPrice = productPrice !== null;
    const hasTotal = typeof total === "number";
    const bestTrust = offerTrustSummary(best);
    const detailParts = [`${bestProvider}: product ${formatOfferPrice(best, productPrice)}`];
    if (typeof best.shipping === "number") detailParts.push(`shipping ${formatMoney(best.shipping, best.currency)}`);
    if (typeof best.taxes === "number") detailParts.push(`tax ${formatMoney(best.taxes, best.currency)}`);
    if (hasTotal) detailParts.push(`estimated total ${formatMoney(total, best.currency)}`);
    els.bestDealTotal.textContent = hasProductPrice ? formatOfferPrice(best, productPrice) : PRICE_FALLBACK;
    els.bestDealStore.textContent = `${detailParts.join(", ")}.`;
    if (bestUrl) {
      els.bestDealLink.textContent = `Buy at ${bestProvider}`;
      els.bestDealLink.dataset.offerLink = "external";
      els.bestDealLink.dataset.providerId = best.provider;
      els.bestDealLink.href = bestUrl;
      els.bestDealLink.target = "_blank";
      els.bestDealLink.rel = "sponsored nofollow noopener noreferrer";
      els.bestDealLink.removeAttribute("role");
      els.bestDealLink.removeAttribute("aria-disabled");
    } else {
      els.bestDealLink.removeAttribute("href");
      els.bestDealLink.removeAttribute("target");
      els.bestDealLink.removeAttribute("rel");
      els.bestDealLink.setAttribute("aria-disabled", "true");
      els.bestDealLink.textContent = "No product link yet";
      els.bestDealLink.dataset.offerLink = "unavailable";
    }
    els.bestDealNote.textContent = [
      localizedUiText(bestTrust.directUrl ? "Direct product URL" : "No direct product URL"),
      localizedUiText(bestTrust.validation.label),
      localizedUiText(bestTrust.freshness.label),
      localizedUiText(`shown in ${offerDisplayCurrency()} for ${currentCountryLabel()}`)
    ].join(" · ");
  } else {
    els.bestDealTotal.textContent = "No verified offer";
    els.bestDealStore.textContent = "No supplier is shown until it has a direct product URL for this exact figure.";
    els.bestDealLink.removeAttribute("href");
    els.bestDealLink.removeAttribute("target");
    els.bestDealLink.removeAttribute("rel");
    els.bestDealLink.removeAttribute("role");
    els.bestDealLink.setAttribute("aria-disabled", "true");
    els.bestDealLink.textContent = "No product link yet";
    els.bestDealLink.dataset.offerLink = "unavailable";
    els.bestDealNote.textContent = "Add a verified direct product URL to show a supplier here.";
  }

  renderOfferDonutChart(figure);
  renderOfferInsightPanel(offers, best);
  const visibleUsedOffers = visibleOffers.filter(offerIsSecondHand);
  const visibleDirectOffers = visibleOffers.filter((offer) => !offerIsSecondHand(offer));
  if (els.offerTable) {
    els.offerTable.innerHTML = visibleUsedOffers.length
      ? visibleUsedOffers.map((offer) => renderOfferRow(offer, best)).join("")
      : emptyMarketOfferRow(
          "No verified second-hand listing yet.",
          "NekoBurst is checking used stores for this exact figure; no search link or invented price is shown."
        );
    renderOfferComparisonToolbar(offers, visibleOffers);
  }
  if (els.directOfferTable) {
    els.directOfferTable.innerHTML = visibleDirectOffers.length
      ? visibleDirectOffers.map((offer) => renderOfferRow(offer, best)).join("")
      : emptyMarketOfferRow(
          "No verified direct-retailer offer yet.",
          "A store appears only after its direct product URL and real price pass validation."
        );
  }
  if (els.offerListStatus) {
    els.offerListStatus.textContent = offers.length
      ? `${visibleOffers.length}/${offers.length} ${offers.length === 1 ? "verified store" : "verified stores"}`
      : "0 verified stores";
  }
  if (els.offerRefreshAllButton) {
    els.offerRefreshAllButton.disabled = !offers.length || !janForFigure(figure);
    els.offerRefreshAllButton.dataset.jan = janForFigure(figure) || "";
  }
  if (els.normalizationList) {
    els.normalizationList.innerHTML = (figure.matchNotes.length ? figure.matchNotes : ["This figure is stored as one exact product identity."])
      .map((note) => `<li>${escapeHtml(note)}</li>`)
      .join("");
  }
  renderValidationList(figure);
  if (els.figureCommentList) {
    renderFigureComments(figure);
    refreshFigureComments(figure);
  }
  drawChart(figure.history);
  loadPriceHistory(janForFigure(figure));
  renderProductCardsCurrentSelection();

  if (shouldScroll) {
    els.figureSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderOfferRow(offer, best) {
  const total = getOfferTotal(offer);
  const isBest = best && best === offer;
  const providerRecord = providerById(offer.provider);
  const provider = providerName(offer.provider);
  const offerUrl = safeExternalOfferUrl(offer);
  const logo = storeSiteCardLogo(providerRecord || { id: offer.provider, name: provider });
  const price = offerProductPriceValue(offer);
  const shippingValue = typeof offer.shipping === "number" ? offer.shipping : null;
  const shipping = shippingValue === 0
    ? "Free!"
    : shippingValue !== null
      ? formatMoney(shippingValue, offer.currency)
      : "At store";
  const trust = offerTrustSummary(offer);
  const hasWarning = trust.hasGuardWarning;
  const warningTitle = trust.priceWarning || offer.validationReason || trust.validation.title || trust.freshness.title;
  const localStore = offer.isLocal === true || isLocalProvider(offer.provider);
  const selectedFigure = selectedFigureId ? figureById(selectedFigureId) : null;
  const productTitle = selectedFigure
    ? compactFigureNameForCard(selectedFigure, 96)
    : compactFigureNameForCard({ name: offer.jan ? `JAN ${offer.jan}` : provider }, 96);
  const storeInfoUrl = providerRecord?.url || offerUrl || "";
  const reviewChip = hasWarning
    ? `<span class="offer-card-pill is-warning" title="${escapeHtml(warningTitle)}">Needs check</span>`
    : "";
  const fastChip = offerIsAvailableNow(offer)
    ? `<span class="offer-card-pill is-mint">In stock</span>`
    : "";
  const localChip = localStore
    ? `<span class="offer-card-pill is-mint">Local store</span>`
    : "";
  const freeShippingChip = shippingValue === 0
    ? `<span class="offer-card-pill is-mint">Free shipping</span>`
    : "";
  const conditionChip = offerIsSecondHand(offer)
    ? `<span class="offer-card-pill is-used">Pre-owned</span>`
    : "";
  const buyLink = offerUrl
    ? `<a class="offer-card-buy" href="${escapeHtml(offerUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-offer-link="external">${isBest ? "Buy" : "View store"}</a>`
    : `<span class="offer-card-buy unavailable" aria-disabled="true">No link</span>`;
  const originalPriceNote = offerOriginalPriceNote(offer);
  const checkedDetail = trust.freshness.title.replace(/^Last direct check:\s*/i, "");
  const priceLabel = price !== null ? formatOfferPrice(offer, price) : PRICE_FALLBACK;
  const shippingClass = shippingValue === 0 ? " is-free" : "";

  return `
    <article class="offer-card-row ${offerIsSecondHand(offer) ? "is-second-hand" : "is-direct-retail"} ${isBest ? "best-offer-row" : ""} ${hasWarning ? "offer-card-row-warning" : ""}">
      <div class="offer-card-logo">
        ${logo ? `<img src="${escapeHtml(logo)}" alt="${escapeHtml(`${provider} logo`)}" loading="eager" decoding="async" />` : `<span data-i18n-skip title="${escapeHtml(provider)}">${escapeHtml(provider)}</span>`}
      </div>
      <div class="offer-card-main">
        <strong>${escapeHtml(productTitle)}</strong>
        <a class="offer-card-info" href="${escapeHtml(storeInfoUrl || offerReportMailto(offer))}" ${storeInfoUrl ? 'target="_blank" rel="sponsored nofollow noopener noreferrer" data-offer-link="external"' : ""}>Store information</a>
        <div class="offer-card-badges" aria-label="Offer highlights">
          ${isBest ? `<span class="offer-card-pill is-best">Best price</span>` : ""}
          ${fastChip}
          ${freeShippingChip}
          ${localChip}
          ${conditionChip}
          ${reviewChip}
        </div>
        <small class="offer-card-meta"><span data-i18n-skip>${escapeHtml(provider)}</span>${checkedDetail ? ` · <span>${escapeHtml(checkedDetail)}</span>` : ""}</small>
      </div>
      <div class="offer-card-price">
        <strong>${escapeHtml(priceLabel)}</strong>
        ${originalPriceNote ? `<small>${escapeHtml(originalPriceNote)}</small>` : ""}
        <span>Shipping</span>
        <em class="${shippingClass}">${escapeHtml(shipping)}</em>
        ${typeof total === "number" ? `<small>Estimated total ${escapeHtml(formatMoney(total, offer.currency))}</small>` : ""}
      </div>
      <div class="offer-card-actions">
        ${buyLink}
      </div>
    </article>
  `;
}

function emptyMarketOfferRow(title, copy) {
  return `
    <article class="offer-card-row empty offer-market-empty">
      <strong>${escapeHtml(title)}</strong>
      <span class="muted">${escapeHtml(copy)}</span>
    </article>
  `;
}

function emptyOfferRow() {
  return `
    <article class="offer-card-row empty">
      <strong>No verified direct product offers yet.</strong>
      <span class="muted">Suppliers only appear here when their URL opens this exact figure's product page.</span>
    </article>
  `;
}

function emptyFilteredOfferRow(totalOffers) {
  return `
    <article class="offer-card-row empty">
      <strong>No offers match this comparison filter.</strong>
      <span class="muted">${escapeHtml(`${totalOffers} verified offer(s) exist. Switch back to All to see every store.`)}</span>
    </article>
  `;
}

function renderValidationList(figure) {
  if (!els.validationList) return;
  const checks = [
    `Figure identity: ${figure.character} / ${figure.version} / ${figure.type}.`,
    "Offers are stored inside this exact figure only, so versions are not mixed.",
    "Provider rows include product price, shipping, tax, and total."
  ];

  els.validationList.innerHTML = checks
    .map((check) => `<li><span class="check-dot pass" aria-hidden="true"></span>${escapeHtml(check)}</li>`)
    .join("");
}

function selectedFigure() {
  return figures.find((item) => item.id === selectedFigureId) || null;
}

function renderFigureComments(figure) {
  if (!els.figureCommentList) return;
  const comments = commentsForFigure(figure?.id);

  els.figureCommentList.innerHTML = comments.length
    ? comments
        .slice()
        .reverse()
        .map((comment) => {
          const date = comment.date ? new Date(comment.date) : null;
          const formattedDate = date && !Number.isNaN(date.getTime())
            ? date.toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
            : "";
          return `
            <article class="figure-comment">
              <div>
                <strong>${escapeHtml(comment.name || "Collector")}</strong>
                ${formattedDate ? `<time>${escapeHtml(formattedDate)}</time>` : ""}
              </div>
              <p>${escapeHtml(comment.text || "")}</p>
            </article>
          `;
        })
        .join("")
    : `<p class="figure-comment-empty">No comments yet. Be the first collector to leave a note.</p>`;
}

async function refreshFigureComments(figure) {
  if (!figure?.id || window.location.protocol === "file:") return;
  try {
    const response = await fetch(`${COMMENTS_API_URL}/${encodeURIComponent(figure.id)}?t=${Date.now()}`, { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success || !Array.isArray(data.comments)) return;
    figureComments[figure.id] = data.comments;
    saveFigureComments();
    if (selectedFigureId === figure.id) renderFigureComments(figure);
  } catch (error) {
    console.debug("Figure comments API unavailable", error);
  }
}

async function submitFigureComment(event) {
  event.preventDefault();
  const figure = selectedFigure();
  if (!figure || !els.figureCommentText) return;

  const text = els.figureCommentText.value.trim();
  if (!text) {
    els.figureCommentText.focus();
    return;
  }

  const name = (els.figureCommentName?.value || "").trim() || "Collector";
  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch(`${COMMENTS_API_URL}/${encodeURIComponent(figure.id)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text })
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.success && Array.isArray(data.comments)) {
        figureComments[figure.id] = data.comments;
        saveFigureComments();
        els.figureCommentText.value = "";
        renderFigureComments(figure);
        return;
      }
    } catch (error) {
      console.debug("Saving comment through API failed; using local fallback", error);
    }
  }

  const comments = commentsForFigure(figure.id);
  figureComments[figure.id] = [
    ...comments,
    {
      name: name.slice(0, 40),
      text: text.slice(0, 500),
      date: new Date().toISOString()
    }
  ].slice(-80);
  saveFigureComments();
  els.figureCommentText.value = "";
  renderFigureComments(figure);
}

function communityInitials(name) {
  const cleanName = String(name || "").trim();
  return (cleanName[0] || "N").toUpperCase();
}

function normalizeCommunityHandle(value) {
  return String(value || "")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, 15);
}

function communityHandleFromName(name) {
  const fallback = normalizeCommunityHandle(String(name || "").toLowerCase().replace(/\s+/g, "_"));
  if (fallback.length >= 4) return fallback.slice(0, 15);
  return "neko_fan";
}

function communityProfileHandle(profile = communityState.profile) {
  return normalizeCommunityHandle(profile?.handle) || communityHandleFromName(profile?.name || "collector");
}

function communityDateLabel(value) {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return "";
  const diffMs = Date.now() - date.getTime();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const locale = window.NekoI18n?.getLocale() || "en-GB";
  const relative = new Intl.RelativeTimeFormat(locale, { numeric: "auto", style: "short" });
  if (diffMs < minute) return relative.format(0, "second");
  if (diffMs < hour) return relative.format(-Math.floor(diffMs / minute), "minute");
  if (diffMs < day) return relative.format(-Math.floor(diffMs / hour), "hour");
  const days = Math.floor(diffMs / day);
  if (days <= 7) return relative.format(-days, "day");
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short" }).format(date);
}

function communityPostTypeLabel(type) {
  const labels = {
    offer: "Offer",
    new_figure: "New figure",
    restock: "Restock",
    news: "News",
    question: "Question"
  };
  return localizedUiText(labels[type] || "Offer");
}

function renderCommunitySession() {
  const profile = communityState.profile || {};
  const signedIn = Boolean(profile.token);
  const handle = communityProfileHandle(profile);
  if (els.communityCreateAccountButton) {
    els.communityCreateAccountButton.textContent = signedIn ? `@${handle}` : "Sign Up";
  }
  if (els.communityGuestPrompt) els.communityGuestPrompt.hidden = signedIn;
  if (els.communityPostForm) els.communityPostForm.hidden = !signedIn;
  if (els.communityViewerAvatar) els.communityViewerAvatar.textContent = communityInitials(profile.name);
  if (els.communityViewerAvatar && profile.avatarColor) {
    els.communityViewerAvatar.style.setProperty("--avatar-color", profile.avatarColor);
  }
  if (els.communityViewerName) els.communityViewerName.textContent = profile.name || "Collector";
  if (els.communityViewerEmail) els.communityViewerEmail.textContent = signedIn ? `@${handle}` : "Signed in";
  renderAccountSession();
}

function filteredCommunityPosts() {
  const posts = Array.isArray(communityState.posts) ? communityState.posts : [];
  const byType = !communityState.filter || communityState.filter === "all"
    ? posts
    : posts.filter((post) => String(post?.post_type || "") === communityState.filter);
  const query = normalizeText(communityState.search || "");
  if (!query) return byType;
  return byType.filter((post) => normalizeText([
    post?.body,
    post?.author_name,
    post?.author_handle,
    post?.post_type,
    post?.store,
    post?.price,
    post?.product_title,
    post?.product_url
  ].filter(Boolean).join(" ")).includes(query));
}

function syncCommunityTabs() {
  document.querySelectorAll("#community [data-community-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", String((button.dataset.communityFilter || "all") === communityState.filter));
  });
}

function communityVoteScore(post) {
  const seed = String(post?.id || post?.created_at || post?.product_title || post?.body || "neko");
  const total = Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return Math.max(1, total % 97);
}

function renderCommunityFeed() {
  if (!els.communityFeed) return;
  syncCommunityTabs();
  const posts = filteredCommunityPosts();
  if (!posts.length) {
    const emptyCopy = communityState.filter && communityState.filter !== "all"
      ? "No posts in this filter yet."
      : "Be the first collector to share a figure offer, restock, pre-order, or Japanese product discovery.";
    els.communityFeed.innerHTML = `
      <article class="community-post community-empty-post">
        <div class="community-vote-rail" aria-hidden="true">
          <button type="button">↑</button>
          <strong>0</strong>
          <button type="button">↓</button>
        </div>
        <div class="community-post-body">
          <header>
            <span class="community-avatar">N</span>
            <div>
              <strong>r/NekoPrice</strong>
              <small>No posts yet</small>
            </div>
          </header>
          <h3>No community posts yet.</h3>
          <p>${escapeHtml(emptyCopy)}</p>
        </div>
      </article>
    `;
    return;
  }

  els.communityFeed.innerHTML = posts
    .map((post) => {
      const author = post.author_name || "Collector";
      const handle = normalizeCommunityHandle(post.author_handle) || "collector";
      const avatarStyle = post.author_avatar_color
        ? ` style="--avatar-color:${escapeHtml(post.author_avatar_color)}"`
        : "";
      const score = communityVoteScore(post);
      const age = communityDateLabel(post.created_at);
      const image = post.image_url
        ? `<img class="community-post-image" src="${escapeHtml(post.image_url)}" alt="" loading="lazy" decoding="async" onerror="this.hidden=true" />`
        : "";
      const attachment = post.product_title || post.product_url || post.price || post.store
        ? `
          <div class="community-post-attachment">
            ${image}
            <div>
              ${post.product_title ? `<strong>${escapeHtml(post.product_title)}</strong>` : ""}
              <span data-i18n-skip>${escapeHtml([post.store, post.price].filter(Boolean).join(" / "))}</span>
              ${post.product_url ? `<a href="${escapeHtml(post.product_url)}" target="_blank" rel="nofollow noopener noreferrer">Open product</a>` : ""}
            </div>
          </div>
        `
        : "";
      return `
        <article class="community-post">
          <div class="community-vote-rail" aria-label="Post voting">
            <button type="button" aria-label="Upvote">↑</button>
            <strong>${escapeHtml(score)}</strong>
            <button type="button" aria-label="Downvote">↓</button>
          </div>
          <div class="community-post-body">
            <header>
              <span class="community-avatar"${avatarStyle}>${escapeHtml(communityInitials(author))}</span>
              <div>
                <strong>r/NekoPrice</strong>
                <small>u/${escapeHtml(handle)} ${age ? `&middot; ${escapeHtml(age)}` : ""}</small>
              </div>
              <span class="community-type-pill">${escapeHtml(communityPostTypeLabel(post.post_type))}</span>
            </header>
            ${post.product_title ? `<h3>${escapeHtml(post.product_title)}</h3>` : ""}
            ${post.body ? `<p>${escapeHtml(post.body)}</p>` : ""}
            ${attachment}
            <footer>
              <button type="button">${escapeHtml(localizedUiText(`${Math.max(0, score % 14)} comments`))}</button>
              <button type="button">Share</button>
              <button type="button">Save</button>
              <button type="button">•••</button>
            </footer>
          </div>
        </article>
      `;
    })
    .join("");
}

async function loadCommunityConfig() {
  if (communityState.configLoaded) return communityState.config || {};
  try {
    const response = await fetch(`${COMMUNITY_CONFIG_URL}?t=${Date.now()}`, { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    communityState.config = response.ok && data.success ? data : {};
  } catch (error) {
    communityState.config = {};
  }
  communityState.configLoaded = true;
  return communityState.config;
}

function loadCommunityRecaptchaScript() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (communityState.recaptchaScriptPromise) return communityState.recaptchaScriptPromise;
  communityState.recaptchaScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.grecaptcha);
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return communityState.recaptchaScriptPromise;
}

async function renderCommunityRecaptcha() {
  if (!els.communityRecaptcha) return;
  const config = await loadCommunityConfig();
  const siteKey = config.recaptcha_site_key || "";
  if (!siteKey) {
    els.communityRecaptcha.innerHTML = `<p class="community-captcha-note">reCAPTCHA activates when the site keys are configured.</p>`;
    return;
  }
  try {
    await loadCommunityRecaptchaScript();
    if (communityState.recaptchaWidgetId === null && window.grecaptcha?.render) {
      els.communityRecaptcha.innerHTML = "";
      communityState.recaptchaWidgetId = window.grecaptcha.render(els.communityRecaptcha, {
        sitekey: siteKey,
        theme: "dark"
      });
    }
  } catch (error) {
    els.communityRecaptcha.innerHTML = `<p class="community-captcha-note">reCAPTCHA could not load.</p>`;
  }
}

function communityCaptchaToken() {
  if (communityState.recaptchaWidgetId === null || !window.grecaptcha?.getResponse) return "";
  return window.grecaptcha.getResponse(communityState.recaptchaWidgetId);
}

function resetCommunityCaptcha() {
  if (communityState.recaptchaWidgetId !== null && window.grecaptcha?.reset) {
    window.grecaptcha.reset(communityState.recaptchaWidgetId);
  }
}

async function loadCommunityPosts() {
  if (!els.communityFeed || communityState.loadingPosts) return;
  communityState.loadingPosts = true;
  try {
    const response = await fetch(`${COMMUNITY_POSTS_URL}?limit=80&t=${Date.now()}`, { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    if (response.ok && data.success && Array.isArray(data.posts)) {
      communityState.posts = data.posts;
      renderCommunityFeed();
    } else {
      throw new Error(data.error || "Community feed unavailable.");
    }
  } catch (error) {
    els.communityFeed.innerHTML = `
      <article class="community-post community-empty-post">
        <span class="community-avatar">!</span>
        <div>
          <strong>Community feed unavailable.</strong>
          <p>${escapeHtml(error.message || "Try again later.")}</p>
        </div>
      </article>
    `;
  } finally {
    communityState.loadingPosts = false;
  }
}

async function ensureCommunityReady() {
  renderCommunitySession();
  if (communityState.initialized) {
    loadCommunityPosts();
    return;
  }
  communityState.initialized = true;
  await loadCommunityConfig();
  await loadCommunityPosts();
}

function openCommunitySignup() {
  if (communityState.profile?.token) {
    populateProfileForm();
    if (typeof els.loginDialog?.showModal === "function") els.loginDialog.showModal();
    return;
  }
  openAuthDialog("create");
}

function focusCommunityComposer() {
  if (communityState.profile?.token && els.communityPostForm && !els.communityPostForm.hidden) {
    els.communityPostBody?.focus();
    els.communityPostForm.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  openCommunitySignup();
}

async function submitCommunitySignup(event) {
  event.preventDefault();
  const name = (els.communitySignupName?.value || "").trim();
  const handle = normalizeCommunityHandle(els.communitySignupHandle?.value || "");
  const email = (els.communitySignupEmail?.value || "").trim();
  const bio = (els.communitySignupBio?.value || "").trim();
  const config = await loadCommunityConfig();
  const captchaToken = communityCaptchaToken();

  if (handle.length < 4) {
    if (els.communitySignupStatus) els.communitySignupStatus.textContent = "Choose a @handle with 4-15 letters, numbers, or underscores.";
    els.communitySignupHandle?.focus();
    return;
  }

  if (config.recaptcha_required && !captchaToken) {
    if (els.communitySignupStatus) els.communitySignupStatus.textContent = "Complete the reCAPTCHA before creating the account.";
    return;
  }

  if (els.communitySignupStatus) els.communitySignupStatus.textContent = "Creating account...";
  try {
    const response = await fetch(COMMUNITY_REGISTER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, handle, email, bio, captcha_token: captchaToken })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success) {
      throw new Error(data.error || "Account could not be created.");
    }
    saveCommunityProfile({
      name: data.user?.name || name,
      handle: data.user?.handle || handle,
      email: data.user?.email || email,
      bio: data.user?.bio || bio,
      avatarColor: data.user?.avatar_color || "",
      token: data.token || ""
    });
    resetCommunityCaptcha();
    renderCommunitySession();
    if (typeof els.communitySignupDialog?.close === "function") els.communitySignupDialog.close();
    if (els.communityPostBody) els.communityPostBody.focus();
  } catch (error) {
    resetCommunityCaptcha();
    if (els.communitySignupStatus) els.communitySignupStatus.textContent = error.message || "Account could not be created.";
  }
}

async function submitCommunityPost(event) {
  event.preventDefault();
  const token = communityState.profile?.token || "";
  if (!token) {
    openCommunitySignup();
    return;
  }

  const payload = {
    body: (els.communityPostBody?.value || "").trim(),
    post_type: els.communityPostType?.value || "offer",
    store: (els.communityPostStore?.value || "").trim(),
    price: (els.communityPostPrice?.value || "").trim(),
    product_title: (els.communityPostTitle?.value || "").trim(),
    product_url: (els.communityPostUrl?.value || "").trim(),
    image_url: (els.communityPostImage?.value || "").trim()
  };

  if (!payload.body && !payload.product_title && !payload.product_url) {
    if (els.communityPostStatus) els.communityPostStatus.textContent = "Write a post or add a product link.";
    return;
  }

  if (els.communityPostStatus) els.communityPostStatus.textContent = "Posting...";
  try {
    const response = await fetch(COMMUNITY_POSTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.success) {
      throw new Error(data.error || "Post could not be published.");
    }
    communityState.posts = Array.isArray(data.posts) ? data.posts : communityState.posts;
    els.communityPostForm.reset();
    if (els.communityPostStatus) els.communityPostStatus.textContent = "Posted.";
    renderCommunityFeed();
  } catch (error) {
    if (els.communityPostStatus) els.communityPostStatus.textContent = error.message || "Post could not be published.";
  }
}

function janForFigure(figure) {
  const candidates = [figure?.sku, figure?.jan, figure?.mfc_id, figure?.id];
  for (const candidate of candidates) {
    const jan = String(candidate || "").replace(/\D/g, "");
    if (jan.length === 12 || jan.length === 13) return jan;
  }
  return "";
}

async function submitPriceAlert() {
  const figure = selectedFigure();
  if (!figure) {
    alert("Select a figure before creating a price alert.");
    return;
  }

  const jan = janForFigure(figure);
  if (!jan) {
    alert("This figure does not have a JAN/EAN code yet, so NekoPrice cannot create a price alert.");
    return;
  }

  const targetPrice = Number.parseFloat(els.alertPrice.value);
  const email = (els.alertEmail?.value || userProfile.email || "").trim();
  const currency = preferredCurrency();

  if (!Number.isFinite(targetPrice) || targetPrice <= 0) {
    alert(`Please enter a valid target price in ${currency}.`);
    return;
  }

  if (!email) {
    alert("Please enter an email address for the price alert.");
    return;
  }

  els.alertStatus.textContent = "Creating price alert...";

  try {
    const response = await fetch(apiEndpoint("/api/alert"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jan,
        target_price: targetPrice,
        currency,
        email,
        figure_name: figure.name
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.success !== true) {
      throw new Error(data.error || "Could not create price alert.");
    }

    const confirmation = data.email_sent
      ? " Confirmation email sent."
      : " Alert saved, but the confirmation email was not sent yet.";
    els.alertStatus.textContent = `Price alert created successfully.${confirmation}`;
    alert(data.email_sent ? "Alert created. Confirmation email sent." : "Alert created, but the confirmation email was not sent.");
    if (typeof els.alertDialog.close === "function") {
      els.alertDialog.close();
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not create price alert.";
    els.alertStatus.textContent = message;
    alert(message);
  }
}

function offerChartValue(offer) {
  return offerProductPriceValue(offer);
}

function offerChartRows(figure) {
  return sortedOffers(offersForCountry(figure))
    .map((offer) => ({
      provider: providerName(offer.provider),
      value: offerChartValue(offer),
      currency: offer.currency || offerDisplayCurrency(),
      url: safeExternalOfferUrl(offer),
      offer
    }))
    .filter((row) => row.value !== null && row.url);
}

function renderExclusiveOfferPanel(row) {
  if (!els.exclusiveOfferPanel) return;

  els.exclusiveOfferPanel.innerHTML = `
    <div class="exclusive-offer-copy">
      <span class="exclusive-offer-kicker">Exclusive sale</span>
      <strong>Only available at ${escapeHtml(row.provider)}</strong>
      <span>${escapeHtml(formatMoney(row.value, row.currency))}</span>
    </div>
    <a class="exclusive-offer-button" href="${escapeHtml(row.url)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-offer-link="external">
      Buy at ${escapeHtml(row.provider)}
    </a>
  `;
  els.exclusiveOfferPanel.hidden = false;
}

function resetExclusiveOfferPanel() {
  if (!els.exclusiveOfferPanel) return;
  els.exclusiveOfferPanel.hidden = true;
  els.exclusiveOfferPanel.innerHTML = "";
}

function renderOfferDonutChart(figure) {
  if (!els.offerDonutChart) return;

  if (offerDonutChartInstance) {
    offerDonutChartInstance.destroy();
    offerDonutChartInstance = null;
  }

  const rows = offerChartRows(figure);
  const context = els.offerDonutChart.getContext("2d");
  context.clearRect(0, 0, els.offerDonutChart.width, els.offerDonutChart.height);
  if (els.offerDonutStatus) els.offerDonutStatus.textContent = "";
  resetExclusiveOfferPanel();
  els.offerDonutChart.hidden = false;

  if (!rows.length) {
    els.offerDonutChart.hidden = true;
    if (els.offerDonutStatus) els.offerDonutStatus.textContent = "No live priced store offers yet.";
    return;
  }

  if (!window.Chart) {
    els.offerDonutChart.hidden = true;
    if (els.offerDonutStatus) els.offerDonutStatus.textContent = "Chart.js is not available.";
    return;
  }

  offerDonutChartInstance = new window.Chart(context, {
    type: "doughnut",
    data: {
      labels: rows.map((row) => row.provider),
      datasets: [
        {
          data: rows.map((row) => row.value),
          backgroundColor: rows.map((_, index) => OFFER_DONUT_COLORS[index % OFFER_DONUT_COLORS.length]),
          borderColor: OFFER_DONUT_BORDER,
          borderWidth: 3,
          hoverBorderColor: OFFER_DONUT_BORDER,
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      onClick(event, elements) {
        const chartElement = elements?.[0];
        const row = typeof chartElement?.index === "number" ? rows[chartElement.index] : null;
        if (row?.url) {
          window.open(row.url, "_blank", "noopener,noreferrer");
        }
      },
      onHover(event, elements) {
        const target = event?.native?.target;
        if (target) target.style.cursor = elements?.length ? "pointer" : "default";
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: OFFER_DONUT_LABEL,
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 10,
            padding: 16,
            font: {
              family: "Inter, Manrope, Segoe UI, Arial, sans-serif",
              size: 12,
              weight: "700"
            }
          }
        },
        tooltip: {
          backgroundColor: OFFER_DONUT_BORDER,
          borderWidth: 0,
          displayColors: true,
          padding: 10,
          callbacks: {
            label(context) {
              const row = rows[context.dataIndex];
              return `${row.provider}: ${formatMoney(row.value, row.currency)}`;
            }
          }
        }
      }
    }
  });
}

async function loadPriceHistory(jan) {
  if (!els.priceHistoryChart) return;

  if (priceHistoryChartInstance) {
    priceHistoryChartInstance.destroy();
    priceHistoryChartInstance = null;
  }

  if (!jan) {
    console.log("No JAN available for loading price history.");
    return;
  }

  try {
    const response = await fetch(apiEndpoint("/api/history") + "/" + encodeURIComponent(jan));
    const data = await response.json();

    if (!data.success || data.history.length === 0) {
      console.log("Not enough history for the chart.");
      return;
    }

    if (!window.Chart) {
      console.warn("Chart.js is not available.");
      return;
    }

    // Clean and format dates for compact chart labels.
    data.history.forEach(item => {
      const d = new Date(item.date);
      item.date = d.toLocaleString("en-GB", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    });

    // 1. Extract unique dates for the X axis.
    const rawDates = data.history.map(item => item.date);
    const labels = [...new Set(rawDates)].sort();

    // 2. Group store data into line datasets.
    const stores = [...new Set(data.history.map(item => item.store))];
    const datasets = stores.map((store, index) => {
      // Dynamic colors per store.
      const hue = index * 137.508;
      const color = `hsl(${hue}, 70%, 50%)`;

      // Map prices to their matching dates.
      const dataPoints = labels.map(date => {
        const record = data.history.find(h => h.store === store && h.date === date);
        return record ? record.price : null; // null breaks the line when that day has no data.
      });

      return {
        label: store,
        data: dataPoints,
        borderColor: color,
        backgroundColor: color,
        tension: 0.3,
        spanGaps: true // Connect points even if one day is missing.
      };
    });

    // 3. Draw the chart.
    const ctx = els.priceHistoryChart.getContext("2d");
    priceHistoryChartInstance = new window.Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: { display: true, text: "Price history", font: { size: 18 } },
          tooltip: { mode: "index", intersect: false }
        },
        scales: {
          y: {
            title: { display: true, text: "Price" },
            beginAtZero: false
          }
        }
      }
    });
  } catch (error) {
    console.error("Error loading chart:", error);
  }
}

function drawChart(history) {
  if (!els.chart) return;

  const canvas = els.chart;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 34;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffdfd";
  ctx.fillRect(0, 0, width, height);

  if (!history || history.length < 2) {
    ctx.fillStyle = "#716b78";
    ctx.font = "700 22px Segoe UI, Arial";
    ctx.fillText("Not enough checked total data yet", padding, height / 2);
    if (els.chartDelta) els.chartDelta.textContent = "New";
    if (els.chartCaption) els.chartCaption.textContent = "Price history appears after at least two checked total updates.";
    return;
  }

  const values = history.map((point) => point.amount);
  const min = Math.min(...values) - 3;
  const max = Math.max(...values) + 3;
  const stepX = (width - padding * 2) / (values.length - 1);

  ctx.strokeStyle = "#efe5ed";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i += 1) {
    const y = padding + ((height - padding * 2) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  const points = values.map((value, index) => {
    const x = padding + stepX * index;
    const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2);
    return { x, y };
  });

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.strokeStyle = "#1fa971";
  ctx.lineWidth = 4;
  ctx.lineJoin = "round";
  ctx.stroke();

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = index === points.length - 1 ? "#1fa971" : "#ddd6fe";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.stroke();
  });

  const delta = ((values[values.length - 1] - values[0]) / values[0]) * 100;
  if (els.chartDelta) els.chartDelta.textContent = `${delta.toFixed(0)}%`;
  if (els.chartCaption) els.chartCaption.textContent = `Checked totals from ${history[0].date} to ${history[history.length - 1].date}.`;
}

function renderProductCardsCurrentSelection() {
  els.productGrid.querySelectorAll(".product-card").forEach((card) => {
    const selectButton = card.querySelector("[data-select]");
    if (selectButton) {
      card.setAttribute("aria-current", String(selectButton.dataset.select === selectedFigureId));
    }
  });
}

function bindCardImageFallbacks() {
  els.productGrid.querySelectorAll(".product-thumb img, .product-card__image").forEach((image) => {
    if (image.dataset.fallbackBound) return;
    image.dataset.fallbackBound = "true";
    const applyFallback = () => {
      image.closest(".product-card")?.classList.add("has-placeholder-image");
      if (image.dataset.fallbackApplied === "final") return;
      image.dataset.fallbackApplied = "final";
      image.src = FIGURE_PLACEHOLDER_IMAGE;
    };
    image.addEventListener("error", applyFallback);
    if (image.complete && image.naturalWidth === 0) applyFallback();
  });
}

function emptySupplierCoverageStats() {
  return {
    offerCount: 0,
    productCount: 0,
    checkedCount: 0,
    warningCount: 0,
    inStockCount: 0,
    latestCheckedAt: 0
  };
}

function supplierCoverageCacheKey() {
  return [
    figures.length,
    latestDatabaseStatus?.offerCount || "",
    latestDatabaseStatus?.modifiedAt || "",
    latestDatabaseStatus?.generatedAt || ""
  ].join(":");
}

function supplierCoverageStats() {
  const cacheKey = supplierCoverageCacheKey();
  if (supplierCoverageCache.key === cacheKey) return supplierCoverageCache.stats;

  const stats = new Map();
  figures.forEach((figure) => {
    const figureSeenProviders = new Set();
    const offers = Array.isArray(figure?.offers) ? figure.offers : [];
    offers.forEach((rawOffer) => {
      const providerId = offerProviderId(rawOffer);
      if (!providerId) return;
      const offer = { ...rawOffer, provider: providerId };
      if (!offerHasVerifiedProductPrice(offer)) return;

      const entry = stats.get(providerId) || emptySupplierCoverageStats();
      entry.offerCount += 1;
      if (!figureSeenProviders.has(providerId)) {
        entry.productCount += 1;
        figureSeenProviders.add(providerId);
      }
      if (offerIsFreshlyChecked(offer)) entry.checkedCount += 1;
      if (offerIsAvailableNow(offer)) entry.inStockCount += 1;
      if (offerTrustSummary(offer).hasGuardWarning) entry.warningCount += 1;
      entry.latestCheckedAt = Math.max(entry.latestCheckedAt, offerLastCheckedMs(offer) || 0);
      stats.set(providerId, entry);
    });
  });

  supplierCoverageCache = { key: cacheKey, stats };
  return stats;
}

function supplierCoverageFor(providerId) {
  const normalizedId = offerProviderId({ provider: providerId });
  return supplierCoverageStats().get(normalizedId) || emptySupplierCoverageStats();
}

function supplierLatestCheckLabel(stats) {
  const latest = Number(stats?.latestCheckedAt) || 0;
  if (!latest) return "Refresh pending";
  const ageHours = Math.max(0, (Date.now() - latest) / 36e5);
  if (ageHours < 1) return "Checked now";
  if (ageHours < 24) return `${Math.floor(ageHours)}h ago`;
  return `${Math.floor(ageHours / 24)}d ago`;
}

function renderSuppliers() {
  if (!els.supplierGrid) return;

  els.supplierGrid.innerHTML = availableProviders()
    .map((provider) => ({ provider, stats: supplierCoverageFor(provider.id), local: isLocalProvider(provider.id) }))
    .sort((left, right) => {
      const localRank = Number(right.local) - Number(left.local);
      if (localRank) return localRank;
      const coverageRank = right.stats.productCount - left.stats.productCount;
      if (coverageRank) return coverageRank;
      return String(left.provider.name || left.provider.id).localeCompare(String(right.provider.name || right.provider.id));
    })
    .map(({ provider, stats, local }) => {
      const name = provider.name || providerName(provider.id);
      const url = provider.url ? injectAffiliateLink(provider.url, provider.id) : "";
      const logo = storeSiteLogo(provider) || storeSiteCarouselLogo(provider);
      const domain = provider.url ? storeSiteDomain(provider.url) : METADATA_FALLBACK;
      const warningLabel = stats.warningCount ? `${formatDatabaseNumber(stats.warningCount)} need review` : "Guard clean";
      return `
        <article class="supplier-card ${local ? "supplier-card--local" : ""}">
          <div class="supplier-card-top">
            <div class="supplier-logo" aria-hidden="true">
              ${logo ? `<img src="${escapeHtml(logo)}" alt="" loading="lazy" decoding="async" />` : escapeHtml(storeSiteInitials(name))}
            </div>
            <div class="supplier-card-copy">
              <h3 data-i18n-skip>${escapeHtml(name)}</h3>
              <p>${escapeHtml(provider.trust || "Known anime figure retailer with direct product pages.")}</p>
            </div>
          </div>
          <div class="supplier-metrics" aria-label="${escapeHtml(`${name} comparison coverage`)}">
            <span>
              <b>Offers</b>
              <strong>${escapeHtml(formatDatabaseNumber(stats.offerCount))}</strong>
              <small>verified direct</small>
            </span>
            <span>
              <b>Products</b>
              <strong>${escapeHtml(formatDatabaseNumber(stats.productCount))}</strong>
              <small>distinct figures</small>
            </span>
            <span class="${stats.warningCount ? "needs-review" : "is-clean"}">
              <b>Trust</b>
              <strong>${escapeHtml(stats.warningCount ? String(stats.warningCount) : "OK")}</strong>
              <small>${escapeHtml(warningLabel)}</small>
            </span>
          </div>
          <dl>
            <div data-row>
              <dt>Location</dt>
              <dd>${escapeHtml(provider.country || METADATA_FALLBACK)}</dd>
            </div>
            <div data-row>
              <dt>Market</dt>
              <dd>${escapeHtml(local ? `Local to ${currentCountryLabel()}` : "International")}</dd>
            </div>
            <div data-row>
              <dt>Latest check</dt>
              <dd>${escapeHtml(supplierLatestCheckLabel(stats))}</dd>
            </div>
            <div data-row>
              <dt>Website</dt>
              <dd>${escapeHtml(domain)}</dd>
            </div>
          </dl>
          <div class="supplier-badges">
            <span class="badge mint">Store identity</span>
            <span class="badge ${local ? "mint" : "blue"}">${local ? "Local option" : "Imports"}</span>
            <span class="badge ${stats.checkedCount ? "mint" : "yellow"}">${escapeHtml(stats.checkedCount ? `${formatDatabaseNumber(stats.checkedCount)} checked` : "Refresh pending")}</span>
            <span class="badge ${stats.inStockCount ? "mint" : "gray"}">${escapeHtml(stats.inStockCount ? `${formatDatabaseNumber(stats.inStockCount)} in stock` : "Stock varies")}</span>
          </div>
          ${url ? `<a class="supplier-open" href="${escapeHtml(url)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-offer-link="external">Open store</a>` : ""}
        </article>
      `;
    })
    .join("");
}

function wishlistQuantityFor(figureId) {
  return Math.max(1, Math.min(99, Number.parseInt(wishlistQuantities[figureId], 10) || 1));
}

function wishlistItemCount() {
  return wishlist.reduce((total, id) => total + wishlistQuantityFor(id), 0);
}

function wishlistEntryForId(id) {
  const figure = figureById(id);
  const quantity = wishlistQuantityFor(id);
  const currency = preferredCurrency();
  if (!figure) {
    return {
      id,
      figure: null,
      quantity,
      title: "Saved figure",
      image: FIGURE_PLACEHOLDER_IMAGE,
      price: null,
      subtotal: null,
      currency,
      provider: "Loading catalogue data"
    };
  }

  const best = bestOffer(figure);
  const rawPrice = best ? offerProductPriceValue(best) : null;
  const convertedPrice = rawPrice !== null ? convertMoney(rawPrice, best.currency, currency) : null;
  const price = convertedPrice !== null ? convertedPrice : rawPrice;
  const priceCurrency = convertedPrice !== null ? currency : best?.currency || currency;

  return {
    id,
    figure,
    quantity,
    title: compactFigureNameForCard(figure, 74),
    image: premiumFigureImageFor(figure),
    price,
    subtotal: price !== null ? roundMoney(price * quantity) : null,
    currency: priceCurrency,
    provider: best ? providerName(best.provider) : STORE_ACTION_FALLBACK
  };
}

function wishlistEntries() {
  saveWishlist();
  saveWishlistQuantities();
  return wishlist.map(wishlistEntryForId);
}

function wishlistTotals(entries = wishlistEntries()) {
  const currency = preferredCurrency();
  const itemCount = entries.reduce((total, entry) => total + entry.quantity, 0);
  const total = entries.reduce((sum, entry) => {
    if (entry.subtotal === null) return sum;
    const converted = convertMoney(entry.subtotal, entry.currency, currency);
    return converted === null ? sum : sum + converted;
  }, 0);
  const pricedCount = entries.filter((entry) => entry.subtotal !== null).length;

  return {
    currency,
    itemCount,
    pricedCount,
    total: pricedCount ? roundMoney(total) : null
  };
}

const WISHLIST_RECOMMENDATION_STOPWORDS = new Set([
  "lookup",
  "look",
  "official",
  "product",
  "figure",
  "figures",
  "scale",
  "with",
  "version",
  "limited",
  "edition",
  "standard",
  "ver",
  "the",
  "and",
  "for",
  "from",
  "unknown",
  "manufacturer",
  "non",
  "new",
  "pre",
  "order",
  "bonus",
  "set",
  "color",
  "colour",
  "special",
  "collection",
  "complete"
]);

function wishlistUsefulSignal(value) {
  const normalized = normalizeText(value);
  if (!normalized) return "";
  if (
    normalized === "official product"
    || normalized === "unknown"
    || normalized === "unknown manufacturer"
    || normalized === "figure"
    || normalized === "standard"
    || normalized === "non scale"
    || normalized === "no jan yet"
  ) {
    return "";
  }
  return normalized;
}

function wishlistSignificantTokens(value) {
  return new Set(
    normalizeText(value)
      .split(/[^a-z0-9]+/i)
      .map((token) => token.trim())
      .filter((token) => {
        if (!token) return false;
        if (WISHLIST_RECOMMENDATION_STOPWORDS.has(token)) return false;
        if (/^\d+$/.test(token)) return false;
        return token.length >= 3 || token === "ai";
      })
  );
}

function wishlistFigureSignalModel(figure) {
  const safeFigure = figure ?? {};
  const titleText = [
    safeFigure.name,
    safeFigure.title,
    safeFigure.rawTitle,
    compactFigureName(safeFigure)
  ].filter(Boolean).join(" ");
  const series = wishlistUsefulSignal(safeFigure.series);
  const character = wishlistUsefulSignal(safeFigure.character);
  const manufacturer = wishlistUsefulSignal(safeFigure.manufacturer);
  const line = wishlistUsefulSignal(safeFigure.line);
  const type = wishlistUsefulSignal(safeFigure.type);
  const titleTokens = wishlistSignificantTokens(titleText);
  const allTokens = new Set([
    ...titleTokens,
    ...wishlistSignificantTokens(series),
    ...wishlistSignificantTokens(character),
    ...wishlistSignificantTokens(line)
  ]);

  return {
    series,
    character,
    manufacturer,
    line,
    type,
    titleTokens,
    allTokens
  };
}

function wishlistSharedTokens(leftTokens, rightTokens) {
  const shared = [];
  leftTokens.forEach((token) => {
    if (rightTokens.has(token)) shared.push(token);
  });
  return shared;
}

function wishlistTokenWeight(token) {
  if (token === "ai") return 18;
  if (token.length >= 7) return 38;
  if (token.length >= 5) return 32;
  return 26;
}

function wishlistRelatedScore(figure, entries) {
  if (!figure || wishlist.includes(figure.id)) return 0;
  const sourceFigures = entries.map((entry) => entry.figure).filter(Boolean);
  const candidate = wishlistFigureSignalModel(figure);
  let score = 0;
  let strongMatch = false;

  sourceFigures.forEach((source) => {
    const sourceModel = wishlistFigureSignalModel(source);
    let sourceStrongMatch = false;
    if (sourceModel.series && candidate.series && sourceModel.series === candidate.series) {
      score += 180;
      sourceStrongMatch = true;
    }
    if (sourceModel.character && candidate.character && sourceModel.character === candidate.character) {
      score += 160;
      sourceStrongMatch = true;
    }

    const sharedTitleTokens = wishlistSharedTokens(sourceModel.titleTokens, candidate.allTokens);
    if (sharedTitleTokens.length) {
      score += sharedTitleTokens.reduce((total, token) => total + wishlistTokenWeight(token), 0);
      sourceStrongMatch = true;
    }

    const sharedCharacterTokens = wishlistSharedTokens(wishlistSignificantTokens(sourceModel.character), candidate.allTokens);
    if (sharedCharacterTokens.length) {
      score += sharedCharacterTokens.reduce((total, token) => total + wishlistTokenWeight(token) + 8, 0);
      sourceStrongMatch = true;
    }

    if (sourceStrongMatch && sourceModel.manufacturer && candidate.manufacturer && sourceModel.manufacturer === candidate.manufacturer) score += 18;
    if (sourceStrongMatch && sourceModel.line && candidate.line && sourceModel.line === candidate.line) score += 14;
    if (sourceStrongMatch && sourceModel.type && candidate.type && sourceModel.type === candidate.type) score += 8;
    strongMatch = strongMatch || sourceStrongMatch;
  });

  if (!strongMatch) return 0;
  const best = bestOffer(figure);
  if (best && offerProductPriceValue(best) !== null) score += 8;
  if (figureHasRealImage(figure)) score += 4;
  return score;
}

function wishlistRelatedOffers(entries, limit = 6) {
  return figures
    .filter((figure) => figure?.id && !wishlist.includes(figure.id) && isDisplayFigure(figure) && figureIsCatalogueReady(figure))
    .map((figure) => ({ figure, score: wishlistRelatedScore(figure, entries) }))
    .filter((item) => item.score >= 30)
    .sort((left, right) => right.score - left.score || compareVerifiedProductPrice(left.figure, right.figure))
    .map((item) => item.figure)
    .slice(0, limit);
}

function renderWishlistRelatedOffers(entries) {
  const related = wishlistRelatedOffers(entries, 8);
  if (!related.length) {
    return `
      <section class="wishlist-related-offers" aria-label="Similar offers">
        <div class="wishlist-related-heading">
          <span>Similar offers</span>
          <strong>Open the figures catalogue to discover more close matches.</strong>
        </div>
      </section>
    `;
  }

  const cards = related
    .map((figure) => {
      const best = bestOffer(figure);
      const rawPrice = best ? offerProductPriceValue(best) : null;
      const convertedPrice = rawPrice !== null && best ? convertMoney(rawPrice, best.currency, preferredCurrency()) : null;
      const price = rawPrice !== null && best
        ? formatMoney(convertedPrice ?? rawPrice, convertedPrice === null ? best.currency : preferredCurrency())
        : PRICE_FALLBACK;
      const provider = best ? providerName(best.provider) : STORE_ACTION_FALLBACK;
      const title = compactFigureNameForCard(figure, 48);
      return `
        <article class="wishlist-related-card">
          <button type="button" class="wishlist-related-image" data-wish-select="${escapeHtml(figure.id)}" aria-label="Compare ${escapeHtml(title)}">
            <img src="${escapeHtml(premiumFigureImageFor(figure))}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" />
          </button>
          <div class="wishlist-related-copy">
            <button type="button" data-wish-select="${escapeHtml(figure.id)}">${escapeHtml(title)}</button>
            <span>${escapeHtml(provider)}</span>
            <strong>${escapeHtml(price)}</strong>
          </div>
          <button class="wishlist-related-save" type="button" data-wish-related-add="${escapeHtml(figure.id)}">Save</button>
        </article>
      `;
    })
    .join("");

  return `
    <section class="wishlist-related-offers" aria-label="Similar offers">
      <div class="wishlist-related-heading">
        <span>Similar offers</span>
        <strong>Based on your wishlist</strong>
      </div>
      <div class="wishlist-related-grid">
        ${cards}
      </div>
    </section>
  `;
}

function renderWishlistEmpty() {
  return `
    <div class="wishlist-bag-empty">
      <strong>Your wishlist is empty.</strong>
      <span>Save figures with the heart button and they will appear here.</span>
      <button type="button" data-wishlist-close>CONTINUE SHOPPING</button>
    </div>
  `;
}

function renderWishlistMini(entries, totals) {
  if (!entries.length) return renderWishlistEmpty();
  const rows = entries
    .slice(0, 5)
    .map((entry) => `
      <article class="wishlist-bag-mini-row">
        <button type="button" class="wishlist-bag-image-button" data-wish-select="${escapeHtml(entry.id)}" aria-label="Open ${escapeHtml(entry.title)}">
          <img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)}" loading="lazy" decoding="async" />
        </button>
        <div class="wishlist-bag-mini-copy">
          <button type="button" class="wishlist-bag-title" data-wish-select="${escapeHtml(entry.id)}">${escapeHtml(entry.title)}</button>
          <div class="wishlist-bag-mini-labels">
            <span>Qty:</span>
            <span>Subtotal:</span>
          </div>
          <div class="wishlist-bag-mini-values">
            <span>${escapeHtml(String(entry.quantity))}</span>
            <strong>${escapeHtml(entry.subtotal !== null ? formatMoney(entry.subtotal, entry.currency) : PRICE_FALLBACK)}</strong>
          </div>
        </div>
      </article>
    `)
    .join("");

  return `
    <div class="wishlist-bag-mini">
      <div class="wishlist-bag-mini-list">
        ${rows}
      </div>
      ${entries.length > 5 ? `<p class="wishlist-bag-more">${escapeHtml(`+${entries.length - 5} more saved products`)}</p>` : ""}
      <dl class="wishlist-bag-summary">
        <div>
          <dt>Number of items:</dt>
          <dd>${escapeHtml(String(totals.itemCount))}</dd>
        </div>
        <div>
          <dt>Total Price:</dt>
          <dd>${escapeHtml(totals.total !== null ? formatMoney(totals.total, totals.currency) : PRICE_FALLBACK)}</dd>
        </div>
      </dl>
      <button class="wishlist-bag-primary" type="button" data-wishlist-mode="full">VIEW WISHLIST</button>
    </div>
  `;
}

function renderWishlistFull(entries, totals) {
  if (!entries.length) return renderWishlistEmpty();
  const rows = entries
    .map((entry) => `
      <article class="wishlist-table-row">
        <div class="wishlist-table-product">
          <button type="button" class="wishlist-table-image" data-wish-select="${escapeHtml(entry.id)}" aria-label="Open ${escapeHtml(entry.title)}">
            <img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)}" loading="lazy" decoding="async" />
          </button>
          <button type="button" class="wishlist-table-title" data-wish-select="${escapeHtml(entry.id)}">${escapeHtml(entry.title)}</button>
        </div>
        <div class="wishlist-table-price">${escapeHtml(entry.price !== null ? formatMoney(entry.price, entry.currency) : PRICE_FALLBACK)}</div>
        <div class="wishlist-table-quantity" aria-label="Quantity for ${escapeHtml(entry.title)}">
          <button type="button" data-wish-quantity="${escapeHtml(entry.id)}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <span>${escapeHtml(String(entry.quantity))}</span>
          <button type="button" data-wish-quantity="${escapeHtml(entry.id)}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
        <div class="wishlist-table-total">${escapeHtml(entry.subtotal !== null ? formatMoney(entry.subtotal, entry.currency) : PRICE_FALLBACK)}</div>
        <button class="wishlist-table-remove" type="button" data-remove-wish="${escapeHtml(entry.id)}" aria-label="Remove ${escapeHtml(entry.title)}">×</button>
      </article>
    `)
    .join("");

  return `
    <div class="wishlist-page">
      <div class="wishlist-table">
        <div class="wishlist-table-head" aria-hidden="true">
          <span>ALL PRODUCTS</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span>TOTAL</span>
        </div>
        ${rows}
      </div>
      <footer class="wishlist-page-footer">
        <div class="wishlist-page-discovery">
          <button class="wishlist-continue" type="button" data-wishlist-close>CONTINUE SHOPPING</button>
          ${renderWishlistRelatedOffers(entries)}
        </div>
        <div class="wishlist-page-total">
          <dl>
            <div>
              <dt>Number of items:</dt>
              <dd>${escapeHtml(String(totals.itemCount))}</dd>
            </div>
            <div>
              <dt>Total Price:</dt>
              <dd>${escapeHtml(totals.total !== null ? formatMoney(totals.total, totals.currency) : PRICE_FALLBACK)}</dd>
            </div>
          </dl>
          <button class="wishlist-bag-primary" type="button" data-wish-select="${escapeHtml(entries.find((entry) => entry.figure)?.id || entries[0].id)}">COMPARE OFFERS</button>
        </div>
      </footer>
    </div>
  `;
}

function renderWishlist() {
  wishlistViewMode = "single";
  const entries = wishlistEntries();
  const totals = wishlistTotals(entries);

  if (els.wishlistCount) {
    els.wishlistCount.textContent = String(totals.itemCount);
    els.wishlistCount.hidden = totals.itemCount === 0;
  }
  if (els.wishlistDialog) {
    els.wishlistDialog.dataset.view = wishlistViewMode;
    const title = els.wishlistDialog.querySelector(".modal-header h2");
    if (title) title.textContent = "Wishlist Bag";
  }
  if (!els.wishlistItems) return;
  els.wishlistItems.innerHTML = renderWishlistFull(entries, totals);
  renderHeaderUtilities();
}

function countryFlagEmoji(countryCode = userProfile.country) {
  const normalized = String(countryCode || "").toUpperCase();
  if (normalized === "INTL") return "🌐";
  const iso = normalized === "UK" ? "GB" : normalized;
  if (!/^[A-Z]{2}$/.test(iso)) return "🌐";
  return [...iso].map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0))).join("");
}

function countryFlagImagePath(countryCode = userProfile.country) {
  const normalized = String(countryCode || "INTL").toUpperCase();
  const supported = COUNTRY_PROFILES[normalized] ? normalized : "INTL";
  if (supported === "INTL") return "./assets/country-flags/intl.png";
  const isoCode = supported === "UK" ? "gb" : supported.toLowerCase();
  return `https://flagcdn.com/w80/${isoCode}.png`;
}

function countryFlagHighDensityImagePath(countryCode = userProfile.country) {
  const normalized = String(countryCode || "INTL").toUpperCase();
  const supported = COUNTRY_PROFILES[normalized] ? normalized : "INTL";
  if (supported === "INTL") return "";
  const isoCode = supported === "UK" ? "gb" : supported.toLowerCase();
  return `https://flagcdn.com/w160/${isoCode}.png`;
}

function countryFlagLocalFallbackPath(countryCode = userProfile.country) {
  const normalized = String(countryCode || "INTL").toUpperCase();
  const supported = COUNTRY_PROFILES[normalized] ? normalized : "INTL";
  return `./assets/country-flags/${supported.toLowerCase()}.png`;
}

function countryFlagImageMarkup(countryCode = userProfile.country) {
  const normalized = String(countryCode || "INTL").toUpperCase();
  const supported = COUNTRY_PROFILES[normalized] ? normalized : "INTL";
  const highDensityPath = countryFlagHighDensityImagePath(supported);
  return `
    <img
      class="country-flag-image"
      src="${escapeHtml(countryFlagImagePath(supported))}"
      ${highDensityPath ? `srcset="${escapeHtml(highDensityPath)} 2x"` : ""}
      alt=""
      width="40"
      height="30"
      decoding="async"
      loading="eager"
      referrerpolicy="no-referrer"
      data-country-flag-image="${escapeHtml(supported)}"
      data-country-flag-fallback="${escapeHtml(countryFlagLocalFallbackPath(supported))}"
    />
    <span class="country-flag-image-fallback" aria-hidden="true">${escapeHtml(countryFlagEmoji(supported))}</span>
  `;
}

function bindCountryFlagImageFallbacks(root) {
  if (!root?.querySelectorAll) return;
  root.querySelectorAll("[data-country-flag-image]").forEach((image) => {
    const showFallback = () => {
      const fallbackPath = String(image.dataset.countryFlagFallback || "").trim();
      if (fallbackPath && image.dataset.countryFlagLocalAttempted !== "true") {
        image.dataset.countryFlagLocalAttempted = "true";
        image.removeAttribute("srcset");
        image.src = fallbackPath;
        return;
      }
      image.removeEventListener("error", showFallback);
      image.parentElement?.classList.add("country-flag-image-failed");
    };
    if (image.complete && image.naturalWidth === 0) {
      showFallback();
    }
    image.addEventListener("error", showFallback);
  });
}

function headerMarketCountryCodes() {
  const priority = HEADER_MARKET_COUNTRY_ORDER.filter((code) => COUNTRY_PROFILES[code]);
  const remaining = Object.entries(COUNTRY_PROFILES)
    .filter(([code]) => !priority.includes(code))
    .sort((left, right) => localizedCountryName(left[0], left[1].label).localeCompare(localizedCountryName(right[0], right[1].label)))
    .map(([code]) => code);
  return [...priority, ...remaining];
}

function renderHeaderMarketMenu() {
  if (!els.headerMarketMenu) return;
  const selectedCountry = COUNTRY_PROFILES[userProfile.country] ? userProfile.country : "PT";
  const rows = headerMarketCountryCodes()
    .map((code) => {
      const profile = COUNTRY_PROFILES[code];
      const selected = code === selectedCountry;
      const currency = profile.currency || preferredCurrency();
      return `
        <button class="topbar-market-option" type="button" role="menuitemradio" aria-checked="${selected ? "true" : "false"}" data-market-country="${escapeHtml(code)}">
          <span class="topbar-market-option-flag has-country-flag-image" data-country="${escapeHtml(code)}" aria-hidden="true">${countryFlagImageMarkup(code)}</span>
          <span class="topbar-market-option-copy">
            <strong>${escapeHtml(localizedCountryName(code, profile.label))}</strong>
            <small>${escapeHtml(currency)}</small>
          </span>
        </button>
      `;
    })
    .join("");
  els.headerMarketMenu.innerHTML = `
    <div class="topbar-market-menu-panel">
      <div class="topbar-market-menu-heading">
        <span>Ship to / currency</span>
        <strong>${escapeHtml(currentCountryLabel())} · ${escapeHtml(preferredCurrency())}</strong>
      </div>
      <div class="topbar-market-menu-list">
        ${rows}
      </div>
      <button class="topbar-market-more" type="button" role="menuitem" data-open-market-settings>
        More countries / currency
      </button>
    </div>
  `;
  bindCountryFlagImageFallbacks(els.headerMarketMenu);
}

function closeHeaderMarketMenu() {
  if (!els.headerMarketMenu) return;
  els.headerMarketMenu.hidden = true;
  els.headerMarketButton?.setAttribute("aria-expanded", "false");
}

function openHeaderMarketMenu() {
  if (!els.headerMarketMenu) return;
  renderHeaderMarketMenu();
  els.headerMarketMenu.hidden = false;
  els.headerMarketButton?.setAttribute("aria-expanded", "true");
}

function toggleHeaderMarketMenu() {
  if (!els.headerMarketMenu) return;
  if (els.headerMarketMenu.hidden) {
    openHeaderMarketMenu();
  } else {
    closeHeaderMarketMenu();
  }
}

function renderHeaderUtilities() {
  if (els.headerCountryFlag) {
    const country = COUNTRY_PROFILES[userProfile.country] ? userProfile.country : "INTL";
    els.headerCountryFlag.classList.add("has-country-flag-image");
    els.headerCountryFlag.innerHTML = countryFlagImageMarkup(country);
    els.headerCountryFlag.dataset.country = country;
    els.headerCountryFlag.setAttribute("title", currentCountryLabel());
    bindCountryFlagImageFallbacks(els.headerCountryFlag);
  }
  if (els.headerCurrencyText) els.headerCurrencyText.textContent = preferredCurrency();
  if (els.wishlistCount) {
    const count = wishlistItemCount();
    els.wishlistCount.textContent = String(count);
    els.wishlistCount.hidden = count === 0;
  }
  if (els.cartCount) {
    els.cartCount.textContent = String(cart.length);
    els.cartCount.hidden = cart.length === 0;
  }
  renderHeaderMarketMenu();
}

function figureById(figureId) {
  return figures.find((item) => item.id === figureId) || null;
}

function cartLineForFigure(figure) {
  const best = bestOffer(figure);
  const bestUrl = best ? safeExternalOfferUrl(best) : "";
  const provider = best ? providerName(best.provider) : "No verified store";
  const productPrice = best ? offerProductPriceValue(best) : null;
  const price = productPrice !== null ? formatOfferPrice(best, productPrice) : PRICE_FALLBACK;
  return `
    <div class="wishlist-row cart-row">
      <div class="cart-row-copy">
        <strong>${escapeHtml(compactFigureNameForCard(figure, 58))}</strong>
        <span>${escapeHtml(price)} · ${escapeHtml(provider)}</span>
      </div>
      <div class="cart-row-actions">
        <button type="button" class="secondary-button" data-cart-select="${escapeHtml(figure.id)}">View</button>
        ${bestUrl ? `<a class="secondary-button cart-row-link" href="${escapeHtml(bestUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-offer-link="external">Store</a>` : ""}
        <button type="button" class="secondary-button" data-remove-cart="${escapeHtml(figure.id)}">Remove</button>
      </div>
    </div>
  `;
}

function renderCart() {
  cart = [...new Set(cart.filter(Boolean))];
  saveCart();
  if (els.cartCount) {
    els.cartCount.textContent = String(cart.length);
    els.cartCount.hidden = cart.length === 0;
  }
  if (els.addToCartProduct && selectedFigureId) {
    els.addToCartProduct.textContent = cart.includes(selectedFigureId) ? "In cart" : "Add to cart";
  }
  if (!els.cartItems) return;
  const rows = cart
    .map((id) => {
      const figure = figureById(id);
      if (figure) return cartLineForFigure(figure);
      return `
        <div class="wishlist-row cart-row">
          <div class="cart-row-copy">
            <strong>Saved figure</strong>
            <span>Product ${escapeHtml(id)} will appear when its catalogue page is loaded.</span>
          </div>
          <div class="cart-row-actions">
            <button type="button" class="secondary-button" data-remove-cart="${escapeHtml(id)}">Remove</button>
          </div>
        </div>
      `;
    })
    .join("");
  els.cartItems.innerHTML = rows || (cart.length && !figures.length
    ? `<p class="muted">Loading your saved cart items...</p>`
    : `<p class="muted">Your cart is empty. Add figures while comparing prices.</p>`);
  if (els.cartClearButton) els.cartClearButton.hidden = cart.length === 0;
  renderHeaderUtilities();
}

function addToCart(figureId) {
  if (!figureId) return;
  if (!cart.includes(figureId)) cart = [...cart, figureId];
  saveCart();
  renderCart();
}

function removeFromCart(figureId) {
  cart = cart.filter((id) => id !== figureId);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function gameCurrencySymbol() {
  return CURRENCY_SYMBOLS[gameState.currency] || gameState.currency;
}

function roundGamePrice(value) {
  return gameState.currency === "JPY" ? Math.max(1, Math.round(value)) : roundMoney(value);
}

function formatGameMoney(value) {
  return formatMoney(roundGamePrice(value), gameState.currency);
}

function renderGameScores() {
  if (els.gameHighScore) els.gameHighScore.textContent = String(gameState.highScore);
  if (els.gameHighScorePlay) els.gameHighScorePlay.textContent = String(gameState.highScore);
  if (els.gameCurrentScore) els.gameCurrentScore.textContent = String(gameState.currentScore);
}

function gameFigurePrice(figure, currency = gameState.currency) {
  const prices = verifiedPriceOffers(figure)
    .map((offer) => convertMoney(offer.productPrice, offer.currency || "EUR", currency))
    .filter((price) => typeof price === "number" && Number.isFinite(price) && price > 0);
  return prices.length ? Math.min(...prices) : null;
}

function playableGameFigures() {
  if (!catalogueReady) return [];
  return figures.filter((figure) =>
    figure
    && figureHasRealImage(figure)
    && !isPendingFigure(figure)
    && gameFigurePrice(figure, gameState.currency) !== null
  );
}

function renderGameLobbyStatus() {
  renderGameScores();
  if (!els.gameLobbyStatus) return;
  if (!catalogueReady) {
    els.gameLobbyStatus.textContent = "Loading catalogue...";
    return;
  }
  const count = playableGameFigures().length;
  els.gameLobbyStatus.textContent = count
    ? `${count} playable figures with verified image and price.`
    : "Not enough verified figures with image and price yet.";
}

function pickGameFigure() {
  const candidates = playableGameFigures();
  if (!candidates.length) return null;
  const pool = candidates.length > 1 && gameState.target
    ? candidates.filter((figure) => figure.id !== gameState.target.id)
    : candidates;
  return pool[Math.floor(Math.random() * pool.length)] || candidates[0];
}

function setGamePowerupsEnabled(isEnabled) {
  els.gameSection?.querySelectorAll("[data-game-powerup]").forEach((button) => {
    const key = button.dataset.gamePowerup;
    button.disabled = !isEnabled || Boolean(gameState.usedPowerups[key]);
    button.setAttribute("aria-pressed", String(Boolean(gameState.usedPowerups[key])));
  });
}

function resetGameRoundUi() {
  gameState.completed = false;
  if (els.gameGuessInput) {
    els.gameGuessInput.value = "";
    els.gameGuessInput.disabled = false;
    els.gameGuessInput.step = gameState.currency === "JPY" ? "1" : "0.01";
  }
  if (els.gameSubmitGuessButton) els.gameSubmitGuessButton.disabled = false;
  if (els.gameChoicePanel) {
    els.gameChoicePanel.hidden = true;
    els.gameChoicePanel.innerHTML = "";
  }
  if (els.gameGuessPanel) els.gameGuessPanel.hidden = false;
  if (els.gameHintPanel) els.gameHintPanel.innerHTML = "";
  if (els.gameFeedback) {
    els.gameFeedback.innerHTML = "";
    els.gameFeedback.className = "game-feedback";
  }
  renderGameScores();
  setGamePowerupsEnabled(true);
}

function renderGameRound() {
  const figure = gameState.target;
  if (!figure) return;
  const price = gameFigurePrice(figure, gameState.currency);
  if (price === null) return;

  gameState.actualPrice = roundGamePrice(price);
  resetGameRoundUi();
  if (els.gameLobby) els.gameLobby.hidden = true;
  if (els.gamePlay) els.gamePlay.hidden = false;
  if (els.gameRoundLabel) els.gameRoundLabel.textContent = String(gameState.round).padStart(2, "0");
  if (els.gameFigureName) els.gameFigureName.textContent = compactFigureNameForCard(figure, 36);
  if (els.gameFigureMaker) els.gameFigureMaker.textContent = [figure.manufacturer, figure.series].filter(Boolean).join(" / ") || "Unknown manufacturer";
  if (els.gameFigureImage) {
    els.gameFigureImage.src = premiumFigureImageFor(figure);
    els.gameFigureImage.alt = figure.name || figure.title || "Figure to guess";
    els.gameFigureImage.classList.toggle("ecchi-blur", shouldBlurFigureImage(figure));
  }
  if (els.gameCurrencySymbol) els.gameCurrencySymbol.textContent = gameCurrencySymbol();
  window.setTimeout(() => els.gameGuessInput?.focus(), 80);
}

function startGameSession() {
  saveGameCurrency(els.gameCurrencySelect?.value || gameState.currency);
  gameState.currentScore = 0;
  gameState.round = 0;
  gameState.target = null;
  gameState.actualPrice = null;
  gameState.completed = false;
  gameState.inProgress = true;
  gameState.usedPowerups = {};
  renderGameScores();
  startGameRound();
}

function startGameRound() {
  if (!catalogueReady) {
    renderGameLobbyStatus();
    return;
  }
  if (!gameState.inProgress) {
    gameState.inProgress = true;
  }
  const figure = pickGameFigure();
  if (!figure) {
    renderGameLobbyStatus();
    return;
  }
  gameState.target = figure;
  gameState.round += 1;
  renderGameRound();
}

function endGameSession() {
  gameState.inProgress = false;
  gameState.target = null;
  gameState.actualPrice = null;
  gameState.completed = false;
  if (els.gamePlay) els.gamePlay.hidden = true;
  if (els.gameLobby) els.gameLobby.hidden = false;
  renderGameLobbyStatus();
}

function scoreGameGuess(guess, actual) {
  if (!Number.isFinite(guess) || guess <= 0 || !Number.isFinite(actual) || actual <= 0) return 0;
  const percentageMiss = Math.abs(guess - actual) / actual;
  return Math.max(0, Math.round(100 * Math.max(0, 1 - percentageMiss)));
}

function triggerGameCelebration() {
  if (!els.gameSection) return;
  const burst = document.createElement("div");
  burst.className = "game-confetti";
  for (let index = 0; index < 30; index += 1) {
    const piece = document.createElement("span");
    piece.style.setProperty("--x", `${Math.random() * 220 - 110}px`);
    piece.style.setProperty("--r", `${Math.random() * 220 - 110}deg`);
    piece.style.animationDelay = `${Math.random() * 0.18}s`;
    burst.appendChild(piece);
  }
  els.gameSection.appendChild(burst);
  window.setTimeout(() => burst.remove(), 1400);
}

function submitGameGuess(rawGuess) {
  if (gameState.completed || !gameState.target || !Number.isFinite(gameState.actualPrice)) return;
  const guess = Number(rawGuess);
  if (!Number.isFinite(guess) || guess <= 0) {
    if (els.gameFeedback) {
      els.gameFeedback.className = "game-feedback is-warning";
      els.gameFeedback.innerHTML = `<strong>Invalid guess.</strong><span>Enter a value above zero in ${escapeHtml(gameState.currency)}.</span>`;
    }
    return;
  }

  const roundedGuess = roundGamePrice(guess);
  const score = scoreGameGuess(roundedGuess, gameState.actualPrice);
  const miss = Math.abs(roundedGuess - gameState.actualPrice);
  const missPercent = gameState.actualPrice ? (miss / gameState.actualPrice) * 100 : 0;
  const isBullseye = score >= 95;
  gameState.currentScore += score;
  const previousHighScore = gameState.highScore;
  const brokeRecord = gameState.currentScore > previousHighScore;
  if (brokeRecord) {
    saveGameHighScore(gameState.currentScore);
  }
  renderGameScores();

  gameState.completed = true;
  if (els.gameGuessInput) els.gameGuessInput.disabled = true;
  if (els.gameSubmitGuessButton) els.gameSubmitGuessButton.disabled = true;
  setGamePowerupsEnabled(false);
  if (els.gameChoicePanel) {
    els.gameChoicePanel.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  }

  if (els.gameFeedback) {
    els.gameFeedback.className = `game-feedback ${brokeRecord ? "is-record" : isBullseye ? "is-win" : "is-complete"}`;
    els.gameFeedback.innerHTML = `
      <strong>${brokeRecord ? "New all-time record!" : isBullseye ? "Almost perfect!" : `${score} points this round`}</strong>
      <span>Round: +${score} points | Run total: ${gameState.currentScore}</span>
      <span>Real price: ${escapeHtml(formatGameMoney(gameState.actualPrice))}</span>
      <span>Your guess: ${escapeHtml(formatGameMoney(roundedGuess))} (${missPercent.toFixed(1)}% off)</span>
    `;
  }
  if (brokeRecord) triggerGameCelebration();
}

function useGamePowerup(key) {
  if (!gameState.target || gameState.completed || gameState.usedPowerups[key]) return false;
  gameState.usedPowerups[key] = true;
  setGamePowerupsEnabled(true);
  return true;
}

function generateMultipleChoiceValues() {
  const actual = gameState.actualPrice;
  const multipliers = [0.68, 0.84, 1.18, 1.36, 0.76, 1.52].sort(() => Math.random() - 0.5);
  const values = new Set([roundGamePrice(actual)]);
  multipliers.forEach((multiplier, index) => {
    if (values.size >= 4) return;
    const jitter = 0.94 + Math.random() * 0.12;
    const candidate = roundGamePrice(actual * multiplier * jitter + index);
    if (candidate > 0) values.add(candidate);
  });
  while (values.size < 4) {
    values.add(roundGamePrice(actual * (0.7 + Math.random() * 0.8)));
  }
  return [...values].sort((a, b) => a - b);
}

function showMultipleChoicePowerup() {
  if (!useGamePowerup("multiple") || !els.gameChoicePanel) return;
  const choices = generateMultipleChoiceValues();
  if (els.gameGuessPanel) els.gameGuessPanel.hidden = true;
  els.gameChoicePanel.hidden = false;
  els.gameChoicePanel.innerHTML = `
    <p>Pick one of the four prices:</p>
    <div class="game-choice-grid">
      ${choices.map((value) => `<button type="button" data-game-choice="${escapeHtml(value)}">${escapeHtml(formatGameMoney(value))}</button>`).join("")}
    </div>
  `;
}

function showHotColdPowerup() {
  if (!useGamePowerup("hotcold") || !els.gameHintPanel) return;
  els.gameHintPanel.innerHTML = `
    <div class="game-hotcold">
      <label for="gameHotColdInput">Free test guess</label>
      <div class="game-hotcold-row">
        <input id="gameHotColdInput" type="number" min="0" step="${gameState.currency === "JPY" ? "1" : "0.01"}" placeholder="${escapeHtml(gameCurrencySymbol())} 0.00" />
        <button type="button" data-game-hotcold-submit>Test</button>
      </div>
      <p id="gameHotColdResult"></p>
    </div>
  `;
  window.setTimeout(() => document.querySelector("#gameHotColdInput")?.focus(), 60);
}

function submitHotColdGuess() {
  const input = document.querySelector("#gameHotColdInput");
  const result = document.querySelector("#gameHotColdResult");
  if (!input || !result || !Number.isFinite(gameState.actualPrice)) return;
  const value = Number(input.value);
  if (!Number.isFinite(value) || value <= 0) {
    result.textContent = "Enter a valid test value.";
    return;
  }
  result.textContent = roundGamePrice(value) < gameState.actualPrice ? "Higher" : "Lower";
  input.disabled = true;
}

function showRangePowerup() {
  if (!useGamePowerup("range") || !els.gameHintPanel || !Number.isFinite(gameState.actualPrice)) return;
  const margin = gameState.actualPrice * (0.1 + Math.random() * 0.08);
  const min = roundGamePrice(Math.max(1, gameState.actualPrice - margin));
  const max = roundGamePrice(gameState.actualPrice + margin);
  els.gameHintPanel.innerHTML = `
    <div class="game-hint-card">
      <strong>Safe range</strong>
      <span>The price is between ${escapeHtml(formatGameMoney(min))} and ${escapeHtml(formatGameMoney(max))}.</span>
    </div>
  `;
}

function releaseYearForFigure(figure) {
  const raw = String(figure?.releaseDate || figure?.release || "").trim();
  const match = raw.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : "unknown year";
}

function showTechnicalCluePowerup() {
  if (!useGamePowerup("clue") || !els.gameHintPanel || !gameState.target) return;
  const figure = gameState.target;
  const details = [
    `Type/scale: ${figure.type || "Figure"} / ${figure.scale || "Non-scale"}`,
    `Collection: ${figure.series || figure.line || "unknown"}`,
    `Year: ${releaseYearForFigure(figure)}`
  ];
  els.gameHintPanel.innerHTML = `
    <div class="game-hint-card">
      <strong>Tech clue</strong>
      ${details.map((detail) => `<span>${escapeHtml(detail)}</span>`).join("")}
    </div>
  `;
}

function handleGamePowerup(key) {
  if (key === "multiple") showMultipleChoicePowerup();
  if (key === "hotcold") showHotColdPowerup();
  if (key === "range") showRangePowerup();
  if (key === "clue") showTechnicalCluePowerup();
}

function initializeGame() {
  gameState.highScore = loadGameHighScore();
  gameState.currentScore = 0;
  saveGameCurrency(loadGameCurrency());
  if (els.gameLobby) els.gameLobby.hidden = false;
  if (els.gamePlay) els.gamePlay.hidden = true;
  renderGameScores();
  renderGameLobbyStatus();
}

function toggleWishlist(figureId) {
  if (wishlist.includes(figureId)) {
    wishlist = wishlist.filter((id) => id !== figureId);
    delete wishlistQuantities[figureId];
  } else {
    wishlist = [...wishlist, figureId];
    wishlistQuantities[figureId] = wishlistQuantityFor(figureId);
  }
  saveWishlist();
  saveWishlistQuantities();
  renderWishlist();
  renderProductCards();
  if (selectedFigureId === figureId && els.trackProduct) {
    els.trackProduct.textContent = wishlist.includes(figureId) ? "Saved" : "Save to wishlist";
  }
}

function setWishlistQuantity(figureId, quantity) {
  if (!wishlist.includes(figureId)) return;
  wishlistQuantities[figureId] = Math.max(1, Math.min(99, Number.parseInt(quantity, 10) || 1));
  saveWishlistQuantities();
  renderWishlist();
}

function changeWishlistQuantity(figureId, delta) {
  const nextQuantity = wishlistQuantityFor(figureId) + Number(delta || 0);
  setWishlistQuantity(figureId, nextQuantity);
}

function browserCountryPreference() {
  const locale = String(navigator.language || "").toUpperCase();
  const region = locale.includes("-") ? locale.split("-").pop() : "";
  if (region === "GB") return "UK";
  return COUNTRY_PROFILES[region] ? region : "INTL";
}

function marketCountryOptions() {
  return Object.entries(COUNTRY_PROFILES)
    .sort((left, right) => localizedCountryName(left[0], left[1].label).localeCompare(localizedCountryName(right[0], right[1].label)))
    .map(([code, profile]) => `<option value="${escapeHtml(code)}">${escapeHtml(localizedCountryName(code, profile.label))}</option>`)
    .join("");
}

function marketCurrencyOptions() {
  return Object.entries(CURRENCY_OPTIONS)
    .map(([code, label]) => `<option value="${escapeHtml(code)}">${escapeHtml(code)} — ${escapeHtml(window.NekoI18n?.currencyName(code, label) || label)}</option>`)
    .join("");
}

function renderMarketOnboardingPreview() {
  if (!els.marketCountry || !els.marketCurrency) return;
  const countryCode = COUNTRY_PROFILES[els.marketCountry.value] ? els.marketCountry.value : "PT";
  const profile = COUNTRY_PROFILES[countryCode] || COUNTRY_PROFILES.PT;
  const currency = CURRENCY_OPTIONS[els.marketCurrency.value] ? els.marketCurrency.value : profile.currency;
  const localIds = Array.isArray(profile.localProviderIds) ? profile.localProviderIds : [];
  const providerIds = Array.isArray(profile.providerIds) ? profile.providerIds : [];
  const localNames = localIds
    .map((providerId) => providerName(providerId))
    .filter(Boolean)
    .slice(0, 3);
  const comparedCount = Math.max(providerIds.length, localIds.length);

  if (els.marketPreviewLocalCount) {
    els.marketPreviewLocalCount.textContent = String(localIds.length);
  }
  if (els.marketPreviewLocalCopy) {
    els.marketPreviewLocalCopy.textContent = localNames.length
      ? `${localNames.join(", ")}${localIds.length > localNames.length ? " +" : ""} marked as local`
      : "no local store yet; global stores stay visible";
  }
  if (els.marketPreviewCurrency) {
    els.marketPreviewCurrency.textContent = currency;
  }
  if (els.marketPreviewInternational) {
    els.marketPreviewInternational.textContent = comparedCount ? `${comparedCount}+ stores` : "Global";
  }
  if (els.marketOnboardingHint) {
    els.marketOnboardingHint.textContent = localIds.length
      ? `For ${localizedCountryName(countryCode, profile.label)}, NekoPrice highlights local stores first but still compares Japanese and international deals.`
      : `For ${localizedCountryName(countryCode, profile.label)}, NekoPrice uses ${currency} and keeps international stores visible while local coverage grows.`;
  }
}

function populateMarketOnboarding() {
  if (!els.marketCountry || !els.marketCurrency) return;
  els.marketCountry.innerHTML = marketCountryOptions();
  els.marketCurrency.innerHTML = marketCurrencyOptions();
  const firstVisit = !localStorage.getItem(MARKET_ONBOARDING_STORAGE_KEY);
  const country = firstVisit ? browserCountryPreference() : userProfile.country;
  els.marketCountry.value = COUNTRY_PROFILES[country] ? country : "PT";
  els.marketCurrency.value = firstVisit
    ? COUNTRY_PROFILES[els.marketCountry.value].currency
    : preferredCurrency();
  renderMarketOnboardingPreview();
}

function refreshMarketUi() {
  resetLocalizedOfferCache();
  state.provider = "all";
  if (catalogueReady) {
    relocalizeLoadedFigureTitles();
    populateFilters();
    renderSuppliers();
    renderPromotionRanking();
    renderPromotionsCarousel(promotionsCache);
    renderNewArrivals();
    renderProductCards();
    if (selectedFigureId) renderProductDetail(selectedFigureId, false);
  }
  updateProfileSummary();
  updateReadyCopy();
}

function applyMarketPreferences(country, currency, markOnboarded = false) {
  const normalizedCountry = COUNTRY_PROFILES[country] ? country : "PT";
  const normalizedCurrency = CURRENCY_OPTIONS[currency]
    ? currency
    : COUNTRY_PROFILES[normalizedCountry].currency;
  userProfile = {
    ...userProfile,
    country: normalizedCountry,
    currency: normalizedCurrency
  };
  saveUserProfile();
  window.NekoI18n?.setCountry(normalizedCountry);
  if (markOnboarded) {
    localStorage.setItem(MARKET_ONBOARDING_STORAGE_KEY, "complete");
  }
  document.documentElement.classList.remove("market-onboarding-required");
  refreshMarketUi();
}

function openMarketOnboardingIfNeeded() {
  document.documentElement.classList.remove("market-onboarding-required");
}

function populateProfileForm() {
  if (!els.profileCountry) return;

  els.profileCountry.innerHTML = Object.entries(COUNTRY_PROFILES)
    .map(([code, profile]) => `<option value="${escapeHtml(code)}">${escapeHtml(localizedCountryName(code, profile.label))}</option>`)
    .join("");
  if (els.profileCurrency) {
    els.profileCurrency.innerHTML = Object.entries(CURRENCY_OPTIONS)
      .map(([code, label]) => `<option value="${escapeHtml(code)}">${escapeHtml(code)} - ${escapeHtml(window.NekoI18n?.currencyName(code, label) || label)}</option>`)
      .join("");
  }
  els.profileName.value = userProfile.name;
  els.profileEmail.value = userProfile.email;
  els.profileCountry.value = userProfile.country;
  if (els.profileCurrency) els.profileCurrency.value = preferredCurrency();
  updateProfileSummary();
}

function updateProfileSummary() {
  const country = currentCountryLabel();
  const currency = preferredCurrency();
  if (els.userCountryPill) els.userCountryPill.textContent = `${country} - ${currency}`;
  if (els.profileStatus) {
    const rateNoteSource = exchangeRateMeta.source === "live" && exchangeRateMeta.date
      ? `Rates ${exchangeRateMeta.date}.`
      : "Fallback rates.";
    const totalsSource = userProfile.name
      ? `${userProfile.name}, totals set for ${country} in ${currency}.`
      : `Totals set for ${country} in ${currency}.`;
    els.profileStatus.textContent = `${localizedUiText(totalsSource)} ${localizedUiText(rateNoteSource)}`;
  }
  if (els.alertCurrencyLabel) els.alertCurrencyLabel.textContent = currency;
  if (els.alertEmail && userProfile.email && !els.alertEmail.value) {
    els.alertEmail.value = userProfile.email;
  }
  renderHeaderUtilities();
}

function applyUserProfileFromForm() {
  userProfile = {
    name: els.profileName.value.trim(),
    email: els.profileEmail.value.trim(),
    country: COUNTRY_PROFILES[els.profileCountry.value] ? els.profileCountry.value : "PT",
    currency: CURRENCY_OPTIONS[els.profileCurrency?.value] ? els.profileCurrency.value : COUNTRY_PROFILES[els.profileCountry.value]?.currency || "EUR"
  };
  saveUserProfile();
  window.NekoI18n?.setCountry(userProfile.country);
  localStorage.setItem(MARKET_ONBOARDING_STORAGE_KEY, "complete");
  refreshMarketUi();
}

function keepSelectedFigureVisible(message = "NekoPrice kept you on this selected figure to avoid opening a broken store page.") {
  if (!selectedFigureId) return;
  els.figureSection.hidden = false;
  updateSelectedFigureHash(selectedFigureId, "replace");
  els.bestDealNote.textContent = message;
  els.figureSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleOfferNavigation(event) {
  const link = event.target.closest("#bestDealLink, [data-offer-link]");
  if (!link) return;

  const href = link.getAttribute("href") || "";
  const disabled = link.getAttribute("aria-disabled") === "true" || !isValidProviderUrl(href);

  if (disabled) {
    event.preventDefault();
    keepSelectedFigureVisible("No supplier is shown unless it has a verified direct product URL for this exact figure.");
    return;
  }

  if (selectedFigureId) {
    updateSelectedFigureHash(selectedFigureId, "replace");
  }
}

async function handleOfferRefresh(event) {
  const button = event.target.closest("[data-offer-refresh]");
  if (!button) return;
  event.preventDefault();
  const jan = button.dataset.jan || "";
  const store = button.dataset.store || "";
  if (!jan || !store) return;

  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "Checking...";
  try {
    const response = await fetch("/api/offer-refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jan, store })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.success === false) {
      throw new Error(payload.error || `Refresh failed (${response.status})`);
    }
    button.textContent = payload.status === "ok" ? "Validated" : "Flagged";
    button.title = payload.reason || "";
    await reloadCataloguePageForQuery(state.query, apiSearchRunId, true);
    if (selectedFigureId) renderProductDetail(selectedFigureId, false, false);
  } catch (error) {
    console.warn("Offer refresh failed", error);
    button.textContent = "Retry";
    button.title = error?.message || "Refresh failed";
  } finally {
    setTimeout(() => {
      button.disabled = false;
      if (button.textContent === "Checking..." || button.textContent === "Validated" || button.textContent === "Flagged") {
        button.textContent = originalText || "Refresh";
      }
    }, 1600);
  }
}

async function handleOfferRefreshAll() {
  const figure = selectedFigure();
  const jan = els.offerRefreshAllButton?.dataset.jan || janForFigure(figure);
  if (!jan || !els.offerRefreshAllButton) return;

  const button = els.offerRefreshAllButton;
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "Refreshing...";
  button.title = "Refreshing every direct store offer for this figure.";

  try {
    const response = await fetch("/api/offer-refresh-all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jan })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.success === false) {
      throw new Error(payload.error || `Refresh all failed (${response.status})`);
    }
    const okCount = Number(payload.ok || 0);
    const flaggedCount = Number(payload.flagged || 0);
    const blockedCount = Number(payload.blocked || 0);
    button.textContent = `Done ${okCount}/${Number(payload.total || 0)}`;
    button.title = `${okCount} validated, ${flaggedCount} flagged, ${blockedCount} blocked/gone.`;
    await reloadCataloguePageForQuery(state.query, apiSearchRunId, true);
    if (selectedFigureId) renderProductDetail(selectedFigureId, false, false);
  } catch (error) {
    console.warn("Offer refresh all failed", error);
    button.textContent = "Retry all";
    button.title = error?.message || "Refresh all failed";
  } finally {
    setTimeout(() => {
      button.disabled = false;
      if (button.textContent === "Refreshing..." || button.textContent.startsWith("Done ")) {
        button.textContent = originalText || "Refresh all";
      }
    }, 1800);
  }
}

function renderApiSearchLoading(jan) {
  els.resultsSection.hidden = false;
  els.figureSection.hidden = true;
  if (els.resultQuery) {
    els.resultQuery.hidden = false;
    els.resultQuery.textContent = `Searching MyFigureCollection for JAN ${jan}...`;
  }
  if (els.resultMeta) els.resultMeta.textContent = "MFC lookup in progress.";
  if (els.showMoreButton) els.showMoreButton.hidden = true;
  if (els.figurePagination) els.figurePagination.hidden = true;
  els.productGrid.innerHTML = `
    <article class="product-card empty-card empty-state" role="status">
      <div class="product-thumb"><div class="figure-placeholder" aria-hidden="true"></div></div>
      <div>
        <h3>Searching MFC</h3>
        <p class="muted">Looking for direct store links for JAN ${escapeHtml(jan)}.</p>
      </div>
    </article>
  `;
}

async function applyJanSearch(jan, shouldScroll = true) {
  const runId = (apiSearchRunId += 1);
  console.log("JAN search detected", jan);
  renderApiSearchLoading(jan);

  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  try {
    const response = await fetch(apiEndpoint("/api/search") + "?jan=" + encodeURIComponent(jan), { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    if (runId !== apiSearchRunId) return;
    if (!response.ok) {
      throw new Error(data.error || `MFC lookup failed (${response.status})`);
    }

    console.log("MFC lookup success", data);
    if (data.demoMode) {
      console.warn("Aviso: Mostrando dados em cache (Servidor em Modo Demo)", data.demoReason || "");
    }
    const normalizedMfcFigure = apiFigureFromMapping(data);
    console.log("MFC DEBUG normalized figure:", normalizedMfcFigure);
    const figure = upsertApiFigure(normalizedMfcFigure);
    activeMfcFigureId = figure.id;
    resetVisibleCards();
    renderProductCards();
    renderProductDetail(figure.id, false);
  } catch (error) {
    if (runId !== apiSearchRunId) return;
    activeMfcFigureId = null;
    selectedFigureId = null;
    els.figureSection.hidden = true;
    if (els.resultMeta) els.resultMeta.textContent = "MFC lookup failed.";
    if (els.resultQuery) {
      els.resultQuery.hidden = false;
      els.resultQuery.textContent = `Could not map JAN "${jan}".`;
    }
    els.productGrid.innerHTML = emptyState("MFC lookup failed", error.message || "Try again later.");
  }
}

async function applyApiNameSearch(query, runId = apiSearchRunId) {
  const trimmedQuery = query.trim();
  if (trimmedQuery.length < 2) return;

  try {
    const response = await fetch(apiEndpoint("/api/search") + "?q=" + encodeURIComponent(trimmedQuery), { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    if (runId !== apiSearchRunId || state.query.trim() !== trimmedQuery || currentJanQuery()) return;
    if (!response.ok || !data.success || !Array.isArray(data.results) || !data.results.length) return;

    console.log("Name search converted to cached JAN results", data);
    if (data.demoMode) {
      console.warn("Aviso: Mostrando dados em cache (Servidor em Modo Demo)", data.demoReason || "");
    }

    data.results
      .map(apiFigureFromMapping)
      .forEach((figure) => upsertApiFigure(figure));

    resetVisibleCards();
    renderProductCards();
  } catch (error) {
    console.debug("Cached JAN name search unavailable", error);
  }
}

async function reloadCataloguePageForQuery(query, runId = apiSearchRunId, forceReload = false) {
  const trimmedQuery = String(query || "").trim();
  if (window.location.protocol === "file:") return false;
  if (trimmedQuery && trimmedQuery.length < 2 && !isJanQuery(trimmedQuery)) return false;
  const expectedKind = state.catalogKind || "all";
  const apiKind = expectedKind === "mangas" ? "manga" : "";
  const apiQuery = trimmedQuery || figureTypeFilterApiQuery(state.type) || categoryApiSeedQuery(state.category);
  const seriesCharacterDiscovery = Boolean(activePopularSeriesFilter()) && expectedKind === "figures";

  catalogueSearchAbortController?.abort();
  const abortController = new AbortController();
  catalogueSearchAbortController = abortController;
  beginCatalogueSearch(trimmedQuery, runId, expectedKind);
  if (els.resultMeta) {
    els.resultMeta.textContent = trimmedQuery
      ? "Searching catalogue..."
      : apiQuery
        ? `Loading ${CATEGORY_LABELS[state.category] || "category"}...`
        : "Loading catalogue...";
  }

  let installed = false;
  try {
    const requestPage = async (bypassCache = false) => {
      const response = await fetch(catalogueApiUrl({
        page: 1,
        limit: CATALOGUE_PAGE_LIMIT,
        query: apiQuery,
        kind: apiKind,
        forceReload: bypassCache,
        includeTotal: !seriesCharacterDiscovery && Boolean(apiQuery || trimmedQuery)
      }), { cache: bypassCache ? "no-store" : "default", signal: abortController.signal });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || `Could not load catalogue page (${response.status})`);
      return data;
    };

    let data = await requestPage(forceReload);
    if (runId !== apiSearchRunId || state.query.trim() !== trimmedQuery || state.catalogKind !== expectedKind || currentJanQuery()) return false;
    const returnedFigures = Array.isArray(data?.figures) ? data.figures : [];
    if (activeFigureQuickFilters().length && returnedFigures.length === 0) {
      if (els.resultMeta) els.resultMeta.textContent = "Confirming filtered catalogue...";
      await new Promise((resolve) => window.setTimeout(resolve, 650));
      if (runId !== apiSearchRunId || state.query.trim() !== trimmedQuery || state.catalogKind !== expectedKind) return false;
      data = await requestPage(true);
      if (runId !== apiSearchRunId || state.query.trim() !== trimmedQuery || state.catalogKind !== expectedKind || currentJanQuery()) return false;
    }
    if (
      activeFigureQuickFilters().some((key) => ["ecchi", "adult_18", "mature"].includes(key))
      && !trimmedQuery
      && Array.isArray(data?.figures)
      && data.figures.length === 0
    ) {
      throw new Error("The adult catalogue returned no rows after a direct retry.");
    }

    await installCatalogueData(data);
    installed = true;
    finishCatalogueSearch(trimmedQuery, runId, expectedKind);
    populateFilters();
    if (usesPagedCatalogueLayout()) syncFigureFilterControls();
    if (runId !== apiSearchRunId || state.query.trim() !== trimmedQuery || state.catalogKind !== expectedKind || currentJanQuery()) return false;
    resetVisibleCards();
    renderProductCards();
    if (seriesCharacterDiscovery) {
      hydratePopularSeriesCataloguePages(runId, trimmedQuery, activePopularSeriesFilter()?.id || "");
    } else if (state.figuresOnly) {
      autoLoadFigureCataloguePages(runId, trimmedQuery);
    }
    return true;
  } catch (error) {
    if (runId !== apiSearchRunId || state.query.trim() !== trimmedQuery || state.catalogKind !== expectedKind) {
      return false;
    }
    if (error?.name === "AbortError") return false;
    console.warn("Catalogue API search unavailable", error);
    finishCatalogueSearch(trimmedQuery, runId, expectedKind);
    cataloguePagination.loading = false;
    renderProductCards();
    if (els.resultMeta && trimmedQuery) {
      els.resultMeta.textContent = "Catalogue search is unavailable. Showing loaded results.";
    }
    return false;
  } finally {
    if (catalogueSearchAbortController === abortController) {
      catalogueSearchAbortController = null;
      if (!installed) {
        finishCatalogueSearch(trimmedQuery, runId, expectedKind);
        cataloguePagination.loading = false;
      }
    }
  }
}

function figureCategoryForHeaderQuery(query) {
  const text = normalizeText(query);
  if (text.includes("nendoroid")) return "nendoroids";
  if (text.includes("figma")) return "figma";
  if (text.includes("pop up parade")) return "pop";
  if (text.includes("prize")) return "prize";
  if (text.includes("scale")) return "scale";
  if (text.includes("cast off") || text.includes("r18") || text.includes("18") || text.includes("nsfw")) return "castoff";
  if (text.includes("figuarts")) return "figuarts";
  if (text.includes("bunny")) return "bunny";
  if (text.includes("mecha") || text.includes("gundam")) return "mecha";
  if (text.includes("model kit") || text.includes("plastic model") || text.includes("gunpla")) return "model";
  if (text.includes("statue") || text.includes("resin")) return "statue";
  if (text.includes("pre order") || text.includes("preorder")) return "preorder";
  return "trending";
}

function figureCategoryQueryIsPure(query, category) {
  const text = normalizeText(query);
  if (!text || !category || category === "trending") return false;
  const aliases = {
    nendoroids: ["nendoroid", "nendoroids"],
    scale: ["scale", "scale figure", "scale figures"],
    prize: ["prize", "prize figure", "prize figures"],
    figma: ["figma"],
    pop: ["pop up parade", "pop figure"],
    action: ["action figure", "action figures"],
    castoff: ["cast off", "cast off 18", "18", "18 plus", "r18", "nsfw"],
    figuarts: ["figuarts", "s h figuarts", "sh figuarts"],
    bunny: ["bunny", "bunny 1 4", "1 4"],
    mecha: ["mecha", "gundam"],
    model: ["model kit", "plastic model", "gunpla"],
    statue: ["statue", "resin"],
    preorder: ["pre order", "preorder", "pre orders", "preorders"]
  };
  return (aliases[category] || []).some((alias) => text.includes(normalizeText(alias)));
}

function figureLabelForRequest({ query = "", category = "trending", label = "" } = {}) {
  const cleanLabel = String(label || "").trim();
  if (cleanLabel) return cleanLabel;
  const cleanQuery = String(query || "").trim();
  if (cleanQuery) return `${cleanQuery} figures`;
  return CATEGORY_LABELS[category] || "Anime figures";
}

function showFigureTabLoading(label) {
  const activeSeries = activePopularSeriesFilter();
  if (els.resultsTitle) els.resultsTitle.textContent = label;
  if (els.resultsSubtitle) {
    els.resultsSubtitle.textContent = "Loading figures...";
  }
  if (els.resultQuery) {
    els.resultQuery.hidden = true;
    els.resultQuery.textContent = "";
  }
  if (els.resultMeta) els.resultMeta.textContent = "Loading figures...";
  if (els.figurePagination) els.figurePagination.hidden = true;
  if (els.productGrid) {
    els.productGrid.replaceChildren();
    els.productGrid.setAttribute("aria-busy", "true");
  }
}

function prepareFigureCatalogueView({ query = "", category = "trending", label = "", provider = "all", minPrice = state.minPrice, maxPrice = state.maxPrice, confirmedOnly = false, strictCategory = false, seriesFilter = null, seriesCharacter = "" } = {}) {
  const nextSeriesFilter = normalizePopularSeriesFilter(seriesFilter);
  const cleanQuery = String(query || nextSeriesFilter?.query || "").trim();
  activeView = "catalog";
  state.multiStoreOnly = false;
  state.catalogStandalone = true;
  state.figuresOnly = true;
  state.catalogKind = "figures";
  state.figureCatalogLabel = nextSeriesFilter ? `${nextSeriesFilter.label} figures` : figureLabelForRequest({ query: cleanQuery, category, label });
  state.category = category || "trending";
  state.query = cleanQuery;
  state.brandFilter = "";
  state.brandLabel = "";
  state.seriesFilter = null;
  state.seriesCharacter = "";
  hasSearched = Boolean(cleanQuery);
  figureCatalogueAutoLoadId += 1;
  seriesCatalogueHydrationId += 1;
  activeMfcFigureId = null;
  selectedFigureId = null;
  resetFigureTabFilters();
  state.seriesFilter = nextSeriesFilter;
  state.seriesCharacter = nextSeriesFilter ? normalizeText(seriesCharacter) : "";
  if (els.seriesFilterSection) {
    els.seriesFilterSection.hidden = !nextSeriesFilter;
  }
  if (nextSeriesFilter && els.seriesCharacterDisclosure) {
    els.seriesCharacterDisclosure.open = false;
  }
  state.provider = providerById(provider) ? provider : "all";
  const priceRange = normalizeDualPriceRangeValues(minPrice, maxPrice, FIGURE_TAB_PRICE_MAX_EUR);
  state.minPrice = priceRange.min;
  state.maxPrice = priceRange.max;
  state.confirmedOnly = Boolean(confirmedOnly);
  state.strictCategory = Boolean(strictCategory);
  syncFigureFilterControls();
  resetVisibleCards();
  setResultsDisplayMode("figures");
  setDiscoverySectionsVisible(false);
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  if (els.resultsSection) els.resultsSection.hidden = false;
  if (els.searchInput) els.searchInput.value = cleanQuery;
  if (els.headerSearchInput) els.headerSearchInput.value = cleanQuery;
  renderCategoryChips();
  showFigureTabLoading(state.figureCatalogLabel);
}

async function openFigureCatalogue(request = {}, shouldScroll = true) {
  const runId = (apiSearchRunId += 1);
  prepareFigureCatalogueView(request);

  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (isUnfilteredBaseFigureCatalogueState()) {
    if (catalogueReady && cataloguePagination.query === "") {
      renderProductCards();
      return;
    }
    if (catalogueLoadPromise) {
      const loaded = await catalogueLoadPromise;
      if (runId !== apiSearchRunId) return;
      if (loaded && catalogueReady && cataloguePagination.query === "") {
        renderProductCards();
        return;
      }
    }
  }

  if (window.location.protocol !== "file:") {
    const loaded = await reloadCataloguePageForQuery(state.query, runId);
    if (loaded) return;
  }

  const catalogueLoaded = await ensureCatalogueLoadStarted();
  if (!catalogueReady && catalogueLoaded === false) {
    catalogueLoadPromise = null;
    await ensureCatalogueLoadStarted();
  }
  if (runId !== apiSearchRunId) return;
  if (window.location.protocol !== "file:") {
    if (els.resultMeta) els.resultMeta.textContent = "Retrying category...";
    const loaded = await reloadCataloguePageForQuery(state.query, runId);
    if (loaded) return;
  }
  if (runId !== apiSearchRunId) return;
  if (catalogueReady && cataloguePagination.query === state.query.trim()) {
    renderProductCards();
    return;
  }
  if (els.resultMeta) els.resultMeta.textContent = "Could not load this category.";
  els.productGrid.innerHTML = emptyState(
    "Category loading interrupted",
    "Please try the category again. NekoPrice kept the previous catalogue from replacing these results."
  );
}

function openPopularSeriesCatalogue(seriesId, shouldScroll = true) {
  const series = normalizePopularSeriesFilter(seriesId);
  if (!series) return;
  openFigureCatalogue({
    query: series.query,
    category: "trending",
    label: `${series.label} figures`,
    strictCategory: false,
    seriesFilter: series.id
  }, shouldScroll);
}

function scrollPopularSeriesTrack(direction = 1) {
  if (!els.promotionsTrack) return;
  const card = els.promotionsTrack.querySelector(".popular-series-card");
  const gap = Number.parseFloat(window.getComputedStyle(els.promotionsTrack).columnGap) || 0;
  const amount = card ? card.getBoundingClientRect().width + gap : Math.max(280, els.promotionsTrack.clientWidth * 0.75);
  els.promotionsTrack.scrollBy({ left: amount * direction, behavior: "smooth" });
}

function updatePopularSeriesControls() {
  if (!els.promotionsTrack) return;
  const maxScroll = Math.max(0, els.promotionsTrack.scrollWidth - els.promotionsTrack.clientWidth);
  const atStart = els.promotionsTrack.scrollLeft <= 2;
  const atEnd = els.promotionsTrack.scrollLeft >= maxScroll - 2;
  if (els.popularSeriesPrev) els.popularSeriesPrev.disabled = atStart;
  if (els.popularSeriesNext) els.popularSeriesNext.disabled = maxScroll <= 2 || atEnd;
}

function prepareMangaCatalogueView({ query = "", label = "" } = {}) {
  const cleanQuery = String(query || "").trim();
  activeView = "catalog";
  state.multiStoreOnly = false;
  state.catalogStandalone = true;
  state.figuresOnly = false;
  state.catalogKind = "mangas";
  state.figureCatalogLabel = String(label || "").trim() || (cleanQuery ? `${cleanQuery} mangas` : "Mangas");
  state.category = "trending";
  state.query = cleanQuery;
  state.brandFilter = "";
  state.brandLabel = "";
  state.seriesFilter = null;
  state.seriesCharacter = "";
  hasSearched = Boolean(cleanQuery);
  figureCatalogueAutoLoadId += 1;
  activeMfcFigureId = null;
  selectedFigureId = null;
  resetFigureTabFilters();
  resetVisibleCards();
  setResultsDisplayMode("figures");
  setDiscoverySectionsVisible(false);
  hideDatabaseSection();
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  if (els.resultsSection) els.resultsSection.hidden = false;
  if (els.searchInput) els.searchInput.value = cleanQuery;
  if (els.headerSearchInput) els.headerSearchInput.value = cleanQuery;
  renderCategoryChips();
  showFigureTabLoading(state.figureCatalogLabel);
}

async function openMangaCatalogue(request = {}, shouldScroll = true) {
  const runId = (apiSearchRunId += 1);
  prepareMangaCatalogueView(request);

  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (window.location.protocol !== "file:") {
    const loaded = await reloadCataloguePageForQuery(state.query, runId);
    if (loaded) return;
  }

  const catalogueLoaded = await ensureCatalogueLoadStarted();
  if (!catalogueReady && catalogueLoaded === false) {
    catalogueLoadPromise = null;
    await ensureCatalogueLoadStarted();
  }
  if (runId !== apiSearchRunId) return;
  renderProductCards();
}

function applySearch(query, shouldScroll = true, options = {}) {
  const runId = (apiSearchRunId += 1);
  const allowApiNameSearch = options?.apiNameSearch !== false;
  const cleanQuery = String(query || "").trim();
  const isFigureTextSearch = Boolean(cleanQuery) && !isJanQuery(cleanQuery);
  activeView = "catalog";
  state.multiStoreOnly = false;
  state.catalogStandalone = Boolean(cleanQuery);
  state.figuresOnly = isFigureTextSearch;
  state.catalogKind = isFigureTextSearch ? "figures" : "all";
  state.figureCatalogLabel = isFigureTextSearch ? `${cleanQuery} figures` : "";
  setResultsDisplayMode(isFigureTextSearch ? "figures" : "");
  hideGameSection();
  hideNekoAdvisorSection();
  hideSalesSection();
  hideTaxonomySection();
  hideCommunitySection();
  setDiscoverySectionsVisible(!state.catalogStandalone);
  if (els.figureSection) els.figureSection.hidden = true;
  if (els.providersSection) els.providersSection.hidden = true;
  if (els.contactSection) els.contactSection.hidden = true;
  hideDatabaseSection();
  state.query = cleanQuery;
  state.brandFilter = "";
  state.brandLabel = "";
  state.seriesFilter = null;
  state.seriesCharacter = "";
  document.body.classList.remove("series-catalog-open");
  hasSearched = Boolean(state.query);
  if (hasSearched) {
    resetPrimarySearchFilters();
  } else {
    syncFigureFilterControls();
  }
  if (els.searchInput) els.searchInput.value = state.query;
  if (els.headerSearchInput) els.headerSearchInput.value = state.query;
  activeMfcFigureId = null;
  selectedFigureId = null;
  resetVisibleCards();

  const jan = currentJanQuery();
  if (hasSearched && isJanQuery(jan)) {
    applyJanSearch(jan, shouldScroll);
    return;
  }

  const shouldRefreshCatalogue = window.location.protocol !== "file:" && (
    (hasSearched && state.query.length >= 2) || (!hasSearched && Boolean(cataloguePagination.query))
  );
  if (shouldRefreshCatalogue) {
    beginCatalogueSearch(state.query, runId, state.catalogKind || "all");
  }
  renderProductCards();
  if (shouldRefreshCatalogue) {
    reloadCataloguePageForQuery(state.query, runId).then((loaded) => {
      if (loaded && hasSearched && allowApiNameSearch) {
        applyApiNameSearch(state.query, runId);
      }
    });
  } else if (hasSearched && allowApiNameSearch) {
    applyApiNameSearch(state.query, runId);
  }

  if (shouldScroll) {
    requestAnimationFrame(() => {
      els.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function bindFiguresMegaMenu() {
  const trigger = document.querySelector(".figures-menu-trigger");
  const menu = document.querySelector(".figures-mega-menu");
  const button = trigger?.querySelector(":scope > button");
  if (!trigger || !menu || !button) return;

  let closeTimer = null;
  const closeDelayMs = 520;

  const openMenu = () => {
    window.clearTimeout(closeTimer);
    closeTimer = null;
    trigger.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      trigger.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    }, closeDelayMs);
  };

  trigger.addEventListener("pointerenter", openMenu);
  trigger.addEventListener("pointerleave", closeMenu);
  menu.addEventListener("pointerenter", openMenu);
  menu.addEventListener("pointerleave", closeMenu);
  trigger.addEventListener("mouseenter", openMenu);
  trigger.addEventListener("mouseleave", closeMenu);
  menu.addEventListener("mouseenter", openMenu);
  menu.addEventListener("mouseleave", closeMenu);
  trigger.addEventListener("focusin", openMenu);
  trigger.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!trigger.contains(document.activeElement)) closeMenu();
    }, 0);
  });
  document.addEventListener("pointerdown", (event) => {
    if (trigger.contains(event.target) || menu.contains(event.target)) return;
    window.clearTimeout(closeTimer);
    trigger.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  });
}

function bindEvents() {
  bindFiguresMegaMenu();

  els.productImage.addEventListener("error", handleProductGalleryImageError);
  els.productImagePrevious?.addEventListener("click", (event) => {
    event.stopPropagation();
    moveProductGallery(-1);
  });
  els.productImageNext?.addEventListener("click", (event) => {
    event.stopPropagation();
    moveProductGallery(1);
  });
  els.productImageExpand?.addEventListener("click", (event) => {
    event.stopPropagation();
    openProductGalleryLightbox();
  });
  els.productImageFrame?.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    openProductGalleryLightbox();
  });
  els.productImageThumbnails?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-index]");
    if (!button) return;
    selectProductGalleryImage(Number(button.dataset.galleryIndex));
  });
  els.productImageThumbnails?.addEventListener("error", (event) => {
    const image = event.target.closest("img[data-full-image]");
    if (!image || image.dataset.fullFallbackApplied === "true") return;
    image.dataset.fullFallbackApplied = "true";
    image.src = image.dataset.fullImage;
  }, true);
  els.productImageThumbnails?.addEventListener("keydown", (event) => {
    if (!event.target.closest("[data-gallery-index]")) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveProductGallery(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveProductGallery(1);
    }
  });
  els.productImageLightboxClose?.addEventListener("click", closeProductGalleryLightbox);
  els.productImageLightboxPrevious?.addEventListener("click", () => moveProductGallery(-1));
  els.productImageLightboxNext?.addEventListener("click", () => moveProductGallery(1));
  els.productImageLightbox?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeProductGalleryLightbox();
  });
  els.productImageLightbox?.addEventListener("close", () => {
    document.body.classList.remove("product-lightbox-open");
  });
  els.productImageLightbox?.addEventListener("click", (event) => {
    if (event.target === els.productImageLightbox) closeProductGalleryLightbox();
  });
  let lightboxPointerStart = null;
  els.productImageLightboxImage?.addEventListener("pointerdown", (event) => {
    lightboxPointerStart = { x: event.clientX, y: event.clientY };
  });
  els.productImageLightboxImage?.addEventListener("pointerup", (event) => {
    if (!lightboxPointerStart) return;
    const deltaX = event.clientX - lightboxPointerStart.x;
    const deltaY = event.clientY - lightboxPointerStart.y;
    lightboxPointerStart = null;
    if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) {
      moveProductGallery(deltaX < 0 ? 1 : -1);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (!els.productImageLightbox?.open) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveProductGallery(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveProductGallery(1);
    }
  });

  els.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applySearch(els.searchInput.value);
  });

  els.searchInput.addEventListener("input", () => {
    window.clearTimeout(searchDebounceId);
    searchDebounceId = window.setTimeout(() => {
      const query = els.searchInput.value.trim();
      if (query.length >= 2 || hasSearched) {
        applySearch(query, false, { apiNameSearch: false });
      }
    }, 180);
  });

  els.headerSearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = els.headerSearchInput?.value || "";
    if (els.searchInput) els.searchInput.value = query;
    applySearch(query, true);
  });

  document.querySelectorAll("[data-header-category]").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.headerCategory || "trending";
      openFigureCatalogue({
        query: "",
        category,
        label: CATEGORY_LABELS[category] || "Anime figures",
        strictCategory: category !== "trending"
      }, true);
    });
  });

  document.querySelectorAll("[data-header-query]").forEach((button) => {
    button.addEventListener("click", () => {
      const query = button.dataset.headerQuery || button.textContent.trim();
      if (["manga", "mangas"].includes(normalizeText(query))) {
        openMangaCatalogue({ query: "", label: "Mangas" }, true);
        return;
      }
      if (button.closest(".figures-mega-menu")) {
        const category = figureCategoryForHeaderQuery(query);
        const categoryOnly = figureCategoryQueryIsPure(query, category);
        openFigureCatalogue({
          query: categoryOnly ? "" : query,
          category,
          label: categoryOnly ? (CATEGORY_LABELS[category] || `${query} figures`) : `${query} figures`,
          strictCategory: categoryOnly
        }, true);
        return;
      }
      if (els.searchInput) els.searchInput.value = query;
      if (els.headerSearchInput) els.headerSearchInput.value = query;
      applySearch(query, true, { apiNameSearch: false });
    });
  });

  document.querySelectorAll("[data-taxonomy-list]").forEach((button) => {
    button.addEventListener("click", () => {
      showTaxonomyBrowser(button.dataset.taxonomyList || "franchises", true);
    });
  });

  document.querySelectorAll("[data-figure-side-query]").forEach((button) => {
    button.addEventListener("click", () => {
      const query = button.dataset.figureSideQuery || button.textContent.trim();
      const category = figureCategoryForHeaderQuery(query);
      const categoryOnly = figureCategoryQueryIsPure(query, category);
      openFigureCatalogue({
        query: categoryOnly ? "" : query,
        category,
        label: categoryOnly ? (CATEGORY_LABELS[category] || `${query} figures`) : `${query} figures`,
        strictCategory: categoryOnly
      }, true);
    });
  });

  document.querySelectorAll("[data-header-section]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.headerSection === "sales") {
        showSalesSection(true);
        return;
      }
      if (button.dataset.headerSection === "community") {
        showCommunitySection(true);
      }
    });
  });

  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      applySearch(button.dataset.query);
    });
  });

  document.querySelectorAll("[data-brand-filter]").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      applyBrandFilter(card.dataset.brandFilter, card.dataset.brandLabel || card.textContent.trim());
    });
  });

  els.categoryChips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    const category = button.dataset.category || "trending";
      openFigureCatalogue({
        query: state.query.trim(),
        category,
        label: state.query.trim() ? `${state.query.trim()} / ${CATEGORY_LABELS[category] || "Anime figures"}` : CATEGORY_LABELS[category] || "Anime figures",
        provider: state.provider,
        maxPrice: state.maxPrice,
        confirmedOnly: state.confirmedOnly,
        strictCategory: category !== "trending",
        seriesFilter: activePopularSeriesFilter()?.id || null,
        seriesCharacter: state.seriesCharacter
      }, false);
  });

  if (els.promoRanking) {
    els.promoRanking.addEventListener("click", (event) => {
      const button = event.target.closest("[data-promo-select]");
      if (!button) return;
      event.preventDefault();
      renderProductDetail(button.dataset.promoSelect);
    });
  }

  els.popularSeriesPrev?.addEventListener("click", () => scrollPopularSeriesTrack(-1));
  els.popularSeriesNext?.addEventListener("click", () => scrollPopularSeriesTrack(1));
  els.promotionsTrack?.addEventListener("scroll", updatePopularSeriesControls, { passive: true });
  window.addEventListener("resize", updatePopularSeriesControls, { passive: true });

  els.trendingNowGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-trending-compare]");
    if (!button) return;
    const item = trendingProducts.find((candidate) => candidate.id === button.dataset.trendingCompare);
    openTrendingComparison(item);
  });

  els.promotionsTrack?.addEventListener("click", (event) => {
    const seriesButton = event.target.closest("[data-popular-series]");
    if (seriesButton) {
      event.preventDefault();
      openPopularSeriesCatalogue(seriesButton.dataset.popularSeries, true);
      return;
    }

    const advisorButton = event.target.closest("[data-promo-advisor]");
    if (advisorButton) {
      event.preventDefault();
      showNekoAdvisorSection(true);
      return;
    }

    const popCategoryButton = event.target.closest("[data-promo-category]");
    if (popCategoryButton) {
      event.preventDefault();
      const category = popCategoryButton.dataset.promoCategory || "trending";
      openFigureCatalogue({
        query: "",
        category,
        label: CATEGORY_LABELS[category] || "Anime figures"
      }, true);
      return;
    }

    const popQueryButton = event.target.closest("[data-promo-query]");
    if (popQueryButton) {
      event.preventDefault();
      const query = popQueryButton.dataset.promoQuery || popQueryButton.textContent.trim();
      if (["manga", "mangas"].includes(normalizeText(query))) {
        openMangaCatalogue({ query: "", label: "Mangas" }, true);
        return;
      }
      if (normalizeText(query) === "figure") {
        openFigureCatalogue({
          query: "",
          category: "trending",
          label: "All anime figures"
        }, true);
        return;
      }
      if (els.searchInput) els.searchInput.value = query;
      if (els.headerSearchInput) els.headerSearchInput.value = query;
      applySearch(query, true, { apiNameSearch: false });
      return;
    }

    const popSectionButton = event.target.closest("[data-promo-section]");
    if (popSectionButton) {
      event.preventDefault();
      if (popSectionButton.dataset.promoSection === "sales") {
        showSalesSection(true);
        return;
      }
      if (popSectionButton.dataset.promoSection === "community") {
        showCommunitySection(true);
      }
      return;
    }

    const button = event.target.closest("[data-promotion-id]");
    if (!button) return;
    event.preventDefault();
    const figure = promotionFigureById(button.dataset.promotionId);
    if (figure) {
      renderProductDetail(figure.id);
      return;
    }
    const url = button.dataset.promotionUrl || "";
    if (isValidProviderUrl(url)) {
      window.open(url, "_blank", "noreferrer");
    }
  });

  els.seriesCharacterFilters?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-series-character]");
    if (!input) return;
    state.seriesCharacter = normalizeText(input.dataset.seriesCharacter || "");
    state.catalogStandalone = true;
    resetVisibleCards();
    renderProductCards();
  });

  els.nekoAdvisorBudgetForm?.querySelectorAll("[data-neko-budget-preset]")?.forEach((button) => {
    button.addEventListener("click", () => {
    if (!els.nekoAdvisorBudget) return;
      els.nekoAdvisorBudget.value = button.dataset.nekoBudgetPreset || "";
      els.nekoAdvisorBudgetForm?.requestSubmit();
    });
  });

  els.nekoAdvisorBudgetForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const budget = parseNekoAdvisorBudget(els.nekoAdvisorBudget?.value);
    if (budget === null) {
      nekoAdvisorSpeak("Enter a budget above zero to continue.");
      els.nekoAdvisorBudget?.focus();
      return;
    }

    nekoAdvisorState.budget = budget;
    if (els.nekoAdvisorBudgetForm) els.nekoAdvisorBudgetForm.hidden = true;
    if (!nekoAdvisorState.productKind || nekoAdvisorState.productKind === "figures") {
      if (els.nekoAdvisorCategoryStep) els.nekoAdvisorCategoryStep.hidden = false;
      updateNekoAdvisorStage("filters");
      nekoAdvisorSpeak(`${formatMoney(budget, preferredCurrency())} selected. Pick a category or choose Anything.`);
      return;
    }

    if (els.nekoAdvisorCharacterForm) els.nekoAdvisorCharacterForm.hidden = false;
    updateNekoAdvisorStage("filters");
    nekoAdvisorSpeak(`${formatMoney(budget, preferredCurrency())} selected. Add a character or series preference, or keep it open.`);
    window.setTimeout(() => els.nekoAdvisorCharacter?.focus(), 80);
  });

  els.nekoAdvisorCategoryStep?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-neko-category]");
    if (!button) return;
    nekoAdvisorState.category = button.dataset.nekoCategory || "";
    if (els.nekoAdvisorCategoryStep) els.nekoAdvisorCategoryStep.hidden = true;
    if (els.nekoAdvisorCharacterForm) els.nekoAdvisorCharacterForm.hidden = false;
    updateNekoAdvisorStage("filters");
    nekoAdvisorSpeak(`${nekoAdvisorCategoryLabel(nekoAdvisorState.category)} selected. Add a character or series preference, or keep it open.`);
    window.setTimeout(() => els.nekoAdvisorCharacter?.focus(), 80);
  });

  els.nekoAdvisorCharacterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    nekoAdvisorState.character = String(els.nekoAdvisorCharacter?.value || "").trim();
    showNekoAdvisorStoreStep();
  });

  els.nekoAdvisorCharacterForm?.querySelector("[data-neko-no-character]")?.addEventListener("click", () => {
    nekoAdvisorState.character = "";
    if (els.nekoAdvisorCharacter) els.nekoAdvisorCharacter.value = "";
    showNekoAdvisorStoreStep();
  });

  els.nekoAdvisorStoreForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    nekoAdvisorState.store = els.nekoAdvisorStore?.value || "all";
    finishNekoAdvisorQuest();
  });

  els.nekoAdvisorStoreForm?.querySelector("[data-neko-any-store]")?.addEventListener("click", () => {
    nekoAdvisorState.store = "all";
    if (els.nekoAdvisorStore) els.nekoAdvisorStore.value = "all";
    finishNekoAdvisorQuest();
  });

  els.nekoAdvisorRestart?.addEventListener("click", () => {
    resetNekoAdvisorQuest();
  });

  els.nekoAdvisorReroll?.addEventListener("click", () => {
    const ranked = Array.isArray(nekoAdvisorState.lastResult?.ranked) ? nekoAdvisorState.lastResult.ranked : [];
    if (!ranked.length) {
      finishNekoAdvisorQuest();
      return;
    }
    nekoAdvisorState.rerollOffset += 5;
    const matches = nekoAdvisorPickWindow(ranked, nekoAdvisorState.rerollOffset, 10);
    renderNekoAdvisorResults(matches, Boolean(nekoAdvisorState.lastResult.relaxed), nekoAdvisorState.lastResult.relaxedFields || []);
    nekoAdvisorSpeak("Showing another set of verified options. The strongest match stays first.");
  });

  els.nekoAdvisorRefine?.addEventListener("click", () => {
    resetNekoAdvisorQuest();
    nekoAdvisorSpeak("Adjust your filters and run the search again.");
  });

  els.nekoAdvisorHome?.addEventListener("click", () => {
    showHomeView(true);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
  });

  els.catalogHomeButton?.addEventListener("click", () => {
    showHomeView(true);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
  });

  els.salesHomeButton?.addEventListener("click", () => {
    showHomeView(true);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
  });

  els.taxonomyHomeButton?.addEventListener("click", () => {
    showHomeView(true);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
  });

  let taxonomySearchDebounceId = null;
  els.taxonomySearchInput?.addEventListener("input", () => {
    window.clearTimeout(taxonomySearchDebounceId);
    taxonomySearchDebounceId = window.setTimeout(() => {
      taxonomyState.query = els.taxonomySearchInput.value.trim();
      renderTaxonomyBrowser();
    }, 120);
  });

  els.taxonomySearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    taxonomyState.query = els.taxonomySearchInput?.value.trim() || "";
    renderTaxonomyBrowser();
  });

  els.taxonomyAlphaNav?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-taxonomy-letter]");
    if (!button) return;
    const letter = button.dataset.taxonomyLetter || "";
    const target = document.getElementById(`taxonomy-letter-${letter === "#" ? "number" : letter}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.taxonomyGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-taxonomy-query]");
    if (!button) return;
    openTaxonomyEntry(button.dataset.taxonomyQuery || button.textContent.trim());
  });

  let salesSearchDebounceId = null;
  els.salesSearchInput?.addEventListener("input", () => {
    window.clearTimeout(salesSearchDebounceId);
    salesSearchDebounceId = window.setTimeout(() => {
      salesState.query = els.salesSearchInput.value.trim();
      renderSalesSection();
    }, 140);
  });

  els.salesStoreFilter?.addEventListener("change", () => {
    salesState.store = els.salesStoreFilter.value || "all";
    renderSalesSection();
  });

  els.salesCategoryFilter?.addEventListener("change", () => {
    salesState.category = els.salesCategoryFilter.value || "all";
    renderSalesSection();
  });

  els.salesQuickFilters?.addEventListener("change", () => {
    salesState.quickFilters = [...els.salesQuickFilters.querySelectorAll("[data-sales-quick-filter]:checked")]
      .map((input) => input.dataset.salesQuickFilter)
      .filter((key) => Object.prototype.hasOwnProperty.call(SALES_QUICK_FILTER_LABELS, key));
    renderSalesSection();
  });

  els.salesSortFilter?.addEventListener("change", () => {
    salesState.sort = els.salesSortFilter.value || "score";
    renderSalesSection();
  });

  let salesPriceDebounceId = null;
  const handleSalesPriceRangeInput = (changed) => {
    const priceRange = normalizeDualPriceRangeValues(
      els.salesPriceRangeMin?.value,
      els.salesPriceRange?.value,
      SALES_PRICE_MAX_EUR,
      changed
    );
    salesState.minPrice = priceRange.min;
    salesState.maxPrice = priceRange.max;
    syncDualPriceRangeControl(
      els.salesPriceRangeControl,
      els.salesPriceRangeMin,
      els.salesPriceRange,
      salesState.minPrice,
      salesState.maxPrice,
      SALES_PRICE_MAX_EUR
    );
    if (els.salesPriceValue) els.salesPriceValue.textContent = salesPriceLabel();
    window.clearTimeout(salesPriceDebounceId);
    salesPriceDebounceId = window.setTimeout(renderSalesSection, 120);
  };
  els.salesPriceRangeMin?.addEventListener("input", () => handleSalesPriceRangeInput("min"));
  els.salesPriceRange?.addEventListener("input", () => handleSalesPriceRangeInput("max"));

  els.nekoAdvisorResults?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-neko-figure]");
    if (!button) return;
    event.preventDefault();
    renderProductDetail(button.dataset.nekoFigure);
  });

  els.salesGrid?.addEventListener("click", (event) => {
    const compareButton = event.target.closest("[data-sales-figure]");
    if (compareButton) {
      event.preventDefault();
      renderProductDetail(compareButton.dataset.salesFigure);
      return;
    }
    if (event.target.closest("[data-offer-link]")) return;
    const card = event.target.closest(".sales-card[data-sales-url]");
    if (!card?.dataset.salesUrl) return;
    window.open(card.dataset.salesUrl, "_blank", "noopener,noreferrer");
  });

  els.salesGrid?.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const card = event.target.closest(".sales-card[data-sales-url]");
    if (!card?.dataset.salesUrl) return;
    event.preventDefault();
    window.open(card.dataset.salesUrl, "_blank", "noopener,noreferrer");
  });

  els.nekoAdvisorKindStep?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-neko-kind]");
    if (!button) return;
    nekoAdvisorState.productKind = button.dataset.nekoKind || "";
    nekoAdvisorState.category = "";
    if (els.nekoAdvisorKindStep) els.nekoAdvisorKindStep.hidden = true;
    if (els.nekoAdvisorBudgetForm) els.nekoAdvisorBudgetForm.hidden = false;
    updateNekoAdvisorStage("budget");
    nekoAdvisorSpeak(`${nekoAdvisorKindLabel()} selected. Set the maximum budget you want to compare.`);
    window.setTimeout(() => els.nekoAdvisorBudget?.focus(), 80);
  });

  els.newArrivalsGrid?.addEventListener("click", (event) => {
    if (event.target.closest(".store-logo-link")) return;

    const button = event.target.closest("[data-highlight-select]");
    if (!button) return;
    event.preventDefault();
    const figure = figures.find((item) => item.id === button.dataset.highlightSelect);
    if (figure) {
      renderProductDetail(figure.id);
      return;
    }
    const url = button.dataset.highlightUrl || "";
    if (isValidProviderUrl(url)) {
      window.open(url, "_blank", "noreferrer");
    }
  });

  if (els.heroShowcase) {
    els.heroShowcase.addEventListener("click", (event) => {
      const button = event.target.closest("[data-hero-select]");
      if (!button) return;
      event.preventDefault();
      renderProductDetail(button.dataset.heroSelect);
    });
    els.heroShowcase.addEventListener("mouseenter", () => {
      heroShowcasePaused = true;
    });
    els.heroShowcase.addEventListener("mouseleave", () => {
      heroShowcasePaused = false;
    });
    els.heroShowcase.addEventListener("focusin", () => {
      heroShowcasePaused = true;
    });
    els.heroShowcase.addEventListener("focusout", () => {
      heroShowcasePaused = false;
    });
  }

  document.querySelectorAll(".storefront-arrow").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.classList.contains("storefront-arrow-left") ? -1 : 1;
      heroShowcasePaused = true;
      els.heroShowcase?.scrollBy({ left: direction * Math.max(280, els.heroShowcase.clientWidth * 0.72), behavior: "smooth" });
      window.setTimeout(() => {
        heroShowcasePaused = false;
      }, 1600);
    });
  });

  els.sidebarSearchButton?.addEventListener("click", () => {
    showHomeView(false);
    els.homeSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => els.searchInput?.focus(), 360);
  });

  els.sidebarDatabaseButton?.addEventListener("click", () => {
    showDatabaseSection(true);
  });

  els.sidebarMultiStoreButton?.addEventListener("click", () => {
    showMultiStoreFigures(true);
  });

  els.sidebarCommunityButton?.addEventListener("click", () => {
    showCommunitySection(true);
  });

  els.sidebarGameButton?.addEventListener("click", () => {
    showGameSection(true);
  });

  document.querySelectorAll('a[href="#data"]').forEach((link) => {
    link.addEventListener("click", () => {
      showDatabaseSection(false);
    });
  });

  document.querySelectorAll('a[href="#game"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showGameSection(false);
    });
  });

  document.querySelectorAll('a[href="#community"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showCommunitySection(false);
    });
  });

  document.querySelectorAll('a[href="#home"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showHomeView(true);
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
    });
  });

  document.querySelectorAll('a[href="#results"], a[href="#contact"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      activeView = "catalog";
      state.multiStoreOnly = false;
      state.figuresOnly = false;
      state.catalogKind = "all";
      state.figureCatalogLabel = "";
      setResultsDisplayMode("");
      hideGameSection();
      hideTaxonomySection();
      hideCommunitySection();
      setDiscoverySectionsVisible(true);
      if (els.figureSection) els.figureSection.hidden = true;
      if (els.resultsSection) els.resultsSection.hidden = false;
      hideDatabaseSection();
      renderProductCards();
      els.resultsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && els.databaseSection && !els.databaseSection.hidden) {
      refreshDatabaseSection({ silent: true });
    }
  });

  els.databaseRefreshButton?.addEventListener("click", () => refreshDatabaseSection({ forceCatalogueReload: true }));

  els.databaseNamesButton?.addEventListener("click", () => {
    const isOpen = Boolean(els.databaseNamesPanel && !els.databaseNamesPanel.hidden);
    setDatabaseNamesVisible(!isOpen);
  });

  els.sidebarWishlistButton?.addEventListener("click", () => {
    hideDatabaseSection();
    renderWishlist();
    if (typeof els.wishlistDialog.showModal === "function") {
      els.wishlistDialog.showModal();
    }
  });

  els.sidebarSettingsButton?.addEventListener("click", () => {
    hideDatabaseSection();
    populateProfileForm();
    if (typeof els.loginDialog.showModal === "function") {
      els.loginDialog.showModal();
    }
  });

  els.showMoreButton.addEventListener("click", () => {
    loadMoreProductCards();
  });

  els.figurePagination?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-figure-page]");
    if (!button || button.disabled) return;
    setFigurePage(button.dataset.figurePage);
  });

  window.addEventListener(
    "scroll",
    () => {
      if (showMoreScrollTicking) return;
      showMoreScrollTicking = true;
      window.requestAnimationFrame(() => {
        showMoreScrollTicking = false;
        maybeAutoLoadMoreCards();
      });
    },
    { passive: true }
  );

  els.resultsSection?.addEventListener(
    "scroll",
    () => {
      if (showMoreScrollTicking) return;
      showMoreScrollTicking = true;
      window.requestAnimationFrame(() => {
        showMoreScrollTicking = false;
        maybeAutoLoadMoreCards();
      });
    },
    { passive: true }
  );

  window.addEventListener("hashchange", () => {
    if (restoreSelectedFigureFromHash()) return;
    scrollToVisibleHashTarget();
  });

  els.manufacturerFilter.addEventListener("change", () => {
    state.manufacturer = els.manufacturerFilter.value;
    resetVisibleCards();
    renderProductCards();
  });

  els.typeFilter.addEventListener("change", () => {
    state.type = els.typeFilter.value;
    resetVisibleCards();
    renderProductCards();
    if (window.location.protocol !== "file:" && state.figuresOnly) {
      const runId = (apiSearchRunId += 1);
      reloadCataloguePageForQuery(state.query, runId);
    }
  });

  els.statusFilter.addEventListener("change", () => {
    state.status = els.statusFilter.value;
    resetVisibleCards();
    renderProductCards();
  });

  els.providerFilter.addEventListener("change", () => {
    state.provider = els.providerFilter.value;
    resetVisibleCards();
    renderProductCards();
  });

  els.sortFilter.addEventListener("change", () => {
    state.sort = els.sortFilter.value;
    if (els.gridSortSelect) els.gridSortSelect.value = state.sort === "highestTotal" ? "highestTotal" : state.sort === "newest" ? "lowestTotal" : state.sort;
    state.gridSort = els.gridSortSelect?.value || state.sort;
    syncFigurePriceSortControls();
    resetVisibleCards();
    renderProductCards();
  });

  let gridSearchDebounceId = null;
  els.gridSearchInput?.addEventListener("input", () => {
    window.clearTimeout(gridSearchDebounceId);
    gridSearchDebounceId = window.setTimeout(() => {
      state.gridQuery = els.gridSearchInput.value.trim();
      resetVisibleCards();
      renderProductCards();
    }, 150);
  });

  els.gridSortSelect?.addEventListener("change", () => {
    state.gridSort = els.gridSortSelect.value;
    state.sort = state.gridSort;
    if (els.sortFilter && [...els.sortFilter.options].some((option) => option.value === state.sort)) {
      els.sortFilter.value = state.sort;
    }
    syncFigurePriceSortControls();
    resetVisibleCards();
    renderProductCards();
  });

  els.activeFilterChips?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-clear-figure-filter]");
    if (!button) return;
    clearSingleFigureFilter(button.dataset.clearFigureFilter || "");
  });

  els.clearFigureFilters?.addEventListener("click", () => {
    clearAllFigureFilters();
  });

  els.figureQuickFilters?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-quick-filter]");
    if (!input) return;
    const rollbackState = figureFilterRequestStateSnapshot();
    if (input.dataset.quickFilter === "sales" && input.checked) {
      // Sales has its own verified promotions feed and purpose-built cards.
      // Routing there avoids an empty figure result when the legacy offer
      // rows do not carry previous_price even though promotions.json does.
      state.quickFilters = activeFigureQuickFilters().filter((key) => key !== "sales");
      input.checked = false;
      syncFigureQuickFilterControls();
      showSalesSection(true);
      return;
    }
    if (["ecchi", "adult_18"].includes(input.dataset.quickFilter) && input.checked) {
      // Adult content levels are mutually exclusive global catalogue views.
      // Carrying a previous series/search
      // into this request produced deterministic zero-result pages such as
      // "One Piece + Ecchi", then races made later attempts look random.
      els.figureQuickFilters
        .querySelectorAll('[data-quick-filter="ecchi"], [data-quick-filter="adult_18"]')
        .forEach((item) => {
          if (item !== input) item.checked = false;
        });
      prepareGlobalMaturityFilter();
    }
    state.quickFilters = [...els.figureQuickFilters.querySelectorAll("[data-quick-filter]:checked")]
      .map((item) => item.dataset.quickFilter)
      .filter((key) => Object.prototype.hasOwnProperty.call(FIGURE_QUICK_FILTER_LABELS, key));
    state.catalogStandalone = true;
    if (reloadFigureCatalogueForActiveFilters({ rollbackState })) return;
    resetVisibleCards();
    renderProductCards();
  });

  els.figurePriceSortFilters?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-figure-price-sort]");
    if (!input) return;
    const requestedSort = input.value === "highestTotal" ? "highestTotal" : "lowestTotal";
    state.gridSort = input.checked ? requestedSort : "catalogue";
    state.sort = state.gridSort;
    if (els.gridSortSelect) els.gridSortSelect.value = state.gridSort;
    if (els.sortFilter && [...els.sortFilter.options].some((option) => option.value === state.sort)) {
      els.sortFilter.value = state.sort;
    }
    syncFigurePriceSortControls();
    state.catalogStandalone = true;
    resetVisibleCards();
    renderProductCards();
  });

  document.querySelector(".comparison-tabs-nav")?.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-comparison-tab]");
    if (!tab) return;

    const shell = tab.closest(".comparison-tabs-shell");
    const panel = document.querySelector("#comparisonStoresPanel");
    const tabName = tab.dataset.comparisonTab || "";
    const isStoresTab = tabName === "stores";
    const isAlreadyOpen = shell?.dataset.comparisonTabsOpen === "true" && tab.getAttribute("aria-selected") === "true";
    const shouldOpenStores = isStoresTab && !isAlreadyOpen;

    shell?.querySelectorAll("[data-comparison-tab]").forEach((button) => {
      const selected = shouldOpenStores && button === tab;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.setAttribute("aria-expanded", String(selected));
    });

    if (shell) shell.dataset.comparisonTabsOpen = shouldOpenStores ? "true" : "false";
    if (panel) panel.hidden = !shouldOpenStores;
  });

  els.marketplaceLensBar?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-marketplace-lens]");
    if (!button) return;
    const nextLens = MARKETPLACE_LENSES.has(button.dataset.marketplaceLens) ? button.dataset.marketplaceLens : "all";
    state.marketplaceLens = nextLens;
    if (nextLens === "bestPrice") {
      state.gridSort = "lowestTotal";
      state.sort = "lowestTotal";
    }
    state.multiStoreOnly = nextLens === "multiStore";
    state.catalogStandalone = true;
    syncFigureFilterControls();
    resetVisibleCards();
    renderProductCards();
  });

  let priceRangeDebounceId = null;
  const handleFigurePriceRangeInput = (changed) => {
    const priceRange = normalizeDualPriceRangeValues(
      els.priceRangeMin?.value,
      els.priceRange?.value,
      FIGURE_TAB_PRICE_MAX_EUR,
      changed
    );
    state.minPrice = priceRange.min;
    state.maxPrice = priceRange.max;
    state.catalogStandalone = true;
    syncDualPriceRangeControl(
      els.figurePriceRangeControl,
      els.priceRangeMin,
      els.priceRange,
      state.minPrice,
      state.maxPrice,
      FIGURE_TAB_PRICE_MAX_EUR
    );
    if (els.priceRangeValue) els.priceRangeValue.textContent = displayPriceRangeLabel();
    window.clearTimeout(priceRangeDebounceId);
    priceRangeDebounceId = window.setTimeout(() => {
      resetVisibleCards();
      renderProductCards();
    }, 120);
  };
  els.priceRangeMin?.addEventListener("input", () => handleFigurePriceRangeInput("min"));
  els.priceRange?.addEventListener("input", () => handleFigurePriceRangeInput("max"));

  els.confirmedOnly.addEventListener("change", () => {
    state.confirmedOnly = els.confirmedOnly.checked;
    resetVisibleCards();
    renderProductCards();
  });

  els.shipsToPortugal.addEventListener("change", () => {
    state.shipsToPortugal = els.shipsToPortugal.checked;
    resetVisibleCards();
    renderProductCards();
  });

  els.antiEcchiToggle?.addEventListener("change", () => {
    state.antiEcchi = els.antiEcchiToggle.checked;
    renderProductCards();
    renderNewArrivals();
    if (selectedFigureId && activeView === "detail") {
      renderProductDetail(selectedFigureId, false, false);
    }
    if (activeView === "game" && gameState.target && els.gameFigureImage) {
      els.gameFigureImage.classList.toggle("ecchi-blur", shouldBlurFigureImage(gameState.target));
    }
  });

  els.backToResultsButton?.addEventListener("click", () => {
    returnToResultsView(true);
  });

  els.figureCommentForm?.addEventListener("submit", submitFigureComment);
  els.communityCreateAccountButton?.addEventListener("click", openCommunitySignup);
  document.querySelector("[data-community-compose]")?.addEventListener("click", focusCommunityComposer);
  document.querySelector("[data-community-login]")?.addEventListener("click", openCommunitySignup);
  els.communitySearchInput?.addEventListener("input", () => {
    communityState.search = els.communitySearchInput.value || "";
    renderCommunityFeed();
  });
  els.communityHomeButton?.addEventListener("click", () => {
    showHomeView(true);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#home`);
  });
  els.communitySection?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-community-filter]");
    if (!button) return;
    communityState.filter = button.dataset.communityFilter || "all";
    renderCommunityFeed();
  });
  els.communitySignupForm?.addEventListener("submit", submitCommunitySignup);
  els.communitySignupClose?.addEventListener("click", () => {
    if (typeof els.communitySignupDialog?.close === "function") {
      els.communitySignupDialog.close();
    }
  });
  els.communityPostForm?.addEventListener("submit", submitCommunityPost);

  els.productGrid.addEventListener("click", (event) => {
    const wishButton = event.target.closest("[data-wish]");
    const selectButton = event.target.closest("[data-select]");
    const queryButton = event.target.closest("[data-query]");

    if (wishButton) {
      event.preventDefault();
      toggleWishlist(wishButton.dataset.wish);
      return;
    }
    if (selectButton) {
      event.preventDefault();
      renderProductDetail(selectButton.dataset.select);
      return;
    }
    if (queryButton) {
      event.preventDefault();
      applySearch(queryButton.dataset.query);
    }
  });

  els.bestDealLink.addEventListener("click", handleOfferNavigation);
  els.offerRefreshAllButton?.addEventListener("click", handleOfferRefreshAll);
  els.offerTable?.addEventListener("click", handleOfferRefresh);
  els.offerTable?.addEventListener("click", handleOfferNavigation);
  els.directOfferTable?.addEventListener("click", handleOfferRefresh);
  els.directOfferTable?.addEventListener("click", handleOfferNavigation);
  els.offerCompareControls?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-offer-filter]");
    if (!button) return;
    const nextFilter = button.dataset.offerFilter;
    if (!OFFER_COMPARISON_FILTERS.has(nextFilter)) return;
    offerComparisonState.filter = nextFilter;
    if (selectedFigureId) renderProductDetail(selectedFigureId, false, false);
  });
  els.offerCompareSort?.addEventListener("change", () => {
    const nextSort = els.offerCompareSort.value;
    offerComparisonState.sort = OFFER_COMPARISON_SORTS.has(nextSort) ? nextSort : "best";
    if (selectedFigureId) renderProductDetail(selectedFigureId, false, false);
  });

  els.sortToggle?.addEventListener("click", () => {
    sortAscending = !sortAscending;
    els.sortToggle.textContent = sortAscending ? "Lowest price first" : "Highest price first";
    renderProductDetail(selectedFigureId, false);
  });

  els.trackProduct.addEventListener("click", () => {
    if (selectedFigureId) toggleWishlist(selectedFigureId);
  });

  els.addToCartProduct?.addEventListener("click", () => {
    if (selectedFigureId) addToCart(selectedFigureId);
  });

  els.alertProduct.addEventListener("click", () => {
    els.alertStatus.textContent = "";
    if (els.alertEmail && userProfile.email && !els.alertEmail.value) {
      els.alertEmail.value = userProfile.email;
    }
    if (typeof els.alertDialog.showModal === "function") {
      els.alertDialog.showModal();
    }
  });

  els.loginButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleAccountMenu();
  });

  els.accountMenu?.addEventListener("click", (event) => {
    event.stopPropagation();
    const authButton = event.target.closest("[data-auth-open]");
    if (authButton) {
      openAuthDialog(authButton.dataset.authOpen || "login");
      return;
    }
    if (event.target.closest("#accountPreferencesButton")) {
      closeAccountMenu();
      populateProfileForm();
      if (typeof els.loginDialog?.showModal === "function") els.loginDialog.showModal();
      return;
    }
    if (event.target.closest("#accountLogoutButton")) logoutAuthenticatedAccount();
  });

  els.authDialogClose?.addEventListener("click", closeAuthDialog);
  els.authDialog?.addEventListener("click", (event) => {
    if (event.target === els.authDialog) {
      closeAuthDialog();
      return;
    }
    const switchButton = event.target.closest("[data-auth-switch]");
    if (switchButton) {
      setAuthView(switchButton.dataset.authSwitch || "login");
      requestAnimationFrame(() => {
        (switchButton.dataset.authSwitch === "create" ? els.authCreateFirstName : els.authLoginEmail)?.focus();
      });
      return;
    }
    const passwordButton = event.target.closest("[data-password-toggle]");
    if (passwordButton) {
      const input = document.getElementById(passwordButton.dataset.passwordToggle || "");
      if (!input) return;
      const reveal = input.type === "password";
      input.type = reveal ? "text" : "password";
      passwordButton.textContent = reveal ? "Hide" : "Show";
      passwordButton.setAttribute("aria-label", reveal ? "Hide password" : "Show password");
      input.focus();
    }
  });
  els.authLoginForm?.addEventListener("submit", submitAuthLogin);
  els.authCreateForm?.addEventListener("submit", submitAuthCreate);
  els.authResetForm?.addEventListener("submit", submitAuthPasswordReset);
  els.authForgotButton?.addEventListener("click", requestAuthPasswordReset);

  els.headerMarketButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleHeaderMarketMenu();
  });

  els.headerMarketMenu?.addEventListener("click", (event) => {
    event.stopPropagation();
    const countryButton = event.target.closest("[data-market-country]");
    if (countryButton) {
      const country = countryButton.dataset.marketCountry;
      const profile = COUNTRY_PROFILES[country] || COUNTRY_PROFILES.PT;
      applyMarketPreferences(country, profile.currency, true);
      closeHeaderMarketMenu();
      return;
    }

    if (event.target.closest("[data-open-market-settings]")) {
      closeHeaderMarketMenu();
      populateMarketOnboarding();
      if (typeof els.marketOnboardingDialog?.showModal === "function") {
        els.marketOnboardingDialog.showModal();
      } else {
        els.marketOnboardingDialog?.setAttribute("open", "");
      }
    }
  });

  els.marketCountry?.addEventListener("change", () => {
    const selectedCountry = COUNTRY_PROFILES[els.marketCountry.value] || COUNTRY_PROFILES.PT;
    els.marketCurrency.value = selectedCountry.currency;
    renderMarketOnboardingPreview();
  });

  els.marketCurrency?.addEventListener("change", () => {
    renderMarketOnboardingPreview();
  });

  els.marketOnboardingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    applyMarketPreferences(els.marketCountry.value, els.marketCurrency.value, true);
    if (typeof els.marketOnboardingDialog?.close === "function") {
      els.marketOnboardingDialog.close();
    } else {
      els.marketOnboardingDialog?.removeAttribute("open");
    }
  });

  els.marketOnboardingDialog?.addEventListener("cancel", () => {
    document.documentElement.classList.remove("market-onboarding-required");
  });

  els.marketOnboardingClose?.addEventListener("click", () => {
    if (typeof els.marketOnboardingDialog?.close === "function") {
      els.marketOnboardingDialog.close();
    } else {
      els.marketOnboardingDialog?.removeAttribute("open");
    }
  });

  document.addEventListener("click", (event) => {
    if (els.headerMarketMenu && !els.headerMarketMenu.hidden
      && !event.target.closest("#headerMarketButton")
      && !event.target.closest("#headerMarketMenu")) {
      closeHeaderMarketMenu();
    }
    if (els.accountMenu && !els.accountMenu.hidden
      && !event.target.closest("#loginButton")
      && !event.target.closest("#accountMenu")) {
      closeAccountMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (els.headerMarketMenu && !els.headerMarketMenu.hidden) {
      closeHeaderMarketMenu();
      els.headerMarketButton?.focus();
    }
    if (els.accountMenu && !els.accountMenu.hidden) closeAccountMenu({ restoreFocus: true });
  });

  els.profileCountry?.addEventListener("change", () => {
    const selectedCountry = COUNTRY_PROFILES[els.profileCountry.value] || COUNTRY_PROFILES.PT;
    if (els.profileCurrency) els.profileCurrency.value = selectedCountry.currency;
  });

  els.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyUserProfileFromForm();
    if (typeof els.loginDialog.close === "function") {
      els.loginDialog.close();
    }
  });

  els.loginClose.addEventListener("click", () => {
    if (typeof els.loginDialog.close === "function") {
      els.loginDialog.close();
    }
  });

  els.gameCurrencySelect?.addEventListener("change", () => {
    saveGameCurrency(els.gameCurrencySelect.value);
    renderGameLobbyStatus();
  });

  els.gameStartButton?.addEventListener("click", startGameSession);
  els.gameNewRoundButton?.addEventListener("click", startGameRound);
  els.gameEndButton?.addEventListener("click", endGameSession);
  els.gameSubmitGuessButton?.addEventListener("click", () => {
    submitGameGuess(els.gameGuessInput?.value);
  });
  els.gameGuessInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitGameGuess(els.gameGuessInput?.value);
    }
  });
  els.gameSection?.addEventListener("click", (event) => {
    const powerupButton = event.target.closest("[data-game-powerup]");
    if (powerupButton) {
      event.preventDefault();
      handleGamePowerup(powerupButton.dataset.gamePowerup);
      return;
    }

    const choiceButton = event.target.closest("[data-game-choice]");
    if (choiceButton) {
      event.preventDefault();
      submitGameGuess(choiceButton.dataset.gameChoice);
      return;
    }

    const hotColdButton = event.target.closest("[data-game-hotcold-submit]");
    if (hotColdButton) {
      event.preventDefault();
      submitHotColdGuess();
    }
  });

  els.wishlistButton?.addEventListener("click", () => {
    renderWishlist();
    if (typeof els.wishlistDialog.showModal === "function") {
      els.wishlistDialog.showModal();
    }
  });

  els.cartButton?.addEventListener("click", () => {
    renderCart();
    if (typeof els.cartDialog?.showModal === "function") {
      els.cartDialog.showModal();
    } else {
      els.cartDialog?.setAttribute("open", "");
    }
  });

  els.wishlistItems.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-wishlist-mode]");
    if (viewButton) {
      renderWishlist(viewButton.dataset.wishlistMode);
      return;
    }

    if (event.target.closest("[data-wishlist-close]")) {
      if (typeof els.wishlistDialog?.close === "function") els.wishlistDialog.close();
      return;
    }

    const quantityButton = event.target.closest("[data-wish-quantity]");
    if (quantityButton) {
      changeWishlistQuantity(quantityButton.dataset.wishQuantity, Number(quantityButton.dataset.delta || 0));
      return;
    }

    const relatedSaveButton = event.target.closest("[data-wish-related-add]");
    if (relatedSaveButton) {
      const figureId = relatedSaveButton.dataset.wishRelatedAdd;
      if (figureId && !wishlist.includes(figureId)) toggleWishlist(figureId);
      return;
    }

    const selectButton = event.target.closest("[data-wish-select]");
    if (selectButton) {
      if (typeof els.wishlistDialog?.close === "function") els.wishlistDialog.close();
      renderProductDetail(selectButton.dataset.wishSelect, true);
      return;
    }

    const removeButton = event.target.closest("[data-remove-wish]");
    if (removeButton) toggleWishlist(removeButton.dataset.removeWish);
  });

  els.cartItems?.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-cart]");
    if (removeButton) {
      removeFromCart(removeButton.dataset.removeCart);
      return;
    }
    const selectButton = event.target.closest("[data-cart-select]");
    if (selectButton) {
      if (typeof els.cartDialog?.close === "function") els.cartDialog.close();
      renderProductDetail(selectButton.dataset.cartSelect, true);
    }
  });

  els.cartClearButton?.addEventListener("click", clearCart);

  els.alertForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.submitter?.value === "close") {
      if (typeof els.alertDialog.close === "function") {
        els.alertDialog.close();
      }
      return;
    }
    submitPriceAlert();
  });
}

function init() {
  const topbar = document.querySelector(".store-style-topbar");
  if (topbar) {
    const syncTopbarHeight = () => {
      const height = Math.ceil(topbar.getBoundingClientRect().height);
      if (height > 0) document.documentElement.style.setProperty("--nekoprice-topbar-height", `${height}px`);
    };
    syncTopbarHeight();
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(syncTopbarHeight).observe(topbar);
    } else {
      window.addEventListener("resize", syncTopbarHeight, { passive: true });
    }
  }
  initializeTheme();
  installFigureImageGuard();
  populateProfileForm();
  populateMarketOnboarding();
  initializeGame();
  renderCommunitySession();
  bindEvents();
  validateStoredAccountSession();
  if (passwordResetTokenFromUrl()) openAuthDialog("reset");
  openMarketOnboardingIfNeeded();
  if (window.location.hash === "#sales") {
    showSalesSection(false);
  } else if (window.location.hash === "#neko-advisor") {
    showNekoAdvisorSection(false);
  }
  renderWishlist();
  renderCart();
  renderPromotionRanking();
  loadPromotionsCarousel();
  loadPromotionsFeed();
  loadHighlights();
  loadTrendingProducts();
  loadCategoryRankings();
  loadExchangeRates();
  window.setTimeout(() => {
    requestTaxonomyEntries("franchises");
    requestTaxonomyEntries("characters");
  }, 300);
  scheduleCatalogueLoad();
}

init();
