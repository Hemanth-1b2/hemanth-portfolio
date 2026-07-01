/*==========================================
        MOBILE NAVIGATION
==========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/*==========================================
        STICKY HEADER
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,17,31,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,17,31,.75)";
        header.style.boxShadow = "none";

    }

});


/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================================
        TYPING EFFECT
==========================================*/

const typingElement = document.querySelector(".typing-text");

const texts = [

    "Artificial Intelligence Enthusiast",

    "Python Developer",

    "Machine Learning Learner",

    "Electronics Engineer",

    "Embedded Systems Enthusiast"

];

let textIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent = currentText.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1400);

            return;

        }

    } else {

        typingElement.textContent = currentText.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 40 : 80);

}

typingEffect();


/*==========================================
        SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(

    ".skill-card, .project-card, .certificate-card, .internship-card, .achievement-card, .timeline-item"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all .7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*==========================================
        BACK TO TOP BUTTON
==========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "top-btn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "30px";
topButton.style.bottom = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "20px";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================================
        CONTACT FORM
==========================================*/

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


/*==========================================
        PRELOADER (OPTIONAL)
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});