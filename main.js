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
    const columnGrabber = document.getElementsByClassName("column");
    const cellGrabber = document.getElementsByClassName("cells");
    if (turn === "red") {
        if (event.currentTarget.lastElementChild.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            if (event.currentTarget === columnGrabber[0]) {
                redPieceCreator.id = "11";
            } else if (event.currentTarget === columnGrabber[1]) {
                redPieceCreator.id = "21";
            } else if (event.currentTarget === columnGrabber[2]) {
                redPieceCreator.id = "31";
            } else if (event.currentTarget === columnGrabber[3]) {
                redPieceCreator.id = "41";
            } else if (event.currentTarget === columnGrabber[4]) {
                redPieceCreator.id = "51";
            } else if (event.currentTarget === columnGrabber[5]) {
                redPieceCreator.id = "61";
            } else if (event.currentTarget === columnGrabber[6]) {
                redPieceCreator.id = "71"
            }
            event.currentTarget.lastElementChild.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            if (event.currentTarget === columnGrabber[0]) {
                redPieceCreator.id = "12";
            } else if (event.currentTarget === columnGrabber[1]) {
                redPieceCreator.id = "22";
            } else if (event.currentTarget === columnGrabber[2]) {
                redPieceCreator.id = "32";
            } else if (event.currentTarget === columnGrabber[3]) {
                redPieceCreator.id = "42";
            } else if (event.currentTarget === columnGrabber[4]) {
                redPieceCreator.id = "52";
            } else if (event.currentTarget === columnGrabber[5]) {
                redPieceCreator.id = "62";
            } else if (event.currentTarget === columnGrabber[6]) {
                redPieceCreator.id = "72"
            }
            event.currentTarget.lastElementChild.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            if (event.currentTarget === columnGrabber[0]) {
                redPieceCreator.id = "13";
            } else if (event.currentTarget === columnGrabber[1]) {
                redPieceCreator.id = "23";
            } else if (event.currentTarget === columnGrabber[2]) {
                redPieceCreator.id = "33";
            } else if (event.currentTarget === columnGrabber[3]) {
                redPieceCreator.id = "43";
            } else if (event.currentTarget === columnGrabber[4]) {
                redPieceCreator.id = "53";
            } else if (event.currentTarget === columnGrabber[5]) {
                redPieceCreator.id = "63";
            } else if (event.currentTarget === columnGrabber[6]) {
                redPieceCreator.id = "73"
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            if (event.currentTarget === columnGrabber[0]) {
                redPieceCreator.id = "14";
            } else if (event.currentTarget === columnGrabber[1]) {
                redPieceCreator.id = "24";
            } else if (event.currentTarget === columnGrabber[2]) {
                redPieceCreator.id = "34";
            } else if (event.currentTarget === columnGrabber[3]) {
                redPieceCreator.id = "44";
            } else if (event.currentTarget === columnGrabber[4]) {
                redPieceCreator.id = "54";
            } else if (event.currentTarget === columnGrabber[5]) {
                redPieceCreator.id = "64";
            } else if (event.currentTarget === columnGrabber[6]) {
                redPieceCreator.id = "74"
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            if (event.currentTarget === columnGrabber[0]) {
                redPieceCreator.id = "15";
            } else if (event.currentTarget === columnGrabber[1]) {
                redPieceCreator.id = "25";
            } else if (event.currentTarget === columnGrabber[2]) {
                redPieceCreator.id = "35";
            } else if (event.currentTarget === columnGrabber[3]) {
                redPieceCreator.id = "45";
            } else if (event.currentTarget === columnGrabber[4]) {
                redPieceCreator.id = "55";
            } else if (event.currentTarget === columnGrabber[5]) {
                redPieceCreator.id = "65";
            } else if (event.currentTarget === columnGrabber[6]) {
                redPieceCreator.id = "75"
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redPieceCreator);
            turn = "black";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redPieceCreator = document.createElement("div");
            redPieceCreator.classList.add("redpiece");
            if (event.currentTarget === columnGrabber[0]) {
                redPieceCreator.id = "16";
            } else if (event.currentTarget === columnGrabber[1]) {
                redPieceCreator.id = "26";
            } else if (event.currentTarget === columnGrabber[2]) {
                redPieceCreator.id = "36";
            } else if (event.currentTarget === columnGrabber[3]) {
                redPieceCreator.id = "46";
            } else if (event.currentTarget === columnGrabber[4]) {
                redPieceCreator.id = "56";
            } else if (event.currentTarget === columnGrabber[5]) {
                redPieceCreator.id = "66";
            } else if (event.currentTarget === columnGrabber[6]) {
                redPieceCreator.id = "76"
            }
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
            if (event.currentTarget === columnGrabber[0]) {
                blackPieceCreator.id = "11";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackPieceCreator.id = "21";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackPieceCreator.id = "31";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackPieceCreator.id = "41";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackPieceCreator.id = "51";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackPieceCreator.id = "61";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackPieceCreator.id = "71";
            }
            event.currentTarget.lastElementChild.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            if (event.currentTarget === columnGrabber[0]) {
                blackPieceCreator.id = "12";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackPieceCreator.id = "22";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackPieceCreator.id = "32";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackPieceCreator.id = "42";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackPieceCreator.id = "52";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackPieceCreator.id = "62";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackPieceCreator.id = "72";
            }
            event.currentTarget.lastElementChild.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            if (event.currentTarget === columnGrabber[0]) {
                blackPieceCreator.id = "13";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackPieceCreator.id = "23";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackPieceCreator.id = "33";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackPieceCreator.id = "43";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackPieceCreator.id = "53";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackPieceCreator.id = "63";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackPieceCreator.id = "73";
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            if (event.currentTarget === columnGrabber[0]) {
                blackPieceCreator.id = "14";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackPieceCreator.id = "24";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackPieceCreator.id = "34";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackPieceCreator.id = "44";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackPieceCreator.id = "54";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackPieceCreator.id = "64";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackPieceCreator.id = "74";
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            if (event.currentTarget === columnGrabber[0]) {
                blackPieceCreator.id = "15";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackPieceCreator.id = "25";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackPieceCreator.id = "35";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackPieceCreator.id = "45";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackPieceCreator.id = "55";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackPieceCreator.id = "65";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackPieceCreator.id = "75";
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackPieceCreator);
            turn = "red";
            console.log(turn);
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackPieceCreator = document.createElement("div");
            blackPieceCreator.classList.add("blackpiece");
            if (event.currentTarget === columnGrabber[0]) {
                blackPieceCreator.id = "16";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackPieceCreator.id = "26";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackPieceCreator.id = "36";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackPieceCreator.id = "46";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackPieceCreator.id = "56";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackPieceCreator.id = "66";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackPieceCreator.id = "76";
            }
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