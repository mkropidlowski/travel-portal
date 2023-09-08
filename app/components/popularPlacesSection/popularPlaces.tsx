import Attraction from "./components/atraction";
import { AttractionMock } from "./components/helpers/helpers";

const PopularPlaces = () => {
    return (
        <div className="max-w-[1200px] flex flex-row justify-center items-center m-auto mt-[35px] gap-[45px]">
            {AttractionMock.map((attraction) => (
                <Attraction
                    key={attraction.id}
                    id={attraction.id}
                    title={attraction.title}
                    description={attraction.description}
                    price={attraction.price}
                    image={attraction.image}
                />
            ))}
        </div>
    );
};

export default PopularPlaces;
