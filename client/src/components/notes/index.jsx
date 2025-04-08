import { useState } from "react";

const initialNotes = [
  { id: 1, title: "Binary Search", subject: "DSA", importance: "High", content: "Divide array and search..." },
  { id: 2, title: "Normalization", subject: "DBMS", importance: "Medium", content: "1NF, 2NF, 3NF concepts..." },
  { id: 3, title: "React Props", subject: "Web", importance: "Low", content: "Props pass data down..." },
  { id: 4, title: "SQL Joins", subject: "DBMS", importance: "High", content: "INNER JOIN, LEFT JOIN..." },
];

const subjects = ["All", "DSA", "Web", "DBMS"];
const importanceLevels = ["All", "High", "Medium", "Low"];

export const Notes = () => {
  const [notes] = useState(initialNotes);
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedImportance, setSelectedImportance] = useState("All");

  const filteredNotes = notes.filter(note => {
    const matchSubject = selectedSubject === "All" || note.subject === selectedSubject;
    const matchImportance = selectedImportance === "All" || note.importance === selectedImportance;
    return matchSubject && matchImportance;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Notes</h1>

      <div className="flex gap-4 mb-6">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>

        <select
          value={selectedImportance}
          onChange={(e) => setSelectedImportance(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          {importanceLevels.map((level) => (
            <option key={level}>{level}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.map((note) => (
          <div key={note.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">{note.title}</h2>
            <p className="text-sm text-gray-700 mt-2">{note.content}</p>
            <div className="text-xs text-gray-500 mt-4">
              <span className="mr-4">📚 {note.subject}</span>
              <span>⭐ {note.importance}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No notes match your filters.</p>
      )}
    </div>
  );
};


