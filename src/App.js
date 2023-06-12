import logo from './logo.svg';
import './App.css';

import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

function App() {
  return (
  <section>
    <h1> Sapphire Animals</h1>
    <h2> Animal List</h2>
  {/* Make a list of animals */}
  <AnimalList></AnimalList>
  {/* Display animal pic, name, and nickname */}
  <Animal></Animal>
  <Animal></Animal>
  <Animal></Animal>
  <Animal></Animal>

  </section>
  );
}

export default App;
