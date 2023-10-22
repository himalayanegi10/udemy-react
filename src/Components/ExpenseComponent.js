import ExpenseDate from './ExpenseDate';
import './ExpenseComponent.css';
import Card from './Card';
import React, {useState} from 'react';

function ExpenseComponent(props){
// function ExpenseComponent({date, amount, title}){
    // above signature can also be used ... it is called javascript object destructuring

    // const expenseDate = Date(2023, 10, 15);
    // const expenseDescription = 'Car Insurance';
    // const expenseAmount = 'Rs. 199/-';
    // const month = props.expense.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.expense.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.expense.date.getFullYear();
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        setTitle(title + '+');
        console.log("Hello There");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
            <button onClick={clickHandler}> Click Here </button>
        </Card>
    );
}

export default ExpenseComponent;