import React from "react";
import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs.js";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage}),
   withAuthRedirect
)(Dialogs);