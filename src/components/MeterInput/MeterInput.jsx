import React from 'react';

export default ({meter}) => {
    return <>
        <div className={'meter-input'} >
            <div className={'meter-input__type'}>{meter.type}</div>
            <div className={'meter-input__prev'}>{meter.previous.value || 0}</div>
            <div className={'meter-input__curr'}>{meter.current.value || 0}</div>
        </div>
    </>;
};