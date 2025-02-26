import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const socialLinks = [
  { href: "https://x.com/mdirfan_23", icon: <FaXTwitter size={22} /> },
  { href: "https://github.com/workmdirfan29/unlokthmify", icon: <FiGithub size={22} /> },
];

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold cursor-pointer hover:underline"
        >
          {icon}
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
