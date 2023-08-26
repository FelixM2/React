import { useState } from 'react'
import Button from '../Button/Button'
const CountFunction = (props)=>{

    console.log(props.children)
    //const state = useState(0)

   //const count = state[0]

   //const setCount = state[1]

   const [count, setCount]= useState(0)



    const decrement = ()=>{
           setCount(count-1)
    }
    const increment = ()=>{
       setCount(count+1)
    }

    return(  
            <div>
                { props.children }
                <Button handleClick={decrement} label='-' color='red'></Button>
                {count}
                <Button handleClick={increment} label='+' color='green'></Button>
                
            </div>
            
    )
  
    

}

export default CountFunction