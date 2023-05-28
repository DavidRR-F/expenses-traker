import { useState } from "react";
import Card from "../Shared/Card";
import ExpensesFilter from "../newExpense/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear)
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
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