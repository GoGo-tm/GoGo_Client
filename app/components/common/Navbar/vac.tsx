import { NavLink } from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { Link } from ".";

interface Props {
  links: Link[];
}

const VAC: FunctionComponent<Props> = (props) => {
  return (
    <nav className="w-full h-20 border border-white rounded-t-3xl shadow-2xl shadow-black flex justify-center items-center fixed bottom-0 left-0 list-none space-x-5">
      {props.links.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-gray-400"
            }
          >
            <b>{link.name}</b>
          </NavLink>
        </li>
      ))}
    </nav>
  );
};

export default VAC;
