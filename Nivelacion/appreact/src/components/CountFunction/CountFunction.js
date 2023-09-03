import { useState, useEffect } from 'react'
import Button from '../Button/Button'
const CountFunction = (props)=>{


    //const state = useState(0)

   //const count = state[0]

   //const setCount = state[1]

   const [count, setCount]= useState(0)

useEffect(()=>

    {
             console.log('me ejecuto despues del montaje')

             return () => {
                console.log('me ejecuto cuando el componente sea desmontado')
            }

    },[])     
    
 useEffect(()=>{
    console.log('cambio de estado')
 },[{count}])   

/// [] = indica que esta se va a ejecutar solo una vez.. al renderizar no se ejecuta nuevamente

    const decrement = ()=>{
        for(let i = 0; i<5 ; i++)
        {
            console.log(`valor previo ${i}`)
            setCount((prev)=>prev-1)  // esta es una de las fomras para poder implementar un for, if, en la funcion set
        }
           
    }
    const increment = ()=>{
       setCount(count+1)
    }

   console.log('ejecuto render ')

    return(  
            <div>
                { props.children }
                <Button handleClick={decrement} label='-' color='red'>
                    -
                </Button>
                     {count} 
                <Button handleClick={increment} label='+' color='green'>
                   +
                </Button>
         
            </div>
            
    )

    

}

export default CountFunction