import React, { useEffect, useState } from "react";
import QuestionCard from "../molecules/QuestionCard";
import ResultPage from "./ResultPage";

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(120);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const fetchDataQuiz = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataQuiz();
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const loadQuizState = () => {
    const savedQuizState = localStorage.getItem("quizState");
    const quizState = JSON.parse(savedQuizState);

    if (savedQuizState) {
      const {
        savedIndex,
        savedQuestion,
        savedScore,
        savedTimer,
        savedCorrectAnswer,
      } = quizState;

      setCurrentQuestionIndex(savedIndex);
      setQuestions(savedQuestion);
      setScore(savedScore);
      setTimer(savedTimer);
      setCorrectAnswers(savedCorrectAnswer);
    } else {
      fetchDataQuiz();
    }
  };

  useEffect(() => {
    loadQuizState();
  }, []);

  const saveQuizState = () => {
    const quizState = {
      savedIndex: currentQuestionIndex,
      savedQuestion: questions,
      savedScore: score,
      savedTimer: timer,
      savedCorrectAnswer: correctAnswers,
    };

    localStorage.setItem("quizState", JSON.stringify(quizState));
  };

  useEffect(() => {
    if (questions.length > 0) {
      saveQuizState();
    }
  }, [currentQuestionIndex]);

  const handleAnswerSelection = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer == currentQuestion.correct_answer) {
      setScore((score) => score + 10);
      setCorrectAnswers((prevCount) => prevCount + 1);
    }

    setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
    console.log(score);
  };

  const handleRetryQuiz = () => {
    setScore(0);
    setTimer(120);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    localStorage.removeItem("quizState");
    fetchDataQuiz();
  };

  if (timer == 0 || currentQuestionIndex >= questions.length) {
    return (
      <ResultPage
        score={score}
        correctAnswer={correctAnswers}
        totalQuestions={questions.length}
        handleRetry={handleRetryQuiz}
      />
    );
  }

  return (
    <main>
      <section className="quiz relative bg-primary text-white min-h-screen overflow-hidden">
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 -top-44 lg:-top-96 w-full lg:w-[870px] transform lg:-right-36"
        />
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 -bottom-44 lg:-bottom-80 w-full lg:w-[870px] transform lg:-left-[200px]"
        />
        <div className="container-content font-primary px-5 lg:px-36 h-full relative z-10">
          <div className="content-wrapper">
            <div className="quiz-content h-screen flex items-center justify-center">
              <div className="quiz-wrapper w-full lg:w-5/12">
                <div className="text-lg font-semibold mb-8">
                  Timer:{" "}
                  <span
                    className={`${timer < 10 ? "text-red-500" : "text-white"}`}
                  >
                    {timer} {timer < 10 ? "second" : "seconds"}
                  </span>
                </div>
                <div className="question">
                  <QuestionCard
                    questions={questions[currentQuestionIndex]}
                    handleSelection={handleAnswerSelection}
                    currentIndex={currentQuestionIndex}
                    totalQuestions={questions.length}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
