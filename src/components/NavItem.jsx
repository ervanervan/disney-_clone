import React from "react";

export default function NavItem({ name, icon }) {
  return (
    <div className="group text-white flex items-center gap-x-3">
      <span>{icon}</span>
      <span className="uppercase font-medium group-hover:underline">
        {name}
      </span>
    </div>
  );
}
