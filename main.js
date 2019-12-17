const gameHolder = document.querySelector(".game");

function createTowers(div) {
    for (i = 0; i < 7; i++) {
        const gameTower = document.createElement("div");
        gameTower.classList.add("column");
        div.appendChild(gameTower);
    }
}

window.onload = function() {
    createTowers(gameHolder);
}