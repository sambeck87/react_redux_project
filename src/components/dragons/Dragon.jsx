import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// Component imports
import { reserve } from '../../redux/dragons/Dragons';

function Dragon({
  id,
  name,
  type,
  image,
  reserved,
}) {
  const [dragonId] = useState(id);
  const dispatch = useDispatch();
  function toggleReserve() {
    dispatch(reserve(dragonId));
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
          <span className="dragon-reserverd">
            {reserved ? 'Reserved' : '' }
          </span>
        </p>
        <button type="button" className="reserve btn" onClick={toggleReserve}>Reserve Dragon</button>
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
