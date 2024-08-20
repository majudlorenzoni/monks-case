import axios from 'axios';
import { getToken } from './authentication.js';

const ARTIST_IDS = [
  '6eUKZXaKkcviH0Ku9w2n3V', // Ed Sheeran
  '1dfeR4HaWDbWqFHLkxsg1d', // Queen
  '66CXWjxzNUsdJxJ2JdwvnR', // Ariana Grande
  '04gDigrS5kc9YWfZHwBETP', // Maroon 5
  '53XhwfbYqKCa1cC15pYq2q', // Imagine Dragons
  '7dGJo4pcD2V6oG8kP0tJRR', // Eminem
  '1HY2Jd0NmPuamShAr6KMms', // Lady Gaga
  '4gzpq5DPGxSnKTe4SA8HAU', // Coldplay
  '6vWDO969PvNqNYHIOW5v0m', // Beyoncé
  '0du5cEVh5yTK9QJze8zA0C', // Bruno Mars
  '5pKCCKE2ajJHZ9KAiaK11H', // Rihanna
  '0EmeFodog0BfCgMzAIvKQp', // Sharika
  '1uNFoZAHBGtllmzznpCI3s', // Justin Bieber
  '6S2OmqARrzebs0tKUEyXyp', // Demi Lovato
  '06HL4z0CvFAxyc27GXpf02' // Taylor Swift
];

const API_BASE_URL = 'https://api.spotify.com/v1';

export const fetchArtistInfo = async (token, artistId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/artists/${artistId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar artista:', error);
    throw error;
  }
};

export const fetchAllArtistInfos = async () => {
  try {
    const token = await getToken();
    const results = await Promise.all(
      ARTIST_IDS.map(id => fetchArtistInfo(token, id))
    );
    console.log(results);
    return results;
  } catch (error) {
    console.error('Erro ao buscar informações dos artistas:', error);
    throw error;
  }
};
console.log("OK EM FETCH ARTISTS");