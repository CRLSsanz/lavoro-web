import React, { useContext, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const bd = [
  { typ_id: "1", typ_description: "Doctor" },
  { typ_id: "2", typ_description: "Arquitecto" },
  { typ_id: "3", typ_description: "Docente" },
  { typ_id: "4", typ_description: "Chofer" },
  { typ_id: "5", typ_description: "Cirujano" },
];

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState();
  const [typeLavoro, setTypeLavoro] = useState(bd);
  console.log(typeLavoro);
  return (
    <div className="relative flex flex-col items-end rounded-lg ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider  active:border-white duration-300 active:text-white "
      >
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp />
        )}
      </button>

      {isOpen && (
        <div className="z-50 bg-blue-400 absolute top-10 flex flex-col items-start rounded-lg p-2 w-[340px] h-[200px]">
          {typeLavoro.map((item, key) => (
            <div
              className="flex w-full justify-between p-2 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 "
              key={key}
            >
              <h3 className="font-bold ">{item.typ_id} </h3>
              <h3>{item.typ_description} </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
