import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  // console.log()
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="">
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div className="">
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div className="">
        <Field type="checkbox" name={"rememberMe"} component={"input"} />remember me
      </div>
      <div className="">
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {

  const onSubmit = (formData) =>{
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
export default Login