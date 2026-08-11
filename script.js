```javascript
/* =====================================================
   SHREE MADHUVAN JEWELLERS
   PRINCE AJAY PRAJAPAT PORTFOLIO
   ===================================================== */


/* ---------- LOADING SCREEN ---------- */

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 1000);

});


/* ---------- MOBILE MENU ---------- */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* ---------- CLOSE MOBILE MENU ---------- */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ---------- CURRENT YEAR ---------- */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ---------- SCROLL ANIMATION ---------- */

const animatedElements = document.querySelectorAll(
    ".skill-card, .experience-card, .about-grid, .business-content, .education-item, .contact-card"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* ---------- NAVBAR BACKGROUND ---------- */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8, 8, 8, 0.97)";

    } else {

        navbar.style.background = "rgba(11, 11, 11, 0.85)";

    }

});
```
