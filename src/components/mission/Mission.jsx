import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelMission, reserveMission } from '../../redux/mission/mission';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const handleReservation = () => {
    if (mission.status) {
      dispatch(cancelMission(mission.mission_id));
    } else {
      dispatch(reserveMission(mission.mission_id));
    }
  };
  return (
    <div className="mission">
      <h3 className="mission-title">{mission.mission_name}</h3>
      <p className="mission-description">{mission.description}</p>
      <div className="mission-status">
        <div className="mission-status-btn">
          <button
            type="button"
            className={mission.status ? 'active-member' : 'not-member'}
          >
            {mission.status ? 'Active Member' : 'Not a Member'}
          </button>
        </div>
        <button
          type="button"
          onClick={handleReservation}
          className={mission.status ? 'leave-mission' : 'join-mission'}
        >
          {mission.status ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
