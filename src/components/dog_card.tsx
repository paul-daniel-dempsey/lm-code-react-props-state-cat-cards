import React from "react";
import CatImg from "../data/cat-img";
import Dog from "../data/dog";
import CatImage from "./cat_image";

interface dogProps {
    dogObject : Dog
    dogObjectImg : CatImg;
}

const DogCard : React.FC <dogProps> = (props) => {

    const {key, name , species, favFoods, birthYear } = props.dogObject
    const {image, altText,licenceType, licenceUrl,attributionName,attributionUrl } = props.dogObjectImg

    return (
        <div className="card">
        <h3 className="card__text card__header">DOG:{name}</h3>
        <p className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {favFoods}</p>
        <p className="card__text">Birth Year: {birthYear}</p>
        <CatImage image={image} 
                    altText={altText} 
                    licenceType={licenceType} 
                    licenceUrl={licenceUrl} 
                    attributionName={attributionName} 
                    attributionUrl={attributionUrl}/>
        <p className="card__text card__text__small">{key}</p>
    </div>
    );
}

export default DogCard;