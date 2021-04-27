import React, { useState } from 'react'

const TodoApp = () => {

    const myObj = [
        {
            id: 0,
            name: "krishna",
            address: "ashoknagar"
        },
        {
            id: 1,
            name: "ponna",
            address: "ongole"
        },
        {
            id: 2,
            name: "bandari",
            address: "kakatiyanagar"
        },
        {
            id: 3,
            name: "kanna",
            address: "bangolure"
        }
    ]

    const [data, setData] = useState(myObj)



    const removIt = (id) => {

        alert(id)

        const newData = data.filter(val => {
            return val.id !== id
        })
        setData(newData)
    }

    return (
        <div>
            {data.map(val => {
                return (
                    <div key={val.id}>
                        <h1>{val.id} {val.name} {val.address} </h1>
                        <button className="btn-danger" onClick={() => removIt(val.id)}>remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoApp
