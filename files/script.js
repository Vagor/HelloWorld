// game-start button
$('.game-start-btn').bind("touchstart mousedown",function() {
	$(this).attr("src","./images/mainpage-press.png");
});
$('.game-start-btn').bind("touchend mouseup",function() {
	$(this).attr("src","./images/mainpage-normal.png");
	$("#game-start").css("display","none");
	$("#game-content").css("display","");
});


$(function(){
	var fontsize = document.body.clientWidth/10;
	var _fontsize = fontsize+"px";
	$("html").attr("font-size",_fontsize);
})

// game-result button
$('.game-result-btn-again').bind("touchstart",function() {
	$(this).attr("src","./images/lastpage-again-press.png");
});
$('.game-result-btn-again').bind("touchend",function() {
	$(this).attr("src","./images/lastpage-again-normal.png");
});

$('.game-result-btn-share').bind("touchstart",function() {
	$(this).attr("src","./images/lastpage-share-press.png");
});
$('.game-result-btn-share').bind("touchend",function() {
	$(this).attr("src","./images/lastpage-share-normal.png");
});

//加载bar
var currProgress = 0; 
var done = false; 
var total = 100; 

function startProgress() { 
	var prBar = document.getElementById("prog"); 
	prBar.value = currProgress; 

	currProgress++; 
	if(currProgress>100) done=true; 
	if(!done) 
		setTimeout("startProgress()", 20); 
	else     
	{ 
		done = false; 
		currProgress = 0; 
		$("#loading").css("display","none");
		$("#game-start").css("display","");
		changeLoc();
	} 
} 

//btn上提动画
function changeLoc(){
}

//主函数
$(function(){
	// startProgress();//加载进度条
	chooseNum(1,13);
})

//随机产生题目序号串
function chooseNum(numMin,numMax){
	// 创建链表
	var N = numMax-numMin+1;//输入数的中间数字数量
	var a = new Array();//定义链表节点
	for (var i = 0; i < N; i++) {
		a[i] = new Array();
		a[i][0] = numMin+i;
		a[i][1] = a[i+1];
		a[i][2] = a[i-1];
	};
	a[N-1][1] = a[0];
	a[0][2] = a[N-1];

	// 选出题目序号 
	var indexContainer = new Array();//输出题目序列
	var temp = a[0][1];//存放查询过程中数组的临时变量
	var ranNum = new Array();//定义随机数序列
	var tempN = N;//定义剩余循环链表节点的个数
	for (var i = 0; i < N; i++) {
		ranNum[i] = Math.floor(tempN*Math.random());
		tempN--;
	};//产生随循环节点个数变化的随机数序列
	for (var i = 0; i < N; i++) {
		for (var j = 0; j < ranNum[i]; j++) {
			temp = temp[1];
		};//找到随机数所指的数
		indexContainer[i] = temp[0];//把temp节点的值赋值给输出题目序列
		temp[2][1] = temp[1]//temp的前一个节点 指向 temp下一个节点
	};
	console.log(indexContainer);
}

