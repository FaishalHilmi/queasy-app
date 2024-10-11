import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

export default function RequirementPage() {
  const [username, setUsername] = useState("");
  const [startedQuiz, setStartedQuiz] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getLoginStatus = localStorage.getItem("isLogin");

    if (!getLoginStatus) {
      navigate("/login");
    }
  }, []);

  const handleStartedQuiz = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    setUsername(getUsername);
  }, []);

  return (
    <main>
      <section className="requirement relative bg-primary text-white min-h-screen overflow-hidden">
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 -top-44 lg:-top-96 w-full lg:w-[870px] transform left-1/2 lg:left-0 -translate-x-1/2"
        />
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 -bottom-44 lg:-bottom-96 w-full lg:w-[870px] transform left-1/2 lg:left-[1800px] -translate-x-1/2"
        />
        <div className="container-content flex items-center h-screen px-5 lg:px-36 relative z-10">
          <div className="content-wrapper grid grid-cols-1 lg:grid-cols-2">
            <div className="caption-wrapper flex items-center lg:pe-12">
              <div>
                <h1 className="font-bold text-2xl lg:text-5xl mb-4">
                  Hello, {username} 👋
                </h1>
                <div className="sub-heading mb-6">
                  <h5 className="font-semibold text-xl mb-2">
                    Welcome to the Quiz!
                  </h5>
                  <span>
                    Get ready to test your knowledge and improve your skills.
                    This quiz will help you assess your understanding of the
                    topics covered.
                  </span>
                </div>
                <div className="requirement-wrapper">
                  <h5 className="font-semibold text-lg mb-2">
                    Quiz Requirement:
                  </h5>
                  <ul className="list-disc list-inside spacec-y-2">
                    <li className="ps-2">
                      Quiz will be conducted for 120 seconds.
                    </li>
                    <li className="ps-2">
                      Make sure to complete the quiz in one sitting.
                    </li>
                    <li className="ps-2">
                      Be honest and answer all questions to the best of your
                      ability.
                    </li>
                  </ul>
                </div>
                <div className="button mt-7">
                  <Button handle={handleStartedQuiz} className="primary">
                    Start Quiz
                  </Button>
                </div>
              </div>
            </div>
            <div className="image-wrapper hidden lg:block">
              <img
                src="/assets/images/quiz-image.png"
                alt="Content Image"
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
