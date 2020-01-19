import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

renderApp();

if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderApp();
    });
}

function renderApp() {
    const App = require('./components/App').default;
    render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('react-app'),
    );
}
