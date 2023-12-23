import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./rootpage/RootLayout";
import ProductDetails from "./pages/ProductDetailsPage";
import AddNewProduct from "./pages/AddNewProductPage";
import About from "./pages/AboutPage";
import EditProduct from "./pages/EditProductPage";
import Cart from "./pages/CartPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="my-cart" element={<Cart />} />
      <Route path="new-product" element={<AddNewProduct />} />
      <Route path="about" element={<About />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="edit-product/:id" element={<EditProduct />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
