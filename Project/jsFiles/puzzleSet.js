const array = [["Brook", "Bknight", "Bbishop", "Bqueen", "Bking", "Bbishop", "Bknight", "Brook"], ["Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn", "Bpawn"], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn", "Wpawn"], ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wking", "Wbishop", "Wknight", "Wrook"]]

var piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8

piecearray = [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8]

for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        piecearray[j] = array[i][j]
    }
    insertPieces(i, piecearray)
}

function insertPieces(i) {
    row = 100 * (8 - i)
    for (x = 0; x < 8; x++) {
        document.getElementById("b" + row + x).innerHTML = piecearray[x]
    }
}

