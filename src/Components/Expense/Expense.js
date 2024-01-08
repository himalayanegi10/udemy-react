import ExpenseComponent from './ExpenseComponent';
import './Expense.css';
import Card from '../UI/Card';
import React, {useState}  from 'react';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function Expense (props) {
    const expenseArray = props.expenses;
    // return React.createElement(Card, {className: 'expenses'},
    //         React.createElement(ExpenseComponent, {expense: expenseArray[0]}),
    //         React.createElement(ExpenseComponent, {expense: expenseArray[1]}),
    //         React.createElement(ExpenseComponent, {expense: expenseArray[2]}),
    //         React.createElement(ExpenseComponent, {expense: expenseArray[3]}),
    //     );
    // Below is a Syntactic Sugar for above code in React
    // We'll use below code throughout this course
    const [filterYear, setFilterYear] = useState('2019');
    const onSelectMethod = (year) => {
        setFilterYear(parseInt(year));
        console.log("Inside Expense Component and filter year = " + year);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter onSelectYear={onSelectMethod} selectedYear={filterYear}/>
            {expenseArray.map(exp => {
                return <ExpenseComponent key={exp.id} expense={exp}/>
            })}
        </Card>
        // key={exp.id} is a unique id which NEEDS TO BE ADDED to ExpenseComponent
    );
}

export default Expense;