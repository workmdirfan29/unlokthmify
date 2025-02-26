import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { to: "/pages/docs", label: "Docs" },
  { to: "/pages/buttons", label: "Buttons" },
  { to: "/pages/background", label: "Background" },
  { to: "/pages/colors", label: "Colors" },
  { to: "/pages/service", label: "Service" },
];

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-5 text-md font-[500]">
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
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
