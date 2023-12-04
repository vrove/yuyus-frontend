import React, { useState } from 'react';
import './profileUpdatePopup.css';

const ProfileUpdatePopup = ({ user, onUpdateProfile, onClose }) => {
  const [newName, setNewName] = useState(user.name);
  const [newUsername, setNewUsername] = useState(user.username);

  const handleUpdateProfile = () => {
    onUpdateProfile({
      name: newName,
      username: newUsername,
    });

    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Edit Profile</h2>
        <label>
          Name:
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        </label>
        <button onClick={handleUpdateProfile}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ProfileUpdatePopup;