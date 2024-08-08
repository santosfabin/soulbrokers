document.getElementById("scroll-left").addEventListener("click", function () {
	document.querySelector(".container").scrollBy({
		left: -550, // ajuste este valor conforme necessário
		behavior: "smooth"
	});
});

document.getElementById("scroll-right").addEventListener("click", function () {
	document.querySelector(".container").scrollBy({
		left: 550, // ajuste este valor conforme necessário
		behavior: "smooth"
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const labels = document.querySelectorAll('label[for^="header-"]');

	labels.forEach(label => {
		label.addEventListener("click", function () {
			const targetId = this.getAttribute("for").replace("header-", "");
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({behavior: "smooth"});
			}
		});
	});
});
