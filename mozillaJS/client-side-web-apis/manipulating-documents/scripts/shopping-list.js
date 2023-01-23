const inputItem = document.querySelector('#input-item');
const addItemBtn = document.querySelector('#add-item button');
const list = document.querySelector('ul');
inputItem.value = '';

addItemBtn.addEventListener('click', addItemToList);
inputItem.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		addItemToList();
	}
});

function addItemToList() {
	if (inputItem.value === '')
		return ;
	const listItem = document.createElement('li');
	const span = document.createElement('span');
	const delBtn = createDeleteButton();

	span.textContent = inputItem.value;
	inputItem.value = '';
	listItem.appendChild(span);
	listItem.appendChild(delBtn);
	list.appendChild(listItem);
	inputItem.focus();
}

function createDeleteButton() {
	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = "Delete";
	deleteBtn.addEventListener('click', () => deleteBtn.closest('li').remove());
	return deleteBtn;
}