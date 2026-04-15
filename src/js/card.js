export function createCard(item) {
  const cardLink = document.createElement('a');
  cardLink.href = item.youtube;
  cardLink.target = '_blank'; 
  cardLink.className = 'carousel-item';
  const img = document.createElement('img');
  img.src = item.img;
  img.alt = `Capa do filme`; 
  cardLink.appendChild(img);

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