import React from 'react';
import PropTypes from 'prop-types';

function Dragon({ name, type, image }) {
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
          <span className="dragon-reserverd">Reserved </span>
        </p>
        <button type="button" className="reserve btn">Reserve Dragon</button>
      </div>

    </div>
  );
}

Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Dragon;
