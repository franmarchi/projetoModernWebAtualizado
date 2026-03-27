function setupListTransfer(pendingSelector, completedSelector) {
  const pendingList = document.querySelector(pendingSelector);
  const completedList = document.querySelector(completedSelector);

  if (!pendingList || !completedList) return;

  pendingList.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      item.style.transition = "opacity 0.5s ease";
      item.style.opacity = "0";

      setTimeout(() => {
        completedList.appendChild(item);
        item.style.opacity = "1";
        item.classList.add("completed"); // adiciona classe para estilo
      }, 500);
    });
  });
}

// Chamada da função com os seletores corretos
setupListTransfer(".pending-docs ul", ".completed-docs ul");