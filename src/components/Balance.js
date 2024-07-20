import React from "react";

export default function Balance({ transactions }) {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const total = amount.reduce((acc, item) => acc + item, 0);
  return (
    <div>
          <h1 className='h'>Money Tracker App</h1>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
}
