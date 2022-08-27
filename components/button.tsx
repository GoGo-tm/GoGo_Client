import styled from 'styled-components';
import { ReactComponent as KakaoIcon } from '../assets/svgs/kakao.svg';
import { ReactComponent as NaverIcon } from '../assets/svgs/naver.svg';
import { ReactComponent as AppleIcon } from '../assets/svgs/apple.svg';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

export const Kakao = () => {
  return (
    <OAuthButton color="#FEEB00">
      <KakaoIcon />
      카카오로 로그인
    </OAuthButton>
  );
};

export const Naver = () => {
  return (
    <OAuthButton color="#1EC800" light>
      <NaverIcon />
      네이버로 로그인
    </OAuthButton>
  );
};

export const Apple = () => {
  return (
    <OAuthButton color="#000000" light>
      <AppleIcon />
      애플로 로그인
    </OAuthButton>
  );
};

const Button = ({ onClick, children }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.m5};
  cursor: pointer;
  font-weight: 500;
  color: #fff;
  width: 100%;
  padding: 0.938rem 0;
  border-radius: 2.188rem;
`;

const OAuthButton = styled.button<{ color?: string; light?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.875rem;
  outline: none;
  border: none;
  background-color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSize.m4};
  color: ${({ light }) => (light ? '#FFFFFF' : '#000')};
  font-weight: 400;
  width: 100%;
  padding: 0.938rem 0;
  border-radius: 2.188rem;
`;
