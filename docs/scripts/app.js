const darkBtns = document.querySelectorAll(".dark-btn");
const submenu = document.querySelector(".submenu");
const closeMenuIcon = document.getElementById("close-menu-icon");
const menuMobile = document.querySelector(".menu-panel");
const overlay = document.querySelector(".overlay");
const bars = document.getElementById("bars");
const closeCartIcon = document.getElementById("close-cart-icon");
const shopCartIcon = document.getElementById("shopping-cart-icon");
const cartItem = document.querySelector(".cart-item");
const cartText = document.getElementById("cart-text");
const barsText = document.getElementById("bars-text");

const setMenuState = (isOpen) => {
	if (!menuMobile) return;
	menuMobile.classList.toggle("is-open", isOpen);
};

const setCartState = (isOpen) => {
	if (!cartItem) return;
	cartItem.classList.toggle("is-open", isOpen);
};

const showOverlay = () => {
	overlay?.classList.add("max-xl:visible");
	overlay?.classList.add("max-xl:opacity-100");
	overlay?.classList.add("max-xl:pointer-events-auto");
};

const hideOverlay = () => {
	overlay?.classList.remove("max-xl:visible");
	overlay?.classList.remove("max-xl:opacity-100");
	overlay?.classList.remove("max-xl:pointer-events-auto");
};

// in mobile and tablet
if (window.matchMedia("(max-width: 1279px)").matches) {
	if (window.matchMedia("(min-width: 768px)").matches) {
		cartText?.addEventListener("click", () => {
			setCartState(true);
			showOverlay();
		});

		barsText?.addEventListener("click", () => {
			setMenuState(true);
			showOverlay();
		});
	}
}

// open cart in mobile
shopCartIcon?.addEventListener("click", () => {
	setCartState(true);
	showOverlay();
});

// close cart in mobile
closeCartIcon?.addEventListener("click", () => {
	setCartState(false);
	hideOverlay();
});

// open menu in mobile
bars?.addEventListener("click", () => {
	setMenuState(true);
	showOverlay();
});

// close menu and cart by overlay
overlay?.addEventListener("click", () => {
	setMenuState(false);
	setCartState(false);
	hideOverlay();
});

// close menu by close icon
closeMenuIcon?.addEventListener("click", () => {
	setMenuState(false);
	hideOverlay();
});

// open submenu in mobile
submenu?.addEventListener("click", (e) => {
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
