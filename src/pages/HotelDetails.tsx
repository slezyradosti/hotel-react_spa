import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CircularProgress, Typography, Box, Button, Card, CardContent, Grid, CardMedia } from "@mui/material";
import { HotelServiceContext } from "../context/hotelServiceContext";
import { Hotel } from "../models/Hotel";

const HotelDetails: React.FC = () => {
  const { id } = useParams();
  const hotelService = useContext(HotelServiceContext);
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const hotelData = id ? await hotelService?.getHotelById(Number(id)) : null;
        setHotel(hotelData ?? null);
      } catch (err) {
        console.error("Error fetching hotel:", err);
        setHotel(null); // Set to null in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id, hotelService]);

  if (loading) return <CircularProgress />;
  if (!hotel) return <Typography>No hotel found.</Typography>;

  const defaultImageUrl = "https://via.placeholder.com/600x400?text=No+Image+Available";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImageUrl;
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ marginBottom: 3 }}>
        <Link to="/hotels">
          <Button variant="contained" color="primary">
            Back to Hotels
          </Button>
        </Link>
      </Box>
      <Card sx={{ maxWidth: 1200, margin: "0 auto", boxShadow: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "row", padding: 3 }}>
          <Box sx={{ width: "50%" }}>
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
                transition: "all 0.3s ease", // Smooth transition
              }}
            />
          </Box>
          <Box sx={{ width: "50%" }}>
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
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default HotelDetails;
