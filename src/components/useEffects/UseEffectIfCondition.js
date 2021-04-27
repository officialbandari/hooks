import React, { useState, useEffect } from 'react';

const UseEffectIfcondition = () => {


    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count >= 1) {
            document.title = `Chat(${count})` 
        } else {

            document.title = `Chat`

        }

    })



    return (
        <div>
            <h1>UseEffectIfcondition</h1>
            <div>{count}</div>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>add</button>
        </div>
    );
};

export default UseEffectIfcondition;