let i = 500;
const paragraph = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
	if(num % i === 0) {
	  return false;
	}
  }

  return true;
}

for (let j = 2; j < i; i-- )
{
	if (isPrime(i)){
		paragraph.textContent += `${i} `;
	}
}
// Add your code here


// Don't edit the code below here!
const section3 = document.querySelector('section');
section3.appendChild(paragraph);


// TASK2
const name = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]
for (const obj in phonebook)
{
	const currName = phonebook[obj].name;

	if (currName === name)
	{
		para.textContent = `The number is: ${phonebook[obj].number}`;
	}
}
// Add your code here

// Don't edit the code below here!
const section2 = document.querySelector('#task2');
section2.appendChild(para);






// TASK 1
const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (const food of myArray)
{
	const li = document.createElement('li');
	li.textContent = food;
	list.appendChild(li);
}
// Don't edit the code below here!

const section = document.querySelector('#task1');
section.appendChild(list);