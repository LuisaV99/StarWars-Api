import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./card.css";

const CardApp = (props) =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={props.image} variant="top" />
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.btn}</Button>
      </Card.Body>
    </Card>
  );
};

export default CardApp;