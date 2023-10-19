import ExpenseComponent from './ExpenseComponent';
import './Expense.css';
import Card from './Card';
import React  from 'react';

function Expense (props) {
    const expenseArray = props.expenses;
    return React.createElement(Card, {className: 'expenses'},
            React.createElement(ExpenseComponent, {expense: expenseArray[0]}),
            React.createElement(ExpenseComponent, {expense: expenseArray[1]}),
            React.createElement(ExpenseComponent, {expense: expenseArray[2]}),
            React.createElement(ExpenseComponent, {expense: expenseArray[3]}),
        );
    // Below is a Syntactic Sugar for above code in React
    // We'll use below code throughout this course
    // return (
    //     <Card className='expenses'>
    //         <ExpenseComponent expense={expenseArray[0]}/>
    //         <ExpenseComponent expense={expenseArray[1]}/>
    //         <ExpenseComponent expense={expenseArray[2]}/>
    //         <ExpenseComponent expense={expenseArray[3]}/>
    //     </Card>
    // );
}

export default Expense;