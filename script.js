document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var homeLogo = document.getElementById("homelogo");
  var scrolledLogo = document.getElementById("scrolledlogo");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      homeLogo.style.display = "none";
      scrolledLogo.style.display = "inline-block";
    } else {
      navbar.classList.remove("scrolled");
      homeLogo.style.display = "inline-block";
      scrolledLogo.style.display = "none";
    }
  });
});
