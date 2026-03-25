const images = [
  "https://fazcasa.com.br/wp-content/uploads/2023/04/2-Casa-de-alvenaria-Como-construir-Passo-a-Passo.jpg",
  "https://fazcasa.com.br/wp-content/uploads/2023/04/3-Casa-de-alvenaria-Como-construir-Passo-a-Passo.jpg",
  "https://fazcasa.com.br/wp-content/uploads/2023/04/4-Casa-de-alvenaria-Como-construir-Passo-a-Passo.jpg",
  "https://fazcasa.com.br/wp-content/uploads/2023/04/6-Casa-de-alvenaria-Como-construir-Passo-a-Passo.jpg"
];

let currentIndex = 0;

const placeholder = document.querySelector(".image-placeholder");
const caption = document.querySelector(".image-caption");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showImage(index) {
  const img = document.createElement("img");
  img.src = images[index];
  img.alt = "Foto da obra";

  img.onload = () => {
    img.classList.add("show");
  };

  placeholder.innerHTML = "";
  placeholder.appendChild(img);

  caption.textContent = `Imagem ${index + 1} de ${images.length}`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);

document.querySelector(".home-btn").addEventListener("click", () => {
  const confirmar = confirm("Deseja voltar para a Página Inicial?");
  if (confirmar) {
    window.location.href = "../pages/InitialPage.html";
  }
});

