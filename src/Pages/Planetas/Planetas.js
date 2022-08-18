// import react from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {ListGroup} from "react-bootstrap";
import "./planets.css";


export const TarjetaPlanet = ({
        planeta,
        clima,
        terreno,
        creacion,
        HanSolo,
}) => {
    return(
        <Card style={{width: "18rem", borderRadius:"12px", background: "black"}}
        className="m-2 text-center" >
            <Card.Body className="card-body" style={{borderRadius:"12px"}}>
                <Card.Title className="card.title"><b>Planeta </b>
                    {planeta}
                </Card.Title>
                <Card.Img src={HanSolo} style={{marginBottom:"10px"}}></Card.Img>
                <ListGroup>
                <ListGroup.Item className="lista"><b>Clima: </b> {clima}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Terreno: </b> {terreno}</ListGroup.Item>
                <ListGroup.Item className="lista"><b>Fecha de Creación: </b> {creacion}</ListGroup.Item>
            </ListGroup>
            <Button className="BtnCard"><p style={{marginBottom:"auto"}}>Detalles del personaje </p> {planeta}</Button>
            </Card.Body>
        </Card>
    );
    };
export default TarjetaPlanet;

// const Cprops = () => {
//     return(
//         <Container className="d-flex flex-wrap justify-content-between" >
//             {Tarjeta.map((Card1)=>(
//                 <CardPerson key={Card1.Id} title={Card1.Titulo} image={Card1.Imagen} text={Card1.Texto} btn={Card1.Boton}></CardPerson>
//             ))}
//         </Container>
//     );
// };

// export default Cprops;