const AudioContex = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContex();

const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');

const audioSource = audioCtx.createMediaElementSource(audioElement);
const gainNode = audioCtx.createGain();

playBtn.addEventListener('click', () => {

	if(audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
	
	if (playBtn.getAttribute('class') === 'paused') {
		audioElement.play();
		playBtn.setAttribute('class', 'playing');
		playBtn.textContent = 'Pause';
	}
	else if (playBtn.getAttribute('class') === 'playing')
	{
		audioElement.pause();
		playBtn.setAttribute('class', 'paused');
		playBtn.textContent = 'Play';
	}
});

audioElement.addEventListener('ended', () => {
	playBtn.setAttribute('class', 'paused');
	playBtn.textContent = 'Replay';
});

volumeSlider.addEventListener('input', () => {
	gainNode.gain.value = volumeSlider.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);