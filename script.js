// ==========================
// HAPPY FATHER'S DAY
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {
        alert("❤️ Happy Father's Day Appa ❤️");
    },500);

});


// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(
".glass,.card,.item,.quote,.final"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    reveals.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight-100){

            element.style.opacity="1";
            element.style.transform="translateY(0)";

        }

    });

}

reveals.forEach((element)=>{

element.style.opacity="0";

element.style.transform="translateY(80px)";

element.style.transition="1s";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// ==========================
// BUTTON EFFECT
// ==========================

const button=document.querySelector(".btn");

button.addEventListener("click",()=>{

button.innerHTML="❤️ Love You Appa ❤️";

setTimeout(()=>{

button.innerHTML="Open My Letter 💌";

},2000);

});


// ==========================
// FLOATING SPARKLES
// ==========================

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=window.innerHeight+"px";

star.style.fontSize=(15+Math.random()*20)+"px";

star.style.pointerEvents="none";

star.style.zIndex="999";

document.body.appendChild(star);

let y=window.innerHeight;

const move=setInterval(()=>{

y-=3;

star.style.top=y+"px";

star.style.opacity=y/window.innerHeight;

if(y<-50){

clearInterval(move);

star.remove();

}

},20);

}

setInterval(sparkle,600);


// ==========================
// HEART RAIN
// ==========================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

let y=-50;

const fall=setInterval(()=>{

y+=3;

heart.style.top=y+"px";

heart.style.opacity=1-y/window.innerHeight;

if(y>window.innerHeight){

clearInterval(fall);

heart.remove();

}

},20);

}

setInterval(createHeart,2500);


// ==========================
// IMAGE HOVER GLOW
// ==========================

const images=document.querySelectorAll(".card img,.hero-img,.final-photo");

images.forEach((img)=>{

img.addEventListener("mouseenter",()=>{

img.style.boxShadow="0 0 40px white";

});

img.addEventListener("mouseleave",()=>{

img.style.boxShadow="";

});

});


// ==========================
// TYPEWRITER EFFECT
// ==========================

const heading=document.querySelector(".hero-content h1");

const text=heading.innerText;

heading.innerHTML="";

let i=0;

function type(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(type,120);

}

}

type();


// ==========================
// THANK YOU MESSAGE
// ==========================

window.addEventListener("scroll",()=>{

const final=document.querySelector(".final");

const top=final.getBoundingClientRect().top;

if(top<250){

document.title="❤️ Thank You Appa ❤️";

}

});


// ==========================
// BACKGROUND PARALLAX
// ==========================

window.addEventListener("scroll",()=>{

document.body.style.backgroundPositionY=

window.scrollY*0.4+"px";

});


// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("❤️ Happy Father's Day Appa ❤️");