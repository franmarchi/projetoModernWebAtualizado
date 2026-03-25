const estimatedInput = document.getElementById("estimated");
const realInput = document.getElementById("real");
const differenceText = document.getElementById("difference");

function parseCurrency(value) {
  return parseFloat(value.replace("R$", "").replace(/\./g, "").replace(",", ".")) || 0;
}

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calculateDifference() {
  const estimated = parseCurrency(estimatedInput.value);
  const real = parseCurrency(realInput.value);
  const difference = real - estimated;

  differenceText.textContent = `Diferença: ${formatCurrency(difference)}`;

  if (difference > 0) {
    differenceText.style.color = "red"; 
  } else if (difference < 0) {
    differenceText.style.color = "green"; 
  } else {
    differenceText.style.color = "black"; 
  }
}

calculateDifference();

document.querySelector(".home-btn").addEventListener("click", () => {
  const confirmar = confirm("Deseja voltar para a Página Inicial?");
  if (confirmar) {
    window.location.href = "InitialPage.html";
  }
});
