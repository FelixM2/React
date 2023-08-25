import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

const JSX = (props)=>{
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`
  console.log(props)
  return (<picture>
      <img src={src} alt='lego1'/>
     {props.name}
  </picture>)
  }

/* Agregando pprototipos a js
Number.prototype.multiplicar = function (x){
      return this*x
}

const myNum = 5 
const myNum2 =10
const result = myNum.multiplicar (5)
const result2 = myNum2.multiplicar (20)

console.log(result)
console.log(result2)
*/





function App() {
  return (

   
    <div className="App">
    
      <NavBar/>
      
    </div>
  );
}
const mystring = 'hola'

console.log(mystring.toUpperCase)





export default App;
