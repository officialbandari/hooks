import React from 'react';
import ClassComp from './components/ClassComp';
import HookComp from './components/HookComp';

const App = () => {
    return (
        <div className="mainApp">
            <h1>Hello world</h1>
            <ClassComp/>
            <HookComp/>
          
        </div>
    );
};

export default App;