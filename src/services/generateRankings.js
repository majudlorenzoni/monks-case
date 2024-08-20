import { fetchAllArtistInfos } from "./fetchArtists.js";

export const generateRankings = async () => {
  const artists = await fetchAllArtistInfos();

  if (!artists || !Array.isArray(artists)) {
    throw new Error('Dados inválidos recebidos da API');
  }

  const popArtists = artists
    .filter((artist) => artist.genres && artist.genres.includes("pop"))
    .sort((a, b) => b.followers.total - a.followers.total);

  const genreCount = artists.reduce((acc, artist) => {
    artist.genres.forEach((genre) => {
      acc[genre] = (acc[genre] || 0) + 1;
    });
    console.log("Ranking ARTISTAS POP COM MAIS SEGUIDORES: ", acc);
    return acc;
  }, {});

  const sortedGenres = Object.entries(genreCount)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5);
    console.log("OK EM GENERATE RANKINGS");

  return {
    popArtists,
    sortedGenres,
  };
};
