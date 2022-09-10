import { useEffect } from "react";
import {UsePlanets} from "../../Hooks/UsePlanets";
import {TarjetaPlanet} from "./Planetas";
import HanSolo from "../../images/han-solo.jpg";
import Button from "react-bootstrap/Button";

const Planetas = () =>{
  const { getAllPlanets, dataPlanets, Contador, Aumentar, Reducir } = UsePlanets();
  useEffect(()=> {
    getAllPlanets(Contador);

    console.log(dataPlanets);
  }, [dataPlanets]);
  return(
    <div>
      <h1 style={{textAlign:"center", textShadow:"0 0 4px #FFE919", fontWeight:"bolder", fontSize:"xxx-large"}}>Listado de Planetas</h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
      {dataPlanets.map((planets) =>(
          <TarjetaPlanet
          key={planets.name}
          planeta={planets.name}
          clima={planets.climate}
          terreno={planets.terrain}
          creacion={planets.created}
          HanSolo={HanSolo}
          keyName={planets.name}
          nombres={planets.name}
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

export default Planetas;