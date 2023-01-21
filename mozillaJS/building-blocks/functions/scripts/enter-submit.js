function everything () {


const input = document.querySelector('#text-box');
const btnSubmit = document.querySelector('button');

function printTextNewParagraph() {
	let paragraph = document.createElement('p');
	paragraph.textContent = input.value;
	document.body.appendChild(paragraph);
	input.value = "";
	input.focus();
}

function logKey(keyEvent, b, c, d) {
	b = c = d = keyEvent.keyCode;
	console.log(b, c + 1, d + 7);
	if (keyEvent.keyCode === 13)
		printTextNewParagraph();
}


btnSubmit.addEventListener('click', printTextNewParagraph);
// input.addEventListener('keydown', function(keyEvent, b, c, d) {
// 	b = c = d = keyEvent.keyCode;
// 	console.log(b, c + 1, d + 7);
// 	if (keyEvent.keyCode === 13)
// 		printTextNewParagraph();
// });

input.addEventListener('keydown', (keyEvent, b, c, d) => {
	b = c = d = keyEvent.keyCode;
	console.log(b, c + 1, d + 7);
	if (keyEvent.keyCode === 13)
		printTextNewParagraph();
});

}

everything();

