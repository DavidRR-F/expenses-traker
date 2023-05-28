import './ExpenseForm.css';
import React, { useState } from 'react';


const ExpenseForm = (props) => {
    const defaultState = {title: '', amount: '', date: ''}
    const [userInput, setUserInput] = useState(defaultState)

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, title: event.target.value};
        });
    };
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, amount: event.target.value};
        });
    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, date: event.target.value};
        });
    };
    const submitHandler = (event) => {
        // stop page reloading on form submit
        event.preventDefault();
        props.onSaveExpenseData({...userInput, date: new Date(userInput.date)});
        setUserInput(defaultState);
    };

    return ( 
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={userInput.title}
                        required
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        steps='0.01' 
                        value={userInput.amount}
                        required
                        onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2024-12-31' 
                        value={userInput.date}
                        required
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new_expense__actions'>
                <button type='submit'>App Expense</button>
            </div>
        </form> 
    );
}
 
export default ExpenseForm;