document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".navbar-toggle-itm");
  const menuBtn = document.querySelector(".navbar-toggle");
  const closeBtn = document.querySelector(".cross");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
