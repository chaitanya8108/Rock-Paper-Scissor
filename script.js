let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let id = document.querySelector("#reset");

const resetGame = () => {
    user_score.innerText = "0";
    comp_score.innerText = "0";
    userScore = 0;
    compScore = 0;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "darkseagreen"
}

id.addEventListener("click", () => {
    resetGame(userScore, compScore);
})

const drawGame = (userChoice, compChoice) => {
//   console.log("game was draw");
  msg.innerText = `Draw between Your : "${userChoice}" and Computer : "${compChoice}"`;
  msg.style.backgroundColor = "grey";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    // console.log(randIdx);
    return options[randIdx];
};

const winDeclare = (userWin, userChoice, compChoice) => {
  if (userWin == true) {
    userScore++;
    user_score.innerText = userScore;
    msg.innerText = `Your : "${userChoice}" beats Computer : "${compChoice}"`;
    msg.style.backgroundColor = "green"; 
    // console.log("your score = ", userScore);
    // console.log("you Won");
  } else {
    compScore++;
    comp_score.innerText = compScore;
    msg.innerText = `Computer : "${compChoice}" beats Your : "${userChoice}"`;
    msg.style.backgroundColor = "red";
    // console.log("comp score = ", compScore);
    // console.log("you lose");
  }
};

const playgame = (userChoice) => {
  const compChoice = genCompChoice();
//   console.log("comp Choice ", compChoice);

  if (userChoice == compChoice) {
    drawGame(userChoice, compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
        if(compChoice === "paper"){
            userWin = false;
        }else if(compChoice === "scissors"){
            userWin = true;
        }
    //   userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
        if(compChoice === "scissors"){
            userWin = false;
        }else if(compChoice === "rock"){
            userWin = true;
        }
    //   userWin = compChoice === "scissor" ? false : true;
    }
    else {
        if(compChoice === "rock"){
            userWin = false;
        }else if(compChoice === "paper"){
            userWin = true;
        }
    //   userWin = compChoice === "rock" ? false : true;
    }
    winDeclare(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("your choice ", userChoice);
    playgame(userChoice);
  });
});
