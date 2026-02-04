import { useState } from "react";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("food");

  const submitHandler = (e) => {
    e.preventDefault(); // 🔴 stop page reload

    if (!amount || !desc) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      amount: Number(amount),
      description: desc,
      category: category,
    };

    setExpenses([...expenses, newExpense]);

    // clear inputs
    setAmount("");
    setDesc("");
    setCategory("food");
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            Amount
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Description
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Expense List */}
      <h3>Expenses</h3>
      {expenses.map((exp) => (
        <div key={exp.id}>
          ₹{exp.amount} — {exp.description} ({exp.category})
        </div>
      ))}
    </div>
  );
};

export default Expense;
