/* =========================================
   PRINCE AJAY PRAJAPAT
   PORTFOLIO JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       MOBILE MENU
       ----------------------------------------- */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });


        /* Close menu after clicking a link */

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.innerHTML = "☰";

            });

        });

    }


    /* -----------------------------------------
       CURRENT YEAR
       ----------------------------------------- */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* -----------------------------------------
       NAVBAR SHADOW ON SCROLL
       ----------------------------------------- */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.style.borderBottomColor =
                "rgba(214, 179, 106, 0.25)";

        } else {

            navbar.style.borderBottomColor =
                "rgba(214, 179, 106, 0.12)";

        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* -----------------------------------------
       ACTIVE NAVIGATION LINK
       ----------------------------------------- */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(function (link) {

            link.style.color = "";

            const target = link.getAttribute("href");

            if (target === "#" + currentSection) {
                link.style.color = "#f0d89b";
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* -----------------------------------------
       MOUSE PARALLAX FOR HERO
       ----------------------------------------- */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.innerWidth > 900) {

        document.addEventListener("mousemove", function (event) {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 8;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 8;

            heroVisual.style.transform =
                "translate(" + x + "px, " + y + "px)";

        });

    }


    /* -----------------------------------------
       SMOOTH ANCHOR SUPPORT
       ----------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
