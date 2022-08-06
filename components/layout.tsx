import type { ReactNode } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
