import React from 'react';

export default () => (
    <div className="variables">
        <p>Variables</p>
        <p>{`API_SERVER: ${process.env.API_SERVER}`}</p>
        <p>{`TEST: ${process.env.TEST}`}</p>
    </div>
);