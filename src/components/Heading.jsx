/* eslint-disable react/prop-types */
import { useState } from 'react';

const Heading = ({ firstName, lastNamess }) => {
  return (
    <>
      <h1>
        {firstName} {lastNamess}
      </h1>
    </>
  );
};

export default Heading;
