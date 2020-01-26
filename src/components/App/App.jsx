import React from 'react';
import './App.scss';

import Login from '../Login';
import Variables from '../Variables';

export default () => (<div className="app" >
    <Login />
    <button onClick={() => getData()}>getData</button>
    <Variables />
</div>);

async function getData() {
    const response = await fetch(process.env.API_SERVER+'session', { credentials: 'include' });
    const session = await response.json();
    console.log(session);
}