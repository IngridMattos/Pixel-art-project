function divBox(){
    const accessingDivs = document.getElementsByClassName('color');
    const colorChoice = ['red', 'blue', 'green'];
   const blackFirstColor = accessingDivs[0].style.backgroundColor = 'black';
    for (let i = 1; i < accessingDivs.length; i+=1){
        accessingDivs[i].style.backgroundColor = colorChoice[i - 1];
    }
}
window.onload = function () {
    divBox()
}