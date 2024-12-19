import { Hotel } from "../models/Hotel";
import { HotelAgent } from "./api/apiAgent";

export class HotelService {
  constructor() {
    
  }

  getAllNotes = async (): Promise<Hotel[]> => {
    const hotels = await HotelAgent.getAllHotels();
    return hotels;
  }
}