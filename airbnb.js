const loginform = document.querySelector(".login-form");
const btn = document.querySelector(".btn");
const close = document.querySelector(".closeicon");



btn.addEventListener('click' , Openpop);
close.addEventListener('click' , closepop);



function Openpop(){
    loginform.classList.add("show");




}

function closepop(){
    loginform.classList.remove("show");

}