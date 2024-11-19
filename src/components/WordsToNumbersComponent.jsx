import React, { useState } from 'react';
import wordsToNumbers from 'words-to-numbers';

const WordsToNumbersComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const numericValue = wordsToNumbers(input, { fuzzy: true });
    setResult(numericValue);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Words to Numbers Converter</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number in words (e.g., two hundred)"
        style={{
          width: '300px',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <br />
      <button
        onClick={handleConvert}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Convert
      </button>
      {result !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default WordsToNumbersComponent;
