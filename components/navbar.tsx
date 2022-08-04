import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import NavLink from "./navlink";
import home from "~/svgs/home.svg";
import Image from "next/image";
import hiking from "~/svgs/hiking.svg";
import mylog from "~/svgs/mylog.svg";
import profile from "~/svgs/profile.svg";

type Item = {
  to: string;
  name: string;
  icon: string;
};

const items: Item[] = [
  { to: "/", name: "홈", icon: home },
  { to: "/hikings", name: "등산로", icon: hiking },
  { to: "/mylogs", name: "등산로그", icon: mylog },
  { to: "/profile", name: "내 정보", icon: profile },
];

const Navbar = () => {
  const renderItems = useCallback(
    () => items.map((item) => <NavbarItem key={item.name} item={item} />),
    []
  );

  const memorizedItems = useMemo(() => renderItems(), [renderItems]);

  return <StyledNavbar>{memorizedItems}</StyledNavbar>;
};

const NavbarItem = React.memo(function NavbarItem({ item }: { item: Item }) {
  return (
    <NavLink href={item.to}>
      <StyledNavbarItem>
        {/* <StyledImage src={item.icon} alt={item.name} width={25} height={25} /> */}
        {item.name}
      </StyledNavbarItem>
    </NavLink>
  );
});

export default Navbar;

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 1.5rem 1.5rem 0 0;
  color: ${({ theme: { colors } }) => colors.gray.light};
  .active {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const StyledNavbarItem = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.eb1};
  font-weight: bolder;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 10px;
`;
