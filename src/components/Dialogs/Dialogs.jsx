import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let action = {type: "ADD-MESSAGE"};
        props.dispatch(action);
    };
    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-CHANGE', newText: messageText};
        props.dispatch(action);
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className="new-message">
                    <textarea
                        onChange={onMessageChange}
                        value={props.state.newMessageText}
                        ref={newMessageElement} cols="60" rows="5"/>

                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;