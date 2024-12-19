import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { CircularProgress, Typography, Box, Button, Card, CardContent, Grid, CardMedia } from "@mui/material";
import { HotelServiceContext } from "../context/hotelServiceContext";
import { Hotel } from "../models/Hotel";

const HotelDetails: React.FC = () => {
  const { id } = useParams();
  const hotelService = useContext(HotelServiceContext);
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

  const defaultImageUrl = "https://via.placeholder.com/600x400?text=No+Image+Available";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImageUrl;
    e.currentTarget.style.backgroundColor = "black";
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container justifyContent="flex-start" sx={{ marginBottom: 3 }}>
        <Link to="/hotels">
          <Button variant="contained" color="primary">
            Back to Hotels
          </Button>
        </Link>
      </Grid>
      <Card sx={{ maxWidth: 1200, margin: "0 auto", boxShadow: 3 }}>
        <Grid container spacing={3}>
          {/* Image and Info Section */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="100%"
              image={hotel.imageUrl || defaultImageUrl}
              alt={hotel.name}
              onError={handleImageError}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {hotel.name}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ marginBottom: 2 }}>
                Location: {hotel.location}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Rating:</strong> {hotel.rating} / 5
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Board Basis:</strong> {hotel.boardBasis}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                <strong>Travel Dates:</strong> {hotel.datesOfTravel.join(", ")}
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Rooms Available:
              </Typography>
              <ul>
                {hotel.rooms.map((room, index) => (
                  <li key={index}>
                    {room.roomType} - {room.amount} rooms available
                  </li>
                ))}
              </ul>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default HotelDetails;
