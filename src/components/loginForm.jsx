import React from 'react';
import Joi from 'joi';
import Form from '../common/form';

export class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {
      username: '',
      password: ''
    }
  }

  schema = {
      username: Joi.string().min(3).max(30).email().required().label('Username'),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).label('Password')
  }

  doSubmit = () => {
    console.log('was ssubmitted');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            {this.renderInput('username', 'Username')}
            {this.renderInput('password', 'Password', 'password')}
            {this.renderButton('Login')}
        </form>
      </div>
    )
  }
}

export default LoginForm
