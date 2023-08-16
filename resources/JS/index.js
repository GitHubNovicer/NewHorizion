const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".navheader");
//const nav3 = document.querySelector(".navcross");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY)
    {
        nav.classList.add("nav--hidden");
        nav2.classList.add("nav--hidden");
        //nav3.classList.add("nav--hidden");
    }
    else{
        nav.classList.remove("nav--hidden");
        nav2.classList.remove("nav--hidden");
        //nav3.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});