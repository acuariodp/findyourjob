const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar");
const closeMenuButton=document.querySelector(".close-btn")
const toggleMenu = (event)=>{
  menu.classList.toggle('is-open');
}
menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);
