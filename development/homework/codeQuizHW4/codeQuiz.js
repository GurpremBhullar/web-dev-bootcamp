
var welcomeG = document.querySelector("#welcome");
var startButton = document.querySelector("#startQuiz");
 
var quizG = document.querySelector("#quiz");
var questionDisplay = document.querySelector("#question");
var answersDisplay = document.querySelector("#answers");
 
var inputScoreG = document.querySelector("#inputScore");
var initialsG = document.querySelector("#initials");
var submit_initialsButton= document.querySelector("#submitInitials");
var userScoreG = document.querySelector("#score");

var highScoresG = document.querySelector("#highScores");
var scoresG = document.querySelector("#scores");
var go_backButton = document.querySelector("#goBack");
var clear_scoresButton = document.querySelector("#clearScores");

var high_scores_viewButton = document.querySelector("#viewHScores");
var quizTimer = document.querySelector("#timer");
var score = 0;
var currentQuestion = 0;
var highScores = [];
var interval;
var timeGiven = 80;
var secondsElapsed = 0;

var questionSet = [
  {
    title: "Which country is Indian food from?",
    choices: ["Indonesia",
                "Africa",
                "India",
                "Japan"],
    answer: "India"
  },
  {
    title: "Who made the popular Hip Hop song Lose Yourself ?",
    choices: ["Slipknot", "Punjabi MC", "EMINEM", "Tupac"],
    answer: "EMINEM"
  },
  {
    title: "Which coding language is majoritly used for full stack development?",
    choices: ["Javascript", "Python", "C++", "Oprah"],
    answer: "Javascript"
  },
  {
    title: "Which popular animated series is Goku from?",
    choices: ["Sailor Moon", "Avatar the Last Airbender", "Dragon Ball", "None of the Above"],
    answer: "Dragon Ball"
  }, 
  {
    title: "What is Naruto's son name?",
    choices: ["Sasuke", "Sakura", "Boruto", "Jin"] , 
    answer: "Boruto" 
  },
  {
    title: "Which holiday is on October 31st",
    choices: ["halloween", "jamaica", "tax day", "christmas"],
    answer: "halloween"
  }, 
  {
    title: "which super hero is known as the dark knight?",
    choices: ["batman", "wonder woman","ronald mcdonald","superman"],
    answer: "batman"
  },
  {
    title: "which super heros name is clark kent?",
    choices: ["superman", "batman", "the flash", "aquaman"],
    answer: "superman"
  }
];

function startTimer() {
    quizTimer.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        quizTimer.textContent = timeGiven - secondsElapsed;
        if (secondsElapsed >= timeGiven) {
            currentQuestion = questionSet.length;
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questionSet.length) {
        renderQuestion();
    } else {
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
            score += (timeGiven - secondsElapsed);
        userScoreEl.textContent = score;
        hide(quizEl);
        show(inputScoreEl);
        quizTimer.textContent = 0;
    }
}

function checkAnswer(answer) {
    var answerIndex = answer.id - 1;

    if (questionSet[currentQuestion].answer == questionSet[currentQuestion].choices[answerIndex]) {
        score += 5;
        displayMessage("Correct!");
    }
    else {
        secondsElapsed += 10;
        displayMessage("Wrong.");
    }
}

function displayMessage(m) {
    var timeStart = 0;
    var timeStop = 2;
    var messageHr = document.createElement("hr");
    var messageEl = document.createElement("div");
    messageEl.textContent = m;
    document.querySelector(".jumbotron").appendChild(messageHr);
    document.querySelector(".jumbotron").appendChild(messageEl);
    var messageInterval = setInterval(function () {
        timeStart++;
        if (timeStart >= timeStop) {
            messageHr.remove();
            messageEl.remove();
            clearInterval(messageInterval)
        }
    }, 1000);

}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

function reset() {
    score = 0;
    currentQuestion = 0;
    secondsElapsed = 0;
    quizTimer.textContent = 0;
}

function renderQuestion() {
    questionDisplay.textContent = questionSet[currentQuestion].title;
    for (i = 0; i < answersDisplay.children.length; i++) {
        answersDisplay.children[i].children[0].textContent = (i + 1) + ": " + questionSet[currentQuestion].choices[i];
    }
}

function renderHighScores() {
    while (scoresG.firstChild) {
        scoresG.removeChild(scoresG.firstChild);
    }
    show(highScoresG);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (var i = 0; i < highScores.length; i++) {
        var scoreItem = document.createElement("div");
        scoreItem.className += "row mb-3 p-2";
        console.log(scoreItem)
        scoreItem.setAttribute("style", "background-color:PaleTurquoise;");
        scoreItem.textContent = (i + 1) + ". " + highScores[i].username + " - " + highScores[i].userScore;
        scoresEl.appendChild(scoreItem);
    }
}

//displays high scores
high_scores_viewButton.addEventListener("click", function () {
    hide(welcomeG);
    hide(quizG);
    hide(inputScoreG);
    renderHighScores();
    stopTimer();
    reset();
});

startButton.addEventListener("click", function () {
    hide(welcomeG);
    startTimer();
    renderQuestion();
    show(quizG);
});

answersDisplay.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        checkAnswer(e.target);
        nextQuestion();
    }
});


submit_initialsButton.addEventListener("click", function () {
    var initValue = initialsG.value.trim();
    if (initValue) {
        var userScore = { username: initValue, userScore: score };
        initialsG.value = '';
        if (localStorage.getItem("scores")) {
            highScores = JSON.parse(localStorage.getItem("scores"));
        }
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores));
        hide(inputScoreG);
        renderHighScores();
        reset();
    }
});
 
go_backButton.addEventListener("click", function () {
    hide(highScoresG);
    show(welcomeG);
});

//Clear saved scores from local storage
clear_scoresButton.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});