import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Radio } from 'antd';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';
import Card from '~/components/card';

const Hiking: NextPageWithLayout<{}> = () => {
  const [sort, setSort] = useState('인기순');

  const menu = (
    <Menu
      onClick={(e) => setSort(e.key)}
      items={[
        {
          label: '인기순',
          key: '인기순',
        },
        {
          label: '추천순',
          key: '추천순',
        },
      ]}
    />
  );
  return (
    <div style={{ padding: '15px' }}>
      <HikingTop>
        <Radio.Group defaultValue={'all'} style={{ marginBottom: 8 }}>
          <Radio.Button value="all">전체</Radio.Button>
          <Radio.Button value="mark">즐겨찾기</Radio.Button>
        </Radio.Group>
        <Dropdown.Button icon={<DownOutlined />} overlay={menu}>
          {sort}
        </Dropdown.Button>
      </HikingTop>

      <HikingTop>
        <Card />
        <Card />
      </HikingTop>
      <HikingTop>
        <Card />
        <Card />
      </HikingTop>
      <HikingTop>
        <Card />
        <Card />
      </HikingTop>
    </div>
  );
};

Hiking.getLayout = function (page: ReactElement) {
  return <Layout title="등산로">{page}</Layout>;
};

export default Hiking;

const HikingTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
