import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <>
      {props.modal && (
        <div className="modal ">
          <div onClick={props.click} className="overlay"></div>
          <div className="modal-content rounded-md">
            <h2 className="font-semibold text-xl">{props.heading}</h2>
            <p className="mt-2">{props.content}</p>
            <button className="close-modal font-semibold" onClick={props.click}>
              X
            </button>
            <div className="flex justify-between">
              <button></button>
              <button
                className=" bg-blue-800 text-white border-2 rounded-md mb-2 w-1/4 md:w-[10%] mt-2 shadow-sm hover:bg-blue-600 p-[1px]
             duration-200 ease-in-out"
                onClick={props.click}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
