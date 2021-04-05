var buttons = document.querySelectorAll(".drum");


// play sound when button / key is pressed
function associateSound(buttonText) {

	switch (buttonText) {
		case "w":
		var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
		break;

		case "a":
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
		break;

		case "s":
		var snare = new Audio("sounds/snare.mp3");
		snare.play();
		break;

		case "d":
		var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
		break;

		case "j":
		var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
		break;

		case "k":
		var kick = new Audio("sounds/kick-bass.mp3");
		kick.play();
		break;

		case "l":
		var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
		break;

		default: console.log(buttonText);
	}
}

function animateButton(button) {
	var buttonSelected = document.querySelector("." + button);

	buttonSelected.classList.add("pressed");

	setTimeout(function() {
		buttonSelected.classList.remove("pressed")
	}, 100);
}

document.addEventListener("keydown", function(event) {
	associateSound(event.key);
	animateButton(event.key);
});

for (var i = 0; i <= buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		associateSound(this.innerText);
		animateButton(this.innerText);
	});
}

