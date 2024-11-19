import React, { useState } from 'react';
import wordsToNumbers from 'words-to-numbers';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState(null);

  const processSpeech = () => {
    // Mocked speech input
    const speechInput = "two hundred and thirty-five";
    setTranscript(speechInput);

    const numericValue = wordsToNumbers(speechInput, { fuzzy: true });
    setResult(numericValue);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Speech-to-Text Processing</h1>
      <button
        onClick={processSpeech}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Simulate Speech Input
      </button>
      <p>Spoken Text: {transcript}</p>
      {result !== null && <p>Numeric Value: {result}</p>}
    </div>
  );
};

export default SpeechToText;
