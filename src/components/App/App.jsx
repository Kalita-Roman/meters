import React from 'react';
import './App.scss';

import Grid from '../Grid';

export default () => (<div className="app" >
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <Grid name="A" items={[{name: 'a'}, {name: 'b'}, {name: 'c'}]}/>
    <Grid name="B" items={[{name: 'e'}, {name: 'f'}]}/>
    <Grid name="C" items={[{name: 'g'}]}/>
</div>);
