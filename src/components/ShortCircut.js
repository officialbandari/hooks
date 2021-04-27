import React, { useState } from 'react'

const ShortCircut = () => {


    const [demo, setDemo] = useState("check ")
    return (
        <div>
            <h1>Am ShortCircut</h1>
            {demo || <> <h1>welcome krishna</h1>
                <h1>short operators</h1>
            </>}


            <h1>{demo && "krishna"}</h1>

        </div>
    )
}

export default ShortCircut
