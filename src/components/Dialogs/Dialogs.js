import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newMessageBody"} type={"text"} placeholder="Enter your message"/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageBody'})(AddMessageForm)

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
  let messageElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        <div className="">{messageElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

export default Dialogs;