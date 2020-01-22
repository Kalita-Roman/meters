import React from 'react';
import './App.scss';

import Grid from '../Grid';

export default () => (<div className="app" >
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <a href="http://localhost:8080/google/login">login</a>
    <a href="http://localhost:8080/google/logout">logout</a>
    <button onClick={() => getData()}>getData</button>
    <Grid name="A" items={[{name: 'a'}, {name: 'b'}, {name: 'c'}]}/>
    <Grid name="B" items={[{name: 'e'}, {name: 'f'}]}/>
    <Grid name="C" items={[{name: 'g'}]}/>
</div>);

function getData() {
    console.log('getData');
    fetch('http://localhost:8080/session', {
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
