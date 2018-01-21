import React from 'react';
import renderer from 'react-test-renderer';
import ExpenseForm from '../../component/expense-form/index.js';


test('expense form', () => {

  let name = 'eggs';
  let cost = 2;
  let expense = (state) => {
    expect(ExpenseForm.state().name).toBe(name);
    expect(ExpenseForm.state().cost).toBe(cost);
  }
})
