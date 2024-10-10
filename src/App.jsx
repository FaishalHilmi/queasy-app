import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Requirement from "./components/pages/requirement";
import Quiz from "./components/pages/quiz";
import Result from "./components/pages/result";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/requirement" element={<Requirement />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
