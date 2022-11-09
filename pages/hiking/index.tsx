import { Dropdown, Menu, Radio, Tag } from 'antd';
import axios from 'axios';
import router from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '~/components/card';
import Layout from '~/components/layout';
import type { NextPageWithLayout } from '~/types/base';
import { HikingTrailDto } from '~/types/hikingTrails';

type Tag = '지역' | '난이도' | '구간거리' | '소요시간';
type OrderTag = '인기순' | '최신순';

const { CheckableTag } = Tag;
const tagsData = ['지역', '난이도', '구간거리', '소요시간'];

const Hiking: NextPageWithLayout<{}> = () => {
  const [sort, setSort] = useState<OrderTag>('인기순');
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
      onClick={(e) => setSort(e.key as OrderTag)}
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
        '/api/hikings'
      );
      setCardList(response.data?.contents);
    })();
  }, []);

  return (
    <div style={{ padding: '15px' }}>
      <HikingDetailSort>
        {tagsData.map((tag) => (
          <StyledCheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag as Tag) > -1}
            onChange={(checked) => handleChange(tag as Tag, checked)}
          >
            {tag}
          </StyledCheckableTag>
        ))}
      </HikingDetailSort>
      <HikingSort>
        <Radio.Group defaultValue={'all'} style={{ marginBottom: 8 }}>
          <Radio.Button value="all">전체</Radio.Button>
          <Radio.Button value="mark">즐겨찾기</Radio.Button>
        </Radio.Group>
        <div>
          <Dropdown.Button
            icon={
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.6286 0L5.27443 9L0 0H10.6286Z" fill="#898A8C" />
              </svg>
            }
            overlay={menu}
          >
            {sort}
          </Dropdown.Button>
        </div>
      </HikingSort>
      <CardWrapper>
        {cardList?.map((v) => (
          <Card
            key={v.id}
            title={v.name}
            km={v.length}
            level={v.difficulty}
            imageUrl={v.imageUrl}
            like={v.favoriteCount}
            // base64={v.base64}
            location={v.address}
            onClick={() =>
              router.push({
                pathname: `/hiking/${v.id}`,
                query: {
                  imageUrl: v.imageUrl,
                  name: v.name,
                  address: v.address,
                  difficulty: v.difficulty,
                  length: v.length,
                },
              })
            }
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

const StyledCheckableTag = styled(CheckableTag)`
  border-radius: 25px;
  padding: 6px 12px;
`;
