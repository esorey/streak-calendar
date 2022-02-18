import './App.scss';
import Navbar from './components/Navbar';
import DateGrid from './components/DateGrid';
import DateBox from './components/DateBox'
import { useState } from 'react'
import { getInitialState } from './lib/utils'

function App() {
    const [ state, updateState ] = useState(getInitialState())
    const boxes = state.dateArray.map(x => (
        <DateBox value={ (x >= 0) ? (x + 1) : x }/>))

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
