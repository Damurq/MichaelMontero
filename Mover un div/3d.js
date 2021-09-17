
const container = document.querySelector(".container");
const card = document.querySelector(".container .card");

const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title--card");
const description = document.querySelector(".description--card");
const model = document.querySelector(".info .model");
const cart = document.querySelector("button.cart");
//Moving animation event
container.addEventListener("mousemove", e => {
    let xAxis = (window.innerWidth/2 - e.pageX)/15;
    let yAxis = (window.innerHeight/2 - e.pageY)/15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    sneaker.style.transform = `translateZ(90px) rotateY(${xAxis}deg)`;
});
//animate in
container.addEventListener("mouseenter", e => {
    card.style.transition = `none`;
    //elements
    title.style.transform = "translateZ(85px)";
    description.style.transform = "translateZ(80px)";
    model.style.transform = "translateZ(70px)";
    cart.style.transform = "translateZ(65px)";
});
//animate out
container.addEventListener("mouseleave", e => {
    card.style.transition = `transform .5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //elements
    sneaker.style.transform = "translateZ(0) rotateY(0)";
    title.style.transform = "translateZ(0)";
    description.style.transform = "translateZ(0)";
    model.style.transform = "translateZ(0)";
    cart.style.transform = "translateZ(0)";
});