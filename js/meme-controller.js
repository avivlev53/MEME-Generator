'use strict'
var gCanvas;
var gCtx;

function onInit() {
    createPics()
    renderPic()
    onCloseEditor()
}
function onNavMenu() {
    const elModal = document.querySelector('header .main-nav');
    const elHamburger = document.querySelector('header .hamburger-logo');
    elModal.classList.toggle('nav-bar-modal');
    elHamburger.classList.toggle('hamburger-logo-trans');
}
function onShowEditor(id) {
    var elModal = document.querySelector('.main-editor')
    elModal.style.display = 'flex'
    var elGalley = document.querySelector('.main-content')
    elGalley.style.display = 'none'
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg(id)
    getIdIndx(id)
    
}
function onCloseEditor() {
    var elModal = document.querySelector('.main-editor')
    elModal.style.display = 'none'
    var elGalley = document.querySelector('.main-content')
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

function renderTxt() {
    var txt = document.getElementById('memeTxt').value
    gMeme.lines[gLine].txt = txt
    let prevLineIdx=gLine
    for (let i = 0; i < 3; i++) {
        gLine=i
        drawText(gMeme.lines[i].txt, gMeme.lines[i].locationX, gMeme.lines[i].heightY)
    }
    gLine=prevLineIdx
}

function checkIfEnter(ev) {
    if (ev.key === 'Enter') {
        onAddLine()
    }
}
function onAddLine() {
    if (gLine===2) return
    gLine++
    document.getElementById('memeTxt').value = ''
    renderCanvas()
    renderTxt()

}
function renderPic() {
    var elPic = document.querySelector('.pic')
    var strHtml = gImgs.map(pic => {
        return `<img onclick="onShowEditor(${pic.id})" src="img/${pic.id}.jpg" >`
    })

    elPic.innerHTML = strHtml.join(' ')
}
function drawImg(num) {
    var img = new Image()
    img.src = `./img/${num}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderTxt()
    }
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
function onChangeFontSize(sign) {
    changeFontSize(sign)
    renderCanvas()
    renderTxt()
}
function onChangeheight(sign) {
    changeheight(sign)
    renderCanvas()
    renderTxt()
}
function onChangeLines() {
    changeLines()
    renderCanvas()
    renderTxt()
}
function onDeleteLine() {
    deleteLine()
    renderCanvas()
    renderTxt()
}
function onChangeAlignment(alignment) {
    changeAlignment(alignment)
    renderCanvas()
    renderTxt()
}