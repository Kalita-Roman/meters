import React, { useState, createRef, useCallback } from 'react';
import classnames from 'classnames';
import './InputNumber.scss';

export default ({
    className,
    value='',
    onChange,
}) => {
    const [inputValue, setValue] = useState(value);
    const ref = createRef(); 
    const handleChange = useCallback(
        () => {
            const { value } = ref.current;
            setValue(value);
            onChange(value);
        },
        [ref, setValue, onChange],
    );
    return <input 
        onChange={handleChange}
        ref={ref}
        className={classnames('input-text', className)}
        type="number"
        value={inputValue}
    />;
};