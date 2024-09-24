import React, { useState } from 'react';
import Question from '../assets/Question';
import Result from './Result';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is 1 + 1?",
      answers: ["2", "-1", "0", "1"],
      correctAnswerIndex: 0,
    },
    {
      question: "A",
      answers: ["A", "B", "C", "D"],
      correctAnswerIndex: 0,
    },
    {
      question: "When does this question is written?",
      answers: ["-00:05", "12:70", "22:34", "07:50.5"],
      correctAnswerIndex: 2,
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["O2", "H2O", "CO2", "H2"],
      correctAnswerIndex: 1,
    },
    {
      question: "When does this class start?",
      answers: ["13:30", "07:00", "10:00", "15:30"],
      correctAnswerIndex: 1,
    },
    {
      question: "Where is Surabaya located?",
      answers: ["Somewhere", "Jabar", "Jateng", "Jatim"],
      correctAnswerIndex: 3,
    },
    {
      question: "Which is faster?",
      answers: ["Light", "Sound", "Wrong Answer", "Wrong Answer"],
      correctAnswerIndex: 0,
    },
    {
      question: "p -> q, -r -> -q, What is the conclusion?",
      answers: ["r", "q -> p", "p -> r", "q V p"],
      correctAnswerIndex: 2,
    },
    {
      question: "What is 9 + 10?",
      answers: ["18", "19", "20", "21"],
      correctAnswerIndex: 1,
    },
    {
      question: "The answer is the key",
      answers: ["Answer", "Key", "The", "The Key"],
      correctAnswerIndex: 3,
    },
  ];

  const handleAnswerSelected = (answerIndex) => {
    if (answerIndex === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
    </div>
  );
};

export default Quiz;