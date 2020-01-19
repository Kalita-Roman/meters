import React from 'react';
import './Tile.scss';

export default ({ name }) => (<div className="tile">
    <div className="tile-header">{name}</div>
    <div className="tile-body"></div>
    <div className="tile-footer"></div>
</div>);