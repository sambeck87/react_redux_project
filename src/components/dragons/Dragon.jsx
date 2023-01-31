import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// Component imports
import { reserve, cancelReserve } from '../../redux/dragons/Dragons';

function Dragon({
  id,
  name,
  type,
  image,
  reserved,
}) {
  const [dragonId] = useState(id);
  const [reservation, setReservation] = useState(reserved);
  const dispatch = useDispatch();
  function toggleReserve() {
    if (!reservation) {
      dispatch(reserve(dragonId));
      return setReservation(true);
    }
    dispatch(cancelReserve(id));
    return setReservation(false);
  }

  return (
    <div className="single-dragon-container">
      <div className="dragon-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="dragon-text-container">
        <h3 className="dragon-name">{name}</h3>
        <p className="dragon-description">
          {type}
          <br />
          <span className={reserved ? 'dragon-reserved' : ''}>
            {reserved ? 'Reserved' : '' }
          </span>
        </p>
        <button type="button" className={reserved ? 'btn cancel' : 'btn reserve'} onClick={toggleReserve}>{reserved ? 'Cancel Reservation' : 'Reserve Dragon' }</button>
      </div>

    </div>
  );
}

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Dragon;
