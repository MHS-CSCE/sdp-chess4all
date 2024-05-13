freeze()

document.getElementById("first").innerHTML = "<<"
document.getElementById("previous").innerHTML = "<"
document.getElementById("next").innerHTML = ">"
document.getElementById("last").innerHTML = ">>"

const game1 = [["b205", "b405"], ["b705", "b505"]]
const information1 = [["Kasparov, Garry - Karpov, Anatoly"], ["1955, Superbet Classic"], ["1-0"]]

const game2 = [["b205", "b405"], ["b705", "b505"], ["b107", "b306"], ["b704", "b604"], ["b204", "b404"], ["b803", "b407"], ["b404", "b505"], ["b407", "b306"], ["b104", "b306"], ["b604", "b505"], ["b106", "b403"], ["b807", "b606"], ["b306", "b302"], ["b804", "b705"], ["b102", "b303"], ["b703", "b603"], ["b103", "b507"], ["b702", "b502"], ["b303", "b502"], ["b603", "b502"], ["b403", "b502"], ["b802", "b704"], ["b105", "b103"], ["b801", "b804"], ["b104", "b704"], ["b804", "b704"], ["b108", "b104"], ["b705", "b605"], ["b502", "b704"], ["b606", "b704"], ["b302", "b802"], ["b704","b802"], ["b104", "b804"]]
const information2 = [["Morphy, Paul - Duke Carl / Count Isouard"], ["1858, Paris / France"], ["1-0"], ["White Won by Checkmate"]]

moveCounter = 0
//gameCounter set at 1 for now to test buttons with an actual game
gameCounter = 1
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
    //casework for castling
    if (pieceType == "Wking" && gameArray[gameCounter][moveCounter][0] == "b105") {
        if (gameArray[gameCounter][moveCounter][1] == "b107") {
            document.getElementById("b107").innerText = "Wking"
            document.getElementById("b105").innerText = ""
            document.getElementById("b108").innerText = ""
            document.getElementById("b106").innerText = "Wrook"
        }
        else if (gameArray[gameCounter][moveCounter][1] == "b103") {
            document.getElementById("b103").innerText = "Wking"
            document.getElementById("b105").innerText = ""
            document.getElementById("b101").innerText = ""
            document.getElementById("b104").innerText = "Wrook"
        }
    }
    else if (pieceType == "Bking" && gameArray[gameCounter][moveCounter][0] == "b805") {
        if (gameArray[gameCounter][moveCounter][1] == "b807") {
            document.getElementById("b807").innerText = "Bking"
            document.getElementById("b805").innerText = ""
            document.getElementById("b808").innerText = ""
            document.getElementById("b806").innerText = "Brook"
        }
        else if (gameArray[gameCounter][moveCounter][1] == "b803") {
            document.getElementById("b803").innerText = "Bking"
            document.getElementById("b805").innerText = ""
            document.getElementById("b801").innerText = ""
            document.getElementById("b804").innerText = "Brook"
        }
    }
    else {
        document.getElementById(gameArray[gameCounter][moveCounter][1]).innerText = pieceType
        document.getElementById(gameArray[gameCounter][moveCounter][0]).innerText = ""
    }
    if (moveCounter + 1 == gameArray[gameCounter].length) {
        document.getElementById("conclusion").innerText = informationArray[gameCounter][3]
    }
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
    }
    document.getElementById("conclusion").innerText = informationArray[gameCounter][3]
}

function switchGame() {
    //will figure this out later once the dropdown menu is here
}

