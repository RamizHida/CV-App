import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const EducationForm = ({ getEducationFromEducationForm }) => {
  const [education, setEducation] = useState([]);
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [yearOfCompletion, setYearOfCompletion] = useState(2000);

  function sendEducationToParent() {
    getEducationFromEducationForm(education);
  }

  useEffect(() => {
    return getEducationFromEducationForm(education);
  });

  const handleSubmit = () => {
    if (school.length === 0 || study.length === 0) {
      return alert('Invalid Education Form Value');
    }
    return setEducation((previousEduc) => [
      ...previousEduc,
      {
        school,
        study,
        yearOfCompletion,
      },
    ]);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEducationToParent();
        }}
      >
        <label>School</label>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <label>Course Study</label>
        <input
          type="text"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
        />
        <label>Year of Completion</label>
        <input
          type="number"
          value={yearOfCompletion}
          onChange={(e) => setYearOfCompletion(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

EducationForm.propTypes = {
  getEducationFromEducationForm: PropTypes.func.isRequired,
};

export default EducationForm;
