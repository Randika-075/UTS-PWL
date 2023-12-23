import React from "react";
import { FaCartPlus } from "react-icons/fa";

const AddToCartButton: React.FC<{
  onclick: () => void;
}> = ({ onclick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex flex-row justify-center items-center w-full gap-2"
      onClick={onclick}
    >
      <FaCartPlus />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
