import './category-item.scss';
import React from 'react';
import CategoryForm from '../category-form';
import DropZone from '../drag-n-drop/drop.js';
class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.handleCalculateBudget = this.handleCalculateBudget.bind(this);


  }

  onComplete(expense){
    this.props.expenseCreate(expense);
    console.log(expense);
    console.log(this.props.category);
  }
  handleCalculateBudget(catID,budget){
    const filterr = this.props.expenses[this.props.categoryID].filter(item => item.categoryID = catID);
    if(filterr.length){
      budget-= filterr.reduce( (a,c) => {
        a+= c.cost;
        return a;
      },0)
    }
    return budget;
  }
  render(){
    return(

      <div className='category-item'>
      <DropZone onComplete={this.onComplete} expenseUpdate={this.props.expenseUpdate} expenseDelete={this.props.expenseDelete} expenses={this.props.expenses} categoryID={this.props.categoryID}>
        <h2> {this.props.category.name} </h2>
        <h2> {this.handleCalculateBudget(this.props.categoryID,this.props.category.budget)}</h2>
        <button
          onClick={() => this.props.categoryRemove(this.props.category)}
          className='delete-button'
        > x </button>
        <CategoryForm category={this.props.category} onComplete={this.props.categoryUpdate}/>
            </DropZone>
      </div>
    );
  }
}

export default CategoryItem;
