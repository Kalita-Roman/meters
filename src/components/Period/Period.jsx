import React, { useEffect } from 'react';
import MeterInput from '../MeterInput';
import './Period.scss';

export default ({ loadData = () => {}, period }) => {
    useEffect(() => {
        loadData();
    }, []);

    if(!period || !period.meters) {
        return null;
    }

    return <div className="period">
        <p className="period__name">{'период: 2020-04'}</p>
        { period.meters.map((meter) => 
            <MeterInput key={meter.type} meter={meter} className={'period__item'} />
        ) }
    </div>;
};