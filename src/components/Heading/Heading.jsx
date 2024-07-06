/* eslint-disable react/prop-types */
const Heading = ({ firstName, lastName, email, location, number, summary }) => {
  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>
        {location} {number} {email}
      </h2>
      <p>{summary}</p>
    </>
  );
};

export default Heading;
