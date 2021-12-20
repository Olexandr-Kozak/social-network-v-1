const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 8,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_CHANGE:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

}
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
  {type: UPDATE_NEW_POST_CHANGE, newText: text}
);

export default profileReducer;