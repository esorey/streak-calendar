import React from 'react';
import { Days } from '../lib/time'

const DateGrid = ({ children }) => {
    const days = Days.map(x => (<div className='dategrid_col'>{ x }</div>))
    return (
        <div className='dategrid'>
            <div className='dategrid_cols'>
                { days }
            </div>
            <div className='dategrid_container'>
                { children }
            </div>
        </div>
    );
}

export default DateGrid;
