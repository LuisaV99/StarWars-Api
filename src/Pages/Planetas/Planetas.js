import React from "react";
// import "./Personajes";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import "../Planetas/planets.css";
import { Link } from "react-router-dom";


export const TarjetaPlanet = ({
        planeta,
        clima,
        terreno,
        creacion,
        HanSolo,
        keyName,
        num,
        nombres
}) => {
    return(
        <Card style={{width: "18rem", borderRadius:"12px", background: "black"}}
        className="m-2 text-center" >
            <Card.Body className="card-body" style={{borderRadius:"12px"}}>
                <Card.Title className="card.title">
                    {planeta}
                </Card.Title>
                <Card.Img src={HanSolo} style={{marginBottom:"5px"}}></Card.Img>
                <ListGroup>
                <ListGroup.Item ><b>Clima: </b> {clima}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Terreno: </b> {terreno}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Creación: </b> {creacion}</ListGroup.Item>
            </ListGroup>
            </Card.Body>
            <Link to={`/detailsplanet/${planeta}/${num}`} key={keyName}>
<Button className="BtnCard"><p style={{marginBottom:"5px"}}>Detalles de</p>{planeta} </Button>
        </Link>
        </Card>
        
    );
    };
export default TarjetaPlanet;