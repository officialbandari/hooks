import React from 'react';
import UseEffect3 from './components/useEffects/UseEffect3';



//import UseEffectIfcondition from './components/useEffects/UseEffectIfCondition'
//import Task1 from './components/HooksBasics/Task1'
//import UseEffects1 from './components/useEffects/UseEffects1'
//import BasicForm from './components/BasicForm';
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
            {/* <BasicForm /> */}
            {/* <UseEffects1 /> */}
            {/* <Task1 /> */}

            {/* <UseEffectIfcondition /> */}
            <UseEffect3 />

        </div>
    );
};

export default App;