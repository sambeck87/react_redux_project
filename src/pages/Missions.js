import React from 'react';
import Mission from '../components/mission/Mission';
import '../styles/mission.scss';

const Missions = () => (
  <section className="mission-section">
    <div className="container">
      <ul className="mission-container">
        <li className="mission-list">
          <span className="mission-info">Mission</span>
          <span className="mission-info">Description</span>
          <span className="mission-info">Status</span>
        </li>
        <Mission />
      </ul>
    </div>
  </section>
);

export default Missions;
