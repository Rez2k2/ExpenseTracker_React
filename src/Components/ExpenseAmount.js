import { React, useState } from "react";
import DisplayCard from "./DisplayCard";

function ExpenseAmount(props) {
  const [budget, setBudget] = useState("");
  const [viewBudgetForm, setViewBudgetForm] = useState(false);

  const budgetValueChange = (e) => {
    setBudget(e.target.value);
  };
  const updateButtonHandler = (e) => {
    e.preventDefault();

    if (budget.trim() > 0) {
      props.setMainBudget(budget);
      setViewBudgetForm(false);
    }
  };

  function DisplayRemaining() {
    if (props.mainBudget) {
      return (
        <DisplayCard
          textColor={"text-green-900 mb-2"}
          backColor={"bg-green-100"}
        >
          Remaining: {props.mainBudget - props.spent}
        </DisplayCard>
      );
    } else {
      return <div></div>;
    }
  }
  return (
    <div>
      <div className=" md:flex md:justify-between min-h-max  ">
        <div
          className={`md:w-1/5 bg-gray-200 p-2 rounded-md text-gray-800 flex justify-between z-[1] mb-2 md:mb-0 ${
            viewBudgetForm ? "md:rounded-b-none" : ""
          }`}
        >
          <p className="pt-[1px]">
            Budget: {props.mainBudget && props.mainBudget}
          </p>
          <button
            onClick={() => {
              setViewBudgetForm(!viewBudgetForm);
            }}
            className="bg-blue-800 w-1/4 border-2 rounded-md text-white shadow-lg hover:bg-blue-600
            duration-200 ease-in-out  "
          >
            {viewBudgetForm ? "X" : "Edit"}
          </button>
        </div>
        <DisplayRemaining />

        <DisplayCard
          textColor={"text-blue-900  mb-2"}
          backColor={"bg-blue-100"}
        >
          Spent so for: {props.spent}
        </DisplayCard>
      </div>
      {
        <div
          className={` md:w-1/5 bg-gray-200 p-2 rounded-md text-gray-800   h-12 transition duration-150 ease-in-out  ${
            viewBudgetForm
              ? " md:rounded-t-none"
              : " md:-translate-y-full hidden md:block "
          } `}
        >
          <form>
            <div className=" flex justify-between  ">
              <input
                type="number"
                onChange={budgetValueChange}
                value={budget}
                className="border-gray-500 border-2 rounded-md mb-2 w-2/3 md:w-2/6 "
              />
              <button
                type="submit"
                onClick={updateButtonHandler}
                className=" bg-blue-800 w-1/4 border-2 rounded-md text-white shadow-lg h-8 hover:bg-blue-600
                duration-200 ease-in-out "
              >
                save
              </button>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default ExpenseAmount;
