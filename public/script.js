const resMess = document.getElementById("response-message");
const errorSign = document.getElementById("error-sign");
const form = document.getElementById("form");
const searchInput = document.getElementById("search-field");

let regex = /^[a-z]\w*\@[a-z0-9]{3,}\.[a-z]{2,3}$/gi;
form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (regex.test(searchInput.value)) {
		resMess.style = "opacity: 1; color: green";
		resMess.textContent = "We'll notify you really soon";
		searchInput.value = "";
		setTimeout(() => {
			resMess.textContent = "...";
			resMess.removeAttribute("style");
		}, 3000);
	} else {
		resMess.style = "opacity: 1; color: red";
		resMess.textContent = "Please provide a valid email";
		this.style = "border: 1px solid red";
		errorSign.style = "display: block";
		setTimeout(() => {
			resMess.textContent = "...";
			resMess.removeAttribute("style");
			this.removeAttribute("style");
			errorSign.removeAttribute("style");
		}, 3000);
	}
});
