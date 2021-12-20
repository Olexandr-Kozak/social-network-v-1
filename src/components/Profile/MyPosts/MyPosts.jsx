import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

  let postElement = props.posts.map((p) => <Post message={p.message} likesPost={p.likesCount}/>);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>MyPost</h3>
      <div className={s.newPost}>
        <div>
                    <textarea cols="40" rows="5"
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;
