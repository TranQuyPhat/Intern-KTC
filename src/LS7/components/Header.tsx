import React from "react";
import "../../index.css";
import NavItem from "./NavItem";
import { FaCartShopping } from "react-icons/fa6";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-gray-800 text-white text-xl sm:text-2xl lg:text-3xl">
      <div className="font-bold">Magazine</div>
      <nav className="flex items-center space-x-4">
        <NavItem to="/" label="Home" />
        <NavItem to="/categories" label="Category" />
        <NavItem to="/products" label="Product" />
        <NavItem to="/customers" label="Customer" />
        <NavItem to="/login" label="Login" />
        <NavItem to="/blog" label="Blog" />
        <NavItem to="/cart" label={<FaCartShopping className="text-2xl" />} />
      </nav>
    </header>
  );
}
