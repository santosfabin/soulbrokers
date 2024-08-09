const scrollItems = [
	{
		containerId: "container",
		leftButtonId: "scroll-left",
		rightButtonId: "scroll-right",
		scrollAmount: 550
	},
	{
		containerId: "nov-container",
		leftButtonId: "nov-scroll-left",
		rightButtonId: "nov-scroll-right",
		scrollAmount: 385
	}
];

scrollItems.forEach(item => {
	const container = document.getElementById(item.containerId);
	const leftButton = document.getElementById(item.leftButtonId);
	const rightButton = document.getElementById(item.rightButtonId);

	if (leftButton && container) {
		leftButton.addEventListener("click", function () {
			container.scrollBy({
				left: -item.scrollAmount,
				behavior: "smooth"
			});
		});
	}

	if (rightButton && container) {
		rightButton.addEventListener("click", function () {
			container.scrollBy({
				left: item.scrollAmount,
				behavior: "smooth"
			});
		});
	}
});
/*  */

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

/*  */
document.getElementById("side-bar").addEventListener("click", function () {
	var div = document.getElementById("nav-contet");
	div.style.width = div.style.width === "100%" ? "0" : "100%";
});
