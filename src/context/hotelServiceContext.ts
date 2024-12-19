import { createContext } from "react";
import { HotelService } from "../services/hotelService";

export const HotelServiceContext = createContext<HotelService | null>(null);