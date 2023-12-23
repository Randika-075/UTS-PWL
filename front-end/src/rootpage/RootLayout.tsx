import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavbarLayout from "../components/layouts/NavbarLayout";
import FooterLayout from "../components/layouts/FooterLayout";

const RootLayout = () => {
  return (
    <>
      <Toaster />
      <NavbarLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
};

export default RootLayout;
