let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#msg-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = "true";

const winPattern = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['1','4','7'],
    ['2','5','8'],
    ['2','4','6'],
    ['3','4','5'],
    ['6','7','8']
];

const resetGame = () => {
    turn0 = "true";
    enableBtn();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0 === true){
            box.innerText  = "X";
            turn0 = false;
        }
        else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disableBtn = () => {
    boxes.forEach((btn) => {
        btn.disabled = true;
    })
}

const enableBtn = () => {
    boxes.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    })
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);