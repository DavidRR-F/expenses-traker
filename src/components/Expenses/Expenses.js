import { useState } from "react";
import Card from "../Shared/Card";
import ExpensesFilter from "../newExpense/ExpensesFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());
    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear)
    };
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;