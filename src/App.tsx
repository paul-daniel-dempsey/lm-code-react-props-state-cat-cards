import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

import { PetType } from "./data/pet_type";
import Pet from './data/pet';
import PetImg from './data/pet-img';
import PetCard from './components/pet_card';
import PetData from './data/pet-data';
import petImgData from './data/pet-img-data';

import cat12 from './assets/images/cat12.jpg';
import dog1 from './assets/images/dog1.jpeg';

function App() {

	let [pets, setPets] = useState<Array<Pet>>(PetData);
	let [petimages, setPetImages] = useState<Array<PetImg>>(petImgData);
	let [catCount,setCatCount] = useState<number>(0);
	let [dogCount,setDogCount] = useState<number>(0);

	const incrementCatCount =() => {
		setCatCount(catCount+1)
	}
	const incrementDogCount =() => {
		setDogCount(dogCount+1)
	}
	const createCatTest = () => {
		const uuid = uuidv4();
		petimages.push({
					key: uuid,
					image: cat12,
					altText: 'Describe this cat!',
					licenceType: 'CC BY-ND 2.0',
					licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
					attributionName: 'Rachele Pettarelli Ph',
					attributionUrl: 'https://www.flickr.com/people/rachephotos/'
				});
		setPetImages(petimages)
		pets.push({key : uuid,
					type: "CAT" as PetType,
					name: 'Test',
					species: 'TestCat',
					favFoods: ['test catfood1'],
					birthYear: 1});	
		setPets(pets)
		incrementCatCount()
	}
	const createDogTest = () => {
		const uuid = uuidv4();
		petimages.push({
					key: uuid,
					image: dog1,
					altText: 'Describe this cat!',
					licenceType: 'CC BY-ND 2.0',
					licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
					attributionName: 'Rachele Pettarelli Ph',
					attributionUrl: 'https://www.flickr.com/people/rachephotos/'
				});
		setPetImages(petimages)
		pets.push({key : uuid,
					type: "DOG" as PetType,
					name: 'Test',
					species: 'TestDog',
					favFoods: ['test dogfood1'],
					birthYear: 1});	
		setPets(pets)
		incrementDogCount()
	}
	

	if (catCount === 0 && dogCount === 0) {
		pets.forEach((pet) => {
			(pet.type==="CAT"? catCount+=1 : dogCount+=1);
		});
		pets.forEach((pet, index) => {
			pet.key = uuidv4();
			petimages[index].key = pet.key;
	});
}

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
				<div className='cards__wrapper'>
					{
					pets
					//.map((pet) => ({...pet, key: uuidv4()}))
					.map((pet, index) => ((index < petimages.length) &&
						<PetCard petObject={pet} petObjectImg={petimages.find(image => image.key === pet.key) || petimages[0]}/>
					))}
				</div>
				<div>
					{/* <label>Pet Name:
						<input type="text" value={petName} onChange={(event) => { }}/>
					</label> */}
					<button onClick={createCatTest}>Add Cat</button>
					<button onClick={createDogTest}>Add Dog</button>				
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;


