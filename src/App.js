import './App.css';
import './vendors/boostrap/css/bootstrap.min.css'
import './vendors/boostrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.css'
import './css/index.css'
import './css/style.css'
import HelloWorld from "../src/components/HelloWorld"                           // imports HelloWorld
import Labs from "../src/components/Labs/index"                                 // HW7 Lab
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ExploreScreen from "../src/tuiter/ExploreScreen/ExploreScreen"           // Tuiter - ExploreScreen
import HomeScreen from "../src/tuiter/HomeScreen/index"
// Challenge - HomeScreen
import ProfileScreen from "../src/tuiter/ProfileScreen/ProfileScreen"
import Tuiter from "./tuiter";
import EditProfileList from "./tuiter/ProfileScreen/EditProfileList";
import ProfileList from "./tuiter/ProfileScreen";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/">
                    <Route path="labs" element={<Labs/>}/>
                    <Route path="hello" element={<HelloWorld/>}/>
                    <Route path="tuiter" element={<Tuiter/>}>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="explore" element={<ExploreScreen/>}/>
                        <Route path="profile" element={<ProfileList/>}/>
                        <Route path="profile/editprofile" element={<EditProfileList/>}/>
                    </Route>
                </Route>
            </Routes>
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

//
<Route path="/labs" exact={true}><Labs/></Route>
<Route path={["/","/hello"]} exact={true}><HelloWorld/></Route>
<Route path={"/tuiter/home"} component={HomeScreen}></Route>
<Route path={"/tuiter/explore"} component={ExploreScreen}></Route>


                <Route path="/tuiter/home" element={<HomeScreen/>}/>
                <Route path={"/tuiter/explore"} element={<ExploreScreen/>}/>

                <Route path="/" element={<HelloWorld/>}/>
                <Route path="/labs" element={<Labs/>}/>
                <Route path="tuiter" element={<Tuiter/>}>
                </Route>
*/