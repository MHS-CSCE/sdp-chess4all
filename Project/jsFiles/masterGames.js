//freezing the entire board (no user interaction needed for master games)
freeze()

//setting icons for the buttons to navigate through the games
document.getElementById("first").innerHTML = "<<"
document.getElementById("previous").innerHTML = "<"
document.getElementById("next").innerHTML = ">"
document.getElementById("last").innerHTML = ">>"

//first game information + notation
const game1 = [["b205", "b405"], ["b704", "b604"], ["b204", "b404"], ["b807", "b606"], ["b102", "b303"], ["b707", "b607"], ["b103", "b305"], ["b806", "b707"], ["b104", "b204"], ["b703", "b603"], ["b206", "b306"], ["b702", "b502"], ["b107", "b205"], ["b802", "b704"], ["b305", "b608"], ["b707", "b608"], ["b204", "b608"], ["b803", "b702"], ["b201", "b301"], ["b705", "b505"], ["b105", "b103"], ["b804", "b705"], ["b103", "b102"], ["b701", "b601"], ["b205", "b103"], ["b805", "b803"], ["b103", "b302"], ["b505", "b404"], ["b104", "b404"], ["b603", "b503"], ["b404", "b104"], ["b704", "b602"], ["b207", "b307"], ["b803", "b802"], ["b302", "b501"], ["b702", "b801"], ["b106", "b308"], ["b604", "b504"], ["b608", "b406"], ["b802", "b701"], ["b108", "b105"], ["b504", "b404"], ["b303", "b504"], ["b602", "b504"], ["b405", "b504"], ["b705", "b604"], ["b104", "b404"], ["b503", "b404"], ["b105", "b705"], ["b701", "b602"], ["b406", "b404"], ["b602", "b501"], ["b202", "b402"], ["b501", "b401"], ["b404", "b303"], ["b604", "b504"], ["b705", "b701"], ["b801", "b702"], ["b701", "b702"], ["b504", "b403"], ["b303", "b606"], ["b401", "b301"], ["b606", "b601"], ["b301", "b402"], ["b203", "b303"], ["b402", "b303"], ["b601", "b101"], ["b303", "b204"], ["b101", "b202"], ["b204", "b104"], ["b308", "b106"], ["b804", "b204"], ["b702", "b704"], ["b204", "b704"], ["b106", "b403"], ["b502", "b403"], ["b202", "b808"], ["b704", "b304"], ["b808", "b801"], ["b403", "b303"], ["b801", "b401"], ["b104", "b105"], ["b306", "b406"], ["b706", "b506"], ["b102", "b103"], ["b304", "b204"], ["b401", "b701"]]
const information1 = [["Kasparov, Garry - Topalov, Veselin"], ["1999, Wijk ann Zee / Netherlands"], ["1-0"], ["White Won by Resignation"]]

//second game information + notation
const game2 = [["b205", "b405"], ["b703", "b503"], ["b107", "b306"], ["b705", "b605"], ["b204", "b404"], ["b503", "b404"], ["b306", "b404"], ["b802", "b603"], ["b404", "b502"], ["b704", "b604"], ["b203", "b403"], ["b807", "b606"], ["b102", "b303"], ["b701", "b601"], ["b502", "b301"], ["b604", "b504"], ["b403", "b504"], ["b605", "b504"], ["b405", "b504"], ["b603", "b402"], ["b106", "b205"], ["b806", "b503"], ["b105", "b107"], ["b805", "b807"], ["b205", "b306"], ["b803", "b506"], ["b103", "b507"], ["b806", "b805"], ["b104", "b204"], ["b702", "b502"], ["b101", "b104"], ["b402", "b304"], ["b301", "b102"], ["b708", "b608"], ["b507", "b408"], ["b502", "b402"], ["b303", "b401"], ["b503", "b604"], ["b408", "b307"], ["b801", "b803"], ["b202", "b302"], ["b707", "b507"], ["b307", "b604"], ["b804", "b604"], ["b207", "b307"], ["b606", "b704"], ["b306", "b207"], ["b604", "b606"], ["b201", "b301"], ["b601", "b501"], ["b301", "b402"], ["b501", "b402"], ["b204", "b201"], ["b506", "b607"], ["b504", "b604"], ["b507", "b407"], ["b201", "b204"], ["b807", "b707"], ["b206", "b306"], ["b606", "b604"], ["b306", "b407"], ["b604", "b404"], ["b107", "b108"], ["b704", "b606"], ["b106", "b406"], ["b606", "b405"], ["b204", "b304"], ["b405", "b206"], ["b406", "b206"], ["b607", "b304"], ["b206", "b204"], ["b404", "b305"], ["b204", "b304"], ["b803", "b103"], ["b401", "b202"], ["b305", "b206"], ["b102", "b204"], ["b103", "b104"], ["b202", "b104"], ["b805", "b105"]]
const information2 = [["Karpov, Anatoly - Kasparov, Garry"], ["1985, Moscow / Russia"], ["0-1"], ["Black won by Resignation"]]

//third game information + notation
const game3 = [["b205", "b405"], ["b705", "b505"], ["b107", "b306"], ["b704", "b604"], ["b204", "b404"], ["b803", "b407"], ["b404", "b505"], ["b407", "b306"], ["b104", "b306"], ["b604", "b505"], ["b106", "b403"], ["b807", "b606"], ["b306", "b302"], ["b804", "b705"], ["b102", "b303"], ["b703", "b603"], ["b103", "b507"], ["b702", "b502"], ["b303", "b502"], ["b603", "b502"], ["b403", "b502"], ["b802", "b704"], ["b105", "b103"], ["b801", "b804"], ["b104", "b704"], ["b804", "b704"], ["b108", "b104"], ["b705", "b605"], ["b502", "b704"], ["b606", "b704"], ["b302", "b802"], ["b704","b802"], ["b104", "b804"]]
const information3 = [["Morphy, Paul - Duke Carl / Count Isouard"], ["1858, Paris / France"], ["1-0"], ["White Won by Checkmate"]]

//moveCounter set at 0 for initial position
moveCounter = 0
//gameCounter set at -1 to disable buttons at the start (before a game is selected)
gameCounter = -1
//initializing variables to hold piece values when setting up the board
var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

//array to hold all the games
const gameArray = [game1, game2, game3]
//array to hold all the information
const informationArray = [information1, information2, information3]
//array to hold all the pieces
piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]
//array to store which pieces have been captured throughout the game
capturedPieces = []
//inserting text values for the games into the dropdown select menu
loadGames()

/**
 * freezes all the pieces such that the user cannot click them
 */
function freeze() {
    //going through each board square at a time to remove pointer events
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "none"
        }
    }
}

/**
 * when the ">" button is clicked, the function is evoked, which reads the next array in the game and moves the piece to the corresponding square
 */
function nextMove() {
    //checking to see if it is not the last move
    if (moveCounter !== gameArray[gameCounter].length) {
        //retrieving the piece that is being moved
        pieceType = document.getElementById(gameArray[gameCounter][moveCounter][0]).innerText
        //retrieving the piece that is being captured (if it exists)
        pieceType2 = document.getElementById(gameArray[gameCounter][moveCounter][1]).innerText
        //adding the captured piece to the array of captured pieces
        capturedPieces.push(pieceType2)
        //casework for castling (if the king moved from certain squares, then it must be castling --> rook must also be moved)
        if (pieceType == "Wking" && gameArray[gameCounter][moveCounter][0] == "b105") {
            //white kingside castling
            if (gameArray[gameCounter][moveCounter][1] == "b107") {
                document.getElementById("b107").innerText = "Wking"
                document.getElementById("b105").innerText = ""
                document.getElementById("b108").innerText = ""
                document.getElementById("b106").innerText = "Wrook"
            }
            //white queenside castling
            else if (gameArray[gameCounter][moveCounter][1] == "b103") {
                document.getElementById("b103").innerText = "Wking"
                document.getElementById("b105").innerText = ""
                document.getElementById("b101").innerText = ""
                document.getElementById("b104").innerText = "Wrook"
            }
        }
        else if (pieceType == "Bking" && gameArray[gameCounter][moveCounter][0] == "b805") {
            //black kingside castling
            if (gameArray[gameCounter][moveCounter][1] == "b807") {
                document.getElementById("b807").innerText = "Bking"
                document.getElementById("b805").innerText = ""
                document.getElementById("b808").innerText = ""
                document.getElementById("b806").innerText = "Brook"
            }
            //black queenside castling
            else if (gameArray[gameCounter][moveCounter][1] == "b803") {
                document.getElementById("b803").innerText = "Bking"
                document.getElementById("b805").innerText = ""
                document.getElementById("b801").innerText = ""
                document.getElementById("b804").innerText = "Brook"
            }
        }
        //moving the piece to the corresponding position
        else {
            document.getElementById(gameArray[gameCounter][moveCounter][1]).innerText = pieceType
            document.getElementById(gameArray[gameCounter][moveCounter][0]).innerText = ""
        }
        //if this move is the last move of the game, display the conclusion of the game
        if (moveCounter + 1 == gameArray[gameCounter].length) {
            document.getElementById("conclusion").innerText = informationArray[gameCounter][3]
        }
        //displaying the new position of the pieces on the board
        insertImage()
        //increasing the move number by 1
        moveCounter++
    }
}

/**
 * when the "<" button is clicked, the function is evoked, which reads the previous array in the game and moves the piece back to the original square
 * if a piece was captured on the previous turn, it also returns the captured piece to where it was one move ago
 */
function previousMove() {
    //checking to see that it is not the first move
    if (moveCounter !== 0) {
        //retrieving the piece that was moved the previous move
        pieceType = document.getElementById(gameArray[gameCounter][moveCounter-1][1]).innerText
        //retrieving the piece (if applicable) that was captured the previous move
        pieceType2 = capturedPieces[moveCounter-1]
        //casework for if castling occurred on the previous move
        if (pieceType == "Wking" && gameArray[gameCounter][moveCounter-1][0] == "b105") {
            //white kingside castling
            if (gameArray[gameCounter][moveCounter-1][1] == "b107") {
                document.getElementById("b107").innerText = ""
                document.getElementById("b105").innerText = "Wking"
                document.getElementById("b108").innerText = "Wrook"
                document.getElementById("b106").innerText = ""
            }
            //white queenside castling
            else if (gameArray[gameCounter][moveCounter-1][1] == "b103") {
                document.getElementById("b103").innerText = ""
                document.getElementById("b105").innerText = "Wking"
                document.getElementById("b101").innerText = "Wrook"
                document.getElementById("b104").innerText = ""
            }
        }
        else if (pieceType == "Bking" && gameArray[gameCounter][moveCounter-1][0] == "b805") {
            //black kingside castling
            if (gameArray[gameCounter][moveCounter-1][1] == "b807") {
                document.getElementById("b807").innerText = ""
                document.getElementById("b805").innerText = "Bking"
                document.getElementById("b808").innerText = "Brook"
                document.getElementById("b806").innerText = ""
            }
            //black queenside castling
            else if (gameArray[gameCounter][moveCounter-1][1] == "b803") {
                document.getElementById("b803").innerText = ""
                document.getElementById("b805").innerText = "Bking"
                document.getElementById("b801").innerText = "Brook"
                document.getElementById("b804").innerText = ""
            }
        }
        //moving the piece back to where it was the previous move
        else {
            document.getElementById(gameArray[gameCounter][moveCounter-1][0]).innerText = pieceType
            document.getElementById(gameArray[gameCounter][moveCounter-1][1]).innerText = pieceType2
        }
        //if it just moved back from the last move of the game, remove the game conclusion
        if (moveCounter == gameArray[gameCounter].length - 1) {
            document.getElementById("conclusion").innerText = ""
        }
        //displaying the new position of the pieces on the board
        insertImage()
        //decreasing the move number by 1
        moveCounter--
        //removing the last captured piece from the array
        capturedPieces.pop()
    }
}

/**
 * when the "<<" button is clicked, the function is evoked, which returns all the pieces to their original squares
 */
function firstMove() {
    //if it is not the first move of the game, call the previousMove() function continuously until it reaches the first move
    if (moveCounter !== 0) {
        for (i = moveCounter; i > 0; i--) {
            previousMove()
        }
    }
    //removing the game conclusion text
    document.getElementById("conclusion").innerText = ""
}

/**
 * when the ">>" button is clicked, the function is evoked, which moves all the pieces to the final position of the game
 */
function lastMove() {
    //if it is not the last move of the game, call the nextMove() function continuously until it reaches the last move
    if (moveCounter !== gameArray[gameCounter].length) {
        for (i = moveCounter; i < gameArray[gameCounter].length; i++) {
            nextMove()
        }
    }
    //displaying the conclusion of the game
    document.getElementById("conclusion").innerText = informationArray[gameCounter][3]
}

/**
 * inserts the names of players into the dropdown menu that can be selected by the user
 */
function loadGames() {
    //retrieves each information piece from the array and inputs it into the corresponding spot in the html dropdown menu
    for (i = 1; i < gameArray.length + 1; i++) {
        document.getElementById("Game" + String(i)).innerText = informationArray[i-1][0]
    }
}

//creates a variable for the list in the dropdown menu
var gameSelection = document.getElementById("gameList")
//adding an event listener to the game selection menu to determine when it switches from one game to another, and it calls the selectGame() function when it occurs
gameSelection.addEventListener("change", selectGame)

/**
 * when the user selects a game (or changes games), the function is evoked, which resets and changes all the values of the game
 */
function selectGame() {
    //resets the board
    firstMove()
    //resetting the move counter
    moveCounter = 0
    //setting the game counter to the new game
    gameCounter = gameSelection.value - 1
    //resetting the captured pieces array
    capturedPieces = []
    //setting the new game details if a game was selected
    if (gameCounter !== -1) {
        document.getElementById("players").innerText = informationArray[gameCounter][0]
        document.getElementById("details").innerText = informationArray[gameCounter][1]
        document.getElementById("result").innerText = informationArray[gameCounter][2]
        document.getElementById("select").innerText = ""
    }
    //removing all the information if no game was selected
    else {
        document.getElementById("players").innerText = ""
        document.getElementById("details").innerText = ""
        document.getElementById("result").innerText = ""
        document.getElementById("select").innerText = "Select Game"
    }
}
