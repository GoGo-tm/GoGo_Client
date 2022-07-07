import VAC from "./vac";

export interface Link {
  name: string;
  to: string;
}

const links: Link[] = [
  {
    name: "홈",
    to: "/",
  },
  {
    name: "등산로",
    to: "/rails",
  },
  {
    name: "등산로그",
    to: "/mylogs",
  },
  {
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
