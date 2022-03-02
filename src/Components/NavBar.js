import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="flex mb-4 p-2 md:w-[90%] mx-auto">
      <FontAwesomeIcon
        icon={faMoneyCheckAlt}
        className="text-white text-5xl"
      ></FontAwesomeIcon>
      <h4 className=" text-2xl text-white ml-2 mt-1">ExpenseTracker</h4>
    </div>
  );
}

export default NavBar;
