$(function () {
	$('.popup-with-delete-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		// modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

/* $(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
        modal: true */

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		/* callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
}); */