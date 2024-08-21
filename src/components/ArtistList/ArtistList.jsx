import React from 'react';
import ArtistImage from '../ArtistImage/ArtistImage';

const ArtistList = ({ artists }) => {
  return (
    <div className="artist-list">
    <h2>Artistas Pop mais seguidos</h2>
    <div className="table-container">
    <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Seguidores</th>
            <th>Popularidade</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist) => (
            <tr key={artist.id}>
              <td>
                <ArtistImage images={artist.images} />
              </td>
              <td>{artist.name}</td>
              <td>{artist.followers.total}</td>
              <td>{artist.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     </div>
  );
};

export default ArtistList;
