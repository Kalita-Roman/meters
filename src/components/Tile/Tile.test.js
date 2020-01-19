import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Tile from './Tile';

test('Tile.jsx', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Tile/>);
    expect(result).toMatchSnapshot();
});