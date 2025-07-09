import React from "react";

function ChildComponent(props) {
  return (
    <button onClick={() => props.showAlert(props.greetText)}>Hello</button>
  );
}

export default ChildComponent;
