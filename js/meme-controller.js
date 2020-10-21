'use strict'


function onInit(){
    createPics()
    renderPic()
    console.log(gImgs)
}
function onShowEditor(num) {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'block'
    // gCanvas = document.querySelector('#my-canvas');
    // gCtx = gCanvas.getContext('2d');
    

    
}

function renderPic(){
    var elPic=document.querySelector('.pic')
    var strHtml=gImgs.map(pic => {
        return `<img onclick="onShowEditor(${pic.id})" src="img/${pic.id}.jpg" >`
    })

    elPic.innerHTML=strHtml.join(' ')
}