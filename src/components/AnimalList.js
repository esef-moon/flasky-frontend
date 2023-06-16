import './AnimalList.css'
import Animal from './Animal';
import propTypes from 'prop-types';

// animal list destructures list of animals using {}
const AnimalList = ({listofAnimals}) => {
    // const {listOfAnimals} = props;

    return (
        <section className="AnimalList">
            <h3>All our Pets</h3>
            <ul className="AnimalList__list">
                { 
                // this embedded jsx, is reponsible for : 
                //reading the prop named listofanimals
                //generating an li elemet for each creature in list of animals. 
                // creating a key for li, defined by creature id. 
                listofAnimals.map((creature) => (
                    <li key={creature.id}>
                        <Animal 
                            name={ creature.name } 
                            species={ creature.species } 
                            photoUrl={ creature.photoUrl}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}

AnimalList.propTypes = {
    listofAnimals: propTypes.arrayOf(
        propTypes.shape({
            name : propTypes.string.isRequired, 
            species: propTypes.string,
            adopted: propTypes.bool,
            age: propTypes.number,
            photoUrl: propTypes.string
        })
    )
}

export default AnimalList;