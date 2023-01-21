const person = {
	name: {first: "Krisi", last: "Milch"},
	age: 27,
	bio: function () {
		console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
	},
	introduceSelf () {
		console.log(`Hi! I'm ${this.name[0]}.`);
	},
};

person.age = 45;
person["name"]["last"] = "Cratchit";
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

function Person(name) {
	this.name = name;
	this.introduceSelf = function () {
	  console.log(`Hi! I'm ${this.name}.`);
	};
  }

  const dj = new Person("Katajina");