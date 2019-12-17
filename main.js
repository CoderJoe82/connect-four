const gameHolder = document.querySelector(".game");
let turn = "black";

function createTowers() {
    for (i = 0; i < 7; i++) {
        const gameTower = document.createElement("div");
        gameTower.classList.add("column");
        gameHolder.appendChild(gameTower);
    }
}
createTowers();

const redBlackTurn = function(event) {
    const gameColumns = event.currentTarget;
    if (turn === "red") {
        if (gameColumns.childElementCount < 6) {
            const gamePiece = document.createElement("div");
            this.appendChild(gamePiece);
        } else {
            return;
        }
        turn = "black";
    } else if (turn === "black") {
        if (gameColumns.childElementCount < 6) {
            const gamePiece = document.createElement("div");
            this.appendChild(gamePiece);
        } else {
            return;
        }
        turn = "red";
    }
    console.log(turn);
}

const gameClicker = document.querySelectorAll(".column");
for (i = 0; i < gameClicker.length; i++) {
    gameClicker[i].addEventListener("click", redBlackTurn);
}