import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

import Pet from './data/pet';
import PetCard from './components/pet_card';
import PetData from './data/pet-data';

import cat1 from './assets/images/cat1.jpg';
import cat2 from './assets/images/cat2.jpg';
import cat3 from './assets/images/cat3.jpg';
import cat4 from './assets/images/cat4.jpg';
import cat5 from './assets/images/cat5.jpg';
import cat6 from './assets/images/cat6.jpg';
import cat7 from './assets/images/cat7.jpg';
import cat8 from './assets/images/cat8.jpg';
import cat9 from './assets/images/cat9.jpg';
import cat10 from './assets/images/cat10.jpg';
import cat11 from './assets/images/cat11.jpg';
import cat12 from './assets/images/cat12.jpg';
import dog1 from './assets/images/dog1.jpeg';
import dog2 from './assets/images/dog2.jpeg';
import dog3 from './assets/images/dog3.jpeg';

function App() {

	const [pets, setPets] = useState<Array<Pet>>(PetData);
	const petimages = [
		{
			key: '',
			image: cat1,
			altText: 'Describe this cat!',
			licenceType: 'CC BY-SA 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
			attributionName: 'amblin',
			attributionUrl: 'https://www.flickr.com/people/amblin/'
		},
		{
			key: '',
			image: cat2,
			altText: 'Describe this cat!',
			licenceType: 'CC BY-SA 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
			attributionName: 'ivva',
			attributionUrl: 'https://www.flickr.com/people/ivva/'
		},
		{

			image: cat3,
			altText: 'Describe this cat!',
			licenceType: 'CC BY-ND 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
			attributionName: 'Rachele Pettarelli Ph',
			attributionUrl: 'https://www.flickr.com/people/rachephotos/'
		},
		{
			key: '',
			image: cat4,
			altText: 'Describe this cat!',
			licenceType: 'CC BY 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
			attributionName: 'renarl',
			attributionUrl: 'https://www.flickr.com/people/renarl/'
		},
		{
			key: '',
			image: cat5,
			altText: 'Describe this cat!',
			licenceType: 'CC BY-SA 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
			attributionName: 'x-oph',
			attributionUrl: 'https://www.flickr.com/people/x-oph/'
		},
		{
			key: '',
			image: cat6,
			altText: 'Describe this cat!',
			licenceType: 'CC BY-ND 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
			attributionName: 'arrathoonlaa@att.net',
			attributionUrl: 'https://www.flickr.com/people/21851382@N04/'
		},
		{
			key: '',
			image: cat7,
			altText: 'Describe this cat!',
			licenceType: 'CC BY 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
			attributionName: 'pavlovskyy',
			attributionUrl: 'https://www.flickr.com/people/pavlovskyy/'
		},
		{
			key: '',
			image: cat8,
			altText: 'Describe this cat!',
			licenceType: 'CC BY 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
			attributionName: 'AleGranholm',
			attributionUrl: 'https://www.flickr.com/people/darthale/'
		},
		{
			key: '',
			image: cat9,
			altText: 'Describe this cat!',
			licenceType: 'CC BY 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
			attributionName: 'Sardonic G',
			attributionUrl: 'https://www.flickr.com/people/24039825@N06/'
		},
		{
			key: '',
			image: cat10,
			altText: 'Describe this cat!',
			licenceType: 'CC BY 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by/2.0/',
			attributionName: 'www.metaphoricalplatypus.com',
			attributionUrl: 'https://www.flickr.com/people/29638108@N06/'
		},
		{
			key: '',
			image: cat11,
			altText: 'Describe this cat!',
			licenceType: 'CC BY-SA 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
			attributionName: 'abraham.williams',
			attributionUrl: 'https://www.flickr.com/people/4braham/'
		},
		{
			key: '',
			image: cat12,
			altText: 'Describe this cat!',
			licenceType: 'CC BY-SA 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
			attributionName: 'x-oph',
			attributionUrl: 'https://www.flickr.com/people/x-oph/'
		},
		{
			key: '',
			image: dog1,
			altText: 'Describe this dog!',
			licenceType: 'CC BY-SA 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
			attributionName: 'amblin',
			attributionUrl: 'https://www.flickr.com/people/amblin/'
		},
		{
			key: '',
			image: dog2,
			altText: 'Describe this dog!',
			licenceType: 'CC BY-SA 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
			attributionName: 'ivva',
			attributionUrl: 'https://www.flickr.com/people/ivva/'
		},
		{
			key: '',
			image: dog3,
			altText: 'Describe this dog!',
			licenceType: 'CC BY-ND 2.0',
			licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
			attributionName: 'Rachele Pettarelli Ph',
			attributionUrl: 'https://www.flickr.com/people/rachephotos/'
		},
	];

	let catCount = 0;
	let dogCount = 0;
	pets.forEach((pet) => {
		(pet.type==="CAT"? catCount+=1 : dogCount+=1);
	});

	pets.forEach((pet, index) => {
		pet.key = uuidv4();
		petimages[index].key = pet.key;
	});

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
			</main>

			<Footer />
		</>
	);
}

export default App;


