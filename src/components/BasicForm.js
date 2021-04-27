import React, { useState } from 'react';

const BasicForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setNewEntry] = useState([])


    const submitForm = (e) => {
        e.preventDefault()

        const newEntry = { email: email, password: password };
        setNewEntry([newEntry, ...allEntry]);
        console.log(allEntry);


    }


    return (
        <>

            <form action="" className="" onSubmit={submitForm}>
                <div>
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
                        return (
                            <div key={val.email}>{val.email}{val.password}</div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default BasicForm;