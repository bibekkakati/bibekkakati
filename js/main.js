let scrollButton = document.getElementById("scrollButton");
let copyright = document.getElementById("copyright");
scrollButton.onclick = function () {
	window.scrollTo(0, window.innerHeight);
};
copyright.innerHTML += `${new Date().getFullYear()}`;
