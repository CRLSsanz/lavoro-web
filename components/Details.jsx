import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin4Line, RiEditLine, RiAddCircleLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
//import DetailsCreateModal from "./DetailsCreateModal";
import { useParams } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import { ButtonGoBack } from "./ButtonGoBack";
import { helpHttp } from "./helpHttp";

export function Details() {
  const [showModal, setShowModal] = useState(false);
  const {
    url,
    details,
    setDetails,
    setDetailToEdit,
    lavoroToEdit,
    getLavoros,
  } = useContext(CrudContext);

  const [total, setTotal] = useState();
  const { id } = useParams();

  let api = helpHttp();
  //  let url = "${url}/employees/";
  //let url = "${url}/lavoros/";

  let urlprueba = `${url}/details/5/list/`;
  //let urlprueba = `${url}/`;
  let url2 = "http://crlssanz.epizy.com/api/lavoro1/lavoros/";

  useEffect(() => {
    getDetails(id);
    helpHttp()
      .get(urlprueba)
      .then((res) => {
        console.log(res);
      });
  }, []);

  useEffect(() => {
    //updateLavoro()
    sumaTotal(); // DESABILITADO  -  FALTA REPARAR
    //let sum = details.reduce((sum, value) => sum + Number(value.det_pay), 0);
    //console.log(sum);
  }, [details]);

  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const sumaTotal = () => {
    setTotal(details.reduce((sum, value) => sum + Number(value.det_pay), 0));
    lavoroToEdit.lav_total = total;

    let endpoint = `${url}/lavoros/${lavoroToEdit.lav_id}/edit/`;

    let options = {
      body: lavoroToEdit,
    };

    axios.put(endpoint, lavoroToEdit).then(function (response) {
      console.log(
        `Details.sumaTotal = Se ectualizo el LAVORO id:${lavoroToEdit.lav_id} total:${total}`
      );
      console.log(response.data);
      //navigate(-1); //direccion con router
    });
  };

  const newDetail = () => {
    setDetailToEdit(null);
  };

  function getDetails() {
    axios.get(`${url}/details/${id}/list/`).then(function (response) {
      console.log(
        `Details.getDetail = Se encontraron: ${response.data.length} detalles del LAVORO id: ${id}.`
      );
      setDetails(response.data);
    });
  }

  const detailDelete = (det_id) => {
    //console.log(id);
    let isDelete = window.confirm(
      `Estas seguro de eliminar el Detail con el id: ${det_id} ?`
    );
    if (isDelete) {
      axios.delete(`${url}/details/${det_id}/delete`).then(function (response) {
        console.log(response.data);
        getDetails();
      });
    } else {
      return;
    }
  };

  const handleOnClose = () => setShowModal(false);

  return (
    <div className=" w-[600px] sm:w-11/12 md:max-w-[768px]">
      <div className="p-4">
        <div className="flex flex-row justify-between py-4">
          <Link to={`../lavoro1/det/${id}/create`}>
            <button
              onClick={() => newDetail()}
              className="btn-1 hover:scale-95 transition"
            >
              New Detail
            </button>
          </Link>

          <ButtonGoBack />
        </div>

        {/** TABLE */}
        <div className="min-h-[500px]">
          <div className="w-full shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-4 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-center">
                  <th scope="col" className="p-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hours
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pay
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {details.length > 0 ? (
                  details?.map((item, key) => (
                    <tr
                      key={key}
                      className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4 text-center">
                        {item.det_date.substr(8, 2)}
                        <br />
                        {meses[Number(item.det_date.substr(5, 2) - 1)]}
                      </td>
                      <th
                        scope="row"
                        className="flex items-center p-4 text-gray-700 dark:text-white"
                      >
                        <div className="text-left">
                          <div className="text-base font-semibold">
                            {item.typ_description}{" "}
                          </div>
                          <div className="font-normal text-gray-500">
                            {item.det_comment}
                          </div>
                        </div>
                      </th>
                      <td className="p-4">
                        {item.det_hours}h. {item.det_hoursdetail}{" "}
                      </td>
                      <td className="p-4">
                        <div className="items-center whitespace-nowrap">
                          €{" "}
                          <span className="text-lg">
                            {item.det_pay /*String(item.det_pay).slice(0, -3)*/}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-row justify-between ">
                          <Link
                            className=" text-md font-medium text-blue-600 hover:underline py-4"
                            to={`../../lavoro1/det/edit`}
                          >
                            <button onClick={() => setDetailToEdit(item)}>
                              Edit
                            </button>
                          </Link>

                          <button
                            onClick={() => detailDelete(item.det_id)}
                            className="text-lg text-red-500 py-4"
                          >
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>Sin datos</td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr className="font-semibold text-gray-900 bg-gray-50">
                  <td className="px-6 py-3"></td>
                  <th scope="row" className="px-6 py-3 text-base">
                    Total
                  </th>
                  <td className="px-6 py-3"></td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    € <span className="text-lg">{total}.00</span>
                  </td>
                  <td className="px-6 py-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
