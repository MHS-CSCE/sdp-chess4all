const array0 = [["Brook", "Bknight", "Bbishop", "Bqueen", "Bking", "Bbishop", "Bknight", "Brook"], ["Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn"], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn"], ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wking", "Wbishop", "Wknight", "Wrook"], "White"]

const array1 = [["Brook", "Brook", "Brook", "Bqueen", "Bking", "Brook", "Brook", "Brook"], ["Brook", "Brook", "Brook", "Brook", "Brook", "Brook", "Brook", "Brook"], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["Wrook", "Wrook", "Wrook", "Wrook", "Wrook", "Wrook", "Wrook", "Wrook"], ["Wrook", "Wrook", "Wrook", "Wqueen", "Wking", "Wrook", "Wrook", "Wrook"], "Black"]

var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

puzzlearray = [array0, array1]
answerarray = [["b205", "b405"], ["b708", "b208"]]

piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]

var counter = -1

document.getElementById("answer").style.visibility = "collapse"
document.getElementById("solution").style.visibility = "collapse"

function insertPieces() {
    counter++
    console.log(counter)
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            piecearray[j] = puzzlearray[counter][i][j]
            document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
        }
    }
    insertImage()
    document.getElementById("tog").innerHTML = puzzlearray[counter][8] + " to Move"
    document.getElementById("answer").innerHTML = ""
    document.getElementById("solution").innerHTML = ""
    document.getElementById("loadPuzzle").style.visibility = "hidden"
    document.getElementById("resetPuzzle").style.visibility = "hidden"
    document.getElementById("showSolution").style.visibility = "hidden"
    pieceType = document.getElementById(answerarray[counter][0]).innerText
    pieceType2 = document.getElementById(answerarray[counter][1]).innerText
    unfreeze()
    setMove()
}

function checkAnswer() {
    console.log(answerarray[counter][0], answerarray[counter][1])
    console.log(document.getElementById(answerarray[counter][0]).innerText)
    console.log(document.getElementById(answerarray[counter][1]).innerText)
    console.log(pieceType)
    if (document.getElementById(String(answerarray[counter][0])).innerText == "" && document.getElementById(String(answerarray[counter][1])).innerText == pieceType) {
        document.getElementById("answer").innerHTML = "Correct :)"
        document.getElementById("tog").innerHTML = ""
    }
    else {
        document.getElementById("answer").innerHTML = "Incorrect :("
        document.getElementById("tog").innerHTML = ""
    }
    document.getElementById("loadPuzzle").style.visibility = "visible"
    document.getElementById("resetPuzzle").style.visibility = "visible"
    document.getElementById("showSolution").style.visibility = "visible"
    freeze()
}

function resetPieces() {
    console.log(counter)
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        for (j = 0; j < 8; j++) {
            piecearray[j] = puzzlearray[counter][i][j]
            document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
        }
    }
    insertImage()
    document.getElementById("tog").innerHTML = puzzlearray[counter][8] + " to Move"
    document.getElementById("answer").innerHTML = ""
    document.getElementById("solution").innerHTML = ""
    document.getElementById("loadPuzzle").style.visibility = "hidden"
    document.getElementById("resetPuzzle").style.visibility = "hidden"
    document.getElementById("showSolution").style.visibility = "hidden"
    console.log(puzzlearray[counter][8])
    pieceType = document.getElementById(answerarray[counter][0]).innerText
    pieceType2 = document.getElementById(answerarray[counter][1]).innerText
    unfreeze()
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

    columnNotation = columnArray[Number(pieceColumn)-1]
    console.log(columnNotation)
    rowNotation = pieceRow
    console.log(rowNotation)

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



//Completing Puzzle

/*if(document.getElementById("b205").innerText == "" && document.getElementById("b405").innerText == "Wpawn"){
    alert("correct");
}
else{
    alert("incorrect");
}
*/
