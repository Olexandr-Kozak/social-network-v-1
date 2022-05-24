import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (

    <div className='app-wrapper'>
      <HeaderContainer/>
      <NavBarContainer/>
      <div className="app-wrapper-content">
        <Route path='/dialogs'
               render={() => <DialogsContainer/>}/>
        <Route path='/profile/:userId?'
               render={() => <ProfileContainer/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>

    </div>

  );
}

export default App;
