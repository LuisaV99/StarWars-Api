import React, {useEffect} from "react";
// import { unicoPersonaje } from "./funcion";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../images/alderaan.jpeg";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { UsePerson } from "../../Hooks/UsePerson";
import { UsePlanets } from "../../Hooks/UsePlanets";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./details.css";

const DetallesPlanets = () => {
  const { back, getAllPlanets, dataPlanets } = UsePlanets();
  const { getPlanetPerson } = UsePerson();

  const params = useParams();
  const listParams = [params];
  const mapeo = listParams.map((list) => list.nombres);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {
    getAllPlanets(numero);
  }, []);
  // console.log(numero);

  const filtro = dataPlanets.filter((saludos) => saludos.name === nombre);
  // console.log(filtro);


    // const [detalles, setDetalles] = useState(null)

    // const params = useParams()
    // useEffect(() => {
    //     unicoPersonaje(params.id, setDetalles)
    // },[])

  return (
      <>
        <div className="Boton-ini">
          <button style={{ display: "contents" }} onClick={back}>
            <BsArrowLeftCircleFill
              size={40}
              style={{ color: "black", marginLeft: "10px" }}
            />
          </button>

          <h1 className="title">Detalles De {nombre}</h1>
        </div>
        <div className="Cards1">
          <Card
            style={{
              width: "18rem",
              border: "solid 3px #5E9CC8",
              background: "black",
              borderRadius: "33px",
            }}
            className="m-2 text-center"
          >
            <Card.Body className="Body-C">
              <Card.Img src={img} style={{height:"23rem"}}></Card.Img>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "45rem",
              border: "solid 3px #5E9CC8",
              background: "black",
              borderRadius: "33px",
            }}
            className="m-2 text-center"
          >
            {filtro.map((planeta) => (
              <div key={planeta.name}>
                <h1 className="Details-Character">..</h1>
                <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Nacimiento: </b> <b> {planeta.rotation_period}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Editado: </b> <b> {planeta.orbital_period}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Creado: </b> <b> {planeta.diameter}</b></ListGroup.Item><br></br>
                <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Color Ojos: </b> <b> {planeta.climate}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Genero: </b> <b> {planeta.gravity}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Color Cabello: </b> <b> {planeta.terrain}</b></ListGroup.Item><br></br>
                <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Estatura: </b> <b> {planeta.surface_water}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Peso: </b> <b> {planeta.population}</b></ListGroup.Item><br></br>
                
              </div>
            ))}
          </Card>
        </div>
        <div className="Cards1">
          <Card
            style={{
              width: "31rem",
              border: "solid 3px #5E9CC8",
              background: "black",
              height: "176px",
              borderRadius: "23px",
            }}
            className="m-2 text-center"
          >
            {filtro.map((planeta) => (
              <div key={planeta.name}>
                <h1 className="detalle2">RESIDENTES</h1>
                <p className="films">{planeta.residents}</p>
              </div>
            ))}
          </Card>
          <Card
            style={{
              width: "16rem",
              border: "solid 3px #5E9CC8",
              background: "black",
              height: "176px",
              borderRadius: "23px",
            }}
            className="m-2 text-center"
          >
            {filtro.map((planeta) => (
              <div key={planeta.name}>
                <h1 className="detalle2">PELICULAS</h1>
                <p className="films">{planeta.films}</p>
              </div>
            ))}
          </Card>

          <Card
            style={{
              width: "14rem",
              border: "solid 3px #5E9CC8",
              background: "black",
              height: "176px",
              borderRadius: "23px",
            }}
            className="m-2 text-center"
          >
            {filtro.map((planeta) => (
              <div key={planeta.name}>
                <h1 className="detalle2">CREADO</h1>
                <p className="films">{planeta.created}</p>
                <h1 className="detalle2">EDITADO</h1>
                <p className="films">{planeta.edited}</p>
              </div>
            ))}
          </Card>
        </div>
      </>
    );
  };
  export default DetallesPlanets;



//     <div className="contenedor"> <br/>
//       <Card.Title><h2>Detalles del Personaje {params.id}</h2></Card.Title>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={BbYoda} />
//       {/* <p>Genero {detalles.gender}</p> */}
//     </Card>
//     </div>
//   );
// }

// export default Detalles;