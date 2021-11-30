var toggleButton = document.getElementsByClassName("toggle-button")[0];
var navBarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("active")
});

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 400px)").matches) {
      console.log("Screen width is at least 500px")
    } else {
      console.log("Screen less than 500px")
    }
  })