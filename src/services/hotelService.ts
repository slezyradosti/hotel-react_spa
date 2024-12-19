import { Hotel } from "../models/Hotel";
import { HotelAgent } from "./api/apiAgent";

export class HotelService {
  constructor() {
    
  }

  getAllHotels = async (): Promise<Hotel[]> => {
    const hotels = await HotelAgent.getAllHotels();
    return hotels;
  }

  getHotelById = async (id: number): Promise<Hotel> => {
    const hotel = await HotelAgent.getHotelById(id);
    return hotel;
  }
}