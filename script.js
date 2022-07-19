const hamburger=document.querySelector(".hamburger-menu img");
const closeBtn=document.querySelector(".close-menu");
const nav = document.querySelector(".navigation");
hamburger.addEventListener("click",openNav);
closeBtn.addEventListener("click", closeNav);

function openNav(e){
    e.preventDefault();
    nav.style.display="block";

}
function closeNav(e){
    e.preventDefault();
    nav.style.display="none";
}


// Caret

