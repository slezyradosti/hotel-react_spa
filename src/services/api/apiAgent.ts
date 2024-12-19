import axios from "axios";
import { Hotel } from "../../models/Hotel";

const API_BASE_URL = "http://localhost:5032";

const fetchHotels = async (): Promise<Hotel[]>  => {
  const response = await axios.get<Hotel[]>(`${API_BASE_URL}/hotels`);
  return response.data;
};

const fetchHotelsById = async (id: number): Promise<Hotel[]>  => {
  const response = await axios.get<Hotel[]>(`${API_BASE_URL}/hotels/${id}`);
  return response.data;
};

export const HotelAgent = {
  getAllHotels: () => fetchHotels(),
  getHotelById: (id: number) => fetchHotelsById(id),
}