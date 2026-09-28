/* =========================================================
   GASEL COOKING
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = menuToggle.classList.toggle("is-open");

        mobileMenu.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    /* Close mobile menu after clicking a link */

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("is-open");
            mobileMenu.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

        });

    });

}
