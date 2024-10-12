"use strict";
window.addEventListener("DOMContentLoaded", () => {
    // responsive navbar
    const menuBtn = document.querySelector("#menu-btn");
    const menu = document.querySelector("#menu");
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList[menu.classList.contains("show") ? "remove" : "add"]("show");
    });
    // close navbar if user clicks out of navbar....
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target)) {
            menu.classList.remove("show");
        }
    });
    // footer copyright current year
    document.querySelector(
        "#current-year"
    ).textContent = new Date().getFullYear();

    // transparent navbar
    const transNav = document.querySelector("#trans-nav");
    if (transNav) {
        const navLogo = transNav.querySelector("#logo");
        const navLogoSrcs = {
            transparent: "/assets/logo-under-dark.svg",
            white: "/assets/logo.svg",
        };
        transNav.toTransparent = () => {
            transNav.classList.add("transparent");
            navLogo.src = navLogoSrcs.transparent;
        };

        transNav.toWhite = () => {
            transNav.classList.remove("transparent");
            navLogo.src = navLogoSrcs.white;
        };
        window.addEventListener("scroll", () => {
            if (document.scrollingElement.scrollTop >= 200) {
                transNav.toWhite();
            } else {
                transNav.toTransparent();
            }
        });
    }
    // initialize AOS
    AOS.init();
});