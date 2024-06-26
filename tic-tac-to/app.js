let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new")
let msgContainer = document.querySelector(".msg-cont")
let p = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6] 

]

const resetGame = () =>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide")

}



boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked ")
        if(turnO){
            box.innerText = "O"
            box.style.color = "#561F37"
            turnO = false
        }
        else{
            box.innerText = "X"
            box.style.color = "#39A2AE"
            turnO = true
        }
        box.disabled = true;

        checkWinner();
    })
})

const enableBox = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `congratulation, Winner is ' ${winner} '`
    msgContainer.classList.remove("hide")
    disableBox();
}

const checkWinner = ()=>{
    for(pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner!",pos1)
                showWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);