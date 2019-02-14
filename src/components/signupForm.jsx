import React from 'react';
import Form from '../common/form';
import Joi from 'joi';

export class signupForm extends Form {
    state = {
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors: {
            username: '',
            password: '',
            name: ''
        }
    }

    schema = {
        username: Joi.string().min(3).max(30).email().required().label('Username'),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).label('Password'),
        name: Joi.string().required().label('Name')
    }

    doSubmit = () => {
        console.log('signup form was submitted');
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderInput('name', 'Name')}
                {this.renderButton('Yes, create my account')}
            </form>
        </div>
        )
    }
}

export default signupForm
