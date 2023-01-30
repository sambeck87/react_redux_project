import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <div className="mission">
    <h3 className="mission-title">{mission.mission_name}</h3>
    <p className="mission-description">{mission.description}</p>
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

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
