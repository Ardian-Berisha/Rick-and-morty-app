import React from 'react';

const CharacterCard = ({ name, image, status, species, gender, origin }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Status: {status}</p>
        <p className="card-text">Species: {species}</p>
        <p className="card-text">Gender: {gender}</p>
        <p className="card-text">Origin: {origin.name}</p>
      </div>
    </div>
  </div>
);

export default CharacterCard;
