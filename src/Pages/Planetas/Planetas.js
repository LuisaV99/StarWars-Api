// import react from 'react'
import CardPerson from "./index";
import { Container } from "react-bootstrap";
import Hansolo from "../../images/han-solo.jpg";
import c3po from '../../images/c3po.jpg';
import Chewbacca from "../../images/chewbacca.jpg";

const Tarjeta = [
    {
        Id: 1,
        Titulo: "C3PO",
        Imagen: c3po,
        Texto: "Personaje 1",
        Boton: "Ver más de C3PO"
    },

    {
        Id: 2,
        Titulo: "Han Solo",
        Imagen: Hansolo,
        Texto: "Personaje 2",
        Boton: "Ver más de Han Solo"
    },
    {
        Id: 3,
        Titulo: "Chewbacca",
        Imagen: Chewbacca,
        Texto: "Personaje 3",
        Boton: "Ver más de Chewbacca"
    },
];

const Cprops = () => {
    return(
        <Container className="d-flex flex-wrap justify-content-between" >
            {Tarjeta.map((Card1)=>(
                <CardPerson key={Card1.Id} title={Card1.Titulo} image={Card1.Imagen} text={Card1.Texto} btn={Card1.Boton}></CardPerson>
            ))}
        </Container>
    );
};

export default Cprops;