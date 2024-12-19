import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Hotel } from "../models/Hotel";
import { Link } from "react-router-dom";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const fallbackImage = "https://via.placeholder.com/345x194?text=No+Image+Available";
  const dateRange = hotel.datesOfTravel.length === 2 ? `${hotel.datesOfTravel[0]} - ${hotel.datesOfTravel[1]}` : "Invalid date range";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={hotel.name}
        subheader={hotel.location}
      />
      <CardMedia
        component="img"
        height="194"
        image={hotel.imageUrl || fallbackImage}
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackImage;
        }}
        alt={hotel.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Rating:
        </Typography>
        <Rating value={hotel.rating} readOnly precision={0.5} />

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Dates of Travel: {dateRange}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Board Basis: {hotel.boardBasis}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Rooms:
        </Typography>
        <List>
          {hotel.rooms.map((room, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemText 
                  primary={`Room Type: ${room.roomType}`} 
                  secondary={`Price: €${room.amount}`} 
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Link to={`/hotels/${hotel.id}`}>
          <Button variant="contained" color="primary">View Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default HotelCard;