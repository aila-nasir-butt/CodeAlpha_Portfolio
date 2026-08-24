/* ========================================
   MOBILE MENU
======================================== */

const menuBtn =
    document.getElementById("menu-btn");

const navLinks =
    document.querySelector(".nav-links");

const navItems =
    document.querySelectorAll(".nav-link");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");


    const icon =
        menuBtn.querySelector("i");


    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking */

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ========================================
   TYPING EFFECT
======================================== */

const typingText =
    document.getElementById("typing-text");


const words = [

    "Software Engineering Student",

    "Future AI & ML Enthusiast",

    "Aspiring Software Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    const typingSpeed =
        deleting ? 45 : 80;


    setTimeout(
        typeEffect,
        typingSpeed
    );

}


typeEffect();


/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (
            elementTop
            < windowHeight - 100
        ) {

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* ========================================
   ACTIVE NAVIGATION LINK
======================================== */

const sections =
    document.querySelectorAll("section");


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (

                window.scrollY >= sectionTop

                &&

                window.scrollY
                < sectionTop + sectionHeight

            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach((item) => {

            item.classList.remove("active");


            if (

                item.getAttribute("href")
                === "#"
                + currentSection

            ) {

                item.classList.add("active");

            }

        });

    }
);


/* ========================================
   NAVBAR BACKGROUND ON SCROLL
======================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }
);


/* ========================================
   BACK TO TOP BUTTON
======================================== */

const topBtn =
    document.getElementById("top-btn");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";

        }

    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ========================================
   SCROLL PROGRESS BAR
======================================== */

const progressBar =
    document.getElementById(
        "scroll-progress"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            document.documentElement.scrollTop;


        const scrollHeight =
            document.documentElement.scrollHeight
            -
            document.documentElement.clientHeight;


        const progress =
            (scrollTop / scrollHeight)
            * 100;


        progressBar.style.width =
            progress + "%";

    }
);


/* ========================================
   PROJECT CARD TILT EFFECT
======================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX
                - rect.left;


            const y =
                event.clientY
                - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 18;


            const rotateY =
                (centerX - x) / 18;


            card.style.transform =
                `translateY(-12px)
                 perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});