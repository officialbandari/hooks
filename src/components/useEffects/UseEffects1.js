import React, { useState, useEffect } from 'react';

const UseEffects1 = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Chat(${count}) 🌈 `

        console.log("checked it ")
    })


    return (
        <div>
            <h1>hello use effects</h1>
            <div>{count} 🌈 </div>
            <button
                className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >double</button>
        </div>
    );
};

export default UseEffects1;