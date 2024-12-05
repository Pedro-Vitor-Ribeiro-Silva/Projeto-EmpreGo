const body = document.querySelector('body');

function toggleTheme() {
  if (body.dataset.bsTheme === 'light') {
    body.dataset.bsTheme = 'dark';
    // Opcional: Armazenar a preferência no localStorage
    localStorage.setItem('theme', 'dark');
  } else {
    body.dataset.bsTheme = 'light';
    // Opcional: Armazenar a preferência no localStorage
    localStorage.setItem('theme', 'light');
  }
}

// Exemplo de como chamar a função com um botão:
const themeToggleBtn = document.getElementById('themeToggle'); // Substitua 'themeToggle' pelo ID do seu botão
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}


// Opcional: Carregar a preferência do usuário ao iniciar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.dataset.bsTheme = savedTheme;
}