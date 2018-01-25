import './expense-item.scss';
import React from 'react';
import Draggable from '../drag-n-drop/drag.js';
import UpdateExpense from './expenseUpdate.js';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);

    this.handleDragStart = this.handleDrag.bind(this);

  }



  handleDrag(e){
    let expense = this.props.expenses[this.props.categoryID].filter(item => {
      return item.id === e.target.id;})[0];
    e.dataTransfer.setData('text/json', JSON.stringify(expense));
  }



  render(){
    return(
      <div className='expense-item'>
        {this.props.expenses[this.props.categoryID].map((expense,i) =>
          <div key={expense.id} id={expense.id}>
          <UpdateExpense expenseUpdate={this.props.expenseUpdate} expense={expense}/>
          <Draggable onDragStart={this.handleDrag} expense={expense} draggable="true">
            <p> {(expense.name)} </p>
            <p> {expense.cost} </p>
            <button onClick={() => this.props.expenseDelete(expense)}> x </button>
          </Draggable>
          </div>
        )}
      </div>
    );
  }
};

export default ExpenseItem;
