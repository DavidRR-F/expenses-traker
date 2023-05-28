import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.expenses.length === 0) {
        return <h2 className="expenses__not-found">No Expenses Found</h2>
    }
    return (
        <ul className="expenses-list">
            {props.expenses.map((expense, index) => (
                <ExpenseItem
                    key={expense.id} // always add key when mapping out lists of items
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </ul>
    );
}
 
export default ExpensesList;