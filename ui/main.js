console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Move the image
var imag = document.getElementById('madi');
function moveRight() {
    marginLeft = marginLeft+10;
    img.style.marignLeft = marginLeft + 'px';
    var marginLeft = 0;
}
imag.oneclick = function () {
    var interval = setInterval(moveRight, 100);
   };