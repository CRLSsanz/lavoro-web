import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import { ButtonGoBack } from "./ButtonGoBack";
import { helpHttp } from "./helpHttp";

const initailForm = {
  det_id: null,
  det_comment: "",
  det_date: "",
  det_hours: "",
  det_hoursdetail: "",
  det_pay: "",
  det_status: "",
  lav_id: "",
  typ_comment: "",
  typ_description: "",
  typ_id: "",
  typ_status: "",
};

export function DetailForm() {
  const [form, setForm] = useState(initailForm);
  const navigate = useNavigate();
  const { id } = useParams();

  const { detailToEdit, typesLavoro, url } = useContext(CrudContext);
  //console.log(
  //  `DetailsForm = Se editara el detalle con el ID: ${detailToEdit.det_id}.`
  //);

  useEffect(() => {
    if (detailToEdit) {
      setForm(detailToEdit);
    } else {
      setForm(initailForm);
      setForm({ ...form, lav_id: id });
    }
  }, [detailToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    /*
    const name = e.target.name;
    const value = e.target.value;
    setForm((values) => ({ ...values, [name]: value }));
    */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setForm({ ...form, lav_id: id });

    if (form.det_id === null) {
      //createData(form);

      //setForm({ ...form, lav_id: id });
      axios.post(`${url}/details/save`, form).then(function (response) {
        console.log(
          `DetailForm handleSumit = Se guardo el detalle: ${response.data}`
        );
        navigate(-1); //direccion con router
      });
    } else {
      //updateData(form);
      updateDataAxiosConfig(form);
      //updateDataFetchConfig(form);
      /*axios
        .put(`${url}/details/${detailToEdit.det_id}/edit`, form)
        .then(function (response) {
          console.log(
            `DetailForm handleSumit = Se actualiso el detalle: ${response.data}`
          );
          navigate(-1); //direccion con router
        });
        */
    }
  };

  const updateDataAxiosConfig = (form) => {
    //borrar
    let endpoint = `${url}/details/${detailToEdit.det_id}/edit`;

    let options = {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
      },
    };
    //updateData(form);
    axios.put(endpoint, form, options).then(function (response) {
      console.log(
        `DetailForm handleSumit = Se actualiso el detalle: ${response.data}`
      );
      navigate(-1); //direccion con router
    });
  };

  let api = helpHttp();

  const updateDataFetchConfig = (form) => {
    //borrar
    let endpoint = `${url}/details/${detailToEdit.det_id}/edit`;

    let options = {
      body: form,
    };
    //updateData(form);
    api.put(endpoint, options).then(function (response) {
      console.log(
        `DetailForm handleSumit = Se actualiso el detalle: ${response.data}`
      );
      navigate(-1); //direccion con router
    });
  };

  return (
    <div className=" w-[600px] sm:w-11/12 md:max-w-[768px]">
      <div className="p-4">
        <div className="flex flex-row justify-between w-full mb-3 py-4">
          <h1 className="text-base uppercase tracking-wide font-bold py-3 text-gray-500">
            Detail - Codigo #{form.det_id}
          </h1>
          <div>
            <ButtonGoBack />
          </div>
        </div>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full py-6 h-[500px]">
            {/** TYPE - DATE */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label">Type Lavoro</label>
                <div className="relative">
                  {form.det_id === null ? (
                    <select
                      name="typ_id"
                      onChange={handleChange}
                      className="form-select"
                      //defaultValue={form.typ_id}
                    >
                      <option>-- Seleccione --</option>
                      {typesLavoro.map((item, index) => (
                        <option key={index} value={item.typ_id}>
                          {item.typ_description}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      name="typ_id"
                      onChange={handleChange}
                      className="form-select"
                      value={form.typ_id}
                    >
                      {typesLavoro.map((item, index) => (
                        <option key={index} value={item.typ_id}>
                          {item.typ_description}
                        </option>
                      ))}
                    </select>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label">Date</label>
                <input
                  name="det_date"
                  defaultValue={form.det_date}
                  onChange={handleChange}
                  className="form-input appearance-none "
                  type="date"
                />
              </div>
            </div>
            {/**Comment */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3  mb-6">
                <label className="form-label">Comment</label>
                <input
                  name="det_comment"
                  defaultValue={form.det_comment}
                  onChange={handleChange}
                  className="form-input"
                  type="text"
                  placeholder=""
                />
                <p className="text-gray-300 text-sm italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            {/** PAY - HOURS - DETAIL */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-1/3 px-3 mb-6 ">
                <label className="form-label">Puy</label>
                <input
                  name="det_pay"
                  defaultValue={form.det_pay}
                  onChange={handleChange}
                  className="form-input"
                  type="number"
                  placeholder="€"
                />
              </div>
              <div className="w-1/6 px-3 mb-6">
                <label className="form-label">Hours</label>
                <input
                  name="det_hours"
                  defaultValue={form.det_hours}
                  onChange={handleChange}
                  className="form-input"
                  type="number"
                  placeholder="3h."
                />
              </div>
              <div className="w-1/2 px-3 mb-6">
                <label className="form-label">Hours Details</label>
                <input
                  name="det_hoursdetail"
                  defaultValue={form.det_hoursdetail}
                  onChange={handleChange}
                  className="form-input"
                  type="text"
                  placeholder="De 9 a 1pm"
                />
              </div>
            </div>
            {/** BUTTON SAVE */}
            <div className="flex justify-end ">
              <button className="form-btn sm:w-1/2 ">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
