const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener("click",()=>{
    navUL.classList.toggle("show");
    hamburger.classList.toggle("hide")
})

close.addEventListener("click",()=>{
    navUL.classList.toggle("show");
    hamburger.classList.toggle("hide")
})


// slider
const panels = document.querySelectorAll(".panel")
panels.forEach((panels)=> {
        panels.addEventListener("click", () => {
            removeActiveClasses("image");
            panels.classList.add("active")
        });
    })

function removeActiveClasses() {
    panels.forEach((click) => {
        panels.classList.add("active")
    })
}

const btn = document.querySelector(".search")
const closeModal = document.querySelector(".closeModal")
function newFunction_1() {
    search.addEventListener("click",()=>{
        search.classList.toggle("show");
        hamburger.classList.toggle("hide");
    });
}