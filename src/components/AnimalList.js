import './AnimalList.css'
import Animal from './Animal';
import propTypes from 'prop-types';

// animal list destructures list of animals using {}
const AnimalList = (props) => {
     const listOfAnimals = props.listOfAnimals;
     console.log(props)

   

    return (
        <section className="AnimalList">
            <h3>All our Pets</h3>
            <ul className="AnimalList__list">  
                { 
                // this embedded jsx, is reponsible for : 
                //reading the prop named listofanimals
                //generating an li elemet for each creature in list of animals. 
                // creating a key for li, defined by creature id. 
                    listOfAnimals.map((creature) => (
                        <li key={creature.id}>
                            <Animal 
                                id={ creature.id }
                                name={ creature.name } 
                                species={ creature.species } 
                                photoUrl={ creature.photoUrl}
                                updateBookmark={props.updateBookmark}
                                isBookmarked={creature.isBookmarked}
                                updateDelete={props.updateDelete}
                            />
                        </li>
                ))}
            </ul>
        </section>
    )
}

AnimalList.propTypes = {
    listOfAnimals: propTypes.arrayOf(
        propTypes.shape({
            name : propTypes.string.isRequired, 
            species: propTypes.string,
            adopted: propTypes.bool,
            age: propTypes.number,
            photoUrl: propTypes.string,
            isBookmarked: propTypes.bool
        })
    ),
        updateBookmark: propTypes.func,
        updateDelete: propTypes.func
}


export default AnimalList;