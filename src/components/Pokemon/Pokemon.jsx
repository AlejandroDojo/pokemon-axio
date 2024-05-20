import Pokeball from "../../assets/pokeball.png"

const Pokemon = (element) => {
    const {name} = element.element
    return (
        <div className='pokemon'>
            <img src={Pokeball}/>
            <p> {`${name}`.toUpperCase()}</p>
        </div>
        );
};

export default Pokemon;