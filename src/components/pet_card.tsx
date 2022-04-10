import React from "react";
import Pet from "../data/pet";
import PetImg from "../data/pet-img";
import PetImage from "./pet_image";

interface petProps {
    petObject : Pet
    petObjectImg : PetImg;
}

const PetCard : React.FC <petProps> = (props) => {

    const {key, type, name , species, favFoods, birthYear } = props.petObject
    const {image, altText,licenceType, licenceUrl,attributionName,attributionUrl } = props.petObjectImg
    const foods = favFoods.join(", ");

    return (
        <div className="card">
        <h3 className="card__text card__header">{type}:{name}</h3>
        <p className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {foods}</p>
        <p className="card__text">Birth Year: {birthYear}</p>
        <PetImage image={image} 
                    altText={altText} 
                    licenceType={licenceType} 
                    licenceUrl={licenceUrl} 
                    attributionName={attributionName} 
                    attributionUrl={attributionUrl}/>
        <p className="card__text card__text__small">{key}</p>
    </div>
    );
}

export default PetCard;