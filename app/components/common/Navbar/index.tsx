import VAC from "./vac";
import { HomeIcon, HikingIcon, LogIcon, ProfileIcon } from "~/utils/icons";

export interface Link {
  icon: JSX.Element;
  name: string;
  to: string;
}

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
  const props = {
    links,
  };

  return <VAC {...props} />;
};

export default NavBar;
