// ========================================
// SAY HELLO
// ========================================

function sayHello() {

    const message = document.getElementById("hello-message");

    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 3000);
}


// ========================================
// SHOW CONTACT
// ========================================

function showContact() {

    alert(
        "Contact Me\n\n" +
        "Email: terencejoshuaguevarra@gmail.com\n" +
        "Phone: 09692615804"
    );
}


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ========================================
// SKILL ANIMATION
// ========================================

const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const line = entry.target.querySelector(
                    ".skill-line span"
                );

                const width = line.style.width;

                entry.target.style.setProperty(
                    "--skill-width",
                    width
                );

                entry.target.classList.add("show");

                skillObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.3
    }
);

skillCards.forEach((card) => {
    skillObserver.observe(card);
});


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.45
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});
