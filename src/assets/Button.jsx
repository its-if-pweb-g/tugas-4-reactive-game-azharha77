import React from 'react';

const Button = ({ answer, onClick }) => {
  return (
    <button onClick={onClick} className="answer-button">
      {answer}
    </button>
  );
};

export default Button;