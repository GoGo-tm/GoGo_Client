import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  renderImage: () => React.ReactElement;
}

const Container = ({ renderImage, children }: Props) => {
  return (
    <ContainerBase>
      {renderImage()}
      <ContainerWrapper>{children}</ContainerWrapper>
    </ContainerBase>
  );
};

export default Container;

const ContainerBase = styled.div`
  position: relative;
`;

const ContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 999;
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
  top: 16rem;
  background-color: #fff;
`;
