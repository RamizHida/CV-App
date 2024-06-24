import { useState } from 'react';
import Heading from './components/Heading';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  return (
    <>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Telephone Number:
          <input type="number" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Location:
          <input type="text" />
        </label>
      </form>
      <Heading firstName={firstName} lastNamess={lastName} />
    </>
  );
}

export default App;
