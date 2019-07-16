import React from "react";

const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {console.log(props.test3)}
      <button>{props.test3}</button>
    </>
  );
};

export default SpecialButton;
