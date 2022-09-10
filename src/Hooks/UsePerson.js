import { useState } from "react";

export const UsePerson = () => {
  const [dataPeople, setDataPeople] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);

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

  const getAllPeople = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(`https://swapi.dev/api/people/?page=${numberPage}`, requestOptions)
        .then((response) => response.json())
        .then((result) => setDataPeople(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
    const getDetailPeople = async (urlPersona)=>{
      try {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
  
        await fetch(
          urlPersona,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setDataDetail(result))
          .catch((error) => console.log("error", error));
      } catch (error) {
        console.log(error);
      }
  };

  return {
    getAllPeople,
    dataPeople,
    Contador,
    Aumentar,
    Reducir,
    getDataApi,
    dataApi,
    back,
    getDetailPeople,
    dataDetail
  };
};
