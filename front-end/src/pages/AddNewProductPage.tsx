import { SubmitHandler, useForm } from "react-hook-form";
import { axiosInstance } from "../helper/axios";
import toast from "react-hot-toast";
import { mutate } from "swr";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
};

const AddNewProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      data.price = Number(data.price);
      data.stock = Number(data.stock);
      await axiosInstance.post("/api/v1/product", data);
      toast.success("Product added successfully");
      mutate("https://relieved-cheaply-drum.ngrok-free.app/api/v1/product");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <main>
      <h1 className="text-4xl font-bold text-center">Add New Product</h1>
      <div className="flex-1 flex justify-center items-center">
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
              {...register("stock", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2"
          >
            Add Product
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddNewProduct;
