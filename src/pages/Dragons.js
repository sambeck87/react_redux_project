import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/dragons/Dragons';

let flag = false;

function Dragons() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      flag = true;
      dispatch(fetchDragons());
    }
  }, [dispatch]);
  const data = useSelector((state) => state.rootReducer.dragonsSlice.dragons);
  return (
    <div>
      Dragons
    </div>
  );
}

export default Dragons;
