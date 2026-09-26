// =========================================================
// YASHAS T P — PORTFOLIO JAVASCRIPT
// =========================================================


// =========================
// PAGE LOADER
// =========================

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });

}


// Close mobile menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================
// NAVIGATION SCROLL EFFECT
// =========================

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =========================
// TYPING ANIMATION
// =========================

const typingText =
    document.querySelector(".typing-text");

const words = [
    "Aspiring Software & AI Engineer",
    "Software Developer",
    "AI Enthusiast",
    "Technology Explorer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeAnimation() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeAnimation,
                1600
            );

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }

    setTimeout(
        typeAnimation,
        deleting ? 45 : 80
    );
}

typeAnimation();


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// CURSOR GLOW
// =========================

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener(
    "mousemove",
    function (event) {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


// =========================
// PARTICLES
// =========================

const particleContainer =
    document.querySelector(".particles");


function createParticle() {

    const particle =
        document.createElement("span");

    particle.classList.add(
        "particle"
    );

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 8 + 6) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 15000);

}


for (
    let i = 0;
    i < 35;
    i++
) {

    createParticle();

}


setInterval(
    createParticle,
    600
);


// =========================
// SKILL CARD TILT EFFECT
// =========================

const cards =
    document.querySelectorAll(
        ".skill-card, .project-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) /
                18;

            const rotateY =
                (centerX - x) /
                18;


            card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;
        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "";

        }
    );

});


// =========================
// HERO PARALLAX
// =========================

const heroImage =
    document.querySelector(
        ".hero-image"
    );


document.addEventListener(
    "mousemove",
    function (event) {

        if (
            window.innerWidth < 850
        ) {
            return;
        }


        const x =
            (event.clientX /
                window.innerWidth -
                0.5) *
                10;

        const y =
            (event.clientY /
                window.innerHeight -
                0.5) *
                10;


        heroImage.style.transform =
            `
            translate(${x}px, ${y}px)
            `;
    }
);


// =========================
// CURRENT YEAR
// =========================

const footerText =
    document.querySelector(
        "footer p"
    );


if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Yashas T P. All rights reserved.`;

}


// =========================
// CONSOLE
// =========================

console.log(
    "Welcome to Yashas T P's portfolio! 🚀"
);

console.log(
    "Animated portfolio loaded successfully."
);
