import React, { useState } from 'react';
import wordsToNumbers from 'words-to-numbers';

const FormProcessing = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericValue = wordsToNumbers(input, { fuzzy: true });
    setResult(numericValue);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Form Processing</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter amount in words"
        style={{
          padding: '10px',
          marginRight: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
      {result !== null && <p>Numeric Value: {result}</p>}
    </form>
  );
};

export default FormProcessing;
