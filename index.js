function playGame() {
  // get a random choice from computer
  const choices = ["Rock", "Paper", "Scissors"];

  function getComputerChoice() {
    const choicesLen = choices.length;

    const computerChoice = Math.floor(Math.random() * choicesLen);
    console.log("computer choice", choices[computerChoice]);
    return computerChoice;
  }

  //  ask user for its choice
  function getUserChoice() {
    const userChoice = prompt("Choose 1 for Rock, 2 for Paper, or 3 for Scissors");
    console.log("user choice", choices[userChoice - 1]);
    return userChoice - 1;
  }

  // declare variables to keep track of scores
  let userScore = 0;
  let computerScore = 0;

  // Function to play in rounds
  let round = 1;

  function playRound(userChoice, computerChoice) {
    console.log(`-------- Round: ${round} --------`);
    // winning logic
    if(userChoice === computerChoice){
        console.log(`Its a tie. Both player chose ${choices[userChoice]}`);
    }
    else if( (choices[userChoice] === "Rock" && choices[computerChoice] === "Scissors") 
        || (choices[userChoice] === "Paper" && choices[computerChoice] === "Rock") 
        || (choices[userChoice] === "Scissors" && choices[computerChoice] === "Paper")
    ){
        console.log(`User won! ${choices[userChoice]} beats ${choices[computerChoice]}, Round: ${round}`);
        userScore++;
    }
    else{ 
        console.log(`User lost! ${choices[computerChoice]} beats ${choices[userChoice]}, Round: ${round}`);
        computerScore++;
    }
    round = round + 1;
  }

  // continue or not
  let nextRound = "yes";
  while (nextRound.toLowerCase() === "yes") {
      playRound(getUserChoice(), getComputerChoice());
      
      console.log(`Your Score: ${userScore}, Computer Score: ${computerScore}`);

    nextRound = prompt("Wanna play one more round? Type Yes or No\nNOTE!!!! Anything else other than yes will be considered as a - 'no'");
  }
}
