import './App.css';
import React from "react";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized){
      return <Preloader/>
    }
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
          <Route path='/login' render={() => <Login/>}/>
        </div>

      </div>

    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))
(App);
