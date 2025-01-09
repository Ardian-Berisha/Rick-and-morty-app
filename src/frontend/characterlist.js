import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../apolloClient';
import CharacterCard from './character';
import { Pagination } from 'react-bootstrap';
import Filters from './filter';
import { useLanguage } from '../context/LanguageContext';

const CharacterList = () => {
  const { language, translations } = useLanguage();
  const [status, setStatus] = useState('');  // Empty means "All" characters
  const [species, setSpecies] = useState(''); // Empty means "All" species
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialStatus = params.get('status') || '';
    const initialSpecies = params.get('species') || '';
    setStatus(initialStatus);
    setSpecies(initialSpecies);
  }, []);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page, status, species },
  });

  const handlePageChange = (pageNumber) => setPage(pageNumber);

  const handleFilterChange = (newStatus, newSpecies) => {
    setStatus(newStatus);
    setSpecies(newSpecies);

    const params = new URLSearchParams();
    if (newStatus) params.set('status', newStatus);
    if (newSpecies) params.set('species', newSpecies);
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container my-4">
      <Filters
        status={status}
        species={species}
        onFilterChange={handleFilterChange} 
      />

      <div className="row">
        {data.characters.results.slice(0, 18).map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>

      <Pagination>
        {data.characters.info.prev && (
          <Pagination.Prev onClick={() => handlePageChange(page - 1)}>
            {translations.previous}
          </Pagination.Prev>
        )}

        {data.characters.info.next && (
          <Pagination.Next onClick={() => handlePageChange(page + 1)}>
            {translations.next}
          </Pagination.Next>
        )}
      </Pagination>
    </div>
  );
};

export default CharacterList;
