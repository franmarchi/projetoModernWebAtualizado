const pendingList = document.querySelector(".pending-docs ul");
const completedList = document.querySelector(".completed-docs ul");

function moveToCompleted(item) {
  item.style.transition = "opacity 0.5s ease";
  item.style.opacity = "0";

  setTimeout(() => {
    completedList.appendChild(item);
    item.style.opacity = "1";

    item.classList.add("completed");
  }, 500);
}

pendingList.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    moveToCompleted(item);
  });
});

document.querySelector(".home-btn").addEventListener("click", () => {
  const confirmar = confirm("Deseja voltar para a Página Inicial?");
  if (confirmar) {
    window.location.href = "InitialPage.html";
  }
});
