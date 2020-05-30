import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { saveReading } from '../../actions/periods';
import InputNumber from '../InputNumber';
import './MeterInput.scss';

export default ({ className, meter }) => {
    const [ value, setValue ] = useState(meter.currentValue);
    const dispatch = useDispatch();

    const handleSave = useCallback(
        () => {
            dispatch(saveReading({ id: meter.currentReadingId,value }));
        },
        [value]
    );

    return <div className={cn(className, 'meter-input')} >
        <div className={'meter-input__type'}>{meter.name}</div>
        <div className={'meter-input__previous'}>{meter.previousValue}</div>
        <InputNumber
            onChange={setValue}
            className={'meter-input__current'}
            value={meter.currentValue}
        />
        <button
            className={'meter-input__button button'}
            onClick={handleSave}
        >
            Сохр.
        </button>
    </div>;
};
