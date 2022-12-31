var fruit = ['apples', 'bananas', 'oranges'];

fruit[2] = "pineapples"

function go()
{
	alert("My name is Tom Riddle");
}
var myWeirdArray = ['word', 3, 3.5, go];

fruit.forEach(function(value, index) {
	console.log(value, index);
});
