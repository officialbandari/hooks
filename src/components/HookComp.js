import React from 'react';

const HookComp = () => {
  // const [ counter, setCounter] = React.useState(0)
//    const [state, setState]= React.useState({
//       count :0,
//       isON :false
//   })

const [count, setCount] = React.useState(0)
const [isON, setIsON] = React.useState(false)

  const handleChange = () =>{
    //   const {count, isON} = state
    //   setState({
    //       count : count +1 ,
    //       isON : !isON
    
    //   })

    //USING MUTLIPLE STATES

    setCount(count+1);
    setIsON(!isON);





  }

//DESTRUCTURING THE STATE 
//const {count, isON} = state;

    return (
        
        <div>
            {/* <h3>{state.isON ? "ON" : "OFF"}</h3> */}
            {/* <h4>{state.count}</h4> */}


             <h3>{isON ? "ON" : "OFF"}</h3>
             <h4>{count}</h4>
            
           <button onClick={handleChange}>click me</button>
            
        </div>
    );
};

export default HookComp;