import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-info mr-4">
        <i className="fas fa-user-circle text-light mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-info mr-4">
        <i className="fab fa-black-tie text-light mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-info mr-4">
        <i className="fas fa-graduation-cap text-light mr-1" />
        Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
