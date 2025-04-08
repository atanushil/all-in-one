// utils/Profile.jsx
import { useParams } from 'react-router-dom';

export const Profile = ({user}) => {
//   const { username } = useParams();

  // In a real app, you could fetch more user data here using `username`
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p className="text-lg">Username: {user.name}</p>
    </div>
  );
};

