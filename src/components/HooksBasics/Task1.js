// import React, { useState } from 'react';

// const Task1 = () => {

//     const myObj = [
//         { id: 1, name: 'KRISHNA', job: 'SOFTWARE ENGINEER', salary: '$100' },
//         { id: 2, name: 'BANDARI', job: 'UI ENGINEER', salary: '$130' },
//         { id: 3, name: 'KRISS', job: 'SOFTWARE', salary: '$200' }
//     ]
//     const [data, setData] = useState(myObj)

//     const removeIt = (id) => {
//         const newData = data.filter(value => value.id !== id)
//         setData(newData)
//     }


//     return (
//         <div>


//             <h1>Task1</h1>
//             {data.map(task => {
//                 const { id, name, job, salary } = task;
//                 return (
//                     <div key={id}>
//                         <div> {name}{job}{salary}</div>
//                         <button onClick={() => removeIt(id)}>remove</button>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };

// export default Task1;