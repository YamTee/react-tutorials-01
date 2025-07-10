import React from "react";

function Person({ person }) {
  return (
    <h1>
      {person.name} is {person.age} years old!
    </h1>
  );
}

export default Person;
