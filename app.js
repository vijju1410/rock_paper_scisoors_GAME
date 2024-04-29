let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoices = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    //console.log("game was draw");
    msg.innerText = "Game was drawn..play again..!"
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userchoice,compChoice) => {
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
   // console.log("you win");
    msg.innerText = `you win Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
   }else{
    
    compScore++;
    compScorePara.innerText=compScore;
   // console.log("you lose");
    msg.innerText = `you lose ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
   }
}

const playGame = (userchoice) => {
    console.log("user choice = ",userchoice);
   //Generate computer choice
   const compChoice = genCompChoices();
   console.log("compChoice = ",compChoice);

if(userchoice === compChoice){
    //draw game 
    drawGame();
}else{
    let userWin = true;
    if(userchoice === "rock"){
        //scissors,paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        //rock,scissors
       userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userchoice,compChoice);
}
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});