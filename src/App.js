import TestPage from "./test/TestPage";
import HomePage from "./home/HomePage";
import ResultPage from "./result/ResultPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="test" element={<TestPage />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
