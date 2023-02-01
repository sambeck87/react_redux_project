import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RocketList from '../components/rocket/RocketList';
import { getRockets } from '../redux/rockets/Rockets';
import '../styles/rockets.scss';

let flag = false;
const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      dispatch(getRockets());
      flag = true;
    }
  }, [dispatch]);
  return (
    <section className="rocket-container container">
      <ul>
        <RocketList />
      </ul>
    </section>
  );
};

export default Rockets;
