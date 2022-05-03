const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

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
  newPostText: 'Oleksandr'
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 8,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_CHANGE: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }

}
export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_CHANGE,
    newText: text
  }
};

export default profileReducer;