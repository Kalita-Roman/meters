import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Grid from './Grid';

test('Grid.jsx', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Grid items={[{}]}/>);
    expect(result).toMatchSnapshot();
});