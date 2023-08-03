import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const name = 'Richards'

// Write your code here

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    transactionsList: [],
    title: '',
    amount: '',
    transactionType: 'INCOME',
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      transactionType: event.target.value,
    })
  }

  addTransaction = event => {
    event.preventDefault()
    const {transactionsList, title, amount, transactionType} = this.state
    if (amount !== '' && title !== '') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        transactionType,
      }
      if (transactionType === 'INCOME') {
        this.setState(prevState => ({
          balance: parseInt(prevState.balance) + parseInt(amount),
          income: parseInt(prevState.income) + parseInt(amount),
        }))
      } else {
        this.setState(prevState => ({
          balance: parseInt(prevState.balance) - parseInt(amount),
          expenses: parseInt(prevState.expenses) + parseInt(amount),
        }))
      }

      this.setState({
        transactionsList: [...transactionsList, newTransaction],
        amount: '',
        title: '',
      })
    }
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const newTransList = transactionsList.filter(
      eachTrans => eachTrans.id !== id,
    )

    this.setState({
      transactionsList: newTransList,
    })
  }

  render() {
    const {transactionsList, amount, title} = this.state

    return (
      <div className="main-container">
        <div className="top-container">
          <h1 className="name">Hi, {name}</h1>
          <p className="greeting">
            Welcome back to your <span className="special">Money Manager</span>
          </p>
        </div>
        <br />
        <div className="money-details card">
          <MoneyDetails details={this.state} />
        </div>
        <div className="bottom-container">
          <form className="card">
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              value={title}
              onChange={this.onChangeTitle}
              className="inputs"
              id="title"
              type="text"
            />

            <label htmlFor="amount">AMOUNT</label>
            <input
              value={amount}
              onChange={this.onChangeAmount}
              className="inputs"
              id="amount"
              type="number"
            />

            <label htmlFor="TYPE">TYPE</label>
            <select id="TYPE" onChange={this.onChangeType} className="inputs">
              {transactionTypeOptions.map(eachType => (
                <option value={eachType.optionId}>
                  {eachType.displayText}
                </option>
              ))}
            </select>
            <button
              onClick={this.addTransaction}
              className="add-button"
              type="submit"
            >
              Add
            </button>
          </form>
          <div className="history-item card ">
            <h1>History</h1>
            <div className="history-headings">
              <p className="head">Title</p>
              <p className="head">Amount</p>
              <p className="head">Type</p>
            </div>
            <ul className="transaction-list">
              {transactionsList.map(eachTrans => (
                <TransactionItem
                  key={eachTrans.id}
                  deleteTransaction={this.deleteTransaction}
                  details={eachTrans}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
