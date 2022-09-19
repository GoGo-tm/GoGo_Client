import { useMemo } from 'react';
import styled from 'styled-components';

import { ReactComponent as OutlineIcon } from '../../assets/svgs/starLine.svg';
import { ReactComponent as SolideIcon } from '../../assets/svgs/starSolid.svg';

interface Props {
  rate: number;
}

const Rate = ({ rate }: Props) => {
  const outline = useMemo(() => Math.abs(5 - rate), [rate]);

  return (
    <RateBase>
      {Array.from({ length: rate }, (_, i) => (
        <SolideIcon key={i} />
      ))}
      {Array.from({ length: outline }, (_, i) => (
        <OutlineIcon key={i} />
      ))}
    </RateBase>
  );
};

export default Rate;

const RateBase = styled.div`
  width: 100%;
  display: flex;
  gap: 0.188rem;
`;
