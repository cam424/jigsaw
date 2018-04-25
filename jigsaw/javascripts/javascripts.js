var button = document.getElementById('closeOffCanvas'),
	offCanvasMenu = document.getElementById('offCanvasLeftOverlap');

$(document).foundation();

$(document).ready(function() {


});


function closeOffCanvas() {
	var offCanvasOverlay = $('.js-off-canvas-overlay');

	offCanvasMenu.classList.remove('is-open');
	offCanvasMenu.setAttribute('aria-hidden', 'true');
	$(offCanvasOverlay).removeClass('is-visible is-closable');
}