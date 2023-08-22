import logo from './logo.svg';
import './App.css';

const JSX = (props)=>{
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`
  console.log(props)
  return (<picture>
      <img src={src} alt='lego1'/>
     {props.name}
  </picture>)
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <JSX id={2} name={"facu"}/>
          <JSX id={3} name={"pepe"}/>
          <JSX id={4} name={"juan"}/>
      </header>
    </div>
  );
}

export default App;
