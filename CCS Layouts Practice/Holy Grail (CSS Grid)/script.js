function navbarToggle() {
  const gridState = document.querySelector(".mobile-grid");
  gridState.classList.toggle("desktop-grid");
  const navbarState = document.querySelector("nav");
  navbarState.classList.toggle("nav-hide");
}
