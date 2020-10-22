'use strict'


function onInit() {
    createPics()
    renderPic()
    onCloseEditor()
    // console.log(gImgs)
}
function onShowEditor(id) {
    var elModal = document.querySelector('.main-editor')
    elModal.style.display = 'flex'
    var elGalley=document.querySelector('.main-content')
    elGalley.style.display='none'
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg(id)
    drawOnCanvas(id)
}
function onCloseEditor(){
    var elModal = document.querySelector('.main-editor')
    elModal.style.display = 'none'
    var elGalley=document.querySelector('.main-content')
    elGalley.style.display = 'block'
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
    if(!font)return
    gMeme.lines[gLine].txt = font
    if (gLine === 0) {
        drawText(gMeme.lines[gLine].txt, 50, gMeme.lines[gLine].heightY)
    } else if (gLine === 1) {
        // ev.value=''
        drawText(gMeme.lines[0].txt, 50, gMeme.lines[0].heightY)
        drawText(gMeme.lines[gLine].txt, 50, gMeme.lines[gLine].heightY)
    } else if (gLine===2) {
        drawText(gMeme.lines[0].txt, 50, gMeme.lines[0].heightY)
        drawText(gMeme.lines[1].txt, 50, gMeme.lines[1].heightY)
        drawText(gMeme.lines[gLine].txt, 50, gMeme.lines[gLine].heightY)
    }else return;
}

function chechIfEnter(ev) {
    if (ev.key === 'Enter') {
        gLine ++
        gMeme.selectedLineIndx++
        document.getElementById('memeTxt').value = ''
    }
}
function onAddLine(){
    gLine ++
    gMeme.selectedLineIndx++
    document.getElementById('memeTxt').value = ''
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