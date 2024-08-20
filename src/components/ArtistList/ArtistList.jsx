import React from 'react';

const ArtistList = ({ artists }) => {
  return (
    <div>
      <h2>Artistas Populares</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <p>Nome: {artist.name}</p>
            <p>Seguidores: {artist.followers.total}</p>
            <p>Popularidade: {artist.popularity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
