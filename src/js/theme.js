function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const btn = document.getElementById('theme-toggle');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    if (btn) btn.innerHTML = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    if (btn) btn.innerHTML = '🌙';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const btn = document.getElementById('theme-toggle');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (btn) btn.innerHTML = '☀️';
  } else {
    body.classList.remove('dark-mode');
    if (btn) btn.innerHTML = '🌙';
  }
});