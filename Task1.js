                                           // Alert Button

document.getElementById("startBtn").addEventListener("click",function(){

alert("Welcome to Web Development!");

});


// Dark Mode

const mode=document.getElementById("mode");

mode.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

mode.innerHTML="☀️";

}else{

mode.innerHTML="🌙";

}

});


// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach((el)=>observer.observe(el));


// Smooth Scroll

document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});