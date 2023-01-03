// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


/*
	my solution
	I updated the html to contain a new image,
	then gave it a class 'hide',
	then updated the css to not display hides
*/
// let allPics = document.querySelectorAll("img");

// let j = allPics.length;
// for (let i = 0; i < j; i++) {
// 	allPics[i].addEventListener("click", changePic);
// }

// function changePic() {
// 	for (let i = 0; i < j; i++) {
// 		allPics[i].className = "";
// 	}
// 	this.className = "hide";
// }

//mozilla solution for swapping two pics

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dog-window.jpg") {
    myImage.setAttribute("src", "images/kitten.jpeg");
  } else {
    myImage.setAttribute("src", "images/dog-window.jpg");
  }
};

//personalised greeting
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("userName")) {
	console.log("this one");
	setUserName();
} else if ((localStorage.getItem("userName")  === "null")){
	setUserName();
	console.log("else if");
	console.log(localStorage.getItem("userName"));
} else {
	console.log("this else one");
	console.log(localStorage.getItem("userName"));
	const storedName = localStorage.getItem("userName");
	myHeading.textContent = "The cats are sleeping and other cute things like you " + storedName;
}

myButton.onclick = () => {
	setUserName();
}

function setUserName() {
	const userName = prompt("Please enter your name: ");
	if (!userName){
		setUserName();
	} else {

		localStorage.setItem("userName", userName);
		myHeading.textContent = "The cats are sleeping and other cute things like you " + userName;
	}
}

  

