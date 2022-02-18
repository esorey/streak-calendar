import React from 'react';
import { getNextYearMonthState, getPrevYearMonthState } from '../lib/utils'

const titleStyle = {
    textAlign: 'center',
    width: '100%',
    color: 'white',
}


const Navbar = ({ month, year, state, updateState }) => {
    return (
        <div className='navbar'>
            <div style={ titleStyle }>
                <h1>{ `${ month } ${ year }` }</h1>
            </div>
            <div>
                <button onClick={ () => updateState(getPrevYearMonthState(state)) }></button>
                <button onClick={ () => updateState(getNextYearMonthState(state)) }></button>
            </div>
        </div>
    );
}

export default Navbar;
