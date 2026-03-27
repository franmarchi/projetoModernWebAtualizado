// Seleciona todos os botões de navegação
const navButtons = document.querySelectorAll(".icon-grid button");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const destino = button.dataset.page; // pega o atributo data-page

    switch (destino) {
      case "daily":
        window.location.href = "../pages/DailyBuilding.html";
        break;
      case "documents":
        window.location.href = "../pages/Documents.html";
        break;
      case "finances":
        window.location.href = "../pages/Finances.html";
        break;
      case "contact":
        window.location.href = "../pages/ContactUs.html";
        break;
      default:
        alert("Página não encontrada.");
    }
  });
});

// --- Botão Encerrar Sessão ---
const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    const confirmar = confirm("Deseja encerrar a sessão?");
    if (confirmar) {
      window.location.href = "../index.html"; // volta para tela de login
    }
  });
}