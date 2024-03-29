import { Breadcrumb } from 'antd';
import type { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import Hiking from '../assets/svgs/hiking.svg';
import Home from '../assets/svgs/home.svg';
import MyLog from '../assets/svgs/mylog.svg';
import Profile from '../assets/svgs/profile.svg';

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

const icons = [
  <Home key="Home" />,
  <Hiking key="Hiking" />,
  <MyLog key="MyLog" />,
  <Profile key="Profile" />,
];

const Navbar = () => {
  return <StyledNavbar routes={routes} itemRender={NavbarItem} />;
};

function NavbarItem(
  route: Route,
  _: any,
  __: Route[],
  paths: string[]
): ReactNode {
  const { pathname } = useRouter();
  return (
    <Link href={route.path}>
      <StyledNavbarItem data-active={pathname === route.path ? true : false}>
        {icons[paths.length]}
        {route.breadcrumbName}
      </StyledNavbarItem>
    </Link>
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
    fill: ${({ theme: { colors } }) => colors.gray_light};
    display: flex;
    align-items: center;
    justify-content: space-around;
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
  &[data-active='true'] {
    color: ${({ theme: { colors } }) => colors.primary};
    fill: ${({ theme: { colors } }) => colors.primary};
  }
  color: ${({ theme: { colors } }) => colors.gray_light};
  fill: ${({ theme: { colors } }) => colors.gray_light};
  cursor: pointer;
  svg {
    width: 1.313rem;
    height: 1.25rem;
  }
`;
