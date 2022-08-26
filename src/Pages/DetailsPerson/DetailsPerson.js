import React, {useEffect} from "react";
// import { unicoPersonaje } from "./funcion";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../images/Portada.jpg";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { UsePerson } from "../../Hooks/UsePerson";
import { UsePlanets } from "../../Hooks/UsePlanets";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { ListGroup } from "react-bootstrap";
import "./details.css";

const Detalles = () => {
  const { back, getAllPeople, dataPeople } = UsePerson();
  const { getPlanetPerson, dataPlanetPerson } = UsePlanets();

  const params = useParams();
  const listParams = [params];
  const mapeo = listParams.map((list) => list.nombres);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {
    getAllPeople(numero);
  }, []);
  // console.log(numero);

  const filtro = dataPeople.filter((saludos) => saludos.name === nombre);
  // console.log(filtro);

  const mapeo3 = filtro.map((per) => per.homeworld);
  var homeWorld = mapeo3[0];
  console.log(homeWorld);
  useEffect(() => {
    getPlanetPerson(homeWorld);
  }, [dataPlanetPerson]);

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

          <h1 className="title">{nombre}</h1>
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
              <Card.Img src={img} ></Card.Img>
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
            {filtro.map((persona) => (
              <div key={persona.name}>
                <h1 className="Details-Character">DETALLES DEL PERSONAJE </h1>
                <div></div>
                <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Nacimiento: </b> <b> {persona.birth_year}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Editado: </b> <b> {persona.edited}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Creado: </b> <b> {persona.created}</b></ListGroup.Item><br></br>
                <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Color Ojos: </b> <b> {persona.eye_color}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Genero: </b> <b> {persona.gender}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Color Cabello: </b> <b> {persona.hair_color}</b></ListGroup.Item><br></br>
                <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Estatura: </b> <b> {persona.height}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Peso: </b> <b> {persona.mass}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Color Piel: </b> <b> {persona.skin_color}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
              background: "black",}}><b>Planetas: </b> <b> {homeWorld}</b></ListGroup.Item><br></br>
                
              </div>
            ))}
          </Card>
        </div>
        <div className="Cards1">
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
            {filtro.map((persona) => (
              <div key={persona.name}>
                <h1 className="detalle2">PELICULAS</h1>
                <p className="films">{persona.films}</p>
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
            {filtro.map((persona) => (
              <div key={persona.name}>
                <h1 className="detalle2">VEHICULOS</h1>
                <p className="films">Vehiculo1</p>
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
            {filtro.map((persona) => (
              <div key={persona.name}>
                <h1 className="detalle2">NAVES</h1>
                <p className="films">Films</p>
              </div>
            ))}
          </Card>
        </div>
      </>
    );
  };
  export default Detalles;



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