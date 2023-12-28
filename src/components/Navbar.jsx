import React from "react";
import logo from "../assets/images/logo.png";
import { MENUS } from "../Datas";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center gap-x-10">
          <img src={logo} alt="logo disney+" className="w-36" />
          <div className="flex gap-x-6">
            {MENUS.map((menu, i) => (
              <NavItem key={i} name={menu.name} icon={menu.icon} />
            ))}
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
          <h1 className="text-gray-950 font-bold text-xl">E</h1>
        </div>
      </nav>
    </header>
  );
}
