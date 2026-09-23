// ==========================================
// YASHAS T P - PORTFOLIO JAVASCRIPT
// ==========================================


// 1. Smooth scrolling for navigation links
// ------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 2. Add a shadow to the navigation bar when scrolling
// -----------------------------------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});


// 3. Reveal sections when they enter the screen
// ---------------------------------------------

const sections = document.querySelectorAll("section");

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

sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
});


// 4. Display the current year automatically
// -----------------------------------------

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${year} Yashas T P. All rights reserved.`;
}


// 5. Console message
// ------------------

console.log("Welcome to Yashas T P's portfolio! 🚀");
console.log("Portfolio loaded successfully.");