let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");
const newGameBtn = document.querySelector("button")

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    drawScore++;
    drawScorePara.innerText = drawScore;
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";

};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
        else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You Loose. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    
}

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const resetGame = () => {
  userScore = 0;
  compScore = 0;
  drawScore = 0;

  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  drawScorePara.innerText = drawScore;

  msg.innerText = "Let's play again!";
  msg.style.backgroundColor = "#081b31";
};

newGameBtn.addEventListener("click",resetGame);