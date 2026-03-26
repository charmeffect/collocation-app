const COLLOCATIONS = [
    {
        collocate: "make", base: "decision", phrase: "make a decision", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To choose something after thinking about the different possibilities.",
        sentences: [
            "We need to {blank} a {base} before the deadline.",
            "She finally {blank} her {base} about which university to attend.",
            "Don't rush — take your time to {blank} the right {base}.",
            "The board will {blank} a final {base} next week."
        ],
        options: ["make", "do", "take", "have"]
    },
    {
        collocate: "make", base: "mistake", phrase: "make a mistake", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To do something incorrectly or wrongly.",
        sentences: [
            "Everyone {blank}s {base}s when learning a new language.",
            "I {blank} a terrible {base} by not reading the contract.",
            "Don't be afraid to {blank} {base}s — that's how you learn.",
            "He {blank} the {base} of trusting the wrong person."
        ],
        options: ["make", "do", "have", "get"]
    },
    {
        collocate: "make", base: "progress", phrase: "make progress", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To move forward or improve in something.",
        sentences: [
            "The students are {blank}ing good {base} in their English studies.",
            "We've {blank} significant {base} on the project this month.",
            "She's {blank}ing steady {base} in her recovery.",
            "The country has {blank} remarkable {base} in reducing poverty."
        ],
        options: ["make", "do", "take", "get"]
    },
    {
        collocate: "make", base: "effort", phrase: "make an effort", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To try hard to do something.",
        sentences: [
            "You should {blank} an {base} to arrive on time.",
            "She always {blank}s an {base} to be polite to everyone.",
            "He didn't even {blank} an {base} to understand my point of view.",
            "Let's all {blank} an {base} to reduce waste at home."
        ],
        options: ["make", "do", "put", "take"]
    },
    {
        collocate: "make", base: "money", phrase: "make money", type: "verb-noun", topic: "money", level: "elementary",
        meaning: "To earn or gain money through work or investment.",
        sentences: [
            "He {blank}s a lot of {base} working in finance.",
            "It's not easy to {blank} {base} as a freelance artist.",
            "The company {blank}s most of its {base} from online sales.",
            "She started a blog and now {blank}s good {base} from it."
        ],
        options: ["make", "earn", "do", "win"]
    },
    {
        collocate: "make", base: "difference", phrase: "make a difference", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To have an important effect or to cause a change.",
        sentences: [
            "Small actions can {blank} a big {base} in the environment.",
            "She wants to {blank} a {base} in people's lives.",
            "Does it really {blank} a {base} which route we take?",
            "Every donation {blank}s a {base} to the community."
        ],
        options: ["make", "do", "take", "have"]
    },
    {
        collocate: "make", base: "complaint", phrase: "make a complaint", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To formally express dissatisfaction about something.",
        sentences: [
            "I'd like to {blank} a {base} about the service.",
            "Several customers {blank} {base}s about the noise.",
            "If you're unhappy, you can {blank} a formal {base}.",
            "She {blank} a {base} to the manager about the rude waiter."
        ],
        options: ["make", "do", "give", "put"]
    },
    {
        collocate: "make", base: "friends", phrase: "make friends", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To form new friendships with people.",
        sentences: [
            "She finds it easy to {blank} {base} wherever she goes.",
            "It can be hard to {blank} {base} in a new city.",
            "The children quickly {blank} {base} at the summer camp.",
            "He {blank} {base} with everyone at the office."
        ],
        options: ["make", "do", "get", "take"]
    },
    {
        collocate: "make", base: "appointment", phrase: "make an appointment", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To arrange a time to see someone, especially a doctor or professional.",
        sentences: [
            "I need to {blank} an {base} with my dentist.",
            "Please {blank} an {base} before visiting the office.",
            "She {blank} an {base} to see the specialist next Tuesday.",
            "You can {blank} an {base} by calling the reception desk."
        ],
        options: ["make", "do", "take", "book"]
    },
    {
        collocate: "make", base: "promise", phrase: "make a promise", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To tell someone that you will definitely do something.",
        sentences: [
            "He {blank} a {base} to always be honest with her.",
            "Don't {blank} {base}s you can't keep.",
            "She {blank} a {base} to visit her grandmother every week.",
            "The politician {blank} many {base}s during the campaign."
        ],
        options: ["make", "do", "give", "say"]
    },
    {
        collocate: "make", base: "suggestion", phrase: "make a suggestion", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To propose an idea or plan for someone to consider.",
        sentences: [
            "May I {blank} a {base} about the schedule?",
            "He {blank} a helpful {base} during the meeting.",
            "If I could {blank} a {base}, maybe we should start earlier.",
            "Several employees {blank} {base}s for improving the system."
        ],
        options: ["make", "do", "give", "say"]
    },
    {
        collocate: "make", base: "arrangement", phrase: "make arrangements", type: "verb-noun", topic: "travel", level: "middle",
        meaning: "To plan and organize something in advance.",
        sentences: [
            "We need to {blank} {base}s for the conference next month.",
            "She {blank} all the {base}s for the wedding herself.",
            "Have you {blank} {base}s for your trip to Italy?",
            "The secretary will {blank} the necessary {base}s."
        ],
        options: ["make", "do", "take", "set"]
    },
    {
        collocate: "make", base: "excuse", phrase: "make an excuse", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To give a reason (often false) for not doing something.",
        sentences: [
            "Stop {blank}ing {base}s and just do your homework.",
            "He always {blank}s {base}s for being late.",
            "She {blank} an {base} to leave the party early.",
            "Don't {blank} {base}s — take responsibility for your actions."
        ],
        options: ["make", "do", "give", "say"]
    },
    {
        collocate: "make", base: "living", phrase: "make a living", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To earn enough money to support yourself.",
        sentences: [
            "It's hard to {blank} a {base} as a musician these days.",
            "She {blank}s a good {base} working as a translator.",
            "Many people {blank} their {base} from farming in this region.",
            "How does he {blank} a {base} without a regular job?"
        ],
        options: ["make", "do", "earn", "get"]
    },
    {
        collocate: "make", base: "sense", phrase: "make sense", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To be logical, reasonable, or easy to understand.",
        sentences: [
            "This explanation doesn't {blank} {base} to me.",
            "It {blank}s {base} to start saving money early.",
            "Does this sentence {blank} {base} in English?",
            "The theory {blank}s a lot of {base} when you see the data."
        ],
        options: ["make", "do", "have", "take"]
    },
    {
        collocate: "make", base: "room", phrase: "make room", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To create space for something or someone.",
        sentences: [
            "Could you {blank} {base} for one more person at the table?",
            "We need to {blank} {base} in the garage for the new car.",
            "She {blank} {base} in her schedule for the meeting.",
            "Please {blank} {base} so everyone can sit down."
        ],
        options: ["make", "do", "take", "get"]
    },
    {
        collocate: "make", base: "bed", phrase: "make the bed", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To arrange the sheets and covers neatly on a bed after sleeping.",
        sentences: [
            "Don't forget to {blank} your {base} before leaving the house.",
            "She always {blank}s the {base} first thing in the morning.",
            "The children were taught to {blank} their {base}s every day.",
            "I rarely {blank} the {base} on weekends."
        ],
        options: ["make", "do", "fix", "put"]
    },
    {
        collocate: "do", base: "homework", phrase: "do homework", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To complete school assignments given to be done at home.",
        sentences: [
            "Have you {blank} your {base} for tomorrow's class?",
            "She always {blank}s her {base} right after school.",
            "He forgot to {blank} his math {base} again.",
            "The students were asked to {blank} their {base} in pairs."
        ],
        options: ["do", "make", "take", "have"]
    },
    {
        collocate: "do", base: "research", phrase: "do research", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To study or investigate a subject in a detailed way.",
        sentences: [
            "Scientists are {blank}ing {base} on a new vaccine.",
            "You should {blank} some {base} before buying a house.",
            "The university {blank}s extensive {base} in renewable energy.",
            "She {blank} her {base} at the library every weekend."
        ],
        options: ["do", "make", "take", "have"]
    },
    {
        collocate: "do", base: "damage", phrase: "do damage", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To cause harm or destruction to something.",
        sentences: [
            "The storm {blank} serious {base} to the coastal towns.",
            "Smoking can {blank} irreversible {base} to your lungs.",
            "The scandal {blank} a lot of {base} to his reputation.",
            "Be careful — that chemical can {blank} {base} to the surface."
        ],
        options: ["do", "make", "cause", "give"]
    },
    {
        collocate: "do", base: "business", phrase: "do business", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To engage in commercial or professional activities with someone.",
        sentences: [
            "We've been {blank}ing {base} with that company for years.",
            "It's a pleasure to {blank} {base} with you.",
            "Many firms want to {blank} {base} in the Asian market.",
            "She refuses to {blank} {base} with dishonest people."
        ],
        options: ["do", "make", "run", "have"]
    },
    {
        collocate: "do", base: "favor", phrase: "do a favor", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To help someone by doing something kind for them.",
        sentences: [
            "Could you {blank} me a {base} and pass the salt?",
            "She {blank} him a {base} by lending her car.",
            "I need to ask if you can {blank} me a big {base}.",
            "He's always willing to {blank} {base}s for his friends."
        ],
        options: ["do", "make", "give", "take"]
    },
    {
        collocate: "do", base: "dishes", phrase: "do the dishes", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To wash the plates, cups, and other items used for eating.",
        sentences: [
            "It's your turn to {blank} the {base} tonight.",
            "She always {blank}s the {base} right after dinner.",
            "Nobody wants to {blank} the {base} after a big meal.",
            "He promised to {blank} the {base} if she cooked."
        ],
        options: ["do", "make", "wash", "clean"]
    },
    {
        collocate: "do", base: "exercise", phrase: "do exercise", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To perform physical activity to stay healthy and fit.",
        sentences: [
            "The doctor told him to {blank} more {base}.",
            "She {blank}s {base} every morning before work.",
            "You should {blank} regular {base} to stay healthy.",
            "It's important to {blank} {base} at least three times a week."
        ],
        options: ["do", "make", "take", "have"]
    },
    {
        collocate: "do", base: "best", phrase: "do your best", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To try as hard as you can to achieve something.",
        sentences: [
            "Just {blank} your {base} and don't worry about the results.",
            "She always {blank}s her {base} in every exam.",
            "We'll {blank} our {base} to finish the project on time.",
            "He {blank} his {base} but still didn't pass the test."
        ],
        options: ["do", "make", "try", "give"]
    },
    {
        collocate: "do", base: "harm", phrase: "do harm", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To cause injury, damage, or negative effects.",
        sentences: [
            "This medicine won't {blank} you any {base}.",
            "Too much screen time can {blank} {base} to children's eyes.",
            "The new policy could {blank} more {base} than good.",
            "Doctors promise to {blank} no {base} to their patients."
        ],
        options: ["do", "make", "cause", "give"]
    },
    {
        collocate: "do", base: "laundry", phrase: "do the laundry", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To wash, dry, and sometimes iron clothes.",
        sentences: [
            "I need to {blank} the {base} this weekend.",
            "She {blank}s the {base} every Saturday morning.",
            "He never helps to {blank} the {base} at home.",
            "We should {blank} the {base} before we run out of clean clothes."
        ],
        options: ["do", "make", "wash", "run"]
    },
    {
        collocate: "do", base: "job", phrase: "do a good job", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To perform a task well or to a satisfactory standard.",
        sentences: [
            "The team {blank} an excellent {base} on the presentation.",
            "She always {blank}s a great {base} organizing events.",
            "If you {blank} a good {base}, you'll get a promotion.",
            "He really {blank} a fantastic {base} renovating the kitchen."
        ],
        options: ["do", "make", "take", "have"]
    },
    {
        collocate: "take", base: "break", phrase: "take a break", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To stop working for a short period in order to rest.",
        sentences: [
            "Let's {blank} a short {base} and get some coffee.",
            "You've been studying for hours — you should {blank} a {base}.",
            "The workers {blank} a {base} every two hours.",
            "She never {blank}s a {base}, even when she's exhausted."
        ],
        options: ["take", "make", "do", "have"]
    },
    {
        collocate: "take", base: "notes", phrase: "take notes", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To write down important information during a lecture or meeting.",
        sentences: [
            "Make sure to {blank} {base} during the lecture.",
            "She always {blank}s detailed {base} in class.",
            "I forgot to {blank} {base} and missed the key points.",
            "He {blank}s {base} on his laptop during meetings."
        ],
        options: ["take", "make", "do", "write"]
    },
    {
        collocate: "take", base: "risk", phrase: "take a risk", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To do something even though there is a chance of a bad result.",
        sentences: [
            "Starting a business means you have to {blank} {base}s.",
            "She decided to {blank} the {base} and invest her savings.",
            "Are you willing to {blank} that {base}?",
            "Sometimes you need to {blank} a {base} to succeed."
        ],
        options: ["take", "make", "do", "have"]
    },
    {
        collocate: "take", base: "seat", phrase: "take a seat", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To sit down.",
        sentences: [
            "Please {blank} a {base} and wait for your name to be called.",
            "He {blank} a {base} at the back of the room.",
            "Would you like to {blank} a {base} while you wait?",
            "She {blank} a {base} next to the window."
        ],
        options: ["take", "make", "have", "get"]
    },
    {
        collocate: "take", base: "action", phrase: "take action", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To do something to deal with a particular problem or situation.",
        sentences: [
            "The government must {blank} {base} to reduce pollution.",
            "We need to {blank} immediate {base} to fix this issue.",
            "She decided to {blank} {base} against the unfair policy.",
            "If we don't {blank} {base} now, it'll be too late."
        ],
        options: ["take", "make", "do", "put"]
    },
    {
        collocate: "take", base: "advantage", phrase: "take advantage", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To use an opportunity or situation to benefit yourself.",
        sentences: [
            "You should {blank} {base} of this special offer.",
            "She {blank} {base} of the good weather to go hiking.",
            "Don't let anyone {blank} {base} of your generosity.",
            "He {blank} {base} of every learning opportunity."
        ],
        options: ["take", "make", "have", "get"]
    },
    {
        collocate: "take", base: "care", phrase: "take care", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To look after someone or something; to be careful.",
        sentences: [
            "Please {blank} {base} of yourself while I'm away.",
            "She {blank}s {base} of her elderly parents.",
            "You need to {blank} better {base} of your health.",
            "He {blank}s great {base} when handling fragile items."
        ],
        options: ["take", "make", "do", "give"]
    },
    {
        collocate: "take", base: "responsibility", phrase: "take responsibility", type: "verb-noun", topic: "work", level: "high",
        meaning: "To accept that you caused something and should deal with it.",
        sentences: [
            "He refused to {blank} {base} for the failure.",
            "You need to {blank} {base} for your own actions.",
            "The manager {blank} full {base} for the team's mistake.",
            "It's time to {blank} {base} and fix the problem."
        ],
        options: ["take", "make", "do", "have"]
    },
    {
        collocate: "take", base: "part", phrase: "take part", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To participate or be involved in an activity or event.",
        sentences: [
            "Over 500 runners {blank} {base} in the marathon.",
            "Would you like to {blank} {base} in the competition?",
            "She {blank}s {base} in many volunteer activities.",
            "He didn't {blank} {base} in the discussion because he was shy."
        ],
        options: ["take", "make", "do", "have"]
    },
    {
        collocate: "take", base: "place", phrase: "take place", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To happen or occur.",
        sentences: [
            "The meeting will {blank} {base} in the conference room.",
            "The ceremony {blank}s {base} every year in June.",
            "A major change {blank} {base} in the company last year.",
            "Where did the accident {blank} {base}?"
        ],
        options: ["take", "make", "have", "hold"]
    },
    {
        collocate: "take", base: "turns", phrase: "take turns", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To alternate doing something one after the other.",
        sentences: [
            "The children {blank} {base} playing with the toy.",
            "Let's {blank} {base} driving on the road trip.",
            "They {blank} {base} cooking dinner each night.",
            "We should {blank} {base} presenting our ideas."
        ],
        options: ["take", "make", "do", "have"]
    },
    {
        collocate: "take", base: "test", phrase: "take a test", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To complete an examination or assessment.",
        sentences: [
            "She has to {blank} a driving {base} next week.",
            "All students must {blank} the final {base} in December.",
            "He was nervous about {blank}ing the English {base}.",
            "You can {blank} the {base} again if you don't pass."
        ],
        options: ["take", "make", "do", "give"]
    },
    {
        collocate: "have", base: "conversation", phrase: "have a conversation", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To talk with someone, usually in an informal way.",
        sentences: [
            "We need to {blank} a serious {base} about our future.",
            "She {blank} a long {base} with her mother on the phone.",
            "It's hard to {blank} a {base} in such a noisy place.",
            "They {blank} an interesting {base} about politics."
        ],
        options: ["have", "make", "do", "take"]
    },
    {
        collocate: "have", base: "argument", phrase: "have an argument", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To disagree with someone in an angry way.",
        sentences: [
            "They {blank} a big {base} about money last night.",
            "I don't want to {blank} an {base} with you.",
            "The couple often {blank}s {base}s about household chores.",
            "He {blank} a heated {base} with his colleague."
        ],
        options: ["have", "make", "do", "take"]
    },
    {
        collocate: "have", base: "effect", phrase: "have an effect", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To produce a result or influence on something.",
        sentences: [
            "The new policy will {blank} a positive {base} on education.",
            "Stress can {blank} a harmful {base} on your health.",
            "The speech {blank} a profound {base} on the audience.",
            "Does caffeine {blank} any {base} on sleep quality?"
        ],
        options: ["have", "make", "do", "take"]
    },
    {
        collocate: "have", base: "experience", phrase: "have experience", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To possess knowledge or skill gained from doing something.",
        sentences: [
            "Do you {blank} any {base} in project management?",
            "She {blank}s years of {base} working in marketing.",
            "He doesn't {blank} much {base} with databases.",
            "You'll need to {blank} at least two years of {base}."
        ],
        options: ["have", "make", "do", "take"]
    },
    {
        collocate: "have", base: "difficulty", phrase: "have difficulty", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To find something hard or challenging to do.",
        sentences: [
            "Many students {blank} {base} understanding grammar rules.",
            "She {blank}s {base} falling asleep at night.",
            "I {blank} {base} hearing you — could you speak louder?",
            "He {blank}s {base} concentrating in noisy environments."
        ],
        options: ["have", "make", "do", "find"]
    },
    {
        collocate: "have", base: "opportunity", phrase: "have an opportunity", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To be given a chance to do something.",
        sentences: [
            "I've never {blank} the {base} to travel abroad.",
            "She {blank} the {base} to study at a top university.",
            "If you {blank} the {base}, you should visit Japan.",
            "They {blank} a unique {base} to invest in the startup."
        ],
        options: ["have", "make", "take", "do"]
    },
    {
        collocate: "have", base: "look", phrase: "have a look", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To look at something briefly.",
        sentences: [
            "Can I {blank} a {base} at your new phone?",
            "Let me {blank} a quick {base} at the report.",
            "She {blank} a {base} around the shop but didn't buy anything.",
            "Why don't you {blank} a {base} at this article?"
        ],
        options: ["have", "make", "do", "give"]
    },
    {
        collocate: "have", base: "rest", phrase: "have a rest", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To relax or stop doing something for a while.",
        sentences: [
            "You look tired — why don't you {blank} a {base}?",
            "I need to {blank} a good {base} after this busy week.",
            "The doctor told him to {blank} a {base} for a few days.",
            "Let's {blank} a {base} before continuing the hike."
        ],
        options: ["have", "take", "make", "do"]
    },
    {
        collocate: "have", base: "meeting", phrase: "have a meeting", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To gather with others to discuss something.",
        sentences: [
            "We're going to {blank} a {base} at 3 p.m. today.",
            "The team {blank}s a weekly {base} every Monday.",
            "Can we {blank} a quick {base} to discuss the deadline?",
            "She {blank} a {base} with the client this morning."
        ],
        options: ["have", "make", "do", "take"]
    },
    {
        collocate: "give", base: "advice", phrase: "give advice", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To offer suggestions or recommendations to someone.",
        sentences: [
            "Can you {blank} me some {base} on learning English?",
            "She always {blank}s great {base} about relationships.",
            "The teacher {blank} us useful {base} for the exam.",
            "He's good at {blank}ing financial {base}."
        ],
        options: ["give", "make", "do", "say"]
    },
    {
        collocate: "give", base: "permission", phrase: "give permission", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To allow someone to do something officially.",
        sentences: [
            "The teacher {blank} them {base} to leave early.",
            "You can't enter without being {blank}n {base}.",
            "His parents {blank} him {base} to go on the trip.",
            "The company {blank} {base} to use the software."
        ],
        options: ["give", "make", "take", "do"]
    },
    {
        collocate: "give", base: "speech", phrase: "give a speech", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To deliver a formal talk to an audience.",
        sentences: [
            "The president {blank} a powerful {base} at the ceremony.",
            "She was asked to {blank} a {base} at the conference.",
            "He practiced for weeks before {blank}ing his {base}.",
            "Have you ever {blank}n a {base} in front of a large audience?"
        ],
        options: ["give", "make", "do", "say"]
    },
    {
        collocate: "give", base: "presentation", phrase: "give a presentation", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To show and explain something formally to a group of people.",
        sentences: [
            "She has to {blank} a {base} to the board next week.",
            "He {blank} an excellent {base} on the new strategy.",
            "Are you nervous about {blank}ing the {base}?",
            "The students were asked to {blank} a group {base}."
        ],
        options: ["give", "make", "do", "take"]
    },
    {
        collocate: "give", base: "hand", phrase: "give a hand", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To help someone with something.",
        sentences: [
            "Could you {blank} me a {base} with these boxes?",
            "She always {blank}s a {base} when someone needs help.",
            "He {blank} his neighbor a {base} fixing the fence.",
            "Let me {blank} you a {base} with the cooking."
        ],
        options: ["give", "make", "do", "take"]
    },
    {
        collocate: "give", base: "priority", phrase: "give priority", type: "verb-noun", topic: "work", level: "high",
        meaning: "To treat something as more important than other things.",
        sentences: [
            "We should {blank} {base} to customer safety.",
            "The hospital {blank}s {base} to emergency cases.",
            "You need to {blank} {base} to the most urgent tasks.",
            "The government {blank} {base} to economic recovery."
        ],
        options: ["give", "make", "do", "take"]
    },
    {
        collocate: "pay", base: "attention", phrase: "pay attention", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To watch, listen to, or think about something carefully.",
        sentences: [
            "Please {blank} {base} to what I'm saying.",
            "She never {blank}s {base} in class.",
            "You need to {blank} close {base} to the road signs.",
            "He didn't {blank} {base} and missed the instructions."
        ],
        options: ["pay", "make", "give", "take"]
    },
    {
        collocate: "pay", base: "compliment", phrase: "pay a compliment", type: "verb-noun", topic: "people", level: "high",
        meaning: "To say something nice to someone to show admiration.",
        sentences: [
            "He {blank} her a lovely {base} about her singing.",
            "It's always nice to {blank} people {base}s.",
            "She {blank} him a {base} on his new haircut.",
            "Don't forget to {blank} {base}s when someone does well."
        ],
        options: ["pay", "make", "give", "say"]
    },
    {
        collocate: "pay", base: "visit", phrase: "pay a visit", type: "verb-noun", topic: "people", level: "high",
        meaning: "To go to see someone or a place.",
        sentences: [
            "We should {blank} a {base} to our grandparents this weekend.",
            "The inspector will {blank} a {base} to the factory tomorrow.",
            "She decided to {blank} a surprise {base} to her old friend.",
            "They {blank} a {base} to the museum during their trip."
        ],
        options: ["pay", "make", "do", "take"]
    },
    {
        collocate: "catch", base: "cold", phrase: "catch a cold", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To become sick with a common illness that affects the nose and throat.",
        sentences: [
            "Wear a jacket or you'll {blank} a {base}.",
            "She {blank} a {base} after walking in the rain.",
            "I always {blank} a {base} during the winter months.",
            "He {blank} a terrible {base} from his colleague."
        ],
        options: ["catch", "get", "take", "have"]
    },
    {
        collocate: "catch", base: "fire", phrase: "catch fire", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To start burning.",
        sentences: [
            "The curtains {blank} {base} from the candle.",
            "Dry leaves can easily {blank} {base} in hot weather.",
            "The building {blank} {base} due to an electrical fault.",
            "Be careful — that paper could {blank} {base} near the stove."
        ],
        options: ["catch", "take", "get", "make"]
    },
    {
        collocate: "catch", base: "eye", phrase: "catch someone's eye", type: "verb-noun", topic: "people", level: "high",
        meaning: "To attract someone's attention or to make eye contact.",
        sentences: [
            "The bright red dress {blank} my {base} immediately.",
            "She tried to {blank} the waiter's {base} to order.",
            "Something in the shop window {blank} her {base}.",
            "His unusual accent {blank} everyone's {base}."
        ],
        options: ["catch", "take", "get", "draw"]
    },
    {
        collocate: "catch", base: "glimpse", phrase: "catch a glimpse", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To see something or someone very briefly.",
        sentences: [
            "I {blank} a {base} of the celebrity as her car drove past.",
            "She {blank} a quick {base} of herself in the mirror.",
            "We {blank} a {base} of the sunset through the clouds.",
            "He {blank} a {base} of the thief running away."
        ],
        options: ["catch", "take", "get", "have"]
    },
    {
        collocate: "break", base: "habit", phrase: "break a habit", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To stop doing something that you do regularly, especially something bad.",
        sentences: [
            "It's very hard to {blank} a bad {base}.",
            "She's trying to {blank} the {base} of biting her nails.",
            "You need to {blank} the {base} of checking your phone constantly.",
            "He finally {blank} his smoking {base} after ten years."
        ],
        options: ["break", "make", "stop", "cut"]
    },
    {
        collocate: "break", base: "law", phrase: "break the law", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To do something that is against the law.",
        sentences: [
            "You'll be arrested if you {blank} the {base}.",
            "He didn't realize he was {blank}ing the {base} by parking there.",
            "Companies that {blank} the {base} face heavy fines.",
            "She would never {blank} the {base}, no matter what."
        ],
        options: ["break", "make", "do", "take"]
    },
    {
        collocate: "break", base: "record", phrase: "break a record", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To do something better or faster than anyone has done before.",
        sentences: [
            "She {blank} the world {base} in the 100-meter sprint.",
            "The company {blank} its sales {base} this quarter.",
            "He dreams of {blank}ing the marathon {base}.",
            "The album {blank} several streaming {base}s."
        ],
        options: ["break", "make", "beat", "set"]
    },
    {
        collocate: "break", base: "news", phrase: "break the news", type: "verb-noun", topic: "people", level: "high",
        meaning: "To tell someone about something important or unpleasant.",
        sentences: [
            "Who is going to {blank} the {base} to her about the job?",
            "He didn't know how to {blank} the bad {base} to his parents.",
            "She gently {blank} the {base} that the event was canceled.",
            "It's never easy to {blank} bad {base} to someone."
        ],
        options: ["break", "tell", "say", "give"]
    },
    {
        collocate: "break", base: "ice", phrase: "break the ice", type: "verb-noun", topic: "people", level: "high",
        meaning: "To make people feel more comfortable in a social situation.",
        sentences: [
            "She told a funny story to {blank} the {base} at the party.",
            "It's always hard to {blank} the {base} at networking events.",
            "A simple question can help {blank} the {base}.",
            "He's great at {blank}ing the {base} with new colleagues."
        ],
        options: ["break", "crack", "make", "cut"]
    },
    {
        collocate: "keep", base: "promise", phrase: "keep a promise", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To do what you said you would do.",
        sentences: [
            "He always {blank}s his {base}s, no matter what.",
            "She {blank} her {base} to visit every month.",
            "It's important to {blank} your {base}s in business.",
            "He failed to {blank} his {base} of arriving on time."
        ],
        options: ["keep", "make", "do", "hold"]
    },
    {
        collocate: "keep", base: "secret", phrase: "keep a secret", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To not tell anyone about something private.",
        sentences: [
            "Can you {blank} a {base}? I have something to tell you.",
            "She's very good at {blank}ing {base}s.",
            "I trusted him to {blank} my {base}, but he told everyone.",
            "It's hard to {blank} {base}s in a small office."
        ],
        options: ["keep", "hold", "make", "have"]
    },
    {
        collocate: "keep", base: "record", phrase: "keep a record", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To write down information so you have it for later.",
        sentences: [
            "You should {blank} a {base} of all your expenses.",
            "The school {blank}s {base}s of every student's grades.",
            "She {blank}s a detailed {base} of her daily calorie intake.",
            "It's wise to {blank} {base}s of important correspondence."
        ],
        options: ["keep", "make", "do", "take"]
    },
    {
        collocate: "keep", base: "calm", phrase: "keep calm", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To stay relaxed and not become upset or angry.",
        sentences: [
            "Try to {blank} {base} during the job interview.",
            "She told the children to {blank} {base} during the storm.",
            "It's important to {blank} {base} in an emergency.",
            "He managed to {blank} {base} despite the bad news."
        ],
        options: ["keep", "stay", "hold", "make"]
    },
    {
        collocate: "keep", base: "diary", phrase: "keep a diary", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To write regularly about what happens in your life.",
        sentences: [
            "She has {blank} a {base} since she was twelve.",
            "He decided to {blank} a travel {base} during his trip.",
            "Do you {blank} a {base}? It can help reduce stress.",
            "Many writers {blank} a {base} for creative inspiration."
        ],
        options: ["keep", "make", "write", "do"]
    },
    {
        collocate: "get", base: "job", phrase: "get a job", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To find and be hired for employment.",
        sentences: [
            "She worked hard to {blank} a {base} at a top company.",
            "It's not easy to {blank} a good {base} without experience.",
            "He finally {blank} a {base} after months of searching.",
            "Many graduates struggle to {blank} their first {base}."
        ],
        options: ["get", "make", "take", "do"]
    },
    {
        collocate: "get", base: "rid", phrase: "get rid of", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To remove or throw away something you don't want.",
        sentences: [
            "We need to {blank} {base} of these old magazines.",
            "She decided to {blank} {base} of all her winter clothes.",
            "It's hard to {blank} {base} of a bad reputation.",
            "The company {blank} {base} of outdated equipment."
        ],
        options: ["get", "make", "take", "put"]
    },
    {
        collocate: "get", base: "ready", phrase: "get ready", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To prepare yourself or something for a particular purpose.",
        sentences: [
            "Hurry up and {blank} {base} — we're leaving in ten minutes.",
            "She takes an hour to {blank} {base} in the morning.",
            "The team is {blank}ting {base} for the big match.",
            "Are you {blank}ting {base} for the party tonight?"
        ],
        options: ["get", "make", "be", "take"]
    },
    {
        collocate: "get", base: "started", phrase: "get started", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To begin doing something.",
        sentences: [
            "Let's {blank} {base} on the project right away.",
            "It was hard to {blank} {base} after the long holiday.",
            "She can't wait to {blank} {base} on her new book.",
            "Once you {blank} {base}, you'll find it easier."
        ],
        options: ["get", "make", "take", "do"]
    },
    {
        collocate: "run", base: "business", phrase: "run a business", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To manage and operate a business.",
        sentences: [
            "She {blank}s a successful catering {base} from home.",
            "It takes a lot of energy to {blank} a small {base}.",
            "He has been {blank}ning the family {base} for twenty years.",
            "Do you know what it takes to {blank} a {base}?"
        ],
        options: ["run", "make", "do", "drive"]
    },
    {
        collocate: "run", base: "risk", phrase: "run a risk", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To be in a situation where something bad might happen.",
        sentences: [
            "If you don't wear sunscreen, you {blank} the {base} of sunburn.",
            "Companies that ignore safety {blank} the {base} of lawsuits.",
            "You {blank} a {base} of losing everything by gambling.",
            "He {blank}s the {base} of being fired for his comments."
        ],
        options: ["run", "take", "make", "do"]
    },
    {
        collocate: "come", base: "conclusion", phrase: "come to a conclusion", type: "verb-noun", topic: "education", level: "high",
        meaning: "To reach a decision or judgment after thinking about something.",
        sentences: [
            "After weeks of discussion, they finally {blank} to a {base}.",
            "What {base} did you {blank} to after reading the report?",
            "The jury {blank} to the {base} that he was innocent.",
            "Don't {blank} to a {base} before hearing both sides."
        ],
        options: ["come", "make", "reach", "get"]
    },
    {
        collocate: "set", base: "goal", phrase: "set a goal", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To decide on something you want to achieve.",
        sentences: [
            "It's important to {blank} realistic {base}s for yourself.",
            "She {blank} a {base} to learn a new language this year.",
            "The team {blank} ambitious {base}s for the next quarter.",
            "He {blank} a personal {base} to run a marathon."
        ],
        options: ["set", "make", "put", "take"]
    },
    {
        collocate: "set", base: "example", phrase: "set an example", type: "verb-noun", topic: "people", level: "high",
        meaning: "To behave in a way that others should follow.",
        sentences: [
            "Parents should {blank} a good {base} for their children.",
            "The CEO {blank} an {base} by arriving early every day.",
            "She tries to {blank} a positive {base} for her younger siblings.",
            "Teachers {blank} an {base} through their own behavior."
        ],
        options: ["set", "make", "give", "put"]
    },
    {
        collocate: "hold", base: "meeting", phrase: "hold a meeting", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To organize and conduct a meeting.",
        sentences: [
            "The committee will {blank} a {base} to discuss the budget.",
            "They {blank} an emergency {base} after the accident.",
            "We usually {blank} our team {base}s on Friday.",
            "The school {blank} a {base} for all parents."
        ],
        options: ["hold", "make", "do", "take"]
    },
    {
        collocate: "raise", base: "awareness", phrase: "raise awareness", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To make people know about an important issue.",
        sentences: [
            "The campaign aims to {blank} {base} about climate change.",
            "Charities work hard to {blank} {base} of mental health issues.",
            "She {blank}d {base} by sharing her story on social media.",
            "Schools should {blank} {base} about online safety."
        ],
        options: ["raise", "make", "do", "give"]
    },
    {
        collocate: "raise", base: "money", phrase: "raise money", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To collect money for a particular purpose.",
        sentences: [
            "They organized a charity event to {blank} {base} for the hospital.",
            "She {blank}d thousands of dollars for the orphanage.",
            "The school needs to {blank} {base} for new equipment.",
            "How much {base} did they {blank} at the fundraiser?"
        ],
        options: ["raise", "make", "do", "earn"]
    },
    {
        collocate: "reach", base: "agreement", phrase: "reach an agreement", type: "verb-noun", topic: "work", level: "high",
        meaning: "To come to a mutual decision after negotiation.",
        sentences: [
            "The two countries finally {blank}ed an {base} on trade.",
            "After hours of discussion, they {blank}ed an {base}.",
            "It's not easy to {blank} an {base} when everyone disagrees.",
            "The union and management {blank}ed an {base} on wages."
        ],
        options: ["reach", "make", "do", "take"]
    },
    {
        collocate: "meet", base: "deadline", phrase: "meet a deadline", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To finish something by the required time.",
        sentences: [
            "We have to work overtime to {blank} the {base}.",
            "She always {blank}s her {base}s without exception.",
            "It's going to be difficult to {blank} such a tight {base}.",
            "He failed to {blank} the {base} for the application."
        ],
        options: ["meet", "make", "do", "take"]
    },
    {
        collocate: "meet", base: "needs", phrase: "meet needs", type: "verb-noun", topic: "work", level: "high",
        meaning: "To provide what is required or necessary.",
        sentences: [
            "The new design {blank}s the {base} of modern users.",
            "We must {blank} the {base} of all our customers.",
            "The building was renovated to {blank} safety {base}.",
            "Does this product {blank} your {base}?"
        ],
        options: ["meet", "make", "do", "fill"]
    },
    {
        collocate: "face", base: "challenge", phrase: "face a challenge", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To deal with a difficult situation.",
        sentences: [
            "The company is {blank}ing serious financial {base}s.",
            "She {blank}d many {base}s during her career.",
            "You have to {blank} this {base} head-on.",
            "Young people today {blank} different {base}s than their parents."
        ],
        options: ["face", "make", "do", "meet"]
    },
    {
        collocate: "save", base: "time", phrase: "save time", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To use less time doing something; to avoid wasting time.",
        sentences: [
            "Taking the highway will {blank} us a lot of {base}.",
            "Online banking {blank}s you {base} and effort.",
            "She always plans ahead to {blank} {base}.",
            "This shortcut will {blank} you about twenty minutes of {base}."
        ],
        options: ["save", "make", "keep", "spare"]
    },
    {
        collocate: "waste", base: "time", phrase: "waste time", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To use time badly or without purpose.",
        sentences: [
            "Stop {blank}ing {base} on social media and study!",
            "We {blank}d a lot of {base} waiting for the bus.",
            "Don't {blank} {base} arguing about unimportant things.",
            "He feels like he {blank}d {base} in his previous job."
        ],
        options: ["waste", "lose", "spend", "use"]
    },
    {
        collocate: "spend", base: "time", phrase: "spend time", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To use time doing a particular activity.",
        sentences: [
            "She likes to {blank} {base} reading before bed.",
            "We should {blank} more {base} with our family.",
            "He {blank}s a lot of {base} commuting to work.",
            "How do you {blank} your free {base} on weekends?"
        ],
        options: ["spend", "make", "pass", "use"]
    },
    {
        collocate: "lose", base: "temper", phrase: "lose your temper", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To suddenly become very angry.",
        sentences: [
            "He {blank} his {base} when the flight was canceled.",
            "Try not to {blank} your {base} in front of the children.",
            "She rarely {blank}s her {base}, even under pressure.",
            "It's easy to {blank} your {base} in stressful situations."
        ],
        options: ["lose", "break", "take", "get"]
    },
    {
        collocate: "lose", base: "weight", phrase: "lose weight", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To become thinner or lighter in body mass.",
        sentences: [
            "She wants to {blank} a few kilos before summer.",
            "The best way to {blank} {base} is through diet and exercise.",
            "He {blank} ten pounds in just two months.",
            "It's hard to {blank} {base} without regular exercise."
        ],
        options: ["lose", "drop", "make", "cut"]
    },
    {
        collocate: "gain", base: "experience", phrase: "gain experience", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To get knowledge or skill by doing something.",
        sentences: [
            "She {blank}ed valuable {base} working abroad.",
            "Internships help students {blank} practical {base}.",
            "You need to {blank} more {base} before applying for that role.",
            "He {blank}ed a lot of {base} in customer service."
        ],
        options: ["gain", "make", "take", "earn"]
    },
    {
        collocate: "win", base: "prize", phrase: "win a prize", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To receive an award for achieving something.",
        sentences: [
            "She {blank} first {base} in the science competition.",
            "He has {blank} many {base}s for his photography.",
            "Everyone who enters has a chance to {blank} a {base}.",
            "The film {blank} the top {base} at the festival."
        ],
        options: ["win", "earn", "get", "take"]
    },
    {
        collocate: "miss", base: "chance", phrase: "miss a chance", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To fail to take advantage of an opportunity.",
        sentences: [
            "Don't {blank} the {base} to see the Northern Lights.",
            "She {blank}ed her {base} to study abroad by waiting too long.",
            "He {blank}ed a golden {base} to invest in the company.",
            "If you {blank} this {base}, it won't come again."
        ],
        options: ["miss", "lose", "waste", "drop"]
    },
    {
        collocate: "launch", base: "campaign", phrase: "launch a campaign", type: "verb-noun", topic: "work", level: "high",
        meaning: "To start a planned series of actions to achieve a goal.",
        sentences: [
            "The company {blank}ed a new marketing {base}.",
            "They plan to {blank} an awareness {base} next month.",
            "The government {blank}ed a {base} to reduce plastic waste.",
            "She {blank}ed a fundraising {base} for the local hospital."
        ],
        options: ["launch", "make", "start", "open"]
    },
    {
        collocate: "conduct", base: "survey", phrase: "conduct a survey", type: "verb-noun", topic: "education", level: "high",
        meaning: "To carry out a systematic investigation to gather information.",
        sentences: [
            "The researchers {blank}ed a {base} of over 1,000 people.",
            "We need to {blank} a customer satisfaction {base}.",
            "The university {blank}s annual {base}s on student wellbeing.",
            "They {blank}ed a {base} to find out public opinion."
        ],
        options: ["conduct", "make", "do", "run"]
    },
    {
        collocate: "draw", base: "attention", phrase: "draw attention", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To make people notice something.",
        sentences: [
            "The article {blank}s {base} to the problem of homelessness.",
            "She didn't want to {blank} {base} to herself.",
            "The loud noise {blank} everyone's {base}.",
            "The report {blank}s {base} to several safety issues."
        ],
        options: ["draw", "make", "pull", "get"]
    },
    {
        collocate: "pose", base: "threat", phrase: "pose a threat", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To be a possible danger to someone or something.",
        sentences: [
            "Climate change {blank}s a serious {base} to wildlife.",
            "The new virus {blank}s a {base} to public health.",
            "Does this chemical {blank} a {base} to the environment?",
            "The flooding {blank}s a major {base} to local homes."
        ],
        options: ["pose", "make", "give", "do"]
    },
    {
        collocate: "heavy", base: "rain", phrase: "heavy rain", type: "adj-noun", topic: "weather", level: "elementary",
        meaning: "A large amount of rain falling at one time.",
        sentences: [
            "The forecast predicts {blank} {base} for tomorrow.",
            "We got caught in {blank} {base} without an umbrella.",
            "The {blank} {base} caused flooding in several areas.",
            "There's been {blank} {base} all week long."
        ],
        options: ["heavy", "strong", "hard", "big"]
    },
    {
        collocate: "heavy", base: "traffic", phrase: "heavy traffic", type: "adj-noun", topic: "travel", level: "elementary",
        meaning: "A large number of vehicles on the road, causing slow movement.",
        sentences: [
            "There's always {blank} {base} during rush hour.",
            "We were stuck in {blank} {base} for over an hour.",
            "The {blank} {base} made us late for the meeting.",
            "Try to avoid the highway — there's {blank} {base} today."
        ],
        options: ["heavy", "strong", "big", "thick"]
    },
    {
        collocate: "heavy", base: "smoker", phrase: "heavy smoker", type: "adj-noun", topic: "health", level: "middle",
        meaning: "A person who smokes a lot of cigarettes.",
        sentences: [
            "He used to be a {blank} {base} but quit last year.",
            "As a {blank} {base}, she's at risk of lung disease.",
            "My grandfather was a {blank} {base} all his life.",
            "Being a {blank} {base} greatly increases health risks."
        ],
        options: ["heavy", "strong", "big", "hard"]
    },
    {
        collocate: "heavy", base: "meal", phrase: "heavy meal", type: "adj-noun", topic: "food", level: "middle",
        meaning: "A large, filling meal that can make you feel uncomfortable.",
        sentences: [
            "Avoid eating a {blank} {base} before going to bed.",
            "After such a {blank} {base}, I just want to sleep.",
            "She prefers a light salad to a {blank} {base} at lunch.",
            "A {blank} {base} can make you feel sluggish in the afternoon."
        ],
        options: ["heavy", "strong", "big", "hard"]
    },
    {
        collocate: "heavy", base: "workload", phrase: "heavy workload", type: "adj-noun", topic: "work", level: "middle",
        meaning: "A large amount of work that someone has to do.",
        sentences: [
            "She's been under a {blank} {base} this semester.",
            "The team is struggling with a {blank} {base}.",
            "A {blank} {base} can lead to stress and burnout.",
            "Despite the {blank} {base}, he never complains."
        ],
        options: ["heavy", "strong", "big", "hard"]
    },
    {
        collocate: "strong", base: "coffee", phrase: "strong coffee", type: "adj-noun", topic: "food", level: "elementary",
        meaning: "Coffee that has a powerful, intense flavor.",
        sentences: [
            "I need a cup of {blank} {base} to wake me up.",
            "She always drinks {blank} black {base} in the morning.",
            "This espresso is very {blank} — would you like some milk?",
            "He prefers {blank} {base} to tea."
        ],
        options: ["strong", "heavy", "hard", "thick"]
    },
    {
        collocate: "strong", base: "wind", phrase: "strong wind", type: "adj-noun", topic: "weather", level: "elementary",
        meaning: "Wind that blows with great force.",
        sentences: [
            "A {blank} {base} blew the hat off my head.",
            "The {blank} {base}s damaged several rooftops.",
            "Be careful on the bridge — there's a very {blank} {base}.",
            "We couldn't play tennis because of the {blank} {base}."
        ],
        options: ["strong", "heavy", "hard", "big"]
    },
    {
        collocate: "strong", base: "opinion", phrase: "strong opinion", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A very firm belief about something.",
        sentences: [
            "She has a {blank} {base} about environmental issues.",
            "He always expresses {blank} {base}s during debates.",
            "People tend to have {blank} {base}s about politics.",
            "I don't have a {blank} {base} on the matter."
        ],
        options: ["strong", "heavy", "big", "hard"]
    },
    {
        collocate: "strong", base: "influence", phrase: "strong influence", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A powerful effect on someone or something.",
        sentences: [
            "Parents have a {blank} {base} on their children's behavior.",
            "Social media has a {blank} {base} on young people today.",
            "She had a {blank} {base} on his decision to study law.",
            "The culture has a {blank} {base} on local traditions."
        ],
        options: ["strong", "heavy", "big", "deep"]
    },
    {
        collocate: "strong", base: "feeling", phrase: "strong feeling", type: "adj-noun", topic: "people", level: "middle",
        meaning: "An intense emotion about something.",
        sentences: [
            "She has {blank} {base}s about animal rights.",
            "There's a {blank} {base} among staff that changes are needed.",
            "He has a {blank} {base} that something is wrong.",
            "Many people share {blank} {base}s about this topic."
        ],
        options: ["strong", "heavy", "deep", "hard"]
    },
    {
        collocate: "bright", base: "future", phrase: "bright future", type: "adj-noun", topic: "work", level: "elementary",
        meaning: "A future that is expected to be very good and successful.",
        sentences: [
            "With her talent, she has a {blank} {base} ahead of her.",
            "The company has a {blank} {base} in the tech industry.",
            "We believe the students have a {blank} {base}.",
            "The new project promises a {blank} {base} for the team."
        ],
        options: ["bright", "strong", "big", "light"]
    },
    {
        collocate: "bright", base: "idea", phrase: "bright idea", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A clever or good idea (sometimes used sarcastically).",
        sentences: [
            "Whose {blank} {base} was it to have a meeting at 7 a.m.?",
            "She had the {blank} {base} of selling handmade crafts online.",
            "That's a {blank} {base} — let's try it!",
            "He always comes up with {blank} {base}s for new products."
        ],
        options: ["bright", "strong", "clear", "sharp"]
    },
    {
        collocate: "deep", base: "breath", phrase: "deep breath", type: "adj-noun", topic: "health", level: "elementary",
        meaning: "A breath that fills your lungs completely, often to calm down.",
        sentences: [
            "Take a {blank} {base} and try to relax.",
            "She took a {blank} {base} before walking on stage.",
            "The doctor asked him to take a {blank} {base}.",
            "A few {blank} {base}s can help reduce anxiety."
        ],
        options: ["deep", "big", "heavy", "strong"]
    },
    {
        collocate: "deep", base: "sleep", phrase: "deep sleep", type: "adj-noun", topic: "health", level: "middle",
        meaning: "A state of sleeping soundly, difficult to be woken from.",
        sentences: [
            "She was in a {blank} {base} and didn't hear the alarm.",
            "The baby fell into a {blank} {base} after feeding.",
            "You need enough {blank} {base} for your body to recover.",
            "He was in such a {blank} {base} that nothing could wake him."
        ],
        options: ["deep", "heavy", "strong", "hard"]
    },
    {
        collocate: "deep", base: "concern", phrase: "deep concern", type: "adj-noun", topic: "people", level: "high",
        meaning: "A strong feeling of worry about something.",
        sentences: [
            "There is {blank} {base} about the rise in crime.",
            "She expressed {blank} {base} for the safety of the workers.",
            "The report raised {blank} {base} among health experts.",
            "His behavior is a matter of {blank} {base}."
        ],
        options: ["deep", "heavy", "strong", "big"]
    },
    {
        collocate: "broad", base: "range", phrase: "broad range", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A large variety of different things.",
        sentences: [
            "The store offers a {blank} {base} of products.",
            "She has a {blank} {base} of skills and interests.",
            "The university provides a {blank} {base} of courses.",
            "This treatment is effective against a {blank} {base} of diseases."
        ],
        options: ["broad", "big", "long", "heavy"]
    },
    {
        collocate: "broad", base: "daylight", phrase: "broad daylight", type: "adj-noun", topic: "daily", level: "high",
        meaning: "During the day when it is fully light, used for emphasis.",
        sentences: [
            "The robbery happened in {blank} {base} on a busy street.",
            "I can't believe he did that in {blank} {base}!",
            "The attack occurred in {blank} {base} with witnesses present.",
            "They stole the car in {blank} {base}."
        ],
        options: ["broad", "wide", "full", "bright"]
    },
    {
        collocate: "sharp", base: "increase", phrase: "sharp increase", type: "adj-noun", topic: "money", level: "high",
        meaning: "A sudden and large rise in something.",
        sentences: [
            "There has been a {blank} {base} in fuel prices.",
            "The city experienced a {blank} {base} in population.",
            "A {blank} {base} in demand led to product shortages.",
            "Analysts predict a {blank} {base} in interest rates."
        ],
        options: ["sharp", "strong", "big", "heavy"]
    },
    {
        collocate: "sharp", base: "decline", phrase: "sharp decline", type: "adj-noun", topic: "money", level: "high",
        meaning: "A sudden and large decrease in something.",
        sentences: [
            "There was a {blank} {base} in tourism after the pandemic.",
            "The company reported a {blank} {base} in profits.",
            "We've seen a {blank} {base} in birth rates.",
            "The stock market suffered a {blank} {base} overnight."
        ],
        options: ["sharp", "strong", "deep", "heavy"]
    },
    {
        collocate: "narrow", base: "escape", phrase: "narrow escape", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A situation in which you only just avoided danger or trouble.",
        sentences: [
            "She had a {blank} {base} when the tree fell near her car.",
            "That was a {blank} {base} — we nearly missed the flight.",
            "He had a {blank} {base} from the burning building.",
            "It was a {blank} {base}, but everyone survived the accident."
        ],
        options: ["narrow", "close", "tight", "small"]
    },
    {
        collocate: "high", base: "quality", phrase: "high quality", type: "adj-noun", topic: "work", level: "elementary",
        meaning: "Very good standard; excellent in nature.",
        sentences: [
            "This brand is known for its {blank} {base} products.",
            "We always deliver {blank} {base} service to our clients.",
            "The materials used are of {blank} {base}.",
            "Customers expect {blank} {base} at this price point."
        ],
        options: ["high", "big", "strong", "top"]
    },
    {
        collocate: "high", base: "standard", phrase: "high standard", type: "adj-noun", topic: "work", level: "middle",
        meaning: "An excellent level of quality or achievement.",
        sentences: [
            "The school maintains {blank} {base}s of education.",
            "She sets {blank} {base}s for herself and her team.",
            "The hotel is known for its {blank} {base}s of cleanliness.",
            "We expect all employees to work to a {blank} {base}."
        ],
        options: ["high", "big", "strong", "tall"]
    },
    {
        collocate: "high", base: "pressure", phrase: "high pressure", type: "adj-noun", topic: "work", level: "middle",
        meaning: "A situation involving a lot of stress or demand.",
        sentences: [
            "Working in finance is a {blank} {base} environment.",
            "She thrives under {blank} {base} situations.",
            "The {blank} {base} job was affecting his health.",
            "Surgeons work under incredibly {blank} {base}."
        ],
        options: ["high", "heavy", "strong", "big"]
    },
    {
        collocate: "low", base: "cost", phrase: "low cost", type: "adj-noun", topic: "money", level: "elementary",
        meaning: "Not expensive; cheap.",
        sentences: [
            "The airline offers {blank} {base} flights to Europe.",
            "They found a {blank} {base} solution to the problem.",
            "The goal is to provide {blank} {base} housing for everyone.",
            "This product delivers great results at a {blank} {base}."
        ],
        options: ["low", "small", "cheap", "short"]
    },
    {
        collocate: "low", base: "profile", phrase: "low profile", type: "adj-noun", topic: "people", level: "high",
        meaning: "Not attracting attention or publicity; staying quiet and unnoticed.",
        sentences: [
            "The celebrity tried to keep a {blank} {base} during the scandal.",
            "He prefers to maintain a {blank} {base} at work.",
            "The company kept a {blank} {base} during the investigation.",
            "She decided to keep a {blank} {base} until the controversy died down."
        ],
        options: ["low", "small", "quiet", "short"]
    },
    {
        collocate: "close", base: "relationship", phrase: "close relationship", type: "adj-noun", topic: "people", level: "elementary",
        meaning: "A strong, intimate connection between people.",
        sentences: [
            "She has a very {blank} {base} with her sister.",
            "Building a {blank} {base} with clients is essential.",
            "They developed a {blank} {base} over the years.",
            "He maintains a {blank} {base} with his childhood friends."
        ],
        options: ["close", "near", "strong", "tight"]
    },
    {
        collocate: "wide", base: "variety", phrase: "wide variety", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "Many different types of things.",
        sentences: [
            "The restaurant offers a {blank} {base} of dishes.",
            "There's a {blank} {base} of activities for children.",
            "A {blank} {base} of opinions were expressed at the meeting.",
            "The shop sells a {blank} {base} of organic products."
        ],
        options: ["wide", "big", "large", "broad"]
    },
    {
        collocate: "great", base: "deal", phrase: "great deal", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A large amount or extent of something.",
        sentences: [
            "She has a {blank} {base} of experience in teaching.",
            "We spent a {blank} {base} of time on the project.",
            "The new law has attracted a {blank} {base} of attention.",
            "He put a {blank} {base} of effort into his studies."
        ],
        options: ["great", "big", "large", "heavy"]
    },
    {
        collocate: "big", base: "difference", phrase: "big difference", type: "adj-noun", topic: "daily", level: "elementary",
        meaning: "A large or important distinction between things.",
        sentences: [
            "There's a {blank} {base} between knowing and understanding.",
            "A smile can make a {blank} {base} in someone's day.",
            "The new teacher made a {blank} {base} in the school.",
            "It doesn't make a {blank} {base} which color you choose."
        ],
        options: ["big", "large", "great", "strong"]
    },
    {
        collocate: "deeply", base: "concerned", phrase: "deeply concerned", type: "adv-adj", topic: "people", level: "high",
        meaning: "Very worried about something.",
        sentences: [
            "Parents are {blank} {base} about online safety.",
            "We are {blank} {base} by the rise in homelessness.",
            "She was {blank} {base} about her son's health.",
            "The government says it is {blank} {base} about the situation."
        ],
        options: ["deeply", "highly", "strongly", "fully"]
    },
    {
        collocate: "deeply", base: "disappointed", phrase: "deeply disappointed", type: "adv-adj", topic: "people", level: "high",
        meaning: "Very unhappy because something did not happen as expected.",
        sentences: [
            "I was {blank} {base} by the exam results.",
            "She felt {blank} {base} when she didn't get the job.",
            "Fans were {blank} {base} by the team's performance.",
            "He was {blank} {base} with the quality of service."
        ],
        options: ["deeply", "highly", "strongly", "totally"]
    },
    {
        collocate: "deeply", base: "moved", phrase: "deeply moved", type: "adv-adj", topic: "people", level: "high",
        meaning: "Strongly affected emotionally.",
        sentences: [
            "The audience was {blank} {base} by her performance.",
            "He was {blank} {base} by the kindness of strangers.",
            "I felt {blank} {base} after reading the letter.",
            "Everyone was {blank} {base} by the documentary."
        ],
        options: ["deeply", "highly", "strongly", "fully"]
    },
    {
        collocate: "deeply", base: "rooted", phrase: "deeply rooted", type: "adv-adj", topic: "education", level: "college",
        meaning: "Strongly established and difficult to change.",
        sentences: [
            "These traditions are {blank} {base} in the local culture.",
            "Prejudice is often {blank} {base} in society.",
            "The problem is {blank} {base} and won't be easy to solve.",
            "Her love of music is {blank} {base} in childhood memories."
        ],
        options: ["deeply", "highly", "strongly", "firmly"]
    },
    {
        collocate: "highly", base: "unlikely", phrase: "highly unlikely", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Very improbable; almost certainly not going to happen.",
        sentences: [
            "It is {blank} {base} that the train will arrive on time.",
            "A full recovery is {blank} {base} at this stage.",
            "It seems {blank} {base} that they will agree to our terms.",
            "Snow in July is {blank} {base} in this region."
        ],
        options: ["highly", "deeply", "strongly", "totally"]
    },
    {
        collocate: "highly", base: "recommended", phrase: "highly recommended", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Strongly suggested as being very good.",
        sentences: [
            "This restaurant is {blank} {base} by food critics.",
            "The book is {blank} {base} for language learners.",
            "The hotel was {blank} {base} by several travel blogs.",
            "She came {blank} {base} by her previous employer."
        ],
        options: ["highly", "deeply", "strongly", "well"]
    },
    {
        collocate: "highly", base: "skilled", phrase: "highly skilled", type: "adv-adj", topic: "work", level: "high",
        meaning: "Having a great amount of ability or expertise.",
        sentences: [
            "The company employs {blank} {base} engineers.",
            "Only {blank} {base} workers are accepted for this position.",
            "She is a {blank} {base} surgeon with years of experience.",
            "The country needs more {blank} {base} professionals."
        ],
        options: ["highly", "deeply", "strongly", "very"]
    },
    {
        collocate: "highly", base: "competitive", phrase: "highly competitive", type: "adv-adj", topic: "work", level: "high",
        meaning: "Involving a lot of competition; very intense.",
        sentences: [
            "The job market is {blank} {base} for new graduates.",
            "Tech is a {blank} {base} industry to break into.",
            "University admissions are becoming {blank} {base}.",
            "She thrives in a {blank} {base} environment."
        ],
        options: ["highly", "deeply", "strongly", "fully"]
    },
    {
        collocate: "highly", base: "effective", phrase: "highly effective", type: "adv-adj", topic: "health", level: "high",
        meaning: "Working very well and producing the desired result.",
        sentences: [
            "The new treatment has proven to be {blank} {base}.",
            "She is a {blank} {base} manager who gets results.",
            "The vaccine is {blank} {base} against the virus.",
            "Time management is a {blank} {base} study strategy."
        ],
        options: ["highly", "deeply", "fully", "strongly"]
    },
    {
        collocate: "fully", base: "aware", phrase: "fully aware", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Completely knowing about something.",
        sentences: [
            "Are you {blank} {base} of the risks involved?",
            "She was {blank} {base} that the deadline was approaching.",
            "The company was {blank} {base} of the safety issues.",
            "I'm {blank} {base} of the consequences of my actions."
        ],
        options: ["fully", "deeply", "highly", "totally"]
    },
    {
        collocate: "fully", base: "committed", phrase: "fully committed", type: "adv-adj", topic: "work", level: "high",
        meaning: "Completely dedicated to something.",
        sentences: [
            "We are {blank} {base} to improving customer service.",
            "She is {blank} {base} to her training program.",
            "The team is {blank} {base} to meeting the deadline.",
            "The government says it is {blank} {base} to the peace process."
        ],
        options: ["fully", "deeply", "highly", "strongly"]
    },
    {
        collocate: "fully", base: "recovered", phrase: "fully recovered", type: "adv-adj", topic: "health", level: "middle",
        meaning: "Completely healed or returned to normal health.",
        sentences: [
            "She has {blank} {base} from the surgery.",
            "It took months for him to {blank} {base} from the injury.",
            "The economy has not yet {blank} {base}.",
            "Patients usually {blank} {base} within two weeks."
        ],
        options: ["fully", "deeply", "highly", "completely"]
    },
    {
        collocate: "seriously", base: "injured", phrase: "seriously injured", type: "adv-adj", topic: "health", level: "middle",
        meaning: "Hurt very badly in an accident or incident.",
        sentences: [
            "Three people were {blank} {base} in the crash.",
            "He was {blank} {base} while playing football.",
            "Several passengers were {blank} {base} in the bus accident.",
            "She was {blank} {base} and taken to hospital immediately."
        ],
        options: ["seriously", "deeply", "highly", "strongly"]
    },
    {
        collocate: "seriously", base: "ill", phrase: "seriously ill", type: "adv-adj", topic: "health", level: "middle",
        meaning: "Very sick; suffering from a severe illness.",
        sentences: [
            "He became {blank} {base} after eating contaminated food.",
            "The patient is {blank} {base} and needs intensive care.",
            "She was {blank} {base} for several months last year.",
            "The child was {blank} {base} and had to be hospitalized."
        ],
        options: ["seriously", "deeply", "highly", "badly"]
    },
    {
        collocate: "bitterly", base: "cold", phrase: "bitterly cold", type: "adv-adj", topic: "weather", level: "high",
        meaning: "Extremely cold in an unpleasant way.",
        sentences: [
            "It was {blank} {base} outside, well below freezing.",
            "The {blank} {base} winter kept everyone indoors.",
            "Despite the {blank} {base} weather, she went for a walk.",
            "The wind made it feel {blank} {base}."
        ],
        options: ["bitterly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "bitterly", base: "disappointed", phrase: "bitterly disappointed", type: "adv-adj", topic: "people", level: "high",
        meaning: "Extremely unhappy and let down.",
        sentences: [
            "He was {blank} {base} when his proposal was rejected.",
            "The fans were {blank} {base} by the loss.",
            "She felt {blank} {base} after failing the exam.",
            "They were {blank} {base} with the final decision."
        ],
        options: ["bitterly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "perfectly", base: "normal", phrase: "perfectly normal", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Completely typical and not unusual at all.",
        sentences: [
            "It's {blank} {base} to feel nervous before an interview.",
            "The test results are {blank} {base} — nothing to worry about.",
            "Feeling tired after a long flight is {blank} {base}.",
            "Everything looked {blank} {base} when we arrived."
        ],
        options: ["perfectly", "deeply", "highly", "totally"]
    },
    {
        collocate: "perfectly", base: "clear", phrase: "perfectly clear", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Completely obvious and easy to understand.",
        sentences: [
            "Let me make one thing {blank} {base}: I disagree.",
            "The instructions were {blank} {base} from the start.",
            "It was {blank} {base} that she wasn't happy with the plan.",
            "The message was {blank} {base} — there was no room for doubt."
        ],
        options: ["perfectly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "utterly", base: "ridiculous", phrase: "utterly ridiculous", type: "adv-adj", topic: "daily", level: "college",
        meaning: "Completely absurd or unreasonable.",
        sentences: [
            "The idea of working without pay is {blank} {base}.",
            "His excuse for being late was {blank} {base}.",
            "It sounds {blank} {base}, but it actually happened.",
            "The new rule is {blank} {base} and must be changed."
        ],
        options: ["utterly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "utterly", base: "impossible", phrase: "utterly impossible", type: "adv-adj", topic: "daily", level: "college",
        meaning: "Completely and absolutely not possible.",
        sentences: [
            "It's {blank} {base} to finish all this work by tomorrow.",
            "Living without water is {blank} {base}.",
            "The task seemed {blank} {base} at first.",
            "Finding a parking space downtown is {blank} {base} on weekends."
        ],
        options: ["utterly", "deeply", "highly", "fully"]
    },
    {
        collocate: "completely", base: "different", phrase: "completely different", type: "adv-adj", topic: "daily", level: "elementary",
        meaning: "Totally unlike something else; not similar at all.",
        sentences: [
            "The two sisters are {blank} {base} from each other.",
            "Life in the city is {blank} {base} from life in the countryside.",
            "His approach is {blank} {base} from mine.",
            "The new version looks {blank} {base} from the original."
        ],
        options: ["completely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "absolutely", base: "essential", phrase: "absolutely essential", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Completely necessary; cannot be done without.",
        sentences: [
            "Good communication skills are {blank} {base} for this job.",
            "It is {blank} {base} that we finish by Friday.",
            "Clean water is {blank} {base} for survival.",
            "Regular backups are {blank} {base} to protect your data."
        ],
        options: ["absolutely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "absolutely", base: "delighted", phrase: "absolutely delighted", type: "adv-adj", topic: "people", level: "high",
        meaning: "Extremely happy and pleased.",
        sentences: [
            "We are {blank} {base} to announce the winner.",
            "She was {blank} {base} when she heard the good news.",
            "The children were {blank} {base} with their birthday presents.",
            "I'm {blank} {base} that you can come to the wedding."
        ],
        options: ["absolutely", "deeply", "highly", "completely"]
    },
    {
        collocate: "widely", base: "known", phrase: "widely known", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Known by many people; famous.",
        sentences: [
            "She is {blank} {base} for her charity work.",
            "It is {blank} {base} that smoking causes cancer.",
            "The brand is {blank} {base} across the globe.",
            "This fact is not {blank} {base} among the general public."
        ],
        options: ["widely", "deeply", "highly", "broadly"]
    },
    {
        collocate: "widely", base: "used", phrase: "widely used", type: "adv-adj", topic: "technology", level: "middle",
        meaning: "Used by many people or in many places.",
        sentences: [
            "English is {blank} {base} in international business.",
            "The software is {blank} {base} in schools around the world.",
            "This technique is {blank} {base} in modern medicine.",
            "Renewable energy is becoming more {blank} {base}."
        ],
        options: ["widely", "deeply", "highly", "broadly"]
    },
    {
        collocate: "badly", base: "damaged", phrase: "badly damaged", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Severely harmed or broken.",
        sentences: [
            "The car was {blank} {base} in the accident.",
            "The building was {blank} {base} by the earthquake.",
            "Several homes were {blank} {base} during the storm.",
            "His reputation was {blank} {base} by the scandal."
        ],
        options: ["badly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "traffic", base: "jam", phrase: "traffic jam", type: "noun-noun", topic: "travel", level: "elementary",
        meaning: "A long line of vehicles that cannot move or can only move very slowly.",
        sentences: [
            "We were stuck in a {blank} {base} for two hours.",
            "There's a terrible {blank} {base} on the highway.",
            "The accident caused a massive {blank} {base}.",
            "She's always late because of {blank} {base}s."
        ],
        options: ["traffic", "road", "car", "street"]
    },
    {
        collocate: "blood", base: "pressure", phrase: "blood pressure", type: "noun-noun", topic: "health", level: "middle",
        meaning: "The force of blood pushing against the walls of your arteries.",
        sentences: [
            "The doctor checked my {blank} {base} during the visit.",
            "High {blank} {base} can lead to heart disease.",
            "She takes medication to control her {blank} {base}.",
            "Stress can raise your {blank} {base} significantly."
        ],
        options: ["blood", "heart", "body", "health"]
    },
    {
        collocate: "heart", base: "attack", phrase: "heart attack", type: "noun-noun", topic: "health", level: "middle",
        meaning: "A serious medical condition where the heart suddenly stops working properly.",
        sentences: [
            "He suffered a {blank} {base} while jogging.",
            "Smoking increases the risk of a {blank} {base}.",
            "She survived a massive {blank} {base} last year.",
            "A healthy diet can help prevent {blank} {base}s."
        ],
        options: ["heart", "blood", "health", "body"]
    },
    {
        collocate: "climate", base: "change", phrase: "climate change", type: "noun-noun", topic: "weather", level: "middle",
        meaning: "Long-term changes in temperature and weather patterns on Earth.",
        sentences: [
            "{blank} {base} is one of the biggest challenges facing humanity.",
            "The effects of {blank} {base} are already visible worldwide.",
            "Governments must take action to combat {blank} {base}.",
            "Many species are threatened by {blank} {base}."
        ],
        options: ["climate", "weather", "nature", "global"]
    },
    {
        collocate: "job", base: "interview", phrase: "job interview", type: "noun-noun", topic: "work", level: "elementary",
        meaning: "A formal meeting in which someone is asked questions to see if they are suitable for a job.",
        sentences: [
            "She has a {blank} {base} at the bank tomorrow.",
            "He was very nervous before his first {blank} {base}.",
            "Preparing for a {blank} {base} is essential.",
            "The {blank} {base} lasted about 45 minutes."
        ],
        options: ["job", "work", "career", "office"]
    },
    {
        collocate: "rush", base: "hour", phrase: "rush hour", type: "noun-noun", topic: "travel", level: "elementary",
        meaning: "The busy time of day when many people travel to or from work.",
        sentences: [
            "Avoid driving during {blank} {base} if you can.",
            "The trains are packed during {blank} {base}.",
            "{blank} {base} traffic is always terrible on Mondays.",
            "She leaves early to beat the {blank} {base}."
        ],
        options: ["rush", "busy", "peak", "high"]
    },
    {
        collocate: "side", base: "effect", phrase: "side effect", type: "noun-noun", topic: "health", level: "middle",
        meaning: "An unwanted effect of a medicine or treatment.",
        sentences: [
            "Drowsiness is a common {blank} {base} of this medication.",
            "The drug may have serious {blank} {base}s.",
            "She experienced no {blank} {base}s from the vaccine.",
            "Always read about potential {blank} {base}s before taking medicine."
        ],
        options: ["side", "bad", "after", "negative"]
    },
    {
        collocate: "eye", base: "contact", phrase: "eye contact", type: "noun-noun", topic: "people", level: "middle",
        meaning: "Looking directly into someone's eyes during a conversation.",
        sentences: [
            "Maintaining {blank} {base} shows confidence.",
            "He avoids {blank} {base} when he's lying.",
            "Good {blank} {base} is important in job interviews.",
            "In some cultures, direct {blank} {base} is considered rude."
        ],
        options: ["eye", "face", "direct", "visual"]
    },
    {
        collocate: "food", base: "chain", phrase: "food chain", type: "noun-noun", topic: "education", level: "middle",
        meaning: "A series of organisms where each depends on the next as a source of food.",
        sentences: [
            "Sharks are at the top of the ocean {blank} {base}.",
            "Pollution can disrupt the entire {blank} {base}.",
            "Plants form the base of most {blank} {base}s.",
            "Understanding the {blank} {base} is key to ecology."
        ],
        options: ["food", "life", "nature", "animal"]
    },
    {
        collocate: "role", base: "model", phrase: "role model", type: "noun-noun", topic: "people", level: "middle",
        meaning: "A person whose behavior is imitated by others.",
        sentences: [
            "She's a great {blank} {base} for young women.",
            "Parents should be positive {blank} {base}s for their children.",
            "He considers his grandfather his biggest {blank} {base}.",
            "Athletes are often seen as {blank} {base}s."
        ],
        options: ["role", "life", "top", "good"]
    },
    {
        collocate: "brain", base: "drain", phrase: "brain drain", type: "noun-noun", topic: "education", level: "college",
        meaning: "The emigration of highly trained or skilled people from a country.",
        sentences: [
            "The country is suffering from a serious {blank} {base}.",
            "{blank} {base} is a major problem for developing nations.",
            "Low salaries are the main cause of {blank} {base}.",
            "The government is trying to reverse the {blank} {base}."
        ],
        options: ["brain", "talent", "skill", "mind"]
    },
    {
        collocate: "greenhouse", base: "effect", phrase: "greenhouse effect", type: "noun-noun", topic: "weather", level: "high",
        meaning: "The natural process by which gases in the atmosphere trap heat from the sun.",
        sentences: [
            "The {blank} {base} is responsible for warming the planet.",
            "Carbon dioxide contributes to the {blank} {base}.",
            "Scientists have studied the {blank} {base} for decades.",
            "Without the {blank} {base}, Earth would be much colder."
        ],
        options: ["greenhouse", "global", "warming", "heat"]
    },
    {
        collocate: "birth", base: "rate", phrase: "birth rate", type: "noun-noun", topic: "education", level: "high",
        meaning: "The number of births per thousand people per year in a population.",
        sentences: [
            "The {blank} {base} in many countries is declining.",
            "A falling {blank} {base} will affect the economy long-term.",
            "Japan has one of the lowest {blank} {base}s in the world.",
            "Government policies aim to increase the {blank} {base}."
        ],
        options: ["birth", "baby", "child", "population"]
    },
    {
        collocate: "power", base: "failure", phrase: "power failure", type: "noun-noun", topic: "technology", level: "middle",
        meaning: "A period when the electrical supply stops working.",
        sentences: [
            "A {blank} {base} left the city in darkness for hours.",
            "The {blank} {base} disrupted operations at the hospital.",
            "We experienced a {blank} {base} during the storm.",
            "The data center has backup generators in case of {blank} {base}."
        ],
        options: ["power", "electric", "energy", "light"]
    },
    {
        collocate: "career", base: "opportunity", phrase: "career opportunity", type: "noun-noun", topic: "work", level: "middle",
        meaning: "A chance to advance or develop in one's profession.",
        sentences: [
            "The city offers many {blank} {base}ies for young professionals.",
            "She moved abroad for a better {blank} {base}.",
            "This internship could lead to a great {blank} {base}.",
            "Don't miss this exciting {blank} {base}."
        ],
        options: ["career", "job", "work", "business"]
    },
    {
        collocate: "safety", base: "measure", phrase: "safety measure", type: "noun-noun", topic: "work", level: "high",
        meaning: "An action taken to prevent accidents or harm.",
        sentences: [
            "The factory has strict {blank} {base}s in place.",
            "New {blank} {base}s were introduced after the incident.",
            "Wearing a helmet is an important {blank} {base}.",
            "The airline reviewed all its {blank} {base}s."
        ],
        options: ["safety", "security", "protection", "health"]
    },
    {
        collocate: "life", base: "expectancy", phrase: "life expectancy", type: "noun-noun", topic: "health", level: "high",
        meaning: "The average number of years a person is expected to live.",
        sentences: [
            "{blank} {base} has increased significantly in the last century.",
            "Better healthcare has raised {blank} {base} worldwide.",
            "The country has a {blank} {base} of over 80 years.",
            "Diet and exercise are linked to higher {blank} {base}."
        ],
        options: ["life", "age", "living", "health"]
    },
    {
        collocate: "common", base: "sense", phrase: "common sense", type: "adj-noun", topic: "daily", level: "elementary",
        meaning: "The basic ability to think and behave in a reasonable way.",
        sentences: [
            "Use your {blank} {base} — don't walk alone at night.",
            "It's just {blank} {base} to wear a seatbelt.",
            "The solution requires nothing more than {blank} {base}.",
            "He seems to lack basic {blank} {base}."
        ],
        options: ["common", "normal", "basic", "general"]
    },
    {
        collocate: "native", base: "speaker", phrase: "native speaker", type: "adj-noun", topic: "education", level: "middle",
        meaning: "A person who has spoken a particular language from earliest childhood.",
        sentences: [
            "She speaks English like a {blank} {base}.",
            "The course is taught by {blank} {base}s of French.",
            "Being a {blank} {base} doesn't mean you can teach well.",
            "He wants to practice with {blank} {base}s."
        ],
        options: ["native", "natural", "original", "first"]
    },
    {
        collocate: "solar", base: "energy", phrase: "solar energy", type: "adj-noun", topic: "technology", level: "middle",
        meaning: "Energy from the sun that is converted into electrical or thermal power.",
        sentences: [
            "Many countries are investing in {blank} {base}.",
            "{blank} {base} is a clean alternative to fossil fuels.",
            "The house is powered entirely by {blank} {base}.",
            "The cost of {blank} {base} has dropped significantly."
        ],
        options: ["solar", "sun", "light", "heat"]
    },
    {
        collocate: "place", base: "order", phrase: "place an order", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To request something to be supplied, especially goods or food.",
        sentences: [
            "I'd like to {blank} an {base} for delivery, please.",
            "She {blank}d an {base} for 200 units of the product.",
            "You can {blank} your {base} online or by phone.",
            "He {blank}d an {base} at the restaurant without looking at the menu."
        ],
        options: ["place", "make", "put", "give"]
    },
    {
        collocate: "submit", base: "application", phrase: "submit an application", type: "verb-noun", topic: "work", level: "high",
        meaning: "To formally send in a request, especially for a job or program.",
        sentences: [
            "You must {blank} your {base} by the end of March.",
            "She {blank}ted an {base} for the scholarship.",
            "Over 500 people {blank}ted {base}s for the position.",
            "Have you {blank}ted your university {base} yet?"
        ],
        options: ["submit", "make", "send", "put"]
    },
    {
        collocate: "express", base: "gratitude", phrase: "express gratitude", type: "verb-noun", topic: "people", level: "college",
        meaning: "To show or communicate feelings of thankfulness.",
        sentences: [
            "I'd like to {blank} my {base} to everyone who helped.",
            "She {blank}ed her {base} with a heartfelt letter.",
            "They {blank}ed {base} for the generous donations.",
            "It's important to {blank} {base} to those around you."
        ],
        options: ["express", "make", "say", "give"]
    },
    {
        collocate: "deliver", base: "speech", phrase: "deliver a speech", type: "verb-noun", topic: "work", level: "high",
        meaning: "To give a formal talk to an audience.",
        sentences: [
            "The mayor {blank}ed a {base} at the opening ceremony.",
            "She was invited to {blank} a {base} at the conference.",
            "He {blank}ed an inspiring {base} to the graduating class.",
            "Practicing will help you {blank} a confident {base}."
        ],
        options: ["deliver", "make", "say", "tell"]
    },
    {
        collocate: "commit", base: "crime", phrase: "commit a crime", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To do something illegal.",
        sentences: [
            "He {blank}ted a serious {base} and was sentenced to prison.",
            "Anyone who {blank}s a {base} must face the consequences.",
            "She would never {blank} a {base}, no matter the circumstances.",
            "The suspect is believed to have {blank}ted several {base}s."
        ],
        options: ["commit", "make", "do", "perform"]
    },
    {
        collocate: "solve", base: "problem", phrase: "solve a problem", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To find an answer or solution to a difficulty.",
        sentences: [
            "We need to work together to {blank} this {base}.",
            "She is very good at {blank}ing complex {base}s.",
            "Technology alone won't {blank} the {base} of poverty.",
            "Can you help me {blank} this math {base}?"
        ],
        options: ["solve", "make", "fix", "answer"]
    },
    {
        collocate: "overcome", base: "obstacle", phrase: "overcome an obstacle", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To succeed in dealing with a difficulty or problem.",
        sentences: [
            "She {blank} every {base} that stood in her way.",
            "The team had to {blank} several {base}s to finish the project.",
            "With determination, you can {blank} any {base}.",
            "He {blank} the {base} of his disability to become a champion."
        ],
        options: ["overcome", "pass", "break", "solve"]
    },
    {
        collocate: "perform", base: "task", phrase: "perform a task", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To carry out or do a piece of work.",
        sentences: [
            "Robots can {blank} repetitive {base}s more efficiently.",
            "She was asked to {blank} a difficult {base}.",
            "He {blank}s his daily {base}s without complaint.",
            "The software helps you {blank} multiple {base}s at once."
        ],
        options: ["perform", "make", "do", "run"]
    },
    {
        collocate: "acquire", base: "knowledge", phrase: "acquire knowledge", type: "verb-noun", topic: "education", level: "college",
        meaning: "To gain information and understanding through learning or experience.",
        sentences: [
            "Students {blank} {base} through reading and discussion.",
            "She {blank}d extensive {base} of European history.",
            "The best way to {blank} {base} is through practice.",
            "He {blank}d his {base} of cooking from his grandmother."
        ],
        options: ["acquire", "make", "take", "earn"]
    },
    {
        collocate: "broaden", base: "horizons", phrase: "broaden horizons", type: "verb-noun", topic: "education", level: "college",
        meaning: "To expand your range of interests, experiences, or knowledge.",
        sentences: [
            "Traveling abroad really {blank}s your {base}.",
            "Reading widely helps to {blank} your {base}.",
            "She wanted to {blank} her {base} by studying overseas.",
            "This program is designed to {blank} students' {base}."
        ],
        options: ["broaden", "widen", "open", "extend"]
    },
    {
        collocate: "harsh", base: "criticism", phrase: "harsh criticism", type: "adj-noun", topic: "people", level: "high",
        meaning: "Strong, severe negative comments about someone or something.",
        sentences: [
            "The film received {blank} {base} from reviewers.",
            "She was hurt by the {blank} {base} of her work.",
            "Despite {blank} {base}, he continued with his plan.",
            "The government faced {blank} {base} for its handling of the crisis."
        ],
        options: ["harsh", "heavy", "strong", "hard"]
    },
    {
        collocate: "steady", base: "growth", phrase: "steady growth", type: "adj-noun", topic: "money", level: "high",
        meaning: "Continuous, gradual increase over time.",
        sentences: [
            "The economy has shown {blank} {base} over the past decade.",
            "The company has experienced {blank} {base} in revenue.",
            "We expect {blank} {base} in the housing market.",
            "{blank} {base} is more sustainable than rapid expansion."
        ],
        options: ["steady", "heavy", "hard", "strong"]
    },
    {
        collocate: "renewable", base: "energy", phrase: "renewable energy", type: "adj-noun", topic: "technology", level: "middle",
        meaning: "Energy from sources that are naturally replenished, like wind and solar.",
        sentences: [
            "The government is investing heavily in {blank} {base}.",
            "{blank} {base} now accounts for 30% of the power supply.",
            "The switch to {blank} {base} is essential for the planet.",
            "More homes are being powered by {blank} {base}."
        ],
        options: ["renewable", "natural", "clean", "green"]
    },
    {
        collocate: "raw", base: "material", phrase: "raw material", type: "adj-noun", topic: "work", level: "middle",
        meaning: "Basic substances used to make products.",
        sentences: [
            "The factory imports {blank} {base}s from abroad.",
            "Rising prices of {blank} {base}s affect manufacturing costs.",
            "Wood is a {blank} {base} used in construction.",
            "The country is rich in {blank} {base}s like oil and copper."
        ],
        options: ["raw", "basic", "pure", "natural"]
    },
    {
        collocate: "disposable", base: "income", phrase: "disposable income", type: "adj-noun", topic: "money", level: "college",
        meaning: "The money remaining after taxes and essential expenses are paid.",
        sentences: [
            "Many young people have limited {blank} {base}.",
            "Higher {blank} {base} allows for more leisure spending.",
            "The average {blank} {base} has risen slightly this year.",
            "Families with lower {blank} {base} spend more on essentials."
        ],
        options: ["disposable", "available", "spare", "free"]
    },
    {
        collocate: "vital", base: "role", phrase: "vital role", type: "adj-noun", topic: "work", level: "high",
        meaning: "An extremely important function or purpose.",
        sentences: [
            "Teachers play a {blank} {base} in shaping young minds.",
            "Technology plays a {blank} {base} in modern healthcare.",
            "She plays a {blank} {base} in the success of the company.",
            "Communication plays a {blank} {base} in any relationship."
        ],
        options: ["vital", "big", "strong", "heavy"]
    },
    {
        collocate: "golden", base: "opportunity", phrase: "golden opportunity", type: "adj-noun", topic: "work", level: "high",
        meaning: "An excellent chance that should not be missed.",
        sentences: [
            "This is a {blank} {base} to invest in the market.",
            "Don't miss this {blank} {base} to study abroad.",
            "The interview was a {blank} {base} she couldn't pass up.",
            "Winning the grant was a {blank} {base} for her research."
        ],
        options: ["golden", "great", "bright", "perfect"]
    },
    {
        collocate: "vicious", base: "circle", phrase: "vicious circle", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A situation in which one problem causes another, which then makes the first worse.",
        sentences: [
            "Poverty and poor education create a {blank} {base}.",
            "It's a {blank} {base} of debt and borrowing.",
            "She was trapped in a {blank} {base} of stress and insomnia.",
            "Breaking the {blank} {base} requires systemic change."
        ],
        options: ["vicious", "bad", "closed", "endless"]
    },
    {
        collocate: "public", base: "transport", phrase: "public transport", type: "adj-noun", topic: "travel", level: "elementary",
        meaning: "A system of buses, trains, etc. available for everyone to use.",
        sentences: [
            "Most people in the city use {blank} {base}.",
            "Improving {blank} {base} would reduce traffic congestion.",
            "She takes {blank} {base} to work every day.",
            "The quality of {blank} {base} varies greatly by city."
        ],
        options: ["public", "open", "common", "general"]
    },
    {
        collocate: "remote", base: "area", phrase: "remote area", type: "adj-noun", topic: "travel", level: "middle",
        meaning: "A place that is far from cities and difficult to reach.",
        sentences: [
            "Access to healthcare is limited in {blank} {base}s.",
            "They traveled to a {blank} {base} in the mountains.",
            "Internet connectivity is poor in {blank} {base}s.",
            "Many {blank} {base}s still lack basic infrastructure."
        ],
        options: ["remote", "far", "distant", "lonely"]
    },
    {
        collocate: "apologize", base: "sincerely", phrase: "apologize sincerely", type: "verb-adv", topic: "people", level: "middle",
        meaning: "To say sorry in a genuine and heartfelt way.",
        sentences: [
            "He {base} {blank}d for his rude behavior.",
            "I {base} {blank} for any inconvenience caused.",
            "She {base} {blank}d to her colleague for the misunderstanding.",
            "You need to {base} {blank} if you want her to forgive you."
        ],
        options: ["sincerely", "deeply", "strongly", "truly"]
    },
    {
        collocate: "strongly", base: "recommend", phrase: "strongly recommend", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To suggest very firmly that something should be done.",
        sentences: [
            "I {blank} {base} reading this book if you're interested in history.",
            "Doctors {blank} {base} getting vaccinated.",
            "We {blank} {base} booking your tickets in advance.",
            "She {blank} {base}s wearing a helmet while cycling."
        ],
        options: ["strongly", "deeply", "highly", "fully"]
    },
    {
        collocate: "strictly", base: "prohibited", phrase: "strictly prohibited", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Completely and absolutely not allowed.",
        sentences: [
            "Smoking is {blank} {base} in all public buildings.",
            "Photography is {blank} {base} inside the museum.",
            "The use of mobile phones is {blank} {base} during exams.",
            "Parking here is {blank} {base} — you'll get a fine."
        ],
        options: ["strictly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "firmly", base: "believe", phrase: "firmly believe", type: "adv-verb", topic: "people", level: "high",
        meaning: "To believe something very strongly without doubt.",
        sentences: [
            "I {blank} {base} that education is the key to success.",
            "She {blank} {base}s in equal rights for everyone.",
            "He {blank} {base}s that hard work always pays off.",
            "We {blank} {base} in giving back to the community."
        ],
        options: ["firmly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "flatly", base: "refuse", phrase: "flatly refuse", type: "adv-verb", topic: "people", level: "college",
        meaning: "To say no in a very definite and direct way.",
        sentences: [
            "She {blank} {base}d to work overtime without pay.",
            "He {blank} {base}d to apologize for his comments.",
            "The manager {blank} {base}d our request for a raise.",
            "They {blank} {base}d to negotiate any further."
        ],
        options: ["flatly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "thoroughly", base: "enjoy", phrase: "thoroughly enjoy", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To enjoy something very much and completely.",
        sentences: [
            "We {blank} {base}ed the concert last night.",
            "She {blank} {base}s hiking in the mountains.",
            "I {blank} {base}ed reading your novel.",
            "The children {blank} {base}ed the trip to the zoo."
        ],
        options: ["thoroughly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "greatly", base: "appreciate", phrase: "greatly appreciate", type: "adv-verb", topic: "people", level: "middle",
        meaning: "To be very thankful for something.",
        sentences: [
            "I would {blank} {base} your help with this matter.",
            "We {blank} {base} your patience and understanding.",
            "She {blank} {base}d the support of her family.",
            "Any donations would be {blank} {base}d."
        ],
        options: ["greatly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "heavily", base: "invest", phrase: "heavily invest", type: "adv-verb", topic: "money", level: "high",
        meaning: "To put a large amount of money or effort into something.",
        sentences: [
            "The company {blank} {base}ed in new technology.",
            "Many countries are {blank} {base}ing in renewable energy.",
            "She {blank} {base}ed in her education.",
            "They {blank} {base}ed in property during the boom."
        ],
        options: ["heavily", "deeply", "highly", "strongly"]
    },
    {
        collocate: "make", base: "attempt", phrase: "make an attempt", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To try to do something, especially something difficult.",
        sentences: [
            "He {blank} an {base} to climb the mountain but failed.",
            "She {blank} no {base} to hide her disappointment.",
            "They {blank} several {base}s to contact the embassy.",
            "At least {blank} an {base} before giving up."
        ],
        options: ["make", "do", "take", "have"]
    },
    {
        collocate: "make", base: "fortune", phrase: "make a fortune", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To earn a very large amount of money.",
        sentences: [
            "She {blank} a {base} selling handmade jewelry online.",
            "He {blank} a {base} in the stock market during the boom.",
            "Some tech founders have {blank} a {base} before turning 30.",
            "You won't {blank} a {base} overnight — it takes patience."
        ],
        options: ["make", "earn", "win", "do"]
    },
    {
        collocate: "make", base: "impression", phrase: "make an impression", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To have a strong effect on someone's opinion of you.",
        sentences: [
            "She {blank} a great {base} at the interview.",
            "First meetings are your chance to {blank} a good {base}.",
            "His speech {blank} a lasting {base} on the audience.",
            "The painting {blank} a deep {base} on me."
        ],
        options: ["make", "do", "give", "take"]
    },
    {
        collocate: "make", base: "connection", phrase: "make a connection", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To establish a link or relationship with someone or something.",
        sentences: [
            "She quickly {blank} a {base} with her new classmates.",
            "I couldn't {blank} the {base} between the two events.",
            "Networking events help you {blank} valuable {base}s.",
            "The teacher helped students {blank} {base}s between theory and practice."
        ],
        options: ["make", "do", "build", "take"]
    },
    {
        collocate: "make", base: "noise", phrase: "make noise", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To produce sounds, especially loud or unwanted ones.",
        sentences: [
            "Please don't {blank} too much {base} — the baby is sleeping.",
            "The engine {blank}s a strange {base} when I accelerate.",
            "The neighbors were {blank}ing a lot of {base} last night.",
            "Try not to {blank} any {base} when you come home late."
        ],
        options: ["make", "do", "give", "put"]
    },
    {
        collocate: "make", base: "payment", phrase: "make a payment", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To pay an amount of money that is owed.",
        sentences: [
            "You can {blank} a {base} online or at the bank.",
            "She {blank}s monthly {base}s on her student loan.",
            "Please {blank} the {base} by the end of the month.",
            "He forgot to {blank} the rent {base} on time."
        ],
        options: ["make", "do", "take", "give"]
    },
    {
        collocate: "make", base: "contribution", phrase: "make a contribution", type: "verb-noun", topic: "work", level: "high",
        meaning: "To give something (money, effort, ideas) to help achieve something.",
        sentences: [
            "Everyone can {blank} a {base} to reducing climate change.",
            "She {blank} an important {base} to the research project.",
            "The company {blank}s regular {base}s to charity.",
            "He {blank} a significant {base} to the field of medicine."
        ],
        options: ["make", "do", "give", "put"]
    },
    {
        collocate: "make", base: "offer", phrase: "make an offer", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To propose something, especially a price or deal.",
        sentences: [
            "They {blank} an {base} on the house within a day.",
            "The company {blank} her a generous job {base}.",
            "He {blank} an {base} she couldn't refuse.",
            "We plan to {blank} an {base} by Friday."
        ],
        options: ["make", "do", "give", "put"]
    },
    {
        collocate: "make", base: "statement", phrase: "make a statement", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To say something formally or publicly.",
        sentences: [
            "The president will {blank} an official {base} tonight.",
            "She refused to {blank} a {base} to the press.",
            "The company {blank} a {base} regarding the data breach.",
            "He {blank} a bold {base} about the future of AI."
        ],
        options: ["make", "do", "give", "say"]
    },
    {
        collocate: "make", base: "point", phrase: "make a point", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To express an important idea or argument.",
        sentences: [
            "She {blank} a valid {base} about the budget cuts.",
            "He always {blank}s a {base} of thanking his staff.",
            "That's an excellent {base} — I hadn't thought of that.",
            "The article {blank}s the {base} that education needs reform."
        ],
        options: ["make", "do", "give", "say"]
    },
    {
        collocate: "take", base: "approach", phrase: "take an approach", type: "verb-noun", topic: "work", level: "high",
        meaning: "To adopt a particular way of dealing with something.",
        sentences: [
            "We need to {blank} a different {base} to this problem.",
            "She {blank}s a hands-on {base} to teaching.",
            "The company decided to {blank} a cautious {base}.",
            "Let's {blank} a step-by-step {base} to the project."
        ],
        options: ["take", "make", "do", "have"]
    },
    {
        collocate: "take", base: "measure", phrase: "take measures", type: "verb-noun", topic: "work", level: "high",
        meaning: "To do things to achieve a particular aim, especially to solve a problem.",
        sentences: [
            "The government must {blank} urgent {base}s to address pollution.",
            "Schools have {blank}n {base}s to prevent bullying.",
            "We need to {blank} preventive {base}s before winter.",
            "The hospital {blank} strict {base}s to control the infection."
        ],
        options: ["take", "make", "do", "put"]
    },
    {
        collocate: "take", base: "pride", phrase: "take pride", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To feel pleased and satisfied about something you are connected with.",
        sentences: [
            "She {blank}s great {base} in her work.",
            "The city {blank}s {base} in its cultural heritage.",
            "He {blank}s {base} in keeping his garden beautiful.",
            "They {blank} enormous {base} in their children's achievements."
        ],
        options: ["take", "make", "have", "feel"]
    },
    {
        collocate: "take", base: "step", phrase: "take steps", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To do a series of things to achieve something.",
        sentences: [
            "The company is {blank}ing {base}s to reduce its carbon footprint.",
            "We must {blank} {base}s to improve customer satisfaction.",
            "She {blank} the first {base} toward starting her own business.",
            "What {base}s should we {blank} to fix this issue?"
        ],
        options: ["take", "make", "do", "follow"]
    },
    {
        collocate: "take", base: "into account", phrase: "take into account", type: "verb-noun", topic: "education", level: "high",
        meaning: "To consider something when making a decision or judgment.",
        sentences: [
            "You should {blank} the cost {base} before deciding.",
            "The judge {blank} his age {base} when sentencing.",
            "We failed to {blank} the weather {base}.",
            "Please {blank} all factors {base} before submitting your report."
        ],
        options: ["take", "make", "put", "bring"]
    },
    {
        collocate: "carry", base: "out", phrase: "carry out research", type: "verb-noun", topic: "education", level: "high",
        meaning: "To do or complete something, especially a task or investigation.",
        sentences: [
            "The team will {blank} {base} a full investigation.",
            "Scientists {blank} {base} experiments to test the theory.",
            "She was asked to {blank} {base} a risk assessment.",
            "The army {blank}ied {base} the rescue operation successfully."
        ],
        options: ["carry", "take", "bring", "pull"]
    },
    {
        collocate: "cause", base: "damage", phrase: "cause damage", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To be the reason for harm or destruction.",
        sentences: [
            "The flood {blank}d serious {base} to the infrastructure.",
            "Excessive heat can {blank} {base} to electronic devices.",
            "The earthquake {blank}d widespread {base} across the region.",
            "This chemical can {blank} permanent {base} to your skin."
        ],
        options: ["cause", "make", "give", "bring"]
    },
    {
        collocate: "cause", base: "concern", phrase: "cause concern", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To make people feel worried.",
        sentences: [
            "The rising unemployment rate is {blank}ing {base} among economists.",
            "The test results {blank}d great {base} for the doctors.",
            "Air quality levels {blank} {base} in many major cities.",
            "His behavior {blank}d {base} among his colleagues."
        ],
        options: ["cause", "make", "do", "bring"]
    },
    {
        collocate: "cause", base: "delay", phrase: "cause a delay", type: "verb-noun", topic: "travel", level: "middle",
        meaning: "To make something happen later than expected.",
        sentences: [
            "The heavy snow {blank}d long {base}s at the airport.",
            "A technical fault {blank}d a two-hour {base}.",
            "Construction work is {blank}ing {base}s on the highway.",
            "Missing documents {blank}d a {base} in the approval process."
        ],
        options: ["cause", "make", "give", "bring"]
    },
    {
        collocate: "cut", base: "cost", phrase: "cut costs", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To reduce the amount of money spent on something.",
        sentences: [
            "The company is looking for ways to {blank} {base}s.",
            "We managed to {blank} {base}s by switching suppliers.",
            "To survive, the firm had to {blank} {base}s dramatically.",
            "She found clever ways to {blank} {base}s without affecting quality."
        ],
        options: ["cut", "make", "drop", "take"]
    },
    {
        collocate: "cut", base: "corners", phrase: "cut corners", type: "verb-noun", topic: "work", level: "high",
        meaning: "To do something in the easiest or cheapest way, often sacrificing quality.",
        sentences: [
            "Don't {blank} {base} when it comes to safety.",
            "The builder was accused of {blank}ting {base} on the project.",
            "If you {blank} {base}, you'll regret it later.",
            "She refuses to {blank} {base} in her cooking."
        ],
        options: ["cut", "make", "take", "break"]
    },
    {
        collocate: "put", base: "pressure", phrase: "put pressure", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To try to influence or force someone to do something.",
        sentences: [
            "Her parents {blank} a lot of {base} on her to succeed.",
            "Employees are under {base} to meet targets.",
            "Environmental groups are {blank}ting {base} on the government.",
            "Don't {blank} too much {base} on yourself."
        ],
        options: ["put", "make", "give", "take"]
    },
    {
        collocate: "put", base: "emphasis", phrase: "put emphasis", type: "verb-noun", topic: "education", level: "high",
        meaning: "To give special importance or attention to something.",
        sentences: [
            "The school {blank}s great {base} on academic achievement.",
            "We should {blank} more {base} on practical skills.",
            "The report {blank}s {base} on the need for reform.",
            "She {blank}s {base} on teamwork rather than individual effort."
        ],
        options: ["put", "make", "give", "do"]
    },
    {
        collocate: "play", base: "role", phrase: "play a role", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To have an effect or influence on something.",
        sentences: [
            "Technology {blank}s a major {base} in modern education.",
            "Parents {blank} a crucial {base} in a child's development.",
            "Diet {blank}s an important {base} in overall health.",
            "She {blank}ed a key {base} in the success of the project."
        ],
        options: ["play", "make", "do", "take"]
    },
    {
        collocate: "play", base: "trick", phrase: "play a trick", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To deceive someone as a joke or for fun.",
        sentences: [
            "The children {blank}ed a {base} on their teacher.",
            "My memory is {blank}ing {base}s on me.",
            "He loves to {blank} {base}s on April Fool's Day.",
            "Don't {blank} {base}s on your younger siblings."
        ],
        options: ["play", "make", "do", "pull"]
    },
    {
        collocate: "follow", base: "advice", phrase: "follow advice", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To do what someone has suggested you should do.",
        sentences: [
            "She decided to {blank} her doctor's {base}.",
            "If you {blank} this {base}, you'll save a lot of money.",
            "He didn't {blank} the {base} and regretted it later.",
            "Always {blank} the safety {base} given by the instructor."
        ],
        options: ["follow", "make", "take", "do"]
    },
    {
        collocate: "follow", base: "instructions", phrase: "follow instructions", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To do what you are told or shown to do.",
        sentences: [
            "Please {blank} the {base} carefully before assembling.",
            "She {blank}ed the {base} and completed the task successfully.",
            "He never {blank}s {base} — he always does it his way.",
            "If you {blank} the {base}, you won't have any problems."
        ],
        options: ["follow", "make", "do", "take"]
    },
    {
        collocate: "follow", base: "example", phrase: "follow an example", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To copy or imitate someone's behavior.",
        sentences: [
            "She hopes others will {blank} her {base} and volunteer.",
            "Children tend to {blank} the {base} set by their parents.",
            "Many companies are now {blank}ing their {base}.",
            "He {blank}ed the {base} of successful entrepreneurs."
        ],
        options: ["follow", "make", "take", "do"]
    },
    {
        collocate: "provide", base: "information", phrase: "provide information", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To give someone facts or details about something.",
        sentences: [
            "The website {blank}s useful {base} about health topics.",
            "Can you {blank} more {base} about the course?",
            "She was asked to {blank} {base} about her qualifications.",
            "The brochure {blank}s detailed {base} about the hotel."
        ],
        options: ["provide", "make", "do", "say"]
    },
    {
        collocate: "provide", base: "service", phrase: "provide a service", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To offer or supply something that people need.",
        sentences: [
            "The company {blank}s excellent customer {base}.",
            "Volunteers {blank} a valuable {base} to the community.",
            "We aim to {blank} the best {base} possible.",
            "The hospital {blank}s emergency {base}s 24 hours a day."
        ],
        options: ["provide", "make", "do", "give"]
    },
    {
        collocate: "provide", base: "evidence", phrase: "provide evidence", type: "verb-noun", topic: "education", level: "high",
        meaning: "To give proof that shows something is true.",
        sentences: [
            "The study {blank}s strong {base} that exercise improves mood.",
            "You must {blank} {base} to support your claim.",
            "She {blank}d {base} of her income to get the loan.",
            "The research {blank}s compelling {base} for the theory."
        ],
        options: ["provide", "make", "do", "give"]
    },
    {
        collocate: "offer", base: "support", phrase: "offer support", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To give help or encouragement to someone.",
        sentences: [
            "Friends {blank}ed their {base} during her difficult time.",
            "The organization {blank}s {base} to refugees.",
            "He always {blank}s {base} when someone is struggling.",
            "The government {blank}ed financial {base} to small businesses."
        ],
        options: ["offer", "make", "do", "put"]
    },
    {
        collocate: "offer", base: "apology", phrase: "offer an apology", type: "verb-noun", topic: "people", level: "high",
        meaning: "To formally say sorry to someone.",
        sentences: [
            "The airline {blank}ed a sincere {base} for the delay.",
            "He {blank}ed his {base} to the team for the mistake.",
            "She refused to {blank} an {base} for her comments.",
            "The company {blank}ed a public {base} after the incident."
        ],
        options: ["offer", "make", "say", "give"]
    },
    {
        collocate: "seek", base: "advice", phrase: "seek advice", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To ask for an opinion or recommendation from someone.",
        sentences: [
            "You should {blank} professional {base} before investing.",
            "She {blank}s {base} from her mentor regularly.",
            "He decided to {blank} legal {base} about the contract.",
            "Many people {blank} {base} from financial advisors."
        ],
        options: ["seek", "make", "find", "take"]
    },
    {
        collocate: "seek", base: "approval", phrase: "seek approval", type: "verb-noun", topic: "work", level: "high",
        meaning: "To ask for official permission or agreement.",
        sentences: [
            "The project team must {blank} {base} from the board.",
            "She doesn't need to {blank} anyone's {base}.",
            "The company is {blank}ing regulatory {base} for the drug.",
            "He {blank}s {base} from his parents for every decision."
        ],
        options: ["seek", "make", "find", "get"]
    },
    {
        collocate: "earn", base: "respect", phrase: "earn respect", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To gain admiration through your actions or achievements.",
        sentences: [
            "She {blank}ed the {base} of everyone in the department.",
            "You have to {blank} {base} — it's not given freely.",
            "He {blank}ed {base} through years of hard work.",
            "A good leader {blank}s the {base} of their team."
        ],
        options: ["earn", "make", "gain", "win"]
    },
    {
        collocate: "earn", base: "reputation", phrase: "earn a reputation", type: "verb-noun", topic: "work", level: "high",
        meaning: "To become known for a particular quality through your actions.",
        sentences: [
            "The restaurant has {blank}ed a {base} for excellent food.",
            "She {blank}ed a {base} as a tough but fair manager.",
            "The school has {blank}ed an outstanding {base}.",
            "He {blank}ed a {base} for always delivering on time."
        ],
        options: ["earn", "make", "build", "get"]
    },
    {
        collocate: "settle", base: "dispute", phrase: "settle a dispute", type: "verb-noun", topic: "work", level: "high",
        meaning: "To end a disagreement by finding a solution both sides accept.",
        sentences: [
            "The mediator helped them {blank} the {base}.",
            "They managed to {blank} the {base} out of court.",
            "It took months to {blank} the labor {base}.",
            "Both sides agreed to {blank} the {base} peacefully."
        ],
        options: ["settle", "make", "solve", "close"]
    },
    {
        collocate: "strike", base: "balance", phrase: "strike a balance", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To find a fair or acceptable position between two extremes.",
        sentences: [
            "It's important to {blank} a {base} between work and life.",
            "The policy tries to {blank} a {base} between freedom and security.",
            "She struggled to {blank} a {base} between study and fun.",
            "We need to {blank} the right {base} between cost and quality."
        ],
        options: ["strike", "make", "find", "hit"]
    },
    {
        collocate: "strike", base: "deal", phrase: "strike a deal", type: "verb-noun", topic: "work", level: "college",
        meaning: "To reach an agreement, especially in business.",
        sentences: [
            "The two companies {blank} a {base} worth millions.",
            "After long negotiations, they finally {blank} a {base}.",
            "She {blank} a {base} with the landlord for lower rent.",
            "It took weeks to {blank} a satisfactory {base}."
        ],
        options: ["strike", "make", "do", "close"]
    },
    {
        collocate: "deny", base: "access", phrase: "deny access", type: "verb-noun", topic: "technology", level: "high",
        meaning: "To prevent someone from entering or using something.",
        sentences: [
            "The system will {blank} {base} if you enter the wrong password.",
            "He was {blank}ied {base} to the building after hours.",
            "The government {blank}ied journalists {base} to the area.",
            "She was {blank}ied {base} to confidential documents."
        ],
        options: ["deny", "refuse", "block", "stop"]
    },
    {
        collocate: "impose", base: "restrictions", phrase: "impose restrictions", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To officially limit what people can do.",
        sentences: [
            "The government {blank}d strict {base} on travel.",
            "New {base} were {blank}d on carbon emissions.",
            "The school {blank}d {base} on mobile phone use.",
            "They decided to {blank} {base} on imports."
        ],
        options: ["impose", "make", "put", "set"]
    },
    {
        collocate: "issue", base: "warning", phrase: "issue a warning", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To officially announce a danger or risk.",
        sentences: [
            "The weather service {blank}d a severe storm {base}.",
            "Police {blank}d a {base} about rising fraud.",
            "The doctor {blank}d a health {base} about the virus.",
            "Authorities {blank}d a {base} to residents near the volcano."
        ],
        options: ["issue", "make", "give", "send"]
    },
    {
        collocate: "issue", base: "statement", phrase: "issue a statement", type: "verb-noun", topic: "work", level: "high",
        meaning: "To release an official message or announcement.",
        sentences: [
            "The company {blank}d a {base} denying the allegations.",
            "The White House {blank}d a {base} on the crisis.",
            "She {blank}d a written {base} to the press.",
            "The board {blank}d a {base} supporting the new policy."
        ],
        options: ["issue", "make", "send", "put"]
    },
    {
        collocate: "lay", base: "foundation", phrase: "lay the foundation", type: "verb-noun", topic: "work", level: "college",
        meaning: "To create the base or starting point for something.",
        sentences: [
            "This course will {blank} the {base} for your future career.",
            "They {blank} the {base} for a lasting peace agreement.",
            "Good reading habits {blank} the {base} for academic success.",
            "The first project {blank} the {base} for future development."
        ],
        options: ["lay", "make", "put", "set"]
    },
    {
        collocate: "lay", base: "blame", phrase: "lay the blame", type: "verb-noun", topic: "people", level: "college",
        meaning: "To say that someone is responsible for something bad.",
        sentences: [
            "He always tries to {blank} the {base} on someone else.",
            "It's unfair to {blank} all the {base} on one person.",
            "She {blank} the {base} squarely on the management team.",
            "Don't {blank} the {base} on the weather — we should have planned better."
        ],
        options: ["lay", "put", "make", "give"]
    },
    {
        collocate: "pass", base: "judgment", phrase: "pass judgment", type: "verb-noun", topic: "people", level: "college",
        meaning: "To give an opinion about someone, especially a negative one.",
        sentences: [
            "Don't {blank} {base} on people you don't know.",
            "It's not our place to {blank} {base} on their choices.",
            "She tends to {blank} {base} too quickly.",
            "The court will {blank} {base} next Monday."
        ],
        options: ["pass", "make", "give", "take"]
    },
    {
        collocate: "pass", base: "law", phrase: "pass a law", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To officially approve a law through a legislative process.",
        sentences: [
            "Parliament {blank}ed a new {base} on data privacy.",
            "The government plans to {blank} a {base} banning single-use plastics.",
            "It took years to {blank} the healthcare {base}.",
            "They are trying to {blank} a stricter gun control {base}."
        ],
        options: ["pass", "make", "do", "put"]
    },
    {
        collocate: "present", base: "evidence", phrase: "present evidence", type: "verb-noun", topic: "education", level: "high",
        meaning: "To show or display proof in a formal way.",
        sentences: [
            "The lawyer {blank}ed new {base} to the court.",
            "Researchers must {blank} {base} to support their claims.",
            "She {blank}ed convincing {base} during the debate.",
            "The detective {blank}ed {base} linking the suspect to the crime."
        ],
        options: ["present", "make", "show", "give"]
    },
    {
        collocate: "produce", base: "results", phrase: "produce results", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To achieve outcomes or effects.",
        sentences: [
            "The new strategy has {blank}d impressive {base}.",
            "Hard work always {blank}s {base} in the end.",
            "The experiment failed to {blank} the expected {base}.",
            "We need a plan that can {blank} quick {base}."
        ],
        options: ["produce", "make", "do", "give"]
    },
    {
        collocate: "pursue", base: "career", phrase: "pursue a career", type: "verb-noun", topic: "work", level: "high",
        meaning: "To work towards a particular profession or occupation.",
        sentences: [
            "She decided to {blank} a {base} in medicine.",
            "He wants to {blank} a {base} in the tech industry.",
            "Many students {blank} {base}s that their parents recommend.",
            "It takes courage to {blank} a {base} in the arts."
        ],
        options: ["pursue", "make", "follow", "take"]
    },
    {
        collocate: "receive", base: "treatment", phrase: "receive treatment", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To get medical care for an illness or injury.",
        sentences: [
            "He is {blank}ing {base} for a knee injury.",
            "Patients {blank} free {base} at public hospitals.",
            "She {blank}d emergency {base} after the accident.",
            "Everyone deserves to {blank} proper medical {base}."
        ],
        options: ["receive", "make", "take", "do"]
    },
    {
        collocate: "receive", base: "award", phrase: "receive an award", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To be given a prize or recognition for an achievement.",
        sentences: [
            "She {blank}d an {base} for her outstanding performance.",
            "The film {blank}d several international {base}s.",
            "He {blank}d a lifetime achievement {base} last year.",
            "The team {blank}d an {base} for innovation."
        ],
        options: ["receive", "make", "take", "earn"]
    },
    {
        collocate: "tackle", base: "issue", phrase: "tackle an issue", type: "verb-noun", topic: "work", level: "high",
        meaning: "To deal with a problem or difficult situation.",
        sentences: [
            "The new manager plans to {blank} the {base} of low morale.",
            "We must {blank} this {base} head-on.",
            "The government promised to {blank} the {base} of homelessness.",
            "How do you plan to {blank} this complex {base}?"
        ],
        options: ["tackle", "make", "solve", "take"]
    },
    {
        collocate: "withdraw", base: "support", phrase: "withdraw support", type: "verb-noun", topic: "work", level: "college",
        meaning: "To stop giving help or approval.",
        sentences: [
            "The sponsor threatened to {blank} financial {base}.",
            "Voters may {blank} their {base} if promises aren't kept.",
            "The party decided to {blank} {base} for the bill.",
            "Investors {blank} their {base} after the scandal."
        ],
        options: ["withdraw", "take", "pull", "remove"]
    },
    {
        collocate: "show", base: "interest", phrase: "show interest", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To express curiosity or attention toward something or someone.",
        sentences: [
            "Several companies have {blank}n {base} in the project.",
            "She {blank}ed genuine {base} in my research.",
            "He didn't {blank} any {base} in the job offer.",
            "The students {blank}ed great {base} in the topic."
        ],
        options: ["show", "make", "give", "take"]
    },
    {
        collocate: "show", base: "respect", phrase: "show respect", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To treat someone in a way that shows you think they are important.",
        sentences: [
            "Always {blank} {base} to your elders.",
            "He {blank}s {base} to everyone he meets.",
            "The team {blank}ed great {base} for the opposing players.",
            "You must {blank} {base} for other people's opinions."
        ],
        options: ["show", "make", "give", "do"]
    },
    {
        collocate: "sign", base: "contract", phrase: "sign a contract", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To write your name on a formal agreement to show you accept it.",
        sentences: [
            "She {blank}ed a two-year {base} with the company.",
            "Don't {blank} any {base} before reading the fine print.",
            "They {blank}ed the {base} and shook hands.",
            "He refused to {blank} the {base} without legal advice."
        ],
        options: ["sign", "make", "write", "do"]
    },
    {
        collocate: "suffer", base: "consequences", phrase: "suffer the consequences", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To experience the bad results of your actions.",
        sentences: [
            "If you break the rules, you'll {blank} the {base}.",
            "She had to {blank} the {base} of her poor decisions.",
            "Those who cheat will eventually {blank} the {base}.",
            "The company is now {blank}ing the {base} of years of neglect."
        ],
        options: ["suffer", "take", "have", "get"]
    },
    {
        collocate: "suffer", base: "loss", phrase: "suffer a loss", type: "verb-noun", topic: "money", level: "high",
        meaning: "To experience the disappearance or reduction of something valuable.",
        sentences: [
            "The company {blank}ed heavy {base}es last quarter.",
            "She {blank}ed a great {base} when her mother passed away.",
            "Many investors {blank}ed significant {base}es in the crash.",
            "The team {blank}ed a surprising {base} in the final."
        ],
        options: ["suffer", "make", "take", "have"]
    },
    {
        collocate: "exercise", base: "caution", phrase: "exercise caution", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To be very careful and pay attention to potential dangers.",
        sentences: [
            "Travelers are advised to {blank} {base} in the area.",
            "You should {blank} {base} when sharing personal data online.",
            "The police urged the public to {blank} {base}.",
            "She {blank}d great {base} when investing her savings."
        ],
        options: ["exercise", "make", "use", "take"]
    },
    {
        collocate: "extend", base: "invitation", phrase: "extend an invitation", type: "verb-noun", topic: "people", level: "college",
        meaning: "To formally invite someone to an event or place.",
        sentences: [
            "We'd like to {blank} an {base} to our annual gala.",
            "She {blank}ed an {base} to all her former classmates.",
            "The university {blank}ed an {base} to the guest speaker.",
            "He {blank}ed a warm {base} to the visiting delegation."
        ],
        options: ["extend", "make", "give", "send"]
    },
    {
        collocate: "file", base: "complaint", phrase: "file a complaint", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To formally submit a written objection.",
        sentences: [
            "She {blank}d a {base} against her noisy neighbor.",
            "Customers can {blank} a {base} through the website.",
            "He {blank}d a formal {base} with human resources.",
            "Over 50 residents {blank}d {base}s about the construction noise."
        ],
        options: ["file", "make", "write", "send"]
    },
    {
        collocate: "fulfill", base: "obligation", phrase: "fulfill an obligation", type: "verb-noun", topic: "work", level: "college",
        meaning: "To do what you are required or expected to do.",
        sentences: [
            "The company must {blank} its contractual {base}s.",
            "She always {blank}s her {base}s on time.",
            "Failure to {blank} your {base}s may result in penalties.",
            "He struggled to {blank} all his financial {base}s."
        ],
        options: ["fulfill", "make", "do", "complete"]
    },
    {
        collocate: "fulfill", base: "potential", phrase: "fulfill potential", type: "verb-noun", topic: "education", level: "high",
        meaning: "To develop and use all of your abilities.",
        sentences: [
            "Every child deserves the chance to {blank} their {base}.",
            "She never {blank}ed her full {base} as a musician.",
            "Good coaching helps athletes {blank} their {base}.",
            "The company believes in helping employees {blank} their {base}."
        ],
        options: ["fulfill", "make", "reach", "do"]
    },
    {
        collocate: "generate", base: "income", phrase: "generate income", type: "verb-noun", topic: "money", level: "high",
        meaning: "To produce or create money or revenue.",
        sentences: [
            "The app {blank}s {base} through advertising.",
            "Rental properties can {blank} a steady {base}.",
            "She needs to find new ways to {blank} {base}.",
            "The event {blank}d enough {base} to fund the project."
        ],
        options: ["generate", "make", "produce", "earn"]
    },
    {
        collocate: "generate", base: "interest", phrase: "generate interest", type: "verb-noun", topic: "work", level: "high",
        meaning: "To create curiosity or excitement about something.",
        sentences: [
            "The campaign {blank}d huge {base} on social media.",
            "The trailer {blank}d a lot of {base} in the film.",
            "How can we {blank} more {base} in our product?",
            "Her talk {blank}d great {base} among the students."
        ],
        options: ["generate", "make", "create", "build"]
    },
    {
        collocate: "grant", base: "permission", phrase: "grant permission", type: "verb-noun", topic: "work", level: "high",
        meaning: "To officially allow someone to do something.",
        sentences: [
            "The council {blank}ed {base} to build the new school.",
            "Access will not be {blank}ed without proper {base}.",
            "The teacher {blank}ed {base} to use dictionaries in the exam.",
            "She was {blank}ed {base} to work from home."
        ],
        options: ["grant", "make", "give", "do"]
    },
    {
        collocate: "voice", base: "concern", phrase: "voice concerns", type: "verb-noun", topic: "people", level: "high",
        meaning: "To express worry or dissatisfaction publicly.",
        sentences: [
            "Residents {blank}d {base}s about the new highway plan.",
            "She {blank}d her {base}s at the community meeting.",
            "Several scientists {blank}d {base}s about the study's methods.",
            "He {blank}d {base}s about the safety of the product."
        ],
        options: ["voice", "make", "speak", "say"]
    },
    {
        collocate: "change", base: "mind", phrase: "change your mind", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To form a new opinion or make a different decision.",
        sentences: [
            "She {blank}d her {base} about going to the party.",
            "It's okay to {blank} your {base} sometimes.",
            "Nothing I said could {blank} his {base}.",
            "He {blank}d his {base} at the last minute."
        ],
        options: ["change", "make", "turn", "move"]
    },
    {
        collocate: "change", base: "subject", phrase: "change the subject", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To start talking about something different.",
        sentences: [
            "She quickly {blank}d the {base} when he asked about her job.",
            "Let's {blank} the {base} — this is getting uncomfortable.",
            "He always {blank}s the {base} when money comes up.",
            "Don't try to {blank} the {base} — answer my question."
        ],
        options: ["change", "make", "move", "switch"]
    },
    {
        collocate: "annual", base: "report", phrase: "annual report", type: "adj-noun", topic: "work", level: "high",
        meaning: "A comprehensive report of a company's activities over the past year.",
        sentences: [
            "The company will publish its {blank} {base} next month.",
            "Shareholders review the {blank} {base} at the general meeting.",
            "The {blank} {base} shows a 15% increase in revenue.",
            "She was responsible for writing the {blank} {base}."
        ],
        options: ["annual", "yearly", "regular", "total"]
    },
    {
        collocate: "bitter", base: "rivalry", phrase: "bitter rivalry", type: "adj-noun", topic: "people", level: "high",
        meaning: "An intense and hostile competition between people or groups.",
        sentences: [
            "There's a {blank} {base} between the two football clubs.",
            "The {blank} {base} between the companies lasted decades.",
            "A {blank} {base} developed between the two departments.",
            "The {blank} {base} eventually destroyed their friendship."
        ],
        options: ["bitter", "strong", "heavy", "hard"]
    },
    {
        collocate: "brief", base: "pause", phrase: "brief pause", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A short stop or break in activity.",
        sentences: [
            "After a {blank} {base}, she continued her speech.",
            "There was a {blank} {base} in the conversation.",
            "He took a {blank} {base} to collect his thoughts.",
            "Following a {blank} {base}, the music started again."
        ],
        options: ["brief", "short", "small", "quick"]
    },
    {
        collocate: "critical", base: "thinking", phrase: "critical thinking", type: "adj-noun", topic: "education", level: "high",
        meaning: "The objective analysis and evaluation of an issue to form a judgment.",
        sentences: [
            "Schools should encourage {blank} {base} from an early age.",
            "{blank} {base} skills are essential in every profession.",
            "The course aims to develop students' {blank} {base}.",
            "Good decision-making requires {blank} {base}."
        ],
        options: ["critical", "deep", "strong", "hard"]
    },
    {
        collocate: "crucial", base: "role", phrase: "crucial role", type: "adj-noun", topic: "work", level: "high",
        meaning: "An extremely important function that can determine success or failure.",
        sentences: [
            "Education plays a {blank} {base} in economic development.",
            "She played a {blank} {base} in the negotiations.",
            "Technology has a {blank} {base} in modern agriculture.",
            "Communication plays a {blank} {base} in teamwork."
        ],
        options: ["crucial", "big", "strong", "heavy"]
    },
    {
        collocate: "current", base: "situation", phrase: "current situation", type: "adj-noun", topic: "daily", level: "elementary",
        meaning: "The way things are at the present time.",
        sentences: [
            "The {blank} {base} is very challenging for small businesses.",
            "We need to assess the {blank} {base} before making plans.",
            "Given the {blank} {base}, we should postpone the launch.",
            "What is the {blank} {base} regarding the project deadline?"
        ],
        options: ["current", "actual", "present", "now"]
    },
    {
        collocate: "domestic", base: "violence", phrase: "domestic violence", type: "adj-noun", topic: "people", level: "high",
        meaning: "Violent or aggressive behavior within the home, typically by a partner.",
        sentences: [
            "{blank} {base} affects millions of people worldwide.",
            "There are laws to protect victims of {blank} {base}.",
            "The charity supports survivors of {blank} {base}.",
            "Reports of {blank} {base} increased during lockdown."
        ],
        options: ["domestic", "home", "house", "family"]
    },
    {
        collocate: "enormous", base: "amount", phrase: "enormous amount", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A very large quantity of something.",
        sentences: [
            "She spent an {blank} {base} of time on the project.",
            "The project requires an {blank} {base} of funding.",
            "An {blank} {base} of data is generated every day.",
            "He put an {blank} {base} of effort into his studies."
        ],
        options: ["enormous", "big", "heavy", "strong"]
    },
    {
        collocate: "entire", base: "population", phrase: "entire population", type: "adj-noun", topic: "education", level: "middle",
        meaning: "All the people living in a particular area.",
        sentences: [
            "The {blank} {base} was affected by the power outage.",
            "The disease threatened the {blank} {base} of the island.",
            "Free healthcare is available to the {blank} {base}.",
            "Nearly the {blank} {base} voted in the election."
        ],
        options: ["entire", "full", "complete", "total"]
    },
    {
        collocate: "essential", base: "part", phrase: "essential part", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A necessary and fundamental component of something.",
        sentences: [
            "Exercise is an {blank} {base} of a healthy lifestyle.",
            "Communication is an {blank} {base} of any relationship.",
            "Feedback is an {blank} {base} of the learning process.",
            "Teamwork is an {blank} {base} of success in business."
        ],
        options: ["essential", "big", "major", "heavy"]
    },
    {
        collocate: "fair", base: "share", phrase: "fair share", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A reasonable amount or proportion of something.",
        sentences: [
            "Everyone should pay their {blank} {base} of taxes.",
            "She's had more than her {blank} {base} of bad luck.",
            "He always does his {blank} {base} of the housework.",
            "The workers demanded their {blank} {base} of the profits."
        ],
        options: ["fair", "equal", "right", "good"]
    },
    {
        collocate: "fatal", base: "accident", phrase: "fatal accident", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "An accident that causes death.",
        sentences: [
            "There was a {blank} {base} on the motorway yesterday.",
            "Speed was a factor in the {blank} {base}.",
            "The number of {blank} {base}s has decreased this year.",
            "He narrowly avoided a {blank} {base} while cycling."
        ],
        options: ["fatal", "deadly", "death", "killing"]
    },
    {
        collocate: "fierce", base: "competition", phrase: "fierce competition", type: "adj-noun", topic: "work", level: "high",
        meaning: "Very strong and intense rivalry between competitors.",
        sentences: [
            "There's {blank} {base} for places at the university.",
            "The tech industry is known for {blank} {base}.",
            "Despite {blank} {base}, the brand has maintained its lead.",
            "Small shops face {blank} {base} from online retailers."
        ],
        options: ["fierce", "strong", "heavy", "hard"]
    },
    {
        collocate: "foreign", base: "policy", phrase: "foreign policy", type: "adj-noun", topic: "education", level: "high",
        meaning: "A government's strategy in dealing with other countries.",
        sentences: [
            "The president outlined a new {blank} {base} for the nation.",
            "{blank} {base} decisions can have lasting global effects.",
            "Experts debated the country's {blank} {base} at the summit.",
            "She studied {blank} {base} at university."
        ],
        options: ["foreign", "outside", "external", "international"]
    },
    {
        collocate: "global", base: "warming", phrase: "global warming", type: "adj-noun", topic: "weather", level: "elementary",
        meaning: "The gradual increase in the temperature of the Earth's atmosphere.",
        sentences: [
            "{blank} {base} is causing ice caps to melt.",
            "We must take action to slow down {blank} {base}.",
            "The effects of {blank} {base} are becoming more visible.",
            "Carbon emissions contribute significantly to {blank} {base}."
        ],
        options: ["global", "world", "earth", "total"]
    },
    {
        collocate: "grave", base: "concern", phrase: "grave concern", type: "adj-noun", topic: "daily", level: "college",
        meaning: "Very serious worry about something important.",
        sentences: [
            "The spread of the disease is a matter of {blank} {base}.",
            "The UN expressed {blank} {base} about the humanitarian crisis.",
            "There is {blank} {base} about the safety of the bridge.",
            "The findings raise {blank} {base}s among health experts."
        ],
        options: ["grave", "heavy", "strong", "big"]
    },
    {
        collocate: "growing", base: "concern", phrase: "growing concern", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "Worry that is increasing over time.",
        sentences: [
            "There is {blank} {base} about the impact of social media on teens.",
            "Air pollution is a {blank} {base} in many cities.",
            "The {blank} {base} over cybersecurity has led to new legislation.",
            "Parents expressed {blank} {base} about class sizes."
        ],
        options: ["growing", "rising", "big", "heavy"]
    },
    {
        collocate: "heated", base: "debate", phrase: "heated debate", type: "adj-noun", topic: "education", level: "high",
        meaning: "An argument or discussion with very strong opinions and feelings.",
        sentences: [
            "The proposal sparked a {blank} {base} in Parliament.",
            "There was a {blank} {base} about immigration policy.",
            "A {blank} {base} broke out during the meeting.",
            "The topic always generates a {blank} {base}."
        ],
        options: ["heated", "hot", "strong", "heavy"]
    },
    {
        collocate: "key", base: "factor", phrase: "key factor", type: "adj-noun", topic: "work", level: "middle",
        meaning: "An important element that influences the outcome of something.",
        sentences: [
            "Location is a {blank} {base} in the success of a restaurant.",
            "Price is a {blank} {base} in consumer decisions.",
            "Education is a {blank} {base} in reducing poverty.",
            "Good communication was a {blank} {base} in the team's success."
        ],
        options: ["key", "big", "main", "heavy"]
    },
    {
        collocate: "lasting", base: "impression", phrase: "lasting impression", type: "adj-noun", topic: "people", level: "middle",
        meaning: "An effect on someone's memory or opinion that continues for a long time.",
        sentences: [
            "The trip to Japan left a {blank} {base} on me.",
            "She made a {blank} {base} on the interview panel.",
            "The book left a {blank} {base} on generations of readers.",
            "His kindness left a {blank} {base} on everyone he met."
        ],
        options: ["lasting", "long", "deep", "heavy"]
    },
    {
        collocate: "leading", base: "cause", phrase: "leading cause", type: "adj-noun", topic: "health", level: "high",
        meaning: "The most important or common reason for something.",
        sentences: [
            "Heart disease is the {blank} {base} of death worldwide.",
            "Distracted driving is a {blank} {base} of accidents.",
            "Poor nutrition is a {blank} {base} of childhood illness.",
            "Stress is a {blank} {base} of workplace absenteeism."
        ],
        options: ["leading", "top", "main", "first"]
    },
    {
        collocate: "major", base: "issue", phrase: "major issue", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A very important or serious problem.",
        sentences: [
            "Climate change is a {blank} {base} facing the world today.",
            "Housing affordability has become a {blank} {base} in many cities.",
            "Cybersecurity is a {blank} {base} for all businesses.",
            "The report highlighted several {blank} {base}s with the proposal."
        ],
        options: ["major", "big", "heavy", "strong"]
    },
    {
        collocate: "mutual", base: "respect", phrase: "mutual respect", type: "adj-noun", topic: "people", level: "high",
        meaning: "A feeling of admiration shared equally between people.",
        sentences: [
            "Their friendship is built on {blank} {base}.",
            "{blank} {base} is the foundation of any good relationship.",
            "The two leaders expressed {blank} {base} for each other.",
            "A workplace culture of {blank} {base} improves productivity."
        ],
        options: ["mutual", "shared", "equal", "common"]
    },
    {
        collocate: "natural", base: "disaster", phrase: "natural disaster", type: "adj-noun", topic: "weather", level: "elementary",
        meaning: "A catastrophic event caused by natural forces, such as a flood or earthquake.",
        sentences: [
            "The country is prone to {blank} {base}s like typhoons.",
            "A {blank} {base} can destroy entire communities.",
            "Emergency plans are essential for dealing with {blank} {base}s.",
            "The region has been hit by several {blank} {base}s this year."
        ],
        options: ["natural", "nature", "wild", "earth"]
    },
    {
        collocate: "natural", base: "resource", phrase: "natural resource", type: "adj-noun", topic: "weather", level: "middle",
        meaning: "Materials or substances that exist in nature and can be used by people.",
        sentences: [
            "The country is rich in {blank} {base}s like oil and gas.",
            "We must protect our {blank} {base}s for future generations.",
            "Over-exploitation of {blank} {base}s harms the environment.",
            "Water is our most precious {blank} {base}."
        ],
        options: ["natural", "nature", "earth", "raw"]
    },
    {
        collocate: "negative", base: "impact", phrase: "negative impact", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A harmful or unfavorable effect on something.",
        sentences: [
            "Pollution has a {blank} {base} on public health.",
            "Social media can have a {blank} {base} on self-esteem.",
            "The recession had a {blank} {base} on employment.",
            "Deforestation has a {blank} {base} on biodiversity."
        ],
        options: ["negative", "bad", "poor", "heavy"]
    },
    {
        collocate: "positive", base: "attitude", phrase: "positive attitude", type: "adj-noun", topic: "people", level: "elementary",
        meaning: "An optimistic and constructive way of thinking.",
        sentences: [
            "A {blank} {base} can make a big difference at work.",
            "She always maintains a {blank} {base}, even in tough times.",
            "The coach encouraged the team to keep a {blank} {base}.",
            "His {blank} {base} is infectious — everyone loves being around him."
        ],
        options: ["positive", "good", "strong", "bright"]
    },
    {
        collocate: "rapid", base: "growth", phrase: "rapid growth", type: "adj-noun", topic: "money", level: "middle",
        meaning: "Very fast increase in size, number, or importance.",
        sentences: [
            "The city has experienced {blank} {base} in recent decades.",
            "The {blank} {base} of the tech sector has transformed the economy.",
            "{blank} {base} in population puts pressure on resources.",
            "The company's {blank} {base} attracted many investors."
        ],
        options: ["rapid", "fast", "quick", "speedy"]
    },
    {
        collocate: "rare", base: "occasion", phrase: "rare occasion", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "Something that does not happen very often.",
        sentences: [
            "On the {blank} {base}s when he cooks, the food is delicious.",
            "It's a {blank} {base} for the whole family to be together.",
            "Only on {blank} {base}s does she lose her temper.",
            "This is one of those {blank} {base}s I agree with him."
        ],
        options: ["rare", "few", "little", "small"]
    },
    {
        collocate: "serious", base: "problem", phrase: "serious problem", type: "adj-noun", topic: "daily", level: "elementary",
        meaning: "A problem that is very bad or severe.",
        sentences: [
            "Obesity is a {blank} {base} in many developed countries.",
            "We have a {blank} {base} with the plumbing.",
            "Drug addiction is a {blank} {base} that affects families.",
            "If not addressed, this could become a {blank} {base}."
        ],
        options: ["serious", "heavy", "strong", "hard"]
    },
    {
        collocate: "severe", base: "weather", phrase: "severe weather", type: "adj-noun", topic: "weather", level: "middle",
        meaning: "Extremely bad weather conditions such as storms or extreme heat.",
        sentences: [
            "{blank} {base} warnings have been issued for the coast.",
            "The event was canceled due to {blank} {base}.",
            "Farmers are most affected by {blank} {base} conditions.",
            "{blank} {base} events are becoming more frequent."
        ],
        options: ["severe", "heavy", "strong", "hard"]
    },
    {
        collocate: "significant", base: "impact", phrase: "significant impact", type: "adj-noun", topic: "work", level: "middle",
        meaning: "An important and noticeable effect.",
        sentences: [
            "The new policy had a {blank} {base} on student performance.",
            "Technology has had a {blank} {base} on how we communicate.",
            "The discovery will have a {blank} {base} on future research.",
            "Budget cuts had a {blank} {base} on public services."
        ],
        options: ["significant", "big", "heavy", "strong"]
    },
    {
        collocate: "slim", base: "chance", phrase: "slim chance", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A very small possibility of something happening.",
        sentences: [
            "There's only a {blank} {base} of rain this weekend.",
            "He has a {blank} {base} of getting into that program.",
            "There's a {blank} {base} we'll finish on time.",
            "She knew there was only a {blank} {base} of winning."
        ],
        options: ["slim", "thin", "small", "little"]
    },
    {
        collocate: "social", base: "media", phrase: "social media", type: "adj-noun", topic: "technology", level: "elementary",
        meaning: "Websites and apps that allow users to create and share content online.",
        sentences: [
            "{blank} {base} has changed the way we communicate.",
            "She spends too much time on {blank} {base}.",
            "Companies use {blank} {base} for marketing.",
            "The news spread quickly through {blank} {base}."
        ],
        options: ["social", "public", "online", "digital"]
    },
    {
        collocate: "strict", base: "rules", phrase: "strict rules", type: "adj-noun", topic: "education", level: "elementary",
        meaning: "Rules that must be obeyed exactly with no flexibility.",
        sentences: [
            "The school has {blank} {base} about uniform.",
            "There are {blank} {base} about noise after 10 p.m.",
            "The company has {blank} {base} regarding data privacy.",
            "Parents set {blank} {base} for screen time."
        ],
        options: ["strict", "strong", "hard", "heavy"]
    },
    {
        collocate: "tough", base: "decision", phrase: "tough decision", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A difficult choice that is hard to make.",
        sentences: [
            "Leaving her job was a {blank} {base}.",
            "The manager had to make some {blank} {base}s.",
            "It was a {blank} {base}, but she chose to move abroad.",
            "Every leader faces {blank} {base}s from time to time."
        ],
        options: ["tough", "hard", "heavy", "strong"]
    },
    {
        collocate: "vast", base: "majority", phrase: "vast majority", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A very large proportion, almost all.",
        sentences: [
            "The {blank} {base} of students passed the exam.",
            "The {blank} {base} of respondents supported the proposal.",
            "The {blank} {base} of the work has been completed.",
            "The {blank} {base} of people in this area commute by train."
        ],
        options: ["vast", "large", "big", "huge"]
    },
    {
        collocate: "vivid", base: "imagination", phrase: "vivid imagination", type: "adj-noun", topic: "people", level: "middle",
        meaning: "The ability to form very clear and detailed pictures in your mind.",
        sentences: [
            "Children often have a {blank} {base}.",
            "She has a {blank} {base} — she could be a great writer.",
            "His {blank} {base} sometimes keeps him awake at night.",
            "A {blank} {base} is a gift for any creative person."
        ],
        options: ["vivid", "bright", "strong", "deep"]
    },
    {
        collocate: "vivid", base: "memory", phrase: "vivid memory", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A memory that is very clear and detailed.",
        sentences: [
            "I have a {blank} {base} of my first day at school.",
            "The accident left a {blank} {base} that still haunts her.",
            "He has {blank} {base}ies of growing up in the countryside.",
            "Certain smells can trigger {blank} {base}ies of childhood."
        ],
        options: ["vivid", "bright", "strong", "deep"]
    },
    {
        collocate: "unique", base: "opportunity", phrase: "unique opportunity", type: "adj-noun", topic: "work", level: "middle",
        meaning: "A chance that is unlike any other and may not come again.",
        sentences: [
            "This internship is a {blank} {base} to gain experience.",
            "The conference offers a {blank} {base} for networking.",
            "Don't miss this {blank} {base} to travel the world.",
            "It's a {blank} {base} that comes once in a lifetime."
        ],
        options: ["unique", "special", "only", "single"]
    },
    {
        collocate: "human", base: "rights", phrase: "human rights", type: "adj-noun", topic: "education", level: "middle",
        meaning: "Basic rights and freedoms to which all people are entitled.",
        sentences: [
            "The organization campaigns for {blank} {base} worldwide.",
            "Access to clean water is a basic {blank} right.",
            "{blank} {base} violations were reported in the region.",
            "Every government should protect {blank} {base}."
        ],
        options: ["human", "people", "civil", "public"]
    },
    {
        collocate: "extremely", base: "difficult", phrase: "extremely difficult", type: "adv-adj", topic: "daily", level: "elementary",
        meaning: "Very hard to do or deal with.",
        sentences: [
            "The exam was {blank} {base} — most students failed.",
            "Finding affordable housing in this city is {blank} {base}.",
            "It's {blank} {base} to learn a language without practice.",
            "The rescue operation proved {blank} {base}."
        ],
        options: ["extremely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "extremely", base: "important", phrase: "extremely important", type: "adv-adj", topic: "daily", level: "elementary",
        meaning: "Of the greatest importance.",
        sentences: [
            "It is {blank} {base} to stay hydrated in hot weather.",
            "Sleep is {blank} {base} for your mental health.",
            "This meeting is {blank} {base} — please don't be late.",
            "Regular checkups are {blank} {base} for early detection."
        ],
        options: ["extremely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "increasingly", base: "popular", phrase: "increasingly popular", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Becoming more and more well-liked over time.",
        sentences: [
            "Online shopping is becoming {blank} {base}.",
            "Plant-based diets are {blank} {base} among young people.",
            "Remote work has become {blank} {base} since the pandemic.",
            "Electric vehicles are {blank} {base} in Europe."
        ],
        options: ["increasingly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "increasingly", base: "difficult", phrase: "increasingly difficult", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Becoming harder and harder over time.",
        sentences: [
            "It's becoming {blank} {base} to find a good job.",
            "The questions became {blank} {base} as the quiz progressed.",
            "Managing the workload is {blank} {base}.",
            "Climate change is making farming {blank} {base}."
        ],
        options: ["increasingly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "enormously", base: "popular", phrase: "enormously popular", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Liked by a very large number of people.",
        sentences: [
            "The show became {blank} {base} after its first season.",
            "He was an {blank} {base} teacher at the school.",
            "The app has proven to be {blank} {base} with teenagers.",
            "The novel was {blank} {base} in the 1990s."
        ],
        options: ["enormously", "deeply", "highly", "strongly"]
    },
    {
        collocate: "immensely", base: "proud", phrase: "immensely proud", type: "adv-adj", topic: "people", level: "high",
        meaning: "Feeling extremely pleased and satisfied about something.",
        sentences: [
            "Her parents were {blank} {base} of her achievements.",
            "I'm {blank} {base} of what the team has accomplished.",
            "He was {blank} {base} to represent his country.",
            "She felt {blank} {base} when she graduated."
        ],
        options: ["immensely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "painfully", base: "obvious", phrase: "painfully obvious", type: "adv-adj", topic: "daily", level: "college",
        meaning: "So clearly true that it is embarrassing or uncomfortable.",
        sentences: [
            "It was {blank} {base} that he hadn't prepared for the presentation.",
            "The lack of funding is {blank} {base}.",
            "Her discomfort was {blank} {base} to everyone in the room.",
            "It's {blank} {base} that the system needs updating."
        ],
        options: ["painfully", "deeply", "highly", "strongly"]
    },
    {
        collocate: "notoriously", base: "difficult", phrase: "notoriously difficult", type: "adv-adj", topic: "education", level: "college",
        meaning: "Famous for being very hard.",
        sentences: [
            "Mandarin Chinese is {blank} {base} for English speakers to learn.",
            "The final exam is {blank} {base}.",
            "The pass is {blank} {base} to navigate in winter.",
            "Getting a visa is {blank} {base} for some nationalities."
        ],
        options: ["notoriously", "deeply", "highly", "strongly"]
    },
    {
        collocate: "potentially", base: "dangerous", phrase: "potentially dangerous", type: "adv-adj", topic: "health", level: "middle",
        meaning: "Possibly causing harm or risk.",
        sentences: [
            "This chemical is {blank} {base} if inhaled.",
            "Swimming alone in the ocean is {blank} {base}.",
            "The situation is {blank} {base} and should be monitored.",
            "Mixing these medications could be {blank} {base}."
        ],
        options: ["potentially", "deeply", "highly", "strongly"]
    },
    {
        collocate: "remarkably", base: "similar", phrase: "remarkably similar", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Surprisingly alike in a noticeable way.",
        sentences: [
            "The two paintings are {blank} {base}.",
            "Their experiences are {blank} {base} despite living in different countries.",
            "The twins have {blank} {base} personalities.",
            "The results from both studies are {blank} {base}."
        ],
        options: ["remarkably", "deeply", "highly", "strongly"]
    },
    {
        collocate: "significantly", base: "higher", phrase: "significantly higher", type: "adv-adj", topic: "money", level: "high",
        meaning: "Noticeably and importantly greater.",
        sentences: [
            "The cost of living is {blank} {base} in the capital.",
            "Women's participation is {blank} {base} than last year.",
            "Test scores were {blank} {base} in the experimental group.",
            "Temperatures are {blank} {base} than the seasonal average."
        ],
        options: ["significantly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "surprisingly", base: "good", phrase: "surprisingly good", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Better than expected.",
        sentences: [
            "The food at the cafeteria was {blank} {base}.",
            "His first attempt was {blank} {base} for a beginner.",
            "The weather turned out {blank} {base} for the outdoor event.",
            "The cheap hotel was {blank} {base} — we were pleasantly shocked."
        ],
        options: ["surprisingly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "virtually", base: "impossible", phrase: "virtually impossible", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Almost completely impossible.",
        sentences: [
            "It's {blank} {base} to get a reservation at that restaurant.",
            "Finding the document now is {blank} {base}.",
            "Living without technology is {blank} {base} in the modern world.",
            "It's {blank} {base} to predict the stock market."
        ],
        options: ["virtually", "deeply", "highly", "strongly"]
    },
    {
        collocate: "wildly", base: "popular", phrase: "wildly popular", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Extremely popular in an enthusiastic way.",
        sentences: [
            "The TV show became {blank} {base} across the globe.",
            "The new smartphone model has been {blank} {base}.",
            "K-pop has become {blank} {base} outside of Asia.",
            "Her blog became {blank} {base} overnight."
        ],
        options: ["wildly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "critically", base: "acclaimed", phrase: "critically acclaimed", type: "adv-adj", topic: "daily", level: "college",
        meaning: "Praised by professional critics.",
        sentences: [
            "The film was {blank} {base} but didn't do well at the box office.",
            "She wrote a {blank} {base} novel about immigration.",
            "The {blank} {base} documentary won several awards.",
            "He is a {blank} {base} director known for independent films."
        ],
        options: ["critically", "deeply", "highly", "strongly"]
    },
    {
        collocate: "densely", base: "populated", phrase: "densely populated", type: "adv-adj", topic: "travel", level: "high",
        meaning: "Having a large number of people living close together in an area.",
        sentences: [
            "Tokyo is one of the most {blank} {base} cities in the world.",
            "The {blank} {base} area faces severe traffic problems.",
            "Disease spreads quickly in {blank} {base} regions.",
            "The island is small but {blank} {base}."
        ],
        options: ["densely", "deeply", "highly", "closely"]
    },
    {
        collocate: "environmentally", base: "friendly", phrase: "environmentally friendly", type: "adv-adj", topic: "technology", level: "middle",
        meaning: "Not harmful to the natural environment.",
        sentences: [
            "Consumers prefer {blank} {base} products.",
            "The company uses {blank} {base} packaging.",
            "We should switch to {blank} {base} energy sources.",
            "Is this cleaning product {blank} {base}?"
        ],
        options: ["environmentally", "naturally", "ecologically", "greenly"]
    },
    {
        collocate: "profoundly", base: "affected", phrase: "profoundly affected", type: "adv-adj", topic: "people", level: "college",
        meaning: "Deeply and significantly influenced or changed.",
        sentences: [
            "She was {blank} {base} by the death of her friend.",
            "The community was {blank} {base} by the factory closure.",
            "His work was {blank} {base} by his travels in Africa.",
            "Children can be {blank} {base} by their parents' divorce."
        ],
        options: ["profoundly", "extremely", "highly", "strongly"]
    },
    {
        collocate: "readily", base: "available", phrase: "readily available", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Easy to obtain or access without difficulty.",
        sentences: [
            "Information is {blank} {base} on the internet.",
            "Clean water should be {blank} {base} to everyone.",
            "The product is {blank} {base} at most supermarkets.",
            "Fresh produce is not always {blank} {base} in rural areas."
        ],
        options: ["readily", "easily", "highly", "freely"]
    },
    {
        collocate: "socially", base: "acceptable", phrase: "socially acceptable", type: "adv-adj", topic: "people", level: "high",
        meaning: "Considered normal and appropriate by most people in society.",
        sentences: [
            "Attitudes toward what is {blank} {base} change over time.",
            "In some cultures, tipping is not {blank} {base}.",
            "It's becoming more {blank} {base} to work from home.",
            "The behavior was not considered {blank} {base} in their community."
        ],
        options: ["socially", "publicly", "commonly", "generally"]
    },
    {
        collocate: "air", base: "conditioning", phrase: "air conditioning", type: "noun-noun", topic: "technology", level: "elementary",
        meaning: "A system that cools and controls the temperature of air in a building.",
        sentences: [
            "Please turn on the {blank} {base} — it's too hot in here.",
            "The office {blank} {base} broke down in the middle of summer.",
            "Hotels in tropical countries always have {blank} {base}.",
            "The car doesn't have {blank} {base}, so we opened the windows."
        ],
        options: ["air", "cool", "cold", "wind"]
    },
    {
        collocate: "body", base: "language", phrase: "body language", type: "noun-noun", topic: "people", level: "middle",
        meaning: "Communication through physical movements and gestures rather than words.",
        sentences: [
            "Her {blank} {base} showed she was nervous.",
            "Reading {blank} {base} is an important social skill.",
            "His {blank} {base} suggested he was telling the truth.",
            "Pay attention to {blank} {base} during negotiations."
        ],
        options: ["body", "face", "hand", "physical"]
    },
    {
        collocate: "carbon", base: "footprint", phrase: "carbon footprint", type: "noun-noun", topic: "weather", level: "middle",
        meaning: "The total amount of greenhouse gases produced by human activities.",
        sentences: [
            "Flying has a large {blank} {base}.",
            "We should all try to reduce our {blank} {base}.",
            "The company pledged to cut its {blank} {base} by 50%.",
            "Eating less meat can lower your {blank} {base}."
        ],
        options: ["carbon", "gas", "pollution", "energy"]
    },
    {
        collocate: "chain", base: "reaction", phrase: "chain reaction", type: "noun-noun", topic: "education", level: "high",
        meaning: "A series of events where each one causes the next.",
        sentences: [
            "The policy change triggered a {blank} {base} of protests.",
            "One small mistake can start a {blank} {base} of problems.",
            "The nuclear {blank} {base} releases enormous energy.",
            "A single act of kindness can set off a {blank} {base}."
        ],
        options: ["chain", "link", "series", "cycle"]
    },
    {
        collocate: "comfort", base: "zone", phrase: "comfort zone", type: "noun-noun", topic: "people", level: "middle",
        meaning: "A situation where you feel safe and at ease, without stress.",
        sentences: [
            "Growth happens when you step out of your {blank} {base}.",
            "She pushed herself beyond her {blank} {base} by public speaking.",
            "Traveling alone forced him out of his {blank} {base}.",
            "Staying in your {blank} {base} limits your potential."
        ],
        options: ["comfort", "safe", "easy", "calm"]
    },
    {
        collocate: "data", base: "breach", phrase: "data breach", type: "noun-noun", topic: "technology", level: "high",
        meaning: "An incident where sensitive information is accessed without authorization.",
        sentences: [
            "The company reported a major {blank} {base} affecting millions.",
            "A {blank} {base} can destroy customer trust.",
            "She changed all her passwords after the {blank} {base}.",
            "New regulations aim to prevent {blank} {base}es."
        ],
        options: ["data", "security", "system", "network"]
    },
    {
        collocate: "dress", base: "code", phrase: "dress code", type: "noun-noun", topic: "work", level: "middle",
        meaning: "A set of rules about what clothing is acceptable in a particular place.",
        sentences: [
            "The company has a strict {blank} {base}.",
            "Is there a {blank} {base} for the event?",
            "Many schools enforce a {blank} {base} for students.",
            "The restaurant's {blank} {base} requires smart casual attire."
        ],
        options: ["dress", "clothes", "wear", "fashion"]
    },
    {
        collocate: "generation", base: "gap", phrase: "generation gap", type: "noun-noun", topic: "people", level: "middle",
        meaning: "A difference in attitudes and values between people of different ages.",
        sentences: [
            "The {blank} {base} between parents and teenagers can cause conflict.",
            "Music often highlights the {blank} {base} between generations.",
            "Understanding the {blank} {base} helps improve communication.",
            "The {blank} {base} is wider now than ever due to technology."
        ],
        options: ["generation", "age", "year", "time"]
    },
    {
        collocate: "income", base: "tax", phrase: "income tax", type: "noun-noun", topic: "money", level: "middle",
        meaning: "A tax paid on money earned from employment or investments.",
        sentences: [
            "Everyone earning above a certain amount must pay {blank} {base}.",
            "The government plans to raise {blank} {base} rates.",
            "She hired an accountant to help with her {blank} {base} return.",
            "{blank} {base} revenue funds public services."
        ],
        options: ["income", "money", "salary", "wage"]
    },
    {
        collocate: "junk", base: "food", phrase: "junk food", type: "noun-noun", topic: "food", level: "elementary",
        meaning: "Food that is unhealthy because it contains a lot of fat, sugar, or salt.",
        sentences: [
            "Eating too much {blank} {base} can lead to obesity.",
            "Schools should ban {blank} {base} from their cafeterias.",
            "She gave up {blank} {base} and started eating healthier.",
            "Children consume far too much {blank} {base}."
        ],
        options: ["junk", "bad", "fast", "cheap"]
    },
    {
        collocate: "labor", base: "force", phrase: "labor force", type: "noun-noun", topic: "work", level: "high",
        meaning: "All the people who are available to work in a country or company.",
        sentences: [
            "Women make up nearly half of the {blank} {base}.",
            "The aging population is shrinking the {blank} {base}.",
            "Immigration helps expand the {blank} {base}.",
            "A skilled {blank} {base} is essential for economic growth."
        ],
        options: ["labor", "work", "job", "staff"]
    },
    {
        collocate: "market", base: "share", phrase: "market share", type: "noun-noun", topic: "money", level: "high",
        meaning: "The percentage of total sales in an industry captured by a particular company.",
        sentences: [
            "The company's {blank} {base} grew by 5% this quarter.",
            "Losing {blank} {base} to competitors is a major concern.",
            "They invested heavily to increase their {blank} {base}.",
            "The brand holds the largest {blank} {base} in the region."
        ],
        options: ["market", "sales", "business", "trade"]
    },
    {
        collocate: "noise", base: "pollution", phrase: "noise pollution", type: "noun-noun", topic: "daily", level: "middle",
        meaning: "Harmful or annoying levels of noise in an environment.",
        sentences: [
            "{blank} {base} is a growing problem in urban areas.",
            "Living near an airport means dealing with constant {blank} {base}.",
            "New laws aim to reduce {blank} {base} from construction sites.",
            "{blank} {base} can cause stress and hearing problems."
        ],
        options: ["noise", "sound", "loud", "audio"]
    },
    {
        collocate: "peak", base: "season", phrase: "peak season", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "The busiest time of year for tourism or business.",
        sentences: [
            "Hotel prices double during {blank} {base}.",
            "It's best to book flights before {blank} {base}.",
            "The resort is packed during {blank} {base}.",
            "Many shops hire extra staff for the {blank} {base}."
        ],
        options: ["peak", "top", "high", "busy"]
    },
    {
        collocate: "quality", base: "control", phrase: "quality control", type: "noun-noun", topic: "work", level: "high",
        meaning: "The process of checking products to ensure they meet required standards.",
        sentences: [
            "The factory has strict {blank} {base} procedures.",
            "{blank} {base} is essential in the food industry.",
            "She works in the {blank} {base} department.",
            "Poor {blank} {base} led to a product recall."
        ],
        options: ["quality", "product", "standard", "check"]
    },
    {
        collocate: "risk", base: "factor", phrase: "risk factor", type: "noun-noun", topic: "health", level: "high",
        meaning: "Something that increases the chance of developing a disease or problem.",
        sentences: [
            "Smoking is a major {blank} {base} for heart disease.",
            "Obesity is a known {blank} {base} for diabetes.",
            "Age is the biggest {blank} {base} for Alzheimer's.",
            "Stress is a significant {blank} {base} for mental illness."
        ],
        options: ["risk", "danger", "health", "disease"]
    },
    {
        collocate: "sea", base: "level", phrase: "sea level", type: "noun-noun", topic: "weather", level: "middle",
        meaning: "The average height of the surface of the sea, used as a reference point.",
        sentences: [
            "Rising {blank} {base}s threaten coastal cities.",
            "The village is located 500 meters above {blank} {base}.",
            "{blank} {base}s have risen by 20 cm in the last century.",
            "Climate change is causing {blank} {base}s to rise faster."
        ],
        options: ["sea", "water", "ocean", "tide"]
    },
    {
        collocate: "self", base: "esteem", phrase: "self-esteem", type: "noun-noun", topic: "people", level: "middle",
        meaning: "Confidence in your own worth and abilities.",
        sentences: [
            "Bullying can severely damage a child's {blank}-{base}.",
            "She has low {blank}-{base} and struggles with confidence.",
            "Positive feedback helps build {blank}-{base}.",
            "His {blank}-{base} improved after he started exercising."
        ],
        options: ["self", "own", "personal", "inner"]
    },
    {
        collocate: "supply", base: "chain", phrase: "supply chain", type: "noun-noun", topic: "work", level: "high",
        meaning: "The system of organizations and activities involved in producing and delivering a product.",
        sentences: [
            "The pandemic disrupted global {blank} {base}s.",
            "Efficient {blank} {base} management reduces costs.",
            "The company is reviewing its entire {blank} {base}.",
            "Delays in the {blank} {base} caused product shortages."
        ],
        options: ["supply", "production", "delivery", "distribution"]
    },
    {
        collocate: "time", base: "frame", phrase: "time frame", type: "noun-noun", topic: "work", level: "middle",
        meaning: "A period of time during which something is planned to happen.",
        sentences: [
            "What is the {blank} {base} for completing the project?",
            "We need to set a realistic {blank} {base}.",
            "The construction exceeded the original {blank} {base}.",
            "Can you give me a rough {blank} {base} for delivery?"
        ],
        options: ["time", "work", "project", "schedule"]
    },
    {
        collocate: "turning", base: "point", phrase: "turning point", type: "noun-noun", topic: "daily", level: "middle",
        meaning: "A time when an important change happens, especially one that improves the situation.",
        sentences: [
            "Getting that job was a {blank} {base} in her career.",
            "The discovery marked a {blank} {base} in medical research.",
            "The war was a {blank} {base} in the nation's history.",
            "Meeting her mentor was the {blank} {base} that changed everything."
        ],
        options: ["turning", "changing", "starting", "key"]
    },
    {
        collocate: "wage", base: "gap", phrase: "wage gap", type: "noun-noun", topic: "money", level: "high",
        meaning: "The difference in pay between different groups, especially between men and women.",
        sentences: [
            "The gender {blank} {base} remains a major issue.",
            "Efforts to close the {blank} {base} have been slow.",
            "The {blank} {base} between skilled and unskilled workers is widening.",
            "New policies aim to address the {blank} {base}."
        ],
        options: ["wage", "pay", "salary", "money"]
    },
    {
        collocate: "zero", base: "tolerance", phrase: "zero tolerance", type: "noun-noun", topic: "daily", level: "high",
        meaning: "A policy of strict enforcement with no exceptions allowed.",
        sentences: [
            "The school has a {blank} {base} policy on bullying.",
            "There is {blank} {base} for corruption in this department.",
            "The company adopted a {blank} {base} approach to harassment.",
            "The new law enforces {blank} {base} for drunk driving."
        ],
        options: ["zero", "no", "null", "none"]
    },
    {
        collocate: "blood", base: "test", phrase: "blood test", type: "noun-noun", topic: "health", level: "elementary",
        meaning: "A medical examination of a sample of blood.",
        sentences: [
            "The doctor ordered a {blank} {base} to check her iron levels.",
            "A routine {blank} {base} revealed the problem.",
            "She's going to the lab for a {blank} {base} tomorrow.",
            "The {blank} {base} results came back normal."
        ],
        options: ["blood", "health", "medical", "body"]
    },
    {
        collocate: "face", base: "value", phrase: "face value", type: "noun-noun", topic: "daily", level: "college",
        meaning: "The apparent meaning or worth of something, without deeper analysis.",
        sentences: [
            "Don't take his promises at {blank} {base}.",
            "The statistics should not be accepted at {blank} {base}.",
            "She took his words at {blank} {base} and was disappointed.",
            "At {blank} {base}, the plan looks good, but there are hidden costs."
        ],
        options: ["face", "first", "front", "surface"]
    },
    {
        collocate: "nerve", base: "cell", phrase: "nerve cell", type: "noun-noun", topic: "health", level: "high",
        meaning: "A cell that transmits electrical signals in the body.",
        sentences: [
            "{blank} {base}s carry signals from the brain to the body.",
            "Damage to {blank} {base}s can cause numbness.",
            "The brain contains billions of {blank} {base}s.",
            "Scientists are studying how {blank} {base}s regenerate."
        ],
        options: ["nerve", "brain", "body", "signal"]
    },
    {
        collocate: "categorically", base: "deny", phrase: "categorically deny", type: "adv-verb", topic: "daily", level: "college",
        meaning: "To state very firmly and clearly that something is not true.",
        sentences: [
            "The politician {blank} {base}ied any involvement in the scandal.",
            "She {blank} {base}ied the allegations against her.",
            "The company {blank} {base}ied using child labor.",
            "He {blank} {base}ied ever meeting the woman."
        ],
        options: ["categorically", "deeply", "highly", "strongly"]
    },
    {
        collocate: "deeply", base: "regret", phrase: "deeply regret", type: "adv-verb", topic: "people", level: "high",
        meaning: "To feel very sorry about something that happened.",
        sentences: [
            "I {blank} {base} the way I treated you.",
            "She {blank} {base}s not spending more time with her family.",
            "The company {blank} {base}s any inconvenience caused.",
            "He {blank} {base}ted his decision to drop out of school."
        ],
        options: ["deeply", "highly", "fully", "strongly"]
    },
    {
        collocate: "eagerly", base: "await", phrase: "eagerly await", type: "adv-verb", topic: "daily", level: "high",
        meaning: "To wait for something with great excitement and enthusiasm.",
        sentences: [
            "Fans are {blank} {base}ing the release of the new album.",
            "We {blank} {base} your response to our proposal.",
            "The students {blank} {base}ed the exam results.",
            "Everyone {blank} {base}ed the arrival of the guest speaker."
        ],
        options: ["eagerly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "freely", base: "admit", phrase: "freely admit", type: "adv-verb", topic: "people", level: "high",
        meaning: "To acknowledge something openly and without being forced.",
        sentences: [
            "I {blank} {base} that I made a mistake.",
            "She {blank} {base}s she's not very good at cooking.",
            "He {blank} {base}ted that the project was behind schedule.",
            "They {blank} {base} that more work needs to be done."
        ],
        options: ["freely", "deeply", "highly", "fully"]
    },
    {
        collocate: "fully", base: "understand", phrase: "fully understand", type: "adv-verb", topic: "education", level: "middle",
        meaning: "To completely comprehend something.",
        sentences: [
            "I don't {blank} {base} the instructions — can you explain again?",
            "Do you {blank} {base} the risks involved?",
            "She didn't {blank} {base} the consequences of her actions.",
            "It took years to {blank} {base} the complexity of the issue."
        ],
        options: ["fully", "deeply", "highly", "strongly"]
    },
    {
        collocate: "genuinely", base: "believe", phrase: "genuinely believe", type: "adv-verb", topic: "people", level: "high",
        meaning: "To truly and honestly think something is true.",
        sentences: [
            "I {blank} {base} this is the best option.",
            "She {blank} {base}s that education can transform lives.",
            "He {blank} {base}d he was doing the right thing.",
            "Do you {blank} {base} that he's innocent?"
        ],
        options: ["genuinely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "warmly", base: "welcome", phrase: "warmly welcome", type: "adv-verb", topic: "people", level: "middle",
        meaning: "To greet someone in a very friendly and enthusiastic way.",
        sentences: [
            "The family {blank} {base}d us into their home.",
            "We {blank} {base} all new members to the club.",
            "She was {blank} {base}d by her colleagues on her first day.",
            "The audience {blank} {base}d the guest speaker with applause."
        ],
        options: ["warmly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "seriously", base: "consider", phrase: "seriously consider", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To think about something carefully and with genuine intention.",
        sentences: [
            "You should {blank} {base} switching to a healthier diet.",
            "She is {blank} {base}ing moving to another city.",
            "He {blank} {base}ed quitting his job.",
            "We need to {blank} {base} all our options before deciding."
        ],
        options: ["seriously", "deeply", "highly", "strongly"]
    },
    {
        collocate: "gladly", base: "accept", phrase: "gladly accept", type: "adv-verb", topic: "people", level: "middle",
        meaning: "To receive or agree to something with pleasure.",
        sentences: [
            "I would {blank} {base} your invitation to dinner.",
            "She {blank} {base}ed the award on behalf of her team.",
            "We {blank} {base} donations of any size.",
            "He {blank} {base}ed the challenge to run the marathon."
        ],
        options: ["gladly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "totally", base: "disagree", phrase: "totally disagree", type: "adv-verb", topic: "people", level: "middle",
        meaning: "To completely not agree with someone or something.",
        sentences: [
            "I {blank} {base} with your assessment of the situation.",
            "She {blank} {base}d with the committee's decision.",
            "Many experts {blank} {base} with the new theory.",
            "He {blank} {base}s with the idea of raising taxes."
        ],
        options: ["totally", "deeply", "highly", "fully"]
    },
    {
        collocate: "sincerely", base: "hope", phrase: "sincerely hope", type: "adv-verb", topic: "people", level: "middle",
        meaning: "To genuinely and honestly wish for something.",
        sentences: [
            "I {blank} {base} you find what you're looking for.",
            "We {blank} {base} the situation improves soon.",
            "She {blank} {base}d that her application would be successful.",
            "He {blank} {base}s the project will make a difference."
        ],
        options: ["sincerely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "balanced", base: "diet", phrase: "balanced diet", type: "adj-noun", topic: "food", level: "elementary",
        meaning: "A diet containing the right amounts of all the different nutrients the body needs.",
        sentences: [
            "A {blank} {base} includes fruits, vegetables, and protein.",
            "Doctors recommend eating a {blank} {base} for good health.",
            "Children need a {blank} {base} to grow properly.",
            "She tries to maintain a {blank} {base} even when traveling."
        ],
        options: ["balanced", "equal", "good", "mixed"]
    },
    {
        collocate: "home", base: "cooking", phrase: "home cooking", type: "adj-noun", topic: "food", level: "elementary",
        meaning: "Food that is prepared at home, typically in a simple, traditional way.",
        sentences: [
            "Nothing beats {blank} {base} after a long trip.",
            "She misses her mother's {blank} {base}.",
            "The restaurant offers meals that taste like {blank} {base}.",
            "{blank} {base} is generally healthier than eating out."
        ],
        options: ["home", "house", "family", "kitchen"]
    },
    {
        collocate: "fresh", base: "produce", phrase: "fresh produce", type: "adj-noun", topic: "food", level: "middle",
        meaning: "Fruits and vegetables that are recently picked and not processed.",
        sentences: [
            "The market sells {blank} {base} from local farms.",
            "We try to buy {blank} {base} whenever possible.",
            "Access to {blank} {base} is limited in some neighborhoods.",
            "Restaurants that use {blank} {base} tend to be more popular."
        ],
        options: ["fresh", "new", "raw", "clean"]
    },
    {
        collocate: "organic", base: "food", phrase: "organic food", type: "adj-noun", topic: "food", level: "middle",
        meaning: "Food produced without the use of artificial chemicals or pesticides.",
        sentences: [
            "Demand for {blank} {base} has increased in recent years.",
            "She only buys {blank} {base} for her family.",
            "Is {blank} {base} really healthier than conventional food?",
            "The store specializes in {blank} {base} and natural products."
        ],
        options: ["organic", "natural", "pure", "clean"]
    },
    {
        collocate: "scenic", base: "route", phrase: "scenic route", type: "adj-noun", topic: "travel", level: "middle",
        meaning: "A road or path that goes through beautiful countryside or landscapes.",
        sentences: [
            "Let's take the {blank} {base} along the coast.",
            "The {blank} {base} takes longer but the views are worth it.",
            "They drove the {blank} {base} through the mountains.",
            "Tourists often prefer the {blank} {base} over the highway."
        ],
        options: ["scenic", "pretty", "nice", "beautiful"]
    },
    {
        collocate: "round", base: "trip", phrase: "round trip", type: "adj-noun", topic: "travel", level: "elementary",
        meaning: "A journey to a place and back again.",
        sentences: [
            "A {blank} {base} ticket to London costs about $800.",
            "The {blank} {base} takes approximately 6 hours.",
            "It's cheaper to book a {blank} {base} than two one-way flights.",
            "She made the {blank} {base} in one day."
        ],
        options: ["round", "full", "complete", "total"]
    },
    {
        collocate: "tourist", base: "attraction", phrase: "tourist attraction", type: "noun-noun", topic: "travel", level: "elementary",
        meaning: "A place that people visit for pleasure when they are on holiday.",
        sentences: [
            "The Eiffel Tower is the most famous {blank} {base} in Paris.",
            "The area has many {blank} {base}s to visit.",
            "The ancient temple is a popular {blank} {base}.",
            "New {blank} {base}s are being developed to boost tourism."
        ],
        options: ["tourist", "travel", "visitor", "holiday"]
    },
    {
        collocate: "boarding", base: "pass", phrase: "boarding pass", type: "noun-noun", topic: "travel", level: "elementary",
        meaning: "A card given to a passenger allowing them to board an aircraft.",
        sentences: [
            "Please have your {blank} {base} ready at the gate.",
            "She printed her {blank} {base} the night before.",
            "You can download your {blank} {base} on your phone.",
            "The {blank} {base} shows your seat number and gate."
        ],
        options: ["boarding", "flight", "travel", "ticket"]
    },
    {
        collocate: "artificial", base: "intelligence", phrase: "artificial intelligence", type: "adj-noun", topic: "technology", level: "middle",
        meaning: "The development of computer systems that can perform tasks that normally require human intelligence.",
        sentences: [
            "{blank} {base} is transforming many industries.",
            "The company uses {blank} {base} to improve customer service.",
            "Concerns about {blank} {base} are growing worldwide.",
            "She studied {blank} {base} at university."
        ],
        options: ["artificial", "computer", "digital", "machine"]
    },
    {
        collocate: "cyber", base: "security", phrase: "cyber security", type: "noun-noun", topic: "technology", level: "middle",
        meaning: "The practice of protecting systems, networks, and programs from digital attacks.",
        sentences: [
            "{blank} {base} is a top priority for businesses worldwide.",
            "The company hired experts to improve its {blank} {base}.",
            "The government invested millions in {blank} {base}.",
            "Weak passwords are a common {blank} {base} threat."
        ],
        options: ["cyber", "digital", "computer", "online"]
    },
    {
        collocate: "online", base: "shopping", phrase: "online shopping", type: "adj-noun", topic: "technology", level: "elementary",
        meaning: "Buying goods or services over the internet.",
        sentences: [
            "{blank} {base} has become more popular than visiting stores.",
            "She does most of her {blank} {base} during sales.",
            "The growth of {blank} {base} has changed the retail industry.",
            "Security is a concern for many {blank} {base} customers."
        ],
        options: ["online", "internet", "digital", "web"]
    },
    {
        collocate: "user", base: "friendly", phrase: "user-friendly", type: "noun-noun", topic: "technology", level: "middle",
        meaning: "Easy to learn, use, and understand.",
        sentences: [
            "The new app is very {blank}-{base}.",
            "A {blank}-{base} interface is essential for any software.",
            "The website was redesigned to be more {blank}-{base}.",
            "Customers prefer {blank}-{base} products."
        ],
        options: ["user", "people", "customer", "easy"]
    },
    {
        collocate: "exert", base: "influence", phrase: "exert influence", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To use power or authority to affect someone or something.",
        sentences: [
            "Large corporations {blank} considerable {base} over government policy.",
            "She {blank}s a strong {base} on the team's direction.",
            "Social media platforms {blank} enormous {base} on public opinion.",
            "He {blank}ed his {base} to change the outcome of the vote."
        ],
        options: ["exert", "make", "put", "give"]
    },
    {
        collocate: "implement", base: "policy", phrase: "implement a policy", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To put a plan or decision into effect.",
        sentences: [
            "The government plans to {blank} new environmental {base}ies.",
            "It's one thing to create a {base}, another to {blank} it.",
            "The school {blank}ed a strict anti-bullying {base}.",
            "Companies must {blank} data protection {base}ies."
        ],
        options: ["implement", "make", "do", "create"]
    },
    {
        collocate: "allocate", base: "resources", phrase: "allocate resources", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To distribute money, time, or materials for a specific purpose.",
        sentences: [
            "The manager must {blank} {base} efficiently across all teams.",
            "Governments need to {blank} more {base} to healthcare.",
            "How should we {blank} the remaining {base}?",
            "The project failed because they didn't {blank} enough {base}."
        ],
        options: ["allocate", "make", "give", "put"]
    },
    {
        collocate: "mitigate", base: "risk", phrase: "mitigate risk", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To reduce the severity or likelihood of something bad happening.",
        sentences: [
            "Insurance is one way to {blank} financial {base}.",
            "The company took steps to {blank} the {base} of data loss.",
            "Proper training helps {blank} workplace {base}s.",
            "Diversifying investments can {blank} {base}."
        ],
        options: ["mitigate", "make", "reduce", "cut"]
    },
    {
        collocate: "yield", base: "results", phrase: "yield results", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To produce outcomes or effects.",
        sentences: [
            "The new strategy is starting to {blank} positive {base}.",
            "Years of research finally {blank}ed {base}.",
            "This method has been proven to {blank} reliable {base}.",
            "Their efforts are beginning to {blank} {base}."
        ],
        options: ["yield", "make", "give", "produce"]
    },
    {
        collocate: "undergo", base: "surgery", phrase: "undergo surgery", type: "verb-noun", topic: "health", level: "professional",
        meaning: "To have a medical operation performed on you.",
        sentences: [
            "He will {blank} {base} next week to repair his knee.",
            "She {blank}went emergency {base} after the accident.",
            "The patient {blank}went a successful heart {base}.",
            "Many athletes {blank} {base} to recover from injuries."
        ],
        options: ["undergo", "take", "have", "make"]
    },
    {
        collocate: "comply", base: "regulations", phrase: "comply with regulations", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To act in accordance with official rules or standards.",
        sentences: [
            "All businesses must {blank} with safety {base}.",
            "Failure to {blank} with {base} may result in fines.",
            "The factory was shut down for not {blank}ing with {base}.",
            "Companies must {blank} with environmental {base}."
        ],
        options: ["comply", "follow", "make", "do"]
    },
    {
        collocate: "unprecedented", base: "growth", phrase: "unprecedented growth", type: "adj-noun", topic: "money", level: "professional",
        meaning: "Growth that has never happened before; extraordinary increase.",
        sentences: [
            "The tech industry experienced {blank} {base} in the 2010s.",
            "The country saw {blank} economic {base} after the reforms.",
            "E-commerce has seen {blank} {base} in recent years.",
            "The startup achieved {blank} {base} in just two years."
        ],
        options: ["unprecedented", "unmatched", "extreme", "massive"]
    },
    {
        collocate: "sustainable", base: "development", phrase: "sustainable development", type: "adj-noun", topic: "weather", level: "professional",
        meaning: "Economic development conducted without depleting natural resources.",
        sentences: [
            "{blank} {base} is a key goal of the United Nations.",
            "The company is committed to {blank} {base} practices.",
            "Balancing growth with {blank} {base} is a global challenge.",
            "Education about {blank} {base} starts in schools."
        ],
        options: ["sustainable", "continued", "green", "lasting"]
    },
    {
        collocate: "comprehensive", base: "review", phrase: "comprehensive review", type: "adj-noun", topic: "work", level: "professional",
        meaning: "A thorough and complete examination of something.",
        sentences: [
            "The committee conducted a {blank} {base} of the policy.",
            "A {blank} {base} of the evidence supports the conclusion.",
            "We need a {blank} {base} of our current strategy.",
            "The report provides a {blank} {base} of the industry."
        ],
        options: ["comprehensive", "complete", "full", "deep"]
    },
    {
        collocate: "empirical", base: "evidence", phrase: "empirical evidence", type: "adj-noun", topic: "education", level: "professional",
        meaning: "Evidence based on observation and experience rather than theory.",
        sentences: [
            "The theory is supported by strong {blank} {base}.",
            "There is limited {blank} {base} for this claim.",
            "Researchers need {blank} {base} before drawing conclusions.",
            "The study provides {blank} {base} that the treatment works."
        ],
        options: ["empirical", "scientific", "practical", "real"]
    },
    {
        collocate: "inherent", base: "risk", phrase: "inherent risk", type: "adj-noun", topic: "work", level: "professional",
        meaning: "A risk that naturally exists as part of something.",
        sentences: [
            "There is an {blank} {base} in any investment.",
            "Extreme sports carry an {blank} {base} of injury.",
            "The {blank} {base} of the procedure was explained to the patient.",
            "All startups face {blank} {base}s in their first year."
        ],
        options: ["inherent", "natural", "basic", "built"]
    },
    {
        collocate: "preliminary", base: "results", phrase: "preliminary results", type: "adj-noun", topic: "education", level: "professional",
        meaning: "Initial findings before a full analysis is completed.",
        sentences: [
            "The {blank} {base} of the study are very promising.",
            "{blank} {base} suggest the vaccine is effective.",
            "We should wait for the full report, not just the {blank} {base}.",
            "The {blank} {base} were announced at the press conference."
        ],
        options: ["preliminary", "first", "early", "initial"]
    },
    {
        collocate: "concerted", base: "effort", phrase: "concerted effort", type: "adj-noun", topic: "work", level: "professional",
        meaning: "A planned and determined attempt made by people working together.",
        sentences: [
            "It will take a {blank} {base} to solve this global crisis.",
            "There needs to be a {blank} {base} from all departments.",
            "A {blank} {base} was made to reduce waiting times.",
            "Without a {blank} {base}, nothing will change."
        ],
        options: ["concerted", "combined", "united", "joint"]
    },
    {
        collocate: "adverse", base: "effect", phrase: "adverse effect", type: "adj-noun", topic: "health", level: "professional",
        meaning: "A harmful or negative consequence.",
        sentences: [
            "The drug may have {blank} {base}s on some patients.",
            "Pollution has an {blank} {base} on wildlife.",
            "No {blank} {base}s were reported during the trial.",
            "The policy had an {blank} {base} on small businesses."
        ],
        options: ["adverse", "bad", "negative", "harmful"]
    },
    {
        collocate: "accept", base: "responsibility", phrase: "accept responsibility", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To agree that you caused something and should deal with it.",
        sentences: [
            "A good leader {blank}s {base} for mistakes.",
            "He refused to {blank} {base} for the accident.",
            "The company {blank}ed full {base} for the data leak.",
            "It takes courage to {blank} {base} when things go wrong."
        ],
        options: ["accept", "take", "make", "do"]
    },
    {
        collocate: "achieve", base: "goal", phrase: "achieve a goal", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To succeed in reaching something you planned to do.",
        sentences: [
            "She worked hard to {blank} her {base} of becoming a doctor.",
            "The team {blank}d all its {base}s for the year.",
            "Setting a deadline helps you {blank} your {base}s.",
            "He finally {blank}d his lifelong {base} of climbing Everest."
        ],
        options: ["achieve", "make", "do", "get"]
    },
    {
        collocate: "achieve", base: "success", phrase: "achieve success", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To reach a high level of accomplishment.",
        sentences: [
            "She {blank}d great {base} in the music industry.",
            "It takes patience to {blank} lasting {base}.",
            "Many entrepreneurs {blank} {base} through hard work.",
            "The company {blank}d international {base} within five years."
        ],
        options: ["achieve", "make", "get", "do"]
    },
    {
        collocate: "address", base: "issue", phrase: "address an issue", type: "verb-noun", topic: "work", level: "high",
        meaning: "To deal with or begin to talk about a problem.",
        sentences: [
            "We need to {blank} this {base} before it gets worse.",
            "The meeting was called to {blank} several key {base}s.",
            "The government must {blank} the {base} of poverty.",
            "She {blank}ed the {base} directly in her report."
        ],
        options: ["address", "make", "solve", "handle"]
    },
    {
        collocate: "arouse", base: "suspicion", phrase: "arouse suspicion", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To cause someone to feel that something is wrong or someone is guilty.",
        sentences: [
            "His nervous behavior {blank}d {base} among the police.",
            "Try not to {blank} {base} when you enter the building.",
            "The large cash withdrawal {blank}d {base} at the bank.",
            "Her sudden wealth {blank}d {base} in the neighborhood."
        ],
        options: ["arouse", "make", "raise", "cause"]
    },
    {
        collocate: "bear", base: "mind", phrase: "bear in mind", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To remember or consider something important.",
        sentences: [
            "Please {blank} in {base} that the office closes at 5 p.m.",
            "{blank} in {base} that prices may change without notice.",
            "It's worth {blank}ing in {base} that he's still a beginner.",
            "You should {blank} in {base} that it could rain."
        ],
        options: ["bear", "keep", "hold", "take"]
    },
    {
        collocate: "boost", base: "confidence", phrase: "boost confidence", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To increase someone's feeling of self-assurance.",
        sentences: [
            "Winning the award really {blank}ed her {base}.",
            "Positive feedback can {blank} a student's {base}.",
            "Regular exercise helps {blank} your {base}.",
            "The training program is designed to {blank} employees' {base}."
        ],
        options: ["boost", "make", "raise", "lift"]
    },
    {
        collocate: "boost", base: "economy", phrase: "boost the economy", type: "verb-noun", topic: "money", level: "high",
        meaning: "To help the economy grow or improve.",
        sentences: [
            "Tax cuts were introduced to {blank} the {base}.",
            "Tourism helps {blank} the local {base}.",
            "The government is looking for ways to {blank} the {base}.",
            "Infrastructure spending can {blank} the {base} significantly."
        ],
        options: ["boost", "make", "raise", "push"]
    },
    {
        collocate: "claim", base: "responsibility", phrase: "claim responsibility", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To say that you are the one who did something, especially an attack.",
        sentences: [
            "No group has {blank}ed {base} for the explosion.",
            "The organization {blank}ed {base} for the cyber attack.",
            "A rebel faction {blank}ed {base} for the bombing.",
            "Nobody was willing to {blank} {base} for the error."
        ],
        options: ["claim", "take", "make", "say"]
    },
    {
        collocate: "develop", base: "skills", phrase: "develop skills", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To improve abilities through learning and practice.",
        sentences: [
            "University helps students {blank} critical thinking {base}.",
            "She {blank}ed her leadership {base} through volunteer work.",
            "It's never too late to {blank} new {base}.",
            "The workshop aims to help you {blank} communication {base}."
        ],
        options: ["develop", "make", "grow", "build"]
    },
    {
        collocate: "develop", base: "strategy", phrase: "develop a strategy", type: "verb-noun", topic: "work", level: "high",
        meaning: "To create a plan for achieving a long-term goal.",
        sentences: [
            "The team needs to {blank} a new marketing {base}.",
            "She {blank}ed a {base} to increase sales by 20%.",
            "It's important to {blank} a clear {base} before starting.",
            "The company {blank}ed an effective growth {base}."
        ],
        options: ["develop", "make", "create", "build"]
    },
    {
        collocate: "drop", base: "hint", phrase: "drop a hint", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To say something indirectly to suggest what you want.",
        sentences: [
            "She {blank}ped a {base} about what she wanted for her birthday.",
            "He keeps {blank}ping {base}s that he wants a promotion.",
            "I'll {blank} a {base} to the boss about the scheduling problem.",
            "She {blank}ped several {base}s but nobody understood."
        ],
        options: ["drop", "make", "give", "throw"]
    },
    {
        collocate: "establish", base: "relationship", phrase: "establish a relationship", type: "verb-noun", topic: "people", level: "high",
        meaning: "To create or set up a connection with someone.",
        sentences: [
            "It takes time to {blank} a trusting {base} with a new client.",
            "They {blank}ed a strong working {base} from the start.",
            "The two countries are trying to {blank} diplomatic {base}s.",
            "She {blank}ed a good {base} with her students."
        ],
        options: ["establish", "make", "build", "create"]
    },
    {
        collocate: "form", base: "opinion", phrase: "form an opinion", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To develop a view or judgment about something.",
        sentences: [
            "Don't {blank} an {base} until you have all the facts.",
            "It's hard to {blank} an {base} based on so little information.",
            "He quickly {blank}ed an {base} about the new colleague.",
            "She {blank}ed her {base} after reading the full report."
        ],
        options: ["form", "make", "build", "create"]
    },
    {
        collocate: "gain", base: "access", phrase: "gain access", type: "verb-noun", topic: "technology", level: "high",
        meaning: "To obtain the ability to enter or use something.",
        sentences: [
            "Hackers tried to {blank} {base} to the company's database.",
            "You need a password to {blank} {base} to the system.",
            "She {blank}ed {base} to the restricted area using her badge.",
            "Students can {blank} {base} to the library 24 hours a day."
        ],
        options: ["gain", "get", "make", "take"]
    },
    {
        collocate: "ignore", base: "warning", phrase: "ignore a warning", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To not pay attention to a caution or alert.",
        sentences: [
            "He {blank}d the {base} signs and drove through the storm.",
            "You shouldn't {blank} the doctor's {base} about your diet.",
            "They {blank}d the safety {base} and paid the price.",
            "She {blank}d all the {base}s from her friends."
        ],
        options: ["ignore", "skip", "miss", "leave"]
    },
    {
        collocate: "maintain", base: "contact", phrase: "maintain contact", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To continue to communicate with someone over time.",
        sentences: [
            "It's hard to {blank} {base} with old friends when you move abroad.",
            "She {blank}s regular {base} with her former colleagues.",
            "They {blank}ed {base} through email and video calls.",
            "He promised to {blank} {base} after graduation."
        ],
        options: ["maintain", "keep", "hold", "make"]
    },
    {
        collocate: "maintain", base: "standard", phrase: "maintain standards", type: "verb-noun", topic: "work", level: "high",
        meaning: "To keep something at the same high level of quality.",
        sentences: [
            "It's important to {blank} high {base}s of hygiene.",
            "The school strives to {blank} academic {base}s.",
            "How do you {blank} quality {base}s with such a small team?",
            "The restaurant {blank}s consistent {base}s across all locations."
        ],
        options: ["maintain", "keep", "hold", "make"]
    },
    {
        collocate: "pose", base: "question", phrase: "pose a question", type: "verb-noun", topic: "education", level: "college",
        meaning: "To ask a question, especially one that is difficult or thought-provoking.",
        sentences: [
            "The professor {blank}d a challenging {base} to the class.",
            "She {blank}d an important {base} about fairness.",
            "The article {blank}s some interesting {base}s about AI ethics.",
            "Let me {blank} a {base} that nobody has considered."
        ],
        options: ["pose", "make", "ask", "raise"]
    },
    {
        collocate: "reduce", base: "risk", phrase: "reduce risk", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To make the chance of something bad happening smaller.",
        sentences: [
            "Wearing a seatbelt {blank}s the {base} of injury.",
            "A healthy diet can {blank} the {base} of heart disease.",
            "We took steps to {blank} the {base} of flooding.",
            "Vaccination {blank}s the {base} of serious illness."
        ],
        options: ["reduce", "make", "cut", "lower"]
    },
    {
        collocate: "release", base: "information", phrase: "release information", type: "verb-noun", topic: "work", level: "high",
        meaning: "To make information available to the public.",
        sentences: [
            "The police {blank}d {base} about the suspect.",
            "The company will {blank} financial {base} next week.",
            "They refused to {blank} any {base} about the investigation.",
            "The government {blank}d new {base} regarding the outbreak."
        ],
        options: ["release", "make", "give", "open"]
    },
    {
        collocate: "resolve", base: "conflict", phrase: "resolve a conflict", type: "verb-noun", topic: "people", level: "high",
        meaning: "To find a solution to a disagreement.",
        sentences: [
            "The mediator helped them {blank} the {base}.",
            "Communication is key to {blank}ing {base}s.",
            "They managed to {blank} the {base} without going to court.",
            "It took several meetings to {blank} the {base}."
        ],
        options: ["resolve", "make", "fix", "end"]
    },
    {
        collocate: "restore", base: "confidence", phrase: "restore confidence", type: "verb-noun", topic: "money", level: "college",
        meaning: "To bring back trust or belief in something.",
        sentences: [
            "The CEO's speech helped {blank} investor {base}.",
            "The government must {blank} public {base} in the economy.",
            "Winning the next match could {blank} the team's {base}.",
            "It will take time to {blank} {base} in the banking system."
        ],
        options: ["restore", "make", "bring", "give"]
    },
    {
        collocate: "retain", base: "information", phrase: "retain information", type: "verb-noun", topic: "education", level: "high",
        meaning: "To keep information in your memory.",
        sentences: [
            "Students who take notes {blank} {base} better.",
            "It's hard to {blank} {base} when you're tired.",
            "Visual aids help learners {blank} {base} more effectively.",
            "She has an amazing ability to {blank} {base}."
        ],
        options: ["retain", "keep", "hold", "save"]
    },
    {
        collocate: "reveal", base: "truth", phrase: "reveal the truth", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To make something secret or hidden known to others.",
        sentences: [
            "The investigation finally {blank}ed the {base} about the scandal.",
            "She decided to {blank} the {base} to her family.",
            "DNA evidence {blank}ed the {base} about his identity.",
            "The documentary {blank}s the shocking {base} about the industry."
        ],
        options: ["reveal", "show", "tell", "open"]
    },
    {
        collocate: "run", base: "errands", phrase: "run errands", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To do small tasks like shopping or going to the bank.",
        sentences: [
            "I need to {blank} a few {base} this afternoon.",
            "She spends her Saturday mornings {blank}ning {base}.",
            "Can you {blank} some {base} for me on your way home?",
            "He {blank}s {base} for his elderly neighbor."
        ],
        options: ["run", "do", "make", "go"]
    },
    {
        collocate: "seize", base: "opportunity", phrase: "seize an opportunity", type: "verb-noun", topic: "work", level: "college",
        meaning: "To take advantage of a chance eagerly and quickly.",
        sentences: [
            "She {blank}d the {base} to study abroad without hesitation.",
            "Successful people know how to {blank} every {base}.",
            "He {blank}d the {base} to launch his own business.",
            "When the job was offered, she {blank}d the {base}."
        ],
        options: ["seize", "take", "grab", "catch"]
    },
    {
        collocate: "serve", base: "purpose", phrase: "serve a purpose", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To have a useful function or role.",
        sentences: [
            "Every rule in the school {blank}s a {base}.",
            "The old building still {blank}s a useful {base}.",
            "Arguments can sometimes {blank} a constructive {base}.",
            "Does this meeting really {blank} any {base}?"
        ],
        options: ["serve", "make", "have", "do"]
    },
    {
        collocate: "share", base: "experience", phrase: "share experience", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To tell others about something you have done or been through.",
        sentences: [
            "She {blank}d her {base} of living in Japan.",
            "He was invited to {blank} his {base}s with the audience.",
            "People love to {blank} travel {base}s on social media.",
            "The group members {blank}d their {base}s of starting a business."
        ],
        options: ["share", "tell", "give", "say"]
    },
    {
        collocate: "strengthen", base: "bond", phrase: "strengthen the bond", type: "verb-noun", topic: "people", level: "high",
        meaning: "To make a connection or relationship stronger.",
        sentences: [
            "Shared experiences {blank} the {base} between friends.",
            "Quality time together {blank}s the family {base}.",
            "The project {blank}ed the {base} between the two communities.",
            "Trust is essential to {blank} any {base}."
        ],
        options: ["strengthen", "make", "build", "grow"]
    },
    {
        collocate: "throw", base: "party", phrase: "throw a party", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To organize and host a social gathering for fun.",
        sentences: [
            "They're going to {blank} a big {base} for his 30th birthday.",
            "She {blank} a surprise {base} for her best friend.",
            "Who's going to {blank} the end-of-year {base}?",
            "We should {blank} a {base} to celebrate the success."
        ],
        options: ["throw", "make", "do", "give"]
    },
    {
        collocate: "chronic", base: "pain", phrase: "chronic pain", type: "adj-noun", topic: "health", level: "high",
        meaning: "Pain that lasts for a long period, usually more than three months.",
        sentences: [
            "Millions of people suffer from {blank} {base}.",
            "She has lived with {blank} back {base} for years.",
            "Managing {blank} {base} requires a long-term treatment plan.",
            "New therapies are being developed for {blank} {base} sufferers."
        ],
        options: ["chronic", "constant", "heavy", "strong"]
    },
    {
        collocate: "dense", base: "fog", phrase: "dense fog", type: "adj-noun", topic: "weather", level: "middle",
        meaning: "Very thick fog that is difficult to see through.",
        sentences: [
            "The airport was closed because of {blank} {base}.",
            "Driving in {blank} {base} is extremely dangerous.",
            "A {blank} {base} covered the valley early this morning.",
            "Visibility dropped to near zero in the {blank} {base}."
        ],
        options: ["dense", "heavy", "thick", "strong"]
    },
    {
        collocate: "drastic", base: "measures", phrase: "drastic measures", type: "adj-noun", topic: "daily", level: "high",
        meaning: "Extreme actions taken to deal with a difficult situation.",
        sentences: [
            "The government took {blank} {base} to control the virus.",
            "{blank} {base} are needed to save the company from bankruptcy.",
            "Sometimes {blank} {base} are the only option.",
            "She decided to take {blank} {base} to improve her health."
        ],
        options: ["drastic", "big", "strong", "heavy"]
    },
    {
        collocate: "economic", base: "growth", phrase: "economic growth", type: "adj-noun", topic: "money", level: "middle",
        meaning: "An increase in the production of goods and services in a country.",
        sentences: [
            "The country has experienced strong {blank} {base} this year.",
            "{blank} {base} slowed down due to the trade war.",
            "Education is a key driver of {blank} {base}.",
            "Sustainable {blank} {base} benefits everyone in society."
        ],
        options: ["economic", "money", "financial", "business"]
    },
    {
        collocate: "emotional", base: "support", phrase: "emotional support", type: "adj-noun", topic: "people", level: "middle",
        meaning: "Comfort and encouragement given to someone during a difficult time.",
        sentences: [
            "She provided {blank} {base} to her friend during the crisis.",
            "Everyone needs {blank} {base} from time to time.",
            "The charity offers {blank} {base} to bereaved families.",
            "His family was a source of constant {blank} {base}."
        ],
        options: ["emotional", "feeling", "mental", "personal"]
    },
    {
        collocate: "equal", base: "opportunity", phrase: "equal opportunity", type: "adj-noun", topic: "work", level: "middle",
        meaning: "The same chance of success for all people regardless of background.",
        sentences: [
            "The company is an {blank} {base} employer.",
            "Everyone deserves {blank} {base} in education.",
            "Laws exist to ensure {blank} {base} in the workplace.",
            "{blank} {base} is a fundamental principle of democracy."
        ],
        options: ["equal", "same", "fair", "even"]
    },
    {
        collocate: "excessive", base: "force", phrase: "excessive force", type: "adj-noun", topic: "daily", level: "college",
        meaning: "The use of more physical power than necessary in a situation.",
        sentences: [
            "The officer was accused of using {blank} {base}.",
            "Protests erupted after allegations of {blank} {base}.",
            "The use of {blank} {base} by police is under investigation.",
            "There are strict rules about what constitutes {blank} {base}."
        ],
        options: ["excessive", "extreme", "heavy", "strong"]
    },
    {
        collocate: "fossil", base: "fuel", phrase: "fossil fuel", type: "adj-noun", topic: "technology", level: "middle",
        meaning: "A natural fuel such as coal, gas, or oil formed from ancient organisms.",
        sentences: [
            "Burning {blank} {base}s contributes to climate change.",
            "We must reduce our dependence on {blank} {base}s.",
            "The world is slowly moving away from {blank} {base}s.",
            "{blank} {base} reserves are expected to run out eventually."
        ],
        options: ["fossil", "old", "ancient", "natural"]
    },
    {
        collocate: "immediate", base: "action", phrase: "immediate action", type: "adj-noun", topic: "work", level: "middle",
        meaning: "Something done right away without delay.",
        sentences: [
            "The crisis requires {blank} {base} from the government.",
            "We must take {blank} {base} to prevent further damage.",
            "{blank} {base} was taken to evacuate the building.",
            "The situation demands {blank} {base}."
        ],
        options: ["immediate", "fast", "quick", "instant"]
    },
    {
        collocate: "informed", base: "decision", phrase: "informed decision", type: "adj-noun", topic: "education", level: "high",
        meaning: "A decision based on knowledge and understanding of all the facts.",
        sentences: [
            "You need all the facts to make an {blank} {base}.",
            "Consumers should make {blank} {base}s about what they buy.",
            "The report helps parents make {blank} {base}s about schools.",
            "She made an {blank} {base} after doing thorough research."
        ],
        options: ["informed", "smart", "good", "right"]
    },
    {
        collocate: "joint", base: "effort", phrase: "joint effort", type: "adj-noun", topic: "work", level: "middle",
        meaning: "Work done together by two or more people or groups.",
        sentences: [
            "The project was a {blank} {base} between three universities.",
            "It took a {blank} {base} from the whole team to succeed.",
            "The cleanup was a {blank} {base} by volunteers and local officials.",
            "A {blank} {base} is needed to solve the housing crisis."
        ],
        options: ["joint", "team", "group", "shared"]
    },
    {
        collocate: "keen", base: "interest", phrase: "keen interest", type: "adj-noun", topic: "people", level: "high",
        meaning: "A strong and enthusiastic desire to learn about something.",
        sentences: [
            "She has a {blank} {base} in environmental science.",
            "He took a {blank} {base} in his children's education.",
            "The proposal generated {blank} {base} among investors.",
            "From an early age, she showed a {blank} {base} in music."
        ],
        options: ["keen", "strong", "deep", "big"]
    },
    {
        collocate: "legitimate", base: "concern", phrase: "legitimate concern", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A worry or issue that is reasonable and justifiable.",
        sentences: [
            "Privacy is a {blank} {base} for many users.",
            "Residents raised {blank} {base}s about the new road.",
            "There are {blank} {base}s about the safety of the product.",
            "He dismissed their worries, but they were {blank} {base}s."
        ],
        options: ["legitimate", "real", "true", "proper"]
    },
    {
        collocate: "mental", base: "health", phrase: "mental health", type: "adj-noun", topic: "health", level: "elementary",
        meaning: "A person's condition with regard to their psychological and emotional well-being.",
        sentences: [
            "{blank} {base} is just as important as physical health.",
            "The pandemic had a huge impact on people's {blank} {base}.",
            "Schools should do more to support students' {blank} {base}.",
            "There is growing awareness of {blank} {base} issues."
        ],
        options: ["mental", "brain", "mind", "head"]
    },
    {
        collocate: "minimum", base: "wage", phrase: "minimum wage", type: "adj-noun", topic: "money", level: "middle",
        meaning: "The lowest amount of money per hour that an employer can legally pay.",
        sentences: [
            "The government raised the {blank} {base} to $15 an hour.",
            "Many workers earn only the {blank} {base}.",
            "There's an ongoing debate about increasing the {blank} {base}.",
            "She supports a higher {blank} {base} for all workers."
        ],
        options: ["minimum", "lowest", "basic", "bottom"]
    },
    {
        collocate: "narrow", base: "margin", phrase: "narrow margin", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A very small difference between two amounts or results.",
        sentences: [
            "She won the election by a {blank} {base}.",
            "The company is operating on {blank} profit {base}s.",
            "He passed the exam by a {blank} {base}.",
            "The team won the game by a {blank} {base} of one point."
        ],
        options: ["narrow", "thin", "small", "tight"]
    },
    {
        collocate: "overwhelming", base: "majority", phrase: "overwhelming majority", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A very large proportion, much more than half.",
        sentences: [
            "The {blank} {base} of voters supported the new law.",
            "An {blank} {base} of students chose the online option.",
            "The proposal was approved by an {blank} {base}.",
            "The {blank} {base} of evidence supports the theory."
        ],
        options: ["overwhelming", "huge", "big", "massive"]
    },
    {
        collocate: "potential", base: "risk", phrase: "potential risk", type: "adj-noun", topic: "health", level: "middle",
        meaning: "A risk that could possibly occur.",
        sentences: [
            "You should be aware of the {blank} {base}s before investing.",
            "The drug has {blank} {base}s that patients should know about.",
            "A full assessment of {blank} {base}s was carried out.",
            "Every surgery comes with {blank} {base}s."
        ],
        options: ["potential", "possible", "likely", "probable"]
    },
    {
        collocate: "prime", base: "minister", phrase: "prime minister", type: "adj-noun", topic: "education", level: "elementary",
        meaning: "The head of government in many countries.",
        sentences: [
            "The {blank} {base} addressed the nation on television.",
            "She was the first female {blank} {base} in the country's history.",
            "The {blank} {base} held a press conference yesterday.",
            "He served as {blank} {base} for eight years."
        ],
        options: ["prime", "first", "chief", "head"]
    },
    {
        collocate: "profound", base: "impact", phrase: "profound impact", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A very deep and significant effect on something.",
        sentences: [
            "The internet has had a {blank} {base} on how we live.",
            "Her words had a {blank} {base} on the audience.",
            "The war had a {blank} {base} on the country's economy.",
            "Music can have a {blank} {base} on our emotions."
        ],
        options: ["profound", "deep", "big", "heavy"]
    },
    {
        collocate: "racial", base: "discrimination", phrase: "racial discrimination", type: "adj-noun", topic: "people", level: "high",
        meaning: "Unfair treatment of people based on their race or ethnicity.",
        sentences: [
            "{blank} {base} is illegal in most countries.",
            "She experienced {blank} {base} at her workplace.",
            "Laws against {blank} {base} must be enforced.",
            "The organization fights against {blank} {base}."
        ],
        options: ["racial", "race", "ethnic", "color"]
    },
    {
        collocate: "stiff", base: "competition", phrase: "stiff competition", type: "adj-noun", topic: "work", level: "high",
        meaning: "Very strong and difficult competition.",
        sentences: [
            "The company faces {blank} {base} from overseas manufacturers.",
            "Despite {blank} {base}, she won first place.",
            "There was {blank} {base} for the scholarship.",
            "The restaurant survives despite {blank} {base} nearby."
        ],
        options: ["stiff", "hard", "strong", "heavy"]
    },
    {
        collocate: "urgent", base: "need", phrase: "urgent need", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A very pressing and immediate requirement for something.",
        sentences: [
            "There is an {blank} {base} for more blood donors.",
            "The area is in {blank} {base} of clean drinking water.",
            "There's an {blank} {base} to reform the healthcare system.",
            "The school has an {blank} {base} for more teachers."
        ],
        options: ["urgent", "big", "strong", "serious"]
    },
    {
        collocate: "widespread", base: "use", phrase: "widespread use", type: "adj-noun", topic: "technology", level: "high",
        meaning: "Use that is common across many areas or among many people.",
        sentences: [
            "The {blank} {base} of smartphones has changed daily life.",
            "Concerns about the {blank} {base} of pesticides are growing.",
            "The {blank} {base} of antibiotics has led to resistance.",
            "Despite {blank} {base}, the drug still lacks full approval."
        ],
        options: ["widespread", "wide", "broad", "common"]
    },
    {
        collocate: "blissfully", base: "unaware", phrase: "blissfully unaware", type: "adv-adj", topic: "daily", level: "college",
        meaning: "Happily not knowing about something unpleasant.",
        sentences: [
            "She was {blank} {base} of the chaos happening behind the scenes.",
            "The children were {blank} {base} of the financial difficulties.",
            "He walked into the meeting {blank} {base} of what was about to happen.",
            "They were {blank} {base} that the price had doubled."
        ],
        options: ["blissfully", "deeply", "highly", "completely"]
    },
    {
        collocate: "cautiously", base: "optimistic", phrase: "cautiously optimistic", type: "adv-adj", topic: "daily", level: "college",
        meaning: "Hopeful but careful not to be too confident.",
        sentences: [
            "Doctors are {blank} {base} about the patient's recovery.",
            "Investors remain {blank} {base} about the economic outlook.",
            "She was {blank} {base} that the deal would go through.",
            "We are {blank} {base} about the team's chances this season."
        ],
        options: ["cautiously", "deeply", "highly", "carefully"]
    },
    {
        collocate: "fundamentally", base: "different", phrase: "fundamentally different", type: "adv-adj", topic: "education", level: "college",
        meaning: "Different in the most basic and important way.",
        sentences: [
            "The two approaches are {blank} {base}.",
            "Life in the city is {blank} {base} from life in the country.",
            "Their views on education are {blank} {base}.",
            "The new system is {blank} {base} from the old one."
        ],
        options: ["fundamentally", "deeply", "highly", "strongly"]
    },
    {
        collocate: "hopelessly", base: "lost", phrase: "hopelessly lost", type: "adv-adj", topic: "travel", level: "middle",
        meaning: "Completely unable to find your way.",
        sentences: [
            "Without a map, we were {blank} {base} in the forest.",
            "She got {blank} {base} trying to find the hotel.",
            "The tourists were {blank} {base} in the old city streets.",
            "I was {blank} {base} until a local helped me."
        ],
        options: ["hopelessly", "deeply", "highly", "completely"]
    },
    {
        collocate: "ridiculously", base: "expensive", phrase: "ridiculously expensive", type: "adv-adj", topic: "money", level: "middle",
        meaning: "So expensive that it seems unreasonable or absurd.",
        sentences: [
            "The hotel was {blank} {base} for what it offered.",
            "Parking in the city center is {blank} {base}.",
            "Designer handbags are {blank} {base}.",
            "The concert tickets were {blank} {base} this year."
        ],
        options: ["ridiculously", "deeply", "highly", "extremely"]
    },
    {
        collocate: "woefully", base: "inadequate", phrase: "woefully inadequate", type: "adv-adj", topic: "work", level: "professional",
        meaning: "So insufficient that it is shameful or disappointing.",
        sentences: [
            "The emergency response was {blank} {base}.",
            "Funding for public schools is {blank} {base}.",
            "The safety measures were {blank} {base} for such a large event.",
            "His preparation for the interview was {blank} {base}."
        ],
        options: ["woefully", "deeply", "highly", "strongly"]
    },
    {
        collocate: "fiercely", base: "competitive", phrase: "fiercely competitive", type: "adv-adj", topic: "work", level: "high",
        meaning: "Extremely competitive in an intense way.",
        sentences: [
            "The real estate market in this area is {blank} {base}.",
            "She grew up in a {blank} {base} household.",
            "The scholarship program is {blank} {base}.",
            "The tech industry is {blank} {base}."
        ],
        options: ["fiercely", "deeply", "highly", "strongly"]
    },
    {
        collocate: "overwhelmingly", base: "positive", phrase: "overwhelmingly positive", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Positive to a very great degree, with very few exceptions.",
        sentences: [
            "The response to the new product was {blank} {base}.",
            "Reviews of the movie have been {blank} {base}.",
            "Feedback from customers has been {blank} {base}.",
            "The reaction to her speech was {blank} {base}."
        ],
        options: ["overwhelmingly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "mildly", base: "surprised", phrase: "mildly surprised", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Slightly surprised; not shocked but somewhat unexpected.",
        sentences: [
            "I was {blank} {base} to see him at the party.",
            "She looked {blank} {base} when I told her the news.",
            "He was {blank} {base} by the election results.",
            "Investors were {blank} {base} by the quarterly earnings."
        ],
        options: ["mildly", "deeply", "highly", "gently"]
    },
    {
        collocate: "gravely", base: "ill", phrase: "gravely ill", type: "adv-adj", topic: "health", level: "high",
        meaning: "Very seriously sick, possibly in danger of dying.",
        sentences: [
            "The patient is {blank} {base} and needs constant care.",
            "She became {blank} {base} during the winter.",
            "He was {blank} {base} for weeks before recovering.",
            "The news that he was {blank} {base} shocked the family."
        ],
        options: ["gravely", "deeply", "highly", "seriously"]
    },
    {
        collocate: "arms", base: "race", phrase: "arms race", type: "noun-noun", topic: "education", level: "college",
        meaning: "A competition between countries to build up the most powerful weapons.",
        sentences: [
            "The {blank} {base} between the superpowers lasted decades.",
            "A new digital {blank} {base} is emerging in technology.",
            "The Cold War was defined by a nuclear {blank} {base}.",
            "An {blank} {base} only leads to greater instability."
        ],
        options: ["arms", "weapon", "war", "military"]
    },
    {
        collocate: "crime", base: "rate", phrase: "crime rate", type: "noun-noun", topic: "daily", level: "middle",
        meaning: "The number of crimes committed in a particular area over a period of time.",
        sentences: [
            "The {blank} {base} has dropped significantly this year.",
            "High unemployment often leads to higher {blank} {base}s.",
            "The city's {blank} {base} is among the lowest in the country.",
            "Effective policing can help reduce the {blank} {base}."
        ],
        options: ["crime", "criminal", "offense", "law"]
    },
    {
        collocate: "death", base: "toll", phrase: "death toll", type: "noun-noun", topic: "daily", level: "high",
        meaning: "The number of people who have died in a particular event or situation.",
        sentences: [
            "The {blank} {base} from the earthquake continues to rise.",
            "The {blank} {base} reached over 100 by the end of the week.",
            "Officials fear the {blank} {base} will increase further.",
            "The true {blank} {base} may never be known."
        ],
        options: ["death", "kill", "fatal", "victim"]
    },
    {
        collocate: "household", base: "income", phrase: "household income", type: "noun-noun", topic: "money", level: "high",
        meaning: "The total amount of money earned by all members of a household.",
        sentences: [
            "Average {blank} {base} has risen slightly this year.",
            "Many families struggle on a single {blank} {base}.",
            "The median {blank} {base} varies greatly by region.",
            "Higher {blank} {base} doesn't always mean a better quality of life."
        ],
        options: ["household", "family", "home", "house"]
    },
    {
        collocate: "nerve", base: "wracking", phrase: "nerve-wracking", type: "noun-noun", topic: "people", level: "middle",
        meaning: "Making you feel very anxious and worried.",
        sentences: [
            "The job interview was absolutely {blank}-{base}.",
            "Waiting for the exam results was {blank}-{base}.",
            "Flying is a {blank}-{base} experience for many people.",
            "The final minutes of the game were {blank}-{base}."
        ],
        options: ["nerve", "mind", "heart", "gut"]
    },
    {
        collocate: "road", base: "rage", phrase: "road rage", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "Violent anger by a car driver toward another driver.",
        sentences: [
            "{blank} {base} incidents have become more common in cities.",
            "He was arrested for a {blank} {base} attack.",
            "Avoid making gestures that could trigger {blank} {base}.",
            "{blank} {base} can lead to dangerous confrontations."
        ],
        options: ["road", "car", "drive", "street"]
    },
    {
        collocate: "trade", base: "deficit", phrase: "trade deficit", type: "noun-noun", topic: "money", level: "college",
        meaning: "The amount by which a country's imports exceed its exports.",
        sentences: [
            "The country's {blank} {base} has widened this year.",
            "A growing {blank} {base} can weaken the national currency.",
            "The government aims to reduce the {blank} {base}.",
            "The {blank} {base} with China remains a political issue."
        ],
        options: ["trade", "import", "export", "market"]
    },
    {
        collocate: "unemployment", base: "rate", phrase: "unemployment rate", type: "noun-noun", topic: "money", level: "middle",
        meaning: "The percentage of the labor force that is without a job.",
        sentences: [
            "The {blank} {base} fell to 3.5% last month.",
            "A high {blank} {base} is a sign of economic trouble.",
            "The {blank} {base} among young people is particularly high.",
            "Government policies helped lower the {blank} {base}."
        ],
        options: ["unemployment", "jobless", "work", "employment"]
    },
    {
        collocate: "wealth", base: "gap", phrase: "wealth gap", type: "noun-noun", topic: "money", level: "high",
        meaning: "The difference in assets and income between the rich and the poor.",
        sentences: [
            "The {blank} {base} between rich and poor continues to grow.",
            "Addressing the {blank} {base} is a major political challenge.",
            "Education is one way to narrow the {blank} {base}.",
            "The {blank} {base} has reached historic levels."
        ],
        options: ["wealth", "money", "income", "rich"]
    },
    {
        collocate: "work", base: "ethic", phrase: "work ethic", type: "noun-noun", topic: "work", level: "middle",
        meaning: "A belief in the moral value and importance of working hard.",
        sentences: [
            "She has an incredibly strong {blank} {base}.",
            "Employers value a good {blank} {base} above all else.",
            "His {blank} {base} is second to none.",
            "A strong {blank} {base} was instilled in him by his parents."
        ],
        options: ["work", "job", "labor", "career"]
    },
    {
        collocate: "make", base: "reservation", phrase: "make a reservation", type: "verb-noun", topic: "travel", level: "elementary",
        meaning: "To book a table, room, or seat in advance.",
        sentences: [
            "I'd like to {blank} a {base} for two at 7 p.m.",
            "She {blank} a {base} at the hotel before arriving.",
            "You should {blank} a {base} — the restaurant is always full.",
            "We forgot to {blank} a {base} and there were no tables left."
        ],
        options: ["make", "do", "take", "book"]
    },
    {
        collocate: "make", base: "discovery", phrase: "make a discovery", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To find something new or learn something for the first time.",
        sentences: [
            "Scientists {blank} an exciting {base} about the human brain.",
            "She {blank} an important {base} while researching ancient texts.",
            "The team {blank} a groundbreaking {base} in cancer treatment.",
            "Sometimes the best {base}ies are {blank} by accident."
        ],
        options: ["make", "do", "find", "take"]
    },
    {
        collocate: "do", base: "shopping", phrase: "do the shopping", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To buy food and other items needed for the home.",
        sentences: [
            "I usually {blank} the {base} on Saturday mornings.",
            "She asked him to {blank} the grocery {base}.",
            "We need to {blank} some {base} before the guests arrive.",
            "He {blank}s the weekly {base} online now."
        ],
        options: ["do", "make", "go", "take"]
    },
    {
        collocate: "take", base: "chance", phrase: "take a chance", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To do something risky in the hope of a good outcome.",
        sentences: [
            "She decided to {blank} a {base} and apply for the job.",
            "Sometimes you have to {blank} a {base} in life.",
            "He {blank} a {base} on the investment and it paid off.",
            "Are you willing to {blank} a {base}?"
        ],
        options: ["take", "make", "do", "get"]
    },
    {
        collocate: "take", base: "advice", phrase: "take advice", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To accept and act on someone's suggestion.",
        sentences: [
            "She doesn't always {blank} {base} from her parents.",
            "You should {blank} the doctor's {base} seriously.",
            "He {blank} my {base} and applied for the scholarship.",
            "If you {blank} my {base}, you'll save yourself a lot of trouble."
        ],
        options: ["take", "make", "do", "get"]
    },
    {
        collocate: "have", base: "impact", phrase: "have an impact", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To have a noticeable effect on something.",
        sentences: [
            "The new law will {blank} a huge {base} on businesses.",
            "Social media {blank}s a significant {base} on young people.",
            "Her speech {blank} a powerful {base} on the audience.",
            "Climate change is {blank}ing a devastating {base} on wildlife."
        ],
        options: ["have", "make", "do", "take"]
    },
    {
        collocate: "give", base: "impression", phrase: "give the impression", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To make someone think something is true.",
        sentences: [
            "He {blank}s the {base} of being very confident.",
            "She didn't want to {blank} the wrong {base}.",
            "The report {blank}s the {base} that things are improving.",
            "His body language {blank}s the {base} that he's lying."
        ],
        options: ["give", "make", "do", "take"]
    },
    {
        collocate: "catch", base: "attention", phrase: "catch attention", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To attract notice or interest.",
        sentences: [
            "The bright colors of the poster {blank} everyone's {base}.",
            "Her unusual outfit {blank}s {base} wherever she goes.",
            "The headline was designed to {blank} readers' {base}.",
            "The strange noise {blank} the security guard's {base}."
        ],
        options: ["catch", "take", "get", "draw"]
    },
    {
        collocate: "break", base: "silence", phrase: "break the silence", type: "verb-noun", topic: "people", level: "high",
        meaning: "To start speaking after a period of quiet.",
        sentences: [
            "Nobody spoke until she {blank} the {base}.",
            "He {blank} the awkward {base} with a joke.",
            "The victims finally {blank} their {base} about the abuse.",
            "It was the phone ringing that {blank} the {base}."
        ],
        options: ["break", "cut", "stop", "end"]
    },
    {
        collocate: "keep", base: "track", phrase: "keep track", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To continue to be informed about something.",
        sentences: [
            "It's hard to {blank} {base} of all my expenses.",
            "She uses an app to {blank} {base} of her fitness goals.",
            "The manager {blank}s {base} of everyone's progress.",
            "I can barely {blank} {base} of all the changes."
        ],
        options: ["keep", "make", "hold", "take"]
    },
    {
        collocate: "lose", base: "patience", phrase: "lose patience", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To become annoyed because of waiting or frustration.",
        sentences: [
            "I'm starting to {blank} my {base} with this slow computer.",
            "She {blank} her {base} and shouted at the waiter.",
            "Try not to {blank} {base} with the children.",
            "The teacher finally {blank} {base} with the disruptive student."
        ],
        options: ["lose", "break", "end", "drop"]
    },
    {
        collocate: "gain", base: "weight", phrase: "gain weight", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To become heavier in body mass.",
        sentences: [
            "She {blank}ed a few kilos during the holidays.",
            "It's easy to {blank} {base} if you eat too much junk food.",
            "He {blank}ed {base} after he stopped exercising.",
            "Some medications can cause you to {blank} {base}."
        ],
        options: ["gain", "get", "make", "take"]
    },
    {
        collocate: "build", base: "trust", phrase: "build trust", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To develop confidence and reliability in a relationship.",
        sentences: [
            "It takes time to {blank} {base} between colleagues.",
            "The company needs to {blank} {base} with its customers.",
            "Honesty is the best way to {blank} {base}.",
            "They worked hard to {blank} {base} within the community."
        ],
        options: ["build", "make", "do", "create"]
    },
    {
        collocate: "create", base: "impression", phrase: "create an impression", type: "verb-noun", topic: "work", level: "high",
        meaning: "To cause someone to have a particular feeling or opinion.",
        sentences: [
            "A well-designed website can {blank} a positive {base}.",
            "She wanted to {blank} a good {base} on her first day.",
            "The advertisement {blank}d the {base} of luxury.",
            "His messy desk {blank}d a bad {base} on visitors."
        ],
        options: ["create", "do", "have", "build"]
    },
    {
        collocate: "attract", base: "attention", phrase: "attract attention", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To cause people to notice something.",
        sentences: [
            "The colorful display {blank}ed a lot of {base}.",
            "She tried not to {blank} {base} as she entered the room.",
            "The protest {blank}ed international {base}.",
            "His unusual hat {blank}ed everyone's {base}."
        ],
        options: ["attract", "pull", "make", "take"]
    },
    {
        collocate: "exchange", base: "views", phrase: "exchange views", type: "verb-noun", topic: "education", level: "high",
        meaning: "To share opinions and ideas with someone.",
        sentences: [
            "The leaders {blank}d {base} on climate change.",
            "It's healthy to {blank} {base} with people who think differently.",
            "The students {blank}d {base} during the panel discussion.",
            "We {blank}d {base} over dinner about the future of education."
        ],
        options: ["exchange", "share", "give", "make"]
    },
    {
        collocate: "grab", base: "opportunity", phrase: "grab an opportunity", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To take an opportunity quickly and eagerly.",
        sentences: [
            "When the job came up, she {blank}bed the {base}.",
            "He {blank}bed every {base} to learn new skills.",
            "You should {blank} this {base} while you still can.",
            "Smart investors know when to {blank} an {base}."
        ],
        options: ["grab", "take", "get", "catch"]
    },
    {
        collocate: "meet", base: "demand", phrase: "meet demand", type: "verb-noun", topic: "work", level: "high",
        meaning: "To supply as much of something as people want to buy.",
        sentences: [
            "The factory is struggling to {blank} the growing {base}.",
            "New facilities were built to {blank} consumer {base}.",
            "We need more staff to {blank} {base} during the holidays.",
            "The supply chain failed to {blank} {base} after the crisis."
        ],
        options: ["meet", "make", "fill", "reach"]
    },
    {
        collocate: "pay", base: "fine", phrase: "pay a fine", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To give money as a penalty for breaking a rule or law.",
        sentences: [
            "He had to {blank} a {base} for parking illegally.",
            "The company was ordered to {blank} a large {base}.",
            "She had to {blank} a {base} for returning the book late.",
            "You'll have to {blank} a hefty {base} if caught speeding."
        ],
        options: ["pay", "make", "give", "do"]
    },
    {
        collocate: "raise", base: "question", phrase: "raise a question", type: "verb-noun", topic: "education", level: "high",
        meaning: "To bring up a topic or problem for discussion.",
        sentences: [
            "The report {blank}s important {base}s about data privacy.",
            "She {blank}d a difficult {base} during the meeting.",
            "This incident {blank}s serious {base}s about safety standards.",
            "Several members {blank}d {base}s about the proposed changes."
        ],
        options: ["raise", "make", "ask", "put"]
    },
    {
        collocate: "blank", base: "expression", phrase: "blank expression", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A face that shows no emotion or understanding.",
        sentences: [
            "He stared at me with a {blank} {base} on his face.",
            "When I mentioned the deadline, she gave me a {blank} {base}.",
            "The students had {blank} {base}s — nobody understood.",
            "His {blank} {base} gave nothing away."
        ],
        options: ["blank", "empty", "flat", "dead"]
    },
    {
        collocate: "blind", base: "spot", phrase: "blind spot", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "An area where you cannot see clearly; also a topic you don't understand well.",
        sentences: [
            "Check your {blank} {base} before changing lanes.",
            "Cybersecurity is a {blank} {base} for many small businesses.",
            "Everyone has {blank} {base}s when it comes to their own behavior.",
            "The mirror helps eliminate the {blank} {base}."
        ],
        options: ["blind", "dark", "dead", "weak"]
    },
    {
        collocate: "clean", base: "energy", phrase: "clean energy", type: "adj-noun", topic: "technology", level: "middle",
        meaning: "Energy produced from sources that do not pollute the environment.",
        sentences: [
            "Investing in {blank} {base} is essential for the future.",
            "Wind and solar power are forms of {blank} {base}.",
            "The government pledged to switch to {blank} {base} by 2040.",
            "Many startups are working on {blank} {base} solutions."
        ],
        options: ["clean", "pure", "fresh", "green"]
    },
    {
        collocate: "collective", base: "effort", phrase: "collective effort", type: "adj-noun", topic: "work", level: "high",
        meaning: "An action or attempt made by a group of people working together.",
        sentences: [
            "Solving climate change requires a {blank} {base}.",
            "The success was the result of a {blank} {base}.",
            "A {blank} {base} from the community rebuilt the playground.",
            "It takes a {blank} {base} to create real change."
        ],
        options: ["collective", "group", "team", "combined"]
    },
    {
        collocate: "common", base: "ground", phrase: "common ground", type: "adj-noun", topic: "people", level: "high",
        meaning: "Shared opinions or interests between people who disagree on other things.",
        sentences: [
            "Despite their differences, they found {blank} {base}.",
            "It's important to find {blank} {base} in any negotiation.",
            "The two parties are searching for {blank} {base}.",
            "There is {blank} {base} between the two proposals."
        ],
        options: ["common", "shared", "same", "mutual"]
    },
    {
        collocate: "conventional", base: "wisdom", phrase: "conventional wisdom", type: "adj-noun", topic: "education", level: "college",
        meaning: "The generally accepted belief or opinion about something.",
        sentences: [
            "{blank} {base} says you should invest for the long term.",
            "She challenged the {blank} {base} with her research.",
            "The {blank} {base} is that early risers are more productive.",
            "His findings go against {blank} {base}."
        ],
        options: ["conventional", "common", "normal", "usual"]
    },
    {
        collocate: "cutting", base: "edge", phrase: "cutting-edge", type: "adj-noun", topic: "technology", level: "high",
        meaning: "The most advanced stage of something; innovative.",
        sentences: [
            "The lab uses {blank}-{base} technology for research.",
            "She works at the {blank} {base} of artificial intelligence.",
            "The company is known for its {blank}-{base} designs.",
            "We need {blank}-{base} solutions to modern problems."
        ],
        options: ["cutting", "leading", "sharp", "top"]
    },
    {
        collocate: "daily", base: "routine", phrase: "daily routine", type: "adj-noun", topic: "daily", level: "elementary",
        meaning: "The regular activities that you do every day.",
        sentences: [
            "Exercise is part of her {blank} {base}.",
            "Traveling can disrupt your {blank} {base}.",
            "He has a strict {blank} {base} that he follows every morning.",
            "Sticking to a {blank} {base} can improve productivity."
        ],
        options: ["daily", "day", "regular", "normal"]
    },
    {
        collocate: "even", base: "distribution", phrase: "even distribution", type: "adj-noun", topic: "education", level: "college",
        meaning: "A fair and equal spread of something.",
        sentences: [
            "The wealth in the country lacks {blank} {base}.",
            "There should be an {blank} {base} of resources across schools.",
            "An {blank} {base} of workload prevents burnout.",
            "The program ensures an {blank} {base} of vaccines."
        ],
        options: ["even", "equal", "fair", "same"]
    },
    {
        collocate: "flat", base: "rate", phrase: "flat rate", type: "adj-noun", topic: "money", level: "high",
        meaning: "A fixed charge that does not change regardless of usage.",
        sentences: [
            "The taxi charges a {blank} {base} for trips to the airport.",
            "We offer a {blank} {base} for all deliveries within the city.",
            "The subscription has a {blank} monthly {base}.",
            "They agreed on a {blank} {base} for the service."
        ],
        options: ["flat", "fixed", "set", "even"]
    },
    {
        collocate: "guilty", base: "conscience", phrase: "guilty conscience", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A feeling of guilt about something wrong you have done.",
        sentences: [
            "He couldn't sleep because of his {blank} {base}.",
            "She returned the money because of a {blank} {base}.",
            "His {blank} {base} finally made him confess.",
            "A {blank} {base} can be heavier than any punishment."
        ],
        options: ["guilty", "bad", "heavy", "dark"]
    },
    {
        collocate: "immune", base: "system", phrase: "immune system", type: "adj-noun", topic: "health", level: "middle",
        meaning: "The body's natural defense against disease and infection.",
        sentences: [
            "A healthy diet strengthens your {blank} {base}.",
            "Stress can weaken the {blank} {base}.",
            "The virus attacks the body's {blank} {base}.",
            "Sleep is essential for a strong {blank} {base}."
        ],
        options: ["immune", "defense", "body", "health"]
    },
    {
        collocate: "open", base: "mind", phrase: "open mind", type: "adj-noun", topic: "people", level: "elementary",
        meaning: "A willingness to consider new ideas and opinions.",
        sentences: [
            "Approach the situation with an {blank} {base}.",
            "Keep an {blank} {base} and listen to both sides.",
            "She always has an {blank} {base} about different cultures.",
            "Having an {blank} {base} is the first step to learning."
        ],
        options: ["open", "free", "clear", "wide"]
    },
    {
        collocate: "moral", base: "dilemma", phrase: "moral dilemma", type: "adj-noun", topic: "education", level: "college",
        meaning: "A situation where you must choose between two equally difficult options.",
        sentences: [
            "The doctor faced a {blank} {base} about the patient's treatment.",
            "It's a {blank} {base} — should you tell the truth or protect someone?",
            "The film explores a complex {blank} {base}.",
            "Many ethical questions present a {blank} {base}."
        ],
        options: ["moral", "hard", "tough", "ethical"]
    },
    {
        collocate: "physical", base: "activity", phrase: "physical activity", type: "adj-noun", topic: "health", level: "elementary",
        meaning: "Any movement that makes your body use energy, such as walking or sports.",
        sentences: [
            "Regular {blank} {base} reduces the risk of heart disease.",
            "Children need at least 60 minutes of {blank} {base} daily.",
            "Doctors recommend moderate {blank} {base} for older adults.",
            "Lack of {blank} {base} contributes to weight gain."
        ],
        options: ["physical", "body", "active", "sport"]
    },
    {
        collocate: "steady", base: "income", phrase: "steady income", type: "adj-noun", topic: "money", level: "middle",
        meaning: "Regular and reliable earnings that don't fluctuate much.",
        sentences: [
            "She needs a {blank} {base} to pay her mortgage.",
            "Freelancers often lack a {blank} {base}.",
            "A rental property can provide a {blank} {base}.",
            "Having a {blank} {base} gives you financial security."
        ],
        options: ["steady", "stable", "fixed", "regular"]
    },
    {
        collocate: "vague", base: "idea", phrase: "vague idea", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "An unclear or imprecise understanding of something.",
        sentences: [
            "I have a {blank} {base} of what he looks like.",
            "She had only a {blank} {base} of what the job involved.",
            "He gave a {blank} {base} of when he might arrive.",
            "Most people have only a {blank} {base} of how the law works."
        ],
        options: ["vague", "weak", "small", "light"]
    },
    {
        collocate: "blatantly", base: "obvious", phrase: "blatantly obvious", type: "adv-adj", topic: "daily", level: "college",
        meaning: "So clear and unmistakable that it cannot be ignored or denied.",
        sentences: [
            "It was {blank} {base} that he was lying.",
            "The error in the report was {blank} {base}.",
            "Her bias was {blank} {base} to everyone in the room.",
            "The need for reform is {blank} {base}."
        ],
        options: ["blatantly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "deliberately", base: "misleading", phrase: "deliberately misleading", type: "adv-adj", topic: "daily", level: "college",
        meaning: "Intentionally giving a false impression.",
        sentences: [
            "The advertisement was found to be {blank} {base}.",
            "His statement was {blank} {base} and caused confusion.",
            "The company published {blank} {base} data.",
            "It's illegal to provide {blank} {base} information."
        ],
        options: ["deliberately", "deeply", "highly", "strongly"]
    },
    {
        collocate: "mutually", base: "beneficial", phrase: "mutually beneficial", type: "adv-adj", topic: "work", level: "high",
        meaning: "Good for both sides or parties involved.",
        sentences: [
            "The partnership has been {blank} {base} for both companies.",
            "Trade agreements should be {blank} {base}.",
            "They found a {blank} {base} solution to the problem.",
            "A {blank} {base} relationship is the goal of any negotiation."
        ],
        options: ["mutually", "equally", "jointly", "commonly"]
    },
    {
        collocate: "predominantly", base: "male", phrase: "predominantly male", type: "adv-adj", topic: "work", level: "high",
        meaning: "Mainly consisting of men or boys.",
        sentences: [
            "Engineering is still a {blank} {base} field.",
            "The audience was {blank} {base}.",
            "The industry was historically {blank} {base}.",
            "The committee was {blank} {base}, with only two women."
        ],
        options: ["predominantly", "mostly", "highly", "mainly"]
    },
    {
        collocate: "deeply", base: "grateful", phrase: "deeply grateful", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Very thankful for something.",
        sentences: [
            "We are {blank} {base} for your generous donation.",
            "She was {blank} {base} to everyone who helped.",
            "I'm {blank} {base} for the opportunity to work here.",
            "He felt {blank} {base} that his family was safe."
        ],
        options: ["deeply", "highly", "strongly", "fully"]
    },
    {
        collocate: "fully", base: "equipped", phrase: "fully equipped", type: "adv-adj", topic: "travel", level: "middle",
        meaning: "Having everything that is needed.",
        sentences: [
            "The apartment is {blank} {base} with modern appliances.",
            "Each classroom is {blank} {base} with computers.",
            "The gym is {blank} {base} for all kinds of training.",
            "The car comes {blank} {base} with safety features."
        ],
        options: ["fully", "deeply", "highly", "totally"]
    },
    {
        collocate: "openly", base: "admit", phrase: "openly admit", type: "adv-verb", topic: "people", level: "high",
        meaning: "To acknowledge something publicly without shame.",
        sentences: [
            "She {blank} {base}ted that she had been wrong.",
            "Few politicians will {blank} {base} their failures.",
            "He {blank} {base}ted his lack of experience.",
            "The company {blank} {base}ted the product was flawed."
        ],
        options: ["openly", "deeply", "highly", "freely"]
    },
    {
        collocate: "hotly", base: "debated", phrase: "hotly debated", type: "adv-adj", topic: "education", level: "college",
        meaning: "Argued about with a lot of strong feelings and opinions.",
        sentences: [
            "Immigration remains a {blank} {base} topic.",
            "The issue of school uniforms is {blank} {base}.",
            "The proposal was {blank} {base} in Parliament.",
            "Gun control is one of the most {blank} {base} issues."
        ],
        options: ["hotly", "deeply", "highly", "strongly"]
    },
    {
        collocate: "life", base: "style", phrase: "lifestyle", type: "noun-noun", topic: "health", level: "elementary",
        meaning: "The way a person lives, including habits, attitudes, and economic level.",
        sentences: [
            "A sedentary {blank}{base} can lead to health problems.",
            "She adopted a healthier {blank}{base} after her diagnosis.",
            "Urban and rural {blank}{base}s differ greatly.",
            "Changes in {blank}{base} can reduce the risk of disease."
        ],
        options: ["life", "live", "living", "day"]
    },
    {
        collocate: "team", base: "spirit", phrase: "team spirit", type: "noun-noun", topic: "work", level: "elementary",
        meaning: "A feeling of pride and loyalty shared by the members of a team.",
        sentences: [
            "Good {blank} {base} is essential for success.",
            "The coach worked hard to build {blank} {base}.",
            "There's a strong sense of {blank} {base} in this office.",
            "Lack of {blank} {base} can undermine a project."
        ],
        options: ["team", "group", "work", "staff"]
    },
    {
        collocate: "budget", base: "cut", phrase: "budget cut", type: "noun-noun", topic: "money", level: "middle",
        meaning: "A reduction in the amount of money available to spend.",
        sentences: [
            "The university is facing severe {blank} {base}s.",
            "{blank} {base}s forced the hospital to reduce staff.",
            "The school is dealing with yet another {blank} {base}.",
            "Government {blank} {base}s affected public transport services."
        ],
        options: ["budget", "money", "fund", "cost"]
    },
    {
        collocate: "target", base: "audience", phrase: "target audience", type: "noun-noun", topic: "work", level: "middle",
        meaning: "The specific group of people that a product or message is aimed at.",
        sentences: [
            "Who is the {blank} {base} for this advertisement?",
            "Understanding your {blank} {base} is key to marketing success.",
            "The film was designed for a young {blank} {base}.",
            "We need to redefine our {blank} {base} for the new campaign."
        ],
        options: ["target", "main", "key", "focus"]
    },
    {
        collocate: "carbon", base: "dioxide", phrase: "carbon dioxide", type: "noun-noun", topic: "weather", level: "middle",
        meaning: "A gas produced by burning fossil fuels and by breathing, contributing to global warming.",
        sentences: [
            "{blank} {base} levels in the atmosphere are rising.",
            "Trees absorb {blank} {base} and produce oxygen.",
            "Reducing {blank} {base} emissions is crucial for the climate.",
            "Cars release large amounts of {blank} {base}."
        ],
        options: ["carbon", "gas", "air", "smoke"]
    },
    {
        collocate: "poverty", base: "line", phrase: "poverty line", type: "noun-noun", topic: "money", level: "high",
        meaning: "The minimum level of income considered adequate to live on.",
        sentences: [
            "Millions of people live below the {blank} {base}.",
            "The {blank} {base} varies from country to country.",
            "Government aid helps families above the {blank} {base}.",
            "Children living below the {blank} {base} face many challenges."
        ],
        options: ["poverty", "poor", "income", "money"]
    },
    {
        collocate: "child", base: "labor", phrase: "child labor", type: "noun-noun", topic: "people", level: "high",
        meaning: "The use of children in industry or business, especially when illegal.",
        sentences: [
            "{blank} {base} remains a serious issue in many countries.",
            "International laws prohibit {blank} {base}.",
            "The company was accused of using {blank} {base}.",
            "Campaigns to end {blank} {base} have had some success."
        ],
        options: ["child", "young", "kid", "minor"]
    },
    {
        collocate: "carbon", base: "emission", phrase: "carbon emissions", type: "noun-noun", topic: "weather", level: "middle",
        meaning: "The release of carbon dioxide into the atmosphere.",
        sentences: [
            "The company pledged to reduce its {blank} {base}s by 50%.",
            "{blank} {base}s from transport are a major concern.",
            "New regulations aim to cut {blank} {base}s significantly.",
            "Electric cars produce zero direct {blank} {base}s."
        ],
        options: ["carbon", "gas", "smoke", "air"]
    },
    {
        collocate: "flatly", base: "reject", phrase: "flatly reject", type: "adv-verb", topic: "work", level: "high",
        meaning: "To refuse something completely and firmly.",
        sentences: [
            "The board {blank} {base}ed the proposal without discussion.",
            "She {blank} {base}ed the idea of relocating abroad.",
            "The union {blank} {base}ed the management's offer.",
            "He {blank} {base}s any suggestion that he was wrong."
        ],
        options: ["flatly", "mildly", "broadly", "vaguely"]
    },
    {
        collocate: "implicitly", base: "trust", phrase: "implicitly trust", type: "adv-verb", topic: "people", level: "high",
        meaning: "To trust someone completely and without any doubt.",
        sentences: [
            "I {blank} {base} my lawyer to handle the case.",
            "She {blank} {base}s her partner with financial decisions.",
            "We {blank} {base} the team to deliver on time.",
            "You can {blank} {base} his judgment on this matter."
        ],
        options: ["implicitly", "roughly", "barely", "broadly"]
    },
    {
        collocate: "wholeheartedly", base: "support", phrase: "wholeheartedly support", type: "adv-verb", topic: "people", level: "high",
        meaning: "To support something with complete enthusiasm and commitment.",
        sentences: [
            "We {blank} {base} the initiative for cleaner energy.",
            "The community {blank} {base}s the local school.",
            "I {blank} {base} her decision to run for office.",
            "The board {blank} {base}ed the charity project."
        ],
        options: ["wholeheartedly", "vaguely", "barely", "slightly"]
    },
    {
        collocate: "reluctantly", base: "agree", phrase: "reluctantly agree", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To agree to something even though you do not want to.",
        sentences: [
            "He {blank} {base}d to help with the extra workload.",
            "She {blank} {base}d to lend him the money.",
            "They {blank} {base}d to postpone the wedding.",
            "I {blank} {base}d to attend the meeting on Saturday."
        ],
        options: ["reluctantly", "eagerly", "gladly", "willingly"]
    },
    {
        collocate: "promptly", base: "respond", phrase: "promptly respond", type: "adv-verb", topic: "work", level: "middle",
        meaning: "To reply or react quickly and without delay.",
        sentences: [
            "Please {blank} {base} to the email by Friday.",
            "The company {blank} {base}ed to the customer complaint.",
            "Emergency services {blank} {base}ed to the call.",
            "She always {blank} {base}s to messages within an hour."
        ],
        options: ["promptly", "reluctantly", "vaguely", "roughly"]
    },
    {
        collocate: "gradually", base: "improve", phrase: "gradually improve", type: "adv-verb", topic: "health", level: "middle",
        meaning: "To get better slowly over a period of time.",
        sentences: [
            "His health began to {blank} {base} after the treatment.",
            "The weather will {blank} {base} toward the weekend.",
            "Her grades {blank} {base}d throughout the semester.",
            "The economy is expected to {blank} {base} next year."
        ],
        options: ["gradually", "abruptly", "suddenly", "instantly"]
    },
    {
        collocate: "swiftly", base: "act", phrase: "swiftly act", type: "adv-verb", topic: "work", level: "middle",
        meaning: "To take action quickly and decisively.",
        sentences: [
            "The government must {blank} {base} to address the crisis.",
            "Police {blank} {base}ed to secure the area.",
            "Management {blank} {base}ed on the safety report.",
            "We need to {blank} {base} before the deadline passes."
        ],
        options: ["swiftly", "reluctantly", "vaguely", "hesitantly"]
    },
    {
        collocate: "enthusiastically", base: "embrace", phrase: "enthusiastically embrace", type: "adv-verb", topic: "technology", level: "high",
        meaning: "To accept or adopt something with great eagerness.",
        sentences: [
            "The team {blank} {base}d the new technology.",
            "Consumers have {blank} {base}d online shopping.",
            "Students {blank} {base}d the hands-on learning approach.",
            "The company {blank} {base}d the culture of innovation."
        ],
        options: ["enthusiastically", "reluctantly", "hesitantly", "barely"]
    },
    {
        collocate: "willingly", base: "participate", phrase: "willingly participate", type: "adv-verb", topic: "education", level: "middle",
        meaning: "To take part in something by choice and without pressure.",
        sentences: [
            "All students {blank} {base}d in the science fair.",
            "She {blank} {base}s in community service every weekend.",
            "He {blank} {base}d in the research study.",
            "Volunteers {blank} {base} in disaster relief efforts."
        ],
        options: ["willingly", "reluctantly", "barely", "hardly"]
    },
    {
        collocate: "drastically", base: "reduce", phrase: "drastically reduce", type: "adv-verb", topic: "money", level: "middle",
        meaning: "To decrease something by a very large amount.",
        sentences: [
            "The factory {blank} {base}d its carbon emissions.",
            "We need to {blank} {base} our spending this quarter.",
            "The new policy will {blank} {base} waiting times.",
            "Technology has {blank} {base}d the cost of communication."
        ],
        options: ["drastically", "slightly", "vaguely", "barely"]
    },
    {
        collocate: "vehemently", base: "oppose", phrase: "vehemently oppose", type: "adv-verb", topic: "people", level: "college",
        meaning: "To resist or argue against something with great force.",
        sentences: [
            "Residents {blank} {base} the construction of the factory.",
            "She {blank} {base}s any changes to the curriculum.",
            "The group {blank} {base}d the proposed legislation.",
            "They {blank} {base} the use of animals in testing."
        ],
        options: ["vehemently", "mildly", "slightly", "vaguely"]
    },
    {
        collocate: "firmly", base: "establish", phrase: "firmly establish", type: "adv-verb", topic: "work", level: "high",
        meaning: "To set up something in a strong and lasting way.",
        sentences: [
            "The company has {blank} {base}ed itself as a market leader.",
            "She {blank} {base}ed her reputation through hard work.",
            "The research {blank} {base}ed a link between diet and health.",
            "They aim to {blank} {base} partnerships across the region."
        ],
        options: ["firmly", "vaguely", "barely", "loosely"]
    },
    {
        collocate: "carefully", base: "consider", phrase: "carefully consider", type: "adv-verb", topic: "work", level: "middle",
        meaning: "To think about something thoroughly before deciding.",
        sentences: [
            "Please {blank} {base} all options before making a decision.",
            "The committee will {blank} {base} your application.",
            "You should {blank} {base} the risks before investing.",
            "We {blank} {base}ed every factor in the analysis."
        ],
        options: ["carefully", "vaguely", "barely", "roughly"]
    },
    {
        collocate: "deeply", base: "appreciate", phrase: "deeply appreciate", type: "adv-verb", topic: "people", level: "middle",
        meaning: "To feel strong gratitude for something.",
        sentences: [
            "I {blank} {base} your help during this difficult time.",
            "We {blank} {base} the effort you put into this project.",
            "She {blank} {base}s the mentorship she received.",
            "The community {blank} {base}s the firefighters' bravery."
        ],
        options: ["deeply", "vaguely", "roughly", "barely"]
    },
    {
        collocate: "actively", base: "pursue", phrase: "actively pursue", type: "adv-verb", topic: "work", level: "middle",
        meaning: "To try to achieve something with effort and determination.",
        sentences: [
            "She is {blank} {base}ing a career in medicine.",
            "The company {blank} {base}s international expansion.",
            "He has been {blank} {base}ing new business opportunities.",
            "We {blank} {base} partnerships with local organizations."
        ],
        options: ["actively", "vaguely", "barely", "passively"]
    },
    {
        collocate: "bitterly", base: "complain", phrase: "bitterly complain", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To express dissatisfaction in an angry and resentful way.",
        sentences: [
            "Commuters {blank} {base}ed about the train delays.",
            "He {blank} {base}ed about the unfair treatment at work.",
            "Residents {blank} {base} about the noise from construction.",
            "Customers {blank} {base}ed about the poor service."
        ],
        options: ["bitterly", "mildly", "gently", "softly"]
    },
    {
        collocate: "rapidly", base: "expand", phrase: "rapidly expand", type: "adv-verb", topic: "money", level: "middle",
        meaning: "To grow or increase in size very quickly.",
        sentences: [
            "The company plans to {blank} {base} into Asian markets.",
            "The city has {blank} {base}ed over the past decade.",
            "Their customer base is {blank} {base}ing every month.",
            "Online education is {blank} {base}ing worldwide."
        ],
        options: ["rapidly", "barely", "scarcely", "slightly"]
    },
    {
        collocate: "strongly", base: "advise", phrase: "strongly advise", type: "adv-verb", topic: "health", level: "middle",
        meaning: "To give a recommendation with great emphasis.",
        sentences: [
            "Doctors {blank} {base} patients to quit smoking.",
            "I {blank} {base} you to read the contract carefully.",
            "We {blank} {base} booking tickets in advance.",
            "Experts {blank} {base} wearing sunscreen daily."
        ],
        options: ["strongly", "vaguely", "barely", "mildly"]
    },
    {
        collocate: "explicitly", base: "mention", phrase: "explicitly mention", type: "adv-verb", topic: "education", level: "high",
        meaning: "To state or refer to something clearly and directly.",
        sentences: [
            "The report {blank} {base}s the need for better funding.",
            "She {blank} {base}ed his name during the speech.",
            "The contract does not {blank} {base} overtime pay.",
            "The guidelines {blank} {base} the safety requirements."
        ],
        options: ["explicitly", "vaguely", "barely", "roughly"]
    },
    {
        collocate: "blatantly", base: "ignore", phrase: "blatantly ignore", type: "adv-verb", topic: "daily", level: "high",
        meaning: "To disregard something in an obvious and shameless way.",
        sentences: [
            "He {blank} {base}d the warning signs on the road.",
            "Some companies {blank} {base} environmental regulations.",
            "She {blank} {base}d his repeated requests for help.",
            "They {blank} {base}d the feedback from customers."
        ],
        options: ["blatantly", "slightly", "gently", "mildly"]
    },
    {
        collocate: "steadily", base: "decline", phrase: "steadily decline", type: "adv-verb", topic: "money", level: "middle",
        meaning: "To decrease continuously over a period of time.",
        sentences: [
            "Sales have been {blank} {base}ing for three quarters.",
            "The population has {blank} {base}d since the 1990s.",
            "Interest in the program has {blank} {base}d over time.",
            "The currency's value {blank} {base}d throughout the year."
        ],
        options: ["steadily", "suddenly", "abruptly", "instantly"]
    },
    {
        collocate: "narrowly", base: "avoid", phrase: "narrowly avoid", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To barely escape something unpleasant or dangerous.",
        sentences: [
            "She {blank} {base}ed a collision on the highway.",
            "The company {blank} {base}ed bankruptcy last year.",
            "He {blank} {base}ed being hit by the falling branch.",
            "They {blank} {base}ed missing their flight by minutes."
        ],
        options: ["narrowly", "widely", "broadly", "vastly"]
    },
    {
        collocate: "thoroughly", base: "investigate", phrase: "thoroughly investigate", type: "adv-verb", topic: "work", level: "high",
        meaning: "To examine something carefully and completely.",
        sentences: [
            "The police will {blank} {base} the crime scene.",
            "We need to {blank} {base} all possible causes.",
            "The committee {blank} {base}d the allegations.",
            "Scientists {blank} {base}d the effects of the drug."
        ],
        options: ["thoroughly", "vaguely", "barely", "casually"]
    },
    {
        collocate: "strictly", base: "enforce", phrase: "strictly enforce", type: "adv-verb", topic: "work", level: "middle",
        meaning: "To make sure rules are followed without exception.",
        sentences: [
            "The school {blank} {base}s the dress code policy.",
            "Police {blank} {base} speed limits in school zones.",
            "The company {blank} {base}s its no-smoking policy.",
            "New parking rules will be {blank} {base}d from Monday."
        ],
        options: ["strictly", "loosely", "vaguely", "barely"]
    },
    {
        collocate: "strongly", base: "deny", phrase: "strongly deny", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To say firmly that something is not true.",
        sentences: [
            "The company {blank} {base}ies any involvement in the scandal.",
            "He {blank} {base}ied the accusations made against him.",
            "Officials {blank} {base} the claims of corruption.",
            "She {blank} {base}ied leaking the information."
        ],
        options: ["strongly", "mildly", "slightly", "gently"]
    },
    {
        collocate: "closely", base: "monitor", phrase: "closely monitor", type: "adv-verb", topic: "health", level: "middle",
        meaning: "To watch or check something carefully and regularly.",
        sentences: [
            "Doctors {blank} {base} the patient's blood pressure.",
            "The government {blank} {base}s air quality levels.",
            "Teachers should {blank} {base} students' progress.",
            "We {blank} {base} market trends to stay competitive."
        ],
        options: ["closely", "vaguely", "loosely", "casually"]
    },
    {
        collocate: "harshly", base: "criticize", phrase: "harshly criticize", type: "adv-verb", topic: "people", level: "high",
        meaning: "To express strong disapproval in a severe way.",
        sentences: [
            "The media {blank} {base}d the government's response.",
            "She was {blank} {base}d for her controversial remarks.",
            "Critics {blank} {base}d the movie for its poor script.",
            "The report {blank} {base}d the company's safety record."
        ],
        options: ["harshly", "mildly", "gently", "softly"]
    },
    {
        collocate: "precisely", base: "define", phrase: "precisely define", type: "adv-verb", topic: "education", level: "college",
        meaning: "To describe or explain something in exact terms.",
        sentences: [
            "It is important to {blank} {base} the scope of the project.",
            "The contract must {blank} {base} each party's obligations.",
            "Scientists {blank} {base}d the new chemical compound.",
            "Can you {blank} {base} what you mean by that term?"
        ],
        options: ["precisely", "vaguely", "roughly", "loosely"]
    },
    {
        collocate: "fiercely", base: "defend", phrase: "fiercely defend", type: "adv-verb", topic: "people", level: "high",
        meaning: "To protect or support something with strong passion.",
        sentences: [
            "She {blank} {base}ed her decision to leave the company.",
            "The lawyer {blank} {base}ed his client in court.",
            "Parents {blank} {base} their children's right to education.",
            "He {blank} {base}ed his reputation against false claims."
        ],
        options: ["fiercely", "mildly", "gently", "weakly"]
    },
    {
        collocate: "politely", base: "decline", phrase: "politely decline", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To refuse an offer or invitation in a courteous way.",
        sentences: [
            "She {blank} {base}d the dinner invitation.",
            "I had to {blank} {base} his offer to drive me home.",
            "He {blank} {base}d the extra helping of dessert.",
            "We {blank} {base}d the opportunity due to scheduling."
        ],
        options: ["politely", "harshly", "bitterly", "fiercely"]
    },
    {
        collocate: "reasonably", base: "priced", phrase: "reasonably priced", type: "adv-adj", topic: "money", level: "middle",
        meaning: "Not too expensive; having a fair cost.",
        sentences: [
            "The hotel was {blank} {base} for such a popular location.",
            "We found a {blank} {base} restaurant near the station.",
            "These shoes are {blank} {base} compared to other brands.",
            "The menu items are all {blank} {base} for students."
        ],
        options: ["reasonably", "deeply", "strongly", "firmly"]
    },
    {
        collocate: "hugely", base: "successful", phrase: "hugely successful", type: "adv-adj", topic: "work", level: "middle",
        meaning: "Achieving a very great degree of success.",
        sentences: [
            "The product launch was {blank} {base} beyond expectations.",
            "She became a {blank} {base} entrepreneur in her thirties.",
            "The campaign proved {blank} {base} in raising awareness.",
            "Their partnership has been {blank} {base} for both companies."
        ],
        options: ["hugely", "mildly", "vaguely", "slightly"]
    },
    {
        collocate: "heavily", base: "influenced", phrase: "heavily influenced", type: "adv-adj", topic: "education", level: "high",
        meaning: "Strongly affected or shaped by something.",
        sentences: [
            "His writing style was {blank} {base} by classical literature.",
            "The architecture is {blank} {base} by Roman design.",
            "Her music is {blank} {base} by traditional folk songs.",
            "The policy was {blank} {base} by public opinion."
        ],
        options: ["heavily", "mildly", "vaguely", "lightly"]
    },
    {
        collocate: "spectacularly", base: "successful", phrase: "spectacularly successful", type: "adv-adj", topic: "work", level: "high",
        meaning: "Successful in an impressively dramatic way.",
        sentences: [
            "The charity event was {blank} {base} this year.",
            "Her debut novel was {blank} {base} worldwide.",
            "The rescue mission was {blank} {base} despite the risks.",
            "Their marketing strategy proved {blank} {base} in Asia."
        ],
        options: ["spectacularly", "roughly", "barely", "vaguely"]
    },
    {
        collocate: "downright", base: "rude", phrase: "downright rude", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Extremely and unacceptably impolite.",
        sentences: [
            "The waiter was {blank} {base} to the customers.",
            "His comments were {blank} {base} and uncalled for.",
            "It is {blank} {base} to ignore someone who is speaking.",
            "She found his behavior {blank} {base} at the meeting."
        ],
        options: ["downright", "slightly", "broadly", "largely"]
    },
    {
        collocate: "excruciatingly", base: "painful", phrase: "excruciatingly painful", type: "adv-adj", topic: "health", level: "high",
        meaning: "Causing intense and unbearable pain.",
        sentences: [
            "The injury was {blank} {base} for the first few days.",
            "Recovery from the surgery was {blank} {base}.",
            "The headache became {blank} {base} by the afternoon.",
            "Walking on the broken ankle was {blank} {base}."
        ],
        options: ["excruciatingly", "moderately", "vaguely", "broadly"]
    },
    {
        collocate: "thinly", base: "veiled", phrase: "thinly veiled", type: "adv-adj", topic: "people", level: "college",
        meaning: "Barely disguised or hidden; almost obvious.",
        sentences: [
            "Her criticism was a {blank} {base} attack on the policy.",
            "His {blank} {base} contempt was obvious to everyone.",
            "The article contained {blank} {base} references to the scandal.",
            "It was a {blank} {base} attempt to discredit the opponent."
        ],
        options: ["thinly", "thickly", "broadly", "deeply"]
    },
    {
        collocate: "highly", base: "educated", phrase: "highly educated", type: "adv-adj", topic: "education", level: "middle",
        meaning: "Having received a great deal of formal education.",
        sentences: [
            "The country has a {blank} {base} workforce.",
            "She is a {blank} {base} professional with two degrees.",
            "The panel consisted of {blank} {base} experts.",
            "A {blank} {base} population drives economic growth."
        ],
        options: ["highly", "deeply", "broadly", "firmly"]
    },
    {
        collocate: "well", base: "deserved", phrase: "well deserved", type: "adv-adj", topic: "work", level: "middle",
        meaning: "Fully earned or merited through effort.",
        sentences: [
            "She received a {blank} {base} promotion after years of hard work.",
            "The team celebrated their {blank} {base} victory.",
            "He took a {blank} {base} vacation after the project.",
            "The award was {blank} {base} for her contributions."
        ],
        options: ["well", "highly", "deeply", "fully"]
    },
    {
        collocate: "keenly", base: "aware", phrase: "keenly aware", type: "adv-adj", topic: "people", level: "high",
        meaning: "Very conscious and perceptive about something.",
        sentences: [
            "She was {blank} {base} of the challenges ahead.",
            "The manager is {blank} {base} of the budget constraints.",
            "We are {blank} {base} that time is running out.",
            "He became {blank} {base} of his own limitations."
        ],
        options: ["keenly", "roughly", "merely", "vaguely"]
    },
    {
        collocate: "entirely", base: "possible", phrase: "entirely possible", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Completely within the range of what could happen.",
        sentences: [
            "It is {blank} {base} that the train will be delayed.",
            "A solution is {blank} {base} if we work together.",
            "It is {blank} {base} to finish the project by Friday.",
            "Snow in April is {blank} {base} in this region."
        ],
        options: ["entirely", "firmly", "keenly", "sharply"]
    },
    {
        collocate: "barely", base: "visible", phrase: "barely visible", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Almost impossible to see; extremely faint.",
        sentences: [
            "The writing on the old sign was {blank} {base}.",
            "Stars were {blank} {base} through the city lights.",
            "The scar is now {blank} {base} after the treatment.",
            "The trail markers were {blank} {base} in the fog."
        ],
        options: ["barely", "highly", "strongly", "deeply"]
    },
    {
        collocate: "strikingly", base: "beautiful", phrase: "strikingly beautiful", type: "adv-adj", topic: "travel", level: "high",
        meaning: "Beautiful in a way that immediately catches attention.",
        sentences: [
            "The landscape was {blank} {base} at sunset.",
            "She looked {blank} {base} in her evening gown.",
            "The cathedral is {blank} {base} with its stained glass.",
            "The coastline is {blank} {base} from the hilltop."
        ],
        options: ["strikingly", "roughly", "merely", "scarcely"]
    },
    {
        collocate: "slightly", base: "confused", phrase: "slightly confused", type: "adv-adj", topic: "education", level: "elementary",
        meaning: "A little bit uncertain or puzzled about something.",
        sentences: [
            "I was {blank} {base} by the directions he gave me.",
            "The students looked {blank} {base} after the explanation.",
            "She seemed {blank} {base} about the schedule change.",
            "He was {blank} {base} by the new software interface."
        ],
        options: ["slightly", "utterly", "fiercely", "vastly"]
    },
    {
        collocate: "vaguely", base: "familiar", phrase: "vaguely familiar", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Somewhat recognizable but not clearly remembered.",
        sentences: [
            "The tune sounded {blank} {base} but I could not name it.",
            "His face looked {blank} {base} to me.",
            "The street felt {blank} {base} from a childhood memory.",
            "The name was {blank} {base} but I could not place it."
        ],
        options: ["vaguely", "fiercely", "strongly", "keenly"]
    },
    {
        collocate: "precisely", base: "correct", phrase: "precisely correct", type: "adv-adj", topic: "education", level: "high",
        meaning: "Exactly right without any error.",
        sentences: [
            "Her calculations were {blank} {base} down to the decimal.",
            "The measurement must be {blank} {base} for the experiment.",
            "Your analysis is {blank} {base} according to the data.",
            "The prediction turned out to be {blank} {base}."
        ],
        options: ["precisely", "vaguely", "roughly", "broadly"]
    },
    {
        collocate: "considerably", base: "larger", phrase: "considerably larger", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Noticeably bigger by a significant amount.",
        sentences: [
            "The new office is {blank} {base} than the old one.",
            "This year's budget is {blank} {base} than last year's.",
            "The crowd was {blank} {base} than we expected.",
            "Their house is {blank} {base} than ours."
        ],
        options: ["considerably", "vaguely", "barely", "scarcely"]
    },
    {
        collocate: "drastically", base: "different", phrase: "drastically different", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Extremely and strikingly unlike something else.",
        sentences: [
            "Life in the city is {blank} {base} from life in the country.",
            "The two proposals are {blank} {base} in their approach.",
            "The results were {blank} {base} from what we predicted.",
            "His attitude is {blank} {base} from his brother's."
        ],
        options: ["drastically", "mildly", "vaguely", "barely"]
    },
    {
        collocate: "glaringly", base: "apparent", phrase: "glaringly apparent", type: "adv-adj", topic: "work", level: "college",
        meaning: "So obvious that it cannot be ignored or overlooked.",
        sentences: [
            "The flaw in the plan was {blank} {base} to everyone.",
            "It became {blank} {base} that the system needed an upgrade.",
            "The gap in their research was {blank} {base}.",
            "The mistake was {blank} {base} during the review."
        ],
        options: ["glaringly", "slightly", "moderately", "vaguely"]
    },
    {
        collocate: "largely", base: "responsible", phrase: "largely responsible", type: "adv-adj", topic: "work", level: "middle",
        meaning: "Mostly or primarily accountable for something.",
        sentences: [
            "The manager was {blank} {base} for the team's success.",
            "Poor planning was {blank} {base} for the delays.",
            "She was {blank} {base} for organizing the event.",
            "The weather was {blank} {base} for the crop failure."
        ],
        options: ["largely", "barely", "slightly", "vaguely"]
    },
    {
        collocate: "thoroughly", base: "prepared", phrase: "thoroughly prepared", type: "adv-adj", topic: "education", level: "middle",
        meaning: "Completely and carefully made ready for something.",
        sentences: [
            "She was {blank} {base} for the final exam.",
            "The team was {blank} {base} for the presentation.",
            "Make sure you are {blank} {base} before the interview.",
            "He came to the debate {blank} {base} with evidence."
        ],
        options: ["thoroughly", "vaguely", "barely", "scarcely"]
    },
    {
        collocate: "broadly", base: "similar", phrase: "broadly similar", type: "adv-adj", topic: "education", level: "high",
        meaning: "Alike in general terms though differing in details.",
        sentences: [
            "The two theories are {blank} {base} in their conclusions.",
            "Their approaches are {blank} {base} despite different methods.",
            "The results from both studies are {blank} {base}.",
            "The candidates hold {blank} {base} views on the economy."
        ],
        options: ["broadly", "barely", "utterly", "fiercely"]
    },
    {
        collocate: "acutely", base: "sensitive", phrase: "acutely sensitive", type: "adv-adj", topic: "people", level: "high",
        meaning: "Extremely responsive or receptive to feelings or conditions.",
        sentences: [
            "He is {blank} {base} to criticism from his peers.",
            "The device is {blank} {base} to temperature changes.",
            "She is {blank} {base} about issues of fairness.",
            "Children can be {blank} {base} to changes in routine."
        ],
        options: ["acutely", "broadly", "roughly", "merely"]
    },
    {
        collocate: "entirely", base: "new", phrase: "entirely new", type: "adv-adj", topic: "technology", level: "middle",
        meaning: "Completely fresh and not existing before.",
        sentences: [
            "The company launched an {blank} {base} product line.",
            "This is an {blank} {base} approach to the problem.",
            "They built an {blank} {base} system from scratch.",
            "She started an {blank} {base} career at age forty."
        ],
        options: ["entirely", "slightly", "barely", "vaguely"]
    },
    {
        collocate: "rapidly", base: "growing", phrase: "rapidly growing", type: "adv-adj", topic: "money", level: "middle",
        meaning: "Increasing or expanding at a fast rate.",
        sentences: [
            "It is a {blank} {base} market with huge potential.",
            "The company serves a {blank} {base} customer base.",
            "The {blank} {base} population puts pressure on resources.",
            "They operate in a {blank} {base} sector of the economy."
        ],
        options: ["rapidly", "barely", "scarcely", "vaguely"]
    },
    {
        collocate: "moderately", base: "successful", phrase: "moderately successful", type: "adv-adj", topic: "work", level: "middle",
        meaning: "Achieving a fair but not outstanding level of success.",
        sentences: [
            "The restaurant has been {blank} {base} since it opened.",
            "The campaign was {blank} {base} in reaching young voters.",
            "His first book was {blank} {base} with critics.",
            "The treatment has been {blank} {base} for most patients."
        ],
        options: ["moderately", "utterly", "fiercely", "profoundly"]
    },
    {
        collocate: "scarcely", base: "believable", phrase: "scarcely believable", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Almost impossible to believe; astonishing.",
        sentences: [
            "The story he told was {blank} {base}.",
            "Her transformation was {blank} {base} in just six months.",
            "The low price was {blank} {base} for such quality.",
            "The speed of the recovery was {blank} {base}."
        ],
        options: ["scarcely", "firmly", "keenly", "broadly"]
    },
    {
        collocate: "explicitly", base: "stated", phrase: "explicitly stated", type: "adv-adj", topic: "education", level: "college",
        meaning: "Clearly and directly expressed without ambiguity.",
        sentences: [
            "The rules are {blank} {base} in the handbook.",
            "The contract {blank} {base} the terms of payment.",
            "It was {blank} {base} that no extensions would be given.",
            "The policy is {blank} {base} on the company website."
        ],
        options: ["explicitly", "vaguely", "barely", "roughly"]
    },
    {
        collocate: "steadily", base: "increasing", phrase: "steadily increasing", type: "adv-adj", topic: "money", level: "middle",
        meaning: "Growing at a constant and continuous rate.",
        sentences: [
            "House prices have been {blank} {base} for five years.",
            "The demand for electric cars is {blank} {base}.",
            "The number of applicants has been {blank} {base}.",
            "Inflation has been {blank} {base} since last year."
        ],
        options: ["steadily", "barely", "scarcely", "vaguely"]
    },
    {
        collocate: "inherently", base: "dangerous", phrase: "inherently dangerous", type: "adv-adj", topic: "health", level: "college",
        meaning: "Dangerous by its very nature, not by circumstance.",
        sentences: [
            "Some extreme sports are {blank} {base}.",
            "Working with chemicals is {blank} {base} without proper training.",
            "The procedure is not {blank} {base} if done correctly.",
            "Driving at high speed is {blank} {base} in bad weather."
        ],
        options: ["inherently", "slightly", "moderately", "vaguely"]
    },
    {
        collocate: "tacitly", base: "approved", phrase: "tacitly approved", type: "adv-adj", topic: "work", level: "professional",
        meaning: "Accepted or agreed upon without being openly stated.",
        sentences: [
            "The plan was {blank} {base} by senior management.",
            "The arrangement was {blank} {base} by both parties.",
            "His absence was {blank} {base} by the supervisor.",
            "The practice has been {blank} {base} for years."
        ],
        options: ["tacitly", "explicitly", "broadly", "barely"]
    },
    {
        collocate: "abundantly", base: "clear", phrase: "abundantly clear", type: "adv-adj", topic: "work", level: "high",
        meaning: "Extremely obvious and beyond any doubt.",
        sentences: [
            "The CEO made it {blank} {base} that layoffs were coming.",
            "It was {blank} {base} that the project needed more funding.",
            "She made her position {blank} {base} during the meeting.",
            "The evidence makes it {blank} {base} who is responsible."
        ],
        options: ["abundantly", "vaguely", "slightly", "barely"]
    },
    {
        collocate: "woefully", base: "unprepared", phrase: "woefully unprepared", type: "adv-adj", topic: "education", level: "high",
        meaning: "Extremely and regrettably not ready for something.",
        sentences: [
            "The students were {blank} {base} for the exam.",
            "The city was {blank} {base} for the hurricane.",
            "He felt {blank} {base} for his first day at work.",
            "The team was {blank} {base} for such fierce competition."
        ],
        options: ["woefully", "slightly", "moderately", "vaguely"]
    },
    {
        collocate: "fiercely", base: "independent", phrase: "fiercely independent", type: "adv-adj", topic: "people", level: "high",
        meaning: "Strongly determined to be self-reliant and free.",
        sentences: [
            "She has always been {blank} {base} since childhood.",
            "The region is known for its {blank} {base} people.",
            "He is a {blank} {base} thinker who questions everything.",
            "The newspaper has remained {blank} {base} of political parties."
        ],
        options: ["fiercely", "slightly", "vaguely", "moderately"]
    },
    {
        collocate: "roughly", base: "equivalent", phrase: "roughly equivalent", type: "adv-adj", topic: "education", level: "high",
        meaning: "Approximately equal in value, amount, or meaning.",
        sentences: [
            "The two qualifications are {blank} {base} in most countries.",
            "One mile is {blank} {base} to 1.6 kilometers.",
            "The salaries offered by both firms are {blank} {base}.",
            "The workload is {blank} {base} across all departments."
        ],
        options: ["roughly", "fiercely", "utterly", "deeply"]
    },
    {
        collocate: "pleasantly", base: "surprised", phrase: "pleasantly surprised", type: "adv-adj", topic: "daily", level: "elementary",
        meaning: "Feeling surprised in a positive and welcome way.",
        sentences: [
            "I was {blank} {base} by the quality of the food.",
            "She was {blank} {base} to receive flowers on her birthday.",
            "We were {blank} {base} at how friendly the staff were.",
            "He was {blank} {base} by the generous tip."
        ],
        options: ["pleasantly", "bitterly", "fiercely", "harshly"]
    },
    {
        collocate: "equally", base: "important", phrase: "equally important", type: "adv-adj", topic: "education", level: "middle",
        meaning: "Having the same level of significance or value.",
        sentences: [
            "Diet and exercise are {blank} {base} for good health.",
            "Both reading and writing skills are {blank} {base}.",
            "Speed and accuracy are {blank} {base} in this job.",
            "Theory and practice are {blank} {base} in education."
        ],
        options: ["equally", "barely", "scarcely", "vaguely"]
    },
    {
        collocate: "blissfully", base: "ignorant", phrase: "blissfully ignorant", type: "adv-adj", topic: "people", level: "high",
        meaning: "Happily unaware of something unpleasant or serious.",
        sentences: [
            "He was {blank} {base} of the problems at work.",
            "The tourists were {blank} {base} of the local customs.",
            "She remained {blank} {base} of the danger around her.",
            "They were {blank} {base} of the financial trouble ahead."
        ],
        options: ["blissfully", "fiercely", "firmly", "keenly"]
    },
    {
        collocate: "gravely", base: "concerned", phrase: "gravely concerned", type: "adv-adj", topic: "health", level: "high",
        meaning: "Very seriously worried about a situation.",
        sentences: [
            "Doctors are {blank} {base} about the patient's condition.",
            "The authorities are {blank} {base} about water quality.",
            "Parents were {blank} {base} over the school closures.",
            "Experts are {blank} {base} about the economic outlook."
        ],
        options: ["gravely", "mildly", "slightly", "vaguely"]
    },
    {
        collocate: "genuinely", base: "interested", phrase: "genuinely interested", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Truly and sincerely curious about something.",
        sentences: [
            "She seemed {blank} {base} in learning about our culture.",
            "He is {blank} {base} in renewable energy technology.",
            "The interviewer was {blank} {base} in my experience.",
            "Students who are {blank} {base} tend to learn faster."
        ],
        options: ["genuinely", "barely", "scarcely", "vaguely"]
    },
    {
        collocate: "barely", base: "adequate", phrase: "barely adequate", type: "adv-adj", topic: "work", level: "middle",
        meaning: "Only just sufficient and not really satisfactory.",
        sentences: [
            "The budget was {blank} {base} for the project scope.",
            "His performance was {blank} {base} to pass the course.",
            "The facilities were {blank} {base} for the number of guests.",
            "The explanation was {blank} {base} to answer my question."
        ],
        options: ["barely", "highly", "enormously", "immensely"]
    },
    {
        collocate: "substantially", base: "different", phrase: "substantially different", type: "adv-adj", topic: "education", level: "high",
        meaning: "Different to a large and meaningful extent.",
        sentences: [
            "The revised plan is {blank} {base} from the original.",
            "Their conclusions are {blank} {base} from ours.",
            "The two versions of the story are {blank} {base}.",
            "The cost estimate is {blank} {base} from what we expected."
        ],
        options: ["substantially", "barely", "vaguely", "slightly"]
    },
    {
        collocate: "virtually", base: "identical", phrase: "virtually identical", type: "adv-adj", topic: "technology", level: "high",
        meaning: "So similar as to be almost exactly the same.",
        sentences: [
            "The two products are {blank} {base} in quality.",
            "Their test results were {blank} {base}.",
            "The copies looked {blank} {base} to the originals.",
            "Both plans are {blank} {base} in scope and cost."
        ],
        options: ["virtually", "slightly", "roughly", "moderately"]
    },
    {
        collocate: "sorely", base: "missed", phrase: "sorely missed", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Greatly and painfully missed after departure or loss.",
        sentences: [
            "She will be {blank} {base} by all her colleagues.",
            "His humor is {blank} {base} since he retired.",
            "The old café is {blank} {base} by the neighborhood.",
            "Her leadership has been {blank} {base} by the team."
        ],
        options: ["sorely", "barely", "slightly", "vaguely"]
    },
    {
        collocate: "remarkably", base: "well", phrase: "remarkably well", type: "adv-adj", topic: "health", level: "middle",
        meaning: "Surprisingly good or effective beyond expectations.",
        sentences: [
            "The patient recovered {blank} {base} after the surgery.",
            "The old car still runs {blank} {base}.",
            "She handled the crisis {blank} {base}.",
            "The children adapted {blank} {base} to the new school."
        ],
        options: ["remarkably", "barely", "slightly", "scarcely"]
    },
    {
        collocate: "simply", base: "amazing", phrase: "simply amazing", type: "adv-adj", topic: "travel", level: "elementary",
        meaning: "Truly wonderful and impressive without exaggeration.",
        sentences: [
            "The view from the mountain was {blank} {base}.",
            "The performance last night was {blank} {base}.",
            "The food at that restaurant is {blank} {base}.",
            "Her talent for painting is {blank} {base}."
        ],
        options: ["simply", "roughly", "largely", "broadly"]
    },
    {
        collocate: "extremely", base: "grateful", phrase: "extremely grateful", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Feeling a very high degree of thankfulness.",
        sentences: [
            "We are {blank} {base} for your generous donation.",
            "She was {blank} {base} to the doctor who saved her life.",
            "I am {blank} {base} for the opportunity to work here.",
            "They were {blank} {base} for the community support."
        ],
        options: ["extremely", "vaguely", "barely", "scarcely"]
    },
    {
        collocate: "immensely", base: "talented", phrase: "immensely talented", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Possessing a very great level of natural ability.",
        sentences: [
            "She is an {blank} {base} young musician.",
            "The team is made up of {blank} {base} individuals.",
            "He is {blank} {base} in both art and science.",
            "The {blank} {base} chef won multiple awards."
        ],
        options: ["immensely", "barely", "slightly", "vaguely"]
    },
    {
        collocate: "widely", base: "available", phrase: "widely available", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Obtainable in many places or from many sources.",
        sentences: [
            "The vaccine is now {blank} {base} in most countries.",
            "The information is {blank} {base} on the internet.",
            "Organic food is becoming more {blank} {base}.",
            "The product is {blank} {base} in major supermarkets."
        ],
        options: ["widely", "barely", "scarcely", "narrowly"]
    },
    {
        collocate: "utterly", base: "devastated", phrase: "utterly devastated", type: "adv-adj", topic: "people", level: "high",
        meaning: "Completely overwhelmed by grief or shock.",
        sentences: [
            "The family was {blank} {base} by the sudden loss.",
            "She was {blank} {base} when she heard the news.",
            "The community was {blank} {base} after the disaster.",
            "He was {blank} {base} by the betrayal of his friend."
        ],
        options: ["utterly", "mildly", "slightly", "vaguely"]
    },
    {
        collocate: "widely", base: "regarded", phrase: "widely regarded", type: "adv-adj", topic: "education", level: "high",
        meaning: "Considered or viewed by many people in a certain way.",
        sentences: [
            "She is {blank} {base} as one of the best in her field.",
            "The university is {blank} {base} as a top institution.",
            "The book is {blank} {base} as a modern classic.",
            "He is {blank} {base} as an authority on the subject."
        ],
        options: ["widely", "barely", "slightly", "narrowly"]
    },
    {
        collocate: "partly", base: "responsible", phrase: "partly responsible", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "Sharing some but not all of the blame or credit.",
        sentences: [
            "The driver was {blank} {base} for the accident.",
            "Bad weather was {blank} {base} for the flight delay.",
            "Both sides were {blank} {base} for the disagreement.",
            "Poor management was {blank} {base} for the losses."
        ],
        options: ["partly", "utterly", "entirely", "fiercely"]
    },
    {
        collocate: "strongly", base: "opposed", phrase: "strongly opposed", type: "adv-adj", topic: "people", level: "middle",
        meaning: "Very much against something; in firm disagreement.",
        sentences: [
            "Many residents are {blank} {base} to the new highway.",
            "She is {blank} {base} to any form of censorship.",
            "The union is {blank} {base} to the proposed cuts.",
            "He was {blank} {base} to changing the company name."
        ],
        options: ["strongly", "slightly", "vaguely", "barely"]
    },
    {
        collocate: "desperately", base: "needed", phrase: "desperately needed", type: "adv-adj", topic: "health", level: "middle",
        meaning: "Required with extreme urgency.",
        sentences: [
            "The hospital {blank} {base} more medical supplies.",
            "Funding is {blank} {base} for the disaster relief effort.",
            "The school {blank} {base} new textbooks for students.",
            "Rain is {blank} {base} after months of drought."
        ],
        options: ["desperately", "slightly", "vaguely", "moderately"]
    },
    {
        collocate: "heavily", base: "regulated", phrase: "heavily regulated", type: "adv-adj", topic: "money", level: "college",
        meaning: "Subject to many strict rules and government oversight.",
        sentences: [
            "The banking industry is {blank} {base} in most countries.",
            "Food production is {blank} {base} for public safety.",
            "The pharmaceutical sector is {blank} {base} by law.",
            "Advertising to children is {blank} {base} in Europe."
        ],
        options: ["heavily", "slightly", "barely", "vaguely"]
    },
    {
        collocate: "remarkably", base: "consistent", phrase: "remarkably consistent", type: "adv-adj", topic: "work", level: "high",
        meaning: "Staying the same to a surprising and impressive degree.",
        sentences: [
            "Her performance has been {blank} {base} over the years.",
            "The quality of the product is {blank} {base} across batches.",
            "Test scores were {blank} {base} among all age groups.",
            "The team has delivered {blank} {base} results this quarter."
        ],
        options: ["remarkably", "barely", "vaguely", "slightly"]
    },
    {
        collocate: "predominantly", base: "rural", phrase: "predominantly rural", type: "adv-adj", topic: "travel", level: "high",
        meaning: "Mostly consisting of countryside rather than urban areas.",
        sentences: [
            "The region is {blank} {base} with few large towns.",
            "The country remains {blank} {base} despite recent growth.",
            "The district is {blank} {base} and depends on agriculture.",
            "The area was {blank} {base} until the factory was built."
        ],
        options: ["predominantly", "barely", "slightly", "scarcely"]
    },
    {
        collocate: "refreshingly", base: "honest", phrase: "refreshingly honest", type: "adv-adj", topic: "people", level: "high",
        meaning: "Pleasantly and unusually truthful and direct.",
        sentences: [
            "Her autobiography is {blank} {base} about her mistakes.",
            "The politician was {blank} {base} during the interview.",
            "His {blank} {base} approach won the trust of voters.",
            "It was {blank} {base} to hear someone speak so openly."
        ],
        options: ["refreshingly", "barely", "vaguely", "roughly"]
    },
    {
        collocate: "bus", base: "service", phrase: "bus service", type: "noun-noun", topic: "travel", level: "elementary",
        meaning: "A system of buses operating on regular routes.",
        sentences: [
            "The {blank} {base} in rural areas is very limited.",
            "A reliable {blank} {base} is essential for commuters.",
            "The council plans to improve the local {blank} {base}.",
            "The {blank} {base} was suspended due to the snowstorm."
        ],
        options: ["bus", "car", "road", "transit"]
    },
    {
        collocate: "rail", base: "network", phrase: "rail network", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "An interconnected system of railway lines.",
        sentences: [
            "The country has invested heavily in its {blank} {base}.",
            "Delays across the {blank} {base} affected thousands of commuters.",
            "The {blank} {base} connects all major cities.",
            "Expanding the {blank} {base} would reduce road congestion."
        ],
        options: ["rail", "train", "track", "line"]
    },
    {
        collocate: "cycle", base: "lane", phrase: "cycle lane", type: "noun-noun", topic: "travel", level: "elementary",
        meaning: "A dedicated section of road for bicycles.",
        sentences: [
            "The city built new {blank} {base}s to encourage cycling.",
            "Drivers must not park in the {blank} {base}.",
            "She felt safer riding in the designated {blank} {base}.",
            "More {blank} {base}s would reduce traffic and pollution."
        ],
        options: ["cycle", "bike", "wheel", "pedal"]
    },
    {
        collocate: "toll", base: "road", phrase: "toll road", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "A road that drivers must pay a fee to use.",
        sentences: [
            "The {blank} {base} costs five dollars each way.",
            "Many drivers avoid the {blank} {base} to save money.",
            "The new {blank} {base} significantly reduced travel times.",
            "{blank} {base}s help fund motorway maintenance."
        ],
        options: ["toll", "tax", "fee", "charge"]
    },
    {
        collocate: "commuter", base: "town", phrase: "commuter town", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "A town where many residents travel to a nearby city for work.",
        sentences: [
            "The village has become a {blank} {base} for London workers.",
            "House prices in {blank} {base}s are rising fast.",
            "Living in a {blank} {base} means a long daily journey.",
            "The {blank} {base} has grown rapidly over the past decade."
        ],
        options: ["commuter", "worker", "travel", "suburb"]
    },
    {
        collocate: "season", base: "ticket", phrase: "season ticket", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "A ticket that allows unlimited travel or entry for a set period.",
        sentences: [
            "A {blank} {base} for the train costs thousands of pounds a year.",
            "She bought a {blank} {base} to save money on her commute.",
            "Football fans queue up early to renew their {blank} {base}s.",
            "The price of {blank} {base}s has gone up again."
        ],
        options: ["season", "annual", "year", "period"]
    },
    {
        collocate: "congestion", base: "charge", phrase: "congestion charge", type: "noun-noun", topic: "travel", level: "high",
        meaning: "A fee charged to drivers entering a busy city zone to reduce traffic.",
        sentences: [
            "London introduced a {blank} {base} in 2003.",
            "The {blank} {base} has reduced traffic in the city centre.",
            "Drivers must pay the {blank} {base} during peak hours.",
            "Critics say the {blank} {base} unfairly penalises low-income drivers."
        ],
        options: ["congestion", "traffic", "road", "city"]
    },
    {
        collocate: "neighbourhood", base: "watch", phrase: "neighbourhood watch", type: "noun-noun", topic: "daily", level: "middle",
        meaning: "A community programme where residents help prevent local crime.",
        sentences: [
            "The {blank} {base} group meets every month.",
            "Since the {blank} {base} started, burglaries have decreased.",
            "She volunteers for the local {blank} {base} scheme.",
            "The police encourage residents to join {blank} {base} programmes."
        ],
        options: ["neighbourhood", "community", "street", "area"]
    },
    {
        collocate: "food", base: "mile", phrase: "food miles", type: "noun-noun", topic: "food", level: "high",
        meaning: "The distance food is transported from producer to consumer.",
        sentences: [
            "Buying local produce helps reduce {blank} {base}s.",
            "High {blank} {base}s contribute to carbon emissions.",
            "Consumers are becoming more aware of {blank} {base}s.",
            "The supermarket displays {blank} {base} information on labels."
        ],
        options: ["food", "meal", "farm", "product"]
    },
    {
        collocate: "wind", base: "farm", phrase: "wind farm", type: "noun-noun", topic: "weather", level: "middle",
        meaning: "A group of wind turbines used to generate electricity.",
        sentences: [
            "The offshore {blank} {base} generates power for 50,000 homes.",
            "Plans for a new {blank} {base} were met with local opposition.",
            "The {blank} {base} is visible from the coast on clear days.",
            "More {blank} {base}s are needed to meet renewable energy targets."
        ],
        options: ["wind", "air", "storm", "breeze"]
    },
    {
        collocate: "energy", base: "source", phrase: "energy source", type: "noun-noun", topic: "technology", level: "middle",
        meaning: "A material or system from which power can be obtained.",
        sentences: [
            "Solar power is a clean and renewable {blank} {base}.",
            "Countries are diversifying their {blank} {base}s.",
            "Fossil fuels remain the world's primary {blank} {base}.",
            "Research into new {blank} {base}s continues to grow."
        ],
        options: ["energy", "power", "fuel", "force"]
    },
    {
        collocate: "weather", base: "pattern", phrase: "weather pattern", type: "noun-noun", topic: "weather", level: "middle",
        meaning: "A recurring set of atmospheric conditions in a region.",
        sentences: [
            "Climate change is disrupting normal {blank} {base}s.",
            "Scientists study {blank} {base}s to predict future droughts.",
            "Unusual {blank} {base}s have caused concern among farmers.",
            "The {blank} {base} this year has been unpredictable."
        ],
        options: ["weather", "climate", "storm", "cloud"]
    },
    {
        collocate: "credit", base: "limit", phrase: "credit limit", type: "noun-noun", topic: "money", level: "middle",
        meaning: "The maximum amount of money a bank allows you to borrow on a card.",
        sentences: [
            "She exceeded her {blank} {base} and was charged a fee.",
            "The bank raised my {blank} {base} without asking.",
            "It's wise to stay well below your {blank} {base}.",
            "He requested a higher {blank} {base} to cover travel expenses."
        ],
        options: ["credit", "card", "bank", "money"]
    },
    {
        collocate: "identity", base: "theft", phrase: "identity theft", type: "noun-noun", topic: "technology", level: "middle",
        meaning: "The fraudulent use of someone's personal information.",
        sentences: [
            "{blank} {base} is one of the fastest-growing crimes.",
            "She became a victim of {blank} {base} after a data breach.",
            "Shredding documents can help protect you from {blank} {base}.",
            "Online {blank} {base} costs consumers billions each year."
        ],
        options: ["identity", "personal", "name", "data"]
    },
    {
        collocate: "interest", base: "rate", phrase: "interest rate", type: "noun-noun", topic: "money", level: "middle",
        meaning: "The percentage charged for borrowing money or earned on savings.",
        sentences: [
            "The central bank raised {blank} {base}s to control inflation.",
            "Low {blank} {base}s encourage people to borrow more.",
            "Mortgage {blank} {base}s have increased for the third month.",
            "She chose the savings account with the highest {blank} {base}."
        ],
        options: ["interest", "money", "bank", "loan"]
    },
    {
        collocate: "vehicle", base: "emission", phrase: "vehicle emissions", type: "noun-noun", topic: "weather", level: "high",
        meaning: "The gases and pollutants released by cars and other motor vehicles.",
        sentences: [
            "New regulations aim to reduce {blank} {base}s by 30%.",
            "{blank} {base}s are a major contributor to air pollution.",
            "Electric cars produce zero direct {blank} {base}s.",
            "The government is tightening standards on {blank} {base}s."
        ],
        options: ["vehicle", "car", "motor", "engine"]
    },
    {
        collocate: "transport", base: "link", phrase: "transport links", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "Connections between places provided by public transport systems.",
        sentences: [
            "Good {blank} {base}s are vital for economic growth.",
            "The area has excellent {blank} {base}s to the city centre.",
            "Improving {blank} {base}s would benefit rural communities.",
            "The new housing estate lacks adequate {blank} {base}s."
        ],
        options: ["transport", "travel", "transit", "traffic"]
    },
    {
        collocate: "replacement", base: "bus", phrase: "replacement bus", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "A bus that runs instead of a train when the rail service is disrupted.",
        sentences: [
            "A {blank} {base} service is running due to track maintenance.",
            "Passengers were directed to the {blank} {base} outside the station.",
            "The {blank} {base} took twice as long as the train.",
            "Check whether a {blank} {base} service is in operation before you travel."
        ],
        options: ["replacement", "substitute", "backup", "reserve"]
    },
    {
        collocate: "fare", base: "rise", phrase: "fare rise", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "An increase in the cost of public transport tickets.",
        sentences: [
            "Commuters protested against the annual {blank} {base}.",
            "The latest {blank} {base} has made train travel even more expensive.",
            "A {blank} {base} of 5% was announced for next year.",
            "Passengers are demanding better services to justify the {blank} {base}."
        ],
        options: ["fare", "price", "cost", "ticket"]
    },
    {
        collocate: "road", base: "closure", phrase: "road closure", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "The temporary shutting of a road to traffic.",
        sentences: [
            "A {blank} {base} on the high street caused major delays.",
            "The council issued a notice about the planned {blank} {base}.",
            "{blank} {base}s due to flooding affected the entire area.",
            "Check for {blank} {base}s before setting off on your journey."
        ],
        options: ["road", "street", "route", "lane"]
    },
    {
        collocate: "park-and-ride", base: "scheme", phrase: "park-and-ride scheme", type: "noun-noun", topic: "travel", level: "high",
        meaning: "A system where drivers park at a suburban site and take a bus to the centre.",
        sentences: [
            "The {blank} {base} has reduced traffic in the town centre.",
            "Using the {blank} {base} is cheaper than city-centre parking.",
            "The council launched a new {blank} {base} on the outskirts.",
            "The {blank} {base} operates every 15 minutes during peak times."
        ],
        options: ["park-and-ride", "park-and-walk", "drive-and-ride", "stop-and-go"]
    },
    {
        collocate: "power", base: "cut", phrase: "power cut", type: "noun-noun", topic: "technology", level: "elementary",
        meaning: "A sudden loss of electrical power in an area.",
        sentences: [
            "The storm caused a {blank} {base} that lasted three hours.",
            "We had to use candles during the {blank} {base}.",
            "The {blank} {base} disrupted businesses across the city.",
            "Hospitals have generators to cope with a {blank} {base}."
        ],
        options: ["power", "energy", "light", "electric"]
    },
    {
        collocate: "traffic", base: "gridlock", phrase: "traffic gridlock", type: "noun-noun", topic: "travel", level: "high",
        meaning: "A situation where traffic is completely unable to move.",
        sentences: [
            "The accident caused total {blank} {base} on the motorway.",
            "{blank} {base} during the holidays is almost unavoidable.",
            "The city centre was brought to a {blank} {base} by the protest.",
            "Better public transport could help prevent {blank} {base}."
        ],
        options: ["traffic", "road", "car", "vehicle"]
    },
    {
        collocate: "commuter", base: "route", phrase: "commuter route", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "A road or rail line regularly used by people travelling to work.",
        sentences: [
            "The busy {blank} {base} is congested every morning.",
            "Roadworks on the main {blank} {base} will cause delays.",
            "A new cycle path has been added along the {blank} {base}.",
            "The {blank} {base} connects the suburbs to the business district."
        ],
        options: ["commuter", "worker", "travel", "daily"]
    },
    {
        collocate: "cost-cutting", base: "measure", phrase: "cost-cutting measures", type: "noun-noun", topic: "money", level: "high",
        meaning: "Actions taken to reduce expenses within an organization.",
        sentences: [
            "The company introduced {blank} {base}s to avoid bankruptcy.",
            "{blank} {base}s included reducing staff and freezing salaries.",
            "The hospital opposed further {blank} {base}s that could harm patient care.",
            "Aggressive {blank} {base}s saved the firm millions last year."
        ],
        options: ["cost-cutting", "money-saving", "budget-reducing", "expense-trimming"]
    },
    {
        collocate: "credit-card", base: "fraud", phrase: "credit-card fraud", type: "noun-noun", topic: "money", level: "middle",
        meaning: "The illegal use of someone's credit card to make purchases or steal money.",
        sentences: [
            "She reported the {blank} {base} to her bank immediately.",
            "{blank} {base} costs financial institutions billions annually.",
            "Online shoppers should take steps to prevent {blank} {base}.",
            "He was arrested for a series of {blank} {base} offences."
        ],
        options: ["credit-card", "bank-card", "debit-card", "money-card"]
    },
    {
        collocate: "car-sharing", base: "programme", phrase: "car-sharing programme", type: "noun-noun", topic: "travel", level: "high",
        meaning: "An organized system where people share vehicles for regular journeys.",
        sentences: [
            "The company launched a {blank} {base} to reduce parking demand.",
            "Joining a {blank} {base} can save commuters money on fuel.",
            "The university's {blank} {base} has attracted hundreds of participants.",
            "A workplace {blank} {base} also helps lower carbon emissions."
        ],
        options: ["car-sharing", "car-pooling", "ride-sharing", "lift-giving"]
    },
    {
        collocate: "flat-screen", base: "TV", phrase: "flat-screen TV", type: "noun-noun", topic: "technology", level: "elementary",
        meaning: "A television with a thin, flat display panel.",
        sentences: [
            "They bought a new {blank} {base} for the living room.",
            "{blank} {base}s have become much more affordable over the years.",
            "The hotel room came with a large {blank} {base}.",
            "He mounted the {blank} {base} on the wall to save space."
        ],
        options: ["flat-screen", "wide-screen", "big-screen", "full-screen"]
    },
    {
        collocate: "Wi-Fi", base: "hotspot", phrase: "Wi-Fi hotspot", type: "noun-noun", topic: "technology", level: "elementary",
        meaning: "A public location where wireless internet access is available.",
        sentences: [
            "The café doubles as a popular {blank} {base} for freelancers.",
            "You can find a free {blank} {base} at the library.",
            "The airport offers {blank} {base}s in every terminal.",
            "She used her phone as a {blank} {base} during the trip."
        ],
        options: ["Wi-Fi", "internet", "web", "data"]
    },
    {
        collocate: "reach", base: "decision", phrase: "reach a decision", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To arrive at a decision after careful thought or discussion.",
        sentences: [
            "After hours of debate, the committee finally {blank} a {base}.",
            "We need to {blank} a {base} on the budget by Friday.",
            "It took the jury three days to {blank} a {base}.",
            "Have you {blank} a {base} about the job offer yet?"
        ],
        options: ["reach", "grab", "pull", "fetch"]
    },
    {
        collocate: "draw up", base: "schedule", phrase: "draw up a schedule", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To create a detailed plan or timetable for activities.",
        sentences: [
            "The manager asked us to {blank} a {base} for the project.",
            "Let's {blank} a {base} so everyone knows their responsibilities.",
            "She {blank} a {base} that included every milestone.",
            "We should {blank} a realistic {base} before starting the work."
        ],
        options: ["draw up", "pull up", "set up", "pick up"]
    },
    {
        collocate: "stick to", base: "schedule", phrase: "stick to a schedule", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To follow a plan or timetable without deviating from it.",
        sentences: [
            "It's important to {blank} the {base} if we want to finish on time.",
            "She always manages to {blank} her {base} no matter what happens.",
            "The team struggled to {blank} the {base} due to unexpected delays.",
            "If you {blank} the {base}, you'll have plenty of free time later."
        ],
        options: ["stick to", "hold to", "keep to", "stay to"]
    },
    {
        collocate: "implement", base: "plan", phrase: "implement a plan", type: "verb-noun", topic: "work", level: "high",
        meaning: "To put a plan into action or carry it out.",
        sentences: [
            "The government will {blank} the {base} starting next month.",
            "It's one thing to design a strategy, but another to {blank} the {base}.",
            "We need more funding to {blank} this {base} effectively.",
            "The director decided to {blank} the {base} immediately."
        ],
        options: ["implement", "install", "enforce", "apply"]
    },
    {
        collocate: "launch", base: "scheme", phrase: "launch a scheme", type: "verb-noun", topic: "work", level: "high",
        meaning: "To start or introduce a new program or initiative.",
        sentences: [
            "The council plans to {blank} a new {base} to help young entrepreneurs.",
            "They {blank} the recycling {base} last spring.",
            "The charity will {blank} a {base} to provide free meals.",
            "We're going to {blank} a mentorship {base} for new employees."
        ],
        options: ["launch", "throw", "open", "begin"]
    },
    {
        collocate: "drum up", base: "support", phrase: "drum up support", type: "verb-noun", topic: "people", level: "high",
        meaning: "To actively try to gain support or enthusiasm from others.",
        sentences: [
            "The candidate spent weeks trying to {blank} {base} for her campaign.",
            "We need to {blank} more {base} if we want the project approved.",
            "He went door to door to {blank} {base} from the local community.",
            "The organization used social media to {blank} {base} for the cause."
        ],
        options: ["drum up", "beat up", "stir up", "shake up"]
    },
    {
        collocate: "put", base: "ideas into practice", phrase: "put ideas into practice", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To apply or execute ideas in a real-world situation.",
        sentences: [
            "It's time to {blank} our {base} and see what works.",
            "The team was eager to {blank} their {base}.",
            "She finally got the chance to {blank} her {base}.",
            "Managers should encourage employees to {blank} creative {base}."
        ],
        options: ["put", "set", "place", "lay"]
    },
    {
        collocate: "do", base: "groundwork", phrase: "do the groundwork", type: "verb-noun", topic: "work", level: "high",
        meaning: "To carry out the essential preliminary work needed for a project.",
        sentences: [
            "Before launching the product, we need to {blank} the {base}.",
            "She {blank} all the {base} for the conference last year.",
            "If you {blank} the {base} properly, the rest will fall into place.",
            "The researchers {blank} the {base} over several months."
        ],
        options: ["do", "make", "build", "set"]
    },
    {
        collocate: "develop", base: "product range", phrase: "develop a product range", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To create and expand a selection of products for sale.",
        sentences: [
            "The company plans to {blank} a new {base} targeting teenagers.",
            "We need to {blank} our {base} to stay competitive.",
            "It took years to {blank} the current {base}.",
            "They hired a consultant to help {blank} a premium {base}."
        ],
        options: ["develop", "build", "grow", "raise"]
    },
    {
        collocate: "handle", base: "complaint", phrase: "handle a complaint", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To deal with a complaint in an appropriate and effective way.",
        sentences: [
            "The manager was trained to {blank} any {base} from customers.",
            "She knows how to {blank} a {base} without losing her composure.",
            "It's important to {blank} every {base} seriously.",
            "The helpdesk failed to {blank} my {base} properly."
        ],
        options: ["handle", "manage", "treat", "process"]
    },
    {
        collocate: "give", base: "refund", phrase: "give a full refund", type: "verb-noun", topic: "money", level: "elementary",
        meaning: "To return money to a customer for a product or service.",
        sentences: [
            "The store agreed to {blank} me a full {base}.",
            "If you're not satisfied, we'll {blank} you a complete {base}.",
            "They refused to {blank} a {base} without the receipt.",
            "The airline promised to {blank} a {base} for the cancelled flight."
        ],
        options: ["give", "make", "do", "pay"]
    },
    {
        collocate: "meet", base: "commitments", phrase: "meet commitments", type: "verb-noun", topic: "work", level: "high",
        meaning: "To fulfill promises or obligations that have been made.",
        sentences: [
            "The company must {blank} its {base} to shareholders.",
            "She always {blank} her {base} on time.",
            "We're struggling to {blank} all our financial {base}.",
            "A good leader {blank} {base} no matter how difficult they are."
        ],
        options: ["meet", "reach", "fill", "complete"]
    },
    {
        collocate: "win", base: "scholarship", phrase: "win a scholarship", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To be awarded financial support for studying based on merit.",
        sentences: [
            "She worked incredibly hard to {blank} a {base} to Harvard.",
            "Only the top students will {blank} a {base} this year.",
            "He managed to {blank} a full {base} for his PhD program.",
            "If you {blank} the {base}, your tuition will be covered entirely."
        ],
        options: ["win", "gain", "earn", "take"]
    },
    {
        collocate: "attend", base: "school", phrase: "attend school", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To go to school regularly as a student.",
        sentences: [
            "Children in this country must {blank} {base} from age six.",
            "She continued to {blank} {base} despite her illness.",
            "Many children in rural areas cannot {blank} {base}.",
            "He didn't {blank} {base} yesterday because he was sick."
        ],
        options: ["attend", "go", "join", "enter"]
    },
    {
        collocate: "apply to", base: "university", phrase: "apply to a university", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To formally request admission to a university.",
        sentences: [
            "She decided to {blank} a top {base} in London.",
            "You should {blank} more than one {base} to increase your chances.",
            "He plans to {blank} the {base} his parents attended.",
            "Thousands of students {blank} this {base} every year."
        ],
        options: ["apply to", "enter to", "register to", "submit to"]
    },
    {
        collocate: "secure", base: "place", phrase: "secure a place", type: "verb-noun", topic: "education", level: "high",
        meaning: "To successfully obtain a position or spot, especially at a school or on a course.",
        sentences: [
            "She managed to {blank} a {base} at the medical school.",
            "Competition is fierce, so you need top grades to {blank} a {base}.",
            "He was relieved to finally {blank} a {base} on the program.",
            "Only thirty students will {blank} a {base} this semester."
        ],
        options: ["secure", "lock", "grab", "fix"]
    },
    {
        collocate: "sign up for", base: "course", phrase: "sign up for a course", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To register or enroll in a course of study.",
        sentences: [
            "I decided to {blank} an online {base} in web design.",
            "You can {blank} the {base} on the university website.",
            "She {blank} a photography {base} at the community center.",
            "Over a hundred people {blank} the {base} within the first week."
        ],
        options: ["sign up for", "write up for", "put up for", "log up for"]
    },
    {
        collocate: "meet", base: "entry requirements", phrase: "meet the entry requirements", type: "verb-noun", topic: "education", level: "high",
        meaning: "To satisfy the necessary qualifications for admission.",
        sentences: [
            "You must {blank} the {base} before you can enroll.",
            "Not all applicants {blank} the strict {base} of this program.",
            "She studied hard to {blank} the {base} for law school.",
            "Students who don't {blank} the {base} will be rejected."
        ],
        options: ["meet", "reach", "fill", "pass"]
    },
    {
        collocate: "achieve", base: "full marks", phrase: "achieve full marks", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To get the highest possible score on a test or assignment.",
        sentences: [
            "She was thrilled to {blank} {base} on her final exam.",
            "Very few students manage to {blank} {base} in this subject.",
            "He studied all night and {blank} {base} on the quiz.",
            "It's rare to {blank} {base} in an essay-based assessment."
        ],
        options: ["achieve", "reach", "make", "win"]
    },
    {
        collocate: "show", base: "improvement", phrase: "show a marked improvement", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To display noticeable progress or advancement.",
        sentences: [
            "The student {blank} a marked {base} in her writing skills.",
            "His grades {blank} significant {base} this semester.",
            "The team has {blank} steady {base} over the past few months.",
            "After the tutoring sessions, she began to {blank} real {base}."
        ],
        options: ["show", "make", "give", "do"]
    },
    {
        collocate: "demonstrate", base: "ability", phrase: "demonstrate an ability", type: "verb-noun", topic: "education", level: "high",
        meaning: "To show or prove that one has a particular skill or capability.",
        sentences: [
            "Candidates must {blank} the {base} to work under pressure.",
            "She {blank} a remarkable {base} to learn new languages quickly.",
            "The test is designed to see if students can {blank} critical {base}.",
            "He {blank} the {base} to lead a team effectively."
        ],
        options: ["demonstrate", "display", "prove", "perform"]
    },
    {
        collocate: "show", base: "initiative", phrase: "show initiative", type: "verb-noun", topic: "work", level: "high",
        meaning: "To take action independently without being told to do so.",
        sentences: [
            "Employers value workers who {blank} {base}.",
            "She {blank} great {base} by proposing a new marketing strategy.",
            "If you want a promotion, you need to {blank} more {base}.",
            "He always {blank} {base} when faced with a new challenge."
        ],
        options: ["show", "make", "give", "do"]
    },
    {
        collocate: "learn", base: "vocabulary", phrase: "learn vocabulary by heart", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To memorize words and their meanings completely.",
        sentences: [
            "The teacher asked us to {blank} the {base} by heart for the test.",
            "It's easier to {blank} {base} if you use flashcards.",
            "She spends an hour every day trying to {blank} new {base}.",
            "You need to {blank} this {base} before the next class."
        ],
        options: ["learn", "study", "read", "know"]
    },
    {
        collocate: "play", base: "truant", phrase: "play truant", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To stay away from school without permission.",
        sentences: [
            "He got caught trying to {blank} {base} last week.",
            "Students who {blank} {base} regularly will face disciplinary action.",
            "She never {blank} {base} — she loved every subject.",
            "The principal warned students not to {blank} {base} during exams."
        ],
        options: ["play", "do", "make", "go"]
    },
    {
        collocate: "submit", base: "report", phrase: "submit a report", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To formally hand in a written document containing findings or information.",
        sentences: [
            "All employees must {blank} a monthly {base} to their supervisors.",
            "She {blank} the {base} just before the deadline.",
            "Please {blank} the {base} in PDF format.",
            "The auditors will {blank} their final {base} next week."
        ],
        options: ["submit", "send", "give", "deliver"]
    },
    {
        collocate: "present", base: "findings", phrase: "present findings", type: "verb-noun", topic: "education", level: "high",
        meaning: "To formally share the results of research or investigation.",
        sentences: [
            "The scientist will {blank} her {base} at the conference.",
            "We need to {blank} our {base} to the board of directors.",
            "He was nervous about having to {blank} his {base} in front of experts.",
            "The team will {blank} their {base} in a detailed report."
        ],
        options: ["present", "show", "display", "give"]
    },
    {
        collocate: "select", base: "research topic", phrase: "select a research topic", type: "verb-noun", topic: "education", level: "high",
        meaning: "To choose a subject or area to investigate in a study.",
        sentences: [
            "Students must {blank} a {base} by the end of the month.",
            "She took weeks to {blank} the right {base} for her thesis.",
            "The professor helped him {blank} a suitable {base}.",
            "It's important to {blank} a {base} that genuinely interests you."
        ],
        options: ["select", "pick", "find", "take"]
    },
    {
        collocate: "formulate", base: "hypothesis", phrase: "formulate a hypothesis", type: "verb-noun", topic: "education", level: "college",
        meaning: "To develop a testable explanation or prediction for a phenomenon.",
        sentences: [
            "The first step in the experiment was to {blank} a clear {base}.",
            "Researchers must {blank} a {base} before collecting data.",
            "She {blank} a {base} based on her preliminary observations.",
            "It's essential to {blank} a strong {base} that can be tested."
        ],
        options: ["formulate", "create", "build", "design"]
    },
    {
        collocate: "support", base: "hypothesis", phrase: "support the hypothesis", type: "verb-noun", topic: "education", level: "college",
        meaning: "To provide evidence that confirms or backs up a proposed explanation.",
        sentences: [
            "The data strongly {blank} the original {base}.",
            "These results {blank} our {base} about climate change effects.",
            "None of the experiments {blank} the researcher's {base}.",
            "Further studies are needed to {blank} this {base}."
        ],
        options: ["support", "hold", "prove", "confirm"]
    },
    {
        collocate: "undertake", base: "study", phrase: "undertake a study", type: "verb-noun", topic: "education", level: "college",
        meaning: "To begin and carry out a formal investigation or piece of research.",
        sentences: [
            "The university decided to {blank} a {base} on student mental health.",
            "They {blank} a comprehensive {base} lasting three years.",
            "Before making policy changes, the government should {blank} a thorough {base}.",
            "She was invited to {blank} a {base} on renewable energy sources."
        ],
        options: ["undertake", "undergo", "perform", "commit"]
    },
    {
        collocate: "provide", base: "rationale", phrase: "provide a rationale", type: "verb-noun", topic: "education", level: "college",
        meaning: "To give a logical explanation or justification for something.",
        sentences: [
            "You must {blank} a clear {base} for your research methodology.",
            "The report failed to {blank} a convincing {base}.",
            "Can you {blank} a {base} for choosing this approach?",
            "The committee asked her to {blank} a written {base}."
        ],
        options: ["provide", "give", "supply", "deliver"]
    },
    {
        collocate: "back up", base: "conclusions", phrase: "back up conclusions", type: "verb-noun", topic: "education", level: "college",
        meaning: "To support conclusions with evidence or reasoning.",
        sentences: [
            "You need solid data to {blank} your {base}.",
            "The researcher used multiple sources to {blank} her {base}.",
            "It's not enough to state findings — you must {blank} your {base}.",
            "The statistics clearly {blank} the study's {base}."
        ],
        options: ["back up", "hold up", "keep up", "stand up"]
    },
    {
        collocate: "lay out", base: "results", phrase: "lay out results", type: "verb-noun", topic: "education", level: "college",
        meaning: "To present or arrange results in a clear and organized manner.",
        sentences: [
            "The paper {blank} the {base} in a series of charts and tables.",
            "She {blank} her {base} clearly during the presentation.",
            "The report {blank} the {base} in chronological order.",
            "It's important to {blank} {base} so that anyone can understand them."
        ],
        options: ["lay out", "set out", "put out", "spread out"]
    },
    {
        collocate: "formulate", base: "theory", phrase: "formulate a theory", type: "verb-noun", topic: "education", level: "college",
        meaning: "To develop a systematic explanation based on evidence and reasoning.",
        sentences: [
            "Einstein {blank} his famous {base} of relativity in 1905.",
            "The scientist {blank} a new {base} about the origins of the universe.",
            "It took decades of research to {blank} this {base}.",
            "Students were asked to {blank} their own {base} based on the data."
        ],
        options: ["formulate", "build", "invent", "compose"]
    },
    {
        collocate: "test", base: "theory", phrase: "test a theory", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To conduct experiments or gather evidence to check if a theory is correct.",
        sentences: [
            "The researchers designed an experiment to {blank} their {base}.",
            "We need more data to properly {blank} this {base}.",
            "She went to the lab to {blank} her {base} about chemical reactions.",
            "Scientists continually {blank} existing {base} with new evidence."
        ],
        options: ["test", "try", "check", "prove"]
    },
    {
        collocate: "spring", base: "surprise", phrase: "spring a surprise", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To do something unexpected that catches someone off guard.",
        sentences: [
            "The team {blank} a huge {base} by winning the championship.",
            "She loves to {blank} a {base} on her friends.",
            "The company {blank} a {base} by announcing a merger.",
            "He {blank} a {base} with a birthday party for his wife."
        ],
        options: ["spring", "throw", "jump", "drop"]
    },
    {
        collocate: "call for", base: "celebration", phrase: "call for a celebration", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To warrant or deserve celebrating; to demand a festive response.",
        sentences: [
            "This achievement definitely {blank} a {base}!",
            "Passing all your exams {blank} a big {base}.",
            "The team's victory {blank} a proper {base}.",
            "Getting promoted {blank} a {base} — let's go out for dinner."
        ],
        options: ["call for", "ask for", "need for", "demand for"]
    },
    {
        collocate: "go out for", base: "meal", phrase: "go out for a meal", type: "verb-noun", topic: "food", level: "elementary",
        meaning: "To eat at a restaurant rather than at home.",
        sentences: [
            "Let's {blank} a nice {base} to celebrate your birthday.",
            "They {blank} a {base} every Friday evening.",
            "We decided to {blank} a {base} instead of cooking at home.",
            "Would you like to {blank} a {base} with me tonight?"
        ],
        options: ["go out for", "get out for", "come out for", "step out for"]
    },
    {
        collocate: "stick to", base: "diet", phrase: "stick to a diet", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To continue following a specific eating plan without deviation.",
        sentences: [
            "It's hard to {blank} a strict {base} during the holidays.",
            "She has been trying to {blank} a low-carb {base} for months.",
            "The doctor advised him to {blank} a balanced {base}.",
            "If you can {blank} the {base}, you'll see results within weeks."
        ],
        options: ["stick to", "hold to", "keep to", "stay on"]
    },
    {
        collocate: "spend", base: "quality time", phrase: "spend quality time", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To devote focused, meaningful time to someone or an activity.",
        sentences: [
            "Parents should {blank} {base} with their children every day.",
            "We don't {blank} enough {base} together as a family.",
            "She tries to {blank} {base} with her grandparents on weekends.",
            "It's important to {blank} {base} away from screens."
        ],
        options: ["spend", "pass", "use", "have"]
    },
    {
        collocate: "find", base: "time", phrase: "find time", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To manage to make time available for something despite being busy.",
        sentences: [
            "I wish I could {blank} more {base} to read.",
            "She always manages to {blank} {base} for exercise.",
            "It's hard to {blank} {base} when you have three jobs.",
            "You need to {blank} {base} to relax and recharge."
        ],
        options: ["find", "get", "make", "have"]
    },
    {
        collocate: "attend", base: "function", phrase: "attend a formal function", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To go to and be present at an official or formal event.",
        sentences: [
            "The ambassador was invited to {blank} a formal {base} at the embassy.",
            "You'll need a suit if you're going to {blank} the {base}.",
            "She had to {blank} three official {base} in one week.",
            "He rarely {blank} social {base} outside of work."
        ],
        options: ["attend", "join", "visit", "enter"]
    },
    {
        collocate: "play host to", base: "guests", phrase: "play host to guests", type: "verb-noun", topic: "people", level: "high",
        meaning: "To act as a host and entertain visitors or guests.",
        sentences: [
            "The city will {blank} thousands of {base} during the festival.",
            "She loves to {blank} {base} at her country home.",
            "The hotel {blank} many distinguished {base} over the years.",
            "We're going to {blank} foreign {base} at the conference."
        ],
        options: ["play host to", "act host to", "do host to", "make host to"]
    },
    {
        collocate: "exchange", base: "pleasantries", phrase: "exchange pleasantries", type: "verb-noun", topic: "people", level: "high",
        meaning: "To engage in polite, casual conversation with someone.",
        sentences: [
            "The two leaders {blank} {base} before beginning the formal talks.",
            "We {blank} a few {base} with the neighbors every morning.",
            "She {blank} {base} with the receptionist on her way in.",
            "They {blank} brief {base} and then got down to business."
        ],
        options: ["exchange", "share", "trade", "pass"]
    },
    {
        collocate: "spread", base: "rumours", phrase: "spread rumours", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To tell unverified stories or gossip to other people.",
        sentences: [
            "Someone has been {blank} {base} about the new manager.",
            "It's irresponsible to {blank} {base} without checking the facts.",
            "Social media makes it easy to {blank} {base} quickly.",
            "She was upset that people were {blank} false {base} about her."
        ],
        options: ["spread", "tell", "share", "pass"]
    },
    {
        collocate: "engage", base: "someone in conversation", phrase: "engage someone in conversation", type: "verb-noun", topic: "people", level: "high",
        meaning: "To start or draw someone into a discussion.",
        sentences: [
            "He tried to {blank} the stranger {base} at the bus stop.",
            "She has a talent for {blank} anyone {base}.",
            "The host made sure to {blank} every guest {base}.",
            "It's difficult to {blank} him {base} when he's distracted."
        ],
        options: ["engage", "involve", "pull", "bring"]
    },
    {
        collocate: "open", base: "heart", phrase: "open your heart", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To share your deepest feelings or emotions with someone.",
        sentences: [
            "She finally {blank} her {base} to her best friend about the breakup.",
            "It takes courage to {blank} your {base} to another person.",
            "He {blank} his {base} and told her everything.",
            "Sometimes you just need to {blank} your {base} and be vulnerable."
        ],
        options: ["open", "share", "give", "show"]
    },
    {
        collocate: "win", base: "argument", phrase: "win an argument", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To prevail or succeed in a disagreement or debate.",
        sentences: [
            "She always manages to {blank} every {base} with her brother.",
            "He used facts and logic to {blank} the {base}.",
            "It's not always important to {blank} the {base}.",
            "The lawyer {blank} the {base} with a compelling closing statement."
        ],
        options: ["win", "beat", "take", "gain"]
    },
    {
        collocate: "carry on", base: "conversation", phrase: "carry on a conversation", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To continue or maintain a discussion with someone.",
        sentences: [
            "It was too noisy to {blank} a {base} in the restaurant.",
            "She can {blank} a {base} in three different languages.",
            "He found it hard to {blank} a {base} with strangers.",
            "They {blank} a long {base} about politics over dinner."
        ],
        options: ["carry on", "keep on", "go on", "hold on"]
    },
    {
        collocate: "hold", base: "conversation", phrase: "hold a conversation", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To maintain a dialogue or exchange of ideas with someone.",
        sentences: [
            "The baby is too young to {blank} a {base}.",
            "She can {blank} a {base} on almost any topic.",
            "It's hard to {blank} a {base} with someone who won't listen.",
            "He learned enough Spanish to {blank} a basic {base}."
        ],
        options: ["hold", "keep", "carry", "make"]
    },
    {
        collocate: "broach", base: "subject", phrase: "broach the subject", type: "verb-noun", topic: "people", level: "professional",
        meaning: "To raise a sensitive or difficult topic for discussion.",
        sentences: [
            "She didn't know how to {blank} the {base} of his poor performance.",
            "He finally {blank} the {base} of moving to another city.",
            "It's never easy to {blank} such a delicate {base}.",
            "I've been meaning to {blank} the {base} with my boss for weeks."
        ],
        options: ["broach", "breach", "approach", "raise"]
    },
    {
        collocate: "bombard", base: "someone with questions", phrase: "bombard someone with questions", type: "verb-noun", topic: "people", level: "high",
        meaning: "To ask someone a large number of questions rapidly.",
        sentences: [
            "The journalists {blank} the politician {base}.",
            "My kids always {blank} me {base} when I get home from work.",
            "Don't {blank} the new employee {base} on their first day.",
            "The audience {blank} the speaker {base} after the presentation."
        ],
        options: ["bombard", "attack", "flood", "shower"]
    },
    {
        collocate: "take", base: "someone seriously", phrase: "take someone seriously", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To treat someone's words or actions as important and worthy of attention.",
        sentences: [
            "Nobody seems to {blank} her {base} at work.",
            "If you want people to {blank} you {base}, be confident.",
            "The doctor didn't {blank} his symptoms {base} at first.",
            "It's frustrating when people don't {blank} your concerns {base}."
        ],
        options: ["take", "get", "make", "have"]
    },
    {
        collocate: "call", base: "election", phrase: "call an election", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To officially announce that an election will take place.",
        sentences: [
            "The prime minister decided to {blank} a snap {base}.",
            "The president has the power to {blank} a general {base}.",
            "Opposition parties demanded that the government {blank} an early {base}.",
            "They expect the ruling party to {blank} an {base} within months."
        ],
        options: ["call", "make", "announce", "declare"]
    },
    {
        collocate: "resign from", base: "office", phrase: "resign from office", type: "verb-noun", topic: "work", level: "high",
        meaning: "To formally give up a position of authority or government role.",
        sentences: [
            "The minister was forced to {blank} {base} after the scandal.",
            "She chose to {blank} {base} rather than face an inquiry.",
            "Several officials {blank} {base} in protest of the new policy.",
            "He {blank} {base} to spend more time with his family."
        ],
        options: ["resign from", "quit from", "leave from", "step from"]
    },
    {
        collocate: "secure", base: "majority", phrase: "secure a majority", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To obtain more than half of the votes or support needed.",
        sentences: [
            "The party needs to {blank} a clear {base} to form a government.",
            "They managed to {blank} a slim {base} in the parliament.",
            "It's unlikely that any single party will {blank} a {base}.",
            "The candidate {blank} a comfortable {base} in the election."
        ],
        options: ["secure", "get", "win", "gain"]
    },
    {
        collocate: "declare", base: "independence", phrase: "declare independence", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To formally announce that a territory or nation is self-governing.",
        sentences: [
            "The colony {blank} its {base} from Britain in 1776.",
            "The region threatened to {blank} {base} if demands were not met.",
            "They {blank} {base} after years of political struggle.",
            "The people voted overwhelmingly to {blank} {base}."
        ],
        options: ["declare", "announce", "claim", "state"]
    },
    {
        collocate: "seize", base: "power", phrase: "seize power", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To take control of a government or organization by force.",
        sentences: [
            "The military {blank} {base} in an overnight coup.",
            "The rebels attempted to {blank} {base} from the elected government.",
            "History is full of leaders who {blank} {base} through violence.",
            "The general {blank} {base} and dissolved parliament."
        ],
        options: ["seize", "grab", "take", "steal"]
    },
    {
        collocate: "enter into", base: "talks", phrase: "enter into talks", type: "verb-noun", topic: "work", level: "high",
        meaning: "To begin formal discussions or negotiations.",
        sentences: [
            "The two countries agreed to {blank} {base} about the border dispute.",
            "The union will {blank} {base} with management next week.",
            "They refused to {blank} {base} until certain conditions were met.",
            "Both parties must be willing to {blank} {base} in good faith."
        ],
        options: ["enter into", "go into", "come into", "get into"]
    },
    {
        collocate: "hold", base: "demonstration", phrase: "hold a demonstration", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To organize and carry out a public protest.",
        sentences: [
            "Thousands of workers {blank} a {base} in the city center.",
            "The students plan to {blank} a peaceful {base} tomorrow.",
            "They {blank} a {base} outside the parliament building.",
            "Police warned against {blank} an unauthorized {base}."
        ],
        options: ["hold", "make", "do", "run"]
    },
    {
        collocate: "negotiate", base: "settlement", phrase: "negotiate a settlement", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To discuss terms and reach a mutual agreement to resolve a dispute.",
        sentences: [
            "The lawyers are trying to {blank} a {base} out of court.",
            "Both sides agreed to {blank} a fair {base}.",
            "It took months to {blank} a {base} that everyone accepted.",
            "The company was forced to {blank} a costly {base}."
        ],
        options: ["negotiate", "bargain", "discuss", "arrange"]
    },
    {
        collocate: "broker", base: "agreement", phrase: "broker an agreement", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To arrange or negotiate an agreement between parties.",
        sentences: [
            "The diplomat managed to {blank} an {base} between the two nations.",
            "It took years of effort to {blank} the peace {base}.",
            "She was hired to {blank} an {base} between the rival companies.",
            "The UN attempted to {blank} an {base} to end the conflict."
        ],
        options: ["broker", "break", "bridge", "build"]
    },
    {
        collocate: "hold", base: "press conference", phrase: "hold a press conference", type: "verb-noun", topic: "work", level: "high",
        meaning: "To organize a meeting where information is given to journalists.",
        sentences: [
            "The CEO will {blank} a {base} to address the allegations.",
            "They decided to {blank} a {base} to announce the merger.",
            "The police {blank} a {base} after the arrest.",
            "The president {blank} a {base} at the White House."
        ],
        options: ["hold", "make", "give", "run"]
    },
    {
        collocate: "bow to", base: "pressure", phrase: "bow to pressure", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To yield or give in when facing demands or influence from others.",
        sentences: [
            "The company finally {blank} public {base} and recalled the product.",
            "The government refused to {blank} international {base}.",
            "She won't {blank} {base} from her competitors.",
            "After weeks of protest, the council {blank} {base} and reversed the decision."
        ],
        options: ["bow to", "bend to", "fall to", "give to"]
    },
    {
        collocate: "gauge", base: "reaction", phrase: "gauge reaction", type: "verb-noun", topic: "people", level: "professional",
        meaning: "To assess or measure how people respond to something.",
        sentences: [
            "The manager released a preview to {blank} public {base}.",
            "She watched his face carefully to {blank} his {base}.",
            "The survey was designed to {blank} customer {base}.",
            "It's hard to {blank} audience {base} from behind a screen."
        ],
        options: ["gauge", "measure", "check", "read"]
    },
    {
        collocate: "air", base: "grievance", phrase: "air a grievance", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To publicly express a complaint or dissatisfaction.",
        sentences: [
            "The meeting gave employees a chance to {blank} their {base}.",
            "Workers finally had an opportunity to {blank} their {base} to management.",
            "She decided to {blank} her {base} during the town hall meeting.",
            "The union encouraged members to {blank} any {base} they had."
        ],
        options: ["air", "voice", "speak", "tell"]
    },
    {
        collocate: "take", base: "firm stance", phrase: "take a firm stance", type: "verb-noun", topic: "work", level: "high",
        meaning: "To adopt a strong, unwavering position on an issue.",
        sentences: [
            "The president {blank} a {base} against corruption.",
            "We need to {blank} a {base} on this matter before it escalates.",
            "The school {blank} a {base} on bullying.",
            "She {blank} a {base} and refused to compromise."
        ],
        options: ["take", "make", "hold", "get"]
    },
    {
        collocate: "uphold", base: "tradition", phrase: "uphold a tradition", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To maintain or support a custom or practice over time.",
        sentences: [
            "The village continues to {blank} this ancient {base}.",
            "It's important to {blank} cultural {base} for future generations.",
            "The family has {blank} this {base} for over a century.",
            "The school {blank} the {base} of wearing uniforms."
        ],
        options: ["uphold", "keep", "hold", "carry"]
    },
    {
        collocate: "observe", base: "festival", phrase: "observe a festival", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To celebrate or participate in a festival according to custom.",
        sentences: [
            "Many communities {blank} the harvest {base} in autumn.",
            "How do people in your country {blank} this {base}?",
            "Families gather to {blank} the {base} together.",
            "They {blank} the {base} with music, food, and dancing."
        ],
        options: ["observe", "watch", "view", "see"]
    },
    {
        collocate: "put on", base: "display", phrase: "put on a display", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To organize or present a show or exhibition for others to see.",
        sentences: [
            "The school will {blank} a {base} of student artwork.",
            "They {blank} an impressive fireworks {base} every New Year.",
            "The museum {blank} a special {base} for the anniversary.",
            "The dancers {blank} a stunning {base} at the ceremony."
        ],
        options: ["put on", "set on", "give on", "make on"]
    },
    {
        collocate: "perform", base: "dance", phrase: "perform a dance", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To execute a dance, especially as a show or ceremony.",
        sentences: [
            "The children {blank} a traditional {base} at the festival.",
            "She was asked to {blank} a {base} at the wedding reception.",
            "The group will {blank} a folk {base} on stage tonight.",
            "He learned to {blank} the {base} in just two weeks."
        ],
        options: ["perform", "play", "make", "do"]
    },
    {
        collocate: "propose", base: "toast", phrase: "propose a toast", type: "verb-noun", topic: "food", level: "high",
        meaning: "To ask people to raise their glasses and drink in honor of someone.",
        sentences: [
            "The father of the bride {blank} a {base} to the happy couple.",
            "Allow me to {blank} a {base} to our wonderful host.",
            "She stood up to {blank} a {base} at the dinner party.",
            "The CEO {blank} a {base} to the company's future success."
        ],
        options: ["propose", "make", "give", "raise"]
    },
    {
        collocate: "raise", base: "glasses", phrase: "raise your glasses", type: "verb-noun", topic: "food", level: "middle",
        meaning: "To lift your drinking glass in a gesture of celebration or tribute.",
        sentences: [
            "Please {blank} your {base} to the newlyweds!",
            "Everyone {blank} their {base} and cheered.",
            "Let's {blank} our {base} to a successful year ahead.",
            "The guests {blank} their {base} in unison."
        ],
        options: ["raise", "lift", "hold", "pick up"]
    },
    {
        collocate: "mark", base: "beginning", phrase: "mark the beginning", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To signify or celebrate the start of something.",
        sentences: [
            "The ceremony {blank} the {base} of a new era.",
            "Today's event {blank} the {base} of our partnership.",
            "The first snowfall {blank} the {base} of winter.",
            "This agreement {blank} the {base} of a lasting peace."
        ],
        options: ["mark", "sign", "note", "show"]
    },
    {
        collocate: "ease", base: "congestion", phrase: "ease traffic congestion", type: "verb-noun", topic: "travel", level: "high",
        meaning: "To reduce the amount of traffic and improve the flow of vehicles.",
        sentences: [
            "The new bypass should {blank} traffic {base} in the town center.",
            "Building more lanes won't necessarily {blank} {base}.",
            "The government introduced tolls to {blank} {base} during rush hour.",
            "Public transport can help {blank} road {base} significantly."
        ],
        options: ["ease", "lower", "calm", "slow"]
    },
    {
        collocate: "invest in", base: "infrastructure", phrase: "invest in infrastructure", type: "verb-noun", topic: "money", level: "high",
        meaning: "To spend money on building or improving public systems like roads and bridges.",
        sentences: [
            "The government must {blank} better {base} for rural areas.",
            "They plan to {blank} digital {base} across the country.",
            "Companies that {blank} {base} see long-term growth.",
            "We need to {blank} modern transport {base} urgently."
        ],
        options: ["invest in", "spend in", "put in", "pay in"]
    },
    {
        collocate: "face", base: "fare hike", phrase: "face a fare hike", type: "verb-noun", topic: "travel", level: "high",
        meaning: "To be confronted with an increase in the cost of transportation.",
        sentences: [
            "Commuters will {blank} a {base} starting next month.",
            "Passengers are angry about having to {blank} yet another {base}.",
            "Bus riders may {blank} a significant {base} this year.",
            "The public shouldn't have to {blank} another {base} without improved services."
        ],
        options: ["face", "meet", "take", "get"]
    },
    {
        collocate: "break", base: "journey", phrase: "break the journey", type: "verb-noun", topic: "travel", level: "middle",
        meaning: "To stop somewhere during a trip before continuing to your destination.",
        sentences: [
            "We decided to {blank} the {base} in Lyon for a night.",
            "You should {blank} the {base} if you're feeling tired.",
            "They {blank} their {base} at a small coastal town.",
            "It's a long drive — let's {blank} the {base} halfway."
        ],
        options: ["break", "stop", "cut", "pause"]
    },
    {
        collocate: "have", base: "stopover", phrase: "have a stopover", type: "verb-noun", topic: "travel", level: "middle",
        meaning: "To make a planned stop at a place during a long journey.",
        sentences: [
            "We'll {blank} a short {base} in Dubai on the way to Tokyo.",
            "The flight {blank} a two-hour {base} in Frankfurt.",
            "She decided to {blank} a {base} in Singapore to explore the city.",
            "Do you want to {blank} a {base} or fly direct?"
        ],
        options: ["have", "make", "take", "do"]
    },
    {
        collocate: "do", base: "sights", phrase: "do the sights", type: "verb-noun", topic: "travel", level: "middle",
        meaning: "To visit the famous or interesting places in a location.",
        sentences: [
            "We only had one day to {blank} all the {base} in Paris.",
            "Let's {blank} the {base} before we leave Rome.",
            "They spent the morning {blank} the main {base} of the city.",
            "Have you {blank} all the {base} in London yet?"
        ],
        options: ["do", "see", "visit", "watch"]
    },
    {
        collocate: "go", base: "trekking", phrase: "go trekking", type: "verb-noun", topic: "travel", level: "elementary",
        meaning: "To go on a long, adventurous walking journey, usually in nature.",
        sentences: [
            "We plan to {blank} {base} in the Himalayas next summer.",
            "She loves to {blank} {base} through remote mountain villages.",
            "They {blank} {base} across Patagonia for three weeks.",
            "Would you like to {blank} {base} in Nepal?"
        ],
        options: ["go", "do", "make", "take"]
    },
    {
        collocate: "keep", base: "eyes peeled", phrase: "keep your eyes peeled", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To watch carefully and stay alert for something.",
        sentences: [
            "Everyone {blank} their {base} for any sign of the missing dog.",
            "{blank} your {base} for a parking spot.",
            "She told us to {blank} our {base} for pickpockets.",
            "The hikers {blank} their {base} for wildlife along the trail."
        ],
        options: ["keep", "hold", "have", "get"]
    },
    {
        collocate: "boost", base: "spirits", phrase: "boost spirits", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To improve morale or make someone feel more cheerful.",
        sentences: [
            "The surprise party really {blank} everyone's {base}.",
            "A warm cup of tea can {blank} your {base} on a rainy day.",
            "The coach tried to {blank} the team's {base} before the match.",
            "Good news always {blank} my {base}."
        ],
        options: ["boost", "raise", "lift", "push"]
    },
    {
        collocate: "face", base: "severe weather", phrase: "face severe weather", type: "verb-noun", topic: "weather", level: "middle",
        meaning: "To encounter extreme or dangerous weather conditions.",
        sentences: [
            "Travelers may {blank} {base} in the mountains this weekend.",
            "The region is expected to {blank} {base} over the next few days.",
            "Farmers often {blank} {base} that destroys their crops.",
            "Ships crossing the Atlantic frequently {blank} {base}."
        ],
        options: ["face", "meet", "get", "take"]
    },
    {
        collocate: "do", base: "extreme sports", phrase: "do extreme sports", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To participate in high-risk physical activities for excitement.",
        sentences: [
            "Have you ever wanted to {blank} {base} like bungee jumping?",
            "More and more young people {blank} {base} on their holidays.",
            "She started to {blank} {base} after turning thirty.",
            "It takes courage to {blank} {base} for the first time."
        ],
        options: ["do", "play", "make", "go"]
    },
    {
        collocate: "keep", base: "balance", phrase: "keep your balance", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To maintain physical stability and not fall over.",
        sentences: [
            "It's hard to {blank} your {base} on a surfboard at first.",
            "She struggled to {blank} her {base} on the icy pavement.",
            "You need strong core muscles to {blank} your {base}.",
            "The child learned to {blank} her {base} on the bicycle."
        ],
        options: ["keep", "hold", "stay", "get"]
    },
    {
        collocate: "get", base: "hang of it", phrase: "get the hang of it", type: "verb-noun", topic: "education", level: "elementary",
        meaning: "To learn how to do something after initial difficulty.",
        sentences: [
            "Don't worry — you'll {blank} the {base} soon.",
            "It took me weeks to {blank} the {base}.",
            "Once you {blank} the {base}, skiing becomes really fun.",
            "She quickly {blank} the {base} and started enjoying the game."
        ],
        options: ["get", "have", "take", "find"]
    },
    {
        collocate: "summon up", base: "energy", phrase: "summon up energy", type: "verb-noun", topic: "health", level: "high",
        meaning: "To gather or muster the physical or mental energy needed for something.",
        sentences: [
            "She had to {blank} all her {base} to finish the marathon.",
            "I can barely {blank} the {base} to get out of bed today.",
            "He {blank} enough {base} for one last sprint.",
            "It's hard to {blank} {base} after a long day at work."
        ],
        options: ["summon up", "call up", "bring up", "pull up"]
    },
    {
        collocate: "keep in", base: "shape", phrase: "keep in shape", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To stay physically fit through exercise and healthy habits.",
        sentences: [
            "She goes running every morning to {blank} {base}.",
            "It gets harder to {blank} {base} as you get older.",
            "Swimming is a great way to {blank} {base}.",
            "The athlete trained daily to {blank} {base} during the off-season."
        ],
        options: ["keep in", "stay in", "get in", "hold in"]
    },
    {
        collocate: "jump at", base: "chance", phrase: "jump at the chance", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To eagerly accept an opportunity without hesitation.",
        sentences: [
            "When they offered me the job, I {blank} the {base}.",
            "She would {blank} the {base} to study abroad.",
            "Any musician would {blank} the {base} to play at that venue.",
            "He {blank} the {base} to work with such a famous director."
        ],
        options: ["jump at", "leap at", "grab at", "run at"]
    },
    {
        collocate: "reach", base: "fever pitch", phrase: "reach fever pitch", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To arrive at a state of extreme excitement or intensity.",
        sentences: [
            "Excitement in the stadium {blank} {base} as the final whistle approached.",
            "The political debate has {blank} {base} in recent weeks.",
            "Anticipation for the movie {blank} {base} before its release.",
            "Tensions between the two groups {blank} {base} overnight."
        ],
        options: ["reach", "hit", "get", "come"]
    },
    {
        collocate: "secure", base: "convincing victory", phrase: "secure a convincing victory", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To win a competition or contest in a decisive and impressive way.",
        sentences: [
            "The team {blank} a {base} in the championship final.",
            "She {blank} a {base} over all her opponents.",
            "The party {blank} a {base} in the general election.",
            "They need to {blank} a {base} to advance to the next round."
        ],
        options: ["secure", "get", "take", "win"]
    },
    {
        collocate: "award", base: "penalty", phrase: "award a penalty", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To officially grant a penalty kick in a football match due to a foul.",
        sentences: [
            "The referee decided to {blank} a {base} after the handball.",
            "Fans were furious when the official {blank} a {base} against their team.",
            "The umpire {blank} a {base} in the final minutes of the game.",
            "Should the referee have {blank} a {base} for that foul?"
        ],
        options: ["award", "give", "grant", "call"]
    },
    {
        collocate: "score", base: "own goal", phrase: "score an own goal", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To accidentally put the ball into your own team's net in a match.",
        sentences: [
            "The defender {blank} an unfortunate {base} in the second half.",
            "It's devastating when a player {blank} an {base} in a final.",
            "He {blank} an {base} while trying to clear the ball.",
            "The team lost because their captain {blank} an {base}."
        ],
        options: ["score", "make", "get", "hit"]
    },
    {
        collocate: "build up", base: "suspense", phrase: "build up suspense", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To gradually create a feeling of excitement or anxiety about what will happen next.",
        sentences: [
            "The director knows how to {blank} {base} throughout the film.",
            "The author {blank} {base} by revealing clues slowly.",
            "The music helped {blank} {base} during the climactic scene.",
            "A good mystery novel should {blank} {base} from the very first page."
        ],
        options: ["build up", "set up", "make up", "put up"]
    },
    {
        collocate: "set off", base: "chain of events", phrase: "set off a chain of events", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To trigger a series of related occurrences, one leading to another.",
        sentences: [
            "One small mistake {blank} a {base} that changed everything.",
            "The discovery {blank} a {base} leading to a major breakthrough.",
            "Her resignation {blank} a {base} within the company.",
            "The accident {blank} a {base} that disrupted the whole city."
        ],
        options: ["set off", "kick off", "start off", "send off"]
    },
    {
        collocate: "hold", base: "attention", phrase: "hold someone's attention", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To keep someone interested and focused.",
        sentences: [
            "The speaker managed to {blank} everyone's {base} for two hours.",
            "It's hard to {blank} a child's {base} for very long.",
            "The book {blank} my {base} from start to finish.",
            "A good teacher knows how to {blank} students' {base}."
        ],
        options: ["hold", "keep", "catch", "grab"]
    },
    {
        collocate: "fire", base: "imagination", phrase: "fire someone's imagination", type: "verb-noun", topic: "education", level: "high",
        meaning: "To stimulate or inspire someone's creative thinking.",
        sentences: [
            "The documentary {blank} her {base} about space exploration.",
            "Stories of adventure always {blank} children's {base}.",
            "The exhibition {blank} my {base} and made me want to paint.",
            "A great teacher can {blank} a student's {base}."
        ],
        options: ["fire", "light", "burn", "heat"]
    },
    {
        collocate: "awaken", base: "interest", phrase: "awaken interest", type: "verb-noun", topic: "education", level: "high",
        meaning: "To cause someone to become curious or interested in something.",
        sentences: [
            "The lecture {blank} her {base} in ancient history.",
            "Traveling abroad can {blank} an {base} in different cultures.",
            "The book {blank} a deep {base} in philosophy.",
            "The teacher's enthusiasm {blank} {base} in even the quietest students."
        ],
        options: ["awaken", "wake", "raise", "open"]
    },
    {
        collocate: "create", base: "atmosphere", phrase: "create the atmosphere", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To produce a particular mood or feeling in a place or situation.",
        sentences: [
            "Candles and soft music help {blank} a romantic {base}.",
            "The decorations {blank} a festive {base} in the hall.",
            "She knows how to {blank} the perfect {base} for a dinner party.",
            "The lighting {blank} a mysterious {base} in the theater."
        ],
        options: ["create", "build", "make", "set"]
    },
    {
        collocate: "give", base: "glowing reviews", phrase: "give glowing reviews", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To provide enthusiastic and very positive evaluations of something.",
        sentences: [
            "Critics {blank} {base} to the new restaurant downtown.",
            "The film {blank} {base} from every major publication.",
            "Customers {blank} {base} about the hotel's service.",
            "The novel {blank} {base} from readers around the world."
        ],
        options: ["give", "make", "write", "send"]
    },
    {
        collocate: "introduce", base: "regulations", phrase: "introduce regulations", type: "verb-noun", topic: "work", level: "high",
        meaning: "To bring new rules or laws into effect.",
        sentences: [
            "The government plans to {blank} stricter {base} on emissions.",
            "They {blank} new safety {base} after the factory accident.",
            "Several countries have {blank} {base} to control social media.",
            "The industry needs to {blank} clearer {base} on data privacy."
        ],
        options: ["introduce", "bring", "start", "open"]
    },
    {
        collocate: "adhere to", base: "standards", phrase: "adhere to standards", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To follow and comply with established rules or quality requirements.",
        sentences: [
            "All manufacturers must {blank} strict safety {base}.",
            "The company failed to {blank} industry {base}.",
            "Hospitals are required to {blank} hygiene {base} at all times.",
            "It's essential that contractors {blank} building {base}."
        ],
        options: ["adhere to", "stick to", "keep to", "hold to"]
    },
    {
        collocate: "satisfy", base: "requirements", phrase: "satisfy the requirements", type: "verb-noun", topic: "work", level: "high",
        meaning: "To fulfill or meet the necessary conditions or standards.",
        sentences: [
            "The product must {blank} all regulatory {base} before launch.",
            "She worked hard to {blank} the {base} for graduation.",
            "Not all applicants {blank} the minimum {base}.",
            "The proposal needs to {blank} the client's {base}."
        ],
        options: ["satisfy", "fill", "complete", "reach"]
    },
    {
        collocate: "tighten", base: "controls", phrase: "tighten controls", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To make rules, restrictions, or regulations more strict.",
        sentences: [
            "The government decided to {blank} border {base}.",
            "Banks have been forced to {blank} financial {base}.",
            "The school {blank} {base} on phone usage in class.",
            "Authorities plan to {blank} {base} on alcohol sales."
        ],
        options: ["tighten", "harden", "strengthen", "raise"]
    },
    {
        collocate: "exercise", base: "authority", phrase: "exercise authority", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To use one's official power to make decisions or enforce rules.",
        sentences: [
            "The manager has the right to {blank} {base} over project decisions.",
            "The court can {blank} its {base} to dismiss the case.",
            "Leaders must {blank} {base} responsibly.",
            "She refused to {blank} her {base} unless absolutely necessary."
        ],
        options: ["exercise", "use", "apply", "employ"]
    },
    {
        collocate: "cut through", base: "red tape", phrase: "cut through the red tape", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To bypass or simplify excessive bureaucratic procedures.",
        sentences: [
            "The new system should help {blank} the {base}.",
            "It took months to {blank} all the {base} for the building permit.",
            "The minister promised to {blank} government {base}.",
            "Startups often struggle to {blank} the {base} when applying for licenses."
        ],
        options: ["cut through", "break through", "push through", "get through"]
    },
    {
        collocate: "flout", base: "rules", phrase: "flout the rules", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To openly disregard or disobey rules or regulations.",
        sentences: [
            "Some companies continue to {blank} environmental {base}.",
            "He was punished for repeatedly {blank} the school {base}.",
            "Those who {blank} the {base} will face heavy fines.",
            "The restaurant was shut down for {blank} health and safety {base}."
        ],
        options: ["flout", "break", "ignore", "bend"]
    },
    {
        collocate: "reduce", base: "carbon footprint", phrase: "reduce our carbon footprint", type: "verb-noun", topic: "technology", level: "high",
        meaning: "To decrease the amount of carbon dioxide emissions caused by one's activities.",
        sentences: [
            "Everyone should try to {blank} their {base}.",
            "The company pledged to {blank} its {base} by 50% by 2030.",
            "Using public transport helps {blank} your {base}.",
            "Governments are under pressure to {blank} their national {base}."
        ],
        options: ["reduce", "lower", "cut", "shrink"]
    },
    {
        collocate: "offset", base: "carbon emissions", phrase: "offset carbon emissions", type: "verb-noun", topic: "technology", level: "professional",
        meaning: "To compensate for carbon dioxide released by funding equivalent reductions elsewhere.",
        sentences: [
            "Airlines offer passengers the option to {blank} their {base}.",
            "The company plants trees to {blank} its {base}.",
            "There are several programs designed to help businesses {blank} {base}.",
            "Can planting forests really {blank} industrial {base}?"
        ],
        options: ["offset", "reduce", "balance", "counter"]
    },
    {
        collocate: "recycle", base: "waste", phrase: "recycle waste", type: "verb-noun", topic: "technology", level: "elementary",
        meaning: "To process used materials so they can be used again.",
        sentences: [
            "The city encourages residents to {blank} household {base}.",
            "Factories should {blank} industrial {base} whenever possible.",
            "We need better systems to {blank} electronic {base}.",
            "Only about 30% of plastic {base} is actually {blank}."
        ],
        options: ["recycle", "reuse", "reduce", "remove"]
    },
    {
        collocate: "find", base: "solution", phrase: "find a solution", type: "verb-noun", topic: "work", level: "elementary",
        meaning: "To discover or work out an answer to a problem.",
        sentences: [
            "The engineers need to {blank} a {base} to the overheating issue.",
            "We must {blank} a {base} before the situation gets worse.",
            "It took months to {blank} a workable {base}.",
            "She always manages to {blank} a creative {base} to any problem."
        ],
        options: ["find", "get", "make", "reach"]
    },
    {
        collocate: "open", base: "account", phrase: "open an account", type: "verb-noun", topic: "money", level: "elementary",
        meaning: "To establish a new bank account for depositing and withdrawing money.",
        sentences: [
            "I need to {blank} a savings {base} at the bank.",
            "She {blank} her first {base} when she was sixteen.",
            "You can {blank} an {base} online in just a few minutes.",
            "They went to the bank to {blank} a joint {base}."
        ],
        options: ["open", "start", "create", "make"]
    },
    {
        collocate: "get into", base: "debt", phrase: "get into debt", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To begin owing money that you cannot easily repay.",
        sentences: [
            "It's easy to {blank} {base} if you're not careful with credit cards.",
            "Many students {blank} serious {base} while at university.",
            "She {blank} {base} after losing her job.",
            "The company {blank} heavy {base} during the recession."
        ],
        options: ["get into", "fall into", "go into", "come into"]
    },
    {
        collocate: "clear", base: "debts", phrase: "clear debts", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To pay off all money that is owed.",
        sentences: [
            "It took her five years to {blank} all her {base}.",
            "He got a second job to help {blank} his {base}.",
            "The company must {blank} its {base} before it can invest further.",
            "They sold their car to {blank} their outstanding {base}."
        ],
        options: ["clear", "clean", "remove", "erase"]
    },
    {
        collocate: "run up", base: "debts", phrase: "run up debts", type: "verb-noun", topic: "money", level: "high",
        meaning: "To accumulate debts, especially quickly or carelessly.",
        sentences: [
            "He {blank} enormous {base} gambling online.",
            "It's dangerous to {blank} {base} you can't afford to repay.",
            "The business {blank} significant {base} in its first year.",
            "She {blank} huge {base} redecorating the house."
        ],
        options: ["run up", "build up", "pile up", "stack up"]
    },
    {
        collocate: "pay back", base: "loans", phrase: "pay back loans", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To return borrowed money to the lender over time.",
        sentences: [
            "Graduates often take years to {blank} student {base}.",
            "He promised to {blank} all his {base} within five years.",
            "The company struggled to {blank} its bank {base}.",
            "She set up a monthly plan to {blank} her {base}."
        ],
        options: ["pay back", "give back", "send back", "hand back"]
    },
    {
        collocate: "put down", base: "deposit", phrase: "put down a deposit", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To pay an initial sum of money as a guarantee or partial payment.",
        sentences: [
            "They {blank} a large {base} on their first house.",
            "You need to {blank} a {base} to reserve the venue.",
            "She {blank} a {base} of ten percent on the car.",
            "We had to {blank} a {base} before the work could begin."
        ],
        options: ["put down", "pay down", "lay down", "set down"]
    },
    {
        collocate: "exceed", base: "credit limit", phrase: "exceed the credit limit", type: "verb-noun", topic: "money", level: "high",
        meaning: "To spend more than the maximum amount allowed on a credit card.",
        sentences: [
            "If you {blank} your {base}, you'll be charged a penalty fee.",
            "She accidentally {blank} her {base} during the holiday shopping.",
            "The bank will notify you if you {blank} the {base}.",
            "He didn't realize he had {blank} his {base} until the card was declined."
        ],
        options: ["exceed", "pass", "break", "cross"]
    },
    {
        collocate: "default on", base: "repayments", phrase: "default on repayments", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To fail to make required payments on a loan or debt.",
        sentences: [
            "Thousands of homeowners {blank} their mortgage {base} last year.",
            "If you {blank} your {base}, the bank can seize your property.",
            "The company {blank} its {base} and went bankrupt.",
            "She was at risk of {blank} her student loan {base}."
        ],
        options: ["default on", "miss on", "fail on", "skip on"]
    },
    {
        collocate: "falsify", base: "records", phrase: "falsify records", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To deliberately alter documents or data to deceive.",
        sentences: [
            "The accountant was caught trying to {blank} financial {base}.",
            "It's a criminal offense to {blank} medical {base}.",
            "The company was fined for {blank} its tax {base}.",
            "Anyone found to {blank} {base} will be immediately dismissed."
        ],
        options: ["falsify", "fake", "forge", "change"]
    },
    {
        collocate: "stimulate", base: "growth", phrase: "stimulate growth", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To encourage or promote economic or business expansion.",
        sentences: [
            "The government cut taxes to {blank} economic {base}.",
            "Lower interest rates can {blank} {base} in the housing market.",
            "The new policy is designed to {blank} {base} in rural areas.",
            "Foreign investment can help {blank} {base} in developing countries."
        ],
        options: ["stimulate", "activate", "push", "drive"]
    },
    {
        collocate: "levy", base: "taxes", phrase: "levy taxes", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To officially impose or collect taxes from people or businesses.",
        sentences: [
            "The government has the power to {blank} {base} on imports.",
            "Local authorities {blank} property {base} on homeowners.",
            "Some countries {blank} heavy {base} on luxury goods.",
            "The new law allows the council to {blank} additional {base}."
        ],
        options: ["levy", "charge", "place", "put"]
    },
    {
        collocate: "safeguard", base: "interests", phrase: "safeguard interests", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To protect the rights or advantages of a person or group.",
        sentences: [
            "The union exists to {blank} the {base} of its members.",
            "Laws are needed to {blank} consumer {base}.",
            "The lawyer was hired to {blank} the client's {base}.",
            "It's the board's duty to {blank} shareholder {base}."
        ],
        options: ["safeguard", "protect", "guard", "shield"]
    },
    {
        collocate: "harness", base: "technology", phrase: "harness technology", type: "verb-noun", topic: "technology", level: "high",
        meaning: "To make use of technology in a controlled and effective way.",
        sentences: [
            "Schools must learn to {blank} {base} for better learning outcomes.",
            "The company {blank} new {base} to improve efficiency.",
            "We need to {blank} {base} to solve environmental problems.",
            "Farmers can {blank} modern {base} to increase crop yields."
        ],
        options: ["harness", "use", "apply", "employ"]
    },
    {
        collocate: "install", base: "equipment", phrase: "install equipment", type: "verb-noun", topic: "technology", level: "middle",
        meaning: "To set up machinery or devices so they are ready for use.",
        sentences: [
            "The technicians will {blank} the new {base} tomorrow.",
            "It cost a fortune to {blank} the laboratory {base}.",
            "The gym plans to {blank} state-of-the-art {base} next month.",
            "They hired a specialist to {blank} the medical {base}."
        ],
        options: ["install", "set", "fix", "place"]
    },
    {
        collocate: "restore", base: "power", phrase: "restore power", type: "verb-noun", topic: "technology", level: "middle",
        meaning: "To bring back electricity supply after an outage.",
        sentences: [
            "Engineers worked overnight to {blank} {base} to the affected areas.",
            "It took two days to {blank} {base} after the storm.",
            "The utility company promised to {blank} {base} by morning.",
            "Crews are working around the clock to {blank} {base}."
        ],
        options: ["restore", "return", "bring", "fix"]
    },
    {
        collocate: "shut down", base: "computers", phrase: "shut down computers", type: "verb-noun", topic: "technology", level: "elementary",
        meaning: "To turn off computers completely, ending all running processes.",
        sentences: [
            "Please {blank} all {base} before leaving the office.",
            "The virus forced them to {blank} every {base} in the building.",
            "Don't forget to {blank} your {base} at the end of the day.",
            "The IT team had to {blank} the {base} for maintenance."
        ],
        options: ["shut down", "turn down", "close down", "power down"]
    },
    {
        collocate: "enter", base: "PIN", phrase: "enter a PIN", type: "verb-noun", topic: "technology", level: "elementary",
        meaning: "To type in a personal identification number for security verification.",
        sentences: [
            "Please {blank} your {base} to complete the transaction.",
            "You need to {blank} a four-digit {base} at the ATM.",
            "She couldn't {blank} her {base} because she forgot the number.",
            "For security reasons, never let anyone see you {blank} your {base}."
        ],
        options: ["enter", "type", "put", "write"]
    },
    {
        collocate: "swipe", base: "card", phrase: "swipe a card", type: "verb-noun", topic: "technology", level: "elementary",
        meaning: "To pass a card through a reader to make a payment or gain access.",
        sentences: [
            "Just {blank} your {base} at the entrance to get in.",
            "She {blank} her {base} to pay for the groceries.",
            "You need to {blank} your ID {base} to access the building.",
            "He {blank} his credit {base} at the checkout counter."
        ],
        options: ["swipe", "slide", "pass", "scan"]
    },
    {
        collocate: "download", base: "apps", phrase: "download apps", type: "verb-noun", topic: "technology", level: "elementary",
        meaning: "To transfer applications from the internet to a device.",
        sentences: [
            "You can {blank} free {base} from the app store.",
            "She {blank} several {base} to help her learn Spanish.",
            "Be careful when you {blank} {base} from unknown sources.",
            "Millions of people {blank} new {base} every day."
        ],
        options: ["download", "load", "install", "get"]
    },
    {
        collocate: "get", base: "remote access", phrase: "get remote access", type: "verb-noun", topic: "technology", level: "middle",
        meaning: "To obtain the ability to connect to a computer or network from a distance.",
        sentences: [
            "Employees can {blank} {base} to the company server from home.",
            "You'll need a VPN to {blank} {base} to the system.",
            "She called IT to {blank} {base} to her work files.",
            "More companies now allow staff to {blank} {base} to their desktops."
        ],
        options: ["get", "have", "take", "make"]
    },
    {
        collocate: "reduce", base: "stress levels", phrase: "reduce stress levels", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To lower the amount of mental or emotional tension one experiences.",
        sentences: [
            "Regular exercise can help {blank} {base} significantly.",
            "Meditation is a proven way to {blank} {base}.",
            "Taking breaks during work helps {blank} {base}.",
            "She started yoga to {blank} her {base}."
        ],
        options: ["reduce", "lower", "drop", "cut"]
    },
    {
        collocate: "build up", base: "strength", phrase: "build up strength", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To gradually increase physical power and endurance.",
        sentences: [
            "After the surgery, she needed months to {blank} her {base}.",
            "Lifting weights helps you {blank} muscle {base}.",
            "The physiotherapist gave exercises to help {blank} {base} in his legs.",
            "It takes time to {blank} {base} after a long illness."
        ],
        options: ["build up", "grow up", "pick up", "put up"]
    },
    {
        collocate: "go on", base: "diet", phrase: "go on a diet", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To start eating in a controlled way to lose weight or improve health.",
        sentences: [
            "She decided to {blank} a strict {base} before the summer.",
            "My doctor advised me to {blank} a low-salt {base}.",
            "He {blank} a {base} and lost ten kilos in three months.",
            "Many people {blank} a {base} at the start of the new year."
        ],
        options: ["go on", "get on", "start on", "take on"]
    },
    {
        collocate: "watch", base: "what you eat", phrase: "watch what you eat", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To be careful about the food you consume for health reasons.",
        sentences: [
            "The doctor told him to {blank} {base}.",
            "If you want to stay healthy, you need to {blank} {base}.",
            "She started to {blank} {base} after her cholesterol test.",
            "Athletes must {blank} {base} during training season."
        ],
        options: ["watch", "see", "look", "check"]
    },
    {
        collocate: "prescribe", base: "medication", phrase: "prescribe medication", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To officially authorize and recommend a medicine for a patient.",
        sentences: [
            "The doctor {blank} strong {base} for the infection.",
            "She was reluctant to {blank} {base} without running more tests.",
            "Doctors should only {blank} {base} when necessary.",
            "The specialist {blank} new {base} to manage his condition."
        ],
        options: ["prescribe", "give", "write", "order"]
    },
    {
        collocate: "respond to", base: "treatment", phrase: "respond to treatment", type: "verb-noun", topic: "health", level: "high",
        meaning: "To show improvement as a result of medical care.",
        sentences: [
            "The patient is {blank} well to the new {base}.",
            "Not all tumors {blank} to this type of {base}.",
            "She began to {blank} to {base} after the second week.",
            "If the infection doesn't {blank} to {base}, we'll try a different approach."
        ],
        options: ["respond to", "react to", "answer to", "reply to"]
    },
    {
        collocate: "make", base: "full recovery", phrase: "make a full recovery", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To completely regain health after an illness or injury.",
        sentences: [
            "Doctors expect him to {blank} a {base} within six months.",
            "She {blank} a {base} after the operation.",
            "Most patients {blank} a {base} with proper rehabilitation.",
            "It took a year, but he finally {blank} a {base}."
        ],
        options: ["make", "do", "have", "get"]
    },
    {
        collocate: "shake off", base: "cold", phrase: "shake off a cold", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To recover from a cold, especially by making an effort.",
        sentences: [
            "I've been trying to {blank} this {base} for over a week.",
            "Rest and fluids will help you {blank} the {base} faster.",
            "She just can't seem to {blank} the {base}.",
            "He took vitamin C to help {blank} the {base}."
        ],
        options: ["shake off", "throw off", "get off", "push off"]
    },
    {
        collocate: "suffer", base: "heart attack", phrase: "suffer a heart attack", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To experience a sudden and serious medical episode affecting the heart.",
        sentences: [
            "He {blank} a massive {base} while jogging.",
            "People who smoke are more likely to {blank} a {base}.",
            "She {blank} a minor {base} but recovered quickly.",
            "His father {blank} a {base} at the age of fifty-five."
        ],
        options: ["suffer", "have", "get", "take"]
    },
    {
        collocate: "forge", base: "relationships", phrase: "forge relationships", type: "verb-noun", topic: "people", level: "high",
        meaning: "To build strong and lasting connections with others through effort.",
        sentences: [
            "The program helps students {blank} meaningful {base} with mentors.",
            "She {blank} strong {base} with colleagues around the world.",
            "It takes time and effort to {blank} genuine {base}.",
            "The company aims to {blank} long-term {base} with its clients."
        ],
        options: ["forge", "build", "create", "form"]
    },
    {
        collocate: "abuse", base: "trust", phrase: "abuse trust", type: "verb-noun", topic: "people", level: "high",
        meaning: "To take advantage of the confidence someone has placed in you.",
        sentences: [
            "He {blank} his clients' {base} by mishandling their investments.",
            "Anyone who {blank} the public's {base} should be held accountable.",
            "She felt betrayed when her friend {blank} her {base}.",
            "Politicians who {blank} voters' {base} deserve to lose their seats."
        ],
        options: ["abuse", "break", "betray", "lose"]
    },
    {
        collocate: "betray", base: "trust", phrase: "betray trust", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To act disloyally and break the confidence someone placed in you.",
        sentences: [
            "She could never forgive someone who {blank} her {base}.",
            "The employee {blank} the company's {base} by leaking confidential data.",
            "It only takes one act to {blank} someone's {base}.",
            "He deeply regretted {blank} his best friend's {base}."
        ],
        options: ["betray", "break", "abuse", "lose"]
    },
    {
        collocate: "heal", base: "rift", phrase: "heal the rift", type: "verb-noun", topic: "people", level: "high",
        meaning: "To repair a serious disagreement or broken relationship.",
        sentences: [
            "The families tried to {blank} the {base} after years of conflict.",
            "It took a long time to {blank} the {base} between the two friends.",
            "She hoped the apology would help {blank} the {base}.",
            "Nothing seemed to {blank} the growing {base} in the team."
        ],
        options: ["heal", "fix", "close", "mend"]
    },
    {
        collocate: "realise", base: "ambition", phrase: "realise an ambition", type: "verb-noun", topic: "people", level: "high",
        meaning: "To achieve a long-held goal or dream.",
        sentences: [
            "She finally {blank} her lifelong {base} of becoming a pilot.",
            "Hard work and determination helped him {blank} his {base}.",
            "Many people never {blank} their {base} due to fear of failure.",
            "The scholarship allowed her to {blank} her {base} of studying abroad."
        ],
        options: ["realise", "achieve", "reach", "meet"]
    },
    {
        collocate: "heap", base: "praise on", phrase: "heap praise on someone", type: "verb-noun", topic: "people", level: "high",
        meaning: "To give someone a great deal of enthusiastic approval or admiration.",
        sentences: [
            "Critics {blank} {base} the young actress after her debut.",
            "The teacher {blank} {base} the students for their hard work.",
            "Fans {blank} {base} the team for their incredible performance.",
            "The manager {blank} {base} the intern for completing the project early."
        ],
        options: ["heap", "pile", "pour", "throw"]
    },
    {
        collocate: "receive", base: "nominations", phrase: "receive nominations", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To be officially proposed or shortlisted for an award or position.",
        sentences: [
            "The film {blank} five {base} at the awards ceremony.",
            "She {blank} {base} for both best director and best screenplay.",
            "The documentary {blank} {base} from several film festivals.",
            "To {blank} multiple {base} is a great honor for any artist."
        ],
        options: ["receive", "get", "win", "earn"]
    },
    {
        collocate: "reveal", base: "secrets", phrase: "reveal secrets", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To make hidden or private information known to others.",
        sentences: [
            "The journalist threatened to {blank} the company's {base}.",
            "She was pressured to {blank} government {base} to the press.",
            "He would never {blank} his friend's {base}.",
            "The autobiography {blank} many personal {base} about the star."
        ],
        options: ["reveal", "show", "tell", "open"]
    },
    {
        collocate: "pick", base: "fight", phrase: "pick a fight", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To deliberately start a conflict or argument with someone.",
        sentences: [
            "He's always trying to {blank} a {base} with everyone.",
            "Don't {blank} a {base} you can't win.",
            "The bully tried to {blank} a {base} in the playground.",
            "She didn't want to {blank} a {base} over something so trivial."
        ],
        options: ["pick", "start", "make", "get"]
    },
    {
        collocate: "cloud", base: "judgement", phrase: "cloud your judgement", type: "verb-noun", topic: "people", level: "high",
        meaning: "To make it difficult to think clearly or make good decisions.",
        sentences: [
            "Don't let anger {blank} your {base}.",
            "Emotions can easily {blank} your {base} in difficult situations.",
            "Fear of failure often {blank} people's {base}.",
            "Alcohol tends to {blank} your {base} significantly."
        ],
        options: ["cloud", "blur", "block", "shade"]
    },
    {
        collocate: "hone", base: "skills", phrase: "hone skills", type: "verb-noun", topic: "work", level: "high",
        meaning: "To sharpen and refine one's abilities through practice.",
        sentences: [
            "She spent years {blank} her writing {base}.",
            "The workshop is designed to help employees {blank} their leadership {base}.",
            "Athletes must constantly {blank} their {base} to stay competitive.",
            "He took an internship to {blank} his technical {base}."
        ],
        options: ["hone", "sharpen", "polish", "build"]
    },
    {
        collocate: "pursue", base: "interests", phrase: "pursue interests", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To actively follow or engage in things that you enjoy or are curious about.",
        sentences: [
            "Retirement gave her time to {blank} her {base} in painting.",
            "Students should be encouraged to {blank} their own {base}.",
            "He left his corporate job to {blank} his creative {base}.",
            "The program allows participants to {blank} personal {base}."
        ],
        options: ["pursue", "follow", "chase", "seek"]
    },
    {
        collocate: "provide", base: "reference", phrase: "provide a reference", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To supply a recommendation or testimonial for someone.",
        sentences: [
            "Would you be willing to {blank} a {base} for my job application?",
            "Her former boss agreed to {blank} a glowing {base}.",
            "Applicants must {blank} at least two professional {base}.",
            "The professor was happy to {blank} a {base} for his student."
        ],
        options: ["provide", "give", "write", "send"]
    },
    {
        collocate: "reveal", base: "talent", phrase: "reveal a talent", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To show or demonstrate a natural ability that was previously unknown.",
        sentences: [
            "The audition {blank} her extraordinary {base} for singing.",
            "He {blank} a surprising {base} for comedy during the show.",
            "The competition {blank} hidden {base} among the contestants.",
            "She {blank} a remarkable {base} for languages at a young age."
        ],
        options: ["reveal", "show", "display", "uncover"]
    },
    {
        collocate: "accumulate", base: "experience", phrase: "accumulate experience", type: "verb-noun", topic: "work", level: "high",
        meaning: "To gradually gather knowledge and skills over time through practice.",
        sentences: [
            "You need to {blank} enough {base} before applying for senior roles.",
            "She {blank} years of {base} working in different countries.",
            "Volunteering is a great way to {blank} practical {base}.",
            "The more {base} you {blank}, the more confident you become."
        ],
        options: ["accumulate", "collect", "gather", "build"]
    },
    {
        collocate: "publish", base: "findings", phrase: "publish findings", type: "verb-noun", topic: "education", level: "college",
        meaning: "To make the results of research publicly available through publication.",
        sentences: [
            "The research team plans to {blank} their {base} in a leading journal.",
            "Scientists must {blank} their {base} for peer review.",
            "The university {blank} its {base} on climate change last week.",
            "It's essential to {blank} {base} so others can build on the work."
        ],
        options: ["publish", "release", "print", "post"]
    },
    {
        collocate: "deploy", base: "troops", phrase: "deploy troops", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To send military forces to a specific location for action.",
        sentences: [
            "The government decided to {blank} additional {base} to the border.",
            "NATO agreed to {blank} peacekeeping {base} in the region.",
            "The general ordered the army to {blank} {base} immediately.",
            "They {blank} thousands of {base} during the crisis."
        ],
        options: ["deploy", "send", "move", "place"]
    },
    {
        collocate: "call for", base: "ceasefire", phrase: "call for a ceasefire", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To demand or urge that fighting stop between opposing sides.",
        sentences: [
            "The United Nations {blank} an immediate {base}.",
            "World leaders {blank} a {base} to end the violence.",
            "Civilians {blank} a {base} as the conflict intensified.",
            "The opposition party {blank} a {base} in parliament."
        ],
        options: ["call for", "ask for", "demand for", "shout for"]
    },
    {
        collocate: "restore", base: "peace", phrase: "restore peace", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To bring back a state of calm and absence of conflict.",
        sentences: [
            "The new government worked hard to {blank} {base} in the region.",
            "It took years to {blank} {base} after the civil war.",
            "International efforts helped {blank} {base} between the two nations.",
            "The peacekeepers were sent to {blank} {base} and stability."
        ],
        options: ["restore", "return", "bring", "rebuild"]
    },
    {
        collocate: "withdraw", base: "troops", phrase: "withdraw troops", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To pull military forces back from a location.",
        sentences: [
            "The president announced plans to {blank} all {base} by December.",
            "They were pressured to {blank} their {base} from the occupied territory.",
            "The decision to {blank} {base} was controversial.",
            "Both sides agreed to {blank} their {base} from the border zone."
        ],
        options: ["withdraw", "remove", "pull", "take"]
    },
    {
        collocate: "serve", base: "sentence", phrase: "serve a sentence", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To spend a period of time in prison as punishment for a crime.",
        sentences: [
            "He is currently {blank} a ten-year {base} for fraud.",
            "She {blank} her {base} at a minimum-security prison.",
            "The judge ordered him to {blank} a life {base}.",
            "After {blank} his {base}, he struggled to find employment."
        ],
        options: ["serve", "do", "spend", "complete"]
    },
    {
        collocate: "give", base: "evidence", phrase: "give evidence", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To provide testimony or information in a legal proceeding.",
        sentences: [
            "The witness was called to {blank} {base} in court.",
            "She was nervous about having to {blank} {base} against her employer.",
            "He refused to {blank} {base} without a lawyer present.",
            "Several experts were asked to {blank} {base} at the hearing."
        ],
        options: ["give", "make", "tell", "say"]
    },
    {
        collocate: "dismiss", base: "case", phrase: "dismiss the case", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To officially reject or throw out a legal case.",
        sentences: [
            "The judge decided to {blank} the {base} due to lack of evidence.",
            "The court {blank} the {base} after the key witness withdrew.",
            "Her lawyers asked the judge to {blank} the {base}.",
            "If there's no proof, the court will {blank} the {base}."
        ],
        options: ["dismiss", "drop", "close", "reject"]
    },
    {
        collocate: "contest", base: "verdict", phrase: "contest the verdict", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To formally challenge or dispute a court's decision.",
        sentences: [
            "The defense team plans to {blank} the {base} on appeal.",
            "She decided to {blank} the {base} because she believed it was unjust.",
            "Lawyers can {blank} a {base} if new evidence emerges.",
            "The family will {blank} the {base} in a higher court."
        ],
        options: ["contest", "challenge", "dispute", "fight"]
    },
    {
        collocate: "overturn", base: "verdict", phrase: "overturn a verdict", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To reverse or cancel a legal decision made by a court.",
        sentences: [
            "The appeal court decided to {blank} the original {base}.",
            "New DNA evidence helped {blank} the guilty {base}.",
            "It's rare for a higher court to {blank} a {base}.",
            "The lawyer fought for years to {blank} the wrongful {base}."
        ],
        options: ["overturn", "reverse", "cancel", "change"]
    },
    {
        collocate: "supplement", base: "income", phrase: "supplement income", type: "verb-noun", topic: "money", level: "high",
        meaning: "To earn additional money on top of one's main earnings.",
        sentences: [
            "She took a part-time job to {blank} her {base}.",
            "Many teachers {blank} their {base} by tutoring after school.",
            "Freelancing is a popular way to {blank} your {base}.",
            "He drives for a ride-sharing service to {blank} his {base}."
        ],
        options: ["supplement", "add", "increase", "boost"]
    },
    {
        collocate: "push back", base: "frontiers", phrase: "push back the frontiers", type: "verb-noun", topic: "technology", level: "professional",
        meaning: "To expand the limits of knowledge or what is possible.",
        sentences: [
            "Scientists continue to {blank} the {base} of medical research.",
            "The space program aims to {blank} the {base} of human exploration.",
            "AI is helping {blank} the {base} of what technology can achieve.",
            "Each generation {blank} the {base} of innovation further."
        ],
        options: ["push back", "move back", "pull back", "set back"]
    },
    {
        collocate: "cause", base: "systems to crash", phrase: "cause systems to crash", type: "verb-noun", topic: "technology", level: "middle",
        meaning: "To make computer systems stop working suddenly.",
        sentences: [
            "The virus {blank} multiple {base} across the network.",
            "A power surge can {blank} {base} without warning.",
            "The software update {blank} several {base} in the office.",
            "Too many users logging in at once can {blank} {base}."
        ],
        options: ["cause", "make", "force", "let"]
    },
    {
        collocate: "provide", base: "shelter", phrase: "provide shelter", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To offer a safe place for people to stay, especially in emergencies.",
        sentences: [
            "The charity {blank} {base} for homeless families.",
            "Schools were opened to {blank} emergency {base} during the storm.",
            "The government must {blank} adequate {base} for refugees.",
            "Local churches {blank} temporary {base} after the flood."
        ],
        options: ["provide", "give", "offer", "supply"]
    },
    {
        collocate: "claim", base: "benefits", phrase: "claim benefits", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To apply for or request government financial assistance.",
        sentences: [
            "After losing his job, he had to {blank} unemployment {base}.",
            "Thousands of people {blank} disability {base} each year.",
            "She wasn't sure if she was eligible to {blank} {base}.",
            "You can {blank} {base} online through the government portal."
        ],
        options: ["claim", "ask", "get", "take"]
    },
    {
        collocate: "enjoy", base: "good health", phrase: "enjoy good health", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To be in a state of being physically well and free from illness.",
        sentences: [
            "She continued to {blank} {base} well into her nineties.",
            "People who exercise regularly tend to {blank} better {base}.",
            "We hope you will {blank} {base} for many years to come.",
            "He was fortunate to {blank} excellent {base} throughout his life."
        ],
        options: ["enjoy", "have", "keep", "hold"]
    },
    {
        collocate: "have", base: "operation", phrase: "have an operation", type: "verb-noun", topic: "health", level: "elementary",
        meaning: "To undergo a surgical procedure performed by a doctor.",
        sentences: [
            "She needs to {blank} an {base} on her knee next month.",
            "He {blank} a major {base} last year and recovered well.",
            "The patient will {blank} the {base} under general anesthesia.",
            "Nobody wants to {blank} an {base}, but sometimes it's necessary."
        ],
        options: ["have", "take", "do", "get"]
    },
    {
        collocate: "exceed", base: "recommended dose", phrase: "exceed the recommended dose", type: "verb-noun", topic: "health", level: "high",
        meaning: "To take more medicine than the amount advised by doctors or labels.",
        sentences: [
            "Never {blank} the {base} stated on the packaging.",
            "She accidentally {blank} the {base} and felt dizzy.",
            "Patients who {blank} the {base} risk serious side effects.",
            "It's dangerous to {blank} the {base} of any medication."
        ],
        options: ["exceed", "pass", "break", "cross"]
    },
    {
        collocate: "handle", base: "difficult situations", phrase: "handle difficult situations", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To deal with challenging circumstances effectively.",
        sentences: [
            "A good manager knows how to {blank} {base} calmly.",
            "She learned to {blank} {base} during her years in customer service.",
            "Training helps employees {blank} {base} with confidence.",
            "He always {blank} {base} better than anyone on the team."
        ],
        options: ["handle", "manage", "deal", "control"]
    },
    {
        collocate: "meet", base: "challenges", phrase: "meet challenges", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To confront and deal with difficult tasks or situations.",
        sentences: [
            "The team is ready to {blank} whatever {base} lie ahead.",
            "She has proven her ability to {blank} tough {base}.",
            "Companies must {blank} new {base} in the digital age.",
            "He was determined to {blank} every {base} head-on."
        ],
        options: ["meet", "face", "take", "hit"]
    },
    {
        collocate: "wear", base: "traditional dress", phrase: "wear traditional dress", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To put on clothing that represents one's cultural heritage.",
        sentences: [
            "Many people {blank} {base} during national celebrations.",
            "She loves to {blank} {base} at cultural festivals.",
            "Students were invited to {blank} {base} for the school event.",
            "The dancers {blank} colorful {base} during the parade."
        ],
        options: ["wear", "put", "dress", "carry"]
    },
    {
        collocate: "proclaim", base: "victory", phrase: "proclaim victory", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To officially or publicly declare that one has won.",
        sentences: [
            "The general {blank} {base} after the final battle.",
            "It's too early to {blank} {base} — the votes are still being counted.",
            "The team {blank} {base} with a lap of honor around the stadium.",
            "Both candidates attempted to {blank} {base} on election night."
        ],
        options: ["proclaim", "declare", "announce", "claim"]
    },
    {
        collocate: "impose", base: "censorship", phrase: "impose censorship", type: "verb-noun", topic: "technology", level: "professional",
        meaning: "To officially suppress or control information and communication.",
        sentences: [
            "The government tried to {blank} strict {base} on the media.",
            "Some countries {blank} internet {base} to control public opinion.",
            "Critics argue that {blank} {base} violates freedom of speech.",
            "The authorities {blank} heavy {base} during the political crisis."
        ],
        options: ["impose", "place", "enforce", "apply"]
    },
    {
        collocate: "carry out", base: "risk assessment", phrase: "carry out a risk assessment", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To evaluate potential dangers and hazards in a situation.",
        sentences: [
            "Before the event, they need to {blank} a thorough {base}.",
            "The safety team must {blank} a {base} for each project.",
            "Companies are legally required to {blank} a {base} annually.",
            "She was asked to {blank} a {base} before the construction began."
        ],
        options: ["carry out", "do out", "take out", "run out"]
    },
    {
        collocate: "put in", base: "application", phrase: "put in an application", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To formally submit a request, especially for a job or permit.",
        sentences: [
            "She {blank} an {base} for the marketing position last week.",
            "You should {blank} an {base} before the deadline closes.",
            "He {blank} an {base} for planning permission to build an extension.",
            "Over two hundred people {blank} an {base} for the role."
        ],
        options: ["put in", "send in", "hand in", "turn in"]
    },
    {
        collocate: "hold", base: "someone in contempt", phrase: "hold someone in contempt", type: "verb-noun", topic: "people", level: "professional",
        meaning: "To regard someone with strong disrespect or disdain.",
        sentences: [
            "She {blank} anyone who lies {base}.",
            "The judge threatened to {blank} the witness {base} for refusing to answer.",
            "He {blank} dishonest politicians {base}.",
            "Many colleagues {blank} him {base} for his unethical behavior."
        ],
        options: ["hold", "keep", "have", "put"]
    },
    {
        collocate: "poison", base: "atmosphere", phrase: "poison the atmosphere", type: "verb-noun", topic: "people", level: "high",
        meaning: "To create a hostile or unpleasant mood in a group or environment.",
        sentences: [
            "His constant negativity {blank} the {base} in the office.",
            "One bitter argument can {blank} the {base} for weeks.",
            "Gossip and rumors quickly {blank} the {base} at work.",
            "Don't let one bad incident {blank} the {base} for everyone."
        ],
        options: ["poison", "spoil", "ruin", "damage"]
    },
    {
        collocate: "shirk", base: "responsibilities", phrase: "shirk responsibilities", type: "verb-noun", topic: "work", level: "high",
        meaning: "To avoid or neglect duties that one should fulfill.",
        sentences: [
            "A good leader never {blank} their {base}.",
            "He was fired for consistently {blank} his {base}.",
            "You can't just {blank} your {base} and expect others to pick up the slack.",
            "The company was accused of {blank} its environmental {base}."
        ],
        options: ["shirk", "avoid", "dodge", "skip"]
    },
    {
        collocate: "spring to", base: "someone's defence", phrase: "spring to someone's defence", type: "verb-noun", topic: "people", level: "high",
        meaning: "To quickly speak up or act to protect someone who is being criticized.",
        sentences: [
            "Her colleagues immediately {blank} her {base} during the meeting.",
            "He always {blank} his sister's {base} when others made fun of her.",
            "The public {blank} the teacher's {base} after the unfair dismissal.",
            "Nobody {blank} his {base}, and he felt completely alone."
        ],
        options: ["spring to", "jump to", "rush to", "run to"]
    },
    {
        collocate: "put in", base: "appearance", phrase: "put in an appearance", type: "verb-noun", topic: "people", level: "high",
        meaning: "To attend an event briefly, often out of obligation rather than desire.",
        sentences: [
            "She decided to {blank} an {base} at the office party.",
            "He only {blank} a brief {base} before leaving early.",
            "The celebrity {blank} a quick {base} at the charity gala.",
            "You should at least {blank} an {base} at the reception."
        ],
        options: ["put in", "make in", "show in", "turn in"]
    },
    {
        collocate: "share", base: "gossip", phrase: "share gossip", type: "verb-noun", topic: "people", level: "elementary",
        meaning: "To tell casual or unverified stories about other people.",
        sentences: [
            "The neighbors always {blank} {base} over the garden fence.",
            "She couldn't resist {blank} a bit of {base} with her coworker.",
            "People love to {blank} {base} at social gatherings.",
            "He refused to {blank} {base} about his colleagues."
        ],
        options: ["share", "tell", "spread", "say"]
    },
    {
        collocate: "act on", base: "suggestion", phrase: "act on a suggestion", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To take action based on advice or a recommendation given by someone.",
        sentences: [
            "The manager decided to {blank} the employee's {base}.",
            "She {blank} his {base} and applied for the scholarship.",
            "If you {blank} my {base}, you'll save a lot of money.",
            "The committee refused to {blank} any {base} from the public."
        ],
        options: ["act on", "work on", "move on", "go on"]
    },
    {
        collocate: "come up to", base: "standard", phrase: "come up to standard", type: "verb-noun", topic: "work", level: "high",
        meaning: "To meet or reach the expected level of quality.",
        sentences: [
            "The work didn't {blank} {base} and had to be redone.",
            "Every product must {blank} {base} before it's shipped.",
            "If the building doesn't {blank} {base}, it won't pass inspection.",
            "Her performance recently hasn't {blank} {base}."
        ],
        options: ["come up to", "reach up to", "get up to", "rise up to"]
    },
    {
        collocate: "graduate from", base: "university", phrase: "graduate from university", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To successfully complete a degree program at a university.",
        sentences: [
            "She {blank} {base} with honors last year.",
            "He plans to {blank} {base} by the time he's twenty-two.",
            "Many students who {blank} {base} struggle to find jobs immediately.",
            "After she {blank} {base}, she traveled the world for a year."
        ],
        options: ["graduate from", "finish from", "complete from", "leave from"]
    },
    {
        collocate: "write", base: "critical analysis", phrase: "write a critical analysis", type: "verb-noun", topic: "education", level: "college",
        meaning: "To compose a detailed and evaluative examination of a text or topic.",
        sentences: [
            "Students are required to {blank} a {base} of the novel.",
            "She spent two weeks {blank} a {base} of the research paper.",
            "Learning to {blank} a {base} is an essential academic skill.",
            "The professor asked us to {blank} a {base} of the economic policy."
        ],
        options: ["write", "make", "do", "create"]
    },
    {
        collocate: "make", base: "broad generalisations", phrase: "make broad generalisations", type: "verb-noun", topic: "people", level: "high",
        meaning: "To make sweeping statements that apply too widely without nuance.",
        sentences: [
            "It's unfair to {blank} {base} about an entire culture.",
            "Politicians often {blank} {base} to win votes.",
            "You shouldn't {blank} {base} based on a single example.",
            "The article {blank} {base} without citing any evidence."
        ],
        options: ["make", "do", "create", "give"]
    },
    {
        collocate: "get stuck in", base: "traffic", phrase: "get stuck in traffic", type: "verb-noun", topic: "travel", level: "elementary",
        meaning: "To be unable to move forward due to heavy road congestion.",
        sentences: [
            "I {blank} {base} and arrived an hour late.",
            "She always {blank} {base} on her way to work.",
            "We {blank} {base} near the city center during rush hour.",
            "If you leave now, you might {blank} {base}."
        ],
        options: ["get stuck in", "get caught in", "get held in", "get kept in"]
    },
    {
        collocate: "bring", base: "traffic to a standstill", phrase: "bring traffic to a standstill", type: "verb-noun", topic: "travel", level: "high",
        meaning: "To cause traffic to stop moving completely.",
        sentences: [
            "The accident {blank} {base} for several hours.",
            "Heavy snowfall {blank} {base} across the region.",
            "The protest march {blank} {base} in the city center.",
            "Road construction can {blank} {base} during peak hours."
        ],
        options: ["bring", "put", "take", "set"]
    },
    {
        collocate: "miss", base: "penalty", phrase: "miss a penalty", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To fail to score from a penalty kick in football.",
        sentences: [
            "The striker {blank} a crucial {base} in the final.",
            "He has never {blank} a {base} in his entire career.",
            "She {blank} the {base} by hitting the crossbar.",
            "If you {blank} a {base} in a shootout, it can cost your team the game."
        ],
        options: ["miss", "lose", "fail", "drop"]
    },
    {
        collocate: "award", base: "damages", phrase: "award damages", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To grant a sum of money to someone as legal compensation.",
        sentences: [
            "The court {blank} substantial {base} to the injured worker.",
            "The jury decided to {blank} {base} of two million dollars.",
            "If negligence is proven, the judge may {blank} {base}.",
            "The company was ordered to {blank} {base} to the affected families."
        ],
        options: ["award", "give", "grant", "pay"]
    },
    {
        collocate: "spend", base: "fortune", phrase: "spend a fortune", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To pay a very large amount of money on something.",
        sentences: [
            "They {blank} a {base} renovating the old house.",
            "She {blank} a {base} on designer clothes every season.",
            "You don't need to {blank} a {base} to have a good holiday.",
            "The government {blank} a {base} on the failed project."
        ],
        options: ["spend", "pay", "use", "waste"]
    },
    {
        collocate: "borrow", base: "heavily", phrase: "borrow heavily", type: "verb-noun", topic: "money", level: "high",
        meaning: "To take large amounts of money as loans.",
        sentences: [
            "The company had to {blank} {base} to fund the expansion.",
            "Some countries {blank} {base} from international banks.",
            "She warned him not to {blank} too {base} from the bank.",
            "If you {blank} {base}, you'll struggle with repayments later."
        ],
        options: ["borrow", "lend", "loan", "take"]
    },
    {
        collocate: "write off", base: "debts", phrase: "write off debts", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To officially cancel debts and accept that the money will not be recovered.",
        sentences: [
            "The bank decided to {blank} the unpaid {base}.",
            "Some charities campaign for wealthy nations to {blank} poor countries' {base}.",
            "The company was forced to {blank} millions in bad {base}.",
            "It's rare for lenders to {blank} {base} entirely."
        ],
        options: ["write off", "cut off", "pay off", "sign off"]
    },
    {
        collocate: "curb", base: "inflation", phrase: "curb inflation", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To control or reduce the rate at which prices are rising.",
        sentences: [
            "The central bank raised interest rates to {blank} {base}.",
            "Governments struggle to {blank} {base} without hurting growth.",
            "New policies were introduced to {blank} rising {base}.",
            "It's crucial to {blank} {base} before it spirals out of control."
        ],
        options: ["curb", "cut", "stop", "limit"]
    },
    {
        collocate: "steer", base: "economy", phrase: "steer the economy", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To guide or direct the economic course of a country.",
        sentences: [
            "The finance minister worked to {blank} the {base} through the recession.",
            "It takes skilled leadership to {blank} a fragile {base}.",
            "The new president promised to {blank} the {base} toward growth.",
            "Central banks play a key role in {blank} the national {base}."
        ],
        options: ["steer", "drive", "lead", "push"]
    },
    {
        collocate: "increase", base: "output", phrase: "increase output", type: "verb-noun", topic: "work", level: "high",
        meaning: "To produce more goods or work in a given period.",
        sentences: [
            "The factory managed to {blank} its {base} by 20% this quarter.",
            "New technology helped {blank} {base} without hiring more staff.",
            "The company needs to {blank} {base} to meet growing demand.",
            "Automation is the fastest way to {blank} {base}."
        ],
        options: ["increase", "raise", "grow", "expand"]
    },
    {
        collocate: "build on", base: "success", phrase: "build on success", type: "verb-noun", topic: "work", level: "high",
        meaning: "To use past achievements as a foundation for further progress.",
        sentences: [
            "The team aims to {blank} last year's {base}.",
            "We need to {blank} this {base} and push for even better results.",
            "The company plans to {blank} its recent {base} with a new product launch.",
            "She was determined to {blank} her early {base} in the industry."
        ],
        options: ["build on", "grow on", "add on", "work on"]
    },
    {
        collocate: "tackle", base: "social exclusion", phrase: "tackle social exclusion", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To take active steps to address the marginalization of certain groups in society.",
        sentences: [
            "The government introduced programs to {blank} {base}.",
            "Charities play a vital role in {blank} {base}.",
            "New legislation aims to {blank} {base} in education.",
            "Communities must work together to {blank} {base}."
        ],
        options: ["tackle", "fight", "solve", "fix"]
    },
    {
        collocate: "push up", base: "costs", phrase: "push up costs", type: "verb-noun", topic: "money", level: "high",
        meaning: "To cause expenses or prices to increase.",
        sentences: [
            "Rising fuel prices are {blank} production {base}.",
            "New regulations could {blank} {base} for small businesses.",
            "Supply chain disruptions {blank} {base} across the industry.",
            "Inflation continues to {blank} living {base}."
        ],
        options: ["push up", "pull up", "drive up", "bring up"]
    },
    {
        collocate: "make", base: "plea", phrase: "make a plea", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To make an urgent and emotional request for something.",
        sentences: [
            "The victim's family {blank} a public {base} for information.",
            "The charity {blank} a desperate {base} for donations.",
            "She {blank} a heartfelt {base} for peace during her speech.",
            "The mayor {blank} a {base} for calm after the incident."
        ],
        options: ["make", "do", "give", "put"]
    },
    {
        collocate: "incite", base: "violence", phrase: "incite violence", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To encourage or stir up violent behavior among people.",
        sentences: [
            "He was arrested for attempting to {blank} {base} at the rally.",
            "Social media posts that {blank} {base} should be removed.",
            "The speech was accused of {blank} {base} against minorities.",
            "Anyone who {blank} {base} will face criminal charges."
        ],
        options: ["incite", "cause", "start", "create"]
    },
    {
        collocate: "stockpile", base: "weapons", phrase: "stockpile weapons", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To accumulate and store a large quantity of arms or military equipment.",
        sentences: [
            "The rebels were discovered trying to {blank} {base} in the mountains.",
            "Several nations continue to {blank} nuclear {base}.",
            "It's illegal for civilians to {blank} military-grade {base}.",
            "The group attempted to {blank} {base} before the uprising."
        ],
        options: ["stockpile", "store", "collect", "gather"]
    },
    {
        collocate: "lift", base: "blockade", phrase: "lift a blockade", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To remove or end a restriction that prevents goods or people from moving freely.",
        sentences: [
            "The UN called on the country to {blank} the naval {base}.",
            "After months of negotiations, they finally agreed to {blank} the {base}.",
            "Civilians desperately need the government to {blank} the {base}.",
            "The decision to {blank} the {base} brought immediate relief."
        ],
        options: ["lift", "raise", "remove", "end"]
    },
    {
        collocate: "suffer", base: "casualties", phrase: "suffer casualties", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To experience deaths or injuries, especially in conflict.",
        sentences: [
            "Both sides {blank} heavy {base} during the battle.",
            "The troops {blank} significant {base} in the ambush.",
            "Civilians continue to {blank} {base} from the ongoing conflict.",
            "The regiment {blank} the worst {base} of the entire war."
        ],
        options: ["suffer", "take", "have", "get"]
    },
    {
        collocate: "enjoy", base: "meteoric rise", phrase: "enjoy a meteoric rise", type: "verb-noun", topic: "people", level: "professional",
        meaning: "To experience a rapid and impressive increase in fame or success.",
        sentences: [
            "The young actress {blank} a {base} to stardom.",
            "The startup {blank} a {base} in the tech industry.",
            "He {blank} a {base} through the ranks of the company.",
            "The singer {blank} a {base} after her viral debut."
        ],
        options: ["enjoy", "have", "experience", "make"]
    },
    {
        collocate: "sell", base: "story", phrase: "sell a story", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To provide information to a newspaper or media outlet in exchange for money.",
        sentences: [
            "The former employee threatened to {blank} his {base} to the tabloids.",
            "She was offered thousands to {blank} her {base} to the press.",
            "It's unethical for staff to {blank} their employer's {base}.",
            "He refused to {blank} the {base} despite several media offers."
        ],
        options: ["sell", "tell", "give", "send"]
    },
    {
        collocate: "make", base: "success of", phrase: "make a success of something", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To achieve a good result or outcome in an endeavor.",
        sentences: [
            "She was determined to {blank} a {base} her new business.",
            "With enough effort, you can {blank} a {base} anything.",
            "He {blank} a great {base} his career in finance.",
            "The new manager is committed to {blank} a {base} this department."
        ],
        options: ["make", "do", "have", "create"]
    },
    {
        collocate: "celebrate", base: "achievements", phrase: "celebrate achievements", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To recognize and honor accomplishments in a joyful way.",
        sentences: [
            "The school held a ceremony to {blank} student {base}.",
            "It's important to {blank} small {base} along the way.",
            "The company gathers annually to {blank} team {base}.",
            "Let's take a moment to {blank} everyone's {base} this year."
        ],
        options: ["celebrate", "honor", "praise", "mark"]
    },
    {
        collocate: "pass", base: "laws", phrase: "pass new laws", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To officially approve and enact new legislation through a governing body.",
        sentences: [
            "The government plans to {blank} new {base} to protect consumers.",
            "Parliament voted to {blank} stricter {base} on emissions.",
            "It took months of debate before they could {blank} the new {base}.",
            "The council will {blank} {base} regulating construction in the area."
        ],
        options: ["pass", "make", "do", "throw"]
    },
    {
        collocate: "satisfy", base: "requirements", phrase: "satisfy requirements", type: "verb-noun", topic: "work", level: "college",
        meaning: "To meet or fulfill the conditions that are demanded or necessary.",
        sentences: [
            "Applicants must {blank} all the {base} to be considered.",
            "The product failed to {blank} the minimum safety {base}.",
            "You need to {blank} the academic {base} before enrolling.",
            "The proposal does not {blank} the client's {base}."
        ],
        options: ["satisfy", "make", "do", "give"]
    },
    {
        collocate: "minimise", base: "danger", phrase: "minimise danger", type: "verb-noun", topic: "health", level: "college",
        meaning: "To reduce the level of risk or threat to the lowest possible degree.",
        sentences: [
            "Wearing protective gear helps to {blank} {base} on the worksite.",
            "The team took precautions to {blank} {base} during the experiment.",
            "New protocols were introduced to {blank} {base} to patients.",
            "We must {blank} the {base} of flooding by improving drainage."
        ],
        options: ["minimise", "cut", "stop", "break"]
    },
    {
        collocate: "cut through", base: "red tape", phrase: "cut through red tape", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To bypass or overcome excessive bureaucracy and unnecessary procedures.",
        sentences: [
            "The new minister promised to {blank} {base} and speed up approvals.",
            "Small businesses struggle to {blank} government {base}.",
            "We need someone who can {blank} the {base} and get things done.",
            "Technology can help {blank} {base} in public services."
        ],
        options: ["cut through", "break", "push", "pull"]
    },
    {
        collocate: "reduce", base: "carbon footprint", phrase: "reduce carbon footprint", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To lower the total amount of greenhouse gases one produces.",
        sentences: [
            "Using public transport can help {blank} your {base}.",
            "The company aims to {blank} its {base} by 50% by 2030.",
            "Simple lifestyle changes can {blank} your {base} significantly.",
            "Governments are encouraging citizens to {blank} their {base}."
        ],
        options: ["reduce", "cut", "drop", "lose"]
    },
    {
        collocate: "change", base: "ways", phrase: "change our ways", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To alter one's habits or behaviour, usually for the better.",
        sentences: [
            "If we want to save the planet, we must {blank} our {base}.",
            "The company was forced to {blank} its {base} after the scandal.",
            "It is never too late to {blank} your {base}.",
            "Society needs to {blank} its {base} regarding waste."
        ],
        options: ["change", "turn", "shift", "move"]
    },
    {
        collocate: "provide", base: "relief", phrase: "provide relief", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To give assistance or comfort to those who are suffering.",
        sentences: [
            "The charity rushed to {blank} {base} to the flood victims.",
            "This medication should {blank} temporary {base} from the pain.",
            "The government promised to {blank} {base} for struggling families.",
            "Volunteers worked around the clock to {blank} {base}."
        ],
        options: ["provide", "give", "make", "do"]
    },
    {
        collocate: "break", base: "cycle", phrase: "break the cycle", type: "verb-noun", topic: "people", level: "college",
        meaning: "To put an end to a repeated pattern of events, especially a negative one.",
        sentences: [
            "Education can help {blank} the {base} of poverty.",
            "It is hard to {blank} the {base} of addiction without support.",
            "The programme aims to {blank} the {base} of reoffending.",
            "Only determination can {blank} the {base} of failure."
        ],
        options: ["break", "stop", "end", "cut"]
    },
    {
        collocate: "push back", base: "frontiers", phrase: "push back frontiers", type: "verb-noun", topic: "technology", level: "college",
        meaning: "To extend the limits of what is known or possible.",
        sentences: [
            "Scientists continue to {blank} the {base} of knowledge.",
            "Space exploration helps us {blank} the {base} of discovery.",
            "The research team is determined to {blank} the {base} of medicine.",
            "Technology allows us to {blank} the {base} of what is achievable."
        ],
        options: ["push back", "break", "move", "shift"]
    },
    {
        collocate: "reduce", base: "stress", phrase: "reduce stress", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To lower the level of mental or emotional tension one experiences.",
        sentences: [
            "Regular exercise is one of the best ways to {blank} {base}.",
            "Meditation can help {blank} {base} and improve focus.",
            "The company introduced flexible hours to {blank} employee {base}.",
            "Taking breaks during work helps {blank} {base} levels."
        ],
        options: ["reduce", "lower", "cut", "drop"]
    },
    {
        collocate: "fight for", base: "one's life", phrase: "fight for one's life", type: "verb-noun", topic: "health", level: "middle",
        meaning: "To struggle to survive when critically ill or in a life-threatening situation.",
        sentences: [
            "The accident victim is {blank} his {base} in hospital.",
            "Doctors worked tirelessly as the child {blank} her {base}.",
            "After the surgery, the patient was still {blank} his {base}.",
            "The injured climber was {blank} her {base} on the mountain."
        ],
        options: ["fight for", "struggle for", "battle for", "hold on to"]
    },
    {
        collocate: "escape", base: "punishment", phrase: "escape punishment", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To avoid being penalised for something wrong one has done.",
        sentences: [
            "The corrupt official managed to {blank} {base} for years.",
            "No one should be allowed to {blank} {base} for such crimes.",
            "He fled the country to {blank} {base}.",
            "Wealthy individuals sometimes {blank} {base} more easily than others."
        ],
        options: ["escape", "avoid", "evade", "miss"]
    },
    {
        collocate: "commit", base: "offence", phrase: "commit an offence", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To do something that is against the law or rules.",
        sentences: [
            "Anyone who drives under the influence will {blank} a serious {base}.",
            "He did not realise he had {blank} an {base}.",
            "It is possible to {blank} an {base} without knowing the law.",
            "The teenager was cautioned for having {blank} a minor {base}."
        ],
        options: ["commit", "do", "make", "perform"]
    },
    {
        collocate: "dismiss", base: "case", phrase: "dismiss a case", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To officially decide that a legal case should not continue.",
        sentences: [
            "The judge decided to {blank} the {base} due to lack of evidence.",
            "The court may {blank} the {base} if the prosecution is too weak.",
            "Lawyers argued that the court should {blank} the {base}.",
            "The appeal was denied and the judge {blank} the {base}."
        ],
        options: ["dismiss", "drop", "close", "end"]
    },
    {
        collocate: "contest", base: "verdict", phrase: "contest a verdict", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To formally challenge or dispute the outcome of a trial.",
        sentences: [
            "The defence team plans to {blank} the {base} in a higher court.",
            "She has every right to {blank} the {base}.",
            "It is expensive to {blank} a {base} on appeal.",
            "The family decided to {blank} the {base} after new evidence emerged."
        ],
        options: ["contest", "challenge", "dispute", "fight"]
    },
    {
        collocate: "appear in", base: "court", phrase: "appear in court", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To attend a legal proceeding as a defendant, witness, or party.",
        sentences: [
            "The suspect is due to {blank} {base} next Monday.",
            "She was summoned to {blank} {base} as a witness.",
            "He had to {blank} {base} to answer the charges.",
            "The celebrity was forced to {blank} {base} over the lawsuit."
        ],
        options: ["appear in", "go to", "attend", "visit"]
    },
    {
        collocate: "create", base: "instability", phrase: "create instability", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To cause a situation to become uncertain, unpredictable, or volatile.",
        sentences: [
            "Political corruption can {blank} {base} in a country.",
            "Rapid changes in leadership {blank} {base} within the organisation.",
            "Economic crises often {blank} social {base}.",
            "Foreign interference can {blank} regional {base}."
        ],
        options: ["create", "cause", "bring", "make"]
    },
    {
        collocate: "launch", base: "counter-attack", phrase: "launch a counter-attack", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To begin an attack in response to an enemy's offensive.",
        sentences: [
            "The army regrouped and prepared to {blank} a {base}.",
            "Within hours, the forces {blank} a decisive {base}.",
            "The general ordered his troops to {blank} a {base} at dawn.",
            "They managed to {blank} a successful {base} despite heavy losses."
        ],
        options: ["launch", "start", "begin", "make"]
    },
    {
        collocate: "bring", base: "stability", phrase: "bring stability", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To create conditions of steadiness and reliability in a situation.",
        sentences: [
            "The new government promised to {blank} {base} to the country.",
            "Investment can help {blank} economic {base} to the region.",
            "Strong leadership is needed to {blank} {base} to the organisation.",
            "The treaty was designed to {blank} long-term {base}."
        ],
        options: ["bring", "create", "make", "give"]
    },
    {
        collocate: "disband", base: "army", phrase: "disband an army", type: "verb-noun", topic: "daily", level: "professional",
        meaning: "To officially break up a military force and release its members.",
        sentences: [
            "After the war ended, the government decided to {blank} the rebel {base}.",
            "The peace agreement required both sides to {blank} their {base}.",
            "It is risky to {blank} an {base} without a reintegration plan.",
            "The victorious side demanded that the opposition {blank} its {base}."
        ],
        options: ["disband", "dissolve", "break up", "dismiss"]
    },
    {
        collocate: "heap", base: "praise", phrase: "heap praise", type: "verb-noun", topic: "people", level: "college",
        meaning: "To give someone a great deal of enthusiastic approval and admiration.",
        sentences: [
            "Critics {blank} {base} on the director's latest film.",
            "The manager {blank} {base} on the team for their effort.",
            "Fans {blank} {base} on the young singer after her debut.",
            "The teacher {blank} {base} on the student's essay."
        ],
        options: ["heap", "give", "pour", "throw"]
    },
    {
        collocate: "hold in", base: "contempt", phrase: "hold in contempt", type: "verb-noun", topic: "people", level: "professional",
        meaning: "To regard someone or something with strong disrespect and disapproval.",
        sentences: [
            "The public {blank} corrupt politicians in {base}.",
            "She {blank} dishonesty in complete {base}.",
            "The community {blank} the company in {base} for polluting the river.",
            "He was {blank} in {base} of court for refusing to testify."
        ],
        options: ["hold in", "keep in", "have in", "put in"]
    },
    {
        collocate: "cloud", base: "judgement", phrase: "cloud judgement", type: "verb-noun", topic: "people", level: "college",
        meaning: "To make it difficult to think clearly or make good decisions.",
        sentences: [
            "Anger can {blank} your {base} in critical situations.",
            "Do not let emotions {blank} your {base}.",
            "Fear often {blank} people's {base} during emergencies.",
            "Personal bias can {blank} a manager's {base}."
        ],
        options: ["cloud", "block", "blur", "hide"]
    },
    {
        collocate: "handle", base: "situations", phrase: "handle situations", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To manage and deal with circumstances, especially difficult ones.",
        sentences: [
            "Good managers know how to {blank} stressful {base}.",
            "The training prepares staff to {blank} emergency {base}.",
            "She learned how to {blank} difficult {base} through experience.",
            "Remaining calm helps you {blank} challenging {base}."
        ],
        options: ["handle", "manage", "deal with", "take"]
    },
    {
        collocate: "hold", base: "grudge", phrase: "hold a grudge", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To maintain feelings of resentment towards someone for a past wrong.",
        sentences: [
            "She tends to {blank} a {base} for a very long time.",
            "It is unhealthy to {blank} a {base} against old friends.",
            "He still {blank} a {base} about what happened years ago.",
            "Try not to {blank} a {base}; it only hurts you."
        ],
        options: ["hold", "keep", "carry", "bear"]
    },
    {
        collocate: "set", base: "precedent", phrase: "set a precedent", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To establish a standard or example that others may follow in the future.",
        sentences: [
            "This court ruling will {blank} an important {base} for future cases.",
            "The company's decision could {blank} a dangerous {base}.",
            "We do not want to {blank} a {base} by making exceptions.",
            "The agreement {blank} a positive {base} for trade negotiations."
        ],
        options: ["set", "make", "create", "establish"]
    },
    {
        collocate: "bear", base: "resemblance", phrase: "bear a resemblance", type: "verb-noun", topic: "people", level: "college",
        meaning: "To look similar to or share qualities with someone or something else.",
        sentences: [
            "The painting {blank} a striking {base} to the original.",
            "He {blank} a strong {base} to his late father.",
            "The new building {blank} little {base} to the old one.",
            "The story {blank} some {base} to real events."
        ],
        options: ["bear", "hold", "carry", "have"]
    },
    {
        collocate: "foster", base: "creativity", phrase: "foster creativity", type: "verb-noun", topic: "education", level: "college",
        meaning: "To encourage and promote the development of original thinking and imagination.",
        sentences: [
            "Good teachers know how to {blank} {base} in the classroom.",
            "The programme is designed to {blank} {base} among young people.",
            "Open-plan offices are supposed to {blank} {base}.",
            "Parents can {blank} {base} by giving children time to play."
        ],
        options: ["foster", "create", "build", "grow"]
    },
    {
        collocate: "nurture", base: "talent", phrase: "nurture talent", type: "verb-noun", topic: "education", level: "college",
        meaning: "To support and encourage the development of someone's natural abilities.",
        sentences: [
            "The academy was founded to {blank} young musical {base}.",
            "It is the school's duty to {blank} every child's {base}.",
            "Companies that {blank} {base} tend to retain their best staff.",
            "A good mentor knows how to {blank} {base} effectively."
        ],
        options: ["nurture", "develop", "grow", "raise"]
    },
    {
        collocate: "cultivate", base: "habits", phrase: "cultivate habits", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To deliberately develop and establish regular patterns of behaviour.",
        sentences: [
            "Successful people {blank} productive {base} early in life.",
            "Teachers help children {blank} good reading {base}.",
            "It takes discipline to {blank} healthy {base}.",
            "The course encourages students to {blank} better study {base}."
        ],
        options: ["cultivate", "develop", "build", "create"]
    },
    {
        collocate: "demonstrate", base: "competence", phrase: "demonstrate competence", type: "verb-noun", topic: "work", level: "college",
        meaning: "To show that one has the ability and skill to perform a task effectively.",
        sentences: [
            "Candidates must {blank} {base} during the interview process.",
            "She was able to {blank} {base} in all required areas.",
            "New employees are expected to {blank} {base} within the first month.",
            "The pilot must {blank} {base} before flying solo."
        ],
        options: ["demonstrate", "show", "prove", "display"]
    },
    {
        collocate: "acknowledge", base: "contribution", phrase: "acknowledge a contribution", type: "verb-noun", topic: "work", level: "college",
        meaning: "To recognise and express appreciation for someone's effort or help.",
        sentences: [
            "The CEO took a moment to {blank} the team's {base}.",
            "It is important to {blank} every volunteer's {base}.",
            "The professor {blank} the student's {base} to the research.",
            "Failing to {blank} someone's {base} can cause resentment."
        ],
        options: ["acknowledge", "recognise", "accept", "appreciate"]
    },
    {
        collocate: "assess", base: "performance", phrase: "assess performance", type: "verb-noun", topic: "work", level: "college",
        meaning: "To evaluate how well someone or something is doing against expected standards.",
        sentences: [
            "Managers are required to {blank} employee {base} annually.",
            "The board will {blank} the company's {base} over the past year.",
            "Teachers use exams to {blank} student {base}.",
            "It is difficult to {blank} {base} without clear criteria."
        ],
        options: ["assess", "evaluate", "measure", "check"]
    },
    {
        collocate: "evaluate", base: "options", phrase: "evaluate options", type: "verb-noun", topic: "work", level: "college",
        meaning: "To carefully consider and compare the different choices available.",
        sentences: [
            "We need time to {blank} all the available {base}.",
            "The committee met to {blank} the {base} before making a decision.",
            "You should {blank} your {base} carefully before investing.",
            "The team will {blank} the {base} and report back on Monday."
        ],
        options: ["evaluate", "consider", "review", "check"]
    },
    {
        collocate: "monitor", base: "progress", phrase: "monitor progress", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To regularly check and track how something is developing or advancing.",
        sentences: [
            "Teachers use regular tests to {blank} student {base}.",
            "The manager asked the team to {blank} {base} weekly.",
            "Doctors need to {blank} the patient's {base} after surgery.",
            "Software tools make it easy to {blank} project {base}."
        ],
        options: ["monitor", "track", "watch", "check"]
    },
    {
        collocate: "regulate", base: "industry", phrase: "regulate an industry", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To control and oversee an industry through rules and standards.",
        sentences: [
            "The government needs to {blank} the tech {base} more strictly.",
            "It is the agency's job to {blank} the food {base}.",
            "New laws were introduced to {blank} the financial {base}.",
            "Some argue it is better to let the {base} {blank} itself."
        ],
        options: ["regulate", "control", "manage", "run"]
    },
    {
        collocate: "enforce", base: "law", phrase: "enforce the law", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To make sure that laws are obeyed by taking action against those who break them.",
        sentences: [
            "It is the duty of the police to {blank} the {base}.",
            "The government must {blank} the {base} equally for all citizens.",
            "Without resources, it is hard to {blank} the {base} effectively.",
            "The new agency was created to {blank} environmental {base}."
        ],
        options: ["enforce", "apply", "follow", "keep"]
    },
    {
        collocate: "trigger", base: "reaction", phrase: "trigger a reaction", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To cause a response or chain of events, often unexpectedly.",
        sentences: [
            "The announcement could {blank} a strong public {base}.",
            "Certain foods may {blank} an allergic {base}.",
            "The news {blank} an immediate {base} from the markets.",
            "His comments {blank} a fierce {base} on social media."
        ],
        options: ["trigger", "cause", "start", "create"]
    },
    {
        collocate: "spark", base: "debate", phrase: "spark a debate", type: "verb-noun", topic: "education", level: "college",
        meaning: "To cause a discussion or argument to begin, often about a controversial topic.",
        sentences: [
            "The documentary {blank} a heated {base} about climate change.",
            "The politician's speech {blank} a national {base}.",
            "New research {blank} a {base} among scientists.",
            "The proposal is likely to {blank} a {base} in parliament."
        ],
        options: ["spark", "start", "create", "open"]
    },
    {
        collocate: "sustain", base: "growth", phrase: "sustain growth", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To maintain a rate of development or expansion over a long period.",
        sentences: [
            "It is difficult to {blank} rapid {base} without proper investment.",
            "The country needs new policies to {blank} economic {base}.",
            "Innovation is essential to {blank} long-term {base}.",
            "The company struggled to {blank} its early {base}."
        ],
        options: ["sustain", "maintain", "keep", "hold"]
    },
    {
        collocate: "endure", base: "hardship", phrase: "endure hardship", type: "verb-noun", topic: "people", level: "college",
        meaning: "To suffer through difficult and unpleasant conditions with patience.",
        sentences: [
            "Refugees often {blank} terrible {base} on their journey.",
            "The community had to {blank} great {base} during the famine.",
            "She {blank} years of {base} before things improved.",
            "Soldiers are trained to {blank} extreme {base}."
        ],
        options: ["endure", "suffer", "face", "bear"]
    },
    {
        collocate: "resist", base: "temptation", phrase: "resist temptation", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To control oneself and not give in to a strong desire to do something.",
        sentences: [
            "It is hard to {blank} the {base} to eat chocolate.",
            "She had to {blank} the {base} to check her phone during class.",
            "Dieters must learn to {blank} {base}.",
            "He could not {blank} the {base} to buy the expensive watch."
        ],
        options: ["resist", "avoid", "fight", "ignore"]
    },
    {
        collocate: "embrace", base: "change", phrase: "embrace change", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To accept and welcome new ideas, situations, or ways of doing things.",
        sentences: [
            "Successful companies learn to {blank} {base} rather than fear it.",
            "Employees must {blank} {base} to stay relevant.",
            "It can be difficult to {blank} {base} after years of routine.",
            "The new CEO encouraged everyone to {blank} {base}."
        ],
        options: ["embrace", "accept", "take", "welcome"]
    },
    {
        collocate: "protect", base: "environment", phrase: "protect the environment", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To take action to prevent damage to the natural world.",
        sentences: [
            "We all have a duty to {blank} the {base}.",
            "New laws were passed to {blank} the {base} from pollution.",
            "Recycling is one way to {blank} the {base}.",
            "The charity works to {blank} the {base} for future generations."
        ],
        options: ["protect", "save", "guard", "keep"]
    },
    {
        collocate: "demand", base: "explanation", phrase: "demand an explanation", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To insist firmly on being told the reason for something.",
        sentences: [
            "The parents {blank} an {base} from the school.",
            "Shareholders {blank} an {base} for the company's poor results.",
            "She called the manager to {blank} an {base}.",
            "The public has the right to {blank} an {base}."
        ],
        options: ["demand", "ask for", "request", "want"]
    },
    {
        collocate: "spread", base: "awareness", phrase: "spread awareness", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To make more people know about and understand an important issue.",
        sentences: [
            "The campaign aims to {blank} {base} about mental health.",
            "Social media is a powerful tool to {blank} {base}.",
            "Volunteers went door to door to {blank} {base} of the disease.",
            "Schools can help {blank} {base} among young people."
        ],
        options: ["spread", "raise", "create", "build"]
    },
    {
        collocate: "charge", base: "fee", phrase: "charge a fee", type: "verb-noun", topic: "money", level: "middle",
        meaning: "To ask for a specific amount of money in exchange for a service.",
        sentences: [
            "The lawyer will {blank} a flat {base} for the consultation.",
            "Some banks {blank} a monthly {base} for their accounts.",
            "The museum does not {blank} an entrance {base}.",
            "Delivery companies {blank} an extra {base} for weekend service."
        ],
        options: ["charge", "ask", "put", "set"]
    },
    {
        collocate: "drive", base: "innovation", phrase: "drive innovation", type: "verb-noun", topic: "technology", level: "college",
        meaning: "To push forward the development of new ideas, products, or methods.",
        sentences: [
            "Competition between companies helps {blank} {base}.",
            "Investment in research is essential to {blank} {base}.",
            "The government hopes to {blank} {base} in the energy sector.",
            "Startups continue to {blank} {base} across all industries."
        ],
        options: ["drive", "push", "lead", "create"]
    },
    {
        collocate: "plant", base: "seeds", phrase: "plant seeds", type: "verb-noun", topic: "food", level: "elementary",
        meaning: "To put seeds into the ground so that they will grow into plants.",
        sentences: [
            "The children learned to {blank} {base} in the school garden.",
            "Spring is the best time to {blank} {base} for summer flowers.",
            "She likes to {blank} vegetable {base} every year.",
            "The farmer used a machine to {blank} {base} across the field."
        ],
        options: ["plant", "put", "place", "drop"]
    },
    {
        collocate: "pour", base: "resources", phrase: "pour resources", type: "verb-noun", topic: "work", level: "college",
        meaning: "To invest a very large amount of money, time, or effort into something.",
        sentences: [
            "The company decided to {blank} {base} into the new project.",
            "The government {blank} enormous {base} into the healthcare system.",
            "It is unwise to {blank} all your {base} into one venture.",
            "They {blank} {base} into research but saw little return."
        ],
        options: ["pour", "put", "throw", "invest"]
    },
    {
        collocate: "deliver", base: "results", phrase: "deliver results", type: "verb-noun", topic: "work", level: "college",
        meaning: "To achieve and provide the outcomes or goals that were expected.",
        sentences: [
            "The new strategy is expected to {blank} {base} within six months.",
            "Managers are under pressure to {blank} {base} every quarter.",
            "If we work together, we can {blank} outstanding {base}.",
            "The programme failed to {blank} the promised {base}."
        ],
        options: ["deliver", "produce", "give", "make"]
    },
    {
        collocate: "release", base: "statement", phrase: "release a statement", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To officially publish or make public a formal declaration or announcement.",
        sentences: [
            "The company {blank} a {base} denying the allegations.",
            "The police {blank} an official {base} about the investigation.",
            "The celebrity's publicist {blank} a brief {base}.",
            "The university {blank} a {base} supporting academic freedom."
        ],
        options: ["release", "issue", "give", "make"]
    },
    {
        collocate: "launch", base: "investigation", phrase: "launch an investigation", type: "verb-noun", topic: "work", level: "college",
        meaning: "To begin a formal process of examining facts to discover the truth.",
        sentences: [
            "The police decided to {blank} a full {base} into the incident.",
            "The government was forced to {blank} an {base}.",
            "Regulators {blank} an {base} after receiving multiple complaints.",
            "The board agreed to {blank} an internal {base}."
        ],
        options: ["launch", "start", "open", "begin"]
    },
    {
        collocate: "mental", base: "agility", phrase: "mental agility", type: "adj-noun", topic: "education", level: "college",
        meaning: "The ability to think quickly and clearly.",
        sentences: [
            "Chess is a great way to develop {blank} {base}.",
            "Her {blank} {base} allowed her to solve problems faster than anyone.",
            "As we age, maintaining {blank} {base} becomes more important.",
            "The test was designed to measure {blank} {base} under pressure."
        ],
        options: ["mental", "brain", "mind", "head"]
    },
    {
        collocate: "gifted", base: "children", phrase: "gifted children", type: "adj-noun", topic: "education", level: "middle",
        meaning: "Children who have exceptionally high natural ability or intelligence.",
        sentences: [
            "The school has a special programme for {blank} {base}.",
            "{blank} {base} often need extra challenges to stay engaged.",
            "Identifying {blank} {base} early can help them reach their potential.",
            "Some {blank} {base} struggle socially despite their academic talent."
        ],
        options: ["gifted", "clever", "smart", "genius"]
    },
    {
        collocate: "core", base: "subjects", phrase: "core subjects", type: "adj-noun", topic: "education", level: "middle",
        meaning: "The main compulsory subjects studied in school.",
        sentences: [
            "Maths, English and science are {blank} {base} in most schools.",
            "Students must pass all {blank} {base} to graduate.",
            "The curriculum reform focuses on strengthening {blank} {base}.",
            "She excelled in all the {blank} {base} throughout her school years."
        ],
        options: ["core", "main", "chief", "prime"]
    },
    {
        collocate: "distinguished", base: "scholar", phrase: "distinguished scholar", type: "adj-noun", topic: "education", level: "college",
        meaning: "An academic who is highly respected and recognized for their work.",
        sentences: [
            "The university invited a {blank} {base} to deliver the lecture.",
            "She is a {blank} {base} in the field of molecular biology.",
            "The award is given annually to a {blank} {base}.",
            "As a {blank} {base}, his publications are widely cited."
        ],
        options: ["distinguished", "famous", "popular", "known"]
    },
    {
        collocate: "formal", base: "education", phrase: "formal education", type: "adj-noun", topic: "education", level: "middle",
        meaning: "Structured education provided by schools and universities.",
        sentences: [
            "He had no {blank} {base} but was self-taught in programming.",
            "Many entrepreneurs succeeded without much {blank} {base}.",
            "{blank} {base} is not the only path to success.",
            "She received her {blank} {base} at Oxford University."
        ],
        options: ["formal", "official", "proper", "regular"]
    },
    {
        collocate: "mature", base: "student", phrase: "mature student", type: "adj-noun", topic: "education", level: "middle",
        meaning: "An older student who returns to education after a break.",
        sentences: [
            "As a {blank} {base}, she brought valuable life experience to the course.",
            "The university offers support services for {blank} {base}s.",
            "Being a {blank} {base} can be challenging but rewarding.",
            "He enrolled as a {blank} {base} at the age of forty."
        ],
        options: ["mature", "adult", "old", "senior"]
    },
    {
        collocate: "natural", base: "talent", phrase: "natural talent", type: "adj-noun", topic: "education", level: "elementary",
        meaning: "An innate ability or skill that someone is born with.",
        sentences: [
            "She has a {blank} {base} for music — she never had lessons.",
            "His {blank} {base} for languages amazed his teachers.",
            "Hard work matters more than {blank} {base} in the long run.",
            "The coach recognized her {blank} {base} immediately."
        ],
        options: ["natural", "native", "born", "raw"]
    },
    {
        collocate: "quick", base: "learner", phrase: "quick learner", type: "adj-noun", topic: "education", level: "elementary",
        meaning: "A person who is able to learn new things rapidly.",
        sentences: [
            "She's a {blank} {base} — she mastered the software in a day.",
            "Employers value candidates who are {blank} {base}s.",
            "As a {blank} {base}, he adapted to the new role easily.",
            "Children are often {blank} {base}s when it comes to technology."
        ],
        options: ["quick", "fast", "rapid", "speedy"]
    },
    {
        collocate: "proven", base: "ability", phrase: "proven ability", type: "adj-noun", topic: "work", level: "high",
        meaning: "A skill or competence that has been demonstrated successfully.",
        sentences: [
            "The candidate has a {blank} {base} to lead large teams.",
            "Her {blank} {base} in project management makes her ideal for the role.",
            "We need someone with a {blank} {base} to meet tight deadlines.",
            "His {blank} {base} to negotiate deals secured him the promotion."
        ],
        options: ["proven", "shown", "tested", "displayed"]
    },
    {
        collocate: "idle", base: "chatter", phrase: "idle chatter", type: "adj-noun", topic: "people", level: "high",
        meaning: "Unimportant or trivial conversation.",
        sentences: [
            "The meeting was full of {blank} {base} and nothing was decided.",
            "She had no time for {blank} {base} during the busy shift.",
            "The teacher told them to stop their {blank} {base} and focus.",
            "Behind the {blank} {base}, there was a serious concern."
        ],
        options: ["idle", "empty", "lazy", "loose"]
    },
    {
        collocate: "juicy", base: "gossip", phrase: "juicy gossip", type: "adj-noun", topic: "people", level: "middle",
        meaning: "Interesting and exciting information about other people's lives.",
        sentences: [
            "She always has some {blank} {base} to share at lunch.",
            "The magazine is full of {blank} {base} about celebrities.",
            "He couldn't resist passing on the {blank} {base}.",
            "There's some {blank} {base} going around the office today."
        ],
        options: ["juicy", "tasty", "sweet", "rich"]
    },
    {
        collocate: "rash", base: "promise", phrase: "rash promise", type: "adj-noun", topic: "people", level: "high",
        meaning: "A promise made too quickly without thinking about the consequences.",
        sentences: [
            "He made a {blank} {base} that he later regretted.",
            "Don't make {blank} {base}s you can't keep.",
            "In the heat of the moment, she made a {blank} {base}.",
            "His {blank} {base} to finish by Friday caused him sleepless nights."
        ],
        options: ["rash", "quick", "rush", "swift"]
    },
    {
        collocate: "empty", base: "promise", phrase: "empty promise", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A promise that the person has no intention of keeping.",
        sentences: [
            "Politicians are often accused of making {blank} {base}s.",
            "She was tired of his {blank} {base}s to change.",
            "An {blank} {base} is worse than no promise at all.",
            "The company's pledge turned out to be just an {blank} {base}."
        ],
        options: ["empty", "hollow", "blank", "void"]
    },
    {
        collocate: "tough", base: "question", phrase: "tough question", type: "adj-noun", topic: "education", level: "middle",
        meaning: "A question that is difficult to answer.",
        sentences: [
            "The interviewer asked some really {blank} {base}s.",
            "Students struggled with the {blank} {base}s on the final exam.",
            "That's a {blank} {base} — let me think about it.",
            "She handled the {blank} {base}s from the press with grace."
        ],
        options: ["tough", "hard", "strong", "firm"]
    },
    {
        collocate: "abject", base: "apology", phrase: "abject apology", type: "adj-noun", topic: "people", level: "professional",
        meaning: "An extremely humble and sincere expression of regret.",
        sentences: [
            "The CEO issued an {blank} {base} for the data leak.",
            "Despite his {blank} {base}, she refused to forgive him.",
            "The newspaper published an {blank} {base} for the inaccurate article.",
            "Nothing short of an {blank} {base} would satisfy the public."
        ],
        options: ["abject", "absolute", "utter", "total"]
    },
    {
        collocate: "disorderly", base: "conduct", phrase: "disorderly conduct", type: "adj-noun", topic: "daily", level: "college",
        meaning: "Unruly or antisocial behaviour that disturbs the peace.",
        sentences: [
            "He was arrested for {blank} {base} outside the stadium.",
            "The charge of {blank} {base} carries a fine or community service.",
            "Several fans were ejected for {blank} {base} during the match.",
            "{blank} {base} in public places is a criminal offence."
        ],
        options: ["disorderly", "messy", "chaotic", "unruly"]
    },
    {
        collocate: "detailed", base: "account", phrase: "detailed account", type: "adj-noun", topic: "education", level: "middle",
        meaning: "A thorough and comprehensive description of events.",
        sentences: [
            "The witness gave a {blank} {base} of what happened.",
            "Her book provides a {blank} {base} of life in the 1920s.",
            "The report includes a {blank} {base} of the company's finances.",
            "He wrote a {blank} {base} of his travels across South America."
        ],
        options: ["detailed", "deep", "thorough", "complete"]
    },
    {
        collocate: "vociferous", base: "opponent", phrase: "vociferous opponent", type: "adj-noun", topic: "daily", level: "professional",
        meaning: "A person who opposes something loudly and forcefully.",
        sentences: [
            "She was a {blank} {base} of the new highway plan.",
            "The policy attracted many {blank} {base}s in parliament.",
            "He became the most {blank} {base} of the proposed tax.",
            "Despite being a {blank} {base}, she respected the final decision."
        ],
        options: ["vociferous", "loud", "vocal", "noisy"]
    },
    {
        collocate: "throwaway", base: "comment", phrase: "throwaway comment", type: "adj-noun", topic: "people", level: "high",
        meaning: "A casual remark made without much thought.",
        sentences: [
            "What seemed like a {blank} {base} actually hurt her feelings.",
            "His {blank} {base} about the food offended the host.",
            "A {blank} {base} during the meeting caused unexpected controversy.",
            "She didn't mean anything by it — it was just a {blank} {base}."
        ],
        options: ["throwaway", "passing", "tossing", "casting"]
    },
    {
        collocate: "rich", base: "tradition", phrase: "rich tradition", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A long and varied history of customs or practices.",
        sentences: [
            "Japan has a {blank} {base} of tea ceremonies.",
            "The region boasts a {blank} {base} of folk music.",
            "The school has a {blank} {base} of academic excellence.",
            "This country has a {blank} {base} of storytelling."
        ],
        options: ["rich", "wealthy", "deep", "thick"]
    },
    {
        collocate: "cultural", base: "heritage", phrase: "cultural heritage", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "The customs, traditions, and artifacts of a society.",
        sentences: [
            "UNESCO works to protect the world's {blank} {base}.",
            "The museum showcases the country's {blank} {base}.",
            "Preserving our {blank} {base} is important for future generations.",
            "Tourism can both celebrate and threaten {blank} {base}."
        ],
        options: ["cultural", "culture", "historic", "national"]
    },
    {
        collocate: "festive", base: "mood", phrase: "festive mood", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A cheerful and celebratory atmosphere.",
        sentences: [
            "The whole town was in a {blank} {base} during the holidays.",
            "Decorations and music created a {blank} {base} in the office.",
            "Everyone was in a {blank} {base} at the Christmas party.",
            "The {blank} {base} was infectious — even the grumpiest colleague smiled."
        ],
        options: ["festive", "festival", "joyful", "merry"]
    },
    {
        collocate: "long-standing", base: "tradition", phrase: "long-standing tradition", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A custom or practice that has existed for a long time.",
        sentences: [
            "The annual parade is a {blank} {base} in this town.",
            "It's a {blank} {base} to eat turkey on Thanksgiving.",
            "The company has a {blank} {base} of promoting from within.",
            "Breaking a {blank} {base} can sometimes be controversial."
        ],
        options: ["long-standing", "long-lasting", "long-running", "long-lived"]
    },
    {
        collocate: "flawless", base: "complexion", phrase: "flawless complexion", type: "adj-noun", topic: "health", level: "high",
        meaning: "Skin that is smooth and free of any blemishes.",
        sentences: [
            "She has a {blank} {base} that many people envy.",
            "Good skincare can help you achieve a {blank} {base}.",
            "The model was known for her {blank} {base}.",
            "He attributed his {blank} {base} to drinking plenty of water."
        ],
        options: ["flawless", "perfect", "spotless", "clear"]
    },
    {
        collocate: "glossy", base: "magazine", phrase: "glossy magazine", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A high-quality magazine printed on shiny paper with many photographs.",
        sentences: [
            "She was flipping through a {blank} {base} at the salon.",
            "{blank} {base}s often promote unrealistic beauty standards.",
            "The product was featured in several {blank} {base}s.",
            "He picked up a {blank} {base} to read during the flight."
        ],
        options: ["glossy", "shiny", "bright", "polished"]
    },
    {
        collocate: "designer", base: "label", phrase: "designer label", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A brand name associated with high-end fashion.",
        sentences: [
            "She only wears {blank} {base}s like Gucci and Prada.",
            "You don't need a {blank} {base} to look stylish.",
            "The store sells discounted {blank} {base} clothing.",
            "He couldn't afford {blank} {base}s on his student budget."
        ],
        options: ["designer", "fashion", "luxury", "brand"]
    },
    {
        collocate: "arduous", base: "journey", phrase: "arduous journey", type: "adj-noun", topic: "travel", level: "college",
        meaning: "A long and difficult journey requiring great effort.",
        sentences: [
            "The refugees made an {blank} {base} across the mountains.",
            "After an {blank} {base}, they finally reached the summit.",
            "The {blank} {base} through the jungle took three weeks.",
            "Despite the {blank} {base}, the views made it worthwhile."
        ],
        options: ["arduous", "hard", "rough", "harsh"]
    },
    {
        collocate: "intrepid", base: "explorer", phrase: "intrepid explorer", type: "adj-noun", topic: "travel", level: "college",
        meaning: "A brave and adventurous traveller who goes to unknown places.",
        sentences: [
            "The {blank} {base} ventured deep into the Amazon rainforest.",
            "She was an {blank} {base} who had visited every continent.",
            "The documentary follows an {blank} {base} in the Arctic.",
            "Only an {blank} {base} would attempt that dangerous route."
        ],
        options: ["intrepid", "brave", "daring", "bold"]
    },
    {
        collocate: "sunny", base: "spell", phrase: "sunny spell", type: "adj-noun", topic: "weather", level: "middle",
        meaning: "A short period of sunny weather.",
        sentences: [
            "We had a few {blank} {base}s during an otherwise rainy week.",
            "Make the most of the {blank} {base} — rain is forecast later.",
            "The {blank} {base} brought everyone out to the park.",
            "Between showers there were some lovely {blank} {base}s."
        ],
        options: ["sunny", "bright", "shiny", "clear"]
    },
    {
        collocate: "convincing", base: "victory", phrase: "convincing victory", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A win achieved by a clear and decisive margin.",
        sentences: [
            "The team secured a {blank} {base} with a 4–0 scoreline.",
            "It was a {blank} {base} that silenced all the critics.",
            "She won a {blank} {base} in the presidential election.",
            "After weeks of preparation, they achieved a {blank} {base}."
        ],
        options: ["convincing", "persuading", "winning", "beating"]
    },
    {
        collocate: "formidable", base: "defence", phrase: "formidable defence", type: "adj-noun", topic: "daily", level: "college",
        meaning: "An extremely strong and difficult-to-overcome defensive capability.",
        sentences: [
            "The team built a {blank} {base} that conceded very few goals.",
            "Their {blank} {base} frustrated the opposition all season.",
            "With that {blank} {base}, they're favourites to win the league.",
            "The lawyer mounted a {blank} {base} of her client."
        ],
        options: ["formidable", "powerful", "mighty", "forceful"]
    },
    {
        collocate: "startling", base: "originality", phrase: "startling originality", type: "adj-noun", topic: "education", level: "professional",
        meaning: "A surprisingly fresh and creative quality in a piece of work.",
        sentences: [
            "The novel was praised for its {blank} {base}.",
            "Critics were impressed by the film's {blank} {base}.",
            "Her thesis demonstrated {blank} {base} in its approach.",
            "The artwork's {blank} {base} won it first prize."
        ],
        options: ["startling", "shocking", "amazing", "striking"]
    },
    {
        collocate: "accomplished", base: "actor", phrase: "accomplished actor", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A highly skilled and experienced performer.",
        sentences: [
            "He is an {blank} {base} with decades of theatre experience.",
            "The film stars several {blank} {base}s from around the world.",
            "As an {blank} {base}, she can play both comedy and drama.",
            "The award went to the most {blank} {base} of the year."
        ],
        options: ["accomplished", "completed", "achieved", "skilled"]
    },
    {
        collocate: "glowing", base: "review", phrase: "glowing review", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "An extremely positive and enthusiastic evaluation.",
        sentences: [
            "The restaurant received {blank} {base}s from food critics.",
            "Her new book has already earned several {blank} {base}s.",
            "The product got {blank} {base}s from early customers.",
            "A {blank} {base} in the newspaper boosted ticket sales."
        ],
        options: ["glowing", "shining", "burning", "bright"]
    },
    {
        collocate: "dismal", base: "failure", phrase: "dismal failure", type: "adj-noun", topic: "work", level: "high",
        meaning: "A complete and depressing lack of success.",
        sentences: [
            "The product launch was a {blank} {base} due to poor marketing.",
            "His attempt to run the marathon ended in {blank} {base}.",
            "The policy was widely regarded as a {blank} {base}.",
            "Despite high expectations, the event was a {blank} {base}."
        ],
        options: ["dismal", "gloomy", "dark", "bleak"]
    },
    {
        collocate: "indelible", base: "impression", phrase: "indelible impression", type: "adj-noun", topic: "people", level: "college",
        meaning: "A strong and lasting effect on someone's memory or feelings.",
        sentences: [
            "The trip to India left an {blank} {base} on her.",
            "Great teachers make an {blank} {base} on their students.",
            "The performance made an {blank} {base} on the audience.",
            "His speech left an {blank} {base} that lasted for years."
        ],
        options: ["indelible", "permanent", "lasting", "enduring"]
    },
    {
        collocate: "considerable", base: "reputation", phrase: "considerable reputation", type: "adj-noun", topic: "work", level: "high",
        meaning: "A significant level of respect or fame in a particular field.",
        sentences: [
            "She has built a {blank} {base} as an environmental lawyer.",
            "The firm enjoys a {blank} {base} in the industry.",
            "His research has earned him a {blank} {base} worldwide.",
            "The restaurant has a {blank} {base} for its seafood dishes."
        ],
        options: ["considerable", "large", "big", "great"]
    },
    {
        collocate: "toxic", base: "waste", phrase: "toxic waste", type: "adj-noun", topic: "weather", level: "middle",
        meaning: "Poisonous materials discarded from industrial processes.",
        sentences: [
            "The factory was fined for dumping {blank} {base} in the river.",
            "{blank} {base} must be disposed of according to strict regulations.",
            "Local residents protested against the {blank} {base} site.",
            "Exposure to {blank} {base} can cause serious health problems."
        ],
        options: ["toxic", "poison", "deadly", "harmful"]
    },
    {
        collocate: "searing", base: "heat", phrase: "searing heat", type: "adj-noun", topic: "weather", level: "high",
        meaning: "Extremely intense and scorching high temperature.",
        sentences: [
            "Workers struggled in the {blank} {base} of the desert.",
            "The {blank} {base} forced schools to close early.",
            "We stayed indoors to escape the {blank} {base}.",
            "The {blank} {base} wave lasted for two weeks straight."
        ],
        options: ["searing", "burning", "boiling", "roasting"]
    },
    {
        collocate: "dire", base: "consequences", phrase: "dire consequences", type: "adj-noun", topic: "daily", level: "high",
        meaning: "Extremely serious and terrible results of an action.",
        sentences: [
            "Ignoring climate change will have {blank} {base} for the planet.",
            "The decision had {blank} {base} for the local economy.",
            "They warned of {blank} {base} if safety rules were ignored.",
            "The scandal had {blank} {base} for his political career."
        ],
        options: ["dire", "grave", "dark", "grim"]
    },
    {
        collocate: "widespread", base: "flooding", phrase: "widespread flooding", type: "adj-noun", topic: "weather", level: "middle",
        meaning: "Flooding that affects a large area.",
        sentences: [
            "The storm caused {blank} {base} across the region.",
            "{blank} {base} forced thousands to evacuate their homes.",
            "The government declared a state of emergency due to {blank} {base}.",
            "Climate change is expected to increase the risk of {blank} {base}."
        ],
        options: ["widespread", "wide", "broad", "extensive"]
    },
    {
        collocate: "eco-friendly", base: "design", phrase: "eco-friendly design", type: "adj-noun", topic: "technology", level: "middle",
        meaning: "A product or building plan that minimizes harm to the environment.",
        sentences: [
            "The new office features an {blank} {base} with solar panels.",
            "Consumers increasingly prefer products with an {blank} {base}.",
            "The architect is famous for her {blank} {base} philosophy.",
            "{blank} {base} can reduce a building's energy costs by half."
        ],
        options: ["eco-friendly", "green", "clean", "natural"]
    },
    {
        collocate: "bustling", base: "centre", phrase: "bustling centre", type: "adj-noun", topic: "travel", level: "middle",
        meaning: "A busy and lively central area of a town or city.",
        sentences: [
            "The hotel is located in the {blank} {base} of the city.",
            "The {blank} {base} was full of shops and restaurants.",
            "Tourists flocked to the {blank} {base} on market day.",
            "Despite its size, the town has a {blank} {base}."
        ],
        options: ["bustling", "buzzing", "rushing", "hurrying"]
    },
    {
        collocate: "rustic", base: "charm", phrase: "rustic charm", type: "adj-noun", topic: "travel", level: "high",
        meaning: "The attractive quality of something simple and rural.",
        sentences: [
            "The cottage has a {blank} {base} that city dwellers adore.",
            "The village retains its {blank} {base} despite growing tourism.",
            "The restaurant's {blank} {base} comes from its wooden beams and fireplace.",
            "Many visitors are drawn to the area's {blank} {base}."
        ],
        options: ["rustic", "rural", "country", "quaint"]
    },
    {
        collocate: "hectic", base: "pace", phrase: "hectic pace", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A very fast and busy rate of activity.",
        sentences: [
            "Life in the capital moves at a {blank} {base}.",
            "She needed a holiday after weeks of working at a {blank} {base}.",
            "The {blank} {base} of modern life can be exhausting.",
            "He struggled to keep up with the {blank} {base} of the newsroom."
        ],
        options: ["hectic", "frantic", "rapid", "speedy"]
    },
    {
        collocate: "derelict", base: "building", phrase: "derelict building", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A building that is in very poor condition and no longer used.",
        sentences: [
            "The {blank} {base} was demolished to make way for new flats.",
            "Children were warned not to play near the {blank} {base}.",
            "The council plans to renovate several {blank} {base}s in the area.",
            "A {blank} {base} on the high street was an eyesore for years."
        ],
        options: ["derelict", "ruined", "wrecked", "damaged"]
    },
    {
        collocate: "leafy", base: "suburb", phrase: "leafy suburb", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A pleasant residential area with many trees.",
        sentences: [
            "They moved to a {blank} {base} to raise their children.",
            "The house is located in a quiet, {blank} {base} of London.",
            "Property prices in {blank} {base}s have risen sharply.",
            "The {blank} {base} offered a peaceful escape from the city."
        ],
        options: ["leafy", "green", "woody", "grassy"]
    },
    {
        collocate: "congested", base: "road", phrase: "congested road", type: "adj-noun", topic: "travel", level: "middle",
        meaning: "A road that is overcrowded with traffic.",
        sentences: [
            "The commute involves driving along {blank} {base}s for an hour.",
            "{blank} {base}s are a major source of air pollution.",
            "New bus lanes were introduced to ease travel on {blank} {base}s.",
            "Cyclists often avoid the most {blank} {base}s in the city."
        ],
        options: ["congested", "blocked", "jammed", "packed"]
    },
    {
        collocate: "outstanding", base: "debt", phrase: "outstanding debt", type: "adj-noun", topic: "money", level: "high",
        meaning: "Money that is still owed and has not yet been paid.",
        sentences: [
            "The company has millions in {blank} {base}.",
            "She worked extra shifts to pay off her {blank} {base}.",
            "The bank sent reminders about the {blank} {base}.",
            "Customers with {blank} {base} may face legal action."
        ],
        options: ["outstanding", "remaining", "leftover", "pending"]
    },
    {
        collocate: "fraudulent", base: "claim", phrase: "fraudulent claim", type: "adj-noun", topic: "money", level: "college",
        meaning: "A dishonest request for money or benefits based on false information.",
        sentences: [
            "The insurance company rejected the {blank} {base}.",
            "Making a {blank} {base} is a serious criminal offence.",
            "Investigators uncovered several {blank} {base}s worth millions.",
            "He was prosecuted for filing a {blank} {base} on his tax return."
        ],
        options: ["fraudulent", "false", "fake", "dishonest"]
    },
    {
        collocate: "rampant", base: "inflation", phrase: "rampant inflation", type: "adj-noun", topic: "money", level: "college",
        meaning: "A rapid and uncontrolled increase in prices.",
        sentences: [
            "{blank} {base} eroded the value of people's savings.",
            "The country suffered from {blank} {base} during the 1990s.",
            "The government struggled to control {blank} {base}.",
            "{blank} {base} made everyday goods unaffordable for many families."
        ],
        options: ["rampant", "running", "raging", "wild"]
    },
    {
        collocate: "plummeting", base: "profit", phrase: "plummeting profits", type: "adj-noun", topic: "money", level: "high",
        meaning: "Profits that are falling rapidly and dramatically.",
        sentences: [
            "The company laid off staff due to {blank} {base}s.",
            "{blank} {base}s forced the firm to restructure its operations.",
            "Investors panicked at reports of {blank} {base}s.",
            "The retail chain blamed {blank} {base}s on online competition."
        ],
        options: ["plummeting", "falling", "dropping", "sinking"]
    },
    {
        collocate: "undeclared", base: "earnings", phrase: "undeclared earnings", type: "adj-noun", topic: "money", level: "college",
        meaning: "Income that has not been reported to the tax authorities.",
        sentences: [
            "He was fined for having {blank} {base} from a second job.",
            "Tax audits often uncover {blank} {base}.",
            "{blank} {base} are a form of tax evasion.",
            "The investigation revealed millions in {blank} {base}."
        ],
        options: ["undeclared", "unreported", "hidden", "secret"]
    },
    {
        collocate: "rising", base: "unemployment", phrase: "rising unemployment", type: "adj-noun", topic: "money", level: "middle",
        meaning: "An increasing number of people without jobs.",
        sentences: [
            "{blank} {base} is a major concern for the government.",
            "The recession led to {blank} {base} across the country.",
            "{blank} {base} disproportionately affects young people.",
            "Policies to combat {blank} {base} were announced today."
        ],
        options: ["rising", "growing", "climbing", "lifting"]
    },
    {
        collocate: "novel", base: "solution", phrase: "novel solution", type: "adj-noun", topic: "work", level: "high",
        meaning: "A new and original way of solving a problem.",
        sentences: [
            "The engineer came up with a {blank} {base} to the drainage issue.",
            "We need a {blank} {base} — the old methods aren't working.",
            "Her {blank} {base} to the logistics problem saved the company money.",
            "The competition rewards {blank} {base}s to everyday challenges."
        ],
        options: ["novel", "new", "fresh", "original"]
    },
    {
        collocate: "draconian", base: "measure", phrase: "draconian measures", type: "adj-noun", topic: "daily", level: "professional",
        meaning: "Extremely harsh and severe rules or actions.",
        sentences: [
            "The government introduced {blank} {base}s to curb the protests.",
            "Critics condemned the {blank} {base}s as a violation of rights.",
            "The school's {blank} {base}s on phone use upset parents.",
            "Some felt the {blank} {base}s were necessary given the crisis."
        ],
        options: ["draconian", "drastic", "extreme", "severe"]
    },
    {
        collocate: "antisocial", base: "behaviour", phrase: "antisocial behaviour", type: "adj-noun", topic: "daily", level: "high",
        meaning: "Actions that cause harm, nuisance, or distress to others.",
        sentences: [
            "Residents complained about {blank} {base} in the neighbourhood.",
            "The council has new powers to tackle {blank} {base}.",
            "Graffiti and vandalism are forms of {blank} {base}.",
            "He received a warning for repeated {blank} {base}."
        ],
        options: ["antisocial", "unsocial", "nonsocial", "asocial"]
    },
    {
        collocate: "dysfunctional", base: "family", phrase: "dysfunctional family", type: "adj-noun", topic: "people", level: "high",
        meaning: "A family in which relationships and communication are severely impaired.",
        sentences: [
            "Growing up in a {blank} {base} affected his self-confidence.",
            "The film explores life in a {blank} {base} with dark humour.",
            "Social workers provide support to {blank} {base} units.",
            "Many characters in the novel come from {blank} {base} backgrounds."
        ],
        options: ["dysfunctional", "broken", "troubled", "damaged"]
    },
    {
        collocate: "affordable", base: "housing", phrase: "affordable housing", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "Homes that are priced within reach of average-income households.",
        sentences: [
            "The city desperately needs more {blank} {base}.",
            "Young people are struggling to find {blank} {base}.",
            "The government pledged to build 100,000 new {blank} {base} units.",
            "A lack of {blank} {base} is pushing families out of the city."
        ],
        options: ["affordable", "cheap", "budget", "economic"]
    },
    {
        collocate: "cutting-edge", base: "design", phrase: "cutting-edge design", type: "adj-noun", topic: "technology", level: "high",
        meaning: "The most advanced and innovative style of design.",
        sentences: [
            "The smartphone features {blank} {base} and powerful hardware.",
            "Their products are known for {blank} {base} and durability.",
            "The building showcases {blank} {base} with sustainable materials.",
            "Consumers are willing to pay more for {blank} {base}."
        ],
        options: ["cutting-edge", "leading", "front", "top"]
    },
    {
        collocate: "remote", base: "access", phrase: "remote access", type: "adj-noun", topic: "technology", level: "middle",
        meaning: "The ability to connect to a computer or network from a distant location.",
        sentences: [
            "{blank} {base} allows employees to work from home.",
            "The IT team set up {blank} {base} for all staff.",
            "Hackers gained {blank} {base} to the company's servers.",
            "You need a VPN for secure {blank} {base} to the system."
        ],
        options: ["remote", "distant", "far", "outside"]
    },
    {
        collocate: "streaming", base: "cold", phrase: "streaming cold", type: "adj-noun", topic: "health", level: "middle",
        meaning: "A severe cold with a very runny nose.",
        sentences: [
            "She had a {blank} {base} and could barely breathe through her nose.",
            "He stayed home with a {blank} {base} all week.",
            "A {blank} {base} made it impossible to concentrate at work.",
            "I've had a {blank} {base} since Monday — I feel terrible."
        ],
        options: ["streaming", "running", "flowing", "pouring"]
    },
    {
        collocate: "infectious", base: "disease", phrase: "infectious disease", type: "adj-noun", topic: "health", level: "middle",
        meaning: "An illness caused by organisms that can spread from person to person.",
        sentences: [
            "The hospital has a ward dedicated to {blank} {base}s.",
            "Vaccination is the best defence against many {blank} {base}s.",
            "The outbreak of the {blank} {base} spread rapidly through the region.",
            "Researchers are working on treatments for emerging {blank} {base}s."
        ],
        options: ["infectious", "infected", "contagious", "catching"]
    },
    {
        collocate: "chronic", base: "disease", phrase: "chronic disease", type: "adj-noun", topic: "health", level: "high",
        meaning: "A long-lasting health condition that can be managed but not cured.",
        sentences: [
            "Diabetes is a {blank} {base} that affects millions worldwide.",
            "Prevention is key to reducing the burden of {blank} {base}.",
            "Living with a {blank} {base} requires ongoing medical support.",
            "The rise in {blank} {base} is linked to poor lifestyle choices."
        ],
        options: ["chronic", "lasting", "permanent", "constant"]
    },
    {
        collocate: "premature", base: "death", phrase: "premature death", type: "adj-noun", topic: "health", level: "high",
        meaning: "Death that occurs earlier than expected or before old age.",
        sentences: [
            "Smoking is the leading cause of {blank} {base} in many countries.",
            "Air pollution contributes to thousands of {blank} {base}s annually.",
            "Regular exercise can help prevent {blank} {base}.",
            "The report linked poor diet to {blank} {base}."
        ],
        options: ["premature", "early", "untimely", "sudden"]
    },
    {
        collocate: "adverse", base: "reaction", phrase: "adverse reaction", type: "adj-noun", topic: "health", level: "college",
        meaning: "A harmful and undesired response to a medicine or treatment.",
        sentences: [
            "Some patients experienced an {blank} {base} to the new drug.",
            "Report any {blank} {base} to your doctor immediately.",
            "{blank} {base}s are rare but can be serious.",
            "The clinical trial was halted after several {blank} {base}s."
        ],
        options: ["adverse", "negative", "bad", "poor"]
    },
    {
        collocate: "gentle", base: "exercise", phrase: "gentle exercise", type: "adj-noun", topic: "health", level: "elementary",
        meaning: "Light physical activity that is not too strenuous.",
        sentences: [
            "Walking is a form of {blank} {base} suitable for all ages.",
            "The doctor recommended {blank} {base} during recovery.",
            "{blank} {base} like yoga can reduce stress and improve flexibility.",
            "Start with {blank} {base} and gradually increase the intensity."
        ],
        options: ["gentle", "soft", "mild", "light"]
    },
    {
        collocate: "extenuating", base: "circumstances", phrase: "extenuating circumstances", type: "adj-noun", topic: "daily", level: "professional",
        meaning: "Factors that partially excuse wrongdoing or reduce blame.",
        sentences: [
            "The judge considered the {blank} {base} before sentencing.",
            "Students can request extensions due to {blank} {base}.",
            "There were {blank} {base} that explained his lateness.",
            "The defence argued that {blank} {base} should reduce the penalty."
        ],
        options: ["extenuating", "mitigating", "reducing", "lessening"]
    },
    {
        collocate: "unanimous", base: "verdict", phrase: "unanimous verdict", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A decision on which all members of a jury or group fully agree.",
        sentences: [
            "The jury reached a {blank} {base} of not guilty.",
            "After three days, the panel delivered a {blank} {base}.",
            "A {blank} {base} was required for the motion to pass.",
            "The {blank} {base} surprised many observers in the courtroom."
        ],
        options: ["unanimous", "united", "collective", "joint"]
    },
    {
        collocate: "fragile", base: "peace", phrase: "fragile peace", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A state of peace that could easily be broken or disrupted.",
        sentences: [
            "The {blank} {base} in the region could be shattered at any moment.",
            "Diplomats worked hard to maintain the {blank} {base}.",
            "The ceasefire established a {blank} {base} after years of war.",
            "Any provocation could destroy the {blank} {base}."
        ],
        options: ["fragile", "weak", "thin", "delicate"]
    },
    {
        collocate: "uneasy", base: "truce", phrase: "uneasy truce", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A temporary agreement to stop fighting that feels unstable.",
        sentences: [
            "The two sides maintained an {blank} {base} for several months.",
            "An {blank} {base} was declared while negotiations continued.",
            "The {blank} {base} between the rival gangs could break at any time.",
            "After the argument, they settled into an {blank} {base}."
        ],
        options: ["uneasy", "uneasy", "restless", "nervous"]
    },
    {
        collocate: "lifelong", base: "friend", phrase: "lifelong friend", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A friend that one has known for their entire life.",
        sentences: [
            "She and Maria have been {blank} {base}s since kindergarten.",
            "He considered his college roommate a {blank} {base}.",
            "A {blank} {base} is someone who stays with you through everything.",
            "Making {blank} {base}s is one of the best parts of university."
        ],
        options: ["lifelong", "lifetime", "longlife", "lifewide"]
    },
    {
        collocate: "casual", base: "acquaintance", phrase: "casual acquaintance", type: "adj-noun", topic: "people", level: "high",
        meaning: "A person one knows slightly but is not close friends with.",
        sentences: [
            "He's just a {blank} {base} — we've only met a few times.",
            "She didn't want to share personal details with a {blank} {base}.",
            "The party was full of {blank} {base}s rather than close friends.",
            "Even a {blank} {base} noticed how stressed he looked."
        ],
        options: ["casual", "slight", "loose", "light"]
    },
    {
        collocate: "platonic", base: "relationship", phrase: "platonic relationship", type: "adj-noun", topic: "people", level: "high",
        meaning: "A close, affectionate relationship without romantic or sexual involvement.",
        sentences: [
            "They insist theirs is purely a {blank} {base}.",
            "A {blank} {base} between men and women is perfectly normal.",
            "She valued the {blank} {base} she had with her colleague.",
            "Some people find it hard to believe in {blank} {base}s."
        ],
        options: ["platonic", "friendly", "pure", "simple"]
    },
    {
        collocate: "undivided", base: "attention", phrase: "undivided attention", type: "adj-noun", topic: "people", level: "middle",
        meaning: "Complete and total focus given to someone or something.",
        sentences: [
            "The teacher demanded their {blank} {base}.",
            "Please give me your {blank} {base} for a moment.",
            "Children need their parents' {blank} {base} sometimes.",
            "She gave the speaker her {blank} {base} throughout the lecture."
        ],
        options: ["undivided", "complete", "full", "total"]
    },
    {
        collocate: "bubbly", base: "personality", phrase: "bubbly personality", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A cheerful, lively, and enthusiastic character.",
        sentences: [
            "Her {blank} {base} makes her popular at parties.",
            "The host's {blank} {base} kept the audience entertained.",
            "He fell in love with her {blank} {base} right away.",
            "A {blank} {base} is a great asset in customer service."
        ],
        options: ["bubbly", "fizzy", "sparky", "bouncy"]
    },
    {
        collocate: "striking", base: "resemblance", phrase: "striking resemblance", type: "adj-noun", topic: "people", level: "high",
        meaning: "A very noticeable and remarkable similarity in appearance.",
        sentences: [
            "She bears a {blank} {base} to her grandmother.",
            "The actor has a {blank} {base} to the real person he portrays.",
            "People always comment on the {blank} {base} between the twins.",
            "There is a {blank} {base} between the two paintings."
        ],
        options: ["striking", "hitting", "strong", "shocking"]
    },
    {
        collocate: "boundless", base: "energy", phrase: "boundless energy", type: "adj-noun", topic: "people", level: "high",
        meaning: "An apparently unlimited supply of physical or mental vitality.",
        sentences: [
            "Children seem to have {blank} {base} compared to adults.",
            "Her {blank} {base} was evident in everything she did.",
            "The puppy ran around the garden with {blank} {base}.",
            "His {blank} {base} made him the life of every gathering."
        ],
        options: ["boundless", "endless", "limitless", "infinite"]
    },
    {
        collocate: "pent-up", base: "anger", phrase: "pent-up anger", type: "adj-noun", topic: "people", level: "high",
        meaning: "Anger that has been suppressed or held back over time.",
        sentences: [
            "His {blank} {base} finally exploded during the meeting.",
            "She released years of {blank} {base} in a tearful outburst.",
            "Expressing {blank} {base} in healthy ways is important.",
            "The protesters channelled their {blank} {base} into peaceful demonstrations."
        ],
        options: ["pent-up", "built-up", "stored", "kept"]
    },
    {
        collocate: "encyclopaedic", base: "knowledge", phrase: "encyclopaedic knowledge", type: "adj-noun", topic: "education", level: "professional",
        meaning: "Extremely comprehensive and wide-ranging knowledge of a subject.",
        sentences: [
            "The professor has an {blank} {base} of European history.",
            "His {blank} {base} of film made him unbeatable at trivia.",
            "She impressed the panel with her {blank} {base} of the topic.",
            "An {blank} {base} of grammar is not needed to speak fluently."
        ],
        options: ["encyclopaedic", "comprehensive", "extensive", "complete"]
    },
    {
        collocate: "considerable", base: "experience", phrase: "considerable experience", type: "adj-noun", topic: "work", level: "high",
        meaning: "A significant amount of practical knowledge gained over time.",
        sentences: [
            "The job requires {blank} {base} in software development.",
            "She has {blank} {base} working with international clients.",
            "He brings {blank} {base} to the role of project manager.",
            "Candidates with {blank} {base} will be given preference."
        ],
        options: ["considerable", "large", "big", "substantial"]
    },
    {
        collocate: "interpersonal", base: "skills", phrase: "interpersonal skills", type: "adj-noun", topic: "work", level: "high",
        meaning: "The abilities needed to communicate and interact effectively with others.",
        sentences: [
            "Good {blank} {base} are essential in any workplace.",
            "She listed strong {blank} {base} on her CV.",
            "Training in {blank} {base} can improve team collaboration.",
            "His excellent {blank} {base} made him a natural leader."
        ],
        options: ["interpersonal", "personal", "social", "people"]
    },
    {
        collocate: "financial", base: "acumen", phrase: "financial acumen", type: "adj-noun", topic: "money", level: "professional",
        meaning: "Keen ability to make good judgements about money and business.",
        sentences: [
            "Her {blank} {base} helped the startup become profitable.",
            "Successful investors often have sharp {blank} {base}.",
            "He lacked the {blank} {base} needed to run a business.",
            "The board valued her {blank} {base} during the merger."
        ],
        options: ["financial", "fiscal", "monetary", "economic"]
    },
    {
        collocate: "cramped", base: "conditions", phrase: "cramped conditions", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A situation where there is not enough space to be comfortable.",
        sentences: [
            "The refugees lived in {blank} {base} at the camp.",
            "Workers complained about the {blank} {base} in the office.",
            "The prisoners were held in {blank} {base} for months.",
            "Despite the {blank} {base}, the astronauts completed their mission."
        ],
        options: ["cramped", "tight", "narrow", "small"]
    },
    {
        collocate: "vast", base: "expanse", phrase: "vast expanse", type: "adj-noun", topic: "travel", level: "high",
        meaning: "An extremely large and wide open area.",
        sentences: [
            "The desert stretched out in a {blank} {base} of sand.",
            "They gazed across the {blank} {base} of the ocean.",
            "A {blank} {base} of farmland surrounded the village.",
            "The {blank} {base} of the national park took their breath away."
        ],
        options: ["vast", "huge", "wide", "broad"]
    },
    {
        collocate: "bygone", base: "era", phrase: "bygone era", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A period of time in the past that has ended.",
        sentences: [
            "The museum takes visitors back to a {blank} {base}.",
            "Handwritten letters seem to belong to a {blank} {base}.",
            "The building is a relic of a {blank} {base}.",
            "Fashion trends from a {blank} {base} are making a comeback."
        ],
        options: ["bygone", "past", "old", "gone"]
    },
    {
        collocate: "foreseeable", base: "future", phrase: "foreseeable future", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "The period of time ahead that can be predicted or planned for.",
        sentences: [
            "Interest rates are expected to remain low for the {blank} {base}.",
            "There are no plans to close the factory for the {blank} {base}.",
            "She'll be working from home for the {blank} {base}.",
            "The situation is unlikely to improve in the {blank} {base}."
        ],
        options: ["foreseeable", "predictable", "visible", "near"]
    },
    {
        collocate: "overcrowded", base: "train", phrase: "overcrowded train", type: "adj-noun", topic: "travel", level: "middle",
        meaning: "A train with too many passengers, making it uncomfortable.",
        sentences: [
            "Commuters are fed up with {blank} {base}s every morning.",
            "She was crammed into an {blank} {base} during rush hour.",
            "{blank} {base}s are a daily reality for many workers.",
            "The government promised to address the issue of {blank} {base}s."
        ],
        options: ["overcrowded", "overfull", "overpacked", "stuffed"]
    },
    {
        collocate: "lengthy", base: "tailback", phrase: "lengthy tailback", type: "adj-noun", topic: "travel", level: "high",
        meaning: "A long queue of stationary or slow-moving traffic.",
        sentences: [
            "An accident on the motorway caused a {blank} {base}.",
            "Drivers were stuck in {blank} {base}s for over two hours.",
            "Road works are expected to create {blank} {base}s this weekend.",
            "A {blank} {base} formed on the approach to the city centre."
        ],
        options: ["lengthy", "long", "extended", "prolonged"]
    },
    {
        collocate: "draw", base: "conclusion", phrase: "draw a conclusion", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To form an opinion or judgment based on available evidence.",
        sentences: [
            "It's too early to {blank} any {base}s from the data.",
            "After reviewing the evidence, the detective {blank} a surprising {base}.",
            "Don't {blank} hasty {base}s without all the facts.",
            "The researchers {blank} the {base} that the treatment was effective."
        ],
        options: ["draw", "make", "take", "pull"]
    },
    {
        collocate: "reach", base: "compromise", phrase: "reach a compromise", type: "verb-noun", topic: "work", level: "high",
        meaning: "To arrive at a mutual agreement where both sides make concessions.",
        sentences: [
            "After hours of negotiation, the two sides finally {blank} a {base}.",
            "It was difficult, but they managed to {blank} a fair {base}.",
            "The union and management failed to {blank} a {base} on wages.",
            "We need to {blank} a {base} before the deadline passes."
        ],
        options: ["reach", "make", "find", "get"]
    },
    {
        collocate: "make", base: "fuss", phrase: "make a fuss", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To show unnecessary or excessive concern or worry about something.",
        sentences: [
            "Please don't {blank} a {base} — it's really not a big deal.",
            "She always {blank}s a {base} whenever things don't go her way.",
            "The customer {blank} a huge {base} about the delayed order.",
            "There's no need to {blank} such a {base} over a small scratch."
        ],
        options: ["make", "do", "create", "have"]
    },
    {
        collocate: "take", base: "toll", phrase: "take a toll", type: "verb-noun", topic: "health", level: "high",
        meaning: "To have a gradual negative effect on someone or something.",
        sentences: [
            "Years of stress have {blank}n a heavy {base} on his health.",
            "The long commute is starting to {blank} a {base} on her well-being.",
            "Sleep deprivation can {blank} a serious {base} on your body.",
            "The pandemic {blank} a devastating {base} on the economy."
        ],
        options: ["take", "make", "have", "give"]
    },
    {
        collocate: "pull", base: "strings", phrase: "pull strings", type: "verb-noun", topic: "work", level: "college",
        meaning: "To use one's influence or connections to get something done.",
        sentences: [
            "He had to {blank} a few {base} to get the job interview.",
            "She managed to {blank} some {base} and got us VIP tickets.",
            "Do you think someone {blank}ed {base} to get him promoted?",
            "I don't like {blank}ing {base}, but this was an emergency."
        ],
        options: ["pull", "push", "draw", "tug"]
    },
    {
        collocate: "raise", base: "concerns", phrase: "raise concerns", type: "verb-noun", topic: "work", level: "high",
        meaning: "To bring attention to issues or worries about something.",
        sentences: [
            "Several employees {blank}d {base} about the new policy.",
            "Residents {blank}d {base} over the proposed construction project.",
            "The report {blank}s serious {base} about food safety standards.",
            "Don't be afraid to {blank} your {base} with management."
        ],
        options: ["raise", "lift", "make", "put"]
    },
    {
        collocate: "shed", base: "light", phrase: "shed light", type: "verb-noun", topic: "education", level: "college",
        meaning: "To help explain or make something clearer.",
        sentences: [
            "The new evidence could {blank} {base} on the mystery.",
            "Her research {blank}s {base} on the causes of the disease.",
            "We hope the investigation will {blank} {base} on what really happened.",
            "This discovery {blank} new {base} on ancient civilizations."
        ],
        options: ["shed", "throw", "cast", "give"]
    },
    {
        collocate: "set", base: "stage", phrase: "set the stage", type: "verb-noun", topic: "work", level: "high",
        meaning: "To create the conditions for something to happen.",
        sentences: [
            "The reforms {blank} the {base} for economic growth.",
            "Her early success {blank} the {base} for a brilliant career.",
            "The agreement {blank}s the {base} for lasting peace.",
            "The CEO's resignation {blank} the {base} for major changes."
        ],
        options: ["set", "put", "lay", "make"]
    },
    {
        collocate: "pave", base: "way", phrase: "pave the way", type: "verb-noun", topic: "work", level: "college",
        meaning: "To make it easier for something to happen or develop in the future.",
        sentences: [
            "This technology will {blank} the {base} for new medical treatments.",
            "The court ruling {blank}d the {base} for marriage equality.",
            "Her groundbreaking work {blank}d the {base} for future generations.",
            "The agreement {blank}s the {base} for closer cooperation."
        ],
        options: ["pave", "build", "make", "clear"]
    },
    {
        collocate: "turn", base: "blind eye", phrase: "turn a blind eye", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To deliberately ignore something wrong or unpleasant.",
        sentences: [
            "The authorities {blank}ed a {base} to the corruption.",
            "You can't just {blank} a {base} to bullying in schools.",
            "Management often {blank}s a {base} to workplace harassment.",
            "She chose to {blank} a {base} rather than get involved."
        ],
        options: ["turn", "give", "show", "put"]
    },
    {
        collocate: "stand", base: "chance", phrase: "stand a chance", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To have a possibility of succeeding or winning.",
        sentences: [
            "Without proper training, you don't {blank} a {base}.",
            "The underdog team actually {blank}s a good {base} this year.",
            "Do you think he {blank}s any {base} of winning the election?",
            "We {blank} a better {base} if we work together."
        ],
        options: ["stand", "have", "take", "get"]
    },
    {
        collocate: "take", base: "initiative", phrase: "take the initiative", type: "verb-noun", topic: "work", level: "high",
        meaning: "To be the first to act or lead an effort without being asked.",
        sentences: [
            "She always {blank}s the {base} in team meetings.",
            "If you want the promotion, you need to {blank} the {base}.",
            "He {blank} the {base} and organized the charity event.",
            "Great leaders {blank} the {base} instead of waiting for instructions."
        ],
        options: ["take", "make", "do", "get"]
    },
    {
        collocate: "bridge", base: "gap", phrase: "bridge the gap", type: "verb-noun", topic: "education", level: "college",
        meaning: "To reduce or eliminate the difference between two things.",
        sentences: [
            "The program aims to {blank} the {base} between theory and practice.",
            "We need to {blank} the {base} between rich and poor communities.",
            "Technology can help {blank} the {base} in educational access.",
            "The scholarship was designed to {blank} the financial {base}."
        ],
        options: ["bridge", "close", "fill", "cross"]
    },
    {
        collocate: "take", base: "for granted", phrase: "take for granted", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To fail to appreciate something because it is always available.",
        sentences: [
            "We often {blank} clean water {base}.",
            "Don't {blank} your health {base} — exercise regularly.",
            "He {blank} his family {base} until they were gone.",
            "It's easy to {blank} everyday luxuries {base}."
        ],
        options: ["take", "put", "leave", "hold"]
    },
    {
        collocate: "bear", base: "brunt", phrase: "bear the brunt", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To suffer the worst part of a difficult situation.",
        sentences: [
            "Small businesses {blank} the {base} of the economic downturn.",
            "Coastal communities {blank} the {base} of the hurricane.",
            "The poorest families always {blank} the {base} of budget cuts.",
            "Workers in low-wage jobs {blank} the {base} of inflation."
        ],
        options: ["bear", "take", "carry", "hold"]
    },
    {
        collocate: "face", base: "music", phrase: "face the music", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To accept the unpleasant consequences of one's actions.",
        sentences: [
            "You made the mistake, so now you have to {blank} the {base}.",
            "He tried to avoid blame, but eventually had to {blank} the {base}.",
            "It's time to {blank} the {base} and admit what went wrong.",
            "She knew she'd have to {blank} the {base} when her boss found out."
        ],
        options: ["face", "hear", "meet", "play"]
    },
    {
        collocate: "foot", base: "bill", phrase: "foot the bill", type: "verb-noun", topic: "money", level: "high",
        meaning: "To pay for something, especially something expensive.",
        sentences: [
            "Who's going to {blank} the {base} for all these repairs?",
            "Taxpayers will end up {blank}ing the {base} for the project.",
            "Her parents {blank}ed the {base} for the entire wedding.",
            "The company agreed to {blank} the {base} for employee training."
        ],
        options: ["foot", "pay", "cover", "settle"]
    },
    {
        collocate: "meet", base: "expectations", phrase: "meet expectations", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To achieve the level of quality or performance that was hoped for.",
        sentences: [
            "The new product failed to {blank} customer {base}.",
            "She always works hard to {blank} her parents' {base}.",
            "The results {blank} our {base} perfectly.",
            "It can be stressful trying to {blank} everyone's {base}."
        ],
        options: ["meet", "reach", "hit", "fill"]
    },
    {
        collocate: "exceed", base: "expectations", phrase: "exceed expectations", type: "verb-noun", topic: "work", level: "high",
        meaning: "To surpass or go beyond what was anticipated or hoped for.",
        sentences: [
            "The team's performance {blank}ed all {base}.",
            "Sales this quarter have {blank}ed our {base} by 30%.",
            "She consistently {blank}s {base} in every project.",
            "The film {blank}ed box office {base} worldwide."
        ],
        options: ["exceed", "pass", "beat", "top"]
    },
    {
        collocate: "break", base: "new ground", phrase: "break new ground", type: "verb-noun", topic: "work", level: "college",
        meaning: "To do something innovative that has not been done before.",
        sentences: [
            "The research team is {blank}ing {base} in cancer treatment.",
            "Her novel {blank}s {base} in the genre of science fiction.",
            "The company {blank} {base} with its revolutionary design.",
            "We aim to {blank} {base} in sustainable energy solutions."
        ],
        options: ["break", "make", "find", "open"]
    },
    {
        collocate: "lose", base: "track", phrase: "lose track", type: "verb-noun", topic: "daily", level: "elementary",
        meaning: "To no longer know or be aware of something, especially time.",
        sentences: [
            "I completely {blank} {base} of time while reading that book.",
            "It's easy to {blank} {base} of your spending without a budget.",
            "She {blank} {base} of how many cups of coffee she drank.",
            "Don't {blank} {base} of your goals — write them down."
        ],
        options: ["lose", "miss", "drop", "leave"]
    },
    {
        collocate: "keep", base: "pace", phrase: "keep pace", type: "verb-noun", topic: "work", level: "high",
        meaning: "To move or progress at the same speed as someone or something.",
        sentences: [
            "Small businesses struggle to {blank} {base} with larger competitors.",
            "Technology is advancing so fast that regulations can't {blank} {base}.",
            "She ran faster, and he tried to {blank} {base} with her.",
            "Wages have failed to {blank} {base} with rising living costs."
        ],
        options: ["keep", "hold", "match", "stay"]
    },
    {
        collocate: "gain", base: "momentum", phrase: "gain momentum", type: "verb-noun", topic: "work", level: "high",
        meaning: "To become stronger, faster, or more successful over time.",
        sentences: [
            "The campaign is starting to {blank} {base} among young voters.",
            "The project {blank}ed {base} after the initial funding was secured.",
            "The movement has {blank}ed significant {base} in recent months.",
            "Once the idea {blank}s {base}, it will be hard to stop."
        ],
        options: ["gain", "get", "build", "grow"]
    },
    {
        collocate: "make", base: "headway", phrase: "make headway", type: "verb-noun", topic: "work", level: "college",
        meaning: "To make progress, especially when it is difficult.",
        sentences: [
            "Negotiators are finally {blank}ing {base} on the trade deal.",
            "We haven't {blank} much {base} with this problem yet.",
            "The team {blank} significant {base} despite limited resources.",
            "It's hard to {blank} {base} when everyone disagrees."
        ],
        options: ["make", "do", "get", "take"]
    },
    {
        collocate: "gather", base: "momentum", phrase: "gather momentum", type: "verb-noun", topic: "work", level: "college",
        meaning: "To gradually become more powerful or gain wider support.",
        sentences: [
            "The protest movement is {blank}ing {base} across the country.",
            "The reform effort {blank}ed {base} after the election.",
            "Opposition to the plan has {blank}ed considerable {base}.",
            "Once a social movement {blank}s {base}, change becomes inevitable."
        ],
        options: ["gather", "collect", "gain", "build"]
    },
    {
        collocate: "voice", base: "opinion", phrase: "voice an opinion", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To express one's thoughts or views openly.",
        sentences: [
            "Everyone should feel free to {blank} their {base} at the meeting.",
            "She {blank}d her {base} against the proposed changes.",
            "Few employees dared to {blank} an {base} on the matter.",
            "He never hesitates to {blank} his {base}, even when unpopular."
        ],
        options: ["voice", "say", "tell", "speak"]
    },
    {
        collocate: "cast", base: "doubt", phrase: "cast doubt", type: "verb-noun", topic: "education", level: "college",
        meaning: "To make something seem uncertain or less believable.",
        sentences: [
            "New findings {blank} {base} on the original theory.",
            "The scandal {blank} {base} on his credibility as a leader.",
            "Critics {blank} {base} on the accuracy of the study.",
            "The evidence {blank}s serious {base} on the defendant's alibi."
        ],
        options: ["cast", "throw", "put", "make"]
    },
    {
        collocate: "pose", base: "risk", phrase: "pose a risk", type: "verb-noun", topic: "health", level: "high",
        meaning: "To present a potential danger or threat.",
        sentences: [
            "Processed foods may {blank} a {base} to your long-term health.",
            "The chemical spill {blank}s a serious {base} to local wildlife.",
            "Excessive screen time could {blank} a {base} to children's development.",
            "Does this medication {blank} any {base} to pregnant women?"
        ],
        options: ["pose", "make", "give", "set"]
    },
    {
        collocate: "raise", base: "bar", phrase: "raise the bar", type: "verb-noun", topic: "work", level: "high",
        meaning: "To set a higher standard of quality or performance.",
        sentences: [
            "The new CEO wants to {blank} the {base} for customer service.",
            "Each generation of athletes {blank}s the {base} even higher.",
            "This product {blank}s the {base} for the entire industry.",
            "We need to {blank} the {base} if we want to stay competitive."
        ],
        options: ["raise", "lift", "push", "move"]
    },
    {
        collocate: "shift", base: "blame", phrase: "shift the blame", type: "verb-noun", topic: "people", level: "high",
        meaning: "To try to make someone else responsible for a mistake or problem.",
        sentences: [
            "He always tries to {blank} the {base} onto his colleagues.",
            "Politicians often {blank} the {base} to avoid accountability.",
            "Don't {blank} the {base} — take responsibility for your actions.",
            "She attempted to {blank} the {base} by pointing fingers at others."
        ],
        options: ["shift", "move", "pass", "throw"]
    },
    {
        collocate: "carry", base: "weight", phrase: "carry weight", type: "verb-noun", topic: "work", level: "college",
        meaning: "To have influence or importance in a particular context.",
        sentences: [
            "Her opinion {blank}s a lot of {base} in the boardroom.",
            "Academic credentials still {blank} considerable {base} in hiring.",
            "His argument didn't {blank} much {base} with the jury.",
            "In this industry, experience {blank}s more {base} than degrees."
        ],
        options: ["carry", "hold", "bear", "have"]
    },
    {
        collocate: "wield", base: "power", phrase: "wield power", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To exercise authority or influence, especially in a commanding way.",
        sentences: [
            "The CEO {blank}s enormous {base} within the organization.",
            "Those who {blank} {base} must do so responsibly.",
            "The committee {blank}s the {base} to approve or reject proposals.",
            "Media companies {blank} significant {base} over public opinion."
        ],
        options: ["wield", "hold", "use", "grip"]
    },
    {
        collocate: "spark", base: "controversy", phrase: "spark controversy", type: "verb-noun", topic: "people", level: "college",
        meaning: "To cause a heated public disagreement or debate.",
        sentences: [
            "The politician's remarks {blank}ed {base} across social media.",
            "The decision to close the school {blank}ed widespread {base}.",
            "Her provocative artwork has {blank}ed considerable {base}.",
            "New regulations often {blank} {base} among business owners."
        ],
        options: ["spark", "start", "cause", "light"]
    },
    {
        collocate: "fuel", base: "speculation", phrase: "fuel speculation", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To encourage or intensify guesses and theories about something.",
        sentences: [
            "The CEO's sudden resignation {blank}ed {base} about the company's future.",
            "Leaked documents continue to {blank} {base} about the merger.",
            "His silence only {blank}s further {base} among journalists.",
            "Unusual trading activity {blank}ed {base} of insider dealing."
        ],
        options: ["fuel", "feed", "drive", "push"]
    },
    {
        collocate: "lend", base: "support", phrase: "lend support", type: "verb-noun", topic: "people", level: "high",
        meaning: "To give help, encouragement, or backing to someone or something.",
        sentences: [
            "Several organizations {blank} their {base} to the campaign.",
            "New research {blank}s {base} to the theory of climate change.",
            "Will you {blank} your {base} to our fundraising event?",
            "The senator {blank} his {base} to the proposed legislation."
        ],
        options: ["lend", "give", "offer", "show"]
    },
    {
        collocate: "draw", base: "criticism", phrase: "draw criticism", type: "verb-noun", topic: "work", level: "college",
        meaning: "To receive negative comments or disapproval from others.",
        sentences: [
            "The government's handling of the crisis {blank} widespread {base}.",
            "His decision to cut funding {blank} sharp {base} from educators.",
            "The proposal {blank}s {base} from environmental groups.",
            "She {blank} {base} for her comments on social media."
        ],
        options: ["draw", "pull", "get", "take"]
    },
    {
        collocate: "court", base: "controversy", phrase: "court controversy", type: "verb-noun", topic: "people", level: "professional",
        meaning: "To deliberately do things that are likely to cause public disagreement.",
        sentences: [
            "The director is known for {blank}ing {base} with provocative films.",
            "Some politicians {blank} {base} to stay in the headlines.",
            "The brand seems to {blank} {base} with every new campaign.",
            "He has never been afraid to {blank} {base} in his career."
        ],
        options: ["court", "seek", "invite", "chase"]
    },
    {
        collocate: "press", base: "charges", phrase: "press charges", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To formally accuse someone of a crime through the legal system.",
        sentences: [
            "The victim decided to {blank} {base} against her attacker.",
            "The company threatened to {blank} {base} for theft of data.",
            "Police asked whether she wanted to {blank} {base}.",
            "They chose not to {blank} {base} and settled out of court."
        ],
        options: ["press", "push", "file", "make"]
    },
    {
        collocate: "lodge", base: "complaint", phrase: "lodge a complaint", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To formally submit a grievance or expression of dissatisfaction.",
        sentences: [
            "Several passengers {blank}d a {base} about the airline's service.",
            "You have the right to {blank} a formal {base} with HR.",
            "Residents {blank}d {base}s about the noise from the construction.",
            "If you're unhappy with the product, you should {blank} a {base}."
        ],
        options: ["lodge", "file", "put", "make"]
    },
    {
        collocate: "file", base: "lawsuit", phrase: "file a lawsuit", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To initiate a legal case against someone or an organization.",
        sentences: [
            "The former employee {blank}d a {base} against the company.",
            "Consumer groups threatened to {blank} a {base} over misleading ads.",
            "She {blank}d a {base} seeking compensation for damages.",
            "Several families plan to {blank} a class-action {base}."
        ],
        options: ["file", "lodge", "submit", "press"]
    },
    {
        collocate: "stand", base: "trial", phrase: "stand trial", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To be judged in a court of law for an alleged crime.",
        sentences: [
            "The executive will {blank} {base} for fraud next month.",
            "He was deemed unfit to {blank} {base} due to mental illness.",
            "Four suspects are set to {blank} {base} in September.",
            "She agreed to {blank} {base} rather than accept a plea deal."
        ],
        options: ["stand", "face", "attend", "sit"]
    },
    {
        collocate: "wreak", base: "havoc", phrase: "wreak havoc", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To cause widespread destruction or chaos.",
        sentences: [
            "The storm {blank}ed {base} on the coastal towns.",
            "Cyberattacks can {blank} {base} on critical infrastructure.",
            "Inflation continues to {blank} {base} on household budgets.",
            "Invasive species {blank} {base} on local ecosystems."
        ],
        options: ["wreak", "cause", "bring", "make"]
    },
    {
        collocate: "cause", base: "stir", phrase: "cause a stir", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To create excitement, shock, or a lot of interest among people.",
        sentences: [
            "Her bold outfit {blank}d quite a {base} at the event.",
            "The announcement {blank}d a {base} in the financial markets.",
            "His controversial speech {blank}d a major {base} online.",
            "The unexpected resignation {blank}d a {base} throughout the company."
        ],
        options: ["cause", "make", "create", "start"]
    },
    {
        collocate: "make", base: "scene", phrase: "make a scene", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To behave in a loud or dramatic way that attracts attention in public.",
        sentences: [
            "Please don't {blank} a {base} in front of everyone.",
            "He {blank} a terrible {base} at the restaurant last night.",
            "She tends to {blank} a {base} whenever she doesn't get her way.",
            "The angry customer {blank} a huge {base} at the checkout."
        ],
        options: ["make", "do", "create", "have"]
    },
    {
        collocate: "raise", base: "eyebrows", phrase: "raise eyebrows", type: "verb-noun", topic: "people", level: "high",
        meaning: "To cause surprise or disapproval among people.",
        sentences: [
            "Her lavish spending habits {blank}d a few {base}.",
            "The CEO's enormous bonus {blank}d {base} among shareholders.",
            "His decision to quit medical school {blank}d {base} in the family.",
            "The unconventional proposal is sure to {blank} some {base}."
        ],
        options: ["raise", "lift", "rise", "pull"]
    },
    {
        collocate: "break", base: "even", phrase: "break even", type: "verb-noun", topic: "money", level: "high",
        meaning: "To reach a point where income equals expenses, making neither profit nor loss.",
        sentences: [
            "The startup hopes to {blank} {base} within the first two years.",
            "We barely {blank} {base} after paying all the expenses.",
            "It takes most new businesses three years to {blank} {base}.",
            "If we {blank} {base} this quarter, we'll consider it a success."
        ],
        options: ["break", "make", "hit", "reach"]
    },
    {
        collocate: "turn", base: "profit", phrase: "turn a profit", type: "verb-noun", topic: "money", level: "high",
        meaning: "To earn more money than is spent; to become profitable.",
        sentences: [
            "The company finally {blank}ed a {base} after years of losses.",
            "It's hard to {blank} a {base} in such a competitive market.",
            "Small farms struggle to {blank} a decent {base} these days.",
            "The restaurant began to {blank} a {base} in its second year."
        ],
        options: ["turn", "make", "earn", "get"]
    },
    {
        collocate: "incur", base: "costs", phrase: "incur costs", type: "verb-noun", topic: "money", level: "professional",
        meaning: "To become liable for expenses as a result of an action or decision.",
        sentences: [
            "The project will {blank} significant {base} in the early stages.",
            "Companies that pollute should {blank} the cleanup {base}.",
            "Delays in production often {blank} unexpected {base}.",
            "You may {blank} additional {base} if you cancel the contract."
        ],
        options: ["incur", "make", "get", "take"]
    },
    {
        collocate: "bear", base: "costs", phrase: "bear costs", type: "verb-noun", topic: "money", level: "college",
        meaning: "To accept responsibility for paying expenses.",
        sentences: [
            "Patients should not have to {blank} the full {base} of treatment.",
            "The insurance company will {blank} most of the {base}.",
            "Small businesses often {blank} the {base} of regulatory compliance.",
            "Who will {blank} the {base} of rebuilding after the flood?"
        ],
        options: ["bear", "carry", "hold", "take"]
    },
    {
        collocate: "reap", base: "benefits", phrase: "reap benefits", type: "verb-noun", topic: "work", level: "high",
        meaning: "To enjoy the positive results of one's efforts or investments.",
        sentences: [
            "You'll {blank} the {base} of regular exercise in the long run.",
            "Companies that invest in training {blank} long-term {base}.",
            "Students who study abroad often {blank} enormous {base}.",
            "The community will {blank} the {base} of the new infrastructure."
        ],
        options: ["reap", "gain", "get", "take"]
    },
    {
        collocate: "do", base: "wonders", phrase: "do wonders", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To have an extremely positive effect on something.",
        sentences: [
            "A good night's sleep can {blank} {base} for your mood.",
            "Regular exercise {blank}s {base} for your mental health.",
            "A fresh coat of paint will {blank} {base} for this room.",
            "A kind word can {blank} {base} for someone's confidence."
        ],
        options: ["do", "make", "work", "create"]
    },
    {
        collocate: "work", base: "miracles", phrase: "work miracles", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To achieve amazing results that seem almost impossible.",
        sentences: [
            "This face cream claims to {blank} {base} on wrinkles.",
            "Good teachers can {blank} {base} with struggling students.",
            "She {blank}ed {base} with such a small budget.",
            "Modern medicine can {blank} {base}, but it has its limits."
        ],
        options: ["work", "make", "do", "perform"]
    },
    {
        collocate: "take", base: "its toll", phrase: "take its toll", type: "verb-noun", topic: "health", level: "high",
        meaning: "To gradually cause damage, suffering, or decline over time.",
        sentences: [
            "Years of overwork are starting to {blank} {base} on his body.",
            "The stress of the job eventually {blank} {base}.",
            "Pollution is {blank}ing {base} on marine ecosystems.",
            "Lack of sleep will eventually {blank} {base} on your performance."
        ],
        options: ["take", "have", "make", "get"]
    },
    {
        collocate: "take", base: "plunge", phrase: "take the plunge", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To make a bold decision to do something risky or challenging.",
        sentences: [
            "After months of hesitation, she finally {blank} the {base} and started her own business.",
            "Are you ready to {blank} the {base} and move abroad?",
            "He decided to {blank} the {base} and propose to his girlfriend.",
            "We {blank} the {base} and invested all our savings."
        ],
        options: ["take", "make", "do", "jump"]
    },
    {
        collocate: "harbour", base: "resentment", phrase: "harbour resentment", type: "verb-noun", topic: "people", level: "college",
        meaning: "To hold onto feelings of bitterness or anger over time.",
        sentences: [
            "She continued to {blank} {base} toward her former partner.",
            "It's unhealthy to {blank} {base} for years without addressing it.",
            "He {blank}ed deep {base} over being passed over for promotion.",
            "Many employees {blank} {base} when they feel undervalued."
        ],
        options: ["harbour", "hold", "keep", "carry"]
    },
    {
        collocate: "run", base: "risk", phrase: "run the risk", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To be in danger of something bad happening.",
        sentences: [
            "If you don't back up your files, you {blank} the {base} of losing everything.",
            "Smokers {blank} the {base} of developing serious health problems.",
            "By ignoring safety rules, workers {blank} the {base} of injury.",
            "You {blank} the {base} of being fined if you park illegally."
        ],
        options: ["run", "take", "have", "face"]
    },
    {
        collocate: "create", base: "scene", phrase: "create a scene", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To cause a public disturbance by behaving dramatically.",
        sentences: [
            "He {blank}d a {base} by shouting at the waiter.",
            "Please don't {blank} a {base} in front of the children.",
            "She {blank}d an embarrassing {base} at the airport.",
            "There's no need to {blank} a {base} over such a small issue."
        ],
        options: ["create", "make", "do", "start"]
    },
    {
        collocate: "serve", base: "justice", phrase: "serve justice", type: "verb-noun", topic: "work", level: "professional",
        meaning: "To ensure that fairness and the law are properly upheld.",
        sentences: [
            "The court's role is to {blank} {base} impartially.",
            "Many believe the verdict failed to {blank} {base}.",
            "Prosecutors are committed to {blank}ing {base} for the victims.",
            "A fair trial is essential to {blank} {base} properly."
        ],
        options: ["serve", "give", "make", "bring"]
    },
    {
        collocate: "fuel", base: "debate", phrase: "fuel a debate", type: "verb-noun", topic: "education", level: "college",
        meaning: "To intensify or add energy to an ongoing discussion or argument.",
        sentences: [
            "The controversial study {blank}ed a heated {base} in academic circles.",
            "Rising inequality continues to {blank} the {base} over taxation.",
            "New data has {blank}ed the {base} about artificial intelligence.",
            "His comments {blank}ed a national {base} about free speech."
        ],
        options: ["fuel", "feed", "start", "push"]
    },
    {
        collocate: "weather", base: "storm", phrase: "weather the storm", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To survive a difficult period or situation successfully.",
        sentences: [
            "The company managed to {blank} the {base} of the financial crisis.",
            "She {blank}ed the {base} of public criticism with dignity.",
            "Small businesses that {blank} the {base} often emerge stronger.",
            "Together, we can {blank} any {base} that comes our way."
        ],
        options: ["weather", "survive", "ride", "face"]
    },
    {
        collocate: "tip", base: "scales", phrase: "tip the scales", type: "verb-noun", topic: "daily", level: "college",
        meaning: "To be the deciding factor that causes a shift in balance or outcome.",
        sentences: [
            "Her endorsement could {blank} the {base} in favor of the candidate.",
            "One piece of evidence {blank}ped the {base} in the trial.",
            "A few extra votes can {blank} the {base} in a close election.",
            "His experience {blank}ped the {base} during the hiring process."
        ],
        options: ["tip", "turn", "shift", "push"]
    },
    {
        collocate: "clear", base: "air", phrase: "clear the air", type: "verb-noun", topic: "people", level: "middle",
        meaning: "To resolve tension or misunderstanding by talking openly.",
        sentences: [
            "Let's sit down and {blank} the {base} between us.",
            "A frank discussion helped {blank} the {base} after the argument.",
            "She called him to {blank} the {base} about the rumours.",
            "It's important to {blank} the {base} before resentment builds up."
        ],
        options: ["clear", "clean", "fresh", "open"]
    },
    {
        collocate: "test", base: "waters", phrase: "test the waters", type: "verb-noun", topic: "work", level: "high",
        meaning: "To cautiously try something to see if it will be successful or accepted.",
        sentences: [
            "Before launching the product, we should {blank} the {base} first.",
            "She decided to {blank} the {base} by applying to a few companies.",
            "The company is {blank}ing the {base} with a limited release.",
            "Politicians often {blank} the {base} before announcing major policies."
        ],
        options: ["test", "try", "check", "feel"]
    },
    {
        collocate: "steep", base: "decline", phrase: "steep decline", type: "adj-noun", topic: "money", level: "high",
        meaning: "A sharp and significant decrease in value, amount, or quality.",
        sentences: [
            "The company experienced a {blank} {base} in share prices.",
            "There has been a {blank} {base} in manufacturing jobs.",
            "A {blank} {base} in tourism hit the local economy hard.",
            "Experts warn of a {blank} {base} in birth rates."
        ],
        options: ["steep", "sharp", "deep", "heavy"]
    },
    {
        collocate: "bitter", base: "disappointment", phrase: "bitter disappointment", type: "adj-noun", topic: "people", level: "middle",
        meaning: "An intense feeling of sadness caused by unmet hopes or expectations.",
        sentences: [
            "Losing the final was a {blank} {base} for the whole team.",
            "She couldn't hide her {blank} {base} at the exam results.",
            "It was a {blank} {base} to learn the trip was cancelled.",
            "He expressed {blank} {base} at being overlooked for the role."
        ],
        options: ["bitter", "deep", "strong", "hard"]
    },
    {
        collocate: "sheer", base: "luck", phrase: "sheer luck", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "Pure chance with no skill or planning involved.",
        sentences: [
            "It was {blank} {base} that we found the lost ring.",
            "By {blank} {base}, she caught the last train home.",
            "He passed the test through {blank} {base} — he didn't study at all.",
            "Finding a parking space downtown was {blank} {base}."
        ],
        options: ["sheer", "pure", "total", "complete"]
    },
    {
        collocate: "utter", base: "chaos", phrase: "utter chaos", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A state of complete disorder and confusion.",
        sentences: [
            "The concert ended in {blank} {base} when the lights went out.",
            "The office was in {blank} {base} after the server crashed.",
            "The announcement caused {blank} {base} in the stock market.",
            "It was {blank} {base} at the airport during the strike."
        ],
        options: ["utter", "total", "complete", "pure"]
    },
    {
        collocate: "stark", base: "contrast", phrase: "stark contrast", type: "adj-noun", topic: "education", level: "college",
        meaning: "A very obvious and striking difference between two things.",
        sentences: [
            "Her calm response stood in {blank} {base} to his angry outburst.",
            "The wealth of the city is in {blank} {base} to the surrounding poverty.",
            "There is a {blank} {base} between the two candidates' policies.",
            "The modern building forms a {blank} {base} with the historic church."
        ],
        options: ["stark", "sharp", "clear", "strong"]
    },
    {
        collocate: "vested", base: "interest", phrase: "vested interest", type: "adj-noun", topic: "work", level: "professional",
        meaning: "A personal stake in something, especially one that may involve bias.",
        sentences: [
            "Oil companies have a {blank} {base} in blocking climate legislation.",
            "He has a {blank} {base} in the success of the project.",
            "Lobbyists with {blank} {base}s often influence policy decisions.",
            "She declared her {blank} {base} before joining the committee."
        ],
        options: ["vested", "personal", "strong", "deep"]
    },
    {
        collocate: "foregone", base: "conclusion", phrase: "foregone conclusion", type: "adj-noun", topic: "education", level: "college",
        meaning: "A result that is certain or inevitable before it happens.",
        sentences: [
            "The election result was a {blank} {base} from the start.",
            "It's a {blank} {base} that prices will continue to rise.",
            "Many see his conviction as a {blank} {base}.",
            "Promotion was never a {blank} {base} — she earned it."
        ],
        options: ["foregone", "certain", "obvious", "predicted"]
    },
    {
        collocate: "sweeping", base: "changes", phrase: "sweeping changes", type: "adj-noun", topic: "work", level: "college",
        meaning: "Extensive, far-reaching reforms or alterations that affect many areas.",
        sentences: [
            "The new government introduced {blank} {base} to the tax system.",
            "{blank} {base} are needed to modernize the healthcare sector.",
            "The company announced {blank} {base} to its organizational structure.",
            "The law brought {blank} {base} to environmental regulations."
        ],
        options: ["sweeping", "broad", "wide", "massive"]
    },
    {
        collocate: "blanket", base: "ban", phrase: "blanket ban", type: "adj-noun", topic: "work", level: "professional",
        meaning: "A complete prohibition that applies to all cases without exception.",
        sentences: [
            "The government imposed a {blank} {base} on single-use plastics.",
            "A {blank} {base} on advertising would be too extreme.",
            "Critics argue that a {blank} {base} is not the right approach.",
            "The school introduced a {blank} {base} on mobile phones."
        ],
        options: ["blanket", "total", "complete", "full"]
    },
    {
        collocate: "chronic", base: "shortage", phrase: "chronic shortage", type: "adj-noun", topic: "work", level: "college",
        meaning: "A persistent and long-lasting lack of something essential.",
        sentences: [
            "The country faces a {blank} {base} of qualified teachers.",
            "A {blank} {base} of affordable housing is pushing rents higher.",
            "The healthcare system suffers from a {blank} {base} of nurses.",
            "There is a {blank} {base} of clean drinking water in the region."
        ],
        options: ["chronic", "constant", "severe", "permanent"]
    },
    {
        collocate: "acute", base: "shortage", phrase: "acute shortage", type: "adj-noun", topic: "health", level: "college",
        meaning: "A severe and urgent lack of something critically needed.",
        sentences: [
            "Hospitals are facing an {blank} {base} of medical supplies.",
            "The disaster caused an {blank} {base} of clean water.",
            "There is an {blank} {base} of blood donors this winter.",
            "An {blank} {base} of ventilators worsened the health crisis."
        ],
        options: ["acute", "severe", "critical", "extreme"]
    },
    {
        collocate: "bitter", base: "dispute", phrase: "bitter dispute", type: "adj-noun", topic: "work", level: "high",
        meaning: "An angry and prolonged disagreement between parties.",
        sentences: [
            "The two neighbours are locked in a {blank} {base} over the boundary.",
            "A {blank} {base} between unions and management led to a strike.",
            "The inheritance sparked a {blank} {base} among the siblings.",
            "A {blank} {base} over ownership delayed the project for months."
        ],
        options: ["bitter", "fierce", "heated", "sharp"]
    },
    {
        collocate: "mounting", base: "pressure", phrase: "mounting pressure", type: "adj-noun", topic: "work", level: "high",
        meaning: "Steadily increasing force or urgency demanding action.",
        sentences: [
            "The CEO resigned amid {blank} {base} from shareholders.",
            "There is {blank} {base} on the government to act on climate change.",
            "Under {blank} {base}, the company agreed to recall the product.",
            "She performed well despite {blank} {base} from all sides."
        ],
        options: ["mounting", "growing", "rising", "building"]
    },
    {
        collocate: "growing", base: "trend", phrase: "growing trend", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A tendency or pattern that is becoming more widespread over time.",
        sentences: [
            "There is a {blank} {base} toward remote working.",
            "Veganism is a {blank} {base} among young people.",
            "Online shopping has become a {blank} {base} worldwide.",
            "The {blank} {base} of sustainability is reshaping business."
        ],
        options: ["growing", "rising", "increasing", "expanding"]
    },
    {
        collocate: "emerging", base: "market", phrase: "emerging market", type: "adj-noun", topic: "money", level: "college",
        meaning: "A developing country's economy that is becoming more engaged with global markets.",
        sentences: [
            "Investors are looking at {blank} {base}s for higher returns.",
            "India and Brazil are considered major {blank} {base}s.",
            "Currency risk is higher in {blank} {base}s.",
            "{blank} {base}s offer both opportunities and challenges for investors."
        ],
        options: ["emerging", "developing", "growing", "rising"]
    },
    {
        collocate: "gross", base: "negligence", phrase: "gross negligence", type: "adj-noun", topic: "work", level: "professional",
        meaning: "An extreme lack of care that shows reckless disregard for safety or duty.",
        sentences: [
            "The hospital was sued for {blank} {base} in patient care.",
            "The accident was caused by {blank} {base} on the part of the driver.",
            "Charges of {blank} {base} were brought against the factory owner.",
            "The report found evidence of {blank} {base} in safety procedures."
        ],
        options: ["gross", "severe", "serious", "extreme"]
    },
    {
        collocate: "humble", base: "beginnings", phrase: "humble beginnings", type: "adj-noun", topic: "people", level: "middle",
        meaning: "A modest or low-status start in life, often before achieving success.",
        sentences: [
            "Despite her {blank} {base}, she became a world-famous scientist.",
            "The company grew from {blank} {base} in a small garage.",
            "He never forgot his {blank} {base} in a rural village.",
            "Many successful people come from {blank} {base}."
        ],
        options: ["humble", "modest", "simple", "small"]
    },
    {
        collocate: "steep", base: "learning curve", phrase: "steep learning curve", type: "adj-noun", topic: "education", level: "high",
        meaning: "A situation where a lot of knowledge or skill must be gained quickly.",
        sentences: [
            "Starting the new job involved a {blank} {base}.",
            "There's a {blank} {base} when you first learn to code.",
            "The software has a {blank} {base} for beginners.",
            "She faced a {blank} {base} when she switched careers."
        ],
        options: ["steep", "sharp", "high", "tough"]
    },
    {
        collocate: "level", base: "playing field", phrase: "level playing field", type: "adj-noun", topic: "work", level: "college",
        meaning: "A situation where everyone has an equal chance of succeeding.",
        sentences: [
            "New regulations aim to create a {blank} {base} for all businesses.",
            "Small companies deserve a {blank} {base} when competing for contracts.",
            "Education can help provide a {blank} {base} for disadvantaged youth.",
            "Without a {blank} {base}, fair competition is impossible."
        ],
        options: ["level", "fair", "equal", "flat"]
    },
    {
        collocate: "burning", base: "desire", phrase: "burning desire", type: "adj-noun", topic: "people", level: "high",
        meaning: "An extremely strong and passionate wish to do or achieve something.",
        sentences: [
            "She had a {blank} {base} to travel the world.",
            "His {blank} {base} to succeed drove him through difficult times.",
            "A {blank} {base} for justice motivated her to become a lawyer.",
            "He felt a {blank} {base} to prove his critics wrong."
        ],
        options: ["burning", "strong", "deep", "fierce"]
    },
    {
        collocate: "fleeting", base: "moment", phrase: "fleeting moment", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A very brief instant that passes quickly.",
        sentences: [
            "For a {blank} {base}, she thought she recognized him.",
            "Happiness can sometimes feel like a {blank} {base}.",
            "He caught a {blank} {base} of doubt in her eyes.",
            "The sunset was beautiful but lasted only a {blank} {base}."
        ],
        options: ["fleeting", "brief", "passing", "short"]
    },
    {
        collocate: "lasting", base: "legacy", phrase: "lasting legacy", type: "adj-noun", topic: "people", level: "college",
        meaning: "A long-term impact or contribution that endures over time.",
        sentences: [
            "The scientist left a {blank} {base} through her research.",
            "His charitable work created a {blank} {base} in the community.",
            "The artist's {blank} {base} continues to inspire new generations.",
            "She hoped to leave a {blank} {base} for future students."
        ],
        options: ["lasting", "permanent", "enduring", "long"]
    },
    {
        collocate: "resounding", base: "success", phrase: "resounding success", type: "adj-noun", topic: "work", level: "high",
        meaning: "An overwhelmingly great and unmistakable achievement.",
        sentences: [
            "The charity gala was a {blank} {base}, raising over a million dollars.",
            "Her debut novel was a {blank} {base} with both critics and readers.",
            "The product launch was a {blank} {base} across all markets.",
            "The campaign proved to be a {blank} {base} beyond expectations."
        ],
        options: ["resounding", "huge", "great", "massive"]
    },
    {
        collocate: "dramatic", base: "increase", phrase: "dramatic increase", type: "adj-noun", topic: "work", level: "high",
        meaning: "A sudden and very large rise in amount, level, or intensity.",
        sentences: [
            "There has been a {blank} {base} in the cost of living.",
            "The city saw a {blank} {base} in tourism last summer.",
            "A {blank} {base} in demand led to supply shortages.",
            "Scientists reported a {blank} {base} in global temperatures."
        ],
        options: ["dramatic", "sharp", "huge", "massive"]
    },
    {
        collocate: "radical", base: "change", phrase: "radical change", type: "adj-noun", topic: "work", level: "college",
        meaning: "A fundamental and far-reaching transformation in approach or structure.",
        sentences: [
            "The industry needs a {blank} {base} in how it operates.",
            "Moving abroad was a {blank} {base} from her routine.",
            "The policy represents a {blank} {base} in government strategy.",
            "A {blank} {base} in leadership style transformed the company."
        ],
        options: ["radical", "major", "drastic", "big"]
    },
    {
        collocate: "grossly", base: "underestimated", phrase: "grossly underestimated", type: "adv-verb", topic: "work", level: "college",
        meaning: "To severely misjudge something by assuming it is much less than it actually is.",
        sentences: [
            "The cost of the project was {blank} {base}.",
            "Officials {blank} {base} the scale of the disaster.",
            "Her talent has been {blank} {base} by her critics.",
            "The company {blank} {base} the demand for the new product."
        ],
        options: ["grossly", "highly", "greatly", "deeply"]
    },
    {
        collocate: "hotly", base: "contested", phrase: "hotly contested", type: "adv-adj", topic: "work", level: "college",
        meaning: "Fiercely competed for or strongly disputed.",
        sentences: [
            "The election was one of the most {blank} {base} in history.",
            "The championship title remains {blank} {base} every year.",
            "It was a {blank} {base} debate with strong opinions on both sides.",
            "The contract was {blank} {base} by several major firms."
        ],
        options: ["hotly", "highly", "fiercely", "strongly"]
    },
    {
        collocate: "closely", base: "related", phrase: "closely related", type: "adv-adj", topic: "education", level: "middle",
        meaning: "Having a strong connection or similarity to something else.",
        sentences: [
            "These two species are {blank} {base} genetically.",
            "The issues of poverty and education are {blank} {base}.",
            "The languages are {blank} {base} but not identical.",
            "His research is {blank} {base} to the field of neuroscience."
        ],
        options: ["closely", "nearly", "highly", "deeply"]
    },
    {
        collocate: "loosely", base: "based", phrase: "loosely based", type: "adv-adj", topic: "education", level: "high",
        meaning: "Inspired by but not strictly following the original source.",
        sentences: [
            "The film is {blank} {base} on a true story.",
            "The novel is {blank} {base} on the author's own childhood.",
            "The character is {blank} {base} on a real historical figure.",
            "The play is {blank} {base} on events from the 1920s."
        ],
        options: ["loosely", "freely", "roughly", "vaguely"]
    },
    {
        collocate: "strictly", base: "confidential", phrase: "strictly confidential", type: "adv-adj", topic: "work", level: "high",
        meaning: "Completely private and not to be shared with anyone else.",
        sentences: [
            "All patient records are {blank} {base}.",
            "This information is {blank} {base} — do not share it.",
            "The documents were marked as {blank} {base}.",
            "Salary details are {blank} {base} within our organization."
        ],
        options: ["strictly", "highly", "totally", "completely"]
    },
    {
        collocate: "heavily", base: "reliant", phrase: "heavily reliant", type: "adv-adj", topic: "work", level: "college",
        meaning: "Depending to a great extent on something or someone.",
        sentences: [
            "The economy is {blank} {base} on oil exports.",
            "Many students are {blank} {base} on technology for learning.",
            "The region is {blank} {base} on tourism for income.",
            "She was {blank} {base} on her assistant to manage the schedule."
        ],
        options: ["heavily", "highly", "greatly", "deeply"]
    },
    {
        collocate: "acutely", base: "aware", phrase: "acutely aware", type: "adv-adj", topic: "people", level: "college",
        meaning: "Intensely and painfully conscious of something.",
        sentences: [
            "She was {blank} {base} of the risks involved.",
            "He became {blank} {base} of how little time he had left.",
            "The team is {blank} {base} of the challenges ahead.",
            "I am {blank} {base} that this is a sensitive issue."
        ],
        options: ["acutely", "deeply", "highly", "fully"]
    },
    {
        collocate: "diametrically", base: "opposed", phrase: "diametrically opposed", type: "adv-adj", topic: "education", level: "professional",
        meaning: "Completely opposite in every way.",
        sentences: [
            "Their political views are {blank} {base}.",
            "The two theories are {blank} {base} to each other.",
            "Management and the union hold {blank} {base} positions.",
            "The candidates presented {blank} {base} visions for the country."
        ],
        options: ["diametrically", "directly", "completely", "totally"]
    },
    {
        collocate: "inextricably", base: "linked", phrase: "inextricably linked", type: "adv-adj", topic: "education", level: "professional",
        meaning: "Connected so closely that separation is impossible.",
        sentences: [
            "Economic growth and environmental impact are {blank} {base}.",
            "Language and culture are {blank} {base}.",
            "The two issues are {blank} {base} in the public's mind.",
            "His personal life and career became {blank} {base}."
        ],
        options: ["inextricably", "inseparably", "closely", "deeply"]
    },
    {
        collocate: "peer", base: "pressure", phrase: "peer pressure", type: "noun-noun", topic: "people", level: "middle",
        meaning: "Influence from people of the same age or social group to behave in a certain way.",
        sentences: [
            "Teenagers often give in to {blank} {base} to fit in.",
            "She refused to smoke despite the {blank} {base}.",
            "{blank} {base} can lead young people to make poor decisions.",
            "Schools run programs to help students resist {blank} {base}."
        ],
        options: ["peer", "friend", "group", "social"]
    },
    {
        collocate: "gender", base: "equality", phrase: "gender equality", type: "noun-noun", topic: "people", level: "high",
        meaning: "The state of equal access to opportunities and rights regardless of gender.",
        sentences: [
            "The organization campaigns for {blank} {base} in the workplace.",
            "Many countries still struggle to achieve {blank} {base}.",
            "{blank} {base} is a fundamental human right.",
            "New laws were introduced to promote {blank} {base} in education."
        ],
        options: ["gender", "sex", "social", "racial"]
    },
    {
        collocate: "income", base: "inequality", phrase: "income inequality", type: "noun-noun", topic: "money", level: "college",
        meaning: "The uneven distribution of earnings among a population.",
        sentences: [
            "{blank} {base} has been rising in developed nations.",
            "Economists warn that {blank} {base} threatens social stability.",
            "Government policies aim to reduce {blank} {base}.",
            "The report highlighted growing {blank} {base} between regions."
        ],
        options: ["income", "wage", "salary", "earning"]
    },
    {
        collocate: "child", base: "custody", phrase: "child custody", type: "noun-noun", topic: "people", level: "professional",
        meaning: "The legal right to take care of a child, especially after divorce.",
        sentences: [
            "The couple went to court to settle the {blank} {base} dispute.",
            "She was granted full {blank} {base} after the divorce.",
            "{blank} {base} battles can be emotionally draining for families.",
            "The judge considered the child's welfare when deciding {blank} {base}."
        ],
        options: ["child", "kid", "minor", "infant"]
    },
    {
        collocate: "consumer", base: "confidence", phrase: "consumer confidence", type: "noun-noun", topic: "money", level: "college",
        meaning: "The degree of optimism that consumers feel about the economy and their personal finances.",
        sentences: [
            "{blank} {base} fell sharply after the financial crisis.",
            "Rising employment usually boosts {blank} {base}.",
            "The index measures {blank} {base} on a monthly basis.",
            "Retailers depend on strong {blank} {base} during the holiday season."
        ],
        options: ["consumer", "customer", "buyer", "shopper"]
    },
    {
        collocate: "voter", base: "turnout", phrase: "voter turnout", type: "noun-noun", topic: "work", level: "college",
        meaning: "The percentage of eligible voters who actually cast their ballots in an election.",
        sentences: [
            "{blank} {base} was disappointingly low in the local elections.",
            "Campaign efforts focused on increasing {blank} {base} among young people.",
            "Bad weather can significantly reduce {blank} {base}.",
            "The country recorded its highest {blank} {base} in decades."
        ],
        options: ["voter", "election", "ballot", "poll"]
    },
    {
        collocate: "life", base: "sentence", phrase: "life sentence", type: "noun-noun", topic: "work", level: "professional",
        meaning: "A punishment of imprisonment for the rest of a person's life or a very long period.",
        sentences: [
            "The murderer was given a {blank} {base} without parole.",
            "He is currently serving a {blank} {base} in a maximum-security prison.",
            "The judge handed down a {blank} {base} for the crime.",
            "A {blank} {base} means the convict may never be released."
        ],
        options: ["life", "long", "full", "death"]
    },
    {
        collocate: "peace", base: "talks", phrase: "peace talks", type: "noun-noun", topic: "work", level: "professional",
        meaning: "Discussions between opposing groups aimed at reaching a peaceful agreement.",
        sentences: [
            "The two countries have agreed to resume {blank} {base}.",
            "{blank} {base} broke down after disagreements over borders.",
            "International mediators are facilitating the {blank} {base}.",
            "The success of the {blank} {base} could end years of conflict."
        ],
        options: ["peace", "war", "truce", "cease"]
    },
    {
        collocate: "trade", base: "war", phrase: "trade war", type: "noun-noun", topic: "money", level: "college",
        meaning: "An economic conflict in which countries impose tariffs or restrictions on each other's imports.",
        sentences: [
            "The {blank} {base} between the two nations is hurting global markets.",
            "Analysts fear the {blank} {base} could lead to a recession.",
            "Both sides suffered economic losses from the escalating {blank} {base}.",
            "The government tried to de-escalate the {blank} {base} through negotiations."
        ],
        options: ["trade", "tariff", "commerce", "business"]
    },
    {
        collocate: "price", base: "tag", phrase: "price tag", type: "noun-noun", topic: "money", level: "middle",
        meaning: "The cost of something, especially when considered high or surprising.",
        sentences: [
            "The {blank} {base} on the designer handbag was shocking.",
            "She checked the {blank} {base} before putting the item in her cart.",
            "The project came with a hefty {blank} {base} of ten million dollars.",
            "Consumers are put off by the high {blank} {base}."
        ],
        options: ["price", "cost", "money", "value"]
    },
    {
        collocate: "health", base: "insurance", phrase: "health insurance", type: "noun-noun", topic: "health", level: "middle",
        meaning: "A type of coverage that pays for medical and surgical expenses of the insured.",
        sentences: [
            "Many workers rely on their employer for {blank} {base}.",
            "The cost of {blank} {base} continues to rise every year.",
            "She couldn't afford the surgery because she had no {blank} {base}.",
            "The government introduced universal {blank} {base} for all citizens."
        ],
        options: ["health", "medical", "body", "care"]
    },
    {
        collocate: "brain", base: "surgery", phrase: "brain surgery", type: "noun-noun", topic: "health", level: "college",
        meaning: "A medical operation performed on the brain, often considered highly complex.",
        sentences: [
            "The patient underwent emergency {blank} {base} after the accident.",
            "{blank} {base} requires years of specialized training.",
            "Advances in technology have made {blank} {base} safer.",
            "It's not exactly {blank} {base} — anyone can learn to do it."
        ],
        options: ["brain", "head", "skull", "nerve"]
    },
    {
        collocate: "traffic", base: "congestion", phrase: "traffic congestion", type: "noun-noun", topic: "travel", level: "middle",
        meaning: "A condition on road networks when traffic flow is slowed below normal speeds.",
        sentences: [
            "{blank} {base} in the city centre is worst during rush hour.",
            "The new bypass was built to reduce {blank} {base}.",
            "Heavy {blank} {base} delayed the ambulance by twenty minutes.",
            "Commuters waste hours each week stuck in {blank} {base}."
        ],
        options: ["traffic", "road", "car", "vehicle"]
    },
    {
        collocate: "data", base: "mining", phrase: "data mining", type: "noun-noun", topic: "technology", level: "college",
        meaning: "The process of analyzing large sets of data to discover patterns and useful information.",
        sentences: [
            "Companies use {blank} {base} to predict customer behaviour.",
            "{blank} {base} techniques revealed unexpected trends in sales.",
            "Privacy concerns have grown alongside advances in {blank} {base}.",
            "The course covers {blank} {base} and machine learning fundamentals."
        ],
        options: ["data", "information", "number", "digital"]
    },
    {
        collocate: "waste", base: "disposal", phrase: "waste disposal", type: "noun-noun", topic: "daily", level: "high",
        meaning: "The process of getting rid of unwanted materials, especially in a safe and organized way.",
        sentences: [
            "Proper {blank} {base} is essential to protect the environment.",
            "The city upgraded its {blank} {base} system to handle more recycling.",
            "Illegal {blank} {base} can lead to severe fines.",
            "Residents were given guidelines for safe {blank} {base} of chemicals."
        ],
        options: ["waste", "trash", "garbage", "rubbish"]
    },
    {
        collocate: "blunt", base: "instrument", phrase: "blunt instrument", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A heavy object without a sharp edge, often used to describe a crude tool or method.",
        sentences: [
            "The victim was struck with a {blank} {base}.",
            "Tax increases are a {blank} {base} for controlling inflation.",
            "The detective concluded that a {blank} {base} was the murder weapon.",
            "Using sanctions as a {blank} {base} can harm innocent civilians."
        ],
        options: ["blunt", "dull", "heavy", "rough"]
    },
    {
        collocate: "dire", base: "straits", phrase: "dire straits", type: "adj-noun", topic: "daily", level: "college",
        meaning: "An extremely difficult or dangerous situation, especially financially.",
        sentences: [
            "The company is in {blank} {base} after losing its biggest client.",
            "Without emergency funding, the hospital will be in {blank} {base}.",
            "Many families found themselves in {blank} {base} after the flood.",
            "The economy was in {blank} {base} following the stock market crash."
        ],
        options: ["dire", "desperate", "severe", "extreme"]
    },
    {
        collocate: "extravagant", base: "lifestyle", phrase: "extravagant lifestyle", type: "adj-noun", topic: "money", level: "high",
        meaning: "A way of living that involves spending a lot of money on luxury and pleasure.",
        sentences: [
            "The celebrity's {blank} {base} was well documented in magazines.",
            "He could no longer maintain his {blank} {base} after losing his job.",
            "An {blank} {base} often leads to financial problems.",
            "She traded her {blank} {base} for a simpler life in the country."
        ],
        options: ["extravagant", "expensive", "wealthy", "rich"]
    },
    {
        collocate: "modest", base: "income", phrase: "modest income", type: "adj-noun", topic: "money", level: "middle",
        meaning: "A relatively small amount of earnings, enough to live on but without luxury.",
        sentences: [
            "They managed to raise three children on a {blank} {base}.",
            "Despite her {blank} {base}, she always donated to charity.",
            "The job offers a {blank} {base} but excellent benefits.",
            "Many teachers survive on a {blank} {base} while doing vital work."
        ],
        options: ["modest", "small", "low", "humble"]
    },
    {
        collocate: "passing", base: "remark", phrase: "passing remark", type: "adj-noun", topic: "people", level: "high",
        meaning: "A brief, casual comment made without much thought or intention.",
        sentences: [
            "She made a {blank} {base} about his new haircut.",
            "What started as a {blank} {base} turned into a full argument.",
            "He didn't mean to offend — it was just a {blank} {base}.",
            "A {blank} {base} from her teacher changed her career path."
        ],
        options: ["passing", "casual", "brief", "quick"]
    },
    {
        collocate: "marginal", base: "improvement", phrase: "marginal improvement", type: "adj-noun", topic: "work", level: "college",
        meaning: "A very small or slight increase in quality or performance.",
        sentences: [
            "The new policy led to only a {blank} {base} in efficiency.",
            "Despite the investment, there was just a {blank} {base} in sales.",
            "Patients showed a {blank} {base} after the treatment.",
            "A {blank} {base} is still better than no progress at all."
        ],
        options: ["marginal", "minor", "small", "slight"]
    },
    {
        collocate: "subtle", base: "difference", phrase: "subtle difference", type: "adj-noun", topic: "education", level: "high",
        meaning: "A small distinction that is not immediately obvious but may be important.",
        sentences: [
            "There is a {blank} {base} between the two words.",
            "Only an expert would notice the {blank} {base} in flavour.",
            "The {blank} {base} in tone made the second version more polite.",
            "Students must learn to identify the {blank} {base}s in meaning."
        ],
        options: ["subtle", "slight", "small", "minor"]
    },
    {
        collocate: "grave", base: "mistake", phrase: "grave mistake", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "A very serious error that could have severe consequences.",
        sentences: [
            "Ignoring the warning signs was a {blank} {base}.",
            "He made a {blank} {base} by trusting the wrong person.",
            "Cutting the education budget would be a {blank} {base}.",
            "She realized too late that she had made a {blank} {base}."
        ],
        options: ["grave", "big", "heavy", "deep"]
    },
    {
        collocate: "fatal", base: "flaw", phrase: "fatal flaw", type: "adj-noun", topic: "education", level: "college",
        meaning: "A fundamental weakness that leads to failure or destruction.",
        sentences: [
            "The hero's {blank} {base} was his excessive pride.",
            "Reviewers identified a {blank} {base} in the research methodology.",
            "The plan had a {blank} {base} that nobody had anticipated.",
            "Overconfidence proved to be the team's {blank} {base}."
        ],
        options: ["fatal", "deadly", "critical", "major"]
    },
    {
        collocate: "common", base: "misconception", phrase: "common misconception", type: "adj-noun", topic: "education", level: "middle",
        meaning: "A widely held but incorrect belief or idea.",
        sentences: [
            "It's a {blank} {base} that bats are blind.",
            "The teacher addressed several {blank} {base}s about evolution.",
            "One {blank} {base} is that goldfish have a three-second memory.",
            "The article aimed to correct {blank} {base}s about mental health."
        ],
        options: ["common", "popular", "general", "wide"]
    },
    {
        collocate: "popular", base: "belief", phrase: "popular belief", type: "adj-noun", topic: "education", level: "middle",
        meaning: "An opinion or idea that is widely accepted by the general public.",
        sentences: [
            "Contrary to {blank} {base}, the Great Wall cannot be seen from space.",
            "{blank} {base} holds that eating carrots improves eyesight.",
            "Despite {blank} {base}, lightning can strike the same place twice.",
            "He challenged the {blank} {base} that success requires talent alone."
        ],
        options: ["popular", "common", "general", "public"]
    },
    {
        collocate: "conventional", base: "approach", phrase: "conventional approach", type: "adj-noun", topic: "work", level: "high",
        meaning: "A traditional or standard method of doing something.",
        sentences: [
            "The {blank} {base} to treating the disease was no longer effective.",
            "She rejected the {blank} {base} in favour of something more creative.",
            "A {blank} {base} may not work for every student.",
            "The team decided to abandon the {blank} {base} and try something new."
        ],
        options: ["conventional", "traditional", "normal", "standard"]
    },
    {
        collocate: "abrupt", base: "change", phrase: "abrupt change", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A sudden and unexpected shift in conditions, plans, or behaviour.",
        sentences: [
            "The {blank} {base} in weather caught hikers off guard.",
            "An {blank} {base} in company policy left employees confused.",
            "His {blank} {base} of tone surprised everyone in the room.",
            "The {blank} {base} in direction caused the car to skid."
        ],
        options: ["abrupt", "sudden", "fast", "sharp"]
    },
    {
        collocate: "heated", base: "argument", phrase: "heated argument", type: "adj-noun", topic: "people", level: "middle",
        meaning: "An angry and intense disagreement between people.",
        sentences: [
            "The meeting turned into a {blank} {base} about budget cuts.",
            "Neighbours called the police after hearing a {blank} {base}.",
            "A {blank} {base} broke out between the two players on the pitch.",
            "They had a {blank} {base} but made up the next day."
        ],
        options: ["heated", "hot", "warm", "fired"]
    },
    {
        collocate: "chronic", base: "illness", phrase: "chronic illness", type: "adj-noun", topic: "health", level: "high",
        meaning: "A long-lasting health condition that can be managed but typically not cured.",
        sentences: [
            "Living with a {blank} {base} requires daily management.",
            "The number of people suffering from {blank} {base} is increasing.",
            "Support groups help patients cope with {blank} {base}.",
            "A {blank} {base} can affect every aspect of a person's life."
        ],
        options: ["chronic", "constant", "continuous", "lasting"]
    },
    {
        collocate: "terminal", base: "illness", phrase: "terminal illness", type: "adj-noun", topic: "health", level: "college",
        meaning: "A disease or condition that cannot be cured and will eventually cause death.",
        sentences: [
            "He was diagnosed with a {blank} {base} at the age of fifty.",
            "Palliative care focuses on comfort for patients with a {blank} {base}.",
            "Facing a {blank} {base} changed her perspective on life.",
            "The charity supports families affected by {blank} {base}."
        ],
        options: ["terminal", "fatal", "deadly", "final"]
    },
    {
        collocate: "vague", base: "recollection", phrase: "vague recollection", type: "adj-noun", topic: "people", level: "high",
        meaning: "An unclear or faint memory of something that happened.",
        sentences: [
            "I have a {blank} {base} of meeting her at a party years ago.",
            "He had only a {blank} {base} of the events that night.",
            "She described a {blank} {base} of a house by the sea.",
            "My {blank} {base} is that we arrived late and left early."
        ],
        options: ["vague", "faint", "weak", "dim"]
    },
    {
        collocate: "reckless", base: "driving", phrase: "reckless driving", type: "adj-noun", topic: "daily", level: "middle",
        meaning: "Operating a vehicle in a dangerous and irresponsible manner.",
        sentences: [
            "He was charged with {blank} {base} after running a red light.",
            "{blank} {base} is one of the leading causes of road accidents.",
            "The police launched a campaign against {blank} {base}.",
            "She lost her licence due to {blank} {base}."
        ],
        options: ["reckless", "careless", "wild", "dangerous"]
    },
    {
        collocate: "legitimate", base: "business", phrase: "legitimate business", type: "adj-noun", topic: "work", level: "high",
        meaning: "A lawful and genuine commercial enterprise operating within the rules.",
        sentences: [
            "The company insists that it is a {blank} {base}.",
            "It's hard to tell a {blank} {base} from a scam online.",
            "He used the restaurant as a front for what appeared to be a {blank} {base}.",
            "Only a {blank} {base} can obtain this type of licence."
        ],
        options: ["legitimate", "legal", "real", "proper"]
    },
    {
        collocate: "overwhelming", base: "evidence", phrase: "overwhelming evidence", type: "adj-noun", topic: "education", level: "college",
        meaning: "A very large amount of proof that strongly supports a conclusion.",
        sentences: [
            "There is {blank} {base} that smoking causes cancer.",
            "The jury was convinced by the {blank} {base} against the defendant.",
            "Scientists presented {blank} {base} of climate change.",
            "Despite the {blank} {base}, some people still deny the facts."
        ],
        options: ["overwhelming", "massive", "huge", "enormous"]
    },
    {
        collocate: "compelling", base: "argument", phrase: "compelling argument", type: "adj-noun", topic: "education", level: "college",
        meaning: "A very convincing and persuasive line of reasoning.",
        sentences: [
            "She made a {blank} {base} for investing in renewable energy.",
            "The lawyer presented a {blank} {base} in the defendant's favour.",
            "His essay contained a {blank} {base} supported by strong data.",
            "A {blank} {base} can change even the most stubborn mind."
        ],
        options: ["compelling", "strong", "powerful", "forceful"]
    },
    {
        collocate: "staggering", base: "amount", phrase: "staggering amount", type: "adj-noun", topic: "money", level: "high",
        meaning: "An extremely large quantity that is shocking or hard to believe.",
        sentences: [
            "The company lost a {blank} {base} of money in just one year.",
            "A {blank} {base} of food is wasted globally every day.",
            "They raised a {blank} {base} of funds for the charity.",
            "The project requires a {blank} {base} of investment."
        ],
        options: ["staggering", "shocking", "enormous", "massive"]
    },
    {
        collocate: "lucrative", base: "deal", phrase: "lucrative deal", type: "adj-noun", topic: "money", level: "college",
        meaning: "A business agreement that produces a great deal of profit.",
        sentences: [
            "The athlete signed a {blank} {base} with a major sportswear brand.",
            "Investors are always looking for the next {blank} {base}.",
            "The merger turned out to be a very {blank} {base} for both companies.",
            "She secured a {blank} {base} that doubled her annual income."
        ],
        options: ["lucrative", "profitable", "wealthy", "rich"]
    },
    {
        collocate: "pivotal", base: "moment", phrase: "pivotal moment", type: "adj-noun", topic: "daily", level: "college",
        meaning: "A critical point in time that determines the direction of future events.",
        sentences: [
            "Winning that scholarship was a {blank} {base} in her life.",
            "The election proved to be a {blank} {base} for the country.",
            "That conversation was a {blank} {base} in their relationship.",
            "Historians regard this battle as a {blank} {base} in the war."
        ],
        options: ["pivotal", "crucial", "key", "vital"]
    },
    {
        collocate: "contentious", base: "issue", phrase: "contentious issue", type: "adj-noun", topic: "work", level: "college",
        meaning: "A topic that causes strong disagreement and debate among people.",
        sentences: [
            "Immigration remains a {blank} {base} in many countries.",
            "The board avoided discussing the {blank} {base} of pay cuts.",
            "Gun control is one of the most {blank} {base}s in American politics.",
            "The {blank} {base} divided the committee into two opposing camps."
        ],
        options: ["contentious", "controversial", "disputed", "debated"]
    },
    {
        collocate: "daunting", base: "task", phrase: "daunting task", type: "adj-noun", topic: "work", level: "high",
        meaning: "A challenge that seems intimidating or difficult to accomplish.",
        sentences: [
            "Rebuilding after the earthquake was a {blank} {base}.",
            "Learning a new language can be a {blank} {base} for adults.",
            "She faced the {blank} {base} of reorganizing the entire department.",
            "Writing a thesis is a {blank} {base}, but it's achievable with planning."
        ],
        options: ["daunting", "difficult", "tough", "hard"]
    },
    {
        collocate: "formidable", base: "opponent", phrase: "formidable opponent", type: "adj-noun", topic: "people", level: "high",
        meaning: "A rival or competitor who is extremely strong, skilled, or intimidating.",
        sentences: [
            "The champion proved to be a {blank} {base} in the final round.",
            "She is a {blank} {base} in any debate.",
            "The team underestimated their {blank} {base} and paid the price.",
            "He has established himself as a {blank} {base} in the industry."
        ],
        options: ["formidable", "powerful", "strong", "fierce"]
    },
    {
        collocate: "prestigious", base: "award", phrase: "prestigious award", type: "adj-noun", topic: "work", level: "college",
        meaning: "A prize or honour that is highly respected and admired.",
        sentences: [
            "She received a {blank} {base} for her contribution to science.",
            "Winning the {blank} {base} boosted his career enormously.",
            "The film was nominated for the most {blank} {base} in the industry.",
            "The university gives a {blank} {base} to outstanding alumni each year."
        ],
        options: ["prestigious", "famous", "renowned", "notable"]
    },
    {
        collocate: "notorious", base: "criminal", phrase: "notorious criminal", type: "adj-noun", topic: "daily", level: "high",
        meaning: "A person famous for committing crimes or for being involved in illegal activities.",
        sentences: [
            "The {blank} {base} was finally captured after a decade on the run.",
            "The documentary tells the story of one of history's most {blank} {base}s.",
            "A {blank} {base} escaped from prison last night.",
            "Police warned locals that a {blank} {base} had been spotted in the area."
        ],
        options: ["notorious", "famous", "known", "popular"]
    },
    {
        collocate: "gruelling", base: "schedule", phrase: "gruelling schedule", type: "adj-noun", topic: "work", level: "high",
        meaning: "A timetable of activities that is extremely tiring and demanding.",
        sentences: [
            "The athletes endure a {blank} {base} of training and competition.",
            "Her {blank} {base} left little time for rest or socializing.",
            "Working a {blank} {base} eventually took a toll on his health.",
            "The tour involved a {blank} {base} of thirty concerts in forty days."
        ],
        options: ["gruelling", "exhausting", "tough", "harsh"]
    },
    {
        collocate: "wholesome", base: "food", phrase: "wholesome food", type: "adj-noun", topic: "food", level: "elementary",
        meaning: "Food that is good for your health and well-being.",
        sentences: [
            "Children need {blank} {base} to grow and develop properly.",
            "The restaurant is known for serving {blank} {base} at fair prices.",
            "She replaced junk food with {blank} {base} and felt much better.",
            "Schools should provide {blank} {base} in their cafeterias."
        ],
        options: ["wholesome", "healthy", "fresh", "clean"]
    },
    {
        collocate: "savory", base: "dish", phrase: "savory dish", type: "adj-noun", topic: "food", level: "middle",
        meaning: "A food item that is salty or spicy rather than sweet in flavour.",
        sentences: [
            "The chef prepared a delicious {blank} {base} with herbs and spices.",
            "I prefer a {blank} {base} over dessert after a meal.",
            "The menu features both sweet and {blank} {base}es.",
            "This {blank} {base} pairs perfectly with a glass of red wine."
        ],
        options: ["savory", "salty", "spicy", "tasty"]
    },
    {
        collocate: "bland", base: "food", phrase: "bland food", type: "adj-noun", topic: "food", level: "elementary",
        meaning: "Food that lacks strong flavour or taste, often considered boring.",
        sentences: [
            "Hospital meals are often criticized for being {blank} {base}.",
            "He added extra chilli because he can't stand {blank} {base}.",
            "The doctor recommended {blank} {base} while her stomach recovered.",
            "Some people find traditional British cooking to be {blank} {base}."
        ],
        options: ["bland", "plain", "flat", "dull"]
    },
    {
        collocate: "hearty", base: "meal", phrase: "hearty meal", type: "adj-noun", topic: "food", level: "middle",
        meaning: "A large, satisfying, and nourishing meal.",
        sentences: [
            "After the long hike, they sat down to a {blank} {base}.",
            "Grandma always cooked a {blank} {base} for Sunday lunch.",
            "A {blank} {base} is just what you need on a cold winter's day.",
            "The inn serves a {blank} {base} to weary travellers."
        ],
        options: ["hearty", "heavy", "big", "full"]
    },
    {
        collocate: "patently", base: "absurd", phrase: "patently absurd", type: "adv-adj", topic: "daily", level: "professional",
        meaning: "Obviously and clearly ridiculous or unreasonable.",
        sentences: [
            "The claim that the earth is flat is {blank} {base}.",
            "His excuse for being late was {blank} {base}.",
            "The proposal was rejected because it was {blank} {base}.",
            "It would be {blank} {base} to suggest we can finish by tomorrow."
        ],
        options: ["patently", "clearly", "obviously", "plainly"]
    },
    {
        collocate: "marginally", base: "better", phrase: "marginally better", type: "adv-adj", topic: "work", level: "college",
        meaning: "Only slightly improved or superior compared to something else.",
        sentences: [
            "The second draft was only {blank} {base} than the first.",
            "Sales figures this quarter are {blank} {base} than last year's.",
            "The new software is {blank} {base} but not worth the upgrade cost.",
            "Her test results were {blank} {base} after weeks of extra tutoring."
        ],
        options: ["marginally", "slightly", "a bit", "somewhat"]
    },
    {
        collocate: "infinitely", base: "better", phrase: "infinitely better", type: "adv-adj", topic: "daily", level: "high",
        meaning: "Enormously or incomparably superior to something else.",
        sentences: [
            "The homemade version tastes {blank} {base} than the store-bought one.",
            "Life is {blank} {base} since she changed jobs.",
            "The sequel was {blank} {base} than the original film.",
            "Fresh pasta is {blank} {base} than the dried kind."
        ],
        options: ["infinitely", "extremely", "hugely", "vastly"]
    },
    {
        collocate: "directly", base: "proportional", phrase: "directly proportional", type: "adv-adj", topic: "education", level: "college",
        meaning: "Increasing or decreasing at the same rate as another quantity.",
        sentences: [
            "The pressure of a gas is {blank} {base} to its temperature.",
            "Your salary is not always {blank} {base} to the hours you work.",
            "The force is {blank} {base} to the mass of the object.",
            "Customer satisfaction is {blank} {base} to the quality of service."
        ],
        options: ["directly", "exactly", "closely", "fully"]
    },
    {
        collocate: "painfully", base: "slow", phrase: "painfully slow", type: "adv-adj", topic: "daily", level: "middle",
        meaning: "So slow that it causes frustration or discomfort.",
        sentences: [
            "The internet connection at the hotel was {blank} {base}.",
            "Progress on the construction project has been {blank} {base}.",
            "The queue moved at a {blank} {base} pace.",
            "Recovery from the injury has been {blank} {base}."
        ],
        options: ["painfully", "terribly", "extremely", "horribly"]
    },
    {
        collocate: "conspicuously", base: "absent", phrase: "conspicuously absent", type: "adv-adj", topic: "work", level: "college",
        meaning: "Noticeably and obviously not present, especially when expected.",
        sentences: [
            "The CEO was {blank} {base} from the annual general meeting.",
            "Her name was {blank} {base} from the list of nominees.",
            "Safety regulations were {blank} {base} from the company handbook.",
            "Several key figures were {blank} {base} during the vote."
        ],
        options: ["conspicuously", "noticeably", "obviously", "clearly"]
    },
    {
        collocate: "profoundly", base: "deaf", phrase: "profoundly deaf", type: "adv-adj", topic: "health", level: "college",
        meaning: "Having a severe degree of hearing loss with little or no functional hearing.",
        sentences: [
            "She has been {blank} {base} since birth.",
            "The school specializes in educating children who are {blank} {base}.",
            "Despite being {blank} {base}, he became a successful musician.",
            "New cochlear implants can help those who are {blank} {base}."
        ],
        options: ["profoundly", "completely", "totally", "severely"]
    },
    {
        collocate: "terminally", base: "ill", phrase: "terminally ill", type: "adv-adj", topic: "health", level: "college",
        meaning: "Suffering from a disease that cannot be cured and will lead to death.",
        sentences: [
            "The hospice provides care for {blank} {base} patients.",
            "She continued to work even after being diagnosed as {blank} {base}.",
            "A charity granted wishes to {blank} {base} children.",
            "He spent his final months as a {blank} {base} man helping others."
        ],
        options: ["terminally", "fatally", "deadly", "critically"]
    },
    {
        collocate: "inherently", base: "flawed", phrase: "inherently flawed", type: "adv-adj", topic: "education", level: "college",
        meaning: "Having a fundamental defect or weakness built into its nature.",
        sentences: [
            "Critics argue that the system is {blank} {base}.",
            "The study's methodology was {blank} {base} from the start.",
            "Any plan based on inaccurate data is {blank} {base}.",
            "The assumption that everyone has equal access is {blank} {base}."
        ],
        options: ["inherently", "fundamentally", "basically", "naturally"]
    },
    {
        collocate: "deeply", base: "entrenched", phrase: "deeply entrenched", type: "adv-adj", topic: "people", level: "college",
        meaning: "Firmly and solidly established, making change very difficult.",
        sentences: [
            "Corruption is {blank} {base} in the political system.",
            "{blank} {base} beliefs are hard to change even with evidence.",
            "The rivalry between the two families is {blank} {base}.",
            "Gender stereotypes remain {blank} {base} in many cultures."
        ],
        options: ["deeply", "strongly", "firmly", "heavily"]
    },
    {
        collocate: "stubbornly", base: "resistant", phrase: "stubbornly resistant", type: "adv-adj", topic: "people", level: "college",
        meaning: "Refusing firmly and persistently to change, yield, or accept something.",
        sentences: [
            "Some bacteria have become {blank} {base} to antibiotics.",
            "The management was {blank} {base} to any form of change.",
            "He remained {blank} {base} to new ideas despite the evidence.",
            "The stain proved {blank} {base} to every cleaning product she tried."
        ],
        options: ["stubbornly", "firmly", "strongly", "fiercely"]
    },
    {
        collocate: "flatly", base: "contradict", phrase: "flatly contradict", type: "adv-verb", topic: "daily", level: "college",
        meaning: "To deny or oppose something in a direct and complete way.",
        sentences: [
            "The new findings {blank} {base} earlier research.",
            "His actions {blank} {base} everything he says.",
            "Witnesses {blank} {base}ed the suspect's version of events.",
            "The report {blank} {base}s the government's claims about safety."
        ],
        options: ["flatly", "directly", "completely", "totally"]
    },
    {
        collocate: "vehemently", base: "deny", phrase: "vehemently deny", type: "adv-verb", topic: "work", level: "college",
        meaning: "To reject or refuse to accept something with strong emotion and force.",
        sentences: [
            "The politician {blank} {base}ied the allegations of corruption.",
            "She {blank} {base}ied having any involvement in the scandal.",
            "The company {blank} {base}ied that its products were unsafe.",
            "He {blank} {base}ied the charges brought against him."
        ],
        options: ["vehemently", "strongly", "fiercely", "angrily"]
    },
    {
        collocate: "bitterly", base: "regret", phrase: "bitterly regret", type: "adv-verb", topic: "people", level: "high",
        meaning: "To feel deep and painful remorse about something.",
        sentences: [
            "She {blank} {base}ted not saying goodbye to her father.",
            "He {blank} {base}s the day he quit his job impulsively.",
            "You will {blank} {base} it if you don't take this opportunity.",
            "They {blank} {base}ted their decision to sell the family home."
        ],
        options: ["bitterly", "deeply", "greatly", "strongly"]
    },
    {
        collocate: "readily", base: "accept", phrase: "readily accept", type: "adv-verb", topic: "daily", level: "middle",
        meaning: "To agree to or take something willingly and without hesitation.",
        sentences: [
            "Most people {blank} {base} that exercise is good for health.",
            "She {blank} {base}ed the invitation to join the team.",
            "The proposal was {blank} {base}ed by all members of the committee.",
            "Children {blank} {base} new ideas more easily than adults."
        ],
        options: ["readily", "easily", "quickly", "happily"]
    },
    {
        collocate: "categorically", base: "refuse", phrase: "categorically refuse", type: "adv-verb", topic: "work", level: "high",
        meaning: "To decline something absolutely and without any possibility of changing one's mind.",
        sentences: [
            "The union {blank} {base}d to accept the new contract terms.",
            "She {blank} {base}d to answer any more questions.",
            "The government {blank} {base}d to negotiate with the rebels.",
            "He {blank} {base}d to apologize despite the pressure."
        ],
        options: ["categorically", "absolutely", "completely", "firmly"]
    },
    {
        collocate: "narrowly", base: "escape", phrase: "narrowly escape", type: "adv-verb", topic: "daily", level: "high",
        meaning: "To barely avoid danger, disaster, or an unwanted outcome.",
        sentences: [
            "The family {blank} {base}d the fire that destroyed their home.",
            "He {blank} {base}d injury when the scaffolding collapsed.",
            "The hikers {blank} {base}d an avalanche in the mountains.",
            "She {blank} {base}d being hit by a car while crossing the road."
        ],
        options: ["narrowly", "barely", "nearly", "closely"]
    },
    {
        collocate: "reluctantly", base: "admit", phrase: "reluctantly admit", type: "adv-verb", topic: "people", level: "high",
        meaning: "To acknowledge something unwillingly, often because it is embarrassing or inconvenient.",
        sentences: [
            "He {blank} {base}ted that he had been wrong all along.",
            "She {blank} {base}ted to feeling jealous of her sister's success.",
            "The company {blank} {base}ted that the product had a defect.",
            "I must {blank} {base} that the movie was better than I expected."
        ],
        options: ["reluctantly", "unwillingly", "hesitantly", "grudgingly"]
    },
    {
        collocate: "staunchly", base: "defend", phrase: "staunchly defend", type: "adv-verb", topic: "work", level: "college",
        meaning: "To support and protect something with strong loyalty and determination.",
        sentences: [
            "The lawyer {blank} {base}ed her client against all accusations.",
            "He {blank} {base}s his right to free speech.",
            "The president {blank} {base}ed the controversial policy.",
            "Workers {blank} {base}ed the union's position in negotiations."
        ],
        options: ["staunchly", "strongly", "firmly", "fiercely"]
    },
    {
        collocate: "roundly", base: "condemn", phrase: "roundly condemn", type: "adv-verb", topic: "work", level: "professional",
        meaning: "To criticize or disapprove of something severely and thoroughly.",
        sentences: [
            "World leaders {blank} {base}ed the terrorist attack.",
            "The decision was {blank} {base}ed by human rights organizations.",
            "Critics {blank} {base}ed the film for its insensitive portrayal.",
            "The proposal was {blank} {base}ed by environmental groups."
        ],
        options: ["roundly", "strongly", "harshly", "widely"]
    },
    {
        collocate: "narrowly", base: "defeat", phrase: "narrowly defeat", type: "adv-verb", topic: "work", level: "high",
        meaning: "To beat an opponent by only a very small margin.",
        sentences: [
            "The incumbent was {blank} {base}ed in the election by just 200 votes.",
            "Our team {blank} {base}ed the champions in a thrilling final.",
            "The motion was {blank} {base}ed in parliament by a single vote.",
            "She {blank} {base}ed her rival to win the gold medal."
        ],
        options: ["narrowly", "barely", "closely", "slightly"]
    },
    {
        collocate: "strike", base: "chord", phrase: "strike a chord", type: "verb-noun", topic: "people", level: "high",
        meaning: "To cause someone to feel sympathy, emotion, or a strong connection.",
        sentences: [
            "Her speech about poverty {blank} a {base} with the audience.",
            "The song {blank}s a {base} with anyone who has experienced heartbreak.",
            "His story {blank} a {base} with millions around the world.",
            "The documentary {blank} a {base} because it told real people's stories."
        ],
        options: ["strike", "hit", "play", "touch"]
    },
    {
        collocate: "hit", base: "snag", phrase: "hit a snag", type: "verb-noun", topic: "work", level: "high",
        meaning: "To encounter an unexpected problem or difficulty.",
        sentences: [
            "The project {blank} a {base} when funding was suddenly cut.",
            "We {blank} a {base} trying to get planning permission.",
            "Negotiations {blank} a {base} over disagreements about pricing.",
            "Everything was going smoothly until we {blank} a {base}."
        ],
        options: ["hit", "struck", "met", "found"]
    },
    {
        collocate: "bend", base: "rules", phrase: "bend the rules", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To interpret or apply rules loosely in order to achieve a desired outcome.",
        sentences: [
            "The manager agreed to {blank} the {base} just this once.",
            "Some politicians {blank} the {base} to benefit themselves.",
            "She's known for {blank}ing the {base} when it suits her.",
            "We can't keep {blank}ing the {base} or we'll lose all credibility."
        ],
        options: ["bend", "break", "change", "twist"]
    },
    {
        collocate: "bury", base: "hatchet", phrase: "bury the hatchet", type: "verb-noun", topic: "people", level: "high",
        meaning: "To end a disagreement and make peace with someone.",
        sentences: [
            "After years of arguing, the brothers finally {blank}ied the {base}.",
            "It's time to {blank} the {base} and move on.",
            "The two rival companies {blank}ied the {base} and formed a partnership.",
            "She offered to {blank} the {base} and start fresh."
        ],
        options: ["bury", "hide", "drop", "lay"]
    },
    {
        collocate: "call", base: "quits", phrase: "call it quits", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To decide to stop doing something or to end a relationship.",
        sentences: [
            "After ten hours of work, they decided to {blank} it {base}.",
            "The couple {blank}ed it {base} after five years of marriage.",
            "If we're not making progress, maybe we should {blank} it {base}.",
            "He {blank}ed it {base} and retired at the age of fifty."
        ],
        options: ["call", "name", "say", "make"]
    },
    {
        collocate: "play", base: "safe", phrase: "play it safe", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To avoid taking risks and choose the cautious option.",
        sentences: [
            "She decided to {blank} it {base} and take the well-paying job.",
            "When investing, it's wise to {blank} it {base} at first.",
            "Rather than experiment, the chef {blank}ed it {base} with the menu.",
            "Let's {blank} it {base} and leave early to avoid traffic."
        ],
        options: ["play", "keep", "stay", "go"]
    },
    {
        collocate: "push", base: "boundaries", phrase: "push the boundaries", type: "verb-noun", topic: "work", level: "college",
        meaning: "To extend or go beyond the existing limits of what is known or accepted.",
        sentences: [
            "The artist is known for {blank}ing the {base} of modern design.",
            "Scientists continue to {blank} the {base} of medical research.",
            "She always {blank}es the {base} of what's expected of her.",
            "The startup {blank}ed the {base} of what technology could achieve."
        ],
        options: ["push", "break", "cross", "move"]
    },
    {
        collocate: "cross", base: "line", phrase: "cross the line", type: "verb-noun", topic: "people", level: "high",
        meaning: "To go beyond what is considered acceptable behaviour.",
        sentences: [
            "His comments {blank}ed the {base} from humour into insult.",
            "You {blank}ed the {base} when you shared private information.",
            "There's a fine boundary, and he {blank}ed the {base}.",
            "She felt he had {blank}ed the {base} with his behaviour."
        ],
        options: ["cross", "pass", "step", "break"]
    },
    {
        collocate: "miss", base: "point", phrase: "miss the point", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To fail to understand the essential meaning or purpose of something.",
        sentences: [
            "I think you're {blank}ing the {base} of what I'm trying to say.",
            "He completely {blank}ed the {base} of the lesson.",
            "Critics {blank}ed the {base} of the film entirely.",
            "If you focus only on cost, you'll {blank} the {base}."
        ],
        options: ["miss", "lose", "skip", "drop"]
    },
    {
        collocate: "get", base: "gist", phrase: "get the gist", type: "verb-noun", topic: "daily", level: "middle",
        meaning: "To understand the main idea or general meaning of something.",
        sentences: [
            "I didn't read every detail, but I {blank} the {base} of it.",
            "Can you {blank} the {base} from just reading the summary?",
            "Even without subtitles, I could {blank} the {base} of the conversation.",
            "She quickly {blank} the {base} of the new procedure."
        ],
        options: ["get", "take", "catch", "find"]
    },
    {
        collocate: "grab", base: "bite", phrase: "grab a bite", type: "verb-noun", topic: "food", level: "elementary",
        meaning: "To quickly eat a small amount of food, often informally.",
        sentences: [
            "Let's {blank} a {base} before the movie starts.",
            "I barely had time to {blank} a {base} between meetings.",
            "They {blank}bed a {base} at the cafe on the corner.",
            "Do you want to {blank} a {base} after class?"
        ],
        options: ["grab", "take", "catch", "have"]
    },
    {
        collocate: "make", base: "amends", phrase: "make amends", type: "verb-noun", topic: "people", level: "high",
        meaning: "To do something to correct a mistake or compensate for wrongdoing.",
        sentences: [
            "He tried to {blank} {base} for the hurt he had caused.",
            "She sent flowers in an attempt to {blank} {base}.",
            "It's never too late to {blank} {base} with the people you've wronged.",
            "The company promised to {blank} {base} by offering full refunds."
        ],
        options: ["make", "do", "give", "pay"]
    },
    {
        collocate: "nip", base: "bud", phrase: "nip in the bud", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To stop something at an early stage before it becomes a bigger problem.",
        sentences: [
            "We need to {blank} this problem in the {base} before it gets worse.",
            "The teacher {blank}ped the bullying in the {base} immediately.",
            "Early detection allows doctors to {blank} the disease in the {base}.",
            "If you see bad habits forming, {blank} them in the {base}."
        ],
        options: ["nip", "cut", "stop", "clip"]
    },
    {
        collocate: "scratch", base: "surface", phrase: "scratch the surface", type: "verb-noun", topic: "education", level: "high",
        meaning: "To deal with only a small part of a subject or problem.",
        sentences: [
            "This introductory course only {blank}es the {base} of the topic.",
            "We've barely {blank}ed the {base} of what this software can do.",
            "The report {blank}es the {base} but doesn't explore root causes.",
            "You'll find there's much more once you {blank} the {base}."
        ],
        options: ["scratch", "touch", "skim", "scrape"]
    },
    {
        collocate: "swallow", base: "pride", phrase: "swallow your pride", type: "verb-noun", topic: "people", level: "high",
        meaning: "To accept something humiliating and suppress your feelings of dignity.",
        sentences: [
            "He had to {blank} his {base} and ask for help.",
            "She {blank}ed her {base} and apologized even though she was right.",
            "Sometimes you have to {blank} your {base} for the sake of your family.",
            "It was hard to {blank} her {base}, but she knew it was the right thing to do."
        ],
        options: ["swallow", "eat", "drop", "hide"]
    },
    {
        collocate: "take", base: "lead", phrase: "take the lead", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To assume a position of leadership or move ahead of others.",
        sentences: [
            "Someone needs to {blank} the {base} on this project.",
            "She {blank} the {base} in organizing the fundraiser.",
            "The company {blank} the {base} in developing green technology.",
            "He {blank} the {base} during the race and never looked back."
        ],
        options: ["take", "get", "have", "hold"]
    },
    {
        collocate: "pull", base: "weight", phrase: "pull your weight", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To do your fair share of work within a group.",
        sentences: [
            "Everyone on the team needs to {blank} their {base}.",
            "He was fired because he wasn't {blank}ing his {base}.",
            "If everyone {blank}s their {base}, we'll finish on time.",
            "She accused her colleague of not {blank}ing his {base}."
        ],
        options: ["pull", "carry", "push", "lift"]
    },
    {
        collocate: "bite", base: "bullet", phrase: "bite the bullet", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To force yourself to do something difficult or unpleasant.",
        sentences: [
            "I decided to {blank} the {base} and go to the dentist.",
            "Sometimes you just have to {blank} the {base} and deal with it.",
            "She {blank} the {base} and told him the truth.",
            "We need to {blank} the {base} and cut unnecessary spending."
        ],
        options: ["bite", "chew", "eat", "swallow"]
    },
    {
        collocate: "burn", base: "midnight oil", phrase: "burn the midnight oil", type: "verb-noun", topic: "education", level: "high",
        meaning: "To work or study late into the night.",
        sentences: [
            "Students often {blank} the {base} before final exams.",
            "She's been {blank}ing the {base} to meet the project deadline.",
            "If you want top grades, you'll have to {blank} the {base}.",
            "He {blank}ed the {base} preparing the report for Monday."
        ],
        options: ["burn", "light", "use", "heat"]
    },
    {
        collocate: "call", base: "shots", phrase: "call the shots", type: "verb-noun", topic: "work", level: "high",
        meaning: "To be the person who makes the important decisions.",
        sentences: [
            "As the CEO, she {blank}s the {base} in the company.",
            "He likes to {blank} the {base} and doesn't take orders easily.",
            "The director {blank}s all the {base} on set.",
            "Who {blank}s the {base} around here?"
        ],
        options: ["call", "make", "take", "give"]
    },
    {
        collocate: "cut", base: "deal", phrase: "cut a deal", type: "verb-noun", topic: "money", level: "high",
        meaning: "To reach an agreement, especially one involving negotiation or compromise.",
        sentences: [
            "The lawyers {blank} a {base} to avoid a lengthy trial.",
            "We managed to {blank} a {base} with the supplier for a lower price.",
            "The government {blank} a {base} with the opposition to pass the bill.",
            "He's skilled at {blank}ting {base}s that benefit both sides."
        ],
        options: ["cut", "make", "strike", "close"]
    },
    {
        collocate: "dodge", base: "bullet", phrase: "dodge a bullet", type: "verb-noun", topic: "daily", level: "high",
        meaning: "To narrowly avoid a dangerous or unpleasant situation.",
        sentences: [
            "We really {blank}d a {base} by cancelling the trip before the storm.",
            "She {blank}d a {base} when she turned down that dodgy investment.",
            "The company {blank}d a {base} by recalling the product early.",
            "He felt he had {blank}d a {base} when the deal fell through."
        ],
        options: ["dodge", "avoid", "miss", "escape"]
    },
    {
        collocate: "grasp", base: "concept", phrase: "grasp the concept", type: "verb-noun", topic: "education", level: "middle",
        meaning: "To understand an idea or principle clearly.",
        sentences: [
            "It took me a while to {blank} the {base} of quantum physics.",
            "Young children can {blank} the {base} of fairness quite early.",
            "Once you {blank} the {base}, the rest of the course is much easier.",
            "He struggled to {blank} the {base} behind the mathematical formula."
        ],
        options: ["grasp", "catch", "hold", "grab"]
    },
    {
        collocate: "stir", base: "trouble", phrase: "stir up trouble", type: "verb-noun", topic: "people", level: "high",
        meaning: "To deliberately cause problems or conflict among people.",
        sentences: [
            "He's always trying to {blank} up {base} between colleagues.",
            "The article {blank}red up {base} in the local community.",
            "Rival fans tried to {blank} up {base} before the match.",
            "Stop {blank}ring up {base} and focus on finding a solution."
        ],
        options: ["stir", "make", "cause", "start"]
    },
    {
        collocate: "weigh", base: "options", phrase: "weigh the options", type: "verb-noun", topic: "work", level: "middle",
        meaning: "To carefully consider the different possibilities before making a decision.",
        sentences: [
            "Take your time and {blank} the {base} before deciding.",
            "She {blank}ed her {base} carefully before accepting the job offer.",
            "The committee needs to {blank} all the {base} before voting.",
            "He sat down to {blank} his {base} after receiving two job offers."
        ],
        options: ["weigh", "measure", "count", "check"]
    }
];
