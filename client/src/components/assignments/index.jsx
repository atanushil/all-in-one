import ActiveAssignments from "./ActiveAssignments";
import ExpiredAssignments from "./ExpiredAssignments";

export const Assignments = () => {
  return (
    <div className="p-4 space-y-6">
      <ActiveAssignments />
      <ExpiredAssignments />
    </div>
  );
};

