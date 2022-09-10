import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Storyboard from "./Storyboards/Storyboard";
import Home from "./Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<Storyboard />} />
      </Routes>
    </Router>
  );
}

export default App;
