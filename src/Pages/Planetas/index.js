import { useEffect } from "react";
import { UsePlanets } from "../../Hooks/UsePlanets";
import TarjetaPlanet from "./Planetas"
import Hansolo from "../../images/han-solo.jpg";

const Planetas = () => {
  const {getAllPlanets, dataPlanets} = UsePlanets();
  useEffect(()=>{
    getAllPlanets();
    console.log(dataPlanets);
  },[]);
  return(
    <div>
      <h2 style={{textAlign:"center", textShadow:"0 0 4px #FFE919", fontWeight:"bolder", fontSize:"xxx-large"}}>Listado de Planetas</h2>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
        {dataPlanets.map((planets)=> (
          <TarjetaPlanet
          key={planets.name}
          planeta={planets.name}
          clima={planets.climate}
          terreno={planets.terrain}
          creacion={planets.created}
          HanSolo={Hansolo}
          />
        ))}
      </div>
    </div>
  );
};
export default Planetas;