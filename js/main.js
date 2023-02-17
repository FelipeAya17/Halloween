const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener("click",()=> {
        navMenu.classList.add("show-menu")

    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelectorAll(".nav__link")
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(item=>item.addEventListener("click", linkAction))


const sr = ScrollReveal({
    origin: "top",
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

//Swipper

const homeSwiper = new Swiper(".home-swiper",{
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },  
})
const newSwiper = new Swiper(".new-swiper",{
    centeredSlides: true,
    slidesPerview: "auto",
    loop: true,
    spaceBetween: 16
});


function scrollUp(){
    const scrollup = document.getElementById("scroll-up")
    if(this.scrollY>= 460){
        scrollup.classList.add("show-scroll");
    }else{
        scrollup.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);


sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, footer__content`, {interval: 100})
sr.reveal(`.about__data, .discount__img`, {origin: "left"})
sr.reveal(`.about__img, .discount__data`, {origin: "rigth"})
