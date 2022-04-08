import Cat from "./cat";
import { v4 as uuidv4 } from 'uuid';

const catData: Array<Cat> = [
    {
        key : '',
        name: 'Little Miss Purrfect',
        species: 'Cat',
        favFoods: ['wet food', 'dry food'],
        birthYear: 2016,
        catIndex: 1,
     },
     {
        key : '', 
        name: 'Mr Gwumpy',
        species: 'Cat',
        favFoods: ['caviar'],
        birthYear: 2016,
        catIndex: 1,
     },
     {
        key : '',
        name: 'Dopey',
        species: 'Cat',
        favFoods: ['bugs'],
        birthYear: 2018,
        catIndex: 1,
     },
     {
        key : '',
        name: 'Jumpy',
        species: 'Scaredy Cat',
        favFoods: ['not cucumbers!'],
        birthYear: 2008,
        catIndex: 1,
     },
     {
        key : '',
        name: 'Meowsalot',
        species: 'Cat',
        favFoods: ['tuna', 'catnip', 'celery'],
        birthYear: 2012,
        catIndex: 1,
     },
     {
        key : '',
        name: 'Cindy Clawford',
        species: 'Cat',
        favFoods: ['mice'],
        birthYear: 2012,
        catIndex: 1,
     },
     {
        key : '',
         name: 'Katy Purry',
         species: 'Cat',
         favFoods: ['cigarettes', 'coffee'],
         birthYear: 2015,
         catIndex: 1,
     },
     {
        key : '',
        name: 'Dr. Von Belly-Rub',
        species: 'Cat',
        favFoods: ['salt'],
        birthYear: 2020,
        catIndex: 1,
     },
     {
        key : '',
         name: 'Blobby',
         species: 'Bird?',
         favFoods: ['your soul'],
         birthYear: 2020,
         catIndex: 1,
     },
     {
        key : '',
        name: 'El Taco',
        species: 'Cat',
        favFoods: ['tequila', 'bar snax'],
        birthYear: 1995,
        catIndex: 1,
     },
     {         
        key : '',
         name: 'Nibbles',
         species: 'Hungry Cat',
         favFoods: ['blankets', 'feet', 'tinsel'],
         birthYear: 2003,
         catIndex: 1,
     },
     {
        key : '',
        name: 'BoopySnoot',
        species: 'Tiny Cat',
        favFoods: ['milk'],
        birthYear: 2021,
        catIndex: 1,
     },
     {
        key : '',
        name: "Captain Catface",
        species: "Sea Cattain",
        favFoods: ["fish, rum"],
        birthYear: 2016,
        catIndex: 1,
      }
 ];

catData.forEach(cat => cat.key = uuidv4());
console.log(catData);
export default catData;


