function playGame() {
  // get a random choice from computer
  const choices = ["Rock", "Paper", "Scissors"];

  function getComputerChoice() {
    const choicesLen = choices.length;

    const computerChoice = Math.floor(Math.random() * choicesLen);

    return choices[computerChoice];
  }

  //  ask user for its choice
  function getUserChoice() {
    const userChoice = prompt("Choose 1 for Rock, 2 for Paper, or 3 for Scissors");
    return choices[userChoice];
  }

  // declare variables to keep track of scores
  let userScore = 0;
  let computerScore = 0;

  // Function to play in rounds
  let round = 0;

  function playRound(userChoice, computerChoice) {
    console.log(`-------- Round: ${round} --------`);
    // winning logic
    if(userChoice === choices[0]){ // Rock
        if(computerChoice === choices[0])
            console.log(`Its a tie. Both player chose ${choices[0]}`);
        else if(computerChoice === choices[1]){ // paper
            console.log(`User lost!! Round: ${round}`);
            computerScore = computerScore + 1;
        }
        else {
            console.log(`User won!! Round: ${round}`);
            userScore++;
        }
    }
    else if(userChoice === choices[1]){ // paper
        if(computerChoice === choices[1])
            console.log(`Its a tie. Both player chose ${choices[1]}`);
        else if(computerChoice === choices[0]){ // rock
            console.log(`User won!! Round: ${round}`);
            userScore++;
        }
        else {
            console.log(`User lost!! Round: ${round}`);
            computerScore++;
        }
    }
    else { // scissors
        if(computerChoice === choices[2])
            console.log(`Its a tie. Both player chose ${choices[2]}`);
        else if(computerChoice === choices[0]){ // rock
            console.log(`User lost!! Round: ${round}`);
            computerScore++;
        }
        else {
            console.log(`User won!! Round: ${round}`);
            userScore++;
        }
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
