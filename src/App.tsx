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
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/*" element={<HotelList />} />
        </Routes>
      </HotelServiceContext.Provider>
    </Router>
  );
}

export default App
