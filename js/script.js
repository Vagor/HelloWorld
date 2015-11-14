//主函数
var num=0;//题目的序号
$(function(){
	//加载进度条
	startProgress();
	// 加载开始按钮特效
	changeLoc();//btn上提动画
	$('.game-start-btn').on("touchstart mousedown",function() {
		$(this).attr("src","./images/mainpage-press.png");
	});
	var quesIndex=createQuestionIndex();
	$('.game-start-btn').on("touchend mouseup",function() {
		$(this).attr("src","./images/mainpage-normal.png");
		$("#game-start").css("display","none");
		$("#game-content").css("display","");
		loadQuestion(quesIndex[0],(num+1));//载入第一道题目
		$(".choice1,.choice2,.choice3,.choice4").on("touchend mouseup",function(){
			var _choiceHtml = $(this).html();
			var _language=_choiceHtml.substring(2);
			if (_language==json.message[quesIndex[num]].language) {
				$(this).delay(8100).css('background','#58ce64');//返回“棒”动态效果，持续一秒
				num++;//题目序号加一，并加载下一题
				loadQuestion(quesIndex[num],(num+1));
			} else{
				$(this).delay(8100).css('background','#fe6241');//返回“错啦”动态效果，持续一秒
				if (num==0) {
					alert("一题都不会，你个笨蛋");//跳转你一题都没打出来哈哈页面
				} else{
					alert("才做出来几题呀，你个笨蛋");//跳转你击败了多少菜鸟页面
				};
			};
		})
	});


	//结果按钮效果
	$('.game-result-btn-again').on("touchstart mousedown",function() {
		$(this).attr("src","./images/lastpage-again-press.png");
	});
	$('.game-result-btn-again').on("touchend mouseup",function() {
		$(this).attr("src","./images/lastpage-again-normal.png");
	});
	$('.game-result-btn-share').on("touchstart mousedown",function() {
		$(this).attr("src","./images/lastpage-share-press.png");
	});
	$('.game-result-btn-share').on("touchend mouseup",function() {
		$(this).attr("src","./images/lastpage-share-normal.png");
	});
})

//加载bar
var currProgress = 0; 
var done = false; 
var total = 100; 
function startProgress() { 
	var prBar = document.getElementById("prog"); 
	prBar.value = currProgress; 

	currProgress++; 
	if(currProgress>1) done=true; 
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

//50道题目JSON数据
var json = {
    "status": true,
    "message": [
        {
            "answers": [
                "Perl",
                "PHP",
                "AutoIt",
                "DOS"
            ],
            "language": "Perl",
            "title": "<pre><span class=\"k\">use</span> <span class=\"mf\">5.010</span><span class=\"p\">;</span>\n<span class=\"n\">say</span> <span class=\"s\">\"Hello, world!\"</span><span class=\"p\">;</span> </pre>"
        },
        {
            "answers": [
                "Java",
                "C#",
                "Sbyke Laborana",
                "Python"
            ],
            "language": "C#",
            "title": "<pre><span class=\"k\">class</span> <span class=\"nc\">HelloWorldApp</span><span class=\"p\">{</span>\n  <span class=\"k\">static</span> <span class=\"k\">void</span> <span class=\"nf\">Main</span><span class=\"p\">(</span><span class=\"kt\">string</span><span class=\"p\">[]</span> <span class=\"n\">args</span><span class=\"p\">)</span><span class=\"p\">{</span>\n    <span class=\"n\">System</span><span class=\"p\">.</span><span class=\"n\">Console</span><span class=\"p\">.</span><span class=\"n\">WriteLine</span><span class=\"p\">(</span>\n      <span class=\"s\">\"Hello, world!\"</span><span class=\"p\">);</span>\n  <span class=\"p\">}</span>\n<span class=\"p\">}</span></pre>"
        },
        {
            "answers": [
                "Bash",
                "Haskell",
                "sed",
                "Java"
            ],
            "language": "Java",
            "title": "<pre><span class=\"kd\">public</span> <span class=\"kd\">class</span> <span class=\"nc\">Hello</span><span class=\"o\">{</span>\n  <span class=\"kd\">public</span> <span class=\"kd\">static</span> <span class=\"kt\">void</span> <span class=\"nf\">main</span><span class=\"o\">(</span>\n    <span class=\"n\">String</span><span class=\"o\">[]</span> <span class=\"n\">args</span><span class=\"o\">)</span><span class=\"o\">{</span>\n     <span class=\"n\">System</span><span class=\"o\">.</span><span class=\"na\">out</span><span class=\"o\">.</span><span class=\"na\">print</span><span class=\"o\">(</span><span class=\"s\">\"Hello, world!\"</span><span class=\"o\">);</span>\n  <span class=\"o\">}</span>\n<span class=\"o\">}</span></pre>"
        },
        {
            "answers": [
                "Haskell",
                "Pike",
                "C",
                "Objective-C"
            ],
            "language": "Objective-C",
            "title": "<pre>#import &lt;Foundation/Foundation.h&gt;\nint main(int argc, const char* argv[]){\n  NSLog(@\"Hello World!\");\n  return (0);\n}\n</pre>"
        },
        {
            "answers": [
                "Small Basic",
                "AutoIt",
                "Clojure",
                "Python"
            ],
            "language": "Python",
            "title": "<pre>#!/usr/bin/env xxx\n<span class=\"k\">print</span> <span class=\"s\">\"Hello, world!\"</span></pre>"
        },
        {
            "answers": [
                "Bash",
                "X11",
                "sed",
                "PHP"
            ],
            "language": "Bash",
            "title": "<pre> <span class=\"nb\">echo</span> <span class=\"s1\">'Hello, world!'</span></pre>"
        },
        {
            "answers": [
                "AutoIt",
                "JavaScript",
                "Erlang",
                "PostScript"
            ],
            "language": "Erlang",
            "title": "<pre>\n-module(hello).\n-export([hello_world/0]).\n\nhello_world() -&gt;\n  io:fwrite(\"Hello, World!\").\n</pre>"
        },
        {
            "answers": [
                "C",
                "Pascal",
                "Objective-C",
                "Ruby"
            ],
            "language": "C",
            "title": "<pre><span class=\"cp\">#include &lt;stdio.h&gt;</span>\n<span class=\"kt\">int</span> <span class=\"nf\">main</span><span class=\"p\">(</span><span class=\"kt\">void</span><span class=\"p\">)</span>\n<span class=\"p\">{</span>\n  <span class=\"n\">puts</span><span class=\"p\">(</span><span class=\"s\">\"Hello, world!\"</span><span class=\"p\">);</span>\n  <span class=\"k\">return</span> <span class=\"mi\">0</span><span class=\"p\">;</span>\n<span class=\"p\">}</span></pre>"
        },
        {
            "answers": [
                "PostScript",
                "C++",
                "ASP",
                "sed"
            ],
            "language": "C++",
            "title": "<pre><span class=\"cp\">#include &lt;iostream&gt;</span>\n<span class=\"k\">using</span> <span class=\"k\">namespace</span> <span class=\"n\">std</span><span class=\"p\">;</span>\n<span class=\"kt\">int</span> <span class=\"nf\">main</span><span class=\"p\">()</span><span class=\"p\">{</span>\n  <span class=\"n\">cout</span> <span class=\"o\">&lt;&lt;</span> <span class=\"s\">\"Hello, world!\"</span> <span class=\"o\">&lt;&lt;</span> <span class=\"n\">endl</span><span class=\"p\">;</span>\n  <span class=\"k\">return</span> <span class=\"mi\">0</span><span class=\"p\">;</span>\n<span class=\"p\">}</span></pre>"
        },
        {
            "answers": [
                "sed",
                "ASP",
                "Smalltalk",
                "Ruby"
            ],
            "language": "Ruby",
            "title": "<pre><span class=\"c1\">#!/usr/bin/env xxx</span>\n<span class=\"nb\">puts</span> <span class=\"s2\">\"Hello, world!\"</span></pre>"
        },
        {
            "answers": [
                "Scheme",
                "Forth",
                "BASIC",
                "Bash"
            ],
            "language": "Scheme",
            "title": "<pre><span class=\"p\">(</span><span class=\"nb\">display </span><span class=\"s\">\"Hello, world!\"</span><span class=\"p\">)</span>\n<span class=\"p\">(</span><span class=\"nf\">newline</span><span class=\"p\">)</span></pre>"
        },
        {
            "answers": [
                "Pascal",
                "Lua",
                "Nuva",
                "Seed7"
            ],
            "language": "Pascal",
            "title": "<pre><span class=\"k\">program</span> <span class=\"n\">Hello</span><span class=\"o\">;</span>\n<span class=\"k\">begin</span>\n  <span class=\"nb\">writeln</span><span class=\"p\">(</span><span class=\"s\">'Hello, world!'</span><span class=\"p\">)</span><span class=\"o\">;</span>\n<span class=\"k\">end</span><span class=\"o\">.</span></pre>"
        },
        {
            "answers": [
                "dc",
                "Java",
                "AutoIt",
                "X11"
            ],
            "language": "dc",
            "title": "<pre>\n[Hello World]p\n</pre>"
        },
        {
            "answers": [
                "Ruby",
                "X11",
                "PHP",
                "Java"
            ],
            "language": "X11",
            "title": "<pre>xmessage 'Hello, world!'\n</pre>"
        },
        {
            "answers": [
                "JavaScript",
                "Lua",
                "Swift",
                "BCPL"
            ],
            "language": "Lua",
            "title": "<pre><span class=\"nb\">print</span> <span class=\"s2\">\"</span><span class=\"s\">Hello, world!\"</span></pre>"
        },
        {
            "answers": [
                "Lua",
                "Java",
                "AWK",
                "Seed7"
            ],
            "language": "AWK",
            "title": "<pre>BEGIN { print \"Hello, world!\" }</pre>"
        },
        {
            "answers": [
                "Rust",
                "HQ9+",
                "BASIC",
                "X11"
            ],
            "language": "BASIC",
            "title": "<pre><span class=\"nl\">10</span><span class=\"w\"> </span><span class=\"kr\">PRINT</span><span class=\"w\"> </span><span class=\"s2\">\"Hello, world!\"</span>\n<span class=\"nl\">20</span><span class=\"w\"> </span><span class=\"kr\">END</span></pre>"
        },
        {
            "answers": [
                "Pike",
                "Prolog",
                "JavaScript",
                "SNOBOL"
            ],
            "language": "Prolog",
            "title": "<pre><span class=\"s-Atom\">goal</span>\n    <span class=\"nf\">write</span><span class=\"p\">(</span><span class=\"s2\">\"hello,world!\"</span><span class=\"p\">).</span></pre>"
        },
        {
            "answers": [
                "Brainfuck",
                "AutoIt",
                "Scheme",
                "C#"
            ],
            "language": "Brainfuck",
            "title": "<pre>++++++++++[&gt;+++++++&gt;++++++++++&gt;+++&gt;+&lt;&lt;&lt;&lt;-]\n&gt;++.&gt;+.+++++++..+++.&gt;++.&lt;&lt;+++++++++++++++.\n&gt;.+++.------.--------.&gt;+.&gt;. </pre>"
        },
        {
            "answers": [
                "Swift",
                "Pascal",
                "Scheme",
                "Sbyke Laborana"
            ],
            "language": "Sbyke Laborana",
            "title": "<pre>INIT min:1001\nOm:\"Hello, world!\"</pre>"
        },
        {
            "answers": [
                "SQL",
                "Forth",
                "BlitzBasic",
                "AWK"
            ],
            "language": "BlitzBasic",
            "title": "<pre><span class=\"nv\">Print</span> <span class=\"s2\">\"Hello, world!\"</span>\n<span class=\"nv\">WaitKey</span></pre>"
        },
        {
            "answers": [
                "Lua",
                "Mathematica",
                "SQL",
                "Small Basic"
            ],
            "language": "Small Basic",
            "title": "<pre>TextWindow.WriteLine(\"Hello, world!\")\n</pre>"
        },
        {
            "answers": [
                "Sbyke Laborana",
                "Python",
                "OCaml",
                "Common Lisp"
            ],
            "language": "OCaml",
            "title": "<pre><span class=\"k\">let</span> <span class=\"n\">main</span> <span class=\"bp\">()</span> <span class=\"o\">=</span>\n    <span class=\"n\">print_endline</span> <span class=\"s2\">\"Hello world!\"</span><span class=\"o\">;;</span></pre>"
        },
        {
            "answers": [
                "OCaml",
                "Nuva",
                "鏄撹瑷€",
                "Seed7"
            ],
            "language": "Seed7",
            "title": "<pre>\n$ include \"seed7_05.s7i\";\n  const proc: main is func\n    begin\n      writeln(\"Hello, world!\");\n    end func;\n</pre>"
        },
        {
            "answers": [
                "JSP",
                "Python",
                "Visual Basic",
                "C++"
            ],
            "language": "Visual Basic",
            "title": "<pre><span class=\"n\">MsgBox</span> <span class=\"s\">\"Hello, world!\"</span>\n</pre>"
        },
        {
            "answers": [
                "Sbyke Laborana",
                "Rust",
                "BCPL",
                "REXX"
            ],
            "language": "BCPL",
            "title": "<pre>GET \"LIBHDR\"\n\nLET START () BE\n$(\n    WRITES (\"Hello, world!*N\")\n$)\n</pre>"
        },
        {
            "answers": [
                "Objective-C",
                "BCPL",
                "sed",
                "DOS"
            ],
            "language": "sed",
            "title": "<pre>sed -ne '1s/.*/Hello, world!/p' </pre>"
        },
        {
            "answers": [
                "HQ9+",
                "JSP",
                "Clojure",
                "AutoIt"
            ],
            "language": "HQ9+",
            "title": "<pre>H </pre>"
        },
        {
            "answers": [
                "PHP",
                "Smalltalk",
                "Rust",
                "Mathematica"
            ],
            "language": "PHP",
            "title": "<pre><span class=\"cp\">&lt;?php</span>\n  <span class=\"k\">echo</span> <span class=\"s1\">'Hello, world!'</span><span class=\"p\">;</span>\n  <span class=\"k\">print</span> <span class=\"s1\">'Hello, world!'</span><span class=\"p\">;</span>\n<span class=\"cp\">?&gt;</span></pre>"
        },
        {
            "answers": [
                "鏄撹瑷€",
                "Common Lisp",
                "Prolog",
                "Nuva"
            ],
            "language": "Common Lisp",
            "title": "<pre><span class=\"p\">(</span><span class=\"nb\">format</span> <span class=\"no\">t</span> <span class=\"s\">\"Hello world!~%\"</span><span class=\"p\">)</span></pre>"
        },
        {
            "answers": [
                "JSP",
                "Erlang",
                "Lua",
                "AutoIt"
            ],
            "language": "AutoIt",
            "title": "<pre><span class=\"nf\">MsgBox</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span>''<span class=\"p\">,</span>'<span class=\"n\">Hello</span><span class=\"p\">,</span> <span class=\"n\">world</span><span class=\"o\">!</span>'<span class=\"p\">)</span></pre>"
        },
        {
            "answers": [
                "Golang",
                "Wiki",
                "Common Lisp",
                "Ada"
            ],
            "language": "Wiki",
            "title": "<pre>&lt;includeonly&gt;Hello, World!\n&lt;/includeonly&gt;&lt;\n</pre>"
        },
        {
            "answers": [
                "Nuva",
                "DOS",
                "ActionScript",
                "BASIC"
            ],
            "language": "ActionScript",
            "title": "<pre><span class=\"nf\">trace</span><span class=\"p\">(</span><span class=\"s2\">\"Hello, world!\"</span><span class=\"p\">);</span></pre>"
        },
        {
            "answers": [
                "Visual Basic",
                "PostScript",
                "DOS",
                "Golang"
            ],
            "language": "DOS",
            "title": "<pre><span class=\"k\">echo</span> <span class=\"k\">off</span>\n<span class=\"k\">cls</span>\n<span class=\"k\">echo</span> Hello<span class=\"p\">,</span> world! </pre>"
        },
        {
            "answers": [
                "PHP",
                "Bash",
                "Prolog",
                "SNOBOL"
            ],
            "language": "SNOBOL",
            "title": "<pre>    OUTPUT = \"Hello, world!\"\nEND\n</pre>"
        },
        {
            "answers": [
                "C",
                "Perl",
                "Objective-C",
                "Mathematica"
            ],
            "language": "Mathematica",
            "title": "<pre>Hello[] := Print[\"<span style=\"color:grey\">Hello World!</span>\"]\nHello[] </pre>"
        },
        {
            "answers": [
                "Fortran",
                "SQL",
                "C++",
                "Bash"
            ],
            "language": "SQL",
            "title": "<pre><span class=\"k\">select</span> <span class=\"s1\">'hello, world'</span><span class=\"p\">;</span>\n</pre>"
        },
        {
            "answers": [
                "Smalltalk",
                "Fortran",
                "SNOBOL",
                "Lua"
            ],
            "language": "Fortran",
            "title": "<pre><span class=\"k\">WRITE</span><span class=\"p\">(</span><span class=\"o\">*</span><span class=\"p\">,</span><span class=\"o\">*</span><span class=\"p\">)</span> <span class=\"s1\">'Hello, world!'</span>\n<span class=\"k\">STOP</span>\n<span class=\"k\">END</span></pre>"
        },
        {
            "answers": [
                "Forth",
                "Visual Basic",
                "Swift",
                "Ruby"
            ],
            "language": "Swift",
            "title": "<pre>println(\"Hello, World!\")\n</pre>"
        },
        {
            "answers": [
                "Ada",
                "Golang",
                "Ruby",
                "Python"
            ],
            "language": "Ada",
            "title": "<pre><span class=\"kn\">with</span> <span class=\"nn\">TEXT_IO</span><span class=\"p\">;</span>\n\n<span class=\"kd\">procedure</span> <span class=\"nf\">HELLO</span> <span class=\"kr\">is</span>\n<span class=\"kr\">begin</span>\n  <span class=\"n\">TEXT_IO</span><span class=\"p\">.</span><span class=\"n\">PUT_LINE</span> <span class=\"p\">(</span><span class=\"s\">\"Hello, world!\"</span><span class=\"p\">);</span>\n<span class=\"kr\">end</span> <span class=\"nf\">HELLO</span><span class=\"p\">;</span>\n</pre>"
        },
        {
            "answers": [
                "BCPL",
                "Objective-C",
                "Forth",
                "Smalltalk"
            ],
            "language": "Smalltalk",
            "title": "<pre><span class=\"nc\">Transcript</span> <span class=\"nf\">show:</span> <span class=\"s\">'Hello, world!'</span>\n</pre>"
        },
        {
            "answers": [
                "Python",
                "JavaScript",
                "Bash",
                "Scheme"
            ],
            "language": "JavaScript",
            "title": "<pre>\n<span class=\"nb\">document</span><span class=\"p\">.</span><span class=\"nx\">write</span><span class=\"p\">(</span><span class=\"s2\">\"Hello, World!\"</span><span class=\"p\">);</span>\n</pre>"
        },
        {
            "answers": [
                "Seed7",
                "BASIC",
                "鏄撹瑷€",
                "Nuva"
            ],
            "language": "Nuva",
            "title": "<pre>&lt;.\n  System.Ui.ShowMessage(\n    'Nuva', 'Hello, world!', ['OK']\n  )\n.&gt;\n</pre>"
        },
        {
            "answers": [
                "Erlang",
                "Forth",
                "ActionScript",
                "Perl"
            ],
            "language": "Forth",
            "title": "<pre>.\" Hello, world!\" CR </pre>"
        },
        {
            "answers": [
                "Smalltalk",
                "BCPL",
                "Pike",
                "鏄撹瑷€"
            ],
            "language": "Pike",
            "title": "<pre>#!/usr/bin/env xxx\nint main(){\n  write(\"Hello, world!\");\n  return 0;\n}</pre>"
        },
        {
            "answers": [
                "JSP",
                "X11",
                "Smalltalk",
                "ASP"
            ],
            "language": "JSP",
            "title": "<pre><span class=\"o\">&lt;%</span>\n  <span class=\"n\">out</span><span class=\"o\">.</span><span class=\"na\">print</span><span class=\"o\">(</span><span class=\"s\">\"Hello, world!\"</span><span class=\"o\">);</span>\n<span class=\"o\">%&gt;</span></pre>"
        },
        {
            "answers": [
                "Java",
                "Brainfuck",
                "C",
                "PL/I"
            ],
            "language": "PL/I",
            "title": "<pre>Test: procedure options(main);\n  declare My_String char(20) varying\ninitialize('Hello, world!');\n  put skip list(My_String);\nend Test;</pre>"
        },
        {
            "answers": [
                "PostScript",
                "Mathematica",
                "Delphi",
                "Nuva"
            ],
            "language": "Delphi",
            "title": "<pre><span class=\"k\">program</span> <span class=\"n\">HelloWorld</span><span class=\"o\">;</span>\n<span class=\"k\">uses</span>\n    <span class=\"n\">Dialogs</span><span class=\"o\">;</span>\n<span class=\"k\">begin</span>\n    <span class=\"n\">ShowMessage</span><span class=\"p\">(</span><span class=\"s\">'Hello, World!'</span><span class=\"p\">)</span><span class=\"o\">;</span>\n<span class=\"k\">end</span><span class=\"o\">.</span>\n</pre>"
        },
        {
            "answers": [
                "Visual Basic",
                "C++",
                "ASP",
                "Clojure"
            ],
            "language": "ASP",
            "title": "<pre><span class=\"nt\">&lt;%</span> <span class=\"n\">Response</span><span class=\"p\">.</span><span class=\"n\">Write</span><span class=\"p\">(</span><span class=\"s\">\"Hello, world!\"</span><span class=\"p\">)</span> <span class=\"nt\">%&gt;</span></pre>"
        },
        {
            "answers": [
                "REXX",
                "BCPL",
                "Delphi",
                "Scheme"
            ],
            "language": "REXX",
            "title": "<pre>say \"Hello, world!\"</pre>"
        }
    ],
    "errors": ""
};


//载入题目
function loadQuestion(index,num){
	$(".choice1").html("A:"+json.message[index].answers[0]);
	$(".choice2").html("B:"+json.message[index].answers[1]);
	$(".choice3").html("C:"+json.message[index].answers[2]);
	$(".choice4").html("D:"+json.message[index].answers[3]);
	$(".game-content-question-num span").text(num);
	$(".game-content-question-code").html(json.message[index].title);
}


//btn上提动画
function changeLoc(){
}

//随机产生题目序号串
function createQuestionIndex(){
	// 创建链表
	var N = 13;//输入数的中间数字数量
	var a = new Array();//定义链表节点
	for (var i = 0; i < N; i++) {
		a[i] = new Array();
		a[i][0] = i;
	};
	for (var i = 0; i < N; i++) {
		a[i][1] = a[i+1];
		a[i][2] = a[i-1];
	};
	a[N-1][1] = a[0];
	a[0][2] = a[N-1];


	// 选出题目序号 
	var indexContainer = new Array();//输出题目序列
	var ranNum = new Array();//定义随机数序列
	var tempN = N;//定义剩余循环链表节点的个数
	for (var i = 0; i < N; i++) {
		ranNum[i] = Math.ceil(tempN*Math.random());
		tempN--;
	};//产生随循环节点个数变化的随机数序列

	var temp = new Array();
	temp = a[0][1];//存放查询过程中数组的临时变量
	for (var i = 0; i < N; i++) {
		for (var j = 0; j < ranNum[i]; j++) {
			temp = temp[1];
		};//找到随机数所指的数
		indexContainer[i] = temp[0];//把temp节点的值赋值给输出题目序列
		temp[2][1] = temp[1]//temp的前一个节点的节点指向 temp下一个节点
	};
	return indexContainer;
}


