import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Requirement from "./components/pages/requirement";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/requirement" element={<Requirement />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
