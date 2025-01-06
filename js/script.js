const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector("nav ul");

navBtn.addEventListener("click", () => {
 menu.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});