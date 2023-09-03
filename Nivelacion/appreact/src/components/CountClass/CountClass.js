import { Component } from "react";
import Button from "../Button/Button";

class CountClass extends Component {
    constructor(props){
        super(props)
        this.state = {count:0}
     
    }

    decrement = ()=>{
        this.setState(
            {
                count:this.state.count -1
            }
        )

    }

    increment = ()=>{
        this.setState(
            {
                count:this.state.count +1
            }
        )

    }

render(){
    
     
    return(
            <div>
                 {this.props.children}
             <Button handleClick={this.decrement} label='-' color='red'>
                -
            </Button>
               <h1>{this.state.count}</h1>
            <Button handleClick={this.increment} label='+' color='green'>
               +
            </Button>
            </div>
           
                    )
}
   

}

export default CountClass

