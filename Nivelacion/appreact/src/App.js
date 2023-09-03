/*import logo from './logo.svg';*/
import React, { useState,useEffect } from 'react'
import './App.css';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountClass from './components/CountClass/CountClass';
import Picture from './components/Picture/picture';
import Button from './components/Button/Button';
import ItemCount from './components/itemCount/itemCount';
/*import CountClass from './components/CountClass/CountClass';*/

function App() {
  
        const [show, setShow] = useState(true)

  return (

    
   
    <div className="App">
   
       
            <NavBar/>
          <Button handleClick={()=>setShow(!show)} >Mostrar o ocultar</Button>
         {show ? <ItemCount/> : null}
          {/*<button onClick={ () => setShow(!show)}>Mostrar no mostrar</button>*/}
         
             {/* show ? <CountFunction/> : null */}
            { /* <ItemListContainer greeting='holanda'/>*/}
             { /* <CountClass/>*/}
            {/* <Picture title="Hola como estas "/>*/}
 
    </div>
  );
}


export default App;
