import { useState } from "react";

export const UsePlanets = () => {

    const [dataPlanets, setDataPlanets] = useState([])
    const [dataApi, setDataApi] = useState([])

    const [Contador, setContador] = useState(1);

    const Reducir = () => {
      if (Contador <= 1) {
        setContador(1);
      } else {
        setContador(Contador - 1);
      }
    };
    const Aumentar = () => {
      if (Contador < 9) {
        setContador(Contador + 1);
      } else {
        setContador(9);
      }
    };
    const getDataApi = async (urlData)=>{
      try {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
  
        await fetch(
          urlData,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setDataApi(result))
          .catch((error) => console.log("error", error));
      } catch (error) {
        console.log(error);
      }
    };
  
    const back = ()=>{
      window.history.go(-1);
    }

    const getAllPlanets = async (numberPage)=>{
      try{
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        await fetch(
           `https://swapi.dev/api/planets/?page=${numberPage}`,
           requestOptions
        )
        .then((response) => response.json())
        .then((result) => setDataPlanets(result.results))
        .catch((error) => console.log("Error", error));
      }catch (error){
        console.log (error);
      }
    };



  return {
    getAllPlanets,
    dataPlanets, 
    getDataApi,
    dataApi,
    Contador,
    Reducir,
    Aumentar,
    back
  };
};
