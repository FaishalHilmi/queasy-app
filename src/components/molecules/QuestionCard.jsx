import React, { useEffect, useState } from "react";

export default function QuestionCard({
  questions,
  handleSelection,
  currentIndex,
  totalQuestions,
}) {
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    if (!questions) return;

    const allAnswers = [
      questions.correct_answer,
      ...questions.incorrect_answers,
    ];
    // const randomAnswers = allAnswers.sort(() => Math.random() - 0.5);

    setAllAnswers(allAnswers);
    // setAllAnswers(randomAnswers);
  }, [questions]);

  if (!questions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="question-wrapper flex flex-col gap-4">
      <span className="text-2xl lg:text-4xl mb-4 font-semibold">
        {questions.question}
      </span>
      <div className="question-option flex flex-col gap-3 mb-7">
        {allAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleSelection(answer)}
            className="px-4 py-2 w-full text-start font-medium rounded-md bg-third border border-third hover:border hover:border-fourth active:border-fourth"
          >
            {answer}
          </button>
        ))}
      </div>
      <span>
        Question {currentIndex + 1} from {totalQuestions}
      </span>
    </div>
  );
}
