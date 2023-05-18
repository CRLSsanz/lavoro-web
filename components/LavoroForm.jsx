import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import { ButtonGoBack } from "./ButtonGoBack";

const initailForm = {
  lav_id: null,
  emp_id: "",
  cus_id: "",
  typ_id: "",
  lav_total: "",
  lav_dateini: "",
  lav_datefin: "",
  lav_pay: "",
  lav_status: "",
};

export function LavoroForm() {
  const [form, setForm] = useState(initailForm);
  const navigate = useNavigate();

  const { url, typesLavoro, lavoroToEdit, employees, customers } =
    useContext(CrudContext);
  //console.log(detailToEdit);
  console.log(lavoroToEdit);
  //console.log(typesLavoro);

  useEffect(() => {
    //console.log(lavoroToEdit.lav_id);
    if (lavoroToEdit) {
      setForm(lavoroToEdit);
    } else {
      setForm(initailForm);
    }
  }, [lavoroToEdit]);

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
    //console.log(form);

    if (form.lav_id === null) {
      //createData(form);

      axios.post(`${url}/lavoros/save/`, form).then(function (response) {
        console.log(response.data);
        navigate(-1); //direccion con router
      });
    } else {
      //updateData(form);

      axios
        .put(`${url}/lavoros/${form.lav_id}/edit/`, form)
        .then(function (response) {
          console.log(response.data);
          navigate(-1); //direccion con router
        });
    }
  };

  return (
    <div className=" w-[600px] sm:w-11/12 md:max-w-[768px]">
      <div className="p-4">
        <div className="flex flex-row justify-between w-full mb-3 py-4">
          <h1 className="text-base uppercase tracking-wide font-bold py-3 text-gray-500">
            Lavoro - Codigo #23456
          </h1>
          <div>
            <ButtonGoBack />
          </div>
        </div>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full py-6">
            {/** EMPLOYEES - CUSTOMER */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label">Employees</label>
                <div className="relative">
                  {form.lav_id === null ? (
                    <select
                      name="emp_id"
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option>-- Seleccione --</option>
                      {employees.map((item, index) => (
                        <option key={index} value={item.emp_id}>
                          {item.emp_name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      name="emp_id"
                      onChange={handleChange}
                      className="form-select"
                      value={form.emp_id}
                    >
                      {employees.map((item, index) => (
                        <option key={index} value={item.emp_id}>
                          {item.emp_name}
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
                <label className="form-label">Customer</label>
                <div className="relative">
                  {form.lav_id === null ? (
                    <select
                      name="cus_id"
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option>-- Seleccione --</option>
                      {customers.map((item, index) => (
                        <option key={index} value={item.cus_id}>
                          {item.cus_name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      name="cus_id"
                      onChange={handleChange}
                      className="form-select"
                      value={form.cus_id}
                    >
                      {customers.map((item, index) => (
                        <option key={index} value={item.cus_id}>
                          {item.cus_name}
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
            </div>

            {/** DATE INICIAL - DATE FINISH */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label mb-2">Date Inicial</label>
                <input
                  name="lav_dateini"
                  defaultValue={form.lav_dateini}
                  onChange={handleChange}
                  className="form-input appearance-none"
                  type="date"
                  placeholder="date"
                />
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label mb-2">Date Finish</label>
                <input
                  name="lav_datefin"
                  defaultValue={form.lav_datefin}
                  onChange={handleChange}
                  className="form-input appearance-none"
                  type="date"
                  placeholder="date"
                />
              </div>
            </div>

            {/** TYPE - TOTAL */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label">Type Lavoro</label>
                <div className="relative">
                  {form.lav_id === null ? (
                    <select
                      name="typ_id"
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option>-- Seleccione --</option>
                      {typesLavoro?.map((item, index) => (
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
                <label className="form-label">Total</label>
                <input
                  name="lav_total"
                  defaultValue={form.lav_total}
                  onChange={handleChange}
                  className="form-input"
                  type="number"
                  placeholder="€"
                />
              </div>
            </div>

            <hr className="mb-6" />

            {/** PAY - DATE PUY */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label mb-2">Pay</label>
                <input
                  name="lav_pay"
                  defaultValue={form.lav_pay}
                  onChange={handleChange}
                  className="form-input"
                  type="number"
                  placeholder="€"
                />
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label mb-2">Date Pay</label>
                <input
                  name="lav_datepay"
                  defaultValue={form.lav_datepay}
                  onChange={handleChange}
                  className="form-input appearance-none"
                  type="date"
                />
              </div>
            </div>

            {/** STATUS */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-6">
                <label className="form-label mb-2">Status</label>
                <input
                  name="lav_status"
                  defaultValue={form.lav_status}
                  onChange={handleChange}
                  className="form-input"
                  type="text"
                  placeholder="Debe: € 80.00"
                />
              </div>
            </div>

            {/** BUTTON SAVE */}
            <div className="flex justify-end ">
              <button className="form-btn sm:w-1/2">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
