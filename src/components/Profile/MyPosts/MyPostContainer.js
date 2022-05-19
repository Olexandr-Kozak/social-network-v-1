import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    updateNewPostText: (text) =>{
      dispatch(updateNewPostTextAC(text));
    },
    addPost: () =>{
      dispatch(addPostActionCreator());
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
