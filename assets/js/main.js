
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


/* =========================================================
   CAL.COM BOOKING POPUP
   ========================================================= */

const bookingButtons = document.querySelectorAll("[data-booking-open]");

if (bookingButtons.length > 0) {

    (function (C, A, L) {

        let p = function (a, ar) {
            a.q.push(ar);
        };

        let d = C.document;

        C.Cal = C.Cal || function () {

            let cal = C.Cal;
            let ar = arguments;

            if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];

                d.head.appendChild(
                    d.createElement("script")
                ).src = A;

                cal.loaded = true;
            }

            if (ar[0] === L) {

                const api = function () {
                    p(api, arguments);
                };

                const namespace = ar[1];

                api.q = api.q || [];

                if (typeof namespace === "string") {

                    cal.ns[namespace] = cal.ns[namespace] || api;

                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);

                } else {
                    p(cal, ar);
                }

                return;
            }

            p(cal, ar);

        };

    })(window, "https://app.cal.com/embed/embed.js", "init");


    Cal("init", "gasel-cooking-masterclass", {
        origin: "https://app.cal.com"
    });

    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;

    Cal.ns["gasel-cooking-masterclass"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
    });


    bookingButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            Cal.ns["gasel-cooking-masterclass"]("modal", {
                calLink: "gaselcooking/gasel-cooking-masterclass",
                config: {
                    layout: "month_view",
                    useSlotsViewOnSmallScreen: "true"
                }
            });

        });

    });

}
