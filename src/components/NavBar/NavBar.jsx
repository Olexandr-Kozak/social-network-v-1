import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = (props) => {

  let friendsElement = props.sideBar.friends.map(
    (fr) => <li key={fr.id}><a href="/"><img src="https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png"
                                 alt={fr.id}/><p>{fr.names}</p></a></li>
  );

  return (
    <div>
      <nav className={s.nav}>
        <ul className='items'>
          <li className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
          <li className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink></li>
          <li className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
          <li className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></li>
          <li className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
          <li className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
          </li>
        </ul>
      </nav>
      <div className="friend">
        <h1>Friends</h1>
        <ul className={s.friendItems}>
          {friendsElement}
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
