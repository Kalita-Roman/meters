import React from 'react';
import './Grid.scss';
import Meter from '../Meter';

export default () => {
    const items = [{
        name: '1'
    }, {
        name: '2'
    }];
    return (
        <div className="grid">
            <div className="grid-body">
                {items.map((item, index) => (<Meter key={index} name={item.name} />))}
            </div>
        </div>
    )
};