makeDraggable(document.querySelector('#aboutWindow'));

makeDraggable(document.querySelector('#contactWindow'));




const button = document.getElementById('contactWindowX');
const button2 = document.getElementById('aboutWindowX');
const targetWindow = document.getElementById('contactWindow');
const targetWindow2 = document.getElementById('aboutWindow');


button.addEventListener('click', function() {
  // 3. Change the display property to 'none'
  targetWindow.style.display = 'none';
});

button2.addEventListener('click', function() {
  // 3. Change the display property to 'none'
  targetWindow2.style.display = 'none';
});



dragElement(document.getElementById("pop-About"));

function dragElement(elmnt) {
    var pos1=0, pos2=0, pos3=0, pos4=0;
    if (document.getElementsById(elmnt.id + "header")) {
        document.getElementsById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmouseup = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}








import {Lightbox} from 'lightbox3';
const lb = Lightbox.init();

