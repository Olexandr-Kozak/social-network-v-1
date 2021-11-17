const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-CHANGE';

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
            newMessageText: ''
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 8,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_CHANGE) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else  if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.profilePage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator =()=> ({type: ADD_POST});

export const updateNewPostTextActionCreator =(text)=>(
  {type: UPDATE_NEW_POST_CHANGE, newText: text}
);

export const sendMessageCreator =()=> ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator =(body)=>(
  {type: UPDATE_NEW_MESSAGE_BODY, body: body}
);


export default store;
window.store = store;

/*
addPost() {
    let newPost = {
        id: 8,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
},
updateNewPostChange(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
},
addMessage() {
    let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.profilePage.newMessageText = '';
    this._callSubscriber(this._state);
},
updateNewMessageChange(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
},*/
