'use strict'


function onInit() {
    createPics()
    renderPic()
    // console.log(gImgs)
}
function onShowEditor(id) {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'block'
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg(id)
    drawOnCanvas(id)
}
function onCloseModal(){
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme.jpg'
}
function renderCanvas() {
    drawImg(gMeme.selectedImgId)
    
}
function writingCan() {
    var font = document.getElementById('memeTxt').value
    gMeme.lines[gLine].txt = font
    if (gLine === 0) {
        drawText(gMeme.lines[gLine].txt, 50, gMeme.lines[gLine].heightY)
    } else if (gLine === 1) {
        // ev.value=''
        drawText(gMeme.lines[0].txt, 50, gMeme.lines[0].heightY)
        drawText(gMeme.lines[gLine].txt, 50, gMeme.lines[gLine].heightY)
    } else {
        drawText(gMeme.lines[0].txt, 50, gMeme.lines[0].heightY)
        drawText(gMeme.lines[1].txt, 50, gMeme.lines[1].heightY)
        drawText(gMeme.lines[gLine].txt, 50, gMeme.lines[gLine].heightY)
    }
}

function chechIfEnter(ev) {
    if (ev.key === 'Enter') {
        gLine ++
        gMeme.selectedLineIndx++
        document.getElementById('memeTxt').value = ''
    }
}
function renderPic() {
    var elPic = document.querySelector('.pic')
    var strHtml = gImgs.map(pic => {
        return `<img onclick="onShowEditor(${pic.id})" src="img/${pic.id}.jpg" >`
    })

    elPic.innerHTML = strHtml.join(' ')
}
function onChangeFontSize(sign) {
    changeFontSize(sign)
}
function onUpDown(sign) {
    upDown(sign)
}
function onChangeLines() {
    changeLines()
}