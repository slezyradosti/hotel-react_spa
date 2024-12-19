import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { CircularProgress, Typography, Box } from "@mui/material";
import { HotelServiceContext } from "../context/hotelServiceContext";
import { Hotel } from "../models/Hotel";

const HotelDetails: React.FC = () => {
  const { id } = useParams(); // Get hotel ID from the URL
  const hotelService = useContext(HotelServiceContext); // Access the HotelService from context
  const [hotel, setHotel] = useState<Hotel | null | undefined>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      if (id) {
        try {
          const hotelData = await hotelService?.getHotelById(Number(id));
          setHotel(hotelData);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchHotel();
  }, [id, hotelService]);

  if (loading) return <CircularProgress />;
  if (!hotel) return <Typography>No hotel found.</Typography>;

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {hotel.name}
      </Typography>
      <img src={hotel.imageUrl} alt={hotel.name} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Location: {hotel.location}
      </Typography>
      <Typography variant="body1">Rating: {hotel.rating}</Typography>
      <Typography variant="body1">Board Basis: {hotel.boardBasis}</Typography>
      <Typography variant="body1">Travel Dates: {hotel.datesOfTravel.join(", ")}</Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        Rooms Available:
      </Typography>
      <ul>
        {hotel.rooms.map((room, index) => (
          <li key={index}>{room.roomType} - {room.amount} rooms available</li>
        ))}
      </ul>
    </Box>
  );
};

export default HotelDetails;
