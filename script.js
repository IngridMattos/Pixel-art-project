function divBox() {
  const accessingDivs = document.getElementsByClassName('color');
  const colorChoice = ['red', 'blue', 'green'];
  accessingDivs[0].style.backgroundColor = 'black';
  for (let i = 1; i < accessingDivs.length; i += 1) {
    accessingDivs[i].style.backgroundColor = colorChoice[i - 1];
  }
}

function addPixelFrame() {
  const pixelFrame = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixels.id = i;
    pixelFrame.appendChild(pixels);
  }
}
function colorBlackFirst() {
  const accessingDivs = document.getElementsByClassName('color');
  accessingDivs[0].classList.add('selected');
}

function startingEvent() {
  const colorPaletSelect = document.getElementById('color-palette');
  colorPaletSelect.addEventListener('click', function (evento){
    const divsSelected = document.querySelector('.selected');
    divsSelected.classList.remove('selected');
    evento.target.classList.add('selected');
  });
}

function colorPixels() {
    const daddyPixels = document.querySelector('#pixel-board');
        daddyPixels.addEventListener('click', function (event) {
            if (event.target.id !== 'pixel-board') {
            const achandoOSelected = document.querySelector('.selected');
            event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
            }    
    })
    }
    

window.onload = function () {
    divBox()
    addPixelFrame()
    colorBlackFirst()
    startingEvent()
    colorPixels()
}