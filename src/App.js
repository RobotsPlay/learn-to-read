import React from 'react';
import './App.css';

import Panelset from './components/Panelset/Panelset';

function App() {
    return (
        <div className="App">
            <Panelset>
                <Panelset direction="vertical">
                    <div>Inner Panel 1</div>
                    <div>Inner Panel 2</div>
                    <div>Inner Panel 3</div>
                </Panelset>
                
                <div>Test Pane 2</div>
            </Panelset>
        </div>
    );
}

export default App;
