import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteButton: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white text-center px-4 py-2 rounded-md bg-red-500 hover:bg-red-700"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
