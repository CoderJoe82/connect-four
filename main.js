const gameHolder = document.querySelector(".game");
let turn = "black";

function createTowers() {
    for (j = 0; j < 7; j++) {
        const gameTower = document.createElement("div");
        gameTower.classList.add("column");
        gameHolder.appendChild(gameTower);
        for (i = 0; i < 6; i++) {
            const cellCreator = document.createElement("div");
            cellCreator.classList.add("cell");
            gameTower.appendChild(cellCreator);
        }
    }
}
createTowers();

const redBlackTurn = function(event) {
    const columnGrabber = document.getElementsByClassName("column");
    if (turn === "red") {
        if (event.currentTarget.lastElementChild.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");
            if (event.currentTarget === columnGrabber[0]) {
                redCreator.id = "11";
            } else if (event.currentTarget === columnGrabber[1]) {
                redCreator.id = "21";
            } else if (event.currentTarget === columnGrabber[2]) {
                redCreator.id = "31";
            } else if (event.currentTarget === columnGrabber[3]) {
                redCreator.id = "41";
            } else if (event.currentTarget === columnGrabber[4]) {
                redCreator.id = "51";
            } else if (event.currentTarget === columnGrabber[5]) {
                redCreator.id = "61";
            } else if (event.currentTarget === columnGrabber[6]) {
                redCreator.id = "71"
            }
            event.currentTarget.lastElementChild.appendChild(redCreator);
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");
            if (event.currentTarget === columnGrabber[0]) {
                redCreator.id = "12";
            } else if (event.currentTarget === columnGrabber[1]) {
                redCreator.id = "22";
            } else if (event.currentTarget === columnGrabber[2]) {
                redCreator.id = "32";
            } else if (event.currentTarget === columnGrabber[3]) {
                redCreator.id = "42";
            } else if (event.currentTarget === columnGrabber[4]) {
                redCreator.id = "52";
            } else if (event.currentTarget === columnGrabber[5]) {
                redCreator.id = "62";
            } else if (event.currentTarget === columnGrabber[6]) {
                redCreator.id = "72"
            }
            event.currentTarget.lastElementChild.previousElementSibling.appendChild(redCreator);
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");
            if (event.currentTarget === columnGrabber[0]) {
                redCreator.id = "13";
            } else if (event.currentTarget === columnGrabber[1]) {
                redCreator.id = "23";
            } else if (event.currentTarget === columnGrabber[2]) {
                redCreator.id = "33";
            } else if (event.currentTarget === columnGrabber[3]) {
                redCreator.id = "43";
            } else if (event.currentTarget === columnGrabber[4]) {
                redCreator.id = "53";
            } else if (event.currentTarget === columnGrabber[5]) {
                redCreator.id = "63";
            } else if (event.currentTarget === columnGrabber[6]) {
                redCreator.id = "73"
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(redCreator);
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");
            if (event.currentTarget === columnGrabber[0]) {
                redCreator.id = "14";
            } else if (event.currentTarget === columnGrabber[1]) {
                redCreator.id = "24";
            } else if (event.currentTarget === columnGrabber[2]) {
                redCreator.id = "34";
            } else if (event.currentTarget === columnGrabber[3]) {
                redCreator.id = "44";
            } else if (event.currentTarget === columnGrabber[4]) {
                redCreator.id = "54";
            } else if (event.currentTarget === columnGrabber[5]) {
                redCreator.id = "64";
            } else if (event.currentTarget === columnGrabber[6]) {
                redCreator.id = "74"
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redCreator);
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");
            if (event.currentTarget === columnGrabber[0]) {
                redCreator.id = "15";
            } else if (event.currentTarget === columnGrabber[1]) {
                redCreator.id = "25";
            } else if (event.currentTarget === columnGrabber[2]) {
                redCreator.id = "35";
            } else if (event.currentTarget === columnGrabber[3]) {
                redCreator.id = "45";
            } else if (event.currentTarget === columnGrabber[4]) {
                redCreator.id = "55";
            } else if (event.currentTarget === columnGrabber[5]) {
                redCreator.id = "65";
            } else if (event.currentTarget === columnGrabber[6]) {
                redCreator.id = "75"
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redCreator);
            turn = "black";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const redCreator = document.createElement("div");
            redCreator.classList.add("red");
            if (event.currentTarget === columnGrabber[0]) {
                redCreator.id = "16";
            } else if (event.currentTarget === columnGrabber[1]) {
                redCreator.id = "26";
            } else if (event.currentTarget === columnGrabber[2]) {
                redCreator.id = "36";
            } else if (event.currentTarget === columnGrabber[3]) {
                redCreator.id = "46";
            } else if (event.currentTarget === columnGrabber[4]) {
                redCreator.id = "56";
            } else if (event.currentTarget === columnGrabber[5]) {
                redCreator.id = "66";
            } else if (event.currentTarget === columnGrabber[6]) {
                redCreator.id = "76"
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(redCreator);
            turn = "black";
            return;
        }
    } else if (turn === "black") {
        if (event.currentTarget.lastElementChild.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");
            if (event.currentTarget === columnGrabber[0]) {
                blackCreator.id = "11";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackCreator.id = "21";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackCreator.id = "31";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackCreator.id = "41";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackCreator.id = "51";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackCreator.id = "61";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackCreator.id = "71";
            }
            event.currentTarget.lastElementChild.appendChild(blackCreator);
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");
            if (event.currentTarget === columnGrabber[0]) {
                blackCreator.id = "12";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackCreator.id = "22";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackCreator.id = "32";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackCreator.id = "42";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackCreator.id = "52";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackCreator.id = "62";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackCreator.id = "72";
            }
            event.currentTarget.lastElementChild.previousElementSibling.appendChild(blackCreator);
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");
            if (event.currentTarget === columnGrabber[0]) {
                blackCreator.id = "13";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackCreator.id = "23";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackCreator.id = "33";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackCreator.id = "43";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackCreator.id = "53";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackCreator.id = "63";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackCreator.id = "73";
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");
            if (event.currentTarget === columnGrabber[0]) {
                blackCreator.id = "14";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackCreator.id = "24";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackCreator.id = "34";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackCreator.id = "44";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackCreator.id = "54";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackCreator.id = "64";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackCreator.id = "74";
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");
            if (event.currentTarget === columnGrabber[0]) {
                blackCreator.id = "15";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackCreator.id = "25";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackCreator.id = "35";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackCreator.id = "45";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackCreator.id = "55";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackCreator.id = "65";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackCreator.id = "75";
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            turn = "red";
            return;
        } else if (event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childElementCount === 0) {
            const blackCreator = document.createElement("div");
            blackCreator.classList.add("black");
            if (event.currentTarget === columnGrabber[0]) {
                blackCreator.id = "16";
            } else if (event.currentTarget === columnGrabber[1]) {
                blackCreator.id = "26";
            } else if (event.currentTarget === columnGrabber[2]) {
                blackCreator.id = "36";
            } else if (event.currentTarget === columnGrabber[3]) {
                blackCreator.id = "46";
            } else if (event.currentTarget === columnGrabber[4]) {
                blackCreator.id = "56";
            } else if (event.currentTarget === columnGrabber[5]) {
                blackCreator.id = "66";
            } else if (event.currentTarget === columnGrabber[6]) {
                blackCreator.id = "76";
            }
            event.currentTarget.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(blackCreator);
            turn = "red";
            return;
        }
    }
}

const gameClicker = document.querySelectorAll(".column");
for (i = 0; i < gameClicker.length; i++) {
    gameClicker[i].addEventListener("click", redBlackTurn);
}