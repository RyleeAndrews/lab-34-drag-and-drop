import React from 'react';
import renderer from 'react-test-renderer';
import ExpenseItem from '../../component/expense-item/index.js';

test('expense item', () => {
  let name = 'eggs';
  let cost = 2;
  let item = (state) => {
    expect(ExpenseItem.state().name).toBe(eggs);
    expect(ExpenseItem.state().cost).toBe(cost);
  }
})
