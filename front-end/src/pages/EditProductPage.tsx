import { mutate } from "swr";
import toast from "react-hot-toast";
import useProduct from "../hooks/useProduct";
import { axiosInstance } from "../helper/axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

type Inputs = {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
};

const EditProduct = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const { data, error, isLoading } = useProduct(id);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      data.price = Number(data.price);
      data.stock = Number(data.stock);
      await axiosInstance.put(`/api/v1/product/${id}`, data);
      toast.success("Product update sucessfully");
      mutate("https://relieved-cheaply-drum.ngrok-free.app/api/v1/product");
      navigate(-1);
    } catch (error) {
      toast.error("Product update failed");
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
          <h1 className="text-4xl font-bold text-center">Edit Product</h1>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-[50%]">
              <button
                onClick={() => navigate(-1)}
                className="text-black text-2xl font-bold rounded-md py-5 flex-row flex gap-2 items-center"
              >
                <FaXmark />
                Cancel
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[50%] self-center flex flex-col gap-5"
            >
              <div className="flex-col flex gap-[5px]">
                <label>Product Title</label>
                <input
                  id="name"
                  placeholder="e.g. My Product"
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={data.name}
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex-col flex gap-[5px]">
                <label>Product Price</label>
                <input
                  id="price"
                  placeholder="e.g. 100000"
                  type="number"
                  min={1}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={data.price}
                  {...register("price", { required: true })}
                />
              </div>
              <div className="flex-col flex gap-[5px]">
                <label>Product Description</label>
                <input
                  id="description"
                  placeholder="e.g. This is my product"
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={data.description}
                  {...register("description", { required: true })}
                />
              </div>
              <div className="flex-col flex gap-[5px]">
                <label>Image URL</label>
                <input
                  id="image_url"
                  placeholder="e.g. https://example.com/image.jpg"
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={data.image_url}
                  {...register("image_url", { required: true })}
                />
              </div>
              <div className="flex-col flex gap-[5px]">
                <label>Product Stock</label>
                <input
                  id="stock"
                  placeholder="e.g. 100"
                  type="number"
                  min={1}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={data.stock}
                  {...register("stock", { required: true })}
                />
              </div>
              <div className="flex flex-row gap-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 flex-1"
                >
                  Edit Product
                </button>
              </div>
            </form>
          </div>
        </main>
      )}
    </>
  );
};

export default EditProduct;
