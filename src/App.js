import TestPage from "./test/TestPage";
import { ResultProvider } from "./test/ResultProvider";
import ResultPage from "./result/ResultPage";

function App() {
  return (
    <>
      <ResultProvider>
        <TestPage />
        <ResultPage />
      </ResultProvider>
    </>
  );
}

export default App;
