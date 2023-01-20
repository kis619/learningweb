const btn = document.querySelector('button');
const box = document.querySelector('div');
const video = document.querySelector('video');

btn.addEventListener('click', () => box.classList.remove('hidden'));
video.addEventListener('click', (event) => {
	event.stopPropagation();
	video.play()
});
box.addEventListener('click', () => box.classList.add('hidden'));

const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('#container button');

document.body.addEventListener('click', handleClick, { capture: true });
container.addEventListener('click', handleClick, { capture: true });
button.addEventListener('click', handleClick);


function random(number) {
	return Math.floor(Math.random()*number);
  }
  
  function bgChange() {
	const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
	return rndCol;
  }
  
  const conta = document.querySelector('#tile-container');
  
  conta.addEventListener('click', (event) => event.target.style.backgroundColor = bgChange());
  