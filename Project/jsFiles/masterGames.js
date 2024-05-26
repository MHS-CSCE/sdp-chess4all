freeze()

document.getElementById("first").innerHTML = "<<"
document.getElementById("previous").innerHTML = "<"
document.getElementById("next").innerHTML = ">"
document.getElementById("last").innerHTML = ">>"

const game1 = [["b205", "b405"], ["b704", "b604"], ["b204", "b404"], ["b807", "b606"], ["b102", "b303"], ["b707", "b607"], ["b103", "b305"], ["b806", "b707"], ["b104", "b204"], ["b703", "b603"], ["b206", "b306"], ["b702", "b502"], ["b107", "b205"], ["b802", "b704"], ["b305", "b608"], ["b707", "b608"], ["b204", "b608"], ["b803", "b702"], ["b201", "b301"], ["b705", "b505"], ["b105", "b103"], ["b804", "b705"], ["b103", "b102"], ["b701", "b601"], ["b205", "b103"], ["b805", "b803"], ["b103", "b302"], ["b505", "b404"], ["b104", "b404"], ["b603", "b503"], ["b404", "b104"], ["b704", "b602"], ["b207", "b307"], ["b803", "b802"], ["b302", "b501"], ["b702", "b801"], ["b106", "b308"], ["b604", "b504"], ["b608", "b406"], ["b802", "b701"], ["b108", "b105"], ["b504", "b404"], ["b303", "b504"], ["b602", "b504"], ["b405", "b504"], ["b705", "b604"], ["b104", "b404"], ["b503", "b404"], ["b105", "b705"], ["b701", "b602"], ["b406", "b404"], ["b602", "b501"], ["b202", "b402"], ["b501", "b401"], ["b404", "b303"], ["b604", "b504"], ["b705", "b701"], ["b801", "b702"], ["b701", "b702"], ["b504", "b403"], ["b303", "b606"], ["b401", "b301"], ["b606", "b601"], ["b301", "b402"], ["b203", "b303"], ["b402", "b303"], ["b601", "b101"], ["b303", "b204"], ["b101", "b202"], ["b204", "b104"], ["b308", "b106"], ["b804", "b204"], ["b702", "b704"], ["b204", "b704"], ["b106", "b403"], ["b502", "b403"], ["b202", "b808"], ["b704", "b304"], ["b808", "b801"], ["b403", "b303"], ["b801", "b401"], ["b104", "b105"], ["b306", "b406"], ["b706", "b506"], ["b102", "b103"], ["b304", "b204"], ["b401", "b701"]]
const information1 = [["Kasparov, Garry - Topalov, Veselin"], ["1999, Wijk ann Zee / Netherlands"], ["1-0"], ["White Won by Resignation"]]

const game2 = [["b205", "b405"], ["b703", "b503"], ["b107", "b306"], ["b705", "b605"], ["b204", "b404"], ["b503", "b404"], ["b306", "b404"], ["b802", "b603"], ["b404", "b502"], ["b704", "b604"], ["b203", "b403"], ["b807", "b606"], ["b102", "b303"], ["b701", "b601"], ["b502", "b301"], ["b604", "b504"], ["b403", "b504"], ["b605", "b504"], ["b405", "b504"], ["b603", "b402"], ["b106", "b205"], ["b806", "b503"], ["b105", "b107"], ["b805", "b807"], ["b205", "b306"], ["b803", "b506"], ["b103", "b507"], ["b806", "b805"], ["b104", "b204"], ["b702", "b502"], ["b101", "b104"], ["b402", "b304"], ["b301", "b102"], ["b708", "b608"], ["b507", "b408"], ["b502", "b402"], ["b303", "b401"], ["b503", "b604"], ["b408", "b307"], ["b801", "b803"], ["b202", "b302"], ["b707", "b507"], ["b307", "b604"], ["b804", "b604"], ["b207", "b307"], ["b606", "b704"], ["b306", "b207"], ["b604", "b606"], ["b201", "b301"], ["b601", "b501"], ["b301", "b402"], ["b501", "b402"], ["b204", "b201"], ["b506", "b607"], ["b504", "b604"], ["b507", "b407"], ["b201", "b204"], ["b807", "b707"], ["b206", "b306"], ["b606", "b604"], ["b306", "b407"], ["b604", "b404"], ["b107", "b108"], ["b704", "b606"], ["b106", "b406"], ["b606", "b405"], ["b204", "b304"], ["b405", "b206"], ["b406", "b206"], ["b607", "b304"], ["b206", "b204"], ["b404", "b305"], ["b204", "b304"], ["b803", "b103"], ["b401", "b202"], ["b305", "b206"], ["b102", "b204"], ["b103", "b104"], ["b202", "b104"], ["b805", "b105"]]
const information2 = [["Karpov, Anatoly - Kasparov, Garry"], ["1985, Moscow / Russia"], ["0-1"], ["Black won by Resignation"]]

const game3 = [["b205", "b405"], ["b705", "b505"], ["b107", "b306"], ["b704", "b604"], ["b204", "b404"], ["b803", "b407"], ["b404", "b505"], ["b407", "b306"], ["b104", "b306"], ["b604", "b505"], ["b106", "b403"], ["b807", "b606"], ["b306", "b302"], ["b804", "b705"], ["b102", "b303"], ["b703", "b603"], ["b103", "b507"], ["b702", "b502"], ["b303", "b502"], ["b603", "b502"], ["b403", "b502"], ["b802", "b704"], ["b105", "b103"], ["b801", "b804"], ["b104", "b704"], ["b804", "b704"], ["b108", "b104"], ["b705", "b605"], ["b502", "b704"], ["b606", "b704"], ["b302", "b802"], ["b704","b802"], ["b104", "b804"]]
const information3 = [["Morphy, Paul - Duke Carl / Count Isouard"], ["1858, Paris / France"], ["1-0"], ["White Won by Checkmate"]]

moveCounter = 0
//gameCounter set at -1 to disable buttons at the start (before a game is selected)
gameCounter = -1
var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

const gameArray = [game1, game2, game3]
const informationArray = [information1, information2, information3]
piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]
capturedPieces = []
loadGames()

function freeze() {
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "none"
        }
    }
}

function nextMove() {
    if (moveCounter !== gameArray[gameCounter].length) {
        pieceType = document.getElementById(gameArray[gameCounter][moveCounter][0]).innerText
        pieceType2 = document.getElementById(gameArray[gameCounter][moveCounter][1]).innerText
        capturedPieces.push(pieceType2)
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
    if (moveCounter == gameArray[gameCounter].length) {
        document.getElementById("conclusion").innerText = informationArray[gameCounter][3]
    }
}

function previousMove() {
    if (moveCounter !== 0) {
        pieceType = document.getElementById(gameArray[gameCounter][moveCounter-1][1]).innerText
        pieceType2 = capturedPieces[moveCounter-1]
        if (pieceType == "Wking" && gameArray[gameCounter][moveCounter-1][0] == "b105") {
            if (gameArray[gameCounter][moveCounter-1][1] == "b107") {
                document.getElementById("b107").innerText = ""
                document.getElementById("b105").innerText = "Wking"
                document.getElementById("b108").innerText = "Wrook"
                document.getElementById("b106").innerText = ""
            }
            else if (gameArray[gameCounter][moveCounter-1][1] == "b103") {
                document.getElementById("b103").innerText = ""
                document.getElementById("b105").innerText = "Wking"
                document.getElementById("b101").innerText = "Wrook"
                document.getElementById("b104").innerText = ""
            }
        }
        else if (pieceType == "Bking" && gameArray[gameCounter][moveCounter-1][0] == "b805") {
            if (gameArray[gameCounter][moveCounter-1][1] == "b807") {
                document.getElementById("b807").innerText = ""
                document.getElementById("b805").innerText = "Bking"
                document.getElementById("b808").innerText = "Brook"
                document.getElementById("b806").innerText = ""
            }
            else if (gameArray[gameCounter][moveCounter-1][1] == "b803") {
                document.getElementById("b803").innerText = ""
                document.getElementById("b805").innerText = "Bking"
                document.getElementById("b801").innerText = "Brook"
                document.getElementById("b804").innerText = ""
            }
        }
        else {
            document.getElementById(gameArray[gameCounter][moveCounter-1][0]).innerText = pieceType
            document.getElementById(gameArray[gameCounter][moveCounter-1][1]).innerText = pieceType2
        }
        insertImage()
        moveCounter--
    }
    if (moveCounter == gameArray[gameCounter].length - 1) {
        document.getElementById("conclusion").innerText = ""
    }
    console.log(capturedPieces)
    capturedPieces.pop()
}

function firstMove() {
    if (moveCounter !== 0) {
        for (i = moveCounter; i > -1; i--) {
            previousMove()
        }
    }
    document.getElementById("conclusion").innerText = ""
}

function lastMove() {
    for (i = moveCounter; i < gameArray[gameCounter].length + 1; i++) {
        nextMove()
    }
    document.getElementById("conclusion").innerText = informationArray[gameCounter][3]
}

function loadGames() {
    console.log("hello")
    for (i = 1; i < gameArray.length + 1; i++) {
        document.getElementById("Game" + String(i)).innerText = informationArray[i-1][0]
    }
    console.log(capturedPieces)
}

var gameSelection = document.getElementById("gameList")
gameSelection.addEventListener("change", selectGame)

function selectGame() {
    firstMove()
    moveCounter = 0
    gameCounter = gameSelection.value - 1
    capturedPieces = []
    document.getElementById("players").innerText = informationArray[gameCounter][0]
    console.log(document.getElementById("players").innerHTML)
    document.getElementById("details").innerText = informationArray[gameCounter][1]
    document.getElementById("result").innerText = informationArray[gameCounter][2]
    document.getElementById("select").innerText = ""
    document.getElementById("select").style.visibility = "collapse"
}

