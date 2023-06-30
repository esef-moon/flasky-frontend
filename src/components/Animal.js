import './Animal.css';
import propTypes, { element } from  'prop-types';
import { useState } from 'react';
//make the element that the user interacts with <button>
// make the even handler for that element onClick
// configure a piece of state 
    //decide what the state is... what is its name, type, and values.
        //isBookmarked true or false
        //likescount numbers 0+
    //import use State  line 3 on this doc
    // render the piece of state with an intial value line 18
        //setIsBookmarked
    //make the event handler update the state line 29 - 32
//test it
//style it/polish.

const Animal = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        // ind animal is bookmarked
        setIsBookmarked(!isBookmarked);
        // bookmark info passed up to single source of truth SST
        props.updateBookmark(props.id)
    }
    
    //if animal is bookmarked css class name  .bookmarked, else no css class applied
    let animalStyle = '';
    if (isBookmarked) {
        animalStyle = 'bookmarked';
    }

    const toggleDelete = () => {
        console.log()
        props.updateDelete(props.id)
        
    }
    return (
        <section className={animalStyle}>
            <h4> Name: {props.name}</h4>
            {/* if species does not exist set to unknown */}
            <p> Species: {props.species ? props.species: "Unknown" } </p>
            <img src={ props.photoUrl } alt="Willow Simon's cat"></img>
            <button onClick= {toggleBookmark}> Bookmark </button>
            <button onClick= {toggleDelete}> Delete</button>
            <p> Is bookmarked? {isBookmarked ? 
                            "yes this animal is bookmarked" : 
                             "no animal not bookmarked"} 
            </p>

        </section>
    );
}

Animal.propTypes = {
    name : propTypes.string.isRequired, 
    species: propTypes.string,
    adopted: propTypes.bool,
    age: propTypes.number,
    photoUrl: propTypes.string, 
    updateBookmark: propTypes.func,
    isBookmarked: propTypes.bool,
    updateDelete: propTypes.func
}

export default Animal;

