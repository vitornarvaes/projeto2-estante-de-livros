const searchInput = document.querySelector('input[type="text"]');
const resultados = document.querySelector('.resultados-pesquisa');
const itensResultado = document.querySelectorAll('.item-resultado');
const btnPesquisar = document.querySelector('button');

searchInput.addEventListener('input', () => {
  // Filtra os resultados, mas não rola a página
  const termoPesquisa = searchInput.value.toLowerCase();

  itensResultado.forEach(item => {
    const titulo = item.querySelector('h2 a').textContent.toLowerCase();

    if (titulo.includes(termoPesquisa)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

btnPesquisar.addEventListener('click', () => {
  // Encontra o primeiro resultado e rola a página para ele
  const primeiroResultado = document.querySelector('.item-resultado:not([style*="display: none"])');

  if (primeiroResultado) {
    primeiroResultado.scrollIntoView({ behavior: 'smooth' });
  }
});