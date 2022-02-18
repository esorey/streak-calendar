import React from 'react';
import { getNextYearMonthState, getPrevYearMonthState } from '../lib/utils'

const titleStyle = {
    textAlign: 'center',
    width: '100%',
    color: 'white',
    position: 'absolute',
}

const buttonDivStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: '20%',
    float: 'right',
    marginTop: '18px',
}

const buttonStyle = {
    background: 'none',
    userSelect: 'none',
    border: 'none',
    marginRight: '12px',
    color: 'white',
    fontSize: '36px',
}


const Navbar = ({ month, year, state, updateState }) => {
    return (
        <div className='navbar'>
            <div style={ titleStyle }>
                <h1>{ `${ month } ${ year }` }</h1>
            </div>
            <div style={ buttonDivStyle }>
                <div>
                    <button style={ buttonStyle } onClick={ () => updateState(getPrevYearMonthState(state)) }>
                        &lt;
                    </button>
                    <button style={ buttonStyle } onClick={ () => updateState(getNextYearMonthState(state)) }>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
