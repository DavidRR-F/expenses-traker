import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
const Expenses = ({expenses}) => {
    return (
        <Card className="expenses">
            {expenses.map((expense, index) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </Card>
    )
}

export default Expenses;