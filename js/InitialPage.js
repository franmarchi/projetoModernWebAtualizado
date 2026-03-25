document.querySelectorAll(".icon-item button").forEach(button => {
  button.addEventListener("click", () => {
    const destino = button.textContent.trim();

    switch (destino) {
      case "Diário da Obra":
        window.location.href = "../pages/DailyBuilding.html";
        break;
      case "Documentos":
        window.location.href = "../pages/Documents.html";
        break;
      case "Financeiro":
        window.location.href = "../pages/Finances.html";
        break;
      case "Fale Conosco":
        window.location.href = "../pages/ContactUs.html";
        break;
      default:
        alert("Página não encontrada.");
    }
  });
});

document.querySelector(".logout-btn").addEventListener("click", () => {
  const ok = confirm("Deseja realmente encerrar a sessão?");
  if (ok) {
    window.location.href = "../index.html";
  }
});
