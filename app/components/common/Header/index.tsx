import { useLocation } from "@remix-run/react";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname.includes("/home") || pathname.includes("/auth")) return null;

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-10 flex justify-center items-center font-bold text-2xl text-center ">
        <h1 className="">Header</h1>
      </header>
      <div className="w-full h-10" />
    </>
  );
};

export default Header;
