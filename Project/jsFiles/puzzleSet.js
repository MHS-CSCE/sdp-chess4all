const array0 = [["Brook", "", "Bbishop", "Bqueen", "Bking", "Bbishop", "", "Brook"], ["", "Bpawn", "Bpawn", "Bpawn", "", "", "", "Bpawn"], ["", "", "", "", "", "Bpawn", "", "Wqueen"], ["", "Bpawn", "", "Wknight", "", "", "", ""], ["", "", "", "", "Wpawn", "", "", ""], ["", "", "", "", "", "", "", ""], ["Wpawn", "Wpawn", "Wpawn", "", "", "Wpawn", "Wpawn", "Wpawn"], ["Wrook", "", "", "", "Wking", "", "", "Wrook"], "White"]

const array1 = [["", "", "", "", "", "", "", "Brook"], ["Bpawn", "", "", "", "", "Bking", "Bpawn", ""], ["", "Bbishop", "", "", "", "Bknight", "", ""], ["", "", "", "", "", "Wqueen", "Bpawn", ""], ["", "", "", "", "", "", "", ""], ["", "", "Wpawn", "", "", "", "", "Brook"], ["Wpawn", "Wpawn", "", "Wpawn", "Wpawn", "Wpawn", "", ""], ["Wrook", "", "Wbishop", "", "", "Wrook", "Wking", ""], "Black"]

const array2 = [["", "", "Wqueen", "", "", "", "", "", ""], ["", "", "", "", "", "", "Bpawn", ""], ["", "", "", "", "Bpawn", "", "", "Bking"], ["", "", "Wbishop", "", "", "", "", "Bpawn"], ["", "", "", "", "", "Wking", "", ""], ["", "", "", "", "", "Wpawn", "", ""], ["Wpawn", "", "", "", "", "", "", ""], ["", "", "", "", "Bqueen", "", "", ""], "Black"]

var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

puzzlearray = [array0, array1, array2]
answerarray = [["b608", "b508"], ["b601", "b602"], ["b202", "b402"]]

piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]

var counter = -1

document.getElementById("answer").style.visibility = "collapse"
document.getElementById("solution").style.visibility = "collapse"
document.getElementById("resetPuzzle").style.visibility = "hidden"
document.getElementById("showSolution").style.visibility = "hidden"

function flipBoard(flip) {
    if (flip == true) {
        turn = 1
        return turn
    }
    else {
        turn = 0
        return turn
    }
}

function insertPieces() {
    counter++
    document.getElementById("loadPuzzle").innerText = "Next Puzzle"
    if (counter !== puzzlearray.length) {
        if (puzzlearray[counter][8] == "White") {
            for (i = 0; i < 8; i++) {
                row = 10*(8-i)
                for (j = 0; j < 8; j++) {
                    piecearray[j] = puzzlearray[counter][i][j]
                    document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
                }
            }
            flip = false
        }
        else {
            for (i = 0; i < 8; i++) {
                row = 10*(i+1)
                for (j = 0; j < 8; j++) {
                    piecearray[j] = puzzlearray[counter][i][7-j]
                    document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
                }
            }
            flip = true
        }
        insertImage()
        document.getElementById("tog").innerHTML = puzzlearray[counter][8] + " to Move"
        document.getElementById("answer").innerHTML = ""
        document.getElementById("solution").innerHTML = ""
        document.getElementById("loadPuzzle").style.visibility = "hidden"
        document.getElementById("resetPuzzle").style.visibility = "hidden"
        document.getElementById("showSolution").style.visibility = "hidden"
        document.getElementById("showSolution").innerHTML = "Show Solution"
        pieceType = document.getElementById(answerarray[counter][0]).innerText
        pieceType2 = document.getElementById(answerarray[counter][1]).innerText
        unfreezePieces()
        setMove()
    }
    else {
        clearBoard()
        document.getElementById("tog").innerHTML = ""
        document.getElementById("answer").innerHTML = ""
        document.getElementById("solution").innerHTML = ""
        document.getElementById("loadPuzzle").style.visibility = "hidden"
        document.getElementById("resetPuzzle").style.visibility = "hidden"
        document.getElementById("showSolution").style.visibility = "hidden"
        document.getElementById("finish").innerHTML = "<br>You have completed <br> all the puzzles!"
    }   
}

function checkAnswer() {
    //console.log(answerarray[counter][0], answerarray[counter][1])
    console.log(document.getElementById(answerarray[counter][0]).innerText)
    console.log(document.getElementById(answerarray[counter][1]).innerText)
    //console.log(pieceType)
    if (document.getElementById(String(answerarray[counter][0])).innerText == "" && document.getElementById(String(answerarray[counter][1])).innerText == pieceType) {
        document.getElementById("answer").innerHTML = "Correct :)"
        document.getElementById("tog").innerHTML = ""
    }
    else {
        document.getElementById("answer").innerHTML = "Incorrect :("
        document.getElementById("tog").innerHTML = ""
    }
    document.getElementById("loadPuzzle").style.visibility = "visible"
    document.getElementById("showSolution").style.visibility = "visible"
    document.getElementById("resetPuzzle").style.visibility = "visible"       
    freeze()
}

function resetPieces() {
    //console.log(counter)
    if (puzzlearray[counter][8] == "White") {
        for (i = 0; i < 8; i++) {
            row = 10*(8-i)
            for (j = 0; j < 8; j++) {
                piecearray[j] = puzzlearray[counter][i][j]
                document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
            }
        }
        flip = false
    }
    else {
        for (i = 0; i < 8; i++) {
            row = 10*(i+1)
            for (j = 0; j < 8; j++) {
                piecearray[j] = puzzlearray[counter][i][7-j]
                document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
            }
        }
        flip = true
    }
    insertImage()
    document.getElementById("tog").innerHTML = puzzlearray[counter][8] + " to Move"
    document.getElementById("answer").innerHTML = ""
    document.getElementById("solution").innerHTML = ""
    document.getElementById("loadPuzzle").style.visibility = "hidden"
    document.getElementById("resetPuzzle").style.visibility = "hidden"
    document.getElementById("showSolution").style.visibility = "hidden"
    document.getElementById("showSolution").innerHTML = "Show Solution"
    //console.log(puzzlearray[counter][8])
    pieceType = document.getElementById(answerarray[counter][0]).innerText
    pieceType2 = document.getElementById(answerarray[counter][1]).innerText
    unfreezePieces()
    setMove()
}

function showSolution() {
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

    if (pieceType2 !== "") {
        pieceCaptureNotation = "x"
    }
    else {
        pieceCaptureNotation = ""
    }

    pieceLocation = answerarray[counter][1]
    locationArray = Array.from(pieceLocation)
    console.log(locationArray)

    pieceRow = locationArray[1]
    pieceColumn = locationArray[3]

    columnArray = ["a", "b", "c", "d", "e", "f", "g", "h"]

    if (puzzlearray[counter][8] == "White") {
        columnNotation = columnArray[Number(pieceColumn)-1]
        rowNotation = pieceRow
    }
    else {
        columnNotation = columnArray[8-Number(pieceColumn)]
        rowNotation = 9-pieceRow
    }

    completeNotation = pieceNotation + pieceCaptureNotation + String(columnNotation) + String(rowNotation)

    if (document.getElementById("showSolution").innerHTML == "Show Solution") {
        document.getElementById("solution").innerText = completeNotation
        document.getElementById("showSolution").innerHTML = "Hide Solution"
    }
    else {
        document.getElementById("solution").innerText = ""
        document.getElementById("showSolution").innerHTML = "Show Solution"
    }
}

function freeze() {
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "none"
        }
    }
}

function unfreeze() {
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "auto"
        }
    }
}

function unfreezePieces() {
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            if (document.getElementById("b" + String(row) + String(j+1)).innerText.length !== 0) {
                document.getElementById("b" + String(row) + String(j+1)).style.pointerEvents = "auto"
            }
        }
    }
}

function clearBoard() {
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            document.getElementById("b" + String(row) + String(j+1)).innerText = ""
        }
    }
}
