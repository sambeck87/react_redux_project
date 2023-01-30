import React from 'react';
import { rocket } from '../../images/files';

const SingleRocket = () => (
  <li className="rocket">
    <img src={rocket} alt="rocket" />
    <div className="single-rocket-container">
      <span className="rocket-name">
        Rocket Name
      </span>
      <div className="rocket-detail">
        <span className="reserved">
          Reserved
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        A quia maiores itaque perferendis esse quasi obcaecati,
        tempora dolorem provident iure.
      </div>
      <button
        type="button"
        className="reserve"
      >
        Cancel Reservation
      </button>
    </div>
  </li>
);

export default SingleRocket;
