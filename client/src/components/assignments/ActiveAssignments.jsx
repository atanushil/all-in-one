import { useState, useEffect } from "react";

const activeAssignments = [
  { id: 1, title: "JS Loops", dueDate: "2025-04-10" },
  { id: 2, title: "React Props", dueDate: "2025-04-11" },
];

const ActiveAssignments = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [notes, setNotes] = useState({});
  const [code, setCode] = useState("// Write your code here");

  const getColorByDeadline = (dueDate) => {
    const diff = Math.ceil((new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24));
    if (diff <= 1) return "bg-red-400";
    if (diff === 2) return "bg-orange-300";
    return "bg-yellow-200";
  };

  const handleSaveNote = (id, text, importance) => {
    setNotes((prev) => ({
      ...prev,
      [id]: { text, importance },
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Active Assignments</h2>
      <div className="space-y-3">
        {activeAssignments.map((a) => (
          <div
            key={a.id}
            className={`p-3 rounded-lg cursor-pointer ${getColorByDeadline(a.dueDate)}`}
            onClick={() => setSelectedId(a.id)}
          >
            <p className="font-medium">{a.title}</p>
            <p className="text-sm">Due: {a.dueDate}</p>
          </div>
        ))}
      </div>

      {selectedId && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Code Compiler</h3>
          <textarea
            className="w-full h-40 border p-2 font-mono rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Run Code</button>

          <div className="mt-4">
            <h4 className="font-semibold">Take Notes</h4>
            <textarea
              placeholder="What did you learn?"
              className="w-full border rounded p-2 mt-2"
              value={notes[selectedId]?.text || ""}
              onChange={(e) =>
                handleSaveNote(selectedId, e.target.value, notes[selectedId]?.importance || "Medium")
              }
            />
            <div className="mt-2">
              <label className="mr-2">Importance:</label>
              <select
                value={notes[selectedId]?.importance || "Medium"}
                onChange={(e) =>
                  handleSaveNote(selectedId, notes[selectedId]?.text || "", e.target.value)
                }
                className="border rounded px-2 py-1"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveAssignments;
