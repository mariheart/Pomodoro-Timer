let inp, sub, redBut, blueBut, yelBut, purpBut;

let styleBut = 'background-color';
let defColor;
let selfCareList = ["also, please eat something", "also, please drink something", "also, please blink", "also, please save your work", "also, please listen to something that calms you"]
let reminder;

let timer = 300;

let sevTimer = 420;

let remindernoise;

function setup() {
	createCanvas(500, 400);
	customReminder();
	background(250);
	defColor = color(255, 50);
	reminder = random(selfCareList);
	remindernoise = loadSound('chime2.wav');
}

function draw() {
	changeColorBG();
	changeStyleBut();
	//bgFloats();
	//aniMoji();
	currentTime();
	timerFunct();
	submitButton();
	push();
	textAlign(CENTER);
	text(reminder, width/2, 300);
	pop();
}

function customReminder() {
	inp = createInput();
  inp.position(250, 350);
}

function submitButton() {
	sub = createButton('submit');
	sub.style(styleBut, defColor);
	sub.style("border", "5px");
	sub.position(420, 350);
	sub.mousePressed(outPut);
}

function outPut() {
	let input = inp.value();
	push();
	rectMode(CENTER);
	noStroke();
	rect(width/2, height/2, 250, 50);
	pop();
	push();
    textAlign(CENTER);
    text("Here's your reminder to "+ input + "!", width/2, height/2);
	pop();
	sevenMinTimer();
	remindernoise.play();
	
}

function currentTime() {
	let h = hour();
  if (minute() < 10) {
    let m = '0' + str(minute());
    push();
	fill(0);
	textSize(20);
	text(h +":" + m, 420, 30);
	pop();
  } else {
    let m = minute();
    push();
	fill(0);
	textSize(20);
	text(h +":" + m, 420, 30);
	pop();
  }
}

function timerFunct() {
	if (frameCount % 60 == 0 && timer > 0) {
		timer--;
		console.log(timer);
	}
	if (timer == 0) {
		let breakTimer = 180;
		push();
		textAlign(CENTER);
		text("Hey there.\nRemember to take a break!", 450, 450);
		if (frameCount % 60 == 0 && timer > 0) {
		breakTimer--;
		}
		if (breakTimer == 0) {
			noFill();
		}
		pop();
		timer = 300;
	}
}

function sevenMinTimer() {
	if (frameCount % 60 == 0 && sevTimer > 0) {
		sevTimer--;
		console.log(sevTimer);
	}
	if (sevTimer == 0) {
		push();
		textAlign(CENTER);
		text("Hey there.\nRemember to take a break!", 50, 450);
		pop();
	}
}

/*HERE LIE THE CUSTOMIZING BUTTONS, WHERE THOU SHALT CHANGE BACKGROUND COLOURS.*/

function changeColorBG() {
	redBut = createButton("Red");
	redBut.style(styleBut, defColor);
	redBut.position(25, 25);
	redBut.mousePressed(redColorBG);
	
	blueBut = createButton("Blue");
	blueBut.style(styleBut, defColor);
	blueBut.position(75, 25);
	blueBut.mousePressed(blueColorBG);
	
	yelBut = createButton("Yellow");
	yelBut.style(styleBut, defColor);	
	yelBut.position(125, 25);
	yelBut.mousePressed(yellowColorBG);
	
	purpBut = createButton("Purple");
	purpBut.style(styleBut, defColor);	
	purpBut.position(190, 25);
	purpBut.mousePressed(purpleColorBG);
    push();
    textAlign(CENTER);
    text("change bg color", 135, 15);
    pop();
}

function redColorBG() {
    background(255, 105, 97);
  }
function blueColorBG() {
    background(178, 234, 255);
  }
function yellowColorBG() {
    background(253, 253, 150);
  }
function purpleColorBG() {
    background(177, 156, 217);
  }

function changeStyleBut() {
	redStyleBut = createButton("Red");
	redStyleBut.style(styleBut, defColor);
	redStyleBut.position(20, 345);
	redStyleBut.mousePressed(redColorButton);
	
	blueStyleBut = createButton("Blue");
	blueStyleBut.style(styleBut, defColor);
	blueStyleBut.position(65, 345);
	blueStyleBut.mousePressed(blueColorButton);
	
	yelStyleBut = createButton("Yellow");
	yelStyleBut.style(styleBut, defColor);
	yelStyleBut.position(5, 370);
	yelStyleBut.mousePressed(yellowColorButton);
	
	purpStyleBut = createButton("Purple");
	purpStyleBut.style(styleBut, defColor);
	purpStyleBut.position(65, 370);
	purpStyleBut.mousePressed(purpleColorButton);
	push();
	textAlign(CENTER);
	text("change\n button color", 160, 370);
	pop();
}

function redColorButton() {
	defColor = color(255, 178, 174);
}

function blueColorButton() {
	defColor = color(174, 211, 255);
}

function yellowColorButton() {
	defColor = color(254, 255, 225);
}

function purpleColorButton() {
	defColor = color(221, 211, 238);
}

