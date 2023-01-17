const btn = document.querySelector('div button');
const canvas = document.querySelector('div canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {

	canvas.width	= document.documentElement.clientWidth;
	canvas.height	= document.documentElement.clientHeight / 2;

	canvas.style.backgroundColor = "yellow";
});

function random(number) {
	return (Math.floor(Math.random() * number));
}

function draw() {
	console.log("activated");
	console.log(ctx);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < 2; i++)
	{
		ctx.beginPath();
		ctx.fillStyle = 'rgba(87,0,0,0.5)';
		ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
		ctx.fill();
	}
}

btn.addEventListener('click', draw);