import React from 'react'

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={ rest.type } id={name} name={name} className="form-control" value={ rest.value } onChange={ rest.onChange } />
        {error && <div className="alert alert-danger" role="alert">{ error }</div>}
    </div>
  )
}

export default Input
