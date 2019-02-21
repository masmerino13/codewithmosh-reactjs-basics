import React from 'react'

const Select = ({ name, label, error, ...rest }) => {

  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} className="form-control" onChange={rest.onChange} value={rest.value}>
            <option value="">Select option</option>
            {
                rest.options && rest.options.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)
            }
        </select>
        {error && <div className="alert alert-danger" role="alert">{ error }</div>}
    </div>
  )
}

export default Select
