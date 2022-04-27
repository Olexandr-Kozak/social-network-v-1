import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Dasha'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how is u '},
        {id: 3, message: 'cool'}
      ],
      newMessageBody: ''
    },
    sideBar: {
      friends: [
        {id: 1, names: 'Sasha', age: 18},
        {id: 2, names: 'Dasha', age: 20},
        {id: 3, names: 'Masha', age: 15},
        {id: 4, names: 'Dima', age: 30},
        {id: 5, names: 'Misha', age: 35}
      ]
    }
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //патерн observer(addEventListener // publisher subscriber
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sideBar = sidebarReducer(this._state.sideBar, action)

    this._callSubscriber(this._state);
  }
};


export default store;
window.store = store;