import React from "react";

export default function NavItem({ name, icon }) {
  return (
    <div className="group text-white flex items-center gap-x-3">
      <span className="">{icon}</span>
      <span className="text-sm md:text-base lg:mt-1 uppercase font-medium group-hover:underline underline-offset-8">
        {name}
      </span>
    </div>
  );
}
