import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageText;
    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {

        props.store.dispatch(sendMessageCreator());
        // let action = {type: "ADD-MESSAGE"};
        // props.dispatch(action);
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

        // let messageText = newMessageElement.current.value;
        // let action = {type: 'UPDATE-NEW-MESSAGE-CHANGE', newText: messageText};
        // props.dispatch(action);
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className="">{messageElements}</div>
                <div className="new-message">
                    <div><textarea
                          onChange={onNewMessageChange}
                          value={newMessageBody} placeholder="Enter new message"
                          cols="60" rows="5"/>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>

                </div>
            </div>
        </div>

    )
}

export default Dialogs;