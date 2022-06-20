import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsConstrols";
import {maxLengthCreator, required} from "../../utils/validators/validators";


// const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="">
        <Field placeholder={"Login"} name={"login"}
               validate={[required]}
               component={Input}   />
      </div>
      <div className="">
        <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
      </div>
      <div className="">
        <Field type="checkbox" name={"rememberMe"} component={Input} />remember me
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