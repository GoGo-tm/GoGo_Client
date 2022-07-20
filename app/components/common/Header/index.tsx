import { useLocation } from "@remix-run/react";
import VAC from "./vac";

const Header = () => {
  const { pathname } = useLocation();

  return pathname !== "/home" && <VAC />;
};

export default Header;
