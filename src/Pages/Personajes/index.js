import { useEffect } from "react";
import {UsePerson} from "../../Hooks/UsePerson";
import {Tarjeta} from "./Personajes";
import BbYoda from "../../images/baby-yoda.jpg";
import Button from "react-bootstrap/Button";

const CardApp = () =>{
  const { getAllPeople, dataPeople, Contador, Aumentar, Reducir } = UsePerson();
  useEffect(()=> {
    getAllPeople(Contador);

    console.log(dataPeople);
  }, [dataPeople]);
  return(
    <div>
      <h1 style={{textAlign:"center", textShadow:"0 0 4px #FFE919", fontWeight:"bolder", fontSize:"xxx-large"}}>Listado de Personajes</h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
      {dataPeople.map((people) =>(
          <Tarjeta
          key={people.name}
          nombre={people.name}
          cabello={people.hair_color}
          ojos={people.eye_color}
          piel={people.skin_color}
          genero={people.gender}
          altura={people.height}
          peso={people.mass}
          cumpleaños={people.birth_year}
          estiloBoton={people.eye_color}
          BbYoda={BbYoda}
          keyName={people.name}
          nombres={people.name}
          num={Contador}
          />
      ))}
      </div>
      <div className="container text-center" style={{display: 'flex', justifycontent: 'flexend'}}>
        <div>
    <Button className="BtnCard" onClick={Reducir}><p style={{marginBottom:"5px"}}>Atrás</p>
</Button>
<b style={{marginLeft: "10px", marginRight:"10px", fontSize: "larger"}}>{Contador}</b>
<Button className="BtnCard" onClick={Aumentar}><p style={{marginBottom:"5px"}}>Adelante</p>
        </Button>
        </div>
        </div>
    </div>
  );
};

export default CardApp;