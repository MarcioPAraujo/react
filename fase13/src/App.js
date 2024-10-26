import { useState } from "react";
import BoxQuestion from "./BoxQuestion/BoxQuestion";

const questions = [
  {
    question: 'when was the great depression?',
    options: ['1234','1990','1929','1945'],
    correctOption: '1929',
  },
  {
    question: 'when was the great depression?',
    options: ['1234','1990','1929','1945'],
    correctOption: '1929',
  },
  {
    question: 'when was the great depression?',
    options: ['1234','1990','1929','1945'],
    correctOption: '1929',
  },
]
function App() {
  const [answers, setAwnswers] = useState([])
  const [question, setQuestion] = useState('')
  return (
    <div className="App">
      <BoxQuestion
        options={questions[0].options}
        question={questions[0].question}
        setValue={setQuestion}
        value={question}
      />
    </div>
  );
}

export default App;
