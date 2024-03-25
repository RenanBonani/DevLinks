function ToggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector(".profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar3.jpeg");
    img.setAttribute("alt", "Foto do Perfil do Linkedin");
  } else {
    img.setAttribute("src", "./assets/avatar2.jpg");
    img.setAttribute("alt", "Foto do Perfil do GitHub");
  }
}
