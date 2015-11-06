// game_start button
$('.game_start_footer_btn').bind("touchstart mousedown",function() {
	$(this).attr("src","./images/mainpage-press.png");
});
$('.game_start_footer_btn').bind("touchend mouseup",function() {
	$(this).attr("src","./images/mainpage-normal.png");
	$("#game_start").css("display","none");
	$("#game_content").css("display","");
});


$(function(){
	var fontsize = document.body.clientWidth/10;
	var font_size = fontsize+"px";
	$("html").attr("font-size",font_size);
})

// game_result button
$('.game_result_btn_again').bind("touchstart",function() {
	$(this).attr("src","./images/lastpage-again-press.png");
});
$('.game_result_btn_again').bind("touchend",function() {
	$(this).attr("src","./images/lastpage-again-normal.png");
});

$('.game_result_btn_share').bind("touchstart",function() {
	$(this).attr("src","./images/lastpage-share-press.png");
});
$('.game_result_btn_share').bind("touchend",function() {
	$(this).attr("src","./images/lastpage-share-normal.png");
});



