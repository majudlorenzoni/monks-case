import axios from 'axios';
import { Buffer } from 'buffer'; // Importar Buffer para usar no navegador
import { client_id, client_secret } from './info.js';

// Função para obter o token de acesso
export const getToken = async () => {
  const credentials = `${client_id}:${client_secret}`;
  const encodedCredentials = Buffer.from(credentials).toString('base64');

  // Configurações da requisição
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/x-www-form-urlencoded', // Definir Content-Type corretamente
    },
    data: new URLSearchParams({
      grant_type: 'client_credentials',
    }).toString(), // Formatar os dados como URLSearchParams
  };
  
  console.log("OK EM AUTHENTICATION");
  try {
    const response = await axios(authOptions);
    return response.data.access_token;
  } catch (error) {
    console.error('Falha na obtenção do token:', error.response ? error.response.data : error.message);
    throw error;
  }
};
