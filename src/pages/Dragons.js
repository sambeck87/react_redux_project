import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Component imports
import { fetchDragons } from '../redux/dragons/Dragons';
import Dragon from '../components/dragons/Dragon';
import '../styles/dragons.scss';

let flag = false;

function Dragons() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      flag = true;
      dispatch(fetchDragons());
    }
  }, [dispatch]);
  const data = useSelector((state) => state.dragonsSlice.dragons);

  return (
    <section className="dragons-container container ">
      {data.map((item) => (
        <Dragon key={item.id} name={item.name} type={item.type} image={item.images[0]} />
      ))}
    </section>
  );
}

export default Dragons;
