import { useState } from "react";
import "./App.css";

 

function App() {
  const [login, setLogin] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1> Hello! {login} </h1>
        {'\n'}
        {!login
        ?
        <button className="button1" onClick={() => setLogin(true)}>
          LOGIN
        </button>
        :
        <button className="button2" onClick={() => setLogin(false)}>
          LOG OUT
        </button>
        }
        </div>
      </header>
    </div>
  );
}

export default App;
