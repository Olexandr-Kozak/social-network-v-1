import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsConstrols";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import s from "../common/FormsControls/FormControls.module.css"

// const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="">
        <Field placeholder={"Login"} name={"email"}
               validate={[required]}
               component={Input}/>
      </div>
      <div className="">
        <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
      </div>
      <div className="">
        <Field type="checkbox" name={"rememberMe"} component={Input}/>remember me
      </div>
      {props.error && <div className={s.formSummaryError}> {props.error} </div>}
      <div className="">
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

 let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)