import React, { useEffect, useState } from "react";
import AddExpense from "./Components/AddExpense";
import Chart from "./Components/Chart";
import ExpenseAmount from "./Components/ExpenseAmount";
import ExpenseItems from "./Components/ExpenseItems";
import NavBar from "./Components/NavBar";
import Modal from "./Components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [budgetModal, setBudgetModal] = useState(false);
  const [totalExpense, setTotalExpense] = useState([]);
  const [spent, setSpent] = useState(0);
  const [mainBudget, setMainBudget] = useState();
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [chartLabelArray, setChartLabelArray] = useState([]);
  const [chartValueArray, setChartValueArray] = useState([]);

  const getLocalData = () => {
    try {
      const list = localStorage.getItem("array");
      const bud = localStorage.getItem("budget");

      if (list && bud) {
        const list1 = JSON.parse(list);
        const bud1 = JSON.parse(bud);

        setMainBudget(parseInt(bud1));
        setTotalExpense(list1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModalBudget = () => {
    setBudgetModal(!budgetModal);
  };
  const onFormSubmit = (recentExpense) => {
    console.log(recentExpense); //Test
    setTotalExpense([recentExpense, ...totalExpense]);
    console.log(spent); //Test
  };

  const removeItem = (id) => {
    setSpent(0);
    setTotalExpense(totalExpense.filter((expense) => expense.id !== id));
  };

  const calculateSpentAmount = () => {
    localStorage.setItem("array", JSON.stringify(totalExpense));

    const array = totalExpense.map((expense) => {
      return expense.name;
    });
    setChartLabelArray(array);

    const array2 = totalExpense.map((expense) => {
      return expense.amount;
    });
    setChartValueArray(array2);

    if (totalExpense.length !== 0) {
      setSearchDisplay(true);
    } else {
      setSearchDisplay(false);
    }
    let total = 0;
    totalExpense.map((expense) => {
      total = total + parseInt(expense.amount);
      setSpent(total);
      return null;
    });
  };

  useEffect(() => {
    getLocalData();
  }, []);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(mainBudget));
  }, [mainBudget]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(calculateSpentAmount, [totalExpense]);

  return (
    <div className={`min-h-screen bg-bleck-50  `}>
      <NavBar />
      <div className="  max-w-6xl min-h-min mx-auto  p-4 md:pl-0 md:pr-0 md:pb-0 pt-1">
        <ExpenseAmount
          spent={spent}
          setMainBudget={setMainBudget}
          mainBudget={mainBudget}
        />

        <ExpenseItems
          totalList={totalExpense}
          remove={removeItem}
          setSpent={setSpent}
          searchDisplay={searchDisplay}
        />
        <Modal
          click={toggleModal}
          modal={modal}
          heading={"Error !"}
          content={
            "An Expense with the same name alread exists. Please enter a new name or edit the existing expense."
          }
        ></Modal>
        <Modal
          click={toggleModalBudget}
          modal={budgetModal}
          heading={"Error !"}
          content={"Please set the budget before adding the expense"}
        ></Modal>

        <div className="md:flex justify-between  h-full  mt-2">
          <AddExpense
            formSubmit={onFormSubmit}
            mainBudget={mainBudget}
            chartLabelArray={chartLabelArray}
            chartValueArray={chartValueArray}
            totalExpense={totalExpense}
            searchDisplay={searchDisplay}
            click={toggleModal}
            clickBudget={toggleModalBudget}
          />
          <div className=" w-full md:w-1/2  mt-4 md:mt-10 h-fit ">
            {searchDisplay && (
              <Chart
                chartLabelArray={chartLabelArray}
                chartValueArray={chartValueArray}
                totalExpense={totalExpense}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
