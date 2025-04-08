import { useEffect, useState } from "react";

const mockNotes = [
  { id: 1, title: "React Basics", content: "Components, Props, State", uploadedBy: "TA - John" },
  { id: 2, title: "SQL Joins", content: "INNER JOIN, LEFT JOIN examples", uploadedBy: "TA - Asha" },
  { id: 3, title: "Networking Basics", content: "TCP/IP, OSI model", uploadedBy: "TA - Vikram" },
];

export const Learning = () => {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Simulating fetch from TCS IRC DB
    if (!query) {
      setNotes(mockNotes);
    } else {
      const filtered = mockNotes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
      );
      setNotes(filtered);
    }
  }, [query]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">TA Uploaded Notes</h1>

      <input
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div key={note.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{note.title}</h2>
            <p className="text-sm mt-2 text-gray-700">{note.content}</p>
            <p className="mt-4 text-xs text-gray-500 italic">{note.uploadedBy}</p>
          </div>
        ))}
      </div>

      {notes.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No notes found for your search.</p>
      )}
    </div>
  );
};

