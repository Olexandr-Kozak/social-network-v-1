const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-CHANGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 4,
        message: state.newMessageBody
      };
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageBody = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state};
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => (
  {type: UPDATE_NEW_MESSAGE_BODY, body: body}
);

export default dialogsReducer;