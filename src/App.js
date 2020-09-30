import React from 'react';
import './App.css';
import Exercise from './components/Exercise';

import exerciseData from './data/exercises'

function App() {
    return (
        <div className="App">
            <Exercise  exerciseData={exerciseData}/>
        </div>
    );
}

export default App;
