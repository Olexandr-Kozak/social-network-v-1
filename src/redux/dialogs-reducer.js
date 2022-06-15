const SEND_MESSAGE = 'ADD-MESSAGE';

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 4, message: body}]
      };
    default:
      return state;
  }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;