// Image, Name, and Facts array
let factsArray = [
    // Ash Facts 1
    { 
       warframe: 'Ash',
        image: './images/ash.png',
        fact: 'Ash is a fast, maneuverable Warframe that possesses a high degree of survivability in the field. Fleet movement complements deadly tools of assassination, making Ash a perfect balance between killing potency and stealth. Ash was originally named Smoke, and before that, simply Ninja. He is still referred to as Ninja internally in the game files. Ash was the first Warframe that had innate physical weapons associated with his frame, in this case his hidden blades he uses in his Blade Storm ability. The second frame with this innate physical weapon was Mesa and her Regulator pistols she uses in her Peacemaker ability.',
    },

    // Ivara Facts 2
    { 
        warframe: 'Ivara',
         image: './images/ivara.png',
         fact: `Equipped with a diverse selection of arrows, deft hands, shroud of stealth and an exalted bow, the crafty Ivara infiltrates hostile territory with deception and diversion, and eliminates threats with a shot from beyond. Ivara is a name derived from the Old Norse word Ívarr, which means "tree warrior". In Norse legend, the similarly named Ivar the Boneless was a legendary warrior heralded as a deadly archer. Ivara's visual design was influenced by tree frogs, with her default color scheme sharing their bright coloration.`,
     },

    // Valkyr Facts 3
    { 
        warframe: 'Valkyr',
         image: './images/valkyr.png',
         fact: `Valkyr is a berserker-themed Warframe. Driven by feral rage, her attacks rend her prey with fury and ferociousness, while her tortured cries break the imposing silence of the Tenno presence. "Valkyr" is derived from Valkyrie. According to Norse Mythology, the Valkyries were a host of divine creatures in service of the gods that brought the chosen among the fallen up to Valhalla. Both her Warframe Profile video and in-game description verify that she's a product of the Zanuka Project.`,
     },

     // Trinity Facts 4
    { 
        warframe: 'Trinity',
         image: './images/trinity.png',
         fact: `Trinity is a support-based Warframe. Her abilities favour restoration and preservation over destruction. Draining powers turn her enemies into conduits of life and energy, while defensive powers redirect and dissipate attacks upon herself and her team. The word Trinity is the name for the Christian doctrine which holds that there is one God in three Divine Persons, the Father, son and the Holy Spirit. It could also be in reference to the classic "holy trinity" in MMO parties: tank, DPS, healer. The names of her alternate helmets are based on notion related with healing and medicine.`,
     },

     // Frost Facts 5
    { 
        warframe: 'Frost',
         image: './images/frost.png',
         fact: `Frost is a slow and heavily-armored Warframe that is able to utilize offensive and defensive skills to both his own and his team's advantage. He commands furious blizzards that pummel and freeze his enemies while providing respite and solace for his allies Frost's design is based on concept artwork for an unused boss intended to appear in DE's previous game, Dark Sector. The large, dark ports on Frost and Frost Prime's arms are considered customizable Armor parts, and will be removed if any other arm plates are used.`,
     },

     // Nekros Facts 6
     { 
        warframe: 'Nekros',
         image: './images/nekros.png',
         fact: `Nekros is a Warframe with powers likened to that of necromancers and dark arts practitioners, his abilities exploiting the vulnerabilities of the living and the corpses of the dead. Nekros is Swedish for Necrosis which is a medical term for the death of most or all of the cells in an organ or tissue due to disease, injury, or failure of the blood supply. Nekros appears to have six fingers, however the last one only has one bone.`,
     },

     // Loki Facts 7
    { 
        warframe: 'Loki',
         image: './images/loki.png',
         fact: `Loki is a fragile but fast manipulator Warframe. He has little in the way of direct damage abilities, instead focusing on the arts of distraction, deception, sabotage, relocation and stealth.His name is drawn from the Norse god Loki, who was generally seen as a mischievous, sly trickster. The Loki Warframe has abilities that further strengthen this connection, as Loki is able to turn invisible and create decoys of himself, amongst other abilities. Loki was one of the three starting Warframes, along with Excalibur and Mag, before being replaced by Volt.`,
     },

     // Volt Facts 8
    { 
        warframe: 'Volt',
         image: './images/volt.png',
         fact: `Volt has the power to wield and bend electricity. He is highly versatile, armed with powerful abilities that can damage enemies, provide cover and complement the ranged and melee combat of his cell. The electrical nature of his abilities make him highly effective against the Corpus, with their robots in particular. He is one of three starter options for new players. The volt is a measure of electrical potential, a type of potential energy that could be released if an electrical current is allowed to flow, hence Volt's electrical essence. Volt's default energy color appears as deep orange-yellow on his body, but the color of any electricity he emits is a darker blue/purple`,
     },

     // Umbra Facts 9
    { 
        warframe: 'Umbra',
         image: './images/umbra.png',
         fact: `Excalibur Umbra is the Umbra variant of Excalibur, sporting higher armor and energy, as well as three polarities while losing a Vazarin polarity. Unique to Umbra is his display of sentience, allowing him to fight on his own when not piloted by the Operator. Excalibur Umbra is the first Warframe confirmed to originally be a "human being". He is also the first frame to have had his face exposed due to damage to his helmet. Ballas confirms that Warframes are created from human subjects as Infested-hybrids cultivated by the Helminth. It was revealed at TennoCon 2018's Sound Panel that Excalibur Umbra's howls were voiced by [DE]Steve Sinclair, Game Director of Warframe.`,
     },

     // Ember Facts 10
    { 
        warframe: 'Ember',
         image: './images/ember.png',
         fact: `Radiant starfire light our worlds ablaze. Igneous as the burning sun, Ember's fiery rage engulfs her foes and scatters their cinders in the solar wind. Empress of elemental flame, scorch the land with her wildfires. Control her fury or fuel the heat to unleash destructive incineration, leaving charred corpses and ashes adrift in her scarlet sea. As seen from concept art and beta game footage, Ember was originally male. Ember is based around the Phoenix and Vermilion firebirds as can be seen by the naming of the helmets and deluxe skin, and the way the feet are designed like bird claws.`,
     }
]

// Questions and answers array
let questionArray = [
    // question one
    { 
        question: "What was Ash's orginal name supposed to be?",
        answerA: {text: "Smoke", correct: true},
        answerB: {text: "Fortune", correct: false},
        answerC: {text: "Winner", correct: false},
        answerD: {text: "Assassin", correct: false},
    },

    // question 2
    { 
        question: "Which frame's visual design was influenced by tree frogs?",
        answerA: {text: "Ember", correct: false},
        answerB: { text: "Ivara", correct: true},
        answerC: { text: "Trinity", correct: false},
        answerD: { text: "Saryn", correct: false},
    },

    // question 3
    { 
        question: "Which frame was made by Alad V as part of thee Zanuka Project?",
        answerA: { text: "Rhino", correct: false},
        answerB: { text: "Nyx", correct: false},
        answerC: { text: "Valkyr", correct: true},
        answerD: { text: "Nova", correct: false},
    },

    // question 4
    { 
        question: "Which frame is considered a support frame?",
        answerA: { text: "Ember", correct: false},
        answerB: { text: "Saryn", correct: false},
        answerC: { text: "Mesa", correct: false},
        answerD: { text: "Trinity", correct: true},
    },

    // question 5
    { 
        question: "Which frame has the ability to summon a snow globe?",
        answerA: { text: "Frost", correct: true},
        answerB: { text: "Nyx", correct: false},
        answerC: { text: "Valkyr", correct: false},
        answerD: { text: "Nova", correct: false},
    },

    // question 6
    { 
        question: "Which frame can summon dead enemies that they have previously killed?",
        answerA: { text: "Gauss", correct: false},
        answerB: { text: "Nekros", correct: true},
        answerC: { text: "Excalibur", correct: false},
        answerD: { text: "Vauban", correct: false},
    },

    // question 7
    { 
        question: "Which of these frames are considered a stealth frame?",
        answerA: { text: "Umbra", correct: false},
        answerB: { text: "Rhino", correct: false},
        answerC: { text: "Loki", correct: true},
        answerD: { text: "Volt", correct: false},
    },

    // question 8
    { 
        question: "Which of these frames is considered a speed frames?",
        answerA: { text: "Rhino", correct: false},
        answerB: { text: "Nekros", correct: false},
        answerC: { text: "Saryn", correct: false},
        answerD: { text: "Volt", correct: true},
    },

    // question 9
    { 
        question: "Which frame is the only frame that was originally human?",
        answerA: { text: "Umbra", correct: true},
        answerB: { text: "Valkry", correct: false},
        answerC: { text: "Banshee", correct: false},
        answerD: { text: "Vauban", correct: false},
    },

    // question 10
    { 
        question: "Which one of these frames were orginally meant to be the opposite gender?",
        answerA: { text: "Banshee", correct: false},
        answerB: { text: "Ember", correct: true},
        answerC: { text: "Ivara", correct: false},
        answerD: { text: "Mag", correct: false},
    }
];

// starting score
let score = 0;

// global var for locking answer boxes after one is selected
let locked = false;

// shows current question
let currentQuestion = 0;

// console.log("facts")

window.onload = firstScreen;

function firstScreen() {
    // showing
    document.getElementById("start-screen").style.display = "block";

    // not showing
    document.getElementById("question-screen").style.display = "none";

    // start button
    // when clicked, the question appears on screen
    document.getElementById("start-button").addEventListener("click", function(){
        startGame();
    });

    // display score
    document.querySelector("#score-counter span").innerText = score;

    // answers
    // adding event listener to answers
    // answer-a
    document.getElementById("answer-a").addEventListener("click", function () { 
        selectAnswer(currentQuestion, "answerA", this);
    });

    // answer-b
    document.getElementById("answer-b").addEventListener("click", function () { 
        selectAnswer(currentQuestion, "answerB", this);
    });

    // answer-c
    document.getElementById("answer-c").addEventListener("click", function () { 
        selectAnswer(currentQuestion, "answerC", this);
    });

    // // answer-d
    document.getElementById("answer-d").addEventListener("click", function () { 
        selectAnswer(currentQuestion, "answerD", this);
    });

    // next button
    document.getElementById("next-button").addEventListener("click", function(){
        nextQuestion();
    });

    // next button
    document.getElementById("restart-button").addEventListener("click", function(){
        startGame();
    });
}


// screen that displays after start button is pressed
function startGame() {

    locked = false;
    score = 0;
    currentQuestion = 0;
        
    // showing
    document.getElementById("question-screen").style.display = "block";

    // not showing
    document.getElementById("start-screen").style.display = "none";

    document.querySelector("#restart-button").style.display = "none";
    
    document.querySelector("#question").style.display = "block";

    document.querySelector("#select-prompt").style.display = "block";

    // collectts all answer buttons
    let allAnswerButtons = document.querySelectorAll(".answer-box");
    //  turns off answer box  
    for (let i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].style.display = "block";
    }


    // displays question
    showQuestion(0);       
}

function showQuestion(questionIndex) {
    document.querySelector("#score-counter span").innerText = score;
        
    // puts question into html
    let question1Text = questionArray[questionIndex]["question"];
    document.querySelector("#question span").innerText = question1Text;

    // puts question a into html
    let answerAText = questionArray[questionIndex]["answerA"]["text"];
    document.querySelector("#answer-a").innerHTML = "<strong>A:</strong> " + answerAText;

    // puts question b into html
    let answerBText = questionArray [questionIndex]["answerB"]["text"];
    document.querySelector("#answer-b").innerHTML = "<strong>B:</strong> " + answerBText;

    // puts question c into html
    let answerCText = questionArray [questionIndex]["answerC"]["text"];
    document.querySelector("#answer-c").innerHTML = "<strong>C:</strong> " + answerCText;

    // puts question d into html
    let answerDText = questionArray [questionIndex]["answerD"]["text"];
    document.querySelector("#answer-d").innerHTML = "<strong>D:</strong> " + answerDText;

    currentQuestion = questionIndex;
}

// Decides whether the user selected the right answer or not
function selectAnswer(questionIndex, answerIndex, btnElement) {
    let answerPicked = questionArray[questionIndex][answerIndex];

    console.log(answerPicked);
    // locks answers to sttop user from selecting another answer
    if (locked) {
        return null;
    } else {
        locked = true;
    }

    // grabs fact in count with questionArray
    let fact = factsArray[questionIndex];

        // grabbing  fact warframe name
        let factName = fact["warframe"];
        document.querySelector("#facts-name").innerText = factName;

        // grabbing fact image
        let factImage = fact["image"];
        document.querySelector("#facts-image").src = factImage;

        // grabbing fact paragraph
        let factPara = fact["fact"];
        document.querySelector("#facts-para").innerText = factPara;
        
    if (answerPicked["correct"]) {
        // things that happen if correct
        correctAnswer(btnElement);
        
    } else {
        // things that happen if wrong
        wrongAnswer(btnElement);
    }
}

function correctAnswer(btnElement) {    
    btnElement.classList.add("correctAnswer");
    score++; 
    document.querySelector("#score-counter span").innerText = score;
    document.querySelector("#fact").style.display = "block";      
    document.querySelector("#next-button").style.display = "block"; 
}

// 
function wrongAnswer(btnElement) {
    btnElement.classList.add("wrongAnswer");
    document.querySelector("#fact").style.display = "block";      
    document.querySelector("#next-button").style.display = "block";
}

// what happens when next button is pressed
function nextQuestion() {

    // unlocks answer buttons
    locked = false;
    // selecting number of next question
    let nextQuestion = currentQuestion + 1;
       
    document.querySelector("#fact").style.display = "none";      
    document.querySelector("#next-button").style.display = "none"; 

    // collectts all answer buttons
    let allAnswerButtons = document.querySelectorAll(".answer-box");
    // makes sure all buttons are default bgc
    for (let i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].classList.remove("correctAnswer");
        allAnswerButtons[i].classList.remove("wrongAnswer");
    }

        // if at the last question, the restart button appears
        if (currentQuestion == (questionArray.length - 1)) {
            // questionArray.length - 1
            showEndScreen();
          } else {
            showQuestion(nextQuestion);
          }
}

// makes restart button appear
function showEndScreen() {
    
    document.querySelector("#restart-button").style.display = "block";
    document.querySelector("#question").style.display = "none";
    document.querySelector("#select-prompt").style.display = "none";

    // collectts all answer buttons
    let allAnswerButtons = document.querySelectorAll(".answer-box");
    //  turns off answer box  
    for (let i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].style.display = "none";
    }

}
