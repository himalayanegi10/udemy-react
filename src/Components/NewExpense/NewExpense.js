import React from "react";
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const newExpenseAdditionHandler = (expenseData) => {
        const newData = {
            ...expenseData,
            id: Math.random().toString()
        };
        // console.log(newData);
        props.onAddingNewExpense(newData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onNewExpenseAddition={newExpenseAdditionHandler}/>
        </div>
    );
};

export default NewExpense;