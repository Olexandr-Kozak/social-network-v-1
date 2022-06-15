import React from "react";
import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = compose(connect(mapStateToProps, {addPost}))(MyPosts);

export default MyPostsContainer;
