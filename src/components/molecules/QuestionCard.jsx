import React from "react";

export default function QuestionCard() {
  return (
    <div className="question-wrapper flex flex-col gap-4">
      <span className="text-2xl lg:text-4xl mb-4 font-semibold">
        What is the chemical symbol for gold?
      </span>
      <div className="question-option flex flex-col gap-3 mb-7">
        <button className="px-4 py-2 w-full text-start font-medium rounded-md bg-third border border-third hover:border hover:border-fourth">
          Paris
        </button>
        <button className="px-4 py-2 w-full text-start font-medium rounded-md bg-third border border-third hover:border hover:border-fourth">
          London
        </button>
        <button className="px-4 py-2 w-full text-start font-medium rounded-md bg-third border border-third hover:border hover:border-fourth">
          Berlin
        </button>
        <button className="px-4 py-2 w-full text-start font-medium rounded-md bg-third border border-third hover:border hover:border-fourth">
          Medan
        </button>
      </div>
      <span>Question 5 from 10</span>
    </div>
  );
}
