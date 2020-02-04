import React, { useEffect } from 'react';
import MeterInput from '../MeterInput';

export default ({ loadData, meters }) => {
    useEffect(() => {
        loadData && loadData();
    }, []);

    console.log('meters', meters);
    return <div className="period">
        <button onClick={() => loadData && loadData()}>Reload</button>
        { meters.map((meter) => 
            <MeterInput key={meter.type} meter={meter} />
        ) }
    </div>;
};