const $ = (cssQuery) => returnType(document.querySelectorAll(cssQuery));

const returnType = (result) => {
  switch (result.length) {
    case 1:
      return result[0];
    case 0:
      return undefined;
    default:
      return result;
  }
};

const signal = (initialValue) => {
  const observers = new Set();
  const subscribe = (func) => observers.add(func);
  const unsubscribe = (func) => observers.delete(func);
  const notify = (data) => observers.forEach((observer) => observer(data));
};

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
