import { NavLink } from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { Link } from ".";

type Props = {
  links: Link[];
};

const VAC: FunctionComponent<Props> = (props) => {
  return (
    <nav className="w-full h-20 border border-white rounded-t-3xl shadow-2xl shadow-black flex justify-evenly items-center fixed bottom-0 left-0 list-none space-x-5">
      {props.links.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `${
                isActive ? "font-bold text-primary" : "text-gray-400"
              } flex flex-col items-center content-center`
            }
          >
            <i className="w-6 pb-1">{link.icon}</i>
            <b className="text-xs">{link.name}</b>
          </NavLink>
        </li>
      ))}
    </nav>
  );
};

export default VAC;
