import React from 'react';
import './App.scss';

import Grid from '../Grid';

export default () => (<div className="app" >
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <a href={API_SERVER+'google/login'}>login</a>
    <a href={API_SERVER+'google/logout'}>logout</a>
    <button onClick={() => getData()}>getData</button>
    <Grid name="A" items={[{name: 'a'}, {name: 'b'}, {name: 'c'}]}/>
    <Grid name="B" items={[{name: 'e'}, {name: 'f'}]}/>
    <Grid name="C" items={[{name: 'g'}]}/>
    <div>{'2: ' + JSON.stringify(API_SERVER)}</div>
</div>);

function getData() {
    console.log('getData');
    fetch(API_SERVER+'session', {
        headers: new Headers({
            // 'cookie': document.cookie,
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        }),
        // credentials: 'same-origin',
        // mode: 'no-cors',
        credentials: 'include',
    })
        .then(x => { console.log(x); return x; })
        .then(x => x.json())
        .then(data => console.log(data));
}
