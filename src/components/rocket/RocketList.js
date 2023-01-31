import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const RocketList = () => {
  const rockets = useSelector((state) => state.rootReducer.rocketReducer);

  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <RocketItem
            id={rocket.id}
            rocketName={rocket.rocketName}
            description={rocket.description}
            image={rocket.images[0]}
          />
        </div>
      ))}
    </div>
  );
};

export default RocketList;
