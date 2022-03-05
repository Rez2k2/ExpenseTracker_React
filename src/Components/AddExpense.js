import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function AddExpense(props) {
  const valueNullName = useRef();
  const valueNullAmount = useRef();
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
          valueNullName.current.value = "";
          valueNullAmount.current.value = "";
        }
      } else {
        props.click();
      }
    } else {
      props.clickBudget();
    }
  };

  const nameChangeHandler = (e) => {
    setRecentExpense({
      ...recentExpense,
      name: e.target.value,
    });
  };
  const costChangeHandler = (e) => {
    setRecentExpense({
      ...recentExpense,
      amount: e.target.value,
    });
  };
  return (
    <div className=" w-full md:w-1/5">
      <p className=" text-2xl text-white mb-2">Add Expense</p>
      <div className=" bg-slate-200 text-black container rounded-md p-4 shadow-md w-full md:w-[100%] ">
        <form onSubmit={onSubmitHandler}>
          {/* <p>Name</p> */}
          <input
            type="text"
            onChange={nameChangeHandler}
            className=" border-2 rounded-md mb-2 w-full p-2 "
            required={true}
            placeholder="Expense Name"
            ref={valueNullName}
          />
          <input
            type="number"
            onChange={costChangeHandler}
            className="p-2 border-2 rounded-md mb-2 w-full "
            required={true}
            placeholder="Amount"
            ref={valueNullAmount}
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
    </div>
  );
}

export default AddExpense;
