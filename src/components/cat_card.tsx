import Cat from "../data/cat";
import CatImg from "../data/cat-img";
import CatImage from "./cat_image";

interface CatCardProps{
    catObject: Cat;
    catObjectImg : CatImg;
 }

const CatCard : React.FC<CatCardProps> = (props) => {

	console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props.catObject
	);

    // destructure
    const { key, name , species, favFoods, birthYear } = props.catObject
    const { image, altText,licenceType, licenceUrl,attributionName,attributionUrl } = props.catObjectImg
    
    return (
    <div className="card">
        <h3 className="card__text card__header">{name}</h3>
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
};

export default CatCard;