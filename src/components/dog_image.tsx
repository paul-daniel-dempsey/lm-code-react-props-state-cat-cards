interface DogImageProps {
	image: string;
	altText: string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}

const DogImage : React.FC<DogImageProps> = ({image,altText,licenceType,licenceUrl,attributionName,attributionUrl}) => {

    return (
        <div className="image">
            <img className="card__image" src={image} alt={altText} /> 
            <p className='card__text__small'>
                Image licenced under <a href={licenceUrl}>{licenceType}</a>
                {attributionName && (
                    <>
                        &nbsp;by <a href={attributionUrl}>{attributionName}</a>
                    </>
                )}
            </p>
        </div>
    );
};


export default DogImage;