import React from 'react';
import renderer from 'react-test-renderer';
import CategoryForm from '../../component/category-form/index.js'

test('category form', () => {
  let name = "pizza";
  let budget = 7;

  let createBudget = (state) => {
    expect(CategoryForm.state().name).toBe(name);
    expect(CatgoryForm.state().budget).toBe(budget);
  }
})
