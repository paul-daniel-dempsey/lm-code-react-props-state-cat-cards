import Cat from "../data/cat";
interface CatCardProps{
    catObject: Cat;
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
    </div>
);
};

export default CatCard;