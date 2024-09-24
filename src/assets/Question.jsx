import React from 'react';
import Button from './Button';

const Question = ({ question, answers, onAnswerSelected }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="answers">
        {answers.map((answer, index) => (
          <Button key={index} answer={answer} onClick={() => onAnswerSelected(index)} />
        ))}
      </div>
    </div>
  );
};

export default Question;