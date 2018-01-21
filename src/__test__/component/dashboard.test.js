import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../../component/dashboard/index.js';
import App from '../../component/app/index.js';


test('should contain app with the className app', () => {

const component = renderer.create(<App><Dashboard /></App>)
expect(component.toJSON().props).toEqual({'className':'app'});

});
