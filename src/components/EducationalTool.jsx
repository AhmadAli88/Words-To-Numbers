import React, { useState } from 'react';
import wordsToNumbers from 'words-to-numbers';

const EducationalTool = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const numericValue = wordsToNumbers(input, { fuzzy: true });
    setResult(numericValue);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Educational Tool</h1>
      <p>Type a number in words to see its numeric equivalent.</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g., forty-two"
        style={{
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <br />
      <button
        onClick={handleCheck}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Check
      </button>
      {result !== null && (
        <p style={{ marginTop: '10px' }}>
          Numeric Value: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
};

export default EducationalTool;
