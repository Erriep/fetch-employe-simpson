import './App.css';
import DisplayQuotes from './components/DisplayQuotes.jsx';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [simpson, setSimpson] = React.useState([]);

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      .then((res) => res.data)
      .then((data) => setSimpson(data[0]));
    console.log(getSimpson);
  };

  return (
    <div className='App'>
      <DisplayQuotes simpson={simpson} />
      <button type='button' onClick={getSimpson}>
        Get employee
      </button>
    </div>
  );
}

export default App;
