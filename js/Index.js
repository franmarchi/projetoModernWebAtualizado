document.querySelector(".login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if(email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    window.location.href = "../pages/InitialPage.html";
  }
});

document.querySelector(".home-btn").addEventListener("click", function() {
  alert("Solicitação de orçamento enviada! Em breve entraremos em contato.");
});

document.querySelector(".forgot-password").addEventListener("click", function(e) {
  e.preventDefault();
  alert("Um link para redefinir sua senha foi enviado para o seu email.");
});
