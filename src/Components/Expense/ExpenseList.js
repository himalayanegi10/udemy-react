import React from "react";
import './ExpenseList.css';
import ExpenseComponent from "./ExpenseComponent";

const ExpenseList = props => {
    const expenseArray = props.expenseArray;

    if (expenseArray.length === 0) {
        return <h2 className="expenses-list__fallback"> No Records were found </h2>;
    }

    return <ul className="expenses-list"> 
        {expenseArray.map(exp => {
            return <ExpenseComponent key={exp.id} expense={exp}/>
        })}
    </ul>
};

export default ExpenseList;