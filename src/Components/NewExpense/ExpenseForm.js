import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const onTitleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevInput) => {
        //     return {...prevInput, enteredTitle: event.target.value};
        // });
    };

    const onAmountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const onDateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const sharedHandler = (identifier, value) => {
        if (identifier === 'title'){
            setEnteredTitle(value);
        }
        else if(identifier === 'amount'){
            setEnteredAmount(value);
        }
        else {
            setEnteredDate(value);
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
    };

    return (
        <form onSubmit={(event) => {
            formSubmitHandler(event);
        }}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label> Title </label>
                    <input type="text" onChange={(event) => {
                        sharedHandler('title', event.target.value);
                    }}/>
                </div>
                <div className="new-expense__controls">
                    <label> Amount </label>
                    <input type="number" min="0.01" step="0.01" onChange={(event) => {
                        sharedHandler('amount', event.target.value);
                    }}/>
                </div>
                <div className="new-expense__controls">
                    <label> Date </label>
                    <input type="date" min="2015-01-01" max="2030-01-01" onChange={(event) => {
                        sharedHandler('date', event.target.value);
                    }}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;