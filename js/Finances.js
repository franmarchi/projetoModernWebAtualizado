const exchangeContainer = document.querySelector(".exchange-info");

async function carregarCotacoes() {
  try {
    // API Frankfurter: base EUR, converte para BRL e USD
    const url = "https://api.frankfurter.app/latest?from=BRL&to=USD,EUR";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao buscar cotações");

    const data = await response.json();

    const usd = data.rates.USD.toFixed(2);
    const eur = data.rates.EUR.toFixed(2);

    exchangeContainer.innerHTML = `
      <p>💵 Dólar (USD): R$ ${usd}</p>
      <p>💶 Euro (EUR): R$ ${eur}</p>
      <small>Data da cotação: ${data.date}</small>
    `;
  } catch (error) {
    exchangeContainer.textContent = "Não foi possível carregar as cotações.";
    console.error(error);
  }
}

carregarCotacoes();


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


