$(document).ready(function(){
	if (!$(this).children('.card').is(':animated')){
		$('.yw-img>img').mouseenter(function(){
			$(this).animate({marginTop:'-100px'},200);
		})
	}
	$('.yw-img>img').mouseout(function(){
		$(this).animate({marginTop:'0'},100);
	})
})