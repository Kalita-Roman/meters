import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import ReduxProvider from './components/ReduxProvider';

render(
    <ReduxProvider>
        <Root />
    </ReduxProvider>,
    document.getElementById('react-app'),
);
