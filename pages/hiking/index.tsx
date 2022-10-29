import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Radio, Tag } from 'antd';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '~/components/card';
import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';
import { HikingTrailDto } from '~/types/hikingTrails';

type Tag = '지역' | '난이도' | '구간거리' | '소요시간';

const { CheckableTag } = Tag;
const tagsData = ['지역', '난이도', '구간거리', '소요시간'];

const Hiking: NextPageWithLayout<{}> = () => {
  const [sort, setSort] = useState('인기순');
  const [selectedTags, setSelectedTags] = useState<Tag[]>(['지역']);
  const [cardList, setCardList] = useState<HikingTrailDto[]>();

  const handleChange = (tag: Tag, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

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

  useEffect(() => {
    (async () => {
      const response = await axios.get<{ contents: HikingTrailDto[] }>(
        '/server/api/hiking-trails'
      );
      setCardList(response.data?.contents);
    })();
  }, []);

  return (
    <div style={{ padding: '15px' }}>
      <HikingDetailSort>
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag as Tag) > -1}
            onChange={(checked) => handleChange(tag as Tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </HikingDetailSort>
      <HikingSort>
        <Radio.Group defaultValue={'all'} style={{ marginBottom: 8 }}>
          <Radio.Button value="all">전체</Radio.Button>
          <Radio.Button value="mark">즐겨찾기</Radio.Button>
        </Radio.Group>
        <Dropdown.Button icon={<DownOutlined />} overlay={menu}>
          {sort}
        </Dropdown.Button>
      </HikingSort>
      <CardWrapper>
        {cardList?.map((v) => (
          <Card
            key={v.id}
            title={v.name}
            km={v.length}
            level={v.difficulty}
            like={v.favoriteCount}
            location={v.address}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

Hiking.getLayout = function (page: ReactElement) {
  return <Layout title="등산로">{page}</Layout>;
};

export default Hiking;

const HikingSort = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;

const HikingDetailSort = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 15px;
  border-bottom: 2px solid #f3f4f4; ;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
