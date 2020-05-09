import React, { useState, useCallback } from 'react';
import InputNumber from '../InputNumber';
import './MeterInput.scss';


export default ({ meter }) => {
    const [ value, setValue ] = useState(null);

    const handleSave = useCallback(
        () => {
            // onSaveData({
            //     type: meter.type,
            //     value: value,
            // });
        },
        [value]
    );

    return <div className={'meter-input'} >
        <div className={'meter-input__type'}>{meter.name}</div>
        <div className={'meter-input__previous'}>{meter.previousValue}</div>
        <InputNumber
            onChange={setValue}
            className={'meter-input__current'}
            value={meter.currentValue}
        />
        <button
            className={'meter-input__button'}
            onClick={handleSave}
        >
            Сохранить
        </button>
    </div>;
};
