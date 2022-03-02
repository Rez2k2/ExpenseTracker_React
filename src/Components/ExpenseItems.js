import React, { useState } from "react";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  const [searchedValue, setSearchedValue] = useState("");
  const mainList = props.totalList;

  const searchChangeHandler = (e) => {
    setSearchedValue(e.target.value);
  };

  return (
    <div className="mt-4 md:mt-0">
      <p className="text-white text-2xl">Expenses</p>
      {props.searchDisplay && (
        <input
          type="text"
          onChange={searchChangeHandler}
          className=" w-full border-gray-500 border-2 rounded-md mb-2 "
          placeholder="Type to search.."
        />
      )}
      <div className=" h-52 overflow-y-auto">
        {mainList
          // eslint-disable-next-line array-callback-return
          .filter((expense) => {
            if (searchedValue === "") {
              return expense;
            } else if (
              expense.name
                .toLowerCase()
                .trim()
                .includes(searchedValue.toLowerCase().trim())
            ) {
              return expense;
            }
          })
          .map((expense, index) => {
            const handleRemove = () => {
              props.remove(expense.id);
            };
            return (
              <ul className=" ">
                <li
                  key={expense.id}
                  className=" w-full border-bleck-50 border-l-2 border-r-2 border-b-2 rounded-md 
                   h-10 p-2 flex justify-between shadow-sm  z-10  Card text-lg font-medium text-black overflow-x-auto "
                >
                  {expense.name}
                  <div className="flex  w-[40%] justify-between md:w-1/6">
                    <div className=" bg-slate-300 rounded-md w-1/2 min-w-fit  text-base text-center">
                      <p>₹{expense.amount}</p>
                    </div>
                    <button
                      onClick={handleRemove}
                      className="bg-bleck-50 text-gray-100 rounded-full w-8 flex justify-center content-center text-sm 
                      hover:bg-gray-700 duration-200 ease-in-out "
                    >
                      X
                    </button>
                  </div>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}

export default ExpenseItems;
