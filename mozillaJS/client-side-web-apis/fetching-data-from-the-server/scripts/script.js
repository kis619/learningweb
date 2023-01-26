const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.addEventListener('change', () => {
	const verse = verseChoose.value;
	updateDisplay(verse);
});

async function updateDisplay (verse) {
	try {
		verse = verse.replace(' ', '').toLowerCase();
		console.log(verse);
		const url = `database/${verse}.txt`;
	
		const lyrics = await fetch(url);
		if (!lyrics.ok) {
			throw new Error(`Whatevs`);
		}

		const properLyrics = await lyrics.text();
		console.log(properLyrics);
		poemDisplay.textContent = properLyrics;
	}
	catch (error) {
		poemDisplay.textContent = `Could not fetch verse: ${error}`;
		console.log("Catch error");
	}

}

verseChoose.value = 'Verse 1';
updateDisplay('Verse 1');