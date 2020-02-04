import React from 'react';
import ReactJson from 'react-json-view';

export default ({ record }) => {
    return <div className="record">
        <p>{`id: ${record.id}`}</p>
        <p>{`period: ${record.period}`}</p>
        <ReactJson src={record} collapsed displayDataTypes={false}/>
    </div>;
};