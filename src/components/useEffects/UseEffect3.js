import React, { useState, useEffect } from 'react';

const UseEffect3 = () => {

    const [withCount, setWidthCount] = useState(window.screen.width);
    const [heightCount, setHeightCount] = useState(window.screen.height);

    const actulWidth = () => {

        console.log('Actul', window.innerWidth)
        setWidthCount(window.innerWidth)
    }
    const actulheight = () => {
        setHeightCount(window.innerHeight)
    }

    useEffect(() => {
        console.log('addEventListener')

        window.addEventListener('resize', actulWidth)
        window.addEventListener('resize', actulheight)

        return () => {
            console.log('removeEventListener')
            window.removeEventListener('resize', actulWidth)
            window.removeEventListener('resize', actulheight)
        }
    })


    return (
        <div>
            <div><h1>The actul size of the window is: </h1></div>
            <h1>{withCount}</h1>
            <h1>{heightCount}</h1>
        </div>
    );
};

export default UseEffect3;