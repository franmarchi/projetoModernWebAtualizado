const form = document.querySelector(".contact-form");
const mensagemInput = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const mensagem = mensagemInput.value.trim();

  if (!mensagem) {
    alert("Por favor, digite sua mensagem antes de enviar.");
    return;
  }

  alert("Mensagem enviada com sucesso!");

  mensagemInput.value = "";

});


