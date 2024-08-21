import React from 'react';

const ArtistImage = ({ images }) => {
  const imageUrl = images && images.length > 0 ? images[0].url : '';

  return (
    <div className="image-container">
      {imageUrl ? (
        <img src={imageUrl} alt="Artista" />
      ) : (
        <p>Imagem não disponível</p>
      )}
    </div>
  );
};

export default ArtistImage;
