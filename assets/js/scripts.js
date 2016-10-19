$(function(){
	$('.menu-burger').click(function() {
		if ($('.menu').hasClass('hidden')) {
			$('.menu').removeClass('hidden');
			$('.menu-burger').attr('src', './assets/img/ICON-CLOSE.png');
		} else {
			$('.menu').addClass('hidden');
			$('.menu-burger').attr('src', './assets/img/MENU-ICON.png');
		}
	});
});