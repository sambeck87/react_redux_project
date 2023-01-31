import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const {
    id,
    rocketName,
    description,
    image,
    reserved,
    handleRocket,
  } = props;

  return (
    <li className="rocket">
      <img src={image} alt="rocket" />
      <div className="single-rocket-container">
        <span className="rocket-name">
          {rocketName}
        </span>
        <div className="rocket-detail">
          <span className={reserved ? 'reserved' : 'no_reserved'}>
            {reserved ? 'Reserved' : ''}
          </span>
          {description}
        </div>
        <button
          type="button"
          className={reserved ? 'cancel_resercation' : 'reserve_rocket'}
          onClick={() => {
            handleRocket(id);
          }}
        >
          {reserved ? 'Cancel Resercation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleRocket: PropTypes.func.isRequired,
};
