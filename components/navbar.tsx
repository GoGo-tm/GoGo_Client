import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import NavLink from './navlink';
import { ReactComponent as Home } from '../assets/svgs/home.svg';
import { ReactComponent as Hiking } from '../assets/svgs/hiking.svg';
import { ReactComponent as MyLog } from '../assets/svgs/mylog.svg';
import { ReactComponent as Profile } from '../assets/svgs/profile.svg';
import { Breadcrumb } from 'antd';
import type { Route } from 'antd/lib/breadcrumb/Breadcrumb';

export interface Item {
  path: string;
  breadcrumbName: string;
  icon: ReactElement;
  children?: Item[];
}

const routes: Route[] = [
  { path: '/', breadcrumbName: '홈' },
  { path: '/hiking', breadcrumbName: '등산로' },
  { path: '/mylogs', breadcrumbName: '등산로그' },
  { path: '/profile', breadcrumbName: '내 정보' },
];

const icons = [<Home />, <Hiking />, <MyLog />, <Profile />];

const Navbar = () => {
  return (
    <>
      <StyledNavbar routes={routes} itemRender={NavbarItem} />
      <Space />
    </>
  );
};

function NavbarItem(
  route: Route,
  _: any,
  __: Route[],
  paths: string[]
): ReactNode {
  return (
    <NavLink href={route.path}>
      <StyledNavbarItem>
        {icons[paths.length]}
        {route.breadcrumbName}
      </StyledNavbarItem>
    </NavLink>
  );
}

export default Navbar;

const StyledNavbar = styled(Breadcrumb)`
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
  ol {
    width: 100%;
    fill: ${({ theme: { colors } }) => colors.gray.light};
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .active {
    color: ${({ theme: { colors } }) => colors.primary};
    fill: ${({ theme: { colors } }) => colors.primary};
  }
  .ant-breadcrumb-separator {
    display: none;
  }
`;

const StyledNavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${({ theme: { fontSize } }) => fontSize.eb1};
  font-weight: bolder;
  height: 3.75rem;
  gap: 0.375rem;
  color: ${({ theme: { colors } }) => colors.gray.light};
  fill: ${({ theme: { colors } }) => colors.gray.light};
  cursor: pointer;
  svg {
    width: 1.313rem;
    height: 1.25rem;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 5.75rem;
`;
