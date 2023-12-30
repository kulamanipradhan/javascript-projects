let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newgame = document.querySelector("#new-game-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true //to select who is going to play

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const resetGame = function()
{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add =("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turn0)//player 0
        {
            box.innerText = "0"
            turn0 = false;
        }
        else {
            //player x
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })

})
const enableBoxes = function()
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = function()
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const showWinner= function (winner)
{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = function () {
    for (let pattern of winPatterns) {
        let posone = boxes[pattern[0]].innerText;
        let postwo = boxes[pattern[1]].innerText;
        let posthree = boxes[pattern[2]].innerText;
        if (posone != "" && postwo !== "" && posthree !== "") {
            if (posone === postwo && postwo === posthree)
             {
                 showWinner(posone);
                }
        }
    }
    checkDraw()
};

newgame.addEventListener("click",()=>{
    resetGame();
});
resetBtn.addEventListener("click",resetGame);

// ... (previous code)

const checkDraw = function () {
    if (Array.from(boxes).every((box) => box.innerText !== "")) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

