var can1,can2;

var ctx1,ctx2;

var canWidth,canHeight;

var lastTime,deltaTime;//deltaTime是间隔时间

var bgPic = new Image();

var ane,fruit;

document.body.onload = game;

function game() {

	init();

	lastTime = Date.now();

	deltaTime = 0;

	gameloop();
}

function init() {

	//获得canvas context

	can1 = document.getElementById('canvas1');//fishes,dust,UI,circle
	can2 = document.getElementById('canvas2');//bg,ane,fruits

	ctx1 = can1.getContext('2d');
	ctx2 = can2.getContext('2d');

	bgPic.src = "./src/background.jpg";

	canWidth = can1.width;

	canHeight = can1.height;

	ane = new aneObj();

	ane.init();

	fruit = new fruitObj();

	fruit.init();
}

function gameloop(){

	window.requestAnimFrame(gameloop);//requestAnimFrame智能计算时间

	var now = Date.now();

	deltaTime = now - lastTime;

	lastTime = now;

	drawBg();

	ane.draw();

	fruit.draw();

	fruitMonitor();

	// console.log(deltaTime);
}