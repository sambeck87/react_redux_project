import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelMission } from '../redux/mission/mission';
import '../styles/my-profile.scss';

const MyProfile = () => {
  const reservedMissions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();

  const handleReservation = (id, type) => {
    if (type === 'mission') {
      dispatch(cancelMission(id));
    }
  };

  return (
    <section className="container profile-section">
      <div>
        <h1 className="profile-mission">My Missions</h1>
        <ul className="reserved-mission">
          {reservedMissions?.filter((mission) => mission.status === true).map((mission) => (
            <li key={mission.mission_id} className="reserved-item">
              {mission.mission_name}
              <button
                type="button"
                onClick={() => handleReservation(mission.mission_id, 'mission')}
                className="leave-mission"
              >
                {mission.status ? 'Leave Mission' : ''}
              </button>
            </li>
          ))}
          {
            reservedMissions?.filter((mission) => mission.status === true).length === 0
            && <li className="reserved-item">No Missions Joined</li>
          }
        </ul>
      </div>
      <div>
        <h1 className="profile-title">My Rockets</h1>
        <ul className="reserved-rocket">
          <li className="reserved-item">
            <button
              type="button"
              className="leave-mission"
            >
              Reserved Rocket
            </button>
          </li>
          <li className="reserved-item">No reserved rockets</li>
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
