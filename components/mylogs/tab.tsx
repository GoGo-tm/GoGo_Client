import { Breadcrumb } from 'antd';
import type { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import styled from 'styled-components';

import { ReactComponent as ListIcon } from '../../assets/svgs/hikingList.svg';
import { ReactComponent as MountainIcon } from '../../assets/svgs/mountain.svg';
import { ReactComponent as CameraIcon } from '../../assets/svgs/mylogCamera.svg';
import NavLink from '../navlink';

const routes: Route[] = [
  { path: '/mylogs?tab=home', breadcrumbName: 'home' },
  { path: '/mylogs?tab=wrap', breadcrumbName: 'wrap' },
  { path: '/mylogs?tab=nowrap', breadcrumbName: 'nowrap' },
];

const icons = [<MountainIcon />, <CameraIcon />, <ListIcon />];

const Tab = () => {
  return <StyledTab routes={routes} itemRender={TabItem} />;
};

const TabItem = (route: Route, _: any, __: Route[], paths: string[]) => {
  return (
    <NavLink href={route.path}>
      <StyledTabItem>{icons[paths.length - 1]}</StyledTabItem>
    </NavLink>
  );
};

export default Tab;

const StyledTab = styled(Breadcrumb)`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1rem;
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
  border: 0.044rem solid ${({ theme }) => theme.colors.gray.light};
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
