const roles = [
    "Java Developer",
    "AI & Data Science Student",
    "Frontend Learner",
    "Problem Solver"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!isDeleting){

        typing.textContent = currentRole.substring(0, charIndex++);

        if(charIndex > currentRole.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent = currentRole.substring(0,--charIndex);

        if(charIndex===0){

            isDeleting=false;

            roleIndex++;

            if(roleIndex>=roles.length){

                roleIndex=0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting?50:100);

}

typeEffect();

/* ==========================================
        SCROLL REVEAL ANIMATION
========================================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {

        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
        SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});
/* ==========================================
        BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================
        MOBILE MENU
========================== */

const menuToggle = document.getElementById("menu-toggle");

const mobileNav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

    menuToggle.textContent =
        mobileNav.classList.contains("active") ? "✕" : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});
// ==========================================
// EMAILJS
// ==========================================

emailjs.init("J4cNHSWDYeA_CBDvE");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const button = contactForm.querySelector("button");

    button.innerText = "Sending...";

    emailjs.sendForm(
        "service_z6qmydd",
        "template_oyfcbp9",
        this
    )

   .then(function(){

    showToast("Message Sent Successfully! 🚀","success");

    contactForm.reset();

    button.innerText="Send Message 🚀";

})
   .catch(function(error){

    console.log(error);

    showToast("Failed to Send Message!","error");

    button.innerText="Send Message 🚀";

});

});
function showToast(message,type){

    const toast=document.getElementById("toast");

    toast.innerText=message;

    toast.className="toast show "+type;

    setTimeout(()=>{

        toast.className="toast";

    },3000);

}
/* ==========================================
        CURSOR 2.0
========================================== */

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

console.log(cursor);
console.log(blur);

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let blurX = 0;
let blurY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateCursor(){

    // Cursor follows fast
    cursorX += (mouseX - cursorX) * 0.35;
    cursorY += (mouseY - cursorY) * 0.35;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    // Blur follows slower
    blurX += (mouseX - blurX) * 0.08;
    blurY += (mouseY - blurY) * 0.08;

    blur.style.left = blurX + "px";
    blur.style.top = blurY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

const hoverItems = document.querySelectorAll(

"a,button,.btn,.project-card,.social-links a"

);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("hover");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("hover");

    });

});

document.addEventListener("mousedown",()=>{

    cursor.style.transform="translate(-50%,-50%) scale(.75)";

});

document.addEventListener("mouseup",()=>{

    cursor.style.transform="translate(-50%,-50%) scale(1)";

});