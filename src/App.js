import './App.css';
import AnimalList from './components/AnimalList';
import { useState } from 'react';

const INITIAL_ANIMALS = [
  {   
      id: 1,
      name: "Violet",
      species:"Goodest Baby Dog",
      photoUrl: "https://placekitten.com/205"
  },
  {
      id: 2,
      name: "Norman",
      species:"Puppy",
      photoUrl: "https://placekitten.com/204"
  },
  {
    id: 3,
    name: "Juni",
    species:"Poodle",
    photoUrl: "https://placekitten.com/201"
  }
];

function App() {
  
  const [animals, setAnimals] = useState(INITIAL_ANIMALS)
  return (
  <section>
    <h1> Sapphire Animals</h1>
  {/* Make a list of animals */}
  <AnimalList listofAnimals={animals}></AnimalList>


  </section>
  );
}

export default App;
