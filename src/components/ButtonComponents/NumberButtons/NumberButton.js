import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {console.log(props.test)}
      <button>{props.test}</button>
    </>
  );
};

export default NumberButton;
