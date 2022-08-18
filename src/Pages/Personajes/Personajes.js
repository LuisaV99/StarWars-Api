import React from "react";
import "./Personajes";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import "../Planetas/planets.css";


export const Tarjeta = ({
        nombre,
        cabello,
        ojos,
        piel,
        genero,
        altura,
        peso,
        cumpleaños,
        BbYoda,
}) => {
    return(
        <Card style={{width: "18rem", borderRadius:"12px", background: "black"}}
        className="m-2 text-center" >
            <Card.Body className="card-body" style={{borderRadius:"12px"}}>
                <Card.Title className="card.title">
                    {nombre}
                </Card.Title>
                <Card.Img src={BbYoda} style={{marginBottom:"5px"}}></Card.Img>
                <ListGroup>
                <ListGroup.Item className="lista"><b>Color de Cabello: </b> {cabello}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Color de ojos: </b> {ojos}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Color de piel: </b> {piel}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Genero: </b> {genero}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Altura: </b> {altura}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Peso: </b> {peso}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Cumpleaños: </b> {cumpleaños}</ListGroup.Item>
            </ListGroup>
            </Card.Body>
            <Button className="BtnCard"><p style={{marginBottom:"auto"}}>Detalles del personaje </p> {nombre}</Button>
        </Card>
        
    );
    };
export default Tarjeta;