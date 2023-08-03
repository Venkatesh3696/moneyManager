// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {balance, income, expenses} = details
  return (
    <div className="details-container">
      <div className="inner-flex b-1">
        <img
          className="images"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">{balance} </p>
        </div>
      </div>
      <div className="inner-flex b-2">
        <img
          className="images"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">{income} </p>
        </div>
      </div>
      <div className="inner-flex b-3">
        <img
          className="images"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">{expenses} </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
