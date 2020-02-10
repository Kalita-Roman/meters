import React, { useState, useCallback } from 'react';
import InputNumber from '../InputNumber';
import './MeterInput.scss';


export default ({ meter, onSaveData }) => {
    const [ value, setValue ] = useState(null);

    const handleSave = useCallback(
        () => {
            onSaveData({
                type: meter.type,
                value: value,
            });
        },
        [value]
    );

    return <div className={'meter-input'} >
        <div className={'meter-input__type'}>{meter.type}</div>
        <div className={'meter-input__prev'}>{meter.previous.value || 0}</div>
        <InputNumber
            onChange={setValue}
            className={'meter-input__curr'}
            value={meter.current.value || ''}
        />
        <button
            className={'meter-input__button'}
            onClick={handleSave}
        >
            Сохранить
        </button>
    </div>;
};
