import React from 'react';
import { getNextYearMonthState, getPrevYearMonthState } from '../lib/time'


const Navbar = ({ month, year, state, updateState }) => {
    return (
        <div className='navbar'>
            <div>
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
