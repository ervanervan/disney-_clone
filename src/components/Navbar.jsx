import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { MENUS } from "../Datas";
import NavItem from "./NavItem";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [toogle, setToogle] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between py-5">
        <div className="flex items-center gap-x-1 xl:gap-x-10">
          <img src={logo} alt="logo disney+" className="w-28 lg:w-36 -ml-5" />
          <div className="lg:flex gap-x-6 hidden">
            {MENUS.map((menu, i) => (
              <NavItem key={i} name={menu.name} icon={menu.icon} />
            ))}
          </div>
          <div className="flex gap-x-4 lg:hidden">
            {MENUS.map(
              (menu, i) =>
                i < 3 && <NavItem key={i} name={""} icon={menu.icon} />
            )}
            <div className="lg:hidden" onClick={() => setToogle(!toogle)}>
              <NavItem
                name={""}
                icon={
                  <EllipsisVerticalIcon className="h-5 w-5 text-gray-100" />
                }
              />
              {toogle ? (
                <div className="absolute z-10 top-20 right-2 md:right-[22rem] bg-gray-900 px-5 py-3 border border-gray-800 rounded-sm flex flex-col gap-y-3">
                  {MENUS.map(
                    (menu, i) =>
                      i > 2 && (
                        <NavItem key={i} name={menu.name} icon={menu.icon} />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-300">
          <h1 className="text-gray-800 font-bold text-lg md:text-xl">E</h1>
        </div>
      </nav>
    </header>
  );
}
