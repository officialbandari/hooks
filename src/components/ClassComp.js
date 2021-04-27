import React, { Component } from 'react'

 class ClassComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              counter:0,
              isON:false
         }
     }

     handleChange = () =>{
         const {counter, isON } = this.state
        //  this.setState((previusState) => ({
        //      counter:previusState.counter +1,
        //      isON:!this.previusState
        //  }))

        this.setState({
            counter : counter +1,
            isON : !isON

        })
     }
     
    render() {

        const {isON, counter } = this.state
        return (
            <div className="col-md-6">
                <h3>{isON ? "ON": "OFF"}</h3>
                <h4>{counter}</h4>
                <button onClick={this.handleChange}>click me</button>
                
            </div>
        )
    }
}


export default ClassComp
