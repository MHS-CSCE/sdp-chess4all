//first puzzle
const array0 = [["Brook", "", "Bbishop", "Bqueen", "Bking", "Bbishop", "", "Brook"], ["", "Bpawn", "Bpawn", "Bpawn", "", "", "", "Bpawn"], ["", "", "", "", "", "Bpawn", "", "Wqueen"], ["", "Bpawn", "", "Wknight", "", "", "", ""], ["", "", "", "", "Wpawn", "", "", ""], ["", "", "", "", "", "", "", ""], ["Wpawn", "Wpawn", "Wpawn", "", "", "Wpawn", "Wpawn", "Wpawn"], ["Wrook", "", "", "", "Wking", "", "", "Wrook"], "White"]

//second puzzle
const array1 = [["", "", "", "", "", "", "", "Brook"], ["Bpawn", "", "", "", "", "Bking", "Bpawn", ""], ["", "Bbishop", "", "", "", "Bknight", "", ""], ["", "", "", "", "", "Wqueen", "Bpawn", ""], ["", "", "", "", "", "", "", ""], ["", "", "Wpawn", "", "", "", "", "Brook"], ["Wpawn", "Wpawn", "", "Wpawn", "Wpawn", "Wpawn", "", ""], ["Wrook", "", "Wbishop", "", "", "Wrook", "Wking", ""], "Black"]

//third puzzle
const array2 = [["", "", "Wqueen", "", "", "", "", "", ""], ["", "", "", "", "", "", "Bpawn", ""], ["", "", "", "", "Bpawn", "", "", "Bking"], ["", "", "Wbishop", "", "", "", "", "Bpawn"], ["", "", "", "", "", "Wking", "", ""], ["", "", "", "", "", "Wpawn", "", ""], ["Wpawn", "", "", "", "", "", "", ""], ["", "", "", "", "Bqueen", "", "", ""], "Black"]

//initializing variables to hold piece values when setting up the board
var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

//array to hold the puzzles
puzzlearray = [array0, array1, array2]
//array to hold the answers
answerarray = [["b608", "b508"], ["b601", "b602"], ["b202", "b402"]]
//array to hold all the pieces
piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]

//counter set at -1 before the first puzzle
var counter = -1

//setting visibility of buttons
document.getElementById("answer").style.visibility = "collapse"
document.getElementById("solution").style.visibility = "collapse"
document.getElementById("resetPuzzle").style.visibility = "hidden"
document.getElementById("showSolution").style.visibility = "hidden"

/**
 * function that determines which conditional to enter in the chess.js file depending on who's turn it is to move
 * @param {boolean} flip true if Black to move, false if White to move
 * @returns {integer} variable turn as 0 or 1, results in a change in the chess.js file
 */
function flipBoard(flip) {
    //conditionals to determine value of turn depending on if flip is true or false
    if (flip == true) {
        turn = 1
        return turn
    }
    else {
        turn = 0
        return turn
    }
}

/**
 * inserting pieces from the puzzle indicated in an array to their appropriate positions on the board
 */
function insertPieces() {
    //increasing the value of counter by 1
    counter++
    //changing the text from "Start Puzzles" to "Next Puzzle"
    document.getElementById("loadPuzzle").innerText = "Next Puzzle"
    //sets up board if not all puzzles are finished
    if (counter !== puzzlearray.length) {
        //sets up board from the White perspective
        if (puzzlearray[counter][8] == "White") {
            //loop to set up pieces for each individual square
            for (i = 0; i < 8; i++) {
                row = 10*(8-i)
                for (j = 0; j < 8; j++) {
                    piecearray[j] = puzzlearray[counter][i][j]
                    document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
                }
            }
            //setting flip for the flipBoard() function
            flip = false
        }
        //sets up board from the Black perspective
        else {
            //loop to set up pieces for each individual square
            for (i = 0; i < 8; i++) {
                row = 10*(i+1)
                for (j = 0; j < 8; j++) {
                    piecearray[j] = puzzlearray[counter][i][7-j]
                    document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
                }
            }
            //setting flip for the flipBoard() function
            flip = true
        }
        //displaying the new position of the pieces on the board
        insertImage()
        //hiding all the buttons on the screen while doing the puzzle
        document.getElementById("tog").innerHTML = puzzlearray[counter][8] + " to Move"
        document.getElementById("answer").innerHTML = ""
        document.getElementById("solution").innerHTML = ""
        document.getElementById("loadPuzzle").style.visibility = "hidden"
        document.getElementById("resetPuzzle").style.visibility = "hidden"
        document.getElementById("showSolution").style.visibility = "hidden"
        document.getElementById("showSolution").innerHTML = "Show Solution"
        //setting variables to hold the pieces and location for the answer
        pieceType = document.getElementById(answerarray[counter][0]).innerText
        pieceType2 = document.getElementById(answerarray[counter][1]).innerText
        //allowing the user to interact with the pieces on the board, but not the other squares
        unfreezePieces()
        //setting the move for the correct chess.js implementation
        setMove()
    }
    //clears board and shows ending screen if all puzzles are finished
    else {
        //removing all pieces from the board
        clearBoard()
        //removing all the buttons and showing the final text
        document.getElementById("tog").innerHTML = ""
        document.getElementById("answer").innerHTML = ""
        document.getElementById("solution").innerHTML = ""
        document.getElementById("loadPuzzle").style.visibility = "hidden"
        document.getElementById("resetPuzzle").style.visibility = "hidden"
        document.getElementById("showSolution").style.visibility = "hidden"
        document.getElementById("finish").innerHTML = "<br>You have completed <br> all the puzzles!"
    }   
}

/**
 * once the user makes a move, the function is called to check whether or not the correct answer to the puzzle was given
 */
function checkAnswer() {
    //determining if the original position of the piece is empty and the piece is in the new position
    if (document.getElementById(String(answerarray[counter][0])).innerText == "" && document.getElementById(String(answerarray[counter][1])).innerText == pieceType) {
        document.getElementById("answer").innerHTML = "Correct :)"
        document.getElementById("tog").innerHTML = ""
    }
    else {
        document.getElementById("answer").innerHTML = "Incorrect :("
        document.getElementById("tog").innerHTML = ""
    }
    //making the buttons visible
    document.getElementById("loadPuzzle").style.visibility = "visible"
    document.getElementById("showSolution").style.visibility = "visible"
    document.getElementById("resetPuzzle").style.visibility = "visible" 
    //freezing the pieces and the board so they can no longer be clicked      
    freeze()
}

/**
 * resetting the pieces to their initial pieces of the puzzle if the user wants to retry it
 */
function resetPieces() {
    //sets up board from the White perspective
    if (puzzlearray[counter][8] == "White") {
        //loop to set up pieces for each individual square
        for (i = 0; i < 8; i++) {
            row = 10*(8-i)
            for (j = 0; j < 8; j++) {
                piecearray[j] = puzzlearray[counter][i][j]
                document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
            }
        }
        //setting flip for the flipBoard() function
        flip = false
    }
    //sets up board from the Black perspective
    else {
        //loop to set up pieces for each individual square
        for (i = 0; i < 8; i++) {
            row = 10*(i+1)
            for (j = 0; j < 8; j++) {
                piecearray[j] = puzzlearray[counter][i][7-j]
                document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
            }
        }
        //setting flip for the flipBoard() function
        flip = true
    }
    //displaying the new position of the pieces on the board
    insertImage()
    //hiding all the buttons on the screen while doing the puzzle
    document.getElementById("tog").innerHTML = puzzlearray[counter][8] + " to Move"
    document.getElementById("answer").innerHTML = ""
    document.getElementById("solution").innerHTML = ""
    document.getElementById("loadPuzzle").style.visibility = "hidden"
    document.getElementById("resetPuzzle").style.visibility = "hidden"
    document.getElementById("showSolution").style.visibility = "hidden"
    document.getElementById("showSolution").innerHTML = "Show Solution"
    //setting variables to hold the pieces and location for the answer
    pieceType = document.getElementById(answerarray[counter][0]).innerText
    pieceType2 = document.getElementById(answerarray[counter][1]).innerText
    //allowing the user to interact with the pieces on the board, but not the other squares
    unfreezePieces()
    //setting the move for the correct chess.js implementation
    setMove()
}

/**
 * if the user clicks the "Show Solution" button, the function is called to determine the notation of the correct answer and output it on the screen
 */
function showSolution() {
    //casework to determine what letter comes at the start of the notation depending on the piece
    if (pieceType == "Wpawn" || pieceType == "Bpawn") {
        pieceNotation = ""
    }
    else if (pieceType == "Wknight" || pieceType == "Bknight") {
        pieceNotation = "N"
    }
    else if (pieceType == "Wbishop" || pieceType == "Bbishop") {
        pieceNotation = "B"
    }
    else if (pieceType == "Wrook" || pieceType == "Brook") {
        pieceNotation = "R"
    }
    else if (pieceType == "Wqueen" || pieceType == "Bqueen") {
        pieceNotation = "Q"
    }
    else {
        pieceNotation = "K"
    }

    //determining if an "x" is needed depending on if a piece was captured or not
    if (pieceType2 !== "") {
        pieceCaptureNotation = "x"
    }
    else {
        pieceCaptureNotation = ""
    }

    //determining the final landing location of the piece
    pieceLocation = answerarray[counter][1]
    //creating an array from the location 
    locationArray = Array.from(pieceLocation)
    //obtaining the row of the piece location
    pieceRow = locationArray[1]
    //obtaining the column of the piece location
    pieceColumn = locationArray[3]

    //generating an array to match column values
    columnArray = ["a", "b", "c", "d", "e", "f", "g", "h"]

    //determining the row and column values depending on whether or not the board is flipped
    if (puzzlearray[counter][8] == "White") {
        columnNotation = columnArray[Number(pieceColumn)-1]
        rowNotation = pieceRow
    }
    else {
        columnNotation = columnArray[8-Number(pieceColumn)]
        rowNotation = 9-pieceRow
    }

    //creating the complete notation based on the values obtained
    completeNotation = pieceNotation + pieceCaptureNotation + String(columnNotation) + String(rowNotation)

    //displaying the solution and editing the button text between show/hide
    if (document.getElementById("showSolution").innerHTML == "Show Solution") {
        document.getElementById("solution").innerText = completeNotation
        document.getElementById("showSolution").innerHTML = "Hide Solution"
    }
    else {
        document.getElementById("solution").innerText = ""
        document.getElementById("showSolution").innerHTML = "Show Solution"
    }
}

/**
 * freezes the entire board and pieces to become non-clickable
 */
function freeze() {
    //loop to freeze each individual square one by one
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "none"
        }
    }
}

/**
 * unfreezes the entire board and pieces to become clickable
 */
function unfreeze() {
    //loop to unfreeze each individual square one by one
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "auto"
        }
    }
}

/**
 * unfreezes the pieces but not the board
 */
function unfreezePieces() {
    //loop that goes through all the squares and unfreezes the ones that have pieces
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            if (document.getElementById("b" + String(row) + String(j+1)).innerText.length !== 0) {
                document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "auto"
            }
        }
    }
}

/**
 * removes all the pieces on the board
 */
function clearBoard() {
    //loop that deletes all the inner text of each square
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).innerText = ""
        }
    }
}
