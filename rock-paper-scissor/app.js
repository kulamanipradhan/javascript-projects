let userscore = 0;
let computerscore = 0;
let soundEnabled = true;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreEle = document.querySelector("#user-score");
const computerScoreEle = document.querySelector("#computer-score");
const resetButton = document.querySelector("#reset");
const toggleSoundButton = document.querySelector("#toggle-sound");

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Was Draw. Play Again";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You win");
        msg.innerText = `You Win, Your ${userChoice} beats ${computerChoice}`;
        userscore += 1;
        userScoreEle.innerText = userscore;
    } else {
        console.log("You Lose");
        msg.innerText = `You lose, Your ${userChoice} beaten by ${computerChoice}`;
        computerscore += 1;
        computerScoreEle.innerText = computerscore;
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const playGame = (choiceId) => {
    const userChoice = choiceId;
    console.log("user choice", userChoice);
    const computerChoice = genCompChoice();
    console.log("computer choice", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? true : false;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});

resetButton.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    userScoreEle.innerText = userscore;
    computerScoreEle.innerText = computerscore;
    msg.innerText = "Choose your Move";
});




