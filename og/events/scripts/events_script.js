var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("click", function() {
	console.log("event = click");
})

numOne.addEventListener("mouseenter", function() {
	console.log("event = mouseenter");
})

numOne.addEventListener("mouseleave", function() {
	console.log("event = mouseleave");
})

numOne.addEventListener("focus", function() {
	console.log("event = focus");
})

numOne.addEventListener("mousedown", function() {
	console.log("event = mousedown");
})

numOne.addEventListener("mouseup", function() {
	console.log("event = mouseup");
})

numOne.addEventListener("keydown", function() {
	console.log("event = keydown");
})

numOne.addEventListener("keyup", function() {
	console.log("event = keyup");
})