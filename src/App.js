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
import HomeScreen from "../src/tuiter/HomeScreen/index"                         // Challenge - HomeScreen
import Tuiter from "./tuiter";
import EditProfileList from "./tuiter/ProfileScreen/EditProfileList";
import ProfileList from "./tuiter/ProfileScreen";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/">
                    {/* <Route path="hello" element={<HelloWorld/>}/> */}
                    <Route index element={<HelloWorld/>}/>
                    <Route path="hello" exact={true} element={<HelloWorld/>}/>

                    <Route path="labs" element={<Labs/>}/>
                    <Route path="tuiter" element={<Tuiter/>}>
                        <Route index element={<HomeScreen/>}/>
                        {/*<Route path="home" element={<HomeScreen/>}/>*/}
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