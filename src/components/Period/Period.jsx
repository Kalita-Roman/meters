import React, { useEffect } from 'react';
import MeterInput from '../MeterInput';

export default ({ loadData, saveDataOfMeters, meters }) => {
    useEffect(() => {
        loadData && loadData();
    }, []);

    return <div className="period">
        <button onClick={() => loadData && loadData()}>Reload</button>
        { meters.map((meter) => 
            <MeterInput onSaveData={saveDataOfMeters} key={meter.type} meter={meter} />
        ) }
    </div>;
};