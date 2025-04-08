const expiredAssignments = [
    { id: 1, title: "Array Basics", completed: true },
    { id: 2, title: "CSS Grid", completed: false },
  ];
  
  const ExpiredAssignments = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Expired Assignments</h2>
        <div className="space-y-3">
          {expiredAssignments.map((a) => (
            <div
              key={a.id}
              className={`p-3 rounded-lg ${
                a.completed ? "bg-green-300" : "bg-gray-300"
              }`}
            >
              <p className="font-medium">{a.title}</p>
              <p className="text-sm">{a.completed ? "Completed" : "Not Completed"}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExpiredAssignments;
  