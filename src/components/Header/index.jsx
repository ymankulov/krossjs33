import React from "react";
import logo from "../../assets/images/logos.svg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="py-[40px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={logo} alt="img" />
          <div className="flex items-center gap-10">
            <Link to={"/"} className="text-xl text-white font-bold">
              HOME
            </Link>
            <Link to={"/man"} className="text-xl text-white font-bold">
              MAN
            </Link>
            <Link to={"/woman"} className="text-xl text-white font-bold">
              WOMAN
            </Link>
            <Link to={"/kids"} className="text-xl text-white font-bold">
              KIDS
            </Link>
            <Link to={"/sale"} className="text-xl text-white font-bold">
              SALE
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <a className="text-3xl text-white cursor-pointer">
              <IoSearch />
            </a>
            <a className="text-3xl text-white cursor-pointer">
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
