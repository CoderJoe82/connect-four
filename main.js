const gameHolder = document.querySelector(".game");
let turn = "black";

function createTowers() {
    for (j = 0; j < 7; j++) {
        const gameTower = document.createElement("div");
        gameTower.classList.add("column");
        gameHolder.appendChild(gameTower);
        for (i = 0; i < 6; i++) {
            const cellCreator = document.createElement("div");
            cellCreator.classList.add("cells");
            gameTower.appendChild(cellCreator);
        }
    }
}
createTowers();

const redBlackTurn = function(event) {
    if (turn === "red") {
        if (event.currentTarget.lastElementChild.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            event.currentTarget.lastElementChild.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            event.currentTarget.lastElementChild.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        }
    } else if (turn === "black") {
        console.log(event.currentTarget.lastElementChild);
        console.log(event.currentTarget.lastElementChild.lastElementChild);
        if (event.currentTarget.lastElementChild.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            event.currentTarget.lastElementChild.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            event.currentTarget.lastElementChild.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        }
    }
}

const gameClicker = document.querySelectorAll(".column");
for (i = 0; i < gameClicker.length; i++) {
    gameClicker[i].addEventListener("click", redBlackTurn);
}