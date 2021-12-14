const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

const profileReducer = (state, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: 8,
      message: state.newPostText,
      likesCount: 0
    };
    state.posts.push(newPost);
    state.newPostText = '';
  } else if (action.type === UPDATE_NEW_POST_CHANGE) {
    state.newPostText = action.newText;
  }
  return state;
}

export default profileReducer;