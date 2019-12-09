//The server for this code is http://127.0.0.1:8887


let inp, sub, redBut, blueBut, yelBut, purpBut, startB, isBG, defColor, reminder, frame, remindernoise, catte, catte2, bubbles; // variables
let alarmTimer = 60 // default alarmtimer set to 1 minute
let styleBut = 'background-color'; // style of button
let selfCareList = ["also, please eat something", "also, please drink something", "also, please blink", "also, please save your work", "also, please listen to something that calms you"] // little reminders~
let bubbleArray = []; // empty bubble array

function setup() { // SETTING UP SELECT VARIABLES AND THE INPUT!
	createCanvas(500, 400); // setting up canvas
	customReminder(); // setting up input for personal reminders
	background(255, 105, 97); // set up background
	defColor = color(255, 50); // default button color
	reminder = random(selfCareList); // setting up little reminder~
	remindernoise = loadSound("chime.wav"); // loading alarm
	remindernoise.setVolume(0.3); // Setting alarm volume because I don't want anyone going deaf lol
	catte = loadImage("catte.png"); // cat1
	catte2 = loadImage("catte2.png"); // cat2
	bubbles = loadImage("bubble.png"); // bubble
	for (let i = 0; i <= 50; i++){
		bubbleArray.push(new Bubbles(bubbles)); // pushing new classes to bubble array~
	}
}

function draw() { //DRAWING EVERYTHING!!!!!!
	constBG(); // constant BG so there's no draw-over
	for (let i = 0; i < bubbleArray.length; i++){
		bubbleArray[i].display(); // showing the bubbles
		bubbleArray[i].move(); // moving the bubbles
		if (bubbleArray[i].locY == -20){
			bubbleArray[i].locY = random(height, height*2); // creating new bubbles when they reach the top
		}
	}
	currentTime(); // DISPLAYS CURRENT TIME
	changeColorBG(); // BUTTONS FOR BACKGROUND COLOR
	changeStyleBut(); // BUTTONS FOR BUTTON COLOR
	aniMoji(); // cats~
	startButton(); // TIMED REMINDER START BUTTON
	fiveButton(); // SETS UP STARTBUTTON FOR 5 MINUTES
	tenButton(); // SETS UP STARTBUTTON FOR 10 MINUTES
	fifteenButton(); // SETS UP STARTBUTTON FOR 15 MINUTES
	push();
	textAlign(CENTER);
	text(reminder, width/2, 300); // puts up little reminders <3
	pop();
	extraText();
}

function customReminder() { // Where custom input is taken
	inp = createInput('rest'); // creates input, with rest as a default
  inp.position(327, 325);

}

function extraText(){ // Where extra text is applied!
	push();
	textAlign(CENTER);
	textSize(10);
	text("set custom\nreminder -->", 290, 332); // Points you to where you type your custom reminder
	pop();
	push();
	textAlign(CENTER);
	textSize(10);
	text("set reminder time -->", 290, 390); // Points you to where you select a time to be reminded~
	pop(); 
}

function outPut() { // Where output for custom reminder is taken!
	let input = inp.value(); // Takes input that you typed
	push();
	rectMode(CENTER);
	noStroke();
	rect(width/2, height/2, 250, 50);
	pop();
	push();
    textAlign(CENTER);
    text("Here's your reminder to "+ input + "!", width/2, height/2); // Sets up a reminder in the center~
	pop();
	
}

function currentTime() { // Where current time is kept!!
	let h = hour(); // Current hour
  if (minute() < 10) { 
    let m = '0' + str(minute()); // If minute is less than 10, set up 0# values
    push();
	fill(0);
	textSize(20);
	text(h +":" + m, 420, 30);
	pop();
  } else {
    let m = minute(); // If minute is 10 or more; leave it as is
    push();
	fill(0);
	textSize(20);
	text(h +":" + m, 420, 30);
	pop();
  }
}

/*HERE LIETH THE REMINDER TIME BUTTONS, WHERE THOU SHALT BE REMINDED EVERY INTERVAL TO TAKE A BREAK!*/

function startButton(){ // Where timer button is started!!!
	startB = createButton("start timer");
	startB.style(styleBut, defColor);	
	startB.style("border", "5px");
	startB.position(250, 355);
	startB.mousePressed(timerCountdown); // Counts down till timed reminder
}

function fiveButton(){ // Five minute timer button
	startB = createButton("5 min");
	startB.style(styleBut, defColor);	
	startB.style("border", "5px");
	startB.position(380, 354);
	startB.mousePressed(fiveMin); // Sets up timed reminder to 5 min
}

function tenButton(){ // Ten minute timer button
	startB = createButton("10 min");
	startB.style(styleBut, defColor);	
	startB.style("border", "5px");
	startB.position(350, 374);
	startB.mousePressed(tenMin); // Sets up timed reminder to 10 min
}

function fifteenButton(){ // Fifteen minute timer button
	startB = createButton("15 min");
	startB.style(styleBut, defColor);	
	startB.style("border", "5px");
	startB.position(410, 374);
	startB.mousePressed(fifteenMin); // Sets up timed reminder to 15 min
}

function fiveMin(){ // Set timer to five minutes.
	alarmTimer = 5 * 60;
}

function tenMin(){ // Set timer to ten minutes.
	alarmTimer = 10 * 60;
}

function fifteenMin(){ // Set timer to fifteen minutes.
	alarmTimer = 15 * 60;
}

/*HERE LIETH THE TIMERCOUNTDOWN, WHERE TIME SHALL BE COUNTED UNTIL THE TIME SELECTED IS UP, IN WHICH AN ALARM WILL SOUND.*/

function timerCountdown() { // TIMER COUNTDOWN!!!!!!!!!!!!
  setInterval(function() { // The function that facilitates counting down~
    if (alarmTimer > 0) {
      alarmTimer--; // Decrease by 1
      console.log(alarmTimer);
    }
    if (alarmTimer == 0){
    	push();
		remindernoise.play();
		stopPlay = createButton("Hey there. Remember to take a break!");
		startB.style(styleBut, defColor);	
		startB.style("border", "5px");
		stopPlay.position(width/2 - 120, 125);
		stopPlay.mousePressed(stopChime);
    }
  }, 1000); // I'm guessing 1000 is for milliseconds??? idk man
}

function stopChime(){ // STOP ALARM!!!!!!!!!!!!!
	remindernoise.stop();
	clear();
	alarmTimer = 1000000000000000000000000000000000000000000000000000000; // near infinity~
	stopPlay.remove(); // remove that pesky button
}

/*HERE LIETH OTHER FUN AESTHETIC FUNCTIONS I GUESS.*/

function aniMoji(){ // cute cats to accompany you!!!!!!!!!!!!!!!!!!!!
	push();
	tint(255, 150);
	image(catte, 40, 120, 70, 50);
	pop();
	push();
	tint(255, 150);
	image(catte2, 390, 220, 70, 50);
	pop();
}

/*HERE LIETH THE ONLY CLASS IN THIS CODE: THE BUBBLE CLASS, WITH WHICH BUBBLES SHALL BE MADE TO FLOAT. */

class Bubbles {
	constructor(tempImg) { // GENERATE VARIABLES TO BE USED
		this.locX = random(width); // X POSITION
		this.locY = random(height, height*2); // Y POSITION
		this.maxY = 0; // MAX HEIGHT
		this.speed = -0.9 * 3; // SPEED OF CLASS
		this.img = tempImg; //IMAGE
	}
	
	move() { // MOVES THE OBJECT
		this.locY += this.speed;
	}

	display(){
		push();
		tint(0, 25);
		image(this.img, this.locX, this.locY, 60, 60);
		pop();
	}
}
/*HERE LIE THE CUSTOMIZING BUTTONS, WHERE THOU SHALT CHANGE BACKGROUND COLOURS.*/

function changeColorBG() {
	styleBut = 'background-color';
	
	//RED
	redBut = createButton("Red");
	redBut.style(styleBut, defColor);
	redBut.style("border", "5px");
	redBut.position(25, 25);
	redBut.mousePressed(redColorBG);
	
	//BLUE
	blueBut = createButton("Blue");
	blueBut.style(styleBut, defColor);
	blueBut.style("border", "5px");
	blueBut.position(75, 25);
	blueBut.mousePressed(blueColorBG);
	
	//YELLOW
	yelBut = createButton("Yellow");
	yelBut.style(styleBut, defColor);	
	yelBut.style("border", "5px");
	yelBut.position(125, 25);
	yelBut.mousePressed(yellowColorBG);
	
	//PURPLE
	purpBut = createButton("Purple");
	purpBut.style(styleBut, defColor);
	purpBut.style("border", "5px");
	purpBut.position(190, 25);
	purpBut.mousePressed(purpleColorBG);
    push();
    textAlign(CENTER);
    text("change bg color", 135, 15);
    pop();
}

function redColorBG() {
	background(255, 105, 97);
	isBG = 1;
  }
function blueColorBG() {
	background(178, 234, 255);
	isBG = 2;
  }
function yellowColorBG() {
	background(253, 253, 150);
	isBG = 3;
  }
function purpleColorBG() {
	background(177, 156, 217);
	isBG = 4;
  }

/*HERE LIETH THE CONSTANT BACKGROUND FUNCTION, WHERE DRAWOVER IS DENIED AND BALANCE IS KEPT WITHIN THE VISUALS OF THE CODE. */

function constBG(){
	if (isBG == 1){
		background(255, 105, 97);
	} else if (isBG == 2){
		background(178, 234, 255);
	} else if (isBG == 3){
		background(253, 253, 150);
	} else if (isBG == 4){
		background(177, 156, 217);
	}
	outPut();
}


  /*THIS IS WHERE THOU CHANGE THE COLOUR OF THE BUTTON WITH THE CHANGESTYLEBUT FUNCTION*/
function changeStyleBut() {
	//RED
	redStyleBut = createButton("Red");
	redStyleBut.style(styleBut, defColor);
	redStyleBut.style("border", "5px");
	redStyleBut.position(20, 345);
	redStyleBut.mousePressed(redColorButton);
	
	//BLUE
	blueStyleBut = createButton("Blue");
	blueStyleBut.style(styleBut, defColor);
	blueStyleBut.style("border", "5px");
	blueStyleBut.position(65, 345);
	blueStyleBut.mousePressed(blueColorButton);

	//YELLOW
	yelStyleBut = createButton("Yellow");
	yelStyleBut.style(styleBut, defColor);
	yelStyleBut.style("border", "5px");
	yelStyleBut.position(5, 370);
	yelStyleBut.mousePressed(yellowColorButton);
	
	//PURPLE
	purpStyleBut = createButton("Purple");
	purpStyleBut.style(styleBut, defColor);
	purpStyleBut.style("border", "5px");
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

// (;_;) pls take care of urself