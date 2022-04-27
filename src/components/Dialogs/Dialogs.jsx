import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
  let messageElements = state.messages.map(m => <Message message={m.message}/>);

  let newMessageBody = state.newMessageBody;
  //let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (

    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>

        <div className="">{messageElements}</div>

        <div className="new-message">

          <div>
            <textarea
            onChange={onNewMessageChange}
            value={newMessageBody} placeholder="Enter your message"
            cols="60" rows="5"/>
          </div>

          <div>
            <button onClick={onSendMessageClick}>Send</button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Dialogs;