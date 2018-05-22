//2D environment
var ctx = document.getElementById("canvas").getContext("2d");

//orbital
function drawTrack(){
	for(var i = 0; i < 8; i++){
		ctx.beginPath();
		ctx.arc(500, 500, (i + 1) * 50, 0, 360, false);
		ctx.closePath();
		ctx.strokeStyle = "#fff";
		ctx.stroke();
	}
}

//planets
function Star(x, y, radius, cycle, sColor, eColor){

	//attributes
	this.x = x;             
	this.y = y;

	this.radius = radius;   
	this.cycle = cycle;     
	this.sColor = sColor;   
	this.eColor = eColor;

	this.color = null;
	//timer
	this.time = 0;

	
	this.draw = function(){
		ctx.save();               // save past
		ctx.translate(500, 500);  //reset     
		ctx.rotate(this.time * (360 / this.cycle) * Math.PI / 180);  //rotation

		//drawing planets
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 360, false);
		ctx.closePath();
		//set color
		this.color = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
		this.color.addColorStop(0, this.sColor);
		this.color.addColorStop(1, this.eColor);
		ctx.fillStyle = this.color;
		ctx.fill();
		//restore
		ctx.restore();
		this.time += 1;
	}
}

//sun func
function Sun(){
	Star.call(this, 0, 0, 20, 0, "#FFFF00", "#FF9900");
}

//mer func
function Mercury(){
	Star.call(this, 0, -50, 10, 87.70, "#A69697", "#5C3E40");
}

//venus func
function Venus(){
	Star.call(this, 0, -100, 10, 224.701, "#C4BBAC", "#1F1315");
}

//earth func
function Earth(){
	Star.call(this, 0, -150, 10, 365.2422, "#78B1E8", "#050C12");
}

//mars func
function Mars(){
	Star.call(this, 0, -200, 10, 686.98, "#CEC9B6", "#76422D");
}

//jupi func
function Jupiter(){
	Star.call(this, 0, -250, 10, 4332.589, "#C0A48E", "#322222");
}
//Saturn func
function Saturn(){
	Star.call(this, 0, -300, 10, 10759.5, "#F7F9E3", "#5C4533");
}
//Uranus func
function Uranus(){
	Star.call(this, 0, -350, 10, 30799.095, "#A7E1E5", "#19243A");
}
//Nep func
function Neptune(){
	Star.call(this, 0, -400, 10, 60152, "#0661B2", "#1E3B73");
}

var sun = new Sun();
var mercury = new Mercury();
var venus = new Venus();
var earth = new Earth();
var mars = new Mars();
var jupiter = new Jupiter();
var saturn = new Saturn();
var uranus = new Uranus();
var neptune = new Neptune();

function Move(){
	ctx.clearRect(0, 0, 1000, 1000);
	drawTrack();
	sun.draw();
	mercury.draw();
	venus.draw();
	earth.draw();
	mars.draw();
	jupiter.draw();
	saturn.draw();
	uranus.draw();
	neptune.draw();
}

setInterval(Move,10);
