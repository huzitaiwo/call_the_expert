const burger = document.querySelector(".masthead button");
const navBar = document.querySelector("header ul");

burger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
