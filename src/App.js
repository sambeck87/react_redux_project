import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="Missions" element={<Missions />} />
          <Route path="MyProfile" element={<MyProfile />} />
          <Route path="/" element={<Rockets />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
