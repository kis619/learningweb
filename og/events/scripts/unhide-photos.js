var cat = document.getElementById("cat");
var dog = document.getElementById("dog");
var mouse = document.getElementById("mouse");

cat.addEventListener("click", picLink);
dog.addEventListener("click", picLink);
mouse.addEventListener("click", picLink);

function picLink() {
	var allImages = document.querySelectorAll("img");
	var picId = this.attributes["data-img-id"].value;
	var pic = document.getElementById(picId);

	for (var i = 0; i < allImages.length; i++) {
		if (pic != allImages[i])
			allImages[i].className = "hide";
	}
	if (pic.className === "hide"){
		pic.className = "";
	} else {
		pic.className = "hide";
	}

}

// cat.addEventListener('click', function () {
// 	// dogPic.className = 'hide';
// 	if (catPic.className === 'hide'){
// 		catPic.className = "";
// 	} else {
// 		catPic.className = 'hide';
// 	}
// })

// dog.addEventListener('click', function () {
// 	// catPic.className = 'hide';
// 	if (dogPic.className === 'hide'){
// 		dogPic.className = "";
// 	}else {
// 		dogPic.className = 'hide';
// 	}
// })

// mouse.addEventListener('click', function () {
// 	if (mousePic.className === 'hide'){
// 		mousePic.className = "";
// 	}else {
// 		mousePic.className = 'hide';
// 	}
// })