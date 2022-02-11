import { useState } from "react";
import "./App.css";

 

function App() {
  const [login, setLogin] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1> Hello Nice Person</h1>
        <h2 style={{color: "white"}}>{login ? "Welcome Back" : "Please Login"} {login} </h2>
       
        {login
        ? 
        <button className="button2" onClick={() => setLogin(false)}>
          LOGOUT
        </button>
        :
        <button className="button1" onClick={() => setLogin(true)}>
          LOGIN
        </button>
        }
        </div>
      </header>
    </div>
  );
}

export default App;