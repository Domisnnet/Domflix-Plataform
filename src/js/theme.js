function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  body.classList.toggle('light-mode');
  // Salva preferência no localStorage
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'dark');
    btn.innerHTML = '☀️'; 
  } else {
    localStorage.setItem('theme', 'light');
    btn.innerHTML = '🌙'; 
  }
}

// Aplica o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.getElementById('theme-toggle');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    btn.innerHTML = '☀️';
  } else {
    btn.innerHTML = '🌙';
  }
});