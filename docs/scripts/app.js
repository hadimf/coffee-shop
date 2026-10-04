const darkBtns = document.querySelectorAll(".dark-btn");
const submenu = document.querySelector(".submenu");
const closeMenuIcon = document.getElementById("close-menu-icon");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const bars = document.getElementById("bars");
const closeCartIcon = document.getElementById("close-cart-icon");
const shopCartIcon = document.getElementById("shopping-cart-icon");
const cartItem = document.querySelector(".cart-item");
// console.log(cartItem);

shopCartIcon?.addEventListener("click", () => {

	cartItem.classList.remove('-translate-x-full')

	overlay.classList.add("max-md:visible");
	overlay.classList.add("max-md:opacity-100");
	overlay.classList.add("max-md:pointer-events-auto");
});

closeCartIcon.addEventListener("click", () => {

	cartItem.classList.add('-translate-x-full')

	overlay.classList.remove("max-md:visible");
	overlay.classList.remove("max-md:opacity-100");
	overlay.classList.remove("max-md:pointer-events-auto");
});

bars.addEventListener("click", () => {
	menu.classList.add("right-0");
	menu.classList.remove("right-[-65%]");

	overlay.classList.add("max-md:visible");
	overlay.classList.add("max-md:opacity-100");
	overlay.classList.add("max-md:pointer-events-auto");
});

overlay.addEventListener("click", () => {
	menu.classList.remove("right-0");
	menu.classList.add("right-[-65%]");
	
	cartItem.classList.add('-translate-x-full')

	overlay.classList.remove("max-md:visible");
	overlay.classList.remove("max-md:opacity-100");
	overlay.classList.remove("max-md:pointer-events-auto");
});

closeMenuIcon.addEventListener("click", () => {
	menu.classList.remove("right-0");
	menu.classList.add("right-[-65%]");
	overlay.classList.remove("max-md:visible");
	overlay.classList.remove("max-md:opacity-100");
	overlay.classList.remove("max-md:pointer-events-auto");
});

submenu.addEventListener("click", (e) => {
	e.currentTarget.classList.toggle("submenu--open");
});

darkBtns?.forEach((darkBtn) => {
	darkBtn?.addEventListener("click", () => {
		document.documentElement.classList.toggle("dark");

		if (document.documentElement.classList.contains("dark")) {
			localStorage.theme = "dark";
		} else {
			localStorage.theme = "light";
		}
	});
});

if (localStorage.theme === "dark") {
	document.documentElement.classList.add("dark");
}
