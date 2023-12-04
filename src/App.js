import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import QuoteOfTheDay from './wordoftheday.js';
import MyCarousel from './corousal.js';
import Headerproj from './header.js';
import Word from './word.js';

const DictionaryApp = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const searchWord = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setResult(response.data);
      setError('');
    } catch (error) {
      setError('Word not found');
      setResult([]);
    }
  };


 return (
    <>
  <Headerproj/>
  <MyCarousel/>
 
  <div className="container col-xl-10 col-xxl-8 px-4 py-5 ">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3 tellobee">TelloBee</h1>
        <p className="col-lg-10 fs-4 text ">Your online dictionary is with you, just enter the word you wanna search and see the magic!!!</p>
      </div>
      <hr></hr>
      <main className='main'>
            <div className="word__day">
            <h2>Quote of the Day</h2>
            <hr></hr>
            <QuoteOfTheDay />
    </div>
    <hr></hr>

    <div className="word">
            <h2 className='wording'>Random New Words</h2>
            <hr></hr>
            <Word/>
            <h3 className='wordinglings'>Try having fun with them!!!</h3>
    </div>
    </main>
    <hr></hr>
      <div className="container active">
        <h4 style={{textAlign:'center'}}>Dictionary</h4>
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
          <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <label htmlFor="floatingInput">Search the word</label>
            </div>
            <button  className="w-100 btn btn-lg btn" type="button" onClick={searchWord}>
            <span class="material-symbols-outlined search">
search
</span>
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result.length > 0 && (
              <div>
                <h2>{word}</h2>
                {result.map((entry, index) => (
                  <div key={index}>
                    
                    {entry.meanings.map((meaning, index) => (
                      <p key={index}>
                        <div className="part__speech result">{meaning.partOfSpeech}</div>
                        <div className="definition result">
                          {meaning.definitions.map((definition, index) => (
                            <span className='results' key={index}>{definition.definition}</span>
                          ))}
                        </div>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          <hr className="my-4"/>
          <small className="text-body-secondary">Click "SEARCH" to find your word. Reload to search another.</small>
        </form>
      </div>
    </div>
  </div>
    <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
     
    </ul>
    <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
</div>
    </>
 );
};

export default DictionaryApp;
