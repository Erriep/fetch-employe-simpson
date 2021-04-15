import React from 'react';

const DisplayQuotes = ({ simpson }) => {
  return (
    simpson && (
      <div className='DisplayQuotes'>
        <img src={simpson.image} alt='' />
        <ul>
          <li>Citation: {simpson.quote}</li>
          <li>Name: {simpson.character}</li>
        </ul>
      </div>
    )
  );
};

export default DisplayQuotes;
