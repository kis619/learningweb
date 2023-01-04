
var checklist = document.getElementById("checklist");

items = checklist.querySelectorAll("li");
inputs = checklist.querySelectorAll("input");

for (var i = 0, j = items.length; i < j; i++){
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
	console.log(this);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event) {
	if (event["which"] === 13) {
		updateItem.call(this);
	}
}