var numSquares = 6;
var colors = [];
var pickedColor ;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	setupMode();
	setupSquares();
	reset();
}

function setupMode(){
	for(var i= 0 ; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click",function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0;i<square.length;i++){
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor===pickedColor){
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else{
				messageDisplay.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function reset(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent="";
	resetButton.textContent="New Color";
	for(var i =0; i< square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
	reset();
});



function changeColor(color){
	for(var i = 0; i<colors.length; i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num; i ++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
