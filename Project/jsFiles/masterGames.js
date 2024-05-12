freeze()

document.getElementById("first").innerHTML = "<<"
document.getElementById("previous").innerHTML = "<"
document.getElementById("next").innerHTML = ">"
document.getElementById("last").innerHTML = ">>"

const game1 = [["b205", "b405"], ["b705", "b505"]]
const information1 = [["Kasparov, Garry - Karpov, Anatoly"], ["1955, Superbet Classic"], ["1-0"]]

const game2 = [["b204", "b404"]]
const information2 = [["Carlsen, Magnus - Nakamura, Hikaru"], ["2023, World Rapid and Blitz Championship"], ["1/2-1/2"]]

moveCounter = 0
gameCounter = 0
var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

const gameArray = [game1, game2]
const informationArray = [information1, information2]
piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]

function freeze() {
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "none"
        }
    }
}

function nextMove() {
    pieceType = document.getElementById(gameArray[gameCounter][moveCounter][0]).innerText
    document.getElementById(gameArray[gameCounter][moveCounter][1]).innerText = pieceType
    document.getElementById(gameArray[gameCounter][moveCounter][0]).innerText = ""
    insertImage()
    moveCounter++
}

function previousMove() {
    pieceType = document.getElementById(gameArray[gameCounter][moveCounter-1][1]).innerText
    document.getElementById(gameArray[gameCounter][moveCounter-1][0]).innerText = pieceType
    document.getElementById(gameArray[gameCounter][moveCounter-1][1]).innerText = ""
    insertImage()
    moveCounter--
}

function firstMove() {
    for (i = moveCounter; i > -1; i--) {
        previousMove()
        i--
    }
}

function lastMove() {
    for (i = moveCounter; i < gameArray[gameCounter].length + 1; i++) {
        nextMove()
        i++
    }
}

function switchGame() {
    
}

