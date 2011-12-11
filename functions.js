$(document).ready(function(){

	$("ul").css({'display':'none'});

	$("img.toggle").click(function(){
		$(this).next("ul").slideToggle("slow");
	});
	
	$("div.top").animate({ height : 312 },1500);

});