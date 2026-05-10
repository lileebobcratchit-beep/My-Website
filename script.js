makeDraggable(document.querySelector('#aboutWindow'));

makeDraggable(document.querySelector('#contactWindow'));


//Close the window on click of a red button
document.addEventListener('click', e => {
	if (e.target.closest('.X')) {
		e.target.closest('.outer').remove();
	}
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

