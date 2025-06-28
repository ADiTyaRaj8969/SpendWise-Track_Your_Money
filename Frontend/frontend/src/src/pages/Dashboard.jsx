import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard({ token }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setExpenses(res.data));
  }, [token]);

  return (
    <div>
      <h1>Your Expenses</h1>
      <ul>
        {expenses.map((exp) => (
          <li key={exp._id}>
            ${exp.amount} - {exp.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
