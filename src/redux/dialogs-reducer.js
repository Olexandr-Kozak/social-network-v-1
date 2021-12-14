const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-CHANGE';


const dialogsReducer = (state, action) => {
  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: 4,
      message: state.newMessageText
    };
    state.messages.push(newMessage);
    state.newMessageText = '';

  } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageText = action.body;

  }
  return state;
}

export default dialogsReducer;