// PronunciationButton.js
import React from 'react';
import './App.css'
const PronunciationButton = ({ word }) => {
  const speakWord = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = word;
    window.speechSynthesis.speak(speech);
  };

  return (
    <button className="btn" onClick={speakWord}>
        <h2 style={{textAlign:'center',fontSize:'1rem'}}>Pronounce</h2>
    <span class="material-symbols-outlined" style={{padding:'0.2rem' }}>
record_voice_over
</span>
    </button>
  );
};

export default PronunciationButton;
