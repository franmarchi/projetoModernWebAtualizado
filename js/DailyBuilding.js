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

const img = document.createElement("img");
img.alt = "Foto da obra";
img.classList.add("gallery-image");
placeholder.appendChild(img);

// Função para atualizar imagem e legenda
function showImage(index) {
  img.src = images[index];
  caption.textContent = `Imagem ${index + 1} de ${images.length}`;
}

// Botão anterior
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
}

// Botão próximo
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
}

showImage(currentIndex);



