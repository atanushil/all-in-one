import { useState } from "react";
import { Link } from "react-router-dom";

const mockTests = [
  {
    id: 1,
    title: "DSA Basics",
    questions: [
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
      },
      {
        question: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
      },
    ],
  },
  {
    id: 2,
    title: "Web Fundamentals",
    questions: [
      {
        question: "Which HTML tag is used to define a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        answer: "<a>",
      },
      {
        question: "What does CSS stand for?",
        options: ["Color Style Sheets", "Cascading Style Sheets", "Code Styling Syntax", "Cool Styling Script"],
        answer: "Cascading Style Sheets",
      },
    ],
  },
];

export const Tests = () => {
  const [activeTest, setActiveTest] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartTest = (test) => {
    setActiveTest(test);
    setUserAnswers({});
    setShowResult(false);
    setScore(0);
  };

  const handleOptionChange = (questionIndex, selectedOption) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: selectedOption }));
  };

  const handleSubmit = () => {
    let correct = 0;
    activeTest.questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) correct++;
    });
    setScore(correct);
    setShowResult(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Available Tests</h1>

      {!activeTest && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((test) => (
            <div key={test.id} className="bg-white shadow p-4 rounded-md">
              <h2 className="text-lg font-bold mb-2">{test.title}</h2>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleStartTest(test)}
              >
                Start Test
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTest && !showResult && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">{activeTest.title}</h2>
          {activeTest.questions.map((q, idx) => (
            <div key={idx} className="mb-6 bg-gray-50 p-4 rounded">
              <p className="font-medium mb-2">
                {idx + 1}. {q.question}
              </p>
              {q.options.map((opt, i) => (
                <div key={i} className="mb-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      value={opt}
                      checked={userAnswers[idx] === opt}
                      onChange={() => handleOptionChange(idx, opt)}
                    />
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      )}

      {showResult && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-700">Test Completed!</h2>
          <p className="text-lg mt-2">
            You scored <span className="font-bold">{score}</span> out of{" "}
            {activeTest.questions.length}
          </p>
          
          <button
            onClick={() => setActiveTest(null)}
            className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            <Link to={"/tests"}>
            Back to Test List
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

