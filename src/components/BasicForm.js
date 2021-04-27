import React, { useState } from 'react';

const BasicForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setNewEntry] = useState([])


    const submitForm = (e) => {
        e.preventDefault()

        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email, password };
            setNewEntry([...allEntry, newEntry]);
            console.log(allEntry);

            //input empty 
            setEmail("");
            setPassword("");
        } else {
            alert("Please enter a valid email and password")
        }


    }


    return (
        <>

            <form action="" className="" onSubmit={submitForm}>
                <div className="" >
                    <label htmlFor="email"> Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password"> Password</label>
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>

                <button>login</button>




            </form>

            <div>
                {
                    allEntry.map(val => {
                        const { id, email, password } = val;
                        return (
                            <div key={id}>{email}{password}</div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default BasicForm;