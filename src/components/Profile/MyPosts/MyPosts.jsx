import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsConstrols";

const maxLength10 = maxLengthCreator(10)

const AddMyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"newPostText"} component={Textarea} type={"text"}
               validate={[required, maxLength10 ]}
               placeholder={"Input new Post"}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddMyPostFormRedux = reduxForm({form: "profileAddMyPostForm"})(AddMyPostForm)

const MyPosts = (props) => {

  let postElement = props.posts.map((p) => <Post message={p.message} likesPost={p.likesCount}/>);

  let addNewMessage = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>MyPost</h3>
      <AddMyPostFormRedux onSubmit={addNewMessage}/>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;
