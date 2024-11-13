// Cursor Animation using GSAP
const cursor = document.querySelector('#crsr');
// const navItems = document.querySelectorAll('.magnetT');
if (cursor) {
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            top: e.clientY,
            left: e.clientX,
            duration: 0.2,
            ease: "power1.out"
        });
    });
}
    let plan7 = document.querySelectorAll(".plan7");
    let content = document.querySelectorAll(".size");

    
    plan7.forEach((day, index) => {
      day.addEventListener("click", () => {
            content[index].classList.toggle("hide");  
       });
    });


// Login Form Toggle Logic

let orglogin = document.querySelector(".orglogin");
let acclogin = document.querySelector(".acclogin");
let create = document.querySelector(".create");
let sign = document.querySelector(".sign");
let loginnn = document.querySelector(".loginnn");
let signinnn = document.querySelector(".signinnn");
let cut = document.querySelector(".cut");
let cutt = document.querySelector(".cutt");

cut.addEventListener("click", () => {
    loginnn.classList.add("loginhide");
    signinnn.classList.add("signinhide");
    document.body.style.overflow = 'auto';
});
cutt.addEventListener("click", () => {
    signinnn.classList.add("signinhide");
    document.body.style.overflow = 'auto';
});

orglogin.addEventListener("click", () => {
    signinnn.classList.add("signinhide");
    loginnn.classList.remove("loginhide");
    document.body.style.overflow = 'hidden';
});

acclogin.addEventListener("click", () => {
    loginnn.classList.add("loginhide");
    document.body.style.overflow = 'auto';
});

sign.addEventListener("click", () => {
    signinnn.classList.remove("signinhide");
    loginnn.classList.add("loginhide");
    document.body.style.overflow = 'hidden';
});

create.addEventListener("click", () => {
    signinnn.classList.add("signinhide");
    document.body.style.overflow = 'auto';
});
