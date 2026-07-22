const icons = ["🥇", "🏅", "🏆", "🦡"];
const icon = icons[Math.floor(Math.random() * icons.length)];

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href =
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>" +
    icon +
    "</text></svg>";

document.head.appendChild(favicon);


var BADGERS = [
  {
    id: "hidden-badge-hub",
    name: "Hidden Badge Hub",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/15484862973/Hidden-Badge-Hub",
    milestones: [
    { name: "Hidden Badge 61", target: 50 },
    ],
    sheetUrl: "",
    badges: [
      {link: "https://www.roblox.com/badges/2124472953/You-have-driven-1-000-miles",},
      {link: "https://www.roblox.com/badges/2125206535/Witness-The-Nuke"},
      {link: "https://www.roblox.com/badges/2273926518094043/Hidden-Badge-3"},
      {link: "https://www.roblox.com/badges/2153303182/Just-Desserts"},
      {link: "https://www.roblox.com/badges/2125766083/200-Draws-Completed"},
      {link: "https://www.roblox.com/badges/2130910016/Balloon-Fridge"},
      {link: "https://www.roblox.com/badges/2144905124/IMPRESSIVE"},
      {link: "https://www.roblox.com/badges/2124439928/Shipwreck-Bay"},
      {link: "https://www.roblox.com/badges/2124871492/First-Win"},
      {link: "https://www.roblox.com/badges/2124913147/No-u"},
      {link: "https://www.roblox.com/badges/2128202645/You-toppled-the-tower"},
      {link: "https://www.roblox.com/badges/2124765933/Level-20"},
      {link: "https://www.roblox.com/badges/2151997834/You-Pushed-the-Button"},
      {link: "https://www.roblox.com/badges/2129793326/Final-Blow"},
      {link: "https://www.roblox.com/badges/2125767760/Artifact-Returned-Badge"},
      {link: "https://www.roblox.com/badges/1188525255176965/Hidden-Badge-16"},
      {link: "https://www.roblox.com/badges/2129473448/PASSED-THE-BORDER"},
      {link: "https://www.roblox.com/badges/291411595824611/Hidden-Badge-18"},
      {link: "https://www.roblox.com/badges/2152349949/Last-Dropper"},
      {link: "https://www.roblox.com/badges/2130232184/British-Bingo-Full-House"},
      {link: "https://www.roblox.com/badges/2124618868/Pick-up-something-at-a-meteorite"},
      {link: "https://www.roblox.com/badges/2130232659/Light-Master"},
      {link: "https://www.roblox.com/badges/2124758664/You-Beat-Difficult"},
      {link: "https://www.roblox.com/badges/2153849644/25-Rebirths"},
      {link: "https://www.roblox.com/badges/2148064179/Decompolize"},
      {link: "https://www.roblox.com/badges/2172376888202828/Beat-World-4"},
      {link: "https://www.roblox.com/badges/2124921452/Youve-beaten-Timebreaker"},
      {link: "https://www.roblox.com/badges/425693066896023/Hidden-Badge-28"},
      {link: "https://www.roblox.com/badges/2124571901/Zone-9-Cleared"},
      {link: "https://www.roblox.com/badges/2126433538/Complete-Floor-81-Logos-02"},
      {link: "https://www.roblox.com/badges/2153413336/20-Levels"},
      {link: "https://www.roblox.com/badges/3205440246396686/Chemistry-Master"},
      {link: "https://www.roblox.com/badges/2152397814/Tutorial"},
      {link: "https://www.roblox.com/badges/2125827738/BEAT-THE-BOSS-ANY"},
      {link: "https://www.roblox.com/badges/2124443955/Backdoored"},
      {link: "https://www.roblox.com/badges/2124577036/Legendary"},
      {link: "https://www.roblox.com/badges/1988781110526053/Hidden-Badge-37"},
      {link: "https://www.roblox.com/badges/2153094113/You-Won"},
      {link: "https://www.roblox.com/badges/1804218231889281/Completed-cruise"},
      {link: "https://www.roblox.com/badges/2452194598689830/Rank-12"},
      {link: "https://www.roblox.com/badges/4443219287842754/Hidden-Badge-41"},
      {link: "https://www.roblox.com/badges/2130010662/You-Beat-Extreme"},
      {link: "https://www.roblox.com/badges/2152838790/whats-this"},
      {link: "https://www.roblox.com/badges/2130450566/The-Cycle-Continues"},
      {link: "https://www.roblox.com/badges/2150515578/Intermediate-Grinder"},
      {link: "https://www.roblox.com/badges/2130052630/You-Win"},
      {link: "https://www.roblox.com/badges/69408917043787/Shayphs-Secret"},
      {link: "https://www.roblox.com/badges/4307401698687448/Hidden-Badge-48"},
      {link: "https://www.roblox.com/badges/2141554880/Colored-Domino-Rally"},
      {link: "https://www.roblox.com/badges/1629552005250540/Long-happy-life"},
      {link: "https://www.roblox.com/badges/2152487890/Totem-Master"},
      {link: "https://www.roblox.com/badges/2151023846/Oh-god-why"},
      {link: "https://www.roblox.com/badges/2130069511/Completed-Mob-Psycho-100-Characters-Quiz"},
      {link: "https://www.roblox.com/badges/2126693306/secret-ending"},
      {link: "https://www.roblox.com/badges/2888438624546691/FNaF-1-noche-5-completada"},
      {link: "https://www.roblox.com/badges/2145639961/Can-You-Find-Me"},
      {link: "https://www.roblox.com/badges/2142543314/16-Map-Streak"},
      {link: "https://www.roblox.com/badges/3762638419632159/First-Collect"},
      {link: "https://www.roblox.com/badges/87198892618062/HIDE-Ending"},
      {link: "https://www.roblox.com/badges/809496256748595/Fatal-Ending"},
      

    ]
  },
  {
    id: "the-timeless-temple",
    name: "The Timeless Temple",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/14482612509/The-Timeless-Temple",
    milestones: [
      { name: "Beginner Grinder", target: 10 },
      { name: "Intremediate Grinder", target: 20 },
      { name: "Advanced Grinder", target: 30 },
      { name: "Pro Grinder", target: 40 },
      { name: "BEST GRINDER", target: 50 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=800030922#gid=800030922",
    badges: [
    ]
  },
  {
    id: "the-impossible-badge-challenge-hub",
    name: 'The "Impossible" Badge Challenge Hub',
    difficulty: "Impossible",
    gameLink: "https://www.roblox.com/games/15218996446/The-Impossible-Badge-Challenge-Hub",
    milestones: [
      { name: "1/4", target: 25 },
      { name: "1/2", target: 50 },
      { name: "3/4", target: 75 },
      { name: "Done!", target: 100 },    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=715273659#gid=715273659",
    badges: [
    ]
  },
  {
    id: "a-timeless-adventure",
    name: 'A Timeless Adventure',
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/15742018443/A-Timeless-Adventure",
    milestones: [
      { name: "The Best Astronaut", target: 100 },
      { name: "You collected them all...", target: 125 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1289847676#gid=1289847676",
    badges: [
    ]
  },
  {
    id: "badge-advent-calendar-2023-renewed",
    name: 'Badge Advent Calendar 2023: Renewed',
    difficulty: "Medium",
    gameLink: "https://www.roblox.com/games/109364326386642/Badge-Advent-Calendar-2023-Renewed",
    milestones: [
      { name: "Advent Calendar Complete!", target: 24 }
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1267867716#gid=1267867716",
    badges: [
    ]
  },
  {
    id: "dystopian-badger",
    name: 'Dystopian Badger',
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/79757130917226/Dystopian-Badger",
    milestones: [
      { name: "25", target: 25 },
      { name: "50", target: 50 },
      { name: "75", target: 75 },
      { name: "100", target: 100 }
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1225049511#gid=1225049511",
    badges: [
    ]
  },
  {
    id: "trustys-badger",
    name: "Trusty's Badger",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/79757130917226/Dystopian-Badger",
    milestones: [
      { name: "One Quarter of the way!", target: 3 },
      { name: "Halfway there!", target: 6 },
      { name: "3/4ths done!", target: 9 },
      { name: "You beat the badger!", target: 12 }
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=182001533#gid=182001533",
    badges: [
    ]
  },
  {
    id: "badge-challenge-leaderboard-remastered",
    name: "Badge Challenge Leaderboard: Remastered",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/131064432158124/Badge-Challenge-Leaderboard-Remastered",
    milestones: [
      { name: "95 Challenges Completed!", target: 90 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1967760918#gid=1967760918",
    badges: [
    ]
  },
  {
    id: "steamboat-hub",
    name: "Steamboat Hub",
    difficulty: "Medium",
    gameLink: "https://www.roblox.com/games/15855729939/Steamboat-Hub-BADGE-HUNT",
    milestones: [
      { name: "Steamboat Seeker", target: 13 },
    ],
    sheetUrl: "",
    badges: [
      { link: "https://www.roblox.com/badges/649647907/Two-of-A-Kind",
        type: "Easy"},
      { link: "https://www.roblox.com/badges/132919329/Rookie-Survivor-5",
        type: "Easy"},
      { link: "https://www.roblox.com/badges/2149200010/Beat-a-World",
        type: "Easy" },
      { link: "https://www.roblox.com/badges/2124459197/Good-Boy",
        type: "Easy" },
      { link: "https://www.roblox.com/badges/18268422/Pyramid",
        type: "Easy" },
      { link: "https://www.roblox.com/badges/2124708337/Control-Chapter-III-Completed",
        type: "Medium" },
      { link: "https://www.roblox.com/badges/2124758364/20-Streak",
        type: "Medium" },
      { link: "https://www.roblox.com/badges/2124782965/Reach-512",
        type: "Medium" },
      { link: "https://www.roblox.com/badges/968392659/12-Secret-Trials",
        type: "Medium" },
      { link: "https://www.roblox.com/badges/2124540781/Completed-Plant-True-Ending",
        type: "Hard" },
      { link: "https://www.roblox.com/badges/2124859107/Adventurers-Path",
        type: "Hard" },
      { link: "https://www.roblox.com/badges/2124530689/Deviled-Eggs",
        type: "Hard" },
      { link: "https://www.roblox.com/badges/2151600779/You-Survived-DAY-20",
        type: "Hard" },
    ]
  },
  {
    id: "the-edge-of-universe",
    name: "the edge of universe",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/15311652955/the-edge-of-universe",
    milestones: [
      { name: "ANOMALIES EXPUNGED", target: 50 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=753062007#gid=753062007",
    badges: [
    ]
  },
  {
    id: "badger-badge-challenge",
    name: "Badger Badge Challenge",
    difficulty: "Difficult",
    gameLink: "https://www.roblox.com/games/13597624399/Badger-Badge-Challenge",
    milestones: [
      { name: "Badger King", type: "Badger King", target: 10 },
      { name: "Noob King", type: "Noob King", target: 10 },
    ],
    sheetUrl: "",
    badges: [
      { link: "https://www.roblox.com/badges/1910092242854660/You-have-75000-valuable-badges" ,
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/2124818382/You-have-10000-badges" ,
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/2152152675/Completed-All-Activities",
        type: ["Badger King","Noob King"],
        typeColor: "Purple"
      },
      { link: "https://www.roblox.com/badges/2124856810/All-nighter",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/1491870514/Beat-Speed-Run-4-Three-Times", 
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/545796851/21-Streak-Hardcore",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/378276512/LEVEL-B-SURVIVOR" ,
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/220791551/Hardcore-Hierophant",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/174606278/Hardcore" ,
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/2129021840/Sandswept-Ruins-Crazy",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/2142493545/Oriental-Grove-Normal" ,
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/2149492872/Soldats-de-ma-Vieille-Garde",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/2124856705/Sloth",
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/243423355/Pro",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/174555962/Double-Digits", 
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/2124533257/Slayer",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/2124533255/Gladiator",
        type: "Noob King",
        typeColor: "Blue"
      },
      { link: "https://www.roblox.com/badges/2125365440/Talented",
        type: "Badger King",
        typeColor: "Red"
      },
      { link: "https://www.roblox.com/badges/2125364300/Beat-The-Tower-of-A-Simple-Time" ,
        type: "Noob King",
        typeColor: "Blue"
      },
    ]
  },
  {
    id: "drakes-badger-volume-2",
    name: "Drake's Badger Volume 2",
    difficulty: "Medium",
    gameLink: "hhttps://www.roblox.com/games/15897736145/Drakes-Badger-Volume-2",
    milestones: [
      { name: "Volume 2 Completionist", target: 19 }
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=432088625#gid=432088625",
    badges: [
    ]
  },
  {
    id: "the-epic-badger",
    name: "The Epic Badger",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/15882832501/The-Epic-Badger",
    milestones: [
      { name: "25", target: 25 },
      { name: "50", target: 50 },
      { name: "75", target: 75 },
      { name: "You Finished The Badger", target: 100 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=2107104639#gid=2107104639",
    badges: [
    ]
  },
  {
    id: "the-noobs-farthead-badger",
    name: "The Noob's Farthead Badger",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/16008796752/A-Noobs-Farthead-Badger",
    milestones: [
      { name: "Noob Ascension Completed", target: 33 }
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1323941283#gid=1323941283",
    badges: [

    ]
  },
  {
    id: "the-tome-of-the-sea-badger-remastered",
    name: "The Tome Of The Sea Badger: Remastered",
    difficulty: "Intense",
    gameLink: "https://www.roblox.com/games/111592146528633/Tome-Of-The-Sea-Badger-Remastered",
    milestones: [
      { name: "Winner!", target: 11 }
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=534955597#gid=534955597",
    badges: [
    ]
  },
  {
    id: "tbobhb-restored",
    name: "Trials Badge of Badger Horror Badger: Restored",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/82123279561370/Trials-Badger-of-Badger-Horror-Badger-Restored",
    milestones: [
      { name: "Completed Badger the Badger Horror Badger", target: 26 }
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1528502579#gid=1528502579",
    badges: [
    ]
  },
  {
    id: "hypers-random-badger",
    name: "Hyper's Random Badger",
    difficulty: "Difficult",
    gameLink: "https://www.roblox.com/games/16250248248/Hypers-random-badger",
    milestones: [
      { name: "COMPLETED", target: 44 }
    ],
    sheetUrl: "",
    badges: [
      { link: "https://www.roblox.com/badges/2900919640600010/Speed-Running" ,
        type: "Hunt"
      },
      { link: "https://www.roblox.com/badges/2152864192/Friend",
        type: "Hunt"
      },
      { link: "https://www.roblox.com/badges/1941710159773078/SALVATION",
        type: "idk"
      },
      { link: "https://www.roblox.com/badges/2124803716/Center-of-the-Universe",
        type: "Wait (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2148587829/unnamed",
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2126438257/Savior-of-the-Waking-World",
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2127816588/Island-Conqueror",
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2125047873/FC-15-Songs",
        type: "Skill/Grind (Valuable)"
      },
      { link: "https://www.roblox.com/badges/2125920081/worthy",
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2582890951280192/Full-Combo-GET-BACK-HERE",
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2124880144/Too-Much-Attempts-Hat" ,
        type: "Grind (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2145568258/FEED-ME",
        type: "Hunt"
      },
      { link: "https://www.roblox.com/badges/2124511924/The-Lab", 
        type: "Hunt"
      },
      { link: "https://www.roblox.com/badges/2148332672/secret", 
        type: "Hunt"
      },
      { link: "https://www.roblox.com/badges/2146115588/Leap-of-faith", 
        type: "Grind/Hunt"
      },
      { link: "https://www.roblox.com/badges/1258433330394917/GEC-TREE", 
        type: "Skill/Hunt (lEGaCy)"
      },
      { link: "https://www.roblox.com/badges/2147746418/Finished-Obby", 
        type: "Skill/Teamwork"
      },
      { link: "https://www.roblox.com/badges/2128728493/EVEN-BRIGHTER", 
        type: "Skill/Grind (Valuable)"
      },
      { link: "https://www.roblox.com/badges/2124843372/Escape-To-The-Vents", 
        type: "Hunt (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2142659217/BRUTAL", 
        type: "Skill (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2124934403/100-WINS", 
        type: "Grind (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2130463322/Intruder-Plushie", 
        type: "Hunt (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2124445497/Reset", 
        type: "Skill/Grind (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2125443148/Victory-Classic", 
        type: "Teamwork/Grind or Skill"
      },
      { link: "https://www.roblox.com/badges/2124464341/unnamed", 
        type: "Skill (Legacy)"
      },
      { link: "https://www.roblox.com/badges/2124697083/Nightmare", 
        type: "Skill (Legacy)"
      },
      { link: "https://www.roblox.com/badges/4424033740102763/GLEE-png", 
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2129269324/Get-your-dad-back", 
        type: "Grind"
      },
      { link: "https://www.roblox.com/badges/543704354124514/Kill-Streak", 
        type: "Skill/Grindd"
      },
      { link: "https://www.roblox.com/badges/398792112899965/unnamed", 
        type: "Hunt"
      },
      { link: "https://www.roblox.com/badges/491385187959992/The-Exit-Ending", 
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2153149595/watch-v-0SdP-pecXmk", 
        type: "Wait/Skill"
      },
      { link: "https://www.roblox.com/badges/2124519535/Defeat-Guest-666", 
        type: "Skill/Teamwork (Legacy)"
      },
      { link: "https://www.roblox.com/badges/3789351804790107/Tower-Clear", 
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2124873711/Scorionik-3-Why", 
        type: "Hunt/Skill"
      },
      { link: "https://www.roblox.com/badges/777704203481915/Wallhopper", 
        type: "Skill (yet again)"
      },
      { link: "https://www.roblox.com/badges/3339603314201812/Huge-Mistake", 
        type: "Grind"
      },
      { link: "https://www.roblox.com/badges/967319593419218/Golden-Apple", 
        type: "Hunt (Valuable)"
      },
      { link: "https://www.roblox.com/badges/2126293797/amogus-event", 
        type: "Skill"
      },
      { link: "https://www.roblox.com/badges/2141411693/Medium", 
        type: "Knowledge"
      },
      { link: "https://www.roblox.com/badges/2536833201489928/Beat-Intelligent-Brick-Tower", 
        type: "Knowledge/Skill"
      },
      { link: "https://www.roblox.com/badges/636009941927352/HARD-Escaped-MrBeast-Deadliest-Lasers", 
        type: "Skill or Wait (Valuable)"
      },
      { link: "https://www.roblox.com/badges/2129623915/Skilled-Cook", 
        type: "Misc"
      },
      { link: "https://www.roblox.com/badges/455412109575072/Minesweeper-Final-Boss", 
        type: "Teamwork"
      },
    ]
  },
  {
    id: "badgers-quest-saving-the-village",
    name: "Badgers Quest: Saving The Village",
    difficulty: "Difficult",
    gameLink: "https://www.roblox.com/games/16207149085/Badgers-Quest-Saving-The-Village",
    milestones: [
      { name: "Saved the village", target: 50 },
      { name: "Ultra saved the village", target: 100}
    ],
    sheetUrl: "",
    badges: [
      { link: "https://www.roblox.com/badges/2126333442/True-Pacifist" },
      { link: "https://www.roblox.com/badges/2125676901/The-End" },
      { link: "https://www.roblox.com/badges/2142290335/Defeated-Heallastic" },
      { link: "https://www.roblox.com/badges/2142354378/Deadly-lane" },
      { link: "https://www.roblox.com/badges/2149098319/Badlands-Conquered" },
      { link: "https://www.roblox.com/badges/2126438294/Friends-are-optional" },
      { link: "https://www.roblox.com/badges/2126438292/Drainage-Pump" },
      { link: "https://www.roblox.com/badges/2153897191/Rank-24" },
      { link: "https://www.roblox.com/badges/2153897366/Defeat-ERADICATOR-MK-II" },
      { link: "https://www.roblox.com/badges/3416298406790691/Defeat-Revived-Plague-Doctor" },
      { link: "https://www.roblox.com/badges/2152605023/Defeat-Strawberry-Squirt-Hard" },
      { link: "https://www.roblox.com/badges/2124529593/Beat-Knoddys-Resort" },
      { link: "https://www.roblox.com/badges/2994308534711463/Boisterous-Defeated" },
      { link: "https://www.roblox.com/badges/1131931099585763/Vociferous-Defeated" },
      { link: "https://www.roblox.com/badges/2132544688/Defeat-Flame-Vandalistor" },
      { link: "https://www.roblox.com/badges/2147595908/Defeat-Auraxis" },
      { link: "https://www.roblox.com/badges/2895821686227884/Defeated-Miner-Boss" },
      { link: "https://www.roblox.com/badges/1730479501702047/Defeated-The-Oligarch" },
      { link: "https://www.roblox.com/badges/2124778871/Mining-Madness" },
      { link: "https://www.roblox.com/badges/2124771675/Beat-Hard-Mode" },
      { link: "https://www.roblox.com/badges/2124869461/Professional" },
      { link: "https://www.roblox.com/badges/2124851283/Army-Conqueror" },
      { link: "https://www.roblox.com/badges/2124853674/Extensive-Experience" },
      { link: "https://www.roblox.com/badges/2124863135/Peace-Discarded" },
      { link: "https://www.roblox.com/badges/2124872156/Hard-Mode" },
      { link: "https://www.roblox.com/badges/2124872152/Normal-Mode" },
      { link: "https://www.roblox.com/badges/2129234537/Defeated-Wox-The-Fox" },
      { link: "https://www.roblox.com/badges/1270412135564244/unnamed" },
      { link: "https://www.roblox.com/badges/2128023939/Golden-Conqueror" },
      { link: "https://www.roblox.com/badges/2128081151/Checkmate" },
      { link: "https://www.roblox.com/badges/2127004279/Victory-Hard" },
      { link: "https://www.roblox.com/badges/2125443148/Victory-Classic" },
      { link: "https://www.roblox.com/badges/126934827121780/MEDIUM-MODE" },
      { link: "https://www.roblox.com/badges/3784182493116852/EASY-MODE" },
      { link: "https://www.roblox.com/badges/2124759334/Beat-Overlord" },
      { link: "https://www.roblox.com/badges/2124657409/Encounter-WAVE13" },
      { link: "https://www.roblox.com/badges/2153248397/Eradicator-of-Tanks" },
      { link: "https://www.roblox.com/badges/2153248649/Overseer-Defeated" },
      { link: "https://www.roblox.com/badges/2153248688/You-Shall-Pass" },
      { link: "https://www.roblox.com/badges/2125175918/Beat-Standard" },
      { link: "https://www.roblox.com/badges/2145242479/Easy-Level-Triumph" },
      { link: "https://www.roblox.com/badges/2145819044/Hard-Level-Triumph" },
      { link: "https://www.roblox.com/badges/2151886213/Mech-Moderate" },
      { link: "https://www.roblox.com/badges/2141787589/SUS" },
      { link: "https://www.roblox.com/badges/2143234188/you-beat-a-map" },
      { link: "https://www.roblox.com/badges/2145829690/Hard-Difficulty" },
      { link: "https://www.roblox.com/badges/2142838848/What" },
      { link: "https://www.roblox.com/badges/2124707009/Melting-Downfall" },
      { link: "https://www.roblox.com/badges/2124829451/Elite-Defender" },
      { link: "https://www.roblox.com/badges/2129286465/Chapter-2-A-Brother-In-Need" },
      { link: "https://www.roblox.com/badges/2127282010/Completed-Lighthouse-Isle" },
      { link: "https://www.roblox.com/badges/2124639593/Defeat-Void" },
      { link: "https://www.roblox.com/badges/2125530336/winner" },
      { link: "https://www.roblox.com/badges/2142221990/Defeat-Cadaver" },
      { link: "https://www.roblox.com/badges/2129385819/Defeat-Emerald-King" },
      { link: "https://www.roblox.com/badges/2129385842/Defeat-Cold-Queen" },
      { link: "https://www.roblox.com/badges/2124521300/Medium-Mode-Victory" },
      { link: "https://www.roblox.com/badges/3593905551745061/Map-Conqueror" },
      { link: "https://www.roblox.com/badges/1771132574429077/Deep-Space" },
      { link: "https://www.roblox.com/badges/2127232547/Triumph-Easy" },
      { link: "https://www.roblox.com/badges/2127232550/Triumph-Normal" },
      { link: "https://www.roblox.com/badges/2125307993/Level-5" },
      { link: "https://www.roblox.com/badges/3696739261029577/Destroyer-Destroys" },
      { link: "https://www.roblox.com/badges/4059215921051653/Power-Of-The-Magic" },
      { link: "https://www.roblox.com/badges/2126716001/Triumph-Molten-Mode" },
      { link: "https://www.roblox.com/badges/2126060017/Triumph-Easy-Mode" },
      { link: "https://www.roblox.com/badges/2127770738/King" },
      { link: "https://www.roblox.com/badges/2124524014/All-Eras" },
      { link: "https://www.roblox.com/badges/2124567796/Hades" },
      { link: "https://www.roblox.com/badges/2128928900/air-pollution" },
      { link: "https://www.roblox.com/badges/2130219218/Defeated-Emperor-of-Flames" },
      { link: "https://www.roblox.com/badges/2130250677/Solo-Dead-Straight-No-Sniper-And-Lava-Mortar" },
      { link: "https://www.roblox.com/badges/2124863139/Level-15" },
      { link: "https://www.roblox.com/badges/2124825572/Beat-Hard-Mode" },
      { link: "https://www.roblox.com/badges/2129003132/Touch-grass" },
      { link: "https://www.roblox.com/badges/2124920139/Chapter-One" },
      { link: "https://www.roblox.com/badges/4164152478817339/Classic-Honor" },
      { link: "https://www.roblox.com/badges/134713150706632/Pre-Royal-Flush-Honor" },
      { link: "https://www.roblox.com/badges/3610480107801137/April-Fools-Honor" },
      { link: "https://www.roblox.com/badges/2124488305/Win-5" },
      { link: "https://www.roblox.com/badges/2124488310/Level-5" },
      { link: "https://www.roblox.com/badges/2124879786/Wave-20" },
      { link: "https://www.roblox.com/badges/2124879503/Epic-Unit" },
      { link: "https://www.roblox.com/badges/2127245442/Level-10-Badge" },
      { link: "https://www.roblox.com/badges/2127366804/Aquatic-Badge" },
      { link: "https://www.roblox.com/badges/2153177016/FLOOR-4" },
      { link: "https://www.roblox.com/badges/403915368087704/Skull-Shot" },
      { link: "https://www.roblox.com/badges/781819748332116/The-Glitch" },
      { name: "MVP",
        game: "Statues Defenders GO!",
        description: "badge disabled i think?"
      },
      { link: "https://www.roblox.com/badges/2143562855/Toy-Time" },
      { link: "https://www.roblox.com/badges/2143559037/Level-10" },
      { link: "https://www.roblox.com/badges/2144020158/Upgraded" },
      { link: "https://www.roblox.com/badges/2144020343/Builder" },
      { link: "https://www.roblox.com/badges/2141842556/Overthrown" },
      { link: "https://www.roblox.com/badges/2152662630/Rattled" },
      { link: "https://www.roblox.com/badges/2127672531/A-Truly-Special-Squad" },
      { link: "https://www.roblox.com/badges/2127531654/Terminated" },
      { 
        name: "Terminated",
        image: "https://tr.rbxcdn.com/180DAY-c2416252f1e41acb5a0ba5b0d2a061eb/420/420/Image/Png/noFilter",
        game: "Visionary Squad",
        description: "theres supposed to be 2 terminated badge cuz idk link above btw"
      },
      { link: "https://www.roblox.com/badges/2125198276/It-isnt-that-easy" },
      { link: "https://www.roblox.com/badges/2125198158/Malfunction" },
    ]
  },
  {
    id: "indepth",
    name: "INDEPTH",
    difficulty: "Medium",
    gameLink: "https://www.roblox.com/games/16250967888/INDEPTH",
    milestones: [
      { name: "badged", target: 10 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=2110063465#gid=2110063465",
    badges: [
    ]
  },
  {
    id: "badge-island-challenges",
    name: "Badge Island Challenges",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/13666913701/Badge-Island-Challenges",
    milestones: [
      { name: "Ascended Collector", target: 10 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=845663609#gid=845663609",
    badges: [
    ]
  },
  {
    id: "the-epic-badger-2",
    name: "The Epic Badger 2",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/16466263388/The-Epic-Badger-2",
    milestones: [
      { name: "25 Badges", target: 25 },
      { name: "50 Badges", target: 50 },
      { name: "75 Badges", target: 75 },
      { name: "100 Badges", target: 100 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=391262152#gid=391262152",
    badges: [
    ]
  },
  {
    id: "zek-badger",
    name: "zek badger",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/16525404699/zek-badger",
    milestones: [
      { name: "you won zek's badger!", target: 25 },
      { name: "true completionist", target: 27 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1057868095#gid=1057868095",
    badges: [
    ]
  },
  {
    id: "skull-kids-final-resting-place",
    name: "Skull Kids Final Resting Place",
    difficulty: "Medium",
    gameLink: "https://www.roblox.com/games/145010024/Skull-Kids-Final-Resting-Place",
    milestones: [
      { name: "Skull Kids Final Resting Place", target: 18 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=913253006#gid=913253006",
    badges: [
    ]
  },
  {
    id: "badger-of-true-skill",
    name: "Badger of True Skill",
    difficulty: "Intense",
    gameLink: "https://www.roblox.com/games/16072593451/Badger-of-True-Skill",
    milestones: [
      { name: "COMPLETED EASY", type: "Easy", target: 12 },
      { name: "COMPLETED MEDIUM", type: "Medium", target: 8 },
      { name: "COMPLETED HARD", type: "Hard", target: 5 },
      { name: "COMPLETED INSANE", type: "Insane", target: 3 },
      { name: "100% Badges", target: 28 },
    ],
    sheetUrl: "",
    badges: [
      { link: "https://www.roblox.com/badges/2124476827/Blue-Moon-Crazy",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2142542882/100-Buttons",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2150333486/Cleared-Floor-1-on-Challenge-Mode",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2135317177/Cold-Front",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2124930589/Blood-Hour",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2124444713/Just-Business",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2124492732/Delinquent-Destroyer",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2128140926/unnamed",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2146028394/Race-Winner",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/313404459/Untouchable",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2124634305/Challenge-Winner",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/1803062058/True-Star",
        type: "Easy",
        typeColor: "#78ffb5" },
      { link: "https://www.roblox.com/badges/2125416775/Beat-The-Steeple-of-Flourishing-Wastelands",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/2124451982/Gamemode-Expert",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/2148828573/Self-Reflection",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/2126252906/The-Nightmare-is-Over",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/2144556835/goober",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/2146379279/Level-11",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/2151599261/The-Hive",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/1171773195554163/FNaF-4-The-End",
        type: "Medium",
        typeColor: "#fff178" },
      { link: "https://www.roblox.com/badges/3361349637278045/You-beat-Undersea-Utopia",
        type: "Hard",
        typeColor: "#ff8c78" },
      { link: "https://www.roblox.com/badges/2124901672/Coneclusion",
        type: "Hard",
        typeColor: "#ff8c78" },
      { link: "https://www.roblox.com/badges/2124898941/crackedsweeper",
        type: "Hard",
        typeColor: "#ff8c78" },
      { link: "https://www.roblox.com/badges/2124874449/Elite-Aberration-K-O",
        type: "Hard",
        typeColor: "#ff8c78" },
      { link: "https://www.roblox.com/badges/2124863990/winner",
        type: "Hard",
        typeColor: "#ff8c78" },
      { link: "https://www.roblox.com/badges/2153658978/Infinite-Power",
        type: "Insane",
        typeColor: "#8178ff" },
      { link: "https://www.roblox.com/badges/2128256476/Overtime",
        type: "Insane",
        typeColor: "#8178ff" },
      { link: "https://www.roblox.com/badges/2124694495/Round-50",
        type: "Insane",
        typeColor: "#8178ff" },
    ]
  },
  {
    id: "beach-badger",
    name: "Beach Badger",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/15902252385/Beach-Badger",
    milestones: [
      { name: "You win!", target: 50 },

    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=2085801816#gid=2085801816",
    badges: [
    ]
  },
  {
    id: "heavenly-badger",
    name: "Heavenly Badger",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/16528432132/Heavenly-Badger",
    milestones: [
      { name: "Angel 👼", target: 55 },
      { name: "TRUE Angel 😇", target: 111 },

    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1034632202#gid=1034632202",
    badges: [
    ]
  },
  {
    id: "oranges-badge-hunt",
    name: "Orange's Badge Hunt",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/7040175571/Oranges-Badge-Hunt",
    milestones: [
      { name: "Completed 21 badges!", target: 21 },
      { name: "Completed 42 badges!", target: 42 },

    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1431939068#gid=1431939068",
    badges: [
    ]
  },
  {
    id: "badge-hunt-classic",
    name: "Badge Hunt: Classic",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/17498322333/Badge-Hunt-Classic",
    milestones: [
      { name: "You have obtained 22 badges!", target: 22 },
      { name: "You have obtained 44 badges!", target: 44 },
      { name: "You have obtained 66 badges!", target: 66 },
      { name: "You have obtained 83 badges!", target: 83 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1596603740#gid=1596603740",
    badges: [
    ]
  },
  {
    id: "collab-badge-challenge",
    name: "Collab Badge Challenge",
    difficulty: "Intense",
    gameLink: "https://www.roblox.com/games/118218452057523/Collab-Badge-Challenge",
    milestones: [
      { name: "Completed Retro's Badger!", type: "RETRO", target: 26 },
      { name: "Completed Die's Badger!", type: "DIE", target: 26 },
      { name: "Completed 72's Badger!", type: "72", target: 26 },
      { name: "Completed Angry's Badger!", type: "ANGRY", target: 26 },
      { name: "Completed Nwelz' Badger!", type: "NWELZ", target: 10 },
      { name: "Half-way into the badger!", target: 50 },
      { name: "YOU COMPLETED THE COLLAB BADGER!!!!", target: 100 },
      { name: "TRULY 100% THE COLLAB BADGER!!", target: 104 },
    ],
    sheetUrl: "",
    badges: [
        { link: "https://www.roblox.com/badges/2124723458/Ascension-10", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2153035365124734/winnar", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2124923772/Finish-tutorial-in-less-100-seconds", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/1803094691/Seen-it-All", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2127482262/Completed-31-40", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2125687088/6-The-Infectious-I", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2148731159/Its-Not-Over", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/3115715820754562/One-for-you-One-for-me-One-for-the-team", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2125419280/Beat-Your-First-Soul-Crushing-Tower", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2124859114/Cruel-Marathon", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/3167096293800107/Youre-Awesome", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2129388347/Streak-of-100", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/723524988343419/Cataloguer", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2146486251683686/25-boss-Pts", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/3538759526577723/Voluntary-Suffering", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2925585058424624/TRUE-Scope-1-Tower-Rush-All-Jumps", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2186782371074590/Beat-the-Great-Citadel-of-Ring-3", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2124661010/Block-9-Completed", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2128404297/Ultra-Combined-Victor", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2124576023/You-Beat-Insane", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2124690831/nightmare", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2132595304/Cool-Rank", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/2198902076683419/You-beat-the-tower-in-True-Mode", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/1569612308564420/Wizard-of-the-Snow-No-hit", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/341420485084419/lets-go-practice-medicine", type: "RETRO", typeColor: "#90EE90" },

        // ===== DIE (light bluish purple) =====
        { link: "https://www.roblox.com/badges/2124779169/Perseverance", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/2125383846/Yet-Another-Lie", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/997957335521888/Paragon", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/1638836442614353/Challenge-Amoeba", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/2124582361/Its-not-a-bug-Its-a-feature", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/4193683563693367/Noob-Run-Expert", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/1473601113488725/20-20-20-20-20-20-20-20-20-20-20", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/2572276247665338/Is-this-a-joke", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/3455173617910572/CM-Whirlwind-Wasteland-Crazy", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/2778781527407284/Completed-Level-4", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/2125396195/Jungle-Faberge-Egg", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/3939781525496613/Detour", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/1711843587026624/FOCUS", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/3207868147772549/One-and-only-one", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/1893694628823703/Baby-Steps-Taken", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/882198791190805/Violent-Night", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/3629846162984558/Pinnacle-of-the-Horse", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/1219808603935961/Coffee-Domination", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/2645070055764946/Genesis", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/748736013123421/Is-It-Hot-In-Here", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/324416669495238/Hear-the-Call-of-the-Wild", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/150604772113494/the-real-robeats-marathon", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/4465596450187315/Caffeinated-Challenge", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/2342289399406903/beyond-insane", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/3968756462729341/PLEASE-SLOW-DOWN", type: "DIE", typeColor: "#B19CD9" },

        // ===== 72 (light gray) =====
        { link: "https://www.roblox.com/badges/2124917513/And-I-will-walk-444-studs", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2129894356/Fishing-Expert", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/3813327514453402/Principled", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2149679431/Teapot-Adept", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2987725431919467/Beat-Claustrophobia", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/96272839500410/END", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/3758548813575325/Can-I-get-a-different-one", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/132812721886974/Final-Test-Wallhop", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2124928960/UofU-Graduate", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/1413858421326743/NODENT", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/3175784723700043/Embodiment-of-Good", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2141504782/Game-Over", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2130710982524334/fragment-of-body", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2141274111/Treasure-Hunter", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2124640741/Complete-all-Episodes", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/1373204103714725/The-Core", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/4027520083924534/1B-The-Adept-Typer-20-WPM", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/776566497822927/unnamed", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2150986720/unnamed", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2126981528/SUN-GOD-SURVIVALIST", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2124894374/KENTUCKY", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2130370270/Merciless", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/2147845280/extremely-difficult-obby", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/722364028354866/Meet-Your-Making", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/1560889872543795/Infinite-Frau-Source-Based-Driver", type: "72", typeColor: "#D3D3D3" },

        // ===== ANGRY (light red) =====
        { link: "https://www.roblox.com/badges/2145191060/Unscratchable", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2126681519/Inking-Mistake", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/607180874180251/LOLWHY-TOM", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2124903565/Secret-3", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/1559902917155620/Skeleton-Sweater", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2126207707/Scavenger-Hunt", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/3953832443084080/Glitch-Muffin", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/3979857468164354/The-Final-Method", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/4350409700885168/100-World-6", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2151263865/ritual-road-trip", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2417423142123070/biglightpuzzl-e", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/1173910799708838/silly-billy-badgerooni", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2124445042/unnamed", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/980677630116329/Every-Second-Counts", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2146989221/Realm-5-Mini-Tower-Rush", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/1535329670769985/Bestiary-Brine-Pool", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2124807606/BoO", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/1931594534695633/Secret-Badge-Truly-Pi", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2128433280/Complete-Random-Obby-of-Sweet-Citruses", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2124521961/Bonus-Badge", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2465629121945472/The-Secret-of-the-Obby-Area", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/3470502322441103/secret-room-5", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2310326939883362/Skin-Maniac", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/59851438299998/A-Million-Mikus-1-Million-Visits", type: "ANGRY", typeColor: "#F4A7A7" },
        { link: "https://www.roblox.com/badges/2125468279/rich", type: "ANGRY", typeColor: "#F4A7A7" },

        // ===== NWELZ (dark gray) =====
        { link: "https://www.roblox.com/badges/3873701876228532/Enraged-Wizard-of-the-Snow-No-hit", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/2153448899/Im-possible", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/1665918196810438/An-Eggplant", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/2832304749592589/GREEN-MODE", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/2129769267/Hard-Endless-2000", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/2143961888/Champion", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/1072284831/Night-30-Nightmare", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/2125909819/Omnipotent-Padlock-Picker", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/2129986368/Executioner", type: "NWELZ", typeColor: "#4D4D4D" },
        { link: "https://www.roblox.com/badges/2248060090352259/Gokus-Wrath", type: "NWELZ", typeColor: "#4D4D4D" },

        // ===== "Challenge" badges — kept at the very bottom, in RETRO -> DIE -> 72 -> ANGRY order =====
        { link: "https://www.roblox.com/badges/1135832262705806/Retros-Challenge", type: "RETRO", typeColor: "#90EE90" },
        { link: "https://www.roblox.com/badges/3995975385369082/Dies-Challenge", type: "DIE", typeColor: "#B19CD9" },
        { link: "https://www.roblox.com/badges/4190092107867100/72s-Challenge", type: "72", typeColor: "#D3D3D3" },
        { link: "https://www.roblox.com/badges/1416813022769341/Angrys-Challenge", type: "ANGRY", typeColor: "#F4A7A7" },
    ]
  },
  {
    id: "find-the-badger",
    name: "Find The Badger",
    difficulty: "Difficult",
    gameLink: "https://www.roblox.com/games/89401091600143/Find-The-Badger",
    milestones: [
      { name: 'Completed The "Find The" Badger', target: 190 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1728350576#gid=1728350576",
    badges: [
    ]
  },
  {
    id: "find-the-badger-(2)",
    name: "Find The Badger (2)",
    difficulty: "Difficult",
    gameLink: "https://www.roblox.com/games/86125671335897/Find-The-Badger",
    milestones: [
      { name: 'Completed The "Find The" Badger', target: 190 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=271652511#gid=271652511",
    badges: [
    ]
  },
  {
    id: "trustys-badger-2",
    name: "Trusty's Badger 2",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/18192596353/Trustys-Badger-2-woah",
    milestones: [
      { name: 'You did it!! Yay', target: 25 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1332940165#gid=1332940165",
    badges: [
    ]
  },
  {
    id: "epic-badger-num-ed",
    name: "Epic Badger: Number Edition",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/18192668355/The-Epic-Badger-Number-Edition",
    milestones: [
      { name: 'Number God', target: 50 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=662792189#gid=662792189",
    badges: [
    ]
  },
  {
    id: "badger-of-friends-and-family",
    name: "Badger of Friends and Family",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/16956822212/15-Badger-of-Friends-And-Family",
    milestones: [
      { name: 'ya freaking did it', target: 15 },
    ],
    sheetUrl: "",
    badges: [
      { link: "https://www.roblox.com/badges/2973042218229609/Wheres-Waldo",
        type: "Puzzle [REMOURSELESS]",
        typeColor: "#ff6bf5"
      },
      { link: "https://www.roblox.com/badges/2128532378/Disco-King" ,
        type: "Obby/Rythmn [HARD]",
        typeColor: "#f98842"
      },
      { link: "https://www.roblox.com/badges/4295587185930411/Hard-Mode-Iclyn", 
        type: "Bullet Hell [DIFFICULT]",
        typeColor: "#f94242"
      },
      { link: "https://www.roblox.com/badges/2144508030/Beat-The-Citadel-of-Keyboard-Yeeting", 
        type: "Obby [DIFFICULT]",
        typeColor: "#f94242"
      },
      { link: "https://www.roblox.com/badges/2149970622/ballpitiful", 
        type: "Obby [CHALLENGING]",
        typeColor: "#ae1a00"
      },
      { link: "https://www.roblox.com/badges/2124638554/Repercussions-of-Fissure", 
        type: "Walking Simulator [HARD]",
        typeColor: "#f98842"
      },
      { link: "https://www.roblox.com/badges/3506781323173692/Keypad-Octagon", 
        type: "Puzzle/Obby [CHALLENGING]",
        typeColor: "#ae1a00"
      },
      { link: "https://www.roblox.com/badges/3961715209392758/Beat-the-Mega-Killbot", 
        type: "Boss Fight [DIFFICULT]",
        typeColor: "#f94242"
      },
      { link: "https://www.roblox.com/badges/786203648/Flawless-Run-Chapter-Six", 
        type: "Story [HARD]",
        typeColor: "#f98842"
      },
      { link: "https://www.roblox.com/badges/2147585282/You-found-the-Shiny-Capybara", 
        type: "Scavenger Hunt [MEDIUM]",
        typeColor: "#ffd000"
      },
      { link: "https://www.roblox.com/badges/1512748112/Defeat-Gonaku", 
        type: "RPG [DIFFICULT]",
        typeColor: "#f94242"
      },
      { link: "https://www.roblox.com/badges/2124647572/Poisonous-Chasm-Crazy", 
        type: "Obby [CHALLENGING]",
        typeColor: "#ae1a00"
      },
      { link: "https://www.roblox.com/badges/4164152478817339/Classic-Honor", 
        type: "Tower Defense [HARD]",
        typeColor: "#f98842"
      },
      { link: "https://www.roblox.com/badges/2125364213/Beat-The-Tower-of-Rage", 
        type: "Obby [DIFFICULT]",
        typeColor: "#f94242"
      },
      { link: "https://www.roblox.com/badges/2127393684/1-2-Primer-Mundo", 
        type: "Platformer [DIFFICULT]",
        typeColor: "#f94242"
      },
    ]
  },
  {
    id: "my-beloved-15",
    name: "My Beloved 15.",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/15953420798/My-Beloved-15",
    milestones: [
      { name: 'Reached For the Skies!', target: 15 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=167075227#gid=167075227",
    badges: [
    ]
  },
  {
    id: "30-random-badges-badger",
    name: "30 Random Badges Badger",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/18386467340/30-Random-Badges-Badger",
    milestones: [
      { name: 'Beat All Random Badges', target: 30 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=1864135397#gid=1864135397",
    badges: [
    ]
  },
  {
    id: "the-badgers-garden",
    name: "The Badger's Garden",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/17175467488/The-Badgers-Garden",
    milestones: [
      { name: '°10 BADGES°', target: 10 },
      { name: '°°°20 BADGES°°°', target: 20 },
      { name: '[30 BADGES]', target: 30 },
      { name: '[[[WINNER]]]', target: 40 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=336986757#gid=336986757",
    badges: [
    ]
  },
  {
    id: "stabs-badge-hunt-v3",
    name: "Stab's Badge Hunt v3",
    difficulty: "Hard",
    gameLink: "https://www.roblox.com/games/18321371573/Stabs-Badge-Hunt-v3",
    milestones: [
      { name: '10 Badges Completed', target: 10 },
      { name: '20 Badges Completed', target: 20 },
      { name: 'Badge Enthusiast', target: 23 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=83818101#gid=83818101",
    badges: [
    ]
  },
  {
    id: "ether",
    name: "Puzzle Difficulty Chart (ether)",
    difficulty: "Intense",
    gameLink: "https://www.roblox.com/games/8568665606/Puzzle-Difficulty-Chart",
    milestones: [
      { name: 'ether.badge', target: 56 },
    ],
    sheetUrl: "https://docs.google.com/spreadsheets/d/1_GXidotsL0OtM2J2FJ1f-cGVgo_E1LR4I_L0xm4Bz1M/edit?gid=110317936#gid=110317936",
    badges: [
    ]
  },
  // Add more badger objects here, separated by commas.
];
// ================================================================================== 

(function(){
  var storageMode = 'memory';
  var currentBadger = null;
  var currentBadges = [];
  var progressData = {}; // key -> boolean

  function detectStorage(){
    if (typeof window.storage !== 'undefined' && window.storage && typeof window.storage.get === 'function') return 'artifact';
    try { var k='__t__'; localStorage.setItem(k,'1'); localStorage.removeItem(k); return 'local'; } catch(e){ return 'memory'; }
  }
  async function storageGet(key){
    if (storageMode === 'artifact') { try { var r = await window.storage.get(key); return r ? r.value : null; } catch(e){ return null; } }
    if (storageMode === 'local') { try { return localStorage.getItem(key); } catch(e){ return null; } }
    return null;
  }
  async function storageSet(key, value){
    if (storageMode === 'artifact') { try { await window.storage.set(key, value); } catch(e){} }
    else if (storageMode === 'local') { try { localStorage.setItem(key, value); } catch(e){} }
  }

  function difficultyColor(text){
    var t = (text||'').toLowerCase();
    if (/extreme|insane/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--violet');
    if (/hard|tough/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--coral');
    if (/impossible|nil/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--darkgray');
    if (/intense/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--gray');
    if (/difficult|challenging/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--red');
    if (/medium|moderate|normal/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--amber');
    if (/easy|simple|beginner/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--green');
    return getComputedStyle(document.documentElement).getPropertyValue('--neutral-diff');
  }

  var DIFFICULTY_ORDER = ['beginner','simple','easy','medium','normal','moderate','hard','tough','difficult','challenging','intense','insane','extreme','impossible','nil'];
  function difficultyRank(text){
    var t = (text || '').toLowerCase();
    for (var i = 0; i < DIFFICULTY_ORDER.length; i++){
      if (t.indexOf(DIFFICULTY_ORDER[i]) !== -1) return i;
    }
    return DIFFICULTY_ORDER.length; // anything unrecognized sorts after "nil"
  }

  function baseBadgeStableId(badge){
    return extractBadgeIdFromLink(badge.link) || badge.link || badge.name || '';
  }

  // Two badges can end up with the same base id if the data has a typo -
  // a duplicated or missing link, say. Without disambiguation that would
  // make them share one progress/favorite key, so checking or favoriting
  // one would silently affect the other(s) too. Give any duplicates past
  // the first a distinguishing suffix based on their position.
  function disambiguatedBadgeId(badge){
    var base = baseBadgeStableId(badge);
    var idx = currentBadges.indexOf(badge);
    if (idx === -1) return base;
    var dupIdx = 0;
    for (var i = 0; i < idx; i++){
      if (baseBadgeStableId(currentBadges[i]) === base) dupIdx++;
    }
    return dupIdx > 0 ? (base + '#' + dupIdx) : base;
  }

  function badgeKey(badgerId, badge){
    return badgerId + '||' + disambiguatedBadgeId(badge);
  }

  // ---- Sheet loading (optional, per-badger) ----
  function findColumnIndex(headerRow, candidates){
    var lower = headerRow.map(function(f){ return (f||'').trim().toLowerCase(); });
    for (var i=0;i<candidates.length;i++){ var idx = lower.indexOf(candidates[i]); if (idx !== -1) return idx; }
    for (var i=0;i<lower.length;i++){ for (var j=0;j<candidates.length;j++){ if (lower[i].indexOf(candidates[j]) !== -1) return i; } }
    return -1;
  }
  function sheetUrlToCsvUrl(url){
    var m = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (!m) throw new Error('Could not find a spreadsheet ID in that link.');
    var sheetId = m[1];
    var gidMatch = url.match(/[?#&]gid=(\d+)/);
    var gid = gidMatch ? gidMatch[1] : '0';
    return 'https://docs.google.com/spreadsheets/d/' + sheetId + '/export?format=csv&gid=' + gid;
  }
  function parseSheetBadges(csvText){
    var parsed = Papa.parse(csvText, { skipEmptyLines: false });
    var rows = parsed.data;
    var headerRowIdx = -1, nameCol = -1, gameCol = -1, linkCol = -1, imageCol = -1, descCol = -1, typeCol = -1;
    var nameColorCol = -1, gameColorCol = -1, descColorCol = -1, typeColorCol = -1, bgColorCol = -1;
    for (var r = 0; r < rows.length; r++){
      var idx = findColumnIndex(rows[r], ['badge name','badge_name']);
      if (idx !== -1){
        headerRowIdx = r; nameCol = idx;
        gameCol = findColumnIndex(rows[r], ['game','game name']);
        linkCol = findColumnIndex(rows[r], ['link','badge link','url']);
        imageCol = findColumnIndex(rows[r], ['image','badge image','icon','badge icon']);
        descCol = findColumnIndex(rows[r], ['description','badge description','desc']);
        typeCol = findColumnIndex(rows[r], ['type','types','badge type']);
        nameColorCol = findColumnIndex(rows[r], ['namecolor','name color']);
        gameColorCol = findColumnIndex(rows[r], ['gamecolor','game color']);
        descColorCol = findColumnIndex(rows[r], ['descriptioncolor','description color','desccolor']);
        typeColorCol = findColumnIndex(rows[r], ['typecolor','type color']);
        bgColorCol = findColumnIndex(rows[r], ['bgcolor','background color','backgroundcolor','bg color']);
        break;
      }
    }
    if (headerRowIdx === -1) return [];
    var out = [];
    for (var r2 = headerRowIdx + 1; r2 < rows.length; r2++){
      var row = rows[r2];
      var name = nameCol !== -1 ? (row[nameCol]||'').trim() : '';
      var linkVal = linkCol !== -1 ? (row[linkCol]||'').trim() : '';
      if (!name && !linkVal) continue;
      var typeVal = typeCol !== -1 ? (row[typeCol]||'').trim() : '';
      out.push({
        name: name,
        game: gameCol !== -1 ? (row[gameCol]||'').trim() : '',
        link: linkVal,
        image: imageCol !== -1 ? (row[imageCol]||'').trim() : '',
        description: descCol !== -1 ? (row[descCol]||'').trim() : '',
        type: typeVal,
        nameColor: nameColorCol !== -1 ? (row[nameColorCol]||'').trim() : '',
        gameColor: gameColorCol !== -1 ? (row[gameColorCol]||'').trim() : '',
        descriptionColor: descColorCol !== -1 ? (row[descColorCol]||'').trim() : '',
        typeColor: typeColorCol !== -1 ? (row[typeColorCol]||'').trim() : '',
        bgColor: bgColorCol !== -1 ? (row[bgColorCol]||'').trim() : ''
      });
    }
    return out;
  }
  async function fetchSheetBadges(sheetUrl){
    var csvUrl = sheetUrlToCsvUrl(sheetUrl);
    var resp = await fetchWithTimeout(csvUrl, 8000);
    if (!resp.ok) throw new Error('Sheet request failed (HTTP ' + resp.status + ').');
    var text = await resp.text();
    return parseSheetBadges(text);
  }

  // Merge sheet-loaded badges with the manual `badges` array. A manual entry
  // with the same name+link as a sheet row overrides it; otherwise manual
  // entries are added alongside whatever the sheet provided.
  function mergeBadges(sheetBadges, manualBadges){
    var map = {};
    var order = [];
    function keyOf(b){ return (b.name||'').toLowerCase() + '||' + (b.link||''); }
    (sheetBadges || []).forEach(function(b){
      var k = keyOf(b);
      if (!(k in map)) order.push(k);
      map[k] = b;
    });
    (manualBadges || []).forEach(function(b){
      var k = keyOf(b);
      if (!(k in map)) order.push(k);
      map[k] = b;
    });
    return order.map(function(k){ return map[k]; });
  }

  // In-flight fetch per badger this session - so if the home card and the
  // detail page both ask for the same sheet-backed badger, they share one
  // network request instead of firing two.
  var sheetFetchPromises = {};

  function fetchSheetFresh(badger){
    if (!sheetFetchPromises[badger.id]){
      sheetFetchPromises[badger.id] = (async function(){
        try {
          var sheetBadges = await fetchSheetBadges(badger.sheetUrl);
          await storageSet('sheetcache-' + badger.id, JSON.stringify({ badges: sheetBadges, ts: Date.now() }));
          return { badges: sheetBadges, isErr: false };
        } catch(e){
          return { badges: null, isErr: true, message: e.message };
        } finally {
          // Let a future call try again (e.g. after the user hits Refresh).
          delete sheetFetchPromises[badger.id];
        }
      })();
    }
    return sheetFetchPromises[badger.id];
  }

  // Cache-first: if we've loaded this sheet before, return that instantly
  // and kick off a background refresh alongside it (exposed as `.pending`,
  // a promise the caller can await later to pick up anything that changed).
  // Only on the very first-ever load for a badger, with nothing cached yet,
  // do we actually make the caller wait on the network.
  async function getEffectiveBadges(badger){
    var manual = badger.badges || [];
    if (!badger.sheetUrl) return { badges: manual, status: '', isErr: false };

    var cachedRaw = await storageGet('sheetcache-' + badger.id);
    var cached = null;
    try { cached = cachedRaw ? JSON.parse(cachedRaw) : null; } catch(e){ cached = null; }

    var freshPromise = fetchSheetFresh(badger);

    if (cached){
      return {
        badges: mergeBadges(cached.badges, manual),
        status: cached.badges.length + ' badge(s) loaded from sheet (cached)' + (manual.length ? (' + ' + manual.length + ' manual') : '') + '.',
        isErr: false,
        pending: freshPromise.then(function(result){
          if (result.isErr) return null; // keep showing cached data if the refresh failed
          return {
            badges: mergeBadges(result.badges, manual),
            status: result.badges.length + ' badge(s) loaded from sheet' + (manual.length ? (' + ' + manual.length + ' manual') : '') + '.',
            isErr: false
          };
        })
      };
    }

    // Nothing cached yet - this is the one time we have to actually wait.
    var result = await freshPromise;
    if (result.isErr){
      return { badges: manual, status: 'Could not load the sheet (' + result.message + '). Showing manual badges only.', isErr: true };
    }
    return {
      badges: mergeBadges(result.badges, manual),
      status: result.badges.length + ' badge(s) loaded from sheet' + (manual.length ? (' + ' + manual.length + ' manual') : '') + '.',
      isErr: false
    };
  }

  // Caches each badge's Roblox lookup result (name/game/image/description) by
  // its badge ID, globally - shared across every badger, not per-badger. This
  // means editing your `badges` array in code always takes effect immediately
  // (nothing about the list itself is cached), while a badge ID that's been
  // looked up before - even in a different badger - loads instantly instead
  // of hitting Roblox again. Only genuinely new badge IDs trigger a lookup.
  var enrichmentCache = null; // loaded once, kept in memory for the session
  async function getEnrichmentCache(){
    if (enrichmentCache) return enrichmentCache;
    var raw = await storageGet('roblox-enrichment-cache-v2');
    enrichmentCache = raw ? JSON.parse(raw) : {};
    return enrichmentCache;
  }
  function saveEnrichmentCache(){
    storageSet('roblox-enrichment-cache-v2', JSON.stringify(enrichmentCache || {}));
  }

  function extractBadgeIdFromLink(link){
    if (!link) return null;
    var m = link.match(/\/badges\/(\d+)/);
    return m ? m[1] : null;
  }

  // Resolves one badge's game (rootPlaceId), cache-first - used by the
  // check-as-you-go loop below so a badger with many badges can stop the
  // instant a match is found, instead of resolving everything up front.
  async function resolveBadgeGameId(b, cache){
    if (b.gameId) return b.gameId;
    var id = extractBadgeIdFromLink(b.link);
    if (!id) return null;
    if (cache[id] && cache[id].gameId){ b.gameId = cache[id].gameId; return b.gameId; }

    try {
      var resp = await corsFetch('https://badges.roblox.com/v1/badges/' + id);
      if (resp.ok){
        var data = await resp.json();
        var fetchedGameId = (data.awardingUniverse && data.awardingUniverse.rootPlaceId)
          ? String(data.awardingUniverse.rootPlaceId) : '';
        if (fetchedGameId){
          b.gameId = fetchedGameId;
          cache[id] = cache[id] || {};
          cache[id].gameId = fetchedGameId;
          saveEnrichmentCache();
          return fetchedGameId;
        }
      }
    } catch(e){
      console.error('Game ID lookup for badge ' + id + ' failed:', e);
    }
    return null;
  }

  // Fast local search across every badger's badge list, matching badge name
  // or game name as a substring. No per-badge network calls needed (unlike
  // the ID/game-ID search below) - getEffectiveBadges already has sheet data
  // cached or fetched at the badger level, so this just filters what's
  // already in memory. Returns which specific badges matched in each badger,
  // not just which badger, so you can see exactly what you were looking for.
  async function findBadgersByBadgeName(query, onProgress, shouldCancel){
    var q = (query || '').trim().toLowerCase();
    if (!q) return [];
    var matches = [];
    for (var i = 0; i < BADGERS.length; i++){
      if (shouldCancel && shouldCancel()) break;
      var badger = BADGERS[i];
      if (onProgress) onProgress(i + 1, BADGERS.length, badger.name, '');
      var effective = await getEffectiveBadges(badger);
      var badgeList = effective.badges || [];
      var hits = badgeList.filter(function(b){
        return ((b.name || '').toLowerCase().indexOf(q) !== -1) ||
               ((b.game || '').toLowerCase().indexOf(q) !== -1);
      });
      if (hits.length) matches.push({ badger: badger, badges: hits });
    }
    return matches;
  }

  // Checks every badger's badge list (sheet + manual) for a badge matching
  // the given badge ID or game ID. Badge ID matching is free (already in
  // the data). Game ID matching resolves one badge at a time and stops as
  // soon as a match is found in that badger, so a match is usually fast
  // even for badgers with a large badge list; a non-matching badger with
  // many uncached badges is still the slow case, but can no longer hang.
  async function findBadgersByBadgeOrGameId(query, onProgress, shouldCancel){
    var q = (query || '').trim();
    if (!q) return [];
    var matches = [];
    var cache = await getEnrichmentCache();

    for (var i = 0; i < BADGERS.length; i++){
      if (shouldCancel && shouldCancel()) break;
      var badger = BADGERS[i];
      if (onProgress) onProgress(i + 1, BADGERS.length, badger.name, '');

      var effective = await getEffectiveBadges(badger);
      var badgeList = effective.badges || [];

      var badgeIdHit = badgeList.some(function(b){ return extractBadgeIdFromLink(b.link) === q; });
      if (badgeIdHit){ matches.push(badger); continue; }

      var gameIdHit = false;
      for (var j = 0; j < badgeList.length; j++){
        if (shouldCancel && shouldCancel()) break;
        if (onProgress) onProgress(i + 1, BADGERS.length, badger.name, ' (badge ' + (j + 1) + '/' + badgeList.length + ')');
        var gid = await resolveBadgeGameId(badgeList[j], cache);
        if (gid === q){ gameIdHit = true; break; }
        await new Promise(function(r){ setTimeout(r, 60); });
      }
      if (gameIdHit) matches.push(badger);
    }

    return matches;
  }

  // Fills in `image` and `description` for any badge that's missing them,
  // by looking up its Roblox badge ID (from `link`) against Roblox's public
  // badge API. Runs quietly in the background after the list first renders,
  // so a slow/blocked lookup never delays showing the checklist itself.
  // NOTE: this calls Roblox's API directly from the browser. If Roblox blocks
  // cross-site requests to these endpoints, lookups will just silently fail
  // and badges keep whatever image/description they already had (or none).
  // Roblox's badge/thumbnail APIs don't send CORS headers, so a direct
  // browser fetch() to them fails. RoProxy (roproxy.com) is a community-run
  // mirror built specifically for Roblox's APIs with CORS enabled - it's
  // not run by us or Roblox, but is widely used for exactly this purpose.
  // A generic proxy is tried as a last-resort backup if RoProxy is down.
  function fetchWithTimeout(url, ms){
    var controller = new AbortController();
    var timer = setTimeout(function(){ controller.abort(); }, ms);
    return fetch(url, { signal: controller.signal }).finally(function(){ clearTimeout(timer); });
  }

  async function corsFetch(robloxUrl){
    try {
      var direct = await fetchWithTimeout(robloxUrl, 6000);
      if (direct.ok) return direct;
      console.warn('Direct fetch to ' + robloxUrl + ' returned HTTP ' + direct.status);
    } catch(e){ console.warn('Direct fetch to ' + robloxUrl + ' blocked/timed out:', e.message); }

    try {
      var roproxyUrl = robloxUrl.replace(
        /^https:\/\/([a-z]+)\.roblox\.com/,
        'https://$1.roproxy.com'
      );
      var viaRoproxy = await fetchWithTimeout(roproxyUrl, 8000);
      if (viaRoproxy.ok) return viaRoproxy;
      console.warn('RoProxy fetch to ' + roproxyUrl + ' returned HTTP ' + viaRoproxy.status);
    } catch(e){ console.warn('RoProxy fetch failed/timed out:', e.message); }

    console.warn('Falling back to generic proxy for ' + robloxUrl);
    var viaGeneric = await fetchWithTimeout('https://api.allorigins.win/raw?url=' + encodeURIComponent(robloxUrl), 10000);
    if (!viaGeneric.ok) throw new Error('All lookup routes failed (last HTTP ' + viaGeneric.status + ')');
    return viaGeneric;
  }

  async function enrichBadgesFromRoblox(badges, onProgress){
    var cache = await getEnrichmentCache();

    // Step 1: apply anything we already know about this badge ID, instantly,
    // no network call at all.
    var cacheHit = false;
    badges.forEach(function(b){
    var id = extractBadgeIdFromLink(b.link);
    if (!id || !cache[id]) return;
    var c = cache[id];
    if (!b.name && c.name){ b.name = c.name; cacheHit = true; }
    if (!b.game && c.game){ b.game = c.game; cacheHit = true; }
    if (!b.description && c.description){ b.description = c.description; cacheHit = true; }
    if (!b.image && c.image){ b.image = c.image; cacheHit = true; }
    });
    if (cacheHit) onProgress();

    // Step 2: only badges still missing something, and not yet cached, get a
    // real network lookup - this is what makes newly-added badges work while
    // previously-seen ones stay instant.
    var needsAny = badges.filter(function(b){
    return (!b.name || !b.game || !b.description || !b.image) && extractBadgeIdFromLink(b.link);
    });
    if (needsAny.length === 0) return;

    for (var i = 0; i < needsAny.length; i++){
    var b = needsAny[i];
    if (b.name && b.game && b.description) continue;
    var id = extractBadgeIdFromLink(b.link);
    try {
        var resp = await corsFetch('https://badges.roblox.com/v1/badges/' + id);
        if (resp.ok){
        var data = await resp.json();
        var changed = false;
        var fetchedName = data.displayName || data.name || '';
          var fetchedGame = (data.awardingUniverse && data.awardingUniverse.name) || '';
        var fetchedDesc = data.description || '';
          if (!b.name && fetchedName){ b.name = fetchedName; changed = true; }
          if (!b.game && fetchedGame){ b.game = fetchedGame; changed = true; }
          if (!b.description && fetchedDesc){ b.description = fetchedDesc; changed = true; }
          if (changed){
            // Only cache what THIS fetch actually returned - not whatever
            // b.name/b.game/b.description happen to currently hold, which
            // could be stale placeholder text unrelated to Roblox's data.
            cache[id] = cache[id] || {};
            if (fetchedName) cache[id].name = fetchedName;
            if (fetchedGame) cache[id].game = fetchedGame;
            if (fetchedDesc) cache[id].description = fetchedDesc;
            saveEnrichmentCache();
            onProgress();
          } else {
            console.warn('Badge lookup for ' + id + ' succeeded but response was missing expected fields:', data);
          }
        } else {
          console.error('Badge lookup for ' + id + ' failed: HTTP ' + resp.status);
        }
      } catch(e){
        console.error('Badge lookup for ' + id + ' failed (both direct and proxy):', e);
      }
      await new Promise(function(r){ setTimeout(r, 120); });
    }

    // Images: batched, up to 100 badge IDs per request. Skip any badge ID
    // whose image we already have cached.
    var needsImage = badges.filter(function(b){ return !b.image && extractBadgeIdFromLink(b.link); });
    for (var i2 = 0; i2 < needsImage.length; i2 += 100){
      var batch = needsImage.slice(i2, i2 + 100);
      var ids = batch.map(function(b){ return extractBadgeIdFromLink(b.link); });
      try {
        var resp2 = await corsFetch('https://thumbnails.roblox.com/v1/badges/icons?badgeIds=' + ids.join(',') + '&size=150x150&format=Png&isCircular=false');
        if (resp2.ok){
          var data2 = await resp2.json();
          var byId = {};
          (data2.data || []).forEach(function(d){ byId[d.targetId] = d.imageUrl; });
          batch.forEach(function(b){
            var bid = extractBadgeIdFromLink(b.link);
            if (byId[bid]){
              b.image = byId[bid];
              cache[bid] = cache[bid] || {};
              cache[bid].image = byId[bid];
            }
          });
          saveEnrichmentCache();
          onProgress();
        }
      } catch(e){ /* both direct and proxy failed - skip this batch */ }
    }
  }

  function countDone(badgerId, badges, prog){
    return badges.filter(function(b){ return !!prog[badgeKey(badgerId, b)]; }).length;
  }

  async function loadBadgerProgress(badgerId){
    var raw = await storageGet('progress-' + badgerId);
    return raw ? JSON.parse(raw) : {};
  }
  var saveTimer = null;
  var pendingProgressSave = null; // { badgerId, data } - survives navigating away before the debounce fires
  function saveBadgerProgress(){
    pendingProgressSave = { badgerId: currentBadger.id, data: progressData };
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function(){
      saveTimer = null;
      if (pendingProgressSave){
        storageSet('progress-' + pendingProgressSave.badgerId, JSON.stringify(pendingProgressSave.data));
        pendingProgressSave = null;
      }
    }, 250);
  }
  // Immediately writes any pending (debounced) progress save to storage.
  // Used before export so a just-checked badge isn't missed, even if the
  // user already navigated back to the home page since checking it.
  async function flushBadgerProgress(){
    clearTimeout(saveTimer);
    saveTimer = null;
    if (pendingProgressSave){
      await storageSet('progress-' + pendingProgressSave.badgerId, JSON.stringify(pendingProgressSave.data));
      pendingProgressSave = null;
    }
  }

  // ---- Favorites (local only) ----
  var badgerFavorites = new Set();
  var gameFavoritesByBadger = {}; // badgerId -> Set of game keys

  async function loadBadgerFavorites(){
    try {
      var raw = await storageGet('fav-badgers');
      badgerFavorites = new Set(raw ? JSON.parse(raw) : []);
    } catch(e){ badgerFavorites = new Set(); }
  }

  function saveBadgerFavorites(){
    storageSet('fav-badgers', JSON.stringify(Array.from(badgerFavorites)));
  }

  function isBadgerFavorite(badgerId){
    return badgerFavorites.has(badgerId);
  }

  function toggleBadgerFavorite(badgerId){
    if (badgerFavorites.has(badgerId)) badgerFavorites.delete(badgerId);
    else badgerFavorites.add(badgerId);
    saveBadgerFavorites();
  }

  async function loadGameFavorites(badgerId){
    if (gameFavoritesByBadger[badgerId]) return gameFavoritesByBadger[badgerId];
    try {
      var raw = await storageGet('fav-games-' + badgerId);
      gameFavoritesByBadger[badgerId] = new Set(raw ? JSON.parse(raw) : []);
    } catch(e){ gameFavoritesByBadger[badgerId] = new Set(); }
    return gameFavoritesByBadger[badgerId];
  }

  function saveGameFavorites(badgerId){
    var set = gameFavoritesByBadger[badgerId];
    if (!set) return;
    storageSet('fav-games-' + badgerId, JSON.stringify(Array.from(set)));
  }

  // ---- Badge favorites (per badger, local only) ----
  var badgeFavoritesByBadger = {};

  function badgeStableKey(badge){
    return disambiguatedBadgeId(badge);
  }

  async function loadBadgeFavorites(badgerId){
    if (badgeFavoritesByBadger[badgerId]) return badgeFavoritesByBadger[badgerId];
    try {
      var raw = await storageGet('fav-badges-' + badgerId);
      badgeFavoritesByBadger[badgerId] = new Set(raw ? JSON.parse(raw) : []);
    } catch(e){ badgeFavoritesByBadger[badgerId] = new Set(); }
    return badgeFavoritesByBadger[badgerId];
  }

  function saveBadgeFavorites(badgerId){
    var set = badgeFavoritesByBadger[badgerId];
    if (!set) return;
    storageSet('fav-badges-' + badgerId, JSON.stringify(Array.from(set)));
  }

  function isBadgeFavorite(badgerId, badge){
    var set = badgeFavoritesByBadger[badgerId];
    return set ? set.has(badgeStableKey(badge)) : false;
  }

  function toggleBadgeFavorite(badgerId, badge){
    if (!badgeFavoritesByBadger[badgerId]) badgeFavoritesByBadger[badgerId] = new Set();
    var set = badgeFavoritesByBadger[badgerId];
    var key = badgeStableKey(badge);
    if (set.has(key)) set.delete(key);
    else set.add(key);
    saveBadgeFavorites(badgerId);
    return set.has(key);
  }

  function badgeTypesMatch(badge, typeFilter){
    if (!typeFilter) return true;
    var types = Array.isArray(badge.type) ? badge.type : [badge.type];
    return types.some(function(t){ return (t || '').toLowerCase().indexOf(typeFilter) !== -1; });
  }

  // ---- Recently opened badgers ----
  var recentBadgerIds = [];
  var RECENT_MAX = 6;

  async function loadRecentBadgers(){
    try {
      var raw = await storageGet('recent-badgers');
      recentBadgerIds = raw ? JSON.parse(raw) : [];
    } catch(e){ recentBadgerIds = []; }
  }

  function saveRecentBadgers(){
    storageSet('recent-badgers', JSON.stringify(recentBadgerIds));
  }

  function recordRecentBadger(badgerId){
    recentBadgerIds = recentBadgerIds.filter(function(id){ return id !== badgerId; });
    recentBadgerIds.unshift(badgerId);
    if (recentBadgerIds.length > RECENT_MAX) recentBadgerIds.length = RECENT_MAX;
    saveRecentBadgers();
  }

  function renderRecentBadgers(filter){
    var section = document.getElementById('recentBadgersSection');
    var listEl = document.getElementById('recentBadgersList');
    if (!section || !listEl) return;
    listEl.innerHTML = '';

    if ((filter || '').trim()){
      section.style.display = 'none';
      return;
    }

    var items = recentBadgerIds.map(function(id){
      return BADGERS.find(function(b){ return b.id === id; });
    }).filter(Boolean);

    if (items.length === 0){
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    items.forEach(function(badger){
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'recent-chip';
      chip.textContent = badger.name;
      chip.addEventListener('click', function(){ openBadger(badger); });
      listEl.appendChild(chip);
    });
  }

  // ---- Settings (theme, accent color, keyboard shortcuts) ----
  var DEFAULT_ACCENT = '#E8B23D';
  var VALID_THEMES = ['dark', 'light', 'midnight', 'forest', 'sunset', 'ocean', 'rose', 'slate', 'amber', 'custom'];
  var DEFAULT_GRADIENT_FROM = '#12141A';
  var DEFAULT_GRADIENT_TO = '#2A1E3A';
  var DEFAULT_GRADIENT_ANGLE = '135deg';
  var currentSettings = {
    theme: 'dark', accent: DEFAULT_ACCENT, shortcuts: true,
    gradientFrom: DEFAULT_GRADIENT_FROM, gradientTo: DEFAULT_GRADIENT_TO, gradientAngle: DEFAULT_GRADIENT_ANGLE,
    titleColor: '', badgerTitleColor: '', panelColor: ''
  };

  function hexToRgb(hex){
    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '');
    if (!m) return null;
    return { r: parseInt(m[1],16), g: parseInt(m[2],16), b: parseInt(m[3],16) };
  }
  function rgbToHex(r,g,b){
    function h(x){ return Math.max(0,Math.min(255,Math.round(x))).toString(16).padStart(2,'0'); }
    return '#' + h(r) + h(g) + h(b);
  }
  // Darkened version of the accent color, used for --gold-dim (borders, subtle fills)
  function dimColor(hex, factor){
    var c = hexToRgb(hex);
    if (!c) return hex;
    factor = factor == null ? 0.32 : factor;
    return rgbToHex(c.r*factor, c.g*factor, c.b*factor);
  }
  // Lightened version of a color, used to derive --panel-2 from a custom --panel
  function lightenColor(hex, amount){
    var c = hexToRgb(hex);
    if (!c) return hex;
    amount = amount == null ? 22 : amount;
    return rgbToHex(c.r + amount, c.g + amount, c.b + amount);
  }

  function applySettings(){
    document.documentElement.setAttribute('data-theme', currentSettings.theme);
    var accent = currentSettings.accent || DEFAULT_ACCENT;
    document.documentElement.style.setProperty('--gold', accent);
    document.documentElement.style.setProperty('--gold-dim', dimColor(accent));

    // Custom theme overrides --bg with a gradient right on the root element;
    // every other theme relies purely on the [data-theme] CSS blocks, so
    // clear any leftover override when switching away from custom.
    if (currentSettings.theme === 'custom'){
      var from = currentSettings.gradientFrom || DEFAULT_GRADIENT_FROM;
      var to = currentSettings.gradientTo || DEFAULT_GRADIENT_TO;
      var angle = currentSettings.gradientAngle || DEFAULT_GRADIENT_ANGLE;
      document.documentElement.style.setProperty('--bg', 'linear-gradient(' + angle + ', ' + from + ', ' + to + ')');
    } else {
      document.documentElement.style.removeProperty('--bg');
    }

    var gradientRow = document.getElementById('customGradientRow');
    if (gradientRow) gradientRow.style.display = currentSettings.theme === 'custom' ? 'flex' : 'none';

    if (currentSettings.titleColor) document.documentElement.style.setProperty('--title-color', currentSettings.titleColor);
    else document.documentElement.style.removeProperty('--title-color');
    if (currentSettings.badgerTitleColor) document.documentElement.style.setProperty('--badger-title-color', currentSettings.badgerTitleColor);
    else document.documentElement.style.removeProperty('--badger-title-color');

    if (currentSettings.panelColor){
      document.documentElement.style.setProperty('--panel', currentSettings.panelColor);
      document.documentElement.style.setProperty('--panel-2', lightenColor(currentSettings.panelColor));
    } else {
      document.documentElement.style.removeProperty('--panel');
      document.documentElement.style.removeProperty('--panel-2');
    }
  }

  async function loadSettings(){
    try {
      var raw = await storageGet('settings');
      var parsed = raw ? JSON.parse(raw) : {};
      currentSettings = {
        theme: VALID_THEMES.indexOf(parsed.theme) !== -1 ? parsed.theme : 'dark',
        accent: parsed.accent || DEFAULT_ACCENT,
        shortcuts: parsed.shortcuts !== false,
        gradientFrom: parsed.gradientFrom || DEFAULT_GRADIENT_FROM,
        gradientTo: parsed.gradientTo || DEFAULT_GRADIENT_TO,
        gradientAngle: parsed.gradientAngle || DEFAULT_GRADIENT_ANGLE,
        titleColor: parsed.titleColor || '',
        badgerTitleColor: parsed.badgerTitleColor || '',
        panelColor: parsed.panelColor || ''
      };
    } catch(e){
      currentSettings = {
        theme: 'dark', accent: DEFAULT_ACCENT, shortcuts: true,
        gradientFrom: DEFAULT_GRADIENT_FROM, gradientTo: DEFAULT_GRADIENT_TO, gradientAngle: DEFAULT_GRADIENT_ANGLE,
        titleColor: '', badgerTitleColor: '', panelColor: ''
      };
    }
    applySettings();
  }

  function saveSettings(){
    storageSet('settings', JSON.stringify(currentSettings));
    applySettings();
    renderStreak();
  }

  // ---- Tags (per-badger, local only) ----
  var badgerTags = {}; // badgerId -> string[]

  async function loadTags(){
    try {
      var raw = await storageGet('badger-tags');
      badgerTags = raw ? JSON.parse(raw) : {};
    } catch(e){ badgerTags = {}; }
  }
  function saveTags(){
    storageSet('badger-tags', JSON.stringify(badgerTags));
  }
  function getTags(badgerId){
    return badgerTags[badgerId] || [];
  }
  function addTag(badgerId, tag){
    tag = (tag || '').trim();
    if (!tag) return;
    var list = badgerTags[badgerId] || (badgerTags[badgerId] = []);
    var lower = tag.toLowerCase();
    if (list.some(function(t){ return t.toLowerCase() === lower; })) return;
    list.push(tag);
    saveTags();
  }
  function removeTag(badgerId, tag){
    var list = badgerTags[badgerId];
    if (!list) return;
    badgerTags[badgerId] = list.filter(function(t){ return t !== tag; });
    saveTags();
  }

  // ---- Custom drag-to-reorder order (local only) ----
  var customOrder = []; // array of badger ids

  async function loadCustomOrder(){
    try {
      var raw = await storageGet('custom-order');
      customOrder = raw ? JSON.parse(raw) : [];
    } catch(e){ customOrder = []; }
  }
  function saveCustomOrder(){
    storageSet('custom-order', JSON.stringify(customOrder));
  }
  // Applies the saved custom order to a badger list, appending any badgers
  // not yet in the saved order (new ones added to BADGERS) at the end.
  function applyCustomOrder(list){
    var byId = {};
    list.forEach(function(b){ byId[b.id] = b; });
    var ordered = customOrder.map(function(id){ return byId[id]; }).filter(Boolean);
    var seen = {};
    ordered.forEach(function(b){ seen[b.id] = true; });
    list.forEach(function(b){ if (!seen[b.id]) ordered.push(b); });
    return ordered;
  }

  // ---- Collections / folders (local only) ----
  var collections = []; // [{id, name, badgerIds: []}]

  async function loadCollections(){
    try {
      var raw = await storageGet('collections');
      collections = raw ? JSON.parse(raw) : [];
    } catch(e){ collections = []; }
  }
  function saveCollections(){
    storageSet('collections', JSON.stringify(collections));
  }
  function createCollection(name){
    name = (name || '').trim();
    if (!name) return null;
    var col = { id: 'col_' + Date.now() + '_' + Math.random().toString(36).slice(2,7), name: name, badgerIds: [] };
    collections.push(col);
    saveCollections();
    return col;
  }
  function deleteCollection(id){
    collections = collections.filter(function(c){ return c.id !== id; });
    saveCollections();
  }
  function toggleBadgerInCollection(collectionId, badgerId){
    var col = collections.find(function(c){ return c.id === collectionId; });
    if (!col) return;
    var idx = col.badgerIds.indexOf(badgerId);
    if (idx === -1) col.badgerIds.push(badgerId); else col.badgerIds.splice(idx, 1);
    saveCollections();
  }

  // ---- Activity log (drives streak and pace estimate) ----
  var activityLog = {}; // 'YYYY-MM-DD' -> count

  function todayKey(d){
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }
  async function loadActivityLog(){
    try {
      var raw = await storageGet('activity-log');
      activityLog = raw ? JSON.parse(raw) : {};
    } catch(e){ activityLog = {}; }
  }
  var activitySaveTimer = null;
  function saveActivityLog(){
    clearTimeout(activitySaveTimer);
    activitySaveTimer = setTimeout(function(){
      activitySaveTimer = null;
      storageSet('activity-log', JSON.stringify(activityLog));
    }, 400);
  }
  async function flushActivityLog(){
    clearTimeout(activitySaveTimer);
    activitySaveTimer = null;
    await storageSet('activity-log', JSON.stringify(activityLog));
  }
  // Call whenever the user checks off a badge or badger as collected.
  function recordActivity(){
    var k = todayKey();
    activityLog[k] = (activityLog[k] || 0) + 1;
    saveActivityLog();
    renderStreak();
  }
  function computeStreaks(){
    var current = 0, longest = 0, run = 0;
    var d = new Date();
    var todaysCount = activityLog[todayKey(d)] || 0;
    if (!todaysCount) d.setDate(d.getDate() - 1); // grace period: today not yet acted on
    while (true){
      var count = activityLog[todayKey(d)] || 0;
      if (count > 0){ current++; d.setDate(d.getDate() - 1); }
      else break;
      if (current > 3650) break; // sanity cap
    }
    var dates = Object.keys(activityLog).filter(function(k){ return activityLog[k] > 0; }).sort();
    dates.forEach(function(dateStr, i){
      if (i === 0){ run = 1; }
      else {
        var prev = new Date(dates[i-1] + 'T00:00:00');
        prev.setDate(prev.getDate() + 1);
        run = (todayKey(prev) === dateStr) ? run + 1 : 1;
      }
      if (run > longest) longest = run;
    });
    return { current: current, longest: longest };
  }
  function renderStreak(){
    var streakEl = document.getElementById('streakLine');
    if (!streakEl) return;
    var streaks = computeStreaks();
    var fire = streaks.current > 0 ? '🔥 ' : '';
    streakEl.innerHTML =
      '<span class="streak-num">' + fire + streaks.current + '</span>' +
      '<span class="streak-label">day' + (streaks.current === 1 ? '' : 's') + ' streak</span>' +
      (streaks.longest > 0 ? '<span class="streak-longest">longest: ' + streaks.longest + ' day' + (streaks.longest === 1 ? '' : 's') + '</span>' : '');
  }

  // Rough "days remaining" estimate for the currently open badger, based on
  // the user's overall pace (badges checked per day) over the last 14 days.
  function renderTimeEstimate(){
    var el = document.getElementById('timeEstimate');
    if (!el || !currentBadger) return;
    var total = currentBadges.length;
    var done = countDone(currentBadger.id, currentBadges, progressData);
    var remaining = total - done;
    if (remaining <= 0){ el.textContent = total ? 'All done! 🎉' : ''; return; }
    var days = 14, sum = 0, activeDays = 0;
    var d = new Date();
    for (var i = 0; i < days; i++){
      var c = activityLog[todayKey(d)] || 0;
      if (c > 0){ sum += c; activeDays++; }
      d.setDate(d.getDate() - 1);
    }
    if (activeDays === 0){ el.textContent = remaining + ' left · check off a few badges to see a pace estimate'; return; }
    var perDay = sum / days;
    if (perDay <= 0){ el.textContent = remaining + ' left'; return; }
    var estDays = Math.ceil(remaining / perDay);
    el.textContent = remaining + ' left · at your recent pace (~' + (Math.round(perDay*10)/10) + '/day), about ' +
      estDays + ' day' + (estDays === 1 ? '' : 's') + ' to finish';
  }

  // ---- Confetti (fired on reaching 100% for a badger) ----
  var CONFETTI_COLORS = ['#E8B23D', '#58D6A0', '#4a7fea', '#EE6F6F', '#F0B94A'];
  function fireConfetti(){
    var layer = document.getElementById('confettiLayer');
    if (!layer) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var count = 80;
    for (var i = 0; i < count; i++){
      var piece = document.createElement('div');
      piece.className = 'confetti-piece';
      var size = 6 + Math.random() * 6;
      piece.style.width = size + 'px';
      piece.style.height = (size * 0.4) + 'px';
      piece.style.left = (Math.random() * 100) + 'vw';
      piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      piece.style.animationDuration = (2.2 + Math.random() * 1.6) + 's';
      piece.style.animationDelay = (Math.random() * 0.4) + 's';
      layer.appendChild(piece);
      (function(el){ setTimeout(function(){ el.remove(); }, 4500); })(piece);
    }
  }

  // ---- Export / import (local data backup) ----
  var EXPORT_VERSION = 1;

  // Every key below is always included in the export, even when it's at
  // its "empty" default. This is what makes import a true, exact restore
  // instead of a one-way merge: a badger/badge that was unchecked at
  // export time needs to come back unchecked on import too, even if it
  // got checked again in the meantime - and that only works if "unchecked"
  // was actually recorded in the backup rather than treated as "nothing to
  // save here."
  var STORAGE_DEFAULTS = {
    'progress': '{}',
    'badgerdone': '',
    'fav-games': '[]',
    'fav-badges': '[]'
  };
  var GLOBAL_STORAGE_DEFAULTS = {
    'fav-badgers': '[]',
    'sticky-notes': '{}',
    'recent-badgers': '[]',
    'settings': '{}',
    'badger-tags': '{}',
    'custom-order': '[]',
    'collections': '[]',
    'activity-log': '{}'
  };

  async function collectAllUserData(){
    await flushBadgerProgress();
    await flushStickyNotes();
    await flushActivityLog();

    var keys = {};
    var i;

    for (i = 0; i < BADGERS.length; i++){
      var id = BADGERS[i].id;
      for (var prefix in STORAGE_DEFAULTS){
        var storageKey = prefix + '-' + id;
        var val = await storageGet(storageKey);
        keys[storageKey] = (val === null || val === undefined) ? STORAGE_DEFAULTS[prefix] : val;
      }
    }

    for (var gk in GLOBAL_STORAGE_DEFAULTS){
      var gval = await storageGet(gk);
      keys[gk] = (gval === null || gval === undefined) ? GLOBAL_STORAGE_DEFAULTS[gk] : gval;
    }

    return {
      app: 'badger-checklist',
      version: EXPORT_VERSION,
      exportedAt: new Date().toISOString(),
      keys: keys
    };
  }

  async function reloadUserDataFromStorage(){
    badgerFavorites = new Set();
    gameFavoritesByBadger = {};
    badgeFavoritesByBadger = {};
    stickyNotesByPage = {};
    recentBadgerIds = [];
    await loadBadgerFavorites();
    await loadRecentBadgers();
    await loadStickyNotes();
    await loadSettings();
    await loadTags();
    await loadCustomOrder();
    await loadCollections();
    await loadActivityLog();
    renderStreak();
    var themeSelectEl = document.getElementById('themeSelect');
    if (themeSelectEl){
      themeSelectEl.value = currentSettings.theme;
      document.getElementById('accentColorInput').value = currentSettings.accent;
      document.getElementById('shortcutsToggle').checked = currentSettings.shortcuts;
      document.getElementById('gradientFromInput').value = currentSettings.gradientFrom;
      document.getElementById('gradientToInput').value = currentSettings.gradientTo;
      document.getElementById('gradientAngleSelect').value = currentSettings.gradientAngle;
      document.getElementById('customGradientRow').style.display = currentSettings.theme === 'custom' ? 'flex' : 'none';
      var themeTextA = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#ECE9E2';
      document.getElementById('titleColorInput').value = currentSettings.titleColor || themeTextA;
      document.getElementById('badgerTitleColorInput').value = currentSettings.badgerTitleColor || themeTextA;
      var themePanelA = getComputedStyle(document.documentElement).getPropertyValue('--panel').trim() || '#1B1E27';
      document.getElementById('panelColorInput').value = currentSettings.panelColor || themePanelA;
    }
    populateCollectionFilterOptions();
    if (currentBadger){
      progressData = await loadBadgerProgress(currentBadger.id);
      await loadGameFavorites(currentBadger.id);
      await loadBadgeFavorites(currentBadger.id);
      renderDetailTags();
      renderList();
      updateStats();
    } else {
      await renderHome(document.getElementById('homeSearch').value);
    }
    await updateBadgerCounter();
  }

  async function importUserData(file){
    var text = await file.text();
    var parsed;
    try { parsed = JSON.parse(text); } catch(e){ throw new Error('That file is not valid JSON.'); }
    if (!parsed || parsed.app !== 'badger-checklist' || !parsed.keys) {
      throw new Error('That does not look like a Badger Checklist backup file.');
    }

    // Cancel any pending debounced writes first - otherwise one can fire a
    // moment after import finishes and silently overwrite the just-imported
    // values with whatever was still sitting in memory beforehand.
    await flushBadgerProgress();
    await flushStickyNotes();
    await flushActivityLog();

    var keyNames = Object.keys(parsed.keys);
    for (var i = 0; i < keyNames.length; i++){
      await storageSet(keyNames[i], parsed.keys[keyNames[i]]);
    }
    await reloadUserDataFromStorage();
    return keyNames.length;
  }

  function setDataToolsStatus(msg, isErr){
    var el = document.getElementById('dataToolsStatus');
    if (!el) return;
    el.textContent = msg || '';
    el.className = isErr ? 'list-status err' : 'list-status';
  }

  document.getElementById('exportDataBtn').addEventListener('click', function(){
    collectAllUserData().then(function(data){
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      var date = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = 'badger-checklist-backup-' + date + '.json';
      a.click();
      URL.revokeObjectURL(url);
      setDataToolsStatus('Backup exported - includes every badger, badge, favorite, and note, checked and unchecked alike.');
    }).catch(function(e){
      setDataToolsStatus('Export failed: ' + e.message, true);
    });
  });

  var importInput = document.getElementById('importDataInput');
  document.getElementById('importDataBtn').addEventListener('click', function(){
    importInput.value = '';
    importInput.click();
  });
  importInput.addEventListener('change', function(){
    var file = importInput.files && importInput.files[0];
    if (!file) return;
    if (!confirm('Import will restore your progress to exactly match this backup - anything checked, favorited, or tagged since the backup was made (that isn\'t in the file) will be overwritten. Continue?')) return;
    importUserData(file).then(function(count){
      setDataToolsStatus('Restored from backup - your progress now matches the imported file exactly.');
    }).catch(function(e){
      setDataToolsStatus('Import failed: ' + e.message, true);
    });
  });

  // Strips a trailing count annotation like " (15)" from a game name. Sheet
  // data sometimes has the same game listed as both "Find the Barbaras" and
  // "Find the Barbaras (15)" across different rows (e.g. a tier/count note
  // that was typed inconsistently) - without this, those get treated as two
  // different games and split into separate groups instead of one.
  function normalizeGameLabel(name){
    return (name || '').trim().replace(/\s*\(\d+\)\s*$/, '').trim();
  }
  function gameKeyForBadge(badge){
    var raw = (badge.game || '').trim();
    if (!raw) return '__unknown__';
    return (normalizeGameLabel(raw) || raw).toLowerCase();
  }
  function gameLabelForKey(key, sampleBadge){
    if (key === '__unknown__') return 'Unknown game';
    var raw = (sampleBadge && sampleBadge.game) ? sampleBadge.game.trim() : key;
    return normalizeGameLabel(raw) || raw;
  }

  function createFavButton(isFav, label, onToggle){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'fav-btn' + (isFav ? ' is-fav' : '');
    btn.setAttribute('aria-label', (isFav ? 'Unfavorite ' : 'Favorite ') + label);
    btn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
    btn.textContent = isFav ? '★' : '☆';
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      e.preventDefault();
      var nowFav = onToggle();
      btn.classList.toggle('is-fav', nowFav);
      btn.setAttribute('aria-pressed', nowFav ? 'true' : 'false');
      btn.setAttribute('aria-label', (nowFav ? 'Unfavorite ' : 'Favorite ') + label);
      btn.textContent = nowFav ? '★' : '☆';
    });
    return btn;
  }

  function partitionFavorites(items, isFavFn){
    var favs = [];
    var rest = [];
    items.forEach(function(item){
      if (isFavFn(item)) favs.push(item);
      else rest.push(item);
    });
    return favs.concat(rest);
  }

  // ---- Sticky notes (local only, per page) ----
  var stickyNotesByPage = {}; // pageKey -> note[]
  var notesSaveTimer = null;
  var noteDragState = null;
  var noteResizeState = null;

  function getNotesPageKey(){
    if (currentBadger) return 'badger:' + currentBadger.id;
    return 'home';
  }

  function getPageNotes(pageKey){
    if (!stickyNotesByPage[pageKey]) stickyNotesByPage[pageKey] = [];
    return stickyNotesByPage[pageKey];
  }

  async function loadStickyNotes(){
    try {
      var raw = await storageGet('sticky-notes');
      var parsed = raw ? JSON.parse(raw) : {};
      if (Array.isArray(parsed)){
        stickyNotesByPage = { home: parsed };
      } else {
        stickyNotesByPage = parsed || {};
      }
    } catch(e){ stickyNotesByPage = {}; }
    renderStickyNotes();
  }

  function saveStickyNotes(){
    clearTimeout(notesSaveTimer);
    notesSaveTimer = setTimeout(function(){
      notesSaveTimer = null;
      storageSet('sticky-notes', JSON.stringify(stickyNotesByPage));
    }, 200);
  }
  // Immediately writes any pending (debounced) notes save to storage.
  // Used before export so a note typed seconds ago isn't missed.
  async function flushStickyNotes(){
    clearTimeout(notesSaveTimer);
    notesSaveTimer = null;
    await storageSet('sticky-notes', JSON.stringify(stickyNotesByPage));
  }

  function renderStickyNotes(){
    var layer = document.getElementById('notesLayer');
    if (!layer) return;
    layer.innerHTML = '';
    var pageKey = getNotesPageKey();
    getPageNotes(pageKey).forEach(function(note){
      layer.appendChild(buildStickyNoteEl(note, pageKey));
    });
  }

  function buildStickyNoteEl(note, pageKey){
    var el = document.createElement('div');
    el.className = 'sticky-note';
    el.dataset.noteId = note.id;
    el.style.left = (note.x || 40) + 'px';
    el.style.top = (note.y || 40) + 'px';
    el.style.width = (note.width || 200) + 'px';
    el.style.height = (note.height || 140) + 'px';

    var header = document.createElement('div');
    header.className = 'sticky-note-header';
    var title = document.createElement('span');
    title.className = 'sticky-note-title';
    title.textContent = 'Note';
    var del = document.createElement('button');
    del.type = 'button';
    del.className = 'sticky-note-delete';
    del.setAttribute('aria-label', 'Delete note');
    del.textContent = '✕';
    del.addEventListener('click', function(e){
      e.stopPropagation();
      stickyNotesByPage[pageKey] = getPageNotes(pageKey).filter(function(n){ return n.id !== note.id; });
      saveStickyNotes();
      el.remove();
    });
    header.appendChild(title);
    header.appendChild(del);

    var body = document.createElement('div');
    body.className = 'sticky-note-body';
    body.contentEditable = 'true';
    body.spellcheck = true;
    body.textContent = note.text || '';
    body.addEventListener('input', function(){
      note.text = body.textContent;
      saveStickyNotes();
    });

    var resize = document.createElement('div');
    resize.className = 'sticky-note-resize';
    resize.setAttribute('aria-hidden', 'true');

    header.addEventListener('pointerdown', function(e){
      if (e.target === del) return;
      noteDragState = {
        id: note.id,
        startX: e.clientX,
        startY: e.clientY,
        origX: note.x || 40,
        origY: note.y || 40,
        el: el
      };
      header.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    header.addEventListener('pointermove', function(e){
      if (!noteDragState || noteDragState.id !== note.id) return;
      note.x = Math.max(0, noteDragState.origX + (e.clientX - noteDragState.startX));
      note.y = Math.max(0, noteDragState.origY + (e.clientY - noteDragState.startY));
      el.style.left = note.x + 'px';
      el.style.top = note.y + 'px';
    });
    header.addEventListener('pointerup', function(e){
      if (!noteDragState || noteDragState.id !== note.id) return;
      noteDragState = null;
      try { header.releasePointerCapture(e.pointerId); } catch(err){}
      saveStickyNotes();
    });
    header.addEventListener('pointercancel', function(){
      if (noteDragState && noteDragState.id === note.id) noteDragState = null;
    });

    resize.addEventListener('pointerdown', function(e){
      noteResizeState = {
        id: note.id,
        startX: e.clientX,
        startY: e.clientY,
        origW: note.width || 200,
        origH: note.height || 140,
        el: el
      };
      resize.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
    });
    resize.addEventListener('pointermove', function(e){
      if (!noteResizeState || noteResizeState.id !== note.id) return;
      note.width = Math.max(120, noteResizeState.origW + (e.clientX - noteResizeState.startX));
      note.height = Math.max(80, noteResizeState.origH + (e.clientY - noteResizeState.startY));
      el.style.width = note.width + 'px';
      el.style.height = note.height + 'px';
    });
    resize.addEventListener('pointerup', function(e){
      if (!noteResizeState || noteResizeState.id !== note.id) return;
      noteResizeState = null;
      try { resize.releasePointerCapture(e.pointerId); } catch(err){}
      saveStickyNotes();
    });
    resize.addEventListener('pointercancel', function(){
      if (noteResizeState && noteResizeState.id === note.id) noteResizeState = null;
    });

    el.appendChild(header);
    el.appendChild(body);
    el.appendChild(resize);
    return el;
  }

  function addStickyNote(x, y){
    var pageKey = getNotesPageKey();
    var notes = getPageNotes(pageKey);
    var note = {
      id: 'n-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
      x: typeof x === 'number' ? x : Math.max(20, (window.innerWidth / 2) - 100),
      y: typeof y === 'number' ? y : Math.max(20, (window.innerHeight / 2) - 70),
      width: 220,
      height: 150,
      text: ''
    };
    notes.push(note);
    saveStickyNotes();
    var layer = document.getElementById('notesLayer');
    if (layer){
      var el = buildStickyNoteEl(note, pageKey);
      layer.appendChild(el);
      var body = el.querySelector('.sticky-note-body');
      if (body) body.focus();
    }
  }

  document.getElementById('addNoteBtn').addEventListener('click', function(){
    addStickyNote();
  });

  function highlightMatch(name, filter){
    if (!filter) return document.createTextNode(name);
    var idx = name.toLowerCase().indexOf(filter.toLowerCase());
    if (idx === -1) return document.createTextNode(name);
    var frag = document.createDocumentFragment();
    frag.appendChild(document.createTextNode(name.slice(0, idx)));
    var mark = document.createElement('mark');
    mark.textContent = name.slice(idx, idx + filter.length);
    frag.appendChild(mark);
    frag.appendChild(document.createTextNode(name.slice(idx + filter.length)));
    return frag;
  }

  // ---------------- Home view ----------------

  async function updateBadgerCounter(){
    var total = BADGERS.length;
    var done = 0;
    try {
      var results = await Promise.all(BADGERS.map(function(b){
        return storageGet('badgerdone-' + b.id);
      }));
      done = results.filter(function(v){ return v === '1'; }).length;
    } catch(e){ console.error('updateBadgerCounter failed:', e); }
    document.getElementById('badgerCounterCount').textContent = done + ' / ' + total;
  }

  // Pulls the numeric game/place ID out of a Roblox game link, e.g.
  // "https://www.roblox.com/games/15742018443/A-Timeless-Adventure" -> "15742018443"
  function extractGameId(gameLink){
    if (!gameLink) return '';
    var match = gameLink.match(/\/games\/(\d+)/);
    return match ? match[1] : '';
  }

  async function renderHome(filter){
    var listEl = document.getElementById('badgerList');
    var emptyEl = document.getElementById('homeEmpty');
    listEl.innerHTML = '';
    var f = (filter||'').toLowerCase().trim();
    var matches = BADGERS.filter(function(b){
      if (!f) return true;
      if (b.name.toLowerCase().indexOf(f) !== -1) return true;
      if (getTags(b.id).some(function(t){ return t.toLowerCase().indexOf(f) !== -1; })) return true;
      return extractGameId(b.gameLink).indexOf(f) !== -1;
    });

    var difficultyFilterEl = document.getElementById('difficultyFilterInput');
    var df = difficultyFilterEl ? difficultyFilterEl.value.toLowerCase().trim() : '';
    if (df){
      matches = matches.filter(function(b){ return (b.difficulty || '').toLowerCase().indexOf(df) !== -1; });
    }

    var collectionFilterEl = document.getElementById('collectionFilterSelect');
    var collectionId = collectionFilterEl ? collectionFilterEl.value : '';
    if (collectionId){
      var col = collections.find(function(c){ return c.id === collectionId; });
      var idSet = col ? new Set(col.badgerIds) : new Set();
      matches = matches.filter(function(b){ return idSet.has(b.id); });
    }

    var sortSelectEl = document.getElementById('homeSortSelect');
    var sortMode = sortSelectEl ? sortSelectEl.value : '';
    var sortStatusEl = document.getElementById('homeSortStatus');

    if (sortMode === 'az'){
      matches.sort(function(a,b){ return a.name.localeCompare(b.name); });
    } else if (sortMode === 'za'){
      matches.sort(function(a,b){ return b.name.localeCompare(a.name); });
    } else if (sortMode === 'easiest'){
      matches.sort(function(a,b){ return difficultyRank(a.difficulty) - difficultyRank(b.difficulty); });
    } else if (sortMode === 'hardest'){
      matches.sort(function(a,b){ return difficultyRank(b.difficulty) - difficultyRank(a.difficulty); });
    } else if (sortMode === 'most' || sortMode === 'least'){
      if (sortStatusEl) sortStatusEl.textContent = 'Counting badges\u2026';
      var counts = await Promise.all(matches.map(async function(b){
        var effective = await getEffectiveBadges(b);
        return (effective.badges || []).length;
      }));
      var withCounts = matches.map(function(b, idx){ return { badger: b, count: counts[idx] }; });
      withCounts.sort(function(a, b){ return sortMode === 'most' ? b.count - a.count : a.count - b.count; });
      matches = withCounts.map(function(x){ return x.badger; });
      if (sortStatusEl) sortStatusEl.textContent = '';
    } else if (sortMode === 'custom'){
      matches = applyCustomOrder(matches);
    }

    // Custom order is the user's own explicit arrangement - don't re-shuffle
    // it by pulling favorites to the top.
    if (sortMode !== 'custom'){
      matches = partitionFavorites(matches, function(b){ return isBadgerFavorite(b.id); });
    }

    document.getElementById('searchClearBtn').classList.toggle('visible', !!filter);

    if (matches.length === 0){
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';

    for (var i=0;i<matches.length;i++){
      (function(badger, index){
        var card = document.createElement('div');
        card.className = 'badger-card' + (isBadgerFavorite(badger.id) ? ' badger-card-fav' : '');
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('data-index', index);

        var favBtn = createFavButton(isBadgerFavorite(badger.id), badger.name, function(){
          toggleBadgerFavorite(badger.id);
          card.classList.toggle('badger-card-fav', isBadgerFavorite(badger.id));
          renderHome(document.getElementById('homeSearch').value);
          return isBadgerFavorite(badger.id);
        });

        var seal = document.createElement('input');
        seal.type = 'checkbox';
        seal.className = 'seal badger-seal';
        seal.setAttribute('aria-label', 'Mark ' + badger.name + ' badger as complete');
        seal.addEventListener('click', function(e){ e.stopPropagation(); });
        seal.addEventListener('change', function(){
  storageSet('badgerdone-' + badger.id, seal.checked ? '1' : '');
  card.classList.toggle('badger-card-done', seal.checked);
  if (seal.checked) recordActivity();
  updateBadgerCounter();
});
        storageGet('badgerdone-' + badger.id).then(function(v){
          seal.checked = v === '1';
          card.classList.toggle('badger-card-done', seal.checked);
        });

        var left = document.createElement('div');
        left.className = 'badger-card-left';
        var nameDiv = document.createElement('div');
        nameDiv.className = 'badger-card-name';
        nameDiv.appendChild(highlightMatch(badger.name, filter));
        var diffDiv = document.createElement('div');
        diffDiv.className = 'badger-card-diff';
        diffDiv.textContent = badger.difficulty || '';
        diffDiv.style.color = difficultyColor(badger.difficulty);
        left.appendChild(nameDiv);
        left.appendChild(diffDiv);
        var tags = getTags(badger.id);
        if (tags.length){
          var tagsDiv = document.createElement('div');
          tagsDiv.className = 'badger-card-tags';
          tags.forEach(function(t){
            var chip = document.createElement('span');
            chip.className = 'tag-chip';
            chip.textContent = t;
            tagsDiv.appendChild(chip);
          });
          left.appendChild(tagsDiv);
        }

        var right = document.createElement('div');
        right.className = 'badger-card-right';
        var countDiv = document.createElement('div');
        countDiv.className = 'badger-card-count';
        countDiv.textContent = '… / ' + badger.badges.length;
        var barTrack = document.createElement('div');
        barTrack.className = 'badger-card-bar-track';
        var barFill = document.createElement('div');
        barFill.className = 'badger-card-bar-fill';
        barTrack.appendChild(barFill);
        right.appendChild(countDiv);
        right.appendChild(barTrack);

        var collectionBtn = document.createElement('button');
        collectionBtn.type = 'button';
        collectionBtn.className = 'badger-card-collection-btn';
        collectionBtn.title = 'Add to a collection';
        collectionBtn.setAttribute('aria-label', 'Add ' + badger.name + ' to a collection');
        collectionBtn.textContent = '📁';
        collectionBtn.addEventListener('click', function(e){
          e.stopPropagation();
          e.preventDefault();
          openCollectionQuickAdd(badger, collectionBtn);
        });

        card.appendChild(seal);
        if (sortMode === 'custom'){
          var handle = document.createElement('span');
          handle.className = 'drag-handle';
          handle.textContent = '⠿';
          handle.title = 'Drag to reorder';
          card.appendChild(handle);
          card.setAttribute('draggable', 'true');
          card.addEventListener('dragstart', function(e){
            card.classList.add('dragging');
            e.dataTransfer.setData('text/plain', badger.id);
            e.dataTransfer.effectAllowed = 'move';
          });
          card.addEventListener('dragend', function(){ card.classList.remove('dragging'); });
          card.addEventListener('dragover', function(e){
            e.preventDefault();
            card.classList.add('drag-over');
          });
          card.addEventListener('dragleave', function(){ card.classList.remove('drag-over'); });
          card.addEventListener('drop', function(e){
            e.preventDefault();
            card.classList.remove('drag-over');
            var draggedId = e.dataTransfer.getData('text/plain');
            if (!draggedId || draggedId === badger.id) return;
            reorderCustomOrder(draggedId, badger.id);
            renderHome(document.getElementById('homeSearch').value);
          });
        }
        card.appendChild(favBtn);
        card.appendChild(collectionBtn);
        card.appendChild(left);
        card.appendChild(right);
        card.addEventListener('click', function(){ openBadger(badger); });
        card.addEventListener('keydown', function(e){
          if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openBadger(badger); }
        });
        listEl.appendChild(card);

        Promise.all([getEffectiveBadges(badger), loadBadgerProgress(badger.id)]).then(function(results){
          var effResult = results[0];
          var p = results[1];

          function paint(badges){
            var done = countDone(badger.id, badges, p);
            var total = badges.length;
            var pct = total ? Math.round((done/total)*100) : 0;
            countDiv.textContent = done + ' / ' + total;
            barFill.style.width = pct + '%';
          }

          paint(effResult.badges);
          if (effResult.pending){
            effResult.pending.then(function(fresh){
              if (fresh) paint(fresh.badges);
            });
          }
        }).catch(function(){
          // Sheet fetch totally failed and somehow wasn't caught internally -
          // fall back to whatever manual badges exist rather than leaving
          // the card stuck on its loading placeholder forever.
          var fallback = badger.badges || [];
          countDiv.textContent = countDone(badger.id, fallback, {}) + ' / ' + fallback.length;
        });
      })(matches[i], i);
    }
    updateBadgerCounter();
  }

  var searchInput = document.getElementById('homeSearch');
  var clearBtn = document.getElementById('searchClearBtn');

  document.getElementById('homeSortSelect').addEventListener('change', function(){
    renderHome(searchInput.value);
  });

  document.getElementById('difficultyFilterInput').addEventListener('input', function(){
    renderHome(searchInput.value);
  });

  searchInput.addEventListener('input', function(){ renderHome(this.value); });
  clearBtn.addEventListener('click', function(){ searchInput.value=''; searchInput.focus(); renderHome(''); });
  searchInput.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){ searchInput.value=''; renderHome(''); return; }
    if (e.key === 'Enter'){ var first = document.querySelector('.badger-card[data-index="0"]'); if (first) first.click(); return; }
    if (e.key === 'ArrowDown'){ e.preventDefault(); var fc = document.querySelector('.badger-card'); if (fc) fc.focus(); }
  });

  function renderIdSearchResults(matches, showMatchedBadges){
    var el = document.getElementById('idSearchResults');
    el.innerHTML = '';
    if (matches.length === 0){
      el.textContent = 'No matches found.';
      return;
    }
    matches.forEach(function(entry){
      var badger = showMatchedBadges ? entry.badger : entry;
      var wrap = document.createElement('div');
      wrap.className = 'id-search-result';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'badger-card';
      btn.textContent = badger.name;
      btn.addEventListener('click', function(){ openBadger(badger); });
      wrap.appendChild(btn);

      if (showMatchedBadges && entry.badges && entry.badges.length){
        var matchList = document.createElement('div');
        matchList.className = 'id-search-matched-badges';
        var label = document.createElement('span');
        label.className = 'id-search-matched-label';
        label.textContent = 'Matched: ';
        matchList.appendChild(label);
        matchList.appendChild(document.createTextNode(
          entry.badges.slice(0, 6).map(function(b){ return b.name || '(unnamed badge)'; }).join(', ') +
          (entry.badges.length > 6 ? ', +' + (entry.badges.length - 6) + ' more' : '')
        ));
        wrap.appendChild(matchList);
      }
      el.appendChild(wrap);
    });
  }

  document.getElementById('idSearchToggleBtn').addEventListener('click', function(){
    var panel = document.getElementById('idSearchPanel');
    var isHidden = panel.style.display === 'none';
    panel.style.display = isHidden ? 'block' : 'none';
    if (isHidden) document.getElementById('idSearchInput').focus();
  });

  var idSearchCancelled = false;

  function runIdSearch(){
    var btn = document.getElementById('idSearchBtn');
    var cancelBtn = document.getElementById('idSearchCancelBtn');
    var input = document.getElementById('idSearchInput');
    var statusEl = document.getElementById('idSearchStatus');
    var resultsEl = document.getElementById('idSearchResults');
    var query = input.value.trim();

    if (!query){
      statusEl.textContent = 'Enter a badge/game name or ID first.';
      statusEl.className = 'list-status err';
      return;
    }

    // A pure number is treated as an ID (needs the slower per-badge/game
    // lookup below); anything else is a fast local name search.
    var isIdQuery = /^\d+$/.test(query);

    idSearchCancelled = false;
    btn.disabled = true;
    cancelBtn.style.display = isIdQuery ? 'inline-flex' : 'none';
    resultsEl.innerHTML = '';
    statusEl.className = 'list-status';
    statusEl.textContent = isIdQuery ? 'Starting search\u2026' : 'Searching every badger\u2026';

    var searchFn = isIdQuery ? findBadgersByBadgeOrGameId : findBadgersByBadgeName;

    searchFn(
      query,
      function(i, total, name, detail){
        statusEl.textContent = 'Checking badger ' + i + ' of ' + total + ' (' + name + ')' + (detail || '') + '\u2026';
      },
      function(){ return idSearchCancelled; }
    ).then(function(matches){
      statusEl.textContent = (idSearchCancelled ? 'Search stopped early. ' : '') + matches.length + ' badger(s) found.';
      renderIdSearchResults(matches, !isIdQuery);
    }).catch(function(e){
      statusEl.textContent = 'Search failed: ' + e.message;
      statusEl.className = 'list-status err';
    }).finally(function(){
      btn.disabled = false;
      cancelBtn.style.display = 'none';
    });
  }

  document.getElementById('idSearchBtn').addEventListener('click', runIdSearch);
  document.getElementById('idSearchCancelBtn').addEventListener('click', function(){
    idSearchCancelled = true;
  });
  document.getElementById('idSearchInput').addEventListener('keydown', function(e){
    if (e.key === 'Enter') runIdSearch();
  });
  document.getElementById('badgerList').addEventListener('keydown', function(e){
    var cards = Array.prototype.slice.call(document.querySelectorAll('.badger-card'));
    var currentIdx = cards.indexOf(document.activeElement);
    if (e.key === 'ArrowDown'){ e.preventDefault(); var next = cards[currentIdx+1]; if (next) next.focus(); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); if (currentIdx===0){ searchInput.focus(); } else if (currentIdx>0){ cards[currentIdx-1].focus(); } }
  });

  // ---------------- Deep-linking (for Discord bot links etc.) ----------------
  // Matches a URL like #badger=some-id (or a name/partial name) to a badger,
  // so external links can jump straight to one badger's checklist.
  function findBadgerBySlug(q){
    if (!q) return null;
    var exactId = BADGERS.find(function(b){ return b.id === q; });
    if (exactId) return exactId;
    var lower = q.toLowerCase();
    var exactName = BADGERS.find(function(b){ return (b.name || '').toLowerCase() === lower; });
    if (exactName) return exactName;
    return BADGERS.find(function(b){ return (b.name || '').toLowerCase().indexOf(lower) !== -1; }) || null;
  }

  // ---------------- Detail view ----------------
  async function openBadger(badger){
    currentBadger = badger;
    lastStatsPct = null;
    progressData = await loadBadgerProgress(badger.id);
    await loadGameFavorites(badger.id);
    await loadBadgeFavorites(badger.id);
    recordRecentBadger(badger.id);
    renderDetailTags();

    try { history.replaceState(null, '', '#badger=' + encodeURIComponent(badger.id)); } catch(e){}

    document.getElementById('homeView').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';
    window.scrollTo(0, 0);
    renderStickyNotes();

    var nameRow = document.getElementById('detailNameRow');
    if (!nameRow){
      nameRow = document.createElement('div');
      nameRow.id = 'detailNameRow';
      nameRow.className = 'detail-fav-row';
      var nameEl = document.getElementById('detailName');
      nameEl.parentNode.insertBefore(nameRow, nameEl);
      nameRow.appendChild(nameEl);
    }
    nameRow.querySelectorAll('.fav-btn').forEach(function(el){ el.remove(); });
    var detailFavBtn = createFavButton(isBadgerFavorite(badger.id), badger.name, function(){
      toggleBadgerFavorite(badger.id);
      return isBadgerFavorite(badger.id);
    });
    nameRow.insertBefore(detailFavBtn, document.getElementById('detailName'));

    document.getElementById('detailName').textContent = badger.name;
    var diffEl = document.getElementById('detailDifficulty');
    diffEl.textContent = badger.difficulty || '';
    diffEl.style.color = difficultyColor(badger.difficulty);

    var linkEl = document.getElementById('detailGameLink');
    linkEl.innerHTML = '';
    if (badger.gameLink){
      var a = document.createElement('a');
      a.href = badger.gameLink; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = 'Open game ↗';
      linkEl.appendChild(a);
    }

    document.getElementById('badgeSearch').value = '';
    document.getElementById('hideDoneBox').checked = false;
    document.getElementById('refreshBtn').style.display = badger.sheetUrl ? 'inline-flex' : 'none';

    // Always start from the live `badges` config - never cached, so code
    // edits show up immediately every time.
    currentBadges = badger.badges || [];
    setListStatus(badger.sheetUrl ? 'Loading checklist from sheet…' : '', false);
    renderMilestones();
    renderList();
    updateStats();

    await refreshBadger(badger);
  }

  // Merges in the sheet (if any) and runs Roblox enrichment - fast for badge
  // IDs seen before (pulled from the shared cache, no network), and only
  // slow for genuinely new ones. Called automatically on open, and manually
  // via the Refresh button to pick up new sheet rows.
  async function refreshBadger(badger){
    var renderPending = false;
    var renderTimer = null;
    function scheduleRender(){
      if (currentBadger !== badger) return; // user navigated away before this resolved
      if (renderTimer){ renderPending = true; return; }
      renderList();
      updateStats();
      renderTimer = setTimeout(function(){
        renderTimer = null;
        if (renderPending){ renderPending = false; scheduleRender(); }
      }, 400);
    }

    if (badger.sheetUrl){
      var result = await getEffectiveBadges(badger);
      if (currentBadger !== badger) return; // user navigated away before this resolved
      currentBadges = result.badges;
      setListStatus(result.status, result.isErr);
      renderMilestones();
      renderList();
      updateStats();

      if (result.pending){
        result.pending.then(async function(fresh){
          if (!fresh) return; // background refresh failed - keep showing cached data
          if (currentBadger !== badger) return; // user navigated away before this resolved
          currentBadges = fresh.badges;
          setListStatus(fresh.status, false);
          renderMilestones();
          renderList();
          updateStats();
          // These are brand new badge objects straight from the sheet - they
          // haven't been through Roblox enrichment yet, so re-apply it now
          // (instant for anything already in the shared cache) instead of
          // leaving images/names blank until the badger is reopened.
          await enrichBadgesFromRoblox(currentBadges, scheduleRender);
          if (currentBadger === badger){ renderList(); updateStats(); }
        });
      }
    } else {
      setListStatus('', false);
    }

    await enrichBadgesFromRoblox(currentBadges, scheduleRender);

    // Make sure the very last batch of changes always lands, even if it
    // arrived during the trailing 400ms cooldown window above.
    if (currentBadger === badger){
      renderList();
      updateStats();
    }
  }

  document.getElementById('refreshBtn').addEventListener('click', function(){
    if (!currentBadger) return;
    setListStatus('Refreshing from sheet…', false);
    refreshBadger(currentBadger);
  });

  function setListStatus(msg, isErr){
    var el = document.getElementById('listStatus');
    if (!el) return;
    el.textContent = msg;
    el.className = isErr ? 'list-status err' : 'list-status';
  }

  document.getElementById('backBtn').addEventListener('click', function(){
    try { history.replaceState(null, '', location.pathname + location.search); } catch(e){}
    currentBadger = null;
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('homeView').style.display = 'block';
    window.scrollTo(0, 0);
    renderStickyNotes();
    renderHome(document.getElementById('homeSearch').value);
  });

  function renderMilestones(){
  var container = document.getElementById('milestones');
  container.innerHTML = '';

  (currentBadger.milestones || []).forEach(function(m){

    var done;

    if (m.type){
      done = currentBadges.filter(function(b){
      var badgeTypes = Array.isArray(b.type) ? b.type : [b.type];

      return (
          badgeTypes.some(function(type){
              var milestoneTypes = Array.isArray(m.type) ? m.type : [m.type];

              return milestoneTypes.some(function(mt) {
                  return (type || "").toLowerCase() === (mt || "").toLowerCase();
              });
          }) &&
          !!progressData[badgeKey(currentBadger.id, b)]
      );
  }).length;
    } else {
      done = countDone(currentBadger.id, currentBadges, progressData);
    }

    var pct = m.target > 0
      ? Math.min(100, Math.round((done / m.target) * 1000) / 10)
      : 0;

    var pill = document.createElement('div');
    pill.className = 'milestone' + (pct >= 100 ? ' milestone-done' : '');
    pill.textContent = m.name + ': ' + done + '/' + m.target + ' (' + pct + '%)';
    container.appendChild(pill);
  });
}

  function renderBadgeRow(b, listEl){
    var k = badgeKey(currentBadger.id, b);
    var done = !!progressData[k];

    var row = document.createElement('div');
    row.className = 'row' + (done ? ' done' : '');
    if (b.bgColor) row.style.backgroundColor = b.bgColor;

    var seal = document.createElement('input');
    seal.type = 'checkbox';
    seal.className = 'seal';
    seal.checked = done;
    seal.setAttribute('aria-label', 'Mark ' + b.name + ' as collected');
    seal.addEventListener('change', function(){
      progressData[k] = seal.checked;
      saveBadgerProgress();
      if (seal.checked) recordActivity();
      var hideDone = document.getElementById('hideDoneBox').checked;
      if (hideDone && seal.checked){
        // Give the check a moment to register visually before the row
        // disappears - an instant re-render here yanks the row out from
        // under the user's finger and snaps the next item into its place,
        // which reads as the list randomly "teleporting."
        row.classList.add('row-removing');
        setTimeout(function(){
          // If they unchecked it again during the delay, cancel the removal.
          if (progressData[k] && document.getElementById('hideDoneBox').checked){
            renderList();
          } else {
            row.classList.remove('row-removing');
            row.classList.toggle('done', seal.checked);
          }
        }, 350);
      } else if (hideDone && !seal.checked){
        renderList();
      } else {
        row.classList.toggle('done', seal.checked);
      }
      updateStats();
    });
    row.appendChild(seal);

    var badgeFavBtn = createFavButton(isBadgeFavorite(currentBadger.id, b), b.name || 'this badge', function(){
      var nowFav = toggleBadgeFavorite(currentBadger.id, b);
      if (document.getElementById('favBadgesOnlyBox').checked && !nowFav){
        renderList();
      }
      return nowFav;
    });
    row.appendChild(badgeFavBtn);

    if (b.image){
      var img = document.createElement('img');
      img.className = 'row-image';
      img.src = b.image;
      img.alt = b.name;
      img.loading = 'lazy';
      img.addEventListener('error', function(){
        var ph = document.createElement('div');
        ph.className = 'row-image-placeholder';
        ph.textContent = '🏅';
        img.replaceWith(ph);
      });
      row.appendChild(img);
    } else {
      var placeholder = document.createElement('div');
      placeholder.className = 'row-image-placeholder';
      placeholder.textContent = '🏅';
      row.appendChild(placeholder);
    }

    var main = document.createElement('div');
    main.className = 'row-main';

    var name = document.createElement('div');
    name.className = 'row-name';
    name.textContent = b.name || 'Loading badge name…';
    name.style.color = b.nameColor ? b.nameColor : (!b.name ? 'var(--text-faint)' : '');
    main.appendChild(name);

    if (b.description){
      var desc = document.createElement('div');
      desc.className = 'row-desc';
      desc.textContent = b.description;
      if (b.descriptionColor) desc.style.color = b.descriptionColor;
      main.appendChild(desc);
    }

    const badgeTypes = Array.isArray(b.type) ? b.type : [b.type];
    const typeText = badgeTypes.filter(Boolean).join(", ");

    if (typeText.trim()) {
        var typeSpan = document.createElement('span');
        typeSpan.className = 'row-type';
        typeSpan.textContent = 'Type: ' + typeText;
        typeSpan.style.color = b.typeColor ? b.typeColor : difficultyColor;
        main.appendChild(typeSpan);
    }

    if (b.game || b.link){
      var meta = document.createElement('div');
      meta.className = 'row-meta';
      if (b.game){
        var gameSpan = document.createElement('span');
        gameSpan.textContent = b.game;
        if (b.gameColor) gameSpan.style.color = b.gameColor;
        meta.appendChild(gameSpan);
      }
      if (b.link){
        var a = document.createElement('a');
        a.href = b.link; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = 'View badge ↗';
        meta.appendChild(a);
      }
      main.appendChild(meta);
    }

    row.appendChild(main);
    listEl.appendChild(row);
  }

  function renderList(){
    var listEl = document.getElementById('list');
    var search = document.getElementById('badgeSearch').value.toLowerCase();
    var hideDone = document.getElementById('hideDoneBox').checked;
    var typeFilter = document.getElementById('badgeTypeFilter').value.toLowerCase().trim();
    var favOnly = document.getElementById('favBadgesOnlyBox').checked;
    listEl.innerHTML = '';

    var visible = currentBadges.filter(function(b){
      var done = !!progressData[badgeKey(currentBadger.id, b)];
      if (hideDone && done) return false;
      if (favOnly && !isBadgeFavorite(currentBadger.id, b)) return false;
      if (!badgeTypesMatch(b, typeFilter)) return false;
      if (search && (b.name||'').toLowerCase().indexOf(search) === -1 &&
          (b.game||'').toLowerCase().indexOf(search) === -1) return false;
      return true;
    });

    var groups = {};
    var groupOrder = [];
    visible.forEach(function(b){
      var gk = gameKeyForBadge(b);
      if (!groups[gk]){
        groups[gk] = { key: gk, badges: [], sample: b };
        groupOrder.push(gk);
      }
      groups[gk].badges.push(b);
    });

    var favSet = gameFavoritesByBadger[currentBadger.id] || new Set();
    // Keep games in the order they appear in the badge list (spreadsheet/code
    // order) - only favorites get pulled to the front. Array.sort is stable,
    // so a tie (0) leaves non-favorites in their original relative order.
    groupOrder.sort(function(a, b){
      var af = favSet.has(a) ? 0 : 1;
      var bf = favSet.has(b) ? 0 : 1;
      return af - bf;
    });

    groupOrder.forEach(function(gk){
      var group = groups[gk];
      var label = gameLabelForKey(gk, group.sample);
      var isFav = favSet.has(gk);

      var section = document.createElement('div');
      section.className = 'game-group';

      var header = document.createElement('div');
      header.className = 'game-group-header' + (isFav ? ' is-fav' : '');
      var favBtn = createFavButton(isFav, label, function(){
        if (!gameFavoritesByBadger[currentBadger.id]) gameFavoritesByBadger[currentBadger.id] = new Set();
        var set = gameFavoritesByBadger[currentBadger.id];
        if (set.has(gk)) set.delete(gk);
        else set.add(gk);
        saveGameFavorites(currentBadger.id);
        renderList();
        return set.has(gk);
      });
      var title = document.createElement('span');
      title.textContent = label + ' (' + group.badges.length + ')';
      header.appendChild(favBtn);
      header.appendChild(title);
      section.appendChild(header);

      var badgeWrap = document.createElement('div');
      badgeWrap.className = 'game-group-badges';
      group.badges.forEach(function(b){ renderBadgeRow(b, badgeWrap); });
      section.appendChild(badgeWrap);
      listEl.appendChild(section);
    });
  }

  function updateTypeFilterVisibility(){
    var input = document.getElementById('badgeTypeFilter');
    if (!input) return;
    var hasAnyType = currentBadges.some(function(b){
      var types = Array.isArray(b.type) ? b.type : [b.type];
      return types.some(function(t){ return (t || '').trim() !== ''; });
    });
    if (!hasAnyType && input.value){ input.value = ''; }
    input.style.display = hasAnyType ? '' : 'none';
  }

  var lastStatsPct = null;
  function updateStats(){
    var total = currentBadges.length;
    var done = countDone(currentBadger.id, currentBadges, progressData);
    var pct = total ? Math.round((done/total)*100) : 0;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('statCount').textContent = done + ' / ' + total;
    document.getElementById('statPct').textContent = pct + '%';
    renderMilestones();
    renderTimeEstimate();
    updateTypeFilterVisibility();
    if (total > 0 && pct === 100 && lastStatsPct !== null && lastStatsPct !== 100) fireConfetti();
    lastStatsPct = pct;
  }

  document.getElementById('badgeSearch').addEventListener('input', renderList);
  document.getElementById('hideDoneBox').addEventListener('change', renderList);
  document.getElementById('badgeTypeFilter').addEventListener('input', renderList);
  document.getElementById('favBadgesOnlyBox').addEventListener('change', renderList);

  document.getElementById('checkAllBtn').addEventListener('click', function(){
    currentBadges.forEach(function(b){ progressData[badgeKey(currentBadger.id, b)] = true; });
    saveBadgerProgress();
    recordActivity();
    renderList();
    updateStats();
  });
  document.getElementById('uncheckAllBtn').addEventListener('click', function(){
    currentBadges.forEach(function(b){ progressData[badgeKey(currentBadger.id, b)] = false; });
    saveBadgerProgress();
    renderList();
    updateStats();
  });

  // ---- Tag chips on the detail page ----
  function renderDetailTags(){
    var chipsEl = document.getElementById('detailTagChips');
    if (!chipsEl || !currentBadger) return;
    chipsEl.innerHTML = '';
    getTags(currentBadger.id).forEach(function(tag){
      var chip = document.createElement('span');
      chip.className = 'tag-chip';
      var label = document.createElement('span');
      label.textContent = tag;
      var removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = '✕';
      removeBtn.setAttribute('aria-label', 'Remove tag ' + tag);
      removeBtn.addEventListener('click', function(){
        removeTag(currentBadger.id, tag);
        renderDetailTags();
      });
      chip.appendChild(label);
      chip.appendChild(removeBtn);
      chipsEl.appendChild(chip);
    });
  }
  var detailTagInput = document.getElementById('detailTagInput');
  if (detailTagInput){
    detailTagInput.addEventListener('keydown', function(e){
      if (e.key === 'Enter'){
        e.preventDefault();
        if (!currentBadger) return;
        addTag(currentBadger.id, detailTagInput.value);
        detailTagInput.value = '';
        renderDetailTags();
      }
    });
  }

  // ---- Custom drag-to-reorder ----
  // Reorders the persisted custom order (extended with any badgers missing
  // from it, in their natural position) so drag-and-drop works correctly
  // even while a search/difficulty filter is narrowing what's on screen.
  function reorderCustomOrder(draggedId, targetId){
    var base = customOrder.length ? customOrder.slice() : BADGERS.map(function(b){ return b.id; });
    var seen = {};
    base.forEach(function(id){ seen[id] = true; });
    BADGERS.forEach(function(b){ if (!seen[b.id]){ base.push(b.id); seen[b.id] = true; } });
    base = base.filter(function(id){ return id !== draggedId; });
    var targetIdx = base.indexOf(targetId);
    if (targetIdx === -1) targetIdx = base.length;
    base.splice(targetIdx, 0, draggedId);
    customOrder = base;
    saveCustomOrder();
  }

  // ---- Collections: filter dropdown + manage panel ----
  function populateCollectionFilterOptions(){
    var sel = document.getElementById('collectionFilterSelect');
    if (sel){
      var current = sel.value;
      sel.innerHTML = '<option value="">All badgers</option>';
      collections.forEach(function(c){
        var opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name + ' (' + c.badgerIds.length + ')';
        sel.appendChild(opt);
      });
      if (collections.some(function(c){ return c.id === current; })) sel.value = current;
    }
    renderCollectionsManageList();
  }

  function renderCollectionsManageList(){
    var listEl = document.getElementById('collectionsList');
    if (!listEl) return;
    listEl.innerHTML = '';
    if (collections.length === 0){
      var empty = document.createElement('div');
      empty.className = 'list-status';
      empty.textContent = 'No collections yet. Add one above.';
      listEl.appendChild(empty);
      return;
    }
    collections.forEach(function(col){
      var row = document.createElement('div');
      row.className = 'collection-row';

      var nameWrap = document.createElement('div');
      var nameEl = document.createElement('div');
      nameEl.className = 'collection-row-name';
      nameEl.textContent = col.name;
      var countEl = document.createElement('div');
      countEl.className = 'collection-row-count';
      countEl.textContent = col.badgerIds.length + ' badger' + (col.badgerIds.length === 1 ? '' : 's');
      nameWrap.appendChild(nameEl);
      nameWrap.appendChild(countEl);

      var actions = document.createElement('div');
      actions.className = 'collection-row-actions';
      var editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.textContent = '✎ Badgers';
      editBtn.title = 'Choose which badgers are in this collection';
      var deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.textContent = '🗑';
      deleteBtn.title = 'Delete collection';
      deleteBtn.addEventListener('click', function(){
        if (!confirm('Delete collection "' + col.name + '"? This does not delete any badgers.')) return;
        deleteCollection(col.id);
        populateCollectionFilterOptions();
      });
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      row.appendChild(nameWrap);
      row.appendChild(actions);
      listEl.appendChild(row);

      var membershipList = document.createElement('div');
      membershipList.className = 'collection-membership-list';
      membershipList.style.display = 'none';
      BADGERS.forEach(function(b){
        var item = document.createElement('label');
        item.className = 'collection-membership-item';
        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = col.badgerIds.indexOf(b.id) !== -1;
        cb.addEventListener('change', function(){
          toggleBadgerInCollection(col.id, b.id);
          countEl.textContent = col.badgerIds.length + ' badger' + (col.badgerIds.length === 1 ? '' : 's');
          var optForThis = document.querySelector('#collectionFilterSelect option[value="' + col.id + '"]');
          if (optForThis) optForThis.textContent = col.name + ' (' + col.badgerIds.length + ')';
        });
        var span = document.createElement('span');
        span.textContent = b.name;
        item.appendChild(cb);
        item.appendChild(span);
        membershipList.appendChild(item);
      });
      editBtn.addEventListener('click', function(){
        membershipList.style.display = membershipList.style.display === 'none' ? 'flex' : 'none';
      });
      listEl.appendChild(membershipList);
    });
  }

  document.getElementById('manageCollectionsBtn').addEventListener('click', function(){
    var panel = document.getElementById('collectionsManagePanel');
    panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
  });
  document.getElementById('addCollectionBtn').addEventListener('click', function(){
    var input = document.getElementById('newCollectionName');
    if (createCollection(input.value)){
      input.value = '';
      populateCollectionFilterOptions();
    }
  });
  document.getElementById('newCollectionName').addEventListener('keydown', function(e){
    if (e.key === 'Enter'){ e.preventDefault(); document.getElementById('addCollectionBtn').click(); }
  });
  document.getElementById('collectionFilterSelect').addEventListener('change', function(){
    renderHome(searchInput.value);
  });

  // Small floating popup (from the 📁 button on a home card) for quickly
  // toggling which collections a single badger belongs to.
  var openCollectionPopup = null;
  function closeCollectionQuickAdd(){
    if (openCollectionPopup){ openCollectionPopup.remove(); openCollectionPopup = null; }
    document.removeEventListener('mousedown', handleOutsideCollectionClick);
  }
  function handleOutsideCollectionClick(e){
    if (openCollectionPopup && !openCollectionPopup.contains(e.target)) closeCollectionQuickAdd();
  }
  function openCollectionQuickAdd(badger, anchorBtn){
    if (openCollectionPopup){ closeCollectionQuickAdd(); return; }
    var popup = document.createElement('div');
    popup.className = 'collections-manage-panel';
    popup.style.position = 'fixed';
    var rect = anchorBtn.getBoundingClientRect();
    popup.style.top = (rect.bottom + 6) + 'px';
    popup.style.left = Math.max(8, rect.right - 220) + 'px';
    popup.style.width = '220px';
    popup.style.zIndex = 9600;

    if (collections.length === 0){
      var hint = document.createElement('div');
      hint.className = 'list-status';
      hint.textContent = 'No collections yet.';
      popup.appendChild(hint);
    } else {
      collections.forEach(function(col){
        var item = document.createElement('label');
        item.className = 'collection-membership-item';
        var cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = col.badgerIds.indexOf(badger.id) !== -1;
        cb.addEventListener('change', function(){
          toggleBadgerInCollection(col.id, badger.id);
          populateCollectionFilterOptions();
        });
        var span = document.createElement('span');
        span.textContent = col.name;
        item.appendChild(cb);
        item.appendChild(span);
        popup.appendChild(item);
      });
    }
    var newRow = document.createElement('div');
    newRow.className = 'id-search-actions';
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'id-search-input';
    input.placeholder = 'New collection…';
    input.style.flex = '1';
    var addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.className = 'bulk-btn';
    addBtn.textContent = 'Add';
    addBtn.addEventListener('click', function(){
      var col = createCollection(input.value);
      if (col){
        toggleBadgerInCollection(col.id, badger.id);
        populateCollectionFilterOptions();
        closeCollectionQuickAdd();
        openCollectionQuickAdd(badger, anchorBtn);
      }
    });
    newRow.appendChild(input);
    newRow.appendChild(addBtn);
    popup.appendChild(newRow);

    document.body.appendChild(popup);
    openCollectionPopup = popup;
    setTimeout(function(){ document.addEventListener('mousedown', handleOutsideCollectionClick); }, 0);
  }

  // ---- Settings panel wiring ----
  document.getElementById('settingsBtn').addEventListener('click', function(){
    var panel = document.getElementById('settingsPanel');
    panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
  });
  document.getElementById('themeSelect').addEventListener('change', function(){
    currentSettings.theme = VALID_THEMES.indexOf(this.value) !== -1 ? this.value : 'dark';
    saveSettings();
    var themeTextOnSwitch = getComputedStyle(document.documentElement).getPropertyValue('--text').trim();
    if (themeTextOnSwitch){
      if (!currentSettings.titleColor) document.getElementById('titleColorInput').value = themeTextOnSwitch;
      if (!currentSettings.badgerTitleColor) document.getElementById('badgerTitleColorInput').value = themeTextOnSwitch;
    }
    var themePanelOnSwitch = getComputedStyle(document.documentElement).getPropertyValue('--panel').trim();
    if (themePanelOnSwitch && !currentSettings.panelColor) document.getElementById('panelColorInput').value = themePanelOnSwitch;
  });
  document.getElementById('gradientFromInput').addEventListener('input', function(){
    currentSettings.gradientFrom = this.value;
    saveSettings();
  });
  document.getElementById('gradientToInput').addEventListener('input', function(){
    currentSettings.gradientTo = this.value;
    saveSettings();
  });
  document.getElementById('gradientAngleSelect').addEventListener('change', function(){
    currentSettings.gradientAngle = this.value;
    saveSettings();
  });
  document.getElementById('accentColorInput').addEventListener('input', function(){
    currentSettings.accent = this.value;
    saveSettings();
  });
  document.getElementById('resetAccentBtn').addEventListener('click', function(){
    currentSettings.accent = DEFAULT_ACCENT;
    document.getElementById('accentColorInput').value = DEFAULT_ACCENT;
    saveSettings();
  });
  document.getElementById('panelColorInput').addEventListener('input', function(){
    currentSettings.panelColor = this.value;
    saveSettings();
  });
  document.getElementById('resetPanelColorBtn').addEventListener('click', function(){
    currentSettings.panelColor = '';
    saveSettings();
    var themePanel = getComputedStyle(document.documentElement).getPropertyValue('--panel').trim();
    if (themePanel) document.getElementById('panelColorInput').value = themePanel;
  });
  document.getElementById('titleColorInput').addEventListener('input', function(){
    currentSettings.titleColor = this.value;
    saveSettings();
  });
  document.getElementById('resetTitleColorBtn').addEventListener('click', function(){
    currentSettings.titleColor = '';
    saveSettings();
    var themeText = getComputedStyle(document.documentElement).getPropertyValue('--text').trim();
    if (themeText) document.getElementById('titleColorInput').value = themeText;
  });
  document.getElementById('badgerTitleColorInput').addEventListener('input', function(){
    currentSettings.badgerTitleColor = this.value;
    saveSettings();
  });
  document.getElementById('resetBadgerTitleColorBtn').addEventListener('click', function(){
    currentSettings.badgerTitleColor = '';
    saveSettings();
    var themeText2 = getComputedStyle(document.documentElement).getPropertyValue('--text').trim();
    if (themeText2) document.getElementById('badgerTitleColorInput').value = themeText2;
  });
  document.getElementById('shortcutsToggle').addEventListener('change', function(){
    currentSettings.shortcuts = this.checked;
    saveSettings();
  });

  document.getElementById('resetStreakBtn').addEventListener('click', function(){
    if (!confirm('Reset your streak and activity history? This clears the streak count but does not touch any checked-off badges.')) return;
    activityLog = {};
    storageSet('activity-log', JSON.stringify(activityLog));
    renderStreak();
    var status = document.getElementById('settingsDataStatus');
    status.textContent = 'Streak and activity history reset.';
    setTimeout(function(){ status.textContent = ''; }, 3000);
  });
  document.getElementById('clearNotesBtn').addEventListener('click', function(){
    if (!confirm('Delete all sticky notes on every page? This cannot be undone.')) return;
    stickyNotesByPage = {};
    storageSet('sticky-notes', JSON.stringify(stickyNotesByPage));
    renderStickyNotes();
    var status = document.getElementById('settingsDataStatus');
    status.textContent = 'All sticky notes cleared.';
    setTimeout(function(){ status.textContent = ''; }, 3000);
  });

  // ---- Stats dashboard ----
  function statLine(label, value, sub){
    var card = document.createElement('div');
    card.className = 'stats-card';
    var labelEl = document.createElement('div');
    labelEl.className = 'stats-card-label';
    labelEl.textContent = label;
    var valueEl = document.createElement('div');
    valueEl.className = 'stats-card-value';
    valueEl.textContent = value;
    card.appendChild(labelEl);
    card.appendChild(valueEl);
    if (sub){
      var subEl = document.createElement('div');
      subEl.className = 'stats-card-sub';
      subEl.textContent = sub;
      card.appendChild(subEl);
    }
    return card;
  }

  async function renderStatsDashboard(){
    var content = document.getElementById('statsContent');
    content.innerHTML = '<div class="list-status">Crunching numbers\u2026</div>';

    var perBadger = await Promise.all(BADGERS.map(async function(b){
      var effective = await getEffectiveBadges(b);
      var badges = effective.badges || [];
      var prog = await loadBadgerProgress(b.id);
      var done = countDone(b.id, badges, prog);
      var typeCounts = {};
      badges.forEach(function(bd){
        if (!prog[badgeKey(b.id, bd)]) return;
        var types = Array.isArray(bd.type) ? bd.type : [bd.type];
        types.filter(Boolean).forEach(function(t){ typeCounts[t] = (typeCounts[t] || 0) + 1; });
      });
      return { badger: b, total: badges.length, done: done, typeCounts: typeCounts };
    }));

    var totalBadges = 0, totalDone = 0;
    var typeTotals = {};
    perBadger.forEach(function(r){
      totalBadges += r.total;
      totalDone += r.done;
      Object.keys(r.typeCounts).forEach(function(t){ typeTotals[t] = (typeTotals[t] || 0) + r.typeCounts[t]; });
    });
    var overallPct = totalBadges ? Math.round((totalDone/totalBadges)*100) : 0;

    var inProgress = perBadger.filter(function(r){ return r.total > 0 && r.done > 0 && r.done < r.total; });
    var mostComplete = inProgress.slice().sort(function(a,b){ return (b.done/b.total) - (a.done/a.total); })[0];
    var leastComplete = inProgress.slice().sort(function(a,b){ return (a.done/a.total) - (b.done/b.total); })[0];
    var streaks = computeStreaks();

    content.innerHTML = '';
    var grid = document.createElement('div');
    grid.className = 'stats-grid';
    grid.appendChild(statLine('Badges collected', totalDone + ' / ' + totalBadges, overallPct + '% overall'));
    grid.appendChild(statLine('Current streak', streaks.current + ' day' + (streaks.current === 1 ? '' : 's'), 'longest: ' + streaks.longest));
    if (mostComplete){
      grid.appendChild(statLine('Furthest along', mostComplete.badger.name, Math.round((mostComplete.done/mostComplete.total)*100) + '% (' + mostComplete.done + '/' + mostComplete.total + ')'));
    }
    if (leastComplete && leastComplete !== mostComplete){
      grid.appendChild(statLine('Just getting started', leastComplete.badger.name, Math.round((leastComplete.done/leastComplete.total)*100) + '% (' + leastComplete.done + '/' + leastComplete.total + ')'));
    }
    content.appendChild(grid);

    var typeEntries = Object.keys(typeTotals).map(function(t){ return { type: t, count: typeTotals[t] }; }).sort(function(a,b){ return b.count - a.count; });
    if (typeEntries.length){
      var title = document.createElement('div');
      title.className = 'stats-section-title';
      title.textContent = 'Collected badges by type';
      content.appendChild(title);
      var maxCount = typeEntries[0].count;
      typeEntries.slice(0, 12).forEach(function(entry){
        var row = document.createElement('div');
        row.className = 'stats-bar-row';
        var label = document.createElement('div');
        label.className = 'stats-bar-label';
        label.textContent = entry.type;
        label.title = entry.type;
        var track = document.createElement('div');
        track.className = 'stats-bar-track';
        var fill = document.createElement('div');
        fill.className = 'stats-bar-fill';
        fill.style.width = Math.round((entry.count/maxCount)*100) + '%';
        track.appendChild(fill);
        var count = document.createElement('div');
        count.className = 'stats-bar-count';
        count.textContent = entry.count;
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(count);
        content.appendChild(row);
      });
    }

    if (totalBadges === 0){
      content.innerHTML = '<div class="empty">No badges to show stats for yet.</div>';
    }
  }

  document.getElementById('statsBtn').addEventListener('click', function(){
    document.getElementById('homeView').style.display = 'none';
    document.getElementById('statsView').style.display = 'block';
    window.scrollTo(0, 0);
    renderStatsDashboard();
  });
  document.getElementById('statsBackBtn').addEventListener('click', function(){
    document.getElementById('statsView').style.display = 'none';
    document.getElementById('homeView').style.display = 'block';
    window.scrollTo(0, 0);
  });

  // ---- Keyboard shortcuts ----
  document.addEventListener('keydown', function(e){
    if (!currentSettings.shortcuts) return;
    var tag = (document.activeElement && document.activeElement.tagName) || '';
    var isTyping = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' ||
      (document.activeElement && document.activeElement.isContentEditable);

    if (e.key === '?' && !isTyping){
      e.preventDefault();
      var panel = document.getElementById('settingsPanel');
      panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
      return;
    }
    if (isTyping){
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }
    if (e.key === '/'){
      e.preventDefault();
      var statsVisible = document.getElementById('statsView').style.display !== 'none';
      var detailVisible = document.getElementById('detailView').style.display !== 'none';
      if (detailVisible) document.getElementById('badgeSearch').focus();
      else if (!statsVisible) document.getElementById('homeSearch').focus();
      return;
    }
    if (e.key === 'Escape'){
      var detailVisible2 = document.getElementById('detailView').style.display !== 'none';
      var statsVisible2 = document.getElementById('statsView').style.display !== 'none';
      if (detailVisible2) document.getElementById('backBtn').click();
      else if (statsVisible2) document.getElementById('statsBackBtn').click();
      return;
    }
    if (document.getElementById('detailView').style.display !== 'none'){
      if (e.key === 'c' || e.key === 'C') document.getElementById('checkAllBtn').click();
      if (e.key === 'u' || e.key === 'U') document.getElementById('uncheckAllBtn').click();
      if (e.key === 'n' || e.key === 'N') document.getElementById('addNoteBtn').click();
    }
  });

  storageMode = detectStorage();
  loadBadgerFavorites().then(async function(){
    await Promise.all([
      loadStickyNotes(),
      loadSettings(),
      loadTags(),
      loadCustomOrder(),
      loadCollections(),
      loadActivityLog()
    ]);
    document.getElementById('themeSelect').value = currentSettings.theme;
    document.getElementById('accentColorInput').value = currentSettings.accent;
    document.getElementById('shortcutsToggle').checked = currentSettings.shortcuts;
    document.getElementById('gradientFromInput').value = currentSettings.gradientFrom;
    document.getElementById('gradientToInput').value = currentSettings.gradientTo;
    document.getElementById('gradientAngleSelect').value = currentSettings.gradientAngle;
    document.getElementById('customGradientRow').style.display = currentSettings.theme === 'custom' ? 'flex' : 'none';
    var themeTextB = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#ECE9E2';
    document.getElementById('titleColorInput').value = currentSettings.titleColor || themeTextB;
    document.getElementById('badgerTitleColorInput').value = currentSettings.badgerTitleColor || themeTextB;
    var themePanelB = getComputedStyle(document.documentElement).getPropertyValue('--panel').trim() || '#1B1E27';
    document.getElementById('panelColorInput').value = currentSettings.panelColor || themePanelB;
    renderStreak();
    populateCollectionFilterOptions();
    var initialSlug = (location.hash || '').replace(/^#badger=/, '');
    var initialBadger = initialSlug ? findBadgerBySlug(decodeURIComponent(initialSlug)) : null;
    if (initialBadger){
      openBadger(initialBadger);
    } else {
      renderHome('');
    }
  });
})();