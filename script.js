function ToggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector(".profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto do Perfil com logo DEV");
  } else {
    img.setAttribute("src", "./assets/avatar.jpg");
    img.setAttribute("alt", "Foto do Perfil do GitHub");
  }
}
