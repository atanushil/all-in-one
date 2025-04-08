import React, { useState } from 'react';
import {
  FaUser, FaGraduationCap, FaUsers, FaStar,
  FaChalkboardTeacher, FaKey
} from 'react-icons/fa';

export const UserProfile = () => {
  const userData = {
    name: "Atanu Shil",
    designation: "Trainee",
    batch: "Batch A",
    taName: "Rahul Verma",
    subBatchName: "Sub-Batch A1",
    batchRank: 4,
    subBatchRank: 1,
    dpi: 87.6,
  };

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    // Mock success
    setMessage('Password updated successfully.');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowPasswordForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* User Info */}
      <div>
        <h2 className="text-2xl font-bold mb-4">👤 User Information</h2>
        <div className="space-y-3 text-gray-700">
          <p><FaUser className="inline mr-2 text-blue-500" /><strong>Name:</strong> {userData.name}</p>
          <p><FaGraduationCap className="inline mr-2 text-purple-500" /><strong>Designation:</strong> {userData.designation}</p>
          <p><FaUsers className="inline mr-2 text-green-500" /><strong>Batch:</strong> {userData.batch}</p>
          <p><FaChalkboardTeacher className="inline mr-2 text-orange-500" /><strong>TA:</strong> {userData.taName}</p>
          <p><FaUsers className="inline mr-2 text-teal-500" /><strong>Sub-Batch:</strong> {userData.subBatchName}</p>
          <p><FaStar className="inline mr-2 text-yellow-500" /><strong>Batch Rank:</strong> #{userData.batchRank}</p>
          <p><FaStar className="inline mr-2 text-pink-500" /><strong>Sub-Batch Rank:</strong> #{userData.subBatchRank}</p>
          <div className="mt-4">
            <strong>DPI:</strong>
            <div className="relative w-24 h-24 mt-2">
              <svg className="absolute top-0 left-0 w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="251"
                  strokeDashoffset={`${251 - (251 * userData.dpi) / 100}`}
                  transform="rotate(-90, 50, 50)"
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-bold text-lg">
                {userData.dpi}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">🔐 Security</h2>
        {!showPasswordForm ? (
          <button
            onClick={() => setShowPasswordForm(true)}
            className="flex items-center gap-2 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            <FaKey /> Change Password
          </button>
        ) : (
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Old Password</label>
              <input
                type="password"
                className="w-full p-2 mt-1 border rounded shadow-sm focus:ring-2 focus:ring-blue-300"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">New Password</label>
              <input
                type="password"
                className="w-full p-2 mt-1 border rounded shadow-sm focus:ring-2 focus:ring-blue-300"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                className="w-full p-2 mt-1 border rounded shadow-sm focus:ring-2 focus:ring-blue-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between items-center gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 cursor-pointer rounded hover:bg-blue-700 transition"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                className="p-2 bg-red-100 rounded hover:bg-red-500 hover:text-red-100 text-red-500 cursor-pointer"
              >
                Cancel
              </button>
            </div>
            {message && (
              <div className="p-2 bg-green-100 text-green-700 rounded text-sm">✅ {message}</div>
            )}
            {error && (
              <div className="p-2 bg-red-100 text-red-700 rounded text-sm">⚠️ {error}</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

