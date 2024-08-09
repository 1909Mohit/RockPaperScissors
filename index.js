// Global Declarations

const choices = ["Rock", "Paper", "Scissors"];

// declare variables to keep track of scores
let userScore = 0;
let computerScore = 0;

const scorediv = document.querySelector(".score");
const score = document.createElement('div');
scorediv.appendChild(score);

const menu = document.querySelector(".choices");

let userChoice;

let round = 1;

function getComputerChoice() {
  const choicesLen = choices.length;

  const computerChoice = Math.floor(Math.random() * choicesLen);
  console.log("computer choice", choices[computerChoice]);
  return computerChoice;
}

menu.addEventListener("click", (event) => {
  const target = event.target;
  switch (target.id) {
    case "rock": {
      userChoice = 0;
      playRound(userChoice, getComputerChoice());
      break;
    }
    case "paper": {
      userChoice = 1;
      playRound(userChoice, getComputerChoice());
      break;
    }
    case "scissors": {
      userChoice = 2;
      playRound(userChoice, getComputerChoice());
      break;
    }
  }
});

function playRound(userChoice, computerChoice) {
  const roundText = document.createElement("h3");
  roundText.innerHTML = `Round: ${round}`;
  console.log(`-------- Round: ${round} --------`);

  score.appendChild(roundText);

  // winning logic
  if (userChoice === computerChoice) {

    const displayScore = document.createElement("h3");
    displayScore.textContent = `Its a tie. Both player chose ${choices[userChoice]}`;
    console.log(`Its a tie. Both player chose ${choices[userChoice]}`);
    score.appendChild(displayScore);

    const Scores = document.createElement("h2");
    Scores.textContent = `Your Score: ${userScore}, Computer Score: ${computerScore}`;
    score.appendChild(Scores);
    console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
  } 
  else if ( (choices[userChoice] === "Rock" && choices[computerChoice] === "Scissors") ||
    (choices[userChoice] === "Paper" && choices[computerChoice] === "Rock") ||
    (choices[userChoice] === "Scissors" && choices[computerChoice] === "Paper") ) 
  {
    const displayScore = document.createElement("h3");
    displayScore.textContent = `User won! ${choices[userChoice]} beats ${choices[computerChoice]}`;
    score.appendChild(displayScore);
    console.log(
      `User won! ${choices[userChoice]} beats ${choices[computerChoice]}`
    );
    userScore++;

    const Scores = document.createElement("h2");
    Scores.textContent = `Your Score: ${userScore}, Computer Score: ${computerScore}`;
    score.appendChild(Scores);
    console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
  }
  else {
    const displayScore = document.createElement("h3");
    displayScore.textContent = `User lost! ${choices[computerChoice]} beats ${choices[userChoice]}`;
    score.appendChild(displayScore);
    console.log(
      `User lost! ${choices[computerChoice]} beats ${choices[userChoice]}`
    );
    computerScore++;
    const Scores = document.createElement("h2");
    Scores.textContent = `Your Score: ${userScore}, Computer Score: ${computerScore}`;
    score.appendChild(Scores);
    console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);
  }

  if (round === 5) {
    if (userScore > computerScore) {
      const displayScore = document.createElement("h2");
      displayScore.textContent = `Hurray!!!! You have won!!`;
      score.appendChild(displayScore);
    } else if (userScore < computerScore) {
      const displayScore = document.createElement("h2");
      displayScore.textContent = `Oops! You lost!!`;
      score.appendChild(displayScore);
    } else {
      const displayScore = document.createElement("h2");
      displayScore.textContent = `It's a tie!!`;
      score.appendChild(displayScore);
    }
    
  }
  round = round + 1;
}

const displayScore = document.createElement("h2");
displayScore.textContent = `Your Score: ${userScore}, Computer Score: ${computerScore}`;
score.appendChild(displayScore);
console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);