import { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const routeData = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/product/:id", name: "Product Detail" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-green-500 text-white p-5">
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="text-5xl md:hidden"
      >
        {isOpen === true ? (
          <button className="duration-1000">
            <AiOutlineClose></AiOutlineClose>
          </button>
        ) : (
          <button className="duration-1000">
            <AiOutlineMenu></AiOutlineMenu>
          </button>
        )}
      </div>
      <ul
        className={`md:flex absolute duration-300 ${
          isOpen ? "top-20" : "-top-96"
        } bg-green-600 md:static`}
      >
        {routeData.map((data) => (
          <NavMenu key={data.id} Data={data}>
            {" "}
          </NavMenu>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
