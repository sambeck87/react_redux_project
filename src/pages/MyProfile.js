// import { stat } from 'fs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelMission } from '../redux/mission/mission';
import { reserveRocket } from '../redux/rockets/Rockets';
import { cancelReserve } from '../redux/dragons/Dragons';
import '../styles/my-profile.scss';

const MyProfile = () => {
  const reservedMissions = useSelector((state) => state.missionReducer.missions);
  const reservedRockets = useSelector((state) => state.rocketReducer);
  const reservedDragons = useSelector((state) => state.dragonsSlice.dragons);
  const dispatch = useDispatch();

  const handleReservation = (id, type) => {
    if (type === 'mission') {
      dispatch(cancelMission(id));
    }
    if (type === 'dragon') {
      dispatch(cancelReserve(id));
    }
  };

  const handleRocket = (id) => {
    dispatch(reserveRocket(id));
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
          {reservedRockets?.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <li key={rocket.id} className="reserved-item">
              {rocket.rocketName}
              <button
                type="button"
                onClick={() => handleRocket(rocket.id)}
                className="leave-mission"
              >
                {rocket.reserved ? 'Cancel Reservation' : ''}
              </button>
            </li>
          ))}
          {
            reservedRockets?.filter((rocket) => rocket.reserved === true).length === 0
            && <li className="reserved-item">No Rocket Reserved</li>
          }
        </ul>
      </div>

      <div>
        <h1 className="profile-mission">My Dragons</h1>
        <ul className="reserved-mission">
          {reservedDragons?.filter((dragon) => dragon.reserved === true).map((dragon) => (
            <li key={dragon.id} className="reserved-item">
              {dragon.name}
              <button
                type="button"
                onClick={() => handleReservation(dragon.id, 'dragon')}
                className="leave-mission"
              >
                {dragon.reserved ? 'Cancel Reservation' : ''}
              </button>
            </li>
          ))}
          {
            reservedDragons?.filter((dragon) => dragon.reserved === true).length === 0
            && <li className="reserved-item">No Dragons Reserved</li>
          }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
