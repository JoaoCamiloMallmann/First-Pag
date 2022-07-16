const $html = document.querySelector("html");
const $nav = document.querySelector("nav");
const $header = document.querySelector("header");

Botaou.addEventListener("change", () => {
  $html.classList.toggle("light-mode");
});

check.addEventListener("change", () => {
  $nav.classList.toggle("desativado");
  $header.classList.toggle("Fixo");
});
