import React, { useEffect, useState } from 'react'

const dateBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderTop: 'none',
    borderLeft: 'none',
}

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    height: '20%',
    backgroundColor: 'orange',
    userSelect: 'none',
}

const buttonStyle = {
    border: 'none',
    background: 'none',
    fontSize: '18px',
    color: 'white',
}

const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '48px',
    minHeight: '124px',
    userSelect: 'none',
    color: 'orangered',
}

export default function DateBox({ id, value }) {
    const [ marked, setMarked ] = useState(false)
    useEffect(() => {
        const data = localStorage.getItem(id)
        if (data)
            setMarked(JSON.parse(data))
    }, [ id ])
    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(marked))
    }, [ id, marked ])
    return (
        <div className='datebox' style={ dateBoxStyle }>
            <div className='datebox-header' style={ headerStyle }>
                {
                    (value > 0) ?
                        (<button style={ buttonStyle }>{ value }</button>) :
                        null
                }
            </div>
            <div className='datebox-body' style={ bodyStyle }
                 onClick={ () => (value > 0) ? setMarked(!marked) : null }
            >
                { marked ? 'X' : '' }
            </div>
        </div>
    )
}