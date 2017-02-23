console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Move the image
var imag = document.getElementById('madi');
marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marignLeft = marginLeft + 'px';
   }
imag.oneclick = function () {
    var interval = setInterval(moveRight, 50);
   };