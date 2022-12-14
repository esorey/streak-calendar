import './App.scss';
import Navbar from './components/Navbar';
import DateGrid from './components/DateGrid';
import DateBox from './components/DateBox'
import { useState } from 'react'
import { getInitialState } from './lib/utils'

function App() {
    const [ state, updateState ] = useState(getInitialState())
    const boxes = state.dateArray.map((date, i) => (
        <DateBox
            key={ state.month + state.year + i }
            id={ state.month + state.year + i }
            value={ (date >= 0) ? (date + 1) : date }
        />))

    return (
        <div className='app'>
            <Navbar month={ state.month } year={ state.year } state={ state } updateState={ updateState }/>
            <DateGrid>
                { boxes }
            </DateGrid>
        </div>
    );
}

export default App;
