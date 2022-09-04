import styled from 'styled-components';

import { ReactComponent as ProfileIcon } from '../../assets/svgs/profile.svg';

interface Props {
  children: React.ReactNode;
}

const MyImage = ({ children }: Props) => {
  return (
    <Base>
      <ImageOutline>
        <ProfileIcon />
      </ImageOutline>
      {children}
    </Base>
  );
};

export default MyImage;

const Base = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.sb5};
  line-height: 2.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.625rem 0;
`;

const ImageOutline = styled.div`
  width: 5.25rem;
  height: 5.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-bottom: 0.688rem;
  fill: #fff;
  svg {
    width: 2.511rem;
    height: 2.875rem;
  }
`;
