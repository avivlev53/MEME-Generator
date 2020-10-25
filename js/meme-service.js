'use strict'

const gImgs = []
const gNumOfPics = 18



const gMeme = {
    selectedImgId: 0,
    switchLines: 0,
    lines: [
        {
            txt: '',
            size: 60,
            align: 'left',
            locationX: 50,
            color: 'white',
            heightY: 70
        },
        {
            txt: '',
            size: 60,
            align: 'left',
            locationX: 50,
            color: 'white',
            heightY: 450
        },
        {
            txt: '',
            size: 60,
            align: 'left',
            locationX: 50,
            color: 'white',
            heightY: 250
        }
    ]
}
var gLine = 0


function getIdIndx(id) {
    gMeme.selectedImgId = id
}


function changeFontSize(sign) {
    if (sign === '+') {
        if (gMeme.lines[gLine].size >= 100) return
        gMeme.lines[gLine].size += 10
    } else if (sign === '-') {
        if (gMeme.lines[gLine].size <= 20) return
        gMeme.lines[gLine].size -= 10
    }
}

function changeheight(sign) {
    if (sign === '+') {
        if (gMeme.lines[gLine].heightY >= 450) return
        gMeme.lines[gLine].heightY += 10
    } else if (sign === '-') {
        if (gMeme.lines[gLine].heightY <= 40) return
        gMeme.lines[gLine].heightY -= 10
    }

}
function changeLines() {
    gLine++
    if (gLine>=gMeme.lines.length) gLine=0
    document.getElementById('memeTxt').value = gMeme.lines[gLine].txt
}

function deleteLine() {
    document.getElementById('memeTxt').value = ''
    gMeme.lines[gLine].txt = ' '
}

function changeAlignment(alignment) {
    // drawImg(gMeme.selectedImgId)
    var offsetX
    if (alignment === 'left') offsetX = 50
    else if (alignment === 'center') offsetX = 200
    else if (alignment === 'right') offsetX = 450
    for (let i = 0; i < gMeme.lines.length; i++) {
        gMeme.lines[i].locationX = offsetX
        gMeme.lines[i].align = alignment
    }
}

function createPics() {
    for (let i = 1; i <= gNumOfPics; i++) {
        gImgs.push(_createPic(i))
    }
}

function _createPic(id) {
    let img = {
        id,
        url: `img/${id}.jpg`
    }
    return img
}