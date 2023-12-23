import ProductCard from "../components/cards/ProductCard";
import { Product } from "../models/Product";
import useProducts from "../hooks/useProducts";
const HomePage = () => {
  const { data, error, isLoading } = useProducts();
  return (
    <main>
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Loading...</h1>
        </div>
      ) : error ? (
        <div className="flex flex-1 justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Error</h1>
        </div>
      ) : (
        <div className="container self-center w-fit">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
            {data.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default HomePage;
