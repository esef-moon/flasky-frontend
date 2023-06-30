import './App.css';
import AnimalList from './components/AnimalList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewAnimalForm from './components/NewAnimalForm';

//initial data before we hooked up to back end 
// const INITIAL_ANIMALS = [
//   {   
//       id: 1,
//       name: "Violet",
//       species:"Goodest Baby Dog",
//       photoUrl: "https://placekitten.com/207", 
//       isBookmarked: false
//   },
//   {
//       id: 2,
//       name: "Norman",
//       species:"Puppy",
//       photoUrl: "https://placekitten.com/204",
//       isBookmarked: false
//   },
//   {
//     id: 3,
//     name: "Juni",
//     species:"Poodle",
//     photoUrl: "https://placekitten.com/201",
//     isBookmarked: false
//   }
// ];

function App() {
  // use state is empty because we want to get data from API call
  const [animals, setAnimals] = useState([])

  const loadAnimals = () => {
    axios.get('http://127.0.0.1:5000/animals')
    .then((response)=> {
      const initialAnimalData = [];
      response.data.forEach((animal) => {
        initialAnimalData.push(animal);
      });
      
      setAnimals(initialAnimalData)
    })
    .catch((error)=>{
      console.log('error', error)
    })

  }

  //when app initialized, call our backend 
  //set the value of animals backend on state
  useEffect(()=>{loadAnimals}, [])

  const updateBookmark = (animalId) => {
    console.log('bookmark was updated')

    // for (const animal in animals) {
    //   if (animal.id === animalId) {
    //     animal.isBookmarked = !animal.isBookmarked;
    //   }

    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        return {
          ...animal, 
          isBookmarked: !animal.isBookmarked
        }
      }
        return animal;
      });
    setAnimals(updatedAnimals);
  }

    const updateDelete = (animalId) => {
      const updatedAnimals = animals.map (animal => {
        if (animal.id !== animalId) {
          return {...animals}
        }
      });
      setAnimals(updatedAnimals)
    }

    const createNewAnimal = (newAnimalInfo) => {
      console.log("Inside app.js & createNewAnimal Function")
      //add sanctuary field to newAnimalInfo
      const updatedAnimalInfo = {
        ...newAnimalInfo, 
        "sancuary_id": null
      }  

      //api post call to add newanimal to backend
      axios.post('http://127.0.0.1:5000/animals', updatedAnimalInfo)
      .then(() => {
        // make another get request to refresh page OR
        loadAnimals();
        //update the animals state to the refresh page
        const newAnimalsArray = [...animals];
        newAnimalsArray.push(newAnimalInfo);
        setAnimals(newAnimalsArray)

      })
      .catch((error)=> {
        console.log('error', error)
      })
    }
  return (
  <section>
    <h1> Sapphire Animals</h1>
    {/* Make a animal form */}
  <NewAnimalForm createNewAnimal={createNewAnimal} />
  {/* Make a list of animals */}
  <AnimalList 
    listOfAnimals={animals} 
    updateBookmark={updateBookmark}
    updateDelete={updateDelete}
    />


  </section>
  );
}

export default App;
