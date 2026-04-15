import { profiles } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const perfisContainer = document.querySelector('.perfis-container');
  if (perfisContainer) {
    // Limpa o localStorage para garantir um estado inicial limpo
    localStorage.removeItem('perfilAtivoNome');
    localStorage.removeItem('perfilAtivoImagem');

    perfisContainer.innerHTML = profiles
      .map(
        (
          perfil
        ) => `
          <a href="src/pages/catalogo.html" class="perfil" data-nome="${perfil.name}" data-imagem="${perfil.img}">
            <div class="avatar-container">
              <img src="${perfil.img}" alt="Avatar de ${perfil.name}" class="icone-avatar"/>
            </div>
            <span class="nome-perfil">${perfil.name}</span>
          </a>
        `
      )
      .join('');

    document.querySelectorAll('.perfil').forEach((perfil) => {
      perfil.addEventListener('click', (e) => {
        e.preventDefault(); 
        const nome = perfil.getAttribute('data-nome');
        let imagem = perfil.getAttribute('data-imagem');
        // Remove o 'src/' para consistência no armazenamento
        if (imagem.startsWith('src/')) {
          imagem = imagem.substring(4);
        }

        localStorage.setItem('perfilAtivoNome', nome);
        localStorage.setItem('perfilAtivoImagem', imagem);
        window.location.href = perfil.href;
      });
    });
  }
});