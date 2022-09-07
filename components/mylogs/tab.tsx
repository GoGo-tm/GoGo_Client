import { Breadcrumb } from 'antd';
import type { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import styled from 'styled-components';

import { ReactComponent as ListIcon } from '../../assets/svgs/hikingList.svg';
import { ReactComponent as MountainIcon } from '../../assets/svgs/mountain.svg';
import { ReactComponent as CameraIcon } from '../../assets/svgs/mylogCamera.svg';
import NavLink from '../navlink';

const routes: Route[] = [
  { path: '/mylogs', breadcrumbName: '인덱스' },
  { path: '/mylogs?tab=row', breadcrumbName: '로우' },
  { path: '/mylogs?tab=col', breadcrumbName: '컬럼' },
];

const icons = [<MountainIcon />, <CameraIcon />, <ListIcon />];

const Tab = () => {
  return <StyledTab routes={routes} itemRender={TabItem} />;
};

const TabItem = (route: Route, _: any, __: Route[], paths: string[]) => {
  return (
    <NavLink href={route.path}>
      <h1>{route.breadcrumbName}</h1>
    </NavLink>
  );
};

export default Tab;

const StyledTab = styled(Breadcrumb)`
  position: absolute;
  li:nth-child(odd) {
  }
`;
