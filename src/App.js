import React from 'react';
import BasicForm from './components/BasicForm';
//import ShortCircut from './components/ShortCircut';
// import ClassComp from './components/ClassComp';
// import HookComp from './components/HookComp';
// import TodoApp from './components/TodoApp';

const App = () => {
    return (
        <div className="mainApp ">
            <h1>Hello world</h1>
            {/* <ClassComp/>
            <HookComp/>
            <TodoApp/> */}
            {/* <ShortCircut /> */}
            <BasicForm />

        </div>
    );
};

export default App;