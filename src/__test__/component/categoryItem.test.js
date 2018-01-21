import React from 'react';
import renderer from 'react-test-renderer';
import CategoryItem from '../../component/category-item/index.js';

test('category item', () => {
  let name = 'pizza';
  let budget = 8;
  let catItem = (state) => {
    expect(CategoryItem.state().name).toBe(name);
    expect(CategoryItem.state().budget).toBe(budget);
  }

});
