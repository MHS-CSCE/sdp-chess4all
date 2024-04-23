const array0 = [["Brook", "Bknight", "Bbishop", "Bqueen", "Bking", "Bbishop", "Bknight", "Brook"], ["Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn"], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn"], ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wking", "Wbishop", "Wknight", "Wrook"]]

const array1 = [["Brook", "Brook", "Brook", "Bqueen", "Bking", "Brook", "Brook", "Brook"], ["Brook", "Brook", "Brook", "Brook", "Brook", "Brook", "Brook", "Brook"], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["Wrook", "Wrook", "Wrook", "Wrook", "Wrook", "Wrook", "Wrook", "Wrook"], ["Wrook", "Wrook", "Wrook", "Wqueen", "Wking", "Wrook", "Wrook", "Wrook"]]

var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

puzzlearray = [array0, array1]
piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]

var counter = 0

function insertPieces() {
    console.log(counter)
    for (i = 0; i < 8; i++) {
        row = 10*(8-i)
        console.log(row)
        for (j = 0; j < 8; j++) {
            piecearray[j] = puzzlearray[counter][i][j]
            console.log(piecearray[j])
            document.getElementById("b" + String(row) + String(j+1)).innerHTML = piecearray[j]
            console.log("b" + String(row) + String(j+1))
        }
    }
    insertImage()
    counter++
}

//Completing Puzzle


/*if(document.getElementById("b205").innerText == "" && document.getElementById("b405").innerText == "Wpawn"){
    alert("correct");
}
else{
    alert("incorrect");
}
*/
