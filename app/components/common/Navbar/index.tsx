import { HomeIcon, HikingIcon, LogIcon, ProfileIcon } from "~/utils/icons";
import { NavLink, useLocation } from "@remix-run/react";
import { useMemo } from "react";

export type Link = {
  icon: JSX.Element;
  name: string;
  to: string;
};

const links: Link[] = [
  {
    icon: <HomeIcon />,
    name: "홈",
    to: "/home",
  },
  {
    icon: <HikingIcon />,
    name: "등산로",
    to: "/hikings",
  },
  {
    icon: <LogIcon />,
    name: "등산로그",
    to: "/mylogs",
  },
  {
    icon: <ProfileIcon />,
    name: "내정보",
    to: "/profile",
  },
];

const NavBar = () => {
  const { pathname } = useLocation();

  const renderNavBarItem = (links: Link[]) =>
    links.map((link) => <NavBarItem key={link.name} link={link} />);
  const memorizedLinks = useMemo(() => renderNavBarItem(links), []);

  if (pathname.includes("/auth")) return null;

  return (
    <>
      <nav className="w-full h-20 border border-white rounded-t-3xl shadow-2xl shadow-black flex justify-evenly items-center fixed bottom-0 left-0 list-none space-x-5">
        {memorizedLinks}
      </nav>
      <div className="w-full h-20" />
    </>
  );
};

const NavBarItem = ({ link }: { link: Link }) => {
  return (
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
  );
};

export default NavBar;
