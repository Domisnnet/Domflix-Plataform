
export const movies = [
  {
    "title": "Ad Astra",
    "description": "Um astronauta viaja para os confins do sistema solar para encontrar seu pai e desvendar um mistério que ameaça a sobrevivência de nosso planeta. Ele descobre segredos que desafiam a natureza da existência humana e nosso lugar no cosmos.",
    "youtube": "https://www.youtube.com/watch?v=nxi6rt-bA9E",
    "img": "https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhA6B2GS7K.jpg",
    "progress": 80
  },
  {
    "title": "John Wick",
    "description": "Um ex-assassino de aluguel sai da aposentadoria para rastrear os gângsteres que tiraram tudo dele.",
    "youtube": "https://www.youtube.com/watch?v=C0BMx-qxsP4",
    "img": "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fXFwS2s89HeC3wzU.jpg"
  },
  {
    "title": "Vingadores: Ultimato",
    "description": "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio do universo.",
    "youtube": "https://www.youtube.com/watch?v=g6ng8e_g32E",
    "img": "https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8j4vv.jpg"
  },
  {
    "title": "O Irlandês",
    "description": "Um mafioso relembra seus possíveis envolvimentos no assassinato de Jimmy Hoffa.",
    "youtube": "https://www.youtube.com/watch?v=2AIn_1b03P8",
    "img": "https://image.tmdb.org/t/p/w500/mbm8k3gmJr6dTTas92YhZfBIQ4O.jpg",
    "progress": 25
  },
  {
    "title": "Coringa",
    "description": "Em Gotham City, o comediante Arthur Fleck, que tem problemas mentais, é marginalizado pela sociedade. Ele embarca em uma espiral descendente de revolução e crimes sangrentos. Esse caminho o coloca frente a frente com seu alter ego: o Coringa.",
    "youtube": "https://www.youtube.com/watch?v=t433PEQGErc",
    "img": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  }
];

export function getProfiles() {
    return [
        { name: 'Fabiana', avatar: './assets/1.webp' },
        { name: 'Alexander', avatar: './assets/2.webp' },
        { name: 'Bashira', avatar: './assets/3.webp' },
        { name: 'Dominique', avatar: './assets/4.png' },
    ];
}

export const categories = [
  { title: "Lançamentos", items: movies },
  { title: "Continuar assistindo", items: movies.filter(m => m.progress) },
  { title: "Ação", items: movies.slice(0, 3) },
  { title: "Comédia", items: movies.slice(2, 5) },
];