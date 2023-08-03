// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {id, title, amount, transactionType} = details

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction">
      <p className="tail">{title}</p>
      <p className="tail">Rs {amount} </p>
      <p className="tail">{transactionType} </p>
      <button
        data-testid="delete"
        onClick={onDelete}
        type="button"
        className="delete-button tail"
      >
        <img
          className="delete-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}
export default TransactionItem
