let menubtn = document.getElementById("menu-bar");
let navlink = document.getElementById("nav-links");

// Open menu when hamburger is clicked
menubtn.addEventListener("click", () => {
  navlink.style.display = "flex";
  navlink.style.top = "0px";
  navlink.style.transition = "all .25s ease";
  menubtn.classList.add("active");
});

// When a menu link is clicked: close the menu (don't remove it from DOM)
navlink.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navlink.style.display = "none";
    navlink.style.top = "-10px";
    menubtn.classList.remove("active");
  });
});
