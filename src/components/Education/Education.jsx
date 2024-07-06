import PropTypes from 'prop-types';

function Education({ education }) {
  return education.map((education) => {
    return (
      <>
        <h1>School: {education.school}</h1>
        <h2>Year of Completion: {education.yearOfCompletion}</h2>
        <h2>Program: {education.study}</h2>
      </>
    );
  });
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
};
export default Education;
