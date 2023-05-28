
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (userExpenseData) => {
        const expenseData = {
            ...userExpenseData,
            id: Math.random().toString() // tmp no backend
        };
        props.onAddExpense(expenseData)
    };

    return (
        <div className='new-expense'>
            {/* two way binding */}
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;