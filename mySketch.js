let inp, sub, redBut, blueBut, yelBut, purpBut; //Variables that can change???

let styleBut = 'background-color'; //Setting BG style
let defColor; //Default color, but is actually the current color
let selfCareList = ["also, please eat something", "also, please drink something", "also, please blink", "also, please save your work", "also, please listen to something that calms you"] // List of extra reminders
let reminder; // additional reminder

let timer = 300; // 5 min timer

let sevTimer = 420; // 7 min timer

let remindernoise; // reminder noise

function setup() {
	createCanvas(500, 400); // creates Canvas
	customReminder(); // sets up input for custom reminder
	background(250); // default BG
	defColor = color(255, 50); // default button color
	reminder = random(selfCareList); // sets up additional reminder
	remindernoise = loadSound('chime2.wav'); // noise
}

function draw() {
	changeColorBG(); // changes color of BG
	changeStyleBut(); // changes color of button
	//bgFloats();
	//aniMoji();
	currentTime(); // tells current time
	timerFunct(); // 5 min timer
	submitButton(); // submits custom reminder
	push();
	textAlign(CENTER);
	text(reminder, width/2, 300); // sets up additonal reminder
	pop();
}

function customReminder() {
	inp = createInput(); // creates input for custom reminder
  inp.position(250, 350);
}

function submitButton() {
	sub = createButton('submit'); // creates submit custom input
	sub.style(styleBut, defColor);
	sub.style("border", "5px");
	sub.position(420, 350);
	sub.mousePressed(outPut); // when pressed, does the output function
}

function outPut() {
	let input = inp.value(); // takes what's in the input box
	push();
	rectMode(CENTER);
	noStroke();
	rect(width/2, height/2, 250, 50);
	pop();
	push();
    textAlign(CENTER);
    text("Here's your reminder to "+ input + "!", width/2, height/2); // puts up custom reminder
	pop();
	sevenMinTimer(); // sets up 7 min timer
	remindernoise.play(); // plays reminder noise
	
}

function currentTime() {
	let h = hour(); // sets up hour
  if (minute() < 10) { // if 0-09 is the minute
    let m = '0' + str(minute()); // adds a 0 before number
    push();
	fill(0);
	textSize(20);
	text(h +":" + m, 420, 30);
	pop();
  } else {
    let m = minute(); //else, display as normal
    push();
	fill(0);
	textSize(20);
	text(h +":" + m, 420, 30); // displays current time
	pop();
  }
}

function timerFunct() {
	if (frameCount % 60 == 0 && timer > 0) { // if a second has passed
		timer--;
		console.log(timer); // used to mark the time
	}
	if (timer == 0) {
		let breakTimer = 180; // 3 mins to show thing
		push();
		textAlign(CENTER);
		text("Hey there.\nRemember to take a break!", 450, 450); // tells you to take a break!
		if (frameCount % 60 == 0 && timer > 0) {
		breakTimer--; // decreases break timer
		}
		if (breakTimer == 0) {
			noFill();
		}
		pop();
		timer = 300; // resets timer
	}
}

function sevenMinTimer() {
	if (frameCount % 60 == 0 && sevTimer > 0) { // counts down 7 minutes
		sevTimer--;
		console.log(sevTimer); // keep track of time
	}
	if (sevTimer == 0) {
		push();
		textAlign(CENTER);
		text("Hey there.\nRemember to take a break!", 50, 450); // same shit as previous timer
		pop();
	}
}

/*HERE LIE THE CUSTOMIZING BUTTONS, WHERE THOU SHALT CHANGE BACKGROUND COLOURS.*/

function changeColorBG() {
	// RED BACKGROUND
	redBut = createButton("Red");
	redBut.style(styleBut, defColor);
	redBut.position(25, 25);
	redBut.mousePressed(redColorBG);
	
	// BLUE BACKGROUND
	blueBut = createButton("Blue");
	blueBut.style(styleBut, defColor);
	blueBut.position(75, 25);
	blueBut.mousePressed(blueColorBG);
	
	// YELLOW BACKGROUND
	yelBut = createButton("Yellow");
	yelBut.style(styleBut, defColor);	
	yelBut.position(125, 25);
	yelBut.mousePressed(yellowColorBG);
	
	// PURPLE BACKGROUND
	purpBut = createButton("Purple");
	purpBut.style(styleBut, defColor);	
	purpBut.position(190, 25);
	purpBut.mousePressed(purpleColorBG);
    push();
    textAlign(CENTER);
    text("change bg color", 135, 15); // indicats bg change buttons
    pop();
}

// HERE ARE THE FUNCTIONS TO CHANGE BG COLOR
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

//CHANGING BUTTON COLOR
function changeStyleBut() {
	// RED BUTTON COLOR
	redStyleBut = createButton("Red");
	redStyleBut.style(styleBut, defColor);
	redStyleBut.position(20, 345);
	redStyleBut.mousePressed(redColorButton);
	
	// BLUE BUTTON COLOR
	blueStyleBut = createButton("Blue");
	blueStyleBut.style(styleBut, defColor);
	blueStyleBut.position(65, 345);
	blueStyleBut.mousePressed(blueColorButton);
	
	// YELLOW BUTTON COLOR
	yelStyleBut = createButton("Yellow");
	yelStyleBut.style(styleBut, defColor);
	yelStyleBut.position(5, 370);
	yelStyleBut.mousePressed(yellowColorButton);
	
	// PURPLE BUTTON COLOR
	purpStyleBut = createButton("Purple");
	purpStyleBut.style(styleBut, defColor);
	purpStyleBut.position(65, 370);
	purpStyleBut.mousePressed(purpleColorButton);
	push();
	textAlign(CENTER);
	text("change\n button color", 160, 370); // indicates button color changers
	pop();
}

// HERE ARE THE FUNCTIONS TO CHANGE COLOR BUTTONS
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

