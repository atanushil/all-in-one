import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export const Doubts = () => {
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [doubts, setDoubts] = useState([
    {
      id: 1,
      subject: "Data Structures",
      question: "What is the difference between stack and queue?",
      answer: "Stack follows LIFO, Queue follows FIFO.",
    },
    {
      id: 2,
      subject: "React",
      question: "What are React hooks?",
      answer: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !question) return;

    const newDoubt = {
      id: Date.now(),
      subject,
      question,
      answer: "", // initially unanswered
    };

    setDoubts([newDoubt, ...doubts]);
    setSubject("");
    setQuestion("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Ask Your Doubts</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6 bg-white p-4 rounded shadow">
        <div>
          <label className="block font-medium">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
            placeholder="e.g., JavaScript, DSA, DBMS"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Your Question</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
            rows="3"
            placeholder="Type your doubt here..."
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <FaPaperPlane /> Submit
        </button>
      </form>

      {/* Doubt List */}
      <div className="space-y-4">
        {doubts.map((doubt) => (
          <div
            key={doubt.id}
            className={`p-4 rounded shadow ${
              doubt.answer ? "bg-green-100 border-l-4 border-green-500" : "bg-orange-100 border-l-4 border-orange-500"
            }`}
          >
            <p className="font-semibold text-lg">{doubt.subject}</p>
            <p className="text-gray-800 mt-1">{doubt.question}</p>
            {doubt.answer ? (
              <p className="mt-2 text-green-700"><span className="font-medium">TA:</span> {doubt.answer}</p>
            ) : (
              <p className="mt-2 text-orange-700 italic">Waiting for TA response...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

