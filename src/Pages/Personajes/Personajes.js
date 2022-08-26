import React from "react";
// import "./Personajes";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import "../Planetas/planets.css";
import { Link } from "react-router-dom";


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
        keyName,
        num,
        nombres
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
                <ListGroup.Item ><b>Color de Cabello: </b> {cabello}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Color de ojos: </b> {ojos}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Color de piel: </b> {piel}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Genero: </b> {genero}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Altura: </b> {altura}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Peso: </b> {peso}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Cumpleaños: </b> {cumpleaños}</ListGroup.Item>
            </ListGroup>
            </Card.Body>
            <Link to={`/detailsperson/${nombre}/${num}`} key={keyName}>
<Button className="BtnCard"><p style={{marginBottom:"5px"}}>Detalles de</p>{nombre} </Button>
        </Link>
        </Card>
        
    );
    };
export default Tarjeta;