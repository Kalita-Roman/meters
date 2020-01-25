import React from 'react';
import './App.scss';

import Grid from '../Grid';
import Variables from '../Variables';

export default () => (<div className="app" >
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <a href={process.env.API_SERVER+'google/login'}>login</a>
    <a href={process.env.API_SERVER+'google/logout'}>logout</a>
    <button onClick={() => getData()}>getData</button>
    <Grid name="A" items={[{name: 'a'}, {name: 'b'}, {name: 'c'}]}/>
    <Grid name="B" items={[{name: 'e'}, {name: 'f'}]}/>
    <Grid name="C" items={[{name: 'g'}]}/>
    <Variables />
</div>);

function getData() {
    console.log('getData');
    fetch(process.env.API_SERVER+'session', {
        credentials: 'include',
    })
        .then(x => { console.log(x); return x; })
        .then(x => x.json())
        .then(data => console.log(data));
}
