import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRockets } from './redux/rockets/Rockets';
import Navbar from './components/navbar/Navar';
import Rockets from './pages/Rockets';
import Profile from './pages/MyProfile';
import Mission from './pages/Missions';
import HorizontalDivider from './components/ui/HorizontalDivider';
import Dragons from './pages/Dragons';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <HorizontalDivider />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </>
  );
};

export default App;
