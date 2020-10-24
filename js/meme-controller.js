'use strict'


function onInit() {
    createPics()
    renderPic()
    onCloseEditor()
    // console.log(gImgs)
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
    for (let i=0 ; i<3;i++){
        drawText(gMeme.lines[i].txt, gMeme.lines[i].locationX, gMeme.lines[i].heightY)
    }
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
function onDeleteLine(){
    deleteLine()
}
function onChangeAlignment(alignment){
    changeAlignment(alignment)
}