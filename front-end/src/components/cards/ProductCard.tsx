import React from "react";
import { Product } from "../../models/Product";
import DetailProductButton from "../buttons/DetailProductButton";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md px-[15px] pt-[15px] pb-[30px] w-[250px]">
      <figure className="w-[220px] h-[220px] bg-red-100">
        <img
          src={product.image_url}
          alt={product.image_url}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="mt-4">
        <h1 className="text-xl font-bold overflow-hidden overflow-ellipsis h-[48px]">
          {product.name}
        </h1>
        <p className="text-lg">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(product.price)}
        </p>
      </div>
      <div className="mt-4">
        <p>
          {product.stock > 0 ? (
            <span className="text-green-500">In Stock</span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </p>
      </div>
      <DetailProductButton
        onclick={() => {
          navigate(`/product/${product.id}`, {});
        }}
      />
    </div>
  );
};

export default ProductCard;
