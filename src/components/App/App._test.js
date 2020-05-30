import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

test('App.jsx', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<App />);
    expect(result).toMatchSnapshot()
});