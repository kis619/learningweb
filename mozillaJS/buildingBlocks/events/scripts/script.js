const colorBtn = document.querySelector('button');

function randomNUmber(number) {
	return Math.floor(Math.random() * number);
}
function changeBodyBGColour () {
	const randomColor = `rgb(${randomNUmber(255)}, ${randomNUmber(255)}, ${randomNUmber(255)})`;
	document.body.style.backgroundColor = randomColor;
}

function changeButtonBGColour (event) {
	const randomColor = `rgb(${randomNUmber(255)}, ${randomNUmber(255)}, ${randomNUmber(255)})`;
	event.target.style.backgroundColor = randomColor;
}
// colorBtn.addEventListener('click', changeBodyBGColour);
colorBtn.addEventListener('click', changeButtonBGColour);
colorBtn.onclick = changeBodyBGColour;

const input = document.querySelector('input');
const list = document.querySelector('ul');

let counter = 1;
function pressedButton(event) {
	const para = document.createElement('p');
	para.textContent = `You pressed: ${event.key}`;
	list.prepend(para);
	if (counter > 5)
	{
		const lastElement = list.lastChild;
		lastElement.remove();
	}
	document.body.appendChild(list);
	counter++;
}
input.addEventListener('keydown', pressedButton);