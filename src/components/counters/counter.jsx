import React from "react";
import Badge from '../../utils/setBadge';

const Counter = ({ counter, onIncrement, onDecrement, onRemove }) => {
  return (
    <div>
      <Badge value={counter.value} />
      <button onClick={onIncrement} className="btn btn-secondary btn-sm m-1"><i className="fa fa-arrow-up"></i></button>
      <button onClick={onDecrement} className="btn btn-secondary btn-sm m-1"><i className="fa fa-arrow-down"></i></button>
      <button onClick={onRemove} className="btn btn-danger btn-sm m-1"><i className="fa fa-trash"></i></button>
    </div>
  )
}

export default Counter;
