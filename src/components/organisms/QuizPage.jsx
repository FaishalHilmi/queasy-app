import React from "react";
import QuestionCard from "../molecules/QuestionCard";

export default function QuizPage() {
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
                  Timer: <span className="">10 seconds</span>
                </div>
                <div className="question">
                  <QuestionCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
