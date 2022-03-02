import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Chart from "./Chart";

function AddExpense(props) {
  const [Values, setValues] = useState({ name: "", amount: "" });
  const [recentExpense, setRecentExpense] = useState({
    name: "",
    amount: "",
    id: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const mixedArray = props.totalExpense.filter(
      (value) => value.name.trim() === recentExpense.name.trim()
    );
    if (props.mainBudget) {
      if (mixedArray.length === 0) {
        if (recentExpense.name.trim() && recentExpense.amount.trim() > 0) {
          props.formSubmit({ ...recentExpense, id: uuidv4() });
          setValues({ name: "", amount: "" });
        }
      } else {
        props.click();
      }
    } else {
      props.clickBudget();
    }
  };

  const nameChangeHandler = (e) => {
    setValues({ ...Values, name: e.target.value });
    setRecentExpense({
      ...recentExpense,
      name: e.target.value,
    });
  };
  const costChangeHandler = (e) => {
    setValues({ ...Values, amount: e.target.value });
    setRecentExpense({
      ...recentExpense,
      amount: e.target.value,
    });
  };
  return (
    <div className="mt-2 ">
      <p className=" text-2xl text-white mb-2">Add Expense</p>
      <div className="md:flex justify-between  h-full">
        <div className=" bg-slate-200 text-black container rounded-md p-4 shadow-md w-full md:w-1/5 h-full md:h-full ">
          <form onSubmit={onSubmitHandler}>
            {/* <p>Name</p> */}
            <input
              type="text"
              onChange={nameChangeHandler}
              className=" border-2 rounded-md mb-2 w-full p-2 "
              required={true}
              value={Values.name}
              placeholder="Expense Name"
            />
            {/* <p>Cost</p> */}
            <input
              type="number"
              onChange={costChangeHandler}
              className="p-2 border-2 rounded-md mb-2 w-full "
              required={true}
              value={Values.amount}
              placeholder="Amount"
            />
            <button
              className=" block  bg-blue-800 text-white border-2 rounded-md mb-2 w-full shadow-sm hover:bg-blue-600
             duration-200 ease-in-out"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
        <div className=" w-full md:w-1/2  mt-4 md:mt-0 h-fit ">
          {props.searchDisplay && (
            <Chart
              chartLabelArray={props.chartLabelArray}
              chartValueArray={props.chartValueArray}
              totalExpense={props.totalExpense}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
