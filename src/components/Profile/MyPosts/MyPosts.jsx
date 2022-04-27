import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postElement = props.posts.map((p) => <Post message={p.message} likesPost={p.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();

  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;
