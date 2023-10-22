import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const onTitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const onAmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const onDateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label> Title </label>
                    <input type="text" onChange={onTitleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label> Amount </label>
                    <input type="number" min="0.01" step="0.01" onChange={onAmountChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label> Date </label>
                    <input type="date" min="2015-01-01" max="2030-01-01" onChange={onDateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;