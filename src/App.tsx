import React, {useState} from 'react';
import './App.scss';
import {useDispatch, useSelector} from 'react-redux';
import {todoAdded} from "./redux/todosSlice";
import {Button, Form} from "react-bootstrap";

function App() {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const [inputField, setInputField] = useState({text: ''});

  const handleOnChangeInput = (e: any) => {
    setInputField({text: e.target.value})
  }

  const handleOnClick = () => {
    if(inputField.text) {
      dispatch(todoAdded({text: inputField.text}));
      setInputField({text: ''});
    }
  }

  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>To do Item</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your todo Item"
            onChange={handleOnChangeInput}
            value={inputField.text}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleOnClick}
        > Submit</Button>
      </Form>
      <ul>
      {todos.map((todo: any, index: number) => <li key={index}>{todo.text}</li>)}
      </ul>
    </div>
  );
}

export default App;
