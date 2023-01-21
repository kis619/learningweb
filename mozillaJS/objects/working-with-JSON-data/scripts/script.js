async function populate () {
	const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
	const request = new Request(requestURL);
	
	const response =  await fetch(request);
	// const superHeroes = await response.json();
	const superHeroesText = await response.text();
	const superHeroes = JSON.parse(superHeroesText);

	populateHeader(superHeroes);
	populateHeroes(superHeroes);
}

function populateHeader(obj) {
	const header	= document.querySelector('header');
	const myH1		= document.createElement('h1');

	myH1.textContent	= obj.squadName;
	header.appendChild(myH1);

	const myPara		= document.createElement('p');
	myPara.textContent	= `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
	header.appendChild(myPara);
}

function populateHeroes(obj)
{
	const section = document.querySelector('section');
	const heroes = obj.members;

	for (const hero of heroes) {
		const name = hero.name;
		const secretIdentity = hero.secretIdentity;
		const age = hero.age;
		const superPowers = hero.powers;

		const article = document.createElement('article');
		const myH2 = document.createElement('h2');
		const myPara1 = document.createElement('p');
		const myPara2 = document.createElement('p');
		const myPara3 = document.createElement('p');
		const list = document.createElement('ul');

		myH2.textContent = name;
		myPara1.textContent = `Secret Identity: ${secretIdentity}`;
		myPara2.textContent = `Age: ${age}`;
		myPara3.textContent = 'Superpowers:'

		
		for (const power of superPowers)
		{
			const listItem = document.createElement('li');
			listItem.textContent = power;
			list.appendChild(listItem);
		}
		
		article.appendChild(myH2);
		article.appendChild(myPara1);
		article.appendChild(myPara2);
		article.appendChild(myPara3);
		article.appendChild(list)
		section.appendChild(article);
	}
}
populate();