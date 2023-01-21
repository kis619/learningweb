const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	const  searchName = input.value.toLowerCase();
	input.value = "";
	input.focus();
	para.textContent = "";
	for (const contact of contacts) {
		const splitContact = contact.split(":");
		if (splitContact[0].toLowerCase() === searchName) {
			para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
			break ;
		}
	}
	if (para.textContent === '') {
		para.textContent = 'Contact not found.';
	}
});


const paragraph = document.querySelector("div p");
const inputField = document.querySelector("#number");
const button = document.querySelector("#generator");

button.addEventListener('click', () => {
	paragraph.textContent = "Output: ";
	const num = Number(inputField.value);
	inputField.value = "";
	inputField.focus();
	for (let i = 1; i <= num; i++)
	{
		let sqRoot = Math.sqrt(i);
		if (Math.floor(sqRoot) !== sqRoot)
			continue;
		paragraph.textContent += `${i} `;
	}
});