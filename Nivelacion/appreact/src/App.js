/*import logo from './logo.svg';*/
import './App.css';
import CountFunction from './components/CountFunction/CountFunction';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

/*import CountClass from './components/CountClass/CountClass';*/

function App() {
  return (

   
    <div className="App">
    
      <NavBar/>
      <CountFunction/>
      <ItemListContainer greeting='holanda'/>
 
    </div>
  );
}


export default App;
