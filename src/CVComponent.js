// CVComponent.jsx

import React, { useState } from "react";
import "./CVComponent.css"; 

const CVComponent = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="cv-container">
      <h1>Your Name</h1>
      <p>
        Contact Information: +994 55 666 88 22, Asoiu611@gmail.com,
        Azerbaijan,Baku
      </p>
      <button className="toggle-btn" onClick={toggleDetails}>
        Details
      </button>
      {showDetails && (
        <div className="details-container">
          <h2>Education</h2>
          <p>Azerbaijan State Oil and University</p>
          <h2>Work Experience</h2>
          <p>IATC Devops Mentor</p>
        </div>
      )}
    </div>
  );
};

export default CVComponent;
