import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { path: "/pages/docs", label: "Docs" },
  { path: "/pages/buttons", label: "Buttons" },
  { path: "/pages/background", label: "Background" },
  { path: "/pages/colors", label: "Colors" },
  { path: "/pages/service", label: "Service" },
];

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-5 text-md font-[500]">
      {navLinks.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "text-sky-700 font-bold" : "hover:text-sky-700 font-semibold"}`
          }
        >
          {label}
        </NavLink>
      ))}
      <div className="opacity-25 text-slate-900">|</div>
      <SocialLinks />
    </div>
  );
};

export default DesktopNav;
