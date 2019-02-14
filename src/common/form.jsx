import React, { Component } from 'react';
import Joi from 'joi';
import Input from './input';

export class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate = e => {
        const errors = {},
            options = {
                abortEarly: false
            },
            { error } = Joi.validate(this.state.data, this.schema, options);
        
        if (!error) return null;

        for (let item of error.details) errors[item.path[0]] = item.message;

        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors });

        if(errors) return;

        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        
        const data = {...this.state.data};
        data[input.name] = input.value;

        this.setState({
            data,
            errors
        })
    }

    renderButton = label => <button disabled={this.validate()} className="btn btn-primary">{ label }</button>

    renderInput = (name, label, type = 'text') => {
        const { data, errors } = this.state;

        return (
            <Input
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]}
            type={type} />
            )
        }
}

export default Form
