import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { cartList } = useCart();

  //if i have a token show the dropdown otherwise no
  const token = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn.dribbble.com/users/174958/screenshots/2771894/media/2a5369543d45fab9b9f9048303786ca8.jpg?resize=768x576&vertical=center"
              className="h-8"
              alt="CodeBook Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>

            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList && cartList.length > 0 ? cartList.length : 0}
                </span>
              </span>
            </Link>

            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};
