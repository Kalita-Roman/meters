import React from 'react';
import './Grid.scss';
import Tile from '../Tile';

export default ({name, items}) => (
    <div className="grid">
        <p className="grid-header">{name}</p>
        <div className="grid-body">
            {items.map((item, index) => (<Tile key={index} name={item.name} />))}
        </div>
    </div>
);