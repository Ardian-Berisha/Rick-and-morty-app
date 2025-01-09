import './App.css';
import React, { useState } from 'react';
import Navbar from './frontend/navbar';
import Hero from './frontend/hero';
import CharacterList from './frontend/characterlist';
import Footer from './frontend/footer';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { LanguageProvider } from './context/LanguageContext'; // Import the LanguageProvider

const App = () => {
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [filtersApplied, setFiltersApplied] = useState(false);

  return (
    <LanguageProvider> {/* Wrap the entire app inside LanguageProvider */}
      <ApolloProvider client={client}>
        <div className="app">
          <Navbar />
          <Hero />
          
          <CharacterList
            status={status}
            setStatus={setStatus}
            species={species}
            setSpecies={setSpecies}
            filtersApplied={filtersApplied}
            setFiltersApplied={setFiltersApplied}
          />
          
          <Footer />
        </div>
      </ApolloProvider>
    </LanguageProvider>
  );
};

export default App;
