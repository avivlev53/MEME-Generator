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
            locationX:50,
            color: 'white',
            heightY: 70
        },
        {
            txt: '',
            size: 60,
            align: 'left',
            locationX:50,
            color: 'white',
            heightY: 450
        },
        {
            txt: '',
            size: 60,
            align: 'left',
            locationX:50,
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
    if (gMeme.lines[gLine].txt==='')return
    if(gLine<=0) gLine=3
    gLine--
    drawText(gMeme.lines[gLine].txt, gMeme.lines[i].locationX, gMeme.lines[gLine].heightY)
    document.getElementById('memeTxt').value = gMeme.lines[gLine].txt   
}
function deleteLine(){
    document.getElementById('memeTxt').value=''
    gMeme.lines[gLine].txt=' '
    drawText(gMeme.lines[gLine].txt, gMeme.lines[i].locationX, gMeme.lines[gLine].heightY)
}
function changeAlignment(alignment){
    drawImg(gMeme.selectedImgId)
    var offsetX
    if (alignment==='left') offsetX=50
    else if (alignment==='center') offsetX=200
    else if (alignment==='right') offsetX=450
    for (let i=0 ; i<3;i++){
        gMeme.lines[i].locationX=offsetX
        gMeme.lines[i].align=alignment
        drawText(gMeme.lines[i].txt, gMeme.lines[i].locationX, gMeme.lines[i].heightY)
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