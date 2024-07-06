import { useState } from 'react';
import Heading from './components/Heading/Heading';
import SkillsForm from './components/SkillsForm/SkillsForm';
import Skills from './components/SkillsForm/Skills';
import Education from './components/Education/Education';
import EducationForm from './components/Education/EducationForm';

function App() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  const [number, setNumber] = useState('123-456-789');
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [location, setLocation] = useState('Tokyo');
  const [summary, setSummary] = useState('Professional with 4 years...');

  const [skillsForm, setSkillsForm] = useState(false);
  const [skills, setSkills] = useState([]);

  const getSkillsFromSkillsForm = (skills) => {
    setSkills(skills);
  };

  const [educationForm, setEducationForm] = useState(false);
  const [education, setEducation] = useState([]);

  const getEducationFromEducationForm = (education) => {
    setEducation(education);
  };

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
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Summary
          <input
            type="text"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
        </label>
      </form>
      <Heading
        firstName={firstName}
        lastName={lastName}
        number={number}
        email={email}
        location={location}
        summary={summary}
      />
      <div>{skills.length > 0 ? <Skills skills={skills} /> : null}</div>
      <div>
        {education.length > 0 ? <Education education={education} /> : null}
      </div>
      <div>
        <button onClick={() => setSkillsForm(!skillsForm)}>
          {skillsForm ? 'Hide Skills' : 'Open Skills'} Form
        </button>
      </div>
      <br />
      {skillsForm && (
        <SkillsForm getSkillsFromSkillsForm={getSkillsFromSkillsForm} />
      )}
      <br />
      <div>
        <button onClick={() => setEducationForm(!educationForm)}>
          {educationForm ? 'Hide Education' : 'Show Education'} Form
        </button>
      </div>
      <div>
        {educationForm && (
          <EducationForm
            getEducationFromEducationForm={getEducationFromEducationForm}
          />
        )}
      </div>
    </>
  );
}

export default App;
