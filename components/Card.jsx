import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RiUser6Line } from "react-icons/ri";
import { TbArrowBarRight } from "react-icons/tb";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import CrudContext from "../context/CrudContext";

const meses = [
  "Ene",
  "Feb",
  "Marzo",
  "Abril",
  "Mayo",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export const Card = ({ item }) => {
  const { setLavoroToEdit } = useContext(CrudContext);
  const [isOpen, setIsOpen] = useState();
  //console.log({ item });

  let { lav_id, cus_name, typ_description, lav_total, lav_pay, lav_datefin } =
    item;

  return (
    <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg shadow mb-4">
      <div className="flex flex-row items-center text-base text-gray-400">
        <div className="text-5xl pr-3">
          <RiUser6Line />
        </div>
        <div className="w-full ">
          <div className="w-full flex justify-between">
            <div className="text-gray-600 uppercase text-base font-semibold">
              {item.cus_name}
            </div>
            <div className="">
              <span className="text-base"> € </span>
              <span className="text-gray-600 text-xl font-semibold">
                {String(item.lav_total).slice(0, -3)}
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="">
              {meses[Number(item.lav_datefin.substr(5, 2) - 1)]},{" "}
              {item.lav_datefin.substr(8, 2)}
            </div>
            <div className="items-end">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="px-4 w-full flex items-center justify-between font-bold rounded-lg active:border-white duration-300 active:text-white "
              >
                {!isOpen ? (
                  <AiOutlineCaretDown className="text-base" />
                ) : (
                  <AiOutlineCaretUp className="text-base" />
                )}
              </button>
            </div>
            <div>
              {item.lav_total - item.lav_pay != 0 ? (
                <span className="text-sm font-medium px-2.5 py-0.5 rounded text-yellow-300 border border-yellow-300">
                  Pendiente
                </span>
              ) : (
                <span className="text-sm font-medium px-2.5 py-0.5 rounded text-green-300 border border-green-300">
                  Cancelado
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-end pl-6">
          <div className="text-2xl">
            <Link className="hover:text-white" to={`det/${item.lav_id}/list`}>
              <button onClick={() => setLavoroToEdit(item)}>
                <TbArrowBarRight />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="text-gray-500 border-t border-gray-300 p-2 mt-4">
          <div className="flex flex-row items-center justify-between ">
            <div className="w-3/5 flex flex-col ">
              <div className="font-semibold">{item.typ_description} </div>
              <div>Date Ini: 04 Marzo </div>
              <div>Date Fin: 06 Marzo </div>
            </div>

            <div className="w-2/5 flex flex-col text-end">
              <div className="font-semibold text-blue-500 ">
                Pay: {item.lav_pay}
              </div>
              <div>Date: Mar, 05 </div>
              <div className="text-red-500">
                Owe: {item.lav_total - item.lav_pay}
              </div>
            </div>

            <div className="text-gray-400 text-2xl w-10 pl-4 h-full flex flex-col items-start ">
              <Link className="hover:text-white" to={`lav/edit`}>
                <button onClick={() => setLavoroToEdit(item)}>
                  <AiOutlineEdit />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
