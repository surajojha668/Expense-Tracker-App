import React, { useState } from "react";

export default function AddTransactions({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), // Generating a unique ID
      text: text,
      amount: +amount, // Ensure amount is a number
      date: date,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Expense Cause</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter Text..."
            type="text"
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Amount..."
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Enter Date..."
            type="date"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}
