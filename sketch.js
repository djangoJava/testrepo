/*

The Game Project

Week 3 (For me it is in Week 8)

Game interaction

*/
/* 1. Inspect the code [0 marks] : Done behinde the scene ): */ 

/* 2. 
	2.a Create variables for interaction [1 marks]: (Here)
	2.b Initialising each of them to `false`:  (in function setup()) */
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var gameChar_x;
var gameChar_y;
var floorPos_y;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	/* 2.b Initialising each of them to `false` */
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	/* 5. Add game character [1 marks] */
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(0);
		rect(gameChar_x - 2, gameChar_y - 20, 15, 10);
		fill(255,0,0);
		rect(gameChar_x - 10, gameChar_y - 55, 20, 40);
		fill(255,150,150);
		ellipse(gameChar_x, gameChar_y - 55, 25, 30);
		rect(gameChar_x - 18, gameChar_y - 40, 8, 10); // hand1
		fill(0); // eye
		ellipse(gameChar_x - 5, gameChar_y - 60, 5, 3);
		fill(50); // nose
		triangle(gameChar_x - 10, gameChar_y - 55,
			gameChar_x - 10, gameChar_y - 50,
			gameChar_x - 15, gameChar_y - 50);
		fill(0); // mouth
		ellipse(gameChar_x - 7, gameChar_y - 45, 8, 3);
		fill(0)
		rect(gameChar_x - 15, gameChar_y - 27, 10, 10);
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(0);
		rect(gameChar_x - 12, gameChar_y - 20, 15, 10);
		fill(255,0,0);
		rect(gameChar_x - 10, gameChar_y - 55, 20, 40);
		fill(255,150,150);
		ellipse(gameChar_x, gameChar_y - 55, 25, 30);
		rect(gameChar_x + 10, gameChar_y - 40, 8, 10); // hand1
		fill(0); // eye
		ellipse(gameChar_x + 5, gameChar_y - 60, 5, 3);
		fill(50); // nose
		triangle(gameChar_x + 10, gameChar_y - 55,
			gameChar_x + 10, gameChar_y - 50,
			gameChar_x + 15, gameChar_y - 50);
		fill(0); // mouth
		ellipse(gameChar_x + 7, gameChar_y - 45, 8, 3);
		fill(0)
		rect(gameChar_x + 5, gameChar_y - 27, 10, 10);
	}
	else if(isLeft)
	{
		// add your walking left code
		fill(0);
		rect(gameChar_x - 12, gameChar_y - 10, 15, 10);
		fill(255,0,0);
		rect(gameChar_x - 10, gameChar_y - 55, 20, 50);
		fill(255,150,150);
		ellipse(gameChar_x, gameChar_y - 55, 25, 40);
		fill(0); // eye
		ellipse(gameChar_x - 5, gameChar_y - 60, 5, 3);
		fill(50); // nose
		triangle(gameChar_x - 10, gameChar_y - 55,
			gameChar_x - 10, gameChar_y - 50,
			gameChar_x - 15, gameChar_y - 50);
		fill(0); // mouth
		ellipse(gameChar_x - 7, gameChar_y - 45, 8, 3);
		fill(35)
		rect(gameChar_x, gameChar_y - 10, 15, 10);
		fill(255,0,0); // hand
		stroke(255,200,200);
		rect(gameChar_x + 3, gameChar_y - 33, 5, 15);
	}
	else if(isRight)
	{
		// add your walking right code
		fill(0);
		rect(gameChar_x, gameChar_y - 10, 15, 10);
		fill(255,0,0);
		rect(gameChar_x - 10, gameChar_y - 55, 20, 50);
		fill(255,150,150);
		ellipse(gameChar_x, gameChar_y - 55, 25, 40);
		fill(0); // eye
		ellipse(gameChar_x + 5, gameChar_y - 60, 5, 3);
		fill(50); // nose
		triangle(gameChar_x + 10, gameChar_y - 55,
			gameChar_x + 10, gameChar_y - 50,
			gameChar_x + 15, gameChar_y - 50);
		fill(0); // mouth
		ellipse(gameChar_x + 7, gameChar_y - 45, 8, 3);
		fill(35)
		rect(gameChar_x - 12, gameChar_y - 10, 15, 10);
		fill(255,0,0); // hand
		stroke(255,200,200);
		rect(gameChar_x - 8, gameChar_y - 33, 5, 15);
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(255,0,0);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 40);
		fill(255,150,150);
		ellipse(gameChar_x, gameChar_y - 55, 35, 35);
		rect(gameChar_x + 10, gameChar_y - 40, 8, 10); // hand1
		rect(gameChar_x - 20, gameChar_y - 40, 8, 10); // hand2
		fill(0); // eyes
		ellipse(gameChar_x - 10, gameChar_y - 60, 5, 8);
		ellipse(gameChar_x + 10, gameChar_y - 60, 5, 8);
		fill(255,0,0); // nose
		triangle(gameChar_x, gameChar_y - 58,
			gameChar_x - 5, gameChar_y - 53,
			gameChar_x + 5, gameChar_y - 53);
		fill(0); // mouth
		ellipse(gameChar_x, gameChar_y - 47, 12, 3);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 27, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 27, 10, 10);

	}
	else
	{
		// add your standing front facing code
		fill(255,0,0);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(255,150,150);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0); // eyes
		ellipse(gameChar_x - 10, gameChar_y - 60, 5, 8);
		ellipse(gameChar_x + 10, gameChar_y - 60, 5, 8);
		fill(255,0,0); // nose
		triangle(gameChar_x, gameChar_y - 58,
			gameChar_x - 5, gameChar_y - 53,
			gameChar_x + 5, gameChar_y - 53);
		fill(0); // mouth
		ellipse(gameChar_x, gameChar_y - 47, 12, 3);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	/* 6. Make the game character move left and right [2 marks] */
	if (isLeft) {
		gameChar_x -= 3;
	}
	if (isRight) {
		gameChar_x += 3;
	}

	/* 8. Add gravity [2 marks] */
	if (gameChar_y < floorPos_y) {
		gameChar_y += 1;
		isFalling = true;
	}
	else {
		isFalling = false;
	}
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	/* 3. Implement left and right for keyPressed [1 marks] */
	if (keyCode == 37 || keyCode == 65) {
		/*3.a isLeft = true when the 'a' or 'ArrowLeft' key is pressed */
		console.log("left arrow");
		isLeft = true;
	} 
	else if (keyCode == 39 || keyCode == 68) {
		/*3.b. isRight = true when the 'd' or 'ArrowRight' key is pressed */
		console.log("right arrow");
		isRight = true;
	}

	/* 7. Make the game character jump [2 marks] */
	/* 9. Prevent double jumps [1 marks] : !isFalling deals with that) */
	if ((keyCode == 38 || keyCode == 87) && (!isFalling)) {
	 	/*7.a gameChar_y -= 100 when the 'w' or 'ArrowUp' key is pressed */
	 	console.log("Up arrow");
		gameChar_y -= 100;
	} 
}

/* 4. Implement left and right for keyReleased [1 marks] */
function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

	if (keyCode == 37 || keyCode == 65) {
		/*4.a isLeft = false when the 'a' or 'ArrowLeft' key is released */
		console.log("left arrow");
		isLeft = false;
	} 
	else if (keyCode == 39 || keyCode == 68) {
		/*4.b. isRight = false when the 'd' or 'ArrowRight' key is released */
		console.log("right arrow");
		isRight = false;
	}
}
