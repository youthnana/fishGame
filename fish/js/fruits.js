var fruitObj = function(){

	this.alive = [];

	this.orange = new Image();

	this.blue = new Image();

	this.x = [];

	this.y = [];

	this.l = [];//haikuichangdu

	this.spd = [];//成长速度，上升速度

	this.fruitType = [];
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function(){

	for(var i = 0; i < this.num; i++){

		this.alive[i] = false;

		this.x[i] = 0;

		this.x[i] = 0;

		this.spd[i] = Math.random() * 0.017 + 0.003;//[0.003,0.02]

		// this.born(i);//让所有的果实都出生

		this.fruitType[i] = "";

	}

	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function(){

	for(var i = 0;i < this.num; i++){

		if(this.alive[i]){

			if(this.fruitType[i] == "blue"){

				var pic = this.blue;

			}else{

				var pic = this.orange;
			}

			//draw,find a ane ,grow, fly up
			// ctx2.drawImage(this.orange,this.x[i] - this.orange.width * 0.5,this.y[i] - this.orange.height * 0.5);

			ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);

			if(this.l[i] <= 16){

				// this.l[i] += 0.01 * deltaTime;
				this.l[i] += this.spd[i] * deltaTime;

			}else {

				// this.y[i] -= 0.05 *deltaTime;
				this.y[i] -= this.spd[i] * 5 *deltaTime;
			}

			if(this.y[i] < 10){

				this.alive[i] = false;
			}
		}
		
		
	}
}

fruitObj.prototype.born = function(i){

	var aneId = Math.floor(Math.random() * ane.num);

	this.x[i] = ane.x[aneId];

	this.y[i]= canHeight - ane.len[aneId];

	this.l[i] = 0;

	this.alive[i] = true;

	var ran = Math.random();

	// console.log(ran);

	if(ran < 0.3){

		this.fruitType[i] = "blue";

	}else {

		this.fruitType[i] = "orange";
	}
}

function fruitMonitor(){

	var num = 0;

	for(var i = 0; i < fruit.num; i++){

		if(fruit.alive[i]){ 

			num++;
		}
	}

	if(num < 15){

		//send fruit;
		sendFruit();
		return;
	}
}

function sendFruit(){

	for(var i = 0; i < fruit.num; i++){

		if(!fruit.alive[i]){ 

			fruit.born(i);
			return;

		}
	}
}
// fruitObj.prototype.update = function(){

// 	var num = 0;

// 	for(var i = 0;i < this.num; i++){

// 		if(this.alive[i]){

// 			num++;
// 		}
// 	}
// }