import { Room } from "./Room";

export class Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Room[];

  constructor(
    id: number,
    name: string,
    location: string,
    rating: number,
    imageUrl: string,
    datesOfTravel: string[],
    boardBasis: string,
    rooms: Room[]
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.datesOfTravel = datesOfTravel;
    this.boardBasis = boardBasis;
    this.rooms = rooms;
  }
}
