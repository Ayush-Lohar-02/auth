import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const ChangePassword = ({ currentPassword, setPassword }) => {
  const [enteredCurrentPassword, setEnteredCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredCurrentPassword !== currentPassword) {
      setError("Current password is incorrect");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match");
      return;
    }

    setPassword(newPassword);

    setEnteredCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
    alert("Password changed successfully");

    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            Current Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            value={enteredCurrentPassword}
            onChange={(e) => setEnteredCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmNewPassword" className="form-label">
            Confirm New Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
