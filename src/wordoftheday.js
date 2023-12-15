import React, { useState, useEffect } from 'react';
import './App.css';

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        const rawQuote = data[randomNum];

        // Check if the text ends with 'type.fit' and remove it
        const cleanedText = rawQuote.text.endsWith(', type.fit')
          ? rawQuote.text.slice(0, -10) // Remove the last 8 characters ('type.fit')
          : rawQuote.text;

        // Set the modified quote in the state
        setQuote({ text: cleanedText, author: rawQuote.author });
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <div className='app'>
        <div className='quote'>
          <p>{quote.text}</p>
          <p>-{quote.author}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteOfTheDay;
