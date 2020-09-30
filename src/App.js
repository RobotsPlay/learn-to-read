import React from 'react';
import './App.css';
import Exercise from './components/Exercise';

import exerciseData from './data/exercises'
import Typography from './styles/Typography';

function App() {
    return (
        <div className="App">
            <Typography />
            
            <Exercise  exerciseData={exerciseData}/>
        </div>
    );
}

export default App;
