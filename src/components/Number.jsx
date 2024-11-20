/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import numberToWords from 'number-to-words';

const WordsToNumbersExample = () => {
  const [wordInput, setWordInput] = useState('');
  const [numericOutput, setNumericOutput] = useState(null);

  const handleInputChange = (e) => {
    setWordInput(e.target.value);
  };

  const convertWordsToNumbers = () => {
    try {
      const number = numberToWords.toWords(wordInput);
      setNumericOutput(number);
    } catch (error) {
      setNumericOutput('Invalid input');
    }
  };

  return (
    <div>
      <h1>Words to Numbers Converter</h1>
      <input
        type="text"
        value={wordInput}
        onChange={handleInputChange}
        placeholder="Enter a number in words"
      />
      <button onClick={convertWordsToNumbers}>Convert</button>
      {numericOutput !== null && (
        <div>
          <h2>Converted Number: {numericOutput}</h2>
        </div>
      )}
    </div>
  );
};

export default WordsToNumbersExample;
