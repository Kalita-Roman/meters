import React from 'react';

export default () => (
    <div className="variables">
        <p>{`API_SERVER: ${process.env.API_SERVER}`}</p>
        <p>{`NODE_ENV: ${process.env.NODE_ENV}`}</p>
    </div>
);