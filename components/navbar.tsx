import Image from 'next/image';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import hiking from '~/svgs/hiking.svg';
import home from '~/svgs/home.svg';
import myLog from '~/svgs/mylog.svg';
import profile from '~/svgs/profile.svg';
import NavLink from './navlink';

interface Item {
  to: string;
  name: string;
  icon: string;
}

const items: Item[] = [
  { to: '/', name: '홈', icon: home },
  { to: '/hiking', name: '등산로', icon: hiking },
  { to: '/myLogs', name: '등산로그', icon: myLog },
  { to: '/profile', name: '내 정보', icon: profile },
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
        <StyledImage src={item.icon} alt={item.name} width={25} height={25} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 3.75rem;
  justify-content: space-evenly;
  font-size: ${({ theme: { fontSize } }) => fontSize.eb1};
  font-weight: 800;
  cursor: pointer;
`;

const StyledImage = styled(Image)``;
