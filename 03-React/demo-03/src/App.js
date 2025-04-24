import { useState,useEffect } from 'react';
import PeopleForm from './PeopleForm';
import PeopleList from './PeopleList';
import Digimon from './Digimon';

function App() {

  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople([...people, person]);
    
  };

  // mount

  // update
  useEffect(() => {
    console.log(people);
  }, [people]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React Basics Demo</h1>

      <PeopleForm people={people} addPerson={addPerson} />
      <PeopleList people={people} />

      <Digimon/>

    </div>
  );
}

export default App;
