// only one root element aloud
import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Shared/Card';

const ExpenseItem = (props) => {
    // state management in react
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Update');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Update</button>
        </Card>
    );
}

export default ExpenseItem