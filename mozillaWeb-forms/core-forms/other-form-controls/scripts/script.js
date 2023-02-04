const progBar = document.querySelector("#test");
const statusV = document.querySelector("#progress-status");

statusV.style.display = "inline";
statusV.style.margin = "20px";
// progBar.addEventListener('input');

// progBar.value = 20;


function updateProgBar() {
	progBar.value += 1;
	statusV.textContent = progBar.value;
	if (progBar.value === progBar.max)
	{
		clearInterval(interval);
		progBar.value = 0;
		interval = setInterval(updateProgBar, interval * 100);
		console.log(interval);
	}
}

let interval = setInterval(updateProgBar, 100);
