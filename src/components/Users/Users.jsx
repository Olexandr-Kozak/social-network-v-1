import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../Assets/images/logo-photo.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && styles.selectedPage}
                       onClick={() => {
                         props.onPageChanged(p);
                       }}>{p}</span>
        })}
      </div>

      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {

                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "4ea50a17-6bf5-4b05-91d4-0b54f238ce63"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                  });

              }}>Unfollow</button>

              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "4ea50a17-6bf5-4b05-91d4-0b54f238ce63"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                  });


              }}>Follow</button>
            }
              </div>
              </span>
        <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
        </span>
      </div>)}
    </div>

  )
}

export default Users;