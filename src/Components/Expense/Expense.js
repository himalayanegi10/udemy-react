import ExpenseComponent from './ExpenseComponent';
import './Expense.css';
import Card from '../UI/Card';
import React, {useState}  from 'react';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';


function Expense (props) {
    // return React.createElement(Card, {className: 'expenses'},
    //         React.createElement(ExpenseComponent, {expense: expenseArray[0]}),
    //         React.createElement(ExpenseComponent, {expense: expenseArray[1]}),
    //         React.createElement(ExpenseComponent, {expense: expenseArray[2]}),
    //         React.createElement(ExpenseComponent, {expense: expenseArray[3]}),
    //     );
    // Below is a Syntactic Sugar for above code in React
    // We'll use below code throughout this course
    const [filterYear, setFilterYear] = useState(2019);

    const expenseArray = props.expenses.filter(expense => {
        return expense.date.getFullYear() === filterYear;
    });
    
    const onSelectMethod = (year) => {
        setFilterYear(parseInt(year));
    };

    return (
        <li>
            <Card className='expenses'>
                <ExpensesFilter onSelectYear={onSelectMethod} selectedYear={filterYear}/>
                <ExpenseChart expenses={expenseArray} />
                <ExpenseList expenseArray={expenseArray} />
            </Card>
        </li>
        // key={exp.id} is a unique id which NEEDS TO BE ADDED to ExpenseComponent
    );
}

export default Expense;