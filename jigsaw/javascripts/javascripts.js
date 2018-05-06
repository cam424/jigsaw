$(document).foundation();

$(document).ready(function() {


});

function closeOffCanvas() {
	var offCanvasMenu,
		offCanvasOverlay = $('.js-off-canvas-overlay');

	if ($('#offCanvasLeftOverlap').hasClass('is-open')) {
		offCanvasMenu = $('#offCanvasLeftOverlap')
	} else if ($('#openMiniBasket').hasClass('is-open')) {
		offCanvasMenu = $('#openMiniBasket')
	} else if ($('#offCanvasSearch').hasClass('is-open')) {
		offCanvasMenu = $('#offCanvasSearch')
	}

	$(offCanvasMenu).removeClass('is-open');
	$(offCanvasMenu).attr('aria-hidden', 'true');
	$(offCanvasOverlay).removeClass('is-visible is-closable');
}

