import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Filters = ({ status, species, onFilterChange }) => {
  const { translations } = useLanguage(); // Access translations

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4">
          <select
            className="form-select"
            value={status}
            onChange={(e) => onFilterChange(e.target.value, species)}
          >
            <option value="">{translations.status}</option>
            <option value="alive">{translations.alive}</option>
            <option value="dead">{translations.dead}</option>
            <option value="unknown">{translations.unknown}</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={species}
            onChange={(e) => onFilterChange(status, e.target.value)}
          >
            <option value="">{translations.species}</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
