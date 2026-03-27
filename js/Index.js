function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const loginForm = document.querySelector(".login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Validação de campos
    if (!email.trim() || !senha.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validação de e-mail com regex
    if (!validarEmail(email)) {
      alert("Email inválido. Verifique e tente novamente.");
      return;
    }

    // Se passou pelas validações
    window.location.href = "../pages/InitialPage.html";
  });
}

const budgetBtn = document.querySelector(".budget-btn");
if (budgetBtn) {
  budgetBtn.addEventListener("click", function() {
    alert("Solicitação de orçamento enviada! Em breve entraremos em contato.");
  });
}

const forgotPassword = document.querySelector(".forgot-password");
if (forgotPassword) {
  forgotPassword.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Um link para redefinir sua senha foi enviado para o seu email.");
  });
}
