import React, { useState } from "react";
import './todos.css';

const Todo = ({ todo, removeTodo, completeTodo }) => (
    <div className="todo" style={{ textDecoration: todo.completed ? "line-through" : "", color: todo.completed ? "green" : "" }} >
        {todo.text}
        <div>
            <button onClick={completeTodo} style={{ color: todo.completed ? "green" : "" }}><i className="fa fa-check"></i></button>
            <button onClick={removeTodo}><i className="fa fa-trash"></i></button>
        </div>
    </div>
);

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" placeholder="Todo..." value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}

const Todos = () => {
    const [todos, setTodos] = useState([
        { text: "Learn about React", completed: false },
        { text: "Learn Graphql", completed: false }
      ]);

      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      }

      const removeTodo = index => {
          const newTodos = [...todos];
          newTodos.splice(index, 1);
          setTodos(newTodos);
      }

      const completeTodo = index => {
          const newTodos = [...todos];
          newTodos[index].completed = newTodos[index].completed ? false : true;
          setTodos(newTodos);
      }

  return (
    <div className="app">
      <p>Todo app, just for testing <b>useState</b> hook</p>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} /> <br />
        {todos.map((todo, index) => (<Todo key={index} index={index} todo={todo} removeTodo={() => removeTodo(index)} completeTodo={() => completeTodo(index)} />))}
      </div>
    </div>
  );
};

export default Todos;
