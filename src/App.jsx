import React, { useEffect, useState } from 'react';
import { generateRankings } from './services/generateRankings';
import ArtistList from './components/ArtistList/ArtistList';
import GenreList from './components/GenreList/GenreList';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  const [popArtists, setPopArtists] = useState([]);
  const [sortedGenres, setSortedGenres] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { popArtists, sortedGenres } = await generateRankings();
        setPopArtists(popArtists);
        setSortedGenres(sortedGenres);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="App">
      <div className="content">
      <Navbar />
      <ArtistList artists={popArtists} />
      <GenreList genres={sortedGenres} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
