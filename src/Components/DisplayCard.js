import React from "react";

function DisplayCard(props) {
  return (
    <div
      className={` md:w-1/5 rounded-md  p-2 ${
        props.textColor + " " + props.backColor
      }`}
    >
      <p> {props.children}</p>
    </div>
  );
}

export default DisplayCard;
