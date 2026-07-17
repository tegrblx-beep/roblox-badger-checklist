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
    { name: "Hidden Badge 61", target: 55 },
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
    difficulty: "Difficult",
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
      { name: "95 Challenges Completed!", target: 95 },
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
    if (/med|moderate|normal/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--amber');
    if (/easy|simple|beginner/.test(t)) return getComputedStyle(document.documentElement).getPropertyValue('--green');
    return getComputedStyle(document.documentElement).getPropertyValue('--neutral-diff');
  }

  function badgeKey(badgerId, badge){
    var stableId = extractBadgeIdFromLink(badge.link) || badge.link || badge.name || '';
    return badgerId + '||' + stableId;
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
    var resp = await fetch(csvUrl);
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
  async function corsFetch(robloxUrl){
    try {
      var direct = await fetch(robloxUrl);
      if (direct.ok) return direct;
      console.warn('Direct fetch to ' + robloxUrl + ' returned HTTP ' + direct.status);
    } catch(e){ console.warn('Direct fetch to ' + robloxUrl + ' blocked (likely CORS):', e.message); }

    try {
      var roproxyUrl = robloxUrl.replace(
        /^https:\/\/([a-z]+)\.roblox\.com/,
        'https://$1.roproxy.com'
      );
      var viaRoproxy = await fetch(roproxyUrl);
      if (viaRoproxy.ok) return viaRoproxy;
      console.warn('RoProxy fetch to ' + roproxyUrl + ' returned HTTP ' + viaRoproxy.status);
    } catch(e){ console.warn('RoProxy fetch failed:', e.message); }

    console.warn('Falling back to generic proxy for ' + robloxUrl);
    return fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(robloxUrl));
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
  function saveBadgerProgress(){
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function(){
      storageSet('progress-' + currentBadger.id, JSON.stringify(progressData));
    }, 250);
  }

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

  async function renderHome(filter){
    var listEl = document.getElementById('badgerList');
    var emptyEl = document.getElementById('homeEmpty');
    listEl.innerHTML = '';
    var f = (filter||'').toLowerCase();
    var matches = BADGERS.filter(function(b){ return !f || b.name.toLowerCase().indexOf(f) !== -1; });

    document.getElementById('searchClearBtn').classList.toggle('visible', !!filter);

    if (matches.length === 0){
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';

    for (var i=0;i<matches.length;i++){
      (function(badger, index){
        var card = document.createElement('div');
        card.className = 'badger-card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('data-index', index);

        var seal = document.createElement('input');
        seal.type = 'checkbox';
        seal.className = 'seal badger-seal';
        seal.setAttribute('aria-label', 'Mark ' + badger.name + ' badger as complete');
        seal.addEventListener('click', function(e){ e.stopPropagation(); });
        seal.addEventListener('change', function(){
  storageSet('badgerdone-' + badger.id, seal.checked ? '1' : '');
  card.classList.toggle('badger-card-done', seal.checked);
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

        card.appendChild(seal);
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

  searchInput.addEventListener('input', function(){ renderHome(this.value); });
  clearBtn.addEventListener('click', function(){ searchInput.value=''; searchInput.focus(); renderHome(''); });
  searchInput.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){ searchInput.value=''; renderHome(''); return; }
    if (e.key === 'Enter'){ var first = document.querySelector('.badger-card[data-index="0"]'); if (first) first.click(); return; }
    if (e.key === 'ArrowDown'){ e.preventDefault(); var fc = document.querySelector('.badger-card'); if (fc) fc.focus(); }
  });
  document.getElementById('badgerList').addEventListener('keydown', function(e){
    var cards = Array.prototype.slice.call(document.querySelectorAll('.badger-card'));
    var currentIdx = cards.indexOf(document.activeElement);
    if (e.key === 'ArrowDown'){ e.preventDefault(); var next = cards[currentIdx+1]; if (next) next.focus(); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); if (currentIdx===0){ searchInput.focus(); } else if (currentIdx>0){ cards[currentIdx-1].focus(); } }
  });

  // ---------------- Detail view ----------------
  async function openBadger(badger){
    currentBadger = badger;
    progressData = await loadBadgerProgress(badger.id);

    document.getElementById('homeView').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';

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
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('homeView').style.display = 'block';
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
    pill.className = 'milestone';
    pill.textContent = m.name + ': ' + done + '/' + m.target + ' (' + pct + '%)';
    container.appendChild(pill);
  });
}

  function renderList(){
    var listEl = document.getElementById('list');
    var search = document.getElementById('badgeSearch').value.toLowerCase();
    var hideDone = document.getElementById('hideDoneBox').checked;
    listEl.innerHTML = '';

    var visible = currentBadges.filter(function(b){
      var done = !!progressData[badgeKey(currentBadger.id, b)];
      if (hideDone && done) return false;
      if (search && (b.name||'').toLowerCase().indexOf(search) === -1 &&
          (b.game||'').toLowerCase().indexOf(search) === -1) return false;
      return true;
    });

    visible.forEach(function(b){
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
        if (document.getElementById('hideDoneBox').checked){
          renderList();
        } else {
          row.classList.toggle('done', seal.checked);
        }
        updateStats();
      });
      row.appendChild(seal);

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
    });
  }

  function updateStats(){
    var total = currentBadges.length;
    var done = countDone(currentBadger.id, currentBadges, progressData);
    var pct = total ? Math.round((done/total)*100) : 0;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('statCount').textContent = done + ' / ' + total;
    document.getElementById('statPct').textContent = pct + '%';
    renderMilestones();
  }

  document.getElementById('badgeSearch').addEventListener('input', renderList);
  document.getElementById('hideDoneBox').addEventListener('change', renderList);

  document.getElementById('checkAllBtn').addEventListener('click', function(){
    currentBadges.forEach(function(b){ progressData[badgeKey(currentBadger.id, b)] = true; });
    saveBadgerProgress();
    renderList();
    updateStats();
  });
  document.getElementById('uncheckAllBtn').addEventListener('click', function(){
    currentBadges.forEach(function(b){ progressData[badgeKey(currentBadger.id, b)] = false; });
    saveBadgerProgress();
    renderList();
    updateStats();
  });

  storageMode = detectStorage();
  renderHome('');
})();