import React from "react";
import {Button, Form} from "react-bootstrap";
import './styles/passenegerForm.scss';

const PassengerForm = (props: any) => {
  return (
    <Form>
      <Form.Group className="passenger-form mb-3">
        <Form.Label className="label">Name</Form.Label>
        <Form.Control type="text" placeholder="Firstname" onChange={props.handleOnChangeName} value={props.name}/>
        <Form.Label className="label">Lastname</Form.Label>
        <Form.Control type="text" placeholder="Lastname" onChange={props.handleOnChangeLastname} value={props.lastname}/>
        <Button className="submit-btn" onClick={props.handleOnClick}>Submit</Button>
      </Form.Group>
    </Form>
  );
}

export default PassengerForm;