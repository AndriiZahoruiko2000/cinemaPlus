export const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Abenteuer',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Komödie',
  },
  {
    id: 80,
    name: 'Krimi',
  },
  {
    id: 99,
    name: 'Dokumentarfilm',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Familie',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'Historie',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Musik',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Liebesfilm',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV-Film',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'Kriegsfilm',
  },
  {
    id: 37,
    name: 'Western',
  },
];

export function getGenres(genresIds = []) {
  if (!Array.isArray(genresIds) || genresIds.length === 0) {
    return 'Unknown';
  }

  const hasName = typeof genresIds[0] === 'object' && genresIds[0]?.name;
  const names = hasName
    ? genresIds.map(el => el.name).filter(Boolean)
    : genresIds
        .map(genresId => genres.find(item => item.id === genresId)?.name)
        .filter(Boolean);

  return names.length ? names.join(', ') : 'Unknown';
}
