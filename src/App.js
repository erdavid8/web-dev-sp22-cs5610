import logo from './logo.svg';
import './App.css';
import './vendors/boostrap/css/bootstrap.min.css'
import './vendors/boostrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css'
import HelloWorld from "./components/HelloWorld";               // imports HelloWorld
import Labs from "./components/Labs/index";
import Tuiter from "./components/Tuiter/index";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

    <BrowserRouter>
        <div className="container">
                <Route path="/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/labs" exact={true}>
                    <Labs/>
                </Route>
                <Route path={["/","/tuiter"]} exact={true}>
                    <Tuiter/>
                </Route>
        </div>
    </BrowserRouter>

/*
        <div className="container">
            <HelloWorld/>
            <HelloWorld/>
            <Index/>
        </div>
*/
  );
}

export default App;
