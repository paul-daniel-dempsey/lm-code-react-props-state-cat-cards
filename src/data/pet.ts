import { PetType } from "./pet_type";

export default interface Pet {
    key: string;
    type: PetType;
    name: string;
    species: string;
    favFoods : Array<string>;
    birthYear : number;
}