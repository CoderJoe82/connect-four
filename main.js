function createTowers() {
    for (i = 0; i < 7; i++) {
        const gameTower = document.createElement("div");
        gameTower.classList.add("column");
        const gameHolder = document.querySelector(".game");
        gameHolder.appendChild(gameTower);
    }
}

window.onload = function() {
    createTowers();
}