'use strict'

const gImgs = []
const gNumOfPics = 18


var gCanvas;
var gCtx;
const gMeme = {
    selectedImgId: 0,
    selectedLineIndx: 0,
    switchLines: 0,
    lines: [
        {
            txt: '',
            size: 60,
            align: 'left',
            color: 'white',
            heightY: 70
        },
        {
            txt: '',
            size: 60,
            align: 'left',
            color: 'white',
            heightY: 450
        },
        {
            txt: '',
            size: 60,
            align: 'left',
            color: 'white',
            heightY: 250
        }
    ]
}
var gLine = 0

function drawImg(num) {
    var img = new Image()
    img.src = `./img/${num}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        writingCan()
    }
}
function drawOnCanvas(id) {
    gMeme.selectedImgId = id

}

function drawText(text, x, y) {
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[gLine].color
    gCtx.lineWidth = '2'
    gCtx.font = `${gMeme.lines[gLine].size}px impact`
    gCtx.textAlign = `${gMeme.lines[gLine].align}`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

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

function upDown(sign) {
    if (sign === '+') {
        if (gMeme.lines[gLine].heightY >= 450) return
        gMeme.lines[gLine].heightY += 10
    } else if (sign === '-') {
        if (gMeme.lines[gLine].heightY <= 40) return
        gMeme.lines[gLine].heightY -= 10
    }

}
function changeLines() {
    if(gLine===0){
        gLine===2
    }
    gLine--
    console.log('LINE num:',gLine)
    drawText(gMeme.lines[gLine].txt, 50, gMeme.lines[gLine].heightY)
    document.getElementById('memeTxt').value = ''
    drawImg(gMeme.selectedImgId)
    
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