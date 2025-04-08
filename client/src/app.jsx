import { Route, Routes, Navigate } from 'react-router-dom';
import { SideBar, Dashboard, Assignments, Learn, Notes, Tests, Doubts, UserProfile } from './utils';
const App = () => {
  const user={
    name:"Atanu Shil",
  }
  return (
    <div className="flex bg-amber-200 h-screen  w-screen">
      <SideBar username={user.name} batch={"43"} subBatch={"D2"}/>
      <main className="flex-1 p-6 bg-gray-500 overflow-y-auto">
        <Routes path="/">
          <Route path='/' element={<Dashboard />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/doubts' element={<Doubts />} />
          <Route path='/tests' element={<Tests />} />
          <Route path='/profile' element={<UserProfile user={user}/>}/>

          {/* Redirect unknown routes to Dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
