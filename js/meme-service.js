'use strict'

const gImgs=[]
const gMeme={}
const gNumOfPics=18
// var gCanvas;
// var gCtx;


// function drawImg() {
//     var img = new Image()
//     img.src = './img/1.jpg';
//     img.onload = () => {
//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
//     }
// }

function createPics(){
    for (let i =1;i<=gNumOfPics;i++){
        gImgs.push(_createPic(i))
    }
}

function _createPic(id){
    let img= {
        id,
        url :`img/${id}.jpg`
    } 
    return img
}