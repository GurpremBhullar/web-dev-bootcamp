
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
 