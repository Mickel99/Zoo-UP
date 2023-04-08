
import axios from 'axios';
import { IAnimals } from '../models/IAnimalList';
const Base_URL = "https://animals.azurewebsites.net/api/animals";

export const  getAnimals = async():Promise<IAnimals[]> =>{
 let responsive = await axios.get(Base_URL);

  return  responsive.data;
}
