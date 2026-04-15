import { createCard } from './card.js';

export function createCarousel(category) {
  // Cria a seção principal do carrossel
  const carouselSection = document.createElement('div');
  carouselSection.className = 'carousel';

  // Adiciona o título da categoria
  const title = document.createElement('h2');
  title.className = 'carousel-title';
  title.innerText = category.title;
  carouselSection.appendChild(title);

  // Cria o container para os itens do carrossel
  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'carousel-items';

  // Para cada item na categoria, cria um card e o adiciona ao container
  category.items.forEach((item) => {
    const card = createCard(item);
    itemsContainer.appendChild(card);
  });

  carouselSection.appendChild(itemsContainer);

  return carouselSection;
}
