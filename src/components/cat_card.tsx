//import Cat from "../data/cat";
interface CatCardProps{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
 }

const CatCard : React.FC<CatCardProps> = ({...cat}) => {

	console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		cat
	);

    return (
    <div className="card">
        <h3 className="card__text card__header">{cat.name}</h3>
        <p className="card__text">Species: {cat.species}</p>
        <p className="card__text">Favourite Food(s): {cat.favFoods}</p>
        <p className="card__text">Birth Year: {cat.birthYear}</p>
    </div>
);
};

export default CatCard;