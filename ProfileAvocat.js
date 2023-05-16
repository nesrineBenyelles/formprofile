import React from 'react';

const LawyerProfile = () => {
  const avocat = {
    name: 'Tchouar ',
    prenom: 'Djilali',
    description: 'Tchouar Djilali avocat professeur.......',
    telephone: '055555',
    adressecabinet: 'Rue de Paris',
    ville: 'Tlemcen',
    pdp: ''
  };

  return (
    <div className='profile-container'>
      <div className='name-section'>
        <img src='' className='pdp' alt='Profile' />
        <h1>{avocat.name} {avocat.prenom}</h1>
      </div>
      <div className='information'>
        <p className='profile-description'>{avocat.description}</p>
        <p className='contact-info'>Contact : {avocat.telephone}</p>
        <p className='additional-info'>Adresse : {avocat.adressecabinet}</p>
        <p className='additional-info'>Ville: {avocat.ville}</p>
      </div>
    </div>
  );
};

export default LawyerProfile;
