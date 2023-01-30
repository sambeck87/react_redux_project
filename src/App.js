import './styles/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navar';
import Rockets from './pages/Rockets';
import Profile from './pages/MyProfile';
import Mission from './pages/Missions';
import HorizontalDivider from './components/ui/HorizontalDivider';
import Dragons from './pages/Dragons';

const App = () => (
  <>
    <Navbar />
    <HorizontalDivider />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/mission" element={<Mission />} />
    </Routes>
  </>
);

export default App;
