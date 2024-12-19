import './App.css'
import { HotelServiceContext } from './context/hotelServiceContext';
import HotelList from './pages/HotelList'
import { HotelService } from './services/hotelService';

function App() {
  const hotelService = new HotelService();

  return (
    <HotelServiceContext.Provider value={hotelService}>
      <HotelList />
    </HotelServiceContext.Provider>
  );
}

export default App
