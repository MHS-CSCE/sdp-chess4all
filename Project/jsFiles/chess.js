/**
 * this function comes from https://github.com/jahid28/Games/tree/main/CHESS and displays the pieces on the board
 */
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
                image.innerHTML = `${image.innerText} <img class='allimg' src="../images/pieceIcons/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
        }
    })
}
insertImage()

/**
 * this function comes from https://github.com/jahid28/Games/tree/main/CHESS and colors each square in the background on the chess board
 */
function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            //modified colors to suit our website styling (and throughout this js file)
            color.style.backgroundColor = 'rgb(122, 157, 178)';
        }
        if (a % 2 !== 0) {
            //modified colors to suit our website styling (and throughout this js file)
            color.style.backgroundColor = 'rgb(217, 228, 232)';
        }
    })
}
coloring()

/**
 * this function comes from https://github.com/jahid28/Games/tree/main/CHESS and prevents one side to capture their own pieces
 */
function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'rgb(155, 222, 237)') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'rgb(182, 192, 197)' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(100, 75, 43)'
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 150)'
                    }
                }
            })
        }
    })
}

//setting original side to move
tog = 1
//setting value of flip for puzzle function
flip = false

/**
 * a large part of this function comes from https://github.com/jahid28/Games/tree/main/CHESS (aside from the extra conditions, modified colors, flip variable, and additional code for flipping the board) and is used to highlight the paths for all the pieces
 * @param {string} toggle either W or B, representing White or Black to move
 * @param {integer} a location of the piece
 * @param {integer} aup row number of the piece multiplied by 100
 * @param {integer} aside column number of the piece
 * @param {object} item clicked piece
 * @param {integer} flip either 0 or 1 depending on if it is from White or Black's perspective
 */
function whosTurn(toggle, a, aup, aside, item, flip) {

    //setting paths for the pawn
    if (flip == 0) {
        //setting possible paths for White to move
        if (item.innerText == `${toggle}pawn`) {
            item.style.backgroundColor = 'rgb(155, 222, 237)'

            if (tog % 2 !== 0 && aup < 800) {

                if (aup == 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    if (aup == 200 && document.getElementById(`b${a + 200}`).innerText.length == 0) {
                        document.getElementById(`b${a + 200}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    }
                }

                if (aup !== 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                }

                if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
                }

                if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'

                }
            }

            if (tog % 2 == 0 && aup > 100) {

                if (aup == 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    if (aup == 700 && document.getElementById(`b${a - 200}`).innerText.length == 0) {
                        document.getElementById(`b${a - 200}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    }
                }

                if (aup !== 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                }
                if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
                }
                if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
                }
            }
        }
    }
    else {
        //setting possible paths for Black to move
        if (item.innerText == `${toggle}pawn`) {
            item.style.backgroundColor = 'rgb(155, 222, 237)'

            if (tog % 2 !== 0 && aup < 800) {

                    if (aup == 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                        if (aup == 700 && document.getElementById(`b${a - 200}`).innerText.length == 0) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'rgb(182, 192, 197)'
                        }
                    }

                    if (aup !== 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'

                }
            }

            if (tog % 2 == 0 && aup > 100) {

                    if (aup == 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                        if (aup == 200 && document.getElementById(`b${a + 200}`).innerText.length == 0) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'rgb(182, 192, 197)'
                        }
                    }

                    if (aup !== 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    }

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
                }
            }
        }
    }

    //setting paths for the king

    if (item.innerText == `${toggle}king`) {

        if (aside < 8) {
            document.getElementById(`b${a + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'

        }
        if (aside > 1) {

            document.getElementById(`b${a - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aup < 800) {

            document.getElementById(`b${a + 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aup > 100) {

            document.getElementById(`b${a - 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }

        if (aup > 100 && aside < 8) {

            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aup > 100 && aside > 1) {

            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aup < 800 && aside < 8) {

            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aup < 800 && aside > 1) {

            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }

        if(whiteCastleChance==true && a==105 && document.getElementById('b106').innerText== '' && document.getElementById('b107').innerText== '' && document.getElementById('b108').innerText== 'Wrook'){
            document.getElementById(`b107`).style.backgroundColor = 'aqua'

        }
        if(whiteCastleChance==true && a==105 && document.getElementById('b104').innerText== '' && document.getElementById('b103').innerText== '' && document.getElementById('b102').innerText== '' && document.getElementById('b101').innerText== 'Wrook'){
            document.getElementById(`b103`).style.backgroundColor = 'aqua'

        }
        if(blackCastleChance==true && a==805 && document.getElementById('b806').innerText== '' && document.getElementById('b807').innerText== '' && document.getElementById('b808').innerText== 'Brook'){
            document.getElementById(`b807`).style.backgroundColor = 'aqua'

        }
        if(blackCastleChance==true && a==805 && document.getElementById('b804').innerText== '' && document.getElementById('b803').innerText== '' && document.getElementById('b802').innerText== '' && document.getElementById('b801').innerText== 'Brook'){
            document.getElementById(`b803`).style.backgroundColor = 'aqua'

        }

        item.style.backgroundColor = 'rgb(155, 222, 237)'
    }

    //setting paths for the rook

    if (item.innerText == `${toggle}rook`) {

        for (let i = 1; i < 9; i++) {

            if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {

            if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {

            if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                document.getElementById(`b${a + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                document.getElementById(`b${a + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {

            if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                document.getElementById(`b${a - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                document.getElementById(`b${a - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        item.style.backgroundColor = 'rgb(155, 222, 237)'
    }

    //setting paths for the bishop

    if (item.innerText == `${toggle}bishop`) {

        for (let i = 1; i < 9; i++) {
            if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {
            if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {
            if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }

        }

        for (let i = 1; i < 9; i++) {
            if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        item.style.backgroundColor = 'rgb(155, 222, 237)'
    }

    //setting paths for the queen

    if (item.innerText == `${toggle}queen`) {

        for (let i = 1; i < 9; i++) {

            if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {

            if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {

            if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                document.getElementById(`b${a + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                document.getElementById(`b${a + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {

            if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                document.getElementById(`b${a - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                document.getElementById(`b${a - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {
            if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {
            if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        for (let i = 1; i < 9; i++) {
            if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }

        }

        for (let i = 1; i < 9; i++) {
            if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
            }
            else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'rgb(182, 192, 197)'
                break
            }
        }

        item.style.backgroundColor = 'rgb(155, 222, 237)'
    }

    //setting paths for the knight

    if (item.innerText == `${toggle}knight`) {

        if (aside < 7 && aup < 800) {
            document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aside < 7 && aup > 200) {
            document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aside < 8 && aup < 700) {
            document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aside > 1 && aup < 700) {
            document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aside > 2 && aup < 800) {
            document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aside > 2 && aup > 100) {
            document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aside < 8 && aup > 200) {
            document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }
        if (aside > 1 && aup > 200) {
            document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'rgb(182, 192, 197)'
        }

        item.style.backgroundColor = 'rgb(155, 222, 237)'
    }
}

/**
 * sets the board to be White or Black to move depending on the text on the screen
 */
function setMove() {
    if (document.getElementById("tog").innerText == "White to Move") {
        tog = 1
    }
    if (document.getElementById("tog").innerText == "Black to Move") {
        tog = 0
    }
}

/**
 * this query selector comes from https://github.com/jahid28/Games/tree/main/CHESS and colors the potential squares for the piece
 */
document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {
        //allow the pieces to move to a location
        unfreeze()
    
        //to delete the opposite element
        if (item.style.backgroundColor == 'rgb(182, 192, 197)' && item.innerText.length == 0) {
            tog = tog + 1
        }
        else if (item.style.backgroundColor == 'aqua' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'rgb(182, 192, 197)' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'rgb(155, 222, 237)') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1

                }
            })
        }

        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup
        turn = flipBoard(flip)

        //setting whose turn it is
        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White to Move"
            whosTurn("W", a, aup, aside, item, turn)
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Black to Move"
            whosTurn("B", a, aup, aside, item, turn)
        }

        setMove()
        reddish()
    })
})

/**
 * this query selector comes from https://github.com/jahid28/Games/tree/main/CHESS and moves the pieces from one square to another
 */
document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {

        if (item.style.backgroundColor == 'rgb(155, 222, 237)') {
            turn = document.getElementById("tog").innerText

            pinkId = item.id
            pinkText = item.innerText

            document.querySelectorAll('.box').forEach(item2 => {
                item2.addEventListener('click', function () {
                getId = item2.id
                arr = Array.from(getId)
                arr.shift()
                aside = eval(arr.pop())
                arr.push('0')
                column = aside
                aup = eval(arr.join(''))
                value = aup + column

                if (item2.style.backgroundColor == 'rgb(182, 192, 197)') {
                    if (pinkText == `Wpawn` && aup == 800) {
                        document.getElementById("b" + String(value)).innerText = 'Wqueen'
                        document.getElementById(pinkId).innerText = ''
                        coloring()
                        insertImage()
                    }
                    else if (pinkText == `Bpawn` && aup == 100) {

                        document.getElementById(`b${a}`).innerText = 'Bqueen'
                        document.getElementById(pinkId).innerText = ''
                        coloring()
                        insertImage()
                    }
                    else {
                        document.getElementById(pinkId).innerText = ''
                        item2.innerText = pinkText
                        coloring()
                        insertImage()
                    }

                }

                else if (item2.style.backgroundColor == 'aqua') {
                    if(item2.id=='b103'){
                        document.getElementById('b101').innerText = ''
                        document.getElementById('b102').innerText = ''
                        document.getElementById('b103').innerText = 'Wking'
                        document.getElementById('b104').innerText = 'Wrook'
                        document.getElementById('b105').innerText = ''
                        document.getElementById(pinkId).innerText = ''
                        whiteCastleChance=false
                        coloring()
                        insertImage()
                    }
                    else if(item2.id=='b107'){
                        document.getElementById('b105').innerText = ''
                        document.getElementById('b106').innerText = 'Wrook'
                        document.getElementById('b107').innerText = 'Wking'
                        document.getElementById('b108').innerText = ''
                        document.getElementById(pinkId).innerText = ''
                        whiteCastleChance=false
                        coloring()
                        insertImage()
                    }
                    else if(item2.id=='b803'){
                        document.getElementById('b801').innerText = ''
                        document.getElementById('b802').innerText = ''
                        document.getElementById('b803').innerText = 'Bking'
                        document.getElementById('b804').innerText = 'Brook'
                        document.getElementById('b805').innerText = ''
                        document.getElementById(pinkId).innerText = ''
                        blackCastleChance=false
                        coloring()
                        insertImage()
                    }
                    else if(item2.id=='b807'){
                        document.getElementById('b805').innerText = ''
                        document.getElementById('b806').innerText = 'Brook'
                        document.getElementById('b807').innerText = 'Bking'
                        document.getElementById('b808').innerText = ''
                        document.getElementById(pinkId).innerText = ''
                        blackCastleChance=false
                        coloring()
                        insertImage()
                    }
                }

                if (turn != document.getElementById("tog").innerText) {
                    checkAnswer()
                }

                })
            })
        }
    })
})

z = 0
/**
 * this query selector comes from https://github.com/jahid28/Games/tree/main/CHESS and prevents the user from selecting multiple pieces
 */
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'rgb(182, 192, 197)' && ee.style.backgroundColor !== 'aqua') {
            coloring()
        }
    })
})
