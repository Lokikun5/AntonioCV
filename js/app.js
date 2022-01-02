const btnUp = document.querySelector('.btnUp');

btnUp.addEventListener('click', () =>{

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
    nav.style.background = "pink";
    nav.style.height ="50px";
    }else {
        nav.style.background = "white";
        nav.style.height ="90px";
    }
  })