import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

const Button = ({ onClick, children }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.m5};
  font-weight: 500;
  color: #fff;
  width: 100%;
  padding: 0.938rem 0;
  border-radius: 2.188rem;
`;
