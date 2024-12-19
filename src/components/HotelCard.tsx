import React from 'react';
import { Hotel } from '../models/Hotel';

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => (
  <>
      <p>{hotel.id}</p>
      <p>{hotel.imageUrl}</p>
      <p>{hotel.name}</p>
      <p>{hotel.location}</p>
      <p>{hotel.rating}</p>
      <p>{hotel.datesOfTravel.join(", ")}</p>
      <p>{hotel.boardBasis}</p>
      <div>{hotel.rooms.map((room, index) => (
            <ul key={index}>
              <li>{`${room.roomType} - ${room.amount}`}</li>
            </ul>
          ))}</div>
      <p></p>
      <p></p>
  </>
);

export default HotelCard;