import axios from "axios";
import React, { useContext, useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import CrudContext from "../context/CrudContext";
import { helpHttp } from "./helpHttp";
import $ from "jquery";

const bd = [
  {
    lav_id: "1",
    cus_name: "Davide Trecentoundici",
    typ_description: "Doctor",
    lav_total: "250.00",
    lav_pay: "150.00",
    lav_datefin: "2023-03-05",
  },
  {
    lav_id: "2",
    cus_name: "Maria Teresa",
    typ_description: "Moratore",
    lav_total: "100.00",
    lav_pay: "0",
    lav_datefin: "2023-02-05",
  },
  {
    lav_id: "3",
    cus_name: "Moreno Joao",
    typ_description: "Farmacia",
    lav_total: "350.00",
    lav_pay: "0.00",
    lav_datefin: "2023-05-05",
  },
  {
    lav_id: "1",
    cus_name: "Davide",
    typ_description: "Electricidad",
    lav_total: "250.00",
    lav_pay: "250.00",
    lav_datefin: "2023-04-05",
  },
  {
    lav_id: "2",
    cus_name: "Maria Teresa",
    typ_description: "Carpintero",
    lav_total: "100.00",
    lav_pay: "100.00",
    lav_datefin: "2023-05-05",
  },
  {
    lav_id: "3",
    cus_name: "Modeno Joao",
    typ_description: "Farmacia",
    lav_total: "350.00",
    lav_pay: "50.00",
    lav_datefin: "2023-05-05",
  },
];

export const Lavoros = () => {
  const [employees, setEmployees] = useState();
  const [isOpen, setIsOpen] = useState();

  const { lavoros, getLavoros, setLavoroToEdit } = useContext(CrudContext);
  //console.log(lavoros);

  useEffect(() => {
    getLavoros();
    //getPrueba();
  }, []);

  function getPrueba() {
    console.log("response");

    $.ajax({
      //console.log("Data: " + data + "\nStatus: " + status);
      type: "GET",
      url: "prueba.php",
      dataType: "text",
    }).done(function (response) {
      //data = JSON.parse(response);
      console.log(response.data);
    });
  }

  function getEmp() {
    axios
      .get("http://localhost/api/list/", {
        mode: "no-cors",
      })
      .then(function (response) {
        console.log(response.data);
        //setEmployees(response.data);
      });
  }

  const newLavoro = () => {
    setLavoroToEdit(null);
  };

  return (
    <div className=" w-[600px] sm:w-11/12 md:max-w-[768px]">
      {/**<div className=" w-[540px] sm:w-[700px]  md:w-[950px] lg:w-[1200px]">  */}
      {/**  sm: min'640px' // md: min'768px'  //   lg: min'1024px'  // xl: min'1280px', al final xl:w-[1400px] */}
      <div className="p-4">
        <h1 className="text-2xl font-extrabold pt-4 text-gray-700 ">
          List Lavoros
        </h1>
        <h1 className="text-lg  pb-4 text-gray-700 ">
          Utilities for controlling an element's background color.
        </h1>
        <div className="mb-4">
          <Link to={`../lavoro1/lav/create`}>
            <button
              onClick={() => newLavoro()}
              className="btn-1 hover:scale-95 transition"
            >
              New Lavoro
            </button>
          </Link>
        </div>
        <div className="text-2xl"></div>
        {/**CARD*/}
        {lavoros.length > 0 ? (
          lavoros?.map((item, key) => <Card key={key} item={item} />)
        ) : (
          <div>Sin datos</div>
        )}
      </div>
    </div>
  );
};
