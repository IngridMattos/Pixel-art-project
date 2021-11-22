function divBox(){
    const accessingDivs = document.getElementsByClassName('color');
    const colorChoice = ['red', 'blue', 'green'];
   const blackFirstColor = accessingDivs[0].style.backgroundColor = 'black';
    for (let i = 1; i < accessingDivs.length; i+=1){
        accessingDivs[i].style.backgroundColor = colorChoice[i - 1];
    }
}

function addPixelFrame(){
    const pixelFrame = document.getElementById('pixel-board')
    for (let i = 0; i < 25; i += 1){
        let pixels = document.createElement('div');
        pixels.className = 'pixel';
        pixelFrame.appendChild(pixels);
    }
}
function colorBlackFirst(){
    const accessingDivs = document.getElementsByClassName('color')
    accessingDivs[0].classList.add('selected')
}

function startingEvent(){

    const colorPaletSelect = document.getElementById('color-palette');
    colorPaletSelect.addEventListener('click', function (evento){
      const divsSelected = document.querySelector('.selected');
      divsSelected.classList.remove('selected');
      evento.target.classList.add('selected');
    });
}

window.onload = function () {
    divBox()
    addPixelFrame()
    colorBlackFirst()
    startingEvent()
}