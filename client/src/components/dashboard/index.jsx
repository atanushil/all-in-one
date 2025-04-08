import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Mock data (replace with real API data)
const assignments = [
  { id: 1, title: "Math Homework", subject: "Math", dueDate: "2025-04-10" },
  { id: 2, title: "Science Project", subject: "Science", dueDate: "2025-04-11" },
  { id: 3, title: "English Essay", subject: "English", dueDate: "2025-04-13" },
];

const subjectProgress = [
  { subject: "Math", progress: 80 },
  { subject: "Science", progress: 60 },
  { subject: "English", progress: 40 },
];

export const Dashboard = () => {
  const navigate = useNavigate();
  const [pendingAssignments, setPendingAssignments] = useState([]);

  useEffect(() => {
    const today = new Date();
    const updatedAssignments = assignments.map((a) => {
      const due = new Date(a.dueDate);
      const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
      let color = "bg-green-200";
      if (diff <= 1) color = "bg-red-400";
      else if (diff === 2) color = "bg-orange-300";
      else if (diff === 3) color = "bg-yellow-200";
      return { ...a, daysLeft: diff, color };
    });

    setPendingAssignments(updatedAssignments);
  }, []);

  const handleAssignmentClick = (id) => {
    navigate(`/assignments/${id}`);
  };

  return (
    <div className="p-4 space-y-6">
      {/* DPI */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">DPI (Dashboard Progress)</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
        </div>
      </div>

      {/* Subject-wise Progress */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Subject-wise Progress</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {subjectProgress.map((item) => (
            <div key={item.subject} className="p-4 bg-gray-100 rounded-lg">
              <p className="font-medium">{item.subject}</p>
              <div className="w-full bg-gray-300 rounded-full h-3 mt-1">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-right mt-1">{item.progress}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Assignments */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Pending Assignments</h2>
        <div className="space-y-2">
          {pendingAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className={`p-3 rounded-lg cursor-pointer ${assignment.color} hover:opacity-90`}
              onClick={() => handleAssignmentClick(assignment.id)}
            >
              <p className="font-medium">{assignment.title}</p>
              <p className="text-sm">Due in {assignment.daysLeft} day(s)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


