const calcularJuros = () => {
    // Obtém os valores dos campos do formulário
    const capitalInicial = parseFloat(document.getElementById('capital').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100; // Converte a taxa de juros para decimal
    const tempo = parseFloat(document.getElementById('tempo').value);
    
      // Validação dos dados
      if (isNaN(capitalInicial) || capitalInicial <= 0) {
        alert('O capital inicial deve ser um número positivo e maior que zero.');
        return;
      }
      if (isNaN(taxaJuros) || taxaJuros <= 0) {
        alert('A taxa de juros deve ser um número positivo e maior que zero.');
        return;
      }
      if (isNaN(tempo) || tempo <= 0) {
        alert('O tempo deve ser um número positivo e maior que zero.');
        return;
      }
  
    // Cálculos
  const montante = capitalInicial * Math.pow((1 + taxaJuros), tempo);
  const juros = montante - capitalInicial;
  const percentualCrescimento = ((montante / capitalInicial) - 1) * 100;

  // Formatação
  const montanteFormatado = montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const jurosFormatado = juros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const percentualFormatado = percentualCrescimento.toFixed(2) + '%';

  // Exibe os resultados na div
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <p>Capital inicial: ${capitalInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
    <p>Montante final: ${montanteFormatado}</p>
    <p>Taxa de juros anual: ${taxaJuros * 100}%</p>
    <p>Juros acumulados: ${jurosFormatado}</p>
    <p>Percentual de crescimento: ${percentualFormatado}</p>
    <p>Período: ${tempo} anos</p>
  `;
  };
  // Função para limpar os dados e confirmar com o usuário
const limparDados = () => {
  if (confirm('Tem certeza que deseja limpar os dados?')) {
    document.getElementById('capital').value = '';
    document.getElementById('taxaJuros').value = '';
    document.getElementById('tempo').value = '';
    document.getElementById('resultado').innerHTML = '';
  }
};

// Associa as funções aos eventos
const form = document.getElementById('calculadoraForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  calcularJuros();
});

const botaoLimpar = document.querySelector('button[type="reset"]');
botaoLimpar.addEventListener('click', limparDados);
