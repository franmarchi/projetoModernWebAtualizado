const homeBtn = document.querySelector(".home-btn");

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    const confirmar = confirm("Deseja voltar para a Página Inicial?");
    if (confirmar) {
      window.location.href = "../pages/InitialPage.html";
    }
  });
}

