import React from 'react';
import { Days } from '../lib/utils'

const dategridColsStyle = {
    userSelect: 'none',
}

const DateGrid = ({ children }) => {
    const days = Days.map((x, idx) => (<div className='dategrid_col' key={ idx }>{ x }</div>))
    return (
        <div className='dategrid'>
            <div className='dategrid_cols' style={ dategridColsStyle }>
                { days }
            </div>
            <div className='dategrid_container'>
                { children }
            </div>
        </div>
    );
}

export default DateGrid;
