export function createCard(item) {
  // O card principal é um link para o trailer ou conteúdo
  const cardLink = document.createElement('a');
  cardLink.href = item.youtube;
  cardLink.target = '_blank'; // Abre em uma nova aba para não interromper a navegação
  cardLink.className = 'carousel-item';

  // A imagem do filme, que serve como thumbnail
  const img = document.createElement('img');
  img.src = item.img;
  img.alt = `Capa do filme`; // Texto alternativo mais descritivo
  cardLink.appendChild(img);

  // Adiciona a barra de progresso se o filme já foi parcialmente assistido
  if (item.progress) {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const progressFill = document.createElement('div');
    progressFill.className = 'progress-bar-fill';
    progressFill.style.width = `${item.progress}%`;

    progressBar.appendChild(progressFill);
    cardLink.appendChild(progressBar);
  }

  return cardLink;
}
