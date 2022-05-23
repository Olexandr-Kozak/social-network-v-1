const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
  newPostText: 'Oleksandr',
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 8,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      }
    case UPDATE_NEW_POST_CHANGE:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }

}
export const addPostActionCreator = () => ({
  type: ADD_POST
});
export const updateNewPostTextAC = (text) => {
  return {
    type: UPDATE_NEW_POST_CHANGE,
    newText: text
  }
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,  profile})


export default profileReducer;