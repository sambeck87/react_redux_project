import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navar';
import Rockets from './pages/Rockets';
import Profile from './pages/MyProfile';
import Mission from './pages/Missions';
import HorizontalDivider from './components/ui/HorizontalDivider';

const App = () => (
  <>
    <Navbar />
    <HorizontalDivider />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/mission" element={<Mission />} />
    </Routes>
  </>
);

export default App;
