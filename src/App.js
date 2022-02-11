import { useState } from "react";
import "./App.css";

 

function App() {
  const [login, setLogin] = useState();


  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1> Hello! {login} </h1>
        {'\n'}
        <button className="button1" onClick={() => setLogin('Welcome Back')}>
          LOGIN
        </button>
        &nbsp;
        <button className="button2" onClick={() => setLogin('Please Login')}>
          LOG OUT
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;
