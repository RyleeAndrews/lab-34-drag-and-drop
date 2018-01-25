import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import * as category from '../../action/category.js';
import * as expense from '../../action/expense.js';

class Dashboard extends React.Component{

  componentDidUpdate(){
    console.log('__CATEGORIES__', this.props.categories);
    console.log('__EXPENSES__', this.props.expenses);
  };

  componentWillMount(){
  }


  render(){
    console.log('shzfhga');
    return(
      <div className='dashboard'>
        <h1> budget manager </h1>
        <CategoryForm id='main-form' onComplete={this.props.categoryCreate}/>
        <div className='category-wrapper'>
          {this.props.categories.map((category,i) =>
            <div key={category.id}>
              <CategoryItem
                category={category}
                categoryRemove={this.props.categoryRemove}
                categoryUpdate={this.props.categoryUpdate}
                categoryID={category.id}
                expenseCreate={this.props.expenseCreate}
                expenseDelete={this.props.expenseDelete}
                expenseUpdate={this.props.expenseUpdate}
                expenses={this.props.expenses}
              />
              <ExpenseForm
                onComplete={this.props.expenseCreate}
                categoryID={category.id}
                expenses={this.props.expenses}
                expenseDelete={this.props.expenseDelete}
                expenseUpdate={this.props.expenseUpdate}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    categories: state.categories || [],
    expenses: state.expenses || {},
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (data) => dispatch(category.create(data)),
    categoryUpdate: (data) => dispatch(category.update(data)),
    categoryRemove: (data) => dispatch(category.destroy(data)),
    expenseCreate: (data) => dispatch(expense.create(data)),
    expenseUpdate: (data) => dispatch(expense.update(data)),
    expenseDelete: (data) => dispatch(expense.destroy(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
