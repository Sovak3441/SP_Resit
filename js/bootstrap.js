const menuIcon = document.querySelector(".mobile-menu-icon");
const navbarMenu = document.querySelector('.navbar-menu');

menuIcon.addEventListener('click', () => {
  if(navbarMenu.classList.contains("show-menu")) {
  navbarMenu.classList.remove("show-menu");
  } else {
    navbarMenu.classList.add("show-menu");
  }
});