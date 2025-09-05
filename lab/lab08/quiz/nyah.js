const questions = [
    {
        "question": "Which one of these is a berry?",
        "answer": [
            {"id": "raspberry",
            "pic" : "https://www.heddensofwoodtown.co.uk/wp-content/uploads/2020/05/raspberries_opt.jpg",
            "correct":false},
            {"id": "strawberry",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
            "correct":false},
            {"id": "eggplant",
            "pic" : "https://www.harighotra.co.uk/images/Shutterstock/aubergine_560x560.jpg",
            "correct":true},
            {"id": "tomato",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/220px-Bright_red_tomato_and_cross_section02.jpg",
            "correct":true}
        ],
        "explain": "Eggplants and Tomato are classified as berries. Raspberry is an accessory fruit, and strawberry is a false fruit."
    },
    {
        "question" : "Which of these countries have never won the FIFA World Cup?",
        "answer" : [
            {"id": "Brazil",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/9/99/Brazilian_Football_Confederation_logo.svg",
            "correct":false},
            {"id": "Germany",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/a/a9/Deutscher_Fu%C3%9Fball-Bund_logo.svg",
            "correct":false},
            {"id": "Spain",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Royal_Spanish_Football_Federation_logo.svg/1200px-Royal_Spanish_Football_Federation_logo.svg.png",
            "correct":false},
            {"id": "Netherlands",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Netherlands_national_football_team_logo.svg/1200px-Netherlands_national_football_team_logo.svg.png",
            "correct":true}
        ],
        "explain": "Netherlands have never won the FIFA World Cup. They have reached the final three times, but lost all of them."
    },
    {
        "question" : "Which of the following is not a programming language?",
        "answer" : [
            {"id": "Rust",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/220px-Rust_programming_language_black_logo.svg.png",
            "correct":false},
            {"id": "Java",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/220px-Java_programming_language_logo.svg.png",
            "correct":false},
            {"id": "C",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/220px-C_Programming_Language.svg.png",
            "correct":false},
            {"id": "Flask",
            "pic" : "https://flask.palletsprojects.com/en/stable/_images/flask-name.svg",
            "correct":true}
        ],
        "explain": "Flask is a web framework for Python, not a programming language."
    },
    {
        "question" : "What distro is being used to host the SE Web Programming Server?",
        "answer" : [
            {"id": "Ubuntu",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Ubuntu-logo-2022.svg",
            "correct":true},
            {"id": "Debian",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/220px-Openlogo-debianV2.svg.png",
            "correct":false},
            {"id": "Arch Linux",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/e/e8/Archlinux-logo-standard-version.png",
            "correct":false},
            {"id": "Fedora",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fedora_logo.svg/220px-Fedora_logo.svg.png",
            "correct":false}
        ],
        "explain": "Maybe you could just neofetch the server?"
    },
    {
        "question" : "Which one is NOT mobile phone OS?",
        "answer" : [
            {"id": "Ubuntu",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/7/76/Ubuntu-logo-2022.svg",
            "correct":false},
            {"id": "Window 10",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg/25px-Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg.png",
            "correct":false},
            {"id": "Android",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Android_logo_2023_%28stacked%29.svg/200px-Android_logo_2023_%28stacked%29.svg.png",
            "correct":false},
            {"id": "macOS",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/200px-MacOS_logo.svg.png",
            "correct":true}
        ],
        "explain": "This is the trick question, and yes everyone here have their own version of Mobile Phone OS. But for Mac it is iOS."
    },
    {
        "question" : "Which country is NOT in South East Asia?",
        "answer" : [
            {"id": "Poland",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png",
            "correct":true},
            {"id": "Brunei",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/255px-Flag_of_Brunei.svg.png",
            "correct":false},
            {"id": "Myanmar",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/125px-Flag_of_Myanmar.svg.png",
            "correct":false},
            {"id": "Philippines",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/255px-Flag_of_the_Philippines.svg.png",
            "correct":false}
        ],
        "explain": "The red and white flag here is not of Indonesia. It is the flag of Poland."
    },
    {
        "question" : "Which country is the second largest country in the world by land mass?",
        "answer" : [
            {"id": "USA",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png",
            "correct":false},
            {"id": "Canada",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png",
            "correct":true},
            {"id": "China",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png",
            "correct":false},
            {"id": "Russia",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
            "correct":false}
        ],
        "explain": "These 4 countries are in fact, the top 4 in term of the land mass. First is Russia. Second is Canada. Third is USA. And Forth is China"
    },
    {
        "question" : "Which country is in the same time zone as Thailand?",
        "answer" : [
            {"id": "Russia",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
            "correct":false},
            {"id": "Canada",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png",
            "correct":false},
            {"id": "Vietnam",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png",
            "correct":true},
            {"id": "Myanmar",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/125px-Flag_of_Myanmar.svg.png",
            "correct":false}
        ],
        "explain": "Vietnam is the only one here that strictly share time zone with Thailand. While Russia follow 11 time zones."
    },
    {
        "question" : "Which country have a city name Paris?",
        "answer" : [
            {"id": "Russia",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
            "correct":false},
            {"id": "USA",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png",
            "correct":true},
            {"id": "Vietnam",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png",
            "correct":false},
            {"id": "Poland",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png",
            "correct":false}
        ],
        "explain": "Aside from France, USA and Canada have a city name Paris."
    },
    {
        "question" : "Which province does not have 'Chaloem Phra Kiat District'?",
        "answer" : [
            {"id": "Nan",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/%E0%B8%98%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99.svg/100px-%E0%B8%98%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99.svg.png",
            "correct":false},
            {"id": "Buriram",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_Buriram_Province.png/100px-Flag_Buriram_Province.png",
            "correct":false},
            {"id": "Saraburi",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Provincial_Flag_of_Saraburi.svg/100px-Provincial_Flag_of_Saraburi.svg.png",
            "correct":false},
            {"id": "Khonkaen",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_Khonkaen_Province.png/100px-Flag_Khonkaen_Province.png",
            "correct":true}
        ],
        "explain": "In all 4 provinces, only Khonkaen do not have 'Chaloem Phra Kiat District'."
    },
    {
        "question" : "Which university is not in England?",
        "answer" : [
            {"id": "Imperial College London",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shield_of_Imperial_College_London.svg/160px-Shield_of_Imperial_College_London.svg.png",
            "correct":false},
            {"id": "Edge Hill University",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Edge_Hill_University_Crest.png/200px-Edge_Hill_University_Crest.png",
            "correct":false},
            {"id": "University of Glasgow",
            "pic" : "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/UofG_Coat_of_Arms.png/150px-UofG_Coat_of_Arms.png",
            "correct":true},
            {"id": "Kingston University",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Shield_of_Kingston_University.svg/250px-Shield_of_Kingston_University.svg.png",
            "correct":false}
        ],
        "explain": "All of these are in United Kingdom, but only University of Glasgow is in Scotland and NOT England."
    },
    {
        "question" : "Which of the following is not a Game Engine?",
        "answer" : [
            {"id": "Godot",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Godot_logo.svg/200px-Godot_logo.svg.png",
            "correct":false},
            {"id": "Source 2",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Source_engine_logo_and_wordmark.svg/120px-Source_engine_logo_and_wordmark.svg.png",
            "correct":false},
            {"id": "Unreal",
            "pic" : "https://media.moddb.com/images/downloads/1/251/250122/Unreal_Tournament_GOTY_Edition_H.2.png",
            "correct":true},
            {"id": "Adventure Game Studio",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bigblue_cup.PNG/120px-Bigblue_cup.PNG",
            "correct":false}
        ],
        "explain": "Unreal Engine is an engine, yes. But that is Unreal Tournament, the game. This is a trick question."
    },
    {
        "question" : "Who developed C++?",
        "answer" : [
            {"id" : "Bjarne Stroustrup",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bjarne-stroustrup_%28cropped%29.jpg",
            "correct" : true},
            {"id" : "Dennis Ritchie",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/220px-Dennis_Ritchie_2011.jpg",
            "correct" : false},
            {"id" : "Ken Thompson",
            "pic" : "https://s3-us-west-2.amazonaws.com/belllabs-microsite-unixhistory/images/thompson.jpeg",
            "correct" : false},
            {"id" : "Linus Torvalds",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/220px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
            "correct" : false}
        ],
        "explain" : "Bjarne Stroustrup developed C++ in 1979. Dennis Ritchie developed C in 1972, Ken Thompson developed Unix in 1969, and Linus Torvalds developed Linux in 1991."
    },
    {
        "question" : "Which of the following is developed by Meta?",
        "answer" : [
            {"id": "Svelte",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
            "correct":false},
            {"id": "SolidJS",
            "pic" : "https://www.solidjs.com/img/logo/without-wordmark/logo.svg",
            "correct":false},
            {"id": "ReactJS",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
            "correct":true},
            {"id": "VueJS",
            "pic" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png",
            "correct":false}
        ],
        "explain": "React was made by 2 guys from Meta and has become one of the most popular web framework the world have ever seen, much to the dismay of sane people."
    }
];
let already_asked = [];
let clicked = false;
let score = 0;
// basic display you may add more code here.
let question_count = 0;
let prev_counter = 0;
let counter = Math.floor(Math.random() * 14);
// set the question and answers to the html via DOM
let questionElement = document.getElementById('question');
let ans1Element = document.getElementById('ans1');
let ans2Element = document.getElementById('ans2');
let ans3Element = document.getElementById('ans3');
let ans4Element = document.getElementById('ans4');
let scoreElement = document.getElementById('score');
let nextButton = document.getElementById('next');
nextQuestion();
const tableCells = document.querySelectorAll('td');

tableCells.forEach(cell => {
  cell.addEventListener('click', function(event) {
    console.log('Cell clicked:', event.target.textContent);
    if (!clicked) {
        const element = event.target;
        checkAnswer(element);
    }
    else {
    }
  });
});
nextButton.addEventListener('click', nextQuestion);
function checkAnswer(element) {
    const correct = document.getElementById("correct");
    const wrong = document.getElementById("wrong");
    const question = questions[counter];
    const scoretext = document.getElementById("scoretext");
    for (let i = 0; i < question.answer.length; i++) {
        if (question.answer[i].id == element.alt) {
            if (question.answer[i].correct) {
                correct.style.display = "block";
                wrong.style.display = "none";
                score += 1;
                scoretext.textContent = "Your score is " + score;

            }
            else {
                correct.style.display = "none";
                wrong.style.display = "block";
            }
        }
    }
    clicked = true;
    const explain = document.getElementById("explanation");
    explain.style.display = "block";
    explain.textContent = questions[counter].explain;

}
function nextQuestion() {
    counter = Math.floor(Math.random() * 14);
    while (counter == prev_counter || already_asked.includes(counter)) {
        counter = Math.floor(Math.random() * 14);
    }
    already_asked.push(counter);
    prev_counter = counter;
    let question = questions[counter];
    clicked = false;
    answers = question.answer;
    explanation = question.explain;
    questionElement.innerHTML = question.question;
    ans1Element.src = answers[0].pic;
    ans2Element.src = answers[1].pic;
    ans3Element.src = answers[2].pic;
    ans4Element.src = answers[3].pic;
    ans1Element.alt = answers[0].id;
    ans2Element.alt = answers[1].id;
    ans3Element.alt = answers[2].id;
    ans4Element.alt = answers[3].id;
    ans1Element.title = answers[0].id;
    ans2Element.title = answers[1].id;
    ans3Element.title = answers[2].id;
    ans4Element.title = answers[3].id;
    const correct = document.getElementById("correct");
    const wrong = document.getElementById("wrong");
    const explain = document.getElementById("explanation");
    explain.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    const questionEle = document.getElementById("questionNum");
    question_count += 1;
    questionEle.textContent = "Question " + question_count;
    if (question_count > 5) {
        score = 0;
        const scoretext = document.getElementById("scoretext");
        scoretext.textContent = "Your score is " + score;
        alert("Gmae finished resetting game");
        already_asked = [];
        question_count = 1;
        questionEle.textContent = "Question " + question_count;


    }
}