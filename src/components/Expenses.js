import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
const Expenses = ({expenses}) => {
    return (
        <div className="expenses">
            {expenses.map((expense, index) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))};
        </div>
    )
}

export default Expenses;