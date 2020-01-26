import React from 'react';

export default () => (
    <div className="variables">
        <p>{`API_SERVER: ${process.env.API_SERVER}`}</p>
    </div>
);