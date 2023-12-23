import { useNavigate, useParams } from "react-router-dom";
import AddToCartButton from "../components/buttons/AddToCartButton";
import EditProductButton from "../components/buttons/EditProductButton";
import useProduct from "../hooks/useProduct";
import DeleteButton from "../components/buttons/DeleteButton";
import toast from "react-hot-toast";
import { axiosInstance } from "../helper/axios";
import { mutate } from "swr";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useProduct(id);
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/api/v1/product/${id}`);
      toast.success("Product delete successfully!");
      await mutate(
        "https://relieved-cheaply-drum.ngrok-free.app/api/v1/product"
      );
      navigate(-1);
    } catch (error) {
      toast.error("Product delete failed!");
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Loading...</h1>
        </div>
      ) : error ? (
        <div className="flex flex-1 justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Error</h1>
        </div>
      ) : (
        <main>
          <h1 className="text-4xl font-bold text-center">Product Details</h1>
          <div className="flex-1 flex justify-center items-center">
            <div className="container justify-center gap-2 px-[50px] py-[30px] flex flex-row">
              <figure className="w-[400px] h-[400px] bg-red-500">
                <img
                  src={data.image_url}
                  alt={data.image_url}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="max-w-[50%] flex-[1/2] flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-center">
                  <h1 className="text-3xl font-bold">{data.name}</h1>
                  <p className="text-xl">{data.description}</p>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-center">
                    <p>
                      <span className="font-bold">Price: </span>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(data.price)}
                    </p>
                    <p>
                      <span className="font-bold">Stock: </span>
                      {data.stock >= 10 ? (
                        <span className="text-green-500">{data.stock}</span>
                      ) : (
                        <span className="text-red-500">{data.stock}</span>
                      )}
                    </p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <AddToCartButton
                      onclick={() => {
                        toast.dismiss();
                        toast.error("Coming soon!");
                      }}
                    />
                    <EditProductButton
                      onClick={() => {
                        navigate(`/edit-product/${data.id}`);
                      }}
                    />
                    <DeleteButton onClick={handleDelete} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ProductDetails;
