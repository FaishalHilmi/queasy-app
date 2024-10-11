import React, { useEffect, useState } from "react";
import QuestionCard from "../molecules/QuestionCard";
import ResultPage from "./ResultPage";
import countdown from "../../utils/countdown";

export default function QuizPage() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(120);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const fetchDataQuiz = async () => {
    const API_URL = import.meta.env.VITE_REACT_API_URL;

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}`);
      const data = await response.json();

      if (data.response_code === 0 && data.results != null) {
        setQuestions(data.results);
        // countdown((prev) => setTimer(prev));
      } else {
        fetchDataQuiz();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    countdown((prev) => setTimer(prev));
  }, []);

  useEffect(() => {
    console.log(timer);
  }, [timer]);

  const loadQuizState = () => {
    const savedQuizState = localStorage.getItem("quizState");
    const quizState = JSON.parse(savedQuizState);

    if (savedQuizState != null) {
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
      setLoading(false);
    } else {
      fetchDataQuiz();
    }
  };

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
  }, [currentQuestionIndex, timer]);

  const handleAnswerSelection = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((score) => score + 10);
      setCorrectAnswers((prevCount) => prevCount + 1);
    }

    setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
  };

  const handleRetryQuiz = () => {
    setScore(0);
    setTimer(120);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    fetchDataQuiz();
    localStorage.removeItem("quizState");
  };

  useEffect(() => {
    loadQuizState();
  }, []);

  if (questions.length != 0) {
    if (timer === 0 || currentQuestionIndex >= questions.length) {
      return (
        <ResultPage
          score={score}
          correctAnswer={correctAnswers}
          totalQuestions={questions.length}
          handleRetry={handleRetryQuiz}
        />
      );
    }
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
                {loading ? (
                  <div className="text-lg text-center font-semibold mb-8">
                    Loading...
                  </div>
                ) : (
                  <div>
                    <div className="text-lg font-semibold mb-8">
                      Timer:{" "}
                      <span
                        className={`${
                          timer < 10 ? "text-red-500" : "text-white"
                        }`}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
