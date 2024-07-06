import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Skills = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill) => {
        return <li key={uuidv4()}>{skill}</li>;
      })}
    </ul>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
