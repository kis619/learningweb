const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

console.log(width, height);
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgb(255, 0, 255, 0.75)";
ctx.fillRect(25, 100, 175, 50);

ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(230, 230, 230)";
ctx.strokeRect(49, 49, 101, 151);

ctx.lineWidth = 15;
ctx.strokeStyle = "rgb(230, 230, 230)";
ctx.strokeRect(300, 300, 101, 151);

function degToRad(degrees) {
	return degrees * Math.PI / 180;
}

ctx.fillStyle = "rgb(205, 0, 0, .75)";
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
ctx.fill();

ctx.lineWidth = 3;
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.arc(50, 50, 37, degToRad(40), degToRad(255), false);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(300, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(300, 106);
ctx.fill();

ctx.lineWidth = 1;
ctx.strokeText('Pain', 440, 400);

ctx.fillText('Without drugs', 440, 420);

ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 350, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 350, 150);

canvas.setAttribute("aria-label", "Canvas text");


const image = new Image();

image.src = "./images/dino.png";

image.addEventListener('load', () => ctx.drawImage(image, 510, 300));