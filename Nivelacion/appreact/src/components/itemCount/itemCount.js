import { useState, useEffect } from "react"
import Button from "../Button/Button"
import "./itemCount.css"

const ItemCount = ()=>{







    const [count2, setCount2] = useState(0)

    useEffect(()=>{
            console.log('me ejecuto despues del montaje ')

            return ()=>{
                console.log('me ejecuto despues del desmontaje')
            }
    },[])   // al usar el array vacio despues de la coma indica a que se va ejecutar solo 1 vez despues del montaje 


    useEffect(()=>{
        console.log('me ejecuto cuando se actualice el estado')
},[count2])   


    const increment = ()=>{

        setCount2((prev)=>prev+1)
        console.log(count2)

    }
    const decrement = ()=>{

        setCount2((prev)=>prev-1)
        console.log(count2)

    }


    console.log('me ejcuto antes del montaje')

    return (
            <div className="botones">
               <img className="img5" src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" alt="img"></img>
                <Button className="botonmenos" handleClick={decrement}>-</Button>
               {count2}
                <Button className="botonmas" handleClick={increment}>+</Button>

            </div>

    
    )





}


export default ItemCount