import React, { useEffect } from 'react';
import './AllData.scss';

import Record from '../Record';

export default ({ loadData, data }) => {
    useEffect(() => {
        loadData && loadData();
    }, []);

    return <div className="all-data">
        {
            data.map((item) => <Record key={item.id} record={item} />)
        }
    </div>;
};