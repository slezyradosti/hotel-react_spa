import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HotelServiceContext } from './context/hotelServiceContext';
import HotelList from './pages/HotelList'
import { HotelService } from './services/hotelService';
import HotelDetails from "./pages/HotelDetails";

function App() {
  const hotelService = new HotelService();

  return (
    <Router>
      <HotelServiceContext.Provider value={hotelService}>
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
        </Routes>
      </HotelServiceContext.Provider>
    </Router>
  );
}

export default App
