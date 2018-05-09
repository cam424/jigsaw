$(document).foundation();

$(document).ready(function() {


});

// Shadows, Elements, Luxe - Creates closing functionality for all off canvas close buttons
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

// Luxe Only - Adds additional refocus functionality if login tab content isn't already active
function openMiniBasketLogin() {
	var loginTab = $('.login-tab');

	if (!$(loginTab).hasClass('is-active')) {
		$(loginTab).click();
	}
}

// Luxe Only - Adds additional refocus functionality if mini basket tab content isn't already active
function openMiniBasketShopping() {
	var shoppingTab = $('.shopping-tab');

	if (!$(shoppingTab).hasClass('is-active')) {
		$(shoppingTab).click();
	}
}

