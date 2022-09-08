const readline = require("readline-sync");
const chalk = require('chalk');
const log = console.log.bind(console);

const userName = readline.question(chalk.blue.bold("Enter you nickname!\n"));
log(chalk.blue.bold(`\nHey ${userName}, how about a quiz on OCEAN?`));

let score = 0;

//data of high score
let highScores = [
  {
    name: "Hitesh",
    score: 3
  },
]

let questions = [
    {//1
      question:"What is my full name ",
      options:[
        "a. Hitesh",
        "b. Hitesh Kumar",
        "c. Hitesh Kumar Sahu",
        "c. Mr. Kumar",
      ],
      answer:"c"
    },
    {//2
      question:"Which TV series I am binge watching?",
      options:[
        "a. House of the dragon",
        "b. Friends",
        "c. The Boys",
        "d. Behind her eyes"
      ],
      answer:"c"
    },
    {//3
      question:"Where I am from? ",
    options:[
      "a. Jamshedpur",
      "b. Indore",
      "c. Pune",
      "d. Varanasi"
    ],
     answer:"a"
    },
    {
      question:"My favouraite food",
    options:[
      "a. Biryani",
      "b. Maggi",
      "c. Sandwich",
      "d. Strogonoff"
    ],
     answer:"d"
    },
    {//4
      question:"which games do I like to play?",
    options:[
      "a. Dying Light",
      "b. Hitman",
      "c. Farcry 4",
      "d. Dead Island"
    ],
     answer:"c"
    }
  ]
  
// WELCOME
function welcome() {
  log(chalk.redBright.bold("\n!!RULES!!\n"));
  log(chalk.greenBright.bold("So here are the rules of the game:\n1. There are only 10 questions.\n2. You have to answer all correctly.\nALL THE BEST!\nLet's begin!!\n----------------------------"));
  readline.keyInPause(chalk.gray('\nPress any key to start the game...'));
  game();
}
// GAME
function game() {
  for (let i = 0; i < questions.length; i++) {
    log(chalk.bold("---------------------------"));
    console.log(chalk.cyanBright(`Q${i + 1}: `, questions[i].question, "\n"));
    questions[i].options.forEach(option => {
      log(chalk.yellowBright.bold(option));
    })
    const answer = readline.question(chalk.whiteBright.bold("\nYour answer: "), {
      limit: ["a", "b", "c", "d"],
      caseSensitive: false
    });
    checkAnswer(i, answer);
  }
}
// CHECK ANSWER
function checkAnswer(currentQuestion, answer) {
  if (answer.toLowerCase() === questions[currentQuestion].answer) {
    log(chalk.greenBright('Correct!'));
    score++;
  }
  else {
    log(chalk.redBright("Incorrect!"));
  }
  log(chalk.green.bold(`Your score is ${score}`));

}
function result() {
  if (score === 3) {
    log(chalk.green.bold('\nCongratulations! You have passed the quiz! 🥳'));
    log(chalk.green.bold('You have scored a total of 3/3'));
  }
  else if (score >= 2) {
    log(chalk.green.bold('\nCongratulations! You have passed the quiz! 🥳'));
    log(chalk.green.bold(`You have scored a total of ${score}/${questions.length}`));
  } else if (score >= 1) {
    log(chalk.green.bold(`\nYou have scored a total of ${score}/${questions.length}`));
  } else {
    log(chalk.red.bold(`\nBetter luck next time 💪`));
    log(chalk.red.bold(`\nYou have scored a total of ${score}/${questions.length}`));
  }
}
welcome();
result();
