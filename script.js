const componentHolder = () => document.getElementById("holder");
document.querySelectorAll(".navlink").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    switchComponent(e.target.getAttribute("href"));
  });
});
function navigate(page) {
  switch (page) {
    case "/":
      return "<home-component></home-component>";
    case "/music-library":
      return "<music-library></music-library>";
    case "/language-learning":
      return "<home-component></home-component>";
    default:
      return "<home-component></home-component>";
  }
}

function switchComponent(page) {
  componentHolder().innerHTML = navigate(page);
}
