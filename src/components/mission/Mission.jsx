import React from 'react';

const Mission = () => (
  <div className="mission">
    <h3 className="mission-title">Rocket Name</h3>
    <p className="mission-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sunt sequi et reprehenderit nemo necessitatibus explicabo excepturi temporibus ipsa, incidunt eveniet quas aliquam in ad molestiae quis iusto fugiat quia.</p>
    <div className="mission-status">
      <button
        type="button"
        className="active-member"
      >
        Active Member
      </button>
      <button
        type="button"
        className="leave-button"
      >
        Leave Mission
      </button>
    </div>
  </div>
);

export default Mission;
