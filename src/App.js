import React from 'react';
import './App.css';
import Exercise from './components/Exercise';

import exerciseData from './data/exercises'
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Typography />
            
            <Exercise  exerciseData={exerciseData}/>
        </div>
    );
}

export default App;
