import * as FaIcon from "react-icons/fa";
import { ImageStatic } from "../../static/ImageStatic";

const NavbarLayout = () => {
  return (
    <nav className="sticky top-0 bg-white px-[30px] py-[10px]">
      <div className="container flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="w-[150px]">
            <a href="/">
              <figure>
                <img src={ImageStatic.navLogo} alt="sells-com.png" />
              </figure>
            </a>
          </div>
        </div>
        <div>
          <ul className="flex justify-between items-center space-x-4">
            <li>
              <a
                href="/"
                className="flex flex-row gap-[5px] items-center text-black hover:underline"
              >
                <FaIcon.FaHome />
                Home
              </a>
            </li>
            <li>
              <a
                href="/my-cart"
                className="flex flex-row gap-[5px] items-center text-black hover:underline"
              >
                <FaIcon.FaCartArrowDown />
                Cart
              </a>
            </li>
            <li>
              <a
                href="/new-product"
                className="flex flex-row gap-[5px] items-center text-black hover:underline"
              >
                <FaIcon.FaPlus />
                New Product
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex flex-row gap-[5px] items-center text-black hover:underline"
              >
                <FaIcon.FaInfoCircle />
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[10px] w-full h-[2px] bg-gray-400"></div>
    </nav>
  );
};

export default NavbarLayout;
