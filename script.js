document.getElementById('comercioForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obter os valores dos campos
  const valorProduto = parseFloat(document.getElementById('valorProduto').value);
  const impostoImportacao = parseFloat(document.getElementById('impostoImportacao').value);
  const frete = parseFloat(document.getElementById('frete').value);
  const outrosCustos = parseFloat(document.getElementById('outrosCustos').value);

  // Calcular o imposto sobre o valor do produto
  const imposto = (impostoImportacao / 100) * valorProduto;

  // Calcular o valor total
  const valorTotal = valorProduto + imposto + frete + outrosCustos;

  // Exibir o resultado
  document.getElementById('valorTotal').innerText = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
});
