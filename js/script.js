const $menu = document.querySelector(".icon-menu");
$menu.addEventListener("click", (e) => {
  document.querySelector(".menu--lista").classList.toggle("view-lista");
  console.log("hola");
});
