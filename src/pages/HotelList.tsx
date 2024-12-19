import React, { useContext, useEffect, useState } from "react";
import { HotelServiceContext } from "../context/hotelServiceContext";
import HotelCard from "../components/HotelCard";

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: { roomType: string; amount: number }[];
}

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const hotelService = useContext(HotelServiceContext);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const data = await hotelService?.getAllNotes();
        if (data) {
          setHotels(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getHotels();
  }, []);

  return (
    <div>
      {hotels.map((hotel) => (
        <div>
          <HotelCard hotel={hotel} />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
