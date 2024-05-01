import { links } from "@/utils/links.ts";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className={"hidden md:flex items-center justify-center gap-x-4 "}>
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            className={({ isActive }) => {
              return `${isActive ? "text-primary" : ""}  capitalize tracking-wide`;
            }}
          >
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
