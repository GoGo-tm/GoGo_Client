import React, { ReactElement, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import NavLink from './navlink';
import { ReactComponent as Home } from '../svgs/home.svg';
import { ReactComponent as Hiking } from '../svgs/hiking.svg';
import { ReactComponent as MyLog } from '../svgs/mylog.svg';
import { ReactComponent as Profile } from '../svgs/profile.svg';

interface Item {
  to: string;
  name: string;
  icon: ReactElement;
}

const items: Item[] = [
  { to: '/', name: '홈', icon: <Home /> },
  { to: '/hiking', name: '등산로', icon: <Hiking /> },
  { to: '/mylogs', name: '등산로그', icon: <MyLog /> },
  { to: '/profile', name: '내 정보', icon: <Profile /> },
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
        {item.icon}
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
  fill: ${({ theme: { colors } }) => colors.gray.light};
  .active {
    color: ${({ theme: { colors } }) => colors.primary};
    fill: ${({ theme: { colors } }) => colors.primary};
  }
`;

const StyledNavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${({ theme: { fontSize } }) => fontSize.eb1};
  font-weight: bolder;
  cursor: pointer;
  gap: 0.375rem;
  svg {
    width: 1.313rem;
    height: 1.25rem;
  }
`;
