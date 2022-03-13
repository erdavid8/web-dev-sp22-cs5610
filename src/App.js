import './App.css';
import './vendors/boostrap/css/bootstrap.min.css'
import './vendors/boostrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.css'
import './css/index.css'
import './css/style.css'
import HelloWorld from "./components/HelloWorld"                                // imports HelloWorld
import Labs from "./components/Labs/index"                                      // HW6 Lab
import {BrowserRouter, Route} from "react-router-dom"
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen"     // Tuiter - ExploreScreen
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen"              // Challenge - HomeScreen

function App() {
  return (

    <BrowserRouter>
        <div className="container">
            <Route path={["/","/hello"]} exact={true}><HelloWorld/></Route>
            <Route path="/labs" exact={true}><Labs/></Route>
            <Route path={"/tuiter/home"} component={HomeScreen}></Route>
            <Route path={"/tuiter/explore"} component={ExploreScreen}></Route>
        </div>
    </BrowserRouter>

  );
}

export default App;

/*
import logo from './logo.svg';

    <div className="App">
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