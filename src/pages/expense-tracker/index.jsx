import { useAddTransaction } from '../../hooks/useAddTransaction.js'

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();

  const onSubmit = (event) => {
    event.preventDefault()
    addTransaction({description: "Haircut", transactionAmount: 10, transactionType: "expense"});
  };

  return (
    <>
      <div className="expense-tracker">
        <div className="container">
            <h1> Expense Tracker</h1>
            <div className="balance">
                <h3>Your Balance</h3>
                <h2>£0.00</h2>
            </div>
            <div className="summary">
                <div className="income"></div>
                <h3>Income</h3>
                <h2>£0.00</h2>
                <div className="expenses"></div>
                <h3>Expenses</h3>
                <h2>£0.00</h2>
            </div>
            <form className="add-transaction" onSubmit={onSubmit}>
                <input type="text" placeholder="Description" required />
                <input type="number" placeholder="Amount" required />
                <input type="radio" id="expense" value="expense" />
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" value="income" />
                <label htmlFor="income">Income</label>

                <button type="submit">Add Transaction</button>
            </form>
        </div>
      </div>
      <div>
          <div className="transactions"></div>
          <h3>Transactions</h3>
      </div>
    </>
  );
};
