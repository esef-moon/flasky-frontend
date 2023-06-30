import {useState} from "react";
import PropTypes from 'prop-types';

//create a controlled component form to add a new animal. 
export default function NewAnimalForm(props) {
    
    // state object you set in line 17
    const INITIAL_FORM_DATA = {
        name: "", 
        age: 0, 
        species: ""
    }

    // create states for each attribute/input on form. 
    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);
    // const [species, setSpecies] = useState(INITIAL_FORM_DATA);

    //refactoring individual states to one state object
    const [ animalFormData, setAnimalFormData] = useState(INITIAL_FORM_DATA)

    const inputChange = (evt) => {
        // below is logic for when we defined each input box as it's own state
        // const changedEvt = evt.target.name
        // if (changedEvt === "name") {
        //     setName(evt.target.value)
        // } else if (changedEvt === "species") {
        //     setSpecies(evt.target.value)
        // } else if (changedEvt === "age") {
        //     setAge(evt.target.value)
        // }

        // create a copy of data, and then change object with input data
        const newAnimalFormData = {
            ...animalFormData,
            // set the event target "name" (html tag you defined in line), 
            //to whatever input value user is putting in. [key]: value
            [evt.target.name]: evt.target.value
        }
        setAnimalFormData(newAnimalFormData);
        
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        console.log("You clicked submit!");
        props.createNewAnimal(animalFormData);
        setAnimalFormData(INITIAL_FORM_DATA);
    }

    return(
        <div style= {{ border: "3px solid lightgray"}}>
            <h2>Create New Animal</h2>
            {/* form with name, age, species */}
            <form className="stack" onSubmit={handleFormSubmit}>
                {/* name */}
                <label htmlFor="animalName">Name:</label>
                <input 
                    id="animalName" 
                    name="name" 
                    type="text" 
                    value={ animalFormData.name } 
                    onChange={ inputChange }
                />
                {/* age */}
                <label htmlFor="animalAge">Age:</label>
                <input 
                    id="animalAge" 
                    name="age" 
                    type="number" 
                    value={ animalFormData.age } 
                    onChange={ inputChange }
                />
                {/* species */}
                <label htmlFor="animalSpecies">Species:</label>
                <input 
                    id="animalSpecies" 
                    name="species" 
                    type="text" 
                    value={ animalFormData.species } 
                    onChange={ inputChange }
                />

                <input type="submit" value="AddNewValue" />

            </form>
        </div>
    )

}

NewAnimalForm.propTypes = {
    createNewAnimal: PropTypes.func.isRequired,
        
    }

}