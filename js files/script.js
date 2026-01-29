let menubtn = document.getElementById("menu-bar");
let navlink = document.getElementById("nav-links");

menubtn.addEventListener("click", () => {
  navlink.style.display = "flex";
  navlink.style.top = "0px";
  navlink.style.transition = "all .25 ease";
});

navlink.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navlink.remove("navlink");
  });
});
