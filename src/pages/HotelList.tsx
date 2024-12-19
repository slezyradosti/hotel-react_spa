import React, { useContext, useEffect, useState } from "react";
import { HotelServiceContext } from "../context/hotelServiceContext";
import HotelCard from "../components/HotelCard";
import { CircularProgress, Grid } from "@mui/material";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const data = await hotelService?.getAllHotels();
        
        setHotels(data ?? [] as Hotel[]);
      } catch (err) {
        console.log(err);
        setHotels([] as Hotel[]);
      } finally {
        setLoading(false);
      }
    };
    getHotels();
  });

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={4}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={4} key={hotel.id}>
            <HotelCard hotel={hotel} key={ hotel.id} />
          </Grid>
        ))}
      </Grid>
  );
};

export default HotelList;
