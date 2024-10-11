import Button from "../atoms/Button";

export default function ResultPage({
  score,
  correctAnswer,
  totalQuestions,
  handleRetry,
}) {
  const incorrectAnswer = totalQuestions - correctAnswer;

  return (
    <main>
      <section className="result relative bg-primary text-white min-h-screen overflow-hidden">
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
            <div className="result-content h-screen flex items-center justify-center">
              <div className="result-wrapper w-full lg:w-5/12 flex flex-col gap-9 lg:gap-16">
                <div className="top text-center">
                  <h1 className="text-3xl lg:text-5xl font-semibold mb-6">
                    Your Quiz Results
                  </h1>
                  <div className="value">
                    <ul className="font-medium lg:text-xl flex flex-col gap-2">
                      <li>Correct Answers: {correctAnswer}</li>
                      <li>Incorrect Answers: {incorrectAnswer}</li>
                      <li>Total Question: {totalQuestions}</li>
                    </ul>
                  </div>
                </div>
                <div className="bottom text-center">
                  <h5
                    className={`font-semibold text-2xl lg:text-4xl ${
                      score >= 70 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    Your Score: {score}
                  </h5>
                  <span className="block pt-3 pb-6 lg:pb-8 lg:text-lg">
                    {score >= 70
                      ? "🎉 Wow! You scored an excellent result!"
                      : "💪 Don't give up! Try the quiz again!"}
                  </span>
                  <div className="button">
                    <Button handle={handleRetry} className="primary">
                      Retry Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
