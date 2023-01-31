import React from 'react';
import RocketList from '../components/rocket/RocketList';
import '../styles/rockets.scss';

const Rockets = () => (
  <section className="rocket-container container">
    <ul>
      <RocketList />
    </ul>
  </section>
);

export default Rockets;
