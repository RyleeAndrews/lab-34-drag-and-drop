import React from 'react';
import renderer from 'react-test-renderer';
import Droppable from '../../component/drag-n-drop/drag.js';
import DropZone from '../../component/drag-n-drop/drop.js';

test('drop zone', () => {
  let drop = (state) => {
    expect(DropZone.state().droppable).toBe(false);
  }
})

test('draggable', () => {
  let drag = (state) => {
    expect(Draggable.state().dragging).toBe(false);
  }
})
