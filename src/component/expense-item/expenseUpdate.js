import React from 'react';

class UpdateExpense extends React.Component {
  constructor(props){
    super(props);

    this.onChangeOfName = this.onChangeOfName.bind(this);
    this.onChangeOfCost = this.onChangeOfCost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ...props.expense
    }
  }

  onChangeOfName(event){
    event.preventDefault();

    this.setState({name: event.target.value});
  }

  onChangeOfCost(event){
    event.preventDefault();
    this.setState({cost: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    this.props.expenseUpdate(Object.assign({}, this.state));
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          Edit your expense name
          <input value={this.state.name} onChange={this.onChangeOfName}/>
          <br />
          <input value={this.state.cost} onChange={this.onChangeOfCost}/>
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default UpdateExpense;
