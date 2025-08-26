// TeamProfile.jsx
import React from "react";
import { useParams } from "react-router-dom";
import teamProfiles from "../data/teamData"; // 👈 new import
import "./TeamProfile.css";

const TeamProfile = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const member = teamProfiles[decodedName];

  if (!member) {
    return (
      <div className='profile-page'>
        <h2>Team member not found.</h2>
      </div>
    );
  }

  return (
    <div className='profile-page'>
      <div className='container profile-flex'>
        <div className='profile-image'>
          <img src={member.image} alt={decodedName} />
        </div>
        <div className='profile-details'>
          <h2>{decodedName}</h2>
          <h4>{member.title}</h4>
          <blockquote className='profile-quote'>“{member.quote}”</blockquote>
          <p>{member.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
