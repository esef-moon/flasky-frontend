import logo from './logo.svg';
import './App.css';

import Animal from './components/Animal';


function App() {
  return (
  <section>
    <h1> Sapphire Animals</h1>
    <h2> Animal List</h2>
  {/* Make a list of animals */}
  <Animal></Animal>
  <Animal></Animal>
  <Animal></Animal>
  <Animal></Animal>
  {/*  */}
  </section>
  );
}

export default App;
