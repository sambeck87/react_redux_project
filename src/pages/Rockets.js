import React from 'react';
import SingleRocket from '../components/rocket/SingleRocket';
import '../styles/rockets.scss';

const Rockets = () => (
  <section className="rocket-container container">
    <ul>
      <SingleRocket />
    </ul>
  </section>
);

export default Rockets;
