const gameHolder = document.querySelector(".game");
let turn = "black";

function createTowers() {
    for (let towerIndex = 0; towerIndex < 7; towerIndex++) {
        const gameTower = document.createElement("div");
        gameTower.classList.add("column");
        gameHolder.appendChild(gameTower);
        for (let cellIndex = 0; cellIndex < 6; cellIndex++) {
            const cellCreator = document.createElement("div");
            cellCreator.id = towerIndex + ", " + cellIndex;
            cellCreator.classList.add("cell");
            gameTower.appendChild(cellCreator);
        }
    }
}
createTowers();

const redBlackTurn = function(event) {
    if (turn === "red") {
        if (event.currentTarget.lastElementChild.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");

            event.currentTarget.lastElementChild.appendChild(redCreator);
            document.querySelector(".ospan").style.color = "black";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");

            event.currentTarget.lastElementChild.previousElementSibling.appendChild(redCreator);
            document.querySelector(".ospan").style.color = "black";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");

            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(redCreator);
            document.querySelector(".ospan").style.color = "black";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");

            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redCreator);
            document.querySelector(".ospan").style.color = "black";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");

            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redCreator);
            document.querySelector(".ospan").style.color = "black";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");

            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redCreator);
            document.querySelector(".ospan").style.color = "black";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "black";
            return;
        }
    } else if (turn === "black") {
        if (event.currentTarget.lastElementChild.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");

            event.currentTarget.lastElementChild.appendChild(blackCreator);
            document.querySelector(".ospan").style.color = "red";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");

            event.currentTarget.lastElementChild.previousElementSibling.appendChild(blackCreator);
            document.querySelector(".ospan").style.color = "red";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");

            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            document.querySelector(".ospan").style.color = "red";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");

            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            document.querySelector(".ospan").style.color = "red";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");
 
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            document.querySelector(".ospan").style.color = "red";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");

            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            document.querySelector(".ospan").style.color = "red";
            updateGameState();
            if(hasWon()) {
                alert(turn.toUpperCase() + ' WINS!');
            };
            turn = "red";
            return;
        }
    }
};

const gameClicker = document.querySelectorAll(".column");
for (i = 0; i < gameClicker.length; i++) {
    gameClicker[i].addEventListener("click", redBlackTurn);
};

document.querySelector(".button").onclick = () => {
    const cellGrabber = document.getElementsByClassName("cell");
    for (i = 0; i < cellGrabber.length; i++) {
        if (cellGrabber[i].lastElementChild !== null) {
            cellGrabber[i].removeChild(cellGrabber[i].lastElementChild);
        }
    }
    document.querySelector(".ospan").style.color = "black";
    turn = "black";
    console.log(turn);
}

window.onload = () => {
    document.querySelector(".ospan").style.color = "black";
}



 // Game State and Win Logic

 let model = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
];


function updateGameState() {
    for(let rowNum = 0; rowNum < model.length; rowNum++) {
        let row = model[rowNum];
        for(let colNum = 0; colNum < row.length; colNum++) {
            let position = colNum + ', ' + rowNum;
            let currentCell = document.getElementById(position);
            if(currentCell.hasChildNodes()) {
                let discColor = currentCell.childNodes[0].className;
                if(discColor === 'black') {
                    row[colNum] = 'B';
                } else {
                    row[colNum] = 'R';
                };
            };
        };
    };
}


function hasWon() {
// Create Edges
const edgeX = model[0].length - 3;
const edgeY = model.length - 3;

// Check For Winning Combinations:

// HORIZONTAL
for(let y = 0; y < model.length; y++){
  for(let x = 0; x < edgeX; x++) {
    let cell = model[y][x];
    if(cell !== '') {
      if(cell === model[y][x+1] && cell === model[y][x+2] && cell === model[y][x+3]) {
        console.log("4 in a row horizontal found at " + (x+1) + ":" + (y+1));
        return true;
      };
    };
  };
};

// VERTICAL 
for(let y = 0; y < edgeY; y++){
  for(let x = 0; x < model[0].length; x++) {
    cell = model[y][x];
    if(cell !== '') {
      if(cell === model[y+1][x] && cell === model[y+2][x] && cell === model[y+3][x]) {
        console.log("4 in a row vertical found at " + (x+1) + ":" + (y+1));
        return true;
      };
    };
  };
};

// DIAGONAL (DOWN RIGHT)
for(let y = 0; y < edgeY; y++){
  for(let x = 0; x < edgeX; x++) {
    cell = model[y][x];
    if(cell !== '') {
      if(cell === model[y+1][x+1] && cell === model[y+2][x+2] && cell === model[y+3][x+3]) {
        console.log("4 in a row down-right found at " + (x+1) + ":" + (y+1));
        return true;
      };
    };
  };
};

// DIAGONAL (DOWN LEFT)
for(let y = 2; y < model.length; y++){
  for(let x = 0; x < edgeX; x++) {
    cell = model[y][x];
    if(cell !== '') {
      if(cell === model[y-1][x+1] && cell === model[y-2][x+2] && cell === model[y-3][x+3]) {
        console.log("4 in a row down-left found at " + (x+1) + ":" + (y+1));
        return true;
      };
    };
  };
};

}

// TODO - CHECK FOR DRAW
// TODO - MAKE RESET LOGIC A FUNCTION AND ADD TO HASWON