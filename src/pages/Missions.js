import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/mission/Mission';
import { getAllMissions } from '../redux/mission/mission';
import '../styles/mission.scss';

let flag = false;
const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      dispatch(getAllMissions());
      flag = true;
    }
  }, [dispatch]);

  const missions = useSelector((state) => state.missionsReducer.missions);
  return (
    <section className="mission-section">
      <div className="container">
        <ul className="mission-container">
          <li className="mission-list">
            <span className="mission-info">Mission</span>
            <span className="mission-info">Description</span>
            <span className="mission-info">Status</span>
          </li>
          {missions?.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Missions;
