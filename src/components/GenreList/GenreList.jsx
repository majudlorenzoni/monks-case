import React from 'react';

const GenreList = ({ genres }) => {
  return (
    <div className="genre-list">
     <h2>5 GÊneros mais comuns entre <br></br>os artistas pop mais seguidos</h2>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Gênero</th>
            <th>Ocorrências</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genreData, index) => {
            if (Array.isArray(genreData) && genreData.length === 2) {
              const [genre, occurrences] = genreData;
              return (
                <tr key={index}>
                  <td>{genre}</td>
                  <td>{occurrences}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
 </div>
  );
};

export default GenreList;
