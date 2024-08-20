import React from 'react';

const GenreList = ({ genres }) => {
  return (
    <div>
      <h2>Gêneros Populares</h2>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
