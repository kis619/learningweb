var boxNumOne = document.getElementById("num-one");
var boxNumTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

boxNumOne.addEventListener("input", add)
boxNumTwo.addEventListener("input", add)

function add(){
	// console.log("Input event triggered");
	var one = parseFloat(boxNumOne.value) || 0;
	var two = parseFloat(boxNumTwo.value) || 0;
	addSum.innerHTML = "The sum is: " + (one + two);
}