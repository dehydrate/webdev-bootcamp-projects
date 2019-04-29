var NUM_SQUARES = 6;
colors = generateColors(NUM_SQUARES);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var color_display = document.querySelector("#color_display");
color_display.textContent = picked;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modes = document.querySelectorAll(".mode");


initSquares();

for (var i = 0; i < modes.length; i++) {
	modes[i].addEventListener("click", function() {
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy")
			NUM_SQUARES = 3;
		else
			NUM_SQUARES = 6;
		reset();
	});
}


function reset() {
	messageDisplay.textContent = "";
	colors = generateColors(NUM_SQUARES);
	picked = pickColor();
	color_display.textContent = picked;
	initSquares();
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click", reset);

function squareClickListener() {
	if (this.style.backgroundColor === picked) {
		messageDisplay.textContent = "Correct!";
		changeColors(picked);
		h1.style.backgroundColor=picked;
		resetButton.textContent="Play Again";
	}
	else {
		this.style.backgroundColor="#232323";
		messageDisplay.textContent = "Try Again";
	}
}

function changeColors(color) {
	for (var i = 0; i < colors.length; i++)
		squares[i].style.backgroundColor = color;
}

function pickColor() {
	var num = Math.floor(Math.random()*colors.length);
	return colors[num];
}

function generateColors(size) {
	result = [];
	for (var i = 0; i < size; i++)
		result.push(randomColor());
	return result;
}

function randomColor() {
	s = "rgb(";
	s += Math.floor(Math.random()*256)+", ";
	s += Math.floor(Math.random()*256)+", ";
	s += Math.floor(Math.random()*256)+")";
	return s;
}

function initSquares() {
	for (var i = 0; i < squares.length; i++)
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
			squares[i].addEventListener("click", squareClickListener);
		}
		else
			squares[i].style.display = "none";
}