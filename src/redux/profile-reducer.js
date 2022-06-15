import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hello World!', likesCount: 12},
    {id: 2, message: 'How are you 1', likesCount: 20},
    {id: 3, message: 'How are you 2', likesCount: 21},
    {id: 4, message: 'How are you 3', likesCount: 22},
    {id: 5, message: 'How are you 4', likesCount: 23},
    {id: 6, message: 'How are you 5', likesCount: 24},
    {id: 7, message: 'How are you 6', likesCount: 25}
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 8,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }

}
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}
export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setUserStatus(data));
    });
  }
}
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  }
}

export default profileReducer;