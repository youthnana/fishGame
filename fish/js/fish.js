var can1,can2;

var ctx1,ctx2;

var canWidth,canHeight;

var lastTime,deltaTime;//deltaTime is the interval time

var bgPic = new Image();

var ane,fruit;

var mom,child;//defines the mother fish

var mx,my;//defines the initial position of the mouse

var childTails = [];

var childEyes = [];

var childBody = [];

var momTails = [];

var momEyes = [];

var momBodyOra = [];

var momBodyBlue = [];

var score;

var wave;

document.body.onload = game;

function game() {

	init();

	lastTime = Date.now();

	deltaTime = 0;

	gameloop();
}

function init() {

	//get the canvas context

	can1 = document.getElementById('canvas1');//fishes,dust,UI,circle
	can2 = document.getElementById('canvas2');//bg,ane,fruits

	ctx1 = can1.getContext('2d');
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src = "./src/background.jpg";

	canWidth = can1.width;

	canHeight = can1.height;

	ane = new aneObj();

	ane.init();

	fruit = new fruitObj();

	fruit.init();

	mom = new momObj();

	mom.init();

	child = new childObj();

	child.init();

	mx = canWidth * 0.5;

	my = canHeight * 0.5;

	for(var i = 0; i < 8; i++){//tails

		childTails[i] = new Image();

		childTails[i].src = "./src/babyTail" + i + ".png";
	}

	for(var i = 0; i < 2; i++){//eyes

		childEyes[i] = new Image();

		childEyes[i].src = "./src/babyEye" + i + ".png";
	}

	for(var i = 0; i < 20; i++){//body

		childBody[i] = new Image();

		childBody[i].src = "./src/babyFade" + i + ".png";
	}



	for(var i = 0; i < 8; i++){//tails

		momTails[i] = new Image();

		momTails[i].src = "./src/bigTail" + i + ".png";
	}

	for(var i = 0; i < 2; i++){//tails

		momEyes[i] = new Image();

		momEyes[i].src = "./src/bigEye" + i + ".png";
	}

	for(var i = 0; i < 8; i++){

		momBodyBlue[i] = new Image();
		momBodyOra[i] = new Image();

		momBodyOra[i].src = "./src/bigSwim" + i + ".png";
		momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	}


	ctx1.font = "20px verdana";
	ctx1.textAlign = "center";

	score = new scoreObj();

	wave = new waveObj();

	wave.init();
}

function gameloop(){

	window.requestAnimFrame(gameloop);//requestAnimFrame can computering time intelligent

	var now = Date.now();

	deltaTime = now - lastTime;

	lastTime = now;

	if(deltaTime > 40){//solve the problem of the fruit becoming much better when toggle the brower pages,

		deltaTime = 40;
	}

	drawBg();

	ane.draw();

	fruit.draw();

	fruitMonitor();

	ctx1.clearRect(0,0,canWidth,canHeight);

	mom.draw();

	child.draw();

	momFruitCollision();

	momChildCollision();

	score.draw();

	wave.draw();

	// console.log(deltaTime);
}

function onMouseMove (e){

	if(!score.gameOver){

		if(e.offSetX || e.layerX){

			mx = e.offSetX == undefined ? e.layerX : e.offSetX;

			my = e.offSetY == undefined ? e.layerY : e.offSetY;

			// console.log(mx,my);
		}
	}
	
}