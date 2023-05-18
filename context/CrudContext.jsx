import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import { useParams } from "react-router-dom";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [lavoros, setLavoros] = useState([]);
  const [details, setDetails] = useState([]);
  const [typesLavoro, setTypesLavoro] = useState([]);
  const [detailToEdit, setDetailToEdit] = useState(null);
  const [lavoroToEdit, setLavoroToEdit] = useState(null);

  //const url = "http://crlssanz.unaux.com/api/lavoro1";
  //const url = "http://crlssanz.epizy.com/api/lavoro1";
  const url = "http://localhost/api/lavoro1";
  //const { id } = useParams;

  useEffect(() => {
    getTypesLavoro();
    getLavoros();
    getEmployees();
    getCustomers();
  }, []);

  function getEmployees() {
    axios.get(`${url}/employees/`).then(function (response) {
      //console.log(response.data);
      setEmployees(response.data);
    });
  }
  function getCustomers() {
    axios.get(`${url}/customers/`).then(function (response) {
      //console.log(response.data);
      setCustomers(response.data);
    });
  }
  function getTypesLavoro() {
    axios.get(`${url}/types/`).then(function (response) {
      //console.log(response.data);
      setTypesLavoro(response.data);
    });
  }
  function getLavoros() {
    axios.get(`${url}/lavoros/`).then(function (response) {
      //console.log(response.data);
      setLavoros(response.data);
    });
  }

  const data = {
    employees,
    setEmployees,
    customers,
    setCustomers,
    typesLavoro,
    setTypesLavoro,
    lavoros,
    setLavoros,
    getLavoros,
    details,
    url,
    setDetails,
    lavoroToEdit,
    setLavoroToEdit,
    detailToEdit,
    setDetailToEdit,
  };

  return <CrudContext.Provider value={data}> {children} </CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
