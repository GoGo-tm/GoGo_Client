import { Breadcrumb } from 'antd';
import type { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import styled from 'styled-components';

import { ReactComponent as ListIcon } from '../../assets/svgs/hikingList.svg';
import { ReactComponent as MountainIcon } from '../../assets/svgs/mountain.svg';
import { ReactComponent as CameraIcon } from '../../assets/svgs/mylogCamera.svg';
import Divider from '../divider';
import NavLink from '../navlink';

const routes: Route[] = [
  { path: '/mylogs?tab=home', breadcrumbName: 'home' },
  { path: '/mylogs?tab=wrap', breadcrumbName: 'wrap' },
  { path: '/mylogs?tab=nowrap', breadcrumbName: 'nowrap' },
];

const icons = [<MountainIcon />, <CameraIcon />, <ListIcon />];

const Tab = () => {
  const { query } = useRouter();
  const isQueryTab = useMemo(
    () => (query.tab === 'nowrap' || query.tab === 'wrap' ? true : false),
    [query]
  );
  return (
    <Base $isQueryTab={isQueryTab}>
      <StyledTab routes={routes} itemRender={TabItem} />
      {isQueryTab && <Divider margin="0" dense="8" color="#F3F4F4" />}
    </Base>
  );
};

const TabItem = (route: Route, _: any, __: Route[], paths: string[]) => {
  return (
    <NavLink href={route.path}>
      <StyledTabItem>{icons[paths.length - 1]}</StyledTabItem>
    </NavLink>
  );
};

export default Tab;

const Base = styled.div<{ $isQueryTab: boolean }>`
  position: ${({ $isQueryTab }) => ($isQueryTab ? 'sticky' : 'absolute')};
  width: 100%;
  top: 0;
  background-color: #fff;
  z-index: 999;
`;

const StyledTab = styled(Breadcrumb)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  .ant-breadcrumb-separator {
    display: none;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
  }
  li:nth-child(1) div {
    border-radius: 1.156rem 0 0 1.156rem;
  }
  li:nth-child(3) div {
    border-radius: 0 1.156rem 1.156rem 0;
  }
`;

const StyledTabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.625rem 2.313rem;
  border: 0.044rem solid ${({ theme }) => theme.colors.gray_light};
  svg {
    width: 21px;
    height: 18px;
  }
  rect {
    stroke: ${({ theme: { colors } }) => colors.primary};
  }
  path {
    fill: ${({ theme: { colors } }) => colors.primary};
    stroke: ${({ theme: { colors } }) => colors.primary};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0.044rem solid ${({ theme }) => theme.colors.primary};
    rect {
      stroke: ${({ theme: { colors } }) => colors.white};
    }
    path {
      fill: ${({ theme: { colors } }) => colors.white};
      stroke: ${({ theme: { colors } }) => colors.white};
    }
  }
`;
