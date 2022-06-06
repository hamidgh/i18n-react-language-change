import React, {useState} from 'react';
import './App.scss';
import {Button, Form} from "react-bootstrap";

function App() {
  const [inputField, setInputField] = useState({text: ''});

  const handleOnChangeInput = (e: any) => {
    setInputField({text: e.target.value})
    console.log(inputField.text);
  }

  const handleOnClick = () => {
    if(inputField.text) {
      console.log(inputField.text);
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
    </div>
  );
}

export default App;
