window.addEventListener("load", init);

function init() {
    document.addEventListener("click", handleNavClick, false);
}

function handleNavClick(event) {
    if (event.target.id === "openMenu") {
        openNav();
    } else if (event.target.id === "closeMenu") {
        closeNav();
    }
}

function openNav() {
    document.getElementById("mobile-nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("mobile-nav").style.height = "0%";
}
