import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SkillsForm = ({ getSkillsFromSkillsForm }) => {
  const [skill, setSkill] = useState('');
  const [skillArray, setSkillArray] = useState([]);

  const sendSkillsToParent = () => {
    getSkillsFromSkillsForm(skillArray);
  };

  useEffect(() => {
    return getSkillsFromSkillsForm(skillArray);
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendSkillsToParent();
        }}
      >
        <label>Skill</label>
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button
          onClick={() => {
            if (skill.length === 0) {
              return alert("Can't be empty");
            } else {
              return setSkillArray((prevousSkills) => [
                ...prevousSkills,
                skill,
              ]);
            }
          }}
        >
          submit
        </button>
      </form>
    </>
  );
};

SkillsForm.propTypes = {
  getSkillsFromSkillsForm: PropTypes.func.isRequired,
};

export default SkillsForm;
