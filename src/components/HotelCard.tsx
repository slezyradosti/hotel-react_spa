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

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  const fallbackImage = "https://via.placeholder.com/345x194?text=No+Image+Available";

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
        {/* Rating */}
        <Typography variant="body2" color="text.secondary">
          Rating:
        </Typography>
        <Rating value={hotel.rating} readOnly precision={0.5} />

        {/* Dates of Travel */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Dates of Travel:
        </Typography>
        <List>
          {hotel.datesOfTravel.map((date, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={date} />
            </ListItem>
          ))}
        </List>

        {/* Board Basis */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Board Basis: {hotel.boardBasis}
        </Typography>

        {/* Rooms */}
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
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default HotelCard;