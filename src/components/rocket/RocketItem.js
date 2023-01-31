import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const {
    rocketName,
    description,
    image,
  } = props;
  return (
    <li className="rocket">
      <img src={image} alt="rocket" />
      <div className="single-rocket-container">
        <span className="rocket-name">
          {rocketName}
        </span>
        <div className="rocket-detail ranad">
          <span className="reserved">
            Reserved
          </span>
          {description}
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
};

export default RocketItem;

RocketItem.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
