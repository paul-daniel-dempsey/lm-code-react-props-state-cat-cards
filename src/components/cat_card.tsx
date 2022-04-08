import Cat from "../data/cat";
import CatImg from "../data/cat-img";
import CatImage from "./cat_image";

interface CatCardProps{
    catObject: Cat;
    catObjectImg : CatImg;
 }

const CatCard : React.FC<CatCardProps> = ({...props}) => {

	console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props.catObject
	);

    return (
    <div className="card">
        <h3 className="card__text card__header">{props.catObject.name}</h3>
        <p className="card__text">Species: {props.catObject.species}</p>
        <p className="card__text">Favourite Food(s): {props.catObject.favFoods}</p>
        <p className="card__text">Birth Year: {props.catObject.birthYear}</p>
        <CatImage image={props.catObjectImg.image} 
                    altText={props.catObjectImg.altText} 
                    licenceType={props.catObjectImg.altText} 
                    licenceUrl={props.catObjectImg.licenceUrl} 
                    attributionName={props.catObjectImg.attributionName} 
                    attributionUrl={props.catObjectImg.attributionUrl}/>
    </div>
);
};

export default CatCard;