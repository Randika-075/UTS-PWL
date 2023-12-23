import useSWR from "swr";
import { axiosInstance } from "../helper/axios";
import { Product } from "../models/Product";

const useProducts = () => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);
  const {
    data,
    error,
    isLoading,
  }: {
    data: Product[];
    error: any;
    isLoading: boolean;
  } = useSWR(`/api/v1/product`, fetcher);
  return { data, error, isLoading };
};

export default useProducts;
