/* ==========================================================================
   data.js — כל התוכן של האתר, בעברית ובאנגלית, נמצא בקובץ הזה בלבד.
   data.js — all site content, Hebrew and English, lives in this one file.

   לכל טקסט יש שתי גרסאות: he ו-en. אם משאירים en ריק, מוצג הטקסט העברי.
   Every string has a he and an en version. Leave en empty and Hebrew shows.
   ========================================================================== */

/* --- הגדרות כלליות / site settings ---------------------------------------- */
const SITE = {
  /* ⚠️ להשלים: שם הרחוב/השכונה שעל השלט.
     הטקסט "רח' קפלן / דגל ראובן" צרוב בתוך assets/img/street-sign.png. */
  signAlt: {
    he: "שלט רחוב מצויר בסגנון וינטג': רח' קפלן ודגל ראובן",
    en: "Hand-drawn vintage street sign: Kaplan Street and Degel Reuven"
  },

  /* ⚠️ טיוטה לאישור: הטקסט שליד השלט בדף הבית. */
  intro: {
    he: [
      "שנים שלמות המתכונים של סבתא שרה חיו בפתקים, במחברת אחת מרופטת ובשיחות טלפון באמצע הבישול. אספנו אותם לכאן, למקום אחד, כדי שלא ילכו לאיבוד.",
      "כל מתכון כתוב בדיוק כמו שסבתא מכינה אותו — בלי סיפורים ארוכים, רק מה שצריך: מצרכים, שלבים, וזהו. פותחים את הטלפון במטבח ומתחילים."
    ],
    en: [
      "For years Savta Sara's recipes lived on scraps of paper, in one battered notebook, and in phone calls made halfway through cooking. We gathered them here, in one place, so none of them get lost.",
      "Every recipe is written exactly the way she makes it — no long stories, just what you need: ingredients, steps, done. Open your phone in the kitchen and start."
    ]
  },

  /* הגלריה בדף הבית. הכיתוב הוא השנה מתוך נתוני התמונה עצמה. */
  photos: [
    { src: "assets/img/gallery/savta-02.jpg", caption: "2004" },
    { src: "assets/img/gallery/savta-06.jpg", caption: "" },
    { src: "assets/img/gallery/savta-04.jpg", caption: "2005" },
    { src: "assets/img/gallery/savta-05.jpg", caption: "" },
    { src: "assets/img/gallery/savta-01.jpg", caption: "2004" },
    { src: "assets/img/gallery/savta-08.jpg", caption: "" },
    { src: "assets/img/gallery/savta-03.jpg", caption: "2004" },
    { src: "assets/img/gallery/savta-07.jpg", caption: "" }
  ]
};

/* --- מחרוזות הממשק / interface strings ------------------------------------
   כל טקסט שאינו מתכון. הצד השמאלי הוא המפתח שבו הקוד משתמש — לא לשנות אותו.
   -------------------------------------------------------------------------- */
const STRINGS = {
  he: {
    siteName:      "המתכונים של סבתא שרה",
    navHome:       "דף בית",
    navRecipes:    "מתכונים",
    navAbout:      "עלינו",
    searchLabel:   "חיפוש מתכון",
    searchPlace:   "חיפוש מתכון או מצרך…",
    searchBtn:     "חיפוש",
    menuOpen:      "פתיחת תפריט",
    skip:          "דילוג לתוכן",
    langSwitch:    "EN",
    langSwitchAria:"Switch to English",

    heroEyebrow:   "מטבח אחד · דורות שלמים",
    heroTitleA:    "המתכונים של",
    heroTitleB:    "סבתא שרה",
    heroBtnAll:    "לכל המתכונים",
    heroBtnAbout:  "קצת עלינו",
    galleryTitle:  "תמונות מהאלבום המשפחתי",
    catsTitle:     "מה מבשלים היום?",
    photoSoon:     "כאן תיכנס תמונה של סבתא",
    photoSoonCap:  "בקרוב",

    allRecipes:    "כל המתכונים",
    searchResults: "תוצאות חיפוש",
    totalSuffix:   "בסך הכל",
    noRecipes:     "אין מתכונים",
    oneRecipe:     "מתכון אחד",
    manyRecipes:   "מתכונים",
    comingSoon:    "בקרוב",

    ingredients:   "מצרכים",
    method:        "אופן ההכנה",
    prepTime:      "זמן הכנה",
    servings:      "כמות",
    noteLabel:     "הערה:",
    moreIn:        "עוד",
    backToAll:     "כל המתכונים",

    notFoundTitle: "המתכון לא נמצא",
    notFoundText:  "אולי הקישור השתנה. אפשר לחזור לרשימה ולבחור מחדש.",
    emptySearchT:  "לא מצאנו מתכון כזה",
    emptySearchB:  "אפשר לנסות מילה אחרת, או לחפש לפי מצרך — למשל ״לימון״.",
    emptyCatT:     "עוד אין כאן מתכונים",
    emptyCatB:     "הקטגוריה הזאת עדיין מחכה למתכונים של סבתא.",

    crumbHome:     "דף בית",
    crumbRecipes:  "מתכונים",
    crumbAria:     "מיקום",
    footerTag:     "נבנה באהבה למשפחה",

    aboutTitle:    "עלינו",
    aboutSub:      "איך האתר הזה נולד",
    aboutBtn:      "להתחיל לבשל",
    logoAlt:       "הלוגו של האתר: ראש שום מחייך עם משקפיים עגולים",

    share:         "שיתוף",
    shareCopied:   "הקישור הועתק",
    shareText:     "מתכון מהאתר של סבתא שרה",
    cookStart:     "בישול שלב אחר שלב",
    cookStep:      "שלב",
    cookOf:        "מתוך",
    cookNext:      "הבא",
    cookBack:      "אחורה",
    cookClose:     "סגירה",
    cookIngr:      "המצרכים",
    cookDoneT:     "סיימנו!",
    cookDoneB:     "בתיאבון 🍽",
    cookAgain:     "לחזור להתחלה",
    cookExit:      "יציאה מהמצב"
  },

  en: {
    siteName:      "Savta Sara's Recipes",
    navHome:       "Home",
    navRecipes:    "Recipes",
    navAbout:      "About",
    searchLabel:   "Search recipes",
    searchPlace:   "Search a recipe or ingredient…",
    searchBtn:     "Search",
    menuOpen:      "Open menu",
    skip:          "Skip to content",
    langSwitch:    "עב",
    langSwitchAria:"עבור לעברית",

    heroEyebrow:   "ONE KITCHEN · GENERATIONS OF IT",
    heroTitleA:    "The recipes of",
    heroTitleB:    "Savta Sara",
    heroBtnAll:    "See all recipes",
    heroBtnAbout:  "About us",
    galleryTitle:  "From the family album",
    catsTitle:     "What are we cooking today?",
    photoSoon:     "A photo of Savta goes here",
    photoSoonCap:  "Coming soon",

    allRecipes:    "All recipes",
    searchResults: "Search results",
    totalSuffix:   "in total",
    noRecipes:     "No recipes",
    oneRecipe:     "1 recipe",
    manyRecipes:   "recipes",
    comingSoon:    "Coming soon",

    ingredients:   "Ingredients",
    method:        "Method",
    prepTime:      "Prep time",
    servings:      "Serves",
    noteLabel:     "Note:",
    moreIn:        "More",
    backToAll:     "All recipes",

    notFoundTitle: "Recipe not found",
    notFoundText:  "The link may have changed. Go back to the list and pick again.",
    emptySearchT:  "No recipe matched",
    emptySearchB:  "Try another word, or search by ingredient — “lemon”, for example.",
    emptyCatT:     "Nothing here yet",
    emptyCatB:     "This category is still waiting for Savta's recipes.",

    crumbHome:     "Home",
    crumbRecipes:  "Recipes",
    crumbAria:     "Breadcrumb",
    footerTag:     "Built with love, for the family",

    aboutTitle:    "About",
    aboutSub:      "How this site came about",
    aboutBtn:      "Start cooking",
    logoAlt:       "Site logo: a smiling head of garlic wearing round glasses",

    share:         "Share",
    shareCopied:   "Link copied",
    shareText:     "A recipe from Savta Sara's kitchen",
    cookStart:     "Cook with me",
    cookStep:      "Step",
    cookOf:        "of",
    cookNext:      "Next",
    cookBack:      "Back",
    cookClose:     "Close",
    cookIngr:      "Ingredients",
    cookDoneT:     "All done!",
    cookDoneB:     "Enjoy 🍽",
    cookAgain:     "Start over",
    cookExit:      "Exit"
  }
};

/* --- דף "עלינו" / the About page ------------------------------------------ */
const ABOUT = {
  he: [
    { p: "האתר הזה הוא ניסיון לאסוף במקום אחד את כל מה שיצא מהמטבח של סבתא שרה. חלק מהמתכונים היו כתובים על פתקים, חלק במחברת, והרבה מהם היו קיימים רק בראש שלה ובטלפון באמצע הבישול." },
    { p: "ישבנו, שאלנו, כתבנו, ובעיקר טעמנו. מה שיצא נמצא כאן — פתוח לכל המשפחה, מכל טלפון, בכל שעה." },
    { h: "איך זה בנוי" },
    { p: "המתכונים מסודרים בחמש קטגוריות: סלטים, מרקים, עיקריות, תוספות וקינוחים. אפשר לדפדף לפי קטגוריה, או פשוט לחפש למעלה — החיפוש עובד גם על שמות מתכונים וגם על מצרכים, אז אם יש בבית חצילים אפשר להקליד ״חציל״ ולראות מה יוצא." },
    { p: "בכל דף מתכון אפשר לסמן מצרכים בזמן הקנייה או הבישול, כדי לא לאבד את המקום." },
    { h: "למה שום" },
    { p: "כי אין מתכון אחד של סבתא שלא מתחיל בשן שום." }
  ],
  en: [
    { p: "This site is an attempt to gather everything that came out of Savta Sara's kitchen into one place. Some of the recipes were written on scraps of paper, some in a notebook, and plenty of them existed only in her head and over the phone mid-cooking." },
    { p: "We sat down, asked, wrote, and mostly tasted. What came out of it is here — open to the whole family, from any phone, at any hour." },
    { h: "How it works" },
    { p: "The recipes are sorted into five categories: salads, soups, mains, sides and desserts. Browse by category, or just search at the top — search covers recipe names and ingredients alike, so if there are aubergines in the house, type “aubergine” and see what turns up." },
    { p: "On every recipe page you can tick ingredients off as you shop or cook, so you don't lose your place." },
    { h: "Why garlic" },
    { p: "Because there isn't a single recipe of Savta's that doesn't start with a clove of it." }
  ]
};

/* --- קטגוריות / categories -------------------------------------------------
   icons = האייקונים שקופצים מהכרטיס. שמות הקבצים בתוך assets/img/icons/.
   -------------------------------------------------------------------------- */
const CATEGORIES = [
  { id: "salads",   he: "סלטים",   en: "Salads",   icons: ["tomato", "cucumber", "lettuce", "eggplant", "carrot", "onion", "celery", "cucumber"] },
  { id: "soups",    he: "מרקים",   en: "Soups",    icons: ["carrot", "celery", "onion", "corn", "tomato", "cucumber", "celery", "carrot"] },
  { id: "mains",    he: "עיקריות", en: "Mains",    icons: ["drumstick", "chicken", "tomato", "onion", "corn", "drumstick", "chicken", "carrot"] },
  { id: "sides",    he: "תוספות",  en: "Sides",    icons: ["rollingpin", "measuringcup", "corn", "pretzel", "corn", "rollingpin", "pretzel", "measuringcup"] },
  { id: "desserts", he: "קינוחים", en: "Desserts", icons: ["pancake", "cupcake", "candy", "measuringcup", "pretzel", "cupcake", "candy", "pancake"] }
];

/* --- מתכונים / recipes -----------------------------------------------------
   שדות משותפים: id, category, image, time, servings
   שדות לפי שפה:  he: { title, ingredients, steps, note }
                  en: { title, ingredients, steps, note }

   כותרת ביניים ברשימת מצרכים: שורה שנגמרת בנקודתיים ("לרוטב:" / "For the sauce:").
   note אפשר להשמיט לגמרי.
   -------------------------------------------------------------------------- */
const RECIPES = [

  /* ============================ סלטים / Salads ============================ */
  {
    id: "salat-selek-kolrabi-gezer",
    category: "salads",
    icon: "salad.svg",
    image: "", time: "", servings: "",
    he: {
      title: "סלט סלק, קולורבי וגזר",
      ingredients: [
        "2 קולורבי, 2 סלק, 2 גזר ותפוח עץ — הכל חתוך לגפרורים",
        "1/2 כוס חומץ תפוחים",
        "1/4 כוס חומץ",
        "1/4 כוס שמן",
        "כף סוכר חום",
        "3 כפות סילאן",
        "כף רוטב ברביקיו",
        "1/2 כוס גרעיני דלעת לא קלויים",
        "1/2 כוס שקדים פרוסים"
      ],
      steps: ["מערבבים הכל יחד ומגישים קר."]
    },
    en: {
      title: "Beetroot, Kohlrabi and Carrot Salad",
      ingredients: [
        "2 kohlrabi, 2 beetroots, 2 carrots and an apple — all cut into matchsticks",
        "1/2 cup apple cider vinegar",
        "1/4 cup vinegar",
        "1/4 cup oil",
        "1 tbsp brown sugar",
        "3 tbsp silan (date syrup)",
        "1 tbsp barbecue sauce",
        "1/2 cup raw pumpkin seeds",
        "1/2 cup flaked almonds"
      ],
      steps: ["Mix everything together and serve cold."]
    }
  },
  {
    id: "chatzilim-charifim",
    category: "salads",
    icon: "eggplant.png",
    image: "", time: "", servings: "",
    he: {
      title: "חצילים חריפים",
      ingredients: [
        "2 חצילים",
        "3–4 שיני שום",
        "שמן לטיגון",
        "כפית פפריקה חריפה",
        "1/4 כפית פלפל שחור",
        "מלח לפי הטעם",
        "רסק מ-4 עגבניות טריות"
      ],
      steps: [
        "קולפים את החצילים וחותכים לקוביות.",
        "מחממים מעט שמן בסיר בינוני ומטגנים קלות את השום.",
        "מוסיפים את קוביות החציל ומאדים יחד עם השום, תוך בחישה מדי פעם.",
        "מוסיפים את רסק העגבניות, הפפריקה, הפלפל השחור והמלח.",
        "מבשלים עד שהחצילים מתרככים."
      ]
    },
    en: {
      title: "Spicy Aubergines",
      ingredients: [
        "2 aubergines",
        "3–4 garlic cloves",
        "Oil for frying",
        "1 tsp hot paprika",
        "1/4 tsp black pepper",
        "Salt to taste",
        "Purée of 4 fresh tomatoes"
      ],
      steps: [
        "Peel the aubergines and cut them into cubes.",
        "Heat a little oil in a medium pot and lightly fry the garlic.",
        "Add the aubergine cubes and let them steam with the garlic, stirring now and then.",
        "Add the tomato purée, paprika, black pepper and salt.",
        "Cook until the aubergines are soft."
      ]
    }
  },
  {
    id: "melafefon-chamutz",
    category: "salads",
    icon: "pickle-jar.svg",
    image: "", time: "", servings: "",
    he: {
      title: "מלפפון חמוץ",
      ingredients: [
        "8–9 מלפפונים בגודל בינוני (או קטנים יותר)",
        "5 שיני שום",
        "צרור שמיר",
        "מים",
        "מלח בישול (כף לכל ליטר מים)"
      ],
      steps: [
        "בוחרים צנצנת של ליטר עם מכסה.",
        "מסדרים בצנצנת את המלפפונים, השום והשמיר.",
        "מוסיפים מים רותחים עם המלח, כף לכל ליטר מים.",
        "סוגרים היטב ומניחים בצד ל-3–4 ימים."
      ],
      note: "כדי שהצנצנת לא תתפוצץ מהגזים החמים, שמים להב סכין מתחת לצנצנת בזמן המילוי. ניתן להכין באותו האופן גם עגבניות, בתוספת סלרי, גמבה או שורש פטרוזיליה."
    },
    en: {
      title: "Pickled Cucumbers",
      ingredients: [
        "8–9 medium cucumbers (or smaller)",
        "5 garlic cloves",
        "A bunch of dill",
        "Water",
        "Coarse salt (1 tbsp per litre of water)"
      ],
      steps: [
        "Take a one-litre jar with a lid.",
        "Pack the cucumbers, garlic and dill into the jar.",
        "Pour in boiling water with the salt, one tablespoon per litre.",
        "Seal tightly and leave aside for 3–4 days."
      ],
      note: "So the jar doesn't crack from the hot steam, rest a knife blade under it while you fill it. Tomatoes work the same way, with celery, sweet pepper or parsley root added."
    }
  },

  /* ============================ מרקים / Soups ============================ */
  {
    id: "marak-tapuchei-adama",
    category: "soups",
    icon: "soup.svg",
    image: "", time: "", servings: "",
    he: {
      title: "מרק תפוחי אדמה",
      ingredients: [
        "2 תפוחי אדמה חתוכים לקוביות",
        "גזר גדול מגורר",
        "בצל",
        "אבקת מרק",
        "שמיר",
        "מלח, פלפל",
        "אטריות דקות"
      ],
      steps: [
        "מטגנים את הבצל.",
        "מוסיפים אליו את תפוחי האדמה, הגזר, אבקת המרק, השמיר, המלח, הפלפל והאטריות.",
        "מבשלים חצי שעה."
      ]
    },
    en: {
      title: "Potato Soup",
      ingredients: [
        "2 potatoes, cut into cubes",
        "1 large carrot, grated",
        "1 onion",
        "Stock powder",
        "Dill",
        "Salt, pepper",
        "Fine noodles"
      ],
      steps: [
        "Fry the onion.",
        "Add the potatoes, carrot, stock powder, dill, salt, pepper and noodles.",
        "Cook for half an hour."
      ]
    }
  },
  {
    id: "marak-adashim-adumim",
    category: "soups",
    icon: "lentils.svg",
    image: "", time: "", servings: "",
    he: {
      title: "מרק עדשים אדומים",
      ingredients: [
        "כף שמן",
        "שורש פטרוזיליה חתוך לקוביות",
        "שן שום כתושה",
        "2 כפות רסק עגבניות",
        "3 עגבניות קצוצות",
        "1/2 ק\"ג עדשים",
        "תפוח אדמה וגזר מגוררים",
        "אבקת מרק, מלח, פלפל"
      ],
      steps: [
        "מטגנים את השום ושורש הפטרוזיליה.",
        "מוסיפים את העגבניות, רסק העגבניות ואבקת המרק.",
        "מוסיפים את העדשים, 2 ליטר מים, מלח ופלפל.",
        "מבשלים חצי שעה."
      ]
    },
    en: {
      title: "Red Lentil Soup",
      ingredients: [
        "1 tbsp oil",
        "1 parsley root, cut into cubes",
        "1 garlic clove, crushed",
        "2 tbsp tomato paste",
        "3 tomatoes, chopped",
        "500 g red lentils",
        "1 potato and 1 carrot, grated",
        "Stock powder, salt, pepper"
      ],
      steps: [
        "Fry the garlic and parsley root.",
        "Add the tomatoes, tomato paste and stock powder.",
        "Add the lentils, 2 litres of water, salt and pepper.",
        "Cook for half an hour."
      ]
    }
  },
  {
    id: "marak-yerakot",
    category: "soups",
    icon: "soup.svg",
    image: "", time: "", servings: "",
    he: {
      title: "מרק ירקות",
      ingredients: [
        "בצל",
        "3 כפות שמן",
        "תרד, סלרי, פטרוזיליה ועלי סלק — חתוכים גס",
        "2 גזר, סלק וקולורבי — חתוכים לקוביות קטנות",
        "כרפס ורצועות גזר",
        "מים",
        "2 לימונים",
        "מלח, פלפל"
      ],
      steps: [
        "מטגנים את הבצל בשמן.",
        "מוסיפים את התרד, הסלרי, הפטרוזיליה ועלי הסלק החתוכים גס, ומאדים.",
        "מוסיפים את הגזר, הסלק והקולורבי החתוכים לקוביות קטנות, יחד עם הכרפס ורצועות הגזר.",
        "מוסיפים מים פושרים ומבשלים חצי שעה.",
        "לבסוף מוסיפים את מיץ הלימונים, המלח והפלפל."
      ]
    },
    en: {
      title: "Vegetable Soup",
      ingredients: [
        "1 onion",
        "3 tbsp oil",
        "Spinach, celery, parsley and beet leaves — roughly chopped",
        "2 carrots, beetroot and kohlrabi — cut into small cubes",
        "Celeriac and carrot strips",
        "Water",
        "2 lemons",
        "Salt, pepper"
      ],
      steps: [
        "Fry the onion in the oil.",
        "Add the roughly chopped spinach, celery, parsley and beet leaves, and let them steam.",
        "Add the finely cubed carrot, beetroot and kohlrabi, along with the celeriac and carrot strips.",
        "Pour in lukewarm water and cook for half an hour.",
        "Finish with the lemon juice, salt and pepper."
      ]
    }
  },
  {
    id: "marak-afuna-yevesha",
    category: "soups",
    icon: "lentils.svg",
    image: "", time: "", servings: "",
    he: {
      title: "מרק אפונה יבשה",
      ingredients: [
        "2 תפוחי אדמה מגוררים",
        "בצל",
        "2 גזרים מגוררים",
        "250 גרם אפונה יבשה",
        "כפית אבקת מרק, מלח, פלפל"
      ],
      steps: [
        "מבשלים את האפונה במים.",
        "מטגנים את הבצל.",
        "מוסיפים אותו יחד עם הגזר ותפוחי האדמה לאפונה המתבשלת.",
        "ממשיכים לבשל עוד 30 דקות."
      ]
    },
    en: {
      title: "Split Pea Soup",
      ingredients: [
        "2 potatoes, grated",
        "1 onion",
        "2 carrots, grated",
        "250 g dried split peas",
        "1 tsp stock powder, salt, pepper"
      ],
      steps: [
        "Cook the peas in water.",
        "Fry the onion.",
        "Add it, with the carrot and potato, to the simmering peas.",
        "Carry on cooking for another 30 minutes."
      ]
    }
  },

  /* ============================ עיקריות / Mains ============================ */
  {
    id: "kaved-yerakot",
    category: "mains",
    icon: "pan.svg",
    image: "", time: "", servings: "",
    he: {
      title: "כבד עם ירקות",
      ingredients: [
        "1/2 ק\"ג כבד",
        "2 כפות קמח תפוחי אדמה",
        "גזר חתוך",
        "1/2 דלעת חתוכה לקוביות",
        "2 ביצים",
        "כף חומץ",
        "מלח, פלפל"
      ],
      steps: [
        "מכניסים את הכבד עם מסננת למים רותחים לכ-3 דקות ומסננים.",
        "מטגנים אותו מהר במחבת עם הקמח.",
        "מטגנים את הגזר והדלעת החתוכה, ומבשלים 10 דקות יחד עם הכבד החם.",
        "שוברים את הביצים ומוסיפים אותן עם החומץ, המלח והפלפל, וממשיכים לטגן עוד כמה דקות."
      ]
    },
    en: {
      title: "Liver with Vegetables",
      ingredients: [
        "500 g liver",
        "2 tbsp potato flour",
        "1 carrot, chopped",
        "1/2 squash, cut into cubes",
        "2 eggs",
        "1 tbsp vinegar",
        "Salt, pepper"
      ],
      steps: [
        "Lower the liver in a sieve into boiling water for about 3 minutes, then drain.",
        "Fry it quickly in a pan with the flour.",
        "Fry the carrot and the cubed squash, then cook for 10 minutes together with the hot liver.",
        "Break in the eggs and add them with the vinegar, salt and pepper, and keep frying a few minutes more."
      ]
    }
  },
  {
    id: "ktzitzot-rotev-afuna",
    category: "mains",
    icon: "meatballs.svg",
    image: "", time: "", servings: "",
    he: {
      title: "קציצות ברוטב עגבניות עם אפונה",
      ingredients: [
        "לקציצות:",
        "1/2 ק\"ג בשר טחון",
        "מלח, פלפל",
        "בצל קצוץ",
        "פטרוזיליה קצוצה",
        "3 כפות פירורי לחם",
        "ביצה",
        "לרוטב:",
        "3 כפות שמן",
        "3 שיני שום",
        "רוזמרין",
        "3–4 עגבניות חתוכות",
        "אפונה"
      ],
      steps: [
        "יוצרים כדורי קציצות מהבשר הטחון ושאר מצרכי הקציצות.",
        "מטגנים את השום והרוזמרין בשמן.",
        "מוסיפים את העגבניות ומבשלים.",
        "מכניסים את הקציצות ומבשלים חצי שעה.",
        "מוסיפים את האפונה.",
        "מגישים עם פסטה או אורז."
      ]
    },
    en: {
      title: "Meatballs in Tomato Sauce with Peas",
      ingredients: [
        "For the meatballs:",
        "500 g minced beef",
        "Salt, pepper",
        "1 onion, chopped",
        "Parsley, chopped",
        "3 tbsp breadcrumbs",
        "1 egg",
        "For the sauce:",
        "3 tbsp oil",
        "3 garlic cloves",
        "Rosemary",
        "3–4 tomatoes, chopped",
        "Peas"
      ],
      steps: [
        "Roll the mince and the rest of the meatball ingredients into balls.",
        "Fry the garlic and rosemary in the oil.",
        "Add the tomatoes and cook.",
        "Lower in the meatballs and cook for half an hour.",
        "Add the peas.",
        "Serve with pasta or rice."
      ]
    }
  },
  {
    id: "ktzitzot-of",
    category: "mains",
    icon: "meatballs.svg",
    image: "", time: "", servings: "",
    he: {
      title: "קציצות בשר עוף",
      ingredients: [
        "לקציצות:",
        "1/2 ק\"ג בשר עוף טחון",
        "תפוח אדמה מגורר",
        "ביצה",
        "פטרוזיליה קצוצה",
        "2 כפות פירורי לחם",
        "מלח, פלפל, בהרט",
        "כף שמן",
        "כפית קטשופ",
        "לרוטב:",
        "בצל קצוץ",
        "2 עגבניות",
        "2 כפות רסק עגבניות",
        "מים"
      ],
      steps: [
        "יוצרים כדורי קציצות מהחומרים.",
        "מטגנים את הבצל, מוסיפים עגבניות, רסק עגבניות ומים, ומרתיחים.",
        "מכניסים את הקציצות ומבשלים חצי שעה."
      ]
    },
    en: {
      title: "Chicken Meatballs",
      ingredients: [
        "For the meatballs:",
        "500 g minced chicken",
        "1 potato, grated",
        "1 egg",
        "Parsley, chopped",
        "2 tbsp breadcrumbs",
        "Salt, pepper, baharat",
        "1 tbsp oil",
        "1 tsp ketchup",
        "For the sauce:",
        "1 onion, chopped",
        "2 tomatoes",
        "2 tbsp tomato paste",
        "Water"
      ],
      steps: [
        "Roll the ingredients into balls.",
        "Fry the onion, add the tomatoes, tomato paste and water, and bring to the boil.",
        "Lower in the meatballs and cook for half an hour."
      ]
    }
  },
  {
    id: "ktzitzot-shel-bait",
    category: "mains",
    icon: "meatballs.svg",
    image: "", time: "", servings: "",
    he: {
      title: "קציצות של בית",
      ingredients: [
        "לקציצות:",
        "1/2 ק\"ג בשר טחון",
        "3 כפות סולת או פירורי לחם",
        "ביצה",
        "שן שום",
        "מלח, פלפל, כוסברה",
        "לרוטב:",
        "בצל קצוץ",
        "שמן",
        "2–3 שיני שום",
        "1/2 קופסת רסק עגבניות"
      ],
      steps: [
        "לשים היטב את הבשר עם שאר מצרכי הקציצות ויוצרים כדורים.",
        "מטגנים את הבצל בשמן.",
        "מוסיפים את השום ורסק העגבניות.",
        "מכניסים את הקציצות לבישול ברוטב."
      ]
    },
    en: {
      title: "Home-Style Meatballs",
      ingredients: [
        "For the meatballs:",
        "500 g minced beef",
        "3 tbsp semolina or breadcrumbs",
        "1 egg",
        "1 garlic clove",
        "Salt, pepper, coriander",
        "For the sauce:",
        "1 onion, chopped",
        "Oil",
        "2–3 garlic cloves",
        "1/2 tin tomato paste"
      ],
      steps: [
        "Knead the mince well with the rest of the meatball ingredients and roll into balls.",
        "Fry the onion in the oil.",
        "Add the garlic and tomato paste.",
        "Lower the meatballs into the sauce to cook."
      ]
    }
  },
  {
    id: "of-bechumus",
    category: "mains",
    icon: "drumstick.png",
    image: "", time: "", servings: "",
    he: {
      title: "עוף בחומוס (חומוס אפוי)",
      ingredients: [
        "2 כוסות חומוס מבושל",
        "3–4 עגבניות חתוכות לקוביות",
        "פלפל אדום קצוץ",
        "בצל קצוץ",
        "2 שיני שום כתושות",
        "כפית פלפל שחור, כפית פפריקה, כפית כמון, מלח, שמן זית",
        "כרעי עוף"
      ],
      steps: [
        "מערבבים את כל החומרים בסיר אפייה.",
        "מניחים את כרעי העוף מלמעלה.",
        "אופים 40–45 דקות בחום של 200 מעלות."
      ]
    },
    en: {
      title: "Chicken with Chickpeas (Baked Hummus)",
      ingredients: [
        "2 cups cooked chickpeas",
        "3–4 tomatoes, cut into cubes",
        "1 red pepper, chopped",
        "1 onion, chopped",
        "2 garlic cloves, crushed",
        "1 tsp black pepper, 1 tsp paprika, 1 tsp cumin, salt, olive oil",
        "Chicken legs"
      ],
      steps: [
        "Mix everything together in an oven dish.",
        "Lay the chicken legs on top.",
        "Bake for 40–45 minutes at 200°C."
      ]
    }
  },
  {
    id: "chazeh-of-berotev",
    category: "mains",
    icon: "chicken.png",
    image: "", time: "", servings: "",
    he: {
      title: "נתחי חזה עוף ברוטב",
      ingredients: [
        "כוס מים",
        "כף אבקת מרק",
        "פלפל שחור",
        "כפית פפריקה מתוקה",
        "מעט פפריקה חריפה",
        "100 גרם רסק עגבניות",
        "כפית מיץ לימון",
        "מלח",
        "נתחי חזה עוף"
      ],
      steps: [
        "מערבבים את כל החומרים לרוטב.",
        "מרתיחים.",
        "מכניסים את נתחי חזה העוף ומבשלים 20 דקות.",
        "מגישים עם אורז לבן או פתיתים."
      ]
    },
    en: {
      title: "Chicken Breast in Sauce",
      ingredients: [
        "1 cup water",
        "1 tbsp stock powder",
        "Black pepper",
        "1 tsp sweet paprika",
        "A little hot paprika",
        "100 g tomato paste",
        "1 tsp lemon juice",
        "Salt",
        "Chicken breast pieces"
      ],
      steps: [
        "Mix all the sauce ingredients together.",
        "Bring to the boil.",
        "Add the chicken breast pieces and cook for 20 minutes.",
        "Serve with white rice or ptitim."
      ]
    }
  },
  {
    id: "rotev-bolognez",
    category: "mains",
    icon: "pasta.svg",
    image: "", time: "", servings: "",
    he: {
      title: "רוטב בולונז",
      ingredients: [
        "בצל",
        "3 שיני שום כתוש",
        "פלפל חריף קצוץ",
        "500 גרם בשר טחון",
        "גזר קצוץ לקוביות",
        "מקל סלרי",
        "תימין, אורגנו, בזיליקום",
        "2 קופסאות רסק עגבניות",
        "מלח, פלפל",
        "כפית סוכר"
      ],
      steps: [
        "מטגנים את הבצל.",
        "מוסיפים את השום, הפלפל החריף, הבשר הטחון, הגזר ומקל הסלרי.",
        "מוסיפים את התימין, האורגנו, הבזיליקום, רסק העגבניות, המלח, הפלפל והסוכר.",
        "מבשלים חצי שעה.",
        "מגישים על מקרונים מבושלים."
      ]
    },
    en: {
      title: "Bolognese Sauce",
      ingredients: [
        "1 onion",
        "3 garlic cloves, crushed",
        "1 chilli, chopped",
        "500 g minced beef",
        "1 carrot, cut into cubes",
        "1 celery stick",
        "Thyme, oregano, basil",
        "2 tins tomato paste",
        "Salt, pepper",
        "1 tsp sugar"
      ],
      steps: [
        "Fry the onion.",
        "Add the garlic, chilli, mince, carrot and celery stick.",
        "Add the thyme, oregano, basil, tomato paste, salt, pepper and sugar.",
        "Cook for half an hour.",
        "Serve over cooked pasta."
      ]
    }
  },

  /* ============================ תוספות / Sides ============================ */
  {
    id: "batzkaniot",
    category: "sides",
    icon: "dumpling.svg",
    image: "", time: "", servings: "",
    he: {
      title: "בצקניות",
      ingredients: ["כוס קמח", "ביצה", "מלח", "פלפל", "1/4 כוס מים"],
      steps: [
        "מערבבים ונותנים לבצק לנוח כרבע שעה.",
        "בעזרת כף מכניסים לתבשיל ומבשלים כרבע שעה."
      ]
    },
    en: {
      title: "Dough Dumplings",
      ingredients: ["1 cup flour", "1 egg", "Salt", "Pepper", "1/4 cup water"],
      steps: [
        "Mix and let the dough rest for about fifteen minutes.",
        "Drop spoonfuls into the stew and cook for about fifteen minutes."
      ]
    }
  },
  {
    id: "kreplach",
    category: "sides",
    icon: "dumpling.svg",
    image: "", time: "", servings: "",
    he: {
      title: "קרפלך",
      ingredients: [
        "לבצק:",
        "2 כוסות קמח",
        "3/4 כוס מים חמימים",
        "1/4 כוס שמן",
        "מלח",
        "למילוי:",
        "1/2 ק\"ג תפוחי אדמה מבושלים",
        "בצל קצוץ ומטוגן"
      ],
      steps: [
        "לשים לבצק אחיד ולתת לו לנוח.",
        "לרסק את תפוחי האדמה המבושלים עם מלח לפירה.",
        "לערבב את הפירה עם הבצל המטוגן."
      ]
    },
    en: {
      title: "Kreplach",
      ingredients: [
        "For the dough:",
        "2 cups flour",
        "3/4 cup warm water",
        "1/4 cup oil",
        "Salt",
        "For the filling:",
        "500 g boiled potatoes",
        "1 onion, chopped and fried"
      ],
      steps: [
        "Knead to a smooth dough and let it rest.",
        "Mash the boiled potatoes with salt.",
        "Mix the mash with the fried onion."
      ]
    }
  },
  {
    id: "lachmaniot-pesach",
    category: "sides",
    icon: "bread.svg",
    image: "", time: "", servings: "",
    he: {
      title: "לחמניות לפסח",
      ingredients: [
        "כוס מים",
        "1/2 חבילה מרגרינה (או חמאה או שמן)",
        "כוס וחצי קמח מצה",
        "5 ביצים",
        "מעט מלח"
      ],
      steps: [
        "מרתיחים את המים, המרגרינה והמלח.",
        "מוסיפים את קמח המצה.",
        "מוסיפים את הביצים אחת-אחת ומערבבים היטב.",
        "יוצרים כדורים.",
        "אופים 40 דקות בחום של 180 מעלות."
      ]
    },
    en: {
      title: "Passover Rolls",
      ingredients: [
        "1 cup water",
        "1/2 pack margarine (or butter or oil)",
        "1 1/2 cups matzo meal",
        "5 eggs",
        "A little salt"
      ],
      steps: [
        "Bring the water, margarine and salt to the boil.",
        "Stir in the matzo meal.",
        "Add the eggs one at a time, mixing well.",
        "Shape into balls.",
        "Bake for 40 minutes at 180°C."
      ]
    }
  },
  {
    id: "kugel-yerushalmi",
    category: "sides",
    icon: "noodles.svg",
    image: "", time: "",
    servings: { he: "5–6 מנות", en: "5–6" },
    he: {
      title: "קוגל ירושלמי",
      ingredients: [
        "400 גרם אטריות דקות אסם",
        "1/2 כוס שמן",
        "כוס סוכר (200 גרם)",
        "1/2 כפית פלפל שחור",
        "3 ביצים",
        "100 גרם צימוקים (לא חובה)"
      ],
      steps: [
        "מבשלים את האטריות לפי ההוראות שעל האריזה, מסננים ולא שוטפים.",
        "במחבת נפרדת מערבבים היטב את השמן והסוכר על אש נמוכה, עד לקבלת קרמל שחום.",
        "יוצקים את הקרמל על האטריות ומערבבים היטב.",
        "מוסיפים את הביצים, הפלפל והצימוקים ומערבבים היטב.",
        "משמנים תבנית 30x20 ס\"מ ושופכים אליה את התערובת.",
        "אופים בחום בינוני של 180 מעלות למשך 45 דקות."
      ]
    },
    en: {
      title: "Jerusalem Kugel",
      ingredients: [
        "400 g fine egg noodles",
        "1/2 cup oil",
        "1 cup sugar (200 g)",
        "1/2 tsp black pepper",
        "3 eggs",
        "100 g raisins (optional)"
      ],
      steps: [
        "Cook the noodles per the packet, drain and do not rinse.",
        "In a separate pan, stir the oil and sugar over low heat until you have a browned caramel.",
        "Pour the caramel over the noodles and mix well.",
        "Add the eggs, pepper and raisins and mix well.",
        "Grease a 30x20 cm tin and pour in the mixture.",
        "Bake at a moderate 180°C for 45 minutes."
      ]
    }
  },

  /* ============================ קינוחים / Desserts ============================ */
  {
    id: "pancake",
    category: "desserts",
    icon: "pancake.png",
    image: "", time: "", servings: "",
    he: {
      title: "פנקייק",
      ingredients: [
        "כוס חלב", "כוס קמח", "1/2 כפית אבקת אפייה",
        "2 כפות שמן", "ביצה", "כף סוכר"
      ],
      steps: [
        "מערבבים יחד ביצה, שמן וחלב.",
        "מוסיפים את שאר המצרכים.",
        "מטגנים בשמן. בתיאבון!"
      ]
    },
    en: {
      title: "Pancakes",
      ingredients: [
        "1 cup milk", "1 cup flour", "1/2 tsp baking powder",
        "2 tbsp oil", "1 egg", "1 tbsp sugar"
      ],
      steps: [
        "Mix the egg, oil and milk together.",
        "Add the rest of the ingredients.",
        "Fry in oil. Enjoy!"
      ]
    }
  },
  {
    id: "papanash",
    category: "desserts",
    icon: "cheese-dumpling.svg",
    image: "", time: "", servings: "",
    he: {
      title: "פפנש",
      ingredients: [
        "2 חבילות גבינה \"כנען\" או \"טוב טעם\"",
        "2 ביצים",
        "3 כפות סולת",
        "30 גרם חמאה",
        "2 כפות תמצית וניל",
        "3 כפות סוכר",
        "קליפת לימון מגוררת"
      ],
      steps: [
        "מערבבים את כל הרכיבים יחד לתערובת אחידה.",
        "יוצרים כדורים ומכניסים למים רותחים.",
        "מבשלים עד שהכדורים צפים, וממשיכים לבשל עוד 3–4 דקות.",
        "מגישים חם עם שמנת חמוצה וריבה."
      ]
    },
    en: {
      title: "Papanași (Cheese Dumplings)",
      ingredients: [
        "2 packs soft white cheese",
        "2 eggs",
        "3 tbsp semolina",
        "30 g butter",
        "2 tbsp vanilla extract",
        "3 tbsp sugar",
        "Grated lemon zest"
      ],
      steps: [
        "Mix all the ingredients into a smooth mixture.",
        "Roll into balls and drop them into boiling water.",
        "Cook until the balls float, then carry on for another 3–4 minutes.",
        "Serve hot with sour cream and jam."
      ]
    }
  },
  {
    id: "agasim-karamel",
    category: "desserts",
    icon: "pear.png",
    image: "", time: "", servings: "",
    he: {
      title: "אגסים בקרמל",
      ingredients: [
        "אגסים",
        "2 כוסות סוכר חום בהיר",
        "4 כוסות יין",
        "1/4 כוס ברנדי",
        "מקל קינמון"
      ],
      steps: [
        "קולפים את האגסים.",
        "מבשלים את היין, הסוכר, הברנדי והקינמון.",
        "מוסיפים את האגסים ומבשלים כ-25 דקות."
      ]
    },
    en: {
      title: "Pears in Caramel",
      ingredients: [
        "Pears",
        "2 cups light brown sugar",
        "4 cups wine",
        "1/4 cup brandy",
        "1 cinnamon stick"
      ],
      steps: [
        "Peel the pears.",
        "Simmer the wine, sugar, brandy and cinnamon.",
        "Add the pears and cook for about 25 minutes."
      ]
    }
  },
  {
    id: "ugiyot-kvaker",
    category: "desserts",
    icon: "cookie.svg",
    image: "", time: "", servings: "",
    he: {
      title: "עוגיות קוואקר (שיבולת שועל)",
      ingredients: [
        "2 כוסות קוואקר",
        "2 כוסות קמח תופח",
        "2 ביצים",
        "כוס שמן",
        "1½ כוסות סוכר חום",
        "1/4 כוס אגוזים",
        "1/4 כוס צימוקים (אם רוצים)"
      ],
      steps: [
        "מערבבים את כל המצרכים יחד.",
        "יוצרים כדורים ולוחצים עליהם קלות.",
        "מניחים בתבנית עם נייר אפייה.",
        "אופים בחום של 180 מעלות למשך 15 דקות."
      ],
      note: "לקצוץ את האגוזים והצימוקים ולהשרות אותם במים רותחים לכמה דקות לפני ההוספה לבצק."
    },
    en: {
      title: "Oat Cookies",
      ingredients: [
        "2 cups rolled oats",
        "2 cups self-raising flour",
        "2 eggs",
        "1 cup oil",
        "1½ cups brown sugar",
        "1/4 cup walnuts",
        "1/4 cup raisins (optional)"
      ],
      steps: [
        "Mix all the ingredients together.",
        "Roll into balls and press them down lightly.",
        "Place on a lined baking tray.",
        "Bake at 180°C for 15 minutes."
      ],
      note: "Chop the walnuts and raisins and soak them in boiling water for a few minutes before adding them to the dough."
    }
  },
  {
    id: "sufganiyot",
    category: "desserts",
    icon: "doughnut.svg",
    image: "", time: "", servings: "",
    he: {
      title: "סופגניות",
      ingredients: [
        "550 גרם קמח רגיל",
        "40 גרם שמרים",
        "כוס חלב פושר",
        "5 כפות סוכר",
        "100 גרם מרגרינה",
        "2 ביצים + 2 חלמונים",
        "2 כפות קוניאק",
        "מלח",
        "1/4 כפית תמצית וניל",
        "ריבה למילוי",
        "שמן עמוק לטיגון, אבקת סוכר לפיזור"
      ],
      steps: [
        "ממיסים את השמרים בכוס חלב פושר עם מעט סוכר, ונותנים לתפוח.",
        "בקערה שמים את הקמח, הסוכר, המרגרינה, הביצים והחלמונים, הקוניאק, הווניל, המלח והשמרים שתפחו.",
        "מוסיפים את החלב לאט לאט תוך כדי בחישה.",
        "לשים לבצק חלק, מכסים ונותנים לתפוח.",
        "יוצרים עיגולים ונותנים לתפוח שוב.",
        "מטגנים בשמן עמוק.",
        "ממלאים בריבה ומפזרים אבקת סוכר."
      ]
    },
    en: {
      title: "Sufganiyot (Jam Doughnuts)",
      ingredients: [
        "550 g plain flour",
        "40 g fresh yeast",
        "1 cup lukewarm milk",
        "5 tbsp sugar",
        "100 g margarine",
        "2 eggs + 2 yolks",
        "2 tbsp cognac",
        "Salt",
        "1/4 tsp vanilla extract",
        "Jam for filling",
        "Oil for deep frying, icing sugar for dusting"
      ],
      steps: [
        "Dissolve the yeast in the cup of lukewarm milk with a little sugar and leave it to rise.",
        "In a bowl put the flour, sugar, margarine, eggs and yolks, cognac, vanilla, salt and the risen yeast.",
        "Add the milk slowly, stirring as you go.",
        "Knead to a smooth dough, cover and leave to rise.",
        "Shape into rounds and leave to rise again.",
        "Deep fry.",
        "Fill with jam and dust with icing sugar."
      ]
    }
  },
  {
    id: "minciunele",
    category: "desserts",
    icon: "pretzel.png",
    image: "", time: "", servings: "",
    he: {
      title: "פרפרים (Minciunele)",
      ingredients: [
        "4 ביצים",
        "כף סוכר",
        "כף כרמל או קוניאק",
        "כף שמן",
        "כף שמנת חמוצה",
        "300 גרם קמח רגיל",
        "שמן עמוק לטיגון, אבקת סוכר לפיזור"
      ],
      steps: [
        "יוצרים בצק מהביצים, הסוכר, הקוניאק או הכרמל, השמן, השמנת החמוצה והקמח.",
        "לשים ונותנים לבצק לנוח.",
        "מרדדים דק וחותכים למלבנים.",
        "בכל מלבן עושים חריץ באמצע ומעבירים דרכו את אחד הצדדים, ליצירת צורת קשר או פרפר.",
        "מטגנים בשמן עמוק ומפזרים אבקת סוכר."
      ]
    },
    en: {
      title: "Minciunele (Bow Ties)",
      ingredients: [
        "4 eggs",
        "1 tbsp sugar",
        "1 tbsp sweet wine or cognac",
        "1 tbsp oil",
        "1 tbsp sour cream",
        "300 g plain flour",
        "Oil for deep frying, icing sugar for dusting"
      ],
      steps: [
        "Make a dough from the eggs, sugar, cognac or sweet wine, oil, sour cream and flour.",
        "Knead and let the dough rest.",
        "Roll out thinly and cut into rectangles.",
        "Cut a slit in the middle of each rectangle and pull one end through it, to form a knot or bow.",
        "Deep fry and dust with icing sugar."
      ]
    }
  }
];
