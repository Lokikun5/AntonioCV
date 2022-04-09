        //  ----------------------DECLARATION


const btnUp = document.querySelector('.btnUp');
const nav = document.querySelector("nav");


let date1 = new Date();

//---------------------- parametre de date

let dateLocale = date1.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});

document.getElementById('p1').innerHTML = ' ' + dateLocale;

p1.style.marginTop  = "20px";

//----------------------- Bouton Up

btnUp.addEventListener('click', () =>{

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

//---------------------------- scroll nav

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
    nav.style.background = "#8DA0CC";
    nav.style.opacity = "0.90";
    nav.style.height ="50px";
    }else {
        nav.style.background = "white";
        nav.style.height ="90px";
    }
  })


const slidingNewsletter = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
        slidingNewsletter.classList.add('active')
    }
})

