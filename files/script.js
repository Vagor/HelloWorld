// game_start button
$('.game_start_footer_btn').bind("touchstart",function() {
	$(this).attr("src","./images/mainpage-press.png");
});
$('.game_start_footer_btn').bind("touchend",function() {
	$(this).attr("src","./images/mainpage-normal.png");
});

