const $html = document.querySelector("html");
const $nav = document.querySelector("nav");

Botaou.addEventListener("change", () => {
  $html.classList.toggle("light-mode");
});

check.addEventListener("change", () => {
  $nav.classList.toggle("desativado");
});
