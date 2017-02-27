console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Move the image
var imag = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
   }
imag.onclick = function () {
    var interval = setInterval(moveRight, 50);
   };