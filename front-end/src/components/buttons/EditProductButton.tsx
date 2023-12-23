import React from "react";
import { FaEdit } from "react-icons/fa";

const EditProductButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-700 w-[200px] text-white px-4 py-2 rounded-md flex flex-row gap-[5px] justify-center font-bold items-center"
      onClick={onClick}
    >
      <FaEdit />
      Edit
    </button>
  );
};

export default EditProductButton;
