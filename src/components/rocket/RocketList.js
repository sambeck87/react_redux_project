import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketItem from './RocketItem';
import { reserveRocket } from '../../redux/rockets/Rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  const handleRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <RocketItem
            id={rocket.id}
            rocketName={rocket.rocketName}
            description={rocket.description}
            image={rocket.images[0]}
            reserved={rocket.reserved}
            handleRocket={handleRocket}
          />
        </div>
      ))}
    </div>
  );
};

export default RocketList;
